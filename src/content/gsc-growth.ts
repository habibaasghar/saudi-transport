import type { Locale } from "@/i18n/routing";
import type { Copy, Section, ServicePage } from "./types";

/**
 * Search Console growth pass, 2026-11-24. Evidence: GSC exports of 2026-11-24 (28 days and last 24 hours) plus Google
 * Saudi Arabia autocomplete (EN + AR). See docs/seo-recovery-2026-11-24/REPORT.md.
 *
 *  1. AlUla cluster. Each distance query gets one owner: Madinah distance -> the road guide; Jeddah and Riyadh
 *     distance -> their own route pages; "how far is AlUla from ..." overview, taxi and driver -> tourism-transport/alula.
 *  2. Direction split: an A-to-B page stops targeting B-to-A once the reverse page exists.
 *  3. "Airport transfers Saudi Arabia" -> the airport hub; ليموزين + city -> the Arabic city pages.
 *
 * Driving figures: Google Maps, usual traffic, no stops, checked 2026-11-24 to AlUla Old Town: Yanbu 362 km / 4 h 43
 * (Route 328); Tabuk 3 h 12; Al Wajh 2 h 57; Umluj 3 h 59; Makkah (Masjid al-Haram) 8 h 09; AlUla airport 34 min;
 * Madinah 3 h 40. Madinah 338 km, Jeddah airport 665 / 724 km, Riyadh 1,041 km and Hail 428 km / 5 h 28 were verified
 * on 2026-11-18 to 2026-11-23. A distance is only stated where Google Maps showed one.
 */
const U = "2026-11-24";
const S = "services";
const I = `${S}/intercity-transfers`;
const A = `${S}/airport-transfers`;
const C = `${S}/city-transport`;
const T = `${S}/tourism-transport`;

type Patch = Partial<Pick<Copy, "title" | "description" | "h1" | "eyebrow" | "answer" | "summary">> & {
  /** Exact substring replacements in the answer, sections and FAQ answers. Every one must match. */
  replace?: [string, string][];
  /** Replace the section at this index. */
  swap?: Record<number, Section>;
  addSections?: Section[];
  addFaqs?: Copy["faqs"];
  addTable?: NonNullable<Copy["tables"]>[number];
};
type Entry = { related?: string[]; en: Patch; ar: Patch };

