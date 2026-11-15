# Phase 1 Executive Summary — RideSaudi SEO, Market and Route Research

Date: 2026-11-15. Research and strategy only: no website file, branch or deployment was touched.

## How to read this

There was no access to Search Console, Keyword Planner, Ahrefs or Semrush. **No search volume, difficulty, ranking or traffic number appears anywhere in Phase 1.** Demand is judged from Google Autocomplete for Saudi Arabia (1,113 phrases collected; 74 routes tested with six phrasings each), 13 competitor pages read in full, and road distances computed with a routing engine. Route scores (out of 100) are a ranking aid built on those proxies, not a forecast.

## 1. Top 10 commercially valuable routes

Scored on search evidence (25), commercial intent (25), business relevance (20), competitive opportunity (15), unique content potential (10), operational confidence (5).

| # | City pair | Score (each direction) | Live pages |
|---|---|---|---|
| 1 | Makkah and Madinah | 92 / 92 | both directions |
| 2 | Jeddah and Madinah | 88 / 86 | Jeddah to Madinah only |
| 3 | Riyadh and Dammam | 85 / 88 | both directions |
| 4 | Jeddah and Makkah, including the airport | 82 / 80 | Jeddah to Makkah only |
| 5 | Riyadh and Jeddah | 79 / 80 | both directions |
| 6 | Riyadh and Makkah | 76 / 72 | Riyadh to Makkah only |
| 7 | Riyadh and Bahrain | 74 | one page (titled "Manama") |
| 8 | Riyadh and Kuwait | 73 | one page |
| 9 | Makkah and Taif | 72 / 72 | both directions |
| 10 | Jeddah and Taif | 70 / 68 | Jeddah to Taif only |

Riyadh to Dubai also scores 70. Cross-border routes (7, 8 and Dubai) depend on the owner confirming that a vehicle really crosses the border.

The pilgrimage and airport corridors carry far more search variety than the long desert routes. Most of the 39 live pages are Riyadh-origin long-haul routes; 20 of 39 start in Riyadh.

## 2. Existing pages that need attention first

Status across the 39 routes: 28 IMPROVE, 6 KEEP, 3 REPOSITION, 1 CONSOLIDATE, 1 HOLD. Full detail in `EXISTING_39_ROUTE_AUDIT.csv`.

| Priority | Page | Problem |
|---|---|---|
| 1 | `makkah-to-madinah` | Highest-scoring route; no distance or time; uses "taxi" in the body |
| 2 | `riyadh-to-dammam` | 274 words; no distance, time or road; overlaps with the Al Khobar page |
| 3 | `jeddah-to-makkah` | Title starts with "Taxi"; 308 words; overlaps with the Jeddah Airport to Makkah page |
| 4 | `jeddah-to-madinah` | Title starts with "Taxi"; 289 words; no facts |
| 5 | `riyadh-to-jeddah` | 317 words; no facts (the reverse page has them) |
| 6 | `riyadh-to-makkah` | No distance, time or road |
| 7 | `riyadh-to-manama` | Searchers say "Riyadh to Bahrain" |
| 8 | `makkah-to-taif`, `taif-to-makkah`, `jeddah-to-taif` | No distance or time |

Across all 39: none names a road, 38 never say the vehicle is exclusively for the customer's party, 25 give no distance, 32 name no vehicle, 22 Arabic titles lack "توصيل".

Distance figures to re-check: Dammam to Doha (page says 410 km, routing engine 335 km), Riyadh to Dubai (1,200 vs 1,054 km; a competitor states about 990 km), Dammam to Jubail (100 vs 87 km). Dammam to Bahrain shows 25 km, which is the causeway length rather than the city-to-city distance (about 75 km).

Keep as they are, with small additions: `madinah-to-makkah`, `dammam-to-riyadh`, `jeddah-to-riyadh`, `riyadh-to-doha`, `dammam-to-dubai`, `alula-to-riyadh`.
Hold: `alula-to-dammam` (no search evidence, no competitor page).

## 3. New routes worth developing

| Class | Routes |
|---|---|
| **P1** | Madinah to Jeddah (86); Makkah to Jeddah, as one page that also covers Jeddah Airport (80); Makkah to Riyadh (72); Taif to Jeddah (68) |
| **P2** | Madinah to Riyadh, Al Ahsa to Riyadh, AlUla to Madinah, Yanbu to Jeddah, Jeddah to Dammam, Dammam to Jeddah, Dammam to Makkah, AlUla to Jeddah, Jeddah to Abha |
| **Hold** | Dammam to Kuwait (74, cross-border verification); Al Khobar to Riyadh (decide the Eastern Province page model first); Jeddah Airport to Madinah (let the existing page absorb it first) |
| **Reject** | Dammam to Al Khobar (34 km urban hop); Al Khobar to Bahrain (already covered by the Dammam page); Riyadh to Jazan |

Drafts for Madinah to Jeddah and Taif to Jeddah already exist on the unmerged Jeddah branch.

## 4. Keywords with the strongest observed commercial opportunity

Observed in Saudi autocomplete (not measured for volume):

- **English:** "makkah to madinah private car with driver", "makkah to madinah gmc", "book gmc from makkah to madinah", "jeddah to makkah private transfer", "jeddah airport to makkah gmc", "riyadh to dammam private car", "car service riyadh to dammam", "private chauffeur riyadh", "car with driver riyadh", "chauffeur service jeddah".
- **Arabic:** "توصيل من الرياض الى الدمام", "سيارات توصيل من المدينة الى مكة", "شركة توصيل من الدمام الى البحرين", "سيارة خاصة من جدة الى مكة", "تأجير سيارة مع سائق بالرياض", "ليموزين الرياض الدمام", "سيارات VIP للسفر بين المدن", "مشاوير خاصة".

