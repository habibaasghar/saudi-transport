# RideSaudi — Image Table with Prompts (missing + bad images)

Date: 2026-11-24. Checked against the live site (www.ridesaudi.com) and the live code (`main`, 162 pages + 34 guides, each in EN and AR). CSV copy (opens in Excel/Google Sheets): `RIDESAUDI-IMAGE-PROMPTS-TABLE.csv`.

## What I found

| Check | Result |
|---|---|
| Broken images / 404 on live | **None.** Crawled 402 URLs, 103 image files, 0 broken, every `<img>` has alt |
| Pages with **no photo** (plain navy hero) | **50 pages + 4 guides** |
| Pages with a **bad photo** (AI render, fake terminal, under 700px, portrait crop, duplicate) | **67 pages** |
| Hero photos visible on live | Yes (fixed earlier, confirmed again today on Riyadh to Abu Dhabi) |
| Technical optimisation | Good: Next serves AVIF (Riyadh hero 1920px = 58 KB), responsive srcset, hero preloaded, only the hero is high priority, everything else lazy, width and height set. Source folder is 68 files / 6.2 MB, none over 240 KB. **Nothing more to squeeze from the files; the gap is the photos themselves.** |
| Optional speed tweak | Optimised images answer with `max-age=0` (browser re-checks every visit). Setting `images.minimumCacheTTL` in `next.config.ts` would stop that. I did not change it. |

**Correction to my earlier audit (2026-11-23):** I called `cross-border/abu-dhabi.webp` and `locations/alula.webp` (the AlUla dinner scene) "real photos". Looking at them at full size again, both look AI-generated (1408×768 / 1376×768, too perfect, a floating mirror panel in the AlUla one). They are in this table as replacements. The real photos (Riyadh, Khobar, Doha, Makkah, Jeddah, Madinah, KAEC, Dubai, Kuwait, causeway, Taif, Abha) are fine.

## How to use this

1. Pick the **Who makes it** column:
   - **Real photo only**: a real place (airport, mosque, city). Buy it from stock with the search words, or shoot it. An AI prompt would invent a building that does not exist; the prompt is there only as a last-resort fallback and the picture must then never be called real.
   - **AI is fine**: generic scene (a driver loading a bag, a convoy, a road at dusk). Paste the prompt, add the negative prompt, generate 4 and pick the cleanest. Reject any with warped wheels, fake text, or a recognisable face.
   - **Your own job photo only**: heavy transport and recovery. AI would show a truck and capacity you may not have.
   - **Real photo of the confirmed model**: fleet cards. Only Camry, Sonata, Taurus, Yukon, Suburban, Tahoe, Prado, Staria, luxury SUV. No S-Class, V-Class, Yukon XL or Denali (not confirmed).
2. Save with the **exact filename** into `public/images/<folder>/`, master 1920×1080 (16:9) for heroes, 1600×1067 (3:2) for fleet. WebP quality about 76.
3. Send me the files (or just the folder). I resize, strip metadata, add the entry in `images.ts` (EN + AR alt are already in this table), build the 1200×630 share image and check the page in EN and AR.

**Priority order:** Critical (4) first, then High (29), Medium (38), Low (4). Totals: 75 assets: 28 real-photo-only, 25 AI-fine, 11 your own, 11 fleet.

**Negative prompt** (for every AI-fine row): `cartoon, illustration, 3D render, CGI look, plastic skin, oversaturated, HDR halo, warped wheels, extra doors, distorted car, watermark, text, logo, brand badge, licence plate, fake Arabic lettering`

## Table (every asset)

