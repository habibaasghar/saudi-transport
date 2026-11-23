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
  borders: img("cross-border/border-crossings", 1600, 1600, "Illustration of a causeway road over the sea at sunset", "رسم توضيحي لطريق جسر فوق البحر عند الغروب", undefined, "illustration"),
};

/** Page path -> image. Pages not listed here have no picture (honest gap, not a placeholder). */
export const pageImages: Record<string, PageImage> = {
  // Heavy transport: owner-supplied web photos, re-cropped, renamed and metadata-stripped (docs/heavy-transport/IMAGE_PLAN.md).
  "services/recovery-heavy-transport/satha-car-recovery": img("heavy-transport/hydraulic-satha-sports-car-loaded", 572, 317, "Orange sports car secured on a sliding-bed satha recovery truck", "سيارة رياضية برتقالية مثبتة على سطحة هيدروليك منزلقة", "50% 60%", "low resolution, owner-supplied web photo"),
  "services/recovery-heavy-transport/car-transport-between-cities": img("heavy-transport/flatbed-car-carrier-suv-highway", 311, 251, "Red SUV carried on a flatbed car carrier on a highway at sunset", "سيارة جيب حمراء محمولة على سطحة نقل سيارات على طريق سريع عند الغروب", "50% 55%", "low resolution, likely AI-generated illustration"),
  // Heavy transport photos: owner-supplied, re-cropped, renamed, metadata stripped; equipment-maker logos blurred.
  // They show the type of job, never a RideSaudi or partner truck. Pages without a suitable photo have none.
  "services/recovery-heavy-transport": img("heavy-transport/lowbed-truck-hauling-mobile-crane", 1419, 798, "Lowbed truck hauling a rough-terrain mobile crane on an open road", "شاحنة لوبد تنقل رافعة متحركة على طريق مفتوح", "60% 55%", "owner-supplied web photo"),
  "services/recovery-heavy-transport/lowbed-transport": img("heavy-transport/lowbed-truck-hauling-mobile-crane", 1419, 798, "Multi-axle lowbed carrying a heavy mobile crane, with warning flags on the load", "لوبد متعدد المحاور يحمل رافعة متحركة ثقيلة مع أعلام تحذيرية على الحمولة", "45% 55%", "owner-supplied web photo"),
  "services/recovery-heavy-transport/crane-transport": img("heavy-transport/rough-terrain-crane-loaded-on-lowbed", 1120, 630, "Rough-terrain crane secured on a lowbed trailer for road transport", "رافعة للطرق الوعرة مثبتة على لوبد للنقل البري", "40% 50%", "owner-supplied web photo"),
  "services/recovery-heavy-transport/wheel-loader-transport": img("heavy-transport/wheel-loader-bucket-construction-site", 705, 350, "Wheel loader (shuwel) with a full bucket on a construction site", "شيول بجرافة ممتلئة في موقع إنشاءات", "55% 60%", "low resolution, owner-supplied web photo"),
  "services/recovery-heavy-transport/flatbed-trailer-transport": img("heavy-transport/flatbed-trailer-steel-coils-highway", 654, 469, "Flatbed trailer carrying chained steel coils on a highway", "تريلا سطحة تحمل لفائف حديد مثبتة بالسلاسل على طريق سريع", "50% 60%", "low resolution, owner-supplied web photo, trailer logos blurred"),
  "services/recovery-heavy-transport/forklift-transport": img("heavy-transport/heavy-duty-forklifts-yard", 577, 346, "Row of large heavy-duty forklifts parked in a yard", "صف من الرافعات الشوكية الكبيرة للأحمال الثقيلة في ساحة", "50% 60%", "low resolution, owner-supplied web photo, maker logos blurred"),
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
  "services/airport-transfers/madinah-airport": images.airportMed,
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
  "services/airport-transfers/alula-airport": images.alula,
  "services/tourism-transport/alula": images.alulaRock,
  "services/intercity-transfers/riyadh-to-al-khobar": images.alKhobar,
  "services/intercity-transfers/dammam-to-riyadh": images.riyadh,
  "services/intercity-transfers/dammam-to-doha": images.doha,
  "services/intercity-transfers/dammam-to-dubai": images.dubai,
  "services/intercity-transfers/riyadh-to-abu-dhabi": images.uaeHighway,
  "services/intercity-transfers/madinah-to-makkah": images.makkah,
  "services/intercity-transfers/taif-to-makkah": images.taif,
  "services/intercity-transfers/alula-to-riyadh": images.alulaRock,
  "services/intercity-transfers/alula-to-dammam": images.alula,
  "services/cross-border-transfers": images.borders,
  "services/cross-border-transfers/bahrain": images.causeway,
  "services/cross-border-transfers/uae": images.uaeHighway,
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
};

export const getImage = (path: string) => pageImages[path];
