import { describe, expect, it } from "vitest";
import { guideForm, guidePrefill, locationPrefill, pagePrefill } from "../src/content/location-prefill";
import { getPage, pages } from "../src/content/registry";
import { blogPosts } from "../src/content/blog/posts";
import { formServiceKeys } from "../src/lib/site";

describe("location form pre-fill", () => {
  it("only targets pages that exist", () => {
    for (const path of Object.keys(locationPrefill)) expect(getPage(path), path).toBeDefined();
    for (const slug of Object.keys(guideForm)) expect(blogPosts.some((p) => p.slug === slug), slug).toBe(true);
  });

  it("uses valid enquiry services on guides", () => {
    for (const [slug, g] of Object.entries(guideForm)) expect(formServiceKeys as readonly string[], slug).toContain(g.service);
  });

  it("covers every city, airport, cross-border and heavy city page", () => {
    const want = pages.filter((p) =>
      /^services\/(city-transport|airport-transfers|cross-border-transfers)\/[a-z-]+$/.test(p.path) ||
      /^services\/recovery-heavy-transport\/(satha-car-recovery|heavy-equipment-transport)\/[a-z]+$/.test(p.path),
    );
    const generic = new Set(["services/airport-transfers/private-airport-pickup", "services/airport-transfers/airport-to-hotel", "services/airport-transfers/vip-airport-transfer", "services/airport-transfers/family-airport-transfer"]);
    for (const p of want) if (!generic.has(p.path)) expect(pagePrefill(p.path, "en"), p.path).toBeDefined();
  });

  it("fills Arabic with Arabic text", () => {
    for (const [path, v] of Object.entries(locationPrefill)) expect(/[A-Za-z]/.test(v.pickup.ar + v.dropoff.ar), path).toBe(false);
    expect(guidePrefill("riyadh-to-jeddah-by-road-guide", "ar").prefill).toEqual({ pickup: "الرياض", dropoff: "جدة" });
  });
});