| # | Priority | Type | Problem | Pages | Filename | Size | Alt EN / Alt AR | Who makes it |
|---|---|---|---|---|---|---|---|---|
| 1 | Critical | REPLACE | Illustration of a fake terminal (AI render with invented signage) | `/en/services/airport-transfers/riyadh-airport/`<br>`/en/blog/airport-pickup-tips-saudi-arrivals/` | `airports/riyadh-king-khalid-airport-arrivals.webp` | 1920×1080 | Arrivals kerb at King Khalid International Airport, Riyadh<br>رصيف الوصول في مطار الملك خالد الدولي بالرياض | Real photo only (buy stock / shoot). AI would invent the building |
| 2 | Critical | REPLACE | Illustration of a fake terminal | `/en/services/airport-transfers/jeddah-airport/`<br>`/en/blog/private-airport-transfers-saudi-arabia/` | `airports/jeddah-king-abdulaziz-airport-terminal-1.webp` | 1920×1080 | Terminal at King Abdulaziz International Airport, Jeddah<br>مبنى الصالات في مطار الملك عبدالعزيز الدولي بجدة | Real photo only (buy stock / shoot). AI would invent the building |
| 3 | Critical | REPLACE | Illustration of a fake terminal | `/en/services/airport-transfers/madinah-airport/` | `airports/madinah-prince-mohammad-airport.webp` | 1920×1080 | Terminal at Prince Mohammad bin Abdulaziz Airport, Madinah<br>مبنى مطار الأمير محمد بن عبدالعزيز الدولي بالمدينة المنورة | Real photo only (buy stock / shoot). AI would invent the building |
| 4 | Critical | REPLACE | 311×251 px and looks AI-generated (red SUV on flatbed) | `/en/services/recovery-heavy-transport/car-transport-between-cities/`<br>`/en/blog/intercity-car-transport-saudi-arabia/ (also missing)` | `heavy-transport/flatbed-car-carrier-highway.webp` | 1920×1080 | Flatbed truck carrying a car between cities in Saudi Arabia<br>سطحة تنقل سيارة بين المدن في السعودية | Your own job photo only. No AI (would imply capacity you may not have) |
| 5 | High | REPLACE | Illustration of a fake terminal | `/en/services/airport-transfers/dammam-airport/` | `airports/dammam-king-fahd-airport.webp` | 1920×1080 | King Fahd International Airport terminal, Dammam<br>مبنى مطار الملك فهد الدولي بالدمام | Real photo only (buy stock / shoot). AI would invent the building |
| 6 | High | REPLACE | Only 600×400, soft and cropped to the sign | `/en/services/airport-transfers/taif-airport/` | `airports/taif-airport-terminal.webp` | 1920×1080 | Terminal at Taif International Airport<br>مبنى مطار الطائف الدولي | Real photo only (buy stock / shoot). AI would invent the building |
| 7 | High | REPLACE | Same source photo as the lowbed hero (duplicate look) | `/en/services/recovery-heavy-transport/crane-transport/`<br>`/en/blog/crane-industrial-equipment-transport-saudi-arabia/` | `heavy-transport/crane-on-trailer.webp` | 1920×1080 | Mobile crane secured on a lowbed trailer for road transport<br>رافعة متحركة مثبتة على لوبد للنقل البري | Your own job photo only. No AI (would imply capacity you may not have) |
| 8 | High | REPLACE | 572×317 px, soft | `/en/services/recovery-heavy-transport/satha-car-recovery/`<br>`/en/blog/car-towing-service-saudi-arabia/`<br>`/en/blog/flatbed-vs-hydraulic-towing-saudi-arabia/ (also missing)` | `heavy-transport/satha-car-loaded.webp` | 1920×1080 | Satha recovery truck carrying a car<br>سطحة هيدروليك تحمل سيارة | Your own job photo only. No AI (would imply capacity you may not have) |
| 9 | High | REPLACE | 705×350 px, soft | `/en/services/recovery-heavy-transport/wheel-loader-transport/`<br>`/en/blog/bulldozer-wheel-loader-transport-saudi-arabia/` | `heavy-transport/wheel-loader-on-lowbed.webp` | 1920×1080 | Wheel loader carried on a lowbed trailer<br>شيول محمول على لوبد | Your own job photo only. No AI (would imply capacity you may not have) |
| 10 | High | REPLACE | 654×469 px, trailer logos blurred | `/en/services/recovery-heavy-transport/flatbed-trailer-transport/`<br>`/en/blog/lowbed-trailer-transport-saudi-arabia/` | `heavy-transport/flatbed-trailer-cargo.webp` | 1920×1080 | Flatbed trailer carrying chained cargo<br>تريلا سطحة تحمل حمولة مثبتة بالسلاسل | Your own job photo only. No AI (would imply capacity you may not have) |
| 11 | High | REPLACE | 577×346 px, soft | `/en/services/recovery-heavy-transport/forklift-transport/` | `heavy-transport/forklift-on-trailer.webp` | 1920×1080 | Forklift loaded on a trailer for road transport<br>رافعة شوكية محمّلة على تريلا للنقل البري | Your own job photo only. No AI (would imply capacity you may not have) |
| 12 | High | REPLACE | AI-looking hero (1408×768 sunset skyline, too perfect) | `/en/services/intercity-transfers/riyadh-to-abu-dhabi/` | `cross-border/abu-dhabi-corniche-skyline.webp` | 1920×1080 | Abu Dhabi Corniche and skyline at sunset<br>كورنيش أبوظبي وأفق المدينة عند الغروب | Real photo only (buy stock / shoot). AI would invent the building |
| 13 | High | REPLACE | AI-looking dinner scene (floating mirror panel), shows a party not a journey; used on 3 route pages | `/en/services/intercity-transfers/riyadh-to-alula/`<br>`/en/services/intercity-transfers/madinah-to-alula/`<br>`/en/services/intercity-transfers/alula-to-dammam/` | `locations/alula-old-town-lanes.webp` | 1920×1080 | Sandstone landscape near AlUla in northwest Saudi Arabia<br>منظر صخري رملي قرب العلا شمال غرب السعودية | Real photo only (buy stock / shoot). AI would invent the building |
| 14 | High | REPLACE | 548×364 px web photo used full-width on 3 pages | `/en/services/city-transport/yanbu/`<br>`/en/services/intercity-transfers/riyadh-to-yanbu/`<br>`/en/services/intercity-transfers/jeddah-to-yanbu/` | `locations/yanbu-waterfront.webp` | 1920×1080 | Yanbu waterfront on the Red Sea<br>واجهة ينبع البحرية على البحر الأحمر | Real photo only (buy stock / shoot). AI would invent the building |
| 15 | High | REPLACE | 596×335 px | `/en/services/city-transport/al-baha/`<br>`/en/services/intercity-transfers/jeddah-to-al-baha/` | `locations/al-baha-skyline.webp` | 1920×1080 | Green mountain landscape in Al Baha<br>منظر جبلي أخضر في الباحة | Real photo only (buy stock / shoot). AI would invent the building |
| 16 | High | REPLACE | 617×324 px | `/en/services/intercity-transfers/riyadh-to-al-ahsa/`<br>`/en/services/intercity-transfers/dammam-to-al-ahsa/`<br>`/en/services/airport-transfers/al-ahsa-airport/` | `locations/al-ahsa-jabal-qarah-hd.webp` | 1920×1080 | Jabal Qarah above the palm groves of Al Ahsa<br>جبل القارة فوق بساتين النخيل في الأحساء | Real photo only (buy stock / shoot). AI would invent the building |
| 17 | High | MISSING | No photo (plain navy hero) | `/en/services/` | `services/private-chauffeur-hotel-arrival-dusk.webp` | 1920×1080 | Private car with driver waiting at a hotel entrance at dusk<br>سيارة خاصة مع سائق تنتظر عند مدخل فندق عند الغسق | AI is fine (generic scene) |
| 18 | High | MISSING | No photo (plain navy hero) | `/en/services/airport-transfers/` | `services/airport-arrivals-meet-and-greet.webp` | 1920×1080 | Driver with a name board waiting at airport arrivals<br>سائق يحمل لوحة اسم في صالة الوصول بالمطار | AI is fine (generic scene) |
| 19 | High | MISSING | No photo (plain navy hero) | `/en/services/airport-transfers/private-airport-pickup/` | `services/airport-pickup-luggage-loading.webp` | 1920×1080 | Driver loading a suitcase into an SUV at the airport kerb<br>سائق يحمّل حقيبة سفر في سيارة دفع رباعي أمام المطار | AI is fine (generic scene) |
| 20 | High | MISSING | No photo (plain navy hero) | `/en/services/airport-transfers/airport-to-hotel/` | `services/airport-to-hotel-arrival.webp` | 1920×1080 | Private car arriving at a hotel entrance from the airport<br>سيارة خاصة تصل إلى مدخل فندق قادمة من المطار | AI is fine (generic scene) |
| 21 | High | MISSING | No photo (plain navy hero) | `/en/services/airport-transfers/vip-airport-transfer/` | `services/vip-airport-transfer-night.webp` | 1920×1080 | Rear door held open on a black SUV at an airport kerb at night<br>باب خلفي مفتوح لسيارة دفع رباعي سوداء أمام المطار ليلًا | AI is fine (generic scene) |
| 22 | High | MISSING | No photo (plain navy hero) | `/en/luxury-transportation/luxury-chauffeur/` | `fleet/luxury-suv-rear-cabin.webp` | 1920×1080 | Rear cabin of a luxury SUV with leather seats<br>المقصورة الخلفية لسيارة دفع رباعي فاخرة بمقاعد جلدية | AI is fine (generic scene) |
| 23 | High | MISSING | No photo (plain navy hero) | `/en/services/umrah-transport/group-umrah-transport/`<br>`/en/services/group-transportation/family-transport/` | `fleet/hyundai-staria-sliding-door-luggage.webp` | 1920×1080 | Hyundai Staria with its sliding door open for luggage<br>هيونداي ستاريا بباب منزلق مفتوح للأمتعة | Real photo of the confirmed model (partner vehicle or licensed). AI not allowed |
| 24 | High | MISSING | No photo (plain navy hero) | `/en/services/city-transport/jubail/`<br>`/en/services/intercity-transfers/riyadh-to-jubail/`<br>`/en/services/intercity-transfers/dammam-to-jubail/` | `locations/jubail-skyline.webp` | 1920×1080 | Jubail waterfront on the Gulf coast<br>واجهة الجبيل البحرية على ساحل الخليج | Real photo only (buy stock / shoot). AI would invent the building |
| 25 | High | MISSING | No photo (plain navy hero) | `/en/services/city-transport/jazan/`<br>`/en/services/intercity-transfers/jeddah-to-jazan/` | `locations/jazan-corniche.webp` | 1920×1080 | Jazan corniche on the Red Sea<br>كورنيش جازان على البحر الأحمر | Real photo only (buy stock / shoot). AI would invent the building |
| 26 | High | MISSING | No photo (plain navy hero) | `/en/services/city-transport/hail/`<br>`/en/services/intercity-transfers/riyadh-to-hail/` | `locations/hail-skyline.webp` | 1920×1080 | Hail in northern Saudi Arabia<br>حائل في شمال السعودية | Real photo only (buy stock / shoot). AI would invent the building |
| 27 | High | MISSING | No photo (plain navy hero) | `/en/services/recovery-heavy-transport/oversized-load-transport/` | `heavy-transport/oversized-load-escort.webp` | 1920×1080 | Oversized load moving with an escort vehicle<br>حمولة كبيرة الحجم تتحرك مع مركبة مرافقة | Your own job photo only. No AI (would imply capacity you may not have) |
| 28 | High | MISSING | No photo (plain navy hero) | `/en/services/recovery-heavy-transport/industrial-machinery-relocation/` | `heavy-transport/machinery-loading-factory-yard.webp` | 1920×1080 | Industrial machine being loaded onto a trailer<br>آلة صناعية تُحمَّل على تريلا | Your own job photo only. No AI (would imply capacity you may not have) |
| 29 | High | MISSING | No photo (plain navy hero) | `/en/services/recovery-heavy-transport/heavy-equipment-transport/` | `heavy-transport/lowbed-bulldozer.webp` | 1920×1080 | Lowbed trailer carrying a bulldozer<br>لوبد ينقل بلدوزر | Your own job photo only. No AI (would imply capacity you may not have) |
| 30 | High | MISSING | No photo (plain navy hero) | `/en/services/recovery-heavy-transport/excavator-transport/`<br>`/en/blog/excavator-transportation-saudi-arabia/ (also missing)` | `heavy-transport/excavator-on-lowbed.webp` | 1920×1080 | Excavator secured on a lowbed trailer<br>حفار مثبت على لوبد | Your own job photo only. No AI (would imply capacity you may not have) |
| 31 | High | FLEET | Fleet card photo is a small web picture (or none) | `/en/fleet/`<br>`/ (home fleet block)` | `fleet/gmc-yukon-exterior-real.webp` | 1600×1067 (3:2) | GMC Yukon with driver for private transfers in Saudi Arabia<br>جمس يوكن مع سائق للتوصيل الخاص في السعودية | Real photo of the confirmed model (partner vehicle or licensed). AI not allowed |
| 32 | High | FLEET | Fleet card photo is a small web picture (or none) | `/en/fleet/`<br>`/ (home fleet block)` | `fleet/gmc-yukon-interior-seats.webp` | 1600×1067 (3:2) | Second and third row seats inside a GMC Yukon<br>المقاعد الخلفية داخل جمس يوكن | Real photo of the confirmed model (partner vehicle or licensed). AI not allowed |
| 33 | High | FLEET | Fleet card photo is a small web picture (or none) | `/en/fleet/`<br>`/ (home fleet block)` | `fleet/chevrolet-tahoe-exterior-hd.webp` | 1600×1067 (3:2) | Chevrolet Tahoe full-size SUV in black<br>شيفروليه تاهو دفع رباعي كبيرة باللون الأسود | Real photo of the confirmed model (partner vehicle or licensed). AI not allowed |
| 34 | Medium | REPLACE | Illustration (causeway at sunset) on the cross-border hub | `/en/services/cross-border-transfers/` | `cross-border/border-road-suv-dusk.webp` | 1920×1080 | Private SUV on the road towards a border crossing at dusk<br>سيارة دفع رباعي خاصة على الطريق نحو منفذ حدودي عند الغسق | AI is fine (generic scene) |
| 35 | Medium | REPLACE | 655×448 px | `/en/services/city-transport/al-ahsa/` | `locations/al-ahsa-oasis-hd.webp` | 1920×1080 | Date palms in the Al Ahsa oasis<br>نخيل في واحة الأحساء | Real photo only (buy stock / shoot). AI would invent the building |
| 36 | Medium | REPLACE | 640×480 px | `/en/services/city-transport/najran/` | `locations/najran-fort-hd.webp` | 1920×1080 | Mud-brick fort in Najran<br>قلعة طينية في نجران | Real photo only (buy stock / shoot). AI would invent the building |
| 37 | Medium | REPLACE | 596×335 px | `/en/services/city-transport/dhahran/` | `locations/dhahran-ithra-hd.webp` | 1920×1080 | Ithra cultural centre in Dhahran<br>مركز إثراء الثقافي في الظهران | Real photo only (buy stock / shoot). AI would invent the building |
| 38 | Medium | REPLACE | 678×452 px sign photo | `/en/services/intercity-transfers/abha-to-riyadh/` | `locations/abha-mountain-road.webp` | 1920×1080 | Mountain road above Abha in Asir<br>طريق جبلي فوق أبها في عسير | Real photo only (buy stock / shoot). AI would invent the building |
| 39 | Medium | REPLACE | 796×385 px | `/en/services/intercity-transfers/riyadh-to-manama/` | `cross-border/manama-skyline.webp` | 1920×1080 | Manama skyline in Bahrain<br>أفق المنامة في البحرين | Real photo only (buy stock / shoot). AI would invent the building |
| 40 | Medium | REPLACE | 549×364 px and shows a train (competing mode) on a private-car page | `/en/services/intercity-transfers/makkah-to-madinah/` | `routes/makkah-madinah-highway.webp` | 1920×1080 | Private car on the highway between Makkah and Madinah<br>سيارة خاصة على الطريق بين مكة والمدينة | AI is fine (generic scene) |
| 41 | Medium | REPLACE | 900×1600 portrait cut into a wide hero, soft on desktop (used on 9 pages) | `/en/services/umrah-transport/`<br>`/en/services/umrah-transport/jeddah-airport-to-makkah/`<br>`/en/services/umrah-transport/makkah-ziyarat/`<br>`/en/services/city-transport/makkah/`<br>`/en/services/intercity-transfers/madinah-to-makkah/`<br>`/en/services/intercity-transfers/jeddah-to-makkah/`<br>`/en/services/intercity-transfers/riyadh-to-makkah/`<br>`/en/blog/jeddah-airport-to-makkah-train-bus-taxi-private-car/`<br>`/en/blog/umrah-private-transport-plan-jeddah-makkah-madinah/` | `locations/makkah-landscape.webp` | 1920×1080 | Makkah skyline with the Grand Mosque and the Clock Tower<br>أفق مكة المكرمة مع المسجد الحرام وبرج الساعة | Real photo only (buy stock / shoot). AI would invent the building |
| 42 | Medium | REPLACE | 1200×1600 portrait used on 14 pages | `/en/services/event-transportation/jeddah/`<br>`/en/services/city-transport/jeddah/`<br>`/en/services/intercity-transfers/riyadh-to-jeddah/`<br>`/en/services/intercity-transfers/madinah-to-jeddah/`<br>`/en/services/intercity-transfers/makkah-to-jeddah/`<br>`/en/services/intercity-transfers/taif-to-jeddah/`<br>`/en/services/intercity-transfers/yanbu-to-jeddah/`<br>`/en/services/intercity-transfers/dammam-to-jeddah/`<br>`/en/services/intercity-transfers/alula-to-jeddah/`<br>`/en/services/intercity-transfers/jazan-to-jeddah/`<br>`/en/services/intercity-transfers/abha-to-jeddah/`<br>`/en/services/recovery-heavy-transport/satha-car-recovery/jeddah/`<br>`/en/services/recovery-heavy-transport/heavy-equipment-transport/jeddah/`<br>`/en/services/intercity-transfers/al-baha-to-jeddah/`<br>`/en/blog/jeddah-to-madinah-train-flight-bus-or-car/` | `locations/jeddah-skyline-landscape.webp` | 1920×1080 | Jeddah Corniche waterfront and skyline<br>كورنيش جدة والواجهة البحرية | Real photo only (buy stock / shoot). AI would invent the building |
| 43 | Medium | REPLACE | 1200×1600 portrait | `/en/services/umrah-transport/madinah-ziyarat/`<br>`/en/services/umrah-transport/family-umrah-transport/`<br>`/en/services/city-transport/madinah/`<br>`/en/services/intercity-transfers/riyadh-to-madinah/`<br>`/en/services/intercity-transfers/jeddah-to-madinah/`<br>`/en/services/intercity-transfers/alula-to-madinah/`<br>`/en/blog/makkah-to-madinah-train-bus-or-private-car/` | `locations/madinah-landscape.webp` | 1920×1080 | Courtyard of the Prophet's Mosque in Madinah<br>ساحة المسجد النبوي في المدينة المنورة | Real photo only (buy stock / shoot). AI would invent the building |
| 44 | Medium | MISSING | No photo (plain navy hero) | `/en/services/event-transportation/` | `services/event-venue-dropoff-evening.webp` | 1920×1080 | Private cars dropping guests at an evening event<br>سيارات خاصة تنزّل الضيوف عند فعالية مسائية | AI is fine (generic scene) |
| 45 | Medium | MISSING | No photo (plain navy hero) | `/en/services/event-transportation/wedding-transport/` | `services/wedding-car-evening.webp` | 1920×1080 | Black car waiting outside a wedding hall at night<br>سيارة سوداء تنتظر أمام قاعة أفراح ليلًا | AI is fine (generic scene) |
| 46 | Medium | MISSING | No photo (plain navy hero) | `/en/services/event-transportation/corporate-events/` | `services/corporate-event-suv-office.webp` | 1920×1080 | Executive getting into a black SUV outside an office tower<br>رجل أعمال يركب سيارة دفع رباعي سوداء أمام برج مكاتب | AI is fine (generic scene) |
| 47 | Medium | MISSING | No photo (plain navy hero) | `/en/services/event-transportation/conference-transport/` | `services/conference-centre-dropoff.webp` | 1920×1080 | Cars waiting at a conference centre entrance<br>سيارات في انتظار الوفود عند مدخل مركز مؤتمرات | AI is fine (generic scene) |
| 48 | Medium | MISSING | No photo (plain navy hero) | `/en/services/event-transportation/event-airport-transfers/` | `services/event-delegates-airport-arrivals.webp` | 1920×1080 | Delegates walking to waiting cars at airport arrivals<br>وفد يتجه إلى السيارات المنتظرة في صالة الوصول | AI is fine (generic scene) |
| 49 | Medium | MISSING | No photo (plain navy hero) | `/en/services/event-transportation/concert-transport/` | `services/concert-night-dropoff.webp` | 1920×1080 | Cars on a lit boulevard on a concert night<br>سيارات على شارع مضاء في ليلة حفل | AI is fine (generic scene) |
| 50 | Medium | MISSING | No photo (plain navy hero) | `/en/services/event-transportation/festival-transport/` | `services/festival-dropoff-lane.webp` | 1920×1080 | Drop-off lane at a festival entrance at dusk<br>مسار نزول الركاب عند مدخل مهرجان عند الغسق | AI is fine (generic scene) |
| 51 | Medium | MISSING | No photo (plain navy hero) | `/en/services/event-transportation/vip-event-chauffeur/` | `services/vip-event-chauffeur-door.webp` | 1920×1080 | Chauffeur holding a car door at a VIP event entrance<br>سائق يفتح باب السيارة عند مدخل فعالية كبار الشخصيات | AI is fine (generic scene) |
| 52 | Medium | MISSING | No photo (plain navy hero) | `/en/luxury-transportation/vip-delegation-transport/` | `services/vip-delegation-suv-convoy.webp` | 1920×1080 | Convoy of black SUVs on a city avenue<br>موكب من سيارات الدفع الرباعي السوداء على شارع واسع | AI is fine (generic scene) |
| 53 | Medium | MISSING | No photo (plain navy hero) | `/en/services/chauffeur-services/` | `services/chauffeur-driving-city.webp` | 1920×1080 | Driver at the wheel seen from the rear seat<br>السائق خلف المقود من المقعد الخلفي | AI is fine (generic scene) |
| 54 | Medium | MISSING | No photo (plain navy hero) | `/en/services/chauffeur-services/multi-day-chauffeur/` | `routes/desert-highway-suv-golden-hour.webp` | 1920×1080 | SUV on a desert highway at golden hour<br>سيارة دفع رباعي على طريق صحراوي عند الغروب | AI is fine (generic scene) |
| 55 | Medium | MISSING | No photo (plain navy hero) | `/en/services/intercity-transfers/private-intercity-chauffeur/` | `routes/intercity-highway-passenger-view.webp` | 1920×1080 | Highway seen from the passenger seat on an intercity trip<br>الطريق السريع من مقعد الراكب في رحلة بين المدن | AI is fine (generic scene) |
| 56 | Medium | MISSING | No photo (plain navy hero) | `/en/services/umrah-transport/private-umrah-chauffeur/` | `services/makkah-hotel-district-private-car.webp` | 1920×1080 | Private car on a road in the Makkah hotel district<br>سيارة خاصة على طريق في منطقة فنادق مكة | Real photo only (buy stock / shoot). AI would invent the building |
| 57 | Medium | MISSING | No photo (plain navy hero) | `/en/services/group-transportation/` | `fleet/staria-and-suv-group-trip.webp` | 1920×1080 | Hyundai Staria and an SUV ready for a group trip<br>هيونداي ستاريا وسيارة دفع رباعي جاهزتان لرحلة جماعية | Real photo of the confirmed model (partner vehicle or licensed). AI not allowed |
| 58 | Medium | MISSING | No photo (plain navy hero) | `/en/services/group-transportation/group-airport-transfers/` | `services/group-airport-luggage-staria.webp` | 1920×1080 | Group luggage beside a Hyundai Staria at the airport<br>أمتعة مجموعة بجانب هيونداي ستاريا أمام المطار | Real photo of the confirmed model (partner vehicle or licensed). AI not allowed |
| 59 | Medium | MISSING | No photo (plain navy hero) | `/en/services/special-transportation/` | `services/assisted-passenger-entry.webp` | 1920×1080 | Driver helping a passenger into a car<br>سائق يساعد راكبًا على الصعود إلى السيارة | AI is fine (generic scene) |
| 60 | Medium | MISSING | No photo (plain navy hero) | `/en/services/special-transportation/hotel-transportation/` | `services/hotel-porte-cochere-suv.webp` | 1920×1080 | SUV waiting at a hotel entrance<br>سيارة دفع رباعي تنتظر عند مدخل فندق | AI is fine (generic scene) |
| 61 | Medium | MISSING | No photo (plain navy hero) | `/en/services/special-transportation/cruise-port-transfers/` | `services/jeddah-cruise-terminal.webp` | 1920×1080 | Cruise ship at the terminal in Jeddah<br>سفينة سياحية في محطة الرحلات البحرية بجدة | Real photo only (buy stock / shoot). AI would invent the building |
| 62 | Medium | MISSING | No photo (plain navy hero) | `/en/services/special-transportation/senior-friendly-transportation/` | `services/senior-passenger-step-assist.webp` | 1920×1080 | Driver helping an older passenger step out of an SUV<br>سائق يساعد راكبًا كبير السن على النزول من السيارة | AI is fine (generic scene) |
| 63 | Medium | MISSING | No photo (plain navy hero) | `/en/services/city-transport/` | `locations/riyadh-kafd-street.webp` | 1920×1080 | Street in Riyadh's financial district<br>شارع في حي الأعمال بالرياض | Real photo only (buy stock / shoot). AI would invent the building |
| 64 | Medium | MISSING | No photo (plain navy hero) | `/en/services/tourism-transport/private-sightseeing-driver/` | `locations/jeddah-al-balad.webp` | 1920×1080 | Coral-stone houses in Jeddah Al-Balad<br>بيوت حجرية مرجانية في جدة التاريخية | Real photo only (buy stock / shoot). AI would invent the building |
| 65 | Medium | MISSING | No photo (plain navy hero) | `/en/services/tourism-transport/day-trip-transport/` | `locations/edge-of-the-world-riyadh.webp` | 1920×1080 | Edge of the World cliffs near Riyadh<br>جرف حافة العالم قرب الرياض | Real photo only (buy stock / shoot). AI would invent the building |
| 66 | Medium | MISSING | No photo (plain navy hero) | `/en/services/city-transport/hafar-al-batin/`<br>`/en/services/intercity-transfers/riyadh-to-hafar-al-batin/` | `locations/hafar-al-batin-city.webp` | 1920×1080 | Hafar Al-Batin in the northeast of Saudi Arabia<br>حفر الباطن شمال شرق السعودية | Real photo only (buy stock / shoot). AI would invent the building |
| 67 | Medium | MISSING | No photo (plain navy hero) | `/en/services/city-transport/khamis-mushait/` | `locations/khamis-mushait-city.webp` | 1920×1080 | Khamis Mushait with the Asir mountains behind<br>خميس مشيط وجبال عسير خلفها | Real photo only (buy stock / shoot). AI would invent the building |
| 68 | Medium | MISSING | No photo (plain navy hero) | `/en/blog/roadside-assistance-vehicle-recovery-saudi-arabia/` | `heavy-transport/roadside-breakdown-recovery.webp` | 1920×1080 | Recovery truck helping a broken-down car on a highway<br>سطحة تساعد سيارة معطلة على الطريق السريع | Your own job photo only. No AI (would imply capacity you may not have) |
| 69 | Medium | FLEET | Fleet card photo is a small web picture (or none) | `/en/fleet/`<br>`/ (home fleet block)` | `fleet/toyota-camry-interior-rear.webp` | 1600×1067 (3:2) | Rear seat of a Toyota Camry<br>المقعد الخلفي في تويوتا كامري | Real photo of the confirmed model (partner vehicle or licensed). AI not allowed |
| 70 | Medium | FLEET | Fleet card photo is a small web picture (or none) | `/en/fleet/`<br>`/ (home fleet block)` | `fleet/ford-taurus-exterior-hd.webp` | 1600×1067 (3:2) | Black Ford Taurus sedan<br>سيدان فورد توروس سوداء | Real photo of the confirmed model (partner vehicle or licensed). AI not allowed |
| 71 | Medium | FLEET | Fleet card photo is a small web picture (or none) | `/en/fleet/`<br>`/ (home fleet block)` | `fleet/toyota-prado-exterior-hd.webp` | 1600×1067 (3:2) | Toyota Prado SUV<br>تويوتا برادو دفع رباعي | Real photo of the confirmed model (partner vehicle or licensed). AI not allowed |
| 72 | Low | MISSING | No photo (plain navy hero) | `/en/services/special-transportation/travel-agency-transport/` | `services/travel-agency-itinerary-staria.webp` | 1920×1080 | Trip itinerary on the seat of a Hyundai Staria<br>برنامج رحلة على مقعد هيونداي ستاريا | Real photo of the confirmed model (partner vehicle or licensed). AI not allowed |
| 73 | Low | MISSING | No photo (plain navy hero) | `/en/services/special-transportation/bilingual-chauffeur/` | `services/bilingual-driver-route-briefing.webp` | 1920×1080 | Driver showing a passenger the route on a phone<br>سائق يعرض المسار على هاتف لراكب | AI is fine (generic scene) |
| 74 | Low | MISSING | No photo (plain navy hero) | `/en/services/tourism-transport/multi-stop-transport/` | `routes/city-ring-road-dusk.webp` | 1920×1080 | City ring road at dusk<br>طريق دائري في المدينة عند الغسق | AI is fine (generic scene) |
| 75 | Low | FLEET | Fleet card photo is a small web picture (or none) | `/en/fleet/`<br>`/ (home fleet block)` | `fleet/hyundai-staria-exterior-hd.webp` | 1600×1067 (3:2) | Hyundai Staria people carrier in black<br>هيونداي ستاريا فان باللون الأسود | Real photo of the confirmed model (partner vehicle or licensed). AI not allowed |

