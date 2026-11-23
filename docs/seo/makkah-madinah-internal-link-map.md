# Makkah & Madinah — internal link map

Date: 2026-11-23. Everything below is **implemented** in code, not proposed.

## 1. How links work now

| Link type | Where it renders | Source of truth |
|---|---|---|
| **In-text contextual links (new)** | Inside section paragraphs and lists. Written as `[anchor](services/…)` in content files and rendered by `src/components/RichText.tsx` with the locale-aware `Link`, so Arabic pages link to `/ar/…`. | `src/content/makkah-madinah.ts`; targets are checked at build by `validateRegistry()` (unknown target, self-link or markup outside sections fails the build) |
| Related cards | "Related" section near the end of the page | `related` on each page plus `relatedAdds` in `makkah-madinah.ts` |
| City-hub route chips | On `city-transport/<city>`: every intercity route whose slug starts or ends in that city and is not already a card | `cityRoutes()` in `ServicePageView.tsx` (automatic) |
| Breadcrumbs | Top of every page, plus `BreadcrumbList` JSON-LD | `parent` chain |
| Menus / footer | Header dropdowns and footer | `src/lib/nav.ts`. **No footer keyword links were added.** |

Anchor rules applied:
- Descriptive anchors that name the journey.
- Varied anchors: the Makkah hub is reached with "Makkah private transfers page" from JED → Makkah, with "Makkah Private Transfers" as a card label, and with "Makkah private transfers by…" in breadcrumbs. The Madinah hub is reached with "Madinah private transfers page" from MED.
- No exact-match keyword repetition across pages.
- No links to unrelated pages.

## 2. In-text links added (EN; the AR pages carry the same links with native Arabic anchors)

