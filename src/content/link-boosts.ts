import type { ServicePage } from "./types";

/**
 * Indexability rule (SEO-RULES.md 7A): every indexable page needs at least 3 contextual internal links from
 * other pages' main content. These pages fell short in the 2026-11-18 audit, so each one is added to the
 * `related` list of topically close pages. Keys are the linking (source) pages; values are the pages they add.
 * Applied before validation, so a mistyped path still fails the build.
 */
const S = "services";
const E = `${S}/event-transportation`;
const L = "luxury-transportation";
const SP = `${S}/special-transportation`;
const C = `${S}/city-transport`;
const A = `${S}/airport-transfers`;
const G = `${S}/group-transportation`;
const T = `${S}/tourism-transport`;
const I = `${S}/intercity-transfers`;

export const linkBoosts: Record<string, string[]> = {
  [`${E}/riyadh`]: [`${E}/wedding-transport`, `${E}/vip-event-chauffeur`],
  [`${E}/jeddah`]: [`${E}/wedding-transport`],
  [`${L}/luxury-event-transport`]: [`${E}/wedding-transport`, `${E}/vip-event-chauffeur`],
  [`${A}/vip-airport-transfer`]: [`${L}/luxury-airport-transfers`],
  [`${A}/riyadh-airport`]: [`${L}/luxury-airport-transfers`],
  [`${E}/vip-event-chauffeur`]: [`${L}/luxury-event-transport`],
  [`${E}/wedding-transport`]: [`${L}/luxury-event-transport`],
  [`${C}/dammam`]: [`${E}/dammam`],
  [`${C}/al-khobar`]: [`${E}/dammam`],
  [`${L}/luxury-chauffeur`]: [`${E}/vip-event-chauffeur`],
  [`${A}/family-airport-transfer`]: [`${G}/group-airport-transfers`],
  [`${G}/van-and-minibus`]: [`${G}/group-airport-transfers`],
  [`${A}/airport-to-hotel`]: [`${SP}/hotel-transportation`],
  [`${C}/makkah`]: [`${SP}/hotel-transportation`],
  [`${C}/jeddah`]: [`${SP}/cruise-port-transfers`],
  [`${SP}/hotel-transportation`]: [`${SP}/cruise-port-transfers`, `${SP}/travel-agency-transport`],
  [`${SP}/travel-agency-transport`]: [`${SP}/cruise-port-transfers`],
  [G]: [`${SP}/travel-agency-transport`],
  [`${I}/riyadh-to-tabuk`]: [`${C}/tabuk`],
  [`${T}/alula`]: [`${C}/tabuk`],
  [`${S}/chauffeur-services`]: [`${T}/private-sightseeing-driver`],
  [`${C}/riyadh`]: [`${T}/private-sightseeing-driver`],
  [`${C}/abha`]: [`${C}/najran`, `${C}/jazan`],
  [`${C}/jazan`]: [`${C}/najran`],
  [`${C}/najran`]: [`${C}/jazan`],
  [`${S}/cross-border-transfers/kuwait`]: [`${C}/hafar-al-batin`],
  [`${I}/riyadh-to-hafar-al-batin`]: [`${C}/hafar-al-batin`],
};

export function applyLinkBoosts(pages: ServicePage[]) {
  const byPath = new Map(pages.map((p) => [p.path, p]));
  for (const [source, targets] of Object.entries(linkBoosts)) {
    const page = byPath.get(source);
    if (!page) throw new Error(`linkBoosts: unknown source page ${source}`);
    for (const t of targets) {
      if (!byPath.has(t)) throw new Error(`linkBoosts: unknown target page ${t}`);
      if (t !== source && !page.related.includes(t)) page.related.push(t);
    }
  }
}
