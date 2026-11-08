# Riyadh master strategy

## Decisions
1. `/en/services/city-transport/riyadh/` (and `/ar/...`) is the single Riyadh authority URL. No `/locations/` tree.
2. Route pages are **route pairs**: one URL per Riyadh-to-X route covering both directions with direction-specific sections. No mirrored reverse URLs unless independent intent and content are shown.
3. Slugs follow the existing convention: `services/intercity-transfers/riyadh-to-{destination}`. Cross-border routes live under `services/cross-border-transfers/` only if the existing country pages are kept as the parents; see decision 5.
4. No page is published without: distinct intent, owner-verified route, unique EN+AR copy, passing `validateRegistry()`.
5. **Cross-border overlap:** `services/cross-border-transfers/{bahrain,qatar,uae,kuwait}` already exist and start from "Riyadh or the Eastern Province". Adding `riyadh-to-doha` would target the same intent. Recommended: make the route-pair page the Riyadh-specific deep dive (Riyadh origin, Salwa corridor, return to Riyadh, Doha airport/hotels) and have the country page link to it as the Riyadh route and focus on Eastern Province origin. Decide before building.

## Tiering (business priority, not keyword volume; no volume data exists)
| Tier | Routes | Status |
|---|---|---|
| Built | Dammam, Jeddah, Makkah, Madinah, Al Ahsa (existing/batch 8) | live on `main`, needs route verification for last three |
| A | Doha, Dubai | Researched, not built: needs owner verification (see below) |
| B | Abu Dhabi, Manama, Kuwait City, AlUla | Not built |
| C | Taif, Al Khobar, Jubail, Yanbu, Buraydah | Not built; Al Khobar likely merged into the Dammam page |
| D | Hail, Abha, Tabuk, Sharjah, Al Ain | Research first; Sharjah and Al Ain likely merged into the Dubai/Abu Dhabi pages; Qassim = Buraydah page |

## What cross-border research found (2026-11-08, web search only)
Sources conflict and **no official checklist was found**, so no requirement can be published as fact yet.
- Riyadh to Doha via Salwa: about 570 to 580 km and 6 to 7 hours in travel sources; border clearance can take up to about two hours. Entry-rule articles found were dated (COVID/World Cup era). [Wego](https://blog.wego.com/drive-from-ksa-to-qatar/), [Rome2Rio](https://www.rome2rio.com/s/Riyadh/Doha), [Regency Holidays](https://regencyholidays.com/blog/travel-from-saudi-arabia-to-qatar-by-road).
- Riyadh to Dubai via Batha / Ghuwaifat: estimates range from about 980 to 1,200 km and 9 to 12 hours; border waits up to about two hours on busy days. [Property Finder](https://www.propertyfinder.ae/blog/dubai-to-saudi-by-road/), [Soul of Saudi](https://soulofsaudi.com/?p=17612).
- Saudi to Bahrain over the King Fahd Causeway: vehicle ownership card, toll and insurance, passports and visas; the causeway has been closed at short notice in 2026; licensed taxis were recently allowed to carry passengers across (a taxi rule change, not a private-hire rule). [Gulf News](https://gulfnews.com/world/gulf/bahrain/saudi-arabia-bahrain-allow-taxis-to-carry-passengers-across-king-fahd-causeway-1.500665250), [Wego status](https://blog.wego.com/king-fahd-causeway-status/), [Japanese Embassy Bahrain](https://www.bh.emb-japan.go.jp/files/100987346.pdf).
- Kuwait and Abu Dhabi were not researched.

**Policy:** pages may give distance/time only as "approximate, from public travel sources", and must send travellers to official authorities (Saudi Ministry of Interior/Absher, Saudi visa portal, destination immigration, King Fahd Causeway Authority) for entry rules. Vehicle/driver cross-border permission is an owner fact; until confirmed the page says only "confirmed in the quotation".

## Business verification required before any cross-border route is built
- Which vehicles/drivers are permitted to cross each border; vehicle exchange at the border?
- Which nationalities/documents RideSaudi will accept for each route.
- Whether return trips from Doha/Dubai/Manama/Kuwait are offered.
- Whether Riyadh to Makkah / Madinah / Al Ahsa (already live) are really offered.

## Execution status in this repo
Built on branch (not deployed): riyadh-to-doha and riyadh-to-dubai, with Riyadh-origin and return sections, parents cross-border/qatar and /uae.
Done (on `main`): Riyadh hub rewrite, sightseeing, Makkah, Madinah, Al Ahsa pages. This turn: documentation only. Not done: cross-border and Tier C/D routes, imagery, analytics, hub sections for vehicle categories and cross-border comparison.
