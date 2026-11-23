# RideSaudi — Complete Visual & Image Audit

Date: 2026-11-23. Scope: **every indexable URL** — 199 page paths × English and Arabic = 398 URLs (home, 160 service/route/city/airport/fleet/heavy pages, blog index, 2 guide hubs, 32 guides, contact and 2 legal pages). Arabic pages use the same image as their English twin, with their own Arabic alt text, so each row below covers both `/en/` and `/ar/`.

Method: the page→image map was dumped from the real content registry (`src/content/registry.ts`, `images.ts`, `fleet.ts`, blog data). All 61 image files were reviewed visually on contact sheets. The live site was checked in a real browser (desktop, mobile 375px, EN and AR). After the changes, a local production build was crawled from its own sitemaps.

Related reports: [Replacement plan](RIDESAUDI-IMAGE-REPLACEMENT-PLAN.md) · [New image requirements / acquisition sheet](RIDESAUDI-NEW-IMAGE-REQUIREMENTS.md) · [Implementation report](RIDESAUDI-VISUAL-IMPLEMENTATION-REPORT.md).

## 1. Headline findings

| # | Finding | Evidence | Severity | Status |
|---|---|---|---|---|
| 1 | **Every service and guide hero photo was invisible on the live site.** Two navy overlays were stacked (`.svc-hero::before` fading to 90% and `.svc-hero--img::after` at 55–78%), so ~290 URLs showed a plain navy block. The photo was still downloaded with `fetchpriority="high"`, which wasted the LCP bytes. | Live check on `/en/services/intercity-transfers/riyadh-to-jeddah/`: the image loaded (`complete`, z-index −2) but could not be seen. It appeared as soon as the overlays were disabled. | Critical | **Fixed** |
| 2 | 74 of 160 service pages and 17 of 32 guides had no picture at all, including money pages such as Qatar, Kuwait, Dammam, Al Khobar, VIP, luxury SUV, family and fleet. | Registry dump | High | 45 pages fixed with existing on-topic photos; 46 need new assets |
| 3 | Airport heroes for Riyadh, Jeddah, Madinah and Dammam are AI-style illustrations, not the real terminals. Their alt text says "Illustration of…", which is honest but weak for trust. | Visual review | Critical (RUH/JED/MED) | Needs real photos (acquisition sheet) |
| 4 | Heavy reuse of a few images: Jeddah Corniche appears on 14 pages, Riyadh on 11, Makkah on 9, Al Khobar on 9. Many route pages share their destination's single photo. | Registry dump | Medium | Documented; one photo per destination city requested |
| 5 | Low-resolution images used as full-width heroes (under 800px wide): Yanbu, Al Baha, Al Ahsa ×2, Najran, Dhahran, Abha sign, Haramain train, Manama, Taif airport, and 5 heavy-transport photos. The flatbed car carrier is only 311×251 and is likely AI-generated. | `sharp` metadata | High / Critical | Replacement requested |
| 6 | Portrait sources cropped to wide heroes (Makkah 900×1600, Jeddah and Madinah 1200×1600) look soft on desktop. | Metadata + render | Medium | 16:9 replacements requested |
| 7 | The crane and lowbed heavy pages show the same photo (one is a re-crop of the other). | Visual review | High | Replacement requested |
| 8 | 7 good images were orphaned (uploaded but used nowhere): Abu Dhabi ×2, Hegra, Escalade, Sonata (dusk) and the AI airport renders for Abha, AlUla and Tabuk. | grep | Medium | 5 real photos now in use; AI airport renders deliberately left unused (fictional terminals) |
| 9 | Gallery Tahoe photo shows a dealer's "POSHCARS" plate, which is another company's branding. | Visual review | Medium | Excluded; not used anywhere |
| 10 | Social share: Open Graph images were the raw WebP files (portrait for Makkah, Jeddah and Madinah). ~110 URLs had **no** `og:image` and used a small `summary` card. Blog OG URLs were relative. | Metadata code | High | **Fixed**: 1200×630 JPEG for every URL |
| 11 | No image sitemap entries | Sitemap code | Medium | **Fixed**: `<image:image>` on 290 URLs |
| 12 | Fleet "Sedan" card was the only vehicle card without a photo | Fleet page | Medium | **Fixed** |
| 13 | Technical delivery was already sound: `next/image` serves AVIF/WebP and responsive `srcset`; width and height are set (no CLS); only the hero is priority and everything else is lazy; every `<img>` has alt text; EN and AR alt are written separately. | Crawl | OK | Kept |
| 14 | Fleet requested in the brief vs. what is confirmed: the brief lists Mercedes S-Class, V-Class, Yukon XL / Denali. These are **not** owner-confirmed in `src/content/fleet.ts`, so none of them were added, pictured or claimed. | `fleet.ts` + FLEET_VERIFICATION_MATRIX | Rule | Ask the owner before any such photo |

## 2. Image inventory (all 61 files)

| File (public/images/…) | Size | Real/illus. | Quality verdict | Pages using it (after) |
|---|---|---|---|---|
| `airports/airport-abha.webp` | 1376×768, 94 KB | Illustration | AI render of a fictional terminal — not used (would mislead) | 0 |
| `airports/airport-alula.webp` | 1376×768, 156 KB | Illustration | AI render of a fictional terminal — not used | 0 |
| `airports/airport-dmm.webp` | 1408×768, 112 KB | Illustration | AI-style illustration (alt says so). Not the real DMM terminal. | 1 |
| `airports/airport-jed.webp` | 1600×1600, 185 KB | Illustration | AI-style illustration (alt says so). Not the real JED terminal. | 2 |
| `airports/airport-med.webp` | 1600×1600, 143 KB | Illustration | AI-style illustration (alt says so). Not the real MED terminal. | 1 |
| `airports/airport-ruh.webp` | 1600×1600, 187 KB | Illustration | AI-style illustration (alt says so). Not the real RUH terminal. | 2 |
| `airports/airport-tabuk.webp` | 1376×768, 105 KB | Illustration | AI render of a fictional terminal — not used | 0 |
| `airports/taif-airport-terminal-sign.webp` | 600×400, 30 KB | Photo | Real but 600×400. | 1 |
| `cross-border/abu-dhabi-corniche.webp` | 900×600, 68 KB | Photo | Real aerial, 900×600; newly used (was orphaned). | 1 |
| `cross-border/abu-dhabi.webp` | 1408×768, 120 KB | Photo | Real photo, 1408×768; newly used (was orphaned). | 1 |
| `cross-border/border-crossings.webp` | 1600×1600, 153 KB | Illustration | Illustration (alt says so). | 1 |
| `cross-border/doha.webp` | 1600×900, 186 KB | Photo | Real aerial, 1600×900. | 4 |
| `cross-border/dubai.webp` | 1600×1143, 220 KB | Photo | Real photo, 1600×1143. | 3 |
| `cross-border/king-fahd-causeway.webp` | 1536×700, 89 KB | Photo | Real photo, 1536×700. | 4 |
| `cross-border/kuwait-towers.webp` | 1200×699, 65 KB | Photo | Real photo, 1200×699. | 2 |
| `cross-border/manama.webp` | 796×385, 35 KB | Photo | 796×385. | 1 |
| `cross-border/saudi-uae-highway.webp` | 1408×768, 76 KB | Illustration | Illustration; replaced on its 2 pages by real Abu Dhabi photos | 0 |
| `fleet/chevrolet-suburban-black-exterior.webp` | 1200×630, 222 KB | Photo | Model photo 1200×630, captioned as an example. | 4 |
| `fleet/chevrolet-tahoe-exterior.webp` | 700×370, 31 KB | Photo | 700×370 studio cut-out; fleet card only | fleet cards |
| `fleet/ford-taurus-exterior.webp` | 960×600, 29 KB | Photo | 960×600; fleet card | fleet cards |
| `fleet/gallery/cadillac-escalade-front-exterior.webp` | 1199×800, 66 KB | Photo | Model photo 1199×800, plate blurred, captioned as an example of the luxury SUV class. | 1 |
| `fleet/gallery/chevrolet-suburban-wide-exterior.webp` | 858×357, 35 KB | Photo | 858×357, card use only | 0 |
| `fleet/gallery/chevrolet-tahoe-black-exterior.webp` | 1200×630, 69 KB | Photo | Dealer 'POSHCARS' plate — excluded | 0 |
| `fleet/gallery/gmc-yukon-denali-exterior.webp` | 554×554, 62 KB | Photo | 554×554, too small for a hero; Denali not confirmed in fleet | 0 |
| `fleet/gallery/hyundai-sonata-exterior-dusk.webp` | 678×452, 55 KB | Photo | Now the generic Sedan fleet card | 0 |
| `fleet/gallery/toyota-camry-copper-exterior.webp` | 860×460, 98 KB | Photo | 860×460, card use only | 0 |
| `fleet/gmc-yukon-at4-exterior.webp` | 892×762, 93 KB | Photo | Yukon model photo 892×762, captioned. | 2 |
| `fleet/hyundai-sonata-exterior.webp` | 1400×536, 62 KB | Photo | Sonata model photo 1400×536, captioned. | 2 |
| `fleet/hyundai-staria-exterior.webp` | 1200×675, 48 KB | Photo | Staria model photo 1200×675 (owner-confirmed vehicle), captioned. | 4 |
| `fleet/luxury-suv-vip-exterior.webp` | 904×564, 47 KB | Photo | Lexus LX 600 model photo 904×564, captioned. | 1 |
| `fleet/toyota-camry-black-exterior.webp` | 1100×825, 190 KB | Photo | Camry model photo 1100×825, captioned. | 3 |
| `fleet/toyota-prado-exterior.webp` | 1000×750, 179 KB | Photo | 1000×750; fleet card | fleet cards |
| `heavy-transport/flatbed-car-carrier-suv-highway.webp` | 311×251, 12 KB | Photo | 311×251 and likely AI-generated: unusable as a hero. | 1 |
| `heavy-transport/flatbed-trailer-steel-coils-highway.webp` | 654×469, 39 KB | Photo | 654×469. | 2 |
| `heavy-transport/heavy-duty-forklifts-yard.webp` | 577×346, 31 KB | Photo | 577×346. | 1 |
| `heavy-transport/hydraulic-satha-sports-car-loaded.webp` | 572×317, 22 KB | Photo | 572×317 web photo. | 2 |
| `heavy-transport/lowbed-truck-hauling-mobile-crane.webp` | 1419×798, 91 KB | Photo | 1419×798, maker logos blurred. | 5 |
| `heavy-transport/rough-terrain-crane-loaded-on-lowbed.webp` | 1120×630, 67 KB | Photo | Same source photo as the lowbed image (re-crop): duplicate visual. | 2 |
| `heavy-transport/wheel-loader-bucket-construction-site.webp` | 705×350, 72 KB | Photo | 705×350. | 2 |
| `locations/abha-airport-park-sign.webp` | 678×452, 43 KB | Photo | 678×452 web photo. | 1 |
| `locations/abha.webp` | 1400×777, 144 KB | Photo | Real photo, 1400×777. | 3 |
| `locations/al-ahsa-jabal-qarah.webp` | 617×324, 43 KB | Photo | 617×324 web photo. | 3 |
| `locations/al-ahsa-oasis-palms.webp` | 655×448, 74 KB | Photo | 655×448 web photo. | 1 |
| `locations/al-baha-forest-picnic.webp` | 596×335, 35 KB | Photo | 596×335 web photo. | 1 |
| `locations/al-khobar.webp` | 1600×900, 154 KB | Photo | Real aerial, 1600×900, sharp. | 9 |
| `locations/alula-elephant-rock.webp` | 1600×1068, 114 KB | Photo | Real photo, 1600×1068, sharp, on-topic. | 4 |
| `locations/alula-hegra.webp` | 1080×1350, 223 KB | Photo | Real photo of Qasr al-Farid, 1080×1350; newly used (was orphaned). | 2 |
| `locations/alula.webp` | 1376×768, 126 KB | Photo | Real photo (desert dinner), 1376×768; shows a dining scene, not travel. | 3 |
| `locations/buraydah-date-market-night.webp` | 1280×854, 123 KB | Photo | Real photo, 1280×854. | 3 |
| `locations/dhahran-ithra-cultural-centre.webp` | 596×335, 23 KB | Photo | 596×335 web photo. | 1 |
| `locations/diriyah.webp` | 1024×502, 117 KB | Photo | Real aerial, 1024×502 (just enough). | 1 |
| `locations/jeddah.webp` | 1200×1600, 212 KB | Photo | Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site. | 14 |
| `locations/king-abdullah-economic-city-waterfront.webp` | 1600×960, 238 KB | Photo | Real aerial, 1600×960. | 1 |
| `locations/madinah.webp` | 1200×1600, 206 KB | Photo | Real photo, 1200×1600 portrait; crop works on mobile, tight on desktop. | 7 |
| `locations/makkah.webp` | 900×1600, 200 KB | Photo | Real photo but 900×1600 portrait: only ~500px of height survives a 16:9 crop, soft on desktop. | 9 |
| `locations/najran-mud-brick-fort.webp` | 640×480, 32 KB | Photo | 640×480 web photo. | 1 |
| `locations/riyadh.webp` | 1600×900, 108 KB | Photo | Real photo, 1600×900, sharp. Over-used (home + 9 pages). | 11 |
| `locations/tabuk.webp` | 1200×664, 70 KB | Photo | Real night photo of a city sign, 1200×664. | 2 |
| `locations/taif.webp` | 1400×919, 179 KB | Photo | Real photo of the Al Hada road, 1400×919; strong road imagery. | 8 |
| `locations/yanbu-historical-area-sign.webp` | 548×364, 28 KB | Photo | 548×364 web photo: blurry as a full-width hero. | 3 |
| `routes/haramain-train-platform.webp` | 549×364, 38 KB | Photo | 549×364; also shows the train, a competitor mode, on a private-car page. | 1 |

