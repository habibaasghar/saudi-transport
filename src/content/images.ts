import type { Locale } from "@/i18n/routing";

export type PageImage = {
  src: string;
  width: number;
  height: number;
  alt: Record<Locale, string>;
  /** CSS object-position for the hero crop. */
  focus?: string;
  /** True when the picture is an illustration or low resolution; tracked in docs/riyadh-image-inventory.md. */
  note?: string;
  /** Short visible caption under the hero (used for vehicle photos, which show the model, not a RideSaudi car). */
  caption?: Record<Locale, string>;
};

const img = (
  file: string,
  width: number,
  height: number,
  en: string,
  ar: string,
  focus?: string,
  note?: string,
): PageImage => ({ src: `/images/${file}.webp`, width, height, alt: { en, ar }, focus, note });

/**
 * Destination and landmark imagery keyed by page path. Images are editorial and illustrative only:
 * they never show, and must never be described as, RideSaudi vehicles, drivers or staff.
 * Source: owner-supplied library (see docs/riyadh-image-inventory.md for licence and quality notes).
 */
export const images: Record<string, PageImage> = {
  riyadh: img("locations/riyadh", 1600, 900, "Riyadh skyline at dusk with the city's business towers", "أفق الرياض عند الغروب بأبراج مناطق الأعمال"),
  diriyah: img("locations/diriyah", 1024, 502, "Aerial view of the mud-brick quarter of At-Turaif in Diriyah", "منظر جوي لحي الطريف الطيني في الدرعية"),
  jeddah: img("locations/jeddah", 1200, 1600, "Jeddah Corniche waterfront on the Red Sea with a tower on the skyline", "كورنيش جدة على البحر الأحمر وبرج في الأفق", "50% 40%"),
  makkah: img("locations/makkah", 900, 1600, "The Grand Mosque in Makkah at dusk", "المسجد الحرام في مكة المكرمة عند الغروب", "50% 35%"),
  madinah: img("locations/madinah", 1200, 1600, "Canopies in the courtyard of the Prophet's Mosque in Madinah", "المظلات في ساحة المسجد النبوي في المدينة المنورة", "50% 30%"),
  alKhobar: img("locations/al-khobar", 1600, 900, "Aerial view of the Al Khobar waterfront on the Gulf coast", "منظر جوي لواجهة الخبر البحرية على ساحل الخليج"),
  alula: img("locations/alula", 1376, 768, "A dinner table set among sandstone cliffs in AlUla at dusk", "مائدة عشاء بين الجبال الرملية في العلا عند الغروب"),
  alulaRock: img("locations/alula-elephant-rock", 1600, 1068, "Elephant Rock sandstone formation in AlUla at dusk", "تكوين جبل الفيل الرملي في العلا عند الغروب"),
  abha: img("locations/abha", 1400, 777, "Mountain village and green hills in Abha, Asir region", "قرية جبلية وتلال خضراء في أبها بمنطقة عسير"),
  taif: img("locations/taif", 1400, 919, "Winding mountain road above Taif in the Sarawat range", "طريق جبلي متعرج فوق الطائف في جبال السروات"),
  tabuk: img("locations/tabuk", 1200, 664, "Tabuk city sign lit at night", "لوحة مدينة تبوك مضاءة ليلًا"),
  yanbu: img("locations/yanbu-historical-area-sign", 548, 364, "Historical Yanbu lettering on a paved waterfront square", "حروف ينبع التاريخية على ساحة مرصوفة عند الواجهة البحرية", undefined, "low resolution, owner-supplied web photo"),
  airportRuh: img("airports/airport-ruh", 1600, 1600, "Illustration of an airport arrivals kerb with private cars waiting", "رسم توضيحي لرصيف وصول في مطار تقف عليه سيارات خاصة", undefined, "illustration, not a photo of RUH"),
  airportJed: img("airports/airport-jed", 1600, 1600, "Illustration of an airport arrivals kerb at sunset with cars waiting", "رسم توضيحي لرصيف وصول في مطار عند الغروب مع سيارات منتظرة", undefined, "illustration, not a photo of JED"),
  airportMed: img("airports/airport-med", 1600, 1600, "Illustration of an airport terminal entrance with cars at the kerb", "رسم توضيحي لمدخل صالة مطار مع سيارات على الرصيف", undefined, "illustration, not a photo of MED"),
  airportDmm: img("airports/airport-dmm", 1408, 768, "Illustration of a Gulf-coast airport terminal with palms and aircraft", "رسم توضيحي لمبنى مطار على ساحل الخليج مع نخيل وطائرات", undefined, "illustration, not a photo of DMM"),
  airportTaif: img("airports/taif-airport-terminal-sign", 600, 400, "Taif International Airport terminal building with its name sign", "مبنى مطار الطائف الدولي ولوحة اسمه", undefined, "low resolution, owner-supplied web photo"),
  alBaha: img("locations/al-baha-forest-picnic", 596, 335, "Visitors resting on the grass among tall trees in a green forest in Al Baha", "زوار يجلسون على العشب بين أشجار عالية في غابة خضراء بالباحة", undefined, "low resolution, owner-supplied web photo"),
  kaec: img("locations/king-abdullah-economic-city-waterfront", 1600, 960, "Waterfront and marina canal at King Abdullah Economic City on the Red Sea", "الواجهة البحرية وقناة المرسى في مدينة الملك عبدالله الاقتصادية على البحر الأحمر", undefined),
  alAhsa: img("locations/al-ahsa-oasis-palms", 655, 448, "Date palms and a small fountain in the Al Ahsa oasis", "نخيل ونافورة صغيرة في واحة الأحساء", undefined, "low resolution, owner-supplied web photo"),
  jabalQarah: img("locations/al-ahsa-jabal-qarah", 617, 324, "Aerial view of Jabal Qarah rising above palm groves in Al Ahsa", "منظر جوي لجبل القارة فوق بساتين النخيل في الأحساء", undefined, "low resolution, owner-supplied web photo"),
  najran: img("locations/najran-mud-brick-fort", 640, 480, "Mud-brick fort with decorated white battlements in Najran", "قلعة طينية بشرفات بيضاء مزخرفة في نجران", undefined, "low resolution, owner-supplied web photo"),
  buraydah: img("locations/buraydah-date-market-night", 1280, 854, "Date market in Buraydah lit at night with fireworks overhead", "مدينة التمور في بريدة مضاءة ليلًا مع ألعاب نارية", "50% 60%"),
  dhahran: img("locations/dhahran-ithra-cultural-centre", 596, 335, "King Abdulaziz Center for World Culture (Ithra) in Dhahran", "مركز الملك عبدالعزيز الثقافي العالمي (إثراء) في الظهران", undefined, "low resolution, owner-supplied web photo"),
  abhaSign: img("locations/abha-airport-park-sign", 678, 452, "Abha lettering beside the airport park with Asir-patterned panels", "حروف أبها قرب حديقة المطار بألواح بنقوش عسيرية", undefined, "low resolution, owner-supplied web photo"),
  haramainTrain: img("routes/haramain-train-platform", 549, 364, "Haramain high-speed train standing at a station platform", "قطار الحرمين السريع واقفًا على رصيف محطة", undefined, "low resolution, owner-supplied web photo"),
  doha: img("cross-border/doha", 1600, 900, "Aerial view of the Doha West Bay skyline over the water", "منظر جوي لأفق الخليج الغربي في الدوحة على الماء"),
  dubai: img("cross-border/dubai", 1600, 1143, "Dubai towers along Sheikh Zayed Road at dusk", "أبراج دبي على شارع الشيخ زايد عند الغروب"),
  manama: img("cross-border/manama", 796, 385, "Manama skyline at dusk with the Bahrain Financial Harbour towers", "أفق المنامة عند الغروب مع أبراج المرفأ المالي", undefined, "low resolution"),
  kuwaitCity: img("cross-border/kuwait-towers", 1200, 699, "Kuwait Towers beside the sea in Kuwait City", "أبراج الكويت بجانب البحر في مدينة الكويت", undefined),
  causeway: img("cross-border/king-fahd-causeway", 1536, 700, "The King Fahd Causeway crossing the water between Saudi Arabia and Bahrain", "جسر الملك فهد على الماء بين السعودية والبحرين"),
  uaeHighway: img("cross-border/saudi-uae-highway", 1408, 768, "Illustration of an SUV on a desert highway at sunset", "رسم توضيحي لسيارة دفع رباعي على طريق صحراوي عند الغروب", undefined, "illustration"),
  abuDhabi: img("cross-border/abu-dhabi", 1408, 768, "Abu Dhabi Corniche and skyline at sunset", "كورنيش أبوظبي وأفق المدينة عند الغروب", "50% 45%"),
  abuDhabiAerial: img("cross-border/abu-dhabi-corniche", 900, 600, "Aerial view of the Abu Dhabi skyline above a white-sand beach", "منظر جوي لأفق أبوظبي فوق شاطئ رملي أبيض", undefined, "below 1200px wide"),
  alulaHegra: img("locations/alula-hegra", 1080, 1350, "Qasr al-Farid, the single rock-cut tomb at Hegra near AlUla", "قصر الفريد، المقبرة المنحوتة في الصخر في الحجر قرب العلا", "50% 45%"),
  dammamCoast: img("locations/al-khobar", 1600, 900, "Gulf coast waterfront of Al Khobar in the Dammam metropolitan area", "الواجهة البحرية للخبر على ساحل الخليج ضمن حاضرة الدمام", "40% 55%"),
  heavyLowbed: img("heavy-transport/lowbed-truck-hauling-mobile-crane", 1419, 798, "Lowbed truck hauling a rough-terrain mobile crane on an open road", "شاحنة لوبد تنقل رافعة متحركة على طريق مفتوح", "60% 55%"),
  borders: img("cross-border/border-crossings", 1600, 1600, "Illustration of a causeway road over the sea at sunset", "رسم توضيحي لطريق جسر فوق البحر عند الغروب", undefined, "illustration"),
};