## Prompts

Copy the text in the block under each number. Negative prompt (for tools that have the field) is in section 'Negative prompt'.

### 1. `airports/riyadh-king-khalid-airport-arrivals.webp` (Critical)

Stock search words: **King Khalid International Airport Riyadh terminal 5 exterior**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, King Khalid International Airport (RUH) real terminal exterior or arrivals kerb in the public area, daytime or dusk, dark SUV waiting at the kerb, late afternoon light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 2. `airports/jeddah-king-abdulaziz-airport-terminal-1.webp` (Critical)

Stock search words: **King Abdulaziz International Airport Jeddah terminal exterior**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, King Abdulaziz International Airport (JED) Hajj/Terminal 1 real exterior with the tent-roof structure, arrivals kerb in the foreground, golden hour, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 3. `airports/madinah-prince-mohammad-airport.webp` (Critical)

Stock search words: **Prince Mohammad bin Abdulaziz Airport Madinah terminal**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Prince Mohammad bin Abdulaziz International Airport (MED) real terminal exterior, palm trees and arrivals kerb, clear morning light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 4. `heavy-transport/flatbed-car-carrier-highway.webp` (Critical)

```text
Brief for the photographer / owner: your own flatbed car-carrier truck with a saloon car strapped on, on a Saudi highway, side-rear three-quarter view. Light: golden hour. Keep plates, faces and maker logos out or blurred.
```

