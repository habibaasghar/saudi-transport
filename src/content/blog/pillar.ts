import type { BlogPost } from "./types";

const S = "services";
const I = `${S}/intercity-transfers`;
const D = "2026-11-18";

/**
 * Pillar guide: private transport in Saudi Arabia (Stage 5, item A1).
 * Facts used here are only those already verified on the live route pages (distances from routing,
 * driving times from Google Maps, checked November 2026) and the owner-confirmed policies
 * (cancellation at least 24 hours before pickup; payment link, STC Pay or cash).
 * No prices, no vehicle capacities, no waiting-time or 24/7 claims, no rail timetables or fares.
 */
export const pillarPost: BlogPost = {
  slug: "private-transport-saudi-arabia-guide",
  published: D,
  updated: D,
  links: [
    S,
    `${S}/airport-transfers`,
    I,
    `${S}/umrah-transport`,
    `${S}/chauffeur-services`,
    "fleet",
    `${I}/makkah-to-madinah`,
    `${I}/riyadh-to-dammam`,
    `${S}/umrah-transport/private-umrah-chauffeur`,
    `${S}/special-transportation/senior-friendly-transportation`,
    `${S}/special-transportation/bilingual-chauffeur`,
    `${S}/special-transportation/hotel-transportation`,
  ],
  copy: {
    en: {
      nav: "Private transport in Saudi Arabia",
      title: "Private Transport in Saudi Arabia: Full Guide",
      description: "How private transfers work in Saudi Arabia: airport pickups, intercity routes, Umrah journeys, vehicles, real driving times, and how to book.",
      h1: "Private transport in Saudi Arabia: how it works and how to plan it",
      answer:
        "Private transport in Saudi Arabia means a pre-booked car with a driver reserved for your party only, from a set pickup to a set destination or for a set number of hours. It suits airport arrivals, Umrah journeys and intercity trips such as Makkah to Madinah (about 436 km). You send the journey details, receive a quotation, and the trip is confirmed when you accept it.",
      summary: "What a private transfer is, when it beats a train or flight, real driving times on the main routes, and how booking works.",
      sections: [
        {
          h: "What a private transfer is, and what it is not",
          p: [
            "A private transfer is one vehicle and one driver for your group. Nobody else is picked up on the way, and the car does not wait for other passengers to fill seats. It is booked in advance, so the vehicle category, pickup point and time are agreed before the day.",
            "It is different from a shared shuttle, where you buy a seat, and from ride-hailing, where you request a car on the spot and take whatever arrives. It is also different from self-drive rental: you never drive, which matters on long desert highways and in busy areas near the Haram.",
            "RideSaudi is a booking and enquiry service. You send your journey to us, we quote it, and the trip is carried out by the transport partners we book with. The quotation names the vehicle category for your date, so you know what is arranged before you commit.",
          ],
        },
        {
          h: "The kinds of journey people book",
          p: ["Most private bookings in Saudi Arabia fall into one of these patterns. Each has its own page with the details that matter for that trip:"],
          list: [
            "Airport transfers: pickup at arrivals or drop-off for a departure, at Riyadh, Jeddah, Madinah, Dammam, Taif, AlUla and other airports",
            "Intercity transfers: city to city by road, such as Jeddah to Makkah, Makkah to Madinah or Riyadh to Dammam",
            "Umrah transport: Jeddah airport to your Makkah hotel, the Makkah to Madinah leg, and ziyarat visits in both cities",
            "Chauffeur by the hour or day: one car and driver for meetings, shopping or several stops in a city",
            "Groups and events: families, delegations, weddings and event guests who need one or more vehicles",
          ],
        },
        {
          h: "Train, flight, taxi or private car: an honest comparison",
          p: [
            "A private car is not always the fastest or the cheapest choice, and you should compare before you book. The Haramain High Speed Railway links Makkah, Jeddah (including a station at King Abdulaziz International Airport), King Abdullah Economic City and Madinah. A passenger rail line also links Riyadh and Dammam. For a solo traveller with light luggage going between stations, the train is often the simplest option.",
            "On the longest routes, a domestic flight is usually quicker for one or two people. Riyadh to Jeddah is about 955 km by road, close to ten hours of driving before stops, so the car only makes sense if you want a door-to-door road journey, are travelling as a family, or have reasons to avoid flying.",
            "A private car earns its place in a few situations: door to door with no transfer at either end, families and groups sharing one vehicle, plenty of luggage, very early or late timings, elderly passengers who should not change vehicles, and trips with stops on the way. Count the whole journey, including getting to and from stations and airports, and the number of tickets you would need.",
          ],
        },
        {
          h: "Choosing a vehicle",
          p: [
            "Bookings are quoted in three main vehicle types, each with a driver: a sedan for one to a few passengers with light luggage, a GMC Yukon SUV for families and long intercity routes, and a Hyundai Staria van for larger families and groups with luggage.",
            "Seat counts and luggage space depend on the model year and seat layout, so the usable capacity is confirmed for the actual vehicle in your quotation rather than printed as a fixed number. Count passengers and bags honestly, including children and pushchairs, and say if anyone needs extra room.",
          ],
        },
        {
          h: "Airports: what to arrange before you land",
          p: [
            "The main international gateways are King Khalid International Airport in Riyadh, King Abdulaziz International Airport in Jeddah, Prince Mohammad bin Abdulaziz International Airport in Madinah and King Fahd International Airport in Dammam. Pilgrims flying in for Umrah usually land in Jeddah or Madinah.",
            "Give your flight number, the terminal if you know it, and the number of passengers and bags. Ask how waiting time is handled if your flight is delayed, and get the answer in your quotation. For departures, work back from your flight time and allow for traffic and check-in, especially from Makkah or Madinah to Jeddah airport.",
          ],
        },
        {
          h: "Umrah journeys: Makkah and Madinah",
          p: [
            "Vehicle access close to the Masjid al-Haram in Makkah and the Prophet's Mosque in Madinah is restricted at busy times. Your driver may not be able to stop at the hotel door, and a short walk may be needed. Ask your hotel for its recommended pickup and drop-off point and include it in your enquiry.",
            "Entry to Makkah is restricted to Muslims. If anyone in your party is not Muslim, say so when you enquire so that the route is planned accordingly. If you need to stop at a miqat on the way to Makkah, mention it as well, and confirm the correct miqat with a scholar.",
            "Many families book the full sequence together: Jeddah airport to Makkah, Makkah to Madinah, and Madinah back to Jeddah airport. Quoting it as one plan helps keep timings realistic between the legs.",
          ],
        },
        {
          h: "Long drives: plan for the road, not just the map",
          p: [
            "The driving times on this page are without stops. On anything over about four hours, add time for prayer, rest and meals. Riyadh to Makkah (about 871 km) and Riyadh to Jeddah (about 955 km) are full days on the road and are best started early.",
            "If you want to break a long journey with a planned stop, or see something on the way, ask for it in the enquiry. Stops are confirmed in the quotation.",
          ],
        },
        {
          h: "Special requests",
          p: [
            "Tell us about any needs at the start, because they affect the vehicle and the plan. Older passengers may need a lower step, extra time and a pickup point close to the door. You can ask for a driver who speaks a particular language alongside Arabic; whether that is possible is confirmed per booking. Hotels and travel agents can arrange transport for guests. If you need child seats or mobility support, ask, and the quotation will state what can be provided.",
          ],
        },
        {
          h: "How booking works",
          p: ["Booking is enquiry first, then quotation, then confirmation. Nothing is confirmed until you accept the quotation."],
          list: [
            "Send your pickup, destination, date and time, passengers, luggage, vehicle preference, and whether it is one way or return",
            "Receive a quotation that names the vehicle category, the price and what is included",
            "Accept the quotation to confirm the booking",
            "Pay by payment link, STC Pay or cash",
            "Cancel at least 24 hours before pickup if your plans change",
          ],
        },
      ],
      table: {
        h: "Main routes at a glance",
        head: ["Route", "Road distance", "Driving time, no stops", "Main road"],
        rows: [
          ["Jeddah to Makkah", "About 88 km", "About 1 h", "Route 40"],
          ["Makkah to Jeddah airport", "About 98 km", "About 1 h 05 min", "Route 40"],
          ["Jeddah to Taif", "About 171 km", "About 1 h 55 min", "Coastal highway, then a mountain climb"],
          ["Jeddah to Madinah", "About 404 km", "About 4 h 07 min", "Mostly Route 15"],
          ["Riyadh to Dammam", "About 410 km", "About 3 h 55 min", "Route 40"],
          ["Makkah to Madinah", "About 436 km", "About 4 h 20 min", "Route 15"],
          ["Riyadh to Makkah", "About 871 km", "About 9 h 03 min", "Route 40"],
          ["Riyadh to Jeddah", "About 955 km", "About 9 h 48 min", "Route 40"],
        ],
      },
      faqs: [
        { q: "Is a private transfer in Saudi Arabia shared with other passengers?", a: "No. The vehicle is reserved for your party only. RideSaudi does not sell shared seats or combine separate bookings in one car." },
        { q: "Is a private car faster than the Haramain train between Makkah and Madinah?", a: "Not usually for the time on board. The car is door to door, which removes transfers to and from stations, and suits families with luggage. Compare the whole journey." },
        { q: "How far is Makkah from Madinah by road?", a: "About 436 km on Route 15, around 4 hours 20 minutes of driving without stops (Google Maps, checked November 2026)." },
        { q: "Which vehicle should a family of five with luggage ask for?", a: "Usually a GMC Yukon or a Hyundai Staria. State the number of passengers and bags; the usable capacity is confirmed for the actual vehicle in your quotation." },
        { q: "Are prices published?", a: "No. Prices depend on route, date, vehicle and timing, so each journey is quoted individually." },
        { q: "How do I pay, and can I cancel?", a: "Payment is by payment link, STC Pay or cash. You can cancel at least 24 hours before pickup." },
      ],
    },
    ar: {
      nav: "التوصيل الخاص في السعودية",
      title: "التوصيل الخاص في السعودية: دليل شامل",
      description: "كيف يعمل التوصيل الخاص في السعودية: الاستقبال من المطار، والمشاوير بين المدن، ورحلات العمرة، واختيار السيارة، والمسافات الحقيقية، وطريقة الحجز.",
      h1: "التوصيل الخاص في السعودية: كيف يعمل وكيف تخطط له",
      answer:
        "التوصيل الخاص في السعودية سيارة مع سائق تحجزها مسبقًا لك ولمن معك فقط، من نقطة استلام محددة إلى وجهة محددة أو لعدد ساعات متفق عليه. ويناسب الوصول إلى المطار ورحلات العمرة والمشاوير بين المدن مثل مكة إلى المدينة (نحو 436 كم). ترسل تفاصيل رحلتك، فيصلك عرض سعر، ويُؤكَّد الحجز عند قبولك له.",
      summary: "ما التوصيل الخاص، ومتى يكون أنسب من القطار أو الطيران، وأزمنة القيادة الفعلية على أهم المسارات، وكيف يتم الحجز.",
      sections: [
        {
          h: "ما التوصيل الخاص، وما الذي لا يشمله",
          p: [
            "التوصيل الخاص سيارة واحدة وسائق واحد لمجموعتك. لا يُركَب معكم أحد في الطريق، ولا تنتظر السيارة اكتمال المقاعد. ويُحجز مسبقًا، فتُتفق فئة السيارة ونقطة الاستلام والموعد قبل يوم الرحلة.",
            "وهو يختلف عن الحافلات المشتركة التي تشتري فيها مقعدًا، وعن تطبيقات التوصيل التي تطلب فيها سيارة فورًا وتركب ما يصل. ويختلف أيضًا عن استئجار سيارة تقودها بنفسك؛ فأنت لا تقود أبدًا، وهذا مهم على الطرق الصحراوية الطويلة وفي الزحام حول الحرم.",
            "تعمل RideSaudi خدمةً للحجز واستقبال الطلبات: ترسل إلينا رحلتك فنرسل لك عرض السعر، وتُنفَّذ الرحلة عبر شركاء النقل الذين نحجز معهم. ويذكر عرض السعر فئة السيارة لتاريخك، فتعرف ما الذي رُتِّب قبل أن تلتزم.",
          ],
        },
        {
          h: "أنواع الرحلات التي يحجزها الناس",
          p: ["أغلب حجوزات التوصيل الخاص في السعودية تندرج تحت أحد هذه الأنواع، ولكل نوع صفحته التي تشرح ما يهم في تلك الرحلة:"],
          list: [
            "التوصيل من المطار وإليه: استقبال عند صالة الوصول أو توصيل لموعد إقلاع، في مطارات الرياض وجدة والمدينة المنورة والدمام والطائف والعلا وغيرها",
            "المشاوير بين المدن: من مدينة إلى أخرى برًّا، مثل جدة إلى مكة، ومكة إلى المدينة، والرياض إلى الدمام",
            "توصيل العمرة: من مطار جدة إلى فندقك في مكة، ومرحلة مكة إلى المدينة، والزيارات في المدينتين",
            "سيارة مع سائق بالساعة أو باليوم: سيارة وسائق للاجتماعات أو التسوق أو عدة مشاوير داخل المدينة",
            "المجموعات والمناسبات: العائلات والوفود وضيوف الأعراس والفعاليات ممن يحتاجون سيارة أو أكثر",
          ],
        },
        {
          h: "القطار أم الطيران أم التاكسي أم السيارة الخاصة: مقارنة صادقة",
          p: [
            "السيارة الخاصة ليست دائمًا الأسرع ولا الأرخص، فقارن قبل أن تحجز. يربط قطار الحرمين السريع مكة المكرمة وجدة (وفيه محطة في مطار الملك عبدالعزيز الدولي) ومدينة الملك عبدالله الاقتصادية والمدينة المنورة. ويربط خط ركاب آخر بين الرياض والدمام. وللمسافر المنفرد بحقائب قليلة بين محطتين، يكون القطار غالبًا الخيار الأبسط.",
            "وعلى أطول المسارات يكون الطيران الداخلي عادةً أسرع لشخص أو شخصين. فالرياض إلى جدة نحو 955 كم برًّا، أي قرابة عشر ساعات قيادة قبل التوقفات، ولا تكون السيارة منطقية إلا إذا أردت رحلة برية من الباب إلى الباب، أو كنت مسافرًا مع عائلتك، أو لديك سبب لتجنب الطيران.",
            "وتثبت السيارة الخاصة جدواها في حالات محددة: من الباب إلى الباب دون تبديل وسيلة في البداية أو النهاية، والعائلات والمجموعات في سيارة واحدة، والحقائب الكثيرة، والمواعيد المبكرة جدًا أو المتأخرة، وكبار السن الذين لا يناسبهم تغيير المركبة، والرحلات التي فيها توقفات. احسب الرحلة كاملة، بما فيها الوصول إلى المحطات والمطارات ومنها، وعدد التذاكر التي ستحتاجها.",
          ],
        },
        {
          h: "اختيار السيارة",
          p: [
            "تُسعَّر الحجوزات بثلاثة أنواع رئيسية من السيارات، وكلها مع سائق: سيدان لراكب أو بضعة ركاب بحقائب خفيفة، وجمس يوكن للعائلات والمسافات الطويلة بين المدن، وهيونداي ستاريا للعائلات الكبيرة والمجموعات مع الحقائب.",
            "يختلف عدد المقاعد ومساحة الحقائب بحسب سنة الصنع وتوزيع المقاعد، لذلك تُؤكَّد السعة الفعلية للسيارة المخصصة لك في عرض السعر بدل نشر رقم ثابت. احسب الركاب والحقائب بدقة، ومنهم الأطفال وعربات الأطفال، واذكر إن كان أحد يحتاج مساحة إضافية.",
          ],
        },
        {
          h: "المطارات: ما الذي ترتبه قبل أن تهبط",
          p: [
            "أهم المطارات الدولية: مطار الملك خالد الدولي في الرياض، ومطار الملك عبدالعزيز الدولي في جدة، ومطار الأمير محمد بن عبدالعزيز الدولي في المدينة المنورة، ومطار الملك فهد الدولي في الدمام. ويصل المعتمرون عادةً عبر جدة أو المدينة المنورة.",
            "أرسل رقم رحلتك والصالة إن عرفتها وعدد الركاب والحقائب. واسأل كيف يُحتسب الانتظار إذا تأخرت رحلتك، واطلب أن تكون الإجابة في عرض السعر. ولرحلات المغادرة، احسب موعد الانطلاق رجوعًا من موعد الإقلاع مع وقت للزحام وإجراءات السفر، خصوصًا من مكة أو المدينة إلى مطار جدة.",
          ],
        },
        {
          h: "رحلات العمرة: مكة المكرمة والمدينة المنورة",
          p: [
            "يُقيَّد دخول السيارات قرب المسجد الحرام في مكة والمسجد النبوي في المدينة في أوقات الذروة، فقد لا يستطيع السائق التوقف عند باب الفندق وقد تحتاج إلى مشي قصير. اسأل فندقك عن النقطة التي يوصي بها للاستلام والتنزيل، واذكرها في طلبك.",
            "دخول مكة المكرمة مقصور على المسلمين. فإن كان في مجموعتك من ليس مسلمًا فأخبرنا عند الطلب ليُخطَّط المسار على هذا الأساس. وإن احتجت إلى التوقف عند الميقات في الطريق إلى مكة فاذكر ذلك أيضًا، وتأكد من الميقات الصحيح لدى أهل العلم.",
            "تحجز عائلات كثيرة الرحلة كاملة دفعة واحدة: من مطار جدة إلى مكة، ثم من مكة إلى المدينة، ثم من المدينة إلى مطار جدة. وتسعير الخطة كاملة يساعد على ضبط مواعيد واقعية بين المراحل.",
          ],
        },
        {
          h: "الرحلات الطويلة: خطط للطريق لا للخريطة فقط",
          p: [
            "أزمنة القيادة في هذه الصفحة بلا توقفات. وفي أي رحلة تزيد على أربع ساعات تقريبًا أضف وقتًا للصلاة والراحة والطعام. فالرياض إلى مكة (نحو 871 كم) والرياض إلى جدة (نحو 955 كم) يوم كامل على الطريق، والأفضل أن تبدأ مبكرًا.",
            "وإن أردت تقسيم الرحلة الطويلة بتوقف مخطط أو زيارة مكان في الطريق، فاطلب ذلك في طلبك، وتُؤكَّد التوقفات في عرض السعر.",
          ],
        },
        {
          h: "الطلبات الخاصة",
          p: [
            "أخبرنا باحتياجاتك من البداية لأنها تؤثر في اختيار السيارة والخطة. فكبار السن قد يحتاجون درجة صعود منخفضة ووقتًا أطول ونقطة استلام قريبة من الباب. ويمكنك طلب سائق يتحدث لغة معينة إلى جانب العربية، ويُؤكَّد ذلك لكل حجز. ويمكن للفنادق ووكالات السفر ترتيب التوصيل لضيوفها. وإن احتجت مقاعد أطفال أو دعمًا للحركة فاسأل، وسيذكر عرض السعر ما يمكن توفيره.",
          ],
        },
        {
          h: "كيف يتم الحجز",
          p: ["الحجز يبدأ بالطلب ثم عرض السعر ثم التأكيد، ولا يُؤكَّد شيء قبل قبولك لعرض السعر."],
          list: [
            "أرسل نقطة الاستلام والوجهة والتاريخ والوقت وعدد الركاب والحقائب والسيارة المفضلة، وهل الرحلة ذهاب فقط أم ذهاب وعودة",
            "يصلك عرض سعر يذكر فئة السيارة والسعر وما يشمله",
            "اقبل عرض السعر لتأكيد الحجز",
            "ادفع عبر رابط الدفع أو STC Pay أو نقدًا",
            "يمكنك الإلغاء قبل موعد الاستلام بـ24 ساعة على الأقل إذا تغيرت خطتك",
          ],
        },
      ],
      table: {
        h: "أهم المسارات باختصار",
        head: ["المسار", "المسافة بالطريق", "زمن القيادة بلا توقف", "الطريق الرئيسي"],
        rows: [
          ["جدة إلى مكة", "نحو 88 كم", "نحو ساعة", "طريق 40"],
          ["مكة إلى مطار جدة", "نحو 98 كم", "نحو ساعة و5 دقائق", "طريق 40"],
          ["جدة إلى الطائف", "نحو 171 كم", "نحو ساعة و55 دقيقة", "طريق ساحلي ثم صعود جبلي"],
          ["جدة إلى المدينة", "نحو 404 كم", "نحو 4 ساعات و7 دقائق", "طريق 15 في معظمه"],
          ["الرياض إلى الدمام", "نحو 410 كم", "نحو 3 ساعات و55 دقيقة", "طريق 40"],
          ["مكة إلى المدينة", "نحو 436 كم", "نحو 4 ساعات و20 دقيقة", "طريق 15"],
          ["الرياض إلى مكة", "نحو 871 كم", "نحو 9 ساعات و3 دقائق", "طريق 40"],
          ["الرياض إلى جدة", "نحو 955 كم", "نحو 9 ساعات و48 دقيقة", "طريق 40"],
        ],
      },
      faqs: [
        { q: "هل يُشارك التوصيل الخاص في السعودية مع ركاب آخرين؟", a: "لا. السيارة محجوزة لك ولمن معك فقط، ولا تبيع RideSaudi مقاعد مشتركة ولا تجمع حجوزات مختلفة في سيارة واحدة." },
        { q: "هل السيارة الخاصة أسرع من قطار الحرمين بين مكة والمدينة؟", a: "ليست أسرع عادةً في زمن الرحلة نفسها، لكنها من الباب إلى الباب فتغنيك عن التنقل من المحطات وإليها، وتناسب العائلات مع الحقائب. قارن الرحلة كاملة." },
        { q: "كم المسافة بين مكة والمدينة بالسيارة؟", a: "نحو 436 كم عبر طريق 15، أي قرابة 4 ساعات و20 دقيقة قيادة بلا توقف (خرائط Google، تحقق في نوفمبر 2026)." },
        { q: "أي سيارة تطلبها عائلة من خمسة أشخاص معها حقائب؟", a: "غالبًا جمس يوكن أو هيونداي ستاريا. اذكر عدد الركاب والحقائب، وتُؤكَّد السعة الفعلية للسيارة في عرض السعر." },
        { q: "هل الأسعار منشورة؟", a: "لا. يعتمد السعر على المسار والتاريخ والسيارة والتوقيت، لذلك تُسعَّر كل رحلة على حدة." },
        { q: "كيف أدفع، وهل يمكنني الإلغاء؟", a: "الدفع عبر رابط الدفع أو STC Pay أو نقدًا، ويمكنك الإلغاء قبل موعد الاستلام بـ24 ساعة على الأقل." },
      ],
    },
  },
};
