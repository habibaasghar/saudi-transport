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

## Proposed (not built)
| Path | Direction coverage | Tier | Decision |
|---|---|---|---|
| services/intercity-transfers/riyadh-to-abu-dhabi | both | B | Merge into Dubai page unless owner confirms distinct demand |
| services/intercity-transfers/riyadh-to-manama | both | B | Bahrain country page already strong; build only if Riyadh-origin intent is distinct |
| services/intercity-transfers/riyadh-to-kuwait-city | both | B | As above |
| services/intercity-transfers/riyadh-to-alula | both | B | Overlaps tourism/alula; position as the long-route guide |
| services/intercity-transfers/riyadh-to-taif, -yanbu, -jubail, -buraydah | both | C | Research first; Al Khobar merged into Dammam; Qassim covered by Buraydah |
| riyadh-to-hail, -abha, -tabuk, riyadh-to-sharjah, -al-ain | both | D | Research only; Sharjah/Al Ain fold into UAE pages |
| Reverse-direction URLs (e.g. doha-to-riyadh) | - | - | Not created; revisit only with evidence of independent intent |
| Riyadh district pages | - | - | Not created (no demand data, risk of thin pages); districts live in the hub |
| Riyadh VIP / business / hotel / hourly pages | - | - | Not created (national pages cover intent) |
