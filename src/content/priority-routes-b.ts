import type { Locale } from "@/i18n/routing";
import type { Copy, ServicePage } from "./types";

/**
 * Phase 2B (2026-11-15): the remaining priority route pages from docs/phase1.
 *  - Four pages rewritten in full: Jeddah to Madinah, Riyadh to Jeddah, Riyadh to Makkah, Jeddah to Taif.
 *  - Three pages that were already detailed (Riyadh to Manama, Makkah to Taif, Taif to Makkah) are
 *    upgraded in place through `routePatches`: verified facts replace the old "we do not publish a
 *    distance" sentences, a facts table is added, and titles follow the keyword map.
 *
 * Fact sources, all checked 2026-11-15. Distances: OSRM routing on OpenStreetMap data between the named
 * points. Driving times: Google Maps, normal traffic, no stops.
 *  - Jeddah (Al Balad) to the Prophet's Mosque, Madinah: 404 km; 4 h 07 min; mainly Route 15.
 *  - Riyadh (KAFD) to Jeddah (Al Balad): 955 km; 9 h 48 min; Route 40 (95% of the distance). Google Maps shows a 1 h 55 min flight.
 *  - Riyadh (KAFD) to Masjid al-Haram, Makkah: 871 km; 9 h 03 min; Route 40 (97%).
 *  - Jeddah (Al Balad) to Taif: 171 km; 1 h 55 min.
 *  - Riyadh (KAFD) to Manama: 469 km; 4 h 40 min before border time; Route 40 (83%), then the King Fahd Causeway.
 *  - Masjid al-Haram to Taif: 89 km on the Al Hada side (road 15); 1 h 19 min. Taif airport to Masjid al-Haram: 1 h 21 min.
 * Same rules as priority-routes.ts: vehicle types only, owner-confirmed policies only, no prices or capacity numbers.
 * Cross-border: whether a vehicle and driver can cross is still confirmed per quotation; nothing new is claimed.
 */
const U = "2026-11-15";
const I = "services/intercity-transfers";

