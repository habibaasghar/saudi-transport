# Task B — Cannibalization map

**Rule:** one primary URL per query. All paths below sit under `/en/` (Arabic mirrors follow the same decision).
**Data caveat:** the only Search Console export on file (`ahref reports`, 2026-11-18) has 4 queries and 3 pages, so no overlap can be *measured* yet. Every merge is therefore marked **verify in GSC**: only merge once GSC → Performance → Query shows two of our URLs taking impressions for the same query and swapping positions.
Retitle and de-optimise actions are safe without GSC data, because nothing is removed.

Actions: **keep** = primary, no change · **retitle** = new title/H1 to separate intent · **de-optimise** = remove the competing query from title, H1, answer and FAQs and link to the primary instead · **merge+301** = fold content into the primary and redirect (verify in GSC first).
Titles are ≤ 60 characters including " | RideSaudi" (the template adds the suffix, so titles below are ≤ 48).

## 1. Chauffeur pages

| URL | Target keyword | Intent | Action | New title | New H1 |
|---|---|---|---|---|---|
| /services/chauffeur-services/ | chauffeur service saudi arabia, private car with chauffeur | Commercial hub | **keep** (primary) | — | — |
| /services/chauffeur-services/business-chauffeur/ | business chauffeur riyadh / saudi | Commercial B2B | **keep** | — | — |
| /services/chauffeur-services/multi-day-chauffeur/ | multi-day chauffeur, driver for several days | Commercial | **keep** | — | — |
| /services/intercity-transfers/private-intercity-chauffeur/ | multi-city trip with driver | Commercial, overlaps multi-day | **retitle**; merge+301 into multi-day-chauffeur only if both rank for "chauffeur for multiple days" (**verify in GSC**) | Multi-City Private Car Trip Across Saudi Arabia | One car and driver for a trip through several Saudi cities |
| /luxury-transportation/luxury-chauffeur/ | luxury chauffeur saudi arabia | Commercial premium | **keep**; de-optimise "VIP" wording (that query belongs to vip-car-service) | — | — |
| /services/umrah-transport/private-umrah-chauffeur/ | umrah chauffeur | Commercial (Umrah) | **keep** | — | — |
| /services/event-transportation/vip-event-chauffeur/ | vip chauffeur for events | Commercial (event) | **keep** | — | — |
| /services/special-transportation/bilingual-chauffeur/ | english / urdu speaking driver request | Commercial niche | **keep** | — | — |
| /blog/private-chauffeur-service-saudi-arabia/ | (slug targets the hub query) | Informational | **retitle + de-optimise** the hub query; merge+301 into business-chauffeur if GSC shows it outranking the hub (**verify in GSC**) | Planning a Riyadh Business Trip With a Driver | How to plan a Riyadh business trip around a car and driver |
| /blog/private-car-with-driver-vs-taxi-saudi-arabia/ | private car vs taxi | Informational comparison | **keep** | — | — |

## 2. Cross-border (intercity city-pairs vs /cross-border-transfers/* vs blog)

Split: **country page** = "Saudi to {country} by road" (documents, crossing, all starting cities); **city-pair page** = "{city} to {city} private car"; **blog** = how to cross (checklist, timing, paperwork). No commercial "private transfer" in blog titles.