## 3. Premium image strategy (visual identity)

**Direction:** a calm, international chauffeur brand. Real photography, natural light (blue hour, early morning, golden hour), dark vehicles, uncluttered compositions with negative space for text, and no gimmicky "futuristic" effects. Navy scrim (`#07162B`) over photos keeps the existing brand palette.

| Rule | Why |
|---|---|
| Real photos over AI renders; an illustration only when labelled "Illustration of…" in alt, and never for a real named airport or terminal long-term | Trust: a fake terminal on an airport page is misleading |
| Vehicle pictures show the **vehicle class the page sells** (SUV pages show SUVs, family/group pages show the Staria) and carry a visible caption: "Model shown as an example. Your actual vehicle is confirmed in the quotation." | `fleet.ts` rule: vehicles come from partners and are confirmed per quote; no invented inventory |
| Only owner-confirmed models: Camry, Sonata, Taurus, Yukon, Suburban, Tahoe, Prado, Staria, luxury/VIP SUV. **No S-Class, V-Class, Yukon XL/Denali** until the owner confirms them | SEO-RULES "no invented facts" |
| Route pages show the **destination** (or the road itself); city pages show one clean landmark; airport pages show the real terminal or arrivals kerb | Matches search intent ("where am I going / where will I be met") |
| One photo per destination city, reused only by that city's routes. Never put a generic stock photo on unrelated pages | Avoids "same image everywhere" |
| Hero master ≥1920×1080 (16:9) with the subject centre-to-right; cards are cropped 3:2 automatically; share images are 1200×630 JPEG | Hero text sits on the left (EN) or right (AR); a centred subject works in both directions |
| No people's faces without a model release, no plates, no hotel, airline or government logos, no competitor or dealer branding | Licensing and brand safety |
| Heavy transport: only the owner's real job photos or licensed photos, with equipment-maker logos blurred | Same as the existing heavy-transport image plan |

Categories required (status): **A. Fleet** — exterior photos exist for every confirmed model, but they are web/model photos; real RideSaudi-partner photos and interiors are needed. **B. Airport** — illustrations for 4 airports, so real photos are needed. **C. City/destination** — strong for Riyadh, Jeddah, Makkah, Madinah, AlUla, Khobar, Taif, Abha, Doha, Dubai, Abu Dhabi and Kuwait; missing for Jubail, Jazan, Hail, Hafar Al-Batin and Khamis Mushait; low resolution for Yanbu, Al Baha, Al Ahsa, Najran, Dhahran and Manama. **D. Service** — chauffeur, meet-and-greet, hotel, wedding, corporate, conference, senior and VIP-convoy scenes are all missing. **Heavy** — excavator, oversized, machinery relocation and heavy-equipment are missing; 5 others are low resolution.

## 4. Master table — every page

Priority counts: **Critical 4 · High 52 · Medium 61 · Low 82** (199 paths, ×2 locales).

