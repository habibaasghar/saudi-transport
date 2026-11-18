import type { ServicePage } from "./types";

/**
 * Phase 2D (2026-11-18): the three P2 routes from docs/master/STAGE1_GAP_AUDIT.md section 2.
 * Each is the reverse of a live page, written for its own traveller: leaving AlUla for Madinah (often on
 * the way to Makkah), leaving Yanbu for a flight from Jeddah, and returning from the Khobar and Dhahran
 * area to the capital. The forward pages link here.
 *
 * Fact sources, checked 2026-11-18 on Google Maps (usual traffic, no stops):
 *  - AlUla town (AlUla Museum) to the Prophet's Mosque: 337 km, 3 h 51 min via Route 328.
 *    AlUla International Airport (ULH) to the Prophet's Mosque: 327 km, 3 h 39 min via Route 328.
 *    Alternative via Route 375 and Route 15: 391 km, 4 h 29 min.
 *  - Yanbu Al Bahr (Al Hadaiq) to King Abdulaziz International Airport: 324 km, 3 h 06 min;
 *    to Historic Jeddah (Al Balad): 343 km, 3 h 36 min. Coastal highway (Route 5 / 55M on Google Maps).
 *  - Al Khobar (King Abdullah Street, Al Khobar Al Shamalia) to King Abdullah Financial District, Riyadh:
 *    424 km, 4 h 29 min on the main highway.
 * Same rules as the other priority files: vehicle types only (sedan, GMC Yukon, Hyundai Staria),
 * owner-confirmed policies only, no prices, no capacity numbers, no train or flight timetables.
 */
const U = "2026-11-18";
const I = "services/intercity-transfers";

