import type { Locale } from "@/i18n/routing";
import type { ServicePage } from "./types";
import { servicesHub } from "./services-hub";
import { airportPages } from "./airport";
import { umrahIntercityPages } from "./umrah-intercity";
import { eventLuxuryChauffeurPages } from "./event-luxury-chauffeur";
import { batch2Pages } from "./batch2";
import { batch3Routes } from "./batch3-routes";
import { batch4 } from "./batch4-luxury-chauffeur";
import { batch5 } from "./batch5-events-groups-special";
import { batch6 } from "./batch6-cities-tourism";
import { batch7 } from "./batch7-more-cities";
import { batch8Riyadh } from "./batch8-riyadh";
import { batch9RiyadhCrossBorder } from "./batch9-riyadh-cross-border";
import { batch10RiyadhRoutes } from "./batch10-riyadh-routes";
import { batch11RiyadhRoutes } from "./batch11-riyadh-routes";
import { batch12GapRoutes } from "./batch12-gap-routes";
import { batch13EasternProvince } from "./batch13-eastern-province";
import { batch14OriginRoutes } from "./batch14-origin-routes";
import { batch15CitiesAirports } from "./batch15-cities-airports";
import { batch16ReverseAlulaRoutes } from "./batch16-reverse-alula-routes";
import { batch17JeddahRoutes, jeddahBacklinks } from "./batch17-jeddah-routes";
import { batch18Locations, locationBacklinks } from "./batch18-locations";
import { priorityRoutes } from "./priority-routes";
import { applyRoutePatches, priorityRoutesB } from "./priority-routes-b";
import { priorityRoutesC } from "./priority-routes-c";
import { priorityRoutesD } from "./priority-routes-d";
import { applyLinkBoosts } from "./link-boosts";
import { heavyHubAndCars } from "./heavy/hub-and-cars";
import { heavyRecovery } from "./heavy/recovery";
import { applyHeavyGrowth } from "./heavy/growth";
import { heavyTrailers } from "./heavy/trailers";
import { heavyMachines } from "./heavy/machines";
import { heavyCities } from "./heavy/cities";
import { applyCityEnrichments } from "./enrich-cities";
import { applyBatch2Enrichments } from "./enrich-batch2";
import { applyBatch3Enrichments } from "./enrich-batch3";
import { applyRouteEnrichments } from "./enrich-routes";
import { applyBatch4Enrichments } from "./enrich-batch4";
import { applyBatch5Enrichments } from "./enrich-batch5";
import { applyHeavyCityDistances } from "./heavy/city-distances";
import { consolidated, consolidationLinks, mergedSections } from "./consolidated";
import { linkTargets } from "./inline-links";
import { applyGscGrowth } from "./gsc-growth";
import { applyCompetitorGapFaqs } from "./competitor-gap";
import { linkSections } from "./auto-links";
import { madinahToRiyadh, applyMakkahMadinahGrowth } from "./makkah-madinah";
import { jeddahToAlBaha, alBahaToJeddah, applyJeddahCluster } from "./jeddah-cluster";
import { vehiclePages, vehicleRoutes } from "./vehicle-pages";
import { northWestAirportPages, applyNorthWestAirports } from "./airport-pages-nw";

export const pages: ServicePage[] = [servicesHub, ...airportPages, ...umrahIntercityPages, ...eventLuxuryChauffeurPages, ...batch2Pages, ...batch3Routes, ...batch4, ...batch5, ...batch6, ...batch7, ...batch8Riyadh, ...batch9RiyadhCrossBorder, ...batch10RiyadhRoutes, ...batch11RiyadhRoutes, ...batch12GapRoutes, ...batch13EasternProvince, ...batch14OriginRoutes, ...batch15CitiesAirports, ...batch16ReverseAlulaRoutes, ...priorityRoutes, ...priorityRoutesB, ...priorityRoutesC, ...priorityRoutesD, ...batch17JeddahRoutes, ...batch18Locations, ...heavyHubAndCars, ...heavyRecovery, ...heavyTrailers, ...heavyMachines, ...heavyCities, madinahToRiyadh, jeddahToAlBaha, alBahaToJeddah];

// Verified-fact upgrades for pages that stay in their original files (must run before FAQ scoping).
applyRoutePatches(pages);
applyCityEnrichments(pages);
applyBatch2Enrichments(pages);
applyBatch3Enrichments(pages);
applyRouteEnrichments(pages);
applyBatch4Enrichments(pages);
applyBatch5Enrichments(pages);
applyMakkahMadinahGrowth(pages);
applyJeddahCluster(pages);
applyHeavyCityDistances(pages);
applyHeavyGrowth(pages);

