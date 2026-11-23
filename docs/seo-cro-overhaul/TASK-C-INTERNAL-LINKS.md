# Task C — Internal linking plan

## Finding
A scan of all 32 guides found **0 contextual links in the body, in either language**. Every link to a service page sits in the "Plan this job" box and the related-guide cards, below the content. So none of the guides passes the "2–4 links in the first 200 words" rule yet.

## Rules for every guide (EN and AR)
- 2–4 in-body links inside the **Quick answer or the first section** (first 200 words), using the existing `[anchor](services/…)` markup. The blog renderer needs `RichText` on the answer and section paragraphs; that is a one-line change in `BlogView`.
- The **commercial page the guide supports goes first**.
- Anchors describe the destination ("private car from Jeddah Airport to Makkah"). Never "click here", "view page" or "learn more". Don't reuse the same anchor for the same URL across guides.
- Arabic anchors are written natively (e.g. "توصيل خاص من مطار جدة إلى مكة") and link Arabic to Arabic. They are not translations of the EN anchor.
- Add a test (`tests/blog-content.test.ts`) that fails if a guide has fewer than 2 inline links in its first 200 words, in either locale.

## Per-guide plan (EN anchors; AR written at implementation)

### Private transfer guides
| Guide (/blog/…) | Link 1 (primary) | Link 2 | Link 3 | Link 4 |
|---|---|---|---|---|
| private-transport-saudi-arabia-guide | "airport transfers across Saudi Arabia" → services/airport-transfers | "private intercity transfers between cities" → services/intercity-transfers | "Umrah transport between Jeddah, Makkah and Madinah" → services/umrah-transport | "a chauffeur by the hour or day" → services/chauffeur-services |
| jeddah-airport-to-makkah-train-bus-taxi-private-car | "private car from Jeddah Airport to Makkah" → umrah-transport/jeddah-airport-to-makkah | "Jeddah airport pickups" → airport-transfers/jeddah-airport | "family Umrah transport" → umrah-transport/family-umrah-transport | — |
| makkah-to-madinah-train-bus-or-private-car | "Makkah to Madinah private car" → intercity-transfers/makkah-to-madinah | "the return from Madinah to Makkah" → intercity-transfers/madinah-to-makkah | "Madinah ziyarat by car" → umrah-transport/madinah-ziyarat | — |
| how-to-book-private-car-with-driver-saudi-arabia | "private car with chauffeur" → services/chauffeur-services | "pre-booked airport pickup" → airport-transfers/private-airport-pickup | "vehicles by group size" → fleet | — |
| jeddah-to-madinah-train-flight-bus-or-car | "Jeddah to Madinah by private car" → intercity-transfers/jeddah-to-madinah | "Madinah to Jeddah Airport transfer" → intercity-transfers/madinah-to-jeddah | "Madinah airport transfers" → airport-transfers/madinah-airport | — |
| madinah-to-alula-by-road-guide | "Madinah to AlUla private transfer" → intercity-transfers/madinah-to-alula | "getting around AlUla with a driver" → tourism-transport/alula | "AlUla International Airport (ULH) transfers" → airport-transfers/alula-airport | "AlUla to Madinah return drive" → intercity-transfers/alula-to-madinah |
| private-car-with-driver-vs-taxi-saudi-arabia | "private car with a driver" → services/chauffeur-services | "business chauffeur for meeting days" → chauffeur-services/business-chauffeur | "pre-booked airport transfers" → services/airport-transfers | — |
| hyundai-staria-with-driver-family-group-travel | "the vehicles we arrange, including the Staria" → fleet | "family transport with a driver" → group-transportation/family-transport | "family airport transfers" → airport-transfers/family-airport-transfer | "family Umrah transport" → umrah-transport/family-umrah-transport |
| cross-border-private-transfer-checklist | "cross-border private transfers" → services/cross-border-transfers | "Riyadh to Doha by car" → intercity-transfers/riyadh-to-doha | "Dammam to Bahrain over the causeway" → intercity-transfers/dammam-to-bahrain | "Riyadh to Dubai by road" → intercity-transfers/riyadh-to-dubai |
| private-car-vs-flight-vs-rental-saudi-intercity | "Riyadh to Jeddah private car" → intercity-transfers/riyadh-to-jeddah | "Riyadh to Dammam by private car" → intercity-transfers/riyadh-to-dammam | "all intercity routes" → services/intercity-transfers | — |
| choosing-vehicle-size-family-group-travel-saudi | "sedan, GMC Yukon and Staria compared" → fleet | "van and minibus hire with driver" → group-transportation/van-and-minibus | "luxury SUV with driver" → luxury-transportation/luxury-suv | — |
| airport-pickup-tips-saudi-arrivals | "Riyadh airport pickup" → airport-transfers/riyadh-airport | "Jeddah airport transfer" → airport-transfers/jeddah-airport | "Dammam airport transfer" → airport-transfers/dammam-airport | "meet-and-greet airport pickup" → airport-transfers/private-airport-pickup |
| private-airport-transfers-saudi-arabia | "private airport transfers" → services/airport-transfers | "VIP airport transfer" → airport-transfers/vip-airport-transfer | "Jeddah Airport to Makkah transfer" → umrah-transport/jeddah-airport-to-makkah | — |
| umrah-private-transport-plan-jeddah-makkah-madinah | "Umrah transport with a private driver" → services/umrah-transport | "Jeddah Airport to Makkah by private car" → umrah-transport/jeddah-airport-to-makkah | "Makkah to Madinah transfer" → intercity-transfers/makkah-to-madinah | "Makkah ziyarat car" → umrah-transport/makkah-ziyarat |
| riyadh-to-jeddah-by-road-guide | "Riyadh to Jeddah private car with driver" → intercity-transfers/riyadh-to-jeddah | "the Jeddah to Riyadh return" → intercity-transfers/jeddah-to-riyadh | "Riyadh to Taif by car" → intercity-transfers/riyadh-to-taif | — |
| riyadh-to-dammam-private-transfer | "Riyadh to Dammam private car" → intercity-transfers/riyadh-to-dammam | "Riyadh to Al Khobar and Dhahran" → intercity-transfers/riyadh-to-al-khobar | "Dammam to Riyadh return" → intercity-transfers/dammam-to-riyadh | "business chauffeur for the day" → chauffeur-services/business-chauffeur |
| makkah-to-taif-private-car-day-trip | "Makkah to Taif private car" → intercity-transfers/makkah-to-taif | "Taif to Makkah with a Miqat stop" → intercity-transfers/taif-to-makkah | "Taif sightseeing with a driver" → tourism-transport/taif | — |
| private-chauffeur-service-saudi-arabia | "business chauffeur in Riyadh" → chauffeur-services/business-chauffeur | "multi-day chauffeur" → chauffeur-services/multi-day-chauffeur | "Riyadh airport pickup" → airport-transfers/riyadh-airport | — |
| luxury-suv-gmc-transfer-saudi-arabia | "luxury SUV with driver" → luxury-transportation/luxury-suv | "VIP airport transfer" → airport-transfers/vip-airport-transfer | "Riyadh to Jeddah in a GMC" → intercity-transfers/riyadh-to-jeddah | — |
| saudi-arabia-to-qatar-private-transfer | "Saudi Arabia to Qatar private transfer" → cross-border-transfers/qatar | "Riyadh to Doha by private car" → intercity-transfers/riyadh-to-doha | "Dammam to Doha via Salwa" → intercity-transfers/dammam-to-doha | — |
| saudi-arabia-to-bahrain-private-transfer | "Saudi Arabia to Bahrain by private car" → cross-border-transfers/bahrain | "Riyadh to Manama via the causeway" → intercity-transfers/riyadh-to-manama | "Dammam and Al Khobar to Bahrain" → intercity-transfers/dammam-to-bahrain | — |
| saudi-arabia-to-uae-private-transfer | "Saudi Arabia to UAE private transfer" → cross-border-transfers/uae | "Riyadh to Dubai by private car" → intercity-transfers/riyadh-to-dubai | "Riyadh to Abu Dhabi by road" → intercity-transfers/riyadh-to-abu-dhabi | "Dammam to Dubai" → intercity-transfers/dammam-to-dubai |