| Source URL | Destination URL | Anchor text | Placement |
|---|---|---|---|
| /en/services/airport-transfers/madinah-airport/ | /en/services/city-transport/madinah/ | Madinah private transfers page | In-text, section "From MED to the Prophet's Mosque area" |
| /en/services/airport-transfers/madinah-airport/ | /en/services/intercity-transfers/madinah-to-jeddah/ | Madinah to Jeddah airport transfer | In-text, section "Hotel to Madinah airport for your flight out" |
| /en/services/airport-transfers/madinah-airport/ | /en/services/umrah-transport/madinah-ziyarat/ | ziyarat stops in the same booking | In-text, section "Straight from the airport to ziyarat or another city" |
| /en/services/airport-transfers/madinah-airport/ | /en/services/intercity-transfers/madinah-to-makkah/ | Madinah to Makkah | In-text, section "Straight from the airport to ziyarat or another city" |
| /en/services/airport-transfers/madinah-airport/ | /en/services/intercity-transfers/madinah-to-riyadh/ | Madinah to Riyadh | In-text, section "Straight from the airport to ziyarat or another city" |
| /en/services/umrah-transport/jeddah-airport-to-makkah/ | /en/fleet/ | vehicle categories page | In-text, section "Which vehicle to request from the airport" |
| /en/services/umrah-transport/jeddah-airport-to-makkah/ | /en/services/intercity-transfers/jeddah-to-makkah/ | Jeddah to Makkah by private car | In-text, section "Staying in Jeddah first, or returning to the airport" |
| /en/services/umrah-transport/jeddah-airport-to-makkah/ | /en/services/intercity-transfers/makkah-to-jeddah/ | Makkah to Jeddah Airport | In-text, section "Staying in Jeddah first, or returning to the airport" |
| /en/services/umrah-transport/jeddah-airport-to-makkah/ | /en/services/city-transport/makkah/ | Makkah private transfers page | In-text, section "Staying in Jeddah first, or returning to the airport" |
| /en/services/city-transport/makkah/ | /en/services/umrah-transport/jeddah-airport-to-makkah/ | Jeddah Airport to Makkah | In-text, section "What you can request in Makkah" |
| /en/services/city-transport/makkah/ | /en/services/intercity-transfers/jeddah-to-makkah/ | a private car from Jeddah to Makkah | In-text, section "What you can request in Makkah" |
| /en/services/city-transport/makkah/ | /en/services/umrah-transport/makkah-ziyarat/ | Makkah ziyarat transport | In-text, section "What you can request in Makkah" |
| /en/services/city-transport/makkah/ | /en/services/intercity-transfers/makkah-to-madinah/ | Makkah to Madinah by private car | In-text, section "What you can request in Makkah" |
| /en/services/city-transport/makkah/ | /en/services/intercity-transfers/makkah-to-jeddah/ | Makkah to Jeddah Airport | In-text, section "What you can request in Makkah" |
| /en/services/city-transport/makkah/ | /en/services/intercity-transfers/makkah-to-taif/ | Makkah to Taif | In-text, section "What you can request in Makkah" |
| /en/services/city-transport/makkah/ | /en/services/intercity-transfers/makkah-to-riyadh/ | Makkah to Riyadh | In-text, section "What you can request in Makkah" |
| /en/services/city-transport/makkah/ | /en/fleet/ | vehicle categories page | In-text, section "Sedan, SUV or GMC: choosing the vehicle" |
| /en/services/city-transport/makkah/ | /en/services/airport-transfers/jeddah-airport/ | Jeddah airport transfers page | In-text, section "Arriving at Jeddah airport or the Haramain station" |
| /en/services/city-transport/makkah/ | /en/services/special-transportation/hotel-transportation/ | hotel transportation | In-text, section "Hotel-to-hotel moves with luggage" |
| /en/services/city-transport/makkah/ | /en/services/umrah-transport/family-umrah-transport/ | family Umrah transport | In-text, section "Families, elderly pilgrims and groups" |
| /en/services/city-transport/makkah/ | /en/services/umrah-transport/group-umrah-transport/ | group Umrah transport | In-text, section "Families, elderly pilgrims and groups" |
| /en/services/city-transport/madinah/ | /en/services/airport-transfers/madinah-airport/ | Madinah airport transfers | In-text, section "Where Madinah journeys start and end" |
| /en/services/city-transport/madinah/ | /en/services/umrah-transport/madinah-ziyarat/ | Madinah ziyarat transport | In-text, section "Where Madinah journeys start and end" |
| /en/services/city-transport/madinah/ | /en/services/intercity-transfers/madinah-to-makkah/ | Madinah to Makkah by private car | In-text, section "Where Madinah journeys start and end" |
| /en/services/city-transport/madinah/ | /en/services/intercity-transfers/madinah-to-jeddah/ | Madinah to Jeddah Airport | In-text, section "Where Madinah journeys start and end" |
| /en/services/city-transport/madinah/ | /en/services/intercity-transfers/jeddah-to-madinah/ | Jeddah to Madinah | In-text, section "Where Madinah journeys start and end" |
| /en/services/city-transport/madinah/ | /en/services/intercity-transfers/madinah-to-alula/ | Madinah to AlUla | In-text, section "Where Madinah journeys start and end" |
| /en/services/city-transport/madinah/ | /en/services/intercity-transfers/madinah-to-riyadh/ | Madinah to Riyadh | In-text, section "Where Madinah journeys start and end" |
| /en/services/city-transport/madinah/ | /en/fleet/ | vehicle categories page | In-text, section "Which vehicle to ask for in Madinah" |
| /en/services/city-transport/madinah/ | /en/services/umrah-transport/family-umrah-transport/ | family Umrah transport | In-text, section "Families, elders and groups" |
| /en/services/city-transport/madinah/ | /en/services/umrah-transport/group-umrah-transport/ | group Umrah transport | In-text, section "Families, elders and groups" |
| /en/services/intercity-transfers/madinah-to-riyadh/ | /en/services/umrah-transport/madinah-ziyarat/ | Madinah ziyarat transport | In-text, section "Leaving your Madinah hotel" |
| /en/services/intercity-transfers/madinah-to-riyadh/ | /en/services/city-transport/riyadh/ | Riyadh city transport | In-text, section "Arriving in Riyadh" |
| /en/services/intercity-transfers/madinah-to-riyadh/ | /en/services/intercity-transfers/riyadh-to-madinah/ | Riyadh to Madinah | In-text, section "Road or a domestic flight" |
| /en/services/intercity-transfers/madinah-to-riyadh/ | /en/services/intercity-transfers/makkah-to-madinah/ | Makkah to Madinah by private car | In-text, section "Ending a two-city trip in Riyadh" |
| /en/services/intercity-transfers/madinah-to-riyadh/ | /en/services/intercity-transfers/madinah-to-makkah/ | Madinah to Makkah transfer | In-text, section "Ending a two-city trip in Riyadh" |
| /en/services/intercity-transfers/madinah-to-riyadh/ | /en/services/intercity-transfers/makkah-to-riyadh/ | Makkah to Riyadh | In-text, section "Ending a two-city trip in Riyadh" |