| # | Page URL (EN; AR is the same path under /ar/) | Current image status | New images required | Replacement required | Priority |
|---|---|---|---|---|---|
| 1 | `/en/` | Added this pass → `locations/riyadh`. Real photo, 1600×900, sharp. Over-used (home + 9 pages). | No | No | Low |
| 2 | `/en/services/` | No photo (plain navy hero) | Yes | No | Medium |
| 3 | `/en/services/airport-transfers/` | No photo (plain navy hero) | Yes | No | High |
| 4 | `/en/services/airport-transfers/jeddah-airport/` | `airports/airport-jed`. Illustration: AI-style illustration (alt says so). Not the real JED terminal. | No | Yes, with a real photo | Critical |
| 5 | `/en/services/airport-transfers/riyadh-airport/` | `airports/airport-ruh`. Illustration: AI-style illustration (alt says so). Not the real RUH terminal. | No | Yes, with a real photo | Critical |
| 6 | `/en/services/airport-transfers/madinah-airport/` | `airports/airport-med`. Illustration: AI-style illustration (alt says so). Not the real MED terminal. | No | Yes, with a real photo | Critical |
| 7 | `/en/services/airport-transfers/dammam-airport/` | `airports/airport-dmm`. Illustration: AI-style illustration (alt says so). Not the real DMM terminal. | No | Yes, with a real photo | High |
| 8 | `/en/services/umrah-transport/` | `locations/makkah`. Real photo but 900×1600 portrait: only ~500px of height survives a 16:9 crop, soft on desktop. | No | Yes, higher resolution | High |
| 9 | `/en/services/umrah-transport/jeddah-airport-to-makkah/` | Added this pass → `locations/makkah`. Real photo but 900×1600 portrait: only ~500px of height survives a 16:9 crop, soft on desktop. | No | Yes, higher resolution | High |
| 10 | `/en/services/intercity-transfers/` | Added this pass → `locations/taif`. Real photo of the Al Hada road, 1400×919; strong road imagery. | No | No | Low |
| 11 | `/en/services/event-transportation/` | No photo (plain navy hero) | Yes | No | Medium |
| 12 | `/en/services/event-transportation/wedding-transport/` | No photo (plain navy hero) | Yes | No | Medium |
| 13 | `/en/luxury-transportation/` | Added this pass → `fleet/gallery/cadillac-escalade-front-exterior`. Model photo 1199×800, plate blurred, captioned as an example of the luxury SUV class. | No | No | Low |
| 14 | `/en/luxury-transportation/luxury-chauffeur/` | No photo (plain navy hero) | Yes | No | High |
| 15 | `/en/services/chauffeur-services/` | No photo (plain navy hero) | Yes | No | Medium |
| 16 | `/en/services/event-transportation/corporate-events/` | No photo (plain navy hero) | Yes | No | Medium |
| 17 | `/en/services/event-transportation/conference-transport/` | No photo (plain navy hero) | Yes | No | Medium |
| 18 | `/en/services/event-transportation/event-airport-transfers/` | No photo (plain navy hero) | Yes | No | High |
| 19 | `/en/services/umrah-transport/makkah-ziyarat/` | Added this pass → `locations/makkah`. Real photo but 900×1600 portrait: only ~500px of height survives a 16:9 crop, soft on desktop. | No | Yes, higher resolution | High |
| 20 | `/en/services/umrah-transport/madinah-ziyarat/` | Added this pass → `locations/madinah`. Real photo, 1200×1600 portrait; crop works on mobile, tight on desktop. | No | Later (better crop) | Medium |
| 21 | `/en/services/airport-transfers/taif-airport/` | `airports/taif-airport-terminal-sign`. Real but 600×400. | No | Yes, higher resolution | High |
| 22 | `/en/services/airport-transfers/private-airport-pickup/` | No photo (plain navy hero) | Yes | No | High |
| 23 | `/en/services/airport-transfers/airport-to-hotel/` | No photo (plain navy hero) | Yes | No | High |
| 24 | `/en/services/airport-transfers/vip-airport-transfer/` | No photo (plain navy hero) | Yes | No | High |
| 25 | `/en/services/airport-transfers/family-airport-transfer/` | Added this pass → `fleet/hyundai-staria-exterior`. Staria model photo 1200×675 (owner-confirmed vehicle), captioned. | No | No | Low |
| 26 | `/en/services/intercity-transfers/private-intercity-chauffeur/` | No photo (plain navy hero) | Yes | No | Medium |
| 27 | `/en/services/cross-border-transfers/` | `cross-border/border-crossings`. Illustration: Illustration (alt says so). | No | Yes, with a real photo | High |
| 28 | `/en/services/cross-border-transfers/bahrain/` | `cross-border/king-fahd-causeway`. Real photo, 1536×700. | No | No | Low |
| 29 | `/en/services/cross-border-transfers/qatar/` | Added this pass → `cross-border/doha`. Real aerial, 1600×900. | No | No | Low |
| 30 | `/en/services/cross-border-transfers/uae/` | Changed from cross-border/saudi-uae-highway → `cross-border/abu-dhabi-corniche`. Real aerial, 900×600; newly used (was orphaned). | No | No | Medium |
| 31 | `/en/services/cross-border-transfers/kuwait/` | Added this pass → `cross-border/kuwait-towers`. Real photo, 1200×699. | No | No | Low |
| 32 | `/en/luxury-transportation/vip-car-service/` | Added this pass → `fleet/chevrolet-suburban-black-exterior`. Model photo 1200×630, captioned as an example. | No | No | Low |
| 33 | `/en/luxury-transportation/luxury-suv/` | Added this pass → `fleet/luxury-suv-vip-exterior`. Lexus LX 600 model photo 904×564, captioned. | No | Later (better crop) | Medium |
| 34 | `/en/luxury-transportation/vip-delegation-transport/` | No photo (plain navy hero) | Yes | No | High |
| 35 | `/en/services/chauffeur-services/business-chauffeur/` | Added this pass → `fleet/toyota-camry-black-exterior`. Camry model photo 1100×825, captioned. | No | No | Low |
| 36 | `/en/services/chauffeur-services/multi-day-chauffeur/` | No photo (plain navy hero) | Yes | No | Medium |
| 37 | `/en/services/umrah-transport/family-umrah-transport/` | Added this pass → `locations/madinah`. Real photo, 1200×1600 portrait; crop works on mobile, tight on desktop. | No | No | Medium |
| 38 | `/en/services/umrah-transport/group-umrah-transport/` | No photo (plain navy hero) | Yes | No | High |
| 39 | `/en/services/umrah-transport/private-umrah-chauffeur/` | No photo (plain navy hero) | Yes | No | High |
| 40 | `/en/services/event-transportation/riyadh/` | Added this pass → `locations/riyadh`. Real photo, 1600×900, sharp. Over-used (home + 9 pages). | No | No | Low |
| 41 | `/en/services/event-transportation/jeddah/` | Added this pass → `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site. | No | No | Medium |
| 42 | `/en/services/event-transportation/dammam/` | Added this pass → `locations/al-khobar`. Real aerial, 1600×900, sharp. | No | No | Low |
| 43 | `/en/services/event-transportation/concert-transport/` | No photo (plain navy hero) | Yes | No | Medium |
| 44 | `/en/services/event-transportation/festival-transport/` | No photo (plain navy hero) | Yes | No | Medium |
| 45 | `/en/services/event-transportation/vip-event-chauffeur/` | No photo (plain navy hero) | Yes | No | High |
| 46 | `/en/services/group-transportation/` | No photo (plain navy hero) | Yes | No | Medium |
| 47 | `/en/services/group-transportation/family-transport/` | Added this pass → `fleet/hyundai-staria-exterior`. Staria model photo 1200×675 (owner-confirmed vehicle), captioned. | No | No | Low |
| 48 | `/en/services/group-transportation/group-airport-transfers/` | No photo (plain navy hero) | Yes | No | High |
| 49 | `/en/services/group-transportation/van-and-minibus/` | Added this pass → `fleet/hyundai-staria-exterior`. Staria model photo 1200×675 (owner-confirmed vehicle), captioned. | No | No | Low |
| 50 | `/en/services/special-transportation/` | No photo (plain navy hero) | Yes | No | Medium |
| 51 | `/en/services/special-transportation/hotel-transportation/` | No photo (plain navy hero) | Yes | No | Medium |
| 52 | `/en/services/special-transportation/cruise-port-transfers/` | No photo (plain navy hero) | Yes | No | Medium |
| 53 | `/en/services/special-transportation/business-travel/` | Added this pass → `fleet/hyundai-sonata-exterior`. Sonata model photo 1400×536, captioned. | No | No | Low |
| 54 | `/en/services/special-transportation/travel-agency-transport/` | No photo (plain navy hero) | Yes | No | Medium |
| 55 | `/en/services/special-transportation/bilingual-chauffeur/` | No photo (plain navy hero) | Yes | No | Medium |
| 56 | `/en/services/special-transportation/senior-friendly-transportation/` | No photo (plain navy hero) | Yes | No | Medium |
| 57 | `/en/fleet/` | Added this pass → `fleet/chevrolet-suburban-black-exterior`. Model photo 1200×630, captioned as an example. | No | No | Low |
| 58 | `/en/services/city-transport/` | No photo (plain navy hero) | Yes | No | Medium |
| 59 | `/en/services/city-transport/jeddah/` | `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site. | No | Later (better crop) | Medium |
| 60 | `/en/services/city-transport/makkah/` | `locations/makkah`. Real photo but 900×1600 portrait: only ~500px of height survives a 16:9 crop, soft on desktop. | No | Yes, higher resolution | High |
| 61 | `/en/services/city-transport/madinah/` | `locations/madinah`. Real photo, 1200×1600 portrait; crop works on mobile, tight on desktop. | No | Later (better crop) | Medium |
| 62 | `/en/services/city-transport/dammam/` | Added this pass → `locations/al-khobar`. Real aerial, 1600×900, sharp. | No | No | Low |
| 63 | `/en/services/city-transport/al-khobar/` | Added this pass → `locations/al-khobar`. Real aerial, 1600×900, sharp. | No | No | Low |
| 64 | `/en/services/city-transport/tabuk/` | `locations/tabuk`. Real night photo of a city sign, 1200×664. | No | No | Low |
| 65 | `/en/services/city-transport/abha/` | `locations/abha`. Real photo, 1400×777. | No | No | Low |
| 66 | `/en/services/tourism-transport/` | Added this pass → `locations/alula-hegra`. Real photo of Qasr al-Farid, 1080×1350; newly used (was orphaned). | No | No | Medium |
| 67 | `/en/services/tourism-transport/private-sightseeing-driver/` | No photo (plain navy hero) | Yes | No | Medium |
| 68 | `/en/services/tourism-transport/alula/` | `locations/alula-elephant-rock`. Real photo, 1600×1068, sharp, on-topic. | No | No | Low |
| 69 | `/en/services/tourism-transport/taif/` | `locations/taif`. Real photo of the Al Hada road, 1400×919; strong road imagery. | No | No | Low |
| 70 | `/en/services/tourism-transport/day-trip-transport/` | No photo (plain navy hero) | Yes | No | Medium |
| 71 | `/en/services/tourism-transport/multi-stop-transport/` | No photo (plain navy hero) | Yes | No | Medium |
| 72 | `/en/services/city-transport/yanbu/` | `locations/yanbu-historical-area-sign`. 548×364 web photo: blurry as a full-width hero. | No | Yes, higher resolution | High |
| 73 | `/en/services/city-transport/jubail/` | No photo (plain navy hero) | Yes | No | Medium |
| 74 | `/en/services/city-transport/najran/` | `locations/najran-mud-brick-fort`. 640×480 web photo. | No | Yes, higher resolution | High |
| 75 | `/en/services/city-transport/jazan/` | No photo (plain navy hero) | Yes | No | Medium |
| 76 | `/en/services/city-transport/hail/` | No photo (plain navy hero) | Yes | No | Medium |
| 77 | `/en/services/city-transport/buraidah/` | `locations/buraydah-date-market-night`. Real photo, 1280×854. | No | No | Low |
| 78 | `/en/services/city-transport/riyadh/` | `locations/riyadh`. Real photo, 1600×900, sharp. Over-used (home + 9 pages). | No | No | Low |
| 79 | `/en/services/tourism-transport/riyadh-sightseeing/` | `locations/diriyah`. Real aerial, 1024×502 (just enough). | No | No | Low |
| 80 | `/en/services/intercity-transfers/riyadh-to-madinah/` | `locations/madinah`. Real photo, 1200×1600 portrait; crop works on mobile, tight on desktop. | No | Later (better crop) | Medium |
| 81 | `/en/services/intercity-transfers/riyadh-to-al-ahsa/` | `locations/al-ahsa-jabal-qarah`. 617×324 web photo. | No | Yes, higher resolution | High |
| 82 | `/en/services/intercity-transfers/riyadh-to-doha/` | `cross-border/doha`. Real aerial, 1600×900. | No | No | Low |
| 83 | `/en/services/intercity-transfers/riyadh-to-dubai/` | `cross-border/dubai`. Real photo, 1600×1143. | No | No | Low |
| 84 | `/en/services/intercity-transfers/riyadh-to-manama/` | `cross-border/manama`. 796×385. | No | Yes, higher resolution | High |
| 85 | `/en/services/intercity-transfers/riyadh-to-kuwait-city/` | `cross-border/kuwait-towers`. Real photo, 1200×699. | No | No | Low |
| 86 | `/en/services/intercity-transfers/riyadh-to-alula/` | `locations/alula`. Real photo (desert dinner), 1376×768; shows a dining scene, not travel. | No | No | Low |
| 87 | `/en/services/intercity-transfers/riyadh-to-taif/` | `locations/taif`. Real photo of the Al Hada road, 1400×919; strong road imagery. | No | No | Low |
| 88 | `/en/services/intercity-transfers/riyadh-to-buraydah/` | `locations/buraydah-date-market-night`. Real photo, 1280×854. | No | No | Low |
| 89 | `/en/services/intercity-transfers/riyadh-to-jubail/` | No photo (plain navy hero) | Yes | No | Medium |
| 90 | `/en/services/intercity-transfers/riyadh-to-abha/` | `locations/abha`. Real photo, 1400×777. | No | No | Low |
| 91 | `/en/services/intercity-transfers/riyadh-to-tabuk/` | `locations/tabuk`. Real night photo of a city sign, 1200×664. | No | No | Low |
| 92 | `/en/services/intercity-transfers/riyadh-to-hail/` | No photo (plain navy hero) | Yes | No | Medium |
| 93 | `/en/services/intercity-transfers/riyadh-to-yanbu/` | `locations/yanbu-historical-area-sign`. 548×364 web photo: blurry as a full-width hero. | No | Yes, higher resolution | High |
| 94 | `/en/services/intercity-transfers/jeddah-to-yanbu/` | `locations/yanbu-historical-area-sign`. 548×364 web photo: blurry as a full-width hero. | No | Yes, higher resolution | High |
| 95 | `/en/services/intercity-transfers/makkah-to-taif/` | `locations/taif`. Real photo of the Al Hada road, 1400×919; strong road imagery. | No | No | Low |
| 96 | `/en/services/intercity-transfers/madinah-to-alula/` | `locations/alula`. Real photo (desert dinner), 1376×768; shows a dining scene, not travel. | No | No | Low |
| 97 | `/en/services/intercity-transfers/jeddah-to-alula/` | `locations/alula-elephant-rock`. Real photo, 1600×1068, sharp, on-topic. | No | No | Low |
| 98 | `/en/services/airport-transfers/alula-airport/` | Changed from locations/alula → `locations/alula-hegra`. Real photo of Qasr al-Farid, 1080×1350; newly used (was orphaned). | No | No | Medium |
| 99 | `/en/services/intercity-transfers/riyadh-to-hafar-al-batin/` | No photo (plain navy hero) | Yes | No | Medium |
| 100 | `/en/services/intercity-transfers/dammam-to-bahrain/` | Added this pass → `cross-border/king-fahd-causeway`. Real photo, 1536×700. | No | No | Low |
| 101 | `/en/services/intercity-transfers/dammam-to-al-ahsa/` | `locations/al-ahsa-jabal-qarah`. 617×324 web photo. | No | Yes, higher resolution | High |
| 102 | `/en/services/intercity-transfers/dammam-to-jubail/` | No photo (plain navy hero) | Yes | No | Medium |
| 103 | `/en/services/intercity-transfers/dammam-to-riyadh/` | `locations/riyadh`. Real photo, 1600×900, sharp. Over-used (home + 9 pages). | No | No | Low |
| 104 | `/en/services/intercity-transfers/jeddah-to-riyadh/` | `locations/riyadh`. Real photo, 1600×900, sharp. Over-used (home + 9 pages). | No | No | Low |
| 105 | `/en/services/intercity-transfers/riyadh-to-al-khobar/` | `locations/al-khobar`. Real aerial, 1600×900, sharp. | No | No | Low |
| 106 | `/en/services/intercity-transfers/dammam-to-doha/` | `cross-border/doha`. Real aerial, 1600×900. | No | No | Low |
| 107 | `/en/services/intercity-transfers/dammam-to-dubai/` | `cross-border/dubai`. Real photo, 1600×1143. | No | No | Low |
| 108 | `/en/services/intercity-transfers/riyadh-to-abu-dhabi/` | Changed from cross-border/saudi-uae-highway → `cross-border/abu-dhabi`. Real photo, 1408×768; newly used (was orphaned). | No | No | Low |
| 109 | `/en/services/city-transport/dhahran/` | `locations/dhahran-ithra-cultural-centre`. 596×335 web photo. | No | Yes, higher resolution | High |
| 110 | `/en/services/city-transport/al-ahsa/` | `locations/al-ahsa-oasis-palms`. 655×448 web photo. | No | Yes, higher resolution | High |
| 111 | `/en/services/city-transport/hafar-al-batin/` | No photo (plain navy hero) | Yes | No | Medium |
| 112 | `/en/services/airport-transfers/qassim-airport/` | Added this pass → `locations/buraydah-date-market-night`. Real photo, 1280×854. | No | No | Low |
| 113 | `/en/services/airport-transfers/al-ahsa-airport/` | `locations/al-ahsa-jabal-qarah`. 617×324 web photo. | No | Yes, higher resolution | High |
| 114 | `/en/services/intercity-transfers/madinah-to-makkah/` | `locations/makkah`. Real photo but 900×1600 portrait: only ~500px of height survives a 16:9 crop, soft on desktop. | No | Yes, higher resolution | High |
| 115 | `/en/services/intercity-transfers/taif-to-makkah/` | `locations/taif`. Real photo of the Al Hada road, 1400×919; strong road imagery. | No | No | Low |
| 116 | `/en/services/intercity-transfers/alula-to-riyadh/` | `locations/alula-elephant-rock`. Real photo, 1600×1068, sharp, on-topic. | No | No | Low |
| 117 | `/en/services/intercity-transfers/alula-to-dammam/` | `locations/alula`. Real photo (desert dinner), 1376×768; shows a dining scene, not travel. | No | No | Low |
| 118 | `/en/services/intercity-transfers/makkah-to-madinah/` | `routes/haramain-train-platform`. 549×364; also shows the train, a competitor mode, on a private-car page. | No | Yes, higher resolution | High |
| 119 | `/en/services/intercity-transfers/riyadh-to-dammam/` | `locations/al-khobar`. Real aerial, 1600×900, sharp. | No | No | Low |
| 120 | `/en/services/intercity-transfers/jeddah-to-makkah/` | `locations/makkah`. Real photo but 900×1600 portrait: only ~500px of height survives a 16:9 crop, soft on desktop. | No | Yes, higher resolution | High |
| 121 | `/en/services/intercity-transfers/jeddah-to-madinah/` | `locations/madinah`. Real photo, 1200×1600 portrait; crop works on mobile, tight on desktop. | No | Later (better crop) | Medium |
| 122 | `/en/services/intercity-transfers/riyadh-to-jeddah/` | `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site. | No | Later (better crop) | Medium |
| 123 | `/en/services/intercity-transfers/riyadh-to-makkah/` | `locations/makkah`. Real photo but 900×1600 portrait: only ~500px of height survives a 16:9 crop, soft on desktop. | No | Yes, higher resolution | High |
| 124 | `/en/services/intercity-transfers/jeddah-to-taif/` | `locations/taif`. Real photo of the Al Hada road, 1400×919; strong road imagery. | No | No | Low |
| 125 | `/en/services/intercity-transfers/madinah-to-jeddah/` | `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site. | No | Later (better crop) | Medium |
| 126 | `/en/services/intercity-transfers/makkah-to-jeddah/` | Added this pass → `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site. | No | Later (better crop) | Medium |
| 127 | `/en/services/intercity-transfers/makkah-to-riyadh/` | Added this pass → `locations/riyadh`. Real photo, 1600×900, sharp. Over-used (home + 9 pages). | No | No | Low |
| 128 | `/en/services/intercity-transfers/taif-to-jeddah/` | `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site. | No | Later (better crop) | Medium |
| 129 | `/en/services/intercity-transfers/alula-to-madinah/` | Added this pass → `locations/madinah`. Real photo, 1200×1600 portrait; crop works on mobile, tight on desktop. | No | Later (better crop) | Medium |
| 130 | `/en/services/intercity-transfers/yanbu-to-jeddah/` | `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site. | No | Later (better crop) | Medium |
| 131 | `/en/services/intercity-transfers/al-khobar-to-riyadh/` | Added this pass → `locations/riyadh`. Real photo, 1600×900, sharp. Over-used (home + 9 pages). | No | No | Low |
| 132 | `/en/services/intercity-transfers/jeddah-to-dammam/` | `locations/al-khobar`. Real aerial, 1600×900, sharp. | No | No | Low |
| 133 | `/en/services/intercity-transfers/dammam-to-jeddah/` | `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site. | No | Later (better crop) | Medium |
| 134 | `/en/services/intercity-transfers/alula-to-jeddah/` | `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site. | No | Later (better crop) | Medium |
| 135 | `/en/services/intercity-transfers/jeddah-to-jazan/` | No photo (plain navy hero) | Yes | No | Medium |
| 136 | `/en/services/intercity-transfers/jazan-to-jeddah/` | `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site. | No | Later (better crop) | Medium |
| 137 | `/en/services/intercity-transfers/jeddah-to-abha/` | `locations/abha`. Real photo, 1400×777. | No | No | Low |
| 138 | `/en/services/intercity-transfers/abha-to-jeddah/` | `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site. | No | Later (better crop) | Medium |
| 139 | `/en/services/intercity-transfers/abha-to-riyadh/` | `locations/abha-airport-park-sign`. 678×452 web photo. | No | Yes, higher resolution | High |
| 140 | `/en/services/city-transport/khamis-mushait/` | No photo (plain navy hero) | Yes | No | Medium |
| 141 | `/en/services/city-transport/al-baha/` | `locations/al-baha-forest-picnic`. 596×335 web photo. | No | Yes, higher resolution | High |
| 142 | `/en/services/city-transport/king-abdullah-economic-city/` | `locations/king-abdullah-economic-city-waterfront`. Real aerial, 1600×960. | No | No | Low |
| 143 | `/en/services/recovery-heavy-transport/` | `heavy-transport/lowbed-truck-hauling-mobile-crane`. 1419×798, maker logos blurred. | No | No | Low |
| 144 | `/en/services/recovery-heavy-transport/satha-car-recovery/` | `heavy-transport/hydraulic-satha-sports-car-loaded`. 572×317 web photo. | No | Yes, higher resolution | High |
| 145 | `/en/services/recovery-heavy-transport/car-transport-between-cities/` | `heavy-transport/flatbed-car-carrier-suv-highway`. 311×251 and likely AI-generated: unusable as a hero. | No | Yes | Critical |
| 146 | `/en/services/recovery-heavy-transport/lowbed-transport/` | `heavy-transport/lowbed-truck-hauling-mobile-crane`. 1419×798, maker logos blurred. | No | No | Low |
| 147 | `/en/services/recovery-heavy-transport/flatbed-trailer-transport/` | `heavy-transport/flatbed-trailer-steel-coils-highway`. 654×469. | No | Yes, higher resolution | High |
| 148 | `/en/services/recovery-heavy-transport/oversized-load-transport/` | No photo (plain navy hero) | Yes | No | High |
| 149 | `/en/services/recovery-heavy-transport/industrial-machinery-relocation/` | No photo (plain navy hero) | Yes | No | High |
| 150 | `/en/services/recovery-heavy-transport/heavy-equipment-transport/` | No photo (plain navy hero) | Yes | No | High |
| 151 | `/en/services/recovery-heavy-transport/excavator-transport/` | No photo (plain navy hero) | Yes | No | High |
| 152 | `/en/services/recovery-heavy-transport/wheel-loader-transport/` | `heavy-transport/wheel-loader-bucket-construction-site`. 705×350. | No | Yes, higher resolution | High |
| 153 | `/en/services/recovery-heavy-transport/forklift-transport/` | `heavy-transport/heavy-duty-forklifts-yard`. 577×346. | No | Yes, higher resolution | High |
| 154 | `/en/services/recovery-heavy-transport/crane-transport/` | `heavy-transport/rough-terrain-crane-loaded-on-lowbed`. Same source photo as the lowbed image (re-crop): duplicate visual. | No | Yes, higher resolution | High |
| 155 | `/en/services/recovery-heavy-transport/satha-car-recovery/riyadh/` | `locations/riyadh`. Real photo, 1600×900, sharp. Over-used (home + 9 pages). | No | No | Low |
| 156 | `/en/services/recovery-heavy-transport/satha-car-recovery/jeddah/` | `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site. | No | Later (better crop) | Medium |
| 157 | `/en/services/recovery-heavy-transport/satha-car-recovery/dammam/` | `locations/al-khobar`. Real aerial, 1600×900, sharp. | No | No | Low |
| 158 | `/en/services/recovery-heavy-transport/heavy-equipment-transport/riyadh/` | `locations/riyadh`. Real photo, 1600×900, sharp. Over-used (home + 9 pages). | No | No | Low |
| 159 | `/en/services/recovery-heavy-transport/heavy-equipment-transport/jeddah/` | `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site. | No | Later (better crop) | Medium |
| 160 | `/en/services/recovery-heavy-transport/heavy-equipment-transport/dammam/` | `locations/al-khobar`. Real aerial, 1600×900, sharp. | No | No | Low |
| 161 | `/en/services/intercity-transfers/madinah-to-riyadh/` | `locations/riyadh`. Real photo, 1600×900, sharp. Over-used (home + 9 pages). | No | No | Low |
| 162 | `/en/blog/` | No photo by design (utility page); share image = default Riyadh card | No | No | Low |
| 163 | `/en/blog/towing-heavy-transport/` | `heavy-transport/lowbed-truck-hauling-mobile-crane`. 1419×798, maker logos blurred. | No | No | Low |
| 164 | `/en/blog/private-transfers/` | `fleet/chevrolet-suburban-black-exterior`. Model photo 1200×630, captioned as an example. | No | No | Low |
| 165 | `/en/blog/private-transport-saudi-arabia-guide/` | Added this pass → `fleet/chevrolet-suburban-black-exterior`. Model photo 1200×630, captioned as an example. | No | No | Low |
| 166 | `/en/blog/jeddah-airport-to-makkah-train-bus-taxi-private-car/` | Added this pass → `locations/makkah`. Real photo but 900×1600 portrait: only ~500px of height survives a 16:9 crop, soft on desktop. | No | Yes, higher resolution | High |
| 167 | `/en/blog/makkah-to-madinah-train-bus-or-private-car/` | Added this pass → `locations/madinah`. Real photo, 1200×1600 portrait; crop works on mobile, tight on desktop. | No | No | Medium |
| 168 | `/en/blog/how-to-book-private-car-with-driver-saudi-arabia/` | Added this pass → `fleet/toyota-camry-black-exterior`. Camry model photo 1100×825, captioned. | No | No | Low |
| 169 | `/en/blog/jeddah-to-madinah-train-flight-bus-or-car/` | Added this pass → `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site. | No | No | Medium |
| 170 | `/en/blog/madinah-to-alula-by-road-guide/` | Added this pass → `locations/alula-elephant-rock`. Real photo, 1600×1068, sharp, on-topic. | No | No | Low |
| 171 | `/en/blog/private-car-with-driver-vs-taxi-saudi-arabia/` | Added this pass → `fleet/hyundai-sonata-exterior`. Sonata model photo 1400×536, captioned. | No | No | Low |
| 172 | `/en/blog/hyundai-staria-with-driver-family-group-travel/` | Added this pass → `fleet/hyundai-staria-exterior`. Staria model photo 1200×675 (owner-confirmed vehicle), captioned. | No | No | Low |
| 173 | `/en/blog/cross-border-private-transfer-checklist/` | Added this pass → `cross-border/king-fahd-causeway`. Real photo, 1536×700. | No | No | Low |
| 174 | `/en/blog/private-car-vs-flight-vs-rental-saudi-intercity/` | Added this pass → `locations/taif`. Real photo of the Al Hada road, 1400×919; strong road imagery. | No | No | Low |
| 175 | `/en/blog/choosing-vehicle-size-family-group-travel-saudi/` | Added this pass → `fleet/gmc-yukon-at4-exterior`. Yukon model photo 892×762, captioned. | No | No | Medium |
| 176 | `/en/blog/airport-pickup-tips-saudi-arrivals/` | Added this pass → `airports/airport-ruh`. Illustration: AI-style illustration (alt says so). Not the real RUH terminal. | No | Yes, with a real photo | High |
| 177 | `/en/blog/car-towing-service-saudi-arabia/` | `heavy-transport/hydraulic-satha-sports-car-loaded`. 572×317 web photo. | No | Yes, higher resolution | High |
| 178 | `/en/blog/flatbed-vs-hydraulic-towing-saudi-arabia/` | No photo (plain navy hero) | Optional | No | Medium |
| 179 | `/en/blog/roadside-assistance-vehicle-recovery-saudi-arabia/` | No photo (plain navy hero) | Optional | No | High |
| 180 | `/en/blog/intercity-car-transport-saudi-arabia/` | No photo (plain navy hero) | Optional | No | Medium |
| 181 | `/en/blog/heavy-machinery-transportation-saudi-arabia/` | `heavy-transport/lowbed-truck-hauling-mobile-crane`. 1419×798, maker logos blurred. | No | No | Low |
| 182 | `/en/blog/lowbed-trailer-transport-saudi-arabia/` | `heavy-transport/flatbed-trailer-steel-coils-highway`. 654×469. | No | Yes, higher resolution | High |
| 183 | `/en/blog/excavator-transportation-saudi-arabia/` | No photo (plain navy hero) | Optional | No | Medium |
| 184 | `/en/blog/bulldozer-wheel-loader-transport-saudi-arabia/` | `heavy-transport/wheel-loader-bucket-construction-site`. 705×350. | No | Yes, higher resolution | High |
| 185 | `/en/blog/crane-industrial-equipment-transport-saudi-arabia/` | `heavy-transport/rough-terrain-crane-loaded-on-lowbed`. Same source photo as the lowbed image (re-crop): duplicate visual. | No | Yes, higher resolution | High |
| 186 | `/en/blog/choose-heavy-equipment-transport-company-saudi-arabia/` | Added this pass → `heavy-transport/lowbed-truck-hauling-mobile-crane`. 1419×798, maker logos blurred. | No | No | Low |
| 187 | `/en/blog/private-airport-transfers-saudi-arabia/` | `airports/airport-jed`. Illustration: AI-style illustration (alt says so). Not the real JED terminal. | No | Yes, with a real photo | High |
| 188 | `/en/blog/umrah-private-transport-plan-jeddah-makkah-madinah/` | `locations/makkah`. Real photo but 900×1600 portrait: only ~500px of height survives a 16:9 crop, soft on desktop. | No | Yes, higher resolution | High |
| 189 | `/en/blog/riyadh-to-jeddah-by-road-guide/` | `locations/riyadh`. Real photo, 1600×900, sharp. Over-used (home + 9 pages). | No | No | Low |
| 190 | `/en/blog/riyadh-to-dammam-private-transfer/` | `locations/al-khobar`. Real aerial, 1600×900, sharp. | No | No | Low |
| 191 | `/en/blog/makkah-to-taif-private-car-day-trip/` | `locations/taif`. Real photo of the Al Hada road, 1400×919; strong road imagery. | No | No | Low |
| 192 | `/en/blog/private-chauffeur-service-saudi-arabia/` | `fleet/toyota-camry-black-exterior`. Camry model photo 1100×825, captioned. | No | No | Low |
| 193 | `/en/blog/luxury-suv-gmc-transfer-saudi-arabia/` | `fleet/gmc-yukon-at4-exterior`. Yukon model photo 892×762, captioned. | No | No | Medium |
| 194 | `/en/blog/saudi-arabia-to-qatar-private-transfer/` | `cross-border/doha`. Real aerial, 1600×900. | No | No | Low |
| 195 | `/en/blog/saudi-arabia-to-bahrain-private-transfer/` | `cross-border/king-fahd-causeway`. Real photo, 1536×700. | No | No | Low |
| 196 | `/en/blog/saudi-arabia-to-uae-private-transfer/` | `cross-border/dubai`. Real photo, 1600×1143. | No | No | Low |
| 197 | `/en/contact/` | No photo by design (utility page); share image = default Riyadh card | No | No | Low |
| 198 | `/en/privacy-policy/` | No photo by design (utility page); share image = default Riyadh card | No | No | Low |
| 199 | `/en/terms-and-conditions/` | No photo by design (utility page); share image = default Riyadh card | No | No | Low |