/**
 * Vehicle model photos (public/images/fleet). They illustrate the MODEL only, never a RideSaudi-owned car, so every
 * hero that uses one carries a visible caption saying the actual vehicle is confirmed in the quotation.
 */
const vehicleCaption: Record<Locale, string> = {
  en: "Model shown as an example. Your actual vehicle is confirmed in the quotation.",
  ar: "الصورة مثال على الطراز، وتُؤكَّد السيارة الفعلية في عرض السعر.",
};
const veh = (file: string, width: number, height: number, en: string, ar: string, focus?: string): PageImage => ({
  src: `/images/fleet/${file}.webp`, width, height, alt: { en, ar }, focus, caption: vehicleCaption,
});
export const vehicles = {
  suburban: veh("chevrolet-suburban-black-exterior", 1200, 630, "Black Chevrolet Suburban, an example of a full-size SUV with driver", "شيفروليه سوبربان سوداء، مثال على سيارة دفع رباعي كبيرة مع سائق", "55% 60%"),
  escalade: veh("gallery/cadillac-escalade-front-exterior", 1199, 800, "Black Cadillac Escalade, an example of a luxury SUV", "كاديلاك إسكاليد سوداء، مثال على سيارة دفع رباعي فاخرة", "50% 55%"),
  lexusLx: veh("luxury-suv-vip-exterior", 904, 564, "Dark grey Lexus LX 600, an example of a VIP SUV", "لكزس LX 600 رمادية داكنة، مثال على سيارة دفع رباعي لكبار الشخصيات", "55% 55%"),
  staria: veh("hyundai-staria-exterior", 1200, 675, "Black Hyundai Staria, the people carrier used for families and small groups", "هيونداي ستاريا سوداء، المركبة المستخدمة للعائلات والمجموعات الصغيرة", "55% 55%"),
  camry: veh("toyota-camry-black-exterior", 1100, 825, "Black Toyota Camry, an example of a sedan with driver", "تويوتا كامري سوداء، مثال على سيدان مع سائق", "50% 60%"),
  sonata: veh("hyundai-sonata-exterior", 1400, 536, "Hyundai Sonata sedan on an open road, an example of a business sedan", "هيونداي سوناتا على طريق مفتوح، مثال على سيدان لرجال الأعمال", "55% 55%"),
  yukon: veh("gmc-yukon-at4-exterior", 892, 762, "GMC Yukon full-size SUV in a desert landscape", "جمس يوكن دفع رباعي كبيرة في أرض صحراوية", "50% 55%"),
};

