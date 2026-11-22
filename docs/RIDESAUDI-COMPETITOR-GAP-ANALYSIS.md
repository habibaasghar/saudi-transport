# RideSaudi — Competitor & Keyword Gap Analysis

Date: 2026-11-22

## 1. Data available and missing

| Data | Status |
|---|---|
| Ahrefs (keyword volume, KD, competitor rankings, backlinks) | **Not available.** No Ahrefs login or export was provided; the folder `ahref reports/` contains Search Console exports only. |
| Google Search Console | Two exports (Coverage drilldown 2026-11-22; Performance 24 h and 28 days). Under 50 impressions total — too little for keyword gap work. |
| GA4 | Not installed on the live site (`NEXT_PUBLIC_GA_ID` not set). |
| Live SERP checks | Earlier sessions (Phase 1, 2026-11-15) observed SERPs through Google Autocomplete and US-located searches. Results are in `docs/phase1/COMPETITOR_INTELLIGENCE.md` and `docs/phase1/KEYWORD_MASTER.csv`. |

**No competitor traffic, ranking position, keyword volume, difficulty or backlink figure appears in this document, because none was measured.** Every statement below is qualitative and comes from pages reviewed in Phase 1.

## 2. Competitors observed for private-transfer searches (Phase 1)

Direct Saudi operators: Taxi Service KSA, Hire My Chauffeur, Arabian Elite Chauffeurs. Global platforms: Blacklane, Daytrip, OneClickDrive. Umrah/activity resellers: HalalBooking, Pelago, Rayna Tours, Marriott Activities. Local directory-listed firms (not verified).

## 3. Gap table (what they do vs RideSaudi today)

| Element | Competitors (qualitative) | RideSaudi now | Gap / action | Priority |
|---|---|---|---|---|
| Route coverage | Largest direct competitor 60+ route pages | 59 route pages (EN+AR each) | Coverage parity reached. Stop adding routes until existing ones are indexed. | — |
| Arabic route pages | Only one direct competitor has them | Every page has a native Arabic twin | RideSaudi advantage; protect it (Arabic keyword use, see keyword map) | — |
| Distance / time / road named | Most show distance and time; few name the road | Priority routes show verified distance/time and road; secondary Riyadh→X routes thinner | Enrich the 13 class-2 pages with verified road and stop detail | Medium |
| Vehicles with seats and bags | Most competitors publish seat/bag counts | Only Hyundai Staria (7 pax, 10+ bags) is owner-confirmed | **Owner**: confirm sedan and GMC Yukon seat/bag counts so they can be published | High |
| Prices | Several show "from" prices | None (no approved prices) | Owner decision; never publish unapproved prices | Owner |
| "Private, not shared" | The strongest competitor says it prominently | Now in the home hero (EN+AR) and on route pages | Done | — |
| Reviews / ratings | Badges, unattributed ratings, Trustpilot counts | None (correct — none exist yet) | Collect genuine reviews after real trips (Google Business Profile if eligible). Do not invent. | Medium |
| Backlinks / brand signals | Established brands have years of links | Effectively none | Main reason Google is slow to crawl. See GSC action plan "Off-site signals". | Critical |
| Booking | Instant booking on global platforms | Enquiry form + WhatsApp | Enquiry model is the business model; make it reliable (lead API is currently failing, see conversion audit) | Critical |

## 4. Keyword gaps (qualitative)

From `KEYWORD_MASTER.csv` (Autocomplete evidence) and the 28-day GSC queries:
- **Airport-transfer head terms** ("airport transfers saudi arabia") are the only queries already producing impressions, but Google answers with the old root URL. Getting `/en/services/airport-transfers/` crawled is the fastest available win.
- **Arabic route terms** use "توصيل", "سيارات توصيل", "شركة توصيل", "حجز سيارة" + city pair. Route titles already follow "توصيل من X إلى Y".
- **Vehicle + route** ("GMC Makkah to Madinah", "جمس من مكة الى المدينة") — demand is attached to routes, not to stand-alone vehicle pages. Keep vehicle names on the top route pages; no new vehicle pages until specs are confirmed.
- **Comparison intent** ("train vs car Makkah Madinah") is covered by existing guides that link to the route pages.

## 5. What to re-run once data exists

When an Ahrefs export (Organic keywords + Top pages for the competitors above, and Keywords Explorer for the keyword-map terms in EN and AR) is supplied, fill the `Search volume / KD` column of `RIDESAUDI-KEYWORD-TO-URL-MAP.csv` and re-rank class-1 pages by measured demand.