## 5. Page-by-page specifications (every page that needs a new or replacement image)

Pages rated Low above keep their current image and need nothing. For each page below, Arabic alt text is written at implementation time, in natural Arabic (not translated word-for-word), the same way the existing `images.ts` entries are. "Keep" means keep the current image until the new one is supplied: no page will ever get a placeholder.

#### `/en/services/airport-transfers/jeddah-airport/` — Critical

- **Purpose / audience:** Jeddah Airport Transfer (Jeddah · King Abdulaziz International Airport); arriving travellers booking a pickup.
- **Existing:** `airports/airport-jed`. Illustration: AI-style illustration (alt says so). Not the real JED terminal.
- **Keep:** until replaced
- **Replace:** Yes, with a real photo
- **New image:** Real King Abdulaziz International Airport Terminal 1 exterior
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/airports/jeddah-king-abdulaziz-airport-terminal-1.webp`
- **Alt (EN):** Terminal 1 at King Abdulaziz International Airport, Jeddah

#### `/en/services/airport-transfers/riyadh-airport/` — Critical

- **Purpose / audience:** Riyadh Airport Transfer (Riyadh · King Khalid International Airport); arriving travellers booking a pickup.
- **Existing:** `airports/airport-ruh`. Illustration: AI-style illustration (alt says so). Not the real RUH terminal.
- **Keep:** until replaced
- **Replace:** Yes, with a real photo
- **New image:** Real King Khalid International Airport arrivals kerb (public area)
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/airports/riyadh-king-khalid-airport-arrivals.webp`
- **Alt (EN):** Arrivals kerb at King Khalid International Airport, Riyadh

