# Phase 2: Cannibalization and internal linking

Prepared 2026-11-23 against the current site (`vercel-repo/main` a8a5c80). This replaces TASK-B for decisions. TASK-B and TASK-C stay as background.

## How to read this

- All paths sit under `/en/`. `/ar/` follows the same decision, with Arabic titles written natively.
- Titles are ≤48 characters because the template adds " | RideSaudi". "—" means no change.
- **VERIFY IN GSC** on every merge. Search Console has 4 queries on file (export of 18 Nov), so no overlap can be measured yet. To check a merge: GSC → Performance → Search results → filter **Query** contains the keyword → **Pages** tab. Merge only if 2+ of our URLs have impressions for that query over 28 days.
- Retitle and de-optimise rows remove nothing, so they are safe to ship now.
- **Sister-brand rule:** taxisaudiarabia.com owns "taxi" / "Umrah taxi". On RideSaudi, "taxi" may appear in body text only for honest comparison, never in a title, H1 or FAQ question.

## Brief items that do not match the site

| Brief says | Actual | Effect |
|---|---|---|
| `/chauffeur-services/hourly-driver/` and `/full-day-driver/` exist | They do not exist. The homepage "Hourly" card links to the chauffeur hub | Nothing to merge. The hub covers hourly and full-day intent |
| Merge private-intercity-chauffeur → multi-day-chauffeur | `luxury-intercity-transfers` already 308-redirects to private-intercity-chauffeur | If merged, both old URLs must point straight to multi-day-chauffeur (one hop, no chain) |
| Reverse pairs: default one page per pair | You decided on 14 Nov to keep both directions, and every reverse page now has its own angle (Miqat stop, airport drop, return after Umrah) | **Needs your decision** (see cluster 3). The table assumes your 14 Nov decision stands |
| Footer has a "Riyadh" column | Already replaced with 4 region columns (not live yet) | Change to the 5 regions in the brief (see linking plan) |

## The table

