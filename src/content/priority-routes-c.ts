import type { ServicePage } from "./types";

/**
 * Phase 2C (2026-11-18): the four new P1 routes from docs/phase1/NEW_ROUTE_OPPORTUNITIES.csv.
 * Each is the reverse of a live page but written for its own traveller: departure-day timing
 * (Makkah and Madinah to Jeddah), the drive home after Umrah (Makkah to Riyadh), and the descent
 * from the mountains (Taif to Jeddah). The forward pages now link here instead of claiming the return.
 *
 * Fact sources, checked 2026-11-18. Distances: OSRM routing on OpenStreetMap data between the named
 * points (docs/phase1/ROUTE_GEOGRAPHY_MASTER.csv). Driving times: Google Maps, normal traffic, no stops.
 *  - Prophet's Mosque, Madinah to King Abdulaziz International Airport (JED): 399 km; 3 h 56 min.
 *    Prophet's Mosque to Al Balad, Jeddah: 404 km; 4 h 13 min. Mostly Route 15.
 *  - Masjid al-Haram to Al Balad, Jeddah: 88 km; 1 h 02 min. Masjid al-Haram to JED: 98 km; 1 h 05 min. Route 40.
 *  - Masjid al-Haram to King Abdullah Financial District, Riyadh: 871 km; 8 h 59 min. Route 40.
 *  - Central Taif to Al Balad, Jeddah: 171 km; 2 h 01 min. Taif to JED: 2 h 04 min.
 * Same rules as the other priority files: vehicle types only (sedan, GMC Yukon, Hyundai Staria),
 * owner-confirmed policies only, no prices, no capacity numbers, no airport terminal claims.
 */
const U = "2026-11-18";
const I = "services/intercity-transfers";

