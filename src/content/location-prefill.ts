import type { Locale } from "@/i18n/routing";
import { routePrefill } from "./route-prefill";

/**
 * Location pre-fill for the quote forms on location pages (cities, airports, cross-border countries, event and
 * tourism cities, Ziyarat, heavy city pages) and on route-based guides. Route pages keep using route-prefill.ts.
 * Values are a starting point only: the customer can edit them. Airport pages pre-fill the airport as the pickup
 * because arrivals are the most common request; the field note in the form lets people reverse it.
 */
export type FormPrefill = { pickup: string; dropoff: string };
type L = Record<Locale, string>;
const l = (en: string, ar: string): L => ({ en, ar });

const city = {
  riyadh: l("Riyadh", "الرياض"),
  jeddah: l("Jeddah", "جدة"),
  makkah: l("Makkah", "مكة المكرمة"),
  madinah: l("Madinah", "المدينة المنورة"),
  dammam: l("Dammam", "الدمام"),
  alKhobar: l("Al Khobar", "الخبر"),
  dhahran: l("Dhahran", "الظهران"),
  jubail: l("Jubail", "الجبيل"),
  alAhsa: l("Al Ahsa", "الأحساء"),
  tabuk: l("Tabuk", "تبوك"),
  abha: l("Abha", "أبها"),
  khamis: l("Khamis Mushait", "خميس مشيط"),
  yanbu: l("Yanbu", "ينبع"),
  najran: l("Najran", "نجران"),
  jazan: l("Jazan", "جازان"),
  hail: l("Hail", "حائل"),
  buraidah: l("Buraydah, Al Qassim", "بريدة، القصيم"),
  hafar: l("Hafar Al Batin", "حفر الباطن"),
  alBaha: l("Al Baha", "الباحة"),
  kaec: l("King Abdullah Economic City", "مدينة الملك عبدالله الاقتصادية"),
  taif: l("Taif", "الطائف"),
  alula: l("AlUla", "العلا"),
};

const airport = {
  jed: l("King Abdulaziz International Airport (JED), Jeddah", "مطار الملك عبدالعزيز الدولي، جدة"),
  ruh: l("King Khalid International Airport (RUH), Riyadh", "مطار الملك خالد الدولي، الرياض"),
  med: l("Prince Mohammad bin Abdulaziz Airport (MED), Madinah", "مطار الأمير محمد بن عبدالعزيز، المدينة المنورة"),
  dmm: l("King Fahd International Airport (DMM), Dammam", "مطار الملك فهد الدولي، الدمام"),
  tif: l("Taif International Airport", "مطار الطائف الدولي"),
  ula: l("AlUla International Airport", "مطار العلا الدولي"),
  qassim: l("Prince Naif bin Abdulaziz International Airport, Al Qassim", "مطار الأمير نايف بن عبدالعزيز الدولي، القصيم"),
  ahsa: l("Al Ahsa International Airport", "مطار الأحساء الدولي"),
};

const empty = l("", "");
const from = (pickup: L) => ({ pickup, dropoff: empty });
const to = (dropoff: L) => ({ pickup: empty, dropoff });
const both = (pickup: L, dropoff: L) => ({ pickup, dropoff });

const S = "services";
const C = `${S}/city-transport`;
const A = `${S}/airport-transfers`;
const H = `${S}/recovery-heavy-transport`;

