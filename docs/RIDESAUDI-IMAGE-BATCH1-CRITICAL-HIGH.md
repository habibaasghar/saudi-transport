# RideSaudi — Batch 1: Critical + High (33 images)

Pehle yeh 33 banwao. Poori list (75) `RIDESAUDI-IMAGE-PROMPTS-TABLE.md` mein hai. Table is order mein hai: pehle **AI se ban sakne wali (6)**, phir **real stock/shoot (13)**, phir **aapki apni photos (10)**, phir **fleet (4)**.

| Group | Count | Kya karna hai |
|---|---|---|
| AI-OK | 6 | Prompt paste karo, 4 images generate karo, sabse saaf wali chuno (no warped wheels, no fake text, no face) |
| REAL | 13 | Stock site se kharido (search words diye hain: Shutterstock, Adobe Stock, Getty). Airports ki AI photo mat banao, imarat nakli hogi |
| OWNER | 10 | Apne trucks ki asli job photos (heavy transport, satha). AI nahi |
| FLEET | 4 | Confirmed model ki real photo (Yukon, Tahoe, Staria). AI nahi |

Filename bilkul isi naam se `public/images/<folder>/` mein save karo (hero 1920×1080, fleet 1600×1067, WebP q≈76). Phir mujhe bhejo, main wire karunga.

Negative prompt (sirf AI-OK ke liye): `cartoon, illustration, 3D render, CGI look, plastic skin, oversaturated, HDR halo, warped wheels, extra doors, distorted car, watermark, text, logo, brand badge, licence plate, fake Arabic lettering`

