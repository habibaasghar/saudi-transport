# RideSaudi — Image Asset Plan

Date: 2026-11-22. Source of truth for images in code: `src/content/images.ts` (destination/page images) and `src/content/fleet.ts` (vehicle cards). Rules: `docs/IMAGE-FOLDERS.md`, sister-site image rules (re-crop, rename, strip metadata, no other brands' logos).

## 1. Current state (audit)

| Finding | Detail | Severity |
|---|---|---|
| Alt text | Every `<img>` on all 366 pages has `alt`; EN and AR alt are separate | OK |
| Format / delivery | WebP sources; `next/image` with AVIF/WebP negotiation; width/height set (no CLS) | OK |
| Airport pages use **illustrations**, not photos | Riyadh, Jeddah, Madinah, Dammam, Taif airport heroes are labelled illustrations; alt text says "Illustration of…" honestly | Medium |
| Low-resolution images | `locations/yanbu` (597×335 render), `cross-border/manama` (796×385), `cross-border/kuwait-city` (768×576), heavy-transport flatbed (311×251, flagged as likely AI-generated) | Medium |
| No real vehicle photos of RideSaudi trips | Fleet photos are model examples, correctly not described as RideSaudi vehicles | High (trust) |
| Many pages have no image | By design ("honest gap, not a placeholder") | Low |

No fake vehicle photographs were created in this pass.

## 2. Photos the owner should supply (priority order)

| Page URL | Image requirement | Suggested filename | Recommended size | Alt text (EN / AR) | Placement |
|---|---|---|---|---|---|
| `/en/fleet/` + home fleet block | Real GMC Yukon used for RideSaudi trips, exterior 3/4 view, no plates visible | `fleet/gmc-yukon-exterior-ridesaudi.webp` | 1600×1067 (3:2) | GMC Yukon with driver for private transfers in Saudi Arabia / جمس يوكن مع سائق للتوصيل الخاص في السعودية | Fleet card |
| same | GMC Yukon interior, second/third row with seats up | `fleet/gmc-yukon-interior-seats.webp` | 1600×1067 | Second and third row seats inside a GMC Yukon / المقاعد الخلفية داخل جمس يوكن | Fleet gallery |
| same | Real Hyundai Staria, side door open showing seats | `fleet/hyundai-staria-interior-family.webp` | 1600×1067 | Hyundai Staria with sliding door open for family luggage and seats / هيونداي ستاريا بباب منزلق مفتوح للعائلة والأمتعة | Fleet card, Staria guide |
| same | Sedan actually used (model to be confirmed) | `fleet/<model>-sedan-exterior.webp` | 1600×1067 | Sedan with driver for airport and city transfers / سيدان مع سائق للتوصيل من المطار وداخل المدينة | Fleet card |
| `/en/services/airport-transfers/*` (5 airports) | Photo of the actual arrivals pickup area at each airport (public area, no faces) — replaces illustrations | `airports/jeddah-airport-arrivals-pickup.webp` etc. | 1600×900 | Arrivals pickup area at King Abdulaziz International Airport, Jeddah / منطقة الاستقبال في صالة الوصول بمطار الملك عبدالعزيز الدولي بجدة | Page hero |
| `/en/services/intercity-transfers/makkah-to-madinah/` | Highway 15 / Hijrah road scene or car on the route | `routes/makkah-madinah-highway.webp` | 1600×900 | Private car on the highway between Makkah and Madinah / سيارة خاصة على الطريق بين مكة والمدينة | Page hero |
| `/en/services/intercity-transfers/riyadh-to-dammam/` | Riyadh–Dammam highway | `routes/riyadh-dammam-highway.webp` | 1600×900 | Highway between Riyadh and Dammam / الطريق السريع بين الرياض والدمام | Hero (replaces Al Khobar aerial) |
| `/en/services/intercity-transfers/riyadh-to-yanbu/` | Real Yanbu waterfront photo | `locations/yanbu-waterfront.webp` | 1600×900 | Yanbu waterfront on the Red Sea / واجهة ينبع البحرية على البحر الأحمر | Hero (replaces 597px render) |
| `/en/services/intercity-transfers/riyadh-to-manama/` | Higher-resolution Manama skyline | `cross-border/manama-skyline.webp` | 1600×900 | Manama skyline, Bahrain / أفق المنامة في البحرين | Hero |
| `/en/services/intercity-transfers/riyadh-to-kuwait-city/` | Higher-resolution Kuwait City | `cross-border/kuwait-city-skyline.webp` | 1600×900 | Kuwait City skyline with Kuwait Towers / أفق مدينة الكويت وأبراج الكويت | Hero |
| `/en/services/recovery-heavy-transport/car-transport-between-cities/` | Real photo of the owner's flatbed carrying a car | `heavy-transport/flatbed-car-carrier-real.webp` | 1600×1067 | Flatbed car carrier transporting a car between cities in Saudi Arabia / سطحة تنقل سيارة بين المدن في السعودية | Hero (replaces flagged image) |

## 3. Processing steps (for each supplied photo)

1. Crop to the size above (3:2 for vehicles, 16:9 for heroes); remove plates and faces.
2. Export WebP quality ~76 at the listed width; strip EXIF/GPS metadata.
3. Save under `public/images/<folder>/` with the filename above.
4. Register it in `src/content/images.ts` (`img(file, w, h, enAlt, arAlt)`) or `src/content/fleet.ts`; remove the `note` flag.
5. Hero images: `priority` only for the LCP image on that page; all others lazy (already handled by the components).
