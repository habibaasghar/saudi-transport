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
  riyadh: img("riyadh", 1600, 900, "Riyadh skyline at dusk with the city's business towers", "أفق الرياض عند الغروب بأبراج مناطق الأعمال"),
  diriyah: img("diriyah", 1024, 502, "Aerial view of the mud-brick quarter of At-Turaif in Diriyah", "منظر جوي لحي الطريف الطيني في الدرعية"),
  jeddah: img("jeddah", 1200, 1600, "Jeddah Corniche waterfront on the Red Sea with a tower on the skyline", "كورنيش جدة على البحر الأحمر وبرج في الأفق", "50% 40%"),
  makkah: img("makkah", 900, 1600, "The Grand Mosque in Makkah at dusk", "المسجد الحرام في مكة المكرمة عند الغروب", "50% 35%"),
  madinah: img("madinah", 1200, 1600, "Canopies in the courtyard of the Prophet's Mosque in Madinah", "المظلات في ساحة المسجد النبوي في المدينة المنورة", "50% 30%"),
  alKhobar: img("al-khobar", 1600, 900, "Aerial view of the Al Khobar waterfront on the Gulf coast", "منظر جوي لواجهة الخبر البحرية على ساحل الخليج"),
  alula: img("alula", 1376, 768, "A dinner table set among sandstone cliffs in AlUla at dusk", "مائدة عشاء بين الجبال الرملية في العلا عند الغروب"),
  alulaRock: img("alula-elephant-rock", 1600, 1068, "Elephant Rock sandstone formation in AlUla at dusk", "تكوين جبل الفيل الرملي في العلا عند الغروب"),
  abha: img("abha", 1400, 777, "Mountain village and green hills in Abha, Asir region", "قرية جبلية وتلال خضراء في أبها بمنطقة عسير"),
  taif: img("taif", 1400, 919, "Winding mountain road above Taif in the Sarawat range", "طريق جبلي متعرج فوق الطائف في جبال السروات"),
  tabuk: img("tabuk", 1200, 664, "Tabuk city sign lit at night", "لوحة مدينة تبوك مضاءة ليلًا"),
  yanbu: img("yanbu", 597, 335, "Aerial rendering of a Red Sea island resort near Yanbu", "تصور جوي لمنتجع جزيرة على البحر الأحمر قرب ينبع", undefined, "low-resolution render"),
  airportRuh: img("airport-ruh", 1600, 1600, "Illustration of an airport arrivals kerb with private cars waiting", "رسم توضيحي لرصيف وصول في مطار تقف عليه سيارات خاصة", undefined, "illustration, not a photo of RUH"),
  airportJed: img("airport-jed", 1600, 1600, "Illustration of an airport arrivals kerb at sunset with cars waiting", "رسم توضيحي لرصيف وصول في مطار عند الغروب مع سيارات منتظرة", undefined, "illustration, not a photo of JED"),
  airportMed: img("airport-med", 1600, 1600, "Illustration of an airport terminal entrance with cars at the kerb", "رسم توضيحي لمدخل صالة مطار مع سيارات على الرصيف", undefined, "illustration, not a photo of MED"),
  airportDmm: img("airport-dmm", 1408, 768, "Illustration of a Gulf-coast airport terminal with palms and aircraft", "رسم توضيحي لمبنى مطار على ساحل الخليج مع نخيل وطائرات", undefined, "illustration, not a photo of DMM"),
  airportTaif: img("airport-taif", 1376, 768, "Illustration of a small airport below rugged mountains", "رسم توضيحي لمطار صغير أسفل جبال وعرة", undefined, "illustration, not a photo of TIF"),
  doha: img("doha", 1600, 900, "Aerial view of the Doha West Bay skyline over the water", "منظر جوي لأفق الخليج الغربي في الدوحة على الماء"),
  dubai: img("dubai", 1600, 1143, "Dubai towers along Sheikh Zayed Road at dusk", "أبراج دبي على شارع الشيخ زايد عند الغروب"),
  manama: img("manama", 796, 385, "Manama skyline at dusk with the Bahrain Financial Harbour towers", "أفق المنامة عند الغروب مع أبراج المرفأ المالي", undefined, "low resolution"),
  kuwaitCity: img("kuwait-city", 768, 576, "Kuwait Towers and the Kuwait City skyline", "أبراج الكويت وأفق مدينة الكويت", undefined, "low resolution"),
  causeway: img("king-fahd-causeway", 1536, 700, "The King Fahd Causeway crossing the water between Saudi Arabia and Bahrain", "جسر الملك فهد على الماء بين السعودية والبحرين"),
  uaeHighway: img("saudi-uae-highway", 1408, 768, "Illustration of an SUV on a desert highway at sunset", "رسم توضيحي لسيارة دفع رباعي على طريق صحراوي عند الغروب", undefined, "illustration"),
  borders: img("border-crossings", 1600, 1600, "Illustration of a causeway road over the sea at sunset", "رسم توضيحي لطريق جسر فوق البحر عند الغروب", undefined, "illustration"),
};

/** Page path -> image. Pages not listed here have no picture (honest gap, not a placeholder). */
export const pageImages: Record<string, PageImage> = {
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
  "services/cross-border-transfers": images.borders,
  "services/cross-border-transfers/bahrain": images.causeway,
  "services/cross-border-transfers/uae": images.uaeHighway,
  "services/city-transport/abha": images.abha,
  "services/city-transport/tabuk": images.tabuk,
  "services/city-transport/makkah": images.makkah,
  "services/city-transport/jeddah": images.jeddah,
  "services/umrah-transport": images.makkah,
  "services/city-transport/madinah": images.madinah,
};

export const getImage = (path: string) => pageImages[path];