| # | Priority | Type | Problem | Pages | Filename | Size | Alt EN / Alt AR | Who makes it |
|---|---|---|---|---|---|---|---|---|
| 1 | High | MISSING | No photo (plain navy hero) | `/en/services/` | `services/private-chauffeur-hotel-arrival-dusk.webp` | 1920×1080 | Private car with driver waiting at a hotel entrance at dusk<br>سيارة خاصة مع سائق تنتظر عند مدخل فندق عند الغسق | AI is fine (generic scene) |
| 2 | High | MISSING | No photo (plain navy hero) | `/en/services/airport-transfers/` | `services/airport-arrivals-meet-and-greet.webp` | 1920×1080 | Driver with a name board waiting at airport arrivals<br>سائق يحمل لوحة اسم في صالة الوصول بالمطار | AI is fine (generic scene) |
| 3 | High | MISSING | No photo (plain navy hero) | `/en/services/airport-transfers/private-airport-pickup/` | `services/airport-pickup-luggage-loading.webp` | 1920×1080 | Driver loading a suitcase into an SUV at the airport kerb<br>سائق يحمّل حقيبة سفر في سيارة دفع رباعي أمام المطار | AI is fine (generic scene) |
| 4 | High | MISSING | No photo (plain navy hero) | `/en/services/airport-transfers/airport-to-hotel/` | `services/airport-to-hotel-arrival.webp` | 1920×1080 | Private car arriving at a hotel entrance from the airport<br>سيارة خاصة تصل إلى مدخل فندق قادمة من المطار | AI is fine (generic scene) |
| 5 | High | MISSING | No photo (plain navy hero) | `/en/services/airport-transfers/vip-airport-transfer/` | `services/vip-airport-transfer-night.webp` | 1920×1080 | Rear door held open on a black SUV at an airport kerb at night<br>باب خلفي مفتوح لسيارة دفع رباعي سوداء أمام المطار ليلًا | AI is fine (generic scene) |
| 6 | High | MISSING | No photo (plain navy hero) | `/en/luxury-transportation/luxury-chauffeur/` | `fleet/luxury-suv-rear-cabin.webp` | 1920×1080 | Rear cabin of a luxury SUV with leather seats<br>المقصورة الخلفية لسيارة دفع رباعي فاخرة بمقاعد جلدية | AI is fine (generic scene) |
| 7 | Critical | REPLACE | Illustration of a fake terminal (AI render with invented signage) | `/en/services/airport-transfers/riyadh-airport/`<br>`/en/blog/airport-pickup-tips-saudi-arrivals/` | `airports/riyadh-king-khalid-airport-arrivals.webp` | 1920×1080 | Arrivals kerb at King Khalid International Airport, Riyadh<br>رصيف الوصول في مطار الملك خالد الدولي بالرياض | Real photo only (buy stock / shoot). AI would invent the building |
| 8 | Critical | REPLACE | Illustration of a fake terminal | `/en/services/airport-transfers/jeddah-airport/`<br>`/en/blog/private-airport-transfers-saudi-arabia/` | `airports/jeddah-king-abdulaziz-airport-terminal-1.webp` | 1920×1080 | Terminal at King Abdulaziz International Airport, Jeddah<br>مبنى الصالات في مطار الملك عبدالعزيز الدولي بجدة | Real photo only (buy stock / shoot). AI would invent the building |
| 9 | Critical | REPLACE | Illustration of a fake terminal | `/en/services/airport-transfers/madinah-airport/` | `airports/madinah-prince-mohammad-airport.webp` | 1920×1080 | Terminal at Prince Mohammad bin Abdulaziz Airport, Madinah<br>مبنى مطار الأمير محمد بن عبدالعزيز الدولي بالمدينة المنورة | Real photo only (buy stock / shoot). AI would invent the building |
| 10 | High | REPLACE | Illustration of a fake terminal | `/en/services/airport-transfers/dammam-airport/` | `airports/dammam-king-fahd-airport.webp` | 1920×1080 | King Fahd International Airport terminal, Dammam<br>مبنى مطار الملك فهد الدولي بالدمام | Real photo only (buy stock / shoot). AI would invent the building |
| 11 | High | REPLACE | Only 600×400, soft and cropped to the sign | `/en/services/airport-transfers/taif-airport/` | `airports/taif-airport-terminal.webp` | 1920×1080 | Terminal at Taif International Airport<br>مبنى مطار الطائف الدولي | Real photo only (buy stock / shoot). AI would invent the building |
| 12 | High | REPLACE | AI-looking hero (1408×768 sunset skyline, too perfect) | `/en/services/intercity-transfers/riyadh-to-abu-dhabi/` | `cross-border/abu-dhabi-corniche-skyline.webp` | 1920×1080 | Abu Dhabi Corniche and skyline at sunset<br>كورنيش أبوظبي وأفق المدينة عند الغروب | Real photo only (buy stock / shoot). AI would invent the building |
| 13 | High | REPLACE | AI-looking dinner scene (floating mirror panel), shows a party not a journey; used on 3 route pages | `/en/services/intercity-transfers/riyadh-to-alula/`<br>`/en/services/intercity-transfers/madinah-to-alula/`<br>`/en/services/intercity-transfers/alula-to-dammam/` | `locations/alula-old-town-lanes.webp` | 1920×1080 | Sandstone landscape near AlUla in northwest Saudi Arabia<br>منظر صخري رملي قرب العلا شمال غرب السعودية | Real photo only (buy stock / shoot). AI would invent the building |
| 14 | High | REPLACE | 548×364 px web photo used full-width on 3 pages | `/en/services/city-transport/yanbu/`<br>`/en/services/intercity-transfers/riyadh-to-yanbu/`<br>`/en/services/intercity-transfers/jeddah-to-yanbu/` | `locations/yanbu-waterfront.webp` | 1920×1080 | Yanbu waterfront on the Red Sea<br>واجهة ينبع البحرية على البحر الأحمر | Real photo only (buy stock / shoot). AI would invent the building |
| 15 | High | REPLACE | 596×335 px | `/en/services/city-transport/al-baha/`<br>`/en/services/intercity-transfers/jeddah-to-al-baha/` | `locations/al-baha-skyline.webp` | 1920×1080 | Green mountain landscape in Al Baha<br>منظر جبلي أخضر في الباحة | Real photo only (buy stock / shoot). AI would invent the building |
| 16 | High | REPLACE | 617×324 px | `/en/services/intercity-transfers/riyadh-to-al-ahsa/`<br>`/en/services/intercity-transfers/dammam-to-al-ahsa/`<br>`/en/services/airport-transfers/al-ahsa-airport/` | `locations/al-ahsa-jabal-qarah-hd.webp` | 1920×1080 | Jabal Qarah above the palm groves of Al Ahsa<br>جبل القارة فوق بساتين النخيل في الأحساء | Real photo only (buy stock / shoot). AI would invent the building |
| 17 | High | MISSING | No photo (plain navy hero) | `/en/services/city-transport/jubail/`<br>`/en/services/intercity-transfers/riyadh-to-jubail/`<br>`/en/services/intercity-transfers/dammam-to-jubail/` | `locations/jubail-skyline.webp` | 1920×1080 | Jubail waterfront on the Gulf coast<br>واجهة الجبيل البحرية على ساحل الخليج | Real photo only (buy stock / shoot). AI would invent the building |
| 18 | High | MISSING | No photo (plain navy hero) | `/en/services/city-transport/jazan/`<br>`/en/services/intercity-transfers/jeddah-to-jazan/` | `locations/jazan-corniche.webp` | 1920×1080 | Jazan corniche on the Red Sea<br>كورنيش جازان على البحر الأحمر | Real photo only (buy stock / shoot). AI would invent the building |
| 19 | High | MISSING | No photo (plain navy hero) | `/en/services/city-transport/hail/`<br>`/en/services/intercity-transfers/riyadh-to-hail/` | `locations/hail-skyline.webp` | 1920×1080 | Hail in northern Saudi Arabia<br>حائل في شمال السعودية | Real photo only (buy stock / shoot). AI would invent the building |
| 20 | Critical | REPLACE | 311×251 px and looks AI-generated (red SUV on flatbed) | `/en/services/recovery-heavy-transport/car-transport-between-cities/`<br>`/en/blog/intercity-car-transport-saudi-arabia/ (also missing)` | `heavy-transport/flatbed-car-carrier-highway.webp` | 1920×1080 | Flatbed truck carrying a car between cities in Saudi Arabia<br>سطحة تنقل سيارة بين المدن في السعودية | Your own job photo only. No AI (would imply capacity you may not have) |
| 21 | High | REPLACE | Same source photo as the lowbed hero (duplicate look) | `/en/services/recovery-heavy-transport/crane-transport/`<br>`/en/blog/crane-industrial-equipment-transport-saudi-arabia/` | `heavy-transport/crane-on-trailer.webp` | 1920×1080 | Mobile crane secured on a lowbed trailer for road transport<br>رافعة متحركة مثبتة على لوبد للنقل البري | Your own job photo only. No AI (would imply capacity you may not have) |
| 22 | High | REPLACE | 572×317 px, soft | `/en/services/recovery-heavy-transport/satha-car-recovery/`<br>`/en/blog/car-towing-service-saudi-arabia/`<br>`/en/blog/flatbed-vs-hydraulic-towing-saudi-arabia/ (also missing)` | `heavy-transport/satha-car-loaded.webp` | 1920×1080 | Satha recovery truck carrying a car<br>سطحة هيدروليك تحمل سيارة | Your own job photo only. No AI (would imply capacity you may not have) |
| 23 | High | REPLACE | 705×350 px, soft | `/en/services/recovery-heavy-transport/wheel-loader-transport/`<br>`/en/blog/bulldozer-wheel-loader-transport-saudi-arabia/` | `heavy-transport/wheel-loader-on-lowbed.webp` | 1920×1080 | Wheel loader carried on a lowbed trailer<br>شيول محمول على لوبد | Your own job photo only. No AI (would imply capacity you may not have) |
| 24 | High | REPLACE | 654×469 px, trailer logos blurred | `/en/services/recovery-heavy-transport/flatbed-trailer-transport/`<br>`/en/blog/lowbed-trailer-transport-saudi-arabia/` | `heavy-transport/flatbed-trailer-cargo.webp` | 1920×1080 | Flatbed trailer carrying chained cargo<br>تريلا سطحة تحمل حمولة مثبتة بالسلاسل | Your own job photo only. No AI (would imply capacity you may not have) |
| 25 | High | REPLACE | 577×346 px, soft | `/en/services/recovery-heavy-transport/forklift-transport/` | `heavy-transport/forklift-on-trailer.webp` | 1920×1080 | Forklift loaded on a trailer for road transport<br>رافعة شوكية محمّلة على تريلا للنقل البري | Your own job photo only. No AI (would imply capacity you may not have) |
| 26 | High | MISSING | No photo (plain navy hero) | `/en/services/recovery-heavy-transport/oversized-load-transport/` | `heavy-transport/oversized-load-escort.webp` | 1920×1080 | Oversized load moving with an escort vehicle<br>حمولة كبيرة الحجم تتحرك مع مركبة مرافقة | Your own job photo only. No AI (would imply capacity you may not have) |
| 27 | High | MISSING | No photo (plain navy hero) | `/en/services/recovery-heavy-transport/industrial-machinery-relocation/` | `heavy-transport/machinery-loading-factory-yard.webp` | 1920×1080 | Industrial machine being loaded onto a trailer<br>آلة صناعية تُحمَّل على تريلا | Your own job photo only. No AI (would imply capacity you may not have) |
| 28 | High | MISSING | No photo (plain navy hero) | `/en/services/recovery-heavy-transport/heavy-equipment-transport/` | `heavy-transport/lowbed-bulldozer.webp` | 1920×1080 | Lowbed trailer carrying a bulldozer<br>لوبد ينقل بلدوزر | Your own job photo only. No AI (would imply capacity you may not have) |
| 29 | High | MISSING | No photo (plain navy hero) | `/en/services/recovery-heavy-transport/excavator-transport/`<br>`/en/blog/excavator-transportation-saudi-arabia/ (also missing)` | `heavy-transport/excavator-on-lowbed.webp` | 1920×1080 | Excavator secured on a lowbed trailer<br>حفار مثبت على لوبد | Your own job photo only. No AI (would imply capacity you may not have) |
| 30 | High | MISSING | No photo (plain navy hero) | `/en/services/umrah-transport/group-umrah-transport/`<br>`/en/services/group-transportation/family-transport/` | `fleet/hyundai-staria-sliding-door-luggage.webp` | 1920×1080 | Hyundai Staria with its sliding door open for luggage<br>هيونداي ستاريا بباب منزلق مفتوح للأمتعة | Real photo of the confirmed model (partner vehicle or licensed). AI not allowed |
| 31 | High | FLEET | Fleet card photo is a small web picture (or none) | `/en/fleet/`<br>`/ (home fleet block)` | `fleet/gmc-yukon-exterior-real.webp` | 1600×1067 (3:2) | GMC Yukon with driver for private transfers in Saudi Arabia<br>جمس يوكن مع سائق للتوصيل الخاص في السعودية | Real photo of the confirmed model (partner vehicle or licensed). AI not allowed |
| 32 | High | FLEET | Fleet card photo is a small web picture (or none) | `/en/fleet/`<br>`/ (home fleet block)` | `fleet/gmc-yukon-interior-seats.webp` | 1600×1067 (3:2) | Second and third row seats inside a GMC Yukon<br>المقاعد الخلفية داخل جمس يوكن | Real photo of the confirmed model (partner vehicle or licensed). AI not allowed |
| 33 | High | FLEET | Fleet card photo is a small web picture (or none) | `/en/fleet/`<br>`/ (home fleet block)` | `fleet/chevrolet-tahoe-exterior-hd.webp` | 1600×1067 (3:2) | Chevrolet Tahoe full-size SUV in black<br>شيفروليه تاهو دفع رباعي كبيرة باللون الأسود | Real photo of the confirmed model (partner vehicle or licensed). AI not allowed |

