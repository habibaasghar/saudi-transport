import type { Locale } from "@/i18n/routing";
import type { Section } from "./types";
import { linkTargets } from "./inline-links";

/**
 * Contextual links, 2026-11-24. The audit found that none of the 32 guides had a link inside its text and that 117 of
 * 162 service pages received none. Writers already name the right page in the sentence ("see Makkah to Madinah"), so the
 * first natural mention of a page becomes a link, and only when that page is already an editorially chosen neighbour of
 * the current one (a guide's `links`; a service page's `related`, parent and children). No wording is added or changed:
 * the anchor is the sentence's own text, at most one new link per paragraph, at most MAX per page, one per target.
 */
const MAX = 6;

type Pair = [en: string[], ar: string[]];

const CITY: Record<string, Pair> = {
  riyadh: [["Riyadh"], ["الرياض"]],
  jeddah: [["Jeddah"], ["جدة"]],
  makkah: [["Makkah"], ["مكة المكرمة", "مكة"]],
  madinah: [["Madinah"], ["المدينة المنورة", "المدينة"]],
  dammam: [["Dammam"], ["الدمام"]],
  "al-khobar": [["Al Khobar"], ["الخبر"]],
  taif: [["Taif"], ["الطائف"]],
  alula: [["AlUla"], ["العلا"]],
  yanbu: [["Yanbu"], ["ينبع"]],
  jubail: [["Jubail"], ["الجبيل"]],
  abha: [["Abha"], ["أبها"]],
  tabuk: [["Tabuk"], ["تبوك"]],
  hail: [["Hail"], ["حائل"]],
  buraydah: [["Buraydah"], ["بريدة"]],
  "al-ahsa": [["Al Ahsa"], ["الأحساء"]],
  jazan: [["Jazan"], ["جازان"]],
  "al-baha": [["Al Baha"], ["الباحة"]],
  doha: [["Doha"], ["الدوحة"]],
  dubai: [["Dubai"], ["دبي"]],
  "abu-dhabi": [["Abu Dhabi"], ["أبوظبي"]],
  manama: [["Manama", "Bahrain"], ["المنامة", "البحرين"]],
  bahrain: [["Bahrain"], ["البحرين"]],
  "kuwait-city": [["Kuwait City", "Kuwait"], ["مدينة الكويت", "الكويت"]],
  "hafar-al-batin": [["Hafar Al Batin"], ["حفر الباطن"]],
};

