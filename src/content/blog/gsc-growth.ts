import type { Locale } from "@/i18n/routing";
import type { BlogCopy, BlogPost } from "./types";

/**
 * Guide changes from the 2026-11-24 Search Console pass (docs/seo-recovery-2026-11-24/REPORT.md).
 *  - The Madinah to AlUla guide is the only page with steady impressions (EN + AR, positions 8 to 10, no clicks), and its
 *    queries are all "how far / how many hours". Title, H1 and answer now lead with that number.
 *  - Six guides carried the same head term as the commercial page they should support; they now target the planning
 *    question (documents, timing, comparison), so the service page is the only one aimed at the booking query.
 */
const U = "2026-11-24";

type Patch = Partial<Pick<BlogCopy, "title" | "description" | "h1" | "answer" | "summary">> & { addFaqs?: BlogCopy["faqs"] };

export const guidePatches: Record<string, Record<Locale, Patch>> = {
  "madinah-to-alula-by-road-guide": {
    en: {
      title: "Madinah to AlUla Distance: 338 km, 3 h 40 min",
      description: "AlUla is about 338 km from Madinah by road, around 3 h 40 min on Route 328. See both routes, the best time to leave, rest stops, and car, bus or train options.",
      h1: "How far is AlUla from Madinah? Distance, time and the road",
      summary: "About 338 km and 3 hours 40 minutes by car. Both roads, when to leave and how to get there.",
      answer: "AlUla is about 338 km from Madinah by road, around 3 hours 40 minutes of driving without stops via Route 328 (Google Maps, checked November 2026). The longer road via Route 15 and Route 375 is about 390 km and 4 hours 14 minutes. Leave in the morning, plan a rest stop, and give the exact name of your AlUla hotel or resort, because AlUla is spread out.",
      addFaqs: [
        { q: "Is there a train from Madinah to AlUla?", a: "No. The Haramain High Speed Railway links Madinah with Jeddah and Makkah but does not run to AlUla, so the journey is made by road or air." },
        { q: "Is there a bus or a taxi from Madinah to AlUla?", a: "Check intercity bus operators for current timetables and stops. A city taxi may not accept a 338 km trip, so many families pre-book a private car with a driver that goes from hotel door to resort door." },
        { q: "How far is AlUla from Yanbu, Tabuk or Hail?", a: "By car on Google Maps: Yanbu about 362 km and 4 hours 43 minutes, Tabuk about 3 hours 12 minutes, and Hail about 428 km and 5 hours 28 minutes, all without stops." },
      ],
    },
    ar: {
      title: "كم تبعد العلا عن المدينة؟ 338 كم وقرابة 4 ساعات",
      description: "تبعد العلا عن المدينة المنورة نحو 338 كم، أي قرابة 3 ساعات و40 دقيقة بالسيارة عبر طريق 328. تعرّف على الطريقين وأفضل وقت للانطلاق والتوقفات وخيارات النقل.",
      h1: "كم تبعد العلا عن المدينة المنورة؟ المسافة والوقت والطريق",
      summary: "نحو 338 كم و3 ساعات و40 دقيقة بالسيارة. الطريقان وأفضل وقت للانطلاق وطرق الوصول.",
      answer: "تبعد العلا عن المدينة المنورة نحو 338 كم، أي قرابة 3 ساعات و40 دقيقة بالسيارة بلا توقف عبر طريق 328 (خرائط جوجل، نوفمبر 2026). أما الطريق الأطول عبر طريق 15 وطريق 375 فنحو 390 كم و4 ساعات و14 دقيقة. انطلق صباحًا، وخطط لتوقف للراحة، واذكر اسم فندقك أو منتجعك في العلا بدقة لأن العلا متباعدة الأطراف.",
      addFaqs: [
        { q: "من المدينة للعلا كم ساعة بالسيارة؟", a: "قرابة 3 ساعات و40 دقيقة عبر طريق 328 بلا توقف، ومع توقف للراحة احسب أربع ساعات إلى خمس." },
        { q: "هل يوجد قطار من المدينة إلى العلا؟", a: "لا. يربط قطار الحرمين السريع المدينة بجدة ومكة ولا يصل إلى العلا، فتكون الرحلة بالسيارة أو الطائرة." },
        { q: "كم تبعد العلا عن ينبع وتبوك وحائل؟", a: "بالسيارة على خرائط جوجل ودون توقف: ينبع نحو 362 كم و4 ساعات و43 دقيقة، وتبوك نحو 3 ساعات و12 دقيقة، وحائل نحو 428 كم و5 ساعات و28 دقيقة." },
      ],
    },
  },
  "private-airport-transfers-saudi-arabia": {
    en: {
      title: "Saudi Airport Arrivals: RUH, JED, MED and DMM",
      h1: "Arriving at a Saudi airport: what to plan at Riyadh, Jeddah, Madinah and Dammam",
      description: "Landing at RUH, JED, MED or DMM: terminals, usual onward roads, waiting time and the details a driver needs. An arrivals guide, airport by airport.",
    },
    ar: {
      title: "الوصول إلى مطارات السعودية: دليل كل مطار",
      h1: "الوصول إلى مطارات الرياض وجدة والمدينة والدمام: ماذا تخطط",
      description: "عند الوصول إلى مطار الرياض أو جدة أو المدينة أو الدمام: الصالات والطرق المعتادة ووقت الانتظار والتفاصيل التي يحتاجها السائق، مطارًا مطارًا.",
    },
  },
  "saudi-arabia-to-uae-private-transfer": {
    en: {
      title: "Driving Saudi to UAE: Batha Border Checklist",
      h1: "Crossing from Saudi Arabia to the UAE by road at Batha and Ghuwaifat",
    },
    ar: {
      title: "منفذ البطحاء إلى الإمارات: قائمة تحقق للعبور",
      h1: "العبور برًا من السعودية إلى الإمارات عبر البطحاء والغويفات",
    },
  },
  "saudi-arabia-to-qatar-private-transfer": {
    en: {
      title: "Salwa Border Crossing by Car: What to Expect",
      h1: "Crossing at Salwa: a road guide from Saudi Arabia to Qatar",
    },
    ar: {
      title: "منفذ سلوى بالسيارة: ماذا تتوقع عند العبور",
      h1: "العبور من منفذ سلوى: دليل الطريق من السعودية إلى قطر",
    },
  },
  "saudi-arabia-to-bahrain-private-transfer": {
    en: {
      title: "King Fahd Causeway by Car: Crossing Guide",
      h1: "Crossing the King Fahd Causeway by car: timing and paperwork",
    },
    ar: {
      title: "جسر الملك فهد بالسيارة: دليل العبور",
      h1: "عبور جسر الملك فهد بالسيارة: التوقيت والمستندات",
    },
  },
  "riyadh-to-dammam-private-transfer": {
    en: {
      title: "Riyadh to Dammam Business Day Trip: Plan It",
      h1: "Planning a Riyadh to Dammam and Al Khobar business day by road",
    },
    ar: {
      title: "رحلة عمل من الرياض إلى الدمام في يوم واحد",
      h1: "كيف تخطط لرحلة عمل برية من الرياض إلى الدمام والخبر",
    },
  },
  "private-chauffeur-service-saudi-arabia": {
    en: {
      title: "Planning a Riyadh Business Trip With a Driver",
      h1: "How to plan a Riyadh business trip around a car and driver",
    },
    ar: {
      title: "التخطيط لرحلة عمل في الرياض مع سائق",
      h1: "كيف تخطط لرحلة عمل في الرياض بسيارة مع سائق",
    },
  },
};

export function applyGuideGrowth(posts: BlogPost[]) {
  for (const [slug, byLocale] of Object.entries(guidePatches)) {
    const post = posts.find((p) => p.slug === slug);
    if (!post) throw new Error(`guidePatches: unknown guide ${slug}`);
    post.updated = U;
    const patched = (l: Locale): BlogCopy => {
      const { addFaqs = [], ...fields } = byLocale[l];
      return { ...post.copy[l], ...fields, faqs: [...post.copy[l].faqs, ...addFaqs] };
    };
    post.copy = { en: patched("en"), ar: patched("ar") };
  }
}
