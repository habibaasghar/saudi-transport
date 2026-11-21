import type { ServicePage } from "../types";
import { CRANE, EXCAVATOR, FLATBED, FORKLIFT, HEAVY, HT, LOADER, LOWBED, OVERSIZED, RELOCATION, heavyPage } from "./shared";

/** Trailer- and load-led pages: lowbed, flatbed, oversized loads, industrial relocation. */
export const heavyTrailers: ServicePage[] = [
  heavyPage(LOWBED, HT, "lowbed", [EXCAVATOR, LOADER, CRANE, HEAVY, FLATBED, OVERSIZED], {
    nav: "Lowbed Transport",
    title: "Lowbed Transport & Lowbed Trailer Hire in KSA",
    description: "Lowbed trailer transport for excavators, loaders, dozers and cranes across Saudi Arabia. Lowbed vs flatbed explained, and what to send for a lowbed quote.",
    h1: "Lowbed Transport in Saudi Arabia",
    eyebrow: "Lowbed haulage",
    answer: "Lowbed transport uses a semi-trailer whose deck drops low between the gooseneck and the rear axles, so heavy and tall machines such as excavators, wheel loaders and dozers can be carried within height limits. The right lowbed is chosen from the machine's weight and transport dimensions. RideSaudi arranges lowbed moves from Riyadh, Jeddah and Dammam to sites across the Kingdom.",
    summary: "Lowbed trailers for heavy and tall construction machinery, matched to the machine's weight and size.",
    sections: [
      {
        h: "What a lowbed is, and why height decides",
        p: [
          "A standard flatbed deck sits at the height of the tractor's fifth wheel. Put a large excavator on it and the cab or folded boom can end up higher than the road allows and higher than bridges, signs and power lines on the route. A lowbed solves this by dropping the deck between a raised front section (the gooseneck) and the rear axle group, so the machine sits much closer to the ground.",
          "In Saudi Arabia lowbed (لوبد) is also the everyday word customers use for heavy equipment transport in general, so many 'lowbed' requests turn out to fit a flatbed, and the other way round. We check the numbers rather than the name.",
        ],
      },
      {
        h: "Lowbed configurations you will hear about",
        p: [
          "Lowbeds are described by the number of axles and by how they load. More axles spread the weight, which is how heavier machines stay within the permitted load per axle. Some lowbeds have a detachable gooseneck so a machine can drive on from the front; others load over folding rear ramps. Extendable lowbeds stretch for long loads such as crane booms or beams.",
          "We do not publish fixed capacities for each trailer type, because the real payload depends on the specific trailer, the tractor unit and the route. Your quote names the configuration chosen for your machine.",
        ],
        list: [
          "Rear-ramp lowbed: tracked and wheeled machines drive on over hinged ramps",
          "Detachable-gooseneck lowbed: front loading, useful for long or low machines",
          "Extendable lowbed: deck lengthens for long loads",
          "Multi-axle lowbed: more axles for heavier machines, often with permits",
        ],
      },
      {
        h: "Loading, securing and unloading",
        p: [
          "Most tracked machines drive onto the lowbed under their own power, guided by a banksman, with the bucket or blade lowered once in position. Machines that do not run are winched or lifted by crane. On the deck, the machine is chained at its designated tie-down points, attachments are lowered and secured, and loose parts such as buckets or counterweights may travel separately.",
          "The ground at each end matters. A lowbed needs firm, level ground long enough for the truck and ramps, and a clear approach for a long vehicle. Tell us about soft sand, slopes, gates and overhead cables on site.",
        ],
      },
      {
        h: "Routes, permits and timing",
        p: [
          "When the loaded vehicle exceeds the standard dimension or weight limits set by the Roads General Authority, the move becomes an exceptional load. It then needs a special permit, may need escort vehicles, and may be restricted to certain hours or roads. City traffic rules can also limit when heavy trucks enter some urban roads.",
          "These requirements are checked for your load and route before the quote is confirmed, and they are the main reason a lowbed move is planned rather than dispatched on the spot.",
        ],
      },
    ],
    table: {
      h: "Lowbed or flatbed: how to choose",
      head: ["Question", "Lowbed", "Flatbed trailer"],
      rows: [
        ["Deck height", "Low, dropped deck", "Higher, flat deck over the axles"],
        ["Typical loads", "Excavators, loaders, dozers, rollers, cranes", "Steel, pipes, cabins, forklifts, smaller machines"],
        ["Loading", "Drive-on over ramps, or crane", "Crane or forklift from the side or top"],
        ["When it is needed", "The load would be too tall or too heavy on a flatbed", "The load fits within height limits on a normal deck"],
        ["Planning", "Weight per axle, width, permits for big machines", "Load securing and tarpaulin cover"],
      ],
    },
    checklist: {
      h: "What a lowbed quote needs",
      items: [
        "Machine type, make and model (the model number tells the class)",
        "Operating weight, plus any attachment travelling with it",
        "Length, width and height in the transport position",
        "Does it run and drive onto ramps by itself?",
        "Pickup and delivery sites, with ground and access notes",
        "Required date and any site working hours",
      ],
    },
    faqs: [
      { q: "What is a lowbed trailer used for?", a: "Carrying heavy, tall machines such as excavators, wheel loaders, bulldozers, rollers and mobile cranes. The dropped deck keeps the loaded height down and spreads the weight over several axles." },
      { q: "Can I hire a lowbed with a driver for a day?", a: "Lowbed hire is arranged per move rather than as a daily rental through RideSaudi. Send the loads and dates; several moves on one project can be quoted together." },
      { q: "Do all excavators need a lowbed?", a: "No. Mini excavators often fit a flatbed or a smaller truck. Larger excavators usually need a lowbed because of their weight and height. The model and weight decide." },
      { q: "Who arranges the permit for an oversized lowbed load?", a: "Permit and escort needs are identified while quoting and arranged as part of the move. Their cost and lead time are included in the quote." },
      { q: "Can a lowbed carry two machines at once?", a: "Sometimes, if both fit within the trailer's weight, length and height limits and can be secured properly. Send both machines' details and we will check." },
    ],
  }, {
    nav: "نقل باللوبد",
    title: "نقل معدات باللوبد وتأجير لوبد في السعودية",
    description: "نقل الحفارات والشيولات والدركترات والكرينات باللوبد بين مدن السعودية، مع شرح الفرق بين اللوبد والتريلا السطحة وما الذي ترسله لعرض سعر اللوبد.",
    h1: "النقل باللوبد في السعودية",
    eyebrow: "لوبد · نقل ثقيل",
    answer: "اللوبد مقطورة أرضيتها منخفضة بين رقبة التريلا والمحاور الخلفية، فتُحمل عليها المعدات الثقيلة والعالية مثل الحفارات والشيولات والدركترات ضمن حدود الارتفاع. يُختار اللوبد المناسب من وزن المعدة ومقاساتها وقت النقل. ترتب RideSaudi النقل باللوبد من الرياض وجدة والدمام إلى المواقع في أنحاء المملكة.",
    summary: "لوبد لنقل المعدات الإنشائية الثقيلة والعالية، يُختار حسب وزن المعدة ومقاساتها.",
    sections: [
      {
        h: "ما هو اللوبد، ولماذا يحسم الارتفاع الاختيار",
        p: [
          "أرضية التريلا السطحة العادية تكون بارتفاع صحن الرأس. إذا حملت عليها حفارًا كبيرًا قد تصبح الكابينة أو الذراع المطوي أعلى مما يسمح به الطريق، وأعلى من الجسور واللوحات وخطوط الكهرباء في المسار. اللوبد يحل ذلك بأرضية منخفضة بين مقدمة مرتفعة (الرقبة) ومجموعة المحاور الخلفية، فتجلس المعدة قريبة من الأرض.",
          "كلمة لوبد في السعودية يستخدمها كثيرون لكل نقل المعدات الثقيلة، ولذلك تجد أن بعض طلبات اللوبد تكفيها تريلا سطحة، والعكس. نحن نعتمد على الأرقام لا على الاسم.",
        ],
      },
      {
        h: "أنواع اللوبد التي ستسمع عنها",
        p: [
          "يُوصف اللوبد بعدد المحاور وبطريقة التحميل. المحاور الأكثر توزع الوزن، وهكذا تبقى المعدات الأثقل ضمن الحمل المسموح على كل محور. بعض أنواع اللوبد رقبتها تُفصل لتصعد المعدة من الأمام، وأخرى تُحمّل من رامبات خلفية قابلة للطي. واللوبد القابل للتمديد يطول للحمولات الطويلة مثل أذرع الكرينات والجسور.",
          "لا ننشر حمولة ثابتة لكل نوع، لأن الحمولة الفعلية تعتمد على التريلا نفسها والرأس والمسار. عرض السعر يذكر نوع اللوبد المختار لمعدتك.",
        ],
        list: [
          "لوبد برامبات خلفية: المعدات بالجنزير أو بالكفرات تصعد بنفسها",
          "لوبد برقبة قابلة للفصل: تحميل من الأمام للمعدات الطويلة أو المنخفضة",
          "لوبد قابل للتمديد: الأرضية تطول للحمولات الطويلة",
          "لوبد متعدد المحاور: محاور أكثر للمعدات الأثقل، وغالبًا مع تصريح",
        ],
      },
      {
        h: "التحميل والربط والتنزيل",
        p: [
          "أغلب المعدات بالجنزير تصعد اللوبد بنفسها بتوجيه مُرشد، ثم يُنزل الجردل أو الشفرة بعد تثبيتها في مكانها. المعدة المعطلة تُسحب بالونش أو تُرفع بالكرين. على الأرضية تُربط المعدة بالسلاسل من نقاط الربط المخصصة لها، وتُنزل الملحقات وتُثبت، وقد تُنقل القطع المنفصلة مثل الجرادل أو الأثقال الموازنة بشكل مستقل.",
          "الأرض عند كل طرف مهمة. اللوبد يحتاج أرضًا صلبة مستوية تكفي طول الشاحنة والرامبات، ومدخلًا واضحًا لمركبة طويلة. أخبرنا عن الرمل الناعم أو المنحدرات أو البوابات أو الأسلاك العلوية في الموقع.",
        ],
      },
      {
        h: "المسار والتصاريح والتوقيت",
        p: [
          "عندما تتجاوز المركبة المحملة حدود الأبعاد أو الأوزان النظامية التي تحددها الهيئة العامة للطرق، تصبح الحمولة استثنائية وتحتاج تصريحًا خاصًا، وقد تحتاج مرافقة، وقد تُقيد بساعات أو طرق معينة. كما قد تحد أنظمة المرور في المدن من دخول الشاحنات الثقيلة لبعض الطرق في أوقات محددة.",
          "نتحقق من هذه المتطلبات لحمولتك ومسارك قبل تأكيد عرض السعر، وهي السبب الرئيسي في أن نقل اللوبد يُخطط له ولا يُرسل فورًا.",
        ],
      },
    ],
    table: {
      h: "لوبد أم تريلا سطحة: كيف تختار",
      head: ["السؤال", "لوبد", "تريلا سطحة"],
      rows: [
        ["ارتفاع الأرضية", "منخفضة", "أعلى ومستوية فوق المحاور"],
        ["الحمولات المعتادة", "حفارات، شيولات، دركترات، حدلات، كرينات", "حديد، مواسير، كبائن، رافعات شوكية، معدات أصغر"],
        ["التحميل", "صعود على الرامبات أو رفع بالكرين", "كرين أو رافعة شوكية من الجنب أو الأعلى"],
        ["متى نحتاجه", "الحمولة أعلى أو أثقل من أن تُحمل على سطحة", "الحمولة ضمن حدود الارتفاع على أرضية عادية"],
        ["التخطيط", "الوزن على المحور والعرض والتصاريح للمعدات الكبيرة", "ربط الحمولة وتغطيتها بالشراع"],
      ],
    },
    checklist: {
      h: "ما الذي يحتاجه عرض سعر اللوبد",
      items: [
        "نوع المعدة وماركتها وموديلها (رقم الموديل يكشف الفئة)",
        "وزن التشغيل، وأي ملحقات تُنقل معها",
        "الطول والعرض والارتفاع بوضعية النقل",
        "هل تعمل وتصعد الرامبات بنفسها؟",
        "موقعا التحميل والتسليم مع ملاحظات الأرض والمدخل",
        "التاريخ المطلوب وساعات العمل في الموقع",
      ],
    },
    faqs: [
      { q: "ما استخدام تريلا اللوبد؟", a: "نقل المعدات الثقيلة والعالية مثل الحفارات والشيولات والدركترات والحدلات والكرينات المتحركة. الأرضية المنخفضة تخفض الارتفاع بعد التحميل وتوزع الوزن على عدة محاور." },
      { q: "هل أستطيع تأجير لوبد مع سائق ليوم كامل؟", a: "في RideSaudi يُرتب اللوبد لكل عملية نقل وليس كتأجير يومي. أرسل المعدات والتواريخ، ويمكن تسعير عدة عمليات في مشروع واحد معًا." },
      { q: "هل كل الحفارات تحتاج لوبد؟", a: "لا. الحفارات الصغيرة تكفيها غالبًا تريلا سطحة أو شاحنة أصغر، أما الحفارات الكبيرة فتحتاج لوبد بسبب وزنها وارتفاعها. الموديل والوزن هما الحكم." },
      { q: "من يستخرج تصريح الحمولة الاستثنائية على اللوبد؟", a: "نحدد متطلبات التصريح والمرافقة أثناء التسعير ونرتبها ضمن عملية النقل، وتُذكر تكلفتها ومدتها في عرض السعر." },
      { q: "هل يحمل اللوبد معدتين في رحلة واحدة؟", a: "أحيانًا، إذا كانتا ضمن حدود الوزن والطول والارتفاع للتريلا وأمكن ربطهما بأمان. أرسل تفاصيل المعدتين ونتحقق لك." },
    ],
  }),

  heavyPage(FLATBED, HT, "flatbed", [LOWBED, FORKLIFT, RELOCATION], {
    nav: "Flatbed Trailer Transport",
    title: "Flatbed Trailer Transport in Saudi Arabia",
    description: "Flatbed trailer (tereella sat-ha) transport for steel, pipes, cabins, forklifts and machinery that fits standard height, between Saudi cities and sites.",
    h1: "Flatbed Trailer Transport in Saudi Arabia",
    eyebrow: "Flatbed haulage",
    answer: "A flatbed trailer is an open, flat semi-trailer loaded from the side or from above, used for steel, pipes, precast items, portable cabins, forklifts and machines that stay within normal height once loaded. It is usually quicker to arrange than a lowbed. RideSaudi arranges flatbed transport between Riyadh, Jeddah, Dammam and project sites, quoted per load.",
    summary: "Open flatbed trailers for steel, pipes, cabins, forklifts and smaller machines that fit within normal height.",
    sections: [
      {
        h: "What travels well on a flatbed",
        p: [
          "Flatbeds carry loads that can be lifted on and strapped down: steel sections and rebar, pipe bundles, precast items, portable site cabins, generators, compressors, palletised goods and smaller machines such as forklifts, skid steers and mini excavators.",
          "Because the deck sits over the axles, the loaded height is the main check. A tall item on a flatbed may exceed height limits that the same item would meet on a lowbed.",
        ],
        list: ["Steel, rebar and pipes", "Portable cabins and site offices", "Generators, compressors and tanks", "Forklifts, skid steers and mini excavators", "Palletised building materials"],
      },
      {
        h: "Loading and securing a flatbed",
        p: [
          "Flatbeds are loaded by crane or forklift, from the side or from above, so the pickup site needs lifting equipment or a truck-mounted crane must be arranged. Loads are secured with chains or rated straps, with edge protectors on sharp corners, and pipes are chocked so they cannot roll.",
          "Ask for a tarpaulin cover if the load must stay clean or dry, for example cartons, insulation or finished panels.",
        ],
      },
      {
        h: "Flatbed variants",
        p: [
          "Besides the standard flatbed there are dropside trailers with low side walls for loose or bagged loads, and extendable flatbeds that lengthen for long pipes, poles and beams. If you are not sure which suits your cargo, describe the load and its packaging and we will recommend one.",
        ],
      },
    ],
    table: {
      h: "Flatbed, dropside or lowbed?",
      head: ["Trailer", "Use it for", "Watch out for"],
      rows: [
        ["Standard flatbed", "Steel, cabins, generators, small machines", "Overall height after loading"],
        ["Dropside (sided) trailer", "Bagged, palletised or loose items", "Items taller than the side walls need extra securing"],
        ["Extendable flatbed", "Long pipes, beams and poles", "Rear overhang and permits for long loads"],
        ["Lowbed", "Heavy or tall machinery", "Needs ramps or crane, and more planning"],
      ],
    },
    checklist: {
      h: "For a flatbed quote, tell us",
      items: [
        "What the load is and how it is packed (bundles, pallets, crates)",
        "Total weight and the largest single piece",
        "Length, width and height of the biggest item",
        "Who loads and unloads: your crane or forklift, or one to arrange",
        "Pickup and delivery sites, date, and whether a cover is needed",
      ],
    },
    faqs: [
      { q: "What is a tereella sat-ha?", a: "It is the common Saudi name for a flatbed semi-trailer: an open, flat trailer pulled by a tractor unit, loaded by crane or forklift." },
      { q: "Can a flatbed carry a forklift?", a: "Yes, most forklifts travel on a flatbed or a smaller truck. Larger container-handling forklifts may need a lowbed because of their weight and mast height." },
      { q: "Do you provide the crane for loading a flatbed?", a: "A crane or truck-mounted crane can be arranged with the move if the site has no lifting equipment. Say so in the request so it is included in the quote." },
      { q: "Can a flatbed load be covered against sand and rain?", a: "Yes, ask for a tarpaulin cover. It is recommended for cartons, insulation, finished panels and anything that must arrive clean." },
    ],
  }, {
    nav: "تريلا سطحة",
    title: "نقل بتريلا سطحة في السعودية",
    description: "نقل الحديد والمواسير والكبائن والرافعات الشوكية والمعدات ضمن الارتفاع العادي بتريلا سطحة بين مدن السعودية ومواقع المشاريع. اطلب عرض سعر.",
    h1: "النقل بالتريلا السطحة في السعودية",
    eyebrow: "تريلا سطحة",
    answer: "التريلا السطحة مقطورة مكشوفة مستوية تُحمّل من الجنب أو من الأعلى، تُستخدم لنقل الحديد والمواسير والقطع الخرسانية والكبائن والرافعات الشوكية والمعدات التي تبقى ضمن الارتفاع العادي بعد التحميل، وترتيبها أسرع غالبًا من اللوبد. ترتب RideSaudi النقل بالتريلا السطحة بين الرياض وجدة والدمام ومواقع المشاريع بسعر لكل حمولة.",
    summary: "تريلات سطحة مكشوفة للحديد والمواسير والكبائن والرافعات الشوكية والمعدات الأصغر ضمن الارتفاع العادي.",
    sections: [
      {
        h: "ما الذي يُنقل جيدًا على التريلا السطحة",
        p: [
          "التريلا السطحة تحمل ما يمكن رفعه وربطه: الحديد والأسياخ، وربطات المواسير، والقطع الخرسانية الجاهزة، وكبائن المواقع، والمولدات، والكمبروسرات، والمواد على طبالي، والمعدات الصغيرة مثل الرافعات الشوكية والبوبكات والحفارات الصغيرة.",
          "لأن الأرضية فوق المحاور، فالارتفاع بعد التحميل هو أهم فحص. القطعة العالية على السطحة قد تتجاوز حد الارتفاع، بينما تبقى ضمنه لو حُملت على لوبد.",
        ],
        list: ["الحديد والأسياخ والمواسير", "الكبائن والمكاتب المتنقلة", "المولدات والكمبروسرات والخزانات", "الرافعات الشوكية والبوبكات والحفارات الصغيرة", "مواد البناء على الطبالي"],
      },
      {
        h: "تحميل التريلا السطحة وربطها",
        p: [
          "تُحمّل السطحة بالكرين أو الرافعة الشوكية من الجنب أو من الأعلى، لذلك يحتاج موقع التحميل معدات رفع، أو نرتب شاحنة بكرين (ونش). تُربط الحمولة بالسلاسل أو أحزمة معتمدة مع حماية للحواف الحادة، وتُسند المواسير حتى لا تتدحرج.",
          "اطلب شراعًا (تغطية) إذا كانت الحمولة يجب أن تصل نظيفة وجافة، مثل الكراتين والعوازل والألواح المشطبة.",
        ],
      },
      {
        h: "أنواع التريلا السطحة",
        p: [
          "إلى جانب السطحة العادية هناك تريلا بجوانب منخفضة للحمولات السائبة أو المعبأة في أكياس، وسطحة قابلة للتمديد للمواسير والأعمدة والجسور الطويلة. إذا لم تكن متأكدًا أيها يناسب حمولتك، صف لنا الحمولة وتغليفها ونرشح لك المناسب.",
        ],
      },
    ],
    table: {
      h: "سطحة أم تريلا بجوانب أم لوبد؟",
      head: ["التريلا", "استخدمها لـ", "انتبه إلى"],
      rows: [
        ["سطحة عادية", "الحديد والكبائن والمولدات والمعدات الصغيرة", "الارتفاع الكلي بعد التحميل"],
        ["تريلا بجوانب", "المعبأ في أكياس أو طبالي أو السائب", "القطع الأعلى من الجوانب تحتاج ربطًا إضافيًا"],
        ["سطحة قابلة للتمديد", "المواسير والجسور والأعمدة الطويلة", "البروز الخلفي والتصاريح للحمولات الطويلة"],
        ["لوبد", "المعدات الثقيلة أو العالية", "يحتاج رامبات أو كرين وتخطيطًا أكثر"],
      ],
    },
    checklist: {
      h: "لعرض سعر التريلا السطحة أخبرنا",
      items: [
        "ما الحمولة وكيف هي معبأة (ربطات، طبالي، صناديق)",
        "الوزن الكلي وأثقل قطعة",
        "طول وعرض وارتفاع أكبر قطعة",
        "من يحمّل وينزّل: كرين أو رافعة لديكم أم نرتبها",
        "موقعا التحميل والتسليم والتاريخ وهل تحتاج تغطية",
      ],
    },
    faqs: [
      { q: "ما هي التريلا السطحة؟", a: "مقطورة مكشوفة مستوية يسحبها رأس تريلا، تُحمّل بالكرين أو الرافعة الشوكية، وتُستخدم للبضائع والمعدات ضمن الارتفاع العادي." },
      { q: "هل تحمل التريلا السطحة رافعة شوكية؟", a: "نعم، أغلب الرافعات الشوكية تُنقل على سطحة أو شاحنة أصغر. أما رافعات الحاويات الكبيرة فقد تحتاج لوبد بسبب وزنها وارتفاع الصاري." },
      { q: "هل توفرون كرين لتحميل السطحة؟", a: "يمكن ترتيب كرين أو شاحنة بونش مع النقل إذا لم تتوفر معدات رفع في الموقع. اذكر ذلك في الطلب ليشمله عرض السعر." },
      { q: "هل يمكن تغطية حمولة السطحة من الرمل والمطر؟", a: "نعم، اطلب شراعًا. ننصح به للكراتين والعوازل والألواح المشطبة وكل ما يجب أن يصل نظيفًا." },
    ],
  }),

  heavyPage(OVERSIZED, HT, "oversized", [LOWBED, CRANE, RELOCATION], {
    nav: "Oversized Load Transport",
    title: "Oversized & Exceptional Load Transport in KSA",
    description: "Oversized and exceptional loads in Saudi Arabia: when a permit is needed, escorts, route surveys and the details to send for a quote. No guesswork.",
    h1: "Oversized and Exceptional Load Transport in Saudi Arabia",
    eyebrow: "Exceptional loads",
    answer: "An oversized or exceptional load is one whose loaded vehicle exceeds the standard length, width, height or weight limits for Saudi roads. Moving it needs a special permit from the roads authority and often escort vehicles, set travel times and a checked route. RideSaudi plans these moves from the load's exact dimensions and weight and confirms permit needs in the quote.",
    summary: "Planning, permits and escorts for loads that exceed standard road dimension or weight limits.",
    sections: [
      {
        h: "When does a load become exceptional?",
        p: [
          "The Roads General Authority (الهيئة العامة للطرق) sets the maximum dimensions and weights for trucks on Saudi roads. If the truck and load together exceed any of them, whether by width, height, length, total weight or weight per axle, the move needs a special permit for an indivisible load.",
          "Published figures have changed over time and differ between sources, so we do not quote a single number here. We check your load against the current rules when quoting. What matters from you is accurate measurements in the transport position.",
        ],
      },
      {
        h: "What an exceptional load move involves",
        p: [
          "Beyond the permit, wide or tall loads may need escort vehicles, travel within set hours, and a route that avoids low bridges, narrow junctions and overhead cables. The authority has introduced a digital permit process and route planning for exceptional loads, and highway weigh stations check axle weights.",
          "Very large items, such as transformers, tanks or long beams, can call for a multi-axle or extendable trailer and a route survey before the date is fixed.",
        ],
        list: ["Exact dimensions and weight of the load", "Trailer configuration chosen to spread the weight", "Permit and any escort", "Route check for height, width and turning", "Travel window agreed with the permit"],
      },
      {
        h: "Why accurate measurements save time",
        p: [
          "Most delays on exceptional loads come from measurements that change on the day: an attachment that could not be removed, a height measured with the cab rather than the folded boom, or a weight taken from memory. Measure the load as it will travel and send drawings or photos with a tape in view if you can.",
        ],
      },
    ],
    table: {
      h: "Load size and what it usually triggers",
      head: ["Situation", "Usually means"],
      rows: [
        ["Within standard limits", "Normal flatbed or lowbed move, no special permit"],
        ["Slightly over width or height", "Permit, possibly escort and restricted hours"],
        ["Very heavy (axle weight over the limit)", "Multi-axle trailer and permit"],
        ["Very long, wide or tall component", "Permit, escort, route survey and planned date"],
      ],
    },
    checklist: {
      h: "Send these for an exceptional load quote",
      items: [
        "Drawings or a datasheet with the load's dimensions",
        "Total weight and centre of gravity if known",
        "Lifting points and how it is loaded",
        "Exact origin and destination, including site gates",
        "Target date and any time window at site",
      ],
    },
    faqs: [
      { q: "Who issues oversized load permits in Saudi Arabia?", a: "Special permits for loads beyond the standard limits are handled through the Roads General Authority's permit process. Requirements are confirmed for your specific load and route." },
      { q: "How long does an exceptional load permit take?", a: "It depends on the load's size and route. The expected lead time is stated in your quote, which is why large moves should be requested early." },
      { q: "Do all oversized loads need an escort?", a: "Not all. Escort needs depend on how far the load exceeds the limits and on the route. The permit conditions decide." },
      { q: "Can you give me the legal width and height limit?", a: "We do not publish a single figure because sources differ and rules are updated. We check your exact measurements against the current rules when quoting." },
    ],
  }, {
    nav: "نقل الحمولات الاستثنائية",
    title: "نقل الحمولات الاستثنائية والمقاسات الكبيرة",
    description: "الحمولات الاستثنائية في السعودية: متى تحتاج تصريحًا، والمرافقة، ودراسة المسار، والتفاصيل المطلوبة لعرض السعر.",
    h1: "نقل الحمولات الاستثنائية والمقاسات الكبيرة في السعودية",
    eyebrow: "حمولات استثنائية",
    answer: "الحمولة الاستثنائية هي التي تتجاوز فيها المركبة المحملة حدود الطول أو العرض أو الارتفاع أو الوزن النظامية للطرق السعودية. نقلها يحتاج تصريحًا خاصًا من جهة الطرق، وغالبًا مرافقة وأوقات سير محددة ومسارًا مدروسًا. تخطط RideSaudi هذا النقل من مقاسات الحمولة ووزنها الدقيقين، وتؤكد متطلبات التصريح في عرض السعر.",
    summary: "تخطيط وتصاريح ومرافقة للحمولات التي تتجاوز حدود الأبعاد أو الأوزان النظامية.",
    sections: [
      {
        h: "متى تصبح الحمولة استثنائية؟",
        p: [
          "تحدد الهيئة العامة للطرق الحد الأقصى لأبعاد وأوزان الشاحنات على الطرق السعودية. إذا تجاوزت الشاحنة مع حمولتها أيًا منها، سواء في العرض أو الارتفاع أو الطول أو الوزن الكلي أو الوزن على المحور، احتاج النقل تصريحًا خاصًا للحمولة غير القابلة للتجزئة.",
          "الأرقام المنشورة تغيرت مع الوقت وتختلف بين المصادر، لذلك لا نضع هنا رقمًا واحدًا. نتحقق من حمولتك وفق الأنظمة الحالية عند التسعير، والمطلوب منك مقاسات دقيقة بوضعية النقل.",
        ],
      },
      {
        h: "ماذا يشمل نقل الحمولة الاستثنائية",
        p: [
          "إلى جانب التصريح، قد تحتاج الحمولات العريضة أو العالية مرافقة، وسيرًا في ساعات محددة، ومسارًا يتجنب الجسور المنخفضة والتقاطعات الضيقة والأسلاك العلوية. وقد أطلقت الجهة المختصة منصة رقمية للتصاريح وتخطيطًا للمسارات للحمولات الاستثنائية، وتفحص محطات الوزن على الطرق أوزان المحاور.",
          "القطع الكبيرة جدًا مثل المحولات والخزانات والجسور الطويلة قد تحتاج تريلا متعددة المحاور أو قابلة للتمديد، ودراسة مسار قبل تحديد الموعد.",
        ],
        list: ["مقاسات الحمولة ووزنها بدقة", "تريلا مختارة لتوزيع الوزن", "التصريح وأي مرافقة", "فحص المسار للارتفاع والعرض والانعطاف", "نافذة سير متفق عليها مع التصريح"],
      },
      {
        h: "لماذا توفر المقاسات الدقيقة الوقت",
        p: [
          "أغلب التأخير في الحمولات الاستثنائية سببه مقاسات تتغير يوم النقل: ملحق لم يمكن فكه، أو ارتفاع قيس مع الكابينة بدل الذراع المطوي، أو وزن من الذاكرة. قس الحمولة كما ستُنقل، وأرسل المخططات أو صورًا يظهر فيها المتر إن أمكن.",
        ],
      },
    ],
    table: {
      h: "حجم الحمولة وما يترتب عليه عادة",
      head: ["الحالة", "يعني عادة"],
      rows: [
        ["ضمن الحدود النظامية", "نقل عادي بسطحة أو لوبد بدون تصريح خاص"],
        ["تجاوز بسيط في العرض أو الارتفاع", "تصريح، وربما مرافقة وساعات محددة"],
        ["ثقيلة جدًا (وزن المحور فوق الحد)", "تريلا متعددة المحاور وتصريح"],
        ["قطعة طويلة أو عريضة أو عالية جدًا", "تصريح ومرافقة ودراسة مسار وموعد مخطط"],
      ],
    },
    checklist: {
      h: "أرسل هذه التفاصيل لعرض سعر الحمولة الاستثنائية",
      items: [
        "مخططات أو ورقة بيانات بمقاسات الحمولة",
        "الوزن الكلي ومركز الثقل إن كان معروفًا",
        "نقاط الرفع وطريقة التحميل",
        "نقطة البداية والوجهة بالضبط، مع بوابات المواقع",
        "التاريخ المستهدف وأي نافذة زمنية في الموقع",
      ],
    },
    faqs: [
      { q: "من يصدر تصاريح الحمولات الاستثنائية في السعودية؟", a: "التصاريح الخاصة للحمولات التي تتجاوز الحدود النظامية تتم عبر إجراءات الهيئة العامة للطرق، وتُؤكد المتطلبات لحمولتك ومسارك تحديدًا." },
      { q: "كم يستغرق تصريح الحمولة الاستثنائية؟", a: "يعتمد على حجم الحمولة والمسار. المدة المتوقعة تُذكر في عرض السعر، ولذلك يُفضل طلب النقل الكبير مبكرًا." },
      { q: "هل تحتاج كل الحمولات الكبيرة مرافقة؟", a: "ليس كلها. الحاجة للمرافقة تعتمد على مقدار تجاوز الحدود وعلى المسار، وتحددها شروط التصريح." },
      { q: "ما الحد النظامي للعرض والارتفاع؟", a: "لا ننشر رقمًا واحدًا لأن المصادر تختلف والأنظمة تُحدّث. نتحقق من مقاساتك الدقيقة وفق الأنظمة الحالية عند التسعير." },
    ],
  }),

  heavyPage(RELOCATION, HT, "machinery_relocation", [FLATBED, OVERSIZED, FORKLIFT, HEAVY], {
    nav: "Industrial Machinery Relocation",
    title: "Industrial Machinery & Factory Relocation KSA",
    description: "Moving factory machines, production lines, generators and workshop equipment between Saudi industrial cities: planning, lifting, transport and placement.",
    h1: "Industrial Machinery Relocation in Saudi Arabia",
    eyebrow: "Factory and plant moves",
    answer: "Industrial machinery relocation is moving fixed equipment, such as presses, CNC machines, production line sections, generators and compressors, from one building or industrial city to another. It combines disconnection by your technicians, rigging and lifting, transport on a flatbed or lowbed, and placement at the new site. RideSaudi arranges the lifting and transport side, planned per machine.",
    summary: "Lifting and transport of factory machines and plant equipment between buildings and industrial cities.",
    sections: [
      {
        h: "What makes machinery relocation different",
        p: [
          "Unlike construction machines, factory equipment does not drive. It has to be skated, jacked or lifted out of a building, often through doors and over floors with load limits, then loaded by crane or heavy forklift. Many machines are top-heavy, have delicate controls and need their moving parts locked before transport.",
          "Relocations are common between the industrial cities around Riyadh, Jeddah and Dammam, and from those areas to Jubail, Yanbu and newer industrial zones.",
        ],
      },
      {
        h: "Who does what",
        p: [
          "Your maintenance team or the machine supplier disconnects power, hydraulics and controls, drains fluids where needed and fits transport locks. The lifting and transport side covers moving the machine to the loading point, loading, securing, transport and placement on the new foundation. Re-commissioning stays with your team or the supplier.",
          "Agree this split before the quote so nothing is missed on the day.",
        ],
      },
      {
        h: "Planning the move",
        p: [
          "List each machine with its weight, dimensions and lifting points. Check the route out of the building, the floor capacity, overhead cranes that can help, and door sizes at both ends. Heavy single pieces may need a crane at each end; long line sections may need an extendable trailer.",
        ],
        list: ["Machine list with weights and dimensions", "Building exit route and door sizes", "Lifting points and manufacturer instructions", "Crane or forklift at each end", "Placement position at the new site"],
      },
    ],
    table: {
      h: "Typical relocation loads and transport",
      head: ["Equipment", "Usual handling", "Usual trailer"],
      rows: [
        ["CNC machines, lathes, presses", "Skates and jacks to the door, then forklift or crane", "Flatbed, or lowbed if tall"],
        ["Generators and compressors", "Crane lift from lifting points", "Flatbed"],
        ["Production line sections", "Disassembled into transportable modules", "Flatbed or extendable trailer"],
        ["Large tanks and vessels", "Crane lift, sometimes two cranes", "Lowbed or multi-axle trailer, often with permit"],
      ],
    },
    checklist: {
      h: "For a relocation quote, prepare",
      items: [
        "A machine list: name, weight, length, width, height",
        "Photos of each machine and its lifting points",
        "Both addresses, with gate and door sizes",
        "Who disconnects and reconnects the machines",
        "Your preferred shutdown window",
      ],
    },
    faqs: [
      { q: "Do you disconnect and reconnect factory machines?", a: "No. Electrical, hydraulic and control disconnection and re-commissioning are done by your technicians or the machine supplier. RideSaudi arranges the lifting and transport." },
      { q: "Can you move a whole production line in one go?", a: "Usually it moves in sections over several loads. The number of trucks depends on how the line splits into transportable modules." },
      { q: "Can machines be moved between Riyadh and Jubail?", a: "Yes. Moves between industrial cities in different regions are planned with the right trailer for each machine and any permit needed." },
      { q: "Is a crane needed at both ends of a machinery move?", a: "Often, unless the building has an overhead crane or a heavy forklift can do the lift. This is checked for each machine before the quote." },
    ],
  }, {
    nav: "نقل معدات المصانع",
    title: "نقل معدات المصانع وخطوط الإنتاج في السعودية",
    description: "نقل مكائن المصانع وخطوط الإنتاج والمولدات ومعدات الورش بين المدن الصناعية في السعودية: تخطيط ورفع ونقل وتنزيل في الموقع الجديد.",
    h1: "نقل معدات المصانع والآلات الصناعية في السعودية",
    eyebrow: "نقل مصانع ومعدات صناعية",
    answer: "نقل معدات المصانع يعني نقل المكائن الثابتة مثل المكابس ومكائن التشغيل وأجزاء خطوط الإنتاج والمولدات والكمبروسرات من مبنى أو مدينة صناعية إلى أخرى. يجمع ذلك فصل المعدات بواسطة فنييك، والرفع، والنقل على تريلا سطحة أو لوبد، ثم التنزيل في الموقع الجديد. ترتب RideSaudi جانب الرفع والنقل لكل مكينة.",
    summary: "رفع ونقل مكائن المصانع والمعدات الصناعية بين المباني والمدن الصناعية.",
    sections: [
      {
        h: "ما الذي يميز نقل المصانع",
        p: [
          "على عكس المعدات الإنشائية، مكائن المصانع لا تتحرك بنفسها. يجب دفعها على عجلات نقل أو رفعها بالجاكات أو الكرين لإخراجها من المبنى، غالبًا عبر أبواب وأرضيات لها حدود تحمل، ثم تحميلها بكرين أو رافعة شوكية ثقيلة. كثير من المكائن ثقيلة من الأعلى، ولها لوحات تحكم حساسة، وتحتاج تثبيت الأجزاء المتحركة قبل النقل.",
          "النقل شائع بين المدن الصناعية حول الرياض وجدة والدمام، ومنها إلى الجبيل وينبع والمناطق الصناعية الأحدث.",
        ],
      },
      {
        h: "من يتولى ماذا",
        p: [
          "فريق الصيانة لديك أو مورد المكينة يفصل الكهرباء والهيدروليك والتحكم، ويفرغ السوائل عند الحاجة، ويركب أقفال النقل. أما جانب الرفع والنقل فيشمل تحريك المكينة لنقطة التحميل، وتحميلها وربطها ونقلها ووضعها على القاعدة الجديدة. وإعادة التشغيل تبقى مع فريقك أو المورد.",
          "اتفقوا على هذا التقسيم قبل التسعير حتى لا يُنسى شيء يوم النقل.",
        ],
      },
      {
        h: "التخطيط للنقل",
        p: [
          "اكتب قائمة بكل مكينة مع وزنها ومقاساتها ونقاط رفعها. افحص طريق الخروج من المبنى وتحمل الأرضية والأوناش العلوية التي قد تساعد ومقاسات الأبواب عند الطرفين. القطع الثقيلة قد تحتاج كرينًا عند كل طرف، وأجزاء الخطوط الطويلة قد تحتاج تريلا قابلة للتمديد.",
        ],
        list: ["قائمة المكائن بالأوزان والمقاسات", "طريق الخروج من المبنى ومقاسات الأبواب", "نقاط الرفع وتعليمات المصنّع", "كرين أو رافعة شوكية عند كل طرف", "مكان التركيب في الموقع الجديد"],
      },
    ],
    table: {
      h: "حمولات النقل الصناعي المعتادة",
      head: ["المعدة", "طريقة المناولة", "التريلا المعتادة"],
      rows: [
        ["مكائن التشغيل والمخارط والمكابس", "عجلات نقل وجاكات حتى الباب ثم رافعة أو كرين", "سطحة، أو لوبد إذا كانت عالية"],
        ["المولدات والكمبروسرات", "رفع بالكرين من نقاط الرفع", "سطحة"],
        ["أجزاء خطوط الإنتاج", "تفكيك إلى وحدات قابلة للنقل", "سطحة أو تريلا قابلة للتمديد"],
        ["الخزانات والأوعية الكبيرة", "رفع بالكرين وأحيانًا بكرينين", "لوبد أو تريلا متعددة المحاور غالبًا بتصريح"],
      ],
    },
    checklist: {
      h: "جهّز لعرض سعر النقل",
      items: [
        "قائمة المكائن: الاسم والوزن والطول والعرض والارتفاع",
        "صور لكل مكينة ونقاط رفعها",
        "العنوانان مع مقاسات البوابات والأبواب",
        "من يفصل المكائن ومن يعيد تشغيلها",
        "فترة الإيقاف المفضلة لديكم",
      ],
    },
    faqs: [
      { q: "هل تفصلون مكائن المصنع وتعيدون تشغيلها؟", a: "لا. الفصل الكهربائي والهيدروليكي وإعادة التشغيل يقوم بها فنيوك أو مورد المكينة. RideSaudi ترتب الرفع والنقل." },
      { q: "هل يمكن نقل خط إنتاج كامل دفعة واحدة؟", a: "غالبًا يُنقل على أجزاء في عدة حمولات. عدد الشاحنات يعتمد على كيفية تقسيم الخط إلى وحدات قابلة للنقل." },
      { q: "هل يمكن نقل المكائن بين الرياض والجبيل؟", a: "نعم. النقل بين المدن الصناعية في مناطق مختلفة يُخطط له بالتريلا المناسبة لكل مكينة وأي تصريح لازم." },
      { q: "هل نحتاج كرينًا عند طرفي نقل المكائن؟", a: "غالبًا، إلا إذا كان في المبنى ونش علوي أو كانت رافعة شوكية ثقيلة تكفي. يُفحص ذلك لكل مكينة قبل عرض السعر." },
    ],
  }),
];