export const priorityRoutesD: ServicePage[] = [
  {
    path: `${I}/alula-to-madinah`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [
      `${I}/madinah-to-alula`,
      `${I}/madinah-to-makkah`,
      "services/tourism-transport/alula",
      "services/airport-transfers/alula-airport",
      "services/airport-transfers/madinah-airport",
      "services/umrah-transport/madinah-ziyarat",
      "services/city-transport/madinah",
      `${I}/alula-to-riyadh`,
    ],
    updated: U,
    copy: {
      en: {
        nav: "AlUla to Madinah",
        title: "AlUla to Madinah Private Car with Driver",
        description: "Private car with a driver from your AlUla resort or AlUla airport to your Madinah hotel: about 337 km, under four hours. One vehicle for your party only.",
        h1: "AlUla to Madinah by private car, from the resort to the Prophet's Mosque",
        eyebrow: "Intercity · AlUla → Madinah",
        answer:
          "A private AlUla to Madinah transfer is a pre-booked car with a driver from your hotel or resort in AlUla, or AlUla International Airport, to your hotel in Madinah. It is about 337 km via Route 328, around 3 hours 50 minutes of driving before stops. The vehicle is reserved for your party only, and RideSaudi quotes each journey individually.",
        summary: "Private car from AlUla to Madinah, about 337 km and under four hours, resort to hotel.",
        sections: [
          {
            h: "From the desert to the city of the Prophet",
            p: [
              "Most people on this road are moving on after a stay in AlUla: to pray in the Prophet's Mosque, to begin the Umrah part of a trip, or to fly home from Madinah. One vehicle and one driver take your party, and nobody else, from the resort door to your Madinah hotel, with all your luggage.",
            ],
          },
          {
            h: "The road and the time it takes",
            p: [
              "Google Maps measures about 337 km from AlUla town to the Prophet's Mosque area via Route 328, around 3 hours 51 minutes in usual traffic, and about 327 km and 3 hours 39 minutes from AlUla International Airport. A longer road via Route 375 and Route 15 is about 391 km. Towns are far apart for much of the drive, so a rest stop is planned rather than left to chance.",
            ],
          },
          {
            h: "Leaving your AlUla resort",
            p: [
              "AlUla's resorts are spread across the valley and some sit well away from the town, so give the exact resort name and your check-out time. If you have a Hegra visit or another booked activity on your last morning, tell us when it ends, and the departure is planned after it rather than squeezed against it.",
            ],
          },
          {
            h: "Arriving in Madinah",
            p: [
              "Streets around the Prophet's Mosque are restricted at prayer times and in busy periods, so the drop-off is made as close to your hotel as access allows at that hour. Give the hotel name and, if you know it, the nearest gate. Many travellers time the journey to arrive before a particular prayer; say which one and the pickup in AlUla is proposed from it.",
            ],
          },
          {
            h: "Continuing to Makkah for Umrah",
            p: [
              "If Madinah is a stop on the way to Makkah, the Miqat of Dhul Hulaifah (Abyar Ali) is on the road out of Madinah. You can book AlUla to Madinah now and Madinah to Makkah for a later date in the same enquiry, with the Miqat stop included on the second leg.",
            ],
          },
          {
            h: "Which vehicle to request",
            p: ["State the number of passengers and every bag. The quotation confirms the vehicle and its availability."],
            list: [
              "Sedan: a couple or a few passengers with light luggage",
              "GMC Yukon: a family on the longer leg of a two-city trip",
              "Hyundai Staria: larger families and groups with luggage for a long trip",
            ],
          },
        ],
        table: {
          h: "AlUla to Madinah route facts",
          head: ["Detail", "AlUla to Madinah"],
          rows: [
            ["Road distance", "About 337 km, AlUla town to the Prophet's Mosque area"],
            ["Driving time", "About 3 h 51 min without stops via Route 328 (Google Maps, checked November 2026)"],
            ["From AlUla airport", "About 327 km, about 3 h 39 min"],
            ["Longer alternative", "About 391 km via Route 375 and Route 15"],
            ["Pickup", "Your hotel or resort in AlUla, or AlUla International Airport"],
            ["Drop-off", "Your hotel in Madinah, as close as access allows"],
            ["Vehicle types", "Sedan, GMC Yukon or Hyundai Staria, confirmed in your quotation"],
            ["Shared seats", "None. One vehicle for your party only"],
          ],
        },
        checklist: {
          h: "Include this in your AlUla to Madinah enquiry",
          items: [
            "Resort or hotel name in AlUla, or your arrival flight into AlUla",
            "Hotel name in Madinah",
            "Date, check-out time and any activity on the last morning",
            "Number of passengers and every bag",
            "Whether you will continue to Makkah afterwards",
            "Preferred vehicle: sedan, GMC Yukon or Hyundai Staria",
          ],
        },
        faqs: [
          { q: "How far is Madinah from AlUla by road?", a: "About 337 km from AlUla town to the Prophet's Mosque area via Route 328, around 3 hours 51 minutes without stops (Google Maps, November 2026)." },
          { q: "Can you collect us from AlUla airport and drive us to Madinah?", a: "Yes. Give the flight number and arrival time; from the airport it is about 327 km, around 3 hours 39 minutes." },
          { q: "Can we visit Hegra on the morning we leave?", a: "Yes, if your visit is booked through the official AlUla channels. Tell us when it ends and the departure is planned after it." },
          { q: "Can I book the onward trip from Madinah to Makkah as well?", a: "Yes. Ask for both in one enquiry; the Madinah to Makkah leg can include the stop at Abyar Ali." },
          { q: "Is the car from AlUla to Madinah shared?", a: "No. The vehicle is reserved for your party only." },
          { q: "How much is a private car from AlUla to Madinah?", a: "No fixed fare is published. The quotation depends on the date, vehicle and passengers, and you see it before you confirm." },
        ],
      },
      ar: {
        nav: "العلا إلى المدينة",
        title: "توصيل من العلا إلى المدينة المنورة بسيارة خاصة مع سائق",
        description: "سيارة خاصة مع سائق من منتجعك أو مطار العلا إلى فندقك في المدينة المنورة: نحو 337 كم في أقل من أربع ساعات. السيارة لك ولمرافقيك فقط.",
        h1: "من العلا إلى المدينة بسيارة خاصة، من المنتجع إلى المسجد النبوي",
        eyebrow: "بين المدن · العلا ← المدينة",
        answer:
          "التوصيل الخاص من العلا إلى المدينة المنورة سيارة مع سائق تحجزها مسبقًا من فندقك أو منتجعك في العلا، أو من مطار العلا الدولي، إلى فندقك في المدينة. والمسافة نحو 337 كم عبر طريق 328، أي قرابة 3 ساعات و50 دقيقة قيادة قبل التوقفات. السيارة محجوزة لك ولمرافقيك فقط، وتُسعِّر RideSaudi كل رحلة على حدة.",
        summary: "سيارة خاصة من العلا إلى المدينة المنورة، نحو 337 كم في أقل من أربع ساعات، من المنتجع إلى الفندق.",
        sections: [
          {
            h: "من الصحراء إلى مدينة رسول الله ﷺ",
            p: [
              "معظم من يسلكون هذا الطريق ينتقلون بعد إقامة في العلا: للصلاة في المسجد النبوي، أو لبدء جزء العمرة من رحلتهم، أو للسفر من مطار المدينة. تنقلك أنت ومرافقيك فقط سيارة واحدة بسائق واحد، من باب المنتجع إلى فندقك في المدينة، مع كل أمتعتكم.",
            ],
          },
          {
            h: "الطريق والوقت الذي يستغرقه",
            p: [
              "تقيس خرائط Google نحو 337 كم من بلدة العلا إلى منطقة المسجد النبوي عبر طريق 328، قرابة 3 ساعات و51 دقيقة في الحركة المعتادة، ونحو 327 كم و3 ساعات و39 دقيقة من مطار العلا الدولي. وهناك طريق أطول عبر طريق 375 وطريق 15 بنحو 391 كم. والبلدات متباعدة في معظم الطريق، لذلك يُخطَّط توقف الراحة مسبقًا ولا يُترك للصدفة.",
            ],
          },
          {
            h: "المغادرة من منتجعك في العلا",
            p: [
              "تنتشر منتجعات العلا في الوادي وبعضها بعيد عن البلدة، فاذكر اسم المنتجع بدقة وموعد المغادرة. وإن كانت لديك زيارة للحِجر أو نشاط محجوز في صباحك الأخير، فأخبرنا بموعد انتهائه ليُخطَّط الانطلاق بعده لا قبله بضيق.",
            ],
          },
          {
            h: "الوصول إلى المدينة",
            p: [
              "تُقيَّد الشوارع حول المسجد النبوي في أوقات الصلاة والمواسم المزدحمة، فيكون النزول أقرب ما يسمح به الدخول في تلك الساعة. اذكر اسم الفندق وأقرب باب إن عرفته. ويحرص كثير من المسافرين على الوصول قبل صلاة معينة، فاذكرها ليُقترح موعد الاستلام في العلا بناءً عليها.",
            ],
          },
          {
            h: "إكمال الرحلة إلى مكة للعمرة",
            p: [
              "إن كانت المدينة محطة في طريقك إلى مكة، فميقات ذي الحليفة (أبيار علي) على الطريق الخارج من المدينة. ويمكنك حجز العلا إلى المدينة الآن، والمدينة إلى مكة لتاريخ لاحق في الطلب نفسه، مع التوقف عند الميقات في المرحلة الثانية.",
            ],
          },
          {
            h: "أي سيارة تطلب",
            p: ["اذكر عدد الركاب وكل حقيبة، ويؤكد عرض السعر السيارة وإتاحتها."],
            list: [
              "سيدان: لشخصين أو عدد قليل من الركاب بحقائب خفيفة",
              "جمس يوكن: لعائلة في المرحلة الأطول من رحلة بين مدينتين",
              "هيونداي ستاريا: للعائلات الكبيرة والمجموعات مع أمتعة رحلة طويلة",
            ],
          },
        ],
        table: {
          h: "معلومات مسار العلا إلى المدينة",
          head: ["التفصيل", "العلا إلى المدينة"],
          rows: [
            ["المسافة بالطريق", "نحو 337 كم من بلدة العلا إلى منطقة المسجد النبوي"],
            ["زمن القيادة", "نحو 3 ساعات و51 دقيقة بلا توقف عبر طريق 328 (خرائط Google، تحقق في نوفمبر 2026)"],
            ["من مطار العلا", "نحو 327 كم، قرابة 3 ساعات و39 دقيقة"],
            ["طريق بديل أطول", "نحو 391 كم عبر طريق 375 وطريق 15"],
            ["الاستلام", "فندقك أو منتجعك في العلا، أو مطار العلا الدولي"],
            ["الوصول", "فندقك في المدينة، أقرب ما يسمح به الدخول"],
            ["أنواع السيارات", "سيدان أو جمس يوكن أو هيونداي ستاريا، تُؤكَّد في عرض السعر"],
            ["مقاعد مشتركة", "لا. سيارة واحدة لمجموعتك فقط"],
          ],
        },
        checklist: {
          h: "ما الذي تذكره في طلب التوصيل من العلا إلى المدينة",
          items: [
            "اسم المنتجع أو الفندق في العلا، أو رحلة وصولك إلى العلا",
            "اسم الفندق في المدينة",
            "التاريخ وموعد المغادرة وأي نشاط في الصباح الأخير",
            "عدد الركاب وكل حقيبة",
            "هل ستكمل إلى مكة بعد ذلك",
            "السيارة المفضلة: سيدان أو جمس يوكن أو هيونداي ستاريا",
          ],
        },
        faqs: [
          { q: "كم المسافة من العلا إلى المدينة بالسيارة؟", a: "نحو 337 كم من بلدة العلا إلى منطقة المسجد النبوي عبر طريق 328، قرابة 3 ساعات و51 دقيقة بلا توقف (خرائط Google، نوفمبر 2026)." },
          { q: "هل تستقبلوننا من مطار العلا وتوصلوننا إلى المدينة؟", a: "نعم. اذكر رقم الرحلة وموعد الوصول؛ والمسافة من المطار نحو 327 كم، قرابة 3 ساعات و39 دقيقة." },
          { q: "هل يمكننا زيارة الحِجر صباح يوم المغادرة؟", a: "نعم، إن كانت زيارتك محجوزة عبر القنوات الرسمية للعلا. أخبرنا بموعد انتهائها ليُخطَّط الانطلاق بعدها." },
          { q: "هل يمكنني حجز رحلة المدينة إلى مكة أيضًا؟", a: "نعم. اطلبهما في طلب واحد، ويمكن أن تشمل مرحلة المدينة إلى مكة التوقف عند أبيار علي." },
          { q: "هل السيارة من العلا إلى المدينة مشتركة؟", a: "لا. السيارة مخصصة لك ولمرافقيك فقط." },
          { q: "كم سعر السيارة الخاصة من العلا إلى المدينة؟", a: "لا يُنشر سعر ثابت. يعتمد عرض السعر على التاريخ والسيارة وعدد الركاب، ويصلك قبل أن تؤكد." },
        ],
      },
    },
  },
  {
    path: `${I}/yanbu-to-jeddah`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [
      `${I}/jeddah-to-yanbu`,
      "services/airport-transfers/jeddah-airport",
      "services/city-transport/yanbu",
      "services/city-transport/jeddah",
      "services/chauffeur-services/business-chauffeur",
      `${I}/riyadh-to-yanbu`,
      I,
    ],
    updated: U,
    copy: {
      en: {
        nav: "Yanbu to Jeddah",
        title: "Yanbu to Jeddah Airport Private Car with Driver",
        description: "Private car with a driver from Yanbu, town or industrial city, to Jeddah airport or any Jeddah address: about 324 km, around three hours. Request a quote.",
        h1: "Yanbu to Jeddah by private car, down the Red Sea coast to the airport or the city",
        eyebrow: "Intercity · Yanbu → Jeddah",
        answer:
          "A private Yanbu to Jeddah transfer is a pre-booked car with a driver from a hotel, home or work site in Yanbu to King Abdulaziz International Airport or an address in Jeddah. The airport is about 324 km away on the coastal highway, around 3 hours of driving; Historic Jeddah is about 343 km. The vehicle is reserved for your party only.",
        summary: "Private car from Yanbu to Jeddah airport or the city, about 324 km and around three hours.",
        sections: [
          {
            h: "Who drives from Yanbu to Jeddah",
            p: [
              "Two kinds of traveller make up most of this road: people working on Yanbu's industrial projects heading to Jeddah for a flight or a weekend, and families from Yanbu travelling to Jeddah's airport, shops or relatives. One vehicle and one driver carry your party only, from your door in Yanbu to the terminal or your Jeddah address.",
            ],
          },
          {
            h: "The road south and the time it takes",
            p: [
              "Google Maps measures about 324 km from central Yanbu Al Bahr to King Abdulaziz International Airport on the coastal highway, around 3 hours 6 minutes in usual traffic, and about 343 km and 3 hours 36 minutes to Historic Jeddah (Al Balad). The airport sits on the north side of Jeddah, so a flight is reached before the city traffic.",
            ],
          },
          {
            h: "Pickup in the town or the industrial city",
            p: [
              "Yanbu Al Bahr, the older waterfront town, and the industrial city with its plants, camps and gates are some distance apart. Say which one you are leaving from. For an industrial site, give the facility name and gate; site access rules are set by the site, so check what is needed for a car to collect you at the gate or inside.",
            ],
          },
          {
            h: "Catching a flight from Jeddah",
            p: [
              "Give the flight number and departure time, and the pickup in Yanbu is proposed backwards from it, with the drive, a stop if you want one and a margin before check-in closes. On a Thursday or before a holiday, the road and the airport are busier; leave more time.",
              "Yanbu also has its own airport, with flights to Jeddah. The car makes most sense if you are flying internationally from Jeddah anyway, travelling with a lot of luggage, or prefer to avoid a short connecting flight.",
            ],
          },
          {
            h: "Which vehicle to request",
            p: ["State the number of passengers and every bag. The quotation confirms the vehicle and its availability."],
            list: [
              "Sedan: one business traveller or a couple heading to the airport",
              "GMC Yukon: a family travelling to Jeddah with suitcases",
              "Hyundai Staria: a work crew or a larger family travelling together",
            ],
          },
          {
            h: "Going the other way",
            p: [
              "Travelling from Jeddah or Jeddah airport to Yanbu instead? See Jeddah to Yanbu. A return can be quoted in the same enquiry.",
            ],
          },
        ],
        table: {
          h: "Yanbu to Jeddah route facts",
          head: ["Detail", "Yanbu to Jeddah"],
          rows: [
            ["To Jeddah airport", "About 324 km; about 3 h 06 min without stops (Google Maps, checked November 2026)"],
            ["To Historic Jeddah (Al Balad)", "About 343 km; about 3 h 36 min without stops (Google Maps)"],
            ["Road", "The coastal highway along the Red Sea"],
            ["Pickup", "Yanbu Al Bahr, the industrial city or a site gate"],
            ["Drop-off", "King Abdulaziz International Airport or any address in Jeddah"],
            ["Vehicle types", "Sedan, GMC Yukon or Hyundai Staria, confirmed in your quotation"],
            ["Shared seats", "None. One vehicle for your party only"],
            ["Price", "Quoted for each journey; no fixed fare is published"],
          ],
        },
        checklist: {
          h: "Include this in your Yanbu to Jeddah enquiry",
          items: [
            "Pickup in Yanbu: town address, hotel, or facility name and gate",
            "Jeddah address, or flight number and departure time",
            "Date and preferred time",
            "Number of passengers and every bag",
            "Any site access requirements for the pickup",
            "Preferred vehicle: sedan, GMC Yukon or Hyundai Staria",
          ],
        },
        faqs: [
          { q: "How far is Jeddah airport from Yanbu by road?", a: "About 324 km from central Yanbu Al Bahr, around 3 hours 6 minutes without stops on the coastal highway (Google Maps, November 2026)." },
          { q: "Can you collect me from an industrial site in Yanbu?", a: "Yes, if the site allows it. Give the facility name and gate, and check the site's access rules for the pickup." },
          { q: "Should I drive or fly from Yanbu to Jeddah?", a: "Yanbu has flights to Jeddah. A car suits travellers with a lot of luggage, families, and anyone connecting to a flight from Jeddah who prefers not to add a short flight." },
          { q: "Can the same car take me back to Yanbu later?", a: "Yes. Ask for the return in the same enquiry and it is quoted with the outbound journey." },
          { q: "Is the car from Yanbu to Jeddah shared?", a: "No. The vehicle is reserved for your party only." },
          { q: "How much is a private car from Yanbu to Jeddah?", a: "No fixed fare is published. The quotation depends on the date, vehicle and passengers, and you see it before you confirm." },
        ],
      },
      ar: {
        nav: "ينبع إلى جدة",
        title: "توصيل من ينبع إلى مطار جدة بسيارة خاصة مع سائق",
        description: "سيارة خاصة مع سائق من ينبع، البلد أو المدينة الصناعية، إلى مطار جدة أو أي عنوان في جدة: نحو 324 كم في قرابة ثلاث ساعات. اطلب عرض سعر.",
        h1: "من ينبع إلى جدة بسيارة خاصة، على ساحل البحر الأحمر إلى المطار أو المدينة",
        eyebrow: "بين المدن · ينبع ← جدة",
        answer:
          "التوصيل الخاص من ينبع إلى جدة سيارة مع سائق تحجزها مسبقًا من فندق أو منزل أو موقع عمل في ينبع إلى مطار الملك عبدالعزيز الدولي أو عنوان في جدة. والمطار على بعد نحو 324 كم عبر الطريق الساحلي، أي قرابة 3 ساعات قيادة، وجدة التاريخية على بعد نحو 343 كم. السيارة محجوزة لك ولمرافقيك فقط.",
        summary: "سيارة خاصة من ينبع إلى مطار جدة أو المدينة، نحو 324 كم في قرابة ثلاث ساعات.",
        sections: [
          {
            h: "من يسافر من ينبع إلى جدة",
            p: [
              "يسلك هذا الطريق غالبًا نوعان من المسافرين: العاملون في مشاريع ينبع الصناعية المتجهون إلى جدة لرحلة طيران أو عطلة، والعائلات من ينبع المتجهة إلى مطار جدة أو أسواقها أو أقاربها. تنقلك أنت ومرافقيك فقط سيارة واحدة بسائق واحد، من بابك في ينبع إلى صالة المطار أو عنوانك في جدة.",
            ],
          },
          {
            h: "الطريق جنوبًا والوقت الذي يستغرقه",
            p: [
              "تقيس خرائط Google نحو 324 كم من وسط ينبع البحر إلى مطار الملك عبدالعزيز الدولي عبر الطريق الساحلي، قرابة 3 ساعات و6 دقائق في الحركة المعتادة، ونحو 343 كم و3 ساعات و36 دقيقة إلى جدة التاريخية (البلد). ويقع المطار في شمال جدة، فتصل إلى رحلتك قبل زحام المدينة.",
            ],
          },
          {
            h: "الاستلام من البلد أو المدينة الصناعية",
            p: [
              "تفصل مسافة بين ينبع البحر، البلدة الساحلية القديمة، والمدينة الصناعية بمصانعها ومساكنها وبواباتها. فاذكر من أيهما ستنطلق. ولموقع صناعي اذكر اسم المنشأة والبوابة؛ فقواعد الدخول تحددها المنشأة، فتأكد مما يلزم لتستلمك السيارة عند البوابة أو داخل الموقع.",
            ],
          },
          {
            h: "اللحاق برحلة من جدة",
            p: [
              "اذكر رقم الرحلة وموعد الإقلاع، فيُقترح موعد الاستلام في ينبع رجوعًا منه، مع الطريق وتوقف إن أردته وهامش قبل إغلاق التسجيل. وفي يوم الخميس أو قبل الإجازات يزدحم الطريق والمطار أكثر، فاترك وقتًا أطول.",
              "ولينبع مطارها الخاص وفيه رحلات إلى جدة. وتكون السيارة أنسب إن كنت ستسافر دوليًا من جدة على أي حال، أو معك حقائب كثيرة، أو تفضّل تجنب رحلة ربط قصيرة.",
            ],
          },
          {
            h: "أي سيارة تطلب",
            p: ["اذكر عدد الركاب وكل حقيبة، ويؤكد عرض السعر السيارة وإتاحتها."],
            list: [
              "سيدان: لرجل أعمال أو زوجين متجهين إلى المطار",
              "جمس يوكن: لعائلة متجهة إلى جدة مع حقائبها",
              "هيونداي ستاريا: لفريق عمل أو عائلة كبيرة تسافر معًا",
            ],
          },
          {
            h: "الاتجاه المعاكس",
            p: [
              "هل تسافر من جدة أو مطار جدة إلى ينبع؟ راجع صفحة جدة إلى ينبع. ويمكن تسعير رحلة العودة في الطلب نفسه.",
            ],
          },
        ],
        table: {
          h: "معلومات مسار ينبع إلى جدة",
          head: ["التفصيل", "ينبع إلى جدة"],
          rows: [
            ["إلى مطار جدة", "نحو 324 كم؛ قرابة 3 ساعات و6 دقائق بلا توقف (خرائط Google، تحقق في نوفمبر 2026)"],
            ["إلى جدة التاريخية (البلد)", "نحو 343 كم؛ قرابة 3 ساعات و36 دقيقة بلا توقف (خرائط Google)"],
            ["الطريق", "الطريق الساحلي على البحر الأحمر"],
            ["الاستلام", "ينبع البحر أو المدينة الصناعية أو بوابة موقع"],
            ["الوصول", "مطار الملك عبدالعزيز الدولي أو أي عنوان في جدة"],
            ["أنواع السيارات", "سيدان أو جمس يوكن أو هيونداي ستاريا، تُؤكَّد في عرض السعر"],
            ["مقاعد مشتركة", "لا. سيارة واحدة لمجموعتك فقط"],
            ["السعر", "يُحدَّد لكل رحلة؛ لا توجد أجرة ثابتة منشورة"],
          ],
        },
        checklist: {
          h: "ما الذي تذكره في طلب التوصيل من ينبع إلى جدة",
          items: [
            "مكان الاستلام في ينبع: عنوان في البلد أو فندق أو اسم المنشأة والبوابة",
            "العنوان في جدة، أو رقم الرحلة وموعد الإقلاع",
            "التاريخ والوقت المفضل",
            "عدد الركاب وكل حقيبة",
            "أي متطلبات دخول للموقع عند الاستلام",
            "السيارة المفضلة: سيدان أو جمس يوكن أو هيونداي ستاريا",
          ],
        },
        faqs: [
          { q: "كم المسافة من ينبع إلى مطار جدة بالسيارة؟", a: "نحو 324 كم من وسط ينبع البحر، قرابة 3 ساعات و6 دقائق بلا توقف عبر الطريق الساحلي (خرائط Google، نوفمبر 2026)." },
          { q: "هل تستلمونني من موقع صناعي في ينبع؟", a: "نعم، إن سمحت المنشأة بذلك. اذكر اسم المنشأة والبوابة، وتأكد من قواعد الدخول للاستلام." },
          { q: "هل أسافر من ينبع إلى جدة بالسيارة أم بالطائرة؟", a: "في مطار ينبع رحلات إلى جدة. وتناسب السيارة من معه حقائب كثيرة والعائلات ومن يلحق برحلة من جدة ولا يريد إضافة رحلة قصيرة." },
          { q: "هل يمكن أن تعيدني السيارة نفسها إلى ينبع لاحقًا؟", a: "نعم. اطلب رحلة العودة في الطلب نفسه لتُسعَّر مع رحلة الذهاب." },
          { q: "هل السيارة من ينبع إلى جدة مشتركة؟", a: "لا. السيارة مخصصة لك ولمرافقيك فقط." },
          { q: "كم سعر السيارة الخاصة من ينبع إلى جدة؟", a: "لا يُنشر سعر ثابت. يعتمد عرض السعر على التاريخ والسيارة وعدد الركاب، ويصلك قبل أن تؤكد." },
        ],
      },
    },
  },
  {
    path: `${I}/al-khobar-to-riyadh`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [
      `${I}/riyadh-to-al-khobar`,
      `${I}/dammam-to-riyadh`,
      "services/city-transport/al-khobar",
      "services/city-transport/dhahran",
      "services/airport-transfers/riyadh-airport",
      "services/cross-border-transfers/bahrain",
      "services/city-transport/riyadh",
      "services/chauffeur-services/business-chauffeur",
    ],
    updated: U,
    copy: {
      en: {
        nav: "Al Khobar to Riyadh",
        title: "Al Khobar & Dhahran to Riyadh Private Car with Driver",
        description: "Private car with a driver from Al Khobar or Dhahran to any address in Riyadh or Riyadh airport: about 424 km, around four and a half hours. Request a quote.",
        h1: "Al Khobar and Dhahran to Riyadh by private car, door to door",
        eyebrow: "Intercity · Al Khobar → Riyadh",
        answer:
          "A private Al Khobar to Riyadh transfer is a pre-booked car with a driver from a hotel, office or home in Al Khobar or Dhahran to an address in Riyadh or King Khalid International Airport. It is about 424 km to the King Abdullah Financial District, around 4 hours 30 minutes of driving before stops. The vehicle is reserved for your party only.",
        summary: "Private car from Al Khobar or Dhahran to Riyadh, about 424 km and around four and a half hours.",
        sections: [
          {
            h: "Back to the capital from the Gulf coast",
            p: [
              "This road is mostly travelled by people heading to Riyadh after time on the Gulf coast: business travellers going from Dhahran offices to meetings in the capital, families returning after a stay in Al Khobar, and visitors who came over the causeway from Bahrain and continue inland. One vehicle and one driver take your party only, door to door.",
            ],
          },
          {
            h: "The road and the time it takes",
            p: [
              "Google Maps measures about 424 km from Al Khobar to the King Abdullah Financial District, around 4 hours 29 minutes in usual traffic on the main highway to Riyadh. Leaving from Al Khobar rather than Dammam adds the first stretch through the Khobar and Dammam area, so allow for traffic there at busy times.",
            ],
          },
          {
            h: "Pickup in Al Khobar or Dhahran",
            p: [
              "Typical pickups are Corniche and waterfront hotels, business towers in Al Khobar, and company offices, the university and residential compounds in Dhahran. Give the exact building or compound and the gate; some compounds and offices have their own access rules for visiting cars.",
            ],
          },
          {
            h: "Car, train or flight",
            p: [
              "A passenger train links Dammam and Riyadh, and flights run between Dammam and Riyadh. Both start from Dammam, so from Al Khobar or Dhahran you first travel to the station or King Fahd International Airport. For one traveller with light luggage, they can be the simpler choice. The car suits groups, families with luggage, and anyone who wants to work on the way or be dropped at a specific Riyadh address.",
            ],
          },
          {
            h: "Arriving in Riyadh",
            p: [
              "Give the exact address: a hotel, an office tower in the King Abdullah Financial District or on Olaya Street, a home, or King Khalid International Airport with your flight details. For a meeting, say the time you need to arrive and the pickup in Al Khobar is proposed from it.",
            ],
          },
          {
            h: "Which vehicle to request",
            p: ["State the number of passengers and every bag. The quotation confirms the vehicle and its availability."],
            list: [
              "Sedan: one or two business travellers",
              "GMC Yukon: executives who want room to work, or a family with luggage",
              "Hyundai Staria: a team or a larger family travelling together",
            ],
          },
        ],
        table: {
          h: "Al Khobar to Riyadh route facts",
          head: ["Detail", "Al Khobar to Riyadh"],
          rows: [
            ["Road distance", "About 424 km, Al Khobar to the King Abdullah Financial District"],
            ["Driving time", "About 4 h 29 min without stops (Google Maps, checked November 2026)"],
            ["Road", "The main highway from the Eastern Province to Riyadh"],
            ["Pickup", "Hotel, office, compound or home in Al Khobar or Dhahran"],
            ["Drop-off", "Any address in Riyadh or King Khalid International Airport"],
            ["Vehicle types", "Sedan, GMC Yukon or Hyundai Staria, confirmed in your quotation"],
            ["Shared seats", "None. One vehicle for your party only"],
            ["Price", "Quoted for each journey; no fixed fare is published"],
          ],
        },
        checklist: {
          h: "Include this in your Al Khobar to Riyadh enquiry",
          items: [
            "Pickup in Al Khobar or Dhahran: building, compound and gate",
            "Riyadh address, or flight number and departure time",
            "Date and the time you need to arrive",
            "Number of passengers and every bag",
            "Whether you are arriving from Bahrain before this journey",
            "Preferred vehicle: sedan, GMC Yukon or Hyundai Staria",
          ],
        },
        faqs: [
          { q: "How far is Riyadh from Al Khobar by road?", a: "About 424 km from Al Khobar to the King Abdullah Financial District, around 4 hours 29 minutes without stops (Google Maps, November 2026)." },
          { q: "Can you collect me from a company office or compound in Dhahran?", a: "Yes. Give the building or compound and the gate, and check any access rules for visiting cars." },
          { q: "Is the train better than a car from Al Khobar to Riyadh?", a: "For one traveller with light luggage, the train can be simpler, but it leaves from Dammam. A car goes door to door and suits groups and families." },
          { q: "Can I go from Bahrain to Riyadh in one journey?", a: "Ask in your enquiry. Cross-border journeys depend on the vehicle and driver being able to cross, and entry documents are each passenger's responsibility." },
          { q: "Is the car from Al Khobar to Riyadh shared?", a: "No. The vehicle is reserved for your party only." },
          { q: "How much is a private car from Al Khobar to Riyadh?", a: "No fixed fare is published. The quotation depends on the date, vehicle and passengers, and you see it before you confirm." },
        ],
      },
      ar: {
        nav: "الخبر إلى الرياض",
        title: "توصيل من الخبر والظهران إلى الرياض بسيارة خاصة مع سائق",
        description: "سيارة خاصة مع سائق من الخبر أو الظهران إلى أي عنوان في الرياض أو مطار الرياض: نحو 424 كم في قرابة أربع ساعات ونصف. اطلب عرض سعر.",
        h1: "من الخبر والظهران إلى الرياض بسيارة خاصة، من الباب إلى الباب",
        eyebrow: "بين المدن · الخبر ← الرياض",
        answer:
          "التوصيل الخاص من الخبر إلى الرياض سيارة مع سائق تحجزها مسبقًا من فندق أو مكتب أو منزل في الخبر أو الظهران إلى عنوان في الرياض أو مطار الملك خالد الدولي. والمسافة نحو 424 كم إلى مركز الملك عبدالله المالي، أي قرابة 4 ساعات و30 دقيقة قيادة قبل التوقفات. السيارة محجوزة لك ولمرافقيك فقط.",
        summary: "سيارة خاصة من الخبر أو الظهران إلى الرياض، نحو 424 كم في قرابة أربع ساعات ونصف.",
        sections: [
          {
            h: "العودة إلى العاصمة من ساحل الخليج",
            p: [
              "يسلك هذا الطريق غالبًا المتجهون إلى الرياض بعد وقت على ساحل الخليج: رجال أعمال من مكاتب الظهران إلى اجتماعات في العاصمة، وعائلات عائدة بعد إقامة في الخبر، وزوار عبروا الجسر من البحرين ويكملون إلى الداخل. تنقلك أنت ومرافقيك فقط سيارة واحدة بسائق واحد، من الباب إلى الباب.",
            ],
          },
          {
            h: "الطريق والوقت الذي يستغرقه",
            p: [
              "تقيس خرائط Google نحو 424 كم من الخبر إلى مركز الملك عبدالله المالي، قرابة 4 ساعات و29 دقيقة في الحركة المعتادة عبر الطريق السريع الرئيسي إلى الرياض. والانطلاق من الخبر بدل الدمام يضيف المقطع الأول عبر منطقة الخبر والدمام، فاحسب حساب الزحام فيها في أوقات الذروة.",
            ],
          },
          {
            h: "الاستلام في الخبر أو الظهران",
            p: [
              "من أماكن الاستلام المعتادة فنادق الكورنيش والواجهة البحرية والأبراج التجارية في الخبر، ومكاتب الشركات والجامعة والمجمعات السكنية في الظهران. اذكر المبنى أو المجمع والبوابة بدقة، فبعض المجمعات والمكاتب لها قواعد دخول خاصة للسيارات الزائرة.",
            ],
          },
          {
            h: "السيارة أم القطار أم الطيران",
            p: [
              "يربط قطار ركاب بين الدمام والرياض، وتعمل رحلات طيران بين الدمام والرياض. وكلاهما ينطلق من الدمام، فمن الخبر أو الظهران تنتقل أولًا إلى المحطة أو مطار الملك فهد الدولي. ولمسافر واحد بحقائب خفيفة قد يكونان الخيار الأبسط. أما السيارة فتناسب المجموعات والعائلات مع الحقائب، ومن يريد العمل في الطريق أو النزول عند عنوان محدد في الرياض.",
            ],
          },
          {
            h: "الوصول إلى الرياض",
            p: [
              "اذكر العنوان بدقة: فندق، أو برج مكاتب في مركز الملك عبدالله المالي أو شارع العليا، أو منزل، أو مطار الملك خالد الدولي مع تفاصيل رحلتك. ولاجتماع، اذكر موعد الوصول المطلوب ليُقترح موعد الاستلام في الخبر بناءً عليه.",
            ],
          },
          {
            h: "أي سيارة تطلب",
            p: ["اذكر عدد الركاب وكل حقيبة، ويؤكد عرض السعر السيارة وإتاحتها."],
            list: [
              "سيدان: لرجل أعمال أو اثنين",
              "جمس يوكن: للتنفيذيين الذين يريدون مساحة للعمل أو لعائلة مع حقائبها",
              "هيونداي ستاريا: لفريق عمل أو عائلة كبيرة تسافر معًا",
            ],
          },
        ],
        table: {
          h: "معلومات مسار الخبر إلى الرياض",
          head: ["التفصيل", "الخبر إلى الرياض"],
          rows: [
            ["المسافة بالطريق", "نحو 424 كم من الخبر إلى مركز الملك عبدالله المالي"],
            ["زمن القيادة", "نحو 4 ساعات و29 دقيقة بلا توقف (خرائط Google، تحقق في نوفمبر 2026)"],
            ["الطريق", "الطريق السريع الرئيسي من المنطقة الشرقية إلى الرياض"],
            ["الاستلام", "فندق أو مكتب أو مجمع أو منزل في الخبر أو الظهران"],
            ["الوصول", "أي عنوان في الرياض أو مطار الملك خالد الدولي"],
            ["أنواع السيارات", "سيدان أو جمس يوكن أو هيونداي ستاريا، تُؤكَّد في عرض السعر"],
            ["مقاعد مشتركة", "لا. سيارة واحدة لمجموعتك فقط"],
            ["السعر", "يُحدَّد لكل رحلة؛ لا توجد أجرة ثابتة منشورة"],
          ],
        },
        checklist: {
          h: "ما الذي تذكره في طلب التوصيل من الخبر إلى الرياض",
          items: [
            "مكان الاستلام في الخبر أو الظهران: المبنى أو المجمع والبوابة",
            "العنوان في الرياض، أو رقم الرحلة وموعد الإقلاع",
            "التاريخ وموعد الوصول المطلوب",
            "عدد الركاب وكل حقيبة",
            "هل ستصل من البحرين قبل هذه الرحلة",
            "السيارة المفضلة: سيدان أو جمس يوكن أو هيونداي ستاريا",
          ],
        },
        faqs: [
          { q: "كم المسافة من الخبر إلى الرياض بالسيارة؟", a: "نحو 424 كم من الخبر إلى مركز الملك عبدالله المالي، قرابة 4 ساعات و29 دقيقة بلا توقف (خرائط Google، نوفمبر 2026)." },
          { q: "هل تستلمونني من مكتب شركة أو مجمع في الظهران؟", a: "نعم. اذكر المبنى أو المجمع والبوابة، وتأكد من قواعد الدخول للسيارات الزائرة." },
          { q: "هل القطار أفضل من السيارة من الخبر إلى الرياض؟", a: "لمسافر واحد بحقائب خفيفة قد يكون القطار أبسط، لكنه ينطلق من الدمام. أما السيارة فمن الباب إلى الباب وتناسب المجموعات والعائلات." },
          { q: "هل يمكنني السفر من البحرين إلى الرياض في رحلة واحدة؟", a: "اسأل في طلبك. فرحلات العبور تعتمد على قدرة السيارة والسائق على العبور، ووثائق الدخول مسؤولية كل راكب." },
          { q: "هل السيارة من الخبر إلى الرياض مشتركة؟", a: "لا. السيارة مخصصة لك ولمرافقيك فقط." },
          { q: "كم سعر السيارة الخاصة من الخبر إلى الرياض؟", a: "لا يُنشر سعر ثابت. يعتمد عرض السعر على التاريخ والسيارة وعدد الركاب، ويصلك قبل أن تؤكد." },
        ],
      },
    },
  },
];