export const priorityRoutesB: ServicePage[] = [
  {
    path: `${I}/jeddah-to-madinah`,
    parent: I,
    variant: "umrah",
    service: "intercity",
    related: [
      `${I}/madinah-to-jeddah`,
      `${I}/makkah-to-madinah`,
      `${I}/madinah-to-makkah`,
      `${I}/jeddah-to-makkah`,
      "services/airport-transfers/jeddah-airport",
      "services/airport-transfers/madinah-airport",
      "services/city-transport/madinah",
      I,
      "fleet",
    ],
    updated: U,
    copy: {
      en: {
        nav: "Jeddah to Madinah",
        title: "Jeddah to Madinah Private Car with Driver",
        description: "Private car with a driver from Jeddah or Jeddah airport to your Madinah hotel: about 404 km, around four hours. One vehicle for your party only.",
        h1: "Jeddah to Madinah by private car, from the city or the airport",
        eyebrow: "Intercity · Jeddah ⇄ Madinah",
        answer: "A private Jeddah to Madinah transfer is a pre-booked car with a driver from an address in Jeddah, or from King Abdulaziz International Airport, to your hotel in Madinah. The road is about 404 km, mostly on Route 15, around four hours of driving before stops. The vehicle is reserved for your party only, and the return to Jeddah can be quoted with it.",
        summary: "Private car from Jeddah or its airport to Madinah, about 404 km, mostly on Route 15.",
        sections: [
          {
            h: "Straight to Madinah in a car that is yours alone",
            p: [
              "Some visitors land in Jeddah and go directly to Madinah to visit the Prophet's Mosque before Makkah. Others live or work in Jeddah and travel to Madinah for a weekend with family. In both cases one vehicle and one driver carry your party only, from your door or the terminal to your hotel, with no other passengers and no change of vehicle.",
            ],
          },
          {
            h: "The road north: about four hours",
            p: [
              "From central Jeddah to the Prophet's Mosque area the road is about 404 km, most of it on Route 15. Google Maps shows about 4 hours 7 minutes from Al Balad in normal traffic. The distance from the airport is slightly shorter because the airport lies on the northern side of the city.",
              "This is long enough that most groups want at least one stop. Say what you need in the enquiry, a meal, a prayer stop or simply a rest, and it is planned in.",
            ],
          },
          {
            h: "Starting at Jeddah airport",
            p: [
              "If the journey begins when you land, include the flight number and arrival time so the pickup is planned around the flight, and allow for the time you will spend in immigration and baggage reclaim. After a long flight, say so if elderly travellers or small children are in the group, so the first stop can be planned early.",
            ],
          },
          {
            h: "Arriving in Madinah",
            p: [
              "Most visitors stay in the central area around the Prophet's Mosque. Give the hotel name and, if you know it, the nearest gate, so the drop-off is as close as vehicle access allows. If you would rather arrive at a particular time, for example before a prayer, work back from that and tell us when you want to leave Jeddah.",
            ],
          },
          {
            h: "Which vehicle to request",
            p: ["Give the number of travellers and every bag. The quotation confirms the vehicle and its availability."],
            list: [
              "Sedan: one to a few passengers with ordinary luggage",
              "GMC Yukon: families who want space on a four-hour drive",
              "Hyundai Staria: larger families and small groups with more luggage",
            ],
          },
          {
            h: "Car, train or flight",
            p: [
              "The Haramain High Speed Railway also links Jeddah and Madinah, and Madinah has its own airport. Both mean getting to a station or terminal and finding transport again at the other end. A private car suits families, older travellers and anyone with a lot of luggage, because it is one journey from door to door at a time you choose.",
            ],
          },
          {
            h: "Returning from Madinah to Jeddah",
            p: [
              "Leaving Madinah for a flight home has its own page: Madinah to Jeddah plans the pickup backwards from your departure time. You can ask for both directions in one enquiry and they are quoted together.",
            ],
          },
        ],
        table: {
          h: "Jeddah to Madinah route facts",
          head: ["Detail", "Jeddah to Madinah"],
          rows: [
            ["Road distance", "About 404 km, central Jeddah to the Prophet's Mosque area"],
            ["Driving time", "About 4 h 07 min without stops (Google Maps, checked November 2026)"],
            ["Main road", "Mostly Route 15"],
            ["Pickup", "An address in Jeddah or King Abdulaziz International Airport"],
            ["Drop-off", "Your hotel or address in Madinah"],
            ["Vehicle types", "Sedan, GMC Yukon or Hyundai Staria, confirmed in your quotation"],
            ["Shared seats", "None. One vehicle for your party only"],
            ["Price", "Quoted for each journey; no fixed fare is published"],
          ],
        },
        checklist: {
          h: "Include this in your Jeddah to Madinah enquiry",
          items: [
            "Pickup: Jeddah address, or flight number and arrival time",
            "Hotel in Madinah",
            "Date and preferred departure time",
            "Number of travellers and every bag",
            "Preferred vehicle: sedan, GMC Yukon or Hyundai Staria",
            "Stops on the way, and the return date if you need one",
          ],
        },
        faqs: [
          { q: "How far is Jeddah from Madinah by road?", a: "About 404 km from central Jeddah to the Prophet's Mosque area, mostly on Route 15. From Jeddah airport it is slightly less." },
          { q: "How long is the drive from Jeddah to Madinah?", a: "About 4 hours 7 minutes in normal traffic, according to Google Maps from Al Balad. Stops for rest, food or prayer add to that." },
          { q: "Will other passengers share the car from Jeddah to Madinah?", a: "No. The vehicle is reserved for your party only. RideSaudi does not sell shared seats." },
          { q: "Can you collect me at Jeddah airport and drive to Madinah?", a: "Yes, you can request that. Give the flight number and landing time so the pickup is planned around your arrival." },
          { q: "How much is a private taxi from Jeddah to Madinah?", a: "No fixed fare is published. The quotation depends on the date, the vehicle type, the pickup point and the number of passengers, and you see it before you confirm." },
          { q: "Can you take me from Madinah back to Jeddah or to Jeddah airport?", a: "Yes. See the Madinah to Jeddah page, or request the return in the same enquiry with your flight time." },
        ],
      },
      ar: {
        nav: "جدة إلى المدينة",
        title: "توصيل من جدة إلى المدينة بسيارة خاصة مع سائق",
        description: "سيارة خاصة مع سائق من جدة أو مطار جدة إلى فندقك في المدينة المنورة، نحو 404 كم في قرابة أربع ساعات. السيارة لك ولمرافقيك فقط. اطلب عرض سعر.",
        h1: "من جدة إلى المدينة المنورة بسيارة خاصة، من المدينة أو من المطار",
        eyebrow: "بين المدن · جدة ⇄ المدينة",
        answer: "التوصيل الخاص من جدة إلى المدينة المنورة هو سيارة بسائق وبحجز مسبق من عنوان في جدة أو من مطار الملك عبدالعزيز الدولي إلى فندقك في المدينة. يبلغ الطريق نحو 404 كم ومعظمه على الطريق 15، أي قرابة أربع ساعات من القيادة قبل التوقفات. السيارة مخصصة لك ولمرافقيك فقط، ويمكن تسعير العودة إلى جدة معها.",
        summary: "سيارة خاصة من جدة أو مطارها إلى المدينة المنورة، نحو 404 كم ومعظمها على الطريق 15.",
        sections: [
          {
            h: "إلى المدينة مباشرة في سيارة لك وحدك",
            p: [
              "بعض الزوار يصلون إلى جدة ويتجهون مباشرة إلى المدينة المنورة لزيارة المسجد النبوي قبل مكة. وآخرون يقيمون أو يعملون في جدة ويقصدون المدينة لقضاء عطلة مع الأهل. وفي الحالتين تنقلك أنت ومرافقيك فقط سيارة واحدة بسائق واحد من بابك أو من صالة المطار إلى فندقك، بلا ركاب آخرين وبلا تبديل سيارة.",
            ],
          },
          {
            h: "الطريق شمالًا: نحو أربع ساعات",
            p: [
              "من وسط جدة إلى محيط المسجد النبوي نحو 404 كم ومعظمها على الطريق 15. وتُظهر خرائط جوجل نحو أربع ساعات وسبع دقائق من البلد في الزحام المعتاد. والمسافة من المطار أقل قليلًا لأنه يقع في شمال المدينة.",
              "الرحلة طويلة بما يجعل معظم المجموعات تحتاج إلى توقف واحد على الأقل. اذكر ما تحتاجه في الطلب، وجبة أو صلاة أو راحة فقط، ليدخل في الخطة.",
            ],
          },
          {
            h: "الانطلاق من مطار جدة",
            p: [
              "إذا بدأت الرحلة عند هبوطك فاذكر رقم الرحلة وموعد الوصول ليُخطَّط الاستلام بحسبها، واحسب الوقت الذي ستقضيه في الجوازات واستلام الحقائب. وبعد رحلة جوية طويلة أخبرنا إن كان في المجموعة كبار سن أو أطفال صغار، ليُخطَّط أول توقف مبكرًا.",
            ],
          },
          {
            h: "الوصول إلى المدينة المنورة",
            p: [
              "يقيم معظم الزوار في المنطقة المركزية حول المسجد النبوي. اذكر اسم الفندق وأقرب باب إن كنت تعرفه، ليكون النزول أقرب ما يسمح به دخول السيارات. وإذا أردت الوصول في وقت معين، قبل صلاة مثلًا، فاحسب رجوعًا منه وأخبرنا متى تريد مغادرة جدة.",
            ],
          },
          {
            h: "أي سيارة تطلب",
            p: ["اذكر عدد المسافرين وكل حقيبة، ويؤكد عرض السعر السيارة وإتاحتها."],
            list: [
              "سيدان: لراكب واحد أو عدد قليل من الركاب بأمتعة عادية",
              "جمس يوكن: للعائلات التي تريد مساحة في رحلة تمتد أربع ساعات",
              "هيونداي ستاريا: للعائلات الأكبر والمجموعات الصغيرة بأمتعة أكثر",
            ],
          },
          {
            h: "السيارة أم القطار أم الطائرة",
            p: [
              "يربط قطار الحرمين السريع أيضًا بين جدة والمدينة المنورة، وللمدينة مطارها. وكلاهما يعني الوصول إلى محطة أو صالة ثم البحث عن وسيلة نقل في الطرف الآخر. أما السيارة الخاصة فتناسب العائلات وكبار السن ومن لديه أمتعة كثيرة، لأنها رحلة واحدة من الباب إلى الباب في الوقت الذي تختاره.",
            ],
          },
          {
            h: "العودة من المدينة إلى جدة",
            p: [
              "لمغادرة المدينة للحاق برحلة العودة صفحة مستقلة: صفحة المدينة إلى جدة تحسب موعد الاستلام رجوعًا من موعد إقلاعك. ويمكنك طلب الاتجاهين في طلب واحد فيُسعَّران معًا.",
            ],
          },
        ],
        table: {
          h: "حقائق الطريق من جدة إلى المدينة",
          head: ["البيان", "من جدة إلى المدينة"],
          rows: [
            ["مسافة الطريق", "نحو 404 كم من وسط جدة إلى محيط المسجد النبوي"],
            ["زمن القيادة", "نحو 4 ساعات و7 دقائق دون توقفات (خرائط جوجل، نوفمبر 2026)"],
            ["الطريق الرئيس", "معظمه على الطريق 15"],
            ["الاستلام", "عنوان في جدة أو مطار الملك عبدالعزيز الدولي"],
            ["النزول", "فندقك أو عنوانك في المدينة المنورة"],
            ["أنواع السيارات", "سيدان أو جمس يوكن أو هيونداي ستاريا، وتتأكد في عرض السعر"],
            ["المقاعد المشتركة", "لا توجد. سيارة واحدة لك ولمرافقيك فقط"],
            ["السعر", "يُحدَّد لكل رحلة، ولا يُنشر سعر ثابت"],
          ],
        },
        checklist: {
          h: "ما الذي تذكره في طلب التوصيل من جدة إلى المدينة",
          items: [
            "الاستلام: عنوان في جدة، أو رقم الرحلة وموعد الوصول",
            "الفندق في المدينة المنورة",
            "التاريخ ووقت الانطلاق المفضل",
            "عدد المسافرين وكل حقيبة",
            "السيارة المفضلة: سيدان أو جمس يوكن أو هيونداي ستاريا",
            "التوقفات في الطريق، وتاريخ العودة إن احتجت إليها",
          ],
        },
        faqs: [
          { q: "كم تبعد جدة عن المدينة المنورة بالسيارة؟", a: "نحو 404 كم من وسط جدة إلى محيط المسجد النبوي، ومعظمها على الطريق 15. والمسافة من مطار جدة أقل قليلًا." },
          { q: "كم ساعة يستغرق الطريق من جدة إلى المدينة؟", a: "نحو أربع ساعات وسبع دقائق في الزحام المعتاد بحسب خرائط جوجل من البلد. وتضاف إليها توقفات الراحة والطعام والصلاة." },
          { q: "هل يشاركنا ركاب آخرون في السيارة من جدة إلى المدينة؟", a: "لا. السيارة مخصصة لك ولمرافقيك فقط. لا تبيع RideSaudi مقاعد مشتركة." },
          { q: "هل تستلمونني من مطار جدة إلى المدينة المنورة؟", a: "نعم، يمكنك طلب ذلك. اذكر رقم الرحلة وموعد الهبوط ليُخطَّط الاستلام بحسب وصولك." },
          { q: "كم سعر تاكسي خاص من جدة إلى المدينة؟", a: "لا يُنشر سعر ثابت. يعتمد عرض السعر على التاريخ ونوع السيارة ونقطة الاستلام وعدد الركاب، ويصلك قبل أن تؤكد." },
          { q: "هل توصلونني من المدينة إلى جدة أو إلى مطار جدة في العودة؟", a: "نعم. راجع صفحة المدينة إلى جدة، أو اطلب العودة في الطلب نفسه مع موعد رحلتك الجوية." },
        ],
      },
    },
  },

  {
    path: `${I}/riyadh-to-jeddah`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [
      `${I}/jeddah-to-riyadh`,
      `${I}/riyadh-to-makkah`,
      `${I}/makkah-to-jeddah`,
      `${I}/riyadh-to-taif`,
      `${I}/riyadh-to-madinah`,
      `${I}/riyadh-to-dammam`,
      "services/city-transport/riyadh",
      `${I}/private-intercity-chauffeur`,
      "luxury-transportation/luxury-intercity-transfers",
      I,
    ],
    updated: U,
    copy: {
      en: {
        nav: "Riyadh to Jeddah",
        title: "Riyadh to Jeddah Private Car with Driver",
        description: "Private car with a driver from Riyadh to Jeddah, door to door: about 955 km on Route 40, close to ten hours of driving. One vehicle for your party only.",
        h1: "Riyadh to Jeddah by private car, a full day across the Kingdom",
        eyebrow: "Intercity · Riyadh → Jeddah",
        answer: "A private Riyadh to Jeddah transfer is a pre-booked car with a driver from your address in Riyadh to your address in Jeddah. It is about 955 km on Route 40, close to ten hours of driving before stops, so it is a full day on the road. The vehicle is reserved for your party only, and RideSaudi quotes each journey individually.",
        summary: "Door-to-door private car from Riyadh to Jeddah, about 955 km on Route 40.",
        sections: [
          {
            h: "Who drives from Riyadh to Jeddah instead of flying",
            p: [
              "Most people fly this route, and for a single traveller with a cabin bag that is usually the sensible choice. A private car is for the cases where flying is awkward: a family moving with many bags, a group that wants to stay together, travellers who prefer not to fly, or a journey with planned stops on the way.",
              "The vehicle and driver are booked for your party alone. Nobody else is collected, and the car leaves when you are ready.",
            ],
          },
          {
            h: "Route 40 from the capital to the Red Sea",
            p: [
              "The journey follows Route 40 west across the Kingdom. Routing data puts it at about 955 km from central Riyadh to central Jeddah, and Google Maps shows about 9 hours 48 minutes of driving from the King Abdullah Financial District to Al Balad in normal traffic.",
              "With fuel, meals and prayer stops, plan for a longer day door to door. Say in the enquiry when you want to leave and what stops you expect, and the day is planned around them.",
            ],
          },
          {
            h: "Planning a ten-hour day in a car",
            p: [
              "On a drive this long, comfort matters more than on a short transfer. Tell us who is travelling, including children and elderly relatives, and whether anyone needs frequent breaks. An early start reaches Jeddah the same evening. If you would rather break the journey overnight, say so and the plan and quotation can cover it.",
            ],
          },
          {
            h: "Which vehicle suits a long drive",
            p: ["Give the number of passengers and bags. The quotation confirms the vehicle and its availability for your date."],
            list: [
              "Sedan: one or two passengers who want a quiet, direct drive",
              "GMC Yukon: families and small groups who want space for a full day on the road",
              "Hyundai Staria: larger families travelling together with luggage",
            ],
          },
          {
            h: "Compare with a flight",
            p: [
              "Google Maps lists a flight of about two hours between the two cities, before the time spent getting to the airport, checking in and collecting bags. The car is slower, but it starts at your door, carries everything you are travelling with and ends at your address in Jeddah. Coming the other way? See the Jeddah to Riyadh page.",
            ],
          },
        ],
        table: {
          h: "Riyadh to Jeddah route facts",
          head: ["Detail", "Riyadh to Jeddah"],
          rows: [
            ["Road distance", "About 955 km, central Riyadh to central Jeddah"],
            ["Driving time", "About 9 h 48 min without stops (Google Maps, checked November 2026)"],
            ["Main road", "Route 40"],
            ["Pickup", "Any address in Riyadh"],
            ["Drop-off", "Any address in Jeddah"],
            ["Vehicle types", "Sedan, GMC Yukon or Hyundai Staria, confirmed in your quotation"],
            ["Shared seats", "None. One vehicle for your party only"],
            ["Price", "Quoted for each journey; no fixed fare is published"],
          ],
        },
        checklist: {
          h: "Include this in your Riyadh to Jeddah enquiry",
          items: [
            "Exact addresses in Riyadh and Jeddah",
            "Date and the time you want to leave",
            "Passengers, including children and elderly travellers",
            "Every bag",
            "Stops you expect, or an overnight break",
            "Preferred vehicle, and a return date if you need one",
          ],
        },
        faqs: [
          { q: "How far is Riyadh from Jeddah by road?", a: "About 955 km on Route 40, measured from central Riyadh to central Jeddah." },
          { q: "How many hours is Riyadh to Jeddah by car?", a: "About 9 hours 48 minutes of driving in normal traffic, according to Google Maps. Fuel, meal and prayer stops add to that, so plan for a full day." },
          { q: "Is the Riyadh to Jeddah car shared with other travellers?", a: "No. The vehicle and driver are booked for your party only." },
          { q: "Can we stop on the way from Riyadh to Jeddah?", a: "Yes. List the stops you expect in the enquiry, including prayer and meal breaks, so they are part of the plan and the quotation." },
          { q: "Can the journey from Riyadh to Jeddah be split over two days?", a: "You can ask for an overnight break. Say where you would like to stop, and whether it can be arranged is confirmed in the quotation." },
          { q: "What does a private car from Riyadh to Jeddah cost?", a: "No fixed fare is published. The quotation depends on the date, the vehicle type, the stops and the number of passengers, and you see it before you confirm." },
        ],
      },
      ar: {
        nav: "الرياض إلى جدة",
        title: "توصيل من الرياض إلى جدة بسيارة خاصة مع سائق",
        description: "سيارة خاصة مع سائق من الرياض إلى جدة من الباب إلى الباب، نحو 955 كم عبر الطريق 40 في قرابة عشر ساعات من القيادة. السيارة لك ولمرافقيك فقط.",
        h1: "من الرياض إلى جدة بسيارة خاصة، يوم كامل عبر المملكة",
        eyebrow: "بين المدن · الرياض ← جدة",
        answer: "التوصيل الخاص من الرياض إلى جدة هو سيارة بسائق وبحجز مسبق من عنوانك في الرياض إلى عنوانك في جدة. تبلغ المسافة نحو 955 كم عبر الطريق 40، أي قرابة عشر ساعات من القيادة قبل التوقفات، فهي يوم كامل على الطريق. السيارة مخصصة لك ولمرافقيك فقط، وتُسعِّر RideSaudi كل رحلة على حدة.",
        summary: "سيارة خاصة من الباب إلى الباب من الرياض إلى جدة، نحو 955 كم عبر الطريق 40.",
        sections: [
          {
            h: "من يسافر برًّا من الرياض إلى جدة بدل الطيران",
            p: [
              "معظم الناس يقطعون هذا المسار جوًّا، وهو الخيار المعقول عادة لمسافر واحد بحقيبة يد. أما السيارة الخاصة فللحالات التي يصعب فيها الطيران: عائلة تنتقل بحقائب كثيرة، أو مجموعة تريد البقاء معًا، أو من لا يفضّل الطيران، أو رحلة فيها توقفات مخططة في الطريق.",
              "السيارة والسائق محجوزان لك ولمرافقيك وحدكم. لا يُستلم أحد غيركم، وتنطلق السيارة حين تجهزون.",
            ],
          },
          {
            h: "الطريق 40 من العاصمة إلى البحر الأحمر",
            p: [
              "تسير الرحلة غربًا على الطريق 40 عبر المملكة. تقدّرها بيانات المسارات بنحو 955 كم من وسط الرياض إلى وسط جدة، وتُظهر خرائط جوجل نحو تسع ساعات وثمانٍ وأربعين دقيقة من القيادة من مركز الملك عبدالله المالي إلى البلد في الزحام المعتاد.",
              "ومع توقفات الوقود والطعام والصلاة احسب يومًا أطول من الباب إلى الباب. اذكر في الطلب متى تريد الانطلاق وما التوقفات التي تتوقعها، ليُخطَّط اليوم بحسبها.",
            ],
          },
          {
            h: "تخطيط يوم من عشر ساعات في السيارة",
            p: [
              "في رحلة بهذا الطول تصبح الراحة أهم مما هي في مشوار قصير. أخبرنا بمن يسافر، ومنهم الأطفال وكبار السن، وهل يحتاج أحد إلى توقفات متكررة. الانطلاق المبكر يوصلك إلى جدة في مساء اليوم نفسه. وإذا فضّلت قطع الرحلة بمبيت فاذكر ذلك لتشمله الخطة وعرض السعر.",
            ],
          },
          {
            h: "أي سيارة تناسب رحلة طويلة",
            p: ["اذكر عدد الركاب والحقائب، ويؤكد عرض السعر السيارة وإتاحتها في تاريخك."],
            list: [
              "سيدان: لراكب أو راكبين يريدان رحلة هادئة ومباشرة",
              "جمس يوكن: للعائلات والمجموعات الصغيرة التي تريد مساحة ليوم كامل على الطريق",
              "هيونداي ستاريا: للعائلات الأكبر المسافرة معًا بأمتعتها",
            ],
          },
          {
            h: "قارن بالطيران",
            p: [
              "تذكر خرائط جوجل رحلة جوية مدتها نحو ساعتين بين المدينتين، قبل وقت الوصول إلى المطار وإنهاء الإجراءات واستلام الحقائب. السيارة أبطأ، لكنها تبدأ من بابك وتحمل كل ما تسافر به وتنتهي عند عنوانك في جدة. وإن كنت قادمًا في الاتجاه المعاكس فراجع صفحة جدة إلى الرياض.",
            ],
          },
        ],
        table: {
          h: "حقائق الطريق من الرياض إلى جدة",
          head: ["البيان", "من الرياض إلى جدة"],
          rows: [
            ["مسافة الطريق", "نحو 955 كم من وسط الرياض إلى وسط جدة"],
            ["زمن القيادة", "نحو 9 ساعات و48 دقيقة دون توقفات (خرائط جوجل، نوفمبر 2026)"],
            ["الطريق الرئيس", "الطريق 40"],
            ["الاستلام", "أي عنوان في الرياض"],
            ["النزول", "أي عنوان في جدة"],
            ["أنواع السيارات", "سيدان أو جمس يوكن أو هيونداي ستاريا، وتتأكد في عرض السعر"],
            ["المقاعد المشتركة", "لا توجد. سيارة واحدة لك ولمرافقيك فقط"],
            ["السعر", "يُحدَّد لكل رحلة، ولا يُنشر سعر ثابت"],
          ],
        },
        checklist: {
          h: "ما الذي تذكره في طلب التوصيل من الرياض إلى جدة",
          items: [
            "العنوان الدقيق في الرياض وفي جدة",
            "التاريخ والوقت الذي تريد الانطلاق فيه",
            "الركاب، ومنهم الأطفال وكبار السن",
            "كل حقيبة",
            "التوقفات التي تتوقعها، أو المبيت في الطريق",
            "السيارة المفضلة، وتاريخ العودة إن احتجت إليها",
          ],
        },
        faqs: [
          { q: "كم تبعد الرياض عن جدة بالسيارة؟", a: "نحو 955 كم عبر الطريق 40 من وسط الرياض إلى وسط جدة." },
          { q: "من الرياض إلى جدة بالسيارة كم ساعة؟", a: "نحو تسع ساعات وثمانٍ وأربعين دقيقة من القيادة في الزحام المعتاد بحسب خرائط جوجل. وتضاف إليها توقفات الوقود والطعام والصلاة، فاحسب يومًا كاملًا." },
          { q: "هل السيارة من الرياض إلى جدة مشتركة مع مسافرين آخرين؟", a: "لا. السيارة والسائق محجوزان لك ولمرافقيك فقط." },
          { q: "هل يمكن التوقف في الطريق من الرياض إلى جدة؟", a: "نعم. اذكر في الطلب التوقفات التي تتوقعها، ومنها الصلاة والطعام، لتدخل في الخطة وعرض السعر." },
          { q: "هل يمكن تقسيم الرحلة من الرياض إلى جدة على يومين؟", a: "يمكنك طلب مبيت في الطريق. اذكر أين تودّ التوقف، ويتأكد إمكان ترتيبه في عرض السعر." },
          { q: "كم تكلفة السيارة الخاصة من الرياض إلى جدة؟", a: "لا يُنشر سعر ثابت. يعتمد عرض السعر على التاريخ ونوع السيارة والتوقفات وعدد الركاب، ويصلك قبل أن تؤكد." },
        ],
      },
    },
  },

  {
    path: `${I}/riyadh-to-makkah`,
    parent: I,
    variant: "umrah",
    service: "umrah",
    related: [
      `${I}/makkah-to-riyadh`,
      `${I}/riyadh-to-jeddah`,
      `${I}/riyadh-to-madinah`,
      `${I}/riyadh-to-taif`,
      `${I}/makkah-to-madinah`,
      "services/umrah-transport",
      "services/umrah-transport/private-umrah-chauffeur",
      "services/city-transport/riyadh",
    ],
    updated: U,
    copy: {
      en: {
        nav: "Riyadh to Makkah",
        title: "Riyadh to Makkah Private Car for Umrah",
        description: "Private car with a driver from your Riyadh address to your Makkah hotel: about 871 km on Route 40, about nine hours by road. One vehicle for your party only.",
        h1: "Riyadh to Makkah by private car, from your door to your hotel",
        eyebrow: "Intercity · Riyadh ⇄ Makkah",
        answer: "A private Riyadh to Makkah transfer is a pre-booked car with a driver from your address in Riyadh to your accommodation in Makkah, most often for Umrah. The road is about 871 km on Route 40, around nine hours of driving before stops. The vehicle is reserved for your party only, and the return to Riyadh can be quoted with it.",
        summary: "Private car from Riyadh to Makkah, about 871 km on Route 40, usually for Umrah.",
        sections: [
          {
            h: "The whole family in one vehicle, door to door",
            p: [
              "This is one of the longest routes out of Riyadh. Families, groups of relatives and pilgrims with luggage choose a private car so that everyone travels together from their own address to their hotel in Makkah, without an airport or a station in between. The vehicle is yours alone for the journey: no shared seats and no other passengers.",
            ],
          },
          {
            h: "Route 40 from Riyadh to Makkah",
            p: [
              "The usual road is Route 40. Routing data measures about 871 km from central Riyadh to the Masjid al-Haram area, and Google Maps shows about 9 hours 3 minutes of driving from the King Abdullah Financial District in normal traffic. With stops, expect a longer day door to door.",
              "Prayer times and rest breaks shape the schedule on a drive this long. Tell us when you want to leave and which stops matter to you, and the pace is agreed before you travel.",
            ],
          },
          {
            h: "Entering Ihram on the way",
            p: [
              "Pilgrims who drive from Riyadh for Umrah commonly enter Ihram at the Miqat of Qarn al-Manazil, at As-Sayl Al-Kabir near Taif, before reaching Makkah. Tell us in the enquiry that you need the stop and roughly how long your group will take, so the waiting time is planned. Confirm the correct Miqat and the rites with your scholar or group leader; RideSaudi does not give religious rulings.",
            ],
          },
          {
            h: "Umrah paperwork and entry to Makkah",
            p: [
              "RideSaudi provides transport only. It is not affiliated with any religious or government authority and does not issue Umrah visas or permits; those are arranged through official channels. Entry to Makkah is for Muslims, so check the rules for everyone in your party before you travel.",
            ],
          },
          {
            h: "Choosing a vehicle for nine hours on the road",
            p: ["State the number of travellers, including children and elderly relatives, and every bag. The quotation confirms the vehicle and its availability."],
            list: [
              "Sedan: one or two pilgrims travelling light",
              "GMC Yukon: a family that wants room to rest on a long drive",
              "Hyundai Staria: larger families and groups of relatives with luggage",
            ],
          },
          {
            h: "Return and onward travel",
            p: [
              "The drive home has its own page, Makkah to Riyadh; you can also add the return to this enquiry with the date. Many travellers continue to Madinah after Umrah; see Makkah to Madinah and Riyadh to Madinah. For local movement inside the holy cities, see private Umrah chauffeur.",
            ],
          },
        ],
        table: {
          h: "Riyadh to Makkah route facts",
          head: ["Detail", "Riyadh to Makkah"],
          rows: [
            ["Road distance", "About 871 km, central Riyadh to the Masjid al-Haram area"],
            ["Driving time", "About 9 h 03 min without stops (Google Maps, checked November 2026)"],
            ["Main road", "Route 40"],
            ["Miqat on the way", "Qarn al-Manazil at As-Sayl Al-Kabir; confirm with your scholar"],
            ["Pickup", "Your address in Riyadh"],
            ["Drop-off", "Your hotel or address in Makkah, as close as vehicle access allows"],
            ["Vehicle types", "Sedan, GMC Yukon or Hyundai Staria, confirmed in your quotation"],
            ["Shared seats", "None. One vehicle for your party only"],
          ],
        },
        checklist: {
          h: "Include this in your Riyadh to Makkah enquiry",
          items: [
            "Pickup address in Riyadh and hotel in Makkah",
            "Date and preferred departure time",
            "Travellers, including children and elderly relatives",
            "Every bag",
            "Whether you need a Miqat stop, and other stops you want",
            "Return to Riyadh or onward travel to Madinah",
          ],
        },
        faqs: [
          { q: "How far is Riyadh from Makkah by road?", a: "About 871 km on Route 40, measured from central Riyadh to the Masjid al-Haram area." },
          { q: "How long does it take to drive from Riyadh to Makkah?", a: "About 9 hours 3 minutes of driving in normal traffic, according to Google Maps. Prayer, meal and Miqat stops add to that." },
          { q: "Is the car from Riyadh to Makkah private?", a: "Yes. The vehicle is reserved for your party only; RideSaudi does not sell shared seats." },
          { q: "Where do pilgrims from Riyadh enter Ihram?", a: "Pilgrims driving from Riyadh commonly stop at the Miqat of Qarn al-Manazil at As-Sayl Al-Kabir. Confirm the right Miqat for your journey with your scholar, and tell us you need the stop." },
          { q: "Do you arrange Umrah permits?", a: "No. RideSaudi provides transport only; permits and visas are arranged through official channels." },
          { q: "Can the same car take us on from Makkah to Madinah?", a: "You can request it as part of the same journey plan. Availability and terms are confirmed in the quotation." },
          { q: "Can you bring us back from Makkah to Riyadh?", a: "Yes. See the Makkah to Riyadh page, or add the return date to this enquiry and both journeys are quoted together." },
        ],
      },
      ar: {
        nav: "الرياض إلى مكة",
        title: "توصيل من الرياض إلى مكة بسيارة خاصة للعمرة",
        description: "سيارة خاصة مع سائق من عنوانك في الرياض إلى فندقك في مكة المكرمة، نحو 871 كم عبر الطريق 40 في قرابة تسع ساعات من القيادة. السيارة لك ولمرافقيك فقط.",
        h1: "من الرياض إلى مكة المكرمة بسيارة خاصة، من بابك إلى فندقك",
        eyebrow: "بين المدن · الرياض ⇄ مكة المكرمة",
        answer: "التوصيل الخاص من الرياض إلى مكة المكرمة هو سيارة بسائق وبحجز مسبق من عنوانك في الرياض إلى سكنك في مكة، وغالبًا للعمرة. يبلغ الطريق نحو 871 كم عبر الطريق 40، أي قرابة تسع ساعات من القيادة قبل التوقفات. السيارة مخصصة لك ولمرافقيك فقط، ويمكن تسعير العودة إلى الرياض معها.",
        summary: "سيارة خاصة من الرياض إلى مكة المكرمة، نحو 871 كم عبر الطريق 40، وغالبًا للعمرة.",
        sections: [
          {
            h: "العائلة كلها في سيارة واحدة من الباب إلى الباب",
            p: [
              "هذا من أطول المسارات المنطلقة من الرياض. تختار العائلات ومجموعات الأقارب والمعتمرون أصحاب الأمتعة السيارة الخاصة ليسافر الجميع معًا من عنوانهم إلى فندقهم في مكة، بلا مطار ولا محطة بينهما. والسيارة لكم وحدكم طوال الرحلة: لا مقاعد مشتركة ولا ركاب آخرون.",
            ],
          },
          {
            h: "الطريق 40 من الرياض إلى مكة",
            p: [
              "الطريق المعتاد هو الطريق 40. تقيس بيانات المسارات نحو 871 كم من وسط الرياض إلى محيط المسجد الحرام، وتُظهر خرائط جوجل نحو تسع ساعات وثلاث دقائق من القيادة من مركز الملك عبدالله المالي في الزحام المعتاد. ومع التوقفات توقّع يومًا أطول من الباب إلى الباب.",
              "أوقات الصلاة وفترات الراحة هي ما يشكّل الجدول في رحلة بهذا الطول. أخبرنا متى تريد الانطلاق وما التوقفات المهمة لك، ليُتفق على الوتيرة قبل السفر.",
            ],
          },
          {
            h: "الإحرام في الطريق",
            p: [
              "القادمون برًّا من الرياض للعمرة يُحرمون عادة من ميقات قرن المنازل في السيل الكبير قرب الطائف قبل بلوغ مكة. اذكر في الطلب أنك تحتاج هذا التوقف والمدة التقريبية لمجموعتك، ليُخطَّط وقت الانتظار. وتأكد من الميقات الصحيح ومن المناسك مع شيخك أو مشرف مجموعتك؛ فـRideSaudi لا تقدّم فتاوى.",
            ],
          },
          {
            h: "أوراق العمرة ودخول مكة",
            p: [
              "تقدّم RideSaudi النقل فقط. وهي غير تابعة لأي جهة دينية أو حكومية ولا تصدر تأشيرات العمرة أو تصاريحها؛ فهذه تُرتَّب عبر القنوات الرسمية. ودخول مكة المكرمة للمسلمين، فتحقق من الأنظمة لكل من معك قبل السفر.",
            ],
          },
          {
            h: "اختيار السيارة لتسع ساعات على الطريق",
            p: ["اذكر عدد المسافرين، ومنهم الأطفال وكبار السن، وكل حقيبة. ويؤكد عرض السعر السيارة وإتاحتها."],
            list: [
              "سيدان: لمعتمر أو معتمرين بأمتعة خفيفة",
              "جمس يوكن: لعائلة تريد مساحة للراحة في رحلة طويلة",
              "هيونداي ستاريا: للعائلات الأكبر ومجموعات الأقارب مع الأمتعة",
            ],
          },
          {
            h: "العودة والسفر بعد مكة",
            p: [
              "ولطريق العودة صفحة مستقلة هي مكة إلى الرياض، ويمكنك أيضًا إضافة العودة إلى هذا الطلب مع التاريخ. وكثير من المسافرين يواصلون إلى المدينة المنورة بعد العمرة؛ راجع صفحتي مكة إلى المدينة والرياض إلى المدينة. وللتنقل داخل المدينتين المقدستين راجع صفحة سائق العمرة الخاص.",
            ],
          },
        ],
        table: {
          h: "حقائق الطريق من الرياض إلى مكة",
          head: ["البيان", "من الرياض إلى مكة"],
          rows: [
            ["مسافة الطريق", "نحو 871 كم من وسط الرياض إلى محيط المسجد الحرام"],
            ["زمن القيادة", "نحو 9 ساعات و3 دقائق دون توقفات (خرائط جوجل، نوفمبر 2026)"],
            ["الطريق الرئيس", "الطريق 40"],
            ["الميقات في الطريق", "قرن المنازل في السيل الكبير؛ وتأكد مع شيخك"],
            ["الاستلام", "عنوانك في الرياض"],
            ["النزول", "فندقك أو عنوانك في مكة، في أقرب نقطة يسمح بها دخول السيارات"],
            ["أنواع السيارات", "سيدان أو جمس يوكن أو هيونداي ستاريا، وتتأكد في عرض السعر"],
            ["المقاعد المشتركة", "لا توجد. سيارة واحدة لك ولمرافقيك فقط"],
          ],
        },
        checklist: {
          h: "ما الذي تذكره في طلب التوصيل من الرياض إلى مكة",
          items: [
            "عنوان الاستلام في الرياض والفندق في مكة المكرمة",
            "التاريخ ووقت الانطلاق المفضل",
            "المسافرون، ومنهم الأطفال وكبار السن",
            "كل حقيبة",
            "هل تحتاج توقفًا في الميقات، وأي توقفات أخرى تريدها",
            "العودة إلى الرياض أو متابعة السفر إلى المدينة المنورة",
          ],
        },
        faqs: [
          { q: "كم تبعد الرياض عن مكة بالسيارة؟", a: "نحو 871 كم عبر الطريق 40 من وسط الرياض إلى محيط المسجد الحرام." },
          { q: "من الرياض إلى مكة بالسيارة كم ساعة؟", a: "نحو تسع ساعات وثلاث دقائق من القيادة في الزحام المعتاد بحسب خرائط جوجل. وتضاف إليها توقفات الصلاة والطعام والميقات." },
          { q: "هل السيارة من الرياض إلى مكة خاصة؟", a: "نعم. السيارة مخصصة لك ولمرافقيك فقط؛ لا تبيع RideSaudi مقاعد مشتركة." },
          { q: "من أين يُحرم القادم من الرياض؟", a: "القادمون برًّا من الرياض يتوقفون عادة في ميقات قرن المنازل في السيل الكبير. تأكد من الميقات الصحيح لرحلتك مع شيخك، وأخبرنا أنك تحتاج التوقف." },
          { q: "هل ترتبون تصاريح العمرة؟", a: "لا. تقدّم RideSaudi النقل فقط؛ أما التصاريح والتأشيرات فتُرتَّب عبر القنوات الرسمية." },
          { q: "هل تواصل السيارة نفسها بنا من مكة إلى المدينة؟", a: "يمكنك طلب ذلك ضمن خطة الرحلة نفسها. وتتأكد الإتاحة والشروط في عرض السعر." },
          { q: "هل تعيدوننا من مكة إلى الرياض؟", a: "نعم. راجع صفحة مكة إلى الرياض، أو أضف تاريخ العودة إلى هذا الطلب فتُسعَّر الرحلتان معًا." },
        ],
      },
    },
  },

  {
    path: `${I}/jeddah-to-taif`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [
      `${I}/taif-to-jeddah`,
      `${I}/makkah-to-taif`,
      `${I}/taif-to-makkah`,
      `${I}/jeddah-to-makkah`,
      "services/tourism-transport/taif",
      "services/airport-transfers/taif-airport",
      "services/city-transport/jeddah",
      I,
    ],
    updated: U,
    copy: {
      en: {
        nav: "Jeddah to Taif",
        title: "Jeddah to Taif Private Car with Driver",
        description: "Private car with a driver from Jeddah up to Taif: about 171 km, around two hours. One way, return or a day trip, in one vehicle for your party only.",
        h1: "Jeddah to Taif by private car, from the coast to the mountains",
        eyebrow: "Intercity · Jeddah ⇄ Taif",
        answer: "A private Jeddah to Taif transfer is a pre-booked car with a driver from your address in Jeddah up into the Sarawat mountains to Taif. It is about 171 km and close to two hours of driving. You can book it one way, as a return, or as a day trip with the car waiting. The vehicle is reserved for your party only.",
        summary: "Private car from Jeddah to Taif, about 171 km, one way, return or as a day trip.",
        sections: [
          {
            h: "A cooler city two hours from the coast",
            p: [
              "Taif sits at altitude in the Sarawat mountains and is noticeably cooler than Jeddah, which is why families head there, especially in summer. A private car takes your party only from your door in Jeddah to your hotel, a relative's home or the places you plan to visit, and brings you back when you choose.",
            ],
          },
          {
            h: "The road and the time",
            p: [
              "Routing data measures about 171 km from central Jeddah to central Taif, and Google Maps shows about 1 hour 55 minutes from Al Balad in normal traffic. The last part of the drive climbs into the mountains, so tell us if anyone in your group is uneasy with bends or prone to motion sickness.",
              "The usual road passes through the Makkah area, which only Muslims may enter. If anyone in your party is not Muslim, say so in the enquiry: the journey is then planned on roads that do not enter Makkah, and the distance and time are confirmed in your quotation.",
            ],
          },
          {
            h: "One way, return or a day in Taif",
            p: [
              "A one-way transfer takes you up and ends there. A return brings you back at an agreed time, the same day or later. A day trip combines the drive with time in Taif while the car waits. Describe how long you want to stay and where you plan to go, for example the Al Hada and Al Shafa heights or the rose farms in season, and the day is quoted as a whole. RideSaudi arranges the transport and does not run guided tours.",
            ],
          },
          {
            h: "Which vehicle to request",
            p: ["State the number of passengers and bags. The quotation confirms the vehicle and its availability."],
            list: [
              "Sedan: a couple or a few passengers",
              "GMC Yukon: a family that wants space and a comfortable climb",
              "Hyundai Staria: larger families and groups travelling together",
            ],
          },
          {
            h: "Taif to Jeddah, and other starting points",
            p: [
              "For the drive back down, see Taif to Jeddah, which also covers flights from Jeddah airport. If you are starting in Makkah, see Makkah to Taif. For a pickup at Taif International Airport, see the Taif airport transfer page.",
            ],
          },
        ],
        table: {
          h: "Jeddah to Taif route facts",
          head: ["Detail", "Jeddah to Taif"],
          rows: [
            ["Road distance", "About 171 km, central Jeddah to central Taif"],
            ["Driving time", "About 1 h 55 min without stops (Google Maps, checked November 2026)"],
            ["Road", "Highway from the coast, then a climb into the Sarawat mountains"],
            ["Booking options", "One way, return, or day trip with waiting"],
            ["Pickup", "Any address in Jeddah"],
            ["Vehicle types", "Sedan, GMC Yukon or Hyundai Staria, confirmed in your quotation"],
            ["Shared seats", "None. One vehicle for your party only"],
            ["Price", "Quoted for each journey; no fixed fare is published"],
          ],
        },
        checklist: {
          h: "Include this in your Jeddah to Taif enquiry",
          items: [
            "Direction and exact addresses or hotels",
            "One way, return or day trip, with times",
            "Number of passengers and bags",
            "Places you plan to visit in Taif",
            "Whether everyone in the party is Muslim",
            "Preferred vehicle: sedan, GMC Yukon or Hyundai Staria",
          ],
        },
        faqs: [
          { q: "How far is Jeddah from Taif by car?", a: "About 171 km from central Jeddah to central Taif by the usual road." },
          { q: "How long is the drive from Jeddah to Taif?", a: "About 1 hour 55 minutes in normal traffic, according to Google Maps from Al Balad." },
          { q: "Can I book a day trip from Jeddah to Taif with the car waiting?", a: "Yes. Describe your timing and the places you want to visit, and the quotation covers the whole day including waiting." },
          { q: "Is the Jeddah to Taif car private?", a: "Yes. The vehicle is reserved for your party only and no other passengers are added." },
          { q: "Can non-Muslim visitors travel from Jeddah to Taif?", a: "Yes. Tell us in the enquiry, and the journey is planned on roads that do not enter the Makkah area." },
          { q: "Do you also drive from Taif to Jeddah?", a: "Yes. See the Taif to Jeddah page. For a pickup at Taif airport, see the Taif airport transfer page." },
        ],
      },
      ar: {
        nav: "جدة إلى الطائف",
        title: "توصيل من جدة إلى الطائف بسيارة خاصة مع سائق",
        description: "سيارة خاصة مع سائق من جدة صعودًا إلى الطائف، نحو 171 كم في قرابة ساعتين. ذهاب فقط أو ذهاب وعودة أو رحلة يوم واحد، في سيارة لك ولمرافقيك فقط.",
        h1: "من جدة إلى الطائف بسيارة خاصة، من الساحل إلى الجبال",
        eyebrow: "بين المدن · جدة ⇄ الطائف",
        answer: "التوصيل الخاص من جدة إلى الطائف هو سيارة بسائق وبحجز مسبق من عنوانك في جدة صعودًا إلى جبال السروات حتى الطائف. تبلغ المسافة نحو 171 كم، أي قرابة ساعتين من القيادة. ويمكنك حجزه ذهابًا فقط أو ذهابًا وعودة أو رحلة يوم واحد مع انتظار السيارة. والسيارة مخصصة لك ولمرافقيك فقط.",
        summary: "سيارة خاصة من جدة إلى الطائف، نحو 171 كم، ذهابًا أو ذهابًا وعودة أو رحلة يوم واحد.",
        sections: [
          {
            h: "مدينة أبرد على بعد ساعتين من الساحل",
            p: [
              "تقع الطائف على ارتفاع في جبال السروات وهي أبرد من جدة بوضوح، ولهذا تقصدها العائلات خصوصًا في الصيف. تنقلك السيارة الخاصة أنت ومرافقيك فقط من بابك في جدة إلى فندقك أو بيت أحد الأقارب أو الأماكن التي تنوي زيارتها، وتعيدك متى اخترت.",
            ],
          },
          {
            h: "الطريق والوقت",
            p: [
              "تقيس بيانات المسارات نحو 171 كم من وسط جدة إلى وسط الطائف، وتُظهر خرائط جوجل نحو ساعة وخمس وخمسين دقيقة من البلد في الزحام المعتاد. والجزء الأخير من الطريق صعود في الجبال، فأخبرنا إن كان في مجموعتك من لا يرتاح للمنعطفات أو يعاني دوار الحركة.",
              "يمر الطريق المعتاد بمنطقة مكة المكرمة التي لا يدخلها إلا المسلمون. فإن كان بين مرافقيك غير مسلم فاذكر ذلك في الطلب، لتُخطَّط الرحلة على طرق لا تدخل مكة، وتتأكد المسافة والوقت في عرض السعر.",
            ],
          },
          {
            h: "ذهاب فقط أو ذهاب وعودة أو يوم في الطائف",
            p: [
              "رحلة الذهاب توصلك وتنتهي هناك. ورحلة الذهاب والعودة تعيدك في وقت متفق عليه في اليوم نفسه أو بعده. ورحلة اليوم الواحد تجمع الطريق مع وقت في الطائف والسيارة بانتظارك. صِف كم تريد البقاء وأين تنوي الذهاب، مثل مرتفعات الهدا والشفا أو مزارع الورد في موسمها، ليُسعَّر اليوم كله معًا. وRideSaudi ترتب النقل ولا تنظّم جولات بمرشد.",
            ],
          },
          {
            h: "أي سيارة تطلب",
            p: ["اذكر عدد الركاب والحقائب، ويؤكد عرض السعر السيارة وإتاحتها."],
            list: [
              "سيدان: لشخصين أو عدد قليل من الركاب",
              "جمس يوكن: لعائلة تريد مساحة وصعودًا مريحًا",
              "هيونداي ستاريا: للعائلات الأكبر والمجموعات المسافرة معًا",
            ],
          },
          {
            h: "من الطائف إلى جدة، ونقاط انطلاق أخرى",
            p: [
              "ولطريق النزول من الطائف إلى جدة صفحة مستقلة تشمل اللحاق بالرحلات من مطار جدة. وإذا كنت تنطلق من مكة فراجع صفحة مكة إلى الطائف. وللاستلام من مطار الطائف الدولي راجع صفحة توصيل مطار الطائف.",
            ],
          },
        ],
        table: {
          h: "حقائق الطريق من جدة إلى الطائف",
          head: ["البيان", "من جدة إلى الطائف"],
          rows: [
            ["مسافة الطريق", "نحو 171 كم من وسط جدة إلى وسط الطائف"],
            ["زمن القيادة", "نحو ساعة و55 دقيقة دون توقفات (خرائط جوجل، نوفمبر 2026)"],
            ["الطريق", "طريق سريع من الساحل ثم صعود في جبال السروات"],
            ["خيارات الحجز", "ذهاب فقط، أو ذهاب وعودة، أو رحلة يوم واحد مع انتظار"],
            ["الاستلام", "أي عنوان في جدة"],
            ["أنواع السيارات", "سيدان أو جمس يوكن أو هيونداي ستاريا، وتتأكد في عرض السعر"],
            ["المقاعد المشتركة", "لا توجد. سيارة واحدة لك ولمرافقيك فقط"],
            ["السعر", "يُحدَّد لكل رحلة، ولا يُنشر سعر ثابت"],
          ],
        },
        checklist: {
          h: "ما الذي تذكره في طلب التوصيل من جدة إلى الطائف",
          items: [
            "الاتجاه والعناوين أو الفنادق بدقة",
            "ذهاب فقط أو ذهاب وعودة أو رحلة يوم واحد، مع الأوقات",
            "عدد الركاب والحقائب",
            "الأماكن التي تنوي زيارتها في الطائف",
            "هل جميع المرافقين مسلمون",
            "السيارة المفضلة: سيدان أو جمس يوكن أو هيونداي ستاريا",
          ],
        },
        faqs: [
          { q: "كم تبعد جدة عن الطائف بالسيارة؟", a: "نحو 171 كم من وسط جدة إلى وسط الطائف عبر الطريق المعتاد." },
          { q: "كم يستغرق الطريق من جدة إلى الطائف؟", a: "نحو ساعة وخمس وخمسين دقيقة في الزحام المعتاد بحسب خرائط جوجل من البلد." },
          { q: "هل يمكن حجز رحلة يوم واحد من جدة إلى الطائف مع انتظار السيارة؟", a: "نعم. صِف توقيتك والأماكن التي تريد زيارتها، ويغطي عرض السعر اليوم كله مع الانتظار." },
          { q: "هل السيارة من جدة إلى الطائف خاصة؟", a: "نعم. السيارة مخصصة لك ولمرافقيك فقط ولا يُضاف إليها ركاب آخرون." },
          { q: "هل يستطيع الزوار غير المسلمين السفر من جدة إلى الطائف؟", a: "نعم. أخبرنا في الطلب، فتُخطَّط الرحلة على طرق لا تدخل منطقة مكة المكرمة." },
          { q: "هل توصلون أيضًا من الطائف إلى جدة؟", a: "نعم. راجع صفحة الطائف إلى جدة. وللاستلام من مطار الطائف راجع صفحة توصيل مطار الطائف." },
        ],
      },
    },
  },
];