| # | URL | Primary keyword | Intent | Action | New title | New H1 | Reason |
|---|---|---|---|---|---|---|---|
| **1** | /services/chauffeur-services/ | private car with driver saudi arabia | Commercial hub | **keep** | — | — | Covers hourly, full-day and the hub term |
| 1 | /services/chauffeur-services/business-chauffeur/ | business chauffeur riyadh | Commercial B2B | **keep** | — | — | Distinct B2B intent. Phase 3 monthly-driver page sits under it |
| 1 | /services/chauffeur-services/multi-day-chauffeur/ | chauffeur for several days saudi | Commercial | **keep** (primary for multi-day) | — | — | — |
| 1 | /services/intercity-transfers/private-intercity-chauffeur/ | multi-city trip with driver | Commercial | **retitle** now; **merge+301 → multi-day-chauffeur — VERIFY IN GSC** | Multi-City Trip with Driver Across Saudi | One car and driver for a trip through several Saudi cities | Current title "Private Intercity Chauffeur" competes with multi-day on "chauffeur" |
| 1 | /luxury-transportation/luxury-chauffeur/ | luxury chauffeur saudi arabia | Commercial premium | **de-optimise** "VIP" | — | — | "VIP" belongs to vip-car-service |
| 1 | /blog/private-chauffeur-service-saudi-arabia/ | planning a business trip with a driver | Informational | **retitle**; **merge+301 → business-chauffeur — VERIFY IN GSC** | Riyadh Business Trip With a Driver: How to Plan | How to plan a Riyadh business trip around a car and driver | Slug targets the hub's commercial query |
| **2** | /services/cross-border-transfers/uae/ | saudi to uae by car | Commercial (country hub) | **de-optimise** "Riyadh to Dubai" in title, H1, FAQs; link to city pairs | — | — | Country = hub, city pair = specific |
| 2 | /services/intercity-transfers/riyadh-to-dubai/ · dammam-to-dubai · riyadh-to-abu-dhabi | riyadh to dubai by car (etc.) | Commercial (city pair) | **keep** | — | — | — |
| 2 | /blog/saudi-arabia-to-uae-private-transfer/ | batha border crossing by car | Informational | **retitle** (slug stays) | Batha Border by Car: Saudi to UAE Checklist | Crossing from Saudi Arabia to the UAE by road at Batha | Current "Saudi Arabia to UAE by Road: Riyadh to Dubai" hits both pages above |
| 2 | /services/cross-border-transfers/qatar/ | saudi to qatar by car | Commercial (country) | **de-optimise** "Riyadh to Doha" | — | — | — |
| 2 | /services/intercity-transfers/riyadh-to-doha/ · dammam-to-doha | riyadh to doha by car | Commercial (city pair) | **keep** | — | — | — |
| 2 | /blog/saudi-arabia-to-qatar-private-transfer/ | salwa border crossing | Informational | **retitle** | Salwa Border by Car: What to Expect | Crossing at Salwa: a road guide from Saudi Arabia to Qatar | Same head term as the country page |
| 2 | /services/cross-border-transfers/bahrain/ | saudi to bahrain by car | Commercial (country) | **keep** | — | — | — |
| 2 | /services/intercity-transfers/riyadh-to-manama/ · dammam-to-bahrain | riyadh / khobar to bahrain | Commercial (city pair) | **keep** | — | — | — |
| 2 | /blog/saudi-arabia-to-bahrain-private-transfer/ | king fahd causeway crossing | Informational | **retitle** | King Fahd Causeway by Car: Crossing Guide | Crossing the King Fahd Causeway by car: timing and paperwork | Title is the country page's query |
| 2 | /services/cross-border-transfers/kuwait/ + riyadh-to-kuwait-city | saudi to kuwait / riyadh to kuwait | Commercial | **keep both**; de-optimise "Riyadh" on country page | — | — | — |
| **3** | /services/intercity-transfers/riyadh-to-alula/ | riyadh to alula private car | Commercial | **de-optimise reverse** (eyebrow ⇄ → →, drop "AlUla to Riyadh" section and FAQ, one line linking to alula-to-riyadh) | — | — | alula-to-riyadh exists. Two pages chasing the same reverse query |
| 3 | riyadh-to-abha · riyadh-to-madinah · riyadh-to-makkah · jeddah-to-makkah · jeddah-to-madinah · jeddah-to-taif · makkah-to-taif · madinah-to-alula · jeddah-to-yanbu | the forward direction | Commercial | **de-optimise reverse** the same way | — | — | Each has a live reverse page |
| 3 | riyadh-to-doha · riyadh-to-dubai · riyadh-to-manama · riyadh-to-kuwait-city · riyadh-to-taif · riyadh-to-yanbu · dammam-to-bahrain | forward direction | Commercial | **keep ⇄** | — | — | No reverse page exists, so this page rightly covers both |
| 3 | /services/intercity-transfers/jeddah-to-alula/ | jeddah to alula private car | Commercial | **retitle** | Jeddah to AlUla Private Car with Driver | — | "One Way or Return" pulls the alula-to-jeddah query |
| 3 | /services/intercity-transfers/alula-to-dammam/ | alula to dammam private car | Commercial | **retitle** | AlUla to Dammam Private Car with Driver | — | Title names both directions, but no reverse page exists. Keep one line in the body |
| 3 | /services/intercity-transfers/abha-to-riyadh/ | abha to riyadh private car | Commercial | **retitle** | Abha to Riyadh Private Car: GMC or Staria | — | Matches the sibling pages. Suburban moves to the GMC vehicle page |
| **4** | /services/intercity-transfers/riyadh-to-dammam/ | riyadh to dammam private car | Commercial | **keep** (primary) | — | — | — |
| 4 | /services/intercity-transfers/riyadh-to-al-khobar/ | riyadh to khobar / dhahran | Commercial | **keep**; never "Dammam" in the title | — | — | — |
| 4 | dammam-to-riyadh · al-khobar-to-riyadh | reverse directions | Commercial | **keep** | — | — | One direction each already |
| 4 | /blog/riyadh-to-dammam-private-transfer/ | riyadh to dammam train or car | Informational comparison | **retitle**; **merge+301 → riyadh-to-dammam — VERIFY IN GSC** | Riyadh to Dammam: Train, Flight or Car? | Riyadh to Dammam: train, flight or a car with driver? | Current title is the commercial query of 2 route pages |
| **5** | /services/umrah-transport/jeddah-airport-to-makkah/ | jeddah airport to makkah private car | Commercial | **keep — PRIMARY** for every "airport to Makkah" query; no "taxi" anywhere in title, H1 or FAQs | — | — | Built for exactly this trip (Miqat, Zamzam, hotel drop) |
| 5 | /services/intercity-transfers/jeddah-to-makkah/ | jeddah to makkah private car from hotel | Commercial | **keep**; de-optimise "airport" and point airport arrivals to the primary | — | — | Title already says "from Your Hotel" |
| 5 | /services/airport-transfers/jeddah-airport/ | jeddah airport transfer | Commercial | **keep**; no "Makkah" in title or H1, link Makkah arrivals to primary | — | — | — |
| 5 | /blog/jeddah-airport-to-makkah-train-bus-taxi-private-car/ | jeddah airport to makkah train or car | Informational | **retitle** (slug stays) | Jeddah Airport to Makkah: Train, Bus or Car? | Jeddah airport to Makkah: train, bus or a private car? | "Taxi" in the title competes with the sister brand. Body may still compare taxis honestly |
| 5 | **/services/umrah-transport/** (hub) | umrah transport with driver | Commercial hub | **retitle + de-optimise "taxi"** (title, H1, intro, 2 FAQ questions, EN + AR) | Umrah Transport with Driver: GMC or Staria | Umrah transport with a private driver, for families and groups | **Biggest sister-brand clash found:** title is "Private Umrah Taxi & Transport", AR "تاكسي ونقل خاص للمعتمرين" |
| 5 | FAQ questions on jeddah-to-madinah, makkah-to-jeddah, makkah-to-madinah, riyadh-to-dammam | — | — | **de-optimise** "private taxi" → "private car" in the question | — | — | Same rule. Answers already describe a private car |
| **6** | /blog/riyadh-to-jeddah-by-road-guide/ | riyadh to jeddah by road | Informational | **retitle** | Riyadh to Jeddah by Road: Route, Stops, Timing | Riyadh to Jeddah by road: the route, rest stops and timing | Drop "Private Car": that is the route page's query |
| 6 | /blog/makkah-to-madinah-train-bus-or-private-car/ | makkah to madinah train or car | Informational comparison | **keep** | — | — | Already the comparison angle |
| 6 | /blog/jeddah-to-madinah-train-flight-bus-or-car/ | jeddah to madinah train or car | Informational comparison | **keep** | — | — | — |
| 6 | /blog/makkah-to-taif-private-car-day-trip/ | makkah to taif day trip | Informational | **retitle** | Makkah to Taif Day Trip: Stops and Timing | A Makkah to Taif day trip: where to stop and when to leave | Drop "by Private Car" |
| 6 | /blog/madinah-to-alula-by-road-guide/ | madinah to alula distance | Informational | **keep**; route page must not chase "distance" | — | — | — |
| 6 | /blog/private-airport-transfers-saudi-arabia/ | (same as airport hub) | Informational | **retitle**; **merge+301 → /services/airport-transfers/ — VERIFY IN GSC** | Which Saudi Airport Transfer to Book | Saudi airport arrivals: which transfer suits your trip | Same head term as the hub |
| 6 | /blog/luxury-suv-gmc-transfer-saudi-arabia/ | GMC Yukon with driver | Informational, but commercial title | **retitle when the GMC vehicle page ships** (Phase 3) | GMC Yukon or Staria: Which Suits Your Trip? | — | **Phase 3 would create a new clash:** `/fleet/gmc-yukon-with-driver/` targets the same query |
| 6 | /blog/hyundai-staria-with-driver-family-group-travel/ | Staria with driver | Informational, but commercial title | **retitle when the Staria page ships** | Staria, Hiace or Coaster: Group Size Guide | — | Same clash with `/fleet/hyundai-staria-with-driver/` |
| **7** | /luxury-transportation/ | luxury transportation saudi arabia | Commercial hub | **keep** | — | — | — |
| 7 | /luxury-transportation/vip-car-service/ | vip car service saudi | Commercial | **keep — primary for "VIP transportation"** | — | — | — |
| 7 | Homepage card "VIP Transportation" | — | — | **re-point** link from /luxury-transportation/ → /luxury-transportation/vip-car-service/ | — | — | Anchor says VIP, page says Luxury, so Google gets a mixed signal |
| 7 | /services/airport-transfers/vip-airport-transfer/ | vip airport transfer | Commercial (airport) | **keep**; vip-car-service must not chase "airport" | — | — | Different intent: arrival only |
| 7 | /services/event-transportation/vip-event-chauffeur/ | vip event chauffeur | Commercial (event) | **keep** | — | — | — |

**Count:** 14 retitles to ship now, 2 more with Phase 3, about 20 de-optimised pages, 4 possible merges (all VERIFY IN GSC) and 1 link re-point.

## Internal linking plan

### A. Ship now (pages exist)
| Change | Detail | Status |
|---|---|---|
| Blog in-body links | 2–4 contextual links in the first 200 words of all 32 guides, EN + AR, commercial page first. Per-guide anchors are in TASK-C. Needs a one-line `RichText` change in BlogView, plus a test that fails under 2 links | To do |
| Madinah→AlUla guide | Plain-text mentions → links to madinah-to-alula, tourism-transport/alula, alula-airport, alula-to-madinah | To do (part of row above) |
| AlUla tourism → madinah-to-alula | In body | Done, not live |
| Riyadh→AlUla → alula-airport, tabuk | In body | Done, not live |
| Tabuk → AlUla | In body | Done, not live |
| Footer regions | Change to the brief's 5: **Hejaz** Jeddah, Makkah, Madinah, Taif, Yanbu, Jeddah Airport · **Central** Riyadh, Buraidah, Hail, Riyadh Airport, Qassim Airport · **Eastern** Dammam, Al Khobar, Dhahran, Jubail, Al Ahsa, Dammam Airport · **North-West** Tabuk, AlUla, AlUla Airport (+Tabuk/NEOM Bay airports when built) · **South** Abha, Khamis Mushait, Jazan, Najran, Al Baha | Small edit |
| Generic anchors | "View page →" on every hub and related card becomes the destination's name, e.g. "Jeddah Airport Transfer →". Removes the generic "View page —" accessible name sitewide | Small edit |
| Homepage VIP card | → vip-car-service (cluster 7) | Small edit |
| De-optimised reverse sections | Each becomes one line: "Travelling the other way? See [AlUla to Riyadh private car](…)" | With cluster 3 |

### B. Ship with Phase 3 pages (never link to a page before it exists)
| From | To |
|---|---|
| Tabuk city page | tabuk-airport, neom-bay-airport, tabuk-to-neom, tabuk-to-alula, madinah-to-tabuk |
| Every vehicle page | Its top 8 routes (from the route price table) |
| Every route page | Each vehicle in its price table → that vehicle page |
| Fleet hub | All 5 vehicle pages |
| GMC / Staria blog posts | Their new vehicle page as link 1 |
| Footer North-West | Tabuk Airport, NEOM Bay Airport |

### Anchor rules
Anchors describe the destination ("private car from Jeddah Airport to Makkah"). The same URL never gets the identical anchor from two guides. Arabic anchors are written natively and link Arabic to Arabic. No "click here", "view page", "learn more" or "request a quote →" as link text.

## Status 2026-11-24 (built, not deployed)

Branch now sits on f1ae203 (GSC growth pass, also not deployed), which already did the cross-border, chauffeur, Riyadh-Dammam and airport guide retitles, the one-way split of reverse pairs and the contextual links. Both directions are kept.

Added here: no "taxi" in the titles, H1s or the FAQ questions of the Umrah hub, Jeddah Airport to Makkah guide and four route pages (EN + AR); retitled private-intercity-chauffeur, riyadh-to-jeddah and makkah-to-taif guides; homepage VIP card to vip-car-service; card links use the page name; footer South region, Hail moved to Central, Dhahran added; WhatsApp booking template on A-to-B pages only.

Left on purpose: AlUla taxi FAQs (GSC growth pass, clarifying answers), private-car-vs-taxi guide (honest comparison), all merges (no GSC query + page data), GMC/Staria guide retitles (ship with the vehicle pages).