### 5. `airports/dammam-king-fahd-airport.webp` (High)

Stock search words: **King Fahd International Airport Dammam terminal**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, King Fahd International Airport (DMM) real terminal and control tower exterior, clear daylight, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 6. `airports/taif-airport-terminal.webp` (High)

Stock search words: **Taif International Airport terminal**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Taif International Airport real terminal building, wide shot, mountains behind if visible, clear daylight, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 7. `heavy-transport/crane-on-trailer.webp` (High)

```text
Brief for the photographer / owner: a different mobile crane chained on a multi-axle lowbed trailer, taken from another angle and site than the lowbed hero. Light: clear daylight. Keep plates, faces and maker logos out or blurred.
```

### 8. `heavy-transport/satha-car-loaded.webp` (High)

```text
Brief for the photographer / owner: your own hydraulic satha truck with a car loaded on the bed, side view, clean background. Light: clear daylight. Keep plates, faces and maker logos out or blurred.
```

### 9. `heavy-transport/wheel-loader-on-lowbed.webp` (High)

```text
Brief for the photographer / owner: wheel loader (shuwel) being carried on a lowbed trailer, maker logos blurred. Light: clear daylight. Keep plates, faces and maker logos out or blurred.
```

### 10. `heavy-transport/flatbed-trailer-cargo.webp` (High)

