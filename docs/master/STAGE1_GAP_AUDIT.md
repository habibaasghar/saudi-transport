# Master Brief: Stage 1 Gap Audit (2026-11-18)

This compares the master brief ("RideSaudi.com – Saudi Arabia Private Transportation Topical Authority") with the work already done. Phase 0 was the audit, Phase 1 the research, and Phase 2A–2C the ten upgraded route pages, the menus and four new routes. Most of the brief has been answered already. This file lists what exists, what is new, and the decisions only the owner can make.

## 1. The brief's 15 deliverables, against existing files

| # | Deliverable | Status | Where |
|---|---|---|---|
| 1 | Complete SEO audit | Done | `docs/phase0/WEBSITE_AUDIT.md`, `TECHNICAL_SEO_AUDIT.md`, `EXISTING_ISSUES.md`, `EXISTING_URL_INVENTORY.csv` |
| 2 | Competitor research | Done, except one site (see 3.4) | `docs/phase1/COMPETITOR_INTELLIGENCE.md` |
| 3 | Master keyword database | Done (1,113 EN rows, 429 AR rows); volumes and KD marked "requires validation" | `docs/phase1/KEYWORD_MASTER.csv`, `ARABIC_KEYWORD_RESEARCH.csv` |
| 4 | Topical authority map | Partly done | `docs/phase0/PROPOSED_ARCHITECTURE.md`, `docs/phase1/SEARCH_INTENT_ANALYSIS.md` |
| 5 | Location page inventory | Done | `EXISTING_URL_INVENTORY.csv` (city hubs under `/services/city-transport/`) |
| 6 | Route page inventory and matrix | Done; updated for the brief's list in section 2 | `EXISTING_39_ROUTE_AUDIT.csv`, `NEW_ROUTE_OPPORTUNITIES.csv`, `ROUTE_GEOGRAPHY_MASTER.csv` |
| 7 | Airport page inventory | Done | `EXISTING_URL_INVENTORY.csv` |
| 8 | Service page inventory | Done | `EXISTING_URL_INVENTORY.csv` |
| 9 | Blog content calendar | **Not done** | Stage 5 |
| 10 | URL architecture | Done; owner decision taken (see 3.1) | `PROPOSED_ARCHITECTURE.md` |
| 11 | Internal linking plan | Partly done (related links, menus, reverse-route links) | Full map is Stage 5 |
| 12 | Technical SEO implementation | Mostly in place (canonical, hreflang, sitemap, JSON-LD, llms.txt, 404s) | Remaining items are in section 4 |
| 13 | English and Arabic SEO strategy | Done | `ARABIC_KEYWORD_RESEARCH.csv`, `SEARCH_INTENT_ANALYSIS.md`, `AIO_GEO_LLM_STRATEGY.md` |
| 14 | Conversion optimisation report | Done (research); tracking is not live | `CUSTOMER_INTENT_AND_CRO_STRATEGY.md` |
| 15 | 90-day roadmap | **Not done** | Stage 8 |

**Not possible without owner access:** Google Search Console and Ahrefs data (clicks, impressions, positions 4–30, backlinks, keyword difficulty, content gap). Phase 1 used Google Autocomplete as a demand proxy, and every volume and difficulty field is marked "requires validation". No numbers have been invented.

## 2. The brief's route list, checked against the live site

The brief lists 47 routes. **26 are already live**, all under `/services/intercity-transfers/` except one Umrah page. The other 21 are below, with their Phase 1 score (out of 100) where the route was scored. Distances and times are OSRM routing-engine figures from Phase 1, not Google Maps checks.

| Route | Phase 1 score | Distance, time | Recommendation |
|---|---|---|---|
| Makkah to Jeddah Airport | 78 | 101 km | **Covered.** The live makkah-to-jeddah page is built around the JED airport run. A second URL would compete with it. |
| Madinah to Jeddah Airport | not scored | ~399 km | **Covered.** The live madinah-to-jeddah page is titled "Madinah to Jeddah Airport Private Car". |
| Jeddah Airport to Madinah | 69 HOLD | 399 km | Add an airport-pickup section to jeddah-to-madinah. A separate page is P3. |
| Al Khobar to Riyadh | 69 HOLD | 424 km | **P2.** Decide together with riyadh-to-al-khobar versus riyadh-to-dammam (overlap risk). |
| Buraydah to Riyadh | not scored | — | P3: validate demand first |
| AlUla to Madinah | 61 | 339 km | **P2** |
| Yanbu to Jeddah | 60 | 330 km | **P2** |
| Al Ahsa to Dammam | 53 | 151 km | P3 |
| Abha to Riyadh | 53 | 946 km | P3 (long; flights compete strongly) |
| Jubail to Dammam | 52 | 87 km | P3 |
| Madinah to Yanbu | 49 | 240 km | P3 |
| Tabuk to AlUla | 46 | 450 km | P3 |
| Abha to Jazan | 40 | 200 km | P3 |
| Dammam to Al Khobar | 45 REJECT | 34 km | **Do not build.** A 25-minute trip within one metro area is a ride-hailing journey, not a premium private transfer. Cover it on the Dammam and Khobar city pages. |
| Al Khobar to Dammam | not scored | ~34 km | Do not build (same reason) |
| Abha to Khamis Mushait | not scored | adjoining cities | Do not build as a route. Cover it on an Abha city page if that page is approved. |
| Dammam to Riyadh Airport | not scored | — | P3. Search intent is unclear. |
| Al Khobar to Dammam Airport | not scored | — | Cover on the Dammam Airport page, which already exists |
| Jubail to Dammam Airport | not scored | — | Cover on the Dammam Airport page |
| AlUla to Tabuk, Jazan to Abha, Yanbu to Madinah | not scored | — | P3: validate demand first |