#### `/en/services/airport-transfers/madinah-airport/` — Critical

- **Purpose / audience:** Madinah Airport Transfer (Madinah · Prince Mohammad bin Abdulaziz International Airport); arriving travellers booking a pickup.
- **Existing:** `airports/airport-med`. Illustration: AI-style illustration (alt says so). Not the real MED terminal.
- **Keep:** until replaced
- **Replace:** Yes, with a real photo
- **New image:** Real Prince Mohammad bin Abdulaziz Airport terminal exterior
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/airports/madinah-prince-mohammad-airport.webp`
- **Alt (EN):** Terminal at Prince Mohammad bin Abdulaziz Airport, Madinah

#### `/en/services/recovery-heavy-transport/car-transport-between-cities/` — Critical

- **Purpose / audience:** Car Transport Between Cities (Scheduled car shipping); vehicle owners, contractors and logistics buyers.
- **Existing:** `heavy-transport/flatbed-car-carrier-suv-highway`. 311×251 and likely AI-generated: unusable as a hero.
- **Keep:** until replaced
- **Replace:** Yes
- **New image:** Owner's flatbed carrying a car on a Saudi highway
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/heavy-transport/flatbed-car-carrier-highway.webp`
- **Alt (EN):** Flatbed truck carrying a car between cities

#### `/en/services/airport-transfers/` — High

- **Purpose / audience:** Airport Transfers (Airport Transfers); arriving travellers booking a pickup.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Chauffeur in dark suit holding a blank name board at an arrivals hall exit (model-released, face may show only with release)
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/airport-arrivals-meet-and-greet.webp`
- **Alt (EN):** Driver with a name board waiting at airport arrivals

#### `/en/services/airport-transfers/dammam-airport/` — High

- **Purpose / audience:** Dammam Airport Transfer (Dammam · King Fahd International Airport); arriving travellers booking a pickup.
- **Existing:** `airports/airport-dmm`. Illustration: AI-style illustration (alt says so). Not the real DMM terminal.
- **Keep:** until replaced
- **Replace:** Yes, with a real photo
- **New image:** Real King Fahd International Airport terminal exterior
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/airports/dammam-king-fahd-airport.webp`
- **Alt (EN):** King Fahd International Airport terminal, Dammam

#### `/en/services/umrah-transport/` — High

- **Purpose / audience:** Umrah Transport (Umrah Transport); pilgrims and families on Umrah.
- **Existing:** `locations/makkah`. Real photo but 900×1600 portrait: only ~500px of height survives a 16:9 crop, soft on desktop.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** Makkah 16:9 landscape (replaces the portrait crop)
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/makkah-landscape.webp`
- **Alt (EN):** Makkah city view towards the Grand Mosque

#### `/en/luxury-transportation/luxury-chauffeur/` — High

- **Purpose / audience:** Luxury Chauffeur Service (Luxury Transportation · Chauffeur); executives and VIP hosts.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Rear-seat interior of a luxury SUV: leather, ambient light, bottle of water
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/fleet/luxury-suv-rear-cabin.webp`
- **Alt (EN):** Rear cabin of a luxury SUV with leather seats

#### `/en/services/event-transportation/event-airport-transfers/` — High

- **Purpose / audience:** Event Airport Transfers (Event Transportation · Airport Arrivals); event organisers and guests.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Group of delegates with badges walking to waiting cars at arrivals
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/event-delegates-airport-arrivals.webp`
- **Alt (EN):** Delegates walking to waiting cars at airport arrivals

#### `/en/services/umrah-transport/makkah-ziyarat/` — High

- **Purpose / audience:** Makkah Ziyarat Transport (Umrah Transport · Makkah Ziyarat); pilgrims and families on Umrah.
- **Existing:** Added this pass → `locations/makkah`. Real photo but 900×1600 portrait: only ~500px of height survives a 16:9 crop, soft on desktop.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** Jabal al-Nour (Hira) seen from the road
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/makkah-jabal-al-nour.webp`
- **Alt (EN):** Jabal al-Nour near Makkah

#### `/en/services/airport-transfers/taif-airport/` — High

- **Purpose / audience:** Taif Airport Transfer (Taif · Taif International Airport); arriving travellers booking a pickup.
- **Existing:** `airports/taif-airport-terminal-sign`. Real but 600×400.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** Higher-resolution Taif airport terminal
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/airports/taif-airport-terminal.webp`
- **Alt (EN):** Terminal at Taif International Airport

#### `/en/services/airport-transfers/private-airport-pickup/` — High

- **Purpose / audience:** Private Airport Pickup (Airport Transfers · Private Pickup); arriving travellers booking a pickup.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Driver greeting a passenger at the arrivals kerb, loading a suitcase into an SUV boot
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/airport-pickup-luggage-loading.webp`
- **Alt (EN):** Driver loading a suitcase into an SUV at the airport kerb

#### `/en/services/airport-transfers/airport-to-hotel/` — High

