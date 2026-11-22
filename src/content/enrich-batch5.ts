import type { Locale } from "@/i18n/routing";
import type { Copy, Section, ServicePage } from "./types";

/**
 * Enrichment batch 5 (2026-11-23): the 13 pages flagged "needs unique content" in
 * docs/RIDESAUDI-URL-INDEXABILITY-MAP.csv (six long Riyadh routes and the two ziyarat pages).
 *
 * Fact sources, checked 2026-11-23:
 *  - Google Maps driving directions, city to city, "usual traffic", no stops:
 *    Riyadh–Jubail 469 km / 4 h 40 min via Route 40 (alt. via Dhahran–Jubail Expressway 489 km / 4 h 51 min);
 *    Riyadh–Dammam 409 km / 3 h 53 min; Dammam–Jubail 99 km / 1 h 05 min.
 *    Riyadh–Yanbu 1,065 km / 10 h 36 min via Route 65 and Route 60; Madinah–Yanbu 246 km / 2 h 41 min via Route 60.
 *    Riyadh–Hail 624 km / 5 h 57 min via Route 65. Riyadh–Buraydah 350 km / 3 h 24 min via Route 65.
 *    Riyadh–Tabuk 1,273 km / 13 h 33 min via Route 65; Hail–Tabuk 660 km / 7 h 29 min.
 *    Riyadh–AlUla 1,041 km / 11 h 14 min via Route 65 and Route 70; Hail–AlUla 428 km / 5 h 28 min.
 *    From Masjid al-Haram: Jabal al-Nour 10.5 km / 21 min; Masjid Aisha (Taneem) 12.5 km / 19 min;
 *    Jabal Thawr 17.5 km / 27 min; Mount Arafat 22.5 km / 33 min; Ji'ranah Mosque 27.6 km / 30 min.
 *    From the Prophet's Mosque: Seven Mosques 4.7 km / 10 min; Quba Mosque 4.8 km / 12 min;
 *    Uhud martyrs' cemetery 5.8 km / 12 min; Masjid al-Qiblatain 6.8 km / 14 min; Dhul Hulaifah 12.7 km / 20 min.
 *  - UNESCO World Heritage List no. 1472 "Rock Art in the Hail Region" (2015): Jubbah about 90 km north-west of Hail,
 *    Shuwaymis about 250 km south of Hail.
 *  - Saudi Arabia Railways (SAR) passenger charter: the North train serves Riyadh, Majmaah, Qassim and Hail
 *    (and continues to Al Jouf and Qurayyat).
 * No prices, fleet numbers or availability promises. Times are driving times only; the quotation sets the real plan.
 */
const U = "2026-11-23";
const I = "services/intercity-transfers";
const A = "services/airport-transfers";
const UM = "services/umrah-transport";

type Add = {
  /** Sentence appended to the answer-first block. */
  answerAdd: string;
  /** Exact sentence replacements inside existing section paragraphs and FAQ answers. */
  replace: [string, string][];
  table: NonNullable<Copy["table"]>;
  sections: Section[];
  faqs: { q: string; a: string }[];
};
type Entry = { related?: string[]; copy: Record<Locale, Add> };

const maps = "Google Maps, usual traffic, no stops, checked 23 Nov 2026";
const mapsAr = "خرائط جوجل، حركة مرور معتادة، دون توقف، تحقق في 23 نوفمبر 2026";