```text
Brief for the photographer / owner: flatbed trailer with chained cargo (pipes or steel coils) on a highway, logos blurred. Light: clear daylight. Keep plates, faces and maker logos out or blurred.
```

### 11. `heavy-transport/forklift-on-trailer.webp` (High)

```text
Brief for the photographer / owner: heavy forklift loaded and chained on a trailer. Light: clear daylight. Keep plates, faces and maker logos out or blurred.
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

### 17. `services/private-chauffeur-hotel-arrival-dusk.webp` (High)

```text
Photorealistic editorial photograph, dark full-size SUV waiting under a hotel porte-cochère in Riyadh at dusk, a chauffeur in a dark suit standing beside the rear door seen from behind, blue hour with warm entrance lights, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 18. `services/airport-arrivals-meet-and-greet.webp` (High)

```text
Photorealistic editorial photograph, chauffeur in a dark suit holding a blank name board at an airport arrivals hall exit, seen from behind or cropped at the shoulders, travellers with luggage trolleys blurred behind, bright interior light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 19. `services/airport-pickup-luggage-loading.webp` (High)

```text
Photorealistic editorial photograph, driver in a dark suit loading a suitcase into the boot of a dark SUV at an airport kerb, close side view, faces out of frame, daylight, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 20. `services/airport-to-hotel-arrival.webp` (High)