## Prompts

Copy the text in the block under each number. Negative prompt (for tools that have the field) is in section 'Negative prompt'.

### 1. `services/private-chauffeur-hotel-arrival-dusk.webp` (High)

```text
Photorealistic editorial photograph, dark full-size SUV waiting under a hotel porte-cochère in Riyadh at dusk, a chauffeur in a dark suit standing beside the rear door seen from behind, blue hour with warm entrance lights, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 2. `services/airport-arrivals-meet-and-greet.webp` (High)

```text
Photorealistic editorial photograph, chauffeur in a dark suit holding a blank name board at an airport arrivals hall exit, seen from behind or cropped at the shoulders, travellers with luggage trolleys blurred behind, bright interior light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 3. `services/airport-pickup-luggage-loading.webp` (High)

```text
Photorealistic editorial photograph, driver in a dark suit loading a suitcase into the boot of a dark SUV at an airport kerb, close side view, faces out of frame, daylight, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 4. `services/airport-to-hotel-arrival.webp` (High)

```text
Photorealistic editorial photograph, dark SUV pulling up at a luxury hotel entrance, a porter taking luggage, no hotel name visible, late afternoon light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 5. `services/vip-airport-transfer-night.webp` (High)

```text
Photorealistic editorial photograph, black full-size SUV with the rear door held open by a chauffeur at an airport kerb at night, seen from the side, night with warm kerb lights, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 6. `fleet/luxury-suv-rear-cabin.webp` (High)

```text
Photorealistic editorial photograph, rear-seat cabin of a modern luxury SUV with black leather seats and ambient light, bottle of water in the door pocket, city lights blurred outside, evening ambient light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 7. `airports/riyadh-king-khalid-airport-arrivals.webp` (Critical)