export const batch5Enrichments: Record<string, Entry> = {
  [`${I}/riyadh-to-jubail`]: {
    related: [`${A}/dammam-airport`, `${I}/dammam-to-jubail`],
    copy: {
      en: {
        answerAdd: "Google Maps puts the drive at about 469 km and 4 hours 40 minutes on Route 40.",
        replace: [
          ["We do not publish a distance or time; the quotation covers the planned schedule.", "By road it is about 469 km from central Riyadh, roughly 60 km more than the drive to Dammam."],
          ["We do not publish an estimate. Timing is agreed in the quotation.", "About 4 hours 40 minutes of driving for 469 km on Google Maps in usual traffic, before any stop. Site gate procedures in the industrial city can add time at the end."],
        ],
        table: {
          h: "Riyadh to Jubail at a glance",
          head: ["Item", "Detail"],
          rows: [
            ["Road distance", `About 469 km city to city (${maps})`],
            ["Driving time", "About 4 h 40 min before stops"],
            ["Main road", "Route 40 east from Riyadh, then north to Jubail before reaching Dammam"],
            ["Alternative", "Through Dammam and the Dhahran–Jubail Expressway: about 489 km, 4 h 51 min"],
            ["Airports", "King Khalid International (RUH) in Riyadh; King Fahd International (DMM) near Dammam is the main airport for Jubail"],
            ["Passenger rail", "The Riyadh train runs to Dammam, not to Jubail, so the last part is by road"],
          ],
        },
        sections: [
          { h: "Industrial city gates and site passes", p: ["Most company sites in Jubail Industrial City control who comes in. Before the trip, ask your host whether the car may enter, which gate to use and whether the driver's details must be registered in advance. If cars are stopped at the gate, the drop-off is made there and your host collects you. Sending the gate name with your enquiry avoids a wasted loop around a very large area."] },
          { h: "Shift changes and the morning arrival", p: ["Roads into the industrial area carry heavy traffic around shift changes. If you must be on site for a morning start, the plan works back from that time, with a margin for the gate. Leaving Riyadh very early is common on this route; tell us your start time and we propose a pickup."] },
        ],
        faqs: [
          { q: "Is Jubail on the way to Dammam from Riyadh?", a: "Almost. The fastest road leaves Route 40 before Dammam and turns north, about 469 km in total. Going through Dammam is about 489 km." },
          { q: "Can the car enter a plant inside Jubail Industrial City?", a: "That depends on the site's own security rules. Ask your host which gate to use and whether the driver must be pre-registered, and tell us in your enquiry." },
        ],
      },
      ar: {
        answerAdd: "وتقدّر خرائط جوجل المسافة بنحو 469 كم وزمن القيادة بنحو 4 ساعات و40 دقيقة عبر الطريق 40.",
        replace: [
          ["ولا ننشر مسافة أو زمنًا؛ فعرض السعر يغطي الجدول المخطط.", "والمسافة بالطريق نحو 469 كم من وسط الرياض، أي أطول بنحو 60 كم من الطريق إلى الدمام."],
          ["لا ننشر تقديرًا. ويُتَّفق على التوقيت في عرض السعر.", "نحو 4 ساعات و40 دقيقة قيادة لمسافة 469 كم بحسب خرائط جوجل في حركة مرور معتادة، دون احتساب التوقفات. وقد تضيف إجراءات البوابات في المدينة الصناعية وقتًا في النهاية."],
        ],
        table: {
          h: "الرياض إلى الجبيل باختصار",
          head: ["البند", "التفاصيل"],
          rows: [
            ["المسافة بالطريق", `نحو 469 كم من مدينة إلى مدينة (${mapsAr})`],
            ["زمن القيادة", "نحو 4 ساعات و40 دقيقة قبل التوقفات"],
            ["الطريق الرئيس", "الطريق 40 شرقًا من الرياض ثم شمالًا إلى الجبيل قبل الوصول إلى الدمام"],
            ["طريق بديل", "عبر الدمام وطريق الظهران الجبيل السريع: نحو 489 كم و4 ساعات و51 دقيقة"],
            ["المطارات", "مطار الملك خالد الدولي في الرياض؛ ومطار الملك فهد الدولي قرب الدمام هو المطار الرئيس لمن يقصد الجبيل"],
            ["القطار", "قطار الركاب من الرياض يصل إلى الدمام لا إلى الجبيل، فيبقى الجزء الأخير بالسيارة"],
          ],
        },
        sections: [
          { h: "بوابات المدينة الصناعية وتصاريح الدخول", p: ["تتحكم أغلب مواقع الشركات في الجبيل الصناعية بمن يدخلها. اسأل الجهة المستضيفة قبل الرحلة: هل يُسمح للسيارة بالدخول، ومن أي بوابة، وهل يلزم تسجيل بيانات السائق مسبقًا. وإن كانت السيارات تتوقف عند البوابة فيكون النزول هناك ويستقبلك مضيفك. وإرسال اسم البوابة مع طلبك يوفّر الدوران في منطقة واسعة جدًا."] },
          { h: "تبديل الورديات والوصول الصباحي", p: ["تزدحم الطرق المؤدية إلى المنطقة الصناعية وقت تبديل الورديات. وإن كان عليك أن تكون في الموقع مع بداية الدوام فإن الخطة تُبنى رجوعًا من ذلك الوقت مع هامش للبوابة. والانطلاق المبكر جدًا من الرياض شائع في هذا المسار؛ أخبرنا بموعد بدايتك ونقترح وقت الاستلام."] },
        ],
        faqs: [
          { q: "هل الجبيل في طريق الدمام من الرياض؟", a: "تقريبًا. فالطريق الأسرع يترك الطريق 40 قبل الدمام ويتجه شمالًا، بمسافة إجمالية نحو 469 كم. أما المرور بالدمام فنحو 489 كم." },
          { q: "هل تدخل السيارة إلى مصنع داخل الجبيل الصناعية؟", a: "يعتمد ذلك على أنظمة الأمن في الموقع نفسه. اسأل مضيفك عن البوابة المعتمدة وهل يلزم تسجيل السائق مسبقًا، واذكر ذلك في طلبك." },
        ],
      },
    },
  },

  [`${I}/riyadh-to-yanbu`]: {
    related: [`${A}/madinah-airport`],
    copy: {
      en: {
        answerAdd: "It is one of the longest drives from the capital: about 1,065 km and 10 hours 36 minutes on Google Maps, via Route 65 and Route 60.",
        replace: [
          ["We do not publish a distance or time; the quotation covers the planned schedule and rest stops.", "By road it is about 1,065 km, across Qassim and then down Route 60 past the Madinah region to the coast, so rest stops are part of the plan from the start."],
          ["We do not publish an estimate. Timing and rest stops are agreed in the quotation.", "About 10 hours 36 minutes of driving for 1,065 km on Google Maps in usual traffic, before stops. With proper breaks it is a full day, and many travellers split it."],
        ],
        table: {
          h: "Riyadh to Yanbu at a glance",
          head: ["Item", "Detail"],
          rows: [
            ["Road distance", `About 1,065 km city to city (${maps})`],
            ["Driving time", "About 10 h 36 min before stops"],
            ["Main roads", "Route 65 north-west into Qassim, then Route 60 west to the Red Sea coast"],
            ["Madinah to Yanbu", "About 246 km, 2 h 41 min on Route 60"],
            ["Airports", "King Khalid International (RUH); Yanbu Airport (YNB); Prince Mohammad bin Abdulaziz International (MED) in Madinah"],
            ["Fly and drive", "Fly Riyadh to Madinah, then about 246 km by car to Yanbu"],
          ],
        },
        sections: [
          { h: "Splitting the drive in Madinah", p: ["Route 60 passes the Madinah region on the way to Yanbu, which makes Madinah a natural overnight stop. Many Muslim travellers use it to pray in the Prophet's Mosque and continue to Yanbu the next morning, about 246 km further. If you want this, book it as two legs in one enquiry and give the Madinah hotel."] },
          { h: "Fly to Madinah, drive the last part", p: ["If the full road journey is too long, a common alternative is a domestic flight to Madinah followed by a car from Madinah airport to Yanbu, about 246 km. We can quote that last leg on its own: send the flight number and landing time, and the Yanbu site or hotel."] },
        ],
        faqs: [
          { q: "Can we stop overnight in Madinah on the way to Yanbu?", a: "Yes. Route 60 passes the Madinah region, so it is a natural break. Book Riyadh to Madinah and Madinah to Yanbu as two legs in one enquiry." },
          { q: "Is it better to fly to Madinah and drive to Yanbu?", a: "For one traveller it is usually faster. From Madinah it is about 246 km to Yanbu by road. A full road trip from Riyadh suits groups with luggage or equipment." },
        ],
      },
      ar: {
        answerAdd: "وهي من أطول الرحلات البرية من العاصمة: نحو 1,065 كم ونحو 10 ساعات و36 دقيقة بحسب خرائط جوجل، عبر الطريق 65 ثم الطريق 60.",
        replace: [
          ["ولا ننشر مسافة أو زمنًا؛ فعرض السعر يغطي الجدول المخطط ومحطات الراحة.", "والمسافة بالطريق نحو 1,065 كم، عبر القصيم ثم على الطريق 60 مرورًا بمنطقة المدينة المنورة حتى الساحل، ولذلك تدخل محطات الراحة في الخطة من البداية."],
          ["لا ننشر تقديرًا. ويُتَّفق على التوقيت ومحطات الراحة في عرض السعر.", "نحو 10 ساعات و36 دقيقة قيادة لمسافة 1,065 كم بحسب خرائط جوجل في حركة مرور معتادة، قبل التوقفات. ومع استراحات كافية تصبح يومًا كاملًا، ويقسّمها كثير من المسافرين."],
        ],
        table: {
          h: "الرياض إلى ينبع باختصار",
          head: ["البند", "التفاصيل"],
          rows: [
            ["المسافة بالطريق", `نحو 1,065 كم من مدينة إلى مدينة (${mapsAr})`],
            ["زمن القيادة", "نحو 10 ساعات و36 دقيقة قبل التوقفات"],
            ["الطرق الرئيسة", "الطريق 65 شمال غرب إلى القصيم، ثم الطريق 60 غربًا إلى ساحل البحر الأحمر"],
            ["من المدينة إلى ينبع", "نحو 246 كم وساعتان و41 دقيقة على الطريق 60"],
            ["المطارات", "مطار الملك خالد الدولي؛ ومطار ينبع؛ ومطار الأمير محمد بن عبدالعزيز الدولي في المدينة المنورة"],
            ["الطيران ثم السيارة", "طيران من الرياض إلى المدينة ثم نحو 246 كم بالسيارة إلى ينبع"],
          ],
        },
        sections: [
          { h: "تقسيم الرحلة بالمبيت في المدينة المنورة", p: ["يمر الطريق 60 بمنطقة المدينة المنورة في الطريق إلى ينبع، فتصبح المدينة محطة مبيت طبيعية. ويستغلها كثير من المسافرين المسلمين للصلاة في المسجد النبوي ثم يكملون إلى ينبع صباح اليوم التالي، على بعد نحو 246 كم. وإن أردت ذلك فاحجزها رحلتين في طلب واحد واذكر فندقك في المدينة."] },
          { h: "الطيران إلى المدينة ثم السيارة لبقية الطريق", p: ["إن كانت الرحلة البرية الكاملة طويلة عليك، فالبديل الشائع رحلة داخلية إلى المدينة المنورة ثم سيارة من مطارها إلى ينبع، نحو 246 كم. ويمكننا تسعير هذه المرحلة وحدها: أرسل رقم الرحلة ووقت الهبوط والموقع أو الفندق في ينبع."] },
        ],
        faqs: [
          { q: "هل يمكننا المبيت في المدينة المنورة في الطريق إلى ينبع؟", a: "نعم. يمر الطريق 60 بمنطقة المدينة فهي استراحة طبيعية. احجز الرياض إلى المدينة ثم المدينة إلى ينبع رحلتين في طلب واحد." },
          { q: "هل الأفضل الطيران إلى المدينة ثم السيارة إلى ينبع؟", a: "لمسافر واحد يكون عادةً أسرع، فالمسافة من المدينة إلى ينبع نحو 246 كم بالطريق. أما الرحلة البرية الكاملة من الرياض فتناسب المجموعات التي معها حقائب أو معدات." },
        ],
      },
    },
  },

  [`${I}/riyadh-to-hail`]: {
    related: [`${I}/riyadh-to-alula`, `${I}/riyadh-to-tabuk`],
    copy: {
      en: {
        answerAdd: "Google Maps measures about 624 km and just under 6 hours on Route 65, through the Qassim region.",
        replace: [
          ["We do not publish a distance or time; the quotation covers the planned schedule.", "The road distance is about 624 km on Route 65, which passes the Qassim region on the way north."],
          ["We do not publish an estimate. Timing and rest stops are agreed in the quotation.", "About 5 hours 57 minutes of driving for 624 km on Google Maps in usual traffic, before stops. Buraydah, about 350 km from Riyadh, is the natural break."],
        ],
        table: {
          h: "Riyadh to Hail at a glance",
          head: ["Item", "Detail"],
          rows: [
            ["Road distance", `About 624 km city to city (${maps})`],
            ["Driving time", "About 5 h 57 min before stops"],
            ["Main road", "Route 65 north-west, passing the Qassim region (Buraydah)"],
            ["Rock art sites", "Jubbah about 90 km north-west of Hail; Shuwaymis about 250 km south of Hail (UNESCO)"],
            ["Airports", "King Khalid International (RUH); Hail Airport (HAS)"],
            ["Passenger rail", "The SAR North train serves Riyadh, Majmaah, Qassim and Hail"],
          ],
        },
        sections: [
          { h: "Jubbah and Shuwaymis are not in the city", p: ["The rock art inscribed by UNESCO is in two separate areas, and neither is in Hail itself. Jubbah is about 90 km north-west of the city, an easy add-on day. Shuwaymis is about 250 km south and far more remote. If either is the reason for your trip, say so, check the current visiting rules for the site, and the plan is built around it rather than around the city."] },
          { h: "Hail as the halfway stop to AlUla or Tabuk", p: ["Hail sits roughly halfway between Riyadh and both AlUla and Tabuk, so it is often an overnight stop on those long drives rather than a destination of its own. From Hail it is about 428 km on to AlUla and about 660 km on to Tabuk. Tell us your final destination and whether you want the break in Hail."] },
          { h: "Train or car to Hail", p: ["The SAR North train links Riyadh with Qassim and Hail, and it suits a traveller with a small bag going station to station. A private car suits families, travellers with luggage and anyone going on to Jubbah or a farm outside the city. You can also book only the car from Hail station to your address."] },
        ],
        faqs: [
          { q: "How far is Jubbah rock art from Hail?", a: "About 90 km north-west of Hail city, according to the UNESCO listing. Shuwaymis, the second rock art area, is about 250 km south of Hail." },
          { q: "Is there a train from Riyadh to Hail?", a: "Yes. The Saudi Arabia Railways North train serves Riyadh, Majmaah, Qassim and Hail. Check SAR for current timetables; we can arrange the car from Hail station." },
        ],
      },
      ar: {
        answerAdd: "وتقيس خرائط جوجل المسافة بنحو 624 كم وزمنًا يقل قليلًا عن 6 ساعات على الطريق 65 مرورًا بمنطقة القصيم.",
        replace: [
          ["ولا ننشر مسافة أو زمنًا؛ فعرض السعر يغطي الجدول المخطط.", "والمسافة بالطريق نحو 624 كم على الطريق 65 الذي يمر بمنطقة القصيم في اتجاه الشمال."],
          ["لا ننشر تقديرًا. ويُتَّفق على التوقيت ومحطات الراحة في عرض السعر.", "نحو 5 ساعات و57 دقيقة قيادة لمسافة 624 كم بحسب خرائط جوجل في حركة مرور معتادة، قبل التوقفات. وبريدة على بعد نحو 350 كم من الرياض هي الاستراحة الطبيعية."],
        ],
        table: {
          h: "الرياض إلى حائل باختصار",
          head: ["البند", "التفاصيل"],
          rows: [
            ["المسافة بالطريق", `نحو 624 كم من مدينة إلى مدينة (${mapsAr})`],
            ["زمن القيادة", "نحو 5 ساعات و57 دقيقة قبل التوقفات"],
            ["الطريق الرئيس", "الطريق 65 شمال غرب مرورًا بمنطقة القصيم (بريدة)"],
            ["مواقع الفن الصخري", "جبة على بعد نحو 90 كم شمال غرب حائل؛ والشويمس نحو 250 كم جنوب حائل (يونسكو)"],
            ["المطارات", "مطار الملك خالد الدولي؛ ومطار حائل"],
            ["القطار", "قطار الشمال التابع للخطوط الحديدية السعودية يخدم الرياض والمجمعة والقصيم وحائل"],
          ],
        },
        sections: [
          { h: "جبة والشويمس ليستا داخل المدينة", p: ["الفن الصخري المسجل في اليونسكو يقع في منطقتين منفصلتين، وليست أي منهما داخل حائل نفسها. فجبة على بعد نحو 90 كم شمال غرب المدينة، وزيارتها إضافة سهلة ليوم واحد. أما الشويمس فعلى بعد نحو 250 كم جنوبًا وهي أبعد وأكثر عزلة بكثير. وإن كانت إحداهما سبب رحلتك فاذكر ذلك، وتحقق من أنظمة الزيارة الحالية للموقع، فتُبنى الخطة حولها لا حول المدينة."] },
          { h: "حائل محطة منتصف الطريق إلى العلا أو تبوك", p: ["تقع حائل تقريبًا في منتصف الطريق بين الرياض وكل من العلا وتبوك، ولذلك تكون غالبًا محطة مبيت في هاتين الرحلتين الطويلتين لا وجهة بحد ذاتها. ومن حائل نحو 428 كم إلى العلا ونحو 660 كم إلى تبوك. أخبرنا بوجهتك النهائية وهل تريد الاستراحة في حائل."] },
          { h: "القطار أم السيارة إلى حائل", p: ["يربط قطار الشمال الرياض بالقصيم وحائل، وهو مناسب لمسافر بحقيبة صغيرة من محطة إلى محطة. أما السيارة الخاصة فتناسب العائلات ومن معه أمتعة ومن سيكمل إلى جبة أو إلى مزرعة خارج المدينة. ويمكنك أيضًا حجز السيارة وحدها من محطة حائل إلى عنوانك."] },
        ],
        faqs: [
          { q: "كم تبعد مواقع الفن الصخري في جبة عن حائل؟", a: "نحو 90 كم شمال غرب مدينة حائل بحسب قائمة اليونسكو. أما الشويمس، المنطقة الثانية للفن الصخري، فعلى بعد نحو 250 كم جنوب حائل." },
          { q: "هل يوجد قطار من الرياض إلى حائل؟", a: "نعم. قطار الشمال التابع للخطوط الحديدية السعودية يخدم الرياض والمجمعة والقصيم وحائل. راجع مواعيده الحالية لدى الخطوط الحديدية، ويمكننا ترتيب السيارة من محطة حائل." },
        ],
      },
    },
  },

  [`${I}/riyadh-to-buraydah`]: {
    copy: {
      en: {
        answerAdd: "The drive is about 350 km on Route 65, around 3 hours 25 minutes on Google Maps, so a same-day return is realistic.",
        replace: [
          ["We do not publish a distance or time; the quotation covers the planned schedule.", "By road it is about 350 km on Route 65, close enough for a day trip."],
          ["We do not publish an estimate. Timing is agreed in the quotation.", "About 3 hours 24 minutes of driving for 350 km on Google Maps in usual traffic, before stops. A return the same day means roughly 7 hours on the road, so plan the time in Buraydah around that."],
        ],
        table: {
          h: "Riyadh to Buraydah at a glance",
          head: ["Item", "Detail"],
          rows: [
            ["Road distance", `About 350 km city to city (${maps})`],
            ["Driving time", "About 3 h 24 min before stops"],
            ["Main road", "Route 65 north-west from Riyadh"],
            ["Same-day return", "About 7 hours of driving in total, plus time in Qassim"],
            ["Airports", "King Khalid International (RUH); Prince Naif bin Abdulaziz Airport, Qassim (ELQ)"],
            ["Passenger rail", "The SAR North train calls at Qassim station between Riyadh and Hail"],
          ],
        },
        sections: [
          { h: "A day trip that actually works", p: ["At about 350 km each way, Buraydah is one of the few Riyadh routes where out-and-back in one day is comfortable. A typical plan is an early departure, a meeting or family visit in the middle of the day and a return in the evening, with the driver waiting in between. Give the hours you need in Qassim and we tell you whether the day fits."] },
          { h: "The date season and the Buraydah market", p: ["Qassim is one of the Kingdom's main date-growing areas, and Buraydah's date market is busiest in the harvest season, usually late summer. Traffic and parking around the market are heavier then. If you are buying in quantity, tell us how many cartons you expect to bring back, because boxes take space that passengers would otherwise use."] },
        ],
        faqs: [
          { q: "Can I go from Riyadh to Buraydah and back in one day?", a: "Yes, it is realistic. It is about 350 km each way, roughly 7 hours of driving in total, so an early start leaves several hours in Qassim." },
          { q: "Can we bring date cartons back to Riyadh in the car?", a: "Yes, within the space left after passengers and bags. Tell us how many cartons you expect so the vehicle has room." },
        ],
      },
      ar: {
        answerAdd: "والمسافة بالطريق نحو 350 كم على الطريق 65، بنحو 3 ساعات و25 دقيقة بحسب خرائط جوجل، فالعودة في اليوم نفسه واقعية.",
        replace: [
          ["ولا ننشر مسافة أو زمنًا؛ فعرض السعر يغطي الجدول المخطط.", "والمسافة بالطريق نحو 350 كم على الطريق 65، وهي قريبة بما يكفي لرحلة يوم واحد."],
          ["لا ننشر تقديرًا. ويُتَّفق على التوقيت في عرض السعر.", "نحو 3 ساعات و24 دقيقة قيادة لمسافة 350 كم بحسب خرائط جوجل في حركة مرور معتادة، قبل التوقفات. والعودة في اليوم نفسه تعني نحو 7 ساعات على الطريق، فخطط وقتك في بريدة على هذا الأساس."],
        ],
        table: {
          h: "الرياض إلى بريدة باختصار",
          head: ["البند", "التفاصيل"],
          rows: [
            ["المسافة بالطريق", `نحو 350 كم من مدينة إلى مدينة (${mapsAr})`],
            ["زمن القيادة", "نحو 3 ساعات و24 دقيقة قبل التوقفات"],
            ["الطريق الرئيس", "الطريق 65 شمال غرب من الرياض"],
            ["الذهاب والعودة في يوم", "نحو 7 ساعات قيادة إجمالًا إضافة إلى وقتك في القصيم"],
            ["المطارات", "مطار الملك خالد الدولي؛ ومطار الأمير نايف بن عبدالعزيز في القصيم"],
            ["القطار", "قطار الشمال يتوقف في محطة القصيم بين الرياض وحائل"],
          ],
        },
        sections: [
          { h: "رحلة يوم واحد تنجح فعلًا", p: ["بمسافة نحو 350 كم في كل اتجاه، تُعد بريدة من مسارات الرياض القليلة التي يكون فيها الذهاب والعودة في يوم واحد مريحًا. والخطة المعتادة انطلاق مبكر واجتماع أو زيارة عائلية في منتصف اليوم ثم عودة مساءً، مع انتظار السائق بينهما. أخبرنا بعدد الساعات التي تحتاجها في القصيم ونقول لك إن كان اليوم يكفي."] },
          { h: "موسم التمور وسوق بريدة", p: ["القصيم من أهم مناطق زراعة النخيل في المملكة، ويبلغ سوق التمور في بريدة ذروته في موسم الصرام، عادةً في أواخر الصيف. وتزداد الحركة وصعوبة الوقوف حول السوق في تلك الفترة. وإن كنت ستشتري بكميات فأخبرنا بعدد الكراتين المتوقعة، لأن الصناديق تأخذ مساحة كانت للركاب."] },
        ],
        faqs: [
          { q: "هل أذهب من الرياض إلى بريدة وأعود في اليوم نفسه؟", a: "نعم، هذا واقعي. فالمسافة نحو 350 كم في كل اتجاه، أي نحو 7 ساعات قيادة إجمالًا، والانطلاق المبكر يترك لك عدة ساعات في القصيم." },
          { q: "هل نعود بكراتين التمر إلى الرياض في السيارة؟", a: "نعم، في حدود المساحة المتبقية بعد الركاب والحقائب. أخبرنا بعدد الكراتين المتوقع لتكون في المركبة مساحة كافية." },
        ],
      },
    },
  },

  [`${I}/riyadh-to-tabuk`]: {
    related: [`${I}/riyadh-to-hail`],
    copy: {
      en: {
        answerAdd: "Google Maps measures about 1,273 km and 13 hours 33 minutes of driving, so most travellers plan an overnight stop.",
        replace: [
          ["We do not publish a distance or time; the quotation covers the planned schedule, rest stops and any overnight stage.", "By road it is about 1,273 km, mostly on Route 65 past the Qassim and Hail regions, which is why the quotation usually includes an overnight stage."],
          ["We do not publish an estimate. Timing and rest stops are agreed in the quotation.", "About 13 hours 33 minutes of driving for 1,273 km on Google Maps in usual traffic, before stops. That is too long for one comfortable day, so we normally plan it over two."],
        ],
        table: {
          h: "Riyadh to Tabuk at a glance",
          head: ["Item", "Detail"],
          rows: [
            ["Road distance", `About 1,273 km city to city (${maps})`],
            ["Driving time", "About 13 h 33 min before stops"],
            ["Main road", "Mostly Route 65 north-west, past the Qassim and Hail regions"],
            ["Overnight option", "Hail: about 624 km from Riyadh, then about 660 km on to Tabuk"],
            ["Airports", "King Khalid International (RUH); Prince Sultan bin Abdulaziz Airport, Tabuk (TUU)"],
            ["Rail", "No passenger train between Riyadh and Tabuk"],
          ],
        },
        sections: [
          { h: "Two days, not one", p: ["More than 13 hours at the wheel is not a sensible single day for passengers or driver. The usual plan is to drive about 624 km to Hail on day one, sleep there, and cover the remaining 660 km or so the next day. Tell us if you prefer a different stop, and whether you want help choosing the hotel or will book it yourself."] },
          { h: "When the car makes more sense than a flight", p: ["Flying is far faster for one person. The road wins when a team must move tools or samples that cannot go in the hold, when a family is relocating with a lot of luggage, or when the trip includes stops such as AlUla on the way. Describe what you are carrying and we confirm a vehicle that fits it."] },
        ],
        faqs: [
          { q: "Where do people stop overnight between Riyadh and Tabuk?", a: "Hail is the usual choice, about 624 km from Riyadh and about 660 km from Tabuk, which splits the drive into two similar days." },
          { q: "Is there a train from Riyadh to Tabuk?", a: "No passenger line connects them. The options are a domestic flight to Tabuk or the road journey of about 1,273 km." },
        ],
      },
      ar: {
        answerAdd: "وتقيس خرائط جوجل المسافة بنحو 1,273 كم وزمن القيادة بنحو 13 ساعة و33 دقيقة، ولذلك يخطط أغلب المسافرين لمبيت في الطريق.",
        replace: [
          ["ولا ننشر مسافة أو زمنًا؛ فعرض السعر يغطي الجدول المخطط ومحطات الراحة وأي مرحلة مبيت.", "والمسافة بالطريق نحو 1,273 كم، معظمها على الطريق 65 مرورًا بمنطقتي القصيم وحائل، ولهذا يتضمن عرض السعر عادةً مرحلة مبيت."],
          ["لا ننشر تقديرًا. ويُتَّفق على التوقيت ومحطات الراحة في عرض السعر.", "نحو 13 ساعة و33 دقيقة قيادة لمسافة 1,273 كم بحسب خرائط جوجل في حركة مرور معتادة، قبل التوقفات. وهذا أطول من يوم واحد مريح، فنخططها عادةً على يومين."],
        ],
        table: {
          h: "الرياض إلى تبوك باختصار",
          head: ["البند", "التفاصيل"],
          rows: [
            ["المسافة بالطريق", `نحو 1,273 كم من مدينة إلى مدينة (${mapsAr})`],
            ["زمن القيادة", "نحو 13 ساعة و33 دقيقة قبل التوقفات"],
            ["الطريق الرئيس", "معظمه على الطريق 65 شمال غرب مرورًا بمنطقتي القصيم وحائل"],
            ["خيار المبيت", "حائل: نحو 624 كم من الرياض ثم نحو 660 كم إلى تبوك"],
            ["المطارات", "مطار الملك خالد الدولي؛ ومطار الأمير سلطان بن عبدالعزيز في تبوك"],
            ["القطار", "لا يوجد قطار ركاب بين الرياض وتبوك"],
          ],
        },
        sections: [
          { h: "يومان لا يوم واحد", p: ["أكثر من 13 ساعة قيادة ليست يومًا معقولًا للركاب ولا للسائق. والخطة المعتادة قيادة نحو 624 كم إلى حائل في اليوم الأول والمبيت فيها، ثم قطع ما تبقى، نحو 660 كم، في اليوم التالي. أخبرنا إن كنت تفضّل محطة أخرى، وهل تريد مساعدة في اختيار الفندق أم ستحجزه بنفسك."] },
          { h: "متى تكون السيارة أنسب من الطيران", p: ["الطيران أسرع بكثير لشخص واحد. وتتفوق السيارة حين يحتاج فريق إلى نقل أدوات أو عينات لا تُشحن في الطائرة، أو حين تنتقل عائلة بأمتعة كثيرة، أو حين تتضمن الرحلة توقفات مثل العلا في الطريق. صف ما تحمله ونؤكد المركبة المناسبة له."] },
        ],
        faqs: [
          { q: "أين يبيت المسافرون بين الرياض وتبوك؟", a: "حائل هي الخيار المعتاد، على بعد نحو 624 كم من الرياض ونحو 660 كم من تبوك، فتنقسم الرحلة إلى يومين متقاربين." },
          { q: "هل يوجد قطار من الرياض إلى تبوك؟", a: "لا يربط بينهما خط ركاب. والخيارات رحلة داخلية إلى تبوك أو الطريق البري بنحو 1,273 كم." },
        ],
      },
    },
  },

  [`${I}/riyadh-to-alula`]: {
    related: [`${A}/alula-airport`, `${I}/riyadh-to-hail`],
    copy: {
      en: {
        answerAdd: "Google Maps measures about 1,041 km and 11 hours 14 minutes via Route 65 and Route 70, so many travellers break the drive in Hail.",
        replace: [
          ["We do not publish a distance or time; the quotation covers the planned schedule and rest stops.", "By road it is about 1,041 km: north-west on Route 65 towards Hail, then west on Route 70."],
          ["We do not publish an estimate. Timing and rest stops are agreed in the quotation.", "About 11 hours 14 minutes of driving for 1,041 km on Google Maps in usual traffic, before stops. Split in Hail, it becomes about 624 km and then about 428 km."],
        ],
        table: {
          h: "Riyadh to AlUla at a glance",
          head: ["Item", "Detail"],
          rows: [
            ["Road distance", `About 1,041 km city to city (${maps})`],
            ["Driving time", "About 11 h 14 min before stops"],
            ["Main roads", "Route 65 north-west towards Hail, then Route 70 west to AlUla"],
            ["Alternative", "Route 65 and Route 60: about 1,163 km, 11 h 31 min"],
            ["Overnight option", "Hail: about 624 km from Riyadh, then about 428 km (5 h 28 min) to AlUla"],
            ["Airports", "King Khalid International (RUH); AlUla International (ULH)"],
          ],
        },
        sections: [
          { h: "Breaking the journey in Hail", p: ["Eleven hours of driving is a long day before a holiday starts. Hail is the natural halfway point, and it has its own attractions: the Jubbah rock art site is about 90 km north-west of the city. A two-day plan, with a night in Hail, means arriving in AlUla in daylight and rested."] },
          { h: "Arriving at an AlUla resort", p: ["AlUla's resorts and camps are spread across a wide valley and some are well outside the town, with their own access roads and reception points. Give the exact property name and the check-in time. If you arrive after dark, the driver follows the property's own access instructions, so ask the resort for them in advance."] },
        ],
        faqs: [
          { q: "Should we stop overnight on the way from Riyadh to AlUla?", a: "Most travellers do. Hail splits the trip into about 624 km and about 428 km, and the Jubbah rock art site near Hail can fit into the first day." },
          { q: "Which is quicker, flying to AlUla or driving?", a: "Flying is much quicker when a flight suits your dates. Driving takes over 11 hours but lets a group carry more luggage and stop on the way." },
        ],
      },
      ar: {
        answerAdd: "وتقيس خرائط جوجل المسافة بنحو 1,041 كم وزمن القيادة بنحو 11 ساعة و14 دقيقة عبر الطريقين 65 و70، ولذلك يقسم كثيرون الرحلة بالمبيت في حائل.",
        replace: [
          ["ولا ننشر مسافة أو زمنًا؛ فعرض السعر يغطي الجدول المخطط ومحطات الراحة.", "والمسافة بالطريق نحو 1,041 كم: شمال غرب على الطريق 65 باتجاه حائل ثم غربًا على الطريق 70."],
          ["لا ننشر تقديرًا. ويُتَّفق على التوقيت ومحطات الراحة في عرض السعر.", "نحو 11 ساعة و14 دقيقة قيادة لمسافة 1,041 كم بحسب خرائط جوجل في حركة مرور معتادة، قبل التوقفات. وبالمبيت في حائل تصبح نحو 624 كم ثم نحو 428 كم."],
        ],
        table: {
          h: "الرياض إلى العلا باختصار",
          head: ["البند", "التفاصيل"],
          rows: [
            ["المسافة بالطريق", `نحو 1,041 كم من مدينة إلى مدينة (${mapsAr})`],
            ["زمن القيادة", "نحو 11 ساعة و14 دقيقة قبل التوقفات"],
            ["الطرق الرئيسة", "الطريق 65 شمال غرب باتجاه حائل ثم الطريق 70 غربًا إلى العلا"],
            ["طريق بديل", "الطريقان 65 و60: نحو 1,163 كم و11 ساعة و31 دقيقة"],
            ["خيار المبيت", "حائل: نحو 624 كم من الرياض ثم نحو 428 كم (5 ساعات و28 دقيقة) إلى العلا"],
            ["المطارات", "مطار الملك خالد الدولي؛ ومطار العلا الدولي"],
          ],
        },
        sections: [
          { h: "تقسيم الرحلة بالمبيت في حائل", p: ["إحدى عشرة ساعة قيادة يوم طويل قبل أن تبدأ الإجازة. وحائل هي منتصف الطريق الطبيعي، ولها معالمها: فموقع الفن الصخري في جبة على بعد نحو 90 كم شمال غرب المدينة. والخطة على يومين مع ليلة في حائل تعني الوصول إلى العلا في النهار وأنت مرتاح."] },
          { h: "الوصول إلى منتجعك في العلا", p: ["تنتشر منتجعات العلا ومخيماتها في وادٍ واسع، وبعضها بعيد عن البلدة وله طرق دخول ونقاط استقبال خاصة. أعطنا اسم المنشأة بالضبط ووقت تسجيل الدخول. وإن كان الوصول بعد المغرب فإن السائق يتبع تعليمات الدخول الخاصة بالمنشأة، فاطلبها من المنتجع مسبقًا."] },
        ],
        faqs: [
          { q: "هل نبيت في الطريق من الرياض إلى العلا؟", a: "يفعل ذلك أغلب المسافرين. فحائل تقسم الرحلة إلى نحو 624 كم ونحو 428 كم، ويمكن إدراج زيارة الفن الصخري في جبة قرب حائل ضمن اليوم الأول." },
          { q: "أيهما أسرع إلى العلا، الطيران أم السيارة؟", a: "الطيران أسرع بكثير إن ناسبت رحلةٌ تواريخك. أما القيادة فتستغرق أكثر من 11 ساعة لكنها تتيح للمجموعة حمل أمتعة أكثر والتوقف في الطريق." },
        ],
      },
    },
  },

  [`${UM}/makkah-ziyarat`]: {
    related: [`${I}/makkah-to-madinah`],
    copy: {
      en: {
        answerAdd: "Most sites are 10 to 28 km by road from Masjid al-Haram, about 20 to 35 minutes each way in usual traffic.",
        replace: [],
        table: {
          h: "Driving distances from Masjid al-Haram",
          head: ["Place", "Road distance and time (Google Maps, usual traffic, checked 23 Nov 2026)"],
          rows: [
            ["Jabal al-Nour (Cave of Hira)", "About 10.5 km, 21 min"],
            ["Masjid Aisha, Taneem", "About 12.5 km, 19 min"],
            ["Jabal Thawr", "About 17.5 km, 27 min"],
            ["Mount Arafat", "About 22.5 km, 33 min"],
            ["Ji'ranah Mosque", "About 27.6 km, 30 min"],
          ],
        },
        sections: [
          { h: "Taneem or Ji'ranah for another Umrah", p: ["Pilgrims already in Makkah who want to perform another Umrah go outside the Haram boundary to enter Ihram. Masjid Aisha at Taneem, about 12.5 km by road, is the point most people use; Ji'ranah, about 27.6 km, is another. The driver waits while you prepare and pray, then brings you back to the Haram. Follow the religious guidance of your own scholar or group on whether and when to do this."] },
          { h: "Climbing to the Cave of Hira", p: ["The car stops at the foot of Jabal al-Nour; the path up to the Cave of Hira is on foot, steep and often crowded. Allow plenty of time, carry water, and avoid the hottest part of the day. Elderly relatives often wait in the car or nearby while others climb, so tell us if part of your group will stay at the bottom."] },
        ],
        faqs: [
          { q: "Can the car take me to Masjid Aisha (Taneem) for another Umrah?", a: "Yes. It is about 12.5 km from the Haram by road. The driver waits while you prepare and pray, then returns you to the Haram." },
          { q: "Does the car go up Jabal al-Nour?", a: "No. Vehicles stop at the foot of the mountain and the path to the Cave of Hira is climbed on foot. Plan for a steep walk." },
        ],
      },
      ar: {
        answerAdd: "وتبعد أغلب المواقع ما بين 10 و28 كم بالطريق عن المسجد الحرام، أي نحو 20 إلى 35 دقيقة في كل اتجاه في حركة مرور معتادة.",
        replace: [],
        table: {
          h: "المسافات بالسيارة من المسجد الحرام",
          head: ["المكان", "المسافة والزمن بالطريق (خرائط جوجل، حركة معتادة، تحقق في 23 نوفمبر 2026)"],
          rows: [
            ["جبل النور (غار حراء)", "نحو 10.5 كم، 21 دقيقة"],
            ["مسجد عائشة بالتنعيم", "نحو 12.5 كم، 19 دقيقة"],
            ["جبل ثور", "نحو 17.5 كم، 27 دقيقة"],
            ["جبل عرفات", "نحو 22.5 كم، 33 دقيقة"],
            ["مسجد الجعرانة", "نحو 27.6 كم، 30 دقيقة"],
          ],
        },
        sections: [
          { h: "التنعيم أو الجعرانة لعمرة أخرى", p: ["يخرج المعتمرون المقيمون في مكة ممن يريدون أداء عمرة أخرى إلى خارج حدود الحرم للإحرام. ومسجد عائشة بالتنعيم، على بعد نحو 12.5 كم بالطريق، هو الأكثر قصدًا، والجعرانة على بعد نحو 27.6 كم خيار آخر. وينتظرك السائق أثناء الاستعداد والصلاة ثم يعيدك إلى الحرم. واتبع توجيه عالمك أو مجموعتك في حكم ذلك وتوقيته."] },
          { h: "الصعود إلى غار حراء", p: ["تتوقف السيارة عند سفح جبل النور، والطريق إلى غار حراء سيرًا على الأقدام، وهو شديد الانحدار ومزدحم غالبًا. خصص وقتًا كافيًا واحمل الماء وتجنب ساعات الحر الشديد. وكثيرًا ما ينتظر كبار السن في السيارة أو قربها بينما يصعد الآخرون، فأخبرنا إن كان بعض مجموعتك سيبقى في الأسفل."] },
        ],
        faqs: [
          { q: "هل توصلني السيارة إلى مسجد عائشة بالتنعيم لعمرة أخرى؟", a: "نعم. يبعد نحو 12.5 كم عن الحرم بالطريق. وينتظرك السائق أثناء الاستعداد والصلاة ثم يعيدك إلى الحرم." },
          { q: "هل تصعد السيارة إلى جبل النور؟", a: "لا. تتوقف المركبات عند سفح الجبل، ويُصعد إلى غار حراء سيرًا على الأقدام. استعد لمشي شديد الانحدار." },
        ],
      },
    },
  },

  [`${UM}/madinah-ziyarat`]: {
    related: [`${I}/madinah-to-makkah`],
    copy: {
      en: {
        answerAdd: "The usual sites are close together: Quba, Qiblatain, Uhud and the Seven Mosques are all within about 7 km of the Prophet's Mosque by road.",
        replace: [],
        table: {
          h: "Driving distances from the Prophet's Mosque",
          head: ["Place", "Road distance and time (Google Maps, usual traffic, checked 23 Nov 2026)"],
          rows: [
            ["Seven Mosques (site of the Trench)", "About 4.7 km, 10 min"],
            ["Quba Mosque", "About 4.8 km, 12 min"],
            ["Uhud and the martyrs' cemetery", "About 5.8 km, 12 min"],
            ["Masjid al-Qiblatain", "About 6.8 km, 14 min"],
            ["Dhul Hulaifah (Abyar Ali), Miqat", "About 12.7 km, 20 min"],
          ],
        },
        sections: [
          { h: "Quba on a Saturday", p: ["The Prophet, peace be upon him, used to visit Quba every Saturday, and many visitors follow that example, so Quba is noticeably busier on Saturday mornings. If your dates allow, a weekday visit is calmer; if Saturday matters to you, leave early and expect a short walk from where cars can stop."] },
          { h: "Ending the ziyarat at the Miqat", p: ["If you are travelling on to Makkah for Umrah, the last stop can be Dhul Hulaifah (Abyar Ali), the Miqat for people leaving Madinah, about 12.7 km from the Prophet's Mosque. Book the ziyarat and the Madinah to Makkah journey together, enter Ihram at the Miqat, and continue straight to Makkah with your luggage already in the car."] },
        ],
        faqs: [
          { q: "How far is Quba Mosque from the Prophet's Mosque?", a: "About 4.8 km by road, around 12 minutes in usual traffic. Saturday mornings are the busiest time." },
          { q: "Can the ziyarat end at the Miqat on the way to Makkah?", a: "Yes. Dhul Hulaifah (Abyar Ali) is about 12.7 km from the Prophet's Mosque. Book it with the Madinah to Makkah journey so your luggage travels with you." },
        ],
      },
      ar: {
        answerAdd: "والمواقع المعتادة متقاربة: قباء والقبلتين وأحد والمساجد السبعة كلها في حدود نحو 7 كم بالطريق من المسجد النبوي.",
        replace: [],
        table: {
          h: "المسافات بالسيارة من المسجد النبوي",
          head: ["المكان", "المسافة والزمن بالطريق (خرائط جوجل، حركة معتادة، تحقق في 23 نوفمبر 2026)"],
          rows: [
            ["المساجد السبعة (موقع غزوة الخندق)", "نحو 4.7 كم، 10 دقائق"],
            ["مسجد قباء", "نحو 4.8 كم، 12 دقيقة"],
            ["جبل أحد ومقبرة الشهداء", "نحو 5.8 كم، 12 دقيقة"],
            ["مسجد القبلتين", "نحو 6.8 كم، 14 دقيقة"],
            ["ذو الحليفة (أبيار علي)، الميقات", "نحو 12.7 كم، 20 دقيقة"],
          ],
        },
        sections: [
          { h: "قباء يوم السبت", p: ["كان النبي صلى الله عليه وسلم يأتي قباء كل سبت، ويقتدي بذلك كثير من الزوار، فيزدحم قباء صباح السبت بشكل ملحوظ. وإن سمحت تواريخك فالزيارة في يوم آخر من الأسبوع أهدأ، وإن كان السبت مهمًا لك فانطلق مبكرًا وتوقع مشيًا قصيرًا من مكان توقف السيارات."] },
          { h: "إنهاء الزيارة عند الميقات", p: ["إن كنت متجهًا إلى مكة لأداء العمرة، فيمكن أن تكون المحطة الأخيرة ذا الحليفة (أبيار علي)، ميقات الخارجين من المدينة، على بعد نحو 12.7 كم من المسجد النبوي. احجز الزيارة ورحلة المدينة إلى مكة معًا، وأحرم من الميقات، ثم أكمل مباشرة إلى مكة وأمتعتك في السيارة."] },
        ],
        faqs: [
          { q: "كم يبعد مسجد قباء عن المسجد النبوي؟", a: "نحو 4.8 كم بالطريق، قرابة 12 دقيقة في حركة مرور معتادة. وصباح السبت هو الأكثر ازدحامًا." },
          { q: "هل تنتهي الزيارة عند الميقات في الطريق إلى مكة؟", a: "نعم. يبعد ذو الحليفة (أبيار علي) نحو 12.7 كم عن المسجد النبوي. احجزها مع رحلة المدينة إلى مكة لتبقى أمتعتك معك." },
        ],
      },
    },
  },
};

export function applyBatch5Enrichments(pages: ServicePage[]) {
  for (const [path, entry] of Object.entries(batch5Enrichments)) {
    const page = pages.find((p) => p.path === path);
    if (!page) throw new Error(`batch5Enrichments: unknown page ${path}`);
    page.updated = U;
    if (entry.related) page.related.push(...entry.related);
    for (const locale of Object.keys(entry.copy) as Locale[]) {
      const add = entry.copy[locale];
      const c = page.copy[locale];
      for (const [from, to] of add.replace) {
        let hit = false;
        c.sections = c.sections.map((s) => ({ ...s, p: s.p.map((t) => (t.includes(from) ? ((hit = true), t.replace(from, to)) : t)) }));
        c.faqs = c.faqs.map((f) => (f.a === from ? ((hit = true), { ...f, a: to }) : f));
        if (!hit) throw new Error(`batch5Enrichments: "${from}" not found on ${path}/${locale}`);
      }
      c.answer = `${c.answer} ${add.answerAdd}`;
      if (c.table) throw new Error(`batch5Enrichments: ${path}/${locale} already has a table`);
      c.table = add.table;
      c.sections = [...c.sections, ...add.sections];
      c.faqs = [...c.faqs, ...add.faqs];
    }
  }
}
