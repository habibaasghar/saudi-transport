# RideSaudi — Image Replacement Plan

Date: 2026-11-23. Companion to the [complete visual audit](RIDESAUDI-COMPLETE-VISUAL-AUDIT.md). Source of truth in code: `src/content/images.ts` (page heroes), `src/content/fleet.ts` (vehicle cards), `src/content/blog/posts.ts` (`guideHeroes`, guide heroes).

## A. Done in this pass (existing, licensed, on-topic photos only)

45 pages changed. Every new mapping shows the exact place or vehicle class the page is about. Nothing generic was added and no placeholder was used.

| Page URL | Before | After |
|---|---|---|
| `/en/` | no image | `locations/riyadh` |
| `/en/services/umrah-transport/jeddah-airport-to-makkah/` | no image | `locations/makkah` |
| `/en/services/intercity-transfers/` | no image | `locations/taif` |
| `/en/luxury-transportation/` | no image | `fleet/gallery/cadillac-escalade-front-exterior` |
| `/en/services/umrah-transport/makkah-ziyarat/` | no image | `locations/makkah` |
| `/en/services/umrah-transport/madinah-ziyarat/` | no image | `locations/madinah` |
| `/en/services/airport-transfers/family-airport-transfer/` | no image | `fleet/hyundai-staria-exterior` |
| `/en/services/cross-border-transfers/qatar/` | no image | `cross-border/doha` |
| `/en/services/cross-border-transfers/uae/` | `cross-border/saudi-uae-highway` | `cross-border/abu-dhabi-corniche` |
| `/en/services/cross-border-transfers/kuwait/` | no image | `cross-border/kuwait-towers` |
| `/en/luxury-transportation/vip-car-service/` | no image | `fleet/chevrolet-suburban-black-exterior` |
| `/en/luxury-transportation/luxury-suv/` | no image | `fleet/luxury-suv-vip-exterior` |
| `/en/services/chauffeur-services/business-chauffeur/` | no image | `fleet/toyota-camry-black-exterior` |
| `/en/services/umrah-transport/family-umrah-transport/` | no image | `locations/madinah` |
| `/en/services/event-transportation/riyadh/` | no image | `locations/riyadh` |
| `/en/services/event-transportation/jeddah/` | no image | `locations/jeddah` |
| `/en/services/event-transportation/dammam/` | no image | `locations/al-khobar` |
| `/en/services/group-transportation/family-transport/` | no image | `fleet/hyundai-staria-exterior` |
| `/en/services/group-transportation/van-and-minibus/` | no image | `fleet/hyundai-staria-exterior` |
| `/en/services/special-transportation/business-travel/` | no image | `fleet/hyundai-sonata-exterior` |
| `/en/fleet/` | no image | `fleet/chevrolet-suburban-black-exterior` |
| `/en/services/city-transport/dammam/` | no image | `locations/al-khobar` |
| `/en/services/city-transport/al-khobar/` | no image | `locations/al-khobar` |
| `/en/services/tourism-transport/` | no image | `locations/alula-hegra` |
| `/en/services/airport-transfers/alula-airport/` | `locations/alula` | `locations/alula-hegra` |
| `/en/services/intercity-transfers/dammam-to-bahrain/` | no image | `cross-border/king-fahd-causeway` |
| `/en/services/intercity-transfers/riyadh-to-abu-dhabi/` | `cross-border/saudi-uae-highway` | `cross-border/abu-dhabi` |
| `/en/services/airport-transfers/qassim-airport/` | no image | `locations/buraydah-date-market-night` |
| `/en/services/intercity-transfers/makkah-to-jeddah/` | no image | `locations/jeddah` |
| `/en/services/intercity-transfers/makkah-to-riyadh/` | no image | `locations/riyadh` |
| `/en/services/intercity-transfers/alula-to-madinah/` | no image | `locations/madinah` |
| `/en/services/intercity-transfers/al-khobar-to-riyadh/` | no image | `locations/riyadh` |
| `/en/blog/private-transport-saudi-arabia-guide/` | no image | `fleet/chevrolet-suburban-black-exterior` |
| `/en/blog/jeddah-airport-to-makkah-train-bus-taxi-private-car/` | no image | `locations/makkah` |
| `/en/blog/makkah-to-madinah-train-bus-or-private-car/` | no image | `locations/madinah` |
| `/en/blog/how-to-book-private-car-with-driver-saudi-arabia/` | no image | `fleet/toyota-camry-black-exterior` |
| `/en/blog/jeddah-to-madinah-train-flight-bus-or-car/` | no image | `locations/jeddah` |
| `/en/blog/madinah-to-alula-by-road-guide/` | no image | `locations/alula-elephant-rock` |
| `/en/blog/private-car-with-driver-vs-taxi-saudi-arabia/` | no image | `fleet/hyundai-sonata-exterior` |
| `/en/blog/hyundai-staria-with-driver-family-group-travel/` | no image | `fleet/hyundai-staria-exterior` |
| `/en/blog/cross-border-private-transfer-checklist/` | no image | `cross-border/king-fahd-causeway` |
| `/en/blog/private-car-vs-flight-vs-rental-saudi-intercity/` | no image | `locations/taif` |
| `/en/blog/choosing-vehicle-size-family-group-travel-saudi/` | no image | `fleet/gmc-yukon-at4-exterior` |
| `/en/blog/airport-pickup-tips-saudi-arrivals/` | no image | `airports/airport-ruh` |
| `/en/blog/choose-heavy-equipment-transport-company-saudi-arabia/` | no image | `heavy-transport/lowbed-truck-hauling-mobile-crane` |