export const priorityRoutesC: ServicePage[] = [
  {
    path: `${I}/madinah-to-jeddah`,
    parent: I,
    variant: "umrah",
    service: "intercity",
    related: [
      `${I}/jeddah-to-madinah`,
      `${I}/madinah-to-makkah`,
      "services/umrah-transport/madinah-ziyarat",
      "services/airport-transfers/jeddah-airport",
      "services/airport-transfers/madinah-airport",
      "services/city-transport/madinah",
      I,
      "fleet",
    ],
    updated: U,
    copy: {
      en: {
        nav: "Madinah to Jeddah",
        title: "Madinah to Jeddah Airport Private Car",
        description: "Private car with a driver from your Madinah hotel to Jeddah or Jeddah airport: about 400 km, around four hours. One vehicle for your party only.",
        h1: "Madinah to Jeddah by private car, timed around your flight",
        eyebrow: "Intercity · Madinah → Jeddah",
        answer: "A private Madinah to Jeddah transfer is a pre-booked car with a driver from your hotel in Madinah to King Abdulaziz International Airport or an address in Jeddah. It is about 400 km, mostly on Route 15, and close to four hours of driving before stops. The vehicle is reserved for your party only, and the departure is planned backwards from your flight.",
        summary: "Private car from a Madinah hotel to Jeddah or Jeddah airport, about 400 km, planned around your flight.",
        sections: [
          {
            h: "The last leg of a visit to Madinah",
            p: [
              "Most people on this road are leaving: flying home from Jeddah, connecting onward, or moving to a hotel in Jeddah for the last days of a trip. One vehicle and one driver carry your party only, from the hotel door to the airport or your address, with every bag in the same car.",
            ],
          },
          {
            h: "Plan backwards from the flight",
            p: [
              "Start from the time you want to be at the airport, not from the time you want to leave. Google Maps shows about 3 hours 56 minutes from the Prophet's Mosque area to King Abdulaziz International Airport in normal traffic, and about 4 hours 13 minutes to central Jeddah. Add a rest or prayer stop, the time to load luggage at the hotel, and a margin for traffic.",
              "Send your flight number and departure time with the enquiry, and the pickup time in Madinah is proposed from it. A four-hour road should not be run close to a departure.",
            ],
          },
          {
            h: "Leaving a hotel near the Prophet's Mosque",
            p: [
              "Streets around the mosque are restricted at prayer times and in busy seasons, so the pickup is set for a quieter window at an agreed entrance or gate. Give the hotel name, the number of rooms checking out and how many large bags are coming down. If you would like a last Ziyarat stop on the way out of the city, ask for it in the same enquiry.",
            ],
          },
          {
            h: "Which vehicle for the trip home",
            p: ["List every traveller and every bag, including Zamzam water. The quotation confirms the vehicle and its availability."],
            list: [
              "Sedan: one to a few passengers with ordinary luggage",
              "GMC Yukon: a family with more bags than a sedan can take",
              "Hyundai Staria: larger families and small groups going home together",
            ],
          },
          {
            h: "Car or the Haramain train",
            p: [
              "The Haramain High Speed Railway also connects Madinah with Jeddah and its airport. It suits light travellers who are comfortable at stations. A private car suits families and older travellers with luggage, because it runs from the hotel door to the terminal with no change of vehicle and no fixed timetable.",
            ],
          },
          {
            h: "Arriving rather than leaving?",
            p: [
              "If you are travelling from Jeddah to Madinah, for example straight from the airport after landing, see the Jeddah to Madinah page, which is planned around arrival instead of departure.",
            ],
          },
        ],
        table: {
          h: "Madinah to Jeddah route facts",
          head: ["Detail", "Madinah to Jeddah"],
          rows: [
            ["Road distance", "About 400 km, Prophet's Mosque area to Jeddah airport or central Jeddah"],
            ["Driving time to the airport", "About 3 h 56 min without stops (Google Maps, checked November 2026)"],
            ["Driving time to central Jeddah", "About 4 h 13 min without stops (Google Maps)"],
            ["Main road", "Mostly Route 15"],
            ["Pickup", "Your hotel or address in Madinah"],
            ["Drop-off", "King Abdulaziz International Airport or any address in Jeddah"],
            ["Vehicle types", "Sedan, GMC Yukon or Hyundai Staria, confirmed in your quotation"],
            ["Shared seats", "None. One vehicle for your party only"],
          ],
        },
        checklist: {
          h: "Include this in your Madinah to Jeddah enquiry",
          items: [
            "Hotel in Madinah",
            "Flight number and departure time, or your Jeddah address",
            "Date",
            "Number of travellers and every bag",
            "Preferred vehicle: sedan, GMC Yukon or Hyundai Staria",
            "Any Ziyarat stop before leaving Madinah",
          ],
        },
        faqs: [
          { q: "How long does it take to drive from Madinah to Jeddah airport?", a: "About 3 hours 56 minutes from the Prophet's Mosque area in normal traffic, according to Google Maps. Allow extra for stops, loading luggage and a margin before your flight." },
          { q: "How far is Madinah from Jeddah by road?", a: "About 400 km, mostly on Route 15, from the Prophet's Mosque area to Jeddah airport or central Jeddah." },
          { q: "What time should I leave Madinah for my flight from Jeddah?", a: "Send your flight time and we propose a pickup time worked back from it, with the drive, a stop and a safety margin included. Do not plan the road close to your departure." },
          { q: "Is the car from Madinah to Jeddah shared with other passengers?", a: "No. The vehicle is reserved for your party only; RideSaudi does not sell shared seats." },
          { q: "How much is a private car from Madinah to Jeddah airport?", a: "No fixed fare is published. The quotation depends on the date, the vehicle type and the number of passengers, and you see it before you confirm." },
          { q: "Can we stop for Ziyarat before leaving Madinah?", a: "Yes, you can request it. Name the places in the enquiry so the extra time is part of the plan and the quotation." },
        ],
      },
      ar: {
        nav: "المدينة إلى جدة",
        title: "توصيل من المدينة إلى جدة ومطار جدة بسيارة خاصة",
        description: "سيارة خاصة مع سائق من فندقك في المدينة المنورة إلى جدة أو مطار جدة، نحو 400 كم في قرابة أربع ساعات. السيارة لك ولمرافقيك فقط.",
        h1: "من المدينة المنورة إلى جدة بسيارة خاصة، بوقت محسوب على رحلتك الجوية",
        eyebrow: "بين المدن · المدينة ← جدة",
        answer: "التوصيل الخاص من المدينة المنورة إلى جدة هو سيارة بسائق وبحجز مسبق من فندقك في المدينة إلى مطار الملك عبدالعزيز الدولي أو إلى عنوان في جدة. تبلغ المسافة نحو 400 كم ومعظمها على الطريق 15، أي قرابة أربع ساعات من القيادة قبل التوقفات. السيارة مخصصة لك ولمرافقيك فقط، ويُخطَّط موعد الانطلاق رجوعًا من موعد رحلتك.",
        summary: "سيارة خاصة من فندق في المدينة إلى جدة أو مطار جدة، نحو 400 كم، بتخطيط محسوب على رحلتك الجوية.",
        sections: [
          {
            h: "المرحلة الأخيرة من زيارة المدينة",
            p: [
              "معظم المسافرين على هذا الطريق مغادرون: عائدون جوًّا من جدة، أو مواصلون إلى رحلة أخرى، أو منتقلون إلى فندق في جدة لآخر أيام الرحلة. تنقلك أنت ومرافقيك فقط سيارة واحدة بسائق واحد من باب الفندق إلى المطار أو إلى عنوانك، وكل الحقائب معكم في السيارة نفسها.",
            ],
          },
          {
            h: "خطّط رجوعًا من موعد الرحلة",
            p: [
              "ابدأ من الوقت الذي تريد أن تكون فيه في المطار، لا من الوقت الذي تريد المغادرة فيه. تُظهر خرائط جوجل نحو ثلاث ساعات وست وخمسين دقيقة من محيط المسجد النبوي إلى مطار الملك عبدالعزيز الدولي في الزحام المعتاد، ونحو أربع ساعات وثلاث عشرة دقيقة إلى وسط جدة. وأضف توقفًا للراحة أو الصلاة، ووقت تحميل الأمتعة في الفندق، وهامشًا للزحام.",
              "أرسل رقم الرحلة وموعد الإقلاع مع الطلب، فيُقترح موعد الاستلام في المدينة بناءً عليه. ولا ينبغي أن تُقطع رحلة من أربع ساعات قريبًا من موعد الإقلاع.",
            ],
          },
          {
            h: "المغادرة من فندق قرب المسجد النبوي",
            p: [
              "تُقيَّد الشوارع حول المسجد في أوقات الصلاة والمواسم المزدحمة، ولذلك يُحدَّد الاستلام في وقت أهدأ عند مدخل أو باب متفق عليه. اذكر اسم الفندق وعدد الغرف التي ستغادر وعدد الحقائب الكبيرة. وإن أردت توقفًا أخيرًا لزيارة بعض المعالم في طريق الخروج من المدينة فاطلبه في الطلب نفسه.",
            ],
          },
          {
            h: "أي سيارة لرحلة العودة",
            p: ["اذكر كل مسافر وكل حقيبة، ومنها عبوات ماء زمزم. ويؤكد عرض السعر السيارة وإتاحتها."],
            list: [
              "سيدان: لراكب واحد أو عدد قليل من الركاب بأمتعة عادية",
              "جمس يوكن: لعائلة أمتعتها أكثر مما تتسع له السيدان",
              "هيونداي ستاريا: للعائلات الأكبر والمجموعات الصغيرة العائدة معًا",
            ],
          },
          {
            h: "السيارة أم قطار الحرمين",
            p: [
              "يربط قطار الحرمين السريع أيضًا المدينة المنورة بجدة ومطارها، وهو يناسب من يسافر بأمتعة خفيفة ولا يجد صعوبة في المحطات. أما السيارة الخاصة فتناسب العائلات وكبار السن أصحاب الأمتعة، لأنها تسير من باب الفندق إلى صالة المطار بلا تبديل سيارة وبلا جدول ثابت.",
            ],
          },
          {
            h: "هل أنت قادم لا مغادر؟",
            p: [
              "إذا كنت مسافرًا من جدة إلى المدينة المنورة، مباشرة من المطار بعد الهبوط مثلًا، فراجع صفحة جدة إلى المدينة، فهي مخططة حول الوصول لا المغادرة.",
            ],
          },
        ],
        table: {
          h: "حقائق الطريق من المدينة إلى جدة",
          head: ["البيان", "من المدينة إلى جدة"],
          rows: [
            ["مسافة الطريق", "نحو 400 كم من محيط المسجد النبوي إلى مطار جدة أو وسط جدة"],
            ["زمن القيادة إلى المطار", "نحو 3 ساعات و56 دقيقة دون توقفات (خرائط جوجل، نوفمبر 2026)"],
            ["زمن القيادة إلى وسط جدة", "نحو 4 ساعات و13 دقيقة دون توقفات (خرائط جوجل)"],
            ["الطريق الرئيس", "معظمه على الطريق 15"],
            ["الاستلام", "فندقك أو عنوانك في المدينة المنورة"],
            ["النزول", "مطار الملك عبدالعزيز الدولي أو أي عنوان في جدة"],
            ["أنواع السيارات", "سيدان أو جمس يوكن أو هيونداي ستاريا، وتتأكد في عرض السعر"],
            ["المقاعد المشتركة", "لا توجد. سيارة واحدة لك ولمرافقيك فقط"],
          ],
        },
        checklist: {
          h: "ما الذي تذكره في طلب التوصيل من المدينة إلى جدة",
          items: [
            "الفندق في المدينة المنورة",
            "رقم الرحلة وموعد الإقلاع، أو عنوانك في جدة",
            "التاريخ",
            "عدد المسافرين وكل حقيبة",
            "السيارة المفضلة: سيدان أو جمس يوكن أو هيونداي ستاريا",
            "أي توقف للزيارة قبل مغادرة المدينة",
          ],
        },
        faqs: [
          { q: "كم ساعة من المدينة إلى مطار جدة بالسيارة؟", a: "نحو ثلاث ساعات وست وخمسين دقيقة من محيط المسجد النبوي في الزحام المعتاد بحسب خرائط جوجل. واحسب وقتًا إضافيًا للتوقفات وتحميل الأمتعة وهامشًا قبل رحلتك." },
          { q: "كم تبعد المدينة المنورة عن جدة بالطريق؟", a: "نحو 400 كم ومعظمها على الطريق 15، من محيط المسجد النبوي إلى مطار جدة أو وسط جدة." },
          { q: "متى أغادر المدينة لألحق برحلتي من جدة؟", a: "أرسل موعد رحلتك فنقترح موعد استلام محسوبًا رجوعًا منه، يشمل الطريق وتوقفًا وهامش أمان. ولا تخطط للطريق قريبًا من موعد الإقلاع." },
          { q: "هل السيارة من المدينة إلى جدة مشتركة مع ركاب آخرين؟", a: "لا. السيارة مخصصة لك ولمرافقيك فقط؛ لا تبيع RideSaudi مقاعد مشتركة." },
          { q: "كم سعر السيارة الخاصة من المدينة إلى مطار جدة؟", a: "لا يُنشر سعر ثابت. يعتمد عرض السعر على التاريخ ونوع السيارة وعدد الركاب، ويصلك قبل أن تؤكد." },
          { q: "هل يمكن التوقف لزيارة بعض المعالم قبل مغادرة المدينة؟", a: "نعم، يمكنك طلب ذلك. اذكر الأماكن في الطلب ليدخل الوقت الإضافي في الخطة وعرض السعر." },
        ],
      },
    },
  },

  {
    path: `${I}/makkah-to-jeddah`,
    parent: I,
    variant: "umrah",
    service: "intercity",
    related: [
      `${I}/jeddah-to-makkah`,
      `${I}/makkah-to-madinah`,
      `${I}/makkah-to-taif`,
      "services/umrah-transport/jeddah-airport-to-makkah",
      "services/airport-transfers/jeddah-airport",
      "services/city-transport/makkah",
      "services/city-transport/jeddah",
      I,
    ],
    updated: U,
    copy: {
      en: {
        nav: "Makkah to Jeddah",
        title: "Makkah to Jeddah Airport Private Transfer",
        description: "Private car with a driver from your Makkah hotel to Jeddah airport or a Jeddah address: about an hour on Route 40. One vehicle for your party only.",
        h1: "Makkah to Jeddah by private car, to the airport or your address",
        eyebrow: "Intercity · Makkah → Jeddah",
        answer: "A private Makkah to Jeddah transfer is a pre-booked car with a driver from your hotel in Makkah to King Abdulaziz International Airport or an address in Jeddah. The airport is about 98 km away on Route 40, roughly 1 hour 5 minutes of driving; central Jeddah is about 88 km. The vehicle is reserved for your party only.",
        summary: "Private car from a Makkah hotel to Jeddah airport or a Jeddah address, about an hour on Route 40.",
        sections: [
          {
            h: "Leaving Makkah on departure day",
            p: [
              "This is the journey most pilgrims make at the end of their stay: from the hotel to the airport for the flight home, or into Jeddah for the last nights of the trip. One vehicle and one driver take your party only, with all your luggage, straight from the hotel to the terminal or your address.",
            ],
          },
          {
            h: "How long to allow before your flight",
            p: [
              "Google Maps shows about 1 hour 5 minutes from the Masjid al-Haram area to King Abdulaziz International Airport in normal traffic, and about 1 hour 2 minutes to Al Balad in central Jeddah. Getting out of the central area of Makkah can take longer than the highway itself, especially after prayers, in Ramadan and in the Hajj season.",
              "Send the flight number and departure time, and the pickup is proposed from that time, with the drive, a margin for traffic and the airport check-in time included.",
            ],
          },
          {
            h: "Pickup at a hotel near the Haram",
            p: [
              "Vehicle access close to Masjid al-Haram is restricted, particularly around prayer times, so the pickup point is agreed in advance and may be the nearest point a car is allowed to reach. Tell us the hotel, the number of rooms checking out and the number of large bags, so the right vehicle arrives and loading is quick.",
              "Many pilgrims want to leave soon after their last visit to the Haram. Tell us when you expect to be back at the hotel, and the pickup is set after it.",
            ],
          },
          {
            h: "To Jeddah rather than the airport",
            p: [
              "If you are staying on in Jeddah, give the hotel or address. A drop-off in north Jeddah is further from Makkah than the city centre, so the exact address helps the timing.",
            ],
          },
          {
            h: "Which vehicle to request",
            p: ["List every traveller and every bag, including Zamzam water. The quotation confirms the vehicle."],
            list: [
              "Sedan: one to a few passengers with ordinary luggage",
              "GMC Yukon: families with more bags",
              "Hyundai Staria: larger families and small groups leaving together",
            ],
          },
          {
            h: "Arriving in Makkah instead?",
            p: [
              "For the journey into Makkah, see Jeddah Airport to Makkah if you are landing, or Jeddah to Makkah if you start from a Jeddah hotel or address.",
            ],
          },
        ],
        table: {
          h: "Makkah to Jeddah route facts",
          head: ["Detail", "Makkah to Jeddah"],
          rows: [
            ["To Jeddah airport", "About 98 km; about 1 h 05 min without stops (Google Maps, checked November 2026)"],
            ["To central Jeddah", "About 88 km; about 1 h 02 min without stops (Google Maps)"],
            ["Main road", "Route 40 (Makkah to Jeddah highway)"],
            ["Pickup", "Your hotel in Makkah, at the nearest point vehicle access allows"],
            ["Drop-off", "King Abdulaziz International Airport or any address in Jeddah"],
            ["Vehicle types", "Sedan, GMC Yukon or Hyundai Staria, confirmed in your quotation"],
            ["Shared seats", "None. One vehicle for your party only"],
            ["Price", "Quoted for each journey; no fixed fare is published"],
          ],
        },
        checklist: {
          h: "Include this in your Makkah to Jeddah enquiry",
          items: [
            "Hotel in Makkah",
            "Flight number and departure time, or your Jeddah address",
            "Date and the time you expect to be ready",
            "Number of travellers and every bag",
            "Preferred vehicle: sedan, GMC Yukon or Hyundai Staria",
          ],
        },
        faqs: [
          { q: "How long is the drive from Makkah to Jeddah airport?", a: "About 1 hour 5 minutes from the Masjid al-Haram area in normal traffic, according to Google Maps. Leaving the central area at prayer times, in Ramadan or in the Hajj season takes longer." },
          { q: "How far is Jeddah airport from Makkah?", a: "About 98 km on Route 40 from the Masjid al-Haram area. Central Jeddah is about 88 km away." },
          { q: "When should I leave Makkah for a flight from Jeddah?", a: "Send your departure time and we propose a pickup time worked back from it, including the drive, traffic around the Haram and the airport check-in time." },
          { q: "Is the car from Makkah to Jeddah private?", a: "Yes. The vehicle is reserved for your party only, with no other passengers added." },
          { q: "How much is a private taxi from Makkah to Jeddah airport?", a: "No fixed fare is published. The quotation depends on the date, the vehicle type and the number of passengers, and you see it before you confirm." },
          { q: "Can the driver collect us at our hotel next to the Haram?", a: "The pickup is agreed in advance at the nearest point a vehicle is allowed to reach. Give the hotel name and we confirm the point with you." },
        ],
      },
      ar: {
        nav: "مكة إلى جدة",
        title: "توصيل من مكة إلى مطار جدة بسيارة خاصة",
        description: "سيارة خاصة مع سائق من فندقك في مكة المكرمة إلى مطار جدة أو عنوان في جدة، نحو ساعة عبر الطريق 40. السيارة لك ولمرافقيك فقط.",
        h1: "من مكة المكرمة إلى جدة بسيارة خاصة، إلى المطار أو إلى عنوانك",
        eyebrow: "بين المدن · مكة ← جدة",
        answer: "التوصيل الخاص من مكة المكرمة إلى جدة هو سيارة بسائق وبحجز مسبق من فندقك في مكة إلى مطار الملك عبدالعزيز الدولي أو إلى عنوان في جدة. يبعد المطار نحو 98 كم عبر الطريق 40، أي قرابة ساعة وخمس دقائق من القيادة، ويبعد وسط جدة نحو 88 كم. السيارة مخصصة لك ولمرافقيك فقط.",
        summary: "سيارة خاصة من فندق في مكة إلى مطار جدة أو عنوان في جدة، نحو ساعة عبر الطريق 40.",
        sections: [
          {
            h: "مغادرة مكة يوم السفر",
            p: [
              "هذه هي الرحلة التي يقطعها معظم المعتمرين في نهاية إقامتهم: من الفندق إلى المطار للعودة إلى بلادهم، أو إلى جدة لقضاء آخر الليالي فيها. تنقلك أنت ومرافقيك فقط سيارة واحدة بسائق واحد مع كل أمتعتكم، مباشرة من الفندق إلى صالة المطار أو إلى عنوانك.",
            ],
          },
          {
            h: "كم وقتًا تحتاج قبل رحلتك",
            p: [
              "تُظهر خرائط جوجل نحو ساعة وخمس دقائق من محيط المسجد الحرام إلى مطار الملك عبدالعزيز الدولي في الزحام المعتاد، ونحو ساعة ودقيقتين إلى البلد في وسط جدة. وقد يستغرق الخروج من المنطقة المركزية في مكة أكثر من الطريق السريع نفسه، خصوصًا بعد الصلوات وفي رمضان وموسم الحج.",
              "أرسل رقم الرحلة وموعد الإقلاع، فيُقترح موعد الاستلام بناءً عليه، مع وقت الطريق وهامش للزحام ووقت إنهاء إجراءات السفر في المطار.",
            ],
          },
          {
            h: "الاستلام من فندق قرب الحرم",
            p: [
              "دخول السيارات قرب المسجد الحرام مقيَّد، خصوصًا قرب أوقات الصلاة، ولذلك تُحدَّد نقطة الاستلام مسبقًا وقد تكون أقرب نقطة يُسمح للسيارة ببلوغها. أخبرنا باسم الفندق وعدد الغرف التي ستغادر وعدد الحقائب الكبيرة، لتصل السيارة المناسبة ويكون التحميل سريعًا.",
              "كثير من المعتمرين يريدون المغادرة بعد زيارتهم الأخيرة للحرم بقليل. أخبرنا متى تتوقع العودة إلى الفندق، فيُحدَّد الاستلام بعدها.",
            ],
          },
          {
            h: "إلى جدة لا إلى المطار",
            p: [
              "إذا كنت ستبقى في جدة فاذكر الفندق أو العنوان. فالنزول في شمال جدة أبعد عن مكة من وسط المدينة، والعنوان الدقيق يساعد في ضبط التوقيت.",
            ],
          },
          {
            h: "أي سيارة تطلب",
            p: ["اذكر كل مسافر وكل حقيبة، ومنها عبوات ماء زمزم. ويؤكد عرض السعر السيارة."],
            list: [
              "سيدان: لراكب واحد أو عدد قليل من الركاب بأمتعة عادية",
              "جمس يوكن: للعائلات ذات الأمتعة الأكثر",
              "هيونداي ستاريا: للعائلات الأكبر والمجموعات الصغيرة المغادرة معًا",
            ],
          },
          {
            h: "هل أنت متجه إلى مكة؟",
            p: [
              "للرحلة إلى مكة المكرمة راجع صفحة مطار جدة إلى مكة إذا كنت واصلًا جوًّا، أو صفحة جدة إلى مكة إذا كنت تنطلق من فندق أو عنوان في جدة.",
            ],
          },
        ],
        table: {
          h: "حقائق الطريق من مكة إلى جدة",
          head: ["البيان", "من مكة إلى جدة"],
          rows: [
            ["إلى مطار جدة", "نحو 98 كم؛ ونحو ساعة و5 دقائق دون توقفات (خرائط جوجل، نوفمبر 2026)"],
            ["إلى وسط جدة", "نحو 88 كم؛ ونحو ساعة ودقيقتين دون توقفات (خرائط جوجل)"],
            ["الطريق الرئيس", "الطريق 40 (طريق مكة جدة السريع)"],
            ["الاستلام", "فندقك في مكة، في أقرب نقطة يسمح بها دخول السيارات"],
            ["النزول", "مطار الملك عبدالعزيز الدولي أو أي عنوان في جدة"],
            ["أنواع السيارات", "سيدان أو جمس يوكن أو هيونداي ستاريا، وتتأكد في عرض السعر"],
            ["المقاعد المشتركة", "لا توجد. سيارة واحدة لك ولمرافقيك فقط"],
            ["السعر", "يُحدَّد لكل رحلة، ولا يُنشر سعر ثابت"],
          ],
        },
        checklist: {
          h: "ما الذي تذكره في طلب التوصيل من مكة إلى جدة",
          items: [
            "الفندق في مكة المكرمة",
            "رقم الرحلة وموعد الإقلاع، أو عنوانك في جدة",
            "التاريخ والوقت الذي تتوقع أن تكون جاهزًا فيه",
            "عدد المسافرين وكل حقيبة",
            "السيارة المفضلة: سيدان أو جمس يوكن أو هيونداي ستاريا",
          ],
        },
        faqs: [
          { q: "كم يستغرق الطريق من مكة إلى مطار جدة؟", a: "نحو ساعة وخمس دقائق من محيط المسجد الحرام في الزحام المعتاد بحسب خرائط جوجل. ويطول الخروج من المنطقة المركزية في أوقات الصلاة وفي رمضان وموسم الحج." },
          { q: "كم يبعد مطار جدة عن مكة؟", a: "نحو 98 كم عبر الطريق 40 من محيط المسجد الحرام. ويبعد وسط جدة نحو 88 كم." },
          { q: "متى أغادر مكة لألحق برحلتي من جدة؟", a: "أرسل موعد إقلاعك فنقترح موعد استلام محسوبًا رجوعًا منه، يشمل الطريق وزحام محيط الحرم ووقت إنهاء الإجراءات في المطار." },
          { q: "هل السيارة من مكة إلى جدة خاصة؟", a: "نعم. السيارة مخصصة لك ولمرافقيك فقط، ولا يُضاف إليها ركاب آخرون." },
          { q: "كم سعر تاكسي خاص من مكة إلى مطار جدة؟", a: "لا يُنشر سعر ثابت. يعتمد عرض السعر على التاريخ ونوع السيارة وعدد الركاب، ويصلك قبل أن تؤكد." },
          { q: "هل يستلمنا السائق من فندقنا المجاور للحرم؟", a: "تُحدَّد نقطة الاستلام مسبقًا في أقرب مكان يُسمح للسيارة ببلوغه. اذكر اسم الفندق ونؤكد النقطة معك." },
        ],
      },
    },
  },

  {
    path: `${I}/makkah-to-riyadh`,
    parent: I,
    variant: "umrah",
    service: "intercity",
    related: [
      `${I}/riyadh-to-makkah`,
      `${I}/makkah-to-madinah`,
      `${I}/makkah-to-jeddah`,
      `${I}/makkah-to-taif`,
      "services/city-transport/makkah",
      "services/city-transport/riyadh",
      "services/umrah-transport",
      I,
    ],
    updated: U,
    copy: {
      en: {
        nav: "Makkah to Riyadh",
        title: "Makkah to Riyadh Private Car After Umrah",
        description: "Private car with a driver from your Makkah hotel home to Riyadh: about 871 km on Route 40, around nine hours of driving. One vehicle for your party only.",
        h1: "Makkah to Riyadh by private car, the drive home after Umrah",
        eyebrow: "Intercity · Makkah → Riyadh",
        answer: "A private Makkah to Riyadh transfer is a pre-booked car with a driver from your hotel in Makkah to your home or address in Riyadh, usually at the end of an Umrah trip. The road is about 871 km on Route 40, around nine hours of driving before stops. The vehicle is reserved for your party only, and RideSaudi quotes each journey individually.",
        summary: "Private car from a Makkah hotel home to Riyadh, about 871 km on Route 40.",
        sections: [
          {
            h: "Going home together, door to door",
            p: [
              "After Umrah, many families from Riyadh would rather go home by road in one vehicle than split between flights and airport transfers. A private car collects your whole party at the hotel and ends at your own door, with the luggage and Zamzam water you are bringing back. Nobody else travels in the car.",
            ],
          },
          {
            h: "A full day on Route 40",
            p: [
              "Routing data measures about 871 km from the Masjid al-Haram area to central Riyadh, almost all of it on Route 40. Google Maps shows about 8 hours 59 minutes of driving to the King Abdullah Financial District in normal traffic. With prayer, meal and rest stops, plan for a longer day door to door.",
              "Tell us when you want to leave and which stops matter to you. Leaving early reaches Riyadh the same evening; if you prefer to break the journey overnight, say so and it is included in the plan.",
            ],
          },
          {
            h: "Pickup in Makkah",
            p: [
              "Vehicle access close to Masjid al-Haram is restricted, particularly around prayer times, so the pickup point is agreed in advance and may be the nearest point a car can reach. Give the hotel name and the time you expect to be ready, including any last visit to the Haram you want before leaving.",
            ],
          },
          {
            h: "Comfort on a nine-hour drive",
            p: [
              "Pilgrims are often tired at the end of an Umrah trip, and older relatives may need more frequent breaks. Mention them in the enquiry, along with children and anyone who needs extra room, so the vehicle and the pace of the day suit the group.",
            ],
            list: [
              "Sedan: one or two travellers going home light",
              "GMC Yukon: a family that wants room to rest on the way",
              "Hyundai Staria: larger families and groups of relatives with luggage",
            ],
          },
          {
            h: "Car or flight",
            p: [
              "Flights from Jeddah to Riyadh are faster in the air, but add the road to Jeddah airport, check-in and the journey home from the Riyadh airport. The car is slower overall but has no changes: one vehicle from the hotel door to your own. Travelling the other way, from Riyadh for Umrah? See Riyadh to Makkah.",
            ],
          },
        ],
        table: {
          h: "Makkah to Riyadh route facts",
          head: ["Detail", "Makkah to Riyadh"],
          rows: [
            ["Road distance", "About 871 km, Masjid al-Haram area to central Riyadh"],
            ["Driving time", "About 8 h 59 min without stops (Google Maps, checked November 2026)"],
            ["Main road", "Route 40"],
            ["Pickup", "Your hotel in Makkah, at the nearest point vehicle access allows"],
            ["Drop-off", "Your home or any address in Riyadh"],
            ["Vehicle types", "Sedan, GMC Yukon or Hyundai Staria, confirmed in your quotation"],
            ["Shared seats", "None. One vehicle for your party only"],
            ["Price", "Quoted for each journey; no fixed fare is published"],
          ],
        },
        checklist: {
          h: "Include this in your Makkah to Riyadh enquiry",
          items: [
            "Hotel in Makkah and drop-off address in Riyadh",
            "Date and the time you expect to be ready",
            "Travellers, including children and elderly relatives",
            "Every bag, including Zamzam water",
            "Stops you want, or an overnight break",
            "Preferred vehicle: sedan, GMC Yukon or Hyundai Staria",
          ],
        },
        faqs: [
          { q: "How many hours is the drive from Makkah to Riyadh?", a: "About 8 hours 59 minutes of driving in normal traffic, according to Google Maps, before prayer, meal and rest stops." },
          { q: "How far is Makkah from Riyadh by road?", a: "About 871 km on Route 40, from the Masjid al-Haram area to central Riyadh." },
          { q: "Is the car from Makkah to Riyadh only for our family?", a: "Yes. The vehicle is reserved for your party only; RideSaudi does not sell shared seats." },
          { q: "Can we break the journey from Makkah to Riyadh overnight?", a: "You can ask for an overnight stop. Say where you would like to stay, and whether it can be arranged is confirmed in the quotation." },
          { q: "How much does a private car from Makkah to Riyadh cost?", a: "No fixed fare is published. The quotation depends on the date, the vehicle type, the stops and the number of passengers, and you see it before you confirm." },
          { q: "Can you take us from Makkah to Madinah first and then to Riyadh?", a: "You can request a multi-leg plan. Describe the order and dates, and availability and terms are confirmed in the quotation." },
        ],
      },
      ar: {
        nav: "مكة إلى الرياض",
        title: "توصيل من مكة إلى الرياض بسيارة خاصة بعد العمرة",
        description: "سيارة خاصة مع سائق من فندقك في مكة المكرمة إلى بيتك في الرياض، نحو 871 كم عبر الطريق 40 في قرابة تسع ساعات من القيادة. السيارة لك ولمرافقيك فقط.",
        h1: "من مكة المكرمة إلى الرياض بسيارة خاصة، طريق العودة بعد العمرة",
        eyebrow: "بين المدن · مكة ← الرياض",
        answer: "التوصيل الخاص من مكة المكرمة إلى الرياض هو سيارة بسائق وبحجز مسبق من فندقك في مكة إلى بيتك أو عنوانك في الرياض، وغالبًا في نهاية رحلة العمرة. يبلغ الطريق نحو 871 كم عبر الطريق 40، أي قرابة تسع ساعات من القيادة قبل التوقفات. السيارة مخصصة لك ولمرافقيك فقط، وتُسعِّر RideSaudi كل رحلة على حدة.",
        summary: "سيارة خاصة من فندق في مكة إلى البيت في الرياض، نحو 871 كم عبر الطريق 40.",
        sections: [
          {
            h: "العودة معًا من الباب إلى الباب",
            p: [
              "بعد العمرة تفضّل عائلات كثيرة من الرياض العودة برًّا في سيارة واحدة بدل التوزع بين الرحلات الجوية والتنقل من المطار وإليه. تستلم السيارة الخاصة مجموعتك كلها من الفندق وتنتهي عند باب بيتك، مع الأمتعة وماء زمزم الذي تحمله معك. ولا يركب معكم أحد غيركم.",
            ],
          },
          {
            h: "يوم كامل على الطريق 40",
            p: [
              "تقيس بيانات المسارات نحو 871 كم من محيط المسجد الحرام إلى وسط الرياض، ويكاد كلها يكون على الطريق 40. وتُظهر خرائط جوجل نحو ثماني ساعات وتسعًا وخمسين دقيقة من القيادة إلى مركز الملك عبدالله المالي في الزحام المعتاد. ومع توقفات الصلاة والطعام والراحة احسب يومًا أطول من الباب إلى الباب.",
              "أخبرنا متى تريد الانطلاق وما التوقفات المهمة لك. الانطلاق المبكر يوصلك إلى الرياض في مساء اليوم نفسه، وإن فضّلت المبيت في الطريق فاذكر ذلك ليدخل في الخطة.",
            ],
          },
          {
            h: "الاستلام في مكة",
            p: [
              "دخول السيارات قرب المسجد الحرام مقيَّد، خصوصًا قرب أوقات الصلاة، ولذلك تُحدَّد نقطة الاستلام مسبقًا وقد تكون أقرب نقطة تبلغها السيارة. اذكر اسم الفندق والوقت الذي تتوقع أن تكون جاهزًا فيه، ومنه أي زيارة أخيرة للحرم تريدها قبل المغادرة.",
            ],
          },
          {
            h: "الراحة في رحلة من تسع ساعات",
            p: [
              "كثيرًا ما يكون المعتمرون متعبين في نهاية الرحلة، وقد يحتاج كبار السن إلى توقفات أكثر. اذكرهم في الطلب، ومعهم الأطفال ومن يحتاج مساحة أكبر، لتناسب السيارة ووتيرة اليوم مجموعتك.",
            ],
            list: [
              "سيدان: لمسافر أو اثنين عائدين بأمتعة خفيفة",
              "جمس يوكن: لعائلة تريد مساحة للراحة في الطريق",
              "هيونداي ستاريا: للعائلات الأكبر ومجموعات الأقارب مع الأمتعة",
            ],
          },
          {
            h: "السيارة أم الطائرة",
            p: [
              "الرحلات الجوية من جدة إلى الرياض أسرع في الجو، لكن أضف إليها الطريق إلى مطار جدة وإنهاء الإجراءات والعودة إلى البيت من مطار الرياض. السيارة أبطأ إجمالًا لكنها بلا تبديل: سيارة واحدة من باب الفندق إلى باب بيتك. وإن كنت مسافرًا في الاتجاه المعاكس من الرياض للعمرة فراجع صفحة الرياض إلى مكة.",
            ],
          },
        ],
        table: {
          h: "حقائق الطريق من مكة إلى الرياض",
          head: ["البيان", "من مكة إلى الرياض"],
          rows: [
            ["مسافة الطريق", "نحو 871 كم من محيط المسجد الحرام إلى وسط الرياض"],
            ["زمن القيادة", "نحو 8 ساعات و59 دقيقة دون توقفات (خرائط جوجل، نوفمبر 2026)"],
            ["الطريق الرئيس", "الطريق 40"],
            ["الاستلام", "فندقك في مكة، في أقرب نقطة يسمح بها دخول السيارات"],
            ["النزول", "بيتك أو أي عنوان في الرياض"],
            ["أنواع السيارات", "سيدان أو جمس يوكن أو هيونداي ستاريا، وتتأكد في عرض السعر"],
            ["المقاعد المشتركة", "لا توجد. سيارة واحدة لك ولمرافقيك فقط"],
            ["السعر", "يُحدَّد لكل رحلة، ولا يُنشر سعر ثابت"],
          ],
        },
        checklist: {
          h: "ما الذي تذكره في طلب التوصيل من مكة إلى الرياض",
          items: [
            "الفندق في مكة وعنوان النزول في الرياض",
            "التاريخ والوقت الذي تتوقع أن تكون جاهزًا فيه",
            "المسافرون، ومنهم الأطفال وكبار السن",
            "كل حقيبة، ومنها ماء زمزم",
            "التوقفات التي تريدها، أو المبيت في الطريق",
            "السيارة المفضلة: سيدان أو جمس يوكن أو هيونداي ستاريا",
          ],
        },
        faqs: [
          { q: "من مكة إلى الرياض بالسيارة كم ساعة؟", a: "نحو ثماني ساعات وتسع وخمسين دقيقة من القيادة في الزحام المعتاد بحسب خرائط جوجل، قبل توقفات الصلاة والطعام والراحة." },
          { q: "كم تبعد مكة عن الرياض بالطريق؟", a: "نحو 871 كم عبر الطريق 40 من محيط المسجد الحرام إلى وسط الرياض." },
          { q: "هل السيارة من مكة إلى الرياض لعائلتنا فقط؟", a: "نعم. السيارة مخصصة لك ولمرافقيك فقط؛ لا تبيع RideSaudi مقاعد مشتركة." },
          { q: "هل يمكن المبيت في الطريق من مكة إلى الرياض؟", a: "يمكنك طلب توقف للمبيت. اذكر أين تودّ الإقامة، ويتأكد إمكان ترتيبه في عرض السعر." },
          { q: "كم تكلفة السيارة الخاصة من مكة إلى الرياض؟", a: "لا يُنشر سعر ثابت. يعتمد عرض السعر على التاريخ ونوع السيارة والتوقفات وعدد الركاب، ويصلك قبل أن تؤكد." },
          { q: "هل يمكن الذهاب من مكة إلى المدينة أولًا ثم إلى الرياض؟", a: "يمكنك طلب خطة من عدة مراحل. صِف الترتيب والتواريخ، وتتأكد الإتاحة والشروط في عرض السعر." },
        ],
      },
    },
  },

  {
    path: `${I}/taif-to-jeddah`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [
      `${I}/jeddah-to-taif`,
      `${I}/taif-to-makkah`,
      `${I}/makkah-to-jeddah`,
      "services/airport-transfers/jeddah-airport",
      "services/airport-transfers/taif-airport",
      "services/tourism-transport/taif",
      "services/city-transport/jeddah",
      I,
    ],
    updated: U,
    copy: {
      en: {
        nav: "Taif to Jeddah",
        title: "Taif to Jeddah Private Car and Airport Transfer",
        description: "Private car with a driver from Taif down to Jeddah or Jeddah airport: about 171 km, around two hours. One vehicle for your party only. Request a quote.",
        h1: "Taif to Jeddah by private car, down from the mountains to the coast",
        eyebrow: "Intercity · Taif → Jeddah",
        answer: "A private Taif to Jeddah transfer is a pre-booked car with a driver from a hotel, villa or home in Taif down to an address in Jeddah or King Abdulaziz International Airport. It is about 171 km and around two hours of driving before stops. The vehicle is reserved for your party only, and RideSaudi quotes each journey individually.",
        summary: "Private car from Taif to Jeddah or Jeddah airport, about 171 km and around two hours.",
        sections: [
          {
            h: "Heading back to the coast",
            p: [
              "Families who spend the summer in Taif, visitors at the end of a mountain break and travellers catching a flight from Jeddah all make this drive. One vehicle and one driver take your party only, with your luggage, from your door in Taif to your address or the terminal in Jeddah.",
            ],
          },
          {
            h: "The road down and the time it takes",
            p: [
              "Routing data measures about 171 km from central Taif to central Jeddah. Google Maps shows about 2 hours 1 minute to Al Balad and about 2 hours 4 minutes to King Abdulaziz International Airport in normal traffic. The first part of the journey is the descent from the Sarawat mountains, with bends; tell us if anyone in the group is prone to motion sickness so a stop can be planned.",
              "The usual road passes through the Makkah area, which only Muslims may enter. If anyone in your party is not Muslim, say so in the enquiry: the journey is then planned on roads that do not enter Makkah, and the distance and time are confirmed in your quotation.",
            ],
          },
          {
            h: "Catching a flight from Jeddah",
            p: [
              "Give the flight number and departure time, and the pickup in Taif is proposed from it, with the drive, a stop if you want one and a margin for traffic around Jeddah. Families leaving after a summer stay often travel with a lot of luggage; list every bag so the right vehicle is sent.",
            ],
          },
          {
            h: "Which vehicle to request",
            p: ["State the number of passengers and bags. The quotation confirms the vehicle and its availability."],
            list: [
              "Sedan: a couple or a few passengers",
              "GMC Yukon: a family with summer luggage",
              "Hyundai Staria: larger families and groups travelling together",
            ],
          },
          {
            h: "Other directions from Taif",
            p: [
              "Going up to Taif instead? See Jeddah to Taif, which also covers day trips. Travelling from Taif to Makkah for Umrah? See Taif to Makkah, which covers the Miqat stop on each road.",
            ],
          },
        ],
        table: {
          h: "Taif to Jeddah route facts",
          head: ["Detail", "Taif to Jeddah"],
          rows: [
            ["Road distance", "About 171 km, central Taif to central Jeddah"],
            ["Driving time to central Jeddah", "About 2 h 01 min without stops (Google Maps, checked November 2026)"],
            ["Driving time to Jeddah airport", "About 2 h 04 min without stops (Google Maps)"],
            ["Road", "Mountain descent, then the highway to the coast"],
            ["Pickup", "Hotel, villa or home in Taif"],
            ["Drop-off", "Any address in Jeddah or King Abdulaziz International Airport"],
            ["Vehicle types", "Sedan, GMC Yukon or Hyundai Staria, confirmed in your quotation"],
            ["Shared seats", "None. One vehicle for your party only"],
          ],
        },
        checklist: {
          h: "Include this in your Taif to Jeddah enquiry",
          items: [
            "Pickup address in Taif",
            "Jeddah address, or flight number and departure time",
            "Date and preferred time",
            "Number of passengers and every bag",
            "Whether everyone in the party is Muslim",
            "Preferred vehicle: sedan, GMC Yukon or Hyundai Staria",
          ],
        },
        faqs: [
          { q: "How long is the drive from Taif to Jeddah?", a: "About 2 hours 1 minute to central Jeddah and about 2 hours 4 minutes to Jeddah airport in normal traffic, according to Google Maps." },
          { q: "How far is Taif from Jeddah by road?", a: "About 171 km from central Taif to central Jeddah by the usual road." },
          { q: "Can you take me from Taif straight to Jeddah airport?", a: "Yes. Give the flight number and departure time, and the pickup in Taif is planned around it." },
          { q: "Is the car from Taif to Jeddah shared?", a: "No. The vehicle is reserved for your party only." },
          { q: "Can passengers who are not Muslim travel from Taif to Jeddah?", a: "Yes. Tell us in the enquiry, and the journey is planned on roads that do not enter the Makkah area." },
          { q: "How much is a private car from Taif to Jeddah?", a: "No fixed fare is published. The quotation depends on the date, the vehicle type and the number of passengers, and you see it before you confirm." },
        ],
      },
      ar: {
        nav: "الطائف إلى جدة",
        title: "توصيل من الطائف إلى جدة ومطار جدة بسيارة خاصة",
        description: "سيارة خاصة مع سائق من الطائف نزولًا إلى جدة أو مطار جدة، نحو 171 كم في قرابة ساعتين. السيارة لك ولمرافقيك فقط. اطلب عرض سعر.",
        h1: "من الطائف إلى جدة بسيارة خاصة، من الجبال إلى الساحل",
        eyebrow: "بين المدن · الطائف ← جدة",
        answer: "التوصيل الخاص من الطائف إلى جدة هو سيارة بسائق وبحجز مسبق من فندق أو فيلا أو منزل في الطائف نزولًا إلى عنوان في جدة أو إلى مطار الملك عبدالعزيز الدولي. تبلغ المسافة نحو 171 كم، أي قرابة ساعتين من القيادة قبل التوقفات. السيارة مخصصة لك ولمرافقيك فقط، وتُسعِّر RideSaudi كل رحلة على حدة.",
        summary: "سيارة خاصة من الطائف إلى جدة أو مطار جدة، نحو 171 كم في قرابة ساعتين.",
        sections: [
          {
            h: "العودة إلى الساحل",
            p: [
              "تقطع هذا الطريق العائلات التي تقضي الصيف في الطائف، والزوار في نهاية إجازة جبلية، والمسافرون الذين يلحقون برحلة من جدة. تنقلك أنت ومرافقيك فقط سيارة واحدة بسائق واحد مع أمتعتكم، من بابك في الطائف إلى عنوانك أو صالة المطار في جدة.",
            ],
          },
          {
            h: "طريق النزول والوقت الذي يستغرقه",
            p: [
              "تقيس بيانات المسارات نحو 171 كم من وسط الطائف إلى وسط جدة. وتُظهر خرائط جوجل نحو ساعتين ودقيقة إلى البلد، ونحو ساعتين وأربع دقائق إلى مطار الملك عبدالعزيز الدولي في الزحام المعتاد. والجزء الأول من الرحلة نزول من جبال السروات بمنعطفات، فأخبرنا إن كان في المجموعة من يعاني دوار الحركة ليُخطَّط توقف.",
              "يمر الطريق المعتاد بمنطقة مكة المكرمة التي لا يدخلها إلا المسلمون. فإن كان بين مرافقيك غير مسلم فاذكر ذلك في الطلب، لتُخطَّط الرحلة على طرق لا تدخل مكة، وتتأكد المسافة والوقت في عرض السعر.",
            ],
          },
          {
            h: "اللحاق برحلة من جدة",
            p: [
              "اذكر رقم الرحلة وموعد الإقلاع، فيُقترح موعد الاستلام في الطائف بناءً عليه، مع الطريق وتوقف إن أردته وهامش لزحام جدة. والعائلات المغادرة بعد إقامة صيفية كثيرًا ما تحمل أمتعة كثيرة، فاذكر كل حقيبة لتُرسَل السيارة المناسبة.",
            ],
          },
          {
            h: "أي سيارة تطلب",
            p: ["اذكر عدد الركاب والحقائب، ويؤكد عرض السعر السيارة وإتاحتها."],
            list: [
              "سيدان: لشخصين أو عدد قليل من الركاب",
              "جمس يوكن: لعائلة بأمتعة الصيف",
              "هيونداي ستاريا: للعائلات الأكبر والمجموعات المسافرة معًا",
            ],
          },
          {
            h: "اتجاهات أخرى من الطائف",
            p: [
              "هل أنت صاعد إلى الطائف؟ راجع صفحة جدة إلى الطائف، وهي تشمل رحلات اليوم الواحد. وإن كنت متجهًا من الطائف إلى مكة للعمرة فراجع صفحة الطائف إلى مكة، وفيها توقف الميقات على كل طريق.",
            ],
          },
        ],
        table: {
          h: "حقائق الطريق من الطائف إلى جدة",
          head: ["البيان", "من الطائف إلى جدة"],
          rows: [
            ["مسافة الطريق", "نحو 171 كم من وسط الطائف إلى وسط جدة"],
            ["زمن القيادة إلى وسط جدة", "نحو ساعتين ودقيقة دون توقفات (خرائط جوجل، نوفمبر 2026)"],
            ["زمن القيادة إلى مطار جدة", "نحو ساعتين و4 دقائق دون توقفات (خرائط جوجل)"],
            ["الطريق", "نزول جبلي ثم الطريق السريع إلى الساحل"],
            ["الاستلام", "فندق أو فيلا أو منزل في الطائف"],
            ["النزول", "أي عنوان في جدة أو مطار الملك عبدالعزيز الدولي"],
            ["أنواع السيارات", "سيدان أو جمس يوكن أو هيونداي ستاريا، وتتأكد في عرض السعر"],
            ["المقاعد المشتركة", "لا توجد. سيارة واحدة لك ولمرافقيك فقط"],
          ],
        },
        checklist: {
          h: "ما الذي تذكره في طلب التوصيل من الطائف إلى جدة",
          items: [
            "عنوان الاستلام في الطائف",
            "العنوان في جدة، أو رقم الرحلة وموعد الإقلاع",
            "التاريخ والوقت المفضل",
            "عدد الركاب وكل حقيبة",
            "هل جميع المرافقين مسلمون",
            "السيارة المفضلة: سيدان أو جمس يوكن أو هيونداي ستاريا",
          ],
        },
        faqs: [
          { q: "كم يستغرق الطريق من الطائف إلى جدة؟", a: "نحو ساعتين ودقيقة إلى وسط جدة، ونحو ساعتين وأربع دقائق إلى مطار جدة في الزحام المعتاد بحسب خرائط جوجل." },
          { q: "كم تبعد الطائف عن جدة بالطريق؟", a: "نحو 171 كم من وسط الطائف إلى وسط جدة عبر الطريق المعتاد." },
          { q: "هل توصلونني من الطائف إلى مطار جدة مباشرة؟", a: "نعم. اذكر رقم الرحلة وموعد الإقلاع، ويُخطَّط الاستلام في الطائف بحسبهما." },
          { q: "هل السيارة من الطائف إلى جدة مشتركة؟", a: "لا. السيارة مخصصة لك ولمرافقيك فقط." },
          { q: "هل يستطيع غير المسلمين السفر من الطائف إلى جدة؟", a: "نعم. أخبرنا في الطلب، فتُخطَّط الرحلة على طرق لا تدخل منطقة مكة المكرمة." },
          { q: "كم سعر السيارة الخاصة من الطائف إلى جدة؟", a: "لا يُنشر سعر ثابت. يعتمد عرض السعر على التاريخ ونوع السيارة وعدد الركاب، ويصلك قبل أن تؤكد." },
        ],
      },
    },
  },
];