```text
Photorealistic editorial photograph, dark SUV pulling up at a luxury hotel entrance, a porter taking luggage, no hotel name visible, late afternoon light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 21. `services/vip-airport-transfer-night.webp` (High)

```text
Photorealistic editorial photograph, black full-size SUV with the rear door held open by a chauffeur at an airport kerb at night, seen from the side, night with warm kerb lights, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 22. `fleet/luxury-suv-rear-cabin.webp` (High)

```text
Photorealistic editorial photograph, rear-seat cabin of a modern luxury SUV with black leather seats and ambient light, bottle of water in the door pocket, city lights blurred outside, evening ambient light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 23. `fleet/hyundai-staria-sliding-door-luggage.webp` (High)

```text
Brief for the photographer / owner: black Hyundai Staria people-carrier with its sliding door open and family luggage at the kerb, a hotel forecourt behind. Light: daylight. Keep plates, faces and maker logos out or blurred.
```

### 24. `locations/jubail-skyline.webp` (High)

Stock search words: **Jubail Saudi Arabia waterfront**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Jubail waterfront or Jubail Industrial City skyline, real photo, morning light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 25. `locations/jazan-corniche.webp` (High)

Stock search words: **Jazan corniche Saudi Arabia**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Jazan corniche or Farasan-side waterfront, real photo, golden hour, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 26. `locations/hail-skyline.webp` (High)

Stock search words: **Hail Saudi Arabia Aarif fort**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Hail city or Aarif Fort and Jubbah rock art landscape, real photo, golden hour, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 27. `heavy-transport/oversized-load-escort.webp` (High)

```text
Brief for the photographer / owner: oversized load with an escort vehicle and warning flags on a highway, real job photo. Light: clear daylight. Keep plates, faces and maker logos out or blurred.
```

### 28. `heavy-transport/machinery-loading-factory-yard.webp` (High)

```text
Brief for the photographer / owner: industrial machine being lifted onto a trailer in a factory yard, real job photo. Light: clear daylight. Keep plates, faces and maker logos out or blurred.
```

### 29. `heavy-transport/lowbed-bulldozer.webp` (High)

```text
Brief for the photographer / owner: lowbed trailer carrying a bulldozer or grader (different from the crane hero), logos blurred. Light: clear daylight. Keep plates, faces and maker logos out or blurred.
```

### 30. `heavy-transport/excavator-on-lowbed.webp` (High)

```text
Brief for the photographer / owner: excavator chained on a lowbed trailer, real job photo, logos blurred. Light: clear daylight. Keep plates, faces and maker logos out or blurred.
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