const S = "services";
/** Phrases that unambiguously name a page. A bare city name is never an anchor. */
const PHRASES: Record<string, Pair> = {
  [`${S}/airport-transfers`]: [["Airport transfers", "airport transfers", "airport transfer"], ["التوصيل من المطار", "توصيل المطار"]],
  [`${S}/intercity-transfers`]: [["Intercity transfers", "intercity transfers", "intercity transfer"], ["الرحلات بين المدن", "التوصيل بين المدن"]],
  [`${S}/umrah-transport`]: [["Umrah transport"], ["نقل المعتمرين", "تنقلات العمرة"]],
  [`${S}/umrah-transport/jeddah-airport-to-makkah`]: [["Jeddah Airport to Makkah", "Jeddah airport to Makkah"], ["مطار جدة إلى مكة المكرمة", "مطار جدة إلى مكة"]],
  [`${S}/umrah-transport/makkah-ziyarat`]: [["Makkah ziyarat"], ["زيارات مكة المكرمة", "زيارات مكة"]],
  [`${S}/umrah-transport/madinah-ziyarat`]: [["Madinah ziyarat"], ["زيارات المدينة المنورة", "زيارات المدينة"]],
  [`${S}/umrah-transport/family-umrah-transport`]: [["family Umrah transport", "Family Umrah transport"], ["نقل العائلات المعتمرة"]],
  [`${S}/umrah-transport/private-umrah-chauffeur`]: [["private Umrah chauffeur", "Umrah chauffeur"], ["سيارة مع سائق للعمرة"]],
  [`${S}/chauffeur-services`]: [["chauffeur services", "chauffeur service", "by the hour or day", "by the hour or by the day"], ["بالساعة أو اليوم", "بالساعة أو باليوم"]],
  [`${S}/chauffeur-services/business-chauffeur`]: [["business chauffeur"], ["سائق أعمال", "سائق الأعمال"]],
  [`${S}/chauffeur-services/multi-day-chauffeur`]: [["multi-day chauffeur", "multi-day booking"], ["حجز لعدة أيام"]],
  [`${S}/cross-border-transfers`]: [["Cross-border transfers", "cross-border transfers", "cross-border transfer"], ["التوصيل عبر الحدود", "الرحلات عبر الحدود"]],
  [`${S}/cross-border-transfers/bahrain`]: [["Saudi Arabia to Bahrain"], ["من السعودية إلى البحرين"]],
  [`${S}/cross-border-transfers/qatar`]: [["Saudi Arabia to Qatar"], ["من السعودية إلى قطر"]],
  [`${S}/cross-border-transfers/uae`]: [["Saudi Arabia to the UAE"], ["من السعودية إلى الإمارات"]],
  [`${S}/cross-border-transfers/kuwait`]: [["Saudi Arabia to Kuwait"], ["من السعودية إلى الكويت"]],
  [`${S}/group-transportation`]: [["group transportation", "group transport"], ["نقل المجموعات"]],
  [`${S}/group-transportation/family-transport`]: [["family transport"], ["توصيل العائلات"]],
  [`${S}/group-transportation/van-and-minibus`]: [["van or minibus", "van and minibus", "minibus"], ["حافلة صغيرة"]],
  [`${S}/event-transportation`]: [["event transportation", "event transport"], ["نقل الفعاليات"]],
  [`${S}/event-transportation/wedding-transport`]: [["wedding transport"], ["نقل الأعراس"]],
  [`${S}/event-transportation/corporate-events`]: [["corporate events"], ["فعاليات الشركات"]],
  [`${S}/event-transportation/vip-event-chauffeur`]: [["VIP event chauffeur"], []],
  [`${S}/special-transportation/business-travel`]: [["business travel"], ["سفر الأعمال"]],
  [`${S}/special-transportation/hotel-transportation`]: [["hotel transportation"], ["نقل نزلاء الفنادق"]],
  [`${S}/special-transportation/senior-friendly-transportation`]: [["elderly passengers", "elderly travellers", "older passengers"], ["كبار السن"]],
  [`${S}/tourism-transport`]: [["tourism transport"], ["النقل السياحي"]],
  [`${S}/tourism-transport/alula`]: [["AlUla private transportation", "AlUla tourism transport"], ["التنقل الخاص في العلا", "النقل السياحي في العلا"]],
  [`${S}/tourism-transport/day-trip-transport`]: [["day trips", "day trip"], ["رحلات يومية", "رحلة يومية"]],
  [`${S}/tourism-transport/riyadh-sightseeing`]: [["Riyadh sightseeing"], ["جولات الرياض"]],
  [`${S}/tourism-transport/taif`]: [["Taif sightseeing"], []],
  [`${S}/tourism-transport/multi-stop-transport`]: [["multi-stop"], ["متعدد المحطات", "متعددة المحطات"]],
  [`${S}/airport-transfers/family-airport-transfer`]: [["family airport transfer"], ["توصيل العائلات من المطار"]],
  [`${S}/airport-transfers/vip-airport-transfer`]: [["VIP airport transfer"], []],
  [`${S}/airport-transfers/airport-to-hotel`]: [["airport to hotel"], ["من المطار إلى الفندق"]],
  "luxury-transportation": [["luxury transportation", "luxury transport"], ["النقل الفاخر"]],
  "luxury-transportation/luxury-suv": [["luxury SUV"], []],
  "luxury-transportation/vip-delegation-transport": [["VIP delegations", "delegations"], ["الوفود"]],
  "fleet/gmc-yukon-with-driver": [["GMC Yukon", "GMC"], ["جمس يوكن", "جمس"]],
  "fleet/hyundai-staria-with-driver": [["Hyundai Staria", "Staria"], ["هيونداي ستاريا", "ستاريا"]],
  fleet: [["vehicle by group size", "vehicles you can request"], ["المركبات المتاحة"]],
};