**P1 in the brief's list is now complete.** The next build candidates are the three P2 routes: AlUla to Madinah, Yanbu to Jeddah and Al Khobar to Riyadh.

## 3. Where the brief conflicts with earlier decisions or findings

### 3.1 URL architecture (`/routes/`, `/locations/`, `/airport-transfers/`)
The brief suggests new top-level folders. On 2026-11-15 the owner decided to keep `/services/intercity-transfers/`, `/services/city-transport/` and `/services/airport-transfers/` and not to migrate. Moving over 130 live pages would mean hundreds of 301 redirects and a period of ranking turbulence, with no gain in relevance. The brief itself says to preserve URLs that have equity. **Recommendation: keep the current structure.** The only addition proposed is `/guides/`, or keep using `/blog/`.

### 3.2 Vehicle list
The brief lists Standard Sedan, Executive Sedan, Luxury SUV, GMC Yukon/Suburban, Chevrolet Tahoe, Hyundai Staria and VIP Van. It also says to show only vehicles actually available through partners. The owner-confirmed list is still three categories: **sedan, GMC Yukon and Hyundai Staria**. Tahoe, Suburban, executive sedan and VIP van stay off the site until the owner confirms that partners can supply them.

### 3.3 Arabic keywords in the brief
- "نقل خاص" often means a private licence plate or private transport licensing, not a booking, so it does not suit landing pages.
- "سائق خاص في الرياض" is mostly job-seeker and household-driver intent, which CLAUDE.md excludes (no driver job pages).

Phase 1 found that real customers search with "توصيل", "ليموزين", "مشاوير" and "سيارة مع سائق". The site keeps those.

### 3.4 taxisaudiarabia.com
The brief lists it as a competitor, but it is the owner's own sister site. The existing rules still apply: no copied or lightly rewritten text, no links between the sites, no shared reviews or schema identity, and different positioning. It should be analysed to **avoid overlap and cannibalisation**, not as a model to follow. taxiserviceksa.com is already profiled in `COMPETITOR_INTELLIGENCE.md`.

### 3.5 Business model wording: fixed in this pass
The brief says RideSaudi is a booking and lead-generation platform working with transport partners. The site mostly says "RideSaudi arranges…", which fits. Three places did not:
- The Fleet page title said "Our Vehicles" (Arabic "مركباتنا"). It is now "Vehicles with Driver".
- Its FAQ said photos are "only of vehicles we actually operate" (Arabic "نشغّلها"). It now says vehicles "actually used for RideSaudi bookings".
- The FAQ "Which vehicles do you have?" now says the vehicles are provided through the transport partners RideSaudi books with.

`/llms.txt` now carries the same booking-and-partners fact. A search of all copy found no claims of licences, TGA approval, fleet ownership, reviews or office addresses.

## 4. What remains, by brief stage

| Stage | Remaining work | Needs owner? |
|---|---|---|
| 4 Commercial pages | P2 routes (AlUla–Madinah, Yanbu–Jeddah, Al Khobar–Riyadh); a JED-pickup section on jeddah-to-madinah | Route operation confirmation |
| 5 Blog clusters and linking | Content calendar for the 25 guide topics in the brief, checked against the existing `/blog/` posts for cannibalisation; full internal-link map | No |
| 6 Technical SEO | Sitemap index or split sitemaps (optional at about 280 URLs); OG images per page; image formats and LCP review | No |
| 7 Conversion and tracking | Verify live lead delivery (DB, Resend, webhook); fix `/admin/` 500; switch on GA4 events (form submit, WhatsApp click, call click) | **Yes:** GA4 ID, Resend and DB credentials |
| 8 Validation and launch report | 90-day roadmap, final crawl | No |

## 5. Owner decisions needed

1. Confirm: keep the current URL structure (3.1).
2. Confirm the vehicle categories partners can actually supply (3.2).
3. Give Search Console and GA4 access, and Ahrefs if available.
4. Confirm the P2 routes are operated: AlUla to Madinah, Yanbu to Jeddah, Al Khobar to Riyadh.
5. Price policy: still undecided. No fares are published.
