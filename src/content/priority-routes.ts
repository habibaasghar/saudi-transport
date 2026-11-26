import type { ServicePage } from "./types";

/**
 * Phase 2A (2026-11-15): the three highest-priority route pages from docs/phase1, rewritten
 * around verified route facts. Each page replaces the earlier entry with the same path
 * (URLs, parents and hreflang are unchanged).
 *
 * Fact sources, all checked 2026-11-15 (see docs/phase1/ROUTE_GEOGRAPHY_MASTER.csv):
 *  - Makkah to Madinah: Google Maps, Masjid al-Haram to the Prophet's Mosque: 436 km, 4 h 21 min, via Route 15.
 *    OSRM/OpenStreetMap routing gives the same 436 km.
 *  - Riyadh to Dammam: OSRM city centre to city centre 410 km, 97% on road 40 (Daytrip and Blacklane also state 410 km).
 *    Google Maps, King Abdullah Financial District to Dammam Corniche: 3 h 55 min.
 *  - Jeddah to Makkah: OSRM central Jeddah to Masjid al-Haram 88 km, mainly road 40.
 *    Google Maps, Al Balad to Masjid al-Haram: 1 h 01 min.
 * Vehicle TYPES (sedan, GMC Yukon, Hyundai Staria) are owner-confirmed; seat and luggage numbers are not, so none are stated.
 * Policies stated are only the owner-confirmed ones: cancellation at least 24 hours before pickup; payment link, STC Pay or cash.
 * No prices, reviews, waiting times or availability claims.
 */
const U = "2026-11-15";
const I = "services/intercity-transfers";

