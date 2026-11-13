import type { ServicePage } from "./types";

const UPDATED = "2026-11-06";

export const eventLuxuryChauffeurPages: ServicePage[] = [
  /* ───────────────────────── EVENTS ───────────────────────── */
  {
    path: "services/event-transportation",
    parent: "services",
    variant: "event",
    service: "event",
    related: [
      "services/event-transportation/wedding-transport",
      "luxury-transportation",
      "services/airport-transfers",
      "services/chauffeur-services",
    ],
    updated: UPDATED,
    copy: {
      en: {
        nav: "Event Transportation",
        title: "Event Transportation in Saudi Arabia: Guests & Delegates",
        description:
          "Plan pre-booked private transport for weddings, conferences, exhibitions and corporate events in Saudi Arabia. Share your schedule and request a quotation.",
        h1: "Event transportation, planned around your schedule",
        eyebrow: "Event Transportation",
        answer:
          "Event transportation is pre-booked private transport for the people attending an event: guests, delegates, speakers and VIPs, moved between airports, hotels and the venue on a set schedule. RideSaudi quotes each event individually. Share your date, venue, guest numbers and timings; the vehicles and capacity available are confirmed in the quotation.",
        summary: "Pre-booked transport for guests, delegates and VIPs at weddings, conferences and corporate events.",
        sections: [
          {
            h: "What makes event transport different",
            p: [
              "An event is not one journey; it is many journeys that have to line up. Guests arrive at different airports on different flights, hotels sit in different places, and the venue has its own access rules. The value of planning is in how those pieces connect, which is why we ask for the whole schedule rather than a single pickup.",
            ],
          },
          {
            h: "The movements most events need",
            p: ["Describe which of these apply and when. Each can be quoted separately or as a package:"],
            list: [
              "Airport arrivals and departures for guests and delegates",
              "Hotel to venue transfers on event days",
              "Return journeys at the end of the day or evening",
              "Executive, speaker or VIP transport with a dedicated vehicle",
              "Multi-day schedules with repeated pickups",
            ],
          },
          {
            h: "Weddings, conferences and corporate events",
            p: [
              "A wedding revolves around timing and family groups. A conference revolves around delegates and a fixed programme. A corporate event may involve executives and a mix of vehicle types. The planning questions differ, so we ask different things. See wedding transportation, or send your event details and we will take it from there.",
            ],
          },
          {
            h: "Capacity is confirmed, never assumed",
            p: [
              "How many vehicles and which types can be provided for your dates is confirmed in the quotation. We do not promise unlimited capacity or on-demand fleets. Tell us the guest numbers and the dates as early as you can; the earlier the request, the more can be planned.",
            ],
          },
        ],
        checklist: {
          h: "What to include in your event transportation enquiry",
          items: [
            "Event type and city, and the venue name",
            "Event date, and the duration if it runs over several days",
            "Guest or delegate count, and the number of vehicles you expect",
            "Pickup locations: airports, hotels or addresses",
            "The schedule you want: arrival waves, shuttle times, end-of-event return",
            "Vehicle preferences, including any premium or VIP vehicles",
            "A contact for event-day coordination",
          ],
        },
        faqs: [
          {
            q: "How far in advance should I request event transportation?",
            a: "As early as you can. Vehicle availability for your dates is confirmed in the quotation, and earlier requests leave more room to plan.",
          },
          {
            q: "Can you transport a large group to a venue?",
            a: "Send your guest numbers, venue and timings. Whether one larger vehicle or several vehicles can be arranged for your date is confirmed in the quotation.",
          },
          {
            q: "Can you handle airport arrivals for event guests?",
            a: "Yes, you can request airport transfers alongside venue transport. Include each guest's or group's flight details. See our airport transfers pages for how this works.",
          },
          {
            q: "Can I arrange premium vehicles for speakers or VIP guests?",
            a: "You can state a premium or VIP preference. Availability is confirmed in the quotation; see luxury transportation for how those requests work.",
          },
          {
            q: "Is a quotation a confirmed booking?",
            a: "No. An enquiry is not a reservation. Your arrangements are confirmed only after you receive and accept the quotation.",
          },
        ],
      },
      ar: {
        nav: "نقل الفعاليات",
        title: "نقل الفعاليات في السعودية: الضيوف والمندوبون",
        description:
          "خطط لنقل خاص بحجز مسبق لحفلات الزفاف والمؤتمرات والمعارض وفعاليات الشركات في السعودية. شاركنا جدولك واطلب عرض السعر.",
        h1: "نقل الفعاليات، مخطَّط حول جدولكم",
        eyebrow: "نقل الفعاليات",
        answer:
          "نقل الفعاليات هو نقل خاص بحجز مسبق للأشخاص الحاضرين للفعالية: ضيوف ومندوبون ومتحدثون وكبار الشخصيات، يُنقلون بين المطارات والفنادق وموقع الفعالية وفق جدول محدد. تُسعِّر RideSaudi كل فعالية على حدة. شاركنا التاريخ والمكان وعدد الضيوف والتوقيتات، وتُؤكَّد السيارات والسعة المتاحة في عرض السعر.",
        summary: "نقل بحجز مسبق للضيوف والمندوبين وكبار الشخصيات في الأعراس والمؤتمرات وفعاليات الشركات.",
        sections: [
          {
            h: "ما الذي يميز نقل الفعاليات",
            p: [
              "الفعالية ليست رحلة واحدة بل رحلات كثيرة يجب أن تتوافق. فالضيوف يصلون إلى مطارات مختلفة على رحلات مختلفة، والفنادق في أماكن متفرقة، ولموقع الفعالية قواعده في الدخول. وقيمة التخطيط في ربط هذه القطع، ولهذا نطلب الجدول كاملًا وليس مجرد نقطة استلام واحدة.",
            ],
          },
          {
            h: "التنقلات التي تحتاجها أغلب الفعاليات",
            p: ["حدد أيّها ينطبق عليك وموعده. يمكن تسعير كل منها منفصلًا أو ضمن باقة:"],
            list: [
              "الاستقبال والتوديع في المطارات للضيوف والمندوبين",
              "التنقل من الفندق إلى موقع الفعالية في أيام الفعالية",
              "رحلات العودة في نهاية اليوم أو المساء",
              "نقل تنفيذي أو للمتحدثين أو لكبار الشخصيات بسيارة مخصصة",
              "جداول متعددة الأيام بعمليات استلام متكررة",
            ],
          },
          {
            h: "الأعراس والمؤتمرات وفعاليات الشركات",
            p: [
              "يدور العرس حول التوقيت ومجموعات الأسرة، والمؤتمر حول المندوبين وبرنامج ثابت، وقد تشمل فعالية الشركة تنفيذيين وأنواعًا مختلفة من السيارات. تختلف أسئلة التخطيط فنسأل أسئلة مختلفة. راجع صفحة نقل الأعراس، أو أرسل تفاصيل فعاليتك ونتولى الباقي.",
            ],
          },
          {
            h: "السعة تُؤكَّد ولا تُفترض",
            p: [
              "عدد السيارات وأنواعها المتاحة لتواريخكم تُؤكَّد في عرض السعر. ولا نَعِد بسعة غير محدودة أو بأسطول عند الطلب. أخبرنا بأعداد الضيوف والتواريخ في أبكر وقت ممكن، فكلما كان الطلب أبكر اتسع مجال التخطيط.",
            ],
          },
        ],
        checklist: {
          h: "ما الذي تضيفه إلى طلب نقل الفعالية",
          items: [
            "نوع الفعالية ومدينتها واسم المكان",
            "تاريخ الفعالية، ومدتها إن امتدت لعدة أيام",
            "عدد الضيوف أو المندوبين وعدد السيارات المتوقع",
            "نقاط الاستلام: المطارات أو الفنادق أو العناوين",
            "الجدول المطلوب: موجات الوصول وأوقات النقل والعودة بعد انتهاء الفعالية",
            "تفضيلات السيارات، ومنها الفاخرة أو سيارات كبار الشخصيات",
            "جهة اتصال للتنسيق يوم الفعالية",
          ],
        },
        faqs: [
          {
            q: "قبل كم من الوقت أطلب نقل الفعالية؟",
            a: "في أبكر وقت ممكن. تُؤكَّد إتاحة السيارات لتواريخكم في عرض السعر، والطلبات المبكرة تترك مجالًا أوسع للتخطيط.",
          },
          {
            q: "هل يمكنكم نقل مجموعة كبيرة إلى موقع الفعالية؟",
            a: "أرسل أعداد الضيوف والمكان والتوقيتات. وتُؤكَّد في عرض السعر إمكانية ترتيب سيارة أكبر أو عدة سيارات لتاريخكم.",
          },
          {
            q: "هل يمكنكم استقبال ضيوف الفعالية من المطارات؟",
            a: "نعم، يمكنك طلب التوصيل من المطارات إلى جانب النقل إلى الموقع. أضف تفاصيل رحلة كل ضيف أو مجموعة، وراجع صفحات التوصيل من المطار لمعرفة آلية ذلك.",
          },
          {
            q: "هل يمكن ترتيب سيارات فاخرة للمتحدثين أو كبار الضيوف؟",
            a: "يمكنك ذكر تفضيل السيارة الفاخرة أو سيارة كبار الشخصيات. وتُؤكَّد الإتاحة في عرض السعر، وراجع صفحة النقل الفاخر لمعرفة آلية هذه الطلبات.",
          },
          {
            q: "هل عرض السعر حجز مؤكد؟",
            a: "لا. الاستفسار ليس حجزًا. لا تتأكد ترتيباتكم إلا بعد أن تستلموا عرض السعر وتوافقوا عليه.",
          },
        ],
      },
    },
  },

  {
    path: "services/event-transportation/wedding-transport",
    parent: "services/event-transportation",
    variant: "event",
    service: "event",
    related: [
      "services/event-transportation",
      "luxury-transportation/luxury-chauffeur",
      "services/airport-transfers",
      "services/chauffeur-services",
    ],
    updated: UPDATED,
    copy: {
      en: {
        nav: "Wedding Transportation",
        title: "Wedding Transportation in Saudi Arabia: Guests & Family",
        description:
          "Arrange pre-booked private transport for wedding guests, family and the wedding party in Saudi Arabia. Share your venue and timings for a quotation.",
        h1: "Wedding transportation for guests, family and the wedding party",
        eyebrow: "Event Transportation · Weddings",
        answer:
          "Wedding transportation is pre-booked private transport that moves guests, family and the wedding party between airports, hotels and the venue on the day. RideSaudi quotes each wedding individually. Send your date, venue, guest numbers and timings; the vehicles and capacity available for your date are confirmed in the quotation.",
        summary: "Pre-booked private transport for wedding guests, family and the wedding party.",
        sections: [
          {
            h: "The wedding day is a timetable",
            p: [
              "A wedding has fixed moments: the arrival of the family, the start of the celebration, the departure at the end of the night. Transport works best when it is built backwards from those moments. Give us the time the event begins and when it is expected to finish, and tell us where each group is coming from.",
            ],
          },
          {
            h: "Who typically needs transport",
            p: ["Weddings usually involve several groups with different needs. Tell us which apply:"],
            list: [
              "Out-of-town guests arriving at the airport and staying in hotels",
              "Immediate family who travel together",
              "The wedding party, with a vehicle arranged for the occasion",
              "Elderly relatives who need minimal walking and careful timing",
              "Return journeys when the celebration ends",
            ],
          },
          {
            h: "Venue access and the end of the night",
            p: [
              "Venues often have their own entry points and drop-off areas, and the end of the night is when many people want to leave at once. Ask your venue about vehicle access and tell us what you learn. Staggered return pickups are easier to plan in advance than to arrange on the spot.",
            ],
          },
          {
            h: "Decoration, vehicles and special requests",
            p: [
              "If you want a particular type of vehicle for the wedding party, say so, and whether decoration is possible should be raised in your enquiry. Availability of any specific vehicle or additional service is confirmed in the quotation and is never assumed. For premium vehicles, see luxury transportation.",
            ],
          },
        ],
        checklist: {
          h: "Include this in your wedding transportation enquiry",
          items: [
            "Wedding date, city and venue name",
            "Start time and expected finish time",
            "Guest groups: where each comes from and how many people",
            "Whether guests need airport pickups, and their flight details",
            "The wedding-party journey: pickup and drop-off points",
            "Return journeys and times",
            "Vehicle preferences and any special requests",
          ],
        },
        faqs: [
          {
            q: "How do I arrange transport for wedding guests in Saudi Arabia?",
            a: "Send an enquiry with the wedding date, venue, guest numbers and timings. RideSaudi replies with a quotation, and your arrangements are confirmed only after you accept it.",
          },
          {
            q: "Can you transport guests from the airport to hotels and then to the venue?",
            a: "You can request the whole chain: airport pickups, hotel to venue transfers and the return. Include each group's flight details and hotel; capacity is confirmed in the quotation.",
          },
          {
            q: "Can I request a specific vehicle for the wedding party?",
            a: "You can state your preference. Whether a specific vehicle, or any decoration, is available for your date is confirmed in the quotation.",
          },
          {
            q: "Can several vehicles be arranged for a large wedding?",
            a: "Tell us the guest numbers and dates. How many vehicles can be arranged is confirmed in the quotation and depends on your date.",
          },
        ],
      },
      ar: {
        nav: "نقل الأعراس",
        title: "نقل الأعراس في السعودية: الضيوف والعائلة",
        description:
          "رتب نقلًا خاصًا بحجز مسبق لضيوف العرس والعائلة وموكب العروسين في السعودية. أرسل المكان والتوقيتات لتصلك عرض سعر.",
        h1: "نقل الأعراس: للضيوف والعائلة وموكب العروسين",
        eyebrow: "نقل الفعاليات · الأعراس",
        answer:
          "نقل الأعراس هو نقل خاص بحجز مسبق ينقل الضيوف والعائلة وموكب العروسين بين المطارات والفنادق وقاعة المناسبة في يوم العرس. تُسعِّر RideSaudi كل عرس على حدة. أرسل التاريخ والقاعة وعدد الضيوف والتوقيتات، وتُؤكَّد السيارات والسعة المتاحة لتاريخكم في عرض السعر.",
        summary: "نقل خاص بحجز مسبق لضيوف العرس والعائلة وموكب العروسين.",
        sections: [
          {
            h: "يوم العرس جدول زمني",
            p: [
              "للعرس لحظات ثابتة: وصول العائلة وبدء الحفل وانصراف الضيوف في نهاية الليلة. ويكون النقل أفضل حين يُبنى انطلاقًا من هذه اللحظات. أخبرنا بوقت بدء المناسبة ووقت انتهائها المتوقع، وبمكان انطلاق كل مجموعة.",
            ],
          },
          {
            h: "من يحتاج إلى النقل عادة",
            p: ["يضم العرس عادة مجموعات عدة باحتياجات مختلفة. حدد ما ينطبق عليك:"],
            list: [
              "ضيوف من خارج المدينة يصلون إلى المطار ويقيمون في الفنادق",
              "العائلة القريبة التي تسافر معًا",
              "موكب العروسين، بسيارة تُرتَّب للمناسبة",
              "كبار السن من الأقارب ممن يحتاجون مشيًا قليلًا وتوقيتًا دقيقًا",
              "رحلات العودة عند انتهاء الحفل",
            ],
          },
          {
            h: "الدخول إلى القاعة ونهاية الليلة",
            p: [
              "للقاعات غالبًا مداخلها ومواقع نزولها الخاصة، ونهاية الليلة هي الوقت الذي يريد فيه كثيرون المغادرة دفعة واحدة. اسأل القاعة عن وصول السيارات وأخبرنا بما تعرفه. ويسهل التخطيط المسبق لعمليات الاستلام المتدرجة عند العودة أكثر من ترتيبها في اللحظة نفسها.",
            ],
          },
          {
            h: "التزيين والسيارات والطلبات الخاصة",
            p: [
              "إن أردت نوعًا معينًا من السيارات لموكب العروسين فاذكره، وإمكانية التزيين تُطرَح في طلبك. وتُؤكَّد في عرض السعر إتاحة أي سيارة محددة أو خدمة إضافية، ولا تُفترض. وللسيارات الفاخرة راجع صفحة النقل الفاخر.",
            ],
          },
        ],
        checklist: {
          h: "ما الذي تضيفه إلى طلب نقل العرس",
          items: [
            "تاريخ العرس ومدينته واسم القاعة",
            "وقت البدء ووقت الانتهاء المتوقع",
            "مجموعات الضيوف: من أين يأتي كل منها وكم عددها",
            "هل يحتاج الضيوف إلى استقبال من المطار، وتفاصيل رحلاتهم",
            "رحلة موكب العروسين: نقطتا الانطلاق والوصول",
            "رحلات العودة وأوقاتها",
            "تفضيلات السيارات وأي طلبات خاصة",
          ],
        },
        faqs: [
          {
            q: "كيف أرتب نقل ضيوف العرس في السعودية؟",
            a: "أرسل طلبًا بتاريخ العرس والقاعة وعدد الضيوف والتوقيتات. ترد عليك RideSaudi بعرض سعر، ولا تتأكد ترتيباتكم إلا بعد موافقتك عليه.",
          },
          {
            q: "هل يمكنكم نقل الضيوف من المطار إلى الفنادق ثم إلى القاعة؟",
            a: "يمكنك طلب السلسلة كاملة: الاستقبال من المطار والنقل من الفندق إلى القاعة والعودة. أضف رحلات كل مجموعة وفندقها، وتُؤكَّد السعة في عرض السعر.",
          },
          {
            q: "هل يمكنني طلب سيارة محددة لموكب العروسين؟",
            a: "يمكنك ذكر تفضيلك. وتُؤكَّد في عرض السعر إتاحة سيارة بعينها أو أي تزيين لتاريخكم.",
          },
          {
            q: "هل يمكن ترتيب عدة سيارات لعرس كبير؟",
            a: "أخبرنا بعدد الضيوف والتواريخ. وعدد السيارات الممكن ترتيبها يُؤكَّد في عرض السعر ويتوقف على تاريخكم.",
          },
        ],
      },
    },
  },

  /* ───────────────────────── LUXURY ───────────────────────── */
  {
    path: "luxury-transportation",
    variant: "luxury",
    service: "luxury",
    related: [
      "luxury-transportation/luxury-chauffeur",
      "services/airport-transfers",
      "services/event-transportation",
      "services/intercity-transfers",
    ],
    updated: UPDATED,
    copy: {
      en: {
        nav: "Luxury Transportation",
        title: "Luxury Car Transportation in Saudi Arabia with a Chauffeur",
        description:
          "Request luxury chauffeur transportation in Saudi Arabia: executive, VIP and premium vehicle journeys, airport transfers and events. Get a quotation.",
        h1: "Luxury transportation in Saudi Arabia, arranged with care",
        eyebrow: "Luxury Transportation",
        answer:
          "Luxury transportation means a premium vehicle with a professional chauffeur, booked in advance for executive travel, VIP guests, airport arrivals, events and longer journeys. RideSaudi arranges it on request. Tell us the journey and the vehicle you would like; which premium vehicles are available for your date is confirmed in the quotation.",
        summary: "Premium vehicles with a chauffeur for executives, VIP guests, airports, events and intercity travel.",
        sections: [
          {
            h: "What luxury means when it is arranged properly",
            p: [
              "A premium vehicle is only part of it. The rest is preparation: knowing the schedule, the route, the number of passengers and the luggage before you set off, and a calm, considered handover from first message to final drop-off. That is the standard we aim to arrange around, and it starts with how complete your enquiry is.",
            ],
          },
          {
            h: "Where it is most often requested",
            p: ["Premium requests tend to fall into a few situations. Tell us which one yours is:"],
            list: [
              "Executive travel: a chauffeur for meetings, delegations and business visits",
              "VIP guests and occasions that call for discretion and careful planning",
              "Airport arrivals and departures with a premium vehicle",
              "Weddings, conferences and corporate events",
              "Longer journeys between cities in added comfort",
            ],
          },
          {
            h: "Choosing a vehicle",
            p: [
              "State how many passengers and how much luggage you have, and the kind of vehicle you have in mind: a saloon for a small party, an SUV for more space, a larger vehicle for groups. We do not publish a fleet list here. Which premium vehicles can be provided for your date is confirmed in the quotation, and nothing is promised in advance of that.",
            ],
          },
          {
            h: "Luxury, VIP and ordinary taxi: how they differ",
            p: [
              "An ordinary taxi is a ride. Luxury transportation is a pre-planned journey in a premium vehicle with a chauffeur. VIP transportation adds discretion and a higher level of planning around the guest. Many requests combine all three, and you can tell us which matters most when you enquire.",
            ],
          },
        ],
        checklist: {
          h: "What to include in your luxury transportation enquiry",
          items: [
            "Trip type: airport, executive, event, intercity or a day with a chauffeur",
            "Date, pickup point and destination, or the hours required",
            "Number of passengers and luggage",
            "Vehicle category you would like: saloon, SUV, larger vehicle",
            "Any special requirements or discretion needs",
          ],
        },
        faqs: [
          {
            q: "Can I book luxury transportation in Saudi Arabia in advance?",
            a: "Yes. Luxury journeys are pre-booked. Send your enquiry with the journey and your vehicle preference and you will receive a quotation. Nothing is confirmed until you accept it.",
          },
          {
            q: "Which luxury vehicles do you have?",
            a: "We do not publish a fleet list. State the kind of vehicle you want in your enquiry, and the options available for your date are confirmed in the quotation.",
          },
          {
            q: "Can I request a luxury vehicle for an airport transfer?",
            a: "Yes. Choose airport transfer and state your preference for a premium vehicle in the enquiry. See airport transfers for how to prepare your details.",
          },
          {
            q: "Can luxury vehicles be arranged for events or VIP guests?",
            a: "You can request them as part of an event or VIP enquiry. Availability and capacity for your date are confirmed in the quotation. See event transportation for planning details.",
          },
          {
            q: "Do you offer a chauffeur for a full day?",
            a: "You can ask for a chauffeur for a set number of hours or a day. See chauffeur services for how hourly and full-day arrangements differ from a single transfer.",
          },
        ],
      },
      ar: {
        nav: "النقل الفاخر",
        title: "نقل فاخر في السعودية بسيارة وسائق محترف",
        description:
          "اطلب نقلًا فاخرًا بسائق في السعودية: رحلات تنفيذية وكبار الشخصيات وسيارات مميزة وتوصيل المطارات والفعاليات. استلم عرض السعر.",
        h1: "النقل الفاخر في السعودية، مُرتَّب بعناية",
        eyebrow: "النقل الفاخر",
        answer:
          "النقل الفاخر هو سيارة مميزة مع سائق محترف، تُحجز مسبقًا للسفر التنفيذي وضيوف كبار الشخصيات واستقبال المطارات والفعاليات والرحلات الأطول. تُرتِّبه RideSaudi عند الطلب. أخبرنا بالرحلة والسيارة التي تفضلها، وتُؤكَّد السيارات المميزة المتاحة لتاريخك في عرض السعر.",
        summary: "سيارات مميزة مع سائق للتنفيذيين وكبار الشخصيات والمطارات والفعاليات والرحلات بين المدن.",
        sections: [
          {
            h: "ماذا يعني الفخامة حين تُرتَّب بشكل صحيح",
            p: [
              "السيارة المميزة جزء من الصورة فقط. أما الباقي فهو التحضير: معرفة الجدول والمسار وعدد الركاب والحقائب قبل الانطلاق، وتجربة هادئة ومدروسة من أول رسالة إلى آخر نقطة نزول. هذا هو المعيار الذي نرتب وفقه، ويبدأ بمدى اكتمال طلبك.",
            ],
          },
          {
            h: "أين يُطلب النقل الفاخر أكثر",
            p: ["تندرج الطلبات المميزة غالبًا في مواقف قليلة. أخبرنا أيها يخصك:"],
            list: [
              "السفر التنفيذي: سائق للاجتماعات والوفود وزيارات العمل",
              "ضيوف كبار الشخصيات والمناسبات التي تتطلب تكتمًا وتخطيطًا دقيقًا",
              "الاستقبال والتوديع في المطارات بسيارة مميزة",
              "الأعراس والمؤتمرات وفعاليات الشركات",
              "الرحلات الأطول بين المدن براحة أكبر",
            ],
          },
          {
            h: "اختيار السيارة",
            p: [
              "اذكر عدد الركاب وحجم الحقائب ونوع السيارة التي تفكر بها: سيدان لمجموعة صغيرة، أو دفع رباعي لمساحة أكبر، أو مركبة أكبر للمجموعات. لا ننشر هنا قائمة أسطول. وتُؤكَّد في عرض السعر السيارات المميزة التي يمكن توفيرها لتاريخك، ولا نَعِد بشيء قبل ذلك.",
            ],
          },
          {
            h: "الفاخر وكبار الشخصيات والتاكسي العادي: ما الفرق",
            p: [
              "التاكسي العادي مشوار. أما النقل الفاخر فرحلة مخطط لها مسبقًا بسيارة مميزة مع سائق. ونقل كبار الشخصيات يضيف التكتم ومستوى أعلى من التخطيط حول الضيف. وتجمع طلبات كثيرة الثلاثة معًا، ويمكنك إخبارنا بما يهمك أكثر عند الاستفسار.",
            ],
          },
        ],
        checklist: {
          h: "ما الذي تضيفه إلى طلب النقل الفاخر",
          items: [
            "نوع الرحلة: مطار أو تنفيذي أو فعالية أو بين المدن أو يوم مع سائق",
            "التاريخ ونقطة الانطلاق والوجهة، أو الساعات المطلوبة",
            "عدد الركاب والحقائب",
            "فئة السيارة المفضلة: سيدان أو دفع رباعي أو مركبة أكبر",
            "أي متطلبات خاصة أو حاجة إلى التكتم",
          ],
        },
        faqs: [
          {
            q: "هل يمكنني حجز نقل فاخر في السعودية مسبقًا؟",
            a: "نعم. تُحجز الرحلات الفاخرة مسبقًا. أرسل طلبك بالرحلة وتفضيل السيارة فيصلك عرض سعر، ولا يتأكد شيء قبل موافقتك.",
          },
          {
            q: "ما السيارات الفاخرة المتوفرة لديكم؟",
            a: "لا ننشر قائمة أسطول. اذكر نوع السيارة التي تريدها في طلبك، وتُؤكَّد الخيارات المتاحة لتاريخك في عرض السعر.",
          },
          {
            q: "هل يمكنني طلب سيارة فاخرة للتوصيل من المطار؟",
            a: "نعم. اختر التوصيل من المطار واذكر تفضيلك لسيارة مميزة في الطلب. وراجع صفحة التوصيل من المطار لتجهيز تفاصيلك.",
          },
          {
            q: "هل يمكن ترتيب سيارات فاخرة للفعاليات أو كبار الضيوف؟",
            a: "يمكنك طلبها ضمن استفسار فعالية أو كبار شخصيات. وتُؤكَّد الإتاحة والسعة لتاريخك في عرض السعر. وراجع صفحة نقل الفعاليات لتفاصيل التخطيط.",
          },
          {
            q: "هل توفرون سائقًا ليوم كامل؟",
            a: "يمكنك طلب سائق لعدد محدد من الساعات أو ليوم. وراجع صفحة خدمات السائق الخاص لمعرفة الفرق بين الترتيب بالساعة أو لليوم الكامل وبين التوصيل المفرد.",
          },
        ],
      },
    },
  },

  {
    path: "luxury-transportation/luxury-chauffeur",
    parent: "luxury-transportation",
    variant: "luxury",
    service: "luxury",
    related: [
      "luxury-transportation",
      "services/chauffeur-services",
      "services/airport-transfers/riyadh-airport",
      "services/event-transportation",
    ],
    updated: UPDATED,
    copy: {
      en: {
        nav: "Luxury Chauffeur Service",
        title: "Luxury Chauffeur Service in Saudi Arabia",
        description:
          "Book a luxury chauffeur in Saudi Arabia for business, VIP guests or a full day. Premium vehicle with a professional driver. Request a quotation.",
        h1: "A luxury chauffeur for the hours you need",
        eyebrow: "Luxury Transportation · Chauffeur",
        answer:
          "A luxury chauffeur service provides a premium vehicle and a professional driver at your disposal for a set period, rather than a single point-to-point ride. RideSaudi arranges it in advance for business, VIP guests and private travel. State the hours or day and your vehicle preference; availability is confirmed in the quotation.",
        summary: "A premium vehicle and professional driver at your disposal for a set period.",
        sections: [
          {
            h: "At your disposal, not just from A to B",
            p: [
              "The difference between a chauffeur and a transfer is time. A transfer takes you from one place to another. A chauffeur stays with you across a schedule: a morning of meetings, an afternoon of appointments, an evening engagement. Tell us the hours or the day and the stops you expect, and the arrangement is built around them.",
            ],
          },
          {
            h: "Who uses a chauffeur",
            p: [],
            list: [
              "Executives and business travellers with a packed schedule",
              "Visitors who want a driver for a day in an unfamiliar city",
              "Guests and delegations who need discretion and careful planning",
              "Occasions where arriving well matters",
            ],
          },
          {
            h: "Plan the day before it begins",
            p: [
              "The smoother arrangements are those with a clear itinerary: where the day starts, the stops in order, the times that cannot move, and where it ends. Include any waiting time you expect between stops. If your plans may change on the day, say so, because it affects how the arrangement is set up and quoted.",
            ],
          },
          {
            h: "Chauffeur or airport transfer?",
            p: [
              "If you only need to get to or from the airport, an airport transfer is the simpler arrangement. If you want a chauffeur from the airport onward, ask for it in the same enquiry. See chauffeur services for the differences between hourly, full-day and multi-day arrangements.",
            ],
          },
        ],
        checklist: {
          h: "Include this in your luxury chauffeur enquiry",
          items: [
            "Date and start time, with the number of hours or the full day",
            "City and starting point",
            "The stops you expect, in order, and fixed appointment times",
            "Passengers and any luggage",
            "Vehicle preference: saloon, SUV or larger vehicle",
            "Any discretion, language or special requirements",
          ],
        },
        faqs: [
          {
            q: "How do I book a luxury chauffeur in Saudi Arabia?",
            a: "Send an enquiry with the date, hours, city, passenger numbers and vehicle preference. RideSaudi replies with a quotation, and the chauffeur is arranged only after you confirm.",
          },
          {
            q: "What is the difference between a chauffeur and an airport transfer?",
            a: "An airport transfer is a single journey between the airport and a destination. A chauffeur remains available to you for a set period or day, with multiple stops.",
          },
          {
            q: "Can I choose the vehicle?",
            a: "You can state your preference. Which premium vehicles are available for your date is confirmed in the quotation.",
          },
          {
            q: "Can I ask for a chauffeur who speaks a particular language?",
            a: "You can state a language preference in your enquiry. Whether it can be met for your date is confirmed in the quotation; it is not promised in advance.",
          },
        ],
      },
      ar: {
        nav: "سائق فاخر",
        title: "خدمة سائق فاخر في السعودية",
        description:
          "احجز سائقًا فاخرًا في السعودية للأعمال أو لكبار الضيوف أو ليوم كامل. سيارة مميزة مع سائق محترف. اطلب عرض السعر.",
        h1: "سائق فاخر للساعات التي تحتاجها",
        eyebrow: "النقل الفاخر · السائق",
        answer:
          "خدمة السائق الفاخر توفر سيارة مميزة وسائقًا محترفًا تحت تصرفك طوال مدة محددة، بدل مشوار واحد من نقطة إلى أخرى. تُرتِّبها RideSaudi مسبقًا للأعمال وكبار الضيوف والسفر الخاص. اذكر الساعات أو اليوم وتفضيلك للسيارة، وتُؤكَّد الإتاحة في عرض السعر.",
        summary: "سيارة مميزة وسائق محترف تحت تصرفك طوال مدة محددة.",
        sections: [
          {
            h: "تحت تصرفك، وليس من نقطة إلى أخرى فقط",
            p: [
              "الفرق بين السائق الخاص والتوصيل هو الوقت. التوصيل ينقلك من مكان إلى آخر. أما السائق فيبقى معك عبر جدول كامل: صباح من الاجتماعات، وبعد ظهر من المواعيد، وأمسية ارتباط. أخبرنا بالساعات أو اليوم والمحطات المتوقعة، ويُبنى الترتيب حولها.",
            ],
          },
          {
            h: "من يستخدم خدمة السائق",
            p: [],
            list: [
              "التنفيذيون ورجال الأعمال أصحاب الجداول المزدحمة",
              "الزوار الذين يريدون سائقًا ليوم في مدينة لا يعرفونها",
              "الضيوف والوفود الذين يحتاجون إلى التكتم والتخطيط الدقيق",
              "المناسبات التي يهم فيها الوصول بصورة لائقة",
            ],
          },
          {
            h: "خطط لليوم قبل أن يبدأ",
            p: [
              "الترتيبات الأسلس هي التي لها برنامج واضح: أين يبدأ اليوم، والمحطات بالترتيب، والمواعيد التي لا تتحرك، وأين ينتهي. أضف أي وقت انتظار تتوقعه بين المحطات. وإن كانت خططك قد تتغير في اليوم نفسه فاذكر ذلك لأنه يؤثر في كيفية إعداد الترتيب وتسعيره.",
            ],
          },
          {
            h: "سائق أم توصيل من المطار؟",
            p: [
              "إن كنت تحتاج فقط إلى الوصول إلى المطار أو منه فالتوصيل من المطار هو الترتيب الأبسط. وإن أردت سائقًا بدءًا من المطار فاطلب ذلك في الاستفسار نفسه. وراجع صفحة خدمات السائق الخاص لمعرفة الفرق بين الترتيب بالساعة وليوم كامل وعدة أيام.",
            ],
          },
        ],
        checklist: {
          h: "ما الذي تضيفه إلى طلب السائق الفاخر",
          items: [
            "التاريخ ووقت البدء، وعدد الساعات أو اليوم الكامل",
            "المدينة ونقطة البداية",
            "المحطات المتوقعة بالترتيب ومواعيد الارتباطات الثابتة",
            "عدد الركاب والحقائب إن وُجدت",
            "تفضيل السيارة: سيدان أو دفع رباعي أو مركبة أكبر",
            "أي متطلبات تتعلق بالتكتم أو اللغة أو غيرها",
          ],
        },
        faqs: [
          {
            q: "كيف أحجز سائقًا فاخرًا في السعودية؟",
            a: "أرسل طلبًا بالتاريخ والساعات والمدينة وعدد الركاب وتفضيل السيارة. ترد عليك RideSaudi بعرض سعر، ولا يُرتَّب السائق إلا بعد تأكيدك.",
          },
          {
            q: "ما الفرق بين السائق الخاص والتوصيل من المطار؟",
            a: "التوصيل من المطار رحلة واحدة بين المطار والوجهة. أما السائق فيبقى متاحًا لك طوال مدة محددة أو يوم كامل مع عدة محطات.",
          },
          {
            q: "هل يمكنني اختيار السيارة؟",
            a: "يمكنك ذكر تفضيلك. وتُؤكَّد السيارات المميزة المتاحة لتاريخك في عرض السعر.",
          },
          {
            q: "هل يمكنني طلب سائق يتحدث لغة معينة؟",
            a: "يمكنك ذكر تفضيل اللغة في طلبك. وتُؤكَّد إمكانية تلبيته لتاريخك في عرض السعر، ولا يُوعَد به مسبقًا.",
          },
        ],
      },
    },
  },

  /* ───────────────────────── CHAUFFEUR ───────────────────────── */
  {
    path: "services/chauffeur-services",
    parent: "services",
    variant: "default",
    service: "chauffeur",
    related: [
      "luxury-transportation/luxury-chauffeur",
      "services/airport-transfers",
      "services/intercity-transfers",
      "services/event-transportation",
    ],
    updated: UPDATED,
    copy: {
      en: {
        nav: "Private Chauffeur",
        title: "Private Car with Chauffeur in Saudi Arabia",
        description: "Book a private car with a chauffeur in Saudi Arabia by the hour or the day: sedan, GMC Yukon or Hyundai Staria. The vehicle is always included. Get a quotation.",
        h1: "A private chauffeur in Saudi Arabia, by the hour or the day",
        eyebrow: "Private Chauffeur",
        answer:
          "A private chauffeur is a driver and vehicle booked in advance for your exclusive use over a set number of hours or a full day, with as many stops as your schedule needs. RideSaudi arranges this on request. State your date, city and hours; availability and the terms for your plan are confirmed in the quotation.",
        summary: "A driver and vehicle at your disposal by the hour or by the day.",
        sections: [
          {
            h: "Chauffeur, private driver, transfer and VIP: the differences",
            p: [
              "These terms are often used interchangeably, and it helps to be precise because the arrangement and the quotation differ. The table below sets out the usual distinctions as we use them.",
            ],
          },
          {
            h: "Hourly or full-day: choosing the shape",
            p: [
              "An hourly arrangement fits a defined window, such as a morning of meetings. A full-day arrangement fits a day with several stops or uncertain timings. Multi-day travel works best planned as a sequence of days with a clear start each morning. State what you expect, and ask us how extra time is handled rather than assuming.",
            ],
          },
          {
            h: "Who books a chauffeur",
            p: [],
            list: [
              "Business travellers with meetings in several places",
              "Visitors who want a private driver for sightseeing in an unfamiliar city",
              "Families who prefer one driver for a day of errands or visits",
              "Delegations and guests with a scheduled programme",
            ],
          },
          {
            h: "Making the quotation accurate",
            p: [
              "The more complete the itinerary, the more accurate the quotation. List the stops in order, the times that cannot move, and any waiting you expect. If the day might change, say so. For premium vehicles and VIP planning, see luxury transportation.",
            ],
          },
        ],
        table: {
          h: "How the services differ",
          head: ["Service", "What it is", "Best when"],
          rows: [
            ["Airport transfer", "One journey between an airport and a destination", "You only need to get to or from the airport"],
            ["Private driver or chauffeur", "A driver and vehicle for you across a set number of hours or a day", "You have several stops or an uncertain schedule"],
            ["Intercity transfer", "A single longer journey between two cities", "You are moving between cities"],
            ["VIP or luxury", "A premium vehicle with extra planning and discretion", "The guest or the occasion calls for it"],
          ],
        },
        checklist: {
          h: "What to include in your chauffeur enquiry",
          items: [
            "Date, city and the start time",
            "Number of hours or full day (and if more than one day, each date)",
            "Stops in order, and any fixed appointments",
            "Passengers and luggage",
            "Vehicle preference",
          ],
        },
        faqs: [
          { q: "Can I hire only a driver for my own car, or apply for a driver job?", a: "No. RideSaudi arranges a vehicle and its driver together for passengers. We do not supply drivers for a customer's own car, and this website does not handle driver recruitment." },
          {
            q: "What is the difference between a private chauffeur and an airport transfer?",
            a: "An airport transfer is one journey. A private chauffeur is available to you for a set number of hours or a day, for as many stops as the schedule needs.",
          },
          {
            q: "Can I book a private driver for just a few hours?",
            a: "Yes. State the hours and your plan, and the quotation will reflect them. Terms for extra time are set out in your quotation and confirmation.",
          },
          {
            q: "Can I book a driver for several days?",
            a: "You can request a multi-day arrangement. Give us each date and the start location for each day. Availability is confirmed in the quotation.",
          },
          {
            q: "Can I book a chauffeur and a premium vehicle together?",
            a: "Yes. State your vehicle preference. Availability is confirmed in the quotation; see luxury chauffeur for how those requests work.",
          },
        ],
      },
      ar: {
        nav: "السائق الخاص",
        title: "سيارة خاصة مع سائق في السعودية بالساعة أو اليوم",
        description: "احجز سيارة خاصة مع سائق في السعودية بالساعة أو لليوم: سيدان أو جمس يوكن أو هيونداي ستاريا. المركبة مشمولة دائمًا. استلم عرض السعر.",
        h1: "سائق خاص في السعودية، بالساعة أو بالنهار",
        eyebrow: "السائق الخاص",
        answer:
          "السائق الخاص هو سائق وسيارة يُحجزان مسبقًا لاستخدامك وحدك لعدد محدد من الساعات أو ليوم كامل، بعدد المحطات الذي يحتاجه جدولك. تُرتِّب RideSaudi ذلك عند الطلب. اذكر التاريخ والمدينة والساعات، وتُؤكَّد الإتاحة وشروط خطتك في عرض السعر.",
        summary: "سائق وسيارة تحت تصرفك بالساعة أو بالنهار.",
        sections: [
          {
            h: "السائق الخاص والتوصيل وكبار الشخصيات: الفروق",
            p: [
              "كثيرًا ما تُستخدم هذه المصطلحات بالتبادل، والدقة فيها مفيدة لأن الترتيب وعرض السعر يختلفان. يوضح الجدول أدناه الفروق المعتادة كما نستخدمها.",
            ],
          },
          {
            h: "بالساعة أم ليوم كامل: اختيار الشكل",
            p: [
              "الترتيب بالساعة يناسب نافذة محددة، مثل صباح من الاجتماعات. والترتيب ليوم كامل يناسب يومًا بمحطات عدة أو مواعيد غير مؤكدة. أما السفر لعدة أيام فيُخطَّط له كسلسلة أيام لكل منها بداية واضحة. اذكر ما تتوقعه، واسأل عن كيفية التعامل مع الوقت الإضافي بدل افتراضه.",
            ],
          },
          {
            h: "من يحجز سائقًا خاصًا",
            p: [],
            list: [
              "رجال الأعمال أصحاب الاجتماعات في أماكن عدة",
              "الزوار الذين يريدون سائقًا خاصًا للتنزه في مدينة لا يعرفونها",
              "العائلات التي تفضل سائقًا واحدًا ليوم من المشاوير أو الزيارات",
              "الوفود والضيوف ذوو البرنامج المجدول",
            ],
          },
          {
            h: "كيف يصبح عرض السعر دقيقًا",
            p: [
              "كلما اكتمل البرنامج كان عرض السعر أدق. اذكر المحطات بالترتيب والمواعيد التي لا تتحرك وأي انتظار متوقع. وإن كان اليوم قابلًا للتغيير فاذكر ذلك. وللسيارات المميزة وتخطيط كبار الشخصيات راجع صفحة النقل الفاخر.",
            ],
          },
        ],
        table: {
          h: "كيف تختلف الخدمات",
          head: ["الخدمة", "ما هي", "تناسبك حين"],
          rows: [
            ["التوصيل من المطار", "رحلة واحدة بين المطار ووجهة", "تحتاج فقط إلى الوصول إلى المطار أو منه"],
            ["السائق الخاص", "سائق وسيارة لك طوال عدد محدد من الساعات أو يوم", "لديك محطات عدة أو جدول غير مؤكد"],
            ["الرحلة بين المدن", "رحلة واحدة أطول بين مدينتين", "تنتقل بين المدن"],
            ["كبار الشخصيات أو الفاخر", "سيارة مميزة مع تخطيط إضافي وتكتم", "يتطلب الضيف أو المناسبة ذلك"],
          ],
        },
        checklist: {
          h: "ما الذي تضيفه إلى طلب السائق الخاص",
          items: [
            "التاريخ والمدينة ووقت البدء",
            "عدد الساعات أو اليوم الكامل (وإن زاد على يوم فتاريخ كل يوم)",
            "المحطات بالترتيب وأي مواعيد ثابتة",
            "عدد الركاب والحقائب",
            "تفضيل السيارة",
          ],
        },
        faqs: [
          { q: "هل يمكن طلب سائق فقط لسيارتي الخاصة أو التقديم على وظيفة سائق؟", a: "لا. ترتّب RideSaudi المركبة وسائقها معًا لنقل الركاب. لا نوفّر سائقين لسيارة العميل الخاصة، وهذا الموقع ليس للتوظيف." },
          {
            q: "ما الفرق بين السائق الخاص والتوصيل من المطار؟",
            a: "التوصيل من المطار رحلة واحدة. أما السائق الخاص فيكون متاحًا لك طوال عدد محدد من الساعات أو يوم، بعدد المحطات الذي يحتاجه الجدول.",
          },
          {
            q: "هل يمكنني حجز سائق لبضع ساعات فقط؟",
            a: "نعم. اذكر الساعات وخطتك ليعكسها عرض السعر. وتُوضَّح شروط الوقت الإضافي في عرض السعر والتأكيد.",
          },
          {
            q: "هل يمكنني حجز سائق لعدة أيام؟",
            a: "يمكنك طلب ترتيب متعدد الأيام. أعطنا تاريخ كل يوم ونقطة البداية لكل منها. وتُؤكَّد الإتاحة في عرض السعر.",
          },
          {
            q: "هل يمكنني حجز سائق مع سيارة مميزة؟",
            a: "نعم. اذكر تفضيلك للسيارة. وتُؤكَّد الإتاحة في عرض السعر، وراجع صفحة السائق الفاخر لمعرفة آلية هذه الطلبات.",
          },
        ],
      },
    },
  },
];