const AIRPORT: Record<string, Pair> = {
  "riyadh-airport": [["King Khalid International Airport", "Riyadh airport", "Riyadh Airport"], ["مطار الملك خالد الدولي", "مطار الملك خالد", "مطار الرياض"]],
  "jeddah-airport": [["King Abdulaziz International Airport", "King Abdulaziz Airport", "Jeddah airport", "Jeddah Airport"], ["مطار الملك عبدالعزيز الدولي", "مطار الملك عبدالعزيز", "مطار جدة"]],
  "madinah-airport": [["Madinah airport", "Madinah Airport", "Madinah's airport"], ["مطار الأمير محمد بن عبدالعزيز", "مطار المدينة المنورة", "مطار المدينة"]],
  "dammam-airport": [["King Fahd International Airport", "Dammam airport", "Dammam Airport"], ["مطار الملك فهد الدولي", "مطار الملك فهد", "مطار الدمام"]],
  "taif-airport": [["Taif airport", "Taif Airport"], ["مطار الطائف"]],
  "alula-airport": [["AlUla International Airport", "AlUla's airport", "AlUla airport"], ["مطار العلا الدولي", "مطار العلا"]],
  "qassim-airport": [["Qassim airport", "Qassim Airport"], ["مطار القصيم"]],
  "al-ahsa-airport": [["Al Ahsa airport", "Al Ahsa Airport"], ["مطار الأحساء"]],
  "tabuk-airport": [["Prince Sultan bin Abdulaziz International Airport", "Tabuk airport", "Tabuk Airport"], ["مطار الأمير سلطان بن عبدالعزيز", "مطار تبوك"]],
  "yanbu-airport": [["Prince Abdul Mohsin bin Abdulaziz International Airport", "Yanbu airport", "Yanbu Airport"], ["مطار الأمير عبدالمحسن بن عبدالعزيز", "مطار ينبع"]],
};

/** Every phrase that may anchor a link to `path`. */
export function anchorsFor(path: string, l: Locale): string[] {
  const k = l === "ar" ? 1 : 0;
  const slug = path.split("/").pop() ?? "";
  if (path.startsWith(`${S}/airport-transfers/`) && AIRPORT[slug]) return AIRPORT[slug][k];
  const r = path.startsWith(`${S}/intercity-transfers/`) ? slug.match(/^(.+)-to-(.+)$/) : null;
  if (r && CITY[r[1]] && CITY[r[2]]) {
    const to = l === "ar" ? " إلى " : " to ";
    return CITY[r[1]][k].flatMap((a) => CITY[r[2]][k].map((b) => `${a}${to}${b}`));
  }
  return PHRASES[path]?.[k] ?? [];
}

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Whole-phrase match; letters may not touch either end, so an attached Arabic prefix never splits a word. */
function find(text: string, phrase: string): number {
  const m = new RegExp(`(?<![\\p{L}\\p{N}])${esc(phrase)}(?![\\p{L}\\p{N}])`, "u").exec(text);
  return m ? m.index : -1;
}

/**
 * "Riyadh or Dammam to Dubai" is not a mention of the Dammam to Dubai page alone, and "Jeddah to Makkah to Madinah" or
 * "Makkah to Madinah airport" names a different trip, so those matches are skipped.
 */
function misleading(text: string, at: number, phrase: string): boolean {
  if (!/ (to|إلى) /.test(phrase)) return false;
  const before = text.slice(0, at);
  const after = text.slice(at + phrase.length);
  return /(\b(or|and|to)|\/|أو|إلى|مطار)\s+$/u.test(before) || /^ (or|to|airport|Airport|أو|إلى)(?![\p{L}])/u.test(after);
}

/** Adds contextual links to a list of sections; returns new sections (the input is not mutated). */
export function linkSections(sections: Section[], targets: string[], self: string, l: Locale): Section[] {
  const used = new Set(sections.flatMap((s) => [...s.p, ...(s.list ?? [])]).flatMap(linkTargets));
  // Longest phrases first, so "Jeddah airport to Makkah" wins over "Jeddah airport".
  const cands = [...new Set(targets)]
    .filter((t) => t !== self && !used.has(t))
    .flatMap((t) => anchorsFor(t, l).map((phrase) => ({ t, phrase })))
    .sort((a, b) => b.phrase.length - a.phrase.length);
  let n = 0;
  const link = (text: string): string => {
    if (n >= MAX || linkTargets(text).length) return text;
    for (const { t, phrase } of cands) {
      if (used.has(t)) continue;
      const at = find(text, phrase);
      if (at < 0 || misleading(text, at, phrase)) continue;
      used.add(t);
      n += 1;
      return `${text.slice(0, at)}[${phrase}](${t})${text.slice(at + phrase.length)}`;
    }
    return text;
  };
  return sections.map((s) => ({ ...s, p: s.p.map(link), ...(s.list ? { list: s.list.map(link) } : {}) }));
}