/**
 * Owner inbox 2026-11-26 (images-inbox/New folder): cropped to 16:9, hotel names, fake door logos, plates and phone
 * numbers blurred, WebP q78, metadata stripped. AI-generated scenes carry a visible "Illustrative image" caption; web
 * photos of heavy jobs say they are an example of the job type. None is described as a RideSaudi or partner vehicle.
 */
const illustrative: Record<Locale, string> = { en: "Illustrative image.", ar: "صورة توضيحية." };
const jobExample: Record<Locale, string> = {
  en: "Example of this type of job. The truck for your job is confirmed in the quotation.",
  ar: "مثال على هذا النوع من النقل. تتأكد الشاحنة المناسبة لطلبك في عرض السعر.",
};
const ai = (file: string, en: string, ar: string, focus?: string): PageImage => ({ ...img(file, 1365, 768, en, ar, focus, "AI-generated scene, owner inbox 2026-11-26"), caption: illustrative });
const job = (file: string, w: number, h: number, en: string, ar: string, focus?: string): PageImage => ({ ...img(file, w, h, en, ar, focus, "low resolution, owner-supplied web photo"), caption: jobExample });
export const inbox = {
  cabinCognac: ai("fleet/luxury-suv-rear-cabin-cognac-leather", "Rear cabin of a luxury SUV with cognac leather seats and screens", "المقصورة الخلفية لسيارة دفع رباعي فاخرة بمقاعد جلدية بنية وشاشات"),
  cabinCaptain: ai("fleet/luxury-suv-rear-cabin-captain-seats", "Captain seats with armrests in the rear of a luxury SUV", "مقاعد خلفية منفصلة بمساند ذراع في سيارة دفع رباعي فاخرة", "60% 50%"),
  vipDoorNight: ai("services/vip-airport-transfer-door-open-night", "Chauffeur holding the rear door of a black SUV at an airport kerb at night", "سائق يفتح الباب الخلفي لسيارة دفع رباعي سوداء أمام المطار ليلًا", "60% 50%"),
  luggageLoading: ai("services/airport-pickup-luggage-loading", "Driver loading a suitcase into an SUV at an airport arrivals kerb", "سائق يحمّل حقيبة سفر في سيارة دفع رباعي عند رصيف الوصول بالمطار"),
  nameBoard: ai("services/airport-meet-greet-name-board", "Driver holding a welcome name board in an airport arrivals hall", "سائق يحمل لوحة ترحيب باسم الراكب في صالة الوصول بالمطار", "70% 45%"),
  arrivalsWaiting: ai("services/airport-arrivals-chauffeur-waiting", "Chauffeur waiting with a name board at an airport arrivals exit", "سائق ينتظر بلوحة اسم عند مخرج صالة الوصول", "45% 45%"),
  departuresNight: ai("services/airport-departures-suv-chauffeur-night", "Chauffeur beside a black SUV at an airport terminal kerb at night", "سائق بجانب سيارة دفع رباعي سوداء أمام صالة المطار ليلًا"),
  arrivalsKerb: ai("services/airport-arrivals-kerb-evening", "Busy airport arrivals kerb in the evening with travellers and cars", "رصيف وصول مزدحم في المطار مساءً مع مسافرين وسيارات"),
  hotelLuggage: ai("services/hotel-entrance-suv-luggage-riyadh", "Driver placing a bag in an SUV at a hotel entrance in Riyadh", "سائق يضع حقيبة في سيارة دفع رباعي عند مدخل فندق في الرياض", "70% 55%"),
  yukonHotel: ai("services/gmc-yukon-hotel-door-riyadh-dusk", "GMC Yukon with its rear door open outside a hotel in Riyadh at dusk", "جمس يوكن بباب خلفي مفتوح أمام فندق في الرياض عند الغروب", "45% 55%"),
  suvHotelSunset: ai("services/suv-chauffeur-hotel-riyadh-sunset", "Black SUV with a driver at a hotel entrance in Riyadh at sunset", "سيارة دفع رباعي سوداء مع سائق عند مدخل فندق في الرياض وقت الغروب", "55% 55%"),
  suvHotelBlueHour: ai("services/suv-chauffeur-hotel-riyadh-blue-hour", "Driver standing by a black SUV at a hotel entrance in Riyadh at dusk", "سائق يقف بجانب سيارة دفع رباعي سوداء عند مدخل فندق في الرياض مساءً", "55% 55%"),
  oversized: ai("heavy-transport/oversized-load-escort-highway", "Oversized load on a lowbed with an escort pickup and warning banners", "حمولة استثنائية على لوبد مع سيارة مرافقة ولافتات تحذير", "60% 55%"),
  machinery: ai("heavy-transport/flatbed-machinery-relocation-highway", "Industrial machinery chained on a flatbed trailer on a highway", "معدات صناعية مثبتة بالسلاسل على تريلا سطحة في طريق سريع", "40% 55%"),
  wheelLoaderLowbed: ai("heavy-transport/lowbed-wheel-loader-highway", "Wheel loader carried on a lowbed trailer on a highway", "شيول محمول على لوبد في طريق سريع", "55% 55%"),
  stariaDoor: img("fleet/hyundai-staria-sliding-door-open", 1024, 576, "Hyundai Staria with its sliding door open showing the passenger seats", "هيونداي ستاريا بباب منزلق مفتوح تظهر منه مقاعد الركاب", "40% 50%"),
  jubailRendering: img("locations/marsa-al-jubail-rendering", 1600, 900, "Artist's rendering of the Marsa Al Jubail waterfront project", "تصور تخيلي لمشروع مرسى الجبيل على الواجهة البحرية", "50% 50%", "architectural rendering, not a photo"),
  madinahAirport: img("airports/madinah-prince-mohammad-airport", 721, 406, "Terminal of Prince Mohammed bin Abdulaziz International Airport in Madinah", "مبنى مطار الأمير محمد بن عبدالعزيز الدولي في المدينة المنورة", "50% 55%", "low resolution, owner-supplied web photo"),
  jeddahStadium: img("locations/jeddah-king-abdullah-sports-city-stadium", 736, 414, "Stadium at King Abdullah Sports City in Jeddah", "ملعب مدينة الملك عبدالله الرياضية في جدة", "50% 55%", "low resolution, owner-supplied web photo"),
  sathaSedan: job("heavy-transport/satha-sedan-coastal-road", 678, 381, "Sedan strapped on a flatbed satha on a coastal road", "سيارة سيدان مثبتة على سطحة على طريق ساحلي", "50% 55%"),
  sathaPickup: job("heavy-transport/satha-pickup-car-transport", 638, 359, "Pickup truck carried on a satha recovery truck", "سيارة بيك أب محمولة على سطحة", "55% 55%"),
  craneLowbed: job("heavy-transport/lowbed-mobile-crane-saudi-road", 640, 360, "Mobile crane carried on a multi-axle lowbed by the roadside", "رافعة متحركة محمولة على لوبد متعدد المحاور على جانب الطريق", "55% 55%"),
  forkliftTrailer: job("heavy-transport/forklift-on-beavertail-trailer", 738, 415, "Forklift loaded on a low trailer with ramps", "رافعة شوكية محمّلة على تريلا منخفضة بمنحدرات", "60% 55%"),
};

