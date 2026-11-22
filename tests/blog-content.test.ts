import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { blogPosts, relatedPosts } from "../src/content/blog/posts";
import { blogHubs } from "../src/content/blog/hubs";
import { getPage, pages } from "../src/content/registry";
import { HEAVY_SERVICES } from "../src/lib/heavy-quote";

const locales = ["en", "ar"] as const;
const SUFFIX = " | RideSaudi";

describe("blog guides and hubs", () => {
  it("every guide links only to existing pages, at least 3 of them", () => {
    for (const p of blogPosts) {
      expect(p.links.length, p.slug).toBeGreaterThanOrEqual(3);
      for (const l of p.links) expect(getPage(l), `${p.slug} -> ${l}`).toBeDefined();
    }
    for (const h of blogHubs) for (const l of h.links) expect(getPage(l), `${h.slug} -> ${l}`).toBeDefined();
  });

  it("slugs are unique and do not collide with hubs", () => {
    const slugs = [...blogPosts.map((p) => p.slug), ...blogHubs.map((h) => h.slug)];
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("related guides exist and are capped", () => {
    for (const p of blogPosts) {
      for (const r of p.related ?? []) expect(blogPosts.some((b) => b.slug === r), `${p.slug} related ${r}`).toBe(true);
      expect(relatedPosts(p).length).toBeLessThanOrEqual(6);
    }
  });

  it("every guide belongs to a hub, so none is orphaned", () => {
    for (const p of blogPosts) expect(blogHubs.some((h) => h.slug === p.cluster), p.slug).toBe(true);
  });

  it("titles fit in 60 characters with the brand suffix and are unique site-wide", () => {
    for (const l of locales) {
      const seen = new Map<string, string>();
      for (const pg of pages) seen.set(`t|${pg.copy[l].title}`, pg.path).set(`d|${pg.copy[l].description}`, pg.path).set(`h|${pg.copy[l].h1}`, pg.path);
      const all = [...blogPosts.map((p) => ({ id: p.slug, c: p.copy[l], isNew: p.published === "2026-11-23" })), ...blogHubs.map((h) => ({ id: h.slug, c: h.copy[l], isNew: true }))];
      for (const { id, c, isNew } of all) {
        if (isNew) {
          expect((c.title + SUFFIX).length, `${id}/${l} title "${c.title}"`).toBeLessThanOrEqual(60);
          expect(c.description.length, `${id}/${l} description`).toBeLessThanOrEqual(165);
          expect(c.description.length, `${id}/${l} description`).toBeGreaterThanOrEqual(110);
          expect(c.faqs.length, `${id}/${l} faqs`).toBeGreaterThanOrEqual(4);
        }
        for (const [k, v] of [["t", c.title], ["d", c.description], ["h", c.h1]] as const) {
          const key = `${k}|${v}`;
          expect(seen.has(key), `${id}/${l} duplicate ${k} with ${seen.get(key)}`).toBe(false);
          seen.set(key, id);
        }
      }
    }
  });

  it("Arabic copy is present and Arabic answers contain no English sentences", () => {
    for (const p of blogPosts.filter((b) => b.published === "2026-11-23")) {
      const ar = p.copy.ar;
      expect(ar.sections.length).toBe(p.copy.en.sections.length);
      expect(/[A-Za-z]{4,}/.test(ar.answer.replace(/RideSaudi/g, "")), `${p.slug} ar answer`).toBe(false);
    }
  });

  it("hero images exist on disk and heavy guides preselect a valid heavy service", () => {
    for (const p of blogPosts) {
      if (p.hero) expect(existsSync(resolve(__dirname, "../public", p.hero.src.slice(1))), `${p.slug} ${p.hero.src}`).toBe(true);
      if (p.cluster === "towing-heavy-transport") expect(HEAVY_SERVICES as readonly string[]).toContain(p.heavyService);
    }
    for (const h of blogHubs) expect(existsSync(resolve(__dirname, "../public", h.hero.src.slice(1)))).toBe(true);
  });

  it("no guide claims prices or owned fleet", () => {
    const banned = [/\bSAR\s?\d/i, /\bour fleet\b/i, /\bour (tow )?trucks\b/i, /\b24\/7\b/, /\bguarantee(d)? (arrival|time)\b/i, /ريال/];
    for (const p of blogPosts.filter((b) => b.published === "2026-11-23")) {
      const text = JSON.stringify(p.copy);
      for (const b of banned) expect(b.test(text), `${p.slug} matches ${b}`).toBe(false);
    }
  });
});
