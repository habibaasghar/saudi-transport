import type { BlogPost } from "./types";

const S = "services";
const I = `${S}/intercity-transfers`;
const D = "2026-11-18";

/**
 * Guide D3: Jeddah to Madinah options, organised by starting point (airport on arrival vs a Jeddah address).
 * Booking intent stays on the jeddah-to-madinah route page.
 * Sources checked 2026-11-18:
 * - Saudipedia, "Haramain High Speed Railway": Jeddah stations in Sulaymaniyah and at King Abdulaziz
 *   International Airport; airport to Madinah about two hours; Madinah station in Knowledge Economic City,
 *   about 7 km from the Prophet's Mosque.
 * - Road: about 404 km and 4 h 07 min from central Jeddah; about 400 km and about 4 h between the airport and
 *   Madinah (Google Maps, November 2026, measured Madinah to the airport: 3 h 56 min). See the route pages.
 * Not stated: timetables, fares, luggage rules, flight schedules, bus operators.
 */
export const jeddahMadinahPost: BlogPost = {
  slug: "jeddah-to-madinah-train-flight-bus-or-car",
  published: D,
  updated: D,
  links: [
    `${I}/jeddah-to-madinah`,
    `${I}/madinah-to-jeddah`,
    `${S}/airport-transfers/jeddah-airport`,
    `${S}/airport-transfers/madinah-airport`,
    `${S}/city-transport/madinah`,
    `${S}/umrah-transport/madinah-ziyarat`,
    `${I}/madinah-to-makkah`,
  ],
  copy: {
    en: {
      nav: "Jeddah to Madinah: your options",
      title: "Jeddah to Madinah: Train, Flight, Bus or Car?",
      description: "Jeddah to Madinah compared by where you start, the airport on arrival or a Jeddah address: Haramain train, flight, bus or a private car, honestly weighed.",
      h1: "Jeddah to Madinah: train, flight, bus or private car?",
      answer:
        "From Jeddah to Madinah you can take the Haramain train, a domestic flight, a bus or a private car. Straight from King Abdulaziz International Airport, the train takes about two hours to Madinah, whose station is about 7 km from the Prophet's Mosque. A private car covers about 400 km in roughly four hours, from the arrivals hall or your Jeddah address to your hotel.",
      summary: "The best option depends on where you start: the airport straight after landing, or an address in Jeddah.",
      sections: [
        {
          h: "Where you start changes the answer",
          p: [
            "Two very different trips share this route. One begins at King Abdulaziz International Airport, minutes after a long flight, often with a family and a lot of luggage. The other begins at a home or hotel in Jeddah, rested and with time to plan. The train, the bus and a private car each look different from those two starting points, so this guide takes them in turn.",
          ],
        },
        {
          h: "Starting at Jeddah airport, straight after landing",
          p: [
            "The Haramain railway has a station at King Abdulaziz International Airport, and Saudipedia gives the airport to Madinah journey as about two hours. For a traveller with light bags who lands at a time when trains are running, that is hard to beat. It still means walking to the station with your luggage, waiting for the departure and finding a car at Madinah station, which is in Knowledge Economic City, about 7 km from the Prophet's Mosque.",
            "A private car meets you at arrivals and drives about 400 km, around four hours, straight to your hotel. It is slower than the train, but after an overnight flight many families prefer one vehicle and the chance to sleep, rather than two more changes with suitcases and tired children. Give the flight number so the pickup follows your actual arrival, and allow for immigration and baggage reclaim.",
          ],
        },
        {
          h: "Starting from an address in Jeddah",
          p: [
            "From the city, the train leaves from the Jeddah station in the Sulaymaniyah district, so the journey begins with a drive across Jeddah to the station. Check the timetable for the direct service time from the city station, as it is not the same trip as from the airport.",
            "A private car starts at your door: about 404 km from central Jeddah to the Prophet's Mosque area, around 4 hours 7 minutes before stops, mostly on Route 15. For a weekend visit with family, it also means the same kind of journey home, which can be quoted with the outbound trip.",
          ],
        },
        {
          h: "Flying, and the option of not landing in Jeddah at all",
          p: [
            "Domestic flights connect Jeddah and Madinah, but once you add airport check-in and the drive from Madinah's airport, flying is rarely simpler than the train or the road for this distance. The more useful question comes earlier: if you have not booked your international flights yet and plan to visit Madinah first, check whether you can fly into Prince Mohammad bin Abdulaziz International Airport in Madinah directly and skip this leg.",
          ],
        },
        {
          h: "The bus",
          p: [
            "Intercity coaches run between Jeddah and Madinah and are usually the lowest-cost option. The trip is long, the times are fixed and the stops may be far from your hotel, so confirm the current operator, the departure point and the Madinah stop before relying on it.",
          ],
        },
        {
          h: "Madinah first, Makkah after",
          p: [
            "Many Umrah itineraries go to Madinah first and to Makkah afterwards, entering Ihram at the Miqat of Dhul Hulaifah (Abyar Ali) when leaving Madinah. If that is your plan, ask a scholar how it applies to your journey from Jeddah. If you book the Madinah to Makkah leg by private car, the stop at Abyar Ali can be included.",
          ],
        },
      ],
      table: {
        h: "Jeddah to Madinah by starting point",
        head: ["Option", "From Jeddah airport", "From an address in Jeddah", "Arriving in Madinah"],
        rows: [
          ["Haramain train", "Station at the airport; about 2 h to Madinah", "Drive to Sulaymaniyah station first", "Station about 7 km from the Prophet's Mosque"],
          ["Private car", "From arrivals; about 400 km, around 4 h", "From your door; about 404 km, around 4 h 07 min", "To your hotel, as close as access allows"],
          ["Domestic flight", "Another check-in after landing", "Drive to the airport first", "Madinah airport, then a drive to the city"],
          ["Intercity bus", "Check the departure point", "Check the departure point", "Depends on the stop"],
        ],
      },
      faqs: [
        { q: "How long is the train from Jeddah airport to Madinah?", a: "About two hours according to Saudipedia. Check the current timetable for your date with Saudi Arabian Railways." },
        { q: "How far is Madinah from Jeddah by road?", a: "About 404 km from central Jeddah to the Prophet's Mosque area, around 4 hours 7 minutes without stops (Google Maps, November 2026)." },
        { q: "Is it better to take the train or a private car after a long flight?", a: "The train is quicker on board; a car avoids two more changes with luggage. For families with suitcases, many prefer the car." },
        { q: "Should I fly from Jeddah to Madinah?", a: "Rarely, for this distance. If you have not booked yet, check whether you can fly into Madinah directly instead." },
        { q: "Can I book a private car from Jeddah airport to my Madinah hotel?", a: "Yes. Send your flight number, passengers, bags and hotel on the Jeddah to Madinah page for a quotation." },
      ],
    },
    ar: {
      nav: "من جدة إلى المدينة: الخيارات",
      title: "جدة إلى المدينة: القطار أم الطيران أم السيارة؟",
      description: "مقارنة الطريق من جدة إلى المدينة بحسب نقطة انطلاقك، المطار عند الوصول أو عنوان في جدة: قطار الحرمين أو الطيران أو الحافلة أو السيارة الخاصة.",
      h1: "من جدة إلى المدينة: القطار أم الطيران أم الحافلة أم السيارة الخاصة؟",
      answer:
        "من جدة إلى المدينة المنورة يمكنك ركوب قطار الحرمين أو رحلة طيران داخلية أو الحافلة أو سيارة خاصة. ومن مطار الملك عبدالعزيز الدولي مباشرة يستغرق القطار نحو ساعتين إلى المدينة، ومحطتها على بعد نحو 7 كم من المسجد النبوي. أما السيارة الخاصة فتقطع نحو 400 كم في قرابة أربع ساعات، من صالة الوصول أو عنوانك في جدة حتى فندقك.",
      summary: "الخيار الأنسب يعتمد على نقطة انطلاقك: المطار بعد الهبوط مباشرة، أو عنوان في جدة.",
      sections: [
        {
          h: "نقطة انطلاقك تغيّر الإجابة",
          p: [
            "رحلتان مختلفتان تمامًا على هذا المسار. الأولى تبدأ في مطار الملك عبدالعزيز الدولي بعد دقائق من رحلة طيران طويلة، وغالبًا مع العائلة وحقائب كثيرة. والثانية تبدأ من منزل أو فندق في جدة، وأنت مرتاح ولديك وقت للتخطيط. ويبدو القطار والحافلة والسيارة الخاصة مختلفة من كل نقطة، لذلك يتناولها هذا الدليل واحدة بعد الأخرى.",
          ],
        },
        {
          h: "الانطلاق من مطار جدة بعد الهبوط مباشرة",
          p: [
            "لقطار الحرمين محطة في مطار الملك عبدالعزيز الدولي، وتذكر سعوديبيديا أن الرحلة من المطار إلى المدينة نحو ساعتين. ولمسافر بحقائب خفيفة يهبط في وقت تعمل فيه القطارات يصعب أن تجد أفضل من ذلك. لكنه يعني المشي إلى المحطة بحقائبك، وانتظار موعد الانطلاق، ثم إيجاد سيارة في محطة المدينة الواقعة في مدينة المعرفة الاقتصادية على بعد نحو 7 كم من المسجد النبوي.",
            "أما السيارة الخاصة فتستقبلك عند صالة الوصول وتقطع نحو 400 كم في قرابة أربع ساعات حتى فندقك مباشرة. وهي أبطأ من القطار، لكن بعد رحلة ليلية تفضّل عائلات كثيرة سيارة واحدة وفرصة للنوم بدل تبديلين إضافيين مع الحقائب والأطفال المتعبين. أعطِ رقم رحلتك ليُخطَّط الاستقبال على وقت وصولك الفعلي، واحسب وقت الجوازات واستلام الحقائب.",
          ],
        },
        {
          h: "الانطلاق من عنوان في جدة",
          p: [
            "من داخل المدينة ينطلق القطار من محطة جدة في حي السليمانية، فتبدأ الرحلة بمشوار عبر جدة إلى المحطة. وتحقق من الجدول لمعرفة زمن الرحلة من محطة المدينة، فهي ليست الرحلة نفسها التي تنطلق من المطار.",
            "وتبدأ السيارة الخاصة من بابك: نحو 404 كم من وسط جدة إلى منطقة المسجد النبوي، قرابة 4 ساعات و7 دقائق قبل التوقفات، ومعظمها على طريق 15. ولزيارة عائلية في عطلة نهاية الأسبوع يمكن تسعير رحلة العودة مع رحلة الذهاب.",
          ],
        },
        {
          h: "الطيران، وخيار ألّا تهبط في جدة أصلًا",
          p: [
            "تربط رحلات طيران داخلية بين جدة والمدينة، لكن مع إجراءات المطار والمشوار من مطار المدينة إلى المدينة، نادرًا ما يكون الطيران أبسط من القطار أو الطريق لهذه المسافة. والسؤال الأنفع يأتي قبل ذلك: إن لم تحجز رحلاتك الدولية بعد وتنوي زيارة المدينة أولًا، فتحقق هل يمكنك الهبوط مباشرة في مطار الأمير محمد بن عبدالعزيز الدولي بالمدينة لتستغني عن هذه المرحلة.",
          ],
        },
        {
          h: "الحافلة",
          p: [
            "تعمل حافلات بين جدة والمدينة، وهي غالبًا الخيار الأقل تكلفة. لكن الرحلة طويلة والمواعيد ثابتة وقد تكون أماكن التوقف بعيدة عن فندقك، فتأكد من المشغّل الحالي ونقطة الانطلاق ومكان النزول في المدينة قبل الاعتماد عليها.",
          ],
        },
        {
          h: "المدينة أولًا ثم مكة",
          p: [
            "تبدأ برامج عمرة كثيرة بالمدينة ثم مكة، فيُحرم المعتمر من ميقات ذي الحليفة (أبيار علي) عند مغادرة المدينة. وإن كانت هذه خطتك فاسأل أهل العلم عما ينطبق على رحلتك من جدة. وإن حجزت مرحلة المدينة إلى مكة بسيارة خاصة فيمكن تضمين التوقف عند أبيار علي.",
          ],
        },
      ],
      table: {
        h: "من جدة إلى المدينة بحسب نقطة الانطلاق",
        head: ["الخيار", "من مطار جدة", "من عنوان في جدة", "الوصول إلى المدينة"],
        rows: [
          ["قطار الحرمين", "محطة في المطار؛ نحو ساعتين إلى المدينة", "مشوار إلى محطة السليمانية أولًا", "المحطة على بعد نحو 7 كم من المسجد النبوي"],
          ["السيارة الخاصة", "من صالة الوصول؛ نحو 400 كم في قرابة 4 ساعات", "من بابك؛ نحو 404 كم في قرابة 4 ساعات و7 دقائق", "حتى فندقك، أقرب ما يسمح به الدخول"],
          ["الطيران الداخلي", "إجراءات سفر أخرى بعد الهبوط", "مشوار إلى المطار أولًا", "مطار المدينة ثم مشوار إلى المدينة"],
          ["الحافلة بين المدن", "تحقق من نقطة الانطلاق", "تحقق من نقطة الانطلاق", "بحسب مكان التوقف"],
        ],
      },
      faqs: [
        { q: "كم يستغرق القطار من مطار جدة إلى المدينة؟", a: "نحو ساعتين بحسب سعوديبيديا. وتحقق من الجدول الحالي لتاريخك لدى الخطوط الحديدية السعودية." },
        { q: "كم المسافة بين جدة والمدينة بالسيارة؟", a: "نحو 404 كم من وسط جدة إلى منطقة المسجد النبوي، قرابة 4 ساعات و7 دقائق بلا توقف (خرائط Google، نوفمبر 2026)." },
        { q: "أيهما أفضل بعد رحلة طيران طويلة: القطار أم السيارة الخاصة؟", a: "القطار أسرع في زمن الرحلة نفسها، والسيارة تغنيك عن تبديلين إضافيين مع الحقائب، وكثير من العائلات تفضّل السيارة." },
        { q: "هل أسافر بالطائرة من جدة إلى المدينة؟", a: "نادرًا ما يستحق ذلك لهذه المسافة. وإن لم تحجز بعد، فتحقق هل يمكنك الهبوط في المدينة مباشرة." },
        { q: "هل يمكنني حجز سيارة خاصة من مطار جدة إلى فندقي في المدينة؟", a: "نعم. أرسل رقم رحلتك وعدد الركاب والحقائب واسم الفندق من صفحة التوصيل من جدة إلى المدينة لتحصل على عرض سعر." },
      ],
    },
  },
};
