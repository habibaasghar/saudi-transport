# Riyadh URL inventory

Every row exists as `/en/<path>/` and `/ar/<path>/` (self-canonical, hreflang en/ar/x-default, in sitemap) unless the status is not "live". Business verification: **none of the routes is owner-verified** (`confirmed.routes` is empty); live pages say availability is confirmed in the quotation.

| Path | Origin | Destination | Direction | Search intent | Primary keyword | Status | Business verification | Content | Images | Publication |
|---|---|---|---|---|---|---|---|---|---|---|
| services/city-transport/riyadh | Riyadh | - | local | city private driver | private car with driver Riyadh | existing, improved | n/a | good, can grow | none | live |
| services/airport-transfers/riyadh-airport | RUH | Riyadh | both | airport transfer | Riyadh airport transfer | existing | pending | good | none | live |
| services/event-transportation/riyadh | Riyadh | venues | local | events | event transport Riyadh | existing | pending | good | none | live |
| services/tourism-transport/riyadh-sightseeing | Riyadh | Diriyah, old city | local | sightseeing driver | Riyadh sightseeing driver | new | pending | good | none | live |
| services/intercity-transfers/riyadh-to-dammam | Riyadh | Dammam/Khobar/Dhahran | both | route | Riyadh to Dammam private car | existing | pending | good | none | live |
| services/intercity-transfers/riyadh-to-jeddah | Riyadh | Jeddah | both | route | Riyadh to Jeddah private car | existing | pending | good | none | live |
| services/intercity-transfers/riyadh-to-makkah | Riyadh | Makkah | both | route / Umrah | Riyadh to Makkah private car | new | **required** | good | none | live |
| services/intercity-transfers/riyadh-to-madinah | Riyadh | Madinah | both | route / ziyarah | Riyadh to Madinah private car | new | **required** | good | none | live |
| services/intercity-transfers/riyadh-to-al-ahsa | Riyadh | Al Ahsa | both | route | Riyadh to Al Ahsa private car | new | **required** | good | none | live |
| services/cross-border-transfers/qatar | Saudi (Riyadh/Eastern) | Qatar | both | cross-border | Saudi to Qatar by road | existing | pending | good, generic | none | live |
| services/cross-border-transfers/{bahrain,uae,kuwait} | same | same | both | cross-border | Saudi to X by road | existing | pending | good, generic | none | live |

| services/intercity-transfers/riyadh-to-doha | Riyadh | Doha | both (distinct outbound/return sections) | cross-border route | Riyadh to Doha by road | built 2026-11-08, parent cross-border/qatar | **required** (vehicle/driver border permission) | good, soft claims only | none | on branch, not deployed |
| services/intercity-transfers/riyadh-to-dubai | Riyadh | Dubai | both | cross-border route | Riyadh to Dubai by road | built 2026-11-08, parent cross-border/uae | **required** | good, soft claims only | none | on branch, not deployed |
| services/intercity-transfers/riyadh-to-manama | Riyadh | Manama | both | cross-border route | Riyadh to Manama by road | built 2026-11-08, parent cross-border/bahrain | **required** | good, no distances | none | on branch |
| services/intercity-transfers/riyadh-to-kuwait-city | Riyadh | Kuwait City | both | cross-border route | Riyadh to Kuwait City by road | built, parent cross-border/kuwait | **required** | good, no distances | none | on branch |
| services/intercity-transfers/riyadh-to-alula | Riyadh | AlUla | both | route / tourism | Riyadh to AlUla by road | built | **required** | good, no distances | none | on branch |
| services/intercity-transfers/riyadh-to-taif | Riyadh | Taif | both | route | Riyadh to Taif by road | built | **required** | good, no distances | none | on branch |
| services/intercity-transfers/riyadh-to-buraydah | Riyadh | Buraydah / Qassim | both | route | Riyadh to Buraydah by road | built (covers Qassim, Unaizah) | **required** | good, no distances | none | on branch |
| services/intercity-transfers/riyadh-to-jubail | Riyadh | Jubail / Jubail Industrial City | both | route (B2B) | Riyadh to Jubail by road | built | **required** | good, no distances | none | on branch |
| services/intercity-transfers/riyadh-to-abha | Riyadh | Abha | both | route | Riyadh to Abha by road | built 2026-11-08 | **required** | good, no distances | image | on branch |
| services/intercity-transfers/riyadh-to-tabuk | Riyadh | Tabuk | both | route | Riyadh to Tabuk by road | built | **required** | good, no distances | image | on branch |
| services/intercity-transfers/riyadh-to-hail | Riyadh | Hail | both | route | Riyadh to Hail by road | built | **required** | good, no distances | none | on branch |
| services/intercity-transfers/riyadh-to-yanbu | Riyadh | Yanbu | both | route (B2B) | Riyadh to Yanbu by road | built | **required** | good, no distances | low-res image | on branch |

## Proposed (not built)
| Path | Direction coverage | Tier | Decision |
|---|---|---|---|
| services/intercity-transfers/riyadh-to-abu-dhabi | both | B | Merge into Dubai page unless owner confirms distinct demand |
| riyadh-to-abu-dhabi, -sharjah, -al-ain | both | B/D | Folded into the Dubai page |
| riyadh-to-al-khobar | both | C | Folded into the Dammam page; Qassim into Buraydah |
| Reverse-direction URLs (e.g. doha-to-riyadh) | - | - | Not created; revisit only with evidence of independent intent |
| Riyadh district pages | - | - | Not created (no demand data, risk of thin pages); districts live in the hub |
| Riyadh VIP / business / hotel / hourly pages | - | - | Not created (national pages cover intent) |