export const gscPatches: Record<string, Entry> = {
  /* AlUla cluster */
  [`${I}/madinah-to-alula`]: {
    en: {
      title: "Madinah to AlUla Private Car with Driver",
      description: "Book a private car with a driver from a Madinah hotel or MED airport to AlUla: 338 km, about 3 h 40 min. Sedan, GMC Yukon or Staria. Quote on WhatsApp.",
      eyebrow: "Intercity · Madinah → AlUla",
      replace: [
        [", north to AlUla, and the reverse.", ", north to your hotel or resort in AlUla."],
        ["We do not publish a distance or time here; the quotation covers the schedule.", "For the road itself, the stops and the best time to leave, read the [Madinah to AlUla road guide](blog/madinah-to-alula-by-road-guide)."],
      ],
      addFaqs: [
        { q: "Is there a taxi from Madinah to AlUla?", a: "City taxis and ride-hailing apps are built for short trips, so a 338 km journey depends on finding a driver willing to make it. RideSaudi does not run metered taxis; it arranges a pre-booked private car with a driver, with the price agreed on WhatsApp before you travel." },
        { q: "Can I go from Madinah to AlUla by private car and come back another day?", a: "Yes. Send both dates in one enquiry. The return from your AlUla resort to Madinah is planned and quoted together with the outbound drive." },
      ],
    },
    ar: {
      title: "توصيل من المدينة إلى العلا بسيارة مع سائق",
      description: "احجز سيارة خاصة مع سائق من فندقك في المدينة المنورة أو من مطارها إلى العلا: 338 كم ونحو 3 ساعات و40 دقيقة. سيدان أو جمس أو ستاريا، والسعر على واتساب.",
      eyebrow: "بين المدن · المدينة ← العلا",
      replace: [
        [" شمالًا إلى العلا، وبالعكس.", " شمالًا إلى فندقك أو منتجعك في العلا."],
        ["ولا ننشر هنا مسافة أو زمنًا؛ فعرض السعر يغطي الجدول.", "ولتفاصيل الطريق والتوقفات وأفضل وقت للانطلاق اقرأ [دليل الطريق من المدينة إلى العلا](blog/madinah-to-alula-by-road-guide)."],
      ],
      addFaqs: [
        { q: "هل يوجد تاكسي أو ليموزين من المدينة إلى العلا؟", a: "تاكسي المدينة وتطبيقات التوصيل مهيأة للمشاوير القصيرة، ورحلة 338 كم تتوقف على وجود سائق يقبلها. لا تشغّل RideSaudi سيارات أجرة بالعداد، بل ترتب سيارة خاصة مع سائق بحجز مسبق، ويُتفق على السعر عبر واتساب قبل السفر." },
        { q: "هل يمكنني السفر من المدينة إلى العلا والعودة في يوم آخر؟", a: "نعم. أرسل التاريخين في طلب واحد، فتُخطَّط العودة من منتجعك في العلا إلى المدينة وتُسعَّر مع رحلة الذهاب." },
      ],
    },
  },
  [`${I}/jeddah-to-alula`]: {
    en: {
      title: "Jeddah to AlUla by Car: 665 km with a Driver",
      description: "Jeddah to AlUla by road is about 665 km and 7 h 30 min. Book a private car with a driver from Jeddah or its airport, with stops or a night in Madinah.",
      h1: "Jeddah to AlUla by car: distance, time and a private driver",
      eyebrow: "Intercity · Jeddah → AlUla",
      answer: "Jeddah to AlUla by car is about 665 km by the coast and Route 328, or about 724 km through Madinah, and both take around 7 hours 30 minutes of driving without stops (Google Maps, from Jeddah airport, November 2026). A private car with a driver collects you from Jeddah or King Abdulaziz Airport and can split the journey with a night in Madinah or Yanbu. RideSaudi quotes it individually.",
      summary: "Private car from Jeddah or its airport to AlUla, about 665 km, with stops or an overnight.",
      addFaqs: [
        { q: "How many hours is Jeddah to AlUla by car?", a: "About 7 hours 30 minutes of driving on either road. With fuel, meal and prayer stops, allow most of a day." },
        { q: "How do I book the drive back to Jeddah?", a: "Add the return date to the same enquiry, with your AlUla resort and your Jeddah hotel or flight, and both directions are quoted together." },
      ],
    },
    ar: {
      title: "من جدة إلى العلا كم ساعة؟ 665 كم مع سائق",
      description: "المسافة من جدة إلى العلا نحو 665 كم و7 ساعات ونصف بالسيارة. احجز سيارة خاصة مع سائق من جدة أو مطارها، مع توقفات أو مبيت في المدينة المنورة.",
      h1: "من جدة إلى العلا بالسيارة: كم ساعة، وسيارة خاصة مع سائق",
      eyebrow: "بين المدن · جدة ← العلا",
      answer: "المسافة من جدة إلى العلا بالسيارة نحو 665 كم عبر الساحل والطريق 328، أو نحو 724 كم عبر المدينة المنورة، وكلاهما نحو 7 ساعات ونصف قيادة دون توقف (خرائط جوجل، من مطار جدة، نوفمبر 2026). تستلمك السيارة الخاصة مع سائق من جدة أو من مطار الملك عبدالعزيز، ويمكن تقسيم الرحلة بمبيت في المدينة أو ينبع. وتُسعَّر كل رحلة على حدة.",
      summary: "سيارة خاصة من جدة أو مطارها إلى العلا، نحو 665 كم، مع توقفات أو مبيت.",
      addFaqs: [
        { q: "من جدة إلى العلا كم ساعة بالسيارة؟", a: "نحو 7 ساعات ونصف قيادة على أي من الطريقين. ومع توقفات الوقود والطعام والصلاة احسب معظم اليوم." },
        { q: "كيف أحجز العودة إلى جدة من العلا؟", a: "أضف تاريخ العودة إلى الطلب نفسه مع منتجعك في العلا وفندقك أو رحلتك في جدة، فيُسعَّر الاتجاهان معًا." },
      ],
    },
  },
  [`${I}/riyadh-to-alula`]: {
    en: {
      title: "Riyadh to AlUla by Car: 1,041 km with Driver",
      description: "Riyadh to AlUla by road is about 1,041 km and 11 h 14 min. Book a private car with a driver, in one long day or split with a night in Hail.",
      h1: "Riyadh to AlUla by car: distance, hours and a private driver",
      eyebrow: "Intercity · Riyadh → AlUla",
      answer: "Riyadh to AlUla by car is about 1,041 km, around 11 hours 14 minutes of driving without stops via Route 65 and Route 70 (Google Maps, November 2026), so many travellers break the drive in Hail. A private car with a driver collects you from your Riyadh address and takes you to your AlUla resort with all your luggage. RideSaudi quotes each journey individually.",
      swap: { 2: { h: "Planning the way home from AlUla", p: ["The return has its own page: [AlUla to Riyadh](services/intercity-transfers/alula-to-riyadh) starts from your resort and works around check-out time. If you know both dates, send them in one enquiry so the two drives are quoted together."] } },
    },
    ar: {
      title: "من الرياض إلى العلا كم ساعة؟ سيارة مع سائق",
      description: "المسافة من الرياض إلى العلا نحو 1,041 كم و11 ساعة و14 دقيقة بالسيارة. احجز سيارة خاصة مع سائق في يوم واحد أو مع مبيت في حائل.",
      h1: "من الرياض إلى العلا بالسيارة: كم ساعة، وسيارة خاصة مع سائق",
      eyebrow: "بين المدن · الرياض ← العلا",
      answer: "المسافة من الرياض إلى العلا بالسيارة نحو 1,041 كم، أي نحو 11 ساعة و14 دقيقة قيادة دون توقف عبر الطريقين 65 و70 (خرائط جوجل، نوفمبر 2026)، ولذلك يقسم كثيرون الرحلة بالمبيت في حائل. تستلمك السيارة الخاصة مع سائق من عنوانك في الرياض وتوصلك إلى منتجعك في العلا مع كل حقائبك. وتُسعَّر كل رحلة على حدة.",
      swap: { 2: { h: "التخطيط لطريق العودة من العلا", p: ["لرحلة العودة صفحة مستقلة: [من العلا إلى الرياض](services/intercity-transfers/alula-to-riyadh) وتبدأ من منتجعك وفق موعد المغادرة. وإن عرفت التاريخين فأرسلهما في طلب واحد لتُسعَّر الرحلتان معًا."] } },
    },
  },
  [`${T}/alula`]: {
    related: [`${I}/madinah-to-alula`, `${I}/jeddah-to-alula`, `${I}/riyadh-to-alula`, `${I}/alula-to-madinah`],
    en: {
      title: "AlUla Private Driver & Car: Airport to Hegra",
      description: "Private car with a driver in AlUla for the airport, resorts, Hegra and the Old Town, plus how far AlUla is from Madinah, Jeddah, Tabuk, Yanbu and Riyadh.",
      h1: "AlUla private driver and car for the airport, resorts and sites",
      addTable: {
        after: 3,
        h: "How far is AlUla from other Saudi cities by road?",
        head: ["From", "To AlUla Old Town by car (Google Maps, usual traffic, no stops, November 2026)"],
        rows: [
          ["AlUla airport (ULH)", "About 34 min"],
          ["Al Wajh", "About 2 h 57 min"],
          ["Tabuk", "About 3 h 12 min"],
          ["Madinah", "About 338 km, 3 h 40 min"],
          ["Umluj", "About 3 h 59 min"],
          ["Yanbu", "About 362 km, 4 h 43 min"],
          ["Hail", "About 428 km, 5 h 28 min"],
          ["Jeddah airport", "About 665 km, 7 h 30 min"],
          ["Makkah", "About 8 h 09 min"],
          ["Riyadh", "About 1,041 km, 11 h 14 min"],
        ],
      },
      addSections: [
        {
          h: "Which AlUla journey should you book?",
          p: [
            "Landing at AlUla: book the [AlUla airport transfer](services/airport-transfers/alula-airport) to your resort. Coming by road: choose your starting point, [from Madinah](services/intercity-transfers/madinah-to-alula), [from Jeddah](services/intercity-transfers/jeddah-to-alula) or [from Riyadh](services/intercity-transfers/riyadh-to-alula). Staying a few days: ask for a car and driver by the day to move between the resort, the Old Town and your Hegra meeting point.",
            "Leaving AlUla, the usual next stop is [Madinah](services/intercity-transfers/alula-to-madinah). If you are comparing the roads and the timing first, start with the [Madinah to AlUla road guide](blog/madinah-to-alula-by-road-guide).",
          ],
        },
      ],
      addFaqs: [
        { q: "Can I book an AlUla taxi on WhatsApp?", a: "RideSaudi is not a metered taxi company. Send your pickup, destination, date and passengers on WhatsApp and you receive a quotation for a pre-booked private car with a driver in AlUla, subject to availability on your date." },
        { q: "Can I hire a private driver in AlUla for the day?", a: "You can request it. Give your resort, the sites you plan to visit and your ticket times, and the quotation states the hours and the vehicle." },
      ],
    },
    ar: {
      title: "سيارة مع سائق في العلا: المطار والحِجر",
      description: "سيارة خاصة مع سائق في العلا للمطار والمنتجعات والحِجر والبلدة القديمة، وكم تبعد العلا عن المدينة وجدة وتبوك وينبع وحائل والرياض بالسيارة.",
      h1: "سيارة مع سائق في العلا للمطار والمنتجعات والمواقع",
      addTable: {
        after: 3,
        h: "كم تبعد العلا عن مدن السعودية بالسيارة؟",
        head: ["من", "إلى بلدة العلا القديمة بالسيارة (خرائط جوجل، حركة معتادة دون توقف، نوفمبر 2026)"],
        rows: [
          ["مطار العلا", "نحو 34 دقيقة"],
          ["الوجه", "نحو ساعتين و57 دقيقة"],
          ["تبوك", "نحو 3 ساعات و12 دقيقة"],
          ["المدينة المنورة", "نحو 338 كم، 3 ساعات و40 دقيقة"],
          ["أملج", "نحو 3 ساعات و59 دقيقة"],
          ["ينبع", "نحو 362 كم، 4 ساعات و43 دقيقة"],
          ["حائل", "نحو 428 كم، 5 ساعات و28 دقيقة"],
          ["مطار جدة", "نحو 665 كم، 7 ساعات ونصف"],
          ["مكة المكرمة", "نحو 8 ساعات و9 دقائق"],
          ["الرياض", "نحو 1,041 كم، 11 ساعة و14 دقيقة"],
        ],
      },
      addSections: [
        {
          h: "أي رحلة إلى العلا تحجز؟",
          p: [
            "إن وصلت جوًّا فاحجز [التوصيل من مطار العلا](services/airport-transfers/alula-airport) إلى منتجعك. وإن جئت برًّا فاختر نقطة انطلاقك: [من المدينة المنورة](services/intercity-transfers/madinah-to-alula) أو [من جدة](services/intercity-transfers/jeddah-to-alula) أو [من الرياض](services/intercity-transfers/riyadh-to-alula). وإن كنت ستقيم أيامًا فاطلب سيارة مع سائق باليوم للتنقل بين المنتجع والبلدة القديمة ونقطة لقاء جولة الحِجر.",
            "وعند المغادرة تكون الوجهة المعتادة [المدينة المنورة](services/intercity-transfers/alula-to-madinah). وإن أردت مقارنة الطرق والتوقيت أولًا فابدأ من [دليل الطريق من المدينة إلى العلا](blog/madinah-to-alula-by-road-guide).",
          ],
        },
      ],
      addFaqs: [
        { q: "هل يمكنني طلب تاكسي في العلا عبر واتساب؟", a: "RideSaudi ليست شركة سيارات أجرة بالعداد. أرسل نقطة الانطلاق والوجهة والتاريخ وعدد الركاب عبر واتساب ليصلك عرض سعر لسيارة خاصة مع سائق في العلا بحجز مسبق، بحسب التوفر في تاريخك." },
        { q: "هل يمكنني حجز سائق خاص في العلا ليوم كامل؟", a: "يمكنك طلب ذلك. اذكر منتجعك والمواقع التي تنوي زيارتها ومواعيد تذاكرك، ويوضح عرض السعر الساعات والمركبة." },
      ],
    },
  },

  /* Airport hub: owns "airport transfers saudi arabia" */
  [A]: {
    en: {
      title: "Airport Transfers in Saudi Arabia: Private Car",
      description: "Airport transfers in Saudi Arabia by private car with a driver: Riyadh, Jeddah, Madinah, Dammam, Taif, AlUla, Qassim and Al Ahsa. Send your flight for a quote.",
      h1: "Airport transfers in Saudi Arabia by private car with a driver",
      swap: {
        2: {
          h: "Which Saudi airport are you using?",
          p: ["Each airport has its own page, because the onward roads, hotel areas and things to plan are different. If yours is not listed, send an enquiry and we will tell you whether it can be arranged."],
          list: [
            "Riyadh, King Khalid International (RUH): [Riyadh airport transfer](services/airport-transfers/riyadh-airport)",
            "Jeddah, King Abdulaziz International (JED): [Jeddah airport transfer](services/airport-transfers/jeddah-airport), or straight to your hotel with [Jeddah airport to Makkah](services/umrah-transport/jeddah-airport-to-makkah)",
            "Madinah, Prince Mohammad bin Abdulaziz (MED): [Madinah airport transfer](services/airport-transfers/madinah-airport)",
            "Dammam, King Fahd International (DMM): [Dammam airport transfer](services/airport-transfers/dammam-airport), also used for [Dammam and Al Khobar to Bahrain](services/intercity-transfers/dammam-to-bahrain)",
            "Taif (TIF): [Taif airport transfer](services/airport-transfers/taif-airport)",
            "AlUla (ULH): [AlUla airport transfer](services/airport-transfers/alula-airport)",
            "Qassim (ELQ) for Buraydah and Unayzah: [Qassim airport transfer](services/airport-transfers/qassim-airport)",
            "Al Ahsa (HOF): [Al Ahsa airport transfer](services/airport-transfers/al-ahsa-airport)",
          ],
        },
      },
      addFaqs: [{ q: "Can an airport transfer in Saudi Arabia go to another city?", a: "Yes, you can request it. Common examples are Jeddah airport to Makkah or Madinah, Riyadh airport to Dammam or Qassim, and Dammam airport to Bahrain. Enter the final hotel or address as the destination and the whole journey is quoted as one private car." }],
    },
    ar: {
      title: "توصيل المطار في السعودية بسيارة خاصة مع سائق",
      description: "توصيل من وإلى مطارات السعودية بسيارة خاصة مع سائق: الرياض وجدة والمدينة والدمام والطائف والعلا والقصيم والأحساء. أرسل رقم رحلتك لعرض سعر.",
      h1: "توصيل المطار في السعودية بسيارة خاصة مع سائق",
      swap: {
        2: {
          h: "ما المطار الذي تصل إليه أو تغادر منه؟",
          p: ["لكل مطار صفحة مستقلة لأن طرق المتابعة وأحياء الفنادق وما ينبغي التخطيط له تختلف. وإن لم يكن مطارك مذكورًا فأرسل طلبك وسنخبرك إن كان بالإمكان ترتيب الرحلة."],
          list: [
            "الرياض، مطار الملك خالد الدولي: [التوصيل من مطار الرياض](services/airport-transfers/riyadh-airport)",
            "جدة، مطار الملك عبدالعزيز الدولي: [التوصيل من مطار جدة](services/airport-transfers/jeddah-airport)، أو إلى فندقك مباشرة عبر [مطار جدة إلى مكة](services/umrah-transport/jeddah-airport-to-makkah)",
            "المدينة المنورة، مطار الأمير محمد بن عبدالعزيز: [التوصيل من مطار المدينة](services/airport-transfers/madinah-airport)",
            "الدمام، مطار الملك فهد الدولي: [التوصيل من مطار الدمام](services/airport-transfers/dammam-airport)، ومنه أيضًا [من الدمام والخبر إلى البحرين](services/intercity-transfers/dammam-to-bahrain)",
            "الطائف: [التوصيل من مطار الطائف](services/airport-transfers/taif-airport)",
            "العلا: [التوصيل من مطار العلا](services/airport-transfers/alula-airport)",
            "القصيم لبريدة وعنيزة: [التوصيل من مطار القصيم](services/airport-transfers/qassim-airport)",
            "الأحساء: [التوصيل من مطار الأحساء](services/airport-transfers/al-ahsa-airport)",
          ],
        },
      },
      addFaqs: [{ q: "هل يمكن أن يكون التوصيل من المطار إلى مدينة أخرى؟", a: "نعم، يمكنك طلب ذلك. من الأمثلة الشائعة مطار جدة إلى مكة أو المدينة، ومطار الرياض إلى الدمام أو القصيم، ومطار الدمام إلى البحرين. اكتب الفندق أو العنوان النهائي وجهةً لك فتُسعَّر الرحلة كلها بسيارة خاصة واحدة." }],
    },
  },

  /* City pages: "limousine" is the everyday Saudi word for a hired car with a driver */
  [`${C}/riyadh`]: {
    en: {
      title: "Riyadh Private Car & Limousine with Driver",
      addFaqs: [{ q: "Is this a limousine service in Riyadh?", a: "In Saudi Arabia 'limousine' usually means a hired car with a driver, and that is what you can request here: a sedan, GMC Yukon or Hyundai Staria for Riyadh airport, meetings or the day. Stretch limousines for parties are not offered." }],
    },
    ar: {
      title: "ليموزين الرياض: سيارة خاصة مع سائق",
      h1: "ليموزين الرياض: سيارة خاصة مع سائق للمطار والأعمال",
      addFaqs: [{ q: "هل هذه خدمة ليموزين في الرياض؟", a: "الليموزين في الاستعمال السعودي سيارة مع سائق بحجز مسبق، وهذا ما تطلبه هنا: سيدان أو جمس يوكن أو هيونداي ستاريا لمطار الملك خالد أو الاجتماعات أو ليوم كامل. ولا نوفر الليموزين الطويل للحفلات." }],
    },
  },
  [`${C}/dammam`]: {
    en: { addFaqs: [{ q: "Can I book a limousine from Dammam to Riyadh or Bahrain?", a: "You can request a private car with a driver, which is what limousine means locally, from Dammam to Riyadh or over the causeway to Bahrain. For Bahrain, the vehicle's and driver's permission to cross is confirmed in the quotation." }] },
    ar: {
      title: "ليموزين الدمام: سيارة خاصة مع سائق",
      h1: "ليموزين الدمام والمنطقة الشرقية: سيارة خاصة مع سائق",
      addFaqs: [{ q: "هل يمكنني حجز ليموزين من الدمام إلى الرياض أو البحرين؟", a: "يمكنك طلب سيارة خاصة مع سائق من الدمام إلى الرياض أو عبر الجسر إلى البحرين. وفي رحلة البحرين يُؤكَّد في عرض السعر تصريح عبور المركبة والسائق." }],
    },
  },
  [`${C}/al-khobar`]: {
    en: {},
    ar: {
      title: "ليموزين الخبر: سيارة خاصة مع سائق",
      h1: "ليموزين الخبر: سيارة خاصة مع سائق بين الكورنيش والجسر",
      addFaqs: [{ q: "هل يتوفر ليموزين في الخبر لمطار الدمام أو الكورنيش؟", a: "يمكنك طلب سيارة مع سائق من الخبر إلى مطار الملك فهد في الدمام، أو لعدة ساعات بين الكورنيش والفنادق ومقار العمل. ويؤكد عرض السعر المركبة المتاحة في موعدك." }],
    },
  },
  [`${A}/riyadh-airport`]: { en: {}, ar: { title: "توصيل وليموزين مطار الرياض بسيارة خاصة" } },
  [`${A}/dammam-airport`]: { en: {}, ar: { title: "توصيل وليموزين مطار الدمام بسيارة خاصة" } },
  [`${A}/madinah-airport`]: { en: {}, ar: { title: "توصيل وليموزين مطار المدينة المنورة" } },

  /* Cross-border city pairs: Arabic titles in the words people type (توصيل من … إلى …) */
  [`${I}/riyadh-to-doha`]: { en: {}, ar: { title: "توصيل من الرياض إلى قطر والدوحة بسيارة خاصة" } },
  [`${I}/riyadh-to-dubai`]: { en: {}, ar: { title: "توصيل من الرياض إلى دبي بسيارة خاصة مع سائق" } },
  [`${I}/riyadh-to-kuwait-city`]: { en: {}, ar: { title: "توصيل ركاب من الرياض إلى الكويت بسيارة خاصة" } },
  [`${I}/dammam-to-bahrain`]: { en: {}, ar: { title: "توصيل من الدمام والخبر إلى البحرين مع سائق" } },

  /* Titles naming an unconfirmed vehicle, both directions, or the sister brand's "taxi" intent */
  [`${I}/abha-to-riyadh`]: {
    en: { title: "Abha to Riyadh Private Car: GMC or Staria" },
    ar: { title: "توصيل من أبها إلى الرياض: جمس أو ستاريا" },
  },
  [`${I}/alula-to-dammam`]: {
    en: { title: "AlUla to Dammam Private Car with Driver", eyebrow: "Intercity · AlUla → Eastern Province" },
    ar: { title: "توصيل من العلا إلى الدمام بسيارة خاصة مع سائق", eyebrow: "بين المدن · العلا ← المنطقة الشرقية" },
  },
  [`${S}/umrah-transport`]: {
    en: {
      title: "Private Umrah Transport in Saudi Arabia",
      h1: "Private Umrah transport by car, planned in advance",
      description: "Private Umrah transport with a driver: airport to Makkah, Makkah to Madinah and back, by sedan, GMC Yukon or Staria. For families, elders and groups.",
    },
    ar: {
      title: "توصيل خاص للمعتمرين بسيارة مع سائق",
      h1: "توصيل خاص للعمرة بسيارة مع سائق، مخطَّط له مسبقًا",
      description: "توصيل خاص للعمرة مع سائق: من المطار إلى مكة المكرمة، ومن مكة إلى المدينة المنورة والعكس، بسيدان أو جمس أو ستاريا. للعائلات وكبار السن والمجموعات.",
    },
  },

  /* Direction split (reverse page exists) */
  [`${I}/riyadh-to-abha`]: {
    en: {
      description: "Private car with a driver from Riyadh to Abha and the Asir highlands. Plan the long road journey, the stops and the luggage, and get a RideSaudi quotation.",
      replace: [[", in the Asir highlands of south-west Saudi Arabia, and the same in reverse.", ", in the Asir highlands of south-west Saudi Arabia."]],
      swap: { 2: { h: "Coming home from Abha", p: ["The drive back has its own page, [Abha to Riyadh](services/intercity-transfers/abha-to-riyadh), planned from your Asir hotel. Send both dates in one enquiry if you know them."] } },
    },
    ar: {
      description: "سيارة خاصة مع سائق من الرياض إلى أبها ومرتفعات عسير. خطط لرحلتك البرية الطويلة وتوقفاتها وأمتعتها واستلم عرض سعر من RideSaudi.",
      replace: [[" في مرتفعات عسير جنوب غرب المملكة، والعكس.", " في مرتفعات عسير جنوب غرب المملكة."]],
      swap: { 2: { h: "العودة من أبها", p: ["لطريق العودة صفحة مستقلة هي [من أبها إلى الرياض](services/intercity-transfers/abha-to-riyadh)، وتُخطَّط من فندقك في عسير. وأرسل التاريخين في طلب واحد إن عرفتهما."] } },
    },
  },
  [`${I}/riyadh-to-madinah`]: {
    en: { replace: [["from the capital to Madinah, in either direction.", "from the capital to Madinah."]] },
    ar: { replace: [["من العاصمة إلى المدينة المنورة بالاتجاهين.", "من العاصمة إلى المدينة المنورة."]] },
  },
  [`${I}/jeddah-to-yanbu`]: {
    en: { replace: [["between Jeddah, or King Abdulaziz Airport, and Yanbu, and back.", "from Jeddah, or King Abdulaziz Airport, to Yanbu."]] },
    ar: { replace: [["بين جدة أو مطار الملك عبدالعزيز وينبع، وبالعكس.", "من جدة أو مطار الملك عبدالعزيز إلى ينبع."]] },
  },
  [`${I}/makkah-to-taif`]: {
    en: { replace: [["into the Sarawat mountains to Taif, and back.", "into the Sarawat mountains to Taif."]] },
    ar: { replace: [["إلى جبال السروات حتى الطائف، وبالعكس.", "إلى جبال السروات حتى الطائف."]] },
  },
  [`${I}/jeddah-to-makkah`]: {
    en: { replace: [["to your destination in Makkah, and back when you need it.", "to your destination in Makkah."]] },
    ar: { replace: [["إلى وجهتك في مكة، مع العودة متى احتجت.", "إلى وجهتك في مكة."]] },
  },
};