Stock search words: **King Khalid International Airport Riyadh terminal 5 exterior**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, King Khalid International Airport (RUH) real terminal exterior or arrivals kerb in the public area, daytime or dusk, dark SUV waiting at the kerb, late afternoon light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 8. `airports/jeddah-king-abdulaziz-airport-terminal-1.webp` (Critical)

Stock search words: **King Abdulaziz International Airport Jeddah terminal exterior**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, King Abdulaziz International Airport (JED) Hajj/Terminal 1 real exterior with the tent-roof structure, arrivals kerb in the foreground, golden hour, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 9. `airports/madinah-prince-mohammad-airport.webp` (Critical)

Stock search words: **Prince Mohammad bin Abdulaziz Airport Madinah terminal**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Prince Mohammad bin Abdulaziz International Airport (MED) real terminal exterior, palm trees and arrivals kerb, clear morning light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 10. `airports/dammam-king-fahd-airport.webp` (High)

Stock search words: **King Fahd International Airport Dammam terminal**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, King Fahd International Airport (DMM) real terminal and control tower exterior, clear daylight, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 11. `airports/taif-airport-terminal.webp` (High)

Stock search words: **Taif International Airport terminal**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Taif International Airport real terminal building, wide shot, mountains behind if visible, clear daylight, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 12. `cross-border/abu-dhabi-corniche-skyline.webp` (High)

