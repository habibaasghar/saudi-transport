# Phase 1 Source Register

All sources were accessed on **2026-11-15**. "Fetched" means the page was retrieved and read; "search listing" means only the search-result title and summary were seen.

## 1. Internal sources

| ID | Source | Used for |
|---|---|---|
| I1 | Repo `habibaasghar/saudi-transport`, branch `main` = `habiba`, commit `1ba9ec0` (content registry `src/content/*.ts`, 130 pages, 39 routes) | Existing 39-route audit; titles, copy, FAQs in English and Arabic |
| I2 | `docs/phase0/` (five Phase 0 deliverables) | Baseline facts |
| I3 | Branch `claude/ridesaudi-jeddah-routes` (5 commits ahead of production) | Draft routes, read-only inspection |
| I4 | Branch `claude/ridesaudi-seo-leads-dd9a32` (1 commit ahead, 9 behind) | Fleet data, photos, policy pages, read-only inspection |
| I5 | Project notes of owner statements (2026-11-12 policies; 2026-11-14 vehicle types) | Fleet and policy confirmation status |

## 2. Search data

| ID | Source | Method | Used for |
|---|---|---|---|
| S1 | Google Autocomplete, `suggestqueries.google.com/complete/search?client=firefox&gl=sa&hl=en` and `hl=ar` | 128 generic seeds (74 English, 54 Arabic) | `KEYWORD_MASTER.csv`, `ARABIC_KEYWORD_RESEARCH.csv` |
| S2 | Same endpoint | 6 phrasings for each of 74 routes: "[A] to [B] taxi / private / car", "توصيل / تاكسي / سيارة من [A] الى [B]" | Route demand proxy in all scoring |
| S3 | Web search (US-located tool), 12 searches in English and Arabic: 6 keyword queries, 4 competitor look-ups, 2 market and border queries | Result listings | Competitor discovery; indicative SERP notes |

Not available: Google Keyword Planner, Google Search Console, Ahrefs, Semrush. No volume, difficulty, CPC, ranking or traffic figure appears in any Phase 1 file.

## 3. Distance and road data

| ID | Source | Method | Used for |
|---|---|---|---|
| G1 | OSRM public routing service on OpenStreetMap data, `https://router.project-osrm.org/route/v1/driving/{lon,lat};{lon,lat}` | 54 city pairs, city-centre coordinates, `steps=true` for road references | `ROUTE_GEOGRAPHY_MASTER.csv` (each row carries its exact request URL) |

Limits: city centre to city centre; free-flow time with no stops, traffic or border delay; road numbers are OpenStreetMap references. Cross-check each figure on Google Maps with the real pickup and drop-off before publishing. Airports, districts and landmarks in the geography file are general geographic knowledge and do not state RideSaudi's operational coverage.

## 4. Competitor pages (fetched)

| ID | URL | Used for |
|---|---|---|
| C1 | https://taxiserviceksa.com/ | Positioning, navigation, route and location inventory |
| C2 | https://taxiserviceksa.com/routes/makkah-madinah/ | Route page structure, prices, FAQs |
| C3 | https://taxiserviceksa.com/routes/riyadh-dammam/ | Route page structure, exclusivity wording |
| C4 | https://hiremychauffeur.com/ | Positioning, fleet, prices |
| C5 | https://hiremychauffeur.com/routes/riyadh-to-dubai/ | Cross-border page structure, crossing name, distance |
| C6 | https://arabianelitechauffeurs.com/ | Positioning, fleet pages, trust signals |
| C7 | https://arabianelitechauffeurs.com/riyadh-to-dammam/ | Route page, Highway 40 mention, price table |
| C8 | https://www.blacklane.com/en/countries/saudi-arabia | Saudi coverage and city-to-city list |
| C9 | https://www.blacklane.com/en/city-to-city/dammam-riyadh/ | Route page, 410 km |
| C10 | https://daytrip.com/en/transfers/riyadh-sa/dammam-sa | Route page, review counts, 410 km |
| C11 | https://www.oneclickdrive.com/ar/rent-a-car-with-driver-from-saudi-arabia-riyadh-to-dubai | Arabic route page and headings |
| C12 | https://www.swvl.com/ar/luxury-transit/al-khobar | Arabic city page |
| C13 | https://halalbooking.com/ar/umrah/makkah/transport | Customer objections; Arabic transport vocabulary |

Could not be read: `https://www.transfeero.com/en/country/saudi-arabia/` (HTTP 403); `https://corsasaudi.com/` (domain does not resolve); `https://saudigazette.com.sa/article/641374/…` (HTTP 402).

Search listings only (not verified): Rideon Chauffeur Service, Limo Jeddah, VIP Transport Riyadh, AB Transportation Saudi, Naylam, Spark Chauffeur (directory entries on theflyingengineer.com and others); Pelago, Rayna Tours, Marriott Activities, AAA Trip Canvas listings for Makkah to Madinah transfers.

## 5. Google guidance (fetched)

| ID | URL | Used for |
|---|---|---|
| O1 | https://developers.google.com/search/docs/appearance/ai-features | AI Overviews and AI Mode requirements; `llms.txt` not required |
| O2 | https://developers.google.com/search/docs/appearance/structured-data/faqpage | FAQ rich result deprecation (May 2026) and documentation removal (June 2026), as recorded on the page returned |
| O3 | https://developers.google.com/search/docs/essentials/spam-policies | Doorway abuse and scaled content abuse definitions |

## 6. Market and border sources (search listings)

| ID | Source | Claim used | Reliability |
|---|---|---|---|
| M1 | Argaam / Arab News / Gulf News reports of the Ministry of Tourism 2025 figures | 29.3 million inbound tourists in 2025; about 123 million total tourists | Press reports of official statistics; original report not opened |
| M2 | Saudi Gazette / Siasat reports of GASTAT | 11.29 million Umrah performers in Q4 2025 | Press reports of official statistics |
| M3 | https://marhaba.qa/border-crossing/ | Abu Samra crossing; insurance at the border | Secondary |
| M4 | https://blog.wego.com/travel-from-kuwait-to-saudi-arabia-by-road/ | Nuwaiseeb / Khafji as the main Kuwait crossing | Secondary |
| M5 | saudi-expatriates.com (2023) | ZATCA condition that the driver owns the vehicle or holds authorisation | Secondary; verify with ZATCA |
| M6 | Press reports (Oman Observer, GCC Business News, ARY) | 90-day stay limit for GCC-registered vehicles from August 2026 | Secondary; verify with official source |

Border and documentation rules must be confirmed with official Saudi sources (ZATCA, Jawazat, Manafith) and with the owner's operating practice before any of it is published.

## 7. Evidence labels used in the CSV files

| Label | Meaning |
|---|---|
| Directly measured | Not used: no measurement tool was available |
| Third-party estimated | Not used |
| Qualitative search observation | Phrase observed in Google Autocomplete for Saudi Arabia, or a page seen in results |
| Strategic hypothesis | Phrase or priority proposed without observed evidence |
| Routing-engine computed | Distance or time calculated by OSRM, awaiting map cross-check |
