# Verification report: facts the owner must confirm before they are published

## Vehicle pages, 2026-11-27 (Phase 3A)
Built: `/fleet/gmc-yukon-with-driver/` and `/fleet/hyundai-staria-with-driver/` (EN + AR). The GMC and Staria guides were merged into them (308, 0 GSC impressions).
Needs owner confirmation before it can be published:
- GMC Yukon / Suburban / Tahoe: passenger and large-bag capacity (pages say "confirmed per vehicle in the quotation")
- Hyundai Staria: whether a 9- or 11-seat version is supplied (page publishes 7 only)
- Toyota Hiace and Toyota Coaster: do partners supply them? No page until confirmed
- "From SAR" price per vehicle for the 8 routes in each vehicle table (`src/content/prices.ts`, keys `gmc`, `staria`)

## Airport pages, 2026-11-27 (Phase 3B)
Built: `/services/airport-transfers/tabuk-airport/` and `/services/airport-transfers/yanbu-airport/` (EN + AR). Distances read from Google Maps on 27 Nov 2026 (airport as start point).
NEOM Bay Airport (NUM): no page. Only 3 local facts verifiable, schedule small and changing, project area restricted; covered as a section on the Tabuk airport page.
Owner to confirm:
- Partners can collect at TUU and YNB (pages say availability is confirmed in the quotation)
- Whether NEOM / Sharma pickups are possible at all (page promises nothing)
- "From SAR" prices for both airports (`src/content/prices.ts`)

## Route pages, 2026-11-27 (Phase 3C, P1)
Built: madinah-to-yanbu, madinah-to-tabuk, tabuk-to-alula (EN + AR, both directions on one page). Distances from Google Maps, 27 Nov 2026.
Not built: tabuk-to-neom (restricted project area, too few verifiable facts). P2/P3 (tabuk-to-jeddah, tabuk-to-dammam, yanbu-to-umluj) later.
Note: the brief's "Madinah Airport to Yanbu about 246 km" measures about 266 km from MED to Yanbu's historic area; 246 km is from the Prophet's Mosque. Brief's "Madinah to Tabuk about 683 km" matches the Route 15 road (about 690 km); the faster road through AlUla is about 633 km.
Owner to confirm: partner coverage for Tabuk and the north-west; "from" prices for the three routes.