| URL | Target keyword | Intent | Action | New title | New H1 |
|---|---|---|---|---|---|
| /services/cross-border-transfers/ | cross border transfer saudi arabia | Commercial hub | **keep** | — | — |
| /services/cross-border-transfers/uae/ | saudi to uae by car / road | Commercial (country) | **de-optimise** "Riyadh to Dubai" from title, H1 and FAQs; link to the city pair | — | — |
| /services/intercity-transfers/riyadh-to-dubai/ | riyadh to dubai private car / by road | Commercial (city pair) | **keep** (primary for the city pair) | — | — |
| /services/intercity-transfers/dammam-to-dubai/ | dammam to dubai by car | Commercial (city pair) | **keep** | — | — |
| /services/intercity-transfers/riyadh-to-abu-dhabi/ | riyadh to abu dhabi by car | Commercial (city pair) | **keep** | — | — |
| /blog/saudi-arabia-to-uae-private-transfer/ | currently "Saudi Arabia to UAE by Road: Riyadh to Dubai" → collides with both pages above | Informational | **retitle** (slug keeps "private-transfer"; consider merge+301 into /cross-border-transfers/uae/, **verify in GSC**) | Driving Saudi to UAE: Batha Border Checklist | Crossing from Saudi Arabia to the UAE by road at Batha |
| /services/cross-border-transfers/qatar/ | saudi to qatar by road | Commercial (country) | **keep**; de-optimise "Riyadh to Doha" | — | — |
| /services/intercity-transfers/riyadh-to-doha/ | riyadh to doha by car | Commercial (city pair) | **keep** | — | — |
| /services/intercity-transfers/dammam-to-doha/ | dammam to doha by car | Commercial (city pair) | **keep** | — | — |
| /blog/saudi-arabia-to-qatar-private-transfer/ | "Saudi Arabia to Qatar by Road" = same head term as the country page | Informational | **retitle** (merge+301 into /qatar/ only if GSC shows the swap, **verify in GSC**) | Salwa Border Crossing by Car: What to Expect | Crossing at Salwa: a road guide from Saudi Arabia to Qatar |
| /services/cross-border-transfers/bahrain/ | saudi to bahrain by car | Commercial (country) | **keep** | — | — |
| /services/intercity-transfers/riyadh-to-manama/ | riyadh to bahrain by car | Commercial (city pair) | **keep** | — | — |
| /services/intercity-transfers/dammam-to-bahrain/ | dammam / khobar to bahrain | Commercial (city pair) | **keep** | — | — |
| /blog/saudi-arabia-to-bahrain-private-transfer/ | "Saudi to Bahrain by Car via King Fahd Causeway" = country-page term | Informational | **retitle** (**verify in GSC** before any merge) | King Fahd Causeway by Car: Crossing Guide | Crossing the King Fahd Causeway by car: timing and paperwork |
| /services/cross-border-transfers/kuwait/ + /intercity-transfers/riyadh-to-kuwait-city/ | country vs city pair | Commercial | **keep both**; de-optimise "Riyadh" on the country page | — | — |
| /blog/cross-border-private-transfer-checklist/ | cross border checklist | Informational | **keep** | — | — |
| (new) /services/cross-border-transfers/jordan/ | saudi to jordan by car | Commercial (country) | **new** (Task D) | — | — |

## 3. Reverse route pairs (A-to-B vs B-to-A)

Owner decision (2026-11-14): keep both directions, each genuinely different. The problem is older A-to-B pages that still target **both** directions after the reverse page was built ("⇄" eyebrow, "and the same in reverse" in the answer, a "B to A" section and FAQ). Fix = **de-optimise** the reverse direction on the A-to-B page: change the eyebrow to "→", drop "in reverse" from the answer, turn the reverse section or FAQ into one line linking to the reverse page. No merges.

