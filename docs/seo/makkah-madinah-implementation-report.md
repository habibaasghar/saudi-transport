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

---

## Pass 2 — 2026-11-23 (later the same day)

The owner pasted the same master brief again after pass 1 went live (a394199). Pass 1 had already covered every phase. There are no new GSC exports (the newest are from 2026-11-18), so the keyword map, competitor gap and roadmap stand. Re-ranking them needs fresh data, not a rewrite. Pass 2 fixes only what changed or stayed open since pass 1.

### What changed

| Area | Change | Files |
|---|---|---|
| Guide ↔ hub links | The Umrah transport-plan guide (added after pass 1) now links to the Makkah hub, the Madinah hub, Madinah → Makkah, Makkah → Jeddah and the Madinah airport page. Because each service page lists the guides that cite it, the guide now also appears on all five pages. | `src/content/blog/transfer-guides-a.ts` |
| Guide ↔ hub links | The "Makkah to Madinah: train, bus or private car" guide now cites the Makkah hub, so it appears there too (before, it appeared only on the Madinah hub). | `src/content/blog/makkah-madinah-options.ts` |
| Arabic wording | 48 uses of "نقل خاص" (also a licence-plate / commercial-vehicle term; Phase 1 research) changed to "توصيل خاص" in Arabic titles, H1s, nav labels, meta descriptions, answers and summaries on 25 pages. Among them: Makkah and Madinah ziyarat, family and group Umrah, the city-transport hub, AlUla, family transport, events, hotel, business and senior travel. The feminine "خاصة" and "تنقل خاص" were left alone. | `batch2.ts`, `batch4-luxury-chauffeur.ts`, `batch5-events-groups-special.ts`, `batch6-cities-tourism.ts`, `event-luxury-chauffeur.ts`, `umrah-intercity.ts` |
| Sitemap lastmod | `updated` set to 2026-11-23 on the 25 pages whose Arabic copy changed | same files |

### Checked and found already complete (no change)

- **Quote form:** it already collects every field the brief lists: pickup, drop-off, date, time, passengers, luggage, vehicle (with "other"), one-way or return, return date and time, and contact details. It also sends GA4 events (`quote_form_submit`, `quote_form_success`, `generate_lead`), and WhatsApp/phone tracking is unchanged. Events record only once a GA4 ID is set in Vercel.
- **Hubs, route pages, schema, hreflang:** unchanged since pass 1 and re-verified by the audit.

### Verification

- `tsc` and ESLint pass. `next build` passes.
- `vitest`: 46/56 pass. The 10 failures are the database tests that need `DATABASE_URL`, which is not set in the worktree.
- Indexability audit on the local production build: **398 URLs, every bucket 0**.
- Rendered checks:
  - The Umrah plan guide is listed on `/en/` and `/ar/` `city-transport/makkah`, `city-transport/madinah`, `madinah-to-makkah`, `makkah-to-jeddah` and `airport-transfers/madinah-airport`.
  - The Arabic titles and H1s of family transport, AlUla, Makkah ziyarat, city transport and the Umrah hub render with "توصيل خاص".

### Still waiting on the owner (unchanged from §4)

- GMC Yukon and sedan seats and luggage, and real photos.
- Station meeting practice.
- Prices and the "ليموزين" decision.
- GA4 ID.
- A GSC export about 4 weeks after deploy, used to re-rank the roadmap.
