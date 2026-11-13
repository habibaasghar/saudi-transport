import type { ServicePage } from "./types";

const UPDATED = "2026-11-06";

export const batch2Pages: ServicePage[] = [
  /* ───────── Event children ───────── */
  {
    path: "services/event-transportation/corporate-events",
    parent: "services/event-transportation",
    variant: "event",
    service: "corporate",
    related: ["services/event-transportation/conference-transport", "luxury-transportation", "services/chauffeur-services", "services/airport-transfers"],
    updated: UPDATED,
    copy: {
      en: {
        nav: "Corporate Event Transportation",
        title: "Corporate Event Transportation in Saudi Arabia",
        description: "Pre-booked private transport for corporate events, teams and executives in Saudi Arabia. Share your schedule and request a corporate quotation.",
        h1: "Corporate event transportation for teams, executives and guests",
        eyebrow: "Event Transportation · Corporate",
        answer: "Corporate event transportation is pre-booked private transport for company events such as offsites, product launches, client dinners and board meetings, moving executives, staff and guests on a fixed schedule. RideSaudi quotes each event individually. Send your date, venue, headcount and timings; vehicles and capacity are confirmed in the quotation.",
        summary: "Pre-booked transport for company events, executives and client guests.",
        sections: [
          {
            h: "A corporate event has two audiences",
            p: ["Staff usually move as a group and care about punctuality. Executives and client guests care about discretion and arriving well. Treating them as one list leads to a vehicle plan that suits neither, so tell us who is in each group and where each is travelling from."],
          },
          {
            h: "Typical corporate movements",
            p: ["Describe the ones that apply:"],
            list: [
              "Executive pickups from airports or hotels to the venue",
              "Team transfers between an office or hotel and an offsite location",
              "Client dinners and evening events with a return at a set time",
              "Multi-stop days: visit, meeting, lunch, site tour",
              "Several vehicles running on one schedule",
            ],
          },
          {
            h: "Billing and approvals",
            p: ["Companies often need a clear quotation they can approve internally. State in your enquiry what your finance or procurement team needs. What billing arrangements can be offered is confirmed with you directly; we do not assume them here."],
          },
        ],
        checklist: {
          h: "Include this in your corporate event enquiry",
          items: ["Company contact and event type", "Date, city and venue", "Headcount per group: executives, staff, guests", "Pickup points and the timetable", "Number of vehicles you expect and any premium vehicle preference", "Return times and any fixed commitments"],
        },
        faqs: [
          { q: "How do I arrange transport for a corporate event?", a: "Send an enquiry with the event date, venue, headcount and timetable. RideSaudi replies with a quotation, and nothing is arranged until you confirm it." },
          { q: "Can executives and staff use different vehicles?", a: "Yes. Describe each group and the vehicle type you prefer. What can be provided for your date is confirmed in the quotation." },
          { q: "Can you manage multiple vehicles on one schedule?", a: "Tell us the number of people and the timetable. Whether several vehicles can be arranged for your date is confirmed in the quotation." },
          { q: "Can I get a quotation my finance team can review?", a: "Yes. Mention what your team needs when you enquire, and the quotation will set out the arrangement for your event." },
        ],
      },
      ar: {
        nav: "نقل فعاليات الشركات",
        title: "نقل فعاليات الشركات في السعودية",
        description: "نقل خاص بحجز مسبق لفعاليات الشركات والفرق والتنفيذيين في السعودية. شاركنا جدولكم واطلبوا عرض سعر للشركات.",
        h1: "نقل فعاليات الشركات للفرق والتنفيذيين والضيوف",
        eyebrow: "نقل الفعاليات · الشركات",
        answer: "نقل فعاليات الشركات هو نقل خاص بحجز مسبق للفعاليات المؤسسية مثل الرحلات التنظيمية وإطلاق المنتجات وعشاءات العملاء واجتماعات مجالس الإدارة، ينقل التنفيذيين والموظفين والضيوف وفق جدول ثابت. تُسعِّر RideSaudi كل فعالية على حدة. أرسلوا التاريخ والمكان وعدد الحضور والتوقيتات، وتُؤكَّد السيارات والسعة في عرض السعر.",
        summary: "نقل بحجز مسبق لفعاليات الشركات والتنفيذيين وضيوف العملاء.",
        sections: [
          {
            h: "لفعالية الشركة جمهوران",
            p: ["ينتقل الموظفون غالبًا كمجموعة ويهمهم الالتزام بالمواعيد، أما التنفيذيون وضيوف العملاء فيهمهم التكتم والوصول بصورة لائقة. ودمجهم في قائمة واحدة يؤدي إلى خطة سيارات لا تناسب أيًّا منهم، فأخبرونا بمن في كل مجموعة ومن أين ينطلق كل منها."],
          },
          {
            h: "التنقلات المعتادة في فعاليات الشركات",
            p: ["حددوا ما ينطبق عليكم:"],
            list: [
              "استقبال التنفيذيين من المطارات أو الفنادق إلى مكان الفعالية",
              "نقل الفرق بين المكتب أو الفندق وموقع الرحلة التنظيمية",
              "عشاءات العملاء والأمسيات مع عودة في وقت محدد",
              "أيام متعددة المحطات: زيارة واجتماع وغداء وجولة موقع",
              "عدة سيارات تعمل وفق جدول واحد",
            ],
          },
          {
            h: "الفوترة والموافقات",
            p: ["تحتاج الشركات غالبًا إلى عرض سعر واضح تعتمده داخليًا. اذكروا في استفساركم ما يحتاجه فريق المالية أو المشتريات. وتُؤكَّد معكم مباشرة ترتيبات الفوترة الممكنة، ولا نفترضها هنا."],
          },
        ],
        checklist: {
          h: "ما الذي تضيفونه إلى طلب نقل فعالية الشركة",
          items: ["جهة اتصال الشركة ونوع الفعالية", "التاريخ والمدينة والمكان", "عدد كل مجموعة: تنفيذيون وموظفون وضيوف", "نقاط الاستلام والجدول الزمني", "عدد السيارات المتوقع وأي تفضيل لسيارة فاخرة", "أوقات العودة وأي ارتباطات ثابتة"],
        },
        faqs: [
          { q: "كيف أرتب النقل لفعالية شركة؟", a: "أرسلوا استفسارًا بتاريخ الفعالية والمكان وعدد الحضور والجدول. تردّ RideSaudi بعرض سعر، ولا يُرتَّب شيء قبل تأكيدكم." },
          { q: "هل يمكن أن يستخدم التنفيذيون والموظفون سيارات مختلفة؟", a: "نعم. صفوا كل مجموعة ونوع السيارة المفضل، وتُؤكَّد في عرض السعر السيارات المتاحة لتاريخكم." },
          { q: "هل يمكنكم إدارة عدة سيارات وفق جدول واحد؟", a: "أخبرونا بعدد الأشخاص والجدول. وتُؤكَّد في عرض السعر إمكانية ترتيب عدة سيارات لتاريخكم." },
          { q: "هل أحصل على عرض سعر يراجعه فريق المالية؟", a: "نعم. اذكروا ما يحتاجه فريقكم عند الاستفسار، ويوضح عرض السعر الترتيب المقترح لفعاليتكم." },
        ],
      },
    },
  },

  {
    path: "services/event-transportation/conference-transport",
    parent: "services/event-transportation",
    variant: "event",
    service: "event",
    related: ["services/event-transportation/event-airport-transfers", "services/event-transportation/corporate-events", "services/airport-transfers/riyadh-airport", "luxury-transportation/luxury-chauffeur"],
    updated: UPDATED,
    copy: {
      en: {
        nav: "Conference & Exhibition Transport",
        title: "Conference and Exhibition Transportation in Saudi Arabia",
        description: "Pre-booked transport for conference delegates, speakers and exhibition visitors in Riyadh, Jeddah, Dammam and elsewhere. Request a quotation.",
        h1: "Conference and exhibition transportation for delegates and speakers",
        eyebrow: "Event Transportation · Conferences & Exhibitions",
        answer: "Conference and exhibition transportation moves delegates, speakers, exhibitors and visitors between airports, hotels and the venue on the programme's timetable. RideSaudi quotes each event individually. Send your dates, venue, delegate numbers and session times; vehicles and capacity for your dates are confirmed in the quotation.",
        summary: "Delegate, speaker and exhibitor transport planned around the programme.",
        sections: [
          {
            h: "The programme sets the timetable",
            p: ["Conference transport follows the schedule: arrival days, registration, opening sessions, breaks, gala evenings and departures. Share the programme or the key times so pickups are built around them rather than around a single start time."],
          },
          {
            h: "Delegates, speakers and exhibitors move differently",
            p: ["Delegates tend to move in waves between a few hotels and the venue. Speakers and VIPs often need a dedicated vehicle and a fixed pickup. Exhibitors need early arrivals and late departures for set-up and pack-down. Say which groups you have and roughly how many in each."],
            list: ["Hotel to venue shuttle loops on session days", "Speaker and VIP transfers with fixed times", "Exhibitor early set-up and late pack-down journeys", "Evening events and gala returns"],
          },
          {
            h: "Venue access in large cities",
            p: ["Conference and exhibition centres in cities such as Riyadh, Jeddah and the Eastern Province have their own entrances and vehicle rules. Ask the organiser for the vehicle drop-off point and pass it on in your enquiry so it is planned in advance."],
          },
        ],
        checklist: {
          h: "Include this in your conference or exhibition enquiry",
          items: ["Event name, city and venue", "Dates and the programme's key times", "Delegate, speaker and exhibitor numbers", "Host hotels and their distance from the venue", "Venue drop-off point from the organiser", "Airport arrivals needed (see event airport transfers)"],
        },
        faqs: [
          { q: "Can you run shuttles between hotels and a conference venue?", a: "You can request them. Send the hotels, venue and session times; whether a shuttle pattern can be arranged for your dates is confirmed in the quotation." },
          { q: "Can speakers have separate vehicles?", a: "Yes, state it in your enquiry with their pickup times. Availability is confirmed in the quotation." },
          { q: "Does this cover exhibitions as well as conferences?", a: "Yes. Exhibitions have the same pattern, plus exhibitor set-up and pack-down journeys, which you can describe in the enquiry." },
          { q: "How early should I request transport?", a: "As early as you can, ideally once the dates and host hotels are known." },
        ],
      },
      ar: {
        nav: "نقل المؤتمرات والمعارض",
        title: "نقل المؤتمرات والمعارض في السعودية",
        description: "نقل بحجز مسبق لمندوبي المؤتمرات والمتحدثين وزوار المعارض في الرياض وجدة والدمام وغيرها. اطلبوا عرض سعر.",
        h1: "نقل المؤتمرات والمعارض للمندوبين والمتحدثين",
        eyebrow: "نقل الفعاليات · المؤتمرات والمعارض",
        answer: "نقل المؤتمرات والمعارض ينقل المندوبين والمتحدثين والعارضين والزوار بين المطارات والفنادق ومكان الفعالية وفق جدول البرنامج. تُسعِّر RideSaudi كل فعالية على حدة. أرسلوا التواريخ والمكان وأعداد المندوبين وأوقات الجلسات، وتُؤكَّد السيارات والسعة لتواريخكم في عرض السعر.",
        summary: "نقل المندوبين والمتحدثين والعارضين مخطط حول البرنامج.",
        sections: [
          {
            h: "البرنامج هو الذي يحدد الجدول",
            p: ["يتبع نقل المؤتمرات الجدول: أيام الوصول والتسجيل والجلسات الافتتاحية والاستراحات وأمسيات الحفل والمغادرة. شاركونا البرنامج أو الأوقات الرئيسة ليُبنى الاستلام عليها وليس على وقت بدء واحد."],
          },
          {
            h: "المندوبون والمتحدثون والعارضون يتنقلون بشكل مختلف",
            p: ["يتنقل المندوبون غالبًا على موجات بين فنادق قليلة والمكان. وقد يحتاج المتحدثون وكبار الشخصيات إلى سيارة مخصصة ووقت استلام ثابت. أما العارضون فيحتاجون إلى وصول مبكر ومغادرة متأخرة للتجهيز والتفكيك. حددوا مجموعاتكم وعدد كل منها تقريبًا."],
            list: ["رحلات مكوكية بين الفندق والمكان في أيام الجلسات", "نقل المتحدثين وكبار الشخصيات بأوقات ثابتة", "رحلات العارضين المبكرة للتجهيز والمتأخرة للتفكيك", "الأمسيات وعودة حفل الختام"],
          },
          {
            h: "الدخول إلى المواقع في المدن الكبرى",
            p: ["لمراكز المؤتمرات والمعارض في مدن مثل الرياض وجدة والمنطقة الشرقية مداخلها وقواعدها الخاصة بالسيارات. اسألوا الجهة المنظمة عن نقطة نزول السيارات وأضيفوها إلى استفساركم لتُخطَّط مسبقًا."],
          },
        ],
        checklist: {
          h: "ما الذي تضيفونه إلى طلب نقل مؤتمر أو معرض",
          items: ["اسم الفعالية والمدينة والمكان", "التواريخ والأوقات الرئيسة للبرنامج", "أعداد المندوبين والمتحدثين والعارضين", "الفنادق المضيفة وبعدها عن المكان", "نقطة نزول السيارات من الجهة المنظمة", "هل تحتاجون استقبالًا من المطارات (راجعوا صفحة توصيل ضيوف الفعاليات من المطار)"],
        },
        faqs: [
          { q: "هل يمكنكم تشغيل رحلات مكوكية بين الفنادق وموقع المؤتمر؟", a: "يمكنكم طلب ذلك. أرسلوا الفنادق والمكان وأوقات الجلسات، وتُؤكَّد في عرض السعر إمكانية ترتيب نمط الرحلات لتواريخكم." },
          { q: "هل يمكن تخصيص سيارات منفصلة للمتحدثين؟", a: "نعم، اذكروا ذلك في استفساركم مع أوقات استلامهم. وتُؤكَّد الإتاحة في عرض السعر." },
          { q: "هل يشمل ذلك المعارض إلى جانب المؤتمرات؟", a: "نعم. للمعارض النمط نفسه إضافة إلى رحلات تجهيز العارضين وتفكيكهم، ويمكنكم وصفها في الاستفسار." },
          { q: "متى أطلب النقل؟", a: "في أبكر وقت ممكن، ويفضل بمجرد معرفة التواريخ والفنادق المضيفة." },
        ],
      },
    },
  },

  {
    path: "services/event-transportation/event-airport-transfers",
    parent: "services/event-transportation",
    variant: "event",
    service: "event",
    related: ["services/event-transportation/conference-transport", "services/airport-transfers", "services/airport-transfers/riyadh-airport", "services/airport-transfers/jeddah-airport"],
    updated: UPDATED,
    copy: {
      en: {
        nav: "Event Airport Transfers",
        title: "Airport Transfers for Event Guests in Saudi Arabia",
        description: "Plan airport pickups for event guests, delegates and VIPs arriving on different flights. Pre-booked private transfers; request a quotation.",
        h1: "Airport transfers for event guests arriving on different flights",
        eyebrow: "Event Transportation · Airport Arrivals",
        answer: "Event airport transfers are pre-booked pickups for guests, delegates or VIPs who arrive on different flights for the same event. The usual approach is to group arrivals into time windows and match them to vehicles. RideSaudi quotes each plan individually; capacity and availability for your dates are confirmed in the quotation.",
        summary: "Airport pickups for event guests, grouped by arrival time.",
        sections: [
          {
            h: "Plan by arrival window, not by guest",
            p: ["When fifty people arrive on twenty flights, individual pickups are expensive and hard to manage. Grouping guests whose flights land close together lets one vehicle serve several people. Send us the full list of flights with landing times and we can propose how to group them."],
          },
          {
            h: "What the arrivals plan needs",
            p: [],
            list: ["Guest name, flight number, airport and scheduled landing time", "Destination hotel for each guest or group", "Which guests are VIPs needing a dedicated vehicle", "A contact who can update the list as plans change"],
          },
          {
            h: "Changes happen: agree how they are handled",
            p: ["Flights are rebooked and guests are added late. Ask in your enquiry how list changes and delays are handled, because the terms are set out in the quotation and confirmation, not assumed. Departures at the end of the event work the same way in reverse."],
          },
        ],
        checklist: {
          h: "Include this in your event airport transfer enquiry",
          items: ["Event, dates and host hotels", "Airport(s) and the arrivals list with flight numbers", "Number of VIP guests", "Departure flights, if you want those quoted too", "A coordination contact"],
        },
        faqs: [
          { q: "Can you collect guests from several flights for one event?", a: "You can request it. Send the flight list and hotels; how the pickups can be grouped and which vehicles are available is confirmed in the quotation." },
          { q: "Can VIPs have their own vehicles?", a: "State it in your enquiry. Availability is confirmed in the quotation." },
          { q: "What if a guest's flight changes?", a: "Tell us as early as you can. How changes and delays are handled is set out in your quotation and confirmation." },
          { q: "Does this cover departures as well?", a: "Yes. Include departure flights and the same planning applies in reverse." },
        ],
      },
      ar: {
        nav: "توصيل ضيوف الفعاليات من المطار",
        title: "التوصيل من المطار لضيوف الفعاليات في السعودية",
        description: "خططوا لاستقبال ضيوف الفعاليات والمندوبين وكبار الشخصيات القادمين على رحلات مختلفة. توصيل خاص بحجز مسبق، واطلبوا عرض سعر.",
        h1: "التوصيل من المطار لضيوف الفعاليات القادمين على رحلات مختلفة",
        eyebrow: "نقل الفعاليات · الاستقبال من المطار",
        answer: "التوصيل من المطار لضيوف الفعاليات هو استقبال بحجز مسبق للضيوف أو المندوبين أو كبار الشخصيات الذين يصلون على رحلات مختلفة للفعالية نفسها. والأسلوب المعتاد تجميع الوصول في نوافذ زمنية ومطابقتها بالسيارات. تُسعِّر RideSaudi كل خطة على حدة، وتُؤكَّد السعة والإتاحة لتواريخكم في عرض السعر.",
        summary: "استقبال ضيوف الفعاليات من المطار مجمَّعين بحسب وقت الوصول.",
        sections: [
          {
            h: "خططوا بنافذة الوصول لا بالضيف",
            p: ["حين يصل خمسون شخصًا على عشرين رحلة يصبح الاستقبال الفردي مكلفًا وعسير الإدارة. وتجميع الضيوف الذين تهبط رحلاتهم متقاربة يتيح لسيارة واحدة خدمة عدة أشخاص. أرسلوا قائمة الرحلات كاملة بأوقات الهبوط ونقترح كيفية تجميعها."],
          },
          {
            h: "ما تحتاجه خطة الوصول",
            p: [],
            list: ["اسم الضيف ورقم الرحلة والمطار وموعد الهبوط المقرر", "الفندق الوجهة لكل ضيف أو مجموعة", "من هم كبار الشخصيات الذين يحتاجون إلى سيارة مخصصة", "جهة اتصال تحدّث القائمة مع تغير الخطط"],
          },
          {
            h: "التغييرات واردة: اتفقوا على آلية التعامل معها",
            p: ["تُعاد جدولة الرحلات ويُضاف ضيوف في اللحظة الأخيرة. اسألوا في استفساركم عن آلية التعامل مع تعديل القوائم والتأخير، لأن الشروط تُوضَّح في عرض السعر والتأكيد ولا تُفترض. والمغادرة في نهاية الفعالية تسير بالطريقة نفسها بالعكس."],
          },
        ],
        checklist: {
          h: "ما الذي تضيفونه إلى طلب التوصيل من المطار لضيوف الفعالية",
          items: ["الفعالية والتواريخ والفنادق المضيفة", "المطار أو المطارات وقائمة الوصول بأرقام الرحلات", "عدد ضيوف كبار الشخصيات", "رحلات المغادرة إن أردتم تسعيرها أيضًا", "جهة اتصال للتنسيق"],
        },
        faqs: [
          { q: "هل يمكنكم استقبال ضيوف من عدة رحلات لفعالية واحدة؟", a: "يمكنكم طلب ذلك. أرسلوا قائمة الرحلات والفنادق، وتُؤكَّد في عرض السعر كيفية تجميع الاستقبال والسيارات المتاحة." },
          { q: "هل يمكن تخصيص سيارات لكبار الشخصيات؟", a: "اذكروا ذلك في استفساركم. وتُؤكَّد الإتاحة في عرض السعر." },
          { q: "ماذا لو تغيّرت رحلة أحد الضيوف؟", a: "أبلغونا في أبكر وقت ممكن. وتُوضَّح آلية التعامل مع التغييرات والتأخير في عرض السعر والتأكيد." },
          { q: "هل يشمل ذلك المغادرة أيضًا؟", a: "نعم. أضيفوا رحلات المغادرة ويسري التخطيط نفسه بالعكس." },
        ],
      },
    },
  },

  /* ───────── Chauffeur child ───────── */

  /* ───────── Umrah ziyarat ───────── */
  {
    path: "services/umrah-transport/makkah-ziyarat",
    parent: "services/umrah-transport",
    variant: "umrah",
    service: "umrah",
    related: ["services/umrah-transport", "services/umrah-transport/madinah-ziyarat", "services/umrah-transport/jeddah-airport-to-makkah", "services/chauffeur-services"],
    updated: UPDATED,
    copy: {
      en: {
        nav: "Makkah Ziyarat Transport",
        title: "Makkah Ziyarat Transport: Private Car with Driver",
        description: "Arrange private transport for visiting historic and religious sites around Makkah. Transport only; no guided tours. Request a quotation.",
        h1: "Private transport for Makkah ziyarat",
        eyebrow: "Umrah Transport · Makkah Ziyarat",
        answer: "Makkah ziyarat transport is a pre-booked private car with a driver for visiting historic and religious sites around Makkah, usually over a few hours. RideSaudi provides the transport only; it does not provide religious guides or guided tours. Send your sites and timing; availability is confirmed in the quotation.",
        summary: "A private car and driver for visiting sites around Makkah. Transport only, no guided tours.",
        sections: [
          {
            h: "Transport, not a guided tour",
            p: ["Ziyarat means visiting places of historical and religious significance. RideSaudi arranges the car and driver. We do not provide a guide, commentary or religious instruction, and we are not affiliated with any religious authority. If you want a guide, arrange one separately and tell us the plan."],
          },
          {
            h: "Places visitors commonly ask about",
            p: ["Visitors usually have a list from their group or family. Commonly requested places around Makkah include:"],
            list: ["Jabal al-Nour and the Cave of Hira", "Jabal Thawr", "Arafat, Mina and Muzdalifah", "Other sites on your own list"],
          },
          {
            h: "Check access before you go",
            p: ["Access to some areas can be restricted or very busy, particularly around the Hajj season, and sites can have their own visiting rules. Check current conditions and share your list and timing so we can discuss what is practical. Whether any particular stop can be included is confirmed in the quotation."],
          },
          {
            h: "Plan with the hours in mind",
            p: ["Ziyarat is usually arranged as a window of hours with several stops. List the places in the order you want, and say how long you expect to spend at each. For how hourly arrangements work, see private driver by the hour."],
          },
        ],
        checklist: {
          h: "Include this in your Makkah ziyarat enquiry",
          items: ["Date and start time, and your hotel", "The sites you want to visit, in order", "Time you expect to spend at each", "Number of people, including elderly travellers and children", "Whether you will have your own guide"],
        },
        faqs: [
          { q: "Do you provide a guide for ziyarat?", a: "No. RideSaudi provides private transport only. You can arrange a guide separately." },
          { q: "Can I request several sites in one trip?", a: "Yes. List the sites in order with your timing, and the quotation will reflect the plan. Whether each stop can be included is confirmed with you." },
          { q: "Can elderly relatives travel comfortably?", a: "Tell us who is travelling and any needs. We will discuss what can be arranged; accessibility features are only offered where they can be confirmed." },
          { q: "Is a fixed price published?", a: "No. Each ziyarat journey is quoted individually." },
        ],
      },
      ar: {
        nav: "نقل زيارات مكة المكرمة",
        title: "نقل زيارات مكة المكرمة بسيارة خاصة مع سائق",
        description: "رتّب نقلًا خاصًا لزيارة المعالم التاريخية والدينية حول مكة المكرمة. نقل فقط دون جولات إرشادية. اطلب عرض سعر.",
        h1: "نقل خاص لزيارات مكة المكرمة",
        eyebrow: "نقل المعتمرين · زيارات مكة",
        answer: "نقل زيارات مكة المكرمة هو سيارة خاصة بسائق وبحجز مسبق لزيارة المعالم التاريخية والدينية حول مكة، عادة خلال ساعات قليلة. توفر RideSaudi النقل فقط، ولا توفر مرشدين دينيين أو جولات إرشادية. أرسل المواقع والوقت، وتُؤكَّد الإتاحة في عرض السعر.",
        summary: "سيارة خاصة وسائق لزيارة المعالم حول مكة المكرمة. نقل فقط دون جولات إرشادية.",
        sections: [
          {
            h: "نقل وليس جولة إرشادية",
            p: ["الزيارة تعني التوجه إلى أماكن ذات أهمية تاريخية ودينية. تُرتِّب RideSaudi السيارة والسائق. ولا نوفر مرشدًا أو شرحًا أو توجيهًا دينيًا، ولسنا تابعين لأي جهة دينية. وإن أردت مرشدًا فرتّبه بشكل منفصل وأخبرنا بالخطة."],
          },
          {
            h: "أماكن يسأل عنها الزوار عادة",
            p: ["يكون لدى الزوار عادة قائمة من مجموعتهم أو عائلتهم. ومن الأماكن الأكثر طلبًا حول مكة المكرمة:"],
            list: ["جبل النور وغار حراء", "جبل ثور", "عرفات ومنى ومزدلفة", "أي مواقع أخرى في قائمتك"],
          },
          {
            h: "تحقق من إمكانية الوصول قبل الذهاب",
            p: ["قد يكون الوصول إلى بعض المناطق مقيدًا أو مزدحمًا جدًا، خاصة قرب موسم الحج، وقد يكون لبعض المواقع قواعد زيارة خاصة بها. تحقق من الأوضاع الحالية وشاركنا قائمتك وتوقيتك لنناقش الممكن. وتُؤكَّد في عرض السعر إمكانية إدراج أي محطة بعينها."],
          },
          {
            h: "خطط بحسب الساعات",
            p: ["تُرتَّب الزيارات عادة كنافذة ساعات بعدة محطات. اذكر الأماكن بالترتيب الذي تريده وكم تتوقع أن تقضي في كل منها. ولمعرفة كيف يعمل الترتيب بالساعة راجع صفحة السائق الخاص بالساعة."],
          },
        ],
        checklist: {
          h: "ما الذي تضيفه إلى طلب نقل زيارات مكة",
          items: ["التاريخ ووقت البدء وفندقك", "المواقع التي تريد زيارتها بالترتيب", "الوقت الذي تتوقع قضاءه في كل منها", "عدد الأشخاص، ومنهم كبار السن والأطفال", "هل سيكون معك مرشد خاص بك"],
        },
        faqs: [
          { q: "هل توفرون مرشدًا للزيارات؟", a: "لا. توفر RideSaudi النقل الخاص فقط. ويمكنك ترتيب مرشد بشكل منفصل." },
          { q: "هل يمكنني طلب عدة مواقع في رحلة واحدة؟", a: "نعم. اذكر المواقع بالترتيب مع توقيتك ليعكس عرض السعر الخطة. وتُؤكَّد معك إمكانية إدراج كل محطة." },
          { q: "هل يستطيع كبار السن من أقاربي التنقل بارتياح؟", a: "أخبرنا بمن سيسافر وبأي احتياجات، وسنناقش ما يمكن ترتيبه. ولا تُعرض ميزات الوصول إلا إذا أمكن تأكيدها." },
          { q: "هل يوجد سعر ثابت منشور؟", a: "لا. تُسعَّر كل رحلة زيارة على حدة." },
        ],
      },
    },
  },

  {
    path: "services/umrah-transport/madinah-ziyarat",
    parent: "services/umrah-transport",
    variant: "umrah",
    service: "umrah",
    related: ["services/umrah-transport", "services/umrah-transport/makkah-ziyarat", "services/airport-transfers/madinah-airport", "services/chauffeur-services"],
    updated: UPDATED,
    copy: {
      en: {
        nav: "Madinah Ziyarat Transport",
        title: "Madinah Ziyarat Transport: Private Car with Driver",
        description: "Arrange private transport for visiting historic and religious sites around Madinah, such as Quba and Uhud. Transport only. Request a quotation.",
        h1: "Private transport for Madinah ziyarat",
        eyebrow: "Umrah Transport · Madinah Ziyarat",
        answer: "Madinah ziyarat transport is a pre-booked private car with a driver for visiting historic and religious sites in and around Madinah, usually over a few hours. RideSaudi provides the transport only, with no religious guides or guided tours. Send your sites and timing; availability is confirmed in the quotation.",
        summary: "A private car and driver for visiting sites around Madinah. Transport only.",
        sections: [
          {
            h: "Transport, not a guided tour",
            p: ["RideSaudi arranges the car and driver. We do not provide a guide, commentary or religious instruction, and we are not affiliated with any religious authority. If you want a guide, arrange one separately and tell us your plan."],
          },
          {
            h: "Places visitors commonly ask about",
            p: ["Many visitors to Madinah ask about the same group of places:"],
            list: ["Masjid Quba", "Masjid al-Qiblatain", "Mount Uhud and the Uhud cemetery", "Other sites on your own list"],
          },
          {
            h: "Timing around prayer and visiting hours",
            p: ["Your day in Madinah is likely to be organised around prayer times, and sites have their own opening and visiting arrangements. Tell us the times you need to be back at your hotel, and check site conditions before you go. Whether a specific stop fits your window is confirmed in the quotation."],
          },
          {
            h: "Hotel pickups near the central area",
            p: ["Vehicle access close to the Prophet's Mosque can be restricted at busy times, so your pickup point may be a short walk from your hotel. Ask your hotel for its recommended pickup point and include it in your enquiry."],
          },
        ],
        checklist: {
          h: "Include this in your Madinah ziyarat enquiry",
          items: ["Date, start time and hotel, with your hotel's pickup advice", "The sites you want to visit, in order", "Time you must be back", "Number of people, including elderly travellers and children", "Whether you have your own guide"],
        },
        faqs: [
          { q: "Do you provide a guide?", a: "No. RideSaudi provides private transport only. You can arrange a guide separately." },
          { q: "Can I visit Quba, Qiblatain and Uhud in one trip?", a: "You can request several stops. List them in order with your timing; whether they fit your window is confirmed in the quotation." },
          { q: "Can you collect us from near the Prophet's Mosque?", a: "Vehicle access nearby can be restricted at busy times. Ask your hotel for the best pickup point and include it in your enquiry." },
          { q: "Is a fixed price published?", a: "No. Each ziyarat journey is quoted individually." },
        ],
      },
      ar: {
        nav: "نقل زيارات المدينة المنورة",
        title: "نقل زيارات المدينة المنورة بسيارة خاصة مع سائق",
        description: "رتّب نقلًا خاصًا لزيارة المعالم التاريخية والدينية حول المدينة المنورة مثل قباء وأحد. نقل فقط. اطلب عرض سعر.",
        h1: "نقل خاص لزيارات المدينة المنورة",
        eyebrow: "نقل المعتمرين · زيارات المدينة",
        answer: "نقل زيارات المدينة المنورة هو سيارة خاصة بسائق وبحجز مسبق لزيارة المعالم التاريخية والدينية في المدينة وحولها، عادة خلال ساعات قليلة. توفر RideSaudi النقل فقط دون مرشدين دينيين أو جولات إرشادية. أرسل المواقع والوقت، وتُؤكَّد الإتاحة في عرض السعر.",
        summary: "سيارة خاصة وسائق لزيارة المعالم حول المدينة المنورة. نقل فقط.",
        sections: [
          {
            h: "نقل وليس جولة إرشادية",
            p: ["تُرتِّب RideSaudi السيارة والسائق. ولا نوفر مرشدًا أو شرحًا أو توجيهًا دينيًا، ولسنا تابعين لأي جهة دينية. وإن أردت مرشدًا فرتّبه بشكل منفصل وأخبرنا بخطتك."],
          },
          {
            h: "أماكن يسأل عنها الزوار عادة",
            p: ["يسأل كثير من زوار المدينة المنورة عن المجموعة نفسها من الأماكن:"],
            list: ["مسجد قباء", "مسجد القبلتين", "جبل أحد ومقبرة شهداء أحد", "أي مواقع أخرى في قائمتك"],
          },
          {
            h: "التوقيت حول الصلاة وساعات الزيارة",
            p: ["يُرجَّح أن يُنظَّم يومك في المدينة حول أوقات الصلاة، وللمواقع ترتيباتها الخاصة في الفتح والزيارة. أخبرنا بالأوقات التي يجب أن تعود فيها إلى فندقك، وتحقق من أوضاع المواقع قبل الذهاب. وتُؤكَّد في عرض السعر ملاءمة محطة بعينها لنافذتك."],
          },
          {
            h: "الاستلام من الفندق قرب المنطقة المركزية",
            p: ["قد يكون وصول السيارات قرب المسجد النبوي مقيدًا في أوقات الازدحام، فقد تكون نقطة الاستلام على بعد مشي قصير من فندقك. اسأل فندقك عن نقطة الاستلام الموصى بها وأضفها إلى استفسارك."],
          },
        ],
        checklist: {
          h: "ما الذي تضيفه إلى طلب نقل زيارات المدينة",
          items: ["التاريخ ووقت البدء والفندق مع نصيحة الفندق عن نقطة الاستلام", "المواقع التي تريد زيارتها بالترتيب", "الوقت الذي يجب أن تعود فيه", "عدد الأشخاص، ومنهم كبار السن والأطفال", "هل لديك مرشد خاص بك"],
        },
        faqs: [
          { q: "هل توفرون مرشدًا؟", a: "لا. توفر RideSaudi النقل الخاص فقط. ويمكنك ترتيب مرشد بشكل منفصل." },
          { q: "هل يمكنني زيارة قباء والقبلتين وأحد في رحلة واحدة؟", a: "يمكنك طلب عدة محطات. اذكرها بالترتيب مع توقيتك، وتُؤكَّد في عرض السعر ملاءمتها لنافذتك." },
          { q: "هل يمكنكم استلامنا من قرب المسجد النبوي؟", a: "قد يكون الوصول بالسيارات قريبًا منه مقيدًا في أوقات الازدحام. اسأل فندقك عن أفضل نقطة استلام وأضفها إلى استفسارك." },
          { q: "هل يوجد سعر ثابت منشور؟", a: "لا. تُسعَّر كل رحلة زيارة على حدة." },
        ],
      },
    },
  },
];
