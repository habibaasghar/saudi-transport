import type { Locale } from "@/i18n/routing";
import type { ServicePage } from "./types";
import { servicesHub } from "./services-hub";
import { airportPages } from "./airport";
import { umrahIntercityPages } from "./umrah-intercity";
import { eventLuxuryChauffeurPages } from "./event-luxury-chauffeur";

export const pages: ServicePage[] = [servicesHub, ...airportPages, ...umrahIntercityPages, ...eventLuxuryChauffeurPages];

const byPath = new Map(pages.map((p) => [p.path, p]));

export const getPage = (path: string) => byPath.get(path);
export const childrenOf = (path: string) => pages.filter((p) => p.parent === path);

/** Breadcrumb trail ending at (and including) the page. Home is added by the template. */
export function trail(page: ServicePage): ServicePage[] {
  const out: ServicePage[] = [];
  let cur: ServicePage | undefined = page;
  while (cur) {
    out.unshift(cur);
    cur = cur.parent ? byPath.get(cur.parent) : undefined;
  }
  return out;
}

/**
 * Build-time integrity checks (SEO-RULES.md): fail loudly rather than ship broken links,
 * duplicate titles/descriptions/H1s, missing Arabic, or orphan pages.
 */
export function validateRegistry() {
  const errors: string[] = [];
  const seen = new Map<string, string>();
  const inbound = new Set<string>();
  for (const p of pages) {
    if (p.parent) {
      if (!byPath.has(p.parent)) errors.push(`${p.path}: unknown parent ${p.parent}`);
      inbound.add(p.path);
    }
    for (const r of p.related) {
      if (!byPath.has(r)) errors.push(`${p.path}: unknown related ${r}`);
      inbound.add(r);
    }
    for (const l of ["en", "ar"] as Locale[]) {
      const c = p.copy[l];
      if (!c) {
        errors.push(`${p.path}: missing ${l}`);
        continue;
      }
      if (c.faqs.length < 4) errors.push(`${p.path}/${l}: fewer than 4 FAQs`);
      if (c.description.length > 175) errors.push(`${p.path}/${l}: description too long (${c.description.length})`);
      if (l === "ar" && /[A-Za-z]{4,}/.test(c.answer.replace(/RideSaudi|Umrah|Ihram/g, ""))) {
        errors.push(`${p.path}/ar: Latin text in Arabic answer`);
      }
      for (const [k, v] of [["title", c.title], ["description", c.description], ["h1", c.h1]] as const) {
        const key = `${l}|${k}|${v}`;
        if (seen.has(key)) errors.push(`${p.path}/${l}: duplicate ${k} with ${seen.get(key)}`);
        seen.set(key, p.path);
      }
    }
  }
  for (const p of pages) if (!inbound.has(p.path) && p.path !== "services") errors.push(`${p.path}: orphan`);
  if (errors.length) throw new Error("Content registry errors:\n" + errors.join("\n"));
}
