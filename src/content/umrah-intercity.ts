import type { ServicePage } from "./types";

const UPDATED = "2026-11-06";

export const umrahIntercityPages: ServicePage[] = [
  {
    path: "services/umrah-transport",
    parent: "services",
    variant: "umrah",
    service: "umrah",
    related: [
      "services/intercity-transfers/makkah-to-madinah",
      "services/airport-transfers/madinah-airport",
      "services/airport-transfers/jeddah-airport",
      "services/event-transportation",
    ],
    updated: "2026-11-23",
    copy: {
      en: {
        nav: "Umrah Transport",
        title: "Private Umrah Taxi & Transport in Saudi Arabia",
        description:
          "Request a pre-booked private taxi for Umrah: airport to Makkah, Makkah to Madinah and back. Families, elderly travellers and groups. Get a quotation.",
        h1: "Private Umrah taxi and transport, planned in advance",
        eyebrow: "Umrah Transport",
        answer:
          "A private Umrah taxi is a pre-booked car with a driver for the journeys that surround Umrah: from the airport to Makkah, between Makkah and Madinah, and back to the airport. RideSaudi arranges private transfers for pilgrims, families and groups. Send your details for a quotation; availability is confirmed before you commit.",
        summary: "Pre-booked private transfers for the journeys around Umrah, for individuals, families and groups.",
        sections: [
          {
            h: "The journeys that make up an Umrah trip",
            p: [
              "Most Umrah itineraries involve the same few legs: the airport (often Jeddah, sometimes Madinah) to your hotel, a move between Makkah and Madinah, and the return to the airport at the end. Each can be requested separately or together, so you can have the whole trip quoted in one enquiry.",
            ],
            list: [
              "Jeddah airport to Makkah (see Jeddah Airport to Makkah)",
              "Madinah airport to your Madinah hotel (see Madinah airport transfer)",
              "Makkah to Madinah, or Madinah to Makkah (see Makkah to Madinah)",
              "The final transfer to the airport for your flight home",
            ],
          },
          {
            h: "Who private transport suits best",
            p: [
              "Private transfers tend to suit families travelling with children, elderly travellers who want fewer changes and less walking with luggage, and groups who want to arrive together. Tell us who is travelling and any needs you have, so the vehicle and plan can be matched. Specific accessibility features are only offered where they can be confirmed, so ask rather than assume.",
            ],
          },
          {
            h: "Plan around timings you do not control",
            p: [
              "Flight arrivals, immigration and hotel check-in times all shift. Share your flight number and ask how a delay is handled. If you plan to enter Ihram at a Miqat on the way between the holy cities, mention it so we can discuss whether a stop can be arranged.",
            ],
          },
          {
            h: "What RideSaudi is, and is not",
            p: [
              "RideSaudi arranges private road transport. It is not affiliated with any religious or government authority and does not issue Umrah visas or permits, or arrange accommodation. Please arrange those through the appropriate official channels. Entry to Makkah is open to Muslims only, so non-Muslim visitors should plan their itinerary accordingly.",
            ],
          },
        ],
        checklist: {
          h: "What to include in your Umrah transport enquiry",
          items: [
            "Each leg you need: airport, Makkah, Madinah, return",
            "Flight numbers and dates",
            "Hotel names in Makkah and Madinah",
            "Number of travellers and pieces of luggage",
            "Any elderly or mobility needs, and any child seats",
            "Whether you are travelling alone, as a family or as a group",
          ],
        },
        faqs: [
          {
            q: "How do I book an Umrah taxi in advance?",
            a: "Send an enquiry listing the legs you need, your flight details and hotel names. RideSaudi replies with a quotation, and your journeys are arranged only after you confirm.",
          },
          {
            q: "Can I book the whole trip in one enquiry?",
            a: "Yes. Airport to Makkah, Makkah to Madinah and the return to the airport can be requested together so they are quoted together.",
          },
          {
            q: "Is a private taxi better than other ways to travel between Makkah and Madinah?",
            a: "It depends on what matters to you. A private car offers door-to-door travel and flexibility for luggage and groups, while other options, such as the Haramain high-speed rail, have their own advantages. Compare them against your plans.",
          },
          {
            q: "Do you provide Umrah visas or hotels?",
            a: "No. RideSaudi arranges private road transport only. Visas, permits and accommodation should be arranged through the appropriate official channels and providers.",
          },
          {
            q: "Can I request transport for a group?",
            a: "Yes. State the number of travellers and luggage. Whether one larger vehicle or several vehicles are needed is confirmed in your quotation.",
          },
        ],
      },
      ar: {
        nav: "نقل المعتمرين",
        title: "تاكسي وتوصيل خاص للمعتمرين في السعودية",
        description:
          "اطلب تاكسي خاصًا للعمرة بحجز مسبق: من المطار إلى مكة المكرمة، ومن مكة إلى المدينة المنورة والعكس. للعائلات وكبار السن والمجموعات. استلم عرض السعر.",
        h1: "تاكسي وتوصيل خاص للعمرة، مخطَّط له مسبقًا",
        eyebrow: "نقل المعتمرين",
        answer:
          "تاكسي العمرة الخاص هو سيارة بسائق بحجز مسبق لرحلات الطريق المحيطة بالعمرة: من المطار إلى مكة المكرمة، وبين مكة والمدينة المنورة، والعودة إلى المطار. تُرتِّب RideSaudi توصيلًا خاصًا للمعتمرين والعائلات والمجموعات. أرسل تفاصيلك لتصلك عرض سعر، وتتأكد الإتاحة قبل أن تلتزم.",
        summary: "توصيل خاص بحجز مسبق لرحلات الطريق المحيطة بالعمرة، للأفراد والعائلات والمجموعات.",
        sections: [
          {
            h: "الرحلات التي تتكون منها رحلة العمرة",
            p: [
              "تتضمن معظم برامج العمرة المراحل نفسها: من المطار (غالبًا جدة وأحيانًا المدينة المنورة) إلى الفندق، ثم الانتقال بين مكة والمدينة، ثم العودة إلى المطار في النهاية. يمكن طلب كل مرحلة على حدة أو معًا، فتُسعَّر الرحلة كاملة في استفسار واحد.",
            ],
            list: [
              "من مطار جدة إلى مكة المكرمة (راجع صفحة من مطار جدة إلى مكة)",
              "من مطار المدينة المنورة إلى فندقك في المدينة (راجع صفحة التوصيل من مطار المدينة)",
              "من مكة إلى المدينة أو من المدينة إلى مكة (راجع صفحة مكة إلى المدينة)",
              "التوصيل الأخير إلى المطار لرحلة العودة",
            ],
          },
          {
            h: "لمن يناسب النقل الخاص أكثر",
            p: [
              "يناسب النقل الخاص غالبًا العائلات التي معها أطفال، وكبار السن الذين يفضلون تقليل التنقل والمشي بالحقائب، والمجموعات التي تريد الوصول معًا. أخبرنا من سيسافر وما احتياجاتهم ليُختار نوع السيارة والخطة المناسبان. ولا تُعرض ميزات الوصول لذوي الإعاقة إلا إذا أمكن تأكيدها، فاسأل ولا تفترض.",
            ],
          },
          {
            h: "خطط لمواعيد لا تتحكم بها",
            p: [
              "تتغير مواعيد وصول الرحلات والجوازات وتسجيل الدخول إلى الفنادق. شاركنا رقم رحلتك واسأل عن آلية التعامل مع التأخير. وإن كنت تنوي الإحرام من الميقات في الطريق بين المدينتين المقدستين فاذكر ذلك لنبحث إمكانية ترتيب توقف.",
            ],
          },
          {
            h: "ما هي RideSaudi وما ليست",
            p: [
              "تُرتِّب RideSaudi النقل البري الخاص. وهي غير تابعة لأي جهة دينية أو حكومية، ولا تُصدر تأشيرات أو تصاريح عمرة، ولا تحجز الإقامة، فيُرجى ترتيب ذلك عبر القنوات الرسمية المختصة. ودخول مكة المكرمة مقصور على المسلمين، فعلى الزوار غير المسلمين تنظيم برنامجهم وفق ذلك.",
            ],
          },
        ],
        checklist: {
          h: "ما الذي تضيفه إلى طلب نقل المعتمرين",
          items: [
            "كل مرحلة تحتاجها: المطار ومكة والمدينة والعودة",
            "أرقام الرحلات والتواريخ",
            "أسماء الفنادق في مكة والمدينة",
            "عدد المسافرين وعدد الحقائب",
            "أي حاجة لكبار السن أو لدعم الحركة، وأي مقاعد أطفال",
            "هل تسافر وحدك أم مع عائلة أم ضمن مجموعة",
          ],
        },
        faqs: [
          {
            q: "كيف أحجز تاكسي عمرة مسبقًا؟",
            a: "أرسل طلبًا يذكر المراحل التي تحتاجها وتفاصيل رحلتك وأسماء الفنادق. ترد عليك RideSaudi بعرض سعر، ولا تُرتَّب رحلاتك إلا بعد تأكيدك.",
          },
          {
            q: "هل يمكنني حجز الرحلة كاملة في طلب واحد؟",
            a: "نعم. يمكن طلب التوصيل من المطار إلى مكة ومن مكة إلى المدينة والعودة إلى المطار معًا ليُسعَّر الجميع معًا.",
          },
          {
            q: "هل السيارة الخاصة أفضل من وسائل أخرى للتنقل بين مكة والمدينة؟",
            a: "يتوقف ذلك على أولوياتك. توفر السيارة الخاصة التنقل من الباب إلى الباب ومرونة للحقائب والمجموعات، بينما لوسائل أخرى مثل قطار الحرمين السريع مزاياها. قارن بينها بحسب خطتك.",
          },
          {
            q: "هل توفرون تأشيرات عمرة أو فنادق؟",
            a: "لا. تقتصر RideSaudi على ترتيب النقل البري الخاص. أما التأشيرات والتصاريح والإقامة فتُرتَّب عبر القنوات الرسمية والجهات المختصة.",
          },
          {
            q: "هل يمكنني طلب نقل لمجموعة؟",
            a: "نعم. اذكر عدد المسافرين والحقائب، وتُؤكَّد الحاجة إلى سيارة أكبر أو عدة سيارات في عرض السعر.",
          },
        ],
      },
    },
  },

  {
    path: "services/umrah-transport/jeddah-airport-to-makkah",
    parent: "services/umrah-transport",
    variant: "umrah",
    service: "umrah",
    related: [
      "services/airport-transfers/jeddah-airport",
      "services/intercity-transfers/makkah-to-madinah",
      "services/umrah-transport",
      "luxury-transportation/luxury-chauffeur",
    ],
    updated: UPDATED,
    copy: {
      en: {
        nav: "Jeddah Airport to Makkah",
        title: "Jeddah Airport to Makkah: Private Transfer",
        description:
          "Pre-book a private car with a driver from Jeddah airport to your hotel in Makkah. For Umrah travellers, families and groups. Request a quotation.",
        h1: "Jeddah airport to Makkah, in one private journey",
        eyebrow: "Umrah Transport · Jeddah to Makkah",
        answer:
          "Most international Umrah travellers land at Jeddah's King Abdulaziz International Airport and continue by road to Makkah, because Makkah has no commercial airport of its own. RideSaudi arranges a pre-booked private transfer for that leg. Send your flight and hotel for a quotation; availability is confirmed before you commit.",
        summary: "A pre-booked private transfer for the road leg from Jeddah's airport to Makkah.",
        sections: [
          {
            h: "Why the airport and the hotel need to be planned together",
            p: [
              "You land in one city and sleep in another, so the journey has two parts you cannot fully control: how long you spend at the airport, and where you can be dropped in Makkah. Give us your flight number and the name of your Makkah hotel so the pickup and drop-off are planned as one journey rather than guessed.",
            ],
          },
          {
            h: "Arriving tired, with luggage and family",
            p: [
              "After a long flight, the practical questions are simple: how many people, how many bags, and does anyone need extra help. State all three. For elderly travellers, ask what can be arranged; accessibility features are only offered where they can be confirmed. Child seats can be requested and their availability is confirmed in your quotation.",
            ],
          },
          {
            h: "Drop-off near the Haram",
            p: [
              "Vehicle access close to the Haram is restricted at busy times, so the exact drop-off may be a short distance from your hotel. Ask your hotel for its recommended drop-off point, and tell us in your enquiry so your driver can be briefed. This is the detail people most often forget to ask.",
            ],
          },
          {
            h: "Combine it with the rest of your trip",
            p: [
              "If you are also travelling on to Madinah, or want a transfer back to Jeddah for your flight home, include them in the same enquiry. They are quoted together. See Makkah to Madinah for that route, or the Umrah transport overview for the whole trip.",
            ],
          },
          {
            h: "Before you travel",
            p: [
              "RideSaudi provides private road transport only. It does not issue Umrah visas or permits or arrange accommodation, and it is not affiliated with any religious or government authority. Arrange those through the appropriate official channels. Entry to Makkah is for Muslims only.",
            ],
          },
        ],
        checklist: {
          h: "Include this in your Jeddah to Makkah enquiry",
          items: [
            "Airline, flight number, arrival date and time",
            "Makkah hotel name and your hotel's advice on the drop-off point",
            "Number of travellers and pieces of luggage",
            "Elderly or mobility needs, and any child seats",
            "Any return transfer to Jeddah airport and its date",
          ],
        },
        faqs: [
          {
            q: "Is there a way to go from Jeddah airport to Makkah by private car?",
            a: "Yes. RideSaudi arranges pre-booked private transfers for this journey. Send your flight, hotel and passenger details and you will receive a quotation.",
          },
          {
            q: "Do I need to book before I land?",
            a: "Booking in advance is how RideSaudi works. Send your enquiry before you travel so the pickup can be planned around your flight.",
          },
          {
            q: "Will the car take me to my hotel door in Makkah?",
            a: "Not always. Vehicle access close to the Haram can be restricted at busy times. Ask your hotel for its recommended drop-off point and include it in your enquiry.",
          },
          {
            q: "Can I book the return transfer from Makkah to Jeddah airport as well?",
            a: "Yes. Include the return date and flight in the same enquiry and both journeys can be quoted together.",
          },
          {
            q: "Can non-Muslim visitors use this route?",
            a: "Entry to Makkah is permitted for Muslims only. Non-Muslim visitors to Jeddah can request an ordinary Jeddah transfer instead.",
          },
        ],
      },
      ar: {
        nav: "من مطار جدة إلى مكة",
        title: "من مطار جدة إلى مكة المكرمة: توصيل خاص",
        description:
          "احجز مسبقًا سيارة خاصة بسائق من مطار جدة إلى فندقك في مكة المكرمة. للمعتمرين والعائلات والمجموعات. اطلب عرض السعر.",
        h1: "من مطار جدة إلى مكة المكرمة في رحلة خاصة واحدة",
        eyebrow: "نقل المعتمرين · جدة إلى مكة",
        answer:
          "يهبط أغلب المعتمرين القادمين من الخارج في مطار الملك عبدالعزيز الدولي بجدة ثم يتابعون برًّا إلى مكة المكرمة، إذ لا يوجد في مكة مطار تجاري. تُرتِّب RideSaudi توصيلًا خاصًا بحجز مسبق لهذه المرحلة. أرسل رحلتك وفندقك لتصلك عرض سعر، وتتأكد الإتاحة قبل أن تلتزم.",
        summary: "توصيل خاص بحجز مسبق لمرحلة الطريق من مطار جدة إلى مكة المكرمة.",
        sections: [
          {
            h: "لماذا يُخطَّط للمطار والفندق معًا",
            p: [
              "تهبط في مدينة وتبيت في أخرى، فللرحلة جزءان لا تتحكم بهما بالكامل: المدة التي تقضيها في المطار، ونقطة النزول المتاحة في مكة. أعطنا رقم رحلتك واسم فندقك في مكة ليُخطَّط للاستقبال والنزول كرحلة واحدة بدل التخمين.",
            ],
          },
          {
            h: "الوصول متعبًا ومعك الحقائب والعائلة",
            p: [
              "بعد رحلة طويلة تبقى الأسئلة العملية بسيطة: كم شخصًا؟ كم حقيبة؟ وهل يحتاج أحد إلى مساعدة إضافية؟ اذكر الثلاثة. وبالنسبة لكبار السن اسأل عما يمكن ترتيبه، فميزات الوصول لا تُعرض إلا إذا أمكن تأكيدها. ويمكن طلب مقاعد الأطفال وتُؤكَّد إتاحتها في عرض السعر.",
            ],
          },
          {
            h: "النزول قرب الحرم",
            p: [
              "يكون وصول السيارات القريب من الحرم مقيدًا في أوقات الازدحام، فقد تبعد نقطة النزول مسافة قصيرة عن فندقك. اسأل فندقك عن نقطة النزول الموصى بها وأخبرنا بها في طلبك ليُبلَّغ السائق. وهذه من أكثر التفاصيل التي يُنسى السؤال عنها.",
            ],
          },
          {
            h: "اجمعها مع بقية رحلتك",
            p: [
              "إن كنت ستتابع إلى المدينة المنورة أو تريد توصيلًا من مكة إلى جدة لرحلة العودة فأضف ذلك في الطلب نفسه ليُسعَّر معًا. راجع صفحة مكة إلى المدينة لهذا المسار، أو صفحة نقل المعتمرين للرحلة كاملة.",
            ],
          },
          {
            h: "قبل أن تسافر",
            p: [
              "تقتصر RideSaudi على النقل البري الخاص، فهي لا تُصدر تأشيرات أو تصاريح عمرة ولا تحجز الإقامة، وليست تابعة لأي جهة دينية أو حكومية. رتب ذلك عبر القنوات الرسمية المختصة. ودخول مكة المكرمة مقصور على المسلمين.",
            ],
          },
        ],
        checklist: {
          h: "ما الذي تضيفه إلى طلب جدة إلى مكة",
          items: [
            "شركة الطيران ورقم الرحلة وتاريخ الوصول وموعده",
            "اسم فندقك في مكة ونصيحة الفندق بشأن نقطة النزول",
            "عدد المسافرين وعدد الحقائب",
            "احتياجات كبار السن أو دعم الحركة، وأي مقاعد أطفال",
            "أي توصيل للعودة إلى مطار جدة وتاريخه",
          ],
        },
        faqs: [
          {
            q: "هل يمكنني الانتقال من مطار جدة إلى مكة بسيارة خاصة؟",
            a: "نعم. تُرتِّب RideSaudi توصيلًا خاصًا بحجز مسبق لهذه الرحلة. أرسل رحلتك وفندقك وعدد الركاب فيصلك عرض سعر.",
          },
          {
            q: "هل أحتاج إلى الحجز قبل أن أهبط؟",
            a: "الحجز المسبق هو أسلوب عمل RideSaudi. أرسل طلبك قبل السفر ليُخطَّط الاستقبال وفق موعد رحلتك.",
          },
          {
            q: "هل ستوصلني السيارة إلى باب فندقي في مكة؟",
            a: "ليس دائمًا. فقد يكون وصول السيارات قرب الحرم مقيدًا في أوقات الازدحام. اسأل فندقك عن نقطة النزول الموصى بها وأضفها إلى طلبك.",
          },
          {
            q: "هل يمكنني حجز التوصيل في طريق العودة من مكة إلى مطار جدة أيضًا؟",
            a: "نعم. أضف تاريخ العودة ورحلتها في الطلب نفسه ليُسعَّر الاتجاهان معًا.",
          },
          {
            q: "هل يمكن لغير المسلمين استخدام هذا المسار؟",
            a: "دخول مكة المكرمة مقصور على المسلمين. ويمكن للزوار غير المسلمين الوافدين إلى جدة طلب توصيل عادي داخل جدة.",
          },
        ],
      },
    },
  },

  {
    path: "services/intercity-transfers",
    parent: "services",
    variant: "default",
    service: "intercity",
    related: [
      "services/airport-transfers",
      "services/umrah-transport",
      "services/chauffeur-services",
      "luxury-transportation/luxury-chauffeur",
    ],
    updated: UPDATED,
    copy: {
      en: {
        nav: "Intercity Transfers",
        title: "Private Intercity Transfers in Saudi Arabia",
        description:
          "Request a pre-booked private car with a driver between Saudi cities, from Makkah and Madinah to Riyadh and the Eastern Province. Get a quotation.",
        h1: "Private intercity transfers between Saudi cities",
        eyebrow: "Intercity Transfers",
        answer:
          "An intercity transfer is a pre-booked private car with a driver for a journey from one Saudi city to another, door to door. RideSaudi quotes each route individually. We do not publish a fixed route list or fares: tell us your start point, destination and dates, and we confirm whether the journey can be arranged.",
        summary: "Door-to-door private journeys between cities, quoted route by route.",
        sections: [
          {
            h: "How intercity requests work here",
            p: [
              "Distances in Saudi Arabia are long, and two journeys that look similar on a map can be very different in practice: different departure times, different luggage, different numbers of people. That is why we quote each request on its own rather than publishing a table of fares.",
            ],
          },
          {
            h: "Plan the details that change the quote",
            p: ["These are the things we will ask about, so include them up front:"],
            list: [
              "Exact pickup and drop-off addresses or hotel names",
              "Date and the time you want to leave",
              "Passengers, luggage and any extra stops you expect",
              "One-way or return, and the return date if you want it quoted too",
              "Vehicle preference, and whether a premium vehicle is wanted",
            ],
          },
          {
            h: "Routes people ask about most",
            p: [
              "The Makkah and Madinah route is the one we are asked about most often, so it has its own page. Other routes, such as between Riyadh and Jeddah or the Eastern Province, can be requested through the enquiry form and are confirmed in the quotation.",
            ],
          },
          {
            h: "Is private road transfer the right choice?",
            p: [
              "A private car gives you door-to-door travel and control over timing and luggage. Rail and air are other options on some routes. Compare them against your plans, and if you want a driver to stay with you on a longer trip, see chauffeur services.",
            ],
          },
        ],
        checklist: {
          h: "What to include in your intercity enquiry",
          items: [
            "Start city and exact pickup point",
            "Destination city and exact drop-off point",
            "Date and preferred departure time",
            "Passengers and luggage",
            "One-way or return, with dates",
          ],
        },
        faqs: [
          {
            q: "Which cities can I travel between?",
            a: "We do not publish a fixed list. Tell us your route and dates and we will confirm whether it can be arranged in your quotation.",
          },
          {
            q: "Do you publish fixed intercity fares?",
            a: "No. Each journey is quoted individually, because distance, timing, luggage and passengers all change the arrangement.",
          },
          {
            q: "Can I book a return journey?",
            a: "Yes. State the return date in your enquiry and both directions can be quoted together.",
          },
          {
            q: "Can I stop along the way?",
            a: "Mention the stops you expect in your enquiry. Whether they can be included is confirmed in the quotation.",
          },
        ],
      },
      ar: {
        nav: "التنقل بين المدن",
        title: "رحلات خاصة بين المدن السعودية",
        description:
          "اطلب سيارة خاصة بسائق بحجز مسبق بين المدن السعودية، من مكة والمدينة إلى الرياض والمنطقة الشرقية. استلم عرض السعر.",
        h1: "رحلات خاصة بين المدن السعودية",
        eyebrow: "التنقل بين المدن",
        answer:
          "الرحلة بين المدن هي سيارة خاصة بسائق وبحجز مسبق تنقلك من مدينة سعودية إلى أخرى من الباب إلى الباب. تُسعِّر RideSaudi كل مسار على حدة. ولا ننشر قائمة مسارات أو أسعارًا ثابتة: أخبرنا بنقطة الانطلاق والوجهة والتواريخ، ونؤكد لك إمكانية ترتيب الرحلة.",
        summary: "رحلات خاصة من الباب إلى الباب بين المدن، تُسعَّر لكل مسار على حدة.",
        sections: [
          {
            h: "كيف تُعالَج طلبات الرحلات بين المدن لدينا",
            p: [
              "المسافات في السعودية طويلة، وقد تختلف رحلتان متشابهتان على الخريطة كثيرًا في الواقع: مواعيد انطلاق مختلفة وحقائب مختلفة وأعداد ركاب مختلفة. لذلك نسعّر كل طلب على حدة بدل نشر جدول أسعار.",
            ],
          },
          {
            h: "خطط للتفاصيل التي تغيّر السعر",
            p: ["هذه الأمور سنسأل عنها، فأضفها منذ البداية:"],
            list: [
              "عنوان الانطلاق والوصول بدقة أو أسماء الفنادق",
              "التاريخ والوقت الذي تريد الانطلاق فيه",
              "الركاب والحقائب وأي توقفات إضافية متوقعة",
              "ذهاب فقط أم ذهاب وعودة، مع تاريخ العودة إن أردت تسعيرها",
              "نوع السيارة المفضل، وهل تريد سيارة فاخرة",
            ],
          },
          {
            h: "المسارات الأكثر طلبًا",
            p: [
              "مسار مكة المكرمة والمدينة المنورة هو الأكثر طلبًا، ولذلك خصصنا له صفحة مستقلة. أما المسارات الأخرى، مثل الرياض وجدة أو المنطقة الشرقية، فيمكن طلبها عبر نموذج الاستفسار وتُؤكَّد في عرض السعر.",
            ],
          },
          {
            h: "هل التوصيل البري الخاص هو الخيار المناسب؟",
            p: [
              "توفر السيارة الخاصة التنقل من الباب إلى الباب مع التحكم بالوقت والحقائب. وفي بعض المسارات يتوفر القطار أو الطيران كخيار آخر. قارن بينها بحسب خطتك، وإن أردت سائقًا يبقى معك في رحلة طويلة فراجع صفحة خدمات السائق الخاص.",
            ],
          },
        ],
        checklist: {
          h: "ما الذي تضيفه إلى طلب الرحلة بين المدن",
          items: [
            "مدينة الانطلاق ونقطة الاستلام بدقة",
            "مدينة الوصول ونقطة النزول بدقة",
            "التاريخ ووقت الانطلاق المفضل",
            "عدد الركاب والحقائب",
            "ذهاب فقط أم ذهاب وعودة مع التواريخ",
          ],
        },
        faqs: [
          {
            q: "بين أي المدن يمكنني السفر؟",
            a: "لا ننشر قائمة ثابتة. أخبرنا بمسارك وتواريخك ونؤكد في عرض السعر إمكانية ترتيب الرحلة.",
          },
          {
            q: "هل تنشرون أسعارًا ثابتة للرحلات بين المدن؟",
            a: "لا. تُسعَّر كل رحلة على حدة لأن المسافة والتوقيت والحقائب وعدد الركاب كلها تغيّر الترتيب.",
          },
          {
            q: "هل يمكنني حجز رحلة عودة؟",
            a: "نعم. اذكر تاريخ العودة في طلبك ليُسعَّر الاتجاهان معًا.",
          },
          {
            q: "هل يمكنني التوقف في الطريق؟",
            a: "اذكر التوقفات المتوقعة في طلبك. وتُؤكَّد إمكانية إدراجها في عرض السعر.",
          },
        ],
      },
    },
  },
];