/** Page path -> image. Pages not listed here have no picture (honest gap, not a placeholder). */
export const pageImages: Record<string, PageImage> = {
  // Heavy transport: owner-supplied web photos, re-cropped, renamed and metadata-stripped (docs/heavy-transport/IMAGE_PLAN.md).
  "services/recovery-heavy-transport/satha-car-recovery": { ...img("heavy-transport/satha-recovery-truck-tilting-deck", 1400, 654, "Flatbed satha recovery truck with a ramped orange deck parked in a vehicle yard", "سطحة نقل سيارات بصندوق برتقالي منحدر متوقفة في ساحة مركبات", "45% 60%", "owner-held photo, re-cropped and re-exported"), caption: { en: "Example of a satha. The truck for your job is confirmed in the quotation.", ar: "مثال لسطحة. تتأكد الشاحنة المناسبة لطلبك في عرض السعر." } },
  "services/recovery-heavy-transport/satha-car-recovery/hydraulic-satha": img("heavy-transport/hydraulic-satha-sports-car-loaded", 572, 317, "Orange sports car secured on a sliding-bed satha recovery truck", "سيارة رياضية برتقالية مثبتة على سطحة هيدروليك منزلقة", "50% 60%", "low resolution, owner-supplied web photo"),
  // Heavy transport photos: owner-supplied, re-cropped, renamed, metadata stripped; equipment-maker logos blurred.
  // They show the type of job, never a RideSaudi or partner truck. Pages without a suitable photo have none.
  "services/recovery-heavy-transport": img("heavy-transport/lowbed-truck-hauling-mobile-crane", 1419, 798, "Lowbed truck hauling a rough-terrain mobile crane on an open road", "شاحنة لوبد تنقل رافعة متحركة على طريق مفتوح", "60% 55%", "owner-supplied web photo"),
  "services/recovery-heavy-transport/lowbed-transport": img("heavy-transport/lowbed-truck-hauling-mobile-crane", 1419, 798, "Multi-axle lowbed carrying a heavy mobile crane, with warning flags on the load", "لوبد متعدد المحاور يحمل رافعة متحركة ثقيلة مع أعلام تحذيرية على الحمولة", "45% 55%", "owner-supplied web photo"),
  "services/recovery-heavy-transport/crane-transport": inbox.craneLowbed,
  "services/recovery-heavy-transport/wheel-loader-transport": img("heavy-transport/wheel-loader-bucket-construction-site", 705, 350, "Wheel loader (shuwel) with a full bucket on a construction site", "شيول بجرافة ممتلئة في موقع إنشاءات", "55% 60%", "low resolution, owner-supplied web photo"),
  "services/recovery-heavy-transport/flatbed-trailer-transport": img("heavy-transport/flatbed-trailer-steel-coils-highway", 654, 469, "Flatbed trailer carrying chained steel coils on a highway", "تريلا سطحة تحمل لفائف حديد مثبتة بالسلاسل على طريق سريع", "50% 60%", "low resolution, owner-supplied web photo, trailer logos blurred"),
  "services/recovery-heavy-transport/forklift-transport": inbox.forkliftTrailer,
  // City pages use the real city photographs already on the site.
  "services/recovery-heavy-transport/satha-car-recovery/riyadh": images.riyadh,
  "services/recovery-heavy-transport/satha-car-recovery/jeddah": images.jeddah,
  "services/recovery-heavy-transport/satha-car-recovery/dammam": images.alKhobar,
  "services/recovery-heavy-transport/heavy-equipment-transport/riyadh": images.riyadh,
  "services/recovery-heavy-transport/heavy-equipment-transport/jeddah": images.jeddah,
  "services/recovery-heavy-transport/heavy-equipment-transport/dammam": images.alKhobar,
  "services/city-transport/riyadh": images.riyadh,
  "services/airport-transfers/riyadh-airport": images.airportRuh,
  "services/tourism-transport/riyadh-sightseeing": images.diriyah,
  "services/airport-transfers/jeddah-airport": images.airportJed,
  "services/airport-transfers/madinah-airport": inbox.madinahAirport,
  "services/airport-transfers/dammam-airport": images.airportDmm,
  "services/airport-transfers/taif-airport": images.airportTaif,
  "services/intercity-transfers/riyadh-to-dammam": images.alKhobar,
  "services/intercity-transfers/riyadh-to-jeddah": images.jeddah,
  "services/intercity-transfers/riyadh-to-makkah": images.makkah,
  "services/intercity-transfers/riyadh-to-madinah": images.madinah,
  "services/intercity-transfers/madinah-to-riyadh": images.riyadh,
  "services/intercity-transfers/riyadh-to-doha": images.doha,
  "services/intercity-transfers/riyadh-to-dubai": images.dubai,
  "services/intercity-transfers/riyadh-to-manama": images.manama,
  "services/intercity-transfers/riyadh-to-kuwait-city": images.kuwaitCity,
  "services/intercity-transfers/riyadh-to-alula": images.alula,
  "services/intercity-transfers/riyadh-to-taif": images.taif,
  "services/intercity-transfers/riyadh-to-abha": images.abha,
  "services/intercity-transfers/riyadh-to-tabuk": images.tabuk,
  "services/intercity-transfers/riyadh-to-yanbu": images.yanbu,
  "services/intercity-transfers/jeddah-to-yanbu": images.yanbu,
  "services/intercity-transfers/makkah-to-taif": images.taif,
  "services/intercity-transfers/madinah-to-alula": images.alula,
  "services/intercity-transfers/jeddah-to-alula": images.alulaRock,
  "services/airport-transfers/alula-airport": images.alulaHegra,
  "services/tourism-transport/alula": images.alulaRock,
  "services/intercity-transfers/riyadh-to-al-khobar": images.alKhobar,
  "services/intercity-transfers/dammam-to-riyadh": images.riyadh,
  "services/intercity-transfers/dammam-to-doha": images.doha,
  "services/intercity-transfers/dammam-to-dubai": images.dubai,
  "services/intercity-transfers/riyadh-to-abu-dhabi": images.abuDhabi,
  "services/intercity-transfers/madinah-to-makkah": images.makkah,
  "services/intercity-transfers/taif-to-makkah": images.taif,
  "services/intercity-transfers/alula-to-riyadh": images.alulaRock,
  "services/intercity-transfers/alula-to-dammam": images.alula,
  "services/cross-border-transfers": images.borders,
  "services/cross-border-transfers/bahrain": images.causeway,
  "services/cross-border-transfers/uae": images.abuDhabiAerial,
  "services/city-transport/abha": images.abha,
  "services/city-transport/tabuk": images.tabuk,
  "services/city-transport/makkah": images.makkah,
  "services/city-transport/jeddah": images.jeddah,
  "services/umrah-transport": images.makkah,
  "services/city-transport/madinah": images.madinah,
  // Owner-supplied photos added 2026-11-23 (re-cropped, renamed, metadata stripped; see docs/IMAGE-FOLDERS.md).
  "services/city-transport/al-baha": images.alBaha,
  "services/intercity-transfers/jeddah-to-al-baha": images.alBaha,
  "services/intercity-transfers/al-baha-to-jeddah": images.jeddah,
  "services/city-transport/king-abdullah-economic-city": images.kaec,
  "services/city-transport/al-ahsa": images.alAhsa,
  "services/intercity-transfers/riyadh-to-al-ahsa": images.jabalQarah,
  "services/intercity-transfers/dammam-to-al-ahsa": images.jabalQarah,
  "services/airport-transfers/al-ahsa-airport": images.jabalQarah,
  "services/city-transport/najran": images.najran,
  "services/city-transport/buraidah": images.buraydah,
  "services/intercity-transfers/riyadh-to-buraydah": images.buraydah,
  "services/city-transport/dhahran": images.dhahran,
  "services/city-transport/yanbu": images.yanbu,
  // Route pages use the destination's picture (same convention as riyadh-to-dammam above).
  "services/intercity-transfers/jeddah-to-riyadh": images.riyadh,
  "services/intercity-transfers/abha-to-riyadh": images.abhaSign,
  "services/intercity-transfers/jeddah-to-makkah": images.makkah,
  "services/intercity-transfers/jeddah-to-madinah": images.madinah,
  "services/intercity-transfers/makkah-to-madinah": images.haramainTrain,
  "services/intercity-transfers/jeddah-to-taif": images.taif,
  "services/tourism-transport/taif": images.taif,
  "services/intercity-transfers/jeddah-to-dammam": images.alKhobar,
  "services/intercity-transfers/dammam-to-jeddah": images.jeddah,
  "services/intercity-transfers/alula-to-jeddah": images.jeddah,
  "services/intercity-transfers/jazan-to-jeddah": images.jeddah,
  "services/intercity-transfers/madinah-to-jeddah": images.jeddah,
  "services/intercity-transfers/yanbu-to-jeddah": images.jeddah,
  "services/intercity-transfers/taif-to-jeddah": images.jeddah,
  "services/intercity-transfers/abha-to-jeddah": images.jeddah,
  "services/intercity-transfers/jeddah-to-abha": images.abha,
  // Visual audit 2026-11-23 (docs/RIDESAUDI-IMAGE-REPLACEMENT-PLAN.md): pages that had no picture but where an
  // existing photo shows exactly the place or vehicle the page is about. Most hubs keep a plain hero: their cards carry photos.
  "services/cross-border-transfers/qatar": images.doha,
  "services/cross-border-transfers/kuwait": images.kuwaitCity,
  "services/intercity-transfers/dammam-to-bahrain": images.causeway,
  "services/city-transport/al-khobar": images.alKhobar,
  "services/city-transport/dammam": images.dammamCoast,
  "services/event-transportation/dammam": images.dammamCoast,
  "services/event-transportation/riyadh": images.riyadh,
  "services/event-transportation/jeddah": inbox.jeddahStadium,
  "services/intercity-transfers/makkah-to-jeddah": images.jeddah,
  "services/intercity-transfers/makkah-to-riyadh": images.riyadh,
  "services/intercity-transfers/al-khobar-to-riyadh": images.riyadh,
  "services/intercity-transfers/alula-to-madinah": images.madinah,
  "services/intercity-transfers": images.taif,
  "services/airport-transfers/qassim-airport": images.buraydah,
  "services/umrah-transport/jeddah-airport-to-makkah": images.makkah,
  "services/umrah-transport/makkah-ziyarat": images.makkah,
  "services/umrah-transport/madinah-ziyarat": images.madinah,
  "services/umrah-transport/family-umrah-transport": images.madinah,
  "services/tourism-transport": images.alulaHegra,
  // Vehicle-led pages: the model photo matches the vehicle class the page offers (SUV pages never show a sedan).
  "luxury-transportation": vehicles.escalade,
  "luxury-transportation/luxury-suv": vehicles.lexusLx,
  "luxury-transportation/vip-car-service": vehicles.suburban,
  fleet: vehicles.suburban,
  "services/airport-transfers/family-airport-transfer": vehicles.staria,
  "services/group-transportation/family-transport": vehicles.staria,
  "services/group-transportation/van-and-minibus": vehicles.staria,
  "services/chauffeur-services/business-chauffeur": vehicles.camry,
  "services/special-transportation/business-travel": vehicles.sonata,
  // Owner inbox 2026-11-26.
  services: inbox.yukonHotel,
  "services/chauffeur-services": inbox.suvHotelSunset,
  "services/airport-transfers": inbox.arrivalsWaiting,
  "services/airport-transfers/private-airport-pickup": inbox.nameBoard,
  "services/airport-transfers/airport-to-hotel": inbox.hotelLuggage,
  "services/airport-transfers/vip-airport-transfer": inbox.vipDoorNight,
  "services/event-transportation/event-airport-transfers": inbox.luggageLoading,
  "services/special-transportation/hotel-transportation": inbox.suvHotelBlueHour,
  "luxury-transportation/luxury-chauffeur": inbox.cabinCognac,
  "luxury-transportation/vip-delegation-transport": inbox.departuresNight,
  "services/intercity-transfers/private-intercity-chauffeur": inbox.cabinCaptain,
  "services/umrah-transport/group-umrah-transport": inbox.stariaDoor,
  "services/recovery-heavy-transport/oversized-load-transport": inbox.oversized,
  "services/recovery-heavy-transport/industrial-machinery-relocation": inbox.machinery,
  "services/recovery-heavy-transport/heavy-equipment-transport": inbox.wheelLoaderLowbed,
  "services/recovery-heavy-transport/car-transport-between-cities": inbox.sathaPickup,
  "services/city-transport/jubail": inbox.jubailRendering,
  "services/intercity-transfers/riyadh-to-jubail": inbox.jubailRendering,
  "services/intercity-transfers/dammam-to-jubail": inbox.jubailRendering,
};

export const getImage = (path: string) => pageImages[path];