/** In-place upgrade of a page that stays in its original file. Every `replace` pair must match, or the build fails. */
export type RoutePatch = Partial<Pick<Copy, "nav" | "title" | "description" | "h1" | "answer" | "summary" | "table">> & {
  /** [exact old sentence, new sentence] applied to section paragraphs and FAQ answers. */
  replace?: [string, string][];
  /** FAQs to add at the end. */
  addFaqs?: Copy["faqs"];
};

const VEH_EN = "Sedan, GMC Yukon or Hyundai Staria, confirmed in your quotation";
const VEH_AR = "سيدان أو جمس يوكن أو هيونداي ستاريا، وتتأكد في عرض السعر";
const NONE_EN = "None. One vehicle for your party only";
const NONE_AR = "لا توجد. سيارة واحدة لك ولمرافقيك فقط";

export const routePatches: Record<string, Record<Locale, RoutePatch>> = {
  [`${I}/riyadh-to-manama`]: {
    en: {
      nav: "Riyadh to Bahrain (Manama)",
      title: "Riyadh to Bahrain Private Car via the Causeway",
      description: "Private car with a driver from Riyadh to Manama, Bahrain: about 469 km over the King Fahd Causeway. One vehicle for your party only. Request a quotation.",
      h1: "Riyadh to Bahrain by private car, across the King Fahd Causeway to Manama",
      summary: "Private road journey from Riyadh to Manama, Bahrain, about 469 km across the King Fahd Causeway.",
      answer: "A private Riyadh to Bahrain transfer is a pre-booked car with a driver from Riyadh to Manama by road, across the Eastern Province and the King Fahd Causeway, and the same in reverse. It is about 469 km and around 4 hours 40 minutes of driving before border time. The vehicle is reserved for your party only; documents are yours to confirm, and availability is confirmed before you commit.",
      replace: [
        [
          "We do not publish a distance or time here; the quotation covers the planned schedule.",
          "Routing data puts the road at about 469 km from central Riyadh to Manama, most of it on Route 40, and Google Maps shows about 4 hours 40 minutes of driving from the King Abdullah Financial District. Time at the causeway border posts is extra and varies with the day and hour.",
        ],
      ],
      table: {
        h: "Riyadh to Bahrain route facts",
        head: ["Detail", "Riyadh to Manama"],
        rows: [
          ["Road distance", "About 469 km, central Riyadh to Manama"],
          ["Driving time", "About 4 h 40 min without stops or border time (Google Maps, checked November 2026)"],
          ["Main road", "Route 40 to the Eastern Province, then the King Fahd Causeway"],
          ["Border crossing", "King Fahd Causeway; time at the border varies"],
          ["Documents", "Each passenger checks entry rules with the official authorities"],
          ["Vehicle", "Whether a vehicle and driver can cross is confirmed in your quotation"],
          ["Shared seats", NONE_EN],
        ],
      },
      addFaqs: [
        { q: "How far is Riyadh from Bahrain by car?", a: "About 469 km from central Riyadh to Manama, around 4 hours 40 minutes of driving according to Google Maps, plus the time it takes to cross the King Fahd Causeway border." },
        { q: "Is the Riyadh to Bahrain car shared?", a: "No. The vehicle is reserved for your party only; RideSaudi does not sell shared seats." },
      ],
    },
    ar: {
      nav: "الرياض إلى البحرين (المنامة)",
      title: "توصيل من الرياض إلى البحرين بسيارة خاصة عبر الجسر",
      description: "سيارة خاصة مع سائق من الرياض إلى المنامة في البحرين، نحو 469 كم عبر جسر الملك فهد. السيارة لك ولمرافقيك فقط. اطلب عرض سعر من RideSaudi.",
      h1: "من الرياض إلى البحرين بسيارة خاصة عبر جسر الملك فهد إلى المنامة",
      summary: "رحلة برية خاصة من الرياض إلى المنامة في البحرين، نحو 469 كم عبر جسر الملك فهد.",
      answer: "التوصيل الخاص من الرياض إلى البحرين هو سيارة بسائق وبحجز مسبق من الرياض إلى المنامة برًّا عبر المنطقة الشرقية وجسر الملك فهد، والعكس. تبلغ المسافة نحو 469 كم، أي قرابة أربع ساعات وأربعين دقيقة من القيادة قبل وقت المنفذ. السيارة مخصصة لك ولمرافقيك فقط؛ والوثائق عليك التحقق منها، وتتأكد الإتاحة قبل أن تلتزم.",
      replace: [
        [
          "ولا ننشر هنا مسافة أو زمنًا؛ فعرض السعر يغطي الجدول المخطط.",
          "وتقدّر بيانات المسارات الطريق بنحو 469 كم من وسط الرياض إلى المنامة ومعظمه على الطريق 40، وتُظهر خرائط جوجل نحو أربع ساعات وأربعين دقيقة من القيادة من مركز الملك عبدالله المالي. أما الوقت في منفذي الجسر فإضافي ويختلف بحسب اليوم والساعة.",
        ],
      ],
      table: {
        h: "حقائق الطريق من الرياض إلى البحرين",
        head: ["البيان", "من الرياض إلى المنامة"],
        rows: [
          ["مسافة الطريق", "نحو 469 كم من وسط الرياض إلى المنامة"],
          ["زمن القيادة", "نحو 4 ساعات و40 دقيقة دون توقفات أو وقت المنفذ (خرائط جوجل، نوفمبر 2026)"],
          ["الطريق الرئيس", "الطريق 40 إلى المنطقة الشرقية ثم جسر الملك فهد"],
          ["المنفذ الحدودي", "جسر الملك فهد، ويختلف وقت العبور"],
          ["الوثائق", "يتحقق كل راكب من أنظمة الدخول لدى الجهات الرسمية"],
          ["السيارة", "يتأكد إمكان عبور السيارة والسائق في عرض السعر"],
          ["المقاعد المشتركة", NONE_AR],
        ],
      },
      addFaqs: [
        { q: "كم تبعد الرياض عن البحرين بالسيارة؟", a: "نحو 469 كم من وسط الرياض إلى المنامة، أي قرابة أربع ساعات وأربعين دقيقة من القيادة بحسب خرائط جوجل، يضاف إليها وقت عبور منفذ جسر الملك فهد." },
        { q: "هل السيارة من الرياض إلى البحرين مشتركة؟", a: "لا. السيارة مخصصة لك ولمرافقيك فقط؛ لا تبيع RideSaudi مقاعد مشتركة." },
      ],
    },
  },

  [`${I}/makkah-to-taif`]: {
    en: {
      title: "Makkah to Taif Private Car by the Mountain Road",
      description: "Private car with a driver from Makkah up to Taif: about 89 km, around 1 hour 20 minutes. For pilgrims, families and day visits, in one vehicle for your party.",
      summary: "Private mountain-road journey from Makkah to Taif, about 89 km, for Umrah visitors and families.",
      answer: "A private Makkah to Taif transfer is a pre-booked car with a driver from Makkah up into the Sarawat mountains to Taif, and back. It is about 89 km and around 1 hour 20 minutes of driving. Visitors use it to escape the heat, visit family or add a mountain day to an Umrah trip. The vehicle is reserved for your party only. Passengers who are not Muslim cannot enter the Makkah area and should use the Jeddah to Taif page.",
      replace: [
        [
          "We do not publish a distance or driving time on this page; your quotation gives the planned schedule.",
          "By the mountain road, routing data measures about 89 km from the Masjid al-Haram area to central Taif, and Google Maps shows about 1 hour 19 minutes of driving in normal traffic.",
        ],
      ],
      table: {
        h: "Makkah to Taif route facts",
        head: ["Detail", "Makkah to Taif"],
        rows: [
          ["Road distance", "About 89 km, Masjid al-Haram area to central Taif by the mountain road"],
          ["Driving time", "About 1 h 19 min without stops (Google Maps, checked November 2026)"],
          ["Road", "A steep, winding climb into the Sarawat mountains"],
          ["Booking options", "One way, or a return with waiting for a day visit"],
          ["Vehicle types", VEH_EN],
          ["Shared seats", NONE_EN],
        ],
      },
      addFaqs: [
        { q: "How far is Makkah from Taif, and how long does the drive take?", a: "About 89 km by the mountain road and around 1 hour 20 minutes of driving, according to routing data and Google Maps. Your exact figures depend on the two addresses." },
      ],
    },
    ar: {
      title: "توصيل من مكة إلى الطائف بسيارة خاصة عبر الجبال",
      description: "سيارة خاصة مع سائق من مكة المكرمة صعودًا إلى الطائف، نحو 89 كم في قرابة ساعة وثلث. للمعتمرين والعائلات وزيارات اليوم الواحد، في سيارة لك ولمرافقيك.",
      summary: "رحلة جبلية خاصة من مكة إلى الطائف، نحو 89 كم، للمعتمرين والعائلات.",
      answer: "التوصيل الخاص من مكة إلى الطائف هو سيارة بسائق وبحجز مسبق من مكة المكرمة صعودًا إلى جبال السروات حتى الطائف، وبالعكس. تبلغ المسافة نحو 89 كم، أي قرابة ساعة وعشرين دقيقة من القيادة. يستخدمه الزوار للهروب من الحر أو زيارة الأهل أو إضافة يوم جبلي إلى رحلة العمرة. والسيارة مخصصة لك ولمرافقيك فقط. ولا يدخل غير المسلمين منطقة مكة، فعليهم استخدام صفحة جدة إلى الطائف.",
      replace: [
        [
          "ولا ننشر في هذه الصفحة مسافة أو زمن قيادة؛ فالجدول المخطط يأتي في عرض السعر.",
          "وعبر الطريق الجبلي تقيس بيانات المسارات نحو 89 كم من محيط المسجد الحرام إلى وسط الطائف، وتُظهر خرائط جوجل نحو ساعة وتسع عشرة دقيقة من القيادة في الزحام المعتاد.",
        ],
      ],
      table: {
        h: "حقائق الطريق من مكة إلى الطائف",
        head: ["البيان", "من مكة إلى الطائف"],
        rows: [
          ["مسافة الطريق", "نحو 89 كم من محيط المسجد الحرام إلى وسط الطائف عبر الطريق الجبلي"],
          ["زمن القيادة", "نحو ساعة و19 دقيقة دون توقفات (خرائط جوجل، نوفمبر 2026)"],
          ["الطريق", "صعود شديد ومتعرج في جبال السروات"],
          ["خيارات الحجز", "ذهاب فقط، أو ذهاب وعودة مع انتظار لزيارة يوم واحد"],
          ["أنواع السيارات", VEH_AR],
          ["المقاعد المشتركة", NONE_AR],
        ],
      },
      addFaqs: [
        { q: "كم تبعد مكة عن الطائف، وكم يستغرق الطريق؟", a: "نحو 89 كم عبر الطريق الجبلي وقرابة ساعة وعشرين دقيقة من القيادة، بحسب بيانات المسارات وخرائط جوجل. وتختلف الأرقام الدقيقة بحسب العنوانين." },
      ],
    },
  },

  [`${I}/taif-to-makkah`]: {
    en: {
      title: "Taif to Makkah Private Car with a Miqat Stop",
      description: "Private sedan, GMC Yukon or Hyundai Staria with a driver from Taif or Taif airport to Makkah: about 89 km by Al Hada, with the Miqat stop planned.",
      summary: "Private car from Taif or its airport down to Makkah, about 89 km by the Al Hada road, with the Miqat stop planned.",
      replace: [
        [
          "We do not publish a distance or time for this journey because the two roads differ and no reliable single figure is available.",
          "By the Al Hada road, routing data measures about 89 km between central Taif and the Masjid al-Haram area, and Google Maps shows about 1 hour 20 minutes of driving between the two. From Taif International Airport it shows a similar time.",
        ],
        [
          "We do not publish a figure: the two roads differ in length and no reliable single number is available. Check a current map for your exact addresses.",
          "About 89 km by the Al Hada road, around 1 hour 20 minutes of driving according to Google Maps. The Sayl road is longer, so the figure depends on the road used and your exact addresses.",
        ],
      ],
      table: {
        h: "Taif to Makkah route facts",
        head: ["Detail", "Taif to Makkah"],
        rows: [
          ["Road distance", "About 89 km by the Al Hada road; longer by the Sayl road"],
          ["Driving time", "About 1 h 20 min without stops (Google Maps, checked November 2026)"],
          ["Miqat on the Al Hada road", "Wadi Muhrim"],
          ["Miqat on the Sayl road", "Qarn al-Manazil at As-Sayl Al-Kabir"],
          ["Pickup", "Hotel or home in Taif, or Taif International Airport"],
          ["Vehicle types", VEH_EN],
          ["Shared seats", NONE_EN],
        ],
      },
      addFaqs: [
        { q: "Is the Taif to Makkah car shared with other pilgrims?", a: "No. The vehicle is reserved for your party only, so the Miqat stop and its timing are planned around your group alone." },
      ],
    },
    ar: {
      title: "توصيل من الطائف إلى مكة بسيارة خاصة مع الميقات",
      description: "سيدان أو جمس يوكن أو هيونداي ستاريا بسائق من الطائف أو مطار الطائف إلى مكة المكرمة، نحو 89 كم عبر الهدا، مع تخطيط توقف الميقات.",
      summary: "سيارة خاصة من الطائف أو مطارها نزولًا إلى مكة المكرمة، نحو 89 كم عبر طريق الهدا، مع تخطيط توقف الميقات.",
      replace: [
        [
          "ولا ننشر مسافة أو زمنًا لهذه الرحلة لاختلاف الطريقين وعدم توفر رقم واحد موثوق.",
          "وعبر طريق الهدا تقيس بيانات المسارات نحو 89 كم بين وسط الطائف ومحيط المسجد الحرام، وتُظهر خرائط جوجل نحو ساعة وعشرين دقيقة من القيادة بينهما، ووقتًا قريبًا منه من مطار الطائف الدولي.",
        ],
        [
          "لا ننشر رقمًا: فالطريقان مختلفان في الطول ولا يتوفر رقم واحد موثوق. راجع خريطة حديثة لعنوانيك بدقة.",
          "نحو 89 كم عبر طريق الهدا، أي قرابة ساعة وعشرين دقيقة من القيادة بحسب خرائط جوجل. وطريق السيل أطول، فالرقم يتوقف على الطريق المستخدم وعلى عنوانيك بدقة.",
        ],
      ],
      table: {
        h: "حقائق الطريق من الطائف إلى مكة",
        head: ["البيان", "من الطائف إلى مكة"],
        rows: [
          ["مسافة الطريق", "نحو 89 كم عبر طريق الهدا، وأطول عبر طريق السيل"],
          ["زمن القيادة", "نحو ساعة و20 دقيقة دون توقفات (خرائط جوجل، نوفمبر 2026)"],
          ["الميقات على طريق الهدا", "وادي محرم"],
          ["الميقات على طريق السيل", "قرن المنازل في السيل الكبير"],
          ["الاستلام", "فندق أو منزل في الطائف، أو مطار الطائف الدولي"],
          ["أنواع السيارات", VEH_AR],
          ["المقاعد المشتركة", NONE_AR],
        ],
      },
      addFaqs: [
        { q: "هل السيارة من الطائف إلى مكة مشتركة مع معتمرين آخرين؟", a: "لا. السيارة مخصصة لك ولمرافقيك فقط، فيُخطَّط توقف الميقات وتوقيته بحسب مجموعتك وحدها." },
      ],
    },
  },
  [`${I}/madinah-to-alula`]: {
    en: {
      answer: "A private Madinah to AlUla transfer is a pre-booked car with a driver from Madinah, or Prince Mohammad bin Abdulaziz Airport, north to AlUla, and the reverse. The road is about 338 km from the Prophet's Mosque area to AlUla town, around 3 hours 40 minutes of driving before stops. It fits travellers combining a Madinah visit with AlUla's heritage sites. The vehicle is reserved for your party only.",
      table: {
        h: "Madinah to AlUla route facts",
        head: ["Detail", "Madinah to AlUla"],
        rows: [
          ["Road distance", "About 338 km, Prophet's Mosque area to AlUla town"],
          ["Driving time", "About 3 h 42 min without stops via Route 328 (Google Maps, checked November 2026)"],
          ["Longer alternative", "About 390 km via Route 15 and Route 375, about 4 h 14 min"],
          ["Pickup", "Your hotel in Madinah or Prince Mohammad bin Abdulaziz Airport"],
          ["Drop-off", "Your hotel or resort in AlUla; give the exact name, as AlUla is spread out"],
          ["Vehicle types", "Sedan, GMC Yukon or Hyundai Staria, confirmed in your quotation"],
          ["Shared seats", "None. One vehicle for your party only"],
          ["Price", "Quoted for each journey; no fixed fare is published"],
        ],
      },
    },
    ar: {
      answer: "التوصيل الخاص من المدينة المنورة إلى العلا سيارة مع سائق تحجزها مسبقًا من المدينة أو من مطار الأمير محمد بن عبدالعزيز شمالًا إلى العلا، وبالعكس. والطريق نحو 338 كم من منطقة المسجد النبوي إلى بلدة العلا، أي قرابة 3 ساعات و40 دقيقة قيادة قبل التوقفات. ويناسب من يجمع بين زيارة المدينة والمواقع التراثية في العلا، والسيارة محجوزة لك ولمن معك فقط.",
      table: {
        h: "معلومات مسار المدينة إلى العلا",
        head: ["التفصيل", "المدينة إلى العلا"],
        rows: [
          ["المسافة بالطريق", "نحو 338 كم من منطقة المسجد النبوي إلى بلدة العلا"],
          ["زمن القيادة", "نحو 3 ساعات و42 دقيقة بلا توقف عبر طريق 328 (خرائط Google، تحقق في نوفمبر 2026)"],
          ["طريق بديل أطول", "نحو 390 كم عبر طريق 15 وطريق 375، قرابة 4 ساعات و14 دقيقة"],
          ["الاستلام", "فندقك في المدينة أو مطار الأمير محمد بن عبدالعزيز"],
          ["الوصول", "فندقك أو منتجعك في العلا؛ اذكر الاسم بدقة لأن العلا متباعدة الأطراف"],
          ["أنواع السيارات", "سيدان أو جمس يوكن أو هيونداي ستاريا، تُؤكَّد في عرض السعر"],
          ["مقاعد مشتركة", "لا. سيارة واحدة لمجموعتك فقط"],
          ["السعر", "يُحدَّد لكل رحلة؛ لا توجد أجرة ثابتة منشورة"],
        ],
      },
    },
  },
};

/** Applies `routePatches` to the registry. Throws (failing the build) if a page or sentence is not found. */
export function applyRoutePatches(pages: ServicePage[]) {
  for (const [path, byLocale] of Object.entries(routePatches)) {
    const page = pages.find((p) => p.path === path);
    if (!page) throw new Error(`routePatches: unknown page ${path}`);
    page.updated = U;
    for (const locale of Object.keys(byLocale) as Locale[]) {
      const { replace = [], addFaqs = [], ...fields } = byLocale[locale];
      const c = page.copy[locale];
      Object.assign(c, fields);
      for (const [from, to] of replace) {
        let hit = false;
        const swap = (s: string) => {
          if (!s.includes(from)) return s;
          hit = true;
          return s.replace(from, to);
        };
        c.sections = c.sections.map((s) => ({ ...s, p: s.p.map(swap) }));
        c.faqs = c.faqs.map((f) => ({ ...f, a: swap(f.a) }));
        if (!hit) throw new Error(`routePatches: sentence not found on ${path}/${locale}: ${from.slice(0, 60)}`);
      }
      c.faqs = [...c.faqs, ...addFaqs];
    }
  }
}