export const priorityRoutes: ServicePage[] = [
  {
    path: `${I}/makkah-to-madinah`,
    parent: I,
    variant: "umrah",
    service: "intercity",
    related: [
      `${I}/madinah-to-makkah`,
      `${I}/jeddah-to-makkah`,
      `${I}/jeddah-to-madinah`,
      `${I}/makkah-to-taif`,
      "services/umrah-transport",
      "services/umrah-transport/jeddah-airport-to-makkah",
      "services/airport-transfers/madinah-airport",
      "luxury-transportation/luxury-chauffeur",
      "fleet",
    ],
    updated: U,
    copy: {
      en: {
        nav: "Makkah to Madinah",
        title: "Makkah to Madinah Private Car: GMC or Staria",
        description: "Private car with a driver from your Makkah hotel to your Madinah hotel: about 436 km on Route 15. One vehicle for your party only. Request a quotation.",
        h1: "Makkah to Madinah by private car, hotel to hotel",
        eyebrow: "Intercity · Makkah → Madinah",
        answer: "A private Makkah to Madinah transfer is a pre-booked car with a driver from your hotel in Makkah to your hotel in Madinah. The road is about 436 km on Route 15, roughly 4 hours 20 minutes of driving before stops. The vehicle is reserved for your party only, and RideSaudi quotes each journey in a sedan, GMC Yukon or Hyundai Staria.",
        summary: "Hotel-to-hotel private transfers from Makkah to Madinah, about 436 km on Route 15.",
        sections: [
          {
            h: "What a private Makkah to Madinah transfer is",
            p: [
              "One vehicle and one driver take your party, and nobody else, from the door of your accommodation in Makkah to the door of your accommodation in Madinah. There are no shared seats and no other passengers to collect on the way. You choose the departure time, and the car goes when your group is ready rather than when a timetable says so.",
              "It is an enquiry-first service. You send the details, RideSaudi replies with a quotation and the vehicle type, and the journey is arranged only after you confirm.",
            ],
          },
          {
            h: "The road between the two holy cities",
            p: [
              "The usual route is Route 15, the highway that links Makkah and Madinah directly. Google Maps measures about 436 km from the Masjid al-Haram area to the Prophet's Mosque area and about 4 hours 20 minutes of driving in normal traffic. That figure does not include stops, so plan for a longer door-to-door time if your group wants to rest, eat or pray on the way.",
              "Tell us in your enquiry how many stops you expect and roughly how long you want for each. Stops are then part of the plan and the quotation rather than a surprise on the day.",
            ],
          },
          {
            h: "Pickup in Makkah and drop-off in Madinah",
            p: [
              "Give the hotel name at both ends. Around Masjid al-Haram, vehicle access can be restricted, especially close to prayer times, so the exact pickup point is agreed with you and, where needed, with your hotel. Hotels further out, for example in Aziziyah, are usually simpler to reach by car.",
              "In Madinah, most visitors stay in the central area around the Prophet's Mosque. State the hotel and the nearest gate or entrance if you know it, so the drop-off is as close as access allows.",
            ],
          },
          {
            h: "Leaving after Umrah: timing the departure",
            p: [
              "On this journey the real constraint is rarely the road. It is hotel check-out in Makkah, check-in in Madinah, the prayer you want to attend before leaving, and when your group is actually packed. Share the time you would like to leave and ask about waiting time for late packing rather than assuming it.",
            ],
          },
          {
            h: "Which vehicle for which group",
            p: [
              "RideSaudi arranges three vehicle types on this route. Say how many people are travelling and list every bag, including Zamzam water, and the quotation confirms the vehicle and its availability for your date.",
            ],
            list: [
              "Sedan: one to a few passengers with ordinary luggage",
              "GMC Yukon: families who want more space on a long drive",
              "Hyundai Staria: larger families and small groups with more luggage",
            ],
          },
          {
            h: "Private car or the Haramain train",
            p: [
              "The Haramain High Speed Railway also connects Makkah and Madinah, station to station. It suits light travellers who are comfortable getting to and from the stations. A private car suits families, older pilgrims and anyone with a lot of luggage, because it runs from hotel door to hotel door at a time you choose.",
            ],
          },
          {
            h: "Travelling the other way",
            p: [
              "The journey from Madinah to Makkah is planned differently, because pilgrims going to Makkah for Umrah usually stop at the Miqat of Dhul Hulaifah to enter Ihram. That direction has its own page. You can ask for both directions in one enquiry and they are quoted together.",
            ],
          },
        ],
        table: {
          h: "Makkah to Madinah route facts",
          head: ["Detail", "Makkah to Madinah"],
          rows: [
            ["Road distance", "About 436 km, Masjid al-Haram area to the Prophet's Mosque area"],
            ["Driving time", "About 4 h 20 min without stops (Google Maps, checked November 2026)"],
            ["Main road", "Route 15"],
            ["Pickup", "Your hotel or address in Makkah"],
            ["Drop-off", "Your hotel or address in Madinah"],
            ["Vehicle types", "Sedan, GMC Yukon or Hyundai Staria, confirmed in your quotation"],
            ["Shared seats", "None. One vehicle for your party only"],
            ["Price", "Quoted for each journey; no fixed fare is published"],
          ],
        },
        checklist: {
          h: "Include this in your Makkah to Madinah enquiry",
          items: [
            "Hotel names in Makkah and in Madinah",
            "Date and the time you would like to leave",
            "Number of travellers, including children",
            "Every piece of luggage, large and small",
            "Preferred vehicle: sedan, GMC Yukon or Hyundai Staria",
            "Stops you want on the way, and a return date if you need one",
          ],
        },
        faqs: [
          { q: "How far is Makkah from Madinah by road?", a: "About 436 km by Route 15, measured on Google Maps from the Masjid al-Haram area to the Prophet's Mosque area. Your exact distance depends on the two hotels." },
          { q: "How long does a private car take from Makkah to Madinah?", a: "About 4 hours 20 minutes of driving in normal traffic, according to Google Maps. Rest, meal and prayer stops add to that, so tell us what you want to include." },
          { q: "Is the car from Makkah to Madinah shared with other passengers?", a: "No. The vehicle is reserved for your party only. RideSaudi does not sell shared seats or combine separate bookings in one car." },
          { q: "How much is a private car from Makkah to Madinah?", a: "No fixed fare is published. Each journey is quoted on the date, the vehicle type, the number of passengers and the luggage, and you see the quotation before you confirm." },
          { q: "Can I request a GMC Yukon from Makkah to Madinah?", a: "Yes. Choose GMC Yukon as your preferred vehicle in the enquiry. Availability for your date is confirmed in the quotation." },
          { q: "How do I book a private car with driver from Makkah to Madinah?", a: "Send the enquiry form or a WhatsApp message with your hotels, date, passengers and luggage. RideSaudi replies with a quotation, and the journey is arranged only when you confirm it." },
          { q: "Can I cancel a Makkah to Madinah transfer, and how do I pay?", a: "You can cancel at least 24 hours before pickup. Payment is by payment link, STC Pay or cash. Any other terms are stated in your quotation." },
        ],
      },
      ar: {
        nav: "مكة إلى المدينة",
        title: "توصيل من مكة إلى المدينة: جمس أو ستاريا مع سائق",
        description: "سيارة خاصة مع سائق من فندقك في مكة المكرمة إلى فندقك في المدينة المنورة، نحو 436 كم عبر الطريق 15. السيارة لك ولمرافقيك فقط. اطلب عرض سعر.",
        h1: "من مكة المكرمة إلى المدينة المنورة بسيارة خاصة، من الفندق إلى الفندق",
        eyebrow: "بين المدن · مكة ← المدينة",
        answer: "التوصيل الخاص من مكة المكرمة إلى المدينة المنورة هو سيارة بسائق وبحجز مسبق من فندقك في مكة إلى فندقك في المدينة. يبلغ الطريق نحو 436 كم عبر الطريق 15، أي قرابة أربع ساعات وعشرين دقيقة من القيادة قبل التوقفات. السيارة مخصصة لك ولمرافقيك فقط، وتُسعِّر RideSaudi كل رحلة بسيدان أو جمس يوكن أو هيونداي ستاريا.",
        summary: "توصيل خاص من الفندق إلى الفندق من مكة إلى المدينة، نحو 436 كم عبر الطريق 15.",
        sections: [
          {
            h: "ما المقصود بالتوصيل الخاص من مكة إلى المدينة",
            p: [
              "سيارة واحدة وسائق واحد ينقلانك أنت ومرافقيك فقط من باب سكنك في مكة المكرمة إلى باب سكنك في المدينة المنورة. لا مقاعد مشتركة ولا ركاب آخرون يُستلمون في الطريق. أنت من يحدد موعد الانطلاق، فتتحرك السيارة حين تجهز مجموعتك لا حين يفرض جدول ثابت.",
              "الخدمة تبدأ بطلب: ترسل التفاصيل، فترد RideSaudi بعرض سعر ونوع السيارة، ولا تُرتَّب الرحلة إلا بعد تأكيدك.",
            ],
          },
          {
            h: "الطريق بين المدينتين المقدستين",
            p: [
              "المسار المعتاد هو الطريق 15 الذي يربط مكة المكرمة بالمدينة المنورة مباشرة. تقيس خرائط جوجل نحو 436 كم من محيط المسجد الحرام إلى محيط المسجد النبوي، ونحو أربع ساعات وعشرين دقيقة من القيادة في الزحام المعتاد. هذا الرقم لا يشمل التوقفات، فاحسب وقتًا أطول من الباب إلى الباب إذا أرادت مجموعتك الراحة أو الطعام أو الصلاة في الطريق.",
              "اذكر في طلبك عدد التوقفات المتوقعة والمدة التقريبية لكل منها، لتدخل في الخطة وعرض السعر بدل أن تكون مفاجأة يوم السفر.",
            ],
          },
          {
            h: "الاستلام في مكة والنزول في المدينة",
            p: [
              "اذكر اسم الفندق في المدينتين. حول المسجد الحرام قد يُقيَّد دخول السيارات، خصوصًا قرب أوقات الصلاة، ولذلك تُحدَّد نقطة الاستلام معك ومع فندقك عند الحاجة. أما الفنادق الأبعد، في العزيزية مثلًا، فالوصول إليها بالسيارة أسهل عادة.",
              "وفي المدينة المنورة يقيم معظم الزوار في المنطقة المركزية حول المسجد النبوي. اذكر الفندق وأقرب باب أو مدخل إن كنت تعرفه، ليكون النزول أقرب ما يسمح به الدخول.",
            ],
          },
          {
            h: "بعد العمرة: ضبط موعد المغادرة",
            p: [
              "القيد الحقيقي في هذه الرحلة ليس الطريق غالبًا، بل موعد مغادرة الفندق في مكة وموعد الدخول في المدينة، والصلاة التي تريد أداءها قبل السفر، ومتى تكون مجموعتك جاهزة فعلًا. أخبرنا بالوقت الذي تفضّله للانطلاق واسأل عن وقت الانتظار إذا تأخر تجهيز الحقائب، ولا تفترضه.",
            ],
          },
          {
            h: "أي سيارة تناسب مجموعتك",
            p: [
              "ترتب RideSaudi ثلاثة أنواع من السيارات على هذا الطريق. اذكر عدد المسافرين وكل حقيبة، ومنها عبوات ماء زمزم، ويؤكد عرض السعر السيارة وإتاحتها في تاريخك.",
            ],
            list: [
              "سيدان: لراكب واحد أو عدد قليل من الركاب بأمتعة عادية",
              "جمس يوكن: للعائلات التي تريد مساحة أوسع في رحلة طويلة",
              "هيونداي ستاريا: للعائلات الأكبر والمجموعات الصغيرة بأمتعة أكثر",
            ],
          },
          {
            h: "السيارة الخاصة أم قطار الحرمين",
            p: [
              "يربط قطار الحرمين السريع أيضًا بين مكة المكرمة والمدينة المنورة من محطة إلى محطة. وهو يناسب من يسافر بأمتعة خفيفة ولا يجد صعوبة في الوصول إلى المحطات. أما السيارة الخاصة فتناسب العائلات وكبار السن ومن لديه أمتعة كثيرة، لأنها تنقلك من باب الفندق إلى باب الفندق في الوقت الذي تختاره.",
            ],
          },
          {
            h: "السفر في الاتجاه المعاكس",
            p: [
              "تُخطَّط الرحلة من المدينة المنورة إلى مكة المكرمة بطريقة مختلفة، لأن المتجهين إلى مكة للعمرة يتوقفون عادة في ميقات ذي الحليفة للإحرام. ولذلك الاتجاه صفحة مستقلة. ويمكنك طلب الاتجاهين في طلب واحد فيُسعَّران معًا.",
            ],
          },
        ],
        table: {
          h: "حقائق الطريق من مكة إلى المدينة",
          head: ["البيان", "من مكة إلى المدينة"],
          rows: [
            ["مسافة الطريق", "نحو 436 كم من محيط المسجد الحرام إلى محيط المسجد النبوي"],
            ["زمن القيادة", "نحو 4 ساعات و20 دقيقة دون توقفات (خرائط جوجل، نوفمبر 2026)"],
            ["الطريق الرئيس", "الطريق 15"],
            ["الاستلام", "فندقك أو عنوانك في مكة المكرمة"],
            ["النزول", "فندقك أو عنوانك في المدينة المنورة"],
            ["أنواع السيارات", "سيدان أو جمس يوكن أو هيونداي ستاريا، وتتأكد في عرض السعر"],
            ["المقاعد المشتركة", "لا توجد. سيارة واحدة لك ولمرافقيك فقط"],
            ["السعر", "يُحدَّد لكل رحلة، ولا يُنشر سعر ثابت"],
          ],
        },
        checklist: {
          h: "ما الذي تذكره في طلب التوصيل من مكة إلى المدينة",
          items: [
            "اسم الفندق في مكة المكرمة وفي المدينة المنورة",
            "التاريخ والوقت الذي تفضّله للانطلاق",
            "عدد المسافرين ومنهم الأطفال",
            "كل قطعة من الأمتعة، الكبيرة والصغيرة",
            "السيارة المفضلة: سيدان أو جمس يوكن أو هيونداي ستاريا",
            "التوقفات التي تريدها في الطريق، وتاريخ العودة إن احتجت إليها",
          ],
        },
        faqs: [
          { q: "كم تبعد مكة عن المدينة بالسيارة؟", a: "نحو 436 كم عبر الطريق 15، بحسب قياس خرائط جوجل من محيط المسجد الحرام إلى محيط المسجد النبوي. وتختلف المسافة الدقيقة بحسب الفندقين." },
          { q: "كم ساعة تستغرق السيارة الخاصة من مكة إلى المدينة؟", a: "نحو أربع ساعات وعشرين دقيقة من القيادة في الزحام المعتاد بحسب خرائط جوجل. وتضاف إليها توقفات الراحة والطعام والصلاة، فأخبرنا بما تريد إدراجه." },
          { q: "هل السيارة من مكة إلى المدينة مشتركة مع ركاب آخرين؟", a: "لا. السيارة مخصصة لك ولمرافقيك فقط. لا تبيع RideSaudi مقاعد مشتركة ولا تجمع حجوزات مختلفة في سيارة واحدة." },
          { q: "كم سعر السيارة الخاصة من مكة إلى المدينة؟", a: "لا يُنشر سعر ثابت. تُسعَّر كل رحلة بحسب التاريخ ونوع السيارة وعدد الركاب والأمتعة، ويصلك عرض السعر قبل أن تؤكد." },
          { q: "هل يمكنني طلب جمس يوكن من مكة إلى المدينة؟", a: "نعم. اختر جمس يوكن سيارةً مفضلة في الطلب، وتتأكد إتاحتها في تاريخك ضمن عرض السعر." },
          { q: "كيف أحجز سيارة خاصة مع سائق من مكة إلى المدينة؟", a: "أرسل نموذج الطلب أو رسالة واتساب فيها الفندقان والتاريخ وعدد الركاب والأمتعة. ترد RideSaudi بعرض سعر، ولا تُرتَّب الرحلة إلا بعد تأكيدك." },
          { q: "هل يمكن إلغاء التوصيل من مكة إلى المدينة، وكيف أدفع؟", a: "يمكنك الإلغاء قبل موعد الاستلام بأربع وعشرين ساعة على الأقل. والدفع برابط دفع أو عبر STC Pay أو نقدًا. وأي شروط أخرى تُذكر في عرض السعر." },
        ],
      },
    },
  },

  {
    path: `${I}/riyadh-to-dammam`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [
      `${I}/dammam-to-riyadh`,
      `${I}/riyadh-to-al-khobar`,
      `${I}/dammam-to-bahrain`,
      `${I}/riyadh-to-al-ahsa`,
      `${I}/riyadh-to-jubail`,
      `${I}/riyadh-to-jeddah`,
      "services/city-transport/riyadh",
      "services/airport-transfers/dammam-airport",
      "services/chauffeur-services/business-chauffeur",
      I,
      "fleet",
    ],
    updated: U,
    copy: {
      en: {
        nav: "Riyadh to Dammam",
        title: "Riyadh to Dammam Private Car with Driver",
        description: "Private car with a driver from Riyadh to Dammam, door to door: about 410 km on Route 40, around four hours. One vehicle for your party only. Request a quote.",
        h1: "Riyadh to Dammam by private car, door to door",
        eyebrow: "Intercity · Riyadh → Dammam",
        answer: "A private Riyadh to Dammam transfer is a pre-booked car with a driver from your address in Riyadh to your address in Dammam. The drive is about 410 km on Route 40, close to four hours without stops. The vehicle is reserved for your party only, and RideSaudi quotes each journey in a sedan, GMC Yukon or Hyundai Staria.",
        summary: "Door-to-door private car from Riyadh to Dammam, about 410 km on Route 40.",
        sections: [
          {
            h: "A private car for your party, not a shared ride",
            p: [
              "You book the whole vehicle. The driver collects only your party in Riyadh and drives straight to your address in Dammam, with no other passengers and no pickups on the way. That matters on a business route like this one, where calls, documents and conversations in the car are meant to stay private.",
              "You send an enquiry, RideSaudi replies with a quotation and the vehicle type, and the journey is arranged after you confirm.",
            ],
          },
          {
            h: "Route 40 across the eastern plains",
            p: [
              "Almost the whole journey is on Route 40, the highway that runs east from Riyadh to the Gulf coast. Routing data puts the road at about 410 km from central Riyadh to central Dammam, and Google Maps shows about 3 hours 55 minutes from the King Abdullah Financial District to Dammam Corniche in normal traffic.",
              "Add time for leaving Riyadh at busy hours and for any stop you want on the way. If you would like a rest or prayer stop, say so in the enquiry and it is planned in.",
            ],
          },
          {
            h: "Where the journey can start and end",
            p: [
              "Pickup is from the address you give in Riyadh: a hotel in Olaya, an office in the King Abdullah Financial District, a home, or King Khalid International Airport after a flight. Drop-off is at your address in Dammam, whether that is a hotel, a company site or a residence.",
              "Dammam, Al Khobar and Dhahran sit close together but are separate cities, and company sites are often outside the centre. Give the district or the full address, not just 'Dammam'. If you are going to Al Khobar or Dhahran, see the Riyadh to Al Khobar page.",
            ],
          },
          {
            h: "Business travel and same-day returns",
            p: [
              "Many people on this road are travelling for meetings in the Eastern Province. If you need to go and come back the same day, or you make the trip regularly, describe the pattern in your enquiry: the meeting time, how long you expect to stay and when you want to return. A return can be quoted together with the outward journey.",
            ],
          },
          {
            h: "Which vehicle to ask for",
            p: [
              "Tell us the number of passengers and bags and the quotation confirms the vehicle and its availability for your date.",
            ],
            list: [
              "Sedan: one to a few passengers travelling for work",
              "GMC Yukon: more space for a small team or a family on a four-hour drive",
              "Hyundai Staria: larger families and groups with luggage",
            ],
          },
          {
            h: "Car, train or flight",
            p: [
              "A rail line links Riyadh and Dammam, and domestic flights run between the two airports. Both are station to station or airport to airport, so you still need transport at each end. A private car leaves from your door at a time you choose, carries your luggage with you and finishes at the address you actually need, which is why it suits groups, families and visits to sites away from the city centre.",
            ],
          },
        ],
        table: {
          h: "Riyadh to Dammam route facts",
          head: ["Detail", "Riyadh to Dammam"],
          rows: [
            ["Road distance", "About 410 km, central Riyadh to central Dammam"],
            ["Driving time", "About 3 h 55 min without stops (Google Maps, checked November 2026)"],
            ["Main road", "Route 40"],
            ["Pickup", "Any address in Riyadh, including King Khalid International Airport"],
            ["Drop-off", "Any address in Dammam"],
            ["Vehicle types", "Sedan, GMC Yukon or Hyundai Staria, confirmed in your quotation"],
            ["Shared seats", "None. One vehicle for your party only"],
            ["Price", "Quoted for each journey; no fixed fare is published"],
          ],
        },
        checklist: {
          h: "Include this in your Riyadh to Dammam enquiry",
          items: [
            "Exact pickup address in Riyadh, or your flight if starting at the airport",
            "Exact drop-off address or district in Dammam",
            "Date and preferred departure time",
            "Number of passengers and bags",
            "Preferred vehicle: sedan, GMC Yukon or Hyundai Staria",
            "Return journey, or how often you make the trip",
          ],
        },
        faqs: [
          { q: "How far is Riyadh from Dammam by car?", a: "About 410 km by Route 40, measured from central Riyadh to central Dammam. The exact distance depends on your two addresses." },
          { q: "How many hours is the drive from Riyadh to Dammam?", a: "Close to four hours. Google Maps shows about 3 hours 55 minutes from the King Abdullah Financial District to Dammam Corniche in normal traffic, before any stops." },
          { q: "Will we share the car with other passengers from Riyadh to Dammam?", a: "No. RideSaudi arranges private vehicles only. The car is reserved for your party and no other passengers are added." },
          { q: "How much does a private car from Riyadh to Dammam cost?", a: "No fixed fare is published. The quotation depends on the date, the vehicle type, the number of passengers and whether you need a return, and you see it before you confirm." },
          { q: "Can the driver collect me from King Khalid International Airport and drive to Dammam?", a: "Yes, you can request that. Give your flight number and arrival time in the enquiry so the pickup is planned around your landing." },
          { q: "Can I go from Riyadh to Dammam and return the same day?", a: "You can request a same-day return. State your meeting time and when you want to leave Dammam, and both legs are quoted together." },
          { q: "Do you also go to Al Khobar, Dhahran or Jubail from Riyadh?", a: "Yes. Al Khobar and Dhahran are covered on the Riyadh to Al Khobar page and Jubail on the Riyadh to Jubail page. Name the exact destination in your enquiry." },
        ],
      },
      ar: {
        nav: "الرياض إلى الدمام",
        title: "توصيل من الرياض إلى الدمام بسيارة خاصة مع سائق",
        description: "سيارة خاصة مع سائق من الرياض إلى الدمام من الباب إلى الباب، نحو 410 كم عبر الطريق 40 في قرابة أربع ساعات. السيارة لك ولمرافقيك فقط. اطلب عرض سعر.",
        h1: "من الرياض إلى الدمام بسيارة خاصة، من الباب إلى الباب",
        eyebrow: "بين المدن · الرياض ← الدمام",
        answer: "التوصيل الخاص من الرياض إلى الدمام هو سيارة بسائق وبحجز مسبق من عنوانك في الرياض إلى عنوانك في الدمام. تبلغ المسافة نحو 410 كم عبر الطريق 40، أي قرابة أربع ساعات دون توقفات. السيارة مخصصة لك ولمرافقيك فقط، وتُسعِّر RideSaudi كل رحلة بسيدان أو جمس يوكن أو هيونداي ستاريا.",
        summary: "سيارة خاصة من الباب إلى الباب من الرياض إلى الدمام، نحو 410 كم عبر الطريق 40.",
        sections: [
          {
            h: "سيارة خاصة لك ولمرافقيك، لا مشوار مشترك",
            p: [
              "أنت تحجز السيارة كاملة. يستلمك السائق أنت ومرافقيك فقط في الرياض ويتجه مباشرة إلى عنوانك في الدمام، بلا ركاب آخرين وبلا توقف لاستلام أحد في الطريق. وهذا مهم في طريق يغلب عليه سفر الأعمال، حيث يُفترض أن تبقى المكالمات والأوراق والأحاديث داخل السيارة خاصة.",
              "ترسل طلبًا، فترد RideSaudi بعرض سعر ونوع السيارة، وتُرتَّب الرحلة بعد تأكيدك.",
            ],
          },
          {
            h: "الطريق 40 عبر السهول الشرقية",
            p: [
              "تكاد الرحلة كلها تكون على الطريق 40 المتجه شرقًا من الرياض إلى ساحل الخليج. تقدّر بيانات المسارات الطريق بنحو 410 كم من وسط الرياض إلى وسط الدمام، وتُظهر خرائط جوجل نحو ثلاث ساعات وخمس وخمسين دقيقة من مركز الملك عبدالله المالي إلى كورنيش الدمام في الزحام المعتاد.",
              "أضف وقتًا للخروج من الرياض في ساعات الذروة ولأي توقف تريده في الطريق. وإذا رغبت في توقف للراحة أو الصلاة فاذكره في الطلب ليدخل في الخطة.",
            ],
          },
          {
            h: "من أين تبدأ الرحلة وأين تنتهي",
            p: [
              "الاستلام من العنوان الذي تحدده في الرياض: فندق في العليا، أو مكتب في مركز الملك عبدالله المالي، أو منزل، أو مطار الملك خالد الدولي بعد وصول رحلتك. والنزول عند عنوانك في الدمام، فندقًا كان أو موقع شركة أو سكنًا.",
              "الدمام والخبر والظهران مدن متجاورة لكنها منفصلة، ومواقع الشركات كثيرًا ما تكون خارج وسط المدينة. أعطنا الحي أو العنوان الكامل وليس «الدمام» فقط. وإذا كانت وجهتك الخبر أو الظهران فراجع صفحة الرياض إلى الخبر.",
            ],
          },
          {
            h: "سفر الأعمال والعودة في اليوم نفسه",
            p: [
              "كثير من المسافرين على هذا الطريق يقصدون اجتماعات في المنطقة الشرقية. إذا احتجت إلى الذهاب والعودة في اليوم نفسه، أو كنت تقطع هذا الطريق بانتظام، فصِف ذلك في طلبك: موعد الاجتماع، والمدة المتوقعة للبقاء، ووقت العودة. ويمكن تسعير العودة مع رحلة الذهاب.",
            ],
          },
          {
            h: "أي سيارة تطلب",
            p: [
              "أخبرنا بعدد الركاب والحقائب، ويؤكد عرض السعر السيارة وإتاحتها في تاريخك.",
            ],
            list: [
              "سيدان: لراكب واحد أو عدد قليل من المسافرين للعمل",
              "جمس يوكن: مساحة أوسع لفريق صغير أو عائلة في رحلة تمتد أربع ساعات",
              "هيونداي ستاريا: للعائلات الأكبر والمجموعات مع الأمتعة",
            ],
          },
          {
            h: "السيارة أم القطار أم الطائرة",
            p: [
              "يربط خط حديدي بين الرياض والدمام، وتوجد رحلات جوية داخلية بين المطارين. وكلاهما من محطة إلى محطة أو من مطار إلى مطار، فتبقى بحاجة إلى وسيلة نقل في الطرفين. أما السيارة الخاصة فتنطلق من بابك في الوقت الذي تختاره، وتحمل أمتعتك معك، وتنتهي عند العنوان الذي تقصده فعلًا، ولهذا تناسب المجموعات والعائلات وزيارة المواقع البعيدة عن وسط المدينة.",
            ],
          },
        ],
        table: {
          h: "حقائق الطريق من الرياض إلى الدمام",
          head: ["البيان", "من الرياض إلى الدمام"],
          rows: [
            ["مسافة الطريق", "نحو 410 كم من وسط الرياض إلى وسط الدمام"],
            ["زمن القيادة", "نحو 3 ساعات و55 دقيقة دون توقفات (خرائط جوجل، نوفمبر 2026)"],
            ["الطريق الرئيس", "الطريق 40"],
            ["الاستلام", "أي عنوان في الرياض، ومنه مطار الملك خالد الدولي"],
            ["النزول", "أي عنوان في الدمام"],
            ["أنواع السيارات", "سيدان أو جمس يوكن أو هيونداي ستاريا، وتتأكد في عرض السعر"],
            ["المقاعد المشتركة", "لا توجد. سيارة واحدة لك ولمرافقيك فقط"],
            ["السعر", "يُحدَّد لكل رحلة، ولا يُنشر سعر ثابت"],
          ],
        },
        checklist: {
          h: "ما الذي تذكره في طلب التوصيل من الرياض إلى الدمام",
          items: [
            "عنوان الاستلام الدقيق في الرياض، أو رحلتك الجوية إذا بدأت من المطار",
            "عنوان النزول الدقيق أو الحي في الدمام",
            "التاريخ ووقت الانطلاق المفضل",
            "عدد الركاب والحقائب",
            "السيارة المفضلة: سيدان أو جمس يوكن أو هيونداي ستاريا",
            "رحلة العودة، أو عدد مرات سفرك على هذا الطريق",
          ],
        },
        faqs: [
          { q: "كم تبعد الرياض عن الدمام بالسيارة؟", a: "نحو 410 كم عبر الطريق 40 من وسط الرياض إلى وسط الدمام. وتختلف المسافة الدقيقة بحسب العنوانين." },
          { q: "كم ساعة يستغرق الطريق من الرياض إلى الدمام؟", a: "قرابة أربع ساعات. تُظهر خرائط جوجل نحو ثلاث ساعات وخمس وخمسين دقيقة من مركز الملك عبدالله المالي إلى كورنيش الدمام في الزحام المعتاد، قبل أي توقف." },
          { q: "هل نشارك السيارة مع ركاب آخرين من الرياض إلى الدمام؟", a: "لا. ترتب RideSaudi سيارات خاصة فقط. السيارة مخصصة لك ولمرافقيك ولا يُضاف إليها ركاب آخرون." },
          { q: "كم سعر السيارة الخاصة من الرياض إلى الدمام؟", a: "لا يُنشر سعر ثابت. يعتمد عرض السعر على التاريخ ونوع السيارة وعدد الركاب وحاجتك إلى رحلة عودة، ويصلك قبل أن تؤكد." },
          { q: "هل يستلمني السائق من مطار الملك خالد الدولي إلى الدمام؟", a: "نعم، يمكنك طلب ذلك. اذكر رقم الرحلة وموعد الوصول في الطلب ليُخطَّط الاستلام بحسب هبوط طائرتك." },
          { q: "هل يمكن الذهاب من الرياض إلى الدمام والعودة في اليوم نفسه؟", a: "يمكنك طلب عودة في اليوم نفسه. اذكر موعد اجتماعك ووقت مغادرتك الدمام، فيُسعَّر المشواران معًا." },
          { q: "هل توصلون أيضًا من الرياض إلى الخبر أو الظهران أو الجبيل؟", a: "نعم. للخبر والظهران صفحة الرياض إلى الخبر، وللجبيل صفحة الرياض إلى الجبيل. اذكر الوجهة الدقيقة في طلبك." },
        ],
      },
    },
  },

  {
    path: `${I}/jeddah-to-makkah`,
    parent: I,
    variant: "umrah",
    service: "intercity",
    related: [
      "services/umrah-transport/jeddah-airport-to-makkah",
      `${I}/makkah-to-jeddah`,
      `${I}/makkah-to-madinah`,
      `${I}/jeddah-to-madinah`,
      `${I}/makkah-to-taif`,
      "services/city-transport/jeddah",
      "services/city-transport/makkah",
      I,
      "fleet",
    ],
    updated: U,
    copy: {
      en: {
        nav: "Jeddah to Makkah",
        title: "Jeddah to Makkah Private Car from Your Hotel",
        description: "Private car with a driver from a Jeddah hotel or address to Makkah: about 88 km on Route 40, around one hour. One vehicle for your party only. Request a quote.",
        h1: "Jeddah to Makkah by private car, from your hotel or address",
        eyebrow: "Intercity · Jeddah ⇄ Makkah",
        answer: "A private Jeddah to Makkah transfer is a pre-booked car with a driver from a hotel, home or office in Jeddah to your destination in Makkah, and back when you need it. It is about 88 km from central Jeddah on Route 40, around one hour of driving. The vehicle is reserved for your party only. Landing at the airport? Use the Jeddah Airport to Makkah page.",
        summary: "Private car from a Jeddah hotel or address to Makkah, about 88 km on Route 40.",
        sections: [
          {
            h: "City pickup in Jeddah, in a car that is yours alone",
            p: [
              "This page is for journeys that begin inside Jeddah: a hotel on the Corniche, an apartment, an office, or a relative's home. One vehicle and one driver take your party only to Makkah. No seats are sold to other travellers and nobody else is collected on the way.",
              "If your journey begins when you land at King Abdulaziz International Airport, the Jeddah Airport to Makkah page covers arrivals, flight timing and luggage from the terminal.",
            ],
          },
          {
            h: "The road: about an hour on Route 40",
            p: [
              "Jeddah and Makkah are joined by Route 40, the Makkah to Jeddah highway. Routing data measures about 88 km from central Jeddah to the Masjid al-Haram area, and Google Maps shows about one hour from Al Balad to Masjid al-Haram in normal traffic.",
              "The time changes with the part of Jeddah you start from and with the season. Roads into Makkah are busier in Ramadan, during Hajj and around Friday prayer, so allow extra time on those days and ask us what is realistic for your date.",
            ],
          },
          {
            h: "Reaching your hotel in Makkah",
            p: [
              "Give the hotel name. Close to Masjid al-Haram, vehicle access can be restricted, particularly near prayer times, so the drop-off point is agreed with you in advance and may be the nearest point a car is allowed to reach. Hotels further from the Haram are usually simpler to drive to.",
              "Entry to Makkah is for Muslims only. Visitors who are not Muslim can request private travel within Jeddah instead.",
            ],
          },
          {
            h: "Why people take this journey",
            p: ["The trip is short, but it is planned in different ways."],
            list: [
              "Going to Makkah for Umrah after a stay in Jeddah",
              "Families visiting Makkah for the day and returning to Jeddah at night",
              "Business visitors based in Jeddah with appointments in Makkah",
              "Returning from Makkah to Jeddah for a flight home",
            ],
          },
          {
            h: "Returning from Makkah to Jeddah",
            p: [
              "Departure day has its own page: Makkah to Jeddah covers the drive to the airport or a Jeddah address, with the pickup worked back from your flight. You can still ask for both directions in one enquiry and they are quoted together.",
            ],
          },
          {
            h: "Choosing the vehicle",
            p: [
              "State the number of passengers and bags. The quotation confirms the vehicle and its availability.",
            ],
            list: [
              "Sedan: one to a few passengers",
              "GMC Yukon: families who want more room and a higher seating position",
              "Hyundai Staria: larger families and small groups travelling together",
            ],
          },
        ],
        table: {
          h: "Jeddah to Makkah route facts",
          head: ["Detail", "Jeddah to Makkah"],
          rows: [
            ["Road distance", "About 88 km, central Jeddah to the Masjid al-Haram area"],
            ["Driving time", "About 1 hour without stops (Google Maps, Al Balad to Masjid al-Haram, checked November 2026)"],
            ["Main road", "Route 40 (Makkah to Jeddah highway)"],
            ["Pickup", "Hotel, home or office in Jeddah"],
            ["Drop-off", "Your hotel or address in Makkah, as close as vehicle access allows"],
            ["Vehicle types", "Sedan, GMC Yukon or Hyundai Staria, confirmed in your quotation"],
            ["Shared seats", "None. One vehicle for your party only"],
            ["Price", "Quoted for each journey; no fixed fare is published"],
          ],
        },
        checklist: {
          h: "Include this in your Jeddah to Makkah enquiry",
          items: [
            "Pickup address or hotel in Jeddah",
            "Hotel or address in Makkah",
            "Date and preferred time",
            "Number of passengers and bags",
            "Preferred vehicle: sedan, GMC Yukon or Hyundai Staria",
            "Return journey, with your flight time if it connects to a flight",
          ],
        },
        faqs: [
          { q: "How far is Jeddah from Makkah by car?", a: "About 88 km from central Jeddah to the Masjid al-Haram area on Route 40. The distance is longer from north Jeddah and from the airport." },
          { q: "How long does it take to drive from Jeddah to Makkah?", a: "About one hour in normal traffic, according to Google Maps from Al Balad to Masjid al-Haram. Allow more in Ramadan, during Hajj and around Friday prayer." },
          { q: "Is the Jeddah to Makkah car private or shared?", a: "Private. The vehicle is reserved for your party only, and RideSaudi does not add other passengers." },
          { q: "How much is a private car from Jeddah to Makkah?", a: "No fixed fare is published. The quotation depends on the date, the vehicle type, your pickup area in Jeddah and the number of passengers, and you see it before you confirm." },
          { q: "Can I ask for a GMC Yukon from Jeddah to Makkah?", a: "Yes. Select GMC Yukon as the preferred vehicle. Availability on your date is confirmed in the quotation." },
          { q: "I am landing at Jeddah airport. Is this the right page?", a: "For a pickup at King Abdulaziz International Airport, use the Jeddah Airport to Makkah page, which covers arrivals and flight timing." },
          { q: "Can you take me from Makkah back to Jeddah?", a: "Yes. See the Makkah to Jeddah page, or request the return in the same enquiry with your flight time so the pickup in Makkah is planned around it." },
        ],
      },
      ar: {
        nav: "جدة إلى مكة",
        title: "توصيل من جدة إلى مكة بسيارة خاصة من فندقك",
        description: "سيارة خاصة مع سائق من فندقك أو عنوانك في جدة إلى مكة المكرمة، نحو 88 كم عبر الطريق 40 في قرابة ساعة. السيارة لك ولمرافقيك فقط. اطلب عرض سعر.",
        h1: "من جدة إلى مكة المكرمة بسيارة خاصة، من فندقك أو عنوانك",
        eyebrow: "بين المدن · جدة ⇄ مكة",
        answer: "التوصيل الخاص من جدة إلى مكة المكرمة هو سيارة بسائق وبحجز مسبق من فندق أو منزل أو مكتب في جدة إلى وجهتك في مكة، مع العودة متى احتجت. تبلغ المسافة نحو 88 كم من وسط جدة عبر الطريق 40، أي قرابة ساعة من القيادة. السيارة مخصصة لك ولمرافقيك فقط. وإن كنت قادمًا عبر المطار فراجع صفحة مطار جدة إلى مكة.",
        summary: "سيارة خاصة من فندق أو عنوان في جدة إلى مكة المكرمة، نحو 88 كم عبر الطريق 40.",
        sections: [
          {
            h: "استلام من داخل جدة، في سيارة لك وحدك",
            p: [
              "هذه الصفحة للرحلات التي تبدأ من داخل جدة: فندق على الكورنيش، أو شقة، أو مكتب، أو بيت أحد الأقارب. سيارة واحدة وسائق واحد ينقلانك أنت ومرافقيك فقط إلى مكة المكرمة. لا تُباع مقاعد لمسافرين آخرين ولا يُستلم أحد في الطريق.",
              "أما إذا كانت رحلتك تبدأ عند هبوطك في مطار الملك عبدالعزيز الدولي، فصفحة مطار جدة إلى مكة تغطي الوصول وتوقيت الرحلة الجوية والأمتعة من الصالة.",
            ],
          },
          {
            h: "الطريق: نحو ساعة على الطريق 40",
            p: [
              "يربط جدة بمكة المكرمة الطريق 40، وهو طريق مكة جدة السريع. تقيس بيانات المسارات نحو 88 كم من وسط جدة إلى محيط المسجد الحرام، وتُظهر خرائط جوجل نحو ساعة من البلد إلى المسجد الحرام في الزحام المعتاد.",
              "يتغير الوقت بحسب المنطقة التي تنطلق منها في جدة وبحسب الموسم. فالطرق المؤدية إلى مكة أكثر ازدحامًا في رمضان وموسم الحج ووقت صلاة الجمعة، فاحسب وقتًا إضافيًا في تلك الأيام واسألنا عمّا هو واقعي في تاريخك.",
            ],
          },
          {
            h: "الوصول إلى فندقك في مكة",
            p: [
              "اذكر اسم الفندق. قرب المسجد الحرام قد يُقيَّد دخول السيارات، خصوصًا قرب أوقات الصلاة، ولذلك تُحدَّد نقطة النزول معك مسبقًا وقد تكون أقرب نقطة يُسمح للسيارة ببلوغها. أما الفنادق الأبعد عن الحرم فالوصول إليها بالسيارة أسهل عادة.",
              "دخول مكة المكرمة للمسلمين فقط. ويمكن للزوار غير المسلمين طلب تنقل خاص داخل جدة.",
            ],
          },
          {
            h: "لماذا يقطع الناس هذه الرحلة",
            p: ["المشوار قصير، لكنه يُخطَّط بطرق مختلفة."],
            list: [
              "التوجه إلى مكة للعمرة بعد إقامة في جدة",
              "عائلات تزور مكة نهارًا وتعود إلى جدة ليلًا",
              "زوار أعمال يقيمون في جدة ولهم مواعيد في مكة",
              "العودة من مكة إلى جدة للحاق برحلة المغادرة",
            ],
          },
          {
            h: "العودة من مكة إلى جدة",
            p: [
              "ليوم المغادرة صفحة مستقلة: صفحة مكة إلى جدة تغطي الطريق إلى المطار أو إلى عنوان في جدة، مع حساب موعد الاستلام رجوعًا من رحلتك. ويمكنك مع ذلك طلب الاتجاهين في طلب واحد فيُسعَّران معًا.",
            ],
          },
          {
            h: "اختيار السيارة",
            p: [
              "اذكر عدد الركاب والحقائب، ويؤكد عرض السعر السيارة وإتاحتها.",
            ],
            list: [
              "سيدان: لراكب واحد أو عدد قليل من الركاب",
              "جمس يوكن: للعائلات التي تريد مساحة أوسع وجلسة مرتفعة",
              "هيونداي ستاريا: للعائلات الأكبر والمجموعات الصغيرة التي تسافر معًا",
            ],
          },
        ],
        table: {
          h: "حقائق الطريق من جدة إلى مكة",
          head: ["البيان", "من جدة إلى مكة"],
          rows: [
            ["مسافة الطريق", "نحو 88 كم من وسط جدة إلى محيط المسجد الحرام"],
            ["زمن القيادة", "نحو ساعة دون توقفات (خرائط جوجل، من البلد إلى المسجد الحرام، نوفمبر 2026)"],
            ["الطريق الرئيس", "الطريق 40 (طريق مكة جدة السريع)"],
            ["الاستلام", "فندق أو منزل أو مكتب في جدة"],
            ["النزول", "فندقك أو عنوانك في مكة، في أقرب نقطة يسمح بها دخول السيارات"],
            ["أنواع السيارات", "سيدان أو جمس يوكن أو هيونداي ستاريا، وتتأكد في عرض السعر"],
            ["المقاعد المشتركة", "لا توجد. سيارة واحدة لك ولمرافقيك فقط"],
            ["السعر", "يُحدَّد لكل رحلة، ولا يُنشر سعر ثابت"],
          ],
        },
        checklist: {
          h: "ما الذي تذكره في طلب التوصيل من جدة إلى مكة",
          items: [
            "عنوان الاستلام أو الفندق في جدة",
            "الفندق أو العنوان في مكة المكرمة",
            "التاريخ والوقت المفضل",
            "عدد الركاب والحقائب",
            "السيارة المفضلة: سيدان أو جمس يوكن أو هيونداي ستاريا",
            "رحلة العودة، مع موعد رحلتك الجوية إن كانت مرتبطة بها",
          ],
        },
        faqs: [
          { q: "كم تبعد جدة عن مكة بالسيارة؟", a: "نحو 88 كم من وسط جدة إلى محيط المسجد الحرام عبر الطريق 40. وتزيد المسافة من شمال جدة ومن المطار." },
          { q: "من جدة إلى مكة بالسيارة كم ساعة؟", a: "نحو ساعة في الزحام المعتاد بحسب خرائط جوجل من البلد إلى المسجد الحرام. واحسب وقتًا أطول في رمضان وموسم الحج ووقت صلاة الجمعة." },
          { q: "هل السيارة من جدة إلى مكة خاصة أم مشتركة؟", a: "خاصة. السيارة مخصصة لك ولمرافقيك فقط، ولا تضيف RideSaudi ركابًا آخرين." },
          { q: "كم سعر السيارة الخاصة من جدة إلى مكة؟", a: "لا يُنشر سعر ثابت. يعتمد عرض السعر على التاريخ ونوع السيارة ومنطقة الاستلام في جدة وعدد الركاب، ويصلك قبل أن تؤكد." },
          { q: "هل يمكنني طلب جمس يوكن من جدة إلى مكة؟", a: "نعم. اختر جمس يوكن سيارةً مفضلة، وتتأكد إتاحتها في تاريخك ضمن عرض السعر." },
          { q: "سأصل عبر مطار جدة، فهل هذه الصفحة المناسبة؟", a: "للاستلام من مطار الملك عبدالعزيز الدولي راجع صفحة مطار جدة إلى مكة، فهي تغطي الوصول وتوقيت الرحلة الجوية." },
          { q: "هل توصلونني من مكة إلى جدة في العودة؟", a: "نعم. راجع صفحة مكة إلى جدة، أو اطلب العودة في الطلب نفسه مع موعد رحلتك الجوية ليُخطَّط وقت الاستلام في مكة بحسبه." },
        ],
      },
    },
  },
];