## 3. Related-card links added

| Source | Added destinations |
|---|---|
| /services/city-transport/makkah/ | jeddah-airport-to-makkah, makkah-to-madinah, makkah-to-jeddah, airport-transfers/jeddah-airport, family-umrah-transport, fleet (plus the existing umrah hub, makkah-ziyarat, jeddah-to-makkah, city-transport, hotel-transportation) |
| /services/city-transport/madinah/ | madinah-to-makkah, madinah-to-jeddah, madinah-to-riyadh, family-umrah-transport, fleet |
| /services/airport-transfers/madinah-airport/ | city-transport/madinah, madinah-to-makkah, madinah-ziyarat, madinah-to-riyadh |
| /services/umrah-transport/jeddah-airport-to-makkah/ | city-transport/makkah, jeddah-to-makkah, makkah-to-jeddah |
| /services/intercity-transfers/makkah-to-madinah/ | city-transport/makkah, city-transport/madinah |
| /services/intercity-transfers/riyadh-to-madinah/ | madinah-to-riyadh, city-transport/madinah |
| /services/intercity-transfers/makkah-to-riyadh/ | madinah-to-riyadh |
| /services/intercity-transfers/madinah-to-alula/ | city-transport/madinah |
| /services/umrah-transport/ | city-transport/makkah, city-transport/madinah |
| /services/umrah-transport/makkah-ziyarat/ | city-transport/makkah |
| /services/umrah-transport/madinah-ziyarat/ | city-transport/madinah |
| /services/intercity-transfers/madinah-to-riyadh/ (new) | riyadh-to-madinah, city-transport/madinah, madinah-ziyarat, madinah-to-makkah, makkah-to-riyadh, madinah-airport, city-transport/riyadh, fleet |

## 4. Brief architecture vs what exists

| Brief requirement | Implemented as |
|---|---|
| Makkah page → Makkah–Madinah, JED → Makkah, Makkah → Jeddah | In-text list items 1, 2, 6 and 7 of "What you can request in Makkah", plus cards |
| Makkah page → GMC / SUV / sedan | One vehicle section on the hub linking to `/fleet/`. Separate city-vehicle pages are not built (see roadmap §3). |
| Madinah page → Madinah–Makkah, Madinah–Jeddah, JED → Madinah, Madinah airport | In-text list ("Where Madinah journeys start and end"), plus cards |
| Makkah → Madinah page → both hubs, reverse, JED → Makkah, vehicles | Hubs added as cards; the reverse, JED → Makkah and fleet already linked |
| Madinah → Makkah page → both hubs, reverse, airport, vehicles | Already linked (Madinah hub, Makkah hub, reverse, MED, fleet) |
| Breadcrumbs | Existing on every page |
| No orphans | `validateRegistry()` orphan check plus the indexability audit `fewInlinks` bucket = 0 across 354 URLs |

## Pass 2 additions (2026-11-23)

| Source | Destination | Anchor | Placement |
|---|---|---|---|
| /blog/umrah-private-transport-plan-jeddah-makkah-madinah/ | /services/city-transport/makkah/ | page nav label (Makkah hub) | Guide "related services" list |
| same | /services/city-transport/madinah/ | Madinah hub nav label | same |
| same | /services/intercity-transfers/madinah-to-makkah/ | route nav label | same |
| same | /services/intercity-transfers/makkah-to-jeddah/ | route nav label | same |
| same | /services/airport-transfers/madinah-airport/ | MED nav label | same |
| The five pages above | /blog/umrah-private-transport-plan-jeddah-makkah-madinah/ | guide nav label | Service page "Guides" block (automatic back-link) |
| /blog/makkah-to-madinah-train-bus-or-private-car/ ↔ /services/city-transport/makkah/ | both directions | nav labels | Guide related list / hub "Guides" block |
