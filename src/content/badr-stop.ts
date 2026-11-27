import type { Locale } from "@/i18n/routing";
import type { ServicePage } from "./types";

/**
 * Makkah to Madinah with a stop at Badr (master brief 7D, 2026-11-27).
 * Google Maps, 27 Nov 2026: Masjid al-Haram to Badr about 322 km / 3 h 22 min; Badr to the Prophet's Mosque about
 * 153 km / 1 h 44 min via Route 60; direct Makkah to Madinah about 436 km / 4 h 24 min.
 * (The Haramain station pages live in ./station-pages.ts.)
 */
const PATH = "services/intercity-transfers/makkah-to-madinah";

const badr: Record<Locale, { h: string; p: string[] }> = {
  en: {
    h: "Makkah to Madinah with a stop at Badr",
    p: [
      "Some pilgrims want to see Badr, the site of the first great battle of Islam, on the way to Madinah. It is not on the direct road: Google Maps measures about 322 km from the Masjid al-Haram to Badr, around 3 hours 22 minutes, and about 153 km from Badr to the Prophet's Mosque on Route 60, around 1 hour 44 minutes. That is about 475 km in all, roughly 39 km and 45 minutes of driving more than the direct road of about 436 km, before the time you spend at Badr. Ask for it in your enquiry and say how long you want to stop, and the day is planned around it. The Badr stop also works on the [Madinah to Yanbu road](services/intercity-transfers/madinah-to-yanbu).",
    ],
  },
  ar: {
    h: "من مكة إلى المدينة مع التوقف في بدر",
    p: [
      "يرغب بعض المعتمرين في زيارة بدر، موقع أول معركة كبرى في الإسلام، في الطريق إلى المدينة. وهي ليست على الطريق المباشر: تقدّر خرائط جوجل المسافة من المسجد الحرام إلى بدر بنحو 322 كم وقرابة 3 ساعات و22 دقيقة، ومن بدر إلى المسجد النبوي عبر طريق 60 بنحو 153 كم وقرابة ساعة و44 دقيقة. أي نحو 475 كم إجمالًا، بزيادة نحو 39 كم و45 دقيقة قيادة على الطريق المباشر البالغ نحو 436 كم، دون وقت الزيارة نفسها. اطلب ذلك في طلبك واذكر المدة التي تريد التوقف فيها، ويُخطَّط اليوم على أساسها. والتوقف في بدر ممكن أيضًا على [طريق المدينة إلى ينبع](services/intercity-transfers/madinah-to-yanbu).",
    ],
  },
};
const badrFaq: Record<Locale, { q: string; a: string }> = {
  en: { q: "Can we visit Badr on the way from Makkah to Madinah?", a: "Yes, if you ask for it. The road through Badr is about 475 km instead of about 436 km, roughly 45 minutes more driving, plus the time of your visit." },
  ar: { q: "هل يمكن زيارة بدر في الطريق من مكة إلى المدينة؟", a: "نعم إن طلبت ذلك. الطريق عبر بدر نحو 475 كم بدل نحو 436 كم، أي قرابة 45 دقيقة قيادة إضافية، إضافة إلى وقت زيارتك." },
};

export function applyBadrStop(pages: ServicePage[]) {
  const mm = pages.find((p) => p.path === PATH);
  if (!mm) throw new Error("badr-stop: makkah-to-madinah not found");
  for (const l of ["en", "ar"] as Locale[]) {
    mm.copy[l].sections = [...mm.copy[l].sections, badr[l]];
    mm.copy[l].faqs = [...mm.copy[l].faqs, badrFaq[l]];
  }
  mm.updated = "2026-11-27";
}
