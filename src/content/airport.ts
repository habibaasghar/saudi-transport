import type { ServicePage } from "./types";

const UPDATED = "2026-11-06";

export const airportPages: ServicePage[] = [
  {
    path: "services/airport-transfers",
    parent: "services",
    variant: "default",
    service: "airport",
    related: ["services/umrah-transport", "services/intercity-transfers", "luxury-transportation", "services/chauffeur-services"],
    updated: UPDATED,
    copy: {
      en: {
        nav: "Airport Transfers",
        title: "Private Airport Transfers in Saudi Arabia",
        description:
          "Request a pre-booked private airport transfer in Saudi Arabia. Jeddah, Riyadh, Madinah and Dammam airports. Share your flight details and receive a quotation.",
        h1: "Private airport transfers across Saudi Arabia",
        eyebrow: "Airport Transfers",
        answer:
          "A private airport transfer is a pre-booked car with a driver that takes you between an airport and your hotel, home or office. With RideSaudi you send your flight details and destination, receive a quotation, and the transfer is arranged only after you confirm it. Availability at each airport is confirmed in your quotation.",
        summary: "Pre-booked arrivals and departures at Saudi airports, arranged around your flight.",
        sections: [
          {
            h: "Arrivals: what to settle before you land",
            p: [
              "The smoothest arrivals are the ones planned before the flight. Send us the airport, your airline and flight number, the date, the address you are heading to and how many people and bags are travelling. Those details are what a pickup is built around.",
              "Flights run late and immigration queues vary, so ask in your enquiry how a delayed arrival is handled. The terms that apply are set out in your quotation and confirmation rather than assumed here.",
            ],
          },
          {
            h: "Departures: working back from the flight",
            p: [
              "For a departure, the pickup time is worked back from your flight: airline check-in guidance, the size of your group and the traffic you expect between your hotel or home and the terminal. Large cities such as Riyadh and Jeddah can be slow at peak hours, so build in margin and agree the time with us when you request the quote.",
            ],
          },
          {
            h: "Airport pages for the airports we are asked about most",
            p: [
              "Jeddah, Riyadh, Madinah and Dammam each have their own page because the journey is different at each: different onward routes, different hotel areas, different things to plan. If your airport is not listed, send an enquiry anyway and we will tell you whether it can be arranged.",
            ],
          },
          {
            h: "Airport transfer, chauffeur or intercity?",
            p: [
              "An airport transfer is a single point-to-point journey. If you need a driver to stay with you for the day, that is a private chauffeur. If the airport is only the start of a longer journey to another city, such as Jeddah airport to Makkah or Madinah, see our intercity and Umrah transport pages. For premium vehicles, see luxury transportation.",
            ],
          },
        ],
        checklist: {
          h: "What to include in your airport transfer enquiry",
          items: [
            "Airport, and the terminal if you know it",
            "Airline, flight number, date and scheduled time",
            "Hotel, home or office address (or the area)",
            "Number of passengers and pieces of luggage",
            "Any child seat or mobility needs, so availability can be confirmed",
            "A vehicle preference, if you have one",
          ],
        },
        faqs: [
          {
            q: "Can I book an airport transfer in advance?",
            a: "Yes. RideSaudi works on pre-booked journeys. Send an enquiry with your flight and destination details and you will receive a quotation. Nothing is confirmed until you accept it.",
          },
          {
            q: "Which Saudi airports can I request?",
            a: "Pages are available for Jeddah, Riyadh, Madinah and Dammam airports. For any other airport, send an enquiry and we will confirm whether the journey can be arranged.",
          },
          {
            q: "Should I include my flight number?",
            a: "Yes. The flight number lets your arrival or departure details be recorded against the booking, and it is the most useful single detail for planning a pickup.",
          },
          {
            q: "Will I be given a fixed price on this page?",
            a: "No. We do not publish fixed fares. Each journey is quoted individually, and you see the quotation before you confirm anything.",
          },
          {
            q: "How do I pay?",
            a: "Payment arrangements are set out in your quotation and confirmation. This website only collects enquiries; it does not take payment.",
          },
        ],
      },
      ar: {
        nav: "التوصيل من المطار وإليه",
        title: "توصيل خاص من وإلى المطارات في السعودية",
        description:
          "اطلب توصيلًا خاصًا بحجز مسبق من وإلى مطارات جدة والرياض والمدينة المنورة والدمام. أرسل تفاصيل رحلتك الجوية واستلم عرض السعر.",
        h1: "خدمة التوصيل الخاص من المطار وإليه في أنحاء السعودية",
        eyebrow: "التوصيل من المطار",
        answer:
          "التوصيل الخاص من المطار هو سيارة بسائق بحجز مسبق تنقلك بين المطار والفندق أو المنزل أو مقر العمل. ترسل إلى RideSaudi تفاصيل رحلتك ووجهتك، فيصلك عرض سعر، ولا يُرتَّب التوصيل إلا بعد تأكيدك. وتتوفر الخدمة في كل مطار بحسب ما يُؤكَّد في عرض السعر.",
        summary: "استقبال وتوديع بحجز مسبق في المطارات السعودية، يُرتَّب وفق موعد رحلتك.",
        sections: [
          {
            h: "عند الوصول: ما الذي تحدده قبل الهبوط",
            p: [
              "أفضل استقبال هو الذي يُخطَّط له قبل السفر. أرسل لنا المطار وشركة الطيران ورقم الرحلة والتاريخ وعنوان وجهتك وعدد الركاب والحقائب، فعلى هذه التفاصيل يُبنى موعد الاستقبال.",
              "قد تتأخر الرحلات وتختلف مدة إجراءات الجوازات، لذلك اسأل في طلبك عن آلية التعامل مع تأخر الوصول. الشروط المعمول بها توضَّح في عرض السعر والتأكيد، ولا نفترضها هنا.",
            ],
          },
          {
            h: "عند المغادرة: نحسب الوقت من موعد الرحلة",
            p: [
              "يُحدَّد وقت الانطلاق للمغادرة بحسب موعد الرحلة وتعليمات إنهاء الإجراءات لدى شركة الطيران وعدد المسافرين والازدحام المتوقع بين الفندق أو المنزل والمطار. قد تشهد مدن كبيرة مثل الرياض وجدة ازدحامًا في أوقات الذروة، فاترك هامشًا كافيًا واتفق معنا على الوقت عند طلب عرض السعر.",
            ],
          },
          {
            h: "صفحات خاصة بالمطارات الأكثر طلبًا",
            p: [
              "لكل من مطار جدة والرياض والمدينة المنورة والدمام صفحة مستقلة لأن الرحلة تختلف في كل منها: طرق المتابعة وأحياء الفنادق وما ينبغي التخطيط له. وإن لم يكن مطارك مذكورًا فأرسل طلبك وسنخبرك إن كان بالإمكان ترتيب الرحلة.",
            ],
          },
          {
            h: "توصيل مطار أم سائق خاص أم رحلة بين المدن؟",
            p: [
              "التوصيل من المطار رحلة واحدة من نقطة إلى أخرى. أما إن احتجت إلى سائق يبقى معك طوال اليوم فهذا سائق خاص. وإن كان المطار بداية رحلة أطول إلى مدينة أخرى مثل جدة إلى مكة المكرمة أو المدينة المنورة، فراجع صفحات التنقل بين المدن ونقل المعتمرين. وللسيارات الفاخرة راجع صفحة النقل الفاخر.",
            ],
          },
        ],
        checklist: {
          h: "ما الذي تضيفه إلى طلب التوصيل من المطار",
          items: [
            "المطار، والصالة إن كنت تعرفها",
            "شركة الطيران ورقم الرحلة والتاريخ والموعد",
            "عنوان الفندق أو المنزل أو مقر العمل (أو الحي)",
            "عدد الركاب وعدد الحقائب",
            "أي حاجة لمقعد أطفال أو لدعم الحركة، ليتم التأكد من توفرها",
            "نوع السيارة المفضل إن وُجد",
          ],
        },
        faqs: [
          {
            q: "هل يمكنني حجز التوصيل من المطار مسبقًا؟",
            a: "نعم. تعمل RideSaudi بنظام الحجز المسبق. أرسل طلبًا بتفاصيل رحلتك ووجهتك فيصلك عرض سعر، ولا يتأكد شيء قبل موافقتك.",
          },
          {
            q: "ما المطارات السعودية التي يمكنني طلبها؟",
            a: "تتوفر صفحات لمطارات جدة والرياض والمدينة المنورة والدمام. وبالنسبة لأي مطار آخر أرسل طلبك وسنؤكد لك إمكانية ترتيب الرحلة.",
          },
          {
            q: "هل أضيف رقم الرحلة؟",
            a: "نعم. رقم الرحلة يتيح تسجيل تفاصيل الوصول أو المغادرة مع الحجز، وهو أهم معلومة لتخطيط الاستقبال.",
          },
          {
            q: "هل توجد أسعار ثابتة في هذه الصفحة؟",
            a: "لا. لا ننشر أسعارًا ثابتة، بل تُسعَّر كل رحلة على حدة، وترى عرض السعر قبل أن تؤكد أي شيء.",
          },
          {
            q: "كيف أدفع؟",
            a: "تُوضَّح ترتيبات الدفع في عرض السعر والتأكيد. هذا الموقع يستقبل الطلبات فقط ولا يقبل الدفع.",
          },
        ],
      },
    },
  },

  {
    path: "services/airport-transfers/jeddah-airport",
    parent: "services/airport-transfers",
    variant: "default",
    service: "airport",
    related: [
      "services/umrah-transport/jeddah-airport-to-makkah",
      "services/intercity-transfers/makkah-to-madinah",
      "luxury-transportation/luxury-chauffeur",
      "services/airport-transfers/madinah-airport",
    ],
    updated: UPDATED,
    copy: {
      en: {
        nav: "Jeddah Airport Transfer",
        title: "Jeddah Airport Transfer: Private Car with Driver",
        description:
          "Pre-book a private transfer from King Abdulaziz International Airport (JED) to Jeddah, Makkah or Madinah. Share your flight and receive a quotation.",
        h1: "Jeddah airport transfer, arranged before you land",
        eyebrow: "Jeddah · King Abdulaziz International Airport",
        answer:
          "King Abdulaziz International Airport (JED) serves Jeddah and is the usual arrival point for travellers continuing to Makkah. RideSaudi arranges pre-booked private transfers from the airport to Jeddah hotels and addresses, or onward to Makkah and Madinah. Send your flight details for a quotation; availability is confirmed before you commit.",
        summary: "Private transfers from Jeddah's airport to the city, Makkah or Madinah.",
        sections: [
          {
            h: "A gateway to more than one journey",
            p: [
              "Many people landing in Jeddah are not staying in Jeddah. Pilgrims and visitors head to Makkah, others continue to Madinah or to the Red Sea coast, and business travellers go to hotels and offices in the city. Tell us the final destination in your enquiry, because a transfer to a Jeddah hotel and a transfer to Makkah are planned differently.",
            ],
          },
          {
            h: "Terminals: tell us your airline",
            p: [
              "Jeddah's airport has more than one terminal, including a dedicated Hajj terminal used during the pilgrimage season. Which terminal you use depends on your airline and the season, so give us your airline and flight number rather than guessing, and we can plan the pickup point with you.",
            ],
          },
          {
            h: "Common destinations from Jeddah airport",
            p: ["Typical requests fall into a few groups. Say which one is yours and add the exact address or hotel name."],
            list: [
              "Jeddah city hotels and apartments, including the Corniche and Al-Balad area",
              "Makkah hotels, for Umrah travellers (see Jeddah Airport to Makkah)",
              "Madinah, as a longer private journey (see Makkah to Madinah for the route between the holy cities)",
              "Offices, venues and events in Jeddah",
            ],
          },
          {
            h: "Families, luggage and late arrivals",
            p: [
              "Long-haul flights often land with several suitcases and tired children. State the number of passengers and bags so the vehicle can be matched, and mention any child seat you need so availability can be confirmed. For late-night arrivals, include the scheduled landing time and ask how a delay is handled.",
            ],
          },
        ],
        checklist: {
          h: "Include this in your Jeddah airport enquiry",
          items: [
            "Airline, flight number and arrival date and time",
            "Final destination: hotel name and city, or full address",
            "Passengers and pieces of luggage",
            "Whether you will continue to Makkah or Madinah afterwards",
            "A return or departure transfer, if you want both quoted together",
          ],
        },
        faqs: [
          {
            q: "How do I book a private transfer from Jeddah airport?",
            a: "Send an enquiry with your flight number, arrival time, destination and passenger numbers. RideSaudi replies with a quotation, and the transfer is arranged once you confirm it.",
          },
          {
            q: "Can the same driver take me from Jeddah airport to Makkah?",
            a: "A direct transfer to Makkah can be requested. Choose the destination in your enquiry and the quotation will reflect the full journey. Availability is confirmed in the quotation.",
          },
          {
            q: "Which terminal should I tell you about?",
            a: "Tell us your airline and flight number. The terminal depends on the airline and the season, and giving the flight details avoids relying on a guess.",
          },
          {
            q: "Can I arrange both my arrival and departure?",
            a: "Yes. Ask for an arrival and a departure transfer in the same enquiry and include both dates, so they can be quoted together.",
          },
        ],
      },
      ar: {
        nav: "التوصيل من مطار جدة",
        title: "التوصيل من مطار جدة بسيارة خاصة مع سائق",
        description:
          "احجز مسبقًا توصيلًا خاصًا من مطار الملك عبدالعزيز الدولي بجدة إلى جدة أو مكة المكرمة أو المدينة المنورة. أرسل رحلتك واستلم عرض السعر.",
        h1: "التوصيل من مطار جدة، مرتَّب قبل أن تهبط",
        eyebrow: "جدة · مطار الملك عبدالعزيز الدولي",
        answer:
          "يخدم مطار الملك عبدالعزيز الدولي مدينة جدة، وهو نقطة الوصول المعتادة للمسافرين المتجهين إلى مكة المكرمة. تُرتِّب RideSaudi توصيلًا خاصًا بحجز مسبق من المطار إلى فنادق جدة وعناوينها، أو إلى مكة المكرمة والمدينة المنورة. أرسل تفاصيل رحلتك لتصلك عرض سعر، وتتأكد الإتاحة قبل أن تلتزم.",
        summary: "توصيل خاص من مطار جدة إلى المدينة أو مكة المكرمة أو المدينة المنورة.",
        sections: [
          {
            h: "مطار واحد وأكثر من وجهة",
            p: [
              "كثير ممن يصلون إلى جدة لا يقيمون فيها. فالمعتمرون والزوار يتجهون إلى مكة المكرمة، وآخرون يواصلون إلى المدينة المنورة أو الساحل، ورجال الأعمال يقصدون فنادق المدينة ومكاتبها. اذكر وجهتك النهائية في طلبك، لأن التوصيل إلى فندق في جدة يُخطَّط له بشكل مختلف عن التوصيل إلى مكة.",
            ],
          },
          {
            h: "الصالات: أخبرنا بشركة الطيران",
            p: [
              "في مطار جدة أكثر من صالة، منها صالة مخصصة للحج تُستخدم في موسمه. وتعتمد الصالة التي ستستخدمها على شركة الطيران والموسم، فأعطنا اسم الشركة ورقم الرحلة بدل التخمين، لنتفق معك على نقطة الاستقبال.",
            ],
          },
          {
            h: "الوجهات الشائعة من مطار جدة",
            p: ["تندرج الطلبات المعتادة في مجموعات قليلة. حدد مجموعتك وأضف العنوان الدقيق أو اسم الفندق."],
            list: [
              "فنادق جدة وشققها، ومنها منطقة الكورنيش والبلد",
              "فنادق مكة المكرمة للمعتمرين (راجع صفحة من مطار جدة إلى مكة)",
              "المدينة المنورة كرحلة خاصة أطول (راجع صفحة مكة إلى المدينة للطريق بين المدينتين المقدستين)",
              "المكاتب والقاعات والفعاليات في جدة",
            ],
          },
          {
            h: "العائلات والحقائب والوصول المتأخر",
            p: [
              "غالبًا ما تهبط الرحلات الطويلة بحقائب كثيرة وأطفال متعبين. اذكر عدد الركاب والحقائب لتُختار السيارة المناسبة، وأخبرنا إن كنت تحتاج مقعد أطفال ليتم التأكد من توفره. وللوصول في ساعة متأخرة أضف موعد الهبوط المقرر واسأل عن آلية التعامل مع التأخير.",
            ],
          },
        ],
        checklist: {
          h: "ما الذي تضيفه إلى طلب التوصيل من مطار جدة",
          items: [
            "شركة الطيران ورقم الرحلة وتاريخ الوصول وموعده",
            "الوجهة النهائية: اسم الفندق والمدينة أو العنوان الكامل",
            "عدد الركاب وعدد الحقائب",
            "هل ستتابع إلى مكة المكرمة أو المدينة المنورة بعد ذلك",
            "توصيل للعودة أو المغادرة إن أردت تسعيرهما معًا",
          ],
        },
        faqs: [
          {
            q: "كيف أحجز توصيلًا خاصًا من مطار جدة؟",
            a: "أرسل طلبًا برقم رحلتك وموعد وصولك ووجهتك وعدد الركاب. ترد عليك RideSaudi بعرض سعر، ويُرتَّب التوصيل بعد تأكيدك.",
          },
          {
            q: "هل يمكن للسائق نفسه نقلي من مطار جدة إلى مكة المكرمة؟",
            a: "يمكنك طلب توصيل مباشر إلى مكة المكرمة. اختر الوجهة في طلبك ليعكس عرض السعر الرحلة كاملة. وتُؤكَّد الإتاحة في عرض السعر.",
          },
          {
            q: "أي صالة أذكر لكم؟",
            a: "أخبرنا بشركة الطيران ورقم الرحلة. فالصالة تتوقف على الشركة والموسم، وتقديم بيانات الرحلة يغني عن الاعتماد على التخمين.",
          },
          {
            q: "هل يمكنني ترتيب الوصول والمغادرة معًا؟",
            a: "نعم. اطلب توصيل وصول وتوصيل مغادرة في الطلب نفسه مع ذكر التاريخين، لنسعّرهما معًا.",
          },
        ],
      },
    },
  },

  {
    path: "services/airport-transfers/riyadh-airport",
    parent: "services/airport-transfers",
    variant: "default",
    service: "airport",
    related: [
      "luxury-transportation/luxury-chauffeur",
      "services/chauffeur-services",
      "services/event-transportation",
      "services/airport-transfers/jeddah-airport",
    ],
    updated: UPDATED,
    copy: {
      en: {
        nav: "Riyadh Airport Transfer",
        title: "Riyadh Airport Transfer: Private Car with Driver",
        description:
          "Request a pre-booked private transfer from King Khalid International Airport (RUH) to hotels, offices and venues in Riyadh. Get a quotation.",
        h1: "Riyadh airport transfer for business and leisure",
        eyebrow: "Riyadh · King Khalid International Airport",
        answer:
          "King Khalid International Airport (RUH) is Riyadh's main international airport, on the north side of a very large, spread-out city. RideSaudi arranges pre-booked private transfers from the airport to hotels, offices and venues across Riyadh. Send your flight and destination for a quotation; availability is confirmed before you commit.",
        summary: "Private transfers between King Khalid International Airport and Riyadh addresses.",
        sections: [
          {
            h: "A large city: the destination matters",
            p: [
              "Riyadh covers a very wide area, and where you are going shapes the journey as much as the airport does. Name the district or hotel clearly, whether that is the business and financial areas, the Olaya corridor, the Diplomatic Quarter or a residential address, so the quotation reflects the real route.",
            ],
          },
          {
            h: "Business travellers and meetings",
            p: [
              "If you land with a meeting the same day, say so. A pickup built around a fixed appointment is planned differently from a relaxed hotel arrival. Delegations and teams arriving on different flights can ask about arranging several pickups; capacity for multiple vehicles is confirmed in the quotation, not assumed.",
              "For a driver who stays with you after the airport run, see private chauffeur services; for premium vehicles, see luxury transportation.",
            ],
          },
          {
            h: "Events and Riyadh Season visitors",
            p: [
              "Riyadh hosts conferences, exhibitions and large entertainment events through the year. If you are arriving for one, include the venue and dates, and see our event transportation page for guest, delegate and multi-vehicle planning.",
            ],
          },
          {
            h: "Departures from Riyadh",
            p: [
              "Allow generous margin on the road to the airport at peak hours and agree your pickup time with us when you request the quote. Include your airline and flight so the timing is worked back from check-in.",
            ],
          },
        ],
        checklist: {
          h: "Include this in your Riyadh airport enquiry",
          items: [
            "Airline, flight number, date and time",
            "Hotel name or full address, including the district",
            "Passengers and pieces of luggage",
            "Any fixed meeting or event time you need to reach",
            "Whether you want a chauffeur for the rest of the day",
          ],
        },
        faqs: [
          {
            q: "How do I arrange a transfer from Riyadh airport?",
            a: "Send an enquiry with your flight number, arrival time, destination and passenger numbers. You will receive a quotation, and nothing is arranged until you confirm.",
          },
          {
            q: "Can I book a driver for my whole day in Riyadh, not just the airport run?",
            a: "Yes, you can ask for a private chauffeur from the airport onward. Mention the hours or the day in your enquiry and see our chauffeur services page for how that differs from a single transfer.",
          },
          {
            q: "Can several colleagues arriving on different flights be collected?",
            a: "You can request it. Send each person's flight and the shared destination. Whether multiple pickups or vehicles can be arranged is confirmed in your quotation.",
          },
          {
            q: "Can I request a premium vehicle from Riyadh airport?",
            a: "You can state a vehicle preference, including a premium one, in your enquiry. Availability is confirmed in the quotation; see our luxury transportation page for how premium requests work.",
          },
        ],
      },
      ar: {
        nav: "التوصيل من مطار الرياض",
        title: "التوصيل من مطار الرياض بسيارة خاصة مع سائق",
        description:
          "اطلب توصيلًا خاصًا بحجز مسبق من مطار الملك خالد الدولي إلى الفنادق والمكاتب والقاعات في الرياض. استلم عرض السعر.",
        h1: "التوصيل من مطار الرياض لرحلات العمل والسياحة",
        eyebrow: "الرياض · مطار الملك خالد الدولي",
        answer:
          "مطار الملك خالد الدولي هو المطار الدولي الرئيس في الرياض، ويقع في شمال مدينة واسعة المساحة. تُرتِّب RideSaudi توصيلًا خاصًا بحجز مسبق من المطار إلى الفنادق والمكاتب والقاعات في أنحاء الرياض. أرسل رحلتك ووجهتك لتصلك عرض سعر، وتتأكد الإتاحة قبل أن تلتزم.",
        summary: "توصيل خاص بين مطار الملك خالد الدولي وعناوين الرياض.",
        sections: [
          {
            h: "مدينة كبيرة: الوجهة تصنع الفرق",
            p: [
              "تمتد الرياض على مساحة واسعة جدًا، ووجهتك تحدد الرحلة بقدر ما يحددها المطار. اذكر الحي أو الفندق بوضوح، سواء كان في منطقة الأعمال والمال أو شارع العليا أو الحي الدبلوماسي أو عنوانًا سكنيًا، ليعكس عرض السعر المسار الفعلي.",
            ],
          },
          {
            h: "رجال الأعمال والاجتماعات",
            p: [
              "إن كنت ستصل ولديك اجتماع في اليوم نفسه فأخبرنا بذلك، فالاستقبال المبني على موعد ثابت يُخطَّط له بشكل مختلف عن وصول هادئ إلى الفندق. وبإمكان الوفود والفرق التي تصل على رحلات مختلفة أن تسأل عن ترتيب أكثر من استقبال، وتُؤكَّد إمكانية توفير عدة سيارات في عرض السعر ولا تُفترض.",
              "وإن أردت سائقًا يبقى معك بعد التوصيل من المطار فراجع صفحة خدمات السائق الخاص، وللسيارات الفاخرة راجع صفحة النقل الفاخر.",
            ],
          },
          {
            h: "الفعاليات وزوار موسم الرياض",
            p: [
              "تستضيف الرياض مؤتمرات ومعارض وفعاليات ترفيهية كبرى على مدار العام. إن كنت قادمًا لحضور فعالية فاذكر المكان والتواريخ، وراجع صفحة نقل الفعاليات لتخطيط نقل الضيوف والمندوبين وتعدد السيارات.",
            ],
          },
          {
            h: "المغادرة من الرياض",
            p: [
              "اترك هامشًا واسعًا للطريق إلى المطار في أوقات الذروة، واتفق معنا على موعد الانطلاق عند طلب عرض السعر. وأضف شركة الطيران ورقم الرحلة ليُحسب الموعد انطلاقًا من وقت إنهاء الإجراءات.",
            ],
          },
        ],
        checklist: {
          h: "ما الذي تضيفه إلى طلب التوصيل من مطار الرياض",
          items: [
            "شركة الطيران ورقم الرحلة والتاريخ والموعد",
            "اسم الفندق أو العنوان الكامل مع الحي",
            "عدد الركاب وعدد الحقائب",
            "أي موعد اجتماع أو فعالية ثابت يجب أن تصل إليه",
            "هل تريد سائقًا خاصًا لبقية اليوم",
          ],
        },
        faqs: [
          {
            q: "كيف أرتب التوصيل من مطار الرياض؟",
            a: "أرسل طلبًا برقم رحلتك وموعد وصولك ووجهتك وعدد الركاب. يصلك عرض سعر، ولا يُرتَّب شيء قبل تأكيدك.",
          },
          {
            q: "هل يمكنني حجز سائق ليوم كامل في الرياض وليس للمطار فقط؟",
            a: "نعم، يمكنك طلب سائق خاص بدءًا من المطار. اذكر الساعات أو اليوم في طلبك، وراجع صفحة خدمات السائق الخاص لمعرفة الفرق بينه وبين التوصيل المفرد.",
          },
          {
            q: "هل يمكن استقبال زملاء يصلون على رحلات مختلفة؟",
            a: "يمكنك طلب ذلك. أرسل رحلة كل شخص والوجهة المشتركة. وتُؤكَّد إمكانية ترتيب أكثر من استقبال أو سيارة في عرض السعر.",
          },
          {
            q: "هل يمكنني طلب سيارة فاخرة من مطار الرياض؟",
            a: "يمكنك ذكر السيارة المفضلة، ومنها الفاخرة، في طلبك. وتُؤكَّد الإتاحة في عرض السعر، وراجع صفحة النقل الفاخر لمعرفة آلية الطلبات الفاخرة.",
          },
        ],
      },
    },
  },

  {
    path: "services/airport-transfers/madinah-airport",
    parent: "services/airport-transfers",
    variant: "default",
    service: "airport",
    related: [
      "services/intercity-transfers/makkah-to-madinah",
      "services/umrah-transport",
      "services/airport-transfers/jeddah-airport",
      "services/chauffeur-services",
    ],
    updated: UPDATED,
    copy: {
      en: {
        nav: "Madinah Airport Transfer",
        title: "Madinah Airport Transfer: Private Car with Driver",
        description:
          "Pre-book a private transfer from Prince Mohammad bin Abdulaziz International Airport (MED) to your hotel in Madinah. Request a quotation.",
        h1: "Madinah airport transfer to your hotel",
        eyebrow: "Madinah · Prince Mohammad bin Abdulaziz International Airport",
        answer:
          "Prince Mohammad bin Abdulaziz International Airport (MED) is the airport for Madinah and for most visitors to Al-Masjid an-Nabawi. RideSaudi arranges pre-booked private transfers between the airport and Madinah hotels, or onward to Makkah. Send your flight and hotel name for a quotation; availability is confirmed before you commit.",
        summary: "Private transfers between Madinah's airport and hotels near the Prophet's Mosque.",
        sections: [
          {
            h: "Most arrivals are heading to the same part of the city",
            p: [
              "The majority of visitors stay in hotels around Al-Masjid an-Nabawi. Give us the hotel name rather than only the district, because the exact drop-off point matters.",
            ],
          },
          {
            h: "Drop-off near the central area",
            p: [
              "Vehicle access close to the Prophet's Mosque can be restricted, particularly at busy times, so your driver may not be able to stop directly at the hotel door and a short walk may be needed. Ask your hotel about the best drop-off point and tell us in your enquiry so it can be planned. This matters most for elderly travellers and families with heavy luggage.",
            ],
          },
          {
            h: "Continuing to Makkah",
            p: [
              "Many travellers pair Madinah with Umrah. If you are going on to Makkah, you can ask for it as part of the same enquiry, or see our Makkah to Madinah page for the route between the two cities. If you plan to enter Ihram on the way, mention it so we can discuss whether a stop can be arranged.",
            ],
          },
          {
            h: "Arriving as a group",
            p: [
              "Groups and extended families should list passengers and luggage honestly. Whether one vehicle or several is needed is confirmed in the quotation. Our group transport options are covered under Umrah transport.",
            ],
          },
        ],
        checklist: {
          h: "Include this in your Madinah airport enquiry",
          items: [
            "Airline, flight number, date and time",
            "Hotel name and any drop-off instructions your hotel has given you",
            "Passengers and pieces of luggage",
            "Any elderly or mobility needs, so we can discuss what is possible",
            "Whether you continue to Makkah, and when",
          ],
        },
        faqs: [
          {
            q: "How do I book a transfer from Madinah airport to my hotel?",
            a: "Send an enquiry with your flight number, arrival time and hotel name. RideSaudi replies with a quotation, and the transfer is arranged only when you confirm.",
          },
          {
            q: "Will the car stop at my hotel entrance?",
            a: "Not always. Vehicle access near the central area can be restricted, especially at busy times. Ask your hotel for the recommended drop-off point and include it in your enquiry.",
          },
          {
            q: "Can I travel from Madinah airport straight to Makkah?",
            a: "You can request it as a private intercity journey. Mention the destination in your enquiry, and the quotation will cover the full route. Availability is confirmed in the quotation.",
          },
          {
            q: "Is this service affiliated with any religious or government body?",
            a: "No. RideSaudi is a private transport arrangement service. It does not issue Umrah permits or visas, so please arrange those through the appropriate official channels.",
          },
        ],
      },
      ar: {
        nav: "التوصيل من مطار المدينة المنورة",
        title: "التوصيل من مطار المدينة المنورة بسيارة خاصة",
        description:
          "احجز مسبقًا توصيلًا خاصًا من مطار الأمير محمد بن عبدالعزيز الدولي إلى فندقك في المدينة المنورة. اطلب عرض سعر.",
        h1: "التوصيل من مطار المدينة المنورة إلى فندقك",
        eyebrow: "المدينة المنورة · مطار الأمير محمد بن عبدالعزيز الدولي",
        answer:
          "مطار الأمير محمد بن عبدالعزيز الدولي هو مطار المدينة المنورة، ويستقبل معظم زوار المسجد النبوي. تُرتِّب RideSaudi توصيلًا خاصًا بحجز مسبق بين المطار وفنادق المدينة، أو إلى مكة المكرمة. أرسل رحلتك واسم فندقك لتصلك عرض سعر، وتتأكد الإتاحة قبل أن تلتزم.",
        summary: "توصيل خاص بين مطار المدينة المنورة والفنادق القريبة من المسجد النبوي.",
        sections: [
          {
            h: "أغلب القادمين يقصدون المنطقة نفسها",
            p: [
              "يقيم معظم الزوار في فنادق محيطة بالمسجد النبوي. أعطنا اسم الفندق وليس الحي فقط، لأن نقطة النزول الدقيقة مهمة.",
            ],
          },
          {
            h: "النزول قرب المنطقة المركزية",
            p: [
              "قد يكون وصول السيارات إلى محيط المسجد النبوي مقيدًا، خاصة في أوقات الازدحام، فقد لا يتمكن السائق من التوقف أمام باب الفندق مباشرة وقد تحتاج إلى مشي قصير. اسأل فندقك عن أنسب نقطة نزول وأخبرنا بها في طلبك لنخطط لها. ويكتسب هذا أهمية خاصة لكبار السن والعائلات ذات الحقائب الثقيلة.",
            ],
          },
          {
            h: "المتابعة إلى مكة المكرمة",
            p: [
              "يجمع كثير من المسافرين بين المدينة المنورة والعمرة. فإن كنت متجهًا بعدها إلى مكة المكرمة فيمكنك طلب ذلك ضمن الاستفسار نفسه، أو مراجعة صفحة مكة إلى المدينة لمعرفة الطريق بين المدينتين. وإن كنت تنوي الإحرام في الطريق فاذكر ذلك لنبحث إمكانية ترتيب توقف.",
            ],
          },
          {
            h: "الوصول ضمن مجموعة",
            p: [
              "على المجموعات والعائلات الممتدة أن تذكر عدد الركاب والحقائب بدقة. وتُؤكَّد الحاجة إلى سيارة واحدة أو أكثر في عرض السعر. وخيارات نقل المجموعات مذكورة ضمن صفحة نقل المعتمرين.",
            ],
          },
        ],
        checklist: {
          h: "ما الذي تضيفه إلى طلب التوصيل من مطار المدينة المنورة",
          items: [
            "شركة الطيران ورقم الرحلة والتاريخ والموعد",
            "اسم الفندق وأي تعليمات نزول أبلغك بها الفندق",
            "عدد الركاب وعدد الحقائب",
            "أي حاجة لكبار السن أو لدعم الحركة لنناقش الممكن",
            "هل ستتابع إلى مكة المكرمة، ومتى",
          ],
        },
        faqs: [
          {
            q: "كيف أحجز التوصيل من مطار المدينة المنورة إلى فندقي؟",
            a: "أرسل طلبًا برقم رحلتك وموعد وصولك واسم فندقك. ترد عليك RideSaudi بعرض سعر، ولا يُرتَّب التوصيل إلا بعد تأكيدك.",
          },
          {
            q: "هل ستتوقف السيارة عند مدخل الفندق؟",
            a: "ليس دائمًا. فقد يكون وصول السيارات قرب المنطقة المركزية مقيدًا خاصة في أوقات الازدحام. اسأل فندقك عن نقطة النزول الموصى بها وأضفها إلى طلبك.",
          },
          {
            q: "هل يمكنني السفر من مطار المدينة المنورة مباشرة إلى مكة المكرمة؟",
            a: "يمكنك طلبها كرحلة خاصة بين المدن. اذكر الوجهة في طلبك ليغطي عرض السعر الرحلة كاملة. وتُؤكَّد الإتاحة في عرض السعر.",
          },
          {
            q: "هل هذه الخدمة تابعة لجهة دينية أو حكومية؟",
            a: "لا. RideSaudi خدمة نقل خاصة، ولا تُصدر تصاريح عمرة ولا تأشيرات، فيُرجى ترتيبها عبر القنوات الرسمية المختصة.",
          },
        ],
      },
    },
  },

  {
    path: "services/airport-transfers/dammam-airport",
    parent: "services/airport-transfers",
    variant: "default",
    service: "airport",
    related: [
      "services/chauffeur-services",
      "services/event-transportation",
      "luxury-transportation/luxury-chauffeur",
      "services/airport-transfers/riyadh-airport",
    ],
    updated: UPDATED,
    copy: {
      en: {
        nav: "Dammam Airport Transfer",
        title: "Dammam Airport Transfer: Private Car with Driver",
        description:
          "Request a pre-booked private transfer from King Fahd International Airport (DMM) to Dammam, Al Khobar, Dhahran or Jubail. Get a quotation.",
        h1: "Dammam airport transfer across the Eastern Province",
        eyebrow: "Dammam · King Fahd International Airport",
        answer:
          "King Fahd International Airport (DMM) serves the Eastern Province, including Dammam, Al Khobar and Dhahran. RideSaudi arranges pre-booked private transfers between the airport and addresses in the region. Send your flight and destination for a quotation; availability and route coverage are confirmed before you commit.",
        summary: "Private transfers between King Fahd International Airport and the Eastern Province.",
        sections: [
          {
            h: "One airport, several cities",
            p: [
              "Dammam, Al Khobar and Dhahran are separate cities that run close together, and the airport sits outside the main urban area. Passengers often assume a single destination, so be specific: the city, the district and the hotel or company address all affect the journey.",
            ],
          },
          {
            h: "Business and industrial travel",
            p: [
              "The Eastern Province is a centre for energy and industry, and many arrivals are travelling for work, sometimes to sites outside the cities. If your destination is a facility or a site rather than a hotel, say so and include any access instructions you have been given. Whether a particular site can be served is confirmed in the quotation.",
            ],
          },
          {
            h: "Longer onward journeys",
            p: [
              "If the airport is the start of a longer trip, for example towards Jubail or to Riyadh, mention it in your enquiry. Intercity journeys are quoted individually; see our intercity transfers page for how those requests work.",
            ],
          },
          {
            h: "Arriving for an event or conference",
            p: [
              "Include the venue and dates if you are arriving for an event, and see event transportation for group and delegate planning.",
            ],
          },
        ],
        checklist: {
          h: "Include this in your Dammam airport enquiry",
          items: [
            "Airline, flight number, date and time",
            "City and district: Dammam, Al Khobar, Dhahran or elsewhere",
            "Hotel name, company or site address, and any access instructions",
            "Passengers and pieces of luggage",
            "Whether you want a return or onward journey quoted too",
          ],
        },
        faqs: [
          {
            q: "Can I book a transfer from Dammam airport to Al Khobar?",
            a: "You can request it. Send your flight and destination details and you will receive a quotation. Route availability is confirmed in the quotation.",
          },
          {
            q: "Is King Fahd International Airport inside Dammam?",
            a: "It serves the Eastern Province and sits outside the main urban area, so give your exact destination rather than only the city name so the journey can be quoted properly.",
          },
          {
            q: "Can I arrange a transfer to a work site or facility?",
            a: "Please describe the location and any access instructions in your enquiry. Whether it can be served is confirmed in your quotation.",
          },
          {
            q: "Can I arrange an airport transfer and a driver for the day?",
            a: "Yes, ask for a private chauffeur from the airport onward and state the hours you need. See our chauffeur services page for how that differs from a single transfer.",
          },
        ],
      },
      ar: {
        nav: "التوصيل من مطار الدمام",
        title: "التوصيل من مطار الدمام بسيارة خاصة مع سائق",
        description:
          "اطلب توصيلًا خاصًا بحجز مسبق من مطار الملك فهد الدولي إلى الدمام أو الخبر أو الظهران أو الجبيل. استلم عرض السعر.",
        h1: "التوصيل من مطار الدمام في أنحاء المنطقة الشرقية",
        eyebrow: "الدمام · مطار الملك فهد الدولي",
        answer:
          "يخدم مطار الملك فهد الدولي المنطقة الشرقية، ومنها الدمام والخبر والظهران. تُرتِّب RideSaudi توصيلًا خاصًا بحجز مسبق بين المطار وعناوين المنطقة. أرسل رحلتك ووجهتك لتصلك عرض سعر، وتتأكد الإتاحة وتغطية المسار قبل أن تلتزم.",
        summary: "توصيل خاص بين مطار الملك فهد الدولي والمنطقة الشرقية.",
        sections: [
          {
            h: "مطار واحد ومدن عدة",
            p: [
              "الدمام والخبر والظهران مدن منفصلة متجاورة، ويقع المطار خارج النطاق العمراني الرئيس. يفترض كثير من المسافرين وجهة واحدة، فكن دقيقًا: المدينة والحي واسم الفندق أو عنوان الشركة كلها تؤثر في الرحلة.",
            ],
          },
          {
            h: "السفر للأعمال والقطاع الصناعي",
            p: [
              "تُعد المنطقة الشرقية مركزًا للطاقة والصناعة، ويسافر كثير من القادمين لأعمال قد تكون في مواقع خارج المدن. إن كانت وجهتك منشأة أو موقعًا وليست فندقًا فاذكر ذلك وأضف أي تعليمات دخول أُبلغت بها. وتُؤكَّد إمكانية خدمة موقع بعينه في عرض السعر.",
            ],
          },
          {
            h: "رحلات أطول بعد المطار",
            p: [
              "إن كان المطار بداية رحلة أطول، مثل التوجه نحو الجبيل أو الرياض، فاذكر ذلك في طلبك. تُسعَّر الرحلات بين المدن كلًّا على حدة، وراجع صفحة التنقل بين المدن لمعرفة آلية هذه الطلبات.",
            ],
          },
          {
            h: "القدوم لفعالية أو مؤتمر",
            p: [
              "أضف المكان والتواريخ إن كنت قادمًا لفعالية، وراجع صفحة نقل الفعاليات لتخطيط نقل المجموعات والمندوبين.",
            ],
          },
        ],
        checklist: {
          h: "ما الذي تضيفه إلى طلب التوصيل من مطار الدمام",
          items: [
            "شركة الطيران ورقم الرحلة والتاريخ والموعد",
            "المدينة والحي: الدمام أو الخبر أو الظهران أو غيرها",
            "اسم الفندق أو عنوان الشركة أو الموقع وأي تعليمات دخول",
            "عدد الركاب وعدد الحقائب",
            "هل تريد تسعير رحلة عودة أو رحلة لاحقة أيضًا",
          ],
        },
        faqs: [
          {
            q: "هل يمكنني حجز توصيل من مطار الدمام إلى الخبر؟",
            a: "يمكنك طلب ذلك. أرسل رحلتك وتفاصيل وجهتك فيصلك عرض سعر. وتُؤكَّد إتاحة المسار في عرض السعر.",
          },
          {
            q: "هل مطار الملك فهد الدولي داخل مدينة الدمام؟",
            a: "هو يخدم المنطقة الشرقية ويقع خارج النطاق العمراني الرئيس، لذا أعطنا وجهتك الدقيقة وليس اسم المدينة فقط ليُسعَّر المشوار بشكل صحيح.",
          },
          {
            q: "هل يمكن ترتيب التوصيل إلى موقع عمل أو منشأة؟",
            a: "صف الموقع وأي تعليمات دخول في طلبك. وتُؤكَّد إمكانية الخدمة في عرض السعر.",
          },
          {
            q: "هل يمكنني ترتيب التوصيل من المطار مع سائق ليوم كامل؟",
            a: "نعم، اطلب سائقًا خاصًا بدءًا من المطار واذكر الساعات التي تحتاجها. وراجع صفحة خدمات السائق الخاص لمعرفة الفرق بينه وبين التوصيل المفرد.",
          },
        ],
      },
    },
  },
];