export function applyGscGrowth(pages: ServicePage[]) {
  const byPath = new Map(pages.map((p) => [p.path, p]));
  for (const [path, entry] of Object.entries(gscPatches)) {
    const page = byPath.get(path);
    if (!page) throw new Error(`gscPatches: unknown page ${path}`);
    page.updated = U;
    if (entry.related) page.related = [...page.related, ...entry.related];
    for (const l of ["en", "ar"] as Locale[]) {
      const { replace = [], swap = {}, addSections = [], addFaqs = [], addTable, ...fields } = entry[l];
      const c = page.copy[l];
      Object.assign(c, fields);
      for (const [from, to] of replace) {
        let hit = false;
        const sub = (s: string) => {
          if (!s.includes(from)) return s;
          hit = true;
          return s.replace(from, to);
        };
        c.answer = sub(c.answer);
        c.sections = c.sections.map((s) => ({ ...s, p: s.p.map(sub) }));
        c.faqs = c.faqs.map((f) => ({ ...f, a: sub(f.a) }));
        if (!hit) throw new Error(`gscPatches: text not found on ${path}/${l}: ${from}`);
      }
      for (const [i, s] of Object.entries(swap)) {
        if (!c.sections[Number(i)]) throw new Error(`gscPatches: no section ${i} on ${path}/${l}`);
        c.sections = c.sections.map((x, k) => (k === Number(i) ? s : x));
      }
      c.sections = [...c.sections, ...addSections];
      c.faqs = [...c.faqs, ...addFaqs];
      if (addTable) c.tables = [...(c.tables ?? []), addTable];
    }
  }
  // "⇄" says the page covers both directions; once a reverse page exists each page must be one-way.
  for (const p of pages) {
    const m = p.path.match(/^(.*\/)([a-z-]+)-to-([a-z-]+)$/);
    if (!m || !byPath.has(`${m[1]}${m[3]}-to-${m[2]}`)) continue;
    for (const l of ["en", "ar"] as Locale[]) p.copy[l].eyebrow = p.copy[l].eyebrow.replace("⇄", l === "ar" ? "←" : "→");
  }
}
