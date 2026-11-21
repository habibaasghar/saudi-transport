import type { ServicePage } from "../types";
import { CARS, CRANE, EXCAVATOR, HEAVY, LOADER, LOWBED, OVERSIZED, RELOCATION, SATHA, heavyPage } from "./shared";

/**
 * City pages for the three priority regions (owner, 2026-11-22: Riyadh, Jeddah, Dammam and nearby areas).
 * Local facts are limited to well-known public places (industrial cities, ports, main highways);
 * no office, yard, fleet size or response time is claimed.
 */
export const heavyCities: ServicePage[] = [
  heavyPage(`${SATHA}/riyadh`, SATHA, "satha", [`${HEAVY}/riyadh`, CARS, `${SATHA}/jeddah`, `${SATHA}/dammam`], {
    nav: "Satha in Riyadh",
    title: "Satha Riyadh: Car Recovery & Towing",
    description: "Satha car recovery in Riyadh and nearby towns such as Al Kharj and Diriyah: broken-down and accident cars, hydraulic satha, and Riyadh to other cities.",
    h1: "Satha Car Recovery in Riyadh",
    eyebrow: "Riyadh · satha",
    answer: "Satha recovery in Riyadh means a flatbed truck collecting a broken-down or accident-damaged car anywhere in the city, its ring roads and nearby towns such as Al Kharj, Diriyah and Al Muzahmiyah, and taking it to a workshop, home or agency. RideSaudi arranges Riyadh satha jobs from a WhatsApp location pin, and intercity recovery from Riyadh to other regions. The price is confirmed first.",
    summary: "Satha recovery across Riyadh, its ring roads and nearby towns, plus Riyadh to other cities.",
    sections: [
      {
        h: "Typical satha jobs in Riyadh",
        p: [
          "Riyadh is a city of long distances and fast roads. Breakdowns on King Fahd Road, the Northern, Eastern and Southern Ring Roads and the Makkah and Khurais roads are common, as are cars that will not start in a basement or compound after summer heat. Many jobs are planned rather than urgent: moving a car between a home in the north and a workshop area in the south, or collecting a car bought from a seller across the city.",
          "Riyadh's workshop districts, usually called al-Sinaiyah (الصناعية), and the agency service centres along the main roads are the most frequent destinations.",
        ],
        list: ["Breakdowns on ring roads and main highways", "Cars not starting in basements or compounds", "Workshop and agency drop-offs", "Purchases from sellers and auctions in another district", "Cars from Riyadh to Jeddah, Dammam or Qassim"],
      },
      {
        h: "Nearby towns and highways",
        p: [
          "Satha requests also come from towns within reach of the capital, including Al Kharj to the south-east, Diriyah and Al Uyaynah to the north-west, Al Muzahmiyah to the south-west and Huraymila to the north. Breakdowns on the highways out of Riyadh, toward Dammam, Qassim or Makkah, are arranged with the pickup point given as a location pin and the nearest landmark or exit.",
        ],
      },
      {
        h: "Practical notes for Riyadh",
        p: [
          "Summer heat makes waiting by a highway risky; stay in a safe place away from traffic while the satha is arranged. In basements and compounds, check the ceiling height and ask security in advance, because a satha may not fit and a wheel-lift tow or pushing the car to the entrance may be needed.",
          "For low or expensive cars ask for a hydraulic satha. For a car that must reach another city, compare the cost of satha recovery with planned car transport between cities.",
        ],
      },
    ],
    checklist: {
      h: "For a satha in Riyadh, send",
      items: ["Location pin and the nearest exit or landmark", "Car make, model and the problem", "Basement, compound or street", "Destination in Riyadh or another city", "Whether a hydraulic satha is needed"],
    },
    faqs: [
      { q: "Do you send a satha to Al Kharj and Diriyah?", a: "Yes. Requests from towns around Riyadh, such as Al Kharj, Diriyah, Al Muzahmiyah and Huraymila, are arranged in the same way. The distance is reflected in the quote." },
      { q: "Can a satha collect my car from a Riyadh basement car park?", a: "Sometimes. Many basements are too low for a satha. Tell us the clearance; a wheel-lift tow or moving the car to the entrance may be needed." },
      { q: "Can you take my car from Riyadh to a workshop in another city?", a: "Yes. Intercity satha recovery from Riyadh to Jeddah, Dammam, Qassim and other cities is quoted per job." },
      { q: "What do I do if my car breaks down on a Riyadh highway?", a: "Move to a safe place away from traffic, turn on hazard lights if possible, then send your location pin and the car details on WhatsApp." },
    ],
  }, {
    nav: "سطحة الرياض",
    title: "سطحة الرياض لنقل السيارات المعطلة",
    description: "سطحة في الرياض والمناطق القريبة مثل الخرج والدرعية لنقل السيارات المعطلة والمصدومة، وسطحة هيدروليك، ونقل من الرياض إلى المدن الأخرى.",
    h1: "سطحة نقل سيارات في الرياض",
    eyebrow: "الرياض · سطحات",
    answer: "سطحة الرياض تعني شاحنة إنقاذ تستلم السيارة المعطلة أو المصدومة من أي مكان في المدينة وطرقها الدائرية والمدن القريبة مثل الخرج والدرعية والمزاحمية، وتنقلها إلى ورشة أو البيت أو الوكالة. ترتب RideSaudi سطحات الرياض من موقع ترسله على واتساب، والنقل من الرياض إلى المناطق الأخرى، مع تأكيد السعر أولًا.",
    summary: "سطحة في أنحاء الرياض وطرقها الدائرية والمدن القريبة، ونقل من الرياض إلى المدن الأخرى.",
    sections: [
      {
        h: "طلبات السطحة المعتادة في الرياض",
        p: [
          "الرياض مدينة مسافات طويلة وطرق سريعة. الأعطال على طريق الملك فهد والدائري الشمالي والشرقي والجنوبي وطريق مكة وطريق خريص شائعة، وكذلك السيارات التي لا تشتغل في القبو أو الكمباوند بعد حر الصيف. وكثير من الطلبات مخطط وليس عاجلًا: نقل سيارة بين بيت في الشمال وورشة في الجنوب، أو استلام سيارة اشتُريت من بائع في الطرف الآخر من المدينة.",
          "مناطق الصناعية ومراكز خدمة الوكالات على الطرق الرئيسية هي أكثر الوجهات تكرارًا.",
        ],
        list: ["أعطال على الطرق الدائرية والسريعة", "سيارات لا تشتغل في القبو أو الكمباوند", "توصيل للورش والوكالات", "سيارات مشتراة من بائعين أو حراج في حي آخر", "نقل سيارات من الرياض إلى جدة أو الدمام أو القصيم"],
      },
      {
        h: "المدن القريبة والطرق السريعة",
        p: [
          "تصلنا طلبات سطحة أيضًا من المدن القريبة من العاصمة، ومنها الخرج جنوب شرق الرياض، والدرعية والعيينة شمال غربها، والمزاحمية جنوب غربها، وحريملاء شمالها. والأعطال على الطرق الخارجة من الرياض باتجاه الدمام أو القصيم أو مكة تُرتب بموقع الاستلام مع أقرب مخرج أو معلم.",
        ],
      },
      {
        h: "ملاحظات عملية في الرياض",
        p: [
          "حر الصيف يجعل الانتظار بجانب الطريق السريع خطرًا، فابقَ في مكان آمن بعيد عن السيارات أثناء ترتيب السطحة. وفي القبو والكمباوند افحص ارتفاع السقف وأبلغ الأمن مسبقًا، لأن السطحة قد لا تدخل، وقد نحتاج ونش سحب أو دفع السيارة إلى المدخل.",
          "للسيارات المنخفضة أو الغالية اطلب سطحة هيدروليك. وإذا كانت السيارة ستذهب إلى مدينة أخرى فقارن تكلفة السطحة العاجلة بنقل السيارة المخطط بين المدن.",
        ],
      },
    ],
    checklist: {
      h: "لطلب سطحة في الرياض أرسل",
      items: ["الموقع وأقرب مخرج أو معلم", "ماركة السيارة وموديلها والمشكلة", "قبو أو كمباوند أو شارع", "الوجهة داخل الرياض أو مدينة أخرى", "هل تحتاج سطحة هيدروليك"],
    },
    faqs: [
      { q: "هل ترسلون سطحة إلى الخرج والدرعية؟", a: "نعم. الطلبات من المدن حول الرياض مثل الخرج والدرعية والمزاحمية وحريملاء تُرتب بالطريقة نفسها، وتنعكس المسافة في عرض السعر." },
      { q: "هل تستلم السطحة سيارتي من قبو في الرياض؟", a: "أحيانًا. كثير من المواقف السفلية منخفضة على السطحة. أخبرنا بارتفاع السقف، فقد نحتاج ونش سحب أو إخراج السيارة إلى المدخل." },
      { q: "هل تنقلون سيارتي من الرياض إلى ورشة في مدينة أخرى؟", a: "نعم. السطحة من الرياض إلى جدة والدمام والقصيم ومدن أخرى تُسعر لكل طلب." },
      { q: "ماذا أفعل إذا تعطلت سيارتي على طريق سريع في الرياض؟", a: "ابتعد إلى مكان آمن عن السيارات، وشغّل الإشارات التحذيرية إن أمكن، ثم أرسل موقعك وتفاصيل السيارة على واتساب." },
    ],
  }),

  heavyPage(`${SATHA}/jeddah`, SATHA, "satha", [`${HEAVY}/jeddah`, CARS, `${SATHA}/riyadh`, `${SATHA}/dammam`], {
    nav: "Satha in Jeddah",
    title: "Satha Jeddah: Car Recovery & Transport",
    description: "Satha car recovery in Jeddah and nearby Makkah, Rabigh and KAEC: breakdowns, accident cars, cars from Jeddah port, and Jeddah to Riyadh car moves.",
    h1: "Satha Car Recovery in Jeddah",
    eyebrow: "Jeddah · satha",
    answer: "Satha recovery in Jeddah covers broken-down and accident cars across the city, from the north districts and the Corniche to the south, plus nearby Makkah, Rabigh, Thuwal and King Abdullah Economic City. RideSaudi also arranges satha moves for cars collected from Jeddah Islamic Port and cars travelling from Jeddah to Riyadh, Madinah or Dammam. Send a location pin; the price is confirmed first.",
    summary: "Satha recovery across Jeddah and nearby Makkah, Rabigh and KAEC, including cars collected from the port.",
    sections: [
      {
        h: "What Jeddah satha requests look like",
        p: [
          "Jeddah's humidity and heat are hard on batteries and cooling systems, so non-starting cars in apartment car parks and overheating cars on Prince Majid Road, the Haramain road and King Abdulaziz Road are frequent requests. Accident cars from the city's busy junctions usually go to workshops in the industrial area in the south or to agency service centres.",
          "Jeddah is also where many imported and shipped cars arrive. Cars cleared at Jeddah Islamic Port often need a satha to a showroom, a home or onward to another city.",
        ],
        list: ["Non-starting or overheated cars", "Accident cars to workshops and agencies", "Cars collected from Jeddah Islamic Port", "Cars to and from Makkah and the north coast", "Jeddah to Riyadh, Madinah or Dammam car moves"],
      },
      {
        h: "Makkah, Rabigh and the north coast",
        p: [
          "Requests also come from Makkah, Bahra and Al Jumum, and north along the coastal road to Thuwal, King Abdullah Economic City and Rabigh. A satha job that enters the central area of Makkah needs a driver permitted to enter it; say so in your request so the right truck is matched.",
        ],
      },
      {
        h: "Practical notes for Jeddah",
        p: [
          "During heavy rain, low streets and underpasses in Jeddah can flood. Do not drive a car through standing water to meet a satha; send your pin and wait somewhere safe. For cars collected from the port, have the customs and release documents ready, because the gate will ask for them before the car leaves.",
        ],
      },
    ],
    checklist: {
      h: "For a satha in Jeddah, send",
      items: ["Location pin or district name", "Car make, model and the problem", "Port release papers if collecting from the port", "Destination: Jeddah, Makkah or another city", "Hydraulic satha needed or not"],
    },
    faqs: [
      { q: "Can you collect a car from Jeddah Islamic Port?", a: "Yes, once the car is released. Have the release documents ready for the port gate, and tell us the destination: showroom, home or another city." },
      { q: "Do you send a satha to Makkah from Jeddah?", a: "Yes. Jobs inside Makkah's central area need a driver permitted to enter it, so mention the exact location in your request." },
      { q: "Can you move my car from Jeddah to Riyadh?", a: "Yes, either as satha recovery for a non-running car or as planned car transport between cities. The quote states the pickup and delivery windows." },
      { q: "Do you cover King Abdullah Economic City and Rabigh?", a: "Yes. Requests along the coast north of Jeddah, including Thuwal, KAEC and Rabigh, are arranged per job." },
    ],
  }, {
    nav: "سطحة جدة",
    title: "سطحة جدة لنقل السيارات",
    description: "سطحة في جدة وما حولها من مكة ورابغ ومدينة الملك عبدالله الاقتصادية: أعطال وسيارات مصدومة، وسيارات من ميناء جدة، ونقل من جدة إلى الرياض.",
    h1: "سطحة نقل سيارات في جدة",
    eyebrow: "جدة · سطحات",
    answer: "سطحة جدة تغطي السيارات المعطلة والمصدومة في أنحاء المدينة من الأحياء الشمالية والكورنيش إلى الجنوب، إلى جانب مكة ورابغ وثول ومدينة الملك عبدالله الاقتصادية. وترتب RideSaudi أيضًا نقل السيارات المستلمة من ميناء جدة الإسلامي، والسيارات المتجهة من جدة إلى الرياض أو المدينة أو الدمام. أرسل موقعك ونؤكد السعر أولًا.",
    summary: "سطحة في أنحاء جدة وما حولها من مكة ورابغ والاقتصادية، ومنها السيارات المستلمة من الميناء.",
    sections: [
      {
        h: "طلبات السطحة المعتادة في جدة",
        p: [
          "رطوبة جدة وحرها يرهقان البطاريات وأنظمة التبريد، لذلك تكثر طلبات السيارات التي لا تشتغل في مواقف العمائر والسيارات التي ارتفعت حرارتها على طريق الأمير ماجد وطريق الحرمين وطريق الملك عبدالعزيز. والسيارات المصدومة من التقاطعات المزدحمة تذهب غالبًا إلى ورش المنطقة الصناعية جنوب المدينة أو مراكز خدمة الوكالات.",
          "وجدة أيضًا بوابة كثير من السيارات المستوردة والمشحونة. السيارات المفسوحة في ميناء جدة الإسلامي تحتاج غالبًا سطحة إلى المعرض أو البيت أو إلى مدينة أخرى.",
        ],
        list: ["سيارات لا تشتغل أو ارتفعت حرارتها", "سيارات مصدومة إلى الورش والوكالات", "سيارات مستلمة من ميناء جدة الإسلامي", "سيارات من وإلى مكة والساحل الشمالي", "نقل من جدة إلى الرياض أو المدينة أو الدمام"],
      },
      {
        h: "مكة ورابغ والساحل الشمالي",
        p: [
          "تصلنا الطلبات أيضًا من مكة وبحرة والجموم، وشمالًا على الطريق الساحلي إلى ثول ومدينة الملك عبدالله الاقتصادية ورابغ. وإذا كانت السيارة داخل المنطقة المركزية في مكة فيلزم سائق مسموح له بالدخول، فاذكر ذلك في طلبك لنختار الشاحنة المناسبة.",
        ],
      },
      {
        h: "ملاحظات عملية في جدة",
        p: [
          "مع الأمطار الغزيرة قد تتجمع المياه في الشوارع المنخفضة والأنفاق. لا تقد السيارة في المياه لتلاقي السطحة، أرسل موقعك وانتظر في مكان آمن. وللسيارات المستلمة من الميناء جهّز أوراق الفسح والجمارك، لأن البوابة تطلبها قبل خروج السيارة.",
        ],
      },
    ],
    checklist: {
      h: "لطلب سطحة في جدة أرسل",
      items: ["الموقع أو اسم الحي", "ماركة السيارة وموديلها والمشكلة", "أوراق الفسح إذا كان الاستلام من الميناء", "الوجهة: جدة أو مكة أو مدينة أخرى", "هل تحتاج سطحة هيدروليك"],
    },
    faqs: [
      { q: "هل تستلمون سيارة من ميناء جدة الإسلامي؟", a: "نعم بعد فسح السيارة. جهّز أوراق الفسح لبوابة الميناء، وأخبرنا بالوجهة: المعرض أو البيت أو مدينة أخرى." },
      { q: "هل ترسلون سطحة من جدة إلى مكة؟", a: "نعم. الطلبات داخل المنطقة المركزية في مكة تحتاج سائقًا مسموحًا له بالدخول، فاذكر الموقع بالتحديد في طلبك." },
      { q: "هل تنقلون سيارتي من جدة إلى الرياض؟", a: "نعم، إما كسطحة لسيارة معطلة أو كنقل مخطط بين المدن، ويذكر عرض السعر نافذتي الاستلام والتسليم." },
      { q: "هل تغطون مدينة الملك عبدالله الاقتصادية ورابغ؟", a: "نعم. الطلبات على الساحل شمال جدة، ومنها ثول والاقتصادية ورابغ، تُرتب لكل طلب." },
    ],
  }),

  heavyPage(`${SATHA}/dammam`, SATHA, "satha", [`${HEAVY}/dammam`, CARS, `${SATHA}/riyadh`, `${SATHA}/jeddah`], {
    nav: "Satha in Dammam & Khobar",
    title: "Satha Dammam & Al Khobar Car Recovery",
    description: "Satha car recovery in Dammam, Al Khobar, Dhahran, Qatif, Jubail and Al Ahsa: breakdowns, accident cars, port cars and Eastern Province to Riyadh moves.",
    h1: "Satha Car Recovery in Dammam, Al Khobar and the Eastern Province",
    eyebrow: "Dammam · Khobar · satha",
    answer: "Satha recovery in the Eastern Province covers Dammam, Al Khobar and Dhahran as one metro area, plus Qatif, Saihat, Ras Tanura, Jubail, Abqaiq and Al Ahsa. RideSaudi arranges flatbed recovery for broken-down and accident cars, cars collected from King Abdulaziz Port, and cars going from the Eastern Province to Riyadh. Send your location pin; the price is confirmed before dispatch.",
    summary: "Satha recovery across Dammam, Al Khobar, Dhahran, Qatif, Jubail and Al Ahsa, including port cars.",
    sections: [
      {
        h: "Dammam, Al Khobar and Dhahran",
        p: [
          "The three cities run into each other, so a single satha job often starts in one and ends in another: a breakdown on the Dammam–Khobar highway taken to a workshop in Dammam's industrial area, or an accident car from Al Khobar taken to an agency in Dammam. King Fahd Road, the Dhahran–Jubail highway and the roads around the airport are common pickup points.",
          "King Abdulaziz Port in Dammam receives imported vehicles; once released, they often need a satha to a showroom or onward to Riyadh.",
        ],
        list: ["Breakdowns between Dammam, Khobar and Dhahran", "Accident cars to workshops and agencies", "Cars collected from King Abdulaziz Port", "Cars from Jubail, Qatif and Al Ahsa", "Eastern Province to Riyadh car moves"],
      },
      {
        h: "Jubail, Qatif, Ras Tanura and Al Ahsa",
        p: [
          "North of Dammam, requests come from Qatif, Saihat, Safwa, Ras Tanura and Jubail; to the south-west from Abqaiq and Al Ahsa (Hofuf and Al Mubarraz). These are longer runs, so give the exact location and the nearest landmark; residential compounds and industrial sites usually need gate approval before a satha can enter.",
        ],
      },
      {
        h: "Practical notes for the Eastern Province",
        p: [
          "Wind-blown sand and fog on the coastal highways reduce visibility; if your car stops on a highway shoulder, move away from the traffic lane. Many employer compounds and plant areas have security gates, so arrange entry with security before the satha arrives.",
        ],
      },
    ],
    checklist: {
      h: "For a satha in the Eastern Province, send",
      items: ["Location pin and the city: Dammam, Khobar, Jubail, Al Ahsa…", "Car make, model and the problem", "Gate or compound access arranged or not", "Destination and preferred time", "Port release papers if collecting from the port"],
    },
    faqs: [
      { q: "Do you cover Al Khobar and Dhahran as well as Dammam?", a: "Yes. Dammam, Al Khobar and Dhahran are treated as one area, and jobs between them are common." },
      { q: "Can you send a satha to Jubail or Al Ahsa?", a: "Yes. Jubail, Qatif, Ras Tanura, Abqaiq and Al Ahsa are covered per job. Give the exact location, and arrange compound or site gate access if needed." },
      { q: "Can you collect a car from Dammam port?", a: "Yes, once it is released from King Abdulaziz Port. Bring the release documents and tell us the destination." },
      { q: "Can you take my car from Dammam to Riyadh?", a: "Yes, as satha recovery or planned car transport between cities. The quote states the pickup and delivery windows." },
    ],
  }, {
    nav: "سطحة الدمام والخبر",
    title: "سطحة الدمام والخبر لنقل السيارات",
    description: "سطحة في الدمام والخبر والظهران والقطيف والجبيل والأحساء: أعطال وسيارات مصدومة وسيارات الميناء، ونقل من المنطقة الشرقية إلى الرياض.",
    h1: "سطحة نقل سيارات في الدمام والخبر والمنطقة الشرقية",
    eyebrow: "الدمام · الخبر · سطحات",
    answer: "سطحة المنطقة الشرقية تغطي الدمام والخبر والظهران كمنطقة واحدة، إلى جانب القطيف وسيهات ورأس تنورة والجبيل وبقيق والأحساء. ترتب RideSaudi سطحات للسيارات المعطلة والمصدومة، والسيارات المستلمة من ميناء الملك عبدالعزيز، والسيارات المتجهة من الشرقية إلى الرياض. أرسل موقعك ونؤكد السعر قبل إرسال السطحة.",
    summary: "سطحة في الدمام والخبر والظهران والقطيف والجبيل والأحساء، ومنها سيارات الميناء.",
    sections: [
      {
        h: "الدمام والخبر والظهران",
        p: [
          "المدن الثلاث متصلة ببعضها، لذلك تبدأ السطحة كثيرًا في مدينة وتنتهي في أخرى: عطل على طريق الدمام الخبر السريع يُنقل إلى ورشة في صناعية الدمام، أو سيارة مصدومة من الخبر إلى وكالة في الدمام. وطريق الملك فهد وطريق الظهران الجبيل والطرق حول المطار نقاط استلام متكررة.",
          "ميناء الملك عبدالعزيز في الدمام يستقبل سيارات مستوردة، وبعد فسحها تحتاج غالبًا سطحة إلى المعرض أو إلى الرياض.",
        ],
        list: ["أعطال بين الدمام والخبر والظهران", "سيارات مصدومة إلى الورش والوكالات", "سيارات مستلمة من ميناء الملك عبدالعزيز", "سيارات من الجبيل والقطيف والأحساء", "نقل من الشرقية إلى الرياض"],
      },
      {
        h: "الجبيل والقطيف ورأس تنورة والأحساء",
        p: [
          "شمال الدمام تصلنا الطلبات من القطيف وسيهات وصفوى ورأس تنورة والجبيل، وجنوب غربها من بقيق والأحساء (الهفوف والمبرز). هذه مسافات أطول، فحدد الموقع بالضبط وأقرب معلم، والكمباوندات والمواقع الصناعية تحتاج عادة موافقة البوابة قبل دخول السطحة.",
        ],
      },
      {
        h: "ملاحظات عملية في الشرقية",
        p: [
          "الغبار والضباب على الطرق الساحلية يقللان الرؤية، فإذا توقفت سيارتك على كتف الطريق ابتعد عن مسار السيارات. وكثير من كمباوندات الشركات ومناطق المصانع لها بوابات أمن، فرتب الدخول مع الأمن قبل وصول السطحة.",
        ],
      },
    ],
    checklist: {
      h: "لطلب سطحة في الشرقية أرسل",
      items: ["الموقع والمدينة: الدمام، الخبر، الجبيل، الأحساء…", "ماركة السيارة وموديلها والمشكلة", "هل رُتب دخول البوابة أو الكمباوند", "الوجهة والوقت المفضل", "أوراق الفسح إذا كان الاستلام من الميناء"],
    },
    faqs: [
      { q: "هل تغطون الخبر والظهران إلى جانب الدمام؟", a: "نعم. الدمام والخبر والظهران منطقة واحدة عندنا، والطلبات بينها شائعة." },
      { q: "هل ترسلون سطحة إلى الجبيل أو الأحساء؟", a: "نعم. الجبيل والقطيف ورأس تنورة وبقيق والأحساء تُغطى لكل طلب. حدد الموقع بالضبط، ورتب دخول بوابة الكمباوند أو الموقع عند الحاجة." },
      { q: "هل تستلمون سيارة من ميناء الدمام؟", a: "نعم بعد فسحها من ميناء الملك عبدالعزيز. أحضر أوراق الفسح وأخبرنا بالوجهة." },
      { q: "هل تنقلون سيارتي من الدمام إلى الرياض؟", a: "نعم، كسطحة أو كنقل مخطط بين المدن، ويذكر عرض السعر نافذتي الاستلام والتسليم." },
    ],
  }),

  heavyPage(`${HEAVY}/riyadh`, HEAVY, "lowbed", [LOWBED, EXCAVATOR, LOADER, `${HEAVY}/jeddah`, `${HEAVY}/dammam`, `${SATHA}/riyadh`], {
    nav: "Heavy Equipment Transport Riyadh",
    title: "Lowbed & Heavy Equipment Transport Riyadh",
    description: "Lowbed and heavy equipment transport in Riyadh: industrial cities, Al Kharj, Sudair and project sites, plus Riyadh to Dammam, Jubail, Jeddah and Qassim.",
    h1: "Lowbed and Heavy Equipment Transport in Riyadh",
    eyebrow: "Riyadh · lowbed",
    answer: "Heavy equipment transport in Riyadh moves excavators, shuwel loaders, dozers, cranes and plant between the capital's industrial cities, rental yards and project sites, and from Riyadh to Al Kharj, Sudair, Qassim, the Eastern Province and Jeddah. RideSaudi matches each machine to a flatbed or lowbed and plans city timing and permits. Every move is quoted from the machine's weight and size.",
    summary: "Lowbed and flatbed moves between Riyadh's industrial cities, rental yards and project sites, and onward to other regions.",
    sections: [
      {
        h: "Where machinery moves in and around Riyadh",
        p: [
          "Riyadh's construction pipeline keeps machines moving: housing and road projects on the city edges, giga-project sites such as Diriyah to the north-west and Qiddiya to the south-west, and continuous utility work. Rental yards and contractors' depots, many in the industrial areas on the southern and eastern sides of the city, are the usual starting points.",
          "The industrial cities run by MODON in Riyadh, together with Sudair City for Industry and Business to the north and the industrial zones of Al Kharj to the south-east, generate factory machinery and equipment moves as well as construction plant.",
        ],
        list: ["Rental yards and contractor depots to project sites", "Machines for road, housing and utility projects", "Factory equipment within Riyadh's industrial cities", "Riyadh to Sudair, Al Kharj and Qassim", "Riyadh to Dammam, Jubail and Jeddah"],
      },
      {
        h: "City timing and access in Riyadh",
        p: [
          "Heavy trucks face time and road restrictions inside Riyadh, so a lowbed move into or across the city is planned around the permitted hours and routes. Big sites usually need gate passes and set delivery windows. Allow for both when choosing a date, and share the site contact who can open the gate.",
        ],
      },
      {
        h: "Intercity moves from Riyadh",
        p: [
          "The main corridors out of Riyadh are east to Dammam and Jubail, west toward Taif, Makkah and Jeddah, and north to Qassim. Moves to the Eastern Province are frequent because of the industrial and energy projects there. Long-distance moves of large machines may need permits and escorts, which are planned before the date is confirmed.",
        ],
      },
    ],
    checklist: {
      h: "For heavy transport in Riyadh, send",
      items: ["Machine type, model and operating weight", "Transport dimensions", "Site location in Riyadh and gate times", "Destination city and site", "Required date"],
    },
    faqs: [
      { q: "Can you move equipment into central Riyadh during the day?", a: "Heavy trucks are restricted on many Riyadh roads at certain times. The move is planned around the permitted hours and routes, and the timing is confirmed in the quote." },
      { q: "Do you transport machines from Riyadh to Jubail?", a: "Yes. Riyadh to Dammam and Jubail is one of the busiest corridors for machinery, and moves are planned with the right trailer and any permit needed." },
      { q: "Do you cover Sudair and Al Kharj industrial areas?", a: "Yes. Moves to and from Sudair City for Industry and Business and the Al Kharj industrial zones are quoted per job." },
      { q: "Can you deliver a rented machine from a Riyadh yard to a site?", a: "Yes. Rental yard deliveries and returns are common, and repeat moves can be quoted together." },
    ],
  }, {
    nav: "نقل معدات ثقيلة الرياض",
    title: "لوبد ونقل معدات ثقيلة في الرياض",
    description: "لوبد ونقل معدات ثقيلة في الرياض: المدن الصناعية والخرج وسدير ومواقع المشاريع، ومن الرياض إلى الدمام والجبيل وجدة والقصيم.",
    h1: "لوبد ونقل المعدات الثقيلة في الرياض",
    eyebrow: "الرياض · لوبد",
    answer: "نقل المعدات الثقيلة في الرياض يعني نقل الحفارات والشيولات والدركترات والكرينات والمعدات بين المدن الصناعية وساحات التأجير ومواقع المشاريع في العاصمة، ومن الرياض إلى الخرج وسدير والقصيم والشرقية وجدة. تطابق RideSaudi كل معدة مع سطحة أو لوبد وتخطط توقيت المدينة والتصاريح، وكل عملية تُسعر حسب وزن المعدة ومقاساتها.",
    summary: "نقل باللوبد والسطحة بين مدن الرياض الصناعية وساحات التأجير ومواقع المشاريع، ومنها إلى المناطق الأخرى.",
    sections: [
      {
        h: "أين تتنقل المعدات في الرياض وحولها",
        p: [
          "مشاريع الرياض تُبقي المعدات في حركة دائمة: مشاريع الإسكان والطرق على أطراف المدينة، والمشاريع الكبرى مثل الدرعية شمال غرب المدينة والقدية جنوب غربها، وأعمال الخدمات المستمرة. ساحات التأجير ومستودعات المقاولين، وكثير منها في المناطق الصناعية جنوب المدينة وشرقها، هي نقطة البداية المعتادة.",
          "المدن الصناعية التابعة لهيئة «مدن» في الرياض، مع مدينة سدير للصناعة والأعمال شمالًا والمناطق الصناعية في الخرج جنوب شرقها، تولد طلبات نقل معدات المصانع إلى جانب معدات البناء.",
        ],
        list: ["من ساحات التأجير ومستودعات المقاولين إلى المواقع", "معدات لمشاريع الطرق والإسكان والخدمات", "معدات مصانع داخل مدن الرياض الصناعية", "من الرياض إلى سدير والخرج والقصيم", "من الرياض إلى الدمام والجبيل وجدة"],
      },
      {
        h: "التوقيت والدخول في الرياض",
        p: [
          "الشاحنات الثقيلة عليها قيود في الأوقات والطرق داخل الرياض، لذلك يُخطط نقل اللوبد داخل المدينة أو عبرها حسب الساعات والطرق المسموحة. والمواقع الكبيرة تحتاج غالبًا تصاريح دخول ونوافذ تسليم محددة. ضع الأمرين في الحسبان عند اختيار التاريخ، وأعطنا رقم المسؤول الذي يفتح البوابة.",
        ],
      },
      {
        h: "النقل من الرياض إلى المدن الأخرى",
        p: [
          "المسارات الرئيسية من الرياض شرقًا إلى الدمام والجبيل، وغربًا نحو الطائف ومكة وجدة، وشمالًا إلى القصيم. النقل إلى الشرقية متكرر بسبب المشاريع الصناعية ومشاريع الطاقة هناك. ونقل المعدات الكبيرة لمسافات طويلة قد يحتاج تصاريح ومرافقة يُخطط لها قبل تأكيد الموعد.",
        ],
      },
    ],
    checklist: {
      h: "للنقل الثقيل في الرياض أرسل",
      items: ["نوع المعدة وموديلها ووزن التشغيل", "مقاسات النقل", "موقع الرياض وأوقات البوابة", "مدينة الوجهة والموقع", "التاريخ المطلوب"],
    },
    faqs: [
      { q: "هل يمكن نقل معدات إلى وسط الرياض نهارًا؟", a: "الشاحنات الثقيلة مقيدة في كثير من طرق الرياض في أوقات معينة. يُخطط النقل حسب الساعات والطرق المسموحة، ويُؤكد التوقيت في عرض السعر." },
      { q: "هل تنقلون معدات من الرياض إلى الجبيل؟", a: "نعم. الرياض إلى الدمام والجبيل من أكثر مسارات نقل المعدات، ويُخطط النقل بالتريلا المناسبة وأي تصريح لازم." },
      { q: "هل تغطون سدير والمناطق الصناعية في الخرج؟", a: "نعم. النقل من وإلى مدينة سدير للصناعة والأعمال والمناطق الصناعية في الخرج يُسعر لكل عملية." },
      { q: "هل توصلون معدة مستأجرة من ساحة في الرياض إلى الموقع؟", a: "نعم. توصيل معدات التأجير وإرجاعها شائع، ويمكن تسعير النقل المتكرر معًا." },
    ],
  }),

  heavyPage(`${HEAVY}/jeddah`, HEAVY, "lowbed", [LOWBED, CRANE, RELOCATION, `${HEAVY}/riyadh`, `${HEAVY}/dammam`, `${SATHA}/jeddah`], {
    nav: "Heavy Equipment Transport Jeddah",
    title: "Lowbed & Heavy Equipment Transport Jeddah",
    description: "Heavy equipment and lowbed transport in Jeddah: Jeddah Islamic Port, industrial city, KAEC, Rabigh and Yanbu, plus Jeddah to Riyadh and Makkah sites.",
    h1: "Lowbed and Heavy Equipment Transport in Jeddah",
    eyebrow: "Jeddah · lowbed",
    answer: "Heavy equipment transport in Jeddah moves machinery from Jeddah Islamic Port, the city's industrial areas and rental yards to sites in Jeddah, Makkah and along the Red Sea coast to King Abdullah Economic City, Rabigh and Yanbu, and inland to Riyadh. RideSaudi matches each load to a flatbed or lowbed and plans port collection, permits and site access. Every move is quoted per load.",
    summary: "Lowbed and flatbed moves from Jeddah port and industrial areas to Jeddah, Makkah, the Red Sea coast and Riyadh.",
    sections: [
      {
        h: "Port, industrial areas and the coast",
        p: [
          "Jeddah Islamic Port is the Red Sea's main gateway for imported machinery, so many jobs begin with collecting a newly arrived machine once it has cleared customs. Jeddah's industrial city in the south of the metro area and the surrounding industrial districts are the other main starting points for plant and factory equipment.",
          "North along the coast, King Abdullah Economic City with its port, Rabigh with its refining and petrochemical complex, and Yanbu Industrial City generate project and plant moves, as do coastal tourism projects further north.",
        ],
        list: ["Collection of imported machines from Jeddah Islamic Port", "Jeddah industrial city and rental yards to sites", "Moves to KAEC, Rabigh and Yanbu", "Construction plant for Jeddah and Makkah projects", "Jeddah to Riyadh and inland regions"],
      },
      {
        h: "Port collections",
        p: [
          "A machine leaving the port needs its release documents and a booked gate slot. The trailer is chosen in advance from the machine's weight and dimensions, because the port is not the place to discover the machine is taller than expected. Some machines arrive with attachments packed separately; count them as part of the load.",
        ],
      },
      {
        h: "Makkah and project areas",
        p: [
          "Construction in Makkah and the routes around it brings a steady flow of machines from Jeddah. Deliveries into Makkah's central area require a driver permitted to enter it, and project sites keep strict delivery windows; both are confirmed when quoting.",
        ],
      },
    ],
    checklist: {
      h: "For heavy transport in Jeddah, send",
      items: ["Machine type, model and weight", "Transport dimensions", "Port release status if collecting from the port", "Destination site and access times", "Required date"],
    },
    faqs: [
      { q: "Can you collect an imported machine from Jeddah port?", a: "Yes, once it has customs release. Send the documents' status, the machine's weight and dimensions, and the destination so the right trailer is booked." },
      { q: "Do you transport machinery to Rabigh and Yanbu?", a: "Yes. Moves along the coast from Jeddah to King Abdullah Economic City, Rabigh and Yanbu are arranged per job." },
      { q: "Can you deliver equipment to sites in Makkah?", a: "Yes. Deliveries into Makkah's central area need a driver permitted to enter it and a confirmed delivery window." },
      { q: "Do you move equipment from Jeddah to Riyadh?", a: "Yes. Jeddah to Riyadh is a regular corridor; large machines may need permits, which are planned before the date is confirmed." },
    ],
  }, {
    nav: "نقل معدات ثقيلة جدة",
    title: "لوبد ونقل معدات ثقيلة في جدة",
    description: "نقل معدات ثقيلة ولوبد في جدة: ميناء جدة الإسلامي والمدينة الصناعية والاقتصادية ورابغ وينبع، ومن جدة إلى الرياض ومواقع مكة.",
    h1: "لوبد ونقل المعدات الثقيلة في جدة",
    eyebrow: "جدة · لوبد",
    answer: "نقل المعدات الثقيلة في جدة يعني نقل المعدات من ميناء جدة الإسلامي والمناطق الصناعية وساحات التأجير إلى المواقع في جدة ومكة وعلى ساحل البحر الأحمر حتى مدينة الملك عبدالله الاقتصادية ورابغ وينبع، وإلى الرياض. تطابق RideSaudi كل حمولة مع سطحة أو لوبد وتخطط الاستلام من الميناء والتصاريح ودخول المواقع، وكل عملية تُسعر لوحدها.",
    summary: "نقل باللوبد والسطحة من ميناء جدة ومناطقها الصناعية إلى جدة ومكة وساحل البحر الأحمر والرياض.",
    sections: [
      {
        h: "الميناء والمناطق الصناعية والساحل",
        p: [
          "ميناء جدة الإسلامي هو البوابة الرئيسية للمعدات المستوردة على البحر الأحمر، لذلك تبدأ كثير من الطلبات باستلام معدة وصلت حديثًا بعد فسحها جمركيًا. والمدينة الصناعية في جنوب جدة والأحياء الصناعية حولها هي نقطة البداية الأخرى لمعدات البناء والمصانع.",
          "شمالًا على الساحل، تولد مدينة الملك عبدالله الاقتصادية بمينائها، ورابغ بمجمعها للتكرير والبتروكيماويات، ومدينة ينبع الصناعية، طلبات نقل للمشاريع والمصانع، وكذلك المشاريع السياحية الساحلية شمالًا.",
        ],
        list: ["استلام معدات مستوردة من ميناء جدة الإسلامي", "من صناعية جدة وساحات التأجير إلى المواقع", "النقل إلى الاقتصادية ورابغ وينبع", "معدات البناء لمشاريع جدة ومكة", "من جدة إلى الرياض والمناطق الداخلية"],
      },
      {
        h: "الاستلام من الميناء",
        p: [
          "المعدة الخارجة من الميناء تحتاج أوراق الفسح وموعدًا محجوزًا للبوابة. وتُختار التريلا مسبقًا من وزن المعدة ومقاساتها، لأن الميناء ليس المكان المناسب لاكتشاف أن المعدة أعلى من المتوقع. وبعض المعدات تصل مع ملحقات مغلفة منفصلة، فاحسبها ضمن الحمولة.",
        ],
      },
      {
        h: "مكة ومناطق المشاريع",
        p: [
          "مشاريع البناء في مكة والطرق حولها تجلب تدفقًا مستمرًا للمعدات من جدة. التوصيل إلى المنطقة المركزية في مكة يحتاج سائقًا مسموحًا له بالدخول، ومواقع المشاريع تلتزم بنوافذ تسليم صارمة، ويُؤكد الأمران عند التسعير.",
        ],
      },
    ],
    checklist: {
      h: "للنقل الثقيل في جدة أرسل",
      items: ["نوع المعدة وموديلها ووزنها", "مقاسات النقل", "حالة الفسح إذا كان الاستلام من الميناء", "موقع الوجهة وأوقات الدخول", "التاريخ المطلوب"],
    },
    faqs: [
      { q: "هل تستلمون معدة مستوردة من ميناء جدة؟", a: "نعم بعد فسحها جمركيًا. أرسل حالة الأوراق ووزن المعدة ومقاساتها والوجهة حتى نحجز التريلا المناسبة." },
      { q: "هل تنقلون معدات إلى رابغ وينبع؟", a: "نعم. النقل على الساحل من جدة إلى مدينة الملك عبدالله الاقتصادية ورابغ وينبع يُرتب لكل عملية." },
      { q: "هل توصلون معدات إلى مواقع في مكة؟", a: "نعم. التوصيل إلى المنطقة المركزية في مكة يحتاج سائقًا مسموحًا له بالدخول ونافذة تسليم مؤكدة." },
      { q: "هل تنقلون معدات من جدة إلى الرياض؟", a: "نعم. جدة إلى الرياض مسار منتظم، والمعدات الكبيرة قد تحتاج تصاريح يُخطط لها قبل تأكيد الموعد." },
    ],
  }),

  heavyPage(`${HEAVY}/dammam`, HEAVY, "lowbed", [LOWBED, OVERSIZED, RELOCATION, `${HEAVY}/riyadh`, `${HEAVY}/jeddah`, `${SATHA}/dammam`], {
    nav: "Heavy Equipment Transport Dammam & Jubail",
    title: "Heavy Equipment Transport Dammam & Jubail",
    description: "Lowbed and heavy equipment transport in Dammam, Jubail, Al Khobar, Ras Tanura, Abqaiq and Al Ahsa: port, industrial cities and plant sites.",
    h1: "Lowbed and Heavy Equipment Transport in Dammam, Jubail and the Eastern Province",
    eyebrow: "Dammam · Jubail · lowbed",
    answer: "Heavy equipment transport in the Eastern Province moves machinery between King Abdulaziz Port in Dammam, the Dammam industrial cities, Jubail Industrial City, Ras Tanura, Abqaiq and Al Ahsa, and from the region to Riyadh. RideSaudi matches each load to a flatbed, lowbed or multi-axle trailer and plans site passes, permits and timing. Every move is quoted from the load's weight and size.",
    summary: "Lowbed and flatbed moves between Dammam port, the industrial cities, Jubail, Ras Tanura, Al Ahsa and Riyadh.",
    sections: [
      {
        h: "An industrial region built around plants and ports",
        p: [
          "The Eastern Province has the Kingdom's densest concentration of oil, gas, petrochemical and heavy industry. Jubail Industrial City to the north, the Dammam industrial cities, Ras Tanura's refinery and terminal, Abqaiq and the Al Ahsa fields all depend on moving equipment: construction plant for expansions, maintenance shutdown equipment, generators, compressors, pipe and factory machinery.",
          "King Abdulaziz Port in Dammam and the ports at Jubail receive imported machinery and project cargo, which then travels by road to the sites.",
        ],
        list: ["Port collections at Dammam and Jubail", "Plant and construction equipment for industrial sites", "Shutdown and maintenance equipment moves", "Generators, compressors and pipe on flatbeds", "Eastern Province to Riyadh and back"],
      },
      {
        h: "Site passes and safety requirements",
        p: [
          "Plants and large industrial sites in the region operate strict access control. Drivers and vehicles usually need gate passes arranged in advance, safety induction, and sometimes vehicle inspections and specific documentation. Tell us the site, the contact who issues passes and any contractor requirements, so the date is realistic.",
        ],
      },
      {
        h: "Roads and longer moves",
        p: [
          "Within the region, moves run along the Dhahran–Jubail and Abu Hadriyah highways and the Dammam–Al Ahsa road. The main corridor out is west to Riyadh. Large modules and vessels for plant projects are often exceptional loads, planned with multi-axle trailers, permits and escorts.",
        ],
      },
    ],
    checklist: {
      h: "For heavy transport in the Eastern Province, send",
      items: ["Load type, model, weight and dimensions", "Site name and gate-pass contact", "Port release status if collecting from a port", "Contractor or safety requirements", "Required date and site working hours"],
    },
    faqs: [
      { q: "Do you transport equipment to Jubail Industrial City?", a: "Yes. Moves between Dammam, Jubail and the industrial sites around them are among the most frequent in the region. Site gate passes are arranged with your site contact." },
      { q: "Can you move shutdown equipment to a plant in the Eastern Province?", a: "Yes. Send the equipment list, dates and site requirements; tight shutdown schedules should be requested as early as possible." },
      { q: "Do you cover Ras Tanura, Abqaiq and Al Ahsa?", a: "Yes. Moves to and from Ras Tanura, Abqaiq and Al Ahsa are quoted per job, with site access arranged in advance." },
      { q: "Can you collect machinery from King Abdulaziz Port in Dammam?", a: "Yes, once it has been released. The trailer is booked in advance from the machine's weight and dimensions." },
    ],
  }, {
    nav: "نقل معدات ثقيلة الدمام والجبيل",
    title: "نقل معدات ثقيلة ولوبد الدمام والجبيل",
    description: "لوبد ونقل معدات ثقيلة في الدمام والجبيل والخبر ورأس تنورة وبقيق والأحساء: الميناء والمدن الصناعية ومواقع المصانع.",
    h1: "لوبد ونقل المعدات الثقيلة في الدمام والجبيل والمنطقة الشرقية",
    eyebrow: "الدمام · الجبيل · لوبد",
    answer: "نقل المعدات الثقيلة في المنطقة الشرقية يعني نقل المعدات بين ميناء الملك عبدالعزيز في الدمام والمدن الصناعية بالدمام ومدينة الجبيل الصناعية ورأس تنورة وبقيق والأحساء، ومن المنطقة إلى الرياض. تطابق RideSaudi كل حمولة مع سطحة أو لوبد أو تريلا متعددة المحاور، وتخطط تصاريح المواقع والطرق والتوقيت، وكل عملية تُسعر حسب الوزن والمقاسات.",
    summary: "نقل باللوبد والسطحة بين ميناء الدمام والمدن الصناعية والجبيل ورأس تنورة والأحساء والرياض.",
    sections: [
      {
        h: "منطقة صناعية قائمة على المصانع والموانئ",
        p: [
          "المنطقة الشرقية فيها أكبر تركز في المملكة لصناعات النفط والغاز والبتروكيماويات والصناعات الثقيلة. مدينة الجبيل الصناعية شمالًا، والمدن الصناعية في الدمام، ومصفاة رأس تنورة وميناؤها، وبقيق، وحقول الأحساء، كلها تعتمد على نقل المعدات: معدات البناء للتوسعات، ومعدات الصيانة والإيقاف، والمولدات، والكمبروسرات، والمواسير، ومكائن المصانع.",
          "ميناء الملك عبدالعزيز في الدمام وموانئ الجبيل تستقبل المعدات المستوردة وشحنات المشاريع، ثم تُنقل برًا إلى المواقع.",
        ],
        list: ["الاستلام من موانئ الدمام والجبيل", "معدات المصانع والبناء للمواقع الصناعية", "نقل معدات الإيقاف والصيانة", "المولدات والكمبروسرات والمواسير على السطحات", "من الشرقية إلى الرياض والعكس"],
      },
      {
        h: "تصاريح المواقع ومتطلبات السلامة",
        p: [
          "المصانع والمواقع الصناعية الكبيرة في المنطقة تطبق رقابة دخول صارمة. السائقون والمركبات يحتاجون عادة تصاريح بوابة مرتبة مسبقًا وتعريف سلامة، وأحيانًا فحص المركبة ومستندات محددة. أخبرنا بالموقع والمسؤول عن إصدار التصاريح وأي متطلبات للمقاولين، حتى يكون الموعد واقعيًا.",
        ],
      },
      {
        h: "الطرق والنقل لمسافات أطول",
        p: [
          "داخل المنطقة يسير النقل على طريق الظهران الجبيل وطريق أبو حدرية وطريق الدمام الأحساء، والمسار الرئيسي للخروج غربًا إلى الرياض. الوحدات والأوعية الكبيرة لمشاريع المصانع تكون غالبًا حمولات استثنائية يُخطط لها بتريلات متعددة المحاور وتصاريح ومرافقة.",
        ],
      },
    ],
    checklist: {
      h: "للنقل الثقيل في الشرقية أرسل",
      items: ["نوع الحمولة وموديلها ووزنها ومقاساتها", "اسم الموقع ومسؤول تصاريح البوابة", "حالة الفسح إذا كان الاستلام من ميناء", "متطلبات المقاولين أو السلامة", "التاريخ المطلوب وساعات العمل في الموقع"],
    },
    faqs: [
      { q: "هل تنقلون معدات إلى مدينة الجبيل الصناعية؟", a: "نعم. النقل بين الدمام والجبيل والمواقع الصناعية حولهما من أكثر الطلبات في المنطقة، وتُرتب تصاريح البوابة مع مسؤول موقعك." },
      { q: "هل تنقلون معدات الإيقاف والصيانة إلى مصنع في الشرقية؟", a: "نعم. أرسل قائمة المعدات والتواريخ ومتطلبات الموقع، ويُفضل طلب جداول الإيقاف الضيقة في أقرب وقت." },
      { q: "هل تغطون رأس تنورة وبقيق والأحساء؟", a: "نعم. النقل من وإلى رأس تنورة وبقيق والأحساء يُسعر لكل عملية مع ترتيب دخول الموقع مسبقًا." },
      { q: "هل تستلمون معدات من ميناء الملك عبدالعزيز بالدمام؟", a: "نعم بعد فسحها، وتُحجز التريلا مسبقًا حسب وزن المعدة ومقاساتها." },
    ],
  }),
];
