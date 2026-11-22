# Makkah & Madinah — implementation report

Date: 2026-11-23 · Branch `claude/ridesaudi-seo-growth-70eb32`, based on `vercel-repo/main` (9373fca). **Not committed and not deployed** (needs owner approval).

## 1. What changed

| Area | Change | Files |
|---|---|---|
| Inline contextual links | New `[anchor](services/…)` markup in section text, rendered as locale-aware links. Build-time validation of every target. React keys use the stripped text. | `src/components/RichText.tsx`, `src/content/inline-links.ts`, `src/components/ServicePageView.tsx`, `src/content/registry.ts` |
| Makkah hub (EN + AR) | New title, meta, H1 and answer; 9 sections (journeys, vehicles, JED and station arrivals, Haram access, hotel moves, families, peak seasons, entry rules, quotation); distance table; 6-item checklist; 9 FAQs; 13 in-text links | `src/content/makkah-madinah.ts` |
| Madinah hub (EN + AR) | Same depth, Madinah-specific; 7 sections, table, 9 FAQs, 11 in-text links | same |
| New page: Madinah to Riyadh (EN + AR) | 7 sections, route facts table, checklist, 7 FAQs; route prefill; Riyadh hero image | same, `route-prefill.ts`, `images.ts` |
| Madinah Airport | +3 sections, +2 FAQs, +4 related | same |
| Jeddah Airport to Makkah | +2 sections, +1 FAQ, +3 related | same |
| Riyadh to Madinah | FAQ now points to the reverse page; +2 related | same |
| Link gaps | City hubs added to makkah-to-madinah, umrah hub, both ziyarat pages, madinah-to-alula; madinah-to-riyadh added to makkah-to-riyadh | same |
| Arabic wording | "نقل خاص" → "توصيل خاص" in the Umrah hub title and H1 and the two ziyarat H1s | same |
| Clean-up | Old Makkah/Madinah enrichment blocks removed (their content is folded into the new hubs) | `enrich-cities.ts`, comment in `batch6-cities-tourism.ts` |
| Docs | 7 reports in `docs/seo/` | this folder |

## 2. Facts published and their sources

- **Google Maps, checked 2026-11-23:**
  - MED → Prophet's Mosque: 20.7 km, about 25 minutes.
  - Prophet's Mosque → KAFD Riyadh: 823 km, 7 h 50 min via Route 60 and Route 65 (alternative 865 km).
  - Prophet's Mosque → RUH: about 7 h 45 min.
- **Already published and sourced in the repo:**
  - JED → Haram 98 km; central Jeddah → Haram 88 km.
  - Makkah station in al-Rusaifa, about 3 km from the Haram; Madinah station in Knowledge Economic City, about 7 km from the Prophet's Mosque.
  - Makkah → Madinah 436 km; Haram → Taif 89 km; Haram → Riyadh 871 km; Madinah → JED 399 km; AlUla → Madinah 337 km; Riyadh → Buraydah 350 km.
- **Vehicles:** only owner-confirmed categories. Capacity is stated only for the Staria (7 passengers, 10+ bags). No vans other than the Staria.
- **Policies:** only owner-confirmed ones (cancellation 24 h before pickup; payment link, STC Pay or cash).
- **Not claimed:** prices, 24/7 availability, waiting time, flight tracking, reply time, reviews, licences, fleet ownership.

## 3. Verification

- Indexability audit: 354 URLs, every bucket 0.
- `tsc`, ESLint and `next build` pass. `vitest`: 34/44 pass; the 10 failures are database tests that need `DATABASE_URL`, which is not set in this worktree (unrelated to this change).
- Rendered checks on every changed page: title, H1, canonical, JSON-LD, inline-link locale, similarity (see the technical audit §2).
- Form: unchanged (`EnquiryForm` → `/api/enquiry/`, fixed and live-tested 2026-11-23). The new route page pre-fills "Madinah → Riyadh".

## 4. Owner input needed

1. **Approval to commit and deploy** (push to `vercel-repo` `main`).
2. After deploy, in Search Console:
   - submit `/sitemap.xml`;
   - use URL Inspection → Request indexing for `/en/` and `/ar/` of `city-transport/makkah`, `city-transport/madinah`, `intercity-transfers/madinah-to-riyadh`, `airport-transfers/madinah-airport` and `umrah-transport/jeddah-airport-to-makkah`.
3. A GSC export (last 3 months, queries + pages) about 4 weeks after deploy.
4. GMC Yukon and sedan seat and luggage figures, plus real vehicle photos. These unlock a GMC vehicle page.
5. Haramain station meet-and-greet practice (meeting point, waiting time). This unlocks station pages.
6. Whether to publish starting prices, and whether "ليموزين" fits the brand.
7. A GA4 measurement ID in Vercel, so quote, WhatsApp and phone events are recorded. Confirmed rides should be counted from the CRM, not from clicks.

## 5. About the 10-rides-per-day target

This pass improves the pages that serve the highest-intent Makkah and Madinah searches. It does not guarantee rankings or rides. Progress should be read from:
- GSC impressions and positions for the mapped keywords;
- quote submissions per page (CRM `inquiries` table plus GA4 events once configured);
- confirmed rides recorded in the CRM.