Stock search words: **Abu Dhabi Corniche skyline sunset**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Abu Dhabi Corniche and skyline, real photograph, blue hour, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 13. `locations/alula-old-town-lanes.webp` (High)

Stock search words: **AlUla Old Town mud brick; AlUla Harrat viewpoint**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, AlUla real landscape: Old Town mud-brick lanes or Harrat viewpoint with a dark SUV on the road (different from elephant-rock and Hegra photos already used), golden hour, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 14. `locations/yanbu-waterfront.webp` (High)

Stock search words: **Yanbu waterfront Red Sea corniche**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Yanbu waterfront or Yanbu Al-Bahr corniche, real photo, morning light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 15. `locations/al-baha-skyline.webp` (High)

Stock search words: **Al Baha Saudi Arabia mountains Raghadan**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Al Baha mountains and green terraces, or Raghadan forest viewpoint, real photo, soft morning light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 16. `locations/al-ahsa-jabal-qarah-hd.webp` (High)

Stock search words: **Jabal Qarah Al Ahsa**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Jabal Qarah (Al Qarah mountain) above Al Ahsa palm groves, real photo, golden hour, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 17. `locations/jubail-skyline.webp` (High)

Stock search words: **Jubail Saudi Arabia waterfront**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Jubail waterfront or Jubail Industrial City skyline, real photo, morning light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 18. `locations/jazan-corniche.webp` (High)