### 34. `cross-border/border-road-suv-dusk.webp` (Medium)

```text
Photorealistic editorial photograph, dark SUV driving away on an empty highway towards a distant border-crossing canopy at dusk, rear view, no flags readable, blue hour dusk, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 35. `locations/al-ahsa-oasis-hd.webp` (Medium)

Stock search words: **Al Ahsa oasis date palms**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Al Ahsa oasis date palms and water channel, real photo, soft morning light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 36. `locations/najran-fort-hd.webp` (Medium)

Stock search words: **Najran fort Saudi Arabia**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Najran Al Ukhdood area or the mud-brick Emarah palace, real photo, clear daylight, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 37. `locations/dhahran-ithra-hd.webp` (Medium)

Stock search words: **Ithra Dhahran exterior**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Ithra (King Abdulaziz Center for World Culture) Dhahran exterior, real photo, late afternoon light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 38. `locations/abha-mountain-road.webp` (Medium)

Stock search words: **Abha Asir mountains road Al Souda**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Abha mountain road with clouds, Soudah or Al Souda viewpoint, real photo, misty morning, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 39. `cross-border/manama-skyline.webp` (Medium)

Stock search words: **Manama skyline Bahrain dusk**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Manama skyline with Bahrain World Trade Center / Financial Harbour, real photo, blue hour, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 40. `routes/makkah-madinah-highway.webp` (Medium)

```text
Photorealistic editorial photograph, dark SUV on the Makkah–Madinah highway through a rocky desert, rear three-quarter view, golden hour, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 41. `locations/makkah-landscape.webp` (Medium)

Stock search words: **Makkah skyline Clock Tower Grand Mosque wide**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Makkah wide view with the Grand Mosque and the Clock Tower, landscape orientation, real photo, blue hour, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 42. `locations/jeddah-skyline-landscape.webp` (Medium)

Stock search words: **Jeddah Corniche skyline Red Sea**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Jeddah Corniche waterfront and skyline, landscape orientation, real photo (second Jeddah photo so not every page shows the same one), golden hour, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 43. `locations/madinah-landscape.webp` (Medium)

Stock search words: **Madinah Prophet's Mosque courtyard umbrellas wide**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Prophet's Mosque courtyard with umbrellas, landscape orientation, real photo, blue hour, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 44. `services/event-venue-dropoff-evening.webp` (Medium)

```text
Photorealistic editorial photograph, line of dark SUVs at a lit event entrance in the evening, guests blurred in the distance, evening string lights, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 45. `services/wedding-car-evening.webp` (Medium)

```text
Photorealistic editorial photograph, black sedan or SUV parked outside a wedding hall entrance at night with soft fairy lights, no people, night, soft fairy lights, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 46. `services/corporate-event-suv-office.webp` (Medium)

```text
Photorealistic editorial photograph, executive in a suit stepping into a black SUV outside a modern glass office tower, back of head only, morning light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 47. `services/conference-centre-dropoff.webp` (Medium)

```text
Photorealistic editorial photograph, row of dark SUVs waiting at a conference-centre entrance, delegates blurred, daylight, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 48. `services/event-delegates-airport-arrivals.webp` (Medium)