- **Purpose / audience:** Airport to Hotel Transfer (Airport Transfers · To Your Hotel); arriving travellers booking a pickup.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** SUV pulling up at a hotel entrance, porter area visible, no hotel name
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/airport-to-hotel-arrival.webp`
- **Alt (EN):** Private car arriving at a hotel entrance from the airport

#### `/en/services/airport-transfers/vip-airport-transfer/` — High

- **Purpose / audience:** VIP Airport Transfer (Airport Transfers · VIP); VIP hosts and protocol teams.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Black full-size SUV, rear door held open, at a terminal kerb at night
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/vip-airport-transfer-night.webp`
- **Alt (EN):** Rear door held open on a black SUV at an airport kerb

#### `/en/services/cross-border-transfers/` — High

- **Purpose / audience:** Cross-Border Transfers (Cross-Border Transfers); travellers comparing road vs other modes between cities.
- **Existing:** `cross-border/border-crossings`. Illustration: Illustration (alt says so).
- **Keep:** until replaced
- **Replace:** Yes, with a real photo
- **New image:** Real King Fahd Causeway or Salwa border approach road (no officials, no signage close-ups)
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/cross-border/salwa-border-approach.webp`
- **Alt (EN):** Road approaching a Saudi border crossing

#### `/en/luxury-transportation/vip-delegation-transport/` — High

- **Purpose / audience:** VIP Delegation Transportation (Luxury Transportation · Delegations); VIP hosts and protocol teams.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Convoy of three black SUVs on a wide Riyadh avenue
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/vip-delegation-suv-convoy.webp`
- **Alt (EN):** Convoy of black SUVs on a city avenue

#### `/en/services/umrah-transport/group-umrah-transport/` — High

- **Purpose / audience:** Group Umrah Transportation (Umrah Transport · Groups); pilgrims and families on Umrah.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Hyundai Staria with sliding door open, family luggage being loaded
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/fleet/hyundai-staria-sliding-door-luggage.webp`
- **Alt (EN):** Hyundai Staria with its sliding door open for luggage

#### `/en/services/umrah-transport/private-umrah-chauffeur/` — High

- **Purpose / audience:** Private Umrah Chauffeur (Umrah Transport · Private Chauffeur); pilgrims and families on Umrah.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Dark SUV on a Makkah hotel-district road with the clock tower distant (no faces of pilgrims)
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/makkah-hotel-district-private-car.webp`
- **Alt (EN):** Private car on a road in the Makkah hotel district

#### `/en/services/event-transportation/vip-event-chauffeur/` — High

- **Purpose / audience:** VIP Event Chauffeur (Event Transportation · VIP Chauffeur); event organisers and guests.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Chauffeur holding the rear door of a black SUV on a red-carpet-style entrance
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/vip-event-chauffeur-door.webp`
- **Alt (EN):** Chauffeur holding a car door at a VIP event entrance

#### `/en/services/group-transportation/group-airport-transfers/` — High

- **Purpose / audience:** Group Airport Transfers (Family & Group · Airports); arriving travellers booking a pickup.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Group luggage trolley next to a Staria at arrivals
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/group-airport-luggage-staria.webp`
- **Alt (EN):** Group luggage beside a Hyundai Staria at the airport

#### `/en/services/city-transport/makkah/` — High