Stock search words: **Jazan corniche Saudi Arabia**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Jazan corniche or Farasan-side waterfront, real photo, golden hour, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 19. `locations/hail-skyline.webp` (High)

Stock search words: **Hail Saudi Arabia Aarif fort**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Hail city or Aarif Fort and Jubbah rock art landscape, real photo, golden hour, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 20. `heavy-transport/flatbed-car-carrier-highway.webp` (Critical)

```text
Brief for the photographer / owner: your own flatbed car-carrier truck with a saloon car strapped on, on a Saudi highway, side-rear three-quarter view. Light: golden hour. Keep plates, faces and maker logos out or blurred.
```

### 21. `heavy-transport/crane-on-trailer.webp` (High)

```text
Brief for the photographer / owner: a different mobile crane chained on a multi-axle lowbed trailer, taken from another angle and site than the lowbed hero. Light: clear daylight. Keep plates, faces and maker logos out or blurred.
```

### 22. `heavy-transport/satha-car-loaded.webp` (High)

```text
Brief for the photographer / owner: your own hydraulic satha truck with a car loaded on the bed, side view, clean background. Light: clear daylight. Keep plates, faces and maker logos out or blurred.
```

### 23. `heavy-transport/wheel-loader-on-lowbed.webp` (High)

```text
Brief for the photographer / owner: wheel loader (shuwel) being carried on a lowbed trailer, maker logos blurred. Light: clear daylight. Keep plates, faces and maker logos out or blurred.
```

### 24. `heavy-transport/flatbed-trailer-cargo.webp` (High)

```text
Brief for the photographer / owner: flatbed trailer with chained cargo (pipes or steel coils) on a highway, logos blurred. Light: clear daylight. Keep plates, faces and maker logos out or blurred.
```

### 25. `heavy-transport/forklift-on-trailer.webp` (High)

```text
Brief for the photographer / owner: heavy forklift loaded and chained on a trailer. Light: clear daylight. Keep plates, faces and maker logos out or blurred.
```

### 26. `heavy-transport/oversized-load-escort.webp` (High)

```text
Brief for the photographer / owner: oversized load with an escort vehicle and warning flags on a highway, real job photo. Light: clear daylight. Keep plates, faces and maker logos out or blurred.
```

### 27. `heavy-transport/machinery-loading-factory-yard.webp` (High)

```text
Brief for the photographer / owner: industrial machine being lifted onto a trailer in a factory yard, real job photo. Light: clear daylight. Keep plates, faces and maker logos out or blurred.
```

### 28. `heavy-transport/lowbed-bulldozer.webp` (High)

```text
Brief for the photographer / owner: lowbed trailer carrying a bulldozer or grader (different from the crane hero), logos blurred. Light: clear daylight. Keep plates, faces and maker logos out or blurred.
```

### 29. `heavy-transport/excavator-on-lowbed.webp` (High)

```text
Brief for the photographer / owner: excavator chained on a lowbed trailer, real job photo, logos blurred. Light: clear daylight. Keep plates, faces and maker logos out or blurred.
```

### 30. `fleet/hyundai-staria-sliding-door-luggage.webp` (High)

```text
Brief for the photographer / owner: black Hyundai Staria people-carrier with its sliding door open and family luggage at the kerb, a hotel forecourt behind. Light: daylight. Keep plates, faces and maker logos out or blurred.
```

### 31. `fleet/gmc-yukon-exterior-real.webp` (High)

```text
Brief for the photographer / owner: your partner's GMC Yukon, 3/4 front view, plates blurred, clean plain background. Light: soft overcast daylight. Keep plates, faces and maker logos out or blurred.
```

### 32. `fleet/gmc-yukon-interior-seats.webp` (High)

```text
Brief for the photographer / owner: GMC Yukon second and third row seats with the rear door open. Light: soft overcast daylight. Keep plates, faces and maker logos out or blurred.
```

### 33. `fleet/chevrolet-tahoe-exterior-hd.webp` (High)

```text
Brief for the photographer / owner: clean Chevrolet Tahoe photo without any dealer plate (replaces the 700px cut-out). Light: soft overcast daylight. Keep plates, faces and maker logos out or blurred.
```