| URL | Target keyword | Intent | Action | What to remove (links to reverse page instead) |
|---|---|---|---|---|
| /intercity-transfers/riyadh-to-alula/ | riyadh to alula private car | Commercial | **de-optimise** reverse | Eyebrow ⇄, answer "and the same in reverse", section "AlUla to Riyadh: the return journey", FAQ "Can you bring me from AlUla back to Riyadh?" → /alula-to-riyadh/ |
| /intercity-transfers/riyadh-to-abha/ | riyadh to abha by car | Commercial | **de-optimise** reverse | Eyebrow ⇄, "in reverse", section "Abha to Riyadh: the return journey", FAQ → /abha-to-riyadh/ |
| /intercity-transfers/riyadh-to-madinah/ | riyadh to madinah by car | Commercial | **de-optimise** reverse | Eyebrow ⇄, "in reverse", FAQ "return from Madinah to Riyadh" → /madinah-to-riyadh/ |
| /intercity-transfers/riyadh-to-makkah/ | riyadh to makkah for umrah | Commercial | **de-optimise** reverse | Eyebrow ⇄, FAQ "bring us back from Makkah to Riyadh" → /makkah-to-riyadh/ |
| /intercity-transfers/jeddah-to-makkah/ | jeddah to makkah private car | Commercial | **de-optimise** reverse | Eyebrow ⇄, "in reverse", FAQ "from Makkah back to Jeddah" → /makkah-to-jeddah/ |
| /intercity-transfers/jeddah-to-madinah/ | jeddah to madinah private car | Commercial | **de-optimise** reverse | Eyebrow ⇄, FAQ "from Madinah back to Jeddah" → /madinah-to-jeddah/ |
| /intercity-transfers/jeddah-to-taif/ | jeddah to taif by car | Commercial | **de-optimise** reverse | Eyebrow ⇄, section "Taif to Jeddah, and other starting points", FAQ "Do you also drive from Taif to Jeddah?" → /taif-to-jeddah/ |
| /intercity-transfers/makkah-to-taif/ | makkah to taif by car | Commercial | **de-optimise** reverse | Eyebrow ⇄, "in reverse" → /taif-to-makkah/ |
| /intercity-transfers/madinah-to-alula/ | madinah to alula | Commercial | **de-optimise** reverse | Eyebrow ⇄, "in reverse" → /alula-to-madinah/ |
| /intercity-transfers/jeddah-to-alula/ | jeddah to alula | Commercial | **retitle + de-optimise** | Title "…One Way or Return" pulls the reverse query → New title: **Jeddah to AlUla Private Car with Driver** · H1 unchanged · link return to /alula-to-jeddah/ |
| /intercity-transfers/jeddah-to-yanbu/ | jeddah to yanbu | Commercial | **de-optimise** reverse | Eyebrow ⇄, "in reverse" → /yanbu-to-jeddah/ |
| /intercity-transfers/alula-to-dammam/ | alula to dammam | Commercial | **retitle** (no reverse page exists, so the title chases both) | New title: **AlUla to Dammam Private Car with Driver** · H1 unchanged; keep one line saying the reverse can be requested |
| /intercity-transfers/abha-to-riyadh/ | abha to riyadh | Commercial | **retitle** (title names "Suburban", which is **not** an owner-confirmed vehicle) | New title: **Abha to Riyadh Private Car: GMC or Staria** |
| All other pairs (makkah↔madinah, riyadh↔dammam, riyadh↔jeddah, dammam↔jeddah, jazan↔jeddah, abha↔jeddah, khobar↔riyadh, alula↔riyadh/madinah/jeddah reverse pages) | direction-specific | Commercial | **keep** (already one direction each) | — |

## 4. Riyadh – Dammam / Al Khobar

| URL | Target keyword | Intent | Action | New title | New H1 |
|---|---|---|---|---|---|
| /intercity-transfers/riyadh-to-dammam/ | riyadh to dammam private car | Commercial | **keep** (primary) | — | — |
| /intercity-transfers/riyadh-to-al-khobar/ | riyadh to khobar / dhahran | Commercial | **keep**; never use "Dammam" in its title | — | — |
| /intercity-transfers/dammam-to-riyadh/ | dammam to riyadh | Commercial | **keep** | — | — |
| /intercity-transfers/al-khobar-to-riyadh/ | khobar to riyadh | Commercial | **keep** | — | — |
| /blog/riyadh-to-dammam-private-transfer/ | title "Riyadh to Dammam & Al Khobar by Private Car" = commercial query of 2 route pages | Should be informational | **retitle**; if GSC shows it taking "riyadh to dammam private car" impressions from the route page → merge+301 into /riyadh-to-dammam/ (**verify in GSC**) | Riyadh to Dammam: Train, Flight or Car Compared | Riyadh to Dammam: train, flight or a car with driver? |
| /blog/private-car-vs-flight-vs-rental-saudi-intercity/ | generic intercity comparison | Informational | **keep**, but drop Riyadh–Dammam specifics if the blog above is retitled to a comparison (or merge the two guides, **verify in GSC**) | — | — |
| /city-transport/dammam/, /city-transport/al-khobar/, /airport-transfers/dammam-airport/ | in-city / airport | Commercial | **keep** | — | — |

## 5. Jeddah Airport to Makkah (umrah vs intercity vs airport vs blog)

| URL | Target keyword | Intent | Action | New title | New H1 |
|---|---|---|---|---|---|
| /umrah-transport/jeddah-airport-to-makkah/ | jeddah airport to makkah (taxi / private car / transfer) | Commercial | **keep** (primary for every "airport to Makkah" query) | — | — |
| /intercity-transfers/jeddah-to-makkah/ | jeddah to makkah private car (from hotel/home) | Commercial | **keep**; de-optimise "airport" (title already says "from Your Hotel"); answer sends airport arrivals to the Umrah page | — | — |
| /airport-transfers/jeddah-airport/ | jeddah airport transfer / pickup | Commercial | **keep**; keep "Makkah" out of title and H1, link to the Umrah page for Makkah arrivals | — | — |
| /intercity-transfers/makkah-to-jeddah/ | makkah to jeddah airport | Commercial (reverse) | **keep** | — | — |
| /blog/jeddah-airport-to-makkah-train-bus-taxi-private-car/ | jeddah airport to makkah train or taxi | Informational comparison | **keep** (title is comparison-led) | — | — |
| /blog/umrah-private-transport-plan-jeddah-makkah-madinah/ | umrah transport plan | Informational | **keep** | — | — |

