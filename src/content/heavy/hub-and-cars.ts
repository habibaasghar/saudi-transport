import type { ServicePage } from "../types";
import { CARS, CRANE, EXCAVATOR, FLATBED, HEAVY, HT, LOADER, LOWBED, SATHA, heavyPage } from "./shared";

/** Category hub + vehicle (satha / car) pages. */
export const heavyHubAndCars: ServicePage[] = [
  heavyPage(HT, "services", undefined, [`${SATHA}/riyadh`, `${SATHA}/jeddah`, `${SATHA}/dammam`, `${HEAVY}/riyadh`, `${HEAVY}/jeddah`, `${HEAVY}/dammam`, EXCAVATOR, LOADER, CRANE], {
    nav: "Heavy Transport & Recovery",
    title: "Heavy Transport & Satha Recovery in Saudi Arabia",
    description: "Satha car recovery, lowbed and flatbed haulage, and excavator, shuwel, forklift and crane transport across Saudi Arabia. Send the load details for a quote.",
    h1: "Heavy Transport, Satha Recovery and Machinery Haulage in Saudi Arabia",
    eyebrow: "Recovery · Lowbed · Machinery",
    answer: "RideSaudi arranges road transport for loads that cannot travel on their own: broken-down and accident cars on a satha, and construction or industrial machinery on flatbed and lowbed trailers. Coverage focuses on Riyadh, Jeddah, Dammam and their surrounding industrial areas, with intercity moves across the Kingdom. Every job is quoted from the load's weight, size and route.",
    summary: "Car recovery by satha, lowbed and flatbed haulage, and machinery transport between Saudi cities and project sites.",
    sections: [
      {
        h: "Which service do you need?",
        p: [
          "Start with what is being moved, not with the truck. A car that will not start needs a satha (a flatbed recovery truck) and goes on the vehicle recovery side. A machine on tracks, a loader, a forklift or a generator goes on the machinery side, where the weight and the transport height decide between a flatbed trailer and a lowbed.",
          "If you are unsure, send a photo and the model plate. The model number usually tells us the operating weight, and that one figure narrows the choice more than anything else.",
        ],
        list: [
          "Car broken down, accident damaged or not drivable: satha car recovery",
          "Car that runs but must go to another city without being driven: car transport between cities",
          "Excavator, bulldozer, wheel loader (shuwel), grader or roller: heavy equipment transport on a lowbed",
          "Steel, pipes, cabins and smaller machines that fit within normal height: flatbed trailer",
          "Anything wider, taller or heavier than standard road limits: oversized load transport with permits",
        ],
      },
      {
        h: "Where RideSaudi arranges heavy transport",
        p: [
          "Most requests start or end in three regions: Riyadh with its industrial cities and the projects around the capital; Jeddah, the Red Sea port and the corridor north to King Abdullah Economic City, Rabigh and Yanbu; and Dammam with Al Khobar, Jubail and the Eastern Province industrial belt.",
          "Moves between these regions, and from them to project areas elsewhere in the Kingdom, are arranged per job. Tell us both locations as precisely as you can; the access road at each end matters as much as the distance between them.",
        ],
      },
      {
        h: "Satha, flatbed or lowbed: the short version",
        p: [
          "A satha is a rigid recovery truck with a tilting or sliding deck that carries one car, sometimes two small ones. A flatbed trailer is a long, flat semi-trailer for cargo and lighter machines. A lowbed has its deck dropped between the gooseneck and the rear axles, so tall and heavy machines sit lower and stay within height limits.",
          "Which one is right depends on the machine's weight, its height once loaded, how it gets on the deck, and the route. The detailed comparison is on the lowbed and flatbed pages.",
        ],
      },
      {
        h: "What we will not promise",
        p: [
          "RideSaudi does not publish fixed prices, guaranteed arrival times or round-the-clock dispatch, because they depend on the truck that is free near your load at that moment. We do not offer roadside repairs, fuel delivery or battery jump-starts. What we do is match the right truck or trailer to your load and confirm price and timing before anything moves.",
        ],
      },
    ],
    table: {
      h: "Truck and trailer types at a glance",
      head: ["Equipment", "Typical loads", "How the load gets on", "Main limit"],
      rows: [
        ["Satha (car recovery truck)", "Cars, SUVs, pickups", "Deck tilts or slides; winch pulls the car up", "One vehicle, light weight"],
        ["Flatbed trailer", "Steel, pipes, cabins, forklifts, small machines", "Crane or forklift from the side or top", "Load height: the deck is high"],
        ["Lowbed trailer", "Excavators, loaders, dozers, rollers, cranes", "Machine drives up rear ramps, or crane lift", "Weight per axle and overall width"],
        ["Extendable / multi-axle lowbed", "Long or very heavy machines and components", "Ramps or crane, planned per load", "Permits, escort and route survey"],
      ],
    },
    checklist: {
      h: "Send these details for a fast, accurate quote",
      items: [
        "What is being moved: type, make and model",
        "Approximate weight (machine plate or brochure figure)",
        "Length, width and height in the transport position",
        "Exact pickup and drop-off locations, with site access notes",
        "Whether it runs, and how it can be loaded and unloaded",
        "The date it must move, and photos if you have them",
      ],
    },
    faqs: [
      { q: "Does RideSaudi handle both car recovery and heavy machinery?", a: "Yes. Cars that cannot be driven go on a satha; machinery and heavy cargo go on flatbed or lowbed trailers. The quote form changes its questions depending on which one you choose." },
      { q: "Which cities does RideSaudi cover for heavy transport?", a: "Requests are focused on Riyadh, Jeddah and Dammam and the industrial areas around them, including Al Kharj, Rabigh, Yanbu, Al Khobar and Jubail. Intercity and project-site moves elsewhere in Saudi Arabia are quoted per job." },
      { q: "Can I get a heavy transport price online?", a: "No fixed price is published. The cost depends on the weight, the dimensions, the distance, loading at each end and any permit or escort. Send the details and you receive a quotation before anything is arranged." },
      { q: "What is the difference between a satha and a lowbed?", a: "A satha is a recovery truck that carries a car. A lowbed is a semi-trailer with a dropped deck, built for heavy and tall machines such as excavators and loaders." },
      { q: "Can I send photos of the load?", a: "Yes. After you submit the form you get a reference number and a WhatsApp link to send photos of the load, the machine plate or site access." },
    ],
  }, {
    nav: "النقل الثقيل والسطحات",
    title: "نقل ثقيل وسطحات ولوبد في السعودية",
    description: "سطحة لنقل السيارات المعطلة، ونقل بالتريلا السطحة واللوبد، ونقل الحفارات والشيولات والرافعات الشوكية والكرينات بين مدن السعودية. أرسل تفاصيل الحمولة لعرض سعر.",
    h1: "النقل الثقيل وسطحات نقل السيارات ونقل المعدات في السعودية",
    eyebrow: "سطحات · لوبد · معدات ثقيلة",
    answer: "ترتب RideSaudi نقل ما لا يستطيع السير بنفسه: السيارات المعطلة والمصدومة على سطحة، والمعدات الإنشائية والصناعية على تريلا سطحة أو لوبد. نركز على الرياض وجدة والدمام والمناطق الصناعية حولها، مع النقل بين المدن في أنحاء المملكة. كل عملية تُسعَّر حسب الوزن والمقاسات والمسار.",
    summary: "سطحة لنقل السيارات، ونقل باللوبد والتريلا السطحة، ونقل المعدات بين مدن السعودية ومواقع المشاريع.",
    sections: [
      {
        h: "أي خدمة تحتاج؟",
        p: [
          "ابدأ بما تريد نقله وليس بنوع الشاحنة. السيارة التي لا تشتغل تحتاج سطحة، وتندرج تحت نقل السيارات. أما المعدة على جنزير أو الشيول أو الرافعة الشوكية أو المولد فتندرج تحت نقل المعدات، وهنا يحدد الوزن والارتفاع وقت التحميل هل تكفي تريلا سطحة أم يلزم لوبد.",
          "إذا لم تكن متأكدًا، أرسل صورة للمعدة ولوحة الموديل. رقم الموديل يكشف غالبًا وزن التشغيل، وهذا الرقم وحده يحسم الاختيار في أغلب الحالات.",
        ],
        list: [
          "سيارة معطلة أو مصدومة أو لا يمكن قيادتها: سطحة نقل سيارات",
          "سيارة سليمة تريد نقلها لمدينة أخرى بدون قيادتها: نقل السيارات بين المدن",
          "حفار أو دركتر أو شيول أو قريدر أو حدلة: نقل معدات ثقيلة باللوبد",
          "حديد ومواسير وكبائن ومعدات صغيرة ضمن الارتفاع العادي: تريلا سطحة",
          "أي حمولة أعرض أو أعلى أو أثقل من الحدود النظامية: نقل حمولات استثنائية بتصريح",
        ],
      },
      {
        h: "أين نرتب النقل الثقيل",
        p: [
          "معظم الطلبات تبدأ أو تنتهي في ثلاث مناطق: الرياض ومدنها الصناعية ومشاريعها، وجدة وميناؤها والممر الشمالي إلى مدينة الملك عبدالله الاقتصادية ورابغ وينبع، والدمام مع الخبر والجبيل والحزام الصناعي في المنطقة الشرقية.",
          "النقل بين هذه المناطق، ومنها إلى مواقع المشاريع في باقي المملكة، يُرتب لكل عملية على حدة. حدد الموقعين بأدق ما يمكن، فطريق الوصول عند كل طرف مهم بقدر المسافة نفسها.",
        ],
      },
      {
        h: "سطحة أم تريلا سطحة أم لوبد: باختصار",
        p: [
          "السطحة شاحنة إنقاذ بصندوق يميل أو ينزلق، تحمل سيارة واحدة وأحيانًا سيارتين صغيرتين. التريلا السطحة مقطورة طويلة مستوية للبضائع والمعدات الأخف. أما اللوبد فأرضيته منخفضة بين رقبة التريلا والمحاور الخلفية، فتجلس المعدات العالية والثقيلة أقرب للأرض وتبقى ضمن حدود الارتفاع.",
          "الاختيار الصحيح يعتمد على وزن المعدة وارتفاعها بعد التحميل وطريقة صعودها والمسار. المقارنة التفصيلية في صفحتي اللوبد والتريلا السطحة.",
        ],
      },
      {
        h: "ما الذي لا نعد به",
        p: [
          "لا تنشر RideSaudi أسعارًا ثابتة ولا مواعيد وصول مضمونة ولا خدمة على مدار الساعة، لأنها تعتمد على الشاحنة المتاحة قرب حمولتك في ذلك الوقت. ولا نقدم إصلاحًا على الطريق أو توصيل وقود أو اشتراك بطارية. ما نقدمه هو اختيار الشاحنة أو التريلا المناسبة لحمولتك وتأكيد السعر والموعد قبل التحرك.",
        ],
      },
    ],
    table: {
      h: "أنواع الشاحنات والتريلات باختصار",
      head: ["المعدة", "الحمولات المعتادة", "طريقة التحميل", "القيد الأساسي"],
      rows: [
        ["سطحة نقل سيارات", "سيارات، جيبات، ونيتات", "الصندوق يميل أو ينزلق والونش يسحب السيارة", "سيارة واحدة ووزن خفيف"],
        ["تريلا سطحة", "حديد، مواسير، كبائن، رافعات شوكية، معدات صغيرة", "كرين أو رافعة شوكية من الجنب أو الأعلى", "ارتفاع الحمولة لأن الأرضية عالية"],
        ["لوبد", "حفارات، شيولات، دركترات، حدلات، كرينات", "المعدة تصعد على الرامبات الخلفية أو ترفع بالكرين", "الوزن على كل محور والعرض الكلي"],
        ["لوبد قابل للتمديد أو متعدد المحاور", "معدات طويلة أو ثقيلة جدًا وقطع كبيرة", "رامبات أو كرين حسب كل حمولة", "التصاريح والمرافقة ودراسة المسار"],
      ],
    },
    checklist: {
      h: "أرسل هذه التفاصيل لعرض سعر سريع ودقيق",
      items: [
        "ما الذي سيُنقل: النوع والماركة والموديل",
        "الوزن التقريبي من لوحة المعدة أو الكتيّب",
        "الطول والعرض والارتفاع بوضعية النقل",
        "موقعا التحميل والتنزيل بالضبط مع ملاحظات الدخول للموقع",
        "هل تعمل المعدة، وكيف يمكن تحميلها وتنزيلها",
        "تاريخ النقل المطلوب، والصور إن توفرت",
      ],
    },
    faqs: [
      { q: "هل تقدم RideSaudi سطحات السيارات ونقل المعدات الثقيلة معًا؟", a: "نعم. السيارات التي لا يمكن قيادتها تُنقل بالسطحة، والمعدات والحمولات الثقيلة بالتريلا السطحة أو اللوبد. نموذج الطلب يغيّر أسئلته حسب الخدمة التي تختارها." },
      { q: "ما المدن التي تغطيها RideSaudi في النقل الثقيل؟", a: "نركز على الرياض وجدة والدمام والمناطق الصناعية حولها، ومنها الخرج ورابغ وينبع والخبر والجبيل. النقل بين المدن ولمواقع المشاريع في باقي المملكة يُسعَّر لكل عملية." },
      { q: "هل أستطيع معرفة سعر النقل الثقيل من الموقع مباشرة؟", a: "لا ننشر سعرًا ثابتًا. التكلفة تعتمد على الوزن والمقاسات والمسافة والتحميل عند كل طرف وأي تصريح أو مرافقة. أرسل التفاصيل ويصلك عرض السعر قبل ترتيب أي شيء." },
      { q: "ما الفرق بين السطحة واللوبد؟", a: "السطحة شاحنة إنقاذ تحمل سيارة. اللوبد مقطورة بأرضية منخفضة مصممة للمعدات الثقيلة والعالية مثل الحفارات والشيولات." },
      { q: "هل يمكنني إرسال صور الحمولة؟", a: "نعم. بعد إرسال النموذج يظهر لك رقم مرجعي ورابط واتساب لإرسال صور الحمولة أو لوحة المعدة أو مدخل الموقع." },
    ],
  }),

  heavyPage(SATHA, HT, "satha", [CARS, HT, LOWBED, HEAVY], {
    nav: "Satha Car Recovery",
    title: "Satha Car Recovery & Towing in Saudi Arabia",
    description: "Satha (flatbed tow truck) for broken-down and accident cars in Riyadh, Jeddah, Dammam and between cities. Hydraulic satha on request. Send your location for a quote.",
    h1: "Satha Car Recovery and Towing in Saudi Arabia",
    eyebrow: "Satha · car recovery",
    answer: "A satha is a flatbed recovery truck that lifts a car onto its deck, so the car travels with all four wheels off the road. RideSaudi arranges satha recovery for broken-down, accident-damaged and non-running cars in Riyadh, Jeddah, Dammam and between Saudi cities. Send your location pin and the car details; the price is confirmed before the satha is sent.",
    summary: "Flatbed satha recovery for cars that will not start, accident cars and cars that must not be driven, inside a city or between cities.",
    sections: [
      {
        h: "When you need a satha rather than a tow",
        p: [
          "In Saudi Arabia most car recovery is done by satha, not by towing on two wheels. Carrying the whole car on the deck avoids damage to the gearbox of automatic and four-wheel-drive cars, keeps a car with a broken wheel or axle off the road, and is the safer option for low or expensive cars.",
          "A wheel-lift tow truck (sometimes called a winch truck) can still be the practical choice for a short move out of a tight car park or basement where a satha cannot reach. Tell us where the car is standing and we will say which fits.",
        ],
        list: [
          "Car will not start or has stopped on the road",
          "Accident damage: car not safe or not legal to drive",
          "Moving a car to or from a workshop, body shop or agency",
          "Collecting a car from an auction, showroom or seller in another district",
          "Low, sports or luxury cars that need a gentle loading angle",
        ],
      },
      {
        h: "Regular satha or hydraulic satha?",
        p: [
          "A regular satha tilts its deck to make a ramp, and a winch pulls the car up. A hydraulic satha (often called satha hydraulic or a sliding bed) slides and lowers the deck almost to the ground, which gives a much flatter angle. That flatter angle matters for sports cars, lowered cars and cars with long front bumpers that would scrape on a steep ramp.",
          "Some customers also ask for an enclosed (covered) carrier for high-value cars travelling between cities. Mention it in your request; availability varies by city and date.",
        ],
      },
      {
        h: "What happens after an accident",
        p: [
          "If the accident has been reported, keep the report reference (Najm or the traffic police report) with you; workshops and insurers will ask for it. Do not move the car until the report process allows it. Once the car can be moved, tell us where it should go: home, a workshop, the agency or an insurance-approved repair shop.",
          "If the car is in a dangerous position on a highway, move yourself and your passengers to safety first. RideSaudi arranges the satha; we are not an emergency service.",
        ],
      },
      {
        h: "Inside the city and between cities",
        p: [
          "Most satha jobs are short: from a street, car park or workshop area to another point in the same city. Intercity satha jobs, such as a non-running car from Riyadh to Jeddah or from Dammam to Riyadh, are planned like a small freight move, often on a satha that carries more than one car. For cars that run but must not be driven the distance, see car transport between cities.",
        ],
      },
    ],
    table: {
      h: "Satha options compared",
      head: ["Option", "Best for", "Note"],
      rows: [
        ["Regular satha (tilting deck)", "Most broken-down and accident cars", "Winch pulls the car up the tilted deck"],
        ["Hydraulic / sliding satha", "Low, sports and luxury cars", "Deck lowers near the ground for a flat loading angle"],
        ["Wheel-lift tow truck", "Short moves out of tight spaces", "Two wheels stay on the road; not for every drivetrain"],
        ["Multi-car satha or carrier", "Several cars, or long intercity moves", "Planned per job; date confirmed in the quote"],
      ],
    },
    checklist: {
      h: "What to send when you need a satha",
      items: [
        "Your location pin (WhatsApp location or a Google Maps link)",
        "Car make, model and colour",
        "What is wrong: will not start, accident damage, flat tyres, locked steering",
        "Whether the car is in a basement, car park or on a main road",
        "Where the car should go, and when",
      ],
    },
    faqs: [
      { q: "What is a satha?", a: "Satha (سطحة) is the Saudi word for a flatbed recovery truck. The car is pulled or driven onto the deck and carried with all four wheels off the road." },
      { q: "Do you send a hydraulic satha for low cars?", a: "Yes, on request. A hydraulic or sliding satha lowers its deck close to the ground for a flat loading angle. Mention the car model so the right truck is matched." },
      { q: "Can a satha move a car that is locked or in park?", a: "Often yes, using wheel skates or by lifting, but tell us beforehand. A car with locked steering or a jammed gearbox needs the right equipment on the truck." },
      { q: "Do you repair cars on the road or bring fuel?", a: "No. RideSaudi arranges recovery and transport only. There are no roadside repairs, battery jump-starts or fuel delivery." },
      { q: "How is the satha price worked out?", a: "By the distance from the satha's position to the car and on to the destination, the car's condition and access, and the time. You receive the price before the satha is sent." },
    ],
  }, {
    nav: "سطحة نقل سيارات",
    title: "سطحة نقل سيارات ونقل السيارات المعطلة",
    description: "سطحة لنقل السيارات المعطلة والمصدومة في الرياض وجدة والدمام وبين المدن، وسطحة هيدروليك عند الطلب. أرسل موقعك وتفاصيل السيارة لعرض السعر.",
    h1: "سطحة نقل السيارات المعطلة والمصدومة في السعودية",
    eyebrow: "سطحات · نقل سيارات",
    answer: "السطحة شاحنة إنقاذ بصندوق مستوٍ تُرفع عليه السيارة كاملة، فتُنقل وعجلاتها الأربع فوق الطريق. ترتب RideSaudi سطحات لنقل السيارات المعطلة والمصدومة والتي لا تشتغل في الرياض وجدة والدمام وبين المدن. أرسل موقعك وتفاصيل السيارة، ونؤكد السعر قبل إرسال السطحة.",
    summary: "سطحة لنقل السيارة المعطلة أو المصدومة أو التي لا يصح قيادتها، داخل المدينة أو بين المدن.",
    sections: [
      {
        h: "متى تحتاج سطحة وليس سحبًا",
        p: [
          "في السعودية يتم نقل السيارات المعطلة غالبًا بالسطحة وليس بالسحب على عجلتين. حمل السيارة كاملة على الصندوق يحمي قير السيارات الأوتوماتيك والدفع الرباعي، ويبعد السيارة التي فيها عجلة أو مقص مكسور عن الطريق، وهو الخيار الأسلم للسيارات المنخفضة والغالية.",
          "قد يكون ونش السحب أنسب لنقل قصير من مواقف ضيقة أو قبو لا تصل إليه السطحة. أخبرنا أين تقف السيارة ونقول لك أيهما يناسب.",
        ],
        list: [
          "السيارة لا تشتغل أو تعطلت في الطريق",
          "سيارة مصدومة لا يصح أو لا يُسمح بقيادتها",
          "نقل السيارة من وإلى ورشة أو سمكرة أو وكالة",
          "استلام سيارة من حراج أو معرض أو بائع في حي آخر",
          "السيارات المنخفضة والرياضية والفاخرة التي تحتاج زاوية تحميل هادئة",
        ],
      },
      {
        h: "سطحة عادية أم سطحة هيدروليك؟",
        p: [
          "السطحة العادية يميل صندوقها ليصبح منحدرًا، ويسحب الونش السيارة إلى الأعلى. أما السطحة الهيدروليك فينزلق صندوقها وينخفض حتى يقارب الأرض، فتصبح زاوية التحميل شبه مستوية. هذا مهم للسيارات الرياضية والمنخفضة والسيارات ذات الصدام الأمامي الطويل الذي قد يحتك بمنحدر حاد.",
          "بعض العملاء يطلبون سطحة مغلقة للسيارات الثمينة عند النقل بين المدن. اذكر ذلك في طلبك، فالتوفر يختلف حسب المدينة والتاريخ.",
        ],
      },
      {
        h: "بعد الحادث: ماذا تفعل",
        p: [
          "إذا سُجل الحادث فاحتفظ برقم تقرير نجم أو المرور، لأن الورشة وشركة التأمين ستطلبانه. لا تحرك السيارة قبل أن تسمح إجراءات التقرير بذلك. وعندما يصبح نقلها ممكنًا، أخبرنا إلى أين: البيت أو الورشة أو الوكالة أو ورشة معتمدة من التأمين.",
          "إذا كانت السيارة في موقع خطر على طريق سريع، ابتعد أنت والركاب إلى مكان آمن أولًا. RideSaudi ترتب السطحة، ولسنا جهة إسعاف أو طوارئ.",
        ],
      },
      {
        h: "داخل المدينة وبين المدن",
        p: [
          "أغلب طلبات السطحة قصيرة: من شارع أو موقف أو منطقة الصناعية إلى نقطة أخرى في المدينة نفسها. أما السطحة بين المدن، مثل نقل سيارة معطلة من الرياض إلى جدة أو من الدمام إلى الرياض، فتُرتب كشحنة صغيرة، وغالبًا على سطحة تحمل أكثر من سيارة. وإذا كانت سيارتك سليمة لكنك لا تريد قيادتها كل هذه المسافة فراجع صفحة نقل السيارات بين المدن.",
        ],
      },
    ],
    table: {
      h: "مقارنة أنواع السطحات",
      head: ["النوع", "الأنسب لـ", "ملاحظة"],
      rows: [
        ["سطحة عادية (صندوق مائل)", "أغلب السيارات المعطلة والمصدومة", "الونش يسحب السيارة على الصندوق المائل"],
        ["سطحة هيدروليك (منزلقة)", "السيارات المنخفضة والرياضية والفاخرة", "الصندوق ينخفض قرب الأرض بزاوية تحميل مستوية"],
        ["ونش سحب", "نقل قصير من أماكن ضيقة", "تبقى عجلتان على الطريق، ولا يناسب كل أنواع الدفع"],
        ["سطحة أو ناقلة لعدة سيارات", "عدة سيارات أو نقل طويل بين المدن", "يُرتب لكل عملية ويؤكد الموعد في عرض السعر"],
      ],
    },
    checklist: {
      h: "ما الذي ترسله عند طلب سطحة",
      items: [
        "موقعك (مشاركة الموقع في واتساب أو رابط خرائط جوجل)",
        "ماركة السيارة وموديلها ولونها",
        "المشكلة: لا تشتغل، صدمة، كفرات مفرغة، الدركسون مقفل",
        "هل السيارة في قبو أو موقف أو على طريق رئيسي",
        "إلى أين تريد نقلها ومتى",
      ],
    },
    faqs: [
      { q: "ما هي السطحة؟", a: "السطحة شاحنة إنقاذ بصندوق مستوٍ، تُسحب السيارة أو تُقاد إليه وتُنقل وعجلاتها الأربع مرفوعة عن الطريق." },
      { q: "هل ترسلون سطحة هيدروليك للسيارات المنخفضة؟", a: "نعم عند الطلب. السطحة الهيدروليك ينخفض صندوقها قرب الأرض بزاوية تحميل مستوية. اذكر موديل السيارة حتى نختار الشاحنة المناسبة." },
      { q: "هل يمكن نقل سيارة مقفلة أو القير على وضع الوقوف؟", a: "غالبًا نعم باستخدام عجلات نقل أو بالرفع، لكن أخبرنا مسبقًا. السيارة التي دركسونها مقفل أو قيرها عالق تحتاج معدات خاصة على السطحة." },
      { q: "هل تصلحون السيارة في الطريق أو توصلون البنزين؟", a: "لا. RideSaudi ترتب النقل فقط، ولا نقدم إصلاحًا على الطريق ولا اشتراك بطارية ولا توصيل وقود." },
      { q: "كيف يُحسب سعر السطحة؟", a: "حسب المسافة من مكان السطحة إلى السيارة ثم إلى الوجهة، وحالة السيارة وسهولة الوصول إليها، والوقت. يصلك السعر قبل إرسال السطحة." },
    ],
  }),

  heavyPage(CARS, HT, "car_transport", [SATHA, `${SATHA}/riyadh`, `${SATHA}/jeddah`, `${SATHA}/dammam`, FLATBED], {
    nav: "Car Transport Between Cities",
    title: "Car Transport Between Saudi Cities by Satha",
    description: "Ship a car between Saudi cities without driving it: Riyadh, Jeddah, Dammam and more on a satha or car carrier. Open or enclosed on request. Get a quote.",
    h1: "Car Transport Between Saudi Cities",
    eyebrow: "Scheduled car shipping",
    answer: "Car transport between cities moves a car that runs, or one that does not, from one Saudi city to another on a satha or multi-car carrier, so it covers no kilometres itself. It suits new and used car purchases, relocations, and cars that must not be driven the distance. RideSaudi arranges it between Riyadh, Jeddah, Dammam and other cities, quoted per car.",
    summary: "Planned shipping of a car between cities on a satha or car carrier, for purchases, relocations and cars you do not want to drive.",
    sections: [
      {
        h: "Who ships a car instead of driving it",
        p: [
          "The common reasons are practical: a car bought from a seller or an auction in another city, a family relocating from Jeddah to Riyadh while flying, a company moving a pool car to a new branch, or a car that runs but is not road-worthy enough for a long highway drive.",
          "Shipping also saves the return flight or bus ticket the driver would need, and the car arrives without added kilometres or highway stone chips.",
        ],
      },
      {
        h: "Planned move versus urgent recovery",
        p: [
          "This page is for planned moves with a pickup date. If a car has broken down and needs collecting now, that is satha car recovery. The difference matters for price: a planned intercity move can travel on a carrier with other cars on the same corridor, while an urgent single-car run cannot share the trip.",
        ],
      },
      {
        h: "Open satha, multi-car carrier or enclosed",
        p: [
          "Most cars travel on an open satha or an open multi-car carrier. High-value, classic and sports cars can be requested on an enclosed carrier, which protects from sand, sun and road debris; it is less common and needs more notice.",
          "Before loading, photograph the car from all sides, note the fuel level and mileage, and remove loose items and toll tags. Hand over one key and keep the spare.",
        ],
      },
      {
        h: "Corridors we are asked about most",
        p: [
          "Riyadh to Jeddah and Jeddah to Riyadh, Riyadh to Dammam and Dammam to Riyadh, and Jeddah to Dammam are the corridors with the most demand. Moves to and from Makkah, Madinah, Abha, Tabuk and Qassim are arranged on request. The quote states the pickup window and the expected delivery window for your date.",
        ],
      },
    ],
    table: {
      h: "Choosing how your car travels",
      head: ["Option", "Suits", "Trade-off"],
      rows: [
        ["Single-car satha", "Urgent moves, non-running cars, one-off dates", "Whole truck for one car"],
        ["Open multi-car carrier", "Planned moves on busy corridors", "Pickup window depends on the carrier's schedule"],
        ["Enclosed carrier", "Classic, sports and high-value cars", "Limited availability; book early"],
      ],
    },
    checklist: {
      h: "Before your car is collected",
      items: [
        "Photos of all four sides, roof and interior",
        "Fuel about a quarter tank; no jerry cans inside",
        "Personal items and accessories removed",
        "Registration (istimara) copy and contact at the destination",
        "Any faults noted: alarm, brakes, starting problems",
      ],
    },
    faqs: [
      { q: "Can you ship a car that does not run between cities?", a: "Yes. A non-running car is loaded with a winch onto a satha. Say so in the request so the truck has the right equipment at both ends." },
      { q: "Is car transport between cities cheaper than recovery?", a: "Often, if the date is flexible, because a planned move can share a carrier with other cars on the same route. An urgent one-car trip costs more." },
      { q: "Can I ship my car from Riyadh to Jeddah while I fly?", a: "Yes. Arrange pickup in Riyadh before you leave and give us a contact at the Jeddah address. The delivery window is stated in the quote." },
      { q: "Do I need to be present at pickup and delivery?", a: "Someone needs to hand over the key and check the car at each end. It can be a family member, colleague or the dealer, if you tell us their name and number." },
      { q: "Can I leave belongings inside the car during shipping?", a: "Please do not. Remove personal items and valuables; loose items can move and damage the interior, and they are not covered by the transport arrangement." },
    ],
  }, {
    nav: "نقل السيارات بين المدن",
    title: "نقل سيارات بين المدن بالسطحة",
    description: "انقل سيارتك بين مدن السعودية بدون قيادتها: الرياض وجدة والدمام وغيرها على سطحة أو ناقلة سيارات، مكشوفة أو مغلقة عند الطلب. اطلب عرض سعر.",
    h1: "نقل السيارات بين مدن السعودية",
    eyebrow: "شحن سيارات بموعد مسبق",
    answer: "نقل السيارات بين المدن يعني شحن السيارة، سواء كانت تعمل أو معطلة، من مدينة سعودية إلى أخرى على سطحة أو ناقلة سيارات دون أن تقطع المسافة بنفسها. يناسب شراء السيارات والانتقال بين المدن والسيارات التي لا يصلح قيادتها طويلًا. ترتبه RideSaudi بين الرياض وجدة والدمام ومدن أخرى بسعر لكل سيارة.",
    summary: "شحن السيارة بين المدن بموعد مسبق على سطحة أو ناقلة، للشراء أو الانتقال أو حين لا تريد قيادتها.",
    sections: [
      {
        h: "من يشحن سيارته بدل قيادتها",
        p: [
          "الأسباب غالبًا عملية: سيارة اشتريتها من بائع أو حراج في مدينة أخرى، أو عائلة تنتقل من جدة إلى الرياض بالطائرة، أو شركة تنقل سيارة لفرع جديد، أو سيارة تعمل لكنها لا تتحمل طريقًا سريعًا طويلًا.",
          "الشحن يوفر أيضًا تذكرة عودة السائق، وتصل السيارة بدون كيلومترات إضافية أو حجارة الطريق على الواجهة.",
        ],
      },
      {
        h: "نقل بموعد أم سطحة عاجلة",
        p: [
          "هذه الصفحة للنقل المخطط بتاريخ استلام. إذا تعطلت السيارة وتحتاج نقلها الآن فهذه خدمة سطحة نقل السيارات المعطلة. الفرق يؤثر على السعر: النقل المخطط بين مدينتين قد يشارك ناقلة مع سيارات أخرى على الطريق نفسه، أما الرحلة العاجلة لسيارة واحدة فلا.",
        ],
      },
      {
        h: "سطحة مكشوفة أم ناقلة متعددة أم مغلقة",
        p: [
          "أغلب السيارات تُنقل على سطحة مكشوفة أو ناقلة مكشوفة لعدة سيارات. السيارات الثمينة والكلاسيكية والرياضية يمكن طلب ناقلة مغلقة لها تحميها من الرمل والشمس وحصى الطريق، وهي أقل توفرًا وتحتاج حجزًا أبكر.",
          "قبل التحميل صوّر السيارة من كل الجهات، وسجل مستوى الوقود وقراءة العداد، وأخرج الأغراض السائبة وملصق رسوم الطرق إن وجد. سلّم مفتاحًا واحدًا واحتفظ بالاحتياطي.",
        ],
      },
      {
        h: "أكثر المسارات طلبًا",
        p: [
          "الرياض إلى جدة والعكس، والرياض إلى الدمام والعكس، وجدة إلى الدمام هي الأكثر طلبًا. ونرتب النقل من وإلى مكة والمدينة وأبها وتبوك والقصيم عند الطلب. يذكر عرض السعر نافذة الاستلام ونافذة التسليم المتوقعة لتاريخك.",
        ],
      },
    ],
    table: {
      h: "اختر طريقة نقل سيارتك",
      head: ["الخيار", "يناسب", "المقابل"],
      rows: [
        ["سطحة لسيارة واحدة", "النقل العاجل والسيارات المعطلة والمواعيد الخاصة", "الشاحنة كاملة لسيارة واحدة"],
        ["ناقلة مكشوفة لعدة سيارات", "النقل المخطط على المسارات المزدحمة", "موعد الاستلام حسب جدول الناقلة"],
        ["ناقلة مغلقة", "السيارات الكلاسيكية والرياضية والثمينة", "توفر محدود، احجز مبكرًا"],
      ],
    },
    checklist: {
      h: "قبل استلام سيارتك",
      items: [
        "صور للجهات الأربع والسقف والداخل",
        "ربع خزان وقود تقريبًا، وبدون جوالين داخل السيارة",
        "إخراج الأغراض الشخصية والإكسسوارات",
        "صورة الاستمارة ورقم شخص يستلم في الوجهة",
        "تدوين أي أعطال: الإنذار، الفرامل، صعوبة التشغيل",
      ],
    },
    faqs: [
      { q: "هل تنقلون سيارة معطلة لا تشتغل بين المدن؟", a: "نعم. السيارة المعطلة تُسحب بالونش إلى السطحة. اذكر ذلك في الطلب حتى تكون المعدات المناسبة متوفرة عند الطرفين." },
      { q: "هل نقل السيارة بين المدن أرخص من السطحة العاجلة؟", a: "غالبًا إذا كان التاريخ مرنًا، لأن النقل المخطط قد يشارك ناقلة مع سيارات أخرى على المسار نفسه. أما رحلة سيارة واحدة عاجلة فتكلف أكثر." },
      { q: "هل يمكن شحن سيارتي من الرياض إلى جدة وأنا مسافر بالطائرة؟", a: "نعم. رتب الاستلام في الرياض قبل سفرك وأعطنا رقم شخص في عنوان جدة. نافذة التسليم تُذكر في عرض السعر." },
      { q: "هل يجب أن أكون موجودًا عند الاستلام والتسليم؟", a: "يجب أن يسلّم أحد المفتاح ويفحص السيارة عند كل طرف، ويمكن أن يكون قريبًا أو زميلًا أو المعرض إذا أعطيتنا اسمه ورقمه." },
      { q: "هل أترك أغراضي داخل السيارة أثناء الشحن؟", a: "الأفضل لا. أخرج الأغراض الشخصية والثمينة، فالأشياء السائبة قد تتحرك وتضر الداخل، ولا يشملها ترتيب النقل." },
    ],
  }),
];