// Cross-link the Jeddah route cluster and new locations from existing hub, airport and neighbouring route pages.
for (const p of pages) if (jeddahBacklinks[p.path]) p.related.push(...jeddahBacklinks[p.path]);
for (const p of pages) if (locationBacklinks[p.path]) p.related.push(...locationBacklinks[p.path]);

applyLinkBoosts(pages);

// Consolidated pages (./consolidated.ts): drop them and point every link at their destination.
for (let i = pages.length - 1; i >= 0; i--) if (consolidated[pages[i].path]) pages.splice(i, 1);
for (const p of pages) p.related = p.related.map((r) => consolidated[r] ?? r);
for (const p of pages) if (consolidationLinks[p.path]) p.related.push(...consolidationLinks[p.path]);
for (const p of pages) if (mergedSections[p.path]) for (const l of ["en", "ar"] as Locale[]) p.copy[l].sections.push(mergedSections[p.path][l]);

// Search Console growth pass: runs after every other content patch, so it edits the final copy.
applyGscGrowth(pages);

// Competitor query-gap pass (./competitor-gap.ts): buyer questions rival route pages answer and ours did not.
applyCompetitorGapFaqs(pages);

// Vehicle pages (./vehicle-pages.ts): each route in a vehicle's table links back to that vehicle page.
pages.push(...vehiclePages, ...northWestAirportPages);
applyNorthWestAirports(pages);
for (const [vehicle, v] of Object.entries(vehicleRoutes))
  for (const r of v.routes) {
    const page = pages.find((p) => p.path === r.path);
    if (!page) throw new Error(`vehicleRoutes: unknown route ${r.path}`);
    if (!page.related.includes(vehicle)) page.related.push(vehicle);
  }

/**
 * SEO-RULES.md: no FAQ may appear verbatim on two pages. Generic questions that several pages
 * share are kept on the first page and scoped to the page's own service name everywhere else,
 * so every FAQ on the site is unique and self-explanatory when read in isolation (AI answers).
 */
function scopeDuplicateFaqs(list: ServicePage[]) {
  for (const l of ["en", "ar"] as Locale[]) {
    const seen = new Set<string>();
    for (const p of list) {
      const c = p.copy[l];
      c.faqs = c.faqs.map((f) => {
        if (!seen.has(f.q)) {
          seen.add(f.q);
          return f;
        }
        const q = `${f.q} (${c.nav})`;
        seen.add(q);
        return { ...f, q };
      });
    }
  }
}
scopeDuplicateFaqs(pages);

// A page never lists itself or the same related page twice (keeps cards and React keys unique).
for (const p of pages) p.related = [...new Set(p.related)].filter((r) => r !== p.path);

// Contextual links in body text (./auto-links.ts): only to pages already chosen as neighbours of this one.
for (const p of pages) {
  const targets = [...p.related, ...(p.parent && p.parent !== "services" ? [p.parent] : []), ...pages.filter((k) => k.parent === p.path).map((k) => k.path)];
  for (const l of ["en", "ar"] as Locale[]) p.copy[l].sections = linkSections(p.copy[l].sections, targets, p.path, l);
}

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
      for (const s of c.sections) for (const t of [...s.p, ...(s.list ?? [])].flatMap(linkTargets)) {
        if (t.startsWith("blog/")) continue; // guide links are checked in tests/blog-content.test.ts (the blog imports this registry)
        if (!byPath.has(t)) errors.push(`${p.path}/${l}: inline link to unknown page ${t}`);
        else if (t === p.path) errors.push(`${p.path}/${l}: inline link to itself`);
        else inbound.add(t);
      }
      for (const t of [c.answer, c.description, c.title, c.h1, ...c.faqs.flatMap((f) => [f.q, f.a])]) {
        if (linkTargets(t).length) errors.push(`${p.path}/${l}: link markup outside sections`);
      }
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
  for (const l of ["en", "ar"] as Locale[]) {
    const qs = new Map<string, string>();
    for (const p of pages) for (const f of p.copy[l].faqs) {
      if (qs.has(f.q)) errors.push(`${p.path}/${l}: duplicate FAQ "${f.q}" with ${qs.get(f.q)}`);
      qs.set(f.q, p.path);
    }
  }
  for (const p of pages) if (!inbound.has(p.path) && p.path !== "services") errors.push(`${p.path}: orphan`);
  if (errors.length) throw new Error("Content registry errors:\n" + errors.join("\n"));
}