Plus: the fleet "Sedan" card now shows `fleet/gallery/hyundai-sonata-exterior-dusk` (Sonata is an owner-confirmed sedan; the alt text says it is an example).

## B. Replace when the new asset arrives (in priority order)

| Priority | Replace | With (see acquisition sheet) | Pages |
|---|---|---|---|
| Critical | `airports/airport-ruh` (illustration) | `airports/riyadh-king-khalid-airport-arrivals.webp` | Riyadh airport page, airport-pickup tips guide |
| Critical | `airports/airport-jed` (illustration) | `airports/jeddah-king-abdulaziz-airport-terminal-1.webp` | Jeddah airport page, airport-transfers guide |
| Critical | `airports/airport-med` (illustration) | `airports/madinah-prince-mohammad-airport.webp` | Madinah airport page |
| Critical | `heavy-transport/flatbed-car-carrier-suv-highway` (311px, likely AI) | `heavy-transport/flatbed-car-carrier-highway.webp` (owner's truck) | car-transport-between-cities |
| High | `airports/airport-dmm` (illustration) | `airports/dammam-king-fahd-airport.webp` | Dammam airport page |
| High | `heavy-transport/rough-terrain-crane-loaded-on-lowbed` (re-crop of the lowbed photo) | `heavy-transport/crane-on-trailer.webp` | crane-transport, crane guide |
| High | 5 low-resolution heavy photos (satha, wheel loader, flatbed coils, forklifts) | High-resolution equivalents | 5 service pages + 4 guides |
| High | Low-resolution photos: Yanbu, Al Baha, Al Ahsa ×2, Najran, Dhahran, Abha sign, Manama, Taif airport, Haramain train | `locations/<city>-skyline.webp`, `cross-border/manama-skyline.webp`, `airports/taif-airport-terminal.webp` | 16 pages |
| Medium | `locations/makkah` (900×1600 portrait) | `locations/makkah-landscape.webp` (16:9) | 9 pages |
| Medium | `locations/jeddah` (portrait, 14 uses) | `locations/jeddah-skyline.webp` plus `locations/jeddah-al-balad.webp` to split the reuse | 14 pages |
| Medium | `locations/madinah` (portrait) | `locations/madinah-skyline.webp`; `locations/madinah-quba-mosque.webp` for ziyarat | 7 pages |

## C. Add when the new asset arrives (currently no image, by design)

The 46 remaining image-less pages are listed with exact subjects in section 5 of the audit and in the acquisition sheet. Main groups:
- airport service types: pickup, airport-to-hotel, VIP;
- event pages: wedding, corporate, conference, concert, festival, VIP event;
- chauffeur and special transport: multi-day, bilingual, senior-friendly, hotel, cruise port, travel agency;
- five cities with no photo (Jubail, Jazan, Hail, Hafar Al-Batin, Khamis Mushait) and their routes;
- four heavy pages: excavator, oversized, machinery relocation, heavy equipment.

Hubs (services, airport, city, chauffeur, special, group) intentionally keep a plain hero because their card grids carry the photos.

## D. Assets deliberately NOT used

| File | Reason |
|---|---|
| `airports/airport-abha`, `airport-alula`, `airport-tabuk` | AI renders of terminals that don't exist; showing them on a real airport page would mislead |
| `cross-border/saudi-uae-highway` | Illustration; both pages it served now have real Abu Dhabi photos (kept on disk, unreferenced) |
| `fleet/gallery/chevrolet-tahoe-black-exterior` | Dealer "POSHCARS" plate (another company's branding) |
| `fleet/gallery/gmc-yukon-denali-exterior` | 554×554, and the Denali trim is not owner-confirmed |

No files were deleted. The unused ones stay on disk so a later decision can still use them.

## E. How to swap an image (about 2 minutes per photo)

1. Crop to 16:9 (hero). Export WebP q≈76 at ≥1920px wide with metadata stripped (`sharp` strips it by default), named exactly as in the acquisition sheet.
2. Put it in `public/images/<folder>/`.
3. In `src/content/images.ts`, add `img("<folder>/<name>", w, h, "EN alt", "AR alt", "focus")`, point the page path(s) at it and delete the `note` flag.
4. Run `node scripts/og-images.mjs` to build its 1200×630 share image.
5. Run `npm run build`. The sitemap `<image:image>`, Open Graph, Twitter card and JSON-LD `primaryImageOfPage` all update automatically.