## 6. Blog vs route pairs

| Blog URL | Competing service URL | Blog's target | Action | New blog title | New blog H1 |
|---|---|---|---|---|---|
| /blog/riyadh-to-jeddah-by-road-guide/ ("Riyadh to Jeddah by Private Car: Road & Stops") | /intercity-transfers/riyadh-to-jeddah/ | Road guide (stops, timing) | **retitle** (drop "Private Car") | Riyadh to Jeddah by Road: Route, Stops & Timing | Riyadh to Jeddah by road: the route, rest stops and timing |
| /blog/makkah-to-taif-private-car-day-trip/ ("…Day Trip by Private Car") | /intercity-transfers/makkah-to-taif/ | Day-trip plan | **retitle** | Makkah to Taif Day Trip: Stops & Timing | A Makkah to Taif day trip: where to stop and when to leave |
| /blog/madinah-to-alula-by-road-guide/ | /intercity-transfers/madinah-to-alula/ | Distance and time | **keep**; route page must not chase "distance" in its title | — | — |
| /blog/makkah-to-madinah-train-bus-or-private-car/ | /intercity-transfers/makkah-to-madinah/ | Comparison | **keep** | — | — |
| /blog/jeddah-to-madinah-train-flight-bus-or-car/ | /intercity-transfers/jeddah-to-madinah/ | Comparison | **keep** | — | — |
| /blog/private-airport-transfers-saudi-arabia/ ("Private Airport Transfers in Saudi Arabia: Guide") | /services/airport-transfers/ (hub) | Same head term | **merge+301** into the hub, or retitle if GSC shows no overlap (**verify in GSC**) | Which Saudi Airport Transfer to Book: A Guide | Saudi airport arrivals: which transfer suits your trip |
| /blog/airport-pickup-tips-saudi-arrivals/ | blog above | Arrival tips | **keep**; if the blog above merges, absorb its unique tips here | — | — |
| /blog/luxury-suv-gmc-transfer-saudi-arabia/ ("GMC Yukon With Driver in KSA") | /luxury-transportation/luxury-suv/ | Vehicle decision | **keep**; luxury-suv page de-optimises "GMC Yukon with driver" and links to the guide | — | — |
| /blog/hyundai-staria-with-driver-family-group-travel/ | /fleet/ | Vehicle decision | **keep** | — | — |
| /blog/private-transport-saudi-arabia-guide/ (pillar) | /services/ | Pillar | **keep** | — | — |

## 7. Luxury vs VIP

| URL | Target keyword | Intent | Action | New title | New H1 |
|---|---|---|---|---|---|
| /luxury-transportation/ | luxury transportation saudi arabia | Commercial hub | **keep** | — | — |
| /luxury-transportation/vip-car-service/ | vip car service saudi | Commercial | **keep** (primary for "VIP car / VIP transport") | — | — |
| /luxury-transportation/luxury-chauffeur/ | luxury chauffeur | Commercial | **keep**; de-optimise "VIP" | — | — |
| /luxury-transportation/luxury-suv/ | luxury suv with driver | Commercial | **keep** | — | — |
| /luxury-transportation/vip-delegation-transport/ | delegation transport | Commercial B2B | **keep** | — | — |
| /services/airport-transfers/vip-airport-transfer/ | vip airport transfer | Commercial (airport) | **keep**; vip-car-service must not chase "airport" | — | — |
| /services/event-transportation/vip-event-chauffeur/ | vip event chauffeur | Commercial (event) | **keep**; luxury-chauffeur must not chase "event" | — | — |

## Arabic
Use the same decisions on `/ar/`. Arabic titles keep the existing pattern "توصيل من X إلى Y" for routes. Retitled Arabic blog titles are written natively at implementation, not translated from this table.

## Next step
Retitle and de-optimise rows are safe to implement now (sections 3, 6 and the blog retitles in 1, 2 and 4). Merge rows wait for 28 days of GSC query data per URL.