```text
Photorealistic editorial photograph, group of delegates with lanyards walking towards waiting cars at an arrivals kerb, backs to camera, daylight, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 49. `services/concert-night-dropoff.webp` (Medium)

```text
Photorealistic editorial photograph, lit boulevard at night with car tail-lights and event banners blurred, cars in a drop-off lane, night city lights, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 50. `services/festival-dropoff-lane.webp` (Medium)

```text
Photorealistic editorial photograph, festival grounds entrance at dusk with SUVs in a drop-off lane and lanterns, dusk, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 51. `services/vip-event-chauffeur-door.webp` (Medium)

```text
Photorealistic editorial photograph, chauffeur in a dark suit holding the rear door of a black SUV at a VIP event entrance, seen from behind, evening, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 52. `services/vip-delegation-suv-convoy.webp` (Medium)

```text
Photorealistic editorial photograph, convoy of three identical black SUVs on a wide city avenue, slightly elevated view, golden hour, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 53. `services/chauffeur-driving-city.webp` (Medium)

```text
Photorealistic editorial photograph, view from the rear seat over the driver's shoulder (back of head only) towards a city road ahead, daylight, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 54. `routes/desert-highway-suv-golden-hour.webp` (Medium)

```text
Photorealistic editorial photograph, dark SUV on an open desert highway at golden hour, rear three-quarter view, golden hour, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 55. `routes/intercity-highway-passenger-view.webp` (Medium)

```text
Photorealistic editorial photograph, long straight Saudi highway seen through a car windscreen from the passenger seat, dashboard edge visible, morning light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 56. `services/makkah-hotel-district-private-car.webp` (Medium)

Stock search words: **Makkah hotel district road**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, dark SUV on a road in the Makkah hotel district with towers in the distance, no pilgrims' faces, dusk, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 57. `fleet/staria-and-suv-group-trip.webp` (Medium)

```text
Brief for the photographer / owner: black Hyundai Staria and a black full-size SUV parked side by side with luggage ready. Light: daylight. Keep plates, faces and maker logos out or blurred.
```

### 58. `services/group-airport-luggage-staria.webp` (Medium)

```text
Brief for the photographer / owner: group luggage trolley next to a black Hyundai Staria at an arrivals kerb. Light: daylight. Keep plates, faces and maker logos out or blurred.
```

### 59. `services/assisted-passenger-entry.webp` (Medium)

```text
Photorealistic editorial photograph, driver helping a passenger into the rear of an SUV, both seen from behind, daylight, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 60. `services/hotel-porte-cochere-suv.webp` (Medium)

```text
Photorealistic editorial photograph, SUV waiting at a hotel porte-cochère with a porter and luggage trolley, no hotel name, late afternoon, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 61. `services/jeddah-cruise-terminal.webp` (Medium)

Stock search words: **Jeddah Islamic Port cruise terminal**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, cruise ship berthed at the Jeddah Islamic Port terminal, real photo, daylight, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 62. `services/senior-passenger-step-assist.webp` (Medium)

```text
Photorealistic editorial photograph, driver offering an arm to an older passenger stepping out of a high SUV, seen from behind, kind and unhurried, daylight, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 63. `locations/riyadh-kafd-street.webp` (Medium)

Stock search words: **Riyadh KAFD street level**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, street level in Riyadh's financial district with a dark sedan passing, blue hour, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 64. `locations/jeddah-al-balad.webp` (Medium)

Stock search words: **Jeddah Al-Balad historic district**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Jeddah Al-Balad coral-stone houses and wooden roshan balconies, street level, morning light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 65. `locations/edge-of-the-world-riyadh.webp` (Medium)

Stock search words: **Edge of the World Riyadh cliffs**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Edge of the World cliffs near Riyadh with an SUV on the desert track, golden hour, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 66. `locations/hafar-al-batin-city.webp` (Medium)

Stock search words: **Hafar Al-Batin Saudi Arabia**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Hafar Al-Batin city centre or highway entrance, real photo, daylight, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 67. `locations/khamis-mushait-city.webp` (Medium)

Stock search words: **Khamis Mushait Asir city**

```text
FALLBACK ONLY (will be a fictional view; do not call it real): Photorealistic editorial photograph, Khamis Mushait city with Asir mountains behind, real photo, morning light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 68. `heavy-transport/roadside-breakdown-recovery.webp` (Medium)

```text
Brief for the photographer / owner: recovery truck with amber lights beside a broken-down car on a highway shoulder at dusk, real job photo. Light: dusk. Keep plates, faces and maker logos out or blurred.
```

### 69. `fleet/toyota-camry-interior-rear.webp` (Medium)

```text
Brief for the photographer / owner: Toyota Camry rear seat with the door open. Light: soft overcast daylight. Keep plates, faces and maker logos out or blurred.
```

### 70. `fleet/ford-taurus-exterior-hd.webp` (Medium)

```text
Brief for the photographer / owner: current Ford Taurus (Saudi-market) 3/4 front, 1600 px wide. Light: soft overcast daylight. Keep plates, faces and maker logos out or blurred.
```

### 71. `fleet/toyota-prado-exterior-hd.webp` (Medium)

```text
Brief for the photographer / owner: Toyota Prado 3/4 front, plates blurred. Light: soft overcast daylight. Keep plates, faces and maker logos out or blurred.
```

### 72. `services/travel-agency-itinerary-staria.webp` (Low)

```text
Brief for the photographer / owner: printed trip itinerary and a pen on the seat of a Hyundai Staria, shallow depth of field, no readable text. Light: soft window light. Keep plates, faces and maker logos out or blurred.
```

### 73. `services/bilingual-driver-route-briefing.webp` (Low)

```text
Photorealistic editorial photograph, driver's hand showing a route on a phone to a rear passenger, hands only, soft light, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 74. `routes/city-ring-road-dusk.webp` (Low)

```text
Photorealistic editorial photograph, city ring road at dusk with light trails, elevated view, dusk, shot on a full-frame camera with a 35mm lens at f/2.8, natural colours, realistic textures and small imperfections, subtle film grain, no text, no logos, no licence plates, no recognisable faces, quiet negative space on the left third for text, 16:9 landscape, 1920x1080.
```

### 75. `fleet/hyundai-staria-exterior-hd.webp` (Low)

```text
Brief for the photographer / owner: Hyundai Staria front 3/4, clean background, 1600 px wide. Light: soft overcast daylight. Keep plates, faces and maker logos out or blurred.
```