Three findings change the plan:
1. GMC and Staria demand is attached to routes ("makkah to madinah gmc"), not to "GMC with driver" phrases, which show no chauffeur intent.
2. Arabic searchers say "توصيل", "ليموزين" and "مشاوير"; "نقل خاص" mostly means a licence-plate category and "سائق خاص" mostly means household drivers and jobs.
3. Price is the most common modifier on every route.

## 5. Biggest competitive threats

1. **Taxi Service KSA**: 60+ routes, English and Arabic, prices, deepest content, states "private transfers only".
2. **Blacklane**: global brand, 12 Saudi city-to-city pages, instant booking; thin and generic content.
3. **Hire My Chauffeur and Arabian Elite Chauffeurs**: premium positioning with price ranges, route facts and vehicle pages; English only.
4. **Daytrip and activity marketplaces**: large review counts on tourist queries.

CORSA Saudi could not be found; its URL is needed.

## 6. How RideSaudi should differentiate

- **Private, never shared**, stated on every page. Only one competitor says it clearly.
- **Premium without "taxi"** in titles, while still answering taxi and price questions in the body.
- **Accurate, sourced route facts**: competitors contradict themselves or publish impossible drive times.
- **Arabic of real quality** on every route; premium rivals have none.
- **Honest cross-border and vehicle information** instead of blanket claims.
- **Vehicle-led**: GMC Yukon and family van sections on the pilgrimage routes where people search for them.

## 7. Fleet claims that need owner verification

Vehicle types Sedan, GMC Yukon and Hyundai Staria are owner-confirmed; their models, seats and luggage are not. Lexus, Suburban, Tahoe and Land Cruiser appear only in the brief. S-Class, Sprinter, Camry and a coach appear only on an unmerged branch, with seat numbers nobody has confirmed. See `FLEET_VERIFICATION_MATRIX.csv`.

## 8. English and Arabic strategy

- English primary keyword per route: "[Origin] to [Destination] private car"; "taxi" and "price" handled in FAQ.
- Arabic primary: "توصيل من … إلى …" combined with "سيارة خاصة مع سائق"; introduce "ليموزين" and "مشاوير خاصة" on hub and city pages.
- The two language versions carry identical facts but their own wording; the existing Arabic copy is natural and should be extended, not retranslated.

## 9. Highest-priority AI search improvements

1. Publish quotable facts on route pages (distance, time, road, pickup areas).
2. State clearly what RideSaudi is, including the exclusivity sentence, on the home page, an About page, `llms.txt` and Organization schema.
3. Use real question phrasing from autocomplete as headings.
4. Fix entity consistency (www vs non-www, logo, route-level `areaServed`).

Google's current guidance: AI Overviews and AI Mode need no special markup or files; `llms.txt` is not required; FAQ rich results were retired in 2026.

## 10. Information and access still required

Search Console, GA4 ID, keyword-tool data, Vercel environment check, one live test enquiry, final fleet list with specifications, cross-border operating facts, price policy, company identity details. Full list: `OWNER_ACCESS_AND_APPROVAL_CHECKLIST.md`.

## 11. Recommended Phase 2 order

| # | Action | Business value | Confidence | Effort |
|---|---|---|---|---|
| 1 | Verify live lead delivery and switch on GA4 | Very high | High | Low |
| 2 | Add the exclusivity statement site-wide and rename CTAs | High | High | Low |
| 3 | Rebuild the top 8 existing route pages (section 2) with verified facts, EN and AR | Very high | Medium-high | Medium |
| 4 | Retitle: remove "taxi" from titles, "Bahrain" instead of "Manama", add "توصيل" to Arabic titles | High | Medium | Low |
| 5 | Settle the two overlaps (Dammam / Al Khobar; Jeddah to Makkah route vs airport page) | Medium | Medium | Low |
| 6 | Add the four P1 routes, starting from the drafts on the Jeddah branch | High | Medium | Medium |
| 7 | Route directory in the header and city route hubs | Medium | High | Low |
| 8 | Fleet section and vehicle pages | High | Blocked until verification | Medium |
| 9 | Policy, About and Contact pages | Medium | Blocked on owner facts | Low |
| 10 | Remaining IMPROVE pages, then P2 routes | Medium | Low until Search Console data | High |

## Risks

- All priorities rest on proxies until Search Console and volume data arrive; the order of items 3 to 10 may change.
- Publishing vehicle, price or border claims before verification would break the site's own rules.
- Adding reverse routes without distinct content invites Google's doorway and scaled-content policies.
- Removing "taxi" from titles may lower visibility for taxi queries in the short term; that is the intended trade for lead quality, and it should be watched in Search Console.

## Deliverables (all in `docs/phase1/`)

`PHASE1_EXECUTIVE_SUMMARY.md`, `COMPETITOR_INTELLIGENCE.md`, `KEYWORD_MASTER.csv` (1,113 rows), `ARABIC_KEYWORD_RESEARCH.csv` (429), `ROUTE_KEYWORD_MAPPING.csv` (52), `SEARCH_INTENT_ANALYSIS.md`, `EXISTING_39_ROUTE_AUDIT.csv` (39), `NEW_ROUTE_OPPORTUNITIES.csv` (35), `ROUTE_GEOGRAPHY_MASTER.csv` (56), `CUSTOMER_INTENT_AND_CRO_STRATEGY.md`, `AIO_GEO_LLM_STRATEGY.md`, `FLEET_VERIFICATION_MATRIX.csv` (11), `IMAGE_ASSET_MASTER.csv` (37), `OWNER_ACCESS_AND_APPROVAL_CHECKLIST.md`, `PHASE1_SOURCE_REGISTER.md`.

Phase 2 has not been started and will not start without approval.