- **Purpose / audience:** Makkah Private Transfers (City Transport · Makkah); pilgrims and families on Umrah.
- **Existing:** `locations/makkah`. Real photo but 900×1600 portrait: only ~500px of height survives a 16:9 crop, soft on desktop.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** Makkah: one recognisable, uncluttered landmark or skyline (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/makkah-skyline.webp`
- **Alt (EN):** Makkah skyline

#### `/en/services/city-transport/yanbu/` — High

- **Purpose / audience:** Yanbu City Transport (City Transport · Yanbu); travellers wanting a car with driver.
- **Existing:** `locations/yanbu-historical-area-sign`. 548×364 web photo: blurry as a full-width hero.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** Yanbu: one recognisable, uncluttered landmark or skyline (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/yanbu-skyline.webp`
- **Alt (EN):** Yanbu skyline

#### `/en/services/city-transport/najran/` — High

- **Purpose / audience:** Najran City Transport (City Transport · Najran); travellers wanting a car with driver.
- **Existing:** `locations/najran-mud-brick-fort`. 640×480 web photo.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** Najran: one recognisable, uncluttered landmark or skyline (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/najran-skyline.webp`
- **Alt (EN):** Najran skyline

#### `/en/services/intercity-transfers/riyadh-to-al-ahsa/` — High

- **Purpose / audience:** Riyadh to Al Ahsa (Intercity · Riyadh ⇄ Al Ahsa); travellers comparing road vs other modes between cities.
- **Existing:** `locations/al-ahsa-jabal-qarah`. 617×324 web photo.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** Al Ahsa: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/al-ahsa-skyline.webp`
- **Alt (EN):** Al Ahsa skyline

#### `/en/services/intercity-transfers/riyadh-to-manama/` — High

- **Purpose / audience:** Riyadh to Bahrain (Manama) (Cross-border · Riyadh ⇄ Manama); travellers comparing road vs other modes between cities.
- **Existing:** `cross-border/manama`. 796×385.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** Manama: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/manama-skyline.webp`
- **Alt (EN):** Manama skyline

#### `/en/services/intercity-transfers/riyadh-to-yanbu/` — High

- **Purpose / audience:** Riyadh to Yanbu (Intercity · Riyadh ⇄ Yanbu); travellers comparing road vs other modes between cities.
- **Existing:** `locations/yanbu-historical-area-sign`. 548×364 web photo: blurry as a full-width hero.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** Yanbu: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/yanbu-skyline.webp`
- **Alt (EN):** Yanbu skyline

#### `/en/services/intercity-transfers/jeddah-to-yanbu/` — High

- **Purpose / audience:** Jeddah to Yanbu (Intercity · Jeddah ⇄ Yanbu); travellers comparing road vs other modes between cities.
- **Existing:** `locations/yanbu-historical-area-sign`. 548×364 web photo: blurry as a full-width hero.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** Yanbu: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/yanbu-skyline.webp`
- **Alt (EN):** Yanbu skyline

#### `/en/services/intercity-transfers/dammam-to-al-ahsa/` — High

- **Purpose / audience:** Dammam to Al Ahsa (Intercity · Eastern Province); travellers comparing road vs other modes between cities.
- **Existing:** `locations/al-ahsa-jabal-qarah`. 617×324 web photo.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** Al Ahsa: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/al-ahsa-skyline.webp`
- **Alt (EN):** Al Ahsa skyline

#### `/en/services/city-transport/dhahran/` — High

- **Purpose / audience:** Dhahran City Transport (City Transport · Dhahran); travellers wanting a car with driver.
- **Existing:** `locations/dhahran-ithra-cultural-centre`. 596×335 web photo.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** Dhahran: one recognisable, uncluttered landmark or skyline (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/dhahran-skyline.webp`
- **Alt (EN):** Dhahran skyline

#### `/en/services/city-transport/al-ahsa/` — High

- **Purpose / audience:** Al Ahsa City Transport (City Transport · Al Ahsa); travellers wanting a car with driver.
- **Existing:** `locations/al-ahsa-oasis-palms`. 655×448 web photo.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** Al Ahsa: one recognisable, uncluttered landmark or skyline (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/al-ahsa-skyline.webp`
- **Alt (EN):** Al Ahsa skyline

#### `/en/services/airport-transfers/al-ahsa-airport/` — High

- **Purpose / audience:** Al Ahsa Airport Transfers (Airport Transfers · Al Ahsa); arriving travellers booking a pickup.
- **Existing:** `locations/al-ahsa-jabal-qarah`. 617×324 web photo.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** Al Ahsa International Airport terminal
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/airports/al-ahsa-airport-terminal.webp`
- **Alt (EN):** Al Ahsa International Airport terminal

#### `/en/services/intercity-transfers/madinah-to-makkah/` — High

- **Purpose / audience:** Madinah to Makkah (Intercity · Madinah to Makkah); travellers comparing road vs other modes between cities.
- **Existing:** `locations/makkah`. Real photo but 900×1600 portrait: only ~500px of height survives a 16:9 crop, soft on desktop.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** Makkah: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/makkah-skyline.webp`
- **Alt (EN):** Makkah skyline

#### `/en/services/intercity-transfers/makkah-to-madinah/` — High

- **Purpose / audience:** Makkah to Madinah (Intercity · Makkah → Madinah); travellers comparing road vs other modes between cities.
- **Existing:** `routes/haramain-train-platform`. 549×364; also shows the train, a competitor mode, on a private-car page.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** Madinah: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/madinah-skyline.webp`
- **Alt (EN):** Madinah skyline

#### `/en/services/intercity-transfers/jeddah-to-makkah/` — High

- **Purpose / audience:** Jeddah to Makkah (Intercity · Jeddah ⇄ Makkah); travellers comparing road vs other modes between cities.
- **Existing:** `locations/makkah`. Real photo but 900×1600 portrait: only ~500px of height survives a 16:9 crop, soft on desktop.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** Makkah: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/makkah-skyline.webp`
- **Alt (EN):** Makkah skyline

#### `/en/services/intercity-transfers/riyadh-to-makkah/` — High

- **Purpose / audience:** Riyadh to Makkah (Intercity · Riyadh ⇄ Makkah); pilgrims and families on Umrah.
- **Existing:** `locations/makkah`. Real photo but 900×1600 portrait: only ~500px of height survives a 16:9 crop, soft on desktop.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** Makkah: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/makkah-skyline.webp`
- **Alt (EN):** Makkah skyline

#### `/en/services/intercity-transfers/abha-to-riyadh/` — High

- **Purpose / audience:** Abha to Riyadh (Intercity · Abha to Riyadh); travellers comparing road vs other modes between cities.
- **Existing:** `locations/abha-airport-park-sign`. 678×452 web photo.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** Riyadh: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/riyadh-skyline.webp`
- **Alt (EN):** Riyadh skyline

#### `/en/services/city-transport/al-baha/` — High

- **Purpose / audience:** Al Baha (Locations · Al Baha); travellers wanting a car with driver.
- **Existing:** `locations/al-baha-forest-picnic`. 596×335 web photo.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** Al Baha: one recognisable, uncluttered landmark or skyline (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/al-baha-skyline.webp`
- **Alt (EN):** Al Baha skyline

#### `/en/services/recovery-heavy-transport/satha-car-recovery/` — High

- **Purpose / audience:** Satha Car Recovery (Satha · car recovery); vehicle owners, contractors and logistics buyers.
- **Existing:** `heavy-transport/hydraulic-satha-sports-car-loaded`. 572×317 web photo.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** High-resolution satha with a car loaded (owner's truck)
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/heavy-transport/satha-car-loaded.webp`
- **Alt (EN):** Satha truck carrying a car

#### `/en/services/recovery-heavy-transport/flatbed-trailer-transport/` — High

- **Purpose / audience:** Flatbed Trailer Transport (Flatbed haulage); vehicle owners, contractors and logistics buyers.
- **Existing:** `heavy-transport/flatbed-trailer-steel-coils-highway`. 654×469.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** High-resolution flatbed trailer with secured cargo
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/heavy-transport/flatbed-trailer-cargo.webp`
- **Alt (EN):** Flatbed trailer with secured cargo

#### `/en/services/recovery-heavy-transport/oversized-load-transport/` — High

- **Purpose / audience:** Oversized Load Transport (Exceptional loads); vehicle owners, contractors and logistics buyers.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Oversized load with escort vehicle and warning flags on a highway (real job)
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/heavy-transport/oversized-load-escort.webp`
- **Alt (EN):** Oversized load moving with an escort vehicle

#### `/en/services/recovery-heavy-transport/industrial-machinery-relocation/` — High

- **Purpose / audience:** Industrial Machinery Relocation (Factory and plant moves); vehicle owners, contractors and logistics buyers.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Generator or machine being lifted onto a trailer in a factory yard
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/heavy-transport/machinery-loading-factory-yard.webp`
- **Alt (EN):** Industrial machine being loaded onto a trailer

#### `/en/services/recovery-heavy-transport/heavy-equipment-transport/` — High

- **Purpose / audience:** Heavy Equipment Transport (Machinery transport); vehicle owners, contractors and logistics buyers.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Lowbed carrying a bulldozer or grader (different from the crane photo)
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/heavy-transport/lowbed-bulldozer.webp`
- **Alt (EN):** Lowbed trailer carrying a bulldozer

#### `/en/services/recovery-heavy-transport/excavator-transport/` — High

- **Purpose / audience:** Excavator Transport (Excavator (bokleen) transport); vehicle owners, contractors and logistics buyers.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Excavator chained on a lowbed trailer
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/heavy-transport/excavator-on-lowbed.webp`
- **Alt (EN):** Excavator secured on a lowbed trailer

#### `/en/services/recovery-heavy-transport/wheel-loader-transport/` — High

- **Purpose / audience:** Wheel Loader (Shuwel) Transport (Shuwel transport); vehicle owners, contractors and logistics buyers.
- **Existing:** `heavy-transport/wheel-loader-bucket-construction-site`. 705×350.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** High-resolution wheel loader on a lowbed
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/heavy-transport/wheel-loader-on-lowbed.webp`
- **Alt (EN):** Wheel loader on a lowbed trailer

#### `/en/services/recovery-heavy-transport/forklift-transport/` — High

- **Purpose / audience:** Forklift Transport (Forklift and lift transport); vehicle owners, contractors and logistics buyers.
- **Existing:** `heavy-transport/heavy-duty-forklifts-yard`. 577×346.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** High-resolution forklift loaded on a trailer
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/heavy-transport/forklift-on-trailer.webp`
- **Alt (EN):** Forklift loaded on a trailer

#### `/en/services/recovery-heavy-transport/crane-transport/` — High

- **Purpose / audience:** Crane Transport (Crane relocation); vehicle owners, contractors and logistics buyers.
- **Existing:** `heavy-transport/rough-terrain-crane-loaded-on-lowbed`. Same source photo as the lowbed image (re-crop): duplicate visual.
- **Keep:** until replaced
- **Replace:** Yes, higher resolution
- **New image:** A different crane-on-trailer photo (current file is a re-crop of the lowbed hero)
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/heavy-transport/crane-on-trailer.webp`
- **Alt (EN):** Mobile crane secured on a trailer

#### `/en/services/` — Medium

- **Purpose / audience:** Services (Services); travellers wanting a car with driver.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Wide establishing shot: dark SUV with driver at a Riyadh hotel porte-cochère at dusk (no logos)
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/private-chauffeur-hotel-arrival-dusk.webp`
- **Alt (EN):** Private car with driver waiting at a hotel entrance at dusk

#### `/en/services/event-transportation/` — Medium

- **Purpose / audience:** Event Transportation (Event Transportation); event organisers and guests.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Evening venue drop-off: SUV at a lit event entrance, guests out of focus
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/event-venue-dropoff-evening.webp`
- **Alt (EN):** Private car dropping guests at an evening event

#### `/en/services/event-transportation/wedding-transport/` — Medium

- **Purpose / audience:** Wedding Transportation (Event Transportation · Weddings); event organisers and guests.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Decorated black sedan or SUV outside a wedding hall at night, no faces
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/wedding-car-evening.webp`
- **Alt (EN):** Black car waiting outside a wedding hall at night

#### `/en/services/chauffeur-services/` — Medium

- **Purpose / audience:** Private Chauffeur (Private Chauffeur); travellers wanting a car with driver.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Driver in suit at the wheel, seen from the rear seat, city outside
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/chauffeur-driving-city.webp`
- **Alt (EN):** Driver at the wheel seen from the rear seat

#### `/en/services/event-transportation/corporate-events/` — Medium

- **Purpose / audience:** Corporate Event Transportation (Event Transportation · Corporate); companies and business travellers.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Executive stepping into a black SUV outside a modern office tower (KAFD-style), face not shown
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/corporate-event-suv-office.webp`
- **Alt (EN):** Executive getting into a black SUV outside an office tower

#### `/en/services/event-transportation/conference-transport/` — Medium

- **Purpose / audience:** Conference & Exhibition Transport (Event Transportation · Conferences & Exhibitions); event organisers and guests.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Row of dark SUVs at a conference-centre entrance
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/conference-centre-dropoff.webp`
- **Alt (EN):** Cars waiting at a conference centre entrance

#### `/en/services/umrah-transport/madinah-ziyarat/` — Medium

- **Purpose / audience:** Madinah Ziyarat Transport (Umrah Transport · Madinah Ziyarat); pilgrims and families on Umrah.
- **Existing:** Added this pass → `locations/madinah`. Real photo, 1200×1600 portrait; crop works on mobile, tight on desktop.
- **Keep:** current image until the new one exists
- **Replace:** Later (better crop)
- **New image:** Quba Mosque exterior in Madinah
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/madinah-quba-mosque.webp`
- **Alt (EN):** Quba Mosque in Madinah

#### `/en/services/intercity-transfers/private-intercity-chauffeur/` — Medium

- **Purpose / audience:** Private Intercity Chauffeur (Intercity · Private Chauffeur); travellers wanting a car with driver.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Rear passenger view through windscreen on a long highway
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/routes/intercity-highway-passenger-view.webp`
- **Alt (EN):** Highway seen from the passenger seat on an intercity trip

#### `/en/luxury-transportation/luxury-suv/` — Medium

- **Purpose / audience:** Luxury SUV Transportation (Luxury Transportation · SUV); executives and VIP hosts.
- **Existing:** Added this pass → `fleet/luxury-suv-vip-exterior`. Lexus LX 600 model photo 904×564, captioned.
- **Keep:** current image until the new one exists
- **Replace:** Later (better crop)
- **New image:** Owner-confirmed luxury SUV, real photo, 3/4 front
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/fleet/luxury-suv-exterior-real.webp`
- **Alt (EN):** Luxury SUV with driver

#### `/en/services/chauffeur-services/multi-day-chauffeur/` — Medium

- **Purpose / audience:** Multi-Day Chauffeur (Chauffeur Services · Multi-Day); travellers wanting a car with driver.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** SUV on an open desert highway at golden hour
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/routes/desert-highway-suv-golden-hour.webp`
- **Alt (EN):** SUV on a desert highway at golden hour

#### `/en/services/event-transportation/concert-transport/` — Medium

- **Purpose / audience:** Concert Transportation (Event Transportation · Concerts); event organisers and guests.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** City boulevard at night with event lighting, car tail-lights
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/concert-night-dropoff.webp`
- **Alt (EN):** Cars on a lit boulevard on a concert night

#### `/en/services/event-transportation/festival-transport/` — Medium

- **Purpose / audience:** Festival Transportation (Event Transportation · Festivals); event organisers and guests.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Festival grounds entrance at dusk, cars in a drop-off lane
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/festival-dropoff-lane.webp`
- **Alt (EN):** Drop-off lane at a festival entrance at dusk

#### `/en/services/group-transportation/` — Medium

- **Purpose / audience:** Family & Group Transportation (Family & Group Transportation); travellers wanting a car with driver.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Staria and a full-size SUV parked side by side with luggage
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/fleet/staria-and-suv-group-trip.webp`
- **Alt (EN):** Hyundai Staria and an SUV ready for a group trip

#### `/en/services/special-transportation/` — Medium

- **Purpose / audience:** Special Transportation (Special Transportation); travellers wanting a car with driver.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Driver assisting a passenger with a wheelchair-folded bag into an SUV (model-released)
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/assisted-passenger-entry.webp`
- **Alt (EN):** Driver helping a passenger into a car

#### `/en/services/special-transportation/hotel-transportation/` — Medium

- **Purpose / audience:** Hotel Transportation (Special Transportation · Hotels); arriving travellers booking a pickup.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Hotel porte-cochère with SUV waiting (no hotel name)
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/hotel-porte-cochere-suv.webp`
- **Alt (EN):** SUV waiting at a hotel entrance

#### `/en/services/special-transportation/cruise-port-transfers/` — Medium

- **Purpose / audience:** Cruise Port Transfers (Special Transportation · Cruise Ports); arriving travellers booking a pickup.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Jeddah Islamic Port cruise terminal or ship at berth
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/jeddah-cruise-terminal.webp`
- **Alt (EN):** Cruise ship at the terminal in Jeddah

#### `/en/services/special-transportation/travel-agency-transport/` — Medium

- **Purpose / audience:** Travel Agency Transportation (Special Transportation · Travel Agencies); companies and business travellers.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Clipboard itinerary and passenger list on the seat of a Staria
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/travel-agency-itinerary-staria.webp`
- **Alt (EN):** Trip itinerary on the seat of a Hyundai Staria

#### `/en/services/special-transportation/bilingual-chauffeur/` — Medium

- **Purpose / audience:** Bilingual Chauffeur Service (Special Transportation · Language); travellers wanting a car with driver.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Driver handing a phone with a map to a passenger, rear seat
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/bilingual-driver-route-briefing.webp`
- **Alt (EN):** Driver showing a passenger the route on a phone

#### `/en/services/special-transportation/senior-friendly-transportation/` — Medium

- **Purpose / audience:** Senior-Friendly Transportation (Special Transportation · Elderly Travellers); travellers wanting a car with driver.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Driver helping an older passenger step down from an SUV using a step (model-released)
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/services/senior-passenger-step-assist.webp`
- **Alt (EN):** Driver helping an older passenger step out of an SUV

#### `/en/services/city-transport/` — Medium

- **Purpose / audience:** City Transport (City Transport); travellers wanting a car with driver.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Riyadh KAFD or Kingdom Centre street level with a dark sedan passing
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/riyadh-kafd-street.webp`
- **Alt (EN):** Street in Riyadh's financial district

#### `/en/services/city-transport/jeddah/` — Medium

- **Purpose / audience:** Jeddah City Transport (City Transport · Jeddah); travellers wanting a car with driver.
- **Existing:** `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site.
- **Keep:** current image until the new one exists
- **Replace:** Later (better crop)
- **New image:** Jeddah: one recognisable, uncluttered landmark or skyline (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/jeddah-skyline.webp`
- **Alt (EN):** Jeddah skyline

#### `/en/services/city-transport/madinah/` — Medium

- **Purpose / audience:** Madinah Private Transfers (City Transport · Madinah); pilgrims and families on Umrah.
- **Existing:** `locations/madinah`. Real photo, 1200×1600 portrait; crop works on mobile, tight on desktop.
- **Keep:** current image until the new one exists
- **Replace:** Later (better crop)
- **New image:** Madinah: one recognisable, uncluttered landmark or skyline (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/madinah-skyline.webp`
- **Alt (EN):** Madinah skyline

#### `/en/services/tourism-transport/private-sightseeing-driver/` — Medium

- **Purpose / audience:** Private Sightseeing Driver (Tourism Transport · Sightseeing); travellers wanting a car with driver.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Jeddah Al-Balad coral-stone houses, street level
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/jeddah-al-balad.webp`
- **Alt (EN):** Coral-stone houses in Jeddah Al-Balad

#### `/en/services/tourism-transport/day-trip-transport/` — Medium

- **Purpose / audience:** Private Day Trip Transportation (Tourism Transport · Day Trips); travellers wanting a car with driver.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Edge of the World cliffs near Riyadh with an SUV on the track
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/edge-of-the-world-riyadh.webp`
- **Alt (EN):** Edge of the World cliffs near Riyadh

#### `/en/services/tourism-transport/multi-stop-transport/` — Medium

- **Purpose / audience:** Multi-Stop Private Transportation (Tourism Transport · Multi-Stop); travellers wanting a car with driver.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Map-style aerial of a city ring road at dusk
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/routes/city-ring-road-dusk.webp`
- **Alt (EN):** City ring road at dusk

#### `/en/services/city-transport/jubail/` — Medium

- **Purpose / audience:** Jubail City Transport (City Transport · Jubail); travellers wanting a car with driver.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Jubail: one recognisable, uncluttered landmark or skyline (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/jubail-skyline.webp`
- **Alt (EN):** Jubail skyline

#### `/en/services/city-transport/jazan/` — Medium

- **Purpose / audience:** Jazan City Transport (City Transport · Jazan); travellers wanting a car with driver.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Jazan: one recognisable, uncluttered landmark or skyline (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/jazan-skyline.webp`
- **Alt (EN):** Jazan skyline

#### `/en/services/city-transport/hail/` — Medium

- **Purpose / audience:** Hail City Transport (City Transport · Hail); travellers wanting a car with driver.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Hail: one recognisable, uncluttered landmark or skyline (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/hail-skyline.webp`
- **Alt (EN):** Hail skyline

#### `/en/services/intercity-transfers/riyadh-to-madinah/` — Medium

- **Purpose / audience:** Riyadh to Madinah (Intercity · Riyadh ⇄ Madinah); pilgrims and families on Umrah.
- **Existing:** `locations/madinah`. Real photo, 1200×1600 portrait; crop works on mobile, tight on desktop.
- **Keep:** current image until the new one exists
- **Replace:** Later (better crop)
- **New image:** Madinah: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/madinah-skyline.webp`
- **Alt (EN):** Madinah skyline

#### `/en/services/intercity-transfers/riyadh-to-jubail/` — Medium

- **Purpose / audience:** Riyadh to Jubail (Intercity · Riyadh ⇄ Jubail); travellers comparing road vs other modes between cities.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Jubail: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/jubail-skyline.webp`
- **Alt (EN):** Jubail skyline

#### `/en/services/intercity-transfers/riyadh-to-hail/` — Medium

- **Purpose / audience:** Riyadh to Hail (Intercity · Riyadh ⇄ Hail); travellers comparing road vs other modes between cities.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Hail: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/hail-skyline.webp`
- **Alt (EN):** Hail skyline

#### `/en/services/intercity-transfers/riyadh-to-hafar-al-batin/` — Medium

- **Purpose / audience:** Riyadh to Hafar Al Batin (Intercity · Riyadh ⇄ Hafar Al Batin); travellers comparing road vs other modes between cities.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Hafar Al-Batin: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/hafar-al-batin-skyline.webp`
- **Alt (EN):** Hafar Al-Batin skyline

#### `/en/services/intercity-transfers/dammam-to-jubail/` — Medium

- **Purpose / audience:** Dammam to Jubail (Intercity · Eastern Province); travellers comparing road vs other modes between cities.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Jubail: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/jubail-skyline.webp`
- **Alt (EN):** Jubail skyline

#### `/en/services/city-transport/hafar-al-batin/` — Medium

- **Purpose / audience:** Hafar Al Batin City Transport (City Transport · Hafar Al Batin); travellers wanting a car with driver.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Hafar Al-Batin: one recognisable, uncluttered landmark or skyline (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/hafar-al-batin-skyline.webp`
- **Alt (EN):** Hafar Al-Batin skyline

#### `/en/services/intercity-transfers/jeddah-to-madinah/` — Medium

- **Purpose / audience:** Jeddah to Madinah (Intercity · Jeddah ⇄ Madinah); travellers comparing road vs other modes between cities.
- **Existing:** `locations/madinah`. Real photo, 1200×1600 portrait; crop works on mobile, tight on desktop.
- **Keep:** current image until the new one exists
- **Replace:** Later (better crop)
- **New image:** Madinah: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/madinah-skyline.webp`
- **Alt (EN):** Madinah skyline

#### `/en/services/intercity-transfers/riyadh-to-jeddah/` — Medium

- **Purpose / audience:** Riyadh to Jeddah (Intercity · Riyadh → Jeddah); travellers comparing road vs other modes between cities.
- **Existing:** `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site.
- **Keep:** current image until the new one exists
- **Replace:** Later (better crop)
- **New image:** Jeddah: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/jeddah-skyline.webp`
- **Alt (EN):** Jeddah skyline

#### `/en/services/intercity-transfers/madinah-to-jeddah/` — Medium

- **Purpose / audience:** Madinah to Jeddah (Intercity · Madinah → Jeddah); travellers comparing road vs other modes between cities.
- **Existing:** `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site.
- **Keep:** current image until the new one exists
- **Replace:** Later (better crop)
- **New image:** Jeddah: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/jeddah-skyline.webp`
- **Alt (EN):** Jeddah skyline

#### `/en/services/intercity-transfers/makkah-to-jeddah/` — Medium

- **Purpose / audience:** Makkah to Jeddah (Intercity · Makkah → Jeddah); travellers comparing road vs other modes between cities.
- **Existing:** Added this pass → `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site.
- **Keep:** current image until the new one exists
- **Replace:** Later (better crop)
- **New image:** Jeddah: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/jeddah-skyline.webp`
- **Alt (EN):** Jeddah skyline

#### `/en/services/intercity-transfers/taif-to-jeddah/` — Medium

- **Purpose / audience:** Taif to Jeddah (Intercity · Taif → Jeddah); travellers comparing road vs other modes between cities.
- **Existing:** `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site.
- **Keep:** current image until the new one exists
- **Replace:** Later (better crop)
- **New image:** Jeddah: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/jeddah-skyline.webp`
- **Alt (EN):** Jeddah skyline

#### `/en/services/intercity-transfers/alula-to-madinah/` — Medium

- **Purpose / audience:** AlUla to Madinah (Intercity · AlUla → Madinah); travellers comparing road vs other modes between cities.
- **Existing:** Added this pass → `locations/madinah`. Real photo, 1200×1600 portrait; crop works on mobile, tight on desktop.
- **Keep:** current image until the new one exists
- **Replace:** Later (better crop)
- **New image:** Madinah: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/madinah-skyline.webp`
- **Alt (EN):** Madinah skyline

#### `/en/services/intercity-transfers/yanbu-to-jeddah/` — Medium

- **Purpose / audience:** Yanbu to Jeddah (Intercity · Yanbu → Jeddah); travellers comparing road vs other modes between cities.
- **Existing:** `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site.
- **Keep:** current image until the new one exists
- **Replace:** Later (better crop)
- **New image:** Jeddah: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/jeddah-skyline.webp`
- **Alt (EN):** Jeddah skyline

#### `/en/services/intercity-transfers/dammam-to-jeddah/` — Medium

- **Purpose / audience:** Dammam to Jeddah (Intercity · Dammam to Jeddah); travellers comparing road vs other modes between cities.
- **Existing:** `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site.
- **Keep:** current image until the new one exists
- **Replace:** Later (better crop)
- **New image:** Jeddah: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/jeddah-skyline.webp`
- **Alt (EN):** Jeddah skyline

#### `/en/services/intercity-transfers/alula-to-jeddah/` — Medium

- **Purpose / audience:** AlUla to Jeddah (Intercity · AlUla to Jeddah); travellers comparing road vs other modes between cities.
- **Existing:** `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site.
- **Keep:** current image until the new one exists
- **Replace:** Later (better crop)
- **New image:** Jeddah: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/jeddah-skyline.webp`
- **Alt (EN):** Jeddah skyline

#### `/en/services/intercity-transfers/jeddah-to-jazan/` — Medium

- **Purpose / audience:** Jeddah to Jazan (Intercity · Jeddah to Jazan); travellers comparing road vs other modes between cities.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Jazan: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/jazan-skyline.webp`
- **Alt (EN):** Jazan skyline

#### `/en/services/intercity-transfers/jazan-to-jeddah/` — Medium

- **Purpose / audience:** Jazan to Jeddah (Intercity · Jazan to Jeddah); travellers comparing road vs other modes between cities.
- **Existing:** `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site.
- **Keep:** current image until the new one exists
- **Replace:** Later (better crop)
- **New image:** Jeddah: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/jeddah-skyline.webp`
- **Alt (EN):** Jeddah skyline

#### `/en/services/intercity-transfers/abha-to-jeddah/` — Medium

- **Purpose / audience:** Abha to Jeddah (Intercity · Abha to Jeddah); travellers comparing road vs other modes between cities.
- **Existing:** `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site.
- **Keep:** current image until the new one exists
- **Replace:** Later (better crop)
- **New image:** Jeddah: one recognisable, uncluttered landmark or skyline in 16:9 (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/jeddah-skyline.webp`
- **Alt (EN):** Jeddah skyline

#### `/en/services/city-transport/khamis-mushait/` — Medium

- **Purpose / audience:** Khamis Mushait (Locations · Khamis Mushait); travellers wanting a car with driver.
- **Existing:** No photo (plain navy hero)
- **Keep:** n/a
- **Replace:** No
- **New image:** Khamis Mushait: one recognisable, uncluttered landmark or skyline (no hotel or brand logos), blue hour or morning
- **Size / ratio:** 1920×1080 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/locations/khamis-mushait-skyline.webp`
- **Alt (EN):** Khamis Mushait skyline

#### `/en/services/recovery-heavy-transport/satha-car-recovery/jeddah/` — Medium

- **Purpose / audience:** Satha in Jeddah (Jeddah · satha); vehicle owners, contractors and logistics buyers.
- **Existing:** `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site.
- **Keep:** current image until the new one exists
- **Replace:** Later (better crop)
- **New image:** Owner's own truck working in Jeddah (real job photo, plates and faces blurred)
- **Size / ratio:** 1600×900 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/heavy-transport/satha-car-recovery-jeddah.webp`
- **Alt (EN):** Satha recovery truck in Jeddah

#### `/en/services/recovery-heavy-transport/heavy-equipment-transport/jeddah/` — Medium

- **Purpose / audience:** Heavy Equipment Transport Jeddah (Jeddah · lowbed); vehicle owners, contractors and logistics buyers.
- **Existing:** `locations/jeddah`. Real photo, 1200×1600 portrait cropped to 16:9; most-reused image on the site.
- **Keep:** current image until the new one exists
- **Replace:** Later (better crop)
- **New image:** Owner's own truck working in Jeddah (real job photo, plates and faces blurred)
- **Size / ratio:** 1600×900 (16:9); master ≥1920px wide, export WebP q≈76, keep subject in the right-hand 55% (text sits on the left in EN, right in AR: centre-weighted subjects work for both).
- **Filename:** `public/images/heavy-transport/heavy-equipment-transport-jeddah.webp`
- **Alt (EN):** Heavy equipment transport in Jeddah

