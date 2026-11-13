import type { Locale } from "@/i18n/routing";

type Pair = Record<Locale, [from: string, to: string]>;
const p = (en: [string, string], ar: [string, string]): Pair => ({ en, ar });
const I = "services/intercity-transfers";

/**
 * Pickup/destination pre-filled in the enquiry form on route pages. Pre-filled values are only a
 * starting point: the customer can edit them, and direction can be reversed in the form text.
 */
export const routePrefill: Record<string, Pair> = {
  [`${I}/riyadh-to-doha`]: p(["Riyadh", "Doha"], ["الرياض", "الدوحة"]),
  [`${I}/riyadh-to-dubai`]: p(["Riyadh", "Dubai"], ["الرياض", "دبي"]),
  [`${I}/riyadh-to-manama`]: p(["Riyadh", "Manama, Bahrain"], ["الرياض", "المنامة، البحرين"]),
  [`${I}/riyadh-to-kuwait-city`]: p(["Riyadh", "Kuwait City"], ["الرياض", "مدينة الكويت"]),
  [`${I}/riyadh-to-dammam`]: p(["Riyadh", "Dammam"], ["الرياض", "الدمام"]),
  [`${I}/riyadh-to-jeddah`]: p(["Riyadh", "Jeddah"], ["الرياض", "جدة"]),
  [`${I}/riyadh-to-makkah`]: p(["Riyadh", "Makkah"], ["الرياض", "مكة المكرمة"]),
  [`${I}/riyadh-to-madinah`]: p(["Riyadh", "Madinah"], ["الرياض", "المدينة المنورة"]),
  [`${I}/riyadh-to-al-ahsa`]: p(["Riyadh", "Al Ahsa"], ["الرياض", "الأحساء"]),
  [`${I}/riyadh-to-alula`]: p(["Riyadh", "AlUla"], ["الرياض", "العلا"]),
  [`${I}/riyadh-to-taif`]: p(["Riyadh", "Taif"], ["الرياض", "الطائف"]),
  [`${I}/riyadh-to-buraydah`]: p(["Riyadh", "Buraydah, Al Qassim"], ["الرياض", "بريدة، القصيم"]),
  [`${I}/riyadh-to-jubail`]: p(["Riyadh", "Jubail"], ["الرياض", "الجبيل"]),
  [`${I}/riyadh-to-abha`]: p(["Riyadh", "Abha"], ["الرياض", "أبها"]),
  [`${I}/riyadh-to-tabuk`]: p(["Riyadh", "Tabuk"], ["الرياض", "تبوك"]),
  [`${I}/riyadh-to-hail`]: p(["Riyadh", "Hail"], ["الرياض", "حائل"]),
  [`${I}/riyadh-to-yanbu`]: p(["Riyadh", "Yanbu"], ["الرياض", "ينبع"]),
  [`${I}/riyadh-to-hafar-al-batin`]: p(["Riyadh", "Hafar Al Batin"], ["الرياض", "حفر الباطن"]),
  [`${I}/jeddah-to-makkah`]: p(["Jeddah", "Makkah"], ["جدة", "مكة المكرمة"]),
  [`${I}/jeddah-to-madinah`]: p(["Jeddah", "Madinah"], ["جدة", "المدينة المنورة"]),
  [`${I}/makkah-to-madinah`]: p(["Makkah", "Madinah"], ["مكة المكرمة", "المدينة المنورة"]),
  [`${I}/jeddah-to-taif`]: p(["Jeddah", "Taif"], ["جدة", "الطائف"]),
  [`${I}/jeddah-to-yanbu`]: p(["Jeddah", "Yanbu"], ["جدة", "ينبع"]),
  [`${I}/jeddah-to-alula`]: p(["Jeddah", "AlUla"], ["جدة", "العلا"]),
  [`${I}/madinah-to-alula`]: p(["Madinah", "AlUla"], ["المدينة المنورة", "العلا"]),
  [`${I}/makkah-to-taif`]: p(["Makkah", "Taif"], ["مكة المكرمة", "الطائف"]),
  [`${I}/dammam-to-bahrain`]: p(["Dammam", "Bahrain"], ["الدمام", "البحرين"]),
  [`${I}/dammam-to-al-ahsa`]: p(["Dammam", "Al Ahsa"], ["الدمام", "الأحساء"]),
  [`${I}/dammam-to-riyadh`]: p(["Dammam", "Riyadh"], ["الدمام", "الرياض"]),
  [`${I}/jeddah-to-riyadh`]: p(["Jeddah", "Riyadh"], ["جدة", "الرياض"]),
  [`${I}/riyadh-to-al-khobar`]: p(["Riyadh", "Al Khobar"], ["الرياض", "الخبر"]),
  [`${I}/dammam-to-doha`]: p(["Dammam", "Doha"], ["الدمام", "الدوحة"]),
  [`${I}/dammam-to-dubai`]: p(["Dammam", "Dubai"], ["الدمام", "دبي"]),
  [`${I}/riyadh-to-abu-dhabi`]: p(["Riyadh", "Abu Dhabi"], ["الرياض", "أبوظبي"]),
  [`${I}/madinah-to-makkah`]: p(["Madinah", "Makkah"], ["المدينة المنورة", "مكة المكرمة"]),
  [`${I}/taif-to-makkah`]: p(["Taif", "Makkah"], ["الطائف", "مكة المكرمة"]),
  [`${I}/alula-to-riyadh`]: p(["AlUla", "Riyadh"], ["العلا", "الرياض"]),
  [`${I}/alula-to-dammam`]: p(["AlUla", "Dammam"], ["العلا", "الدمام"]),
  [`${I}/dammam-to-jubail`]: p(["Dammam", "Jubail"], ["الدمام", "الجبيل"]),
  "services/umrah-transport/jeddah-airport-to-makkah": p(["Jeddah Airport (JED)", "Makkah"], ["مطار جدة (JED)", "مكة المكرمة"]),
};