### Towing and heavy transport guides
| Guide (/blog/…) | Link 1 (primary) | Link 2 | Link 3 | Link 4 |
|---|---|---|---|---|
| car-towing-service-saudi-arabia | "satha car recovery" → recovery-heavy-transport/satha-car-recovery | "satha in Riyadh" → satha-car-recovery/riyadh | "satha in Jeddah" → satha-car-recovery/jeddah | "satha in Dammam and Al Khobar" → satha-car-recovery/dammam |
| flatbed-vs-hydraulic-towing-saudi-arabia | "flatbed satha recovery" → satha-car-recovery | "flatbed trailer transport" → flatbed-trailer-transport | "moving a car between cities" → car-transport-between-cities | — |
| roadside-assistance-vehicle-recovery-saudi-arabia | "book a satha for a breakdown" → satha-car-recovery | "car recovery in Riyadh" → satha-car-recovery/riyadh | "recovery and heavy transport services" → recovery-heavy-transport | — |
| intercity-car-transport-saudi-arabia | "car transport between Saudi cities" → car-transport-between-cities | "satha car recovery" → satha-car-recovery | "satha in Jeddah" → satha-car-recovery/jeddah | — |
| heavy-machinery-transportation-saudi-arabia | "heavy equipment transport" → heavy-equipment-transport | "lowbed transport" → lowbed-transport | "oversized load transport" → oversized-load-transport | "heavy equipment transport in Riyadh" → heavy-equipment-transport/riyadh |
| lowbed-trailer-transport-saudi-arabia | "lowbed trailer transport" → lowbed-transport | "flatbed trailer transport" → flatbed-trailer-transport | "oversized loads" → oversized-load-transport | — |
| excavator-transportation-saudi-arabia | "excavator transport" → excavator-transport | "lowbed transport for tracked machines" → lowbed-transport | "heavy equipment transport in Jeddah" → heavy-equipment-transport/jeddah | — |
| bulldozer-wheel-loader-transport-saudi-arabia | "wheel loader transport" → wheel-loader-transport | "heavy equipment transport" → heavy-equipment-transport | "heavy equipment transport in Dammam and Jubail" → heavy-equipment-transport/dammam | — |
| crane-industrial-equipment-transport-saudi-arabia | "crane transport" → crane-transport | "industrial machinery relocation" → industrial-machinery-relocation | "forklift transport" → forklift-transport | — |
| choose-heavy-equipment-transport-company-saudi-arabia | "heavy equipment transport" → heavy-equipment-transport | "lowbed transport" → lowbed-transport | "recovery and heavy transport" → recovery-heavy-transport | — |