/** Registry path -> pre-fill. */
export const locationPrefill: Record<string, { pickup: L; dropoff: L }> = {
  // City pages: the city is where most journeys start.
  [`${C}/riyadh`]: from(city.riyadh),
  [`${C}/jeddah`]: from(city.jeddah),
  [`${C}/makkah`]: from(city.makkah),
  [`${C}/madinah`]: from(city.madinah),
  [`${C}/dammam`]: from(city.dammam),
  [`${C}/al-khobar`]: from(city.alKhobar),
  [`${C}/dhahran`]: from(city.dhahran),
  [`${C}/jubail`]: from(city.jubail),
  [`${C}/al-ahsa`]: from(city.alAhsa),
  [`${C}/tabuk`]: from(city.tabuk),
  [`${C}/abha`]: from(city.abha),
  [`${C}/khamis-mushait`]: from(city.khamis),
  [`${C}/yanbu`]: from(city.yanbu),
  [`${C}/najran`]: from(city.najran),
  [`${C}/jazan`]: from(city.jazan),
  [`${C}/hail`]: from(city.hail),
  [`${C}/buraidah`]: from(city.buraidah),
  [`${C}/hafar-al-batin`]: from(city.hafar),
  [`${C}/al-baha`]: from(city.alBaha),
  [`${C}/king-abdullah-economic-city`]: from(city.kaec),
  // Airport pages: arrival pickups.
  [`${A}/jeddah-airport`]: from(airport.jed),
  [`${A}/riyadh-airport`]: from(airport.ruh),
  [`${A}/madinah-airport`]: from(airport.med),
  [`${A}/dammam-airport`]: from(airport.dmm),
  [`${A}/taif-airport`]: from(airport.tif),
  [`${A}/alula-airport`]: from(airport.ula),
  [`${A}/qassim-airport`]: from(airport.qassim),
  [`${A}/al-ahsa-airport`]: from(airport.ahsa),
  // Cross-border country pages: the destination is the country.
  [`${S}/cross-border-transfers/bahrain`]: to(l("Manama, Bahrain", "المنامة، البحرين")),
  [`${S}/cross-border-transfers/qatar`]: to(l("Doha, Qatar", "الدوحة، قطر")),
  [`${S}/cross-border-transfers/uae`]: to(l("Dubai or Abu Dhabi, UAE", "دبي أو أبوظبي، الإمارات")),
  [`${S}/cross-border-transfers/kuwait`]: to(l("Kuwait City, Kuwait", "مدينة الكويت، الكويت")),
  // Umrah Ziyarat, event and tourism pages tied to one city.
  [`${S}/umrah-transport/makkah-ziyarat`]: both(city.makkah, city.makkah),
  [`${S}/umrah-transport/madinah-ziyarat`]: both(city.madinah, city.madinah),
  [`${S}/event-transportation/riyadh`]: from(city.riyadh),
  [`${S}/event-transportation/jeddah`]: from(city.jeddah),
  [`${S}/event-transportation/dammam`]: from(city.dammam),
  [`${S}/tourism-transport/alula`]: from(city.alula),
  [`${S}/tourism-transport/taif`]: from(city.taif),
  [`${S}/tourism-transport/riyadh-sightseeing`]: both(city.riyadh, city.riyadh),
  // Heavy transport city pages (heavy quote form): the job starts in that city.
  [`${H}/satha-car-recovery/riyadh`]: from(city.riyadh),
  [`${H}/satha-car-recovery/jeddah`]: from(city.jeddah),
  [`${H}/satha-car-recovery/dammam`]: from(l("Dammam / Al Khobar", "الدمام / الخبر")),
  [`${H}/heavy-equipment-transport/riyadh`]: from(city.riyadh),
  [`${H}/heavy-equipment-transport/jeddah`]: from(city.jeddah),
  [`${H}/heavy-equipment-transport/dammam`]: from(l("Dammam / Jubail", "الدمام / الجبيل")),
};

/** Guide slug -> enquiry service and pre-fill, for guides about one route or destination. */
export const guideForm: Record<string, { service: string; pickup?: L; dropoff?: L }> = {
  "riyadh-to-jeddah-by-road-guide": { service: "intercity", pickup: city.riyadh, dropoff: city.jeddah },
  "riyadh-to-dammam-private-transfer": { service: "intercity", pickup: city.riyadh, dropoff: city.dammam },
  "makkah-to-taif-private-car-day-trip": { service: "intercity", pickup: city.makkah, dropoff: city.taif },
  "umrah-private-transport-plan-jeddah-makkah-madinah": { service: "umrah", pickup: airport.jed, dropoff: city.makkah },
  "jeddah-airport-to-makkah-train-bus-taxi-private-car": { service: "umrah", pickup: airport.jed, dropoff: city.makkah },
  "makkah-to-madinah-train-bus-or-private-car": { service: "intercity", pickup: city.makkah, dropoff: city.madinah },
  "jeddah-to-madinah-train-flight-bus-or-car": { service: "intercity", pickup: city.jeddah, dropoff: city.madinah },
  "madinah-to-alula-by-road-guide": { service: "intercity", pickup: city.madinah, dropoff: city.alula },
  "private-airport-transfers-saudi-arabia": { service: "airport" },
  "airport-pickup-tips-saudi-arrivals": { service: "airport" },
  "private-chauffeur-service-saudi-arabia": { service: "chauffeur", pickup: city.riyadh },
  "saudi-arabia-to-qatar-private-transfer": { service: "intercity", dropoff: l("Doha, Qatar", "الدوحة، قطر") },
  "saudi-arabia-to-bahrain-private-transfer": { service: "intercity", dropoff: l("Manama, Bahrain", "المنامة، البحرين") },
  "saudi-arabia-to-uae-private-transfer": { service: "intercity", dropoff: l("Dubai or Abu Dhabi, UAE", "دبي أو أبوظبي، الإمارات") },
  "cross-border-private-transfer-checklist": { service: "intercity" },
  "private-car-vs-flight-vs-rental-saudi-intercity": { service: "intercity" },
};

/** Pre-fill for a registry page: route pages first, then location pages. */
export function pagePrefill(path: string, locale: Locale): FormPrefill | undefined {
  const r = routePrefill[path];
  if (r) return { pickup: r[locale][0], dropoff: r[locale][1] };
  const p = locationPrefill[path];
  return p ? { pickup: p.pickup[locale], dropoff: p.dropoff[locale] } : undefined;
}

export function guidePrefill(slug: string, locale: Locale): { service?: string; prefill?: FormPrefill } {
  const g = guideForm[slug];
  if (!g) return {};
  const prefill = g.pickup || g.dropoff ? { pickup: g.pickup?.[locale] ?? "", dropoff: g.dropoff?.[locale] ?? "" } : undefined;
  return { service: g.service, prefill };
}