(Heavy paths sit under `services/recovery-heavy-transport/`.)

## Specific fixes

| Page | Link required | Status |
|---|---|---|
| /services/tourism-transport/alula/ | → intercity-transfers/madinah-to-alula | **Done** (EN + AR, in-body, section "Distances between sites") |
| /services/intercity-transfers/riyadh-to-alula/ | → airport-transfers/alula-airport and city-transport/tabuk | **Done** (EN + AR, in-body, section "Road, air or a longer itinerary") |
| /services/city-transport/tabuk/ | → tourism-transport/alula | **Done** (EN + AR, in-body, section "Visitors and projects") |
| /services/city-transport/tabuk/ | → tabuk-airport, neom-bay-airport, tabuk-to-neom, cross-border-transfers/jordan | **Waiting**: those pages are Task D and do not exist yet. Each link is added in the same commit that publishes its page, so there is never a link to a 404 |
| Sitewide footer | Replace the "Riyadh" column with region hubs | **Done**: a "Regions" column with Hejaz (West), Central (Najd), Eastern Province and North-West, each listing its city hubs and main airport (EN + AR) |

### Footer region contents (as built)
- **Hejaz (West):** Jeddah, Makkah, Madinah, Taif (tourism), Yanbu, Jeddah Airport
- **Central (Najd):** Riyadh, Buraydah, Riyadh Airport, Qassim Airport
- **Eastern Province:** Dammam, Al Khobar, Jubail, Al Ahsa, Dammam Airport
- **North-West:** Tabuk, AlUla, Hail, AlUla Airport (Tabuk Airport and NEOM Bay Airport are added when built)

The Riyadh-only links that left the footer (Riyadh events, sightseeing, satha and heavy) still have their in-content links. Footer links never counted toward the 3-contextual-link rule anyway.

**Optional later:** four real region hub pages (`/services/regions/hejaz/` etc.) with their own content. Only worth building if they can say something useful beyond a list of links; otherwise they are thin pages.
