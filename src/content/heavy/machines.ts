import type { ServicePage } from "../types";
import { CRANE, EXCAVATOR, FLATBED, FORKLIFT, HEAVY, HT, LOADER, LOWBED, OVERSIZED, RELOCATION, heavyPage } from "./shared";

/** Machine-led pages. Weights are described as classes; the customer's plate figure always decides. */
export const heavyMachines: ServicePage[] = [
  heavyPage(HEAVY, HT, "heavy_machinery", [LOWBED, EXCAVATOR, LOADER, FORKLIFT, CRANE, OVERSIZED], {
    nav: "Heavy Equipment Transport",
    title: "Heavy Equipment Transport in Saudi Arabia",
    description: "Construction machinery transport across Saudi Arabia: excavators, shuwel, dozers, graders, rollers, backhoes and lifts, matched to the right trailer.",
    h1: "Heavy Equipment and Construction Machinery Transport in Saudi Arabia",
    eyebrow: "Machinery transport",
    answer: "Heavy equipment transport moves construction and industrial machines that cannot, or should not, drive between sites: excavators, wheel loaders, bulldozers, graders, rollers, backhoe loaders, telehandlers and aerial lifts. Each machine is matched to a flatbed or lowbed by its weight and transport size. RideSaudi arranges these moves between sites in Riyadh, Jeddah, Dammam and across the Kingdom.",
    summary: "Transport for excavators, loaders, dozers, graders, rollers, backhoes and lifts between project sites.",
    sections: [
      {
        h: "Machines we are asked to move",
        p: [
          "Earthmoving machines make up most requests: crawler and wheeled excavators, wheel loaders (shuwel), bulldozers, motor graders, backhoe loaders and skid steers. Compaction rollers, asphalt pavers and road-milling machines follow road projects, while telehandlers, scissor lifts and boom lifts move between building sites and warehouses.",
          "Each type has its own transport points: a grader's long blade and frame, a roller's heavy drum, a boom lift's tall folded mast. Machine-specific pages cover excavators, wheel loaders, forklifts and cranes in more detail.",
        ],
        list: ["Crawler and wheeled excavators, including mini excavators", "Wheel loaders (shuwel) and backhoe loaders", "Bulldozers and motor graders", "Single and double drum rollers, pavers", "Telehandlers, scissor lifts and boom lifts"],
      },
      {
        h: "Why the machine's weight class matters",
        p: [
          "Construction machines are sold in weight classes, and the class usually appears in the model number. The operating weight on the machine plate is the single most useful figure for a quote: it decides whether a flatbed is enough, which lowbed configuration is needed, and whether the move will exceed axle-weight limits and need a permit.",
          "Add the weight of anything travelling with the machine, such as a second bucket, a breaker or a ripper.",
        ],
      },
      {
        h: "Site conditions at both ends",
        p: [
          "Construction sites are often on soft sand or unfinished ground. A loaded lowbed needs firm, level ground to stop, open its ramps and turn out again. Plan a loading spot near the gate, keep it clear of trenches and overhead lines, and tell us if the access road is unpaved, steep or narrow.",
          "Site working hours, gate passes and safety inductions are common on large projects. Mention them early so the truck arrives inside the permitted window.",
        ],
      },
      {
        h: "Single moves and project mobilisation",
        p: [
          "Some customers move one machine from a rental yard to a site; contractors mobilising a new project may move a whole fleet over a few days. For several machines, send a list with models and weights. Grouping machines by trailer type and date usually lowers the total cost and simplifies the site's planning.",
        ],
      },
    ],
    table: {
      h: "Common machines and their usual trailer",
      head: ["Machine", "Usual trailer", "Transport note"],
      rows: [
        ["Mini excavator, skid steer", "Flatbed or small truck", "Light; often loaded by ramps"],
        ["Mid-size and large excavator", "Lowbed", "Boom folded low; counterweight may travel separately on big models"],
        ["Wheel loader (shuwel)", "Lowbed for most sizes", "Bucket lowered and secured; articulation locked"],
        ["Bulldozer", "Lowbed", "Blade width can exceed standard width"],
        ["Motor grader", "Lowbed", "Long frame; blade angled within width"],
        ["Roller", "Flatbed or lowbed", "Heavy drum; chocked against rolling"],
        ["Scissor or boom lift", "Flatbed", "Stowed height checked before loading"],
      ],
    },
    checklist: {
      h: "To quote a machinery move, send",
      items: [
        "Machine type, make and model for each unit",
        "Operating weight and attachments travelling with it",
        "Transport length, width and height",
        "Runs and drives onto ramps, or needs winching or a crane",
        "Site addresses, ground conditions and gate times",
        "Dates, and whether several machines move together",
      ],
    },
    faqs: [
      { q: "Can you move several machines for a new project?", a: "Yes. Send a list with models and weights. Machines are grouped by trailer type and date, and the quote covers the full mobilisation." },
      { q: "Do you transport bulldozers and graders?", a: "Yes, usually on a lowbed. Bulldozer blades and grader frames often need a width or length check, and sometimes a permit." },
      { q: "Can a machine that does not run be transported?", a: "Yes. A non-running machine is winched onto the trailer or lifted by crane. Say so in your request so the right equipment is arranged." },
      { q: "Do you transport rented equipment for rental companies?", a: "Yes. Rental yards and their customers request deliveries and returns between yards and sites. Regular moves can be quoted together." },
      { q: "What weight should I give for a machine?", a: "The operating weight from the machine plate or brochure, plus any extra attachment travelling with it. If you only know the model, send it and we will check." },
    ],
  }, {
    nav: "نقل المعدات الثقيلة",
    title: "نقل المعدات الثقيلة والآليات في السعودية",
    description: "نقل المعدات الإنشائية في السعودية: الحفارات والشيولات والدركترات والقريدرات والحدلات والبوكلينات والرافعات، بالتريلا المناسبة لكل معدة.",
    h1: "نقل المعدات الثقيلة ومعدات البناء في السعودية",
    eyebrow: "نقل آليات ومعدات",
    answer: "نقل المعدات الثقيلة يعني نقل الآليات الإنشائية والصناعية التي لا تستطيع أو لا يصح أن تسير بين المواقع: الحفارات والشيولات والدركترات والقريدرات والحدلات والباكهو والتلسكوبيات ورافعات المنصات. تُطابق كل معدة مع تريلا سطحة أو لوبد حسب وزنها ومقاساتها. ترتب RideSaudi هذا النقل بين المواقع في الرياض وجدة والدمام وأنحاء المملكة.",
    summary: "نقل الحفارات والشيولات والدركترات والقريدرات والحدلات والباكهو ورافعات المنصات بين المواقع.",
    sections: [
      {
        h: "المعدات التي يُطلب نقلها",
        p: [
          "معدات الحفر والتسوية هي أغلب الطلبات: الحفارات بالجنزير وبالكفرات، والشيولات، والدركترات، والقريدرات، والباكهو، والبوبكات. تتبعها الحدلات وفرادات الأسفلت ومكائن الكشط في مشاريع الطرق، بينما تتنقل التلسكوبيات ورافعات المقص والمان ليفت بين مواقع البناء والمستودعات.",
          "لكل نوع نقاطه في النقل: شفرة القريدر الطويلة وهيكله، وأسطوانة الحدلة الثقيلة، وصاري المان ليفت العالي وهو مطوي. صفحات الحفارات والشيولات والرافعات الشوكية والكرينات تشرح كل منها بتفصيل أكثر.",
        ],
        list: ["الحفارات بالجنزير وبالكفرات ومنها الحفارات الصغيرة", "الشيولات والباكهو", "الدركترات والقريدرات", "الحدلات بأسطوانة أو أسطوانتين وفرادات الأسفلت", "التلسكوبيات ورافعات المقص والمان ليفت"],
      },
      {
        h: "لماذا تهم فئة وزن المعدة",
        p: [
          "تُباع المعدات الإنشائية بفئات وزن، وغالبًا تظهر الفئة في رقم الموديل. وزن التشغيل المكتوب على لوحة المعدة هو أهم رقم في التسعير: يحدد هل تكفي السطحة، وأي نوع لوبد مطلوب، وهل سيتجاوز النقل حدود الوزن على المحاور ويحتاج تصريحًا.",
          "أضف وزن أي شيء يُنقل مع المعدة، مثل جردل إضافي أو كسارة أو ريبر.",
        ],
      },
      {
        h: "ظروف الموقع عند الطرفين",
        p: [
          "مواقع البناء غالبًا على رمل ناعم أو أرض غير ممهدة. اللوبد المحمل يحتاج أرضًا صلبة مستوية ليقف ويفتح الرامبات ويخرج مرة أخرى. جهز مكان تحميل قرب البوابة بعيدًا عن الحفر والأسلاك العلوية، وأخبرنا إذا كان طريق الدخول ترابيًا أو منحدرًا أو ضيقًا.",
          "ساعات عمل الموقع وتصاريح الدخول وتعريف السلامة شائعة في المشاريع الكبيرة. اذكرها مبكرًا حتى تصل الشاحنة في النافذة المسموحة.",
        ],
      },
      {
        h: "نقل معدة واحدة أو تجهيز مشروع كامل",
        p: [
          "بعض العملاء ينقلون معدة واحدة من ساحة التأجير إلى الموقع، والمقاولون الذين يبدؤون مشروعًا جديدًا قد ينقلون أسطولًا كاملًا خلال أيام. لعدة معدات أرسل قائمة بالموديلات والأوزان. تجميع المعدات حسب نوع التريلا والتاريخ يخفض التكلفة الإجمالية غالبًا ويسهل التخطيط في الموقع.",
        ],
      },
    ],
    table: {
      h: "المعدات الشائعة والتريلا المعتادة لها",
      head: ["المعدة", "التريلا المعتادة", "ملاحظة النقل"],
      rows: [
        ["حفار صغير، بوبكات", "سطحة أو شاحنة صغيرة", "خفيفة، وغالبًا تصعد على رامبات"],
        ["حفار متوسط وكبير", "لوبد", "الذراع مطوي ومنخفض، والثقل الموازن قد يُنقل منفصلًا في الموديلات الكبيرة"],
        ["شيول", "لوبد لأغلب المقاسات", "الجردل منزل ومربوط، والمفصل مقفل"],
        ["دركتر", "لوبد", "عرض الشفرة قد يتجاوز العرض النظامي"],
        ["قريدر", "لوبد", "هيكل طويل، والشفرة مائلة ضمن العرض"],
        ["حدلة", "سطحة أو لوبد", "أسطوانة ثقيلة تُسند ضد التدحرج"],
        ["رافعة مقص أو مان ليفت", "سطحة", "يُفحص الارتفاع وهي مطوية قبل التحميل"],
      ],
    },
    checklist: {
      h: "لتسعير نقل المعدات أرسل",
      items: [
        "نوع كل معدة وماركتها وموديلها",
        "وزن التشغيل والملحقات التي تُنقل معها",
        "الطول والعرض والارتفاع بوضعية النقل",
        "هل تعمل وتصعد الرامبات، أم تحتاج ونشًا أو كرينًا",
        "عناوين المواقع وحالة الأرض وأوقات البوابات",
        "التواريخ، وهل ستُنقل عدة معدات معًا",
      ],
    },
    faqs: [
      { q: "هل تنقلون عدة معدات لمشروع جديد؟", a: "نعم. أرسل قائمة بالموديلات والأوزان، فنجمع المعدات حسب نوع التريلا والتاريخ، ويغطي عرض السعر تجهيز المشروع كاملًا." },
      { q: "هل تنقلون الدركترات والقريدرات؟", a: "نعم، غالبًا باللوبد. شفرات الدركتر وهياكل القريدر تحتاج كثيرًا فحصًا للعرض أو الطول، وأحيانًا تصريحًا." },
      { q: "هل يمكن نقل معدة معطلة لا تشتغل؟", a: "نعم. المعدة المعطلة تُسحب بالونش إلى التريلا أو تُرفع بالكرين. اذكر ذلك في الطلب لنرتب المعدات المناسبة." },
      { q: "هل تنقلون معدات شركات التأجير؟", a: "نعم. ساحات التأجير وعملاؤها يطلبون التوصيل والإرجاع بين الساحات والمواقع، ويمكن تسعير النقل المتكرر معًا." },
      { q: "ما الوزن الذي أذكره للمعدة؟", a: "وزن التشغيل من لوحة المعدة أو كتيّبها، مع أي ملحق إضافي يُنقل معها. إذا كنت تعرف الموديل فقط فأرسله ونتحقق نحن." },
    ],
  }),

  heavyPage(EXCAVATOR, HEAVY, "excavator", [LOWBED, LOADER, CRANE, `${HEAVY}/riyadh`, `${HEAVY}/jeddah`, `${HEAVY}/dammam`], {
    nav: "Excavator Transport",
    title: "Excavator Transport in Saudi Arabia",
    description: "Excavator transport in Saudi Arabia, from mini excavators to large crawler machines: lowbed or flatbed choice, boom position, securing and what to send for a quote.",
    h1: "Excavator Transport in Saudi Arabia",
    eyebrow: "Excavator (bokleen) transport",
    answer: "Excavator transport moves a crawler or wheeled excavator between sites on a trailer suited to its weight class: mini excavators often go on a flatbed or small truck, while mid-size and large excavators need a lowbed. The machine usually tracks up the ramps, the boom is folded low, and it is chained at its tie-down points. RideSaudi arranges excavator moves across Saudi Arabia.",
    summary: "Mini, mid-size and large excavators moved on the right flatbed or lowbed, boom folded and chained.",
    sections: [
      {
        h: "Mini, mid-size or large: why it changes the trailer",
        p: [
          "Excavators are named by weight class, and the class sets the transport. Mini excavators are light enough for a flatbed, a dropside or a small truck with ramps. Mid-size crawler excavators, the most common machines on Saudi sites, travel on a lowbed. Large mining and quarry excavators can exceed standard weight and width, and some models travel with the counterweight or bucket removed and carried separately.",
          "On Saudi sites excavators are also called bokleen (بوكلين) or hafar (حفار). If you share the make and model, we check the class from the manufacturer's data.",
        ],
      },
      {
        h: "Preparing an excavator for transport",
        p: [
          "Before the truck arrives, clean mud and loose stones from the tracks and the upper structure, because they fall off at speed. Plan to fold the boom and arm with the bucket curled in, as low as the deck allows. Lock the upper structure swing, remove or secure loose items in the cab, and close the windows and doors.",
          "Check the transport height with the boom folded, not in the working position. This single measurement decides whether a standard lowbed is enough.",
        ],
        list: ["Tracks and upper structure cleaned", "Boom and arm folded, bucket curled in and lowered", "Swing lock engaged", "Cab cleared and closed", "Transport height measured in folded position"],
      },
      {
        h: "Loading and securing",
        p: [
          "The operator tracks the excavator up the ramps slowly, guided by a banksman, keeping the machine straight to the deck. Once in position the bucket is lowered to the deck, the engine stopped and the machine chained at its designated tie-down points, with the boom and bucket secured as well.",
          "Wheeled excavators need their stabilisers and blade raised and locked. A non-running excavator is winched up or lifted by crane.",
        ],
      },
    ],
    table: {
      h: "Excavator class and usual transport",
      head: ["Class", "Usual transport", "Points to check"],
      rows: [
        ["Mini excavator", "Flatbed, dropside or small truck with ramps", "Ramp angle and tie-down points"],
        ["Mid-size crawler excavator", "Lowbed", "Folded height and track width"],
        ["Large crawler excavator", "Multi-axle lowbed", "Axle weights; counterweight or bucket removal; permit"],
        ["Wheeled excavator", "Lowbed or flatbed by size", "Stabilisers and blade locked up"],
      ],
    },
    checklist: {
      h: "For an excavator transport quote",
      items: [
        "Make and model (for example the manufacturer's model code)",
        "Operating weight and bucket or breaker travelling with it",
        "Track width and folded transport height",
        "Running and able to track up ramps, or not",
        "Pickup and delivery sites with ground conditions",
      ],
    },
    faqs: [
      { q: "Do mini excavators need a lowbed?", a: "Usually not. Mini excavators normally fit on a flatbed, dropside trailer or small truck with ramps. Larger classes need a lowbed." },
      { q: "Can the excavator bucket stay on during transport?", a: "Usually yes, curled in and lowered to the deck. A spare bucket, breaker or other attachment is secured separately on the trailer." },
      { q: "Is an excavator the same as a bokleen?", a: "Yes. Bokleen (بوكلين) is a common Saudi site word for a crawler excavator, alongside hafar (حفار)." },
      { q: "Can you transport a large excavator over the legal width?", a: "Yes, as an exceptional load with a permit and, if required, an escort. The permit needs and lead time are stated in your quote." },
    ],
  }, {
    nav: "نقل الحفارات",
    title: "نقل حفارات وبوكلينات في السعودية",
    description: "نقل الحفارات في السعودية من الحفار الصغير إلى الحفار الكبير بالجنزير: اختيار اللوبد أو السطحة، وطي الذراع، والربط، وما الذي ترسله لعرض السعر.",
    h1: "نقل الحفارات والبوكلينات في السعودية",
    eyebrow: "نقل حفار (بوكلين)",
    answer: "نقل الحفارات يعني نقل الحفار بالجنزير أو بالكفرات بين المواقع على تريلا تناسب فئة وزنه: الحفار الصغير يكفيه غالبًا سطحة أو شاحنة صغيرة، أما الحفار المتوسط والكبير فيحتاج لوبد. يصعد الحفار عادة على الرامبات، ويُطوى الذراع منخفضًا، ويُربط بالسلاسل من نقاط الربط. ترتب RideSaudi نقل الحفارات في أنحاء السعودية.",
    summary: "نقل الحفارات الصغيرة والمتوسطة والكبيرة على السطحة أو اللوبد المناسب مع طي الذراع والربط بالسلاسل.",
    sections: [
      {
        h: "صغير أم متوسط أم كبير: لماذا يتغير نوع التريلا",
        p: [
          "تُسمى الحفارات حسب فئة الوزن، والفئة تحدد طريقة النقل. الحفار الصغير خفيف بما يكفي لسطحة أو تريلا بجوانب أو شاحنة صغيرة برامبات. الحفار المتوسط بالجنزير، وهو الأكثر انتشارًا في المواقع السعودية، يُنقل باللوبد. أما حفارات المناجم والكسارات الكبيرة فقد تتجاوز الوزن والعرض النظامي، وبعض موديلاتها يُنقل وثقلها الموازن أو جردلها مفكوك ومنقول منفصلًا.",
          "في المواقع يُسمى الحفار أيضًا بوكلين. إذا أرسلت الماركة والموديل نتحقق من الفئة من بيانات المصنّع.",
        ],
      },
      {
        h: "تجهيز الحفار للنقل",
        p: [
          "قبل وصول الشاحنة نظف الجنزير والجزء العلوي من الطين والحجارة السائبة لأنها تتطاير مع السرعة. خطط لطي الذراع والجردل للداخل بأقل ارتفاع تسمح به الأرضية. فعّل قفل الدوران، وأخرج أو ثبت الأغراض السائبة في الكابينة، وأغلق النوافذ والأبواب.",
          "قس ارتفاع النقل والذراع مطوي وليس في وضع العمل. هذا القياس وحده يحدد هل يكفي لوبد عادي.",
        ],
        list: ["الجنزير والجزء العلوي نظيفان", "الذراع مطوي والجردل للداخل ومنزل", "قفل الدوران مفعّل", "الكابينة فارغة ومغلقة", "قياس الارتفاع والذراع مطوي"],
      },
      {
        h: "التحميل والربط",
        p: [
          "يصعد المشغل بالحفار على الرامبات ببطء وبتوجيه مُرشد، مستقيمًا مع الأرضية. وبعد التموضع يُنزل الجردل على الأرضية ويُطفأ المحرك ويُربط الحفار بالسلاسل من نقاط الربط المخصصة، مع تثبيت الذراع والجردل أيضًا.",
          "الحفار بالكفرات يحتاج رفع الأرجل الثابتة والشفرة وقفلها. والحفار المعطل يُسحب بالونش أو يُرفع بالكرين.",
        ],
      },
    ],
    table: {
      h: "فئة الحفار وطريقة النقل المعتادة",
      head: ["الفئة", "النقل المعتاد", "ما يجب فحصه"],
      rows: [
        ["حفار صغير", "سطحة أو تريلا بجوانب أو شاحنة صغيرة برامبات", "زاوية الرامبات ونقاط الربط"],
        ["حفار متوسط بالجنزير", "لوبد", "الارتفاع مطويًا وعرض الجنزير"],
        ["حفار كبير بالجنزير", "لوبد متعدد المحاور", "أوزان المحاور وفك الثقل أو الجردل والتصريح"],
        ["حفار بالكفرات", "لوبد أو سطحة حسب الحجم", "قفل الأرجل الثابتة والشفرة للأعلى"],
      ],
    },
    checklist: {
      h: "لعرض سعر نقل الحفار",
      items: [
        "الماركة والموديل (رمز الموديل من المصنّع)",
        "وزن التشغيل والجردل أو الكسارة المنقولة معه",
        "عرض الجنزير والارتفاع مطويًا",
        "هل يعمل ويصعد الرامبات بنفسه أم لا",
        "موقعا التحميل والتسليم وحالة الأرض",
      ],
    },
    faqs: [
      { q: "هل يحتاج الحفار الصغير لوبد؟", a: "غالبًا لا. الحفار الصغير يُنقل عادة على سطحة أو تريلا بجوانب أو شاحنة صغيرة برامبات، أما الفئات الأكبر فتحتاج لوبد." },
      { q: "هل يبقى جردل الحفار مركبًا أثناء النقل؟", a: "غالبًا نعم، مطويًا للداخل ومنزلًا على الأرضية. أما الجردل الإضافي أو الكسارة أو أي ملحق آخر فيُربط منفصلًا على التريلا." },
      { q: "هل الحفار هو نفسه البوكلين؟", a: "نعم. البوكلين اسم شائع في المواقع السعودية للحفار بالجنزير." },
      { q: "هل يمكن نقل حفار كبير يتجاوز العرض النظامي؟", a: "نعم، كحمولة استثنائية بتصريح، ومع مرافقة إذا لزم. متطلبات التصريح ومدته تُذكر في عرض السعر." },
    ],
  }),

  heavyPage(LOADER, HEAVY, "wheel_loader", [LOWBED, EXCAVATOR, FORKLIFT, `${HEAVY}/riyadh`, `${HEAVY}/jeddah`, `${HEAVY}/dammam`], {
    nav: "Wheel Loader (Shuwel) Transport",
    title: "Wheel Loader (Shuwel) Transport in Saudi Arabia",
    description: "Shuwel (wheel loader) transport in Saudi Arabia: compact to large loaders on lowbed or flatbed, articulation lock, bucket securing, and quote details.",
    h1: "Wheel Loader (Shuwel) Transport in Saudi Arabia",
    eyebrow: "Shuwel transport",
    answer: "Wheel loader transport, known on Saudi sites as shuwel transport, moves an articulated front loader between sites. Compact loaders can travel on a flatbed; most mid-size and large loaders need a lowbed because of their weight and the height of the cab and lift arms. The articulation joint is locked, the bucket lowered and the machine chained down. RideSaudi arranges shuwel moves across Saudi Arabia.",
    summary: "Shuwel moves on flatbed or lowbed with the articulation locked, bucket lowered and the machine chained.",
    sections: [
      {
        h: "Shuwel is a wheel loader, not a forklift or excavator",
        p: [
          "In Saudi Arabia shuwel (شيول) means a wheel loader: an articulated machine on four large tyres with a front bucket for loading sand, aggregate and soil. It is different from a forklift, which lifts pallets on forks, and from an excavator, which digs with a boom and arm. The difference matters because loaders bend in the middle, have high cabs and heavy rear counterweights, and travel differently.",
          "A backhoe loader, with a loader bucket at the front and a digging arm at the back, is a separate machine again; include it as such in your request.",
        ],
      },
      {
        h: "Preparing and loading a shuwel",
        p: [
          "Fit the articulation lock (the steering frame lock bar) before loading, so the machine cannot fold on the deck. Empty and lower the bucket. The operator drives up the ramps straight and slowly; tyres need firm ramps and a dry deck to avoid slipping.",
          "On the deck the loader is chained at its tie-down points, the bucket rests on the deck, and the parking brake is set. Check the cab height and any exhaust or beacon on the roof against the trailer's deck height.",
        ],
        list: ["Articulation lock fitted", "Bucket emptied and lowered", "Mud cleaned from tyres and frame", "Roof beacons or antennas folded if possible", "Transport height measured on the trailer"],
      },
      {
        h: "Where loaders move most",
        p: [
          "Loaders move between quarries, batching plants, road projects and rental yards. Around Riyadh, Jeddah and Dammam they shuttle between the industrial areas and project sites, and intercity moves follow the start of new projects.",
        ],
      },
    ],
    table: {
      h: "Loader size and usual trailer",
      head: ["Loader size", "Usual trailer", "Note"],
      rows: [
        ["Compact or mini loader", "Flatbed or small truck", "Ramps or crane depending on site"],
        ["Mid-size wheel loader", "Lowbed", "Most common site loader size"],
        ["Large wheel loader", "Multi-axle lowbed", "Weight and width checked; permit possible"],
        ["Backhoe loader", "Flatbed or lowbed", "Rear arm folded and locked; check height"],
      ],
    },
    checklist: {
      h: "For a shuwel transport quote",
      items: [
        "Make and model of the wheel loader",
        "Operating weight and bucket size",
        "Width over tyres and cab height",
        "Pickup and delivery sites and access",
        "Date and whether the loader runs",
      ],
    },
    faqs: [
      { q: "What is a shuwel?", a: "Shuwel (شيول) is the Saudi name for a wheel loader: an articulated machine with four large tyres and a front bucket used to load and move material." },
      { q: "Can a wheel loader be driven to the site instead?", a: "Over short distances inside a site, yes. On public roads and over long distances it is slower, wears the tyres and may not be permitted, so loaders are usually carried." },
      { q: "Does a shuwel always need a lowbed?", a: "Compact loaders can go on a flatbed. Mid-size and larger loaders usually need a lowbed because of their weight and cab height." },
      { q: "What is the articulation lock on a loader?", a: "A bar that locks the front and rear frames together so the loader cannot bend at its centre joint during loading and transport." },
    ],
  }, {
    nav: "نقل الشيولات",
    title: "نقل شيول في السعودية",
    description: "نقل الشيولات في السعودية من الشيول الصغير إلى الكبير على لوبد أو سطحة، مع قفل المفصل وتثبيت الجردل والتفاصيل المطلوبة لعرض السعر.",
    h1: "نقل الشيولات في السعودية",
    eyebrow: "نقل شيول",
    answer: "نقل الشيول يعني نقل اللودر بالكفرات ذي المفصل الأوسط بين المواقع. الشيول الصغير يمكن نقله على سطحة، أما أغلب الشيولات المتوسطة والكبيرة فتحتاج لوبد بسبب وزنها وارتفاع الكابينة والأذرع. يُقفل المفصل ويُنزل الجردل وتُربط المعدة بالسلاسل. ترتب RideSaudi نقل الشيولات في أنحاء السعودية.",
    summary: "نقل الشيول على سطحة أو لوبد مع قفل المفصل وإنزال الجردل والربط بالسلاسل.",
    sections: [
      {
        h: "الشيول لودر بالكفرات وليس رافعة شوكية ولا حفارًا",
        p: [
          "الشيول في السعودية هو اللودر بالكفرات: معدة بمفصل في الوسط على أربع كفرات كبيرة وجردل أمامي لتحميل الرمل والبحص والتراب. يختلف عن الرافعة الشوكية التي ترفع الطبالي بالشوكات، وعن الحفار الذي يحفر بالذراع. والفرق مهم لأن الشيول ينثني من الوسط، وكابينته عالية، وثقله الموازن الخلفي كبير، فطريقة نقله مختلفة.",
          "الباكهو، الذي له جردل لودر في الأمام وذراع حفر في الخلف، معدة مختلفة أيضًا، فاذكره باسمه في طلبك.",
        ],
      },
      {
        h: "تجهيز الشيول وتحميله",
        p: [
          "ركّب قفل المفصل (قضيب قفل الهيكل) قبل التحميل حتى لا ينثني الشيول على الأرضية. فرّغ الجردل وأنزله. يصعد المشغل على الرامبات مستقيمًا وببطء، والكفرات تحتاج رامبات ثابتة وأرضية جافة حتى لا تنزلق.",
          "على الأرضية يُربط الشيول بالسلاسل من نقاط الربط، ويرتكز الجردل على الأرضية، ويُشد فرامل الوقوف. افحص ارتفاع الكابينة وأي عادم أو فلاشر على السقف مقارنة بارتفاع أرضية التريلا.",
        ],
        list: ["قفل المفصل مركب", "الجردل فارغ ومنزل", "الكفرات والهيكل نظيفة من الطين", "طي الفلاشر أو الهوائي إن أمكن", "قياس الارتفاع على التريلا"],
      },
      {
        h: "أين تتنقل الشيولات غالبًا",
        p: [
          "تتنقل الشيولات بين الكسارات ومحطات الخرسانة ومشاريع الطرق وساحات التأجير. وحول الرياض وجدة والدمام تتحرك بين المناطق الصناعية ومواقع المشاريع، ويتبع النقل بين المدن انطلاق المشاريع الجديدة.",
        ],
      },
    ],
    table: {
      h: "حجم الشيول والتريلا المعتادة",
      head: ["الحجم", "التريلا المعتادة", "ملاحظة"],
      rows: [
        ["شيول صغير", "سطحة أو شاحنة صغيرة", "رامبات أو كرين حسب الموقع"],
        ["شيول متوسط", "لوبد", "الحجم الأكثر انتشارًا في المواقع"],
        ["شيول كبير", "لوبد متعدد المحاور", "فحص الوزن والعرض، وقد يلزم تصريح"],
        ["باكهو", "سطحة أو لوبد", "الذراع الخلفي مطوي ومقفل، وفحص الارتفاع"],
      ],
    },
    checklist: {
      h: "لعرض سعر نقل الشيول",
      items: [
        "ماركة الشيول وموديله",
        "وزن التشغيل وحجم الجردل",
        "العرض على الكفرات وارتفاع الكابينة",
        "موقعا التحميل والتسليم وسهولة الدخول",
        "التاريخ وهل الشيول يعمل",
      ],
    },
    faqs: [
      { q: "ما هو الشيول؟", a: "الشيول هو الاسم السعودي للودر بالكفرات: معدة بمفصل في الوسط وأربع كفرات كبيرة وجردل أمامي لتحميل المواد ونقلها." },
      { q: "هل يمكن قيادة الشيول إلى الموقع بدل نقله؟", a: "لمسافات قصيرة داخل الموقع نعم. أما على الطرق العامة ولمسافات طويلة فهو بطيء ويستهلك الكفرات وقد لا يُسمح به، لذلك يُنقل الشيول عادة." },
      { q: "هل يحتاج الشيول لوبد دائمًا؟", a: "الشيول الصغير يُنقل على سطحة، أما المتوسط والكبير فيحتاج غالبًا لوبد بسبب الوزن وارتفاع الكابينة." },
      { q: "ما هو قفل المفصل في الشيول؟", a: "قضيب يربط الهيكل الأمامي بالخلفي حتى لا ينثني الشيول من المفصل الأوسط أثناء التحميل والنقل." },
    ],
  }),

  heavyPage(FORKLIFT, HEAVY, "forklift", [FLATBED, RELOCATION, LOADER, `${HEAVY}/riyadh`, `${HEAVY}/jeddah`, `${HEAVY}/dammam`], {
    nav: "Forklift Transport",
    title: "Forklift Transport in Saudi Arabia",
    description: "Forklift transport between warehouses, ports and sites in Saudi Arabia: warehouse, rough-terrain and container forklifts, telehandlers and scissor lifts.",
    h1: "Forklift Transport in Saudi Arabia",
    eyebrow: "Forklift and lift transport",
    answer: "Forklift transport moves a forklift truck between warehouses, factories, ports and sites, usually on a flatbed or small truck with ramps or a crane. Large container-handling forklifts can need a lowbed. The forks are lowered, the mast tilted back and the machine strapped or chained. RideSaudi also arranges transport for telehandlers, scissor lifts and boom lifts in Saudi Arabia.",
    summary: "Warehouse, rough-terrain and container forklifts, telehandlers and aerial lifts moved on a flatbed or lowbed.",
    sections: [
      {
        h: "Forklift, telehandler or crane: get the name right",
        p: [
          "A forklift (رافعة شوكية, often just called forklift on Saudi sites) lifts pallets on two forks on a vertical mast. A telehandler has a telescopic boom that can reach forward and up. A crane lifts with a hook and is a different machine entirely. Getting the type right in the request avoids sending the wrong truck.",
          "Warehouse forklifts are small and heavy for their size because of their rear counterweight. Rough-terrain forklifts are larger with big tyres. Container-handling forklifts and reach stackers at ports are among the heaviest machines moved by road.",
        ],
      },
      {
        h: "Loading a forklift",
        p: [
          "A running forklift can drive up suitable ramps onto a flatbed or small truck, but solid-tyred warehouse forklifts handle steep, smooth ramps poorly; a crane or a second forklift lift is often safer. Electric forklifts should be charged enough to drive on and off, or arranged for a lift.",
          "For transport, lower the forks fully, tilt the mast back, set the parking brake and chain or strap the machine at its frame. If the mast is too tall for the route, some models can travel with the mast lowered or removed.",
        ],
        list: ["Forks lowered, mast tilted back", "Battery charged or lift arranged", "Parking brake set", "Tall masts measured; removal if needed", "Loose items and gas cylinders removed or secured"],
      },
      {
        h: "Scissor lifts and boom lifts",
        p: [
          "Aerial work platforms travel stowed: platform fully down, boom folded and rested on its support. Their stowed height and weight vary a lot by model, so the model number matters. Rental companies often move several lifts on one flatbed for a project.",
        ],
      },
    ],
    table: {
      h: "Forklifts and lifts: usual transport",
      head: ["Machine", "Usual transport", "Note"],
      rows: [
        ["Warehouse forklift (electric or diesel)", "Small truck or flatbed", "Lift or gentle ramps for solid tyres"],
        ["Rough-terrain forklift", "Flatbed", "Large tyres; check width"],
        ["Container forklift / reach stacker", "Lowbed", "Very heavy; mast height and axle weight checked"],
        ["Telehandler", "Flatbed or lowbed", "Boom fully retracted and lowered"],
        ["Scissor or boom lift", "Flatbed", "Stowed height by model"],
      ],
    },
    checklist: {
      h: "For a forklift transport quote",
      items: [
        "Forklift type, make, model and lifting capacity",
        "Weight and mast height when lowered",
        "Electric, diesel or gas, and whether it can drive",
        "Loading equipment at each end",
        "Addresses, date and access times",
      ],
    },
    faqs: [
      { q: "Is a forklift the same as a crane?", a: "No. A forklift lifts pallets on forks on a vertical mast; a crane lifts with a hook from a boom. They need different transport, so name the machine correctly in your request." },
      { q: "Can a forklift drive onto the truck by itself?", a: "Often, using suitable ramps. Warehouse forklifts with small solid tyres are usually safer lifted on by crane or another forklift." },
      { q: "Do you transport container forklifts and reach stackers?", a: "Yes, on a lowbed. They are very heavy, so weight per axle and mast height are checked, and a permit may be needed." },
      { q: "Can several scissor lifts go on one truck?", a: "Often yes, depending on their stowed size and weight. Send the models and quantity for a combined quote." },
    ],
  }, {
    nav: "نقل الرافعات الشوكية",
    title: "نقل رافعة شوكية (فوركلفت) في السعودية",
    description: "نقل الرافعات الشوكية بين المستودعات والموانئ والمواقع في السعودية: فوركلفت المستودعات والطرق الوعرة ورافعات الحاويات والتلسكوبيات ورافعات المقص.",
    h1: "نقل الرافعات الشوكية (الفوركلفت) في السعودية",
    eyebrow: "نقل فوركلفت ورافعات منصات",
    answer: "نقل الرافعة الشوكية يعني نقل الفوركلفت بين المستودعات والمصانع والموانئ والمواقع، غالبًا على سطحة أو شاحنة صغيرة برامبات أو بالرفع بالكرين. رافعات الحاويات الكبيرة قد تحتاج لوبد. تُنزل الشوكات ويُمال الصاري للخلف وتُربط المعدة. وترتب RideSaudi أيضًا نقل التلسكوبيات ورافعات المقص والمان ليفت في السعودية.",
    summary: "نقل فوركلفت المستودعات والطرق الوعرة ورافعات الحاويات والتلسكوبيات ورافعات المنصات على سطحة أو لوبد.",
    sections: [
      {
        h: "رافعة شوكية أم تلسكوبي أم كرين: سمّها صحيحًا",
        p: [
          "الرافعة الشوكية (الفوركلفت) ترفع الطبالي بشوكتين على صاري عمودي. التلسكوبي له ذراع تلسكوبي يمتد للأمام والأعلى. أما الكرين فيرفع بالخطاف وهو معدة مختلفة تمامًا. تحديد النوع الصحيح في الطلب يمنع إرسال الشاحنة الخطأ.",
          "فوركلفت المستودعات صغير لكنه ثقيل لحجمه بسبب الثقل الموازن الخلفي. فوركلفت الطرق الوعرة أكبر بكفرات كبيرة. ورافعات الحاويات والريتش ستاكر في الموانئ من أثقل المعدات التي تُنقل على الطرق.",
        ],
      },
      {
        h: "تحميل الرافعة الشوكية",
        p: [
          "الفوركلفت الذي يعمل يمكنه الصعود على رامبات مناسبة إلى سطحة أو شاحنة صغيرة، لكن فوركلفت المستودعات بكفرات صلبة لا يتعامل جيدًا مع الرامبات الحادة الملساء، والرفع بالكرين أو بفوركلفت آخر أسلم غالبًا. والفوركلفت الكهربائي يجب أن يكون مشحونًا بما يكفي للصعود والنزول، أو نرتب رفعه.",
          "للنقل تُنزل الشوكات بالكامل ويُمال الصاري للخلف وتُشد فرامل الوقوف وتُربط المعدة من هيكلها. وإذا كان الصاري أعلى مما يسمح به المسار، فبعض الموديلات تُنقل والصاري منزل أو مفكوك.",
        ],
        list: ["الشوكات منزلة والصاري مائل للخلف", "البطارية مشحونة أو الرفع مرتب", "فرامل الوقوف مشدودة", "قياس الصواري العالية وفكها عند الحاجة", "إزالة الأغراض السائبة وأسطوانات الغاز أو تثبيتها"],
      },
      {
        h: "رافعات المقص والمان ليفت",
        p: [
          "رافعات المنصات تُنقل وهي مطوية: المنصة منزلة بالكامل، والذراع مطوي ومرتكز على مسنده. ارتفاعها مطوية ووزنها يختلفان كثيرًا بين الموديلات، لذلك رقم الموديل مهم. وشركات التأجير تنقل غالبًا عدة رافعات على سطحة واحدة للمشروع.",
        ],
      },
    ],
    table: {
      h: "الرافعات الشوكية والمنصات: النقل المعتاد",
      head: ["المعدة", "النقل المعتاد", "ملاحظة"],
      rows: [
        ["فوركلفت مستودعات (كهرباء أو ديزل)", "شاحنة صغيرة أو سطحة", "رفع أو رامبات هادئة للكفرات الصلبة"],
        ["فوركلفت طرق وعرة", "سطحة", "كفرات كبيرة، وفحص العرض"],
        ["رافعة حاويات / ريتش ستاكر", "لوبد", "ثقيلة جدًا، وفحص ارتفاع الصاري ووزن المحور"],
        ["تلسكوبي", "سطحة أو لوبد", "الذراع مسحوب بالكامل ومنزل"],
        ["رافعة مقص أو مان ليفت", "سطحة", "الارتفاع مطوية حسب الموديل"],
      ],
    },
    checklist: {
      h: "لعرض سعر نقل الرافعة الشوكية",
      items: [
        "نوع الفوركلفت وماركته وموديله وحمولة الرفع",
        "الوزن وارتفاع الصاري وهو منزل",
        "كهرباء أو ديزل أو غاز، وهل يمكن قيادته",
        "معدات التحميل عند كل طرف",
        "العناوين والتاريخ وأوقات الدخول",
      ],
    },
    faqs: [
      { q: "هل الرافعة الشوكية هي نفسها الكرين؟", a: "لا. الرافعة الشوكية ترفع الطبالي بالشوكات على صاري عمودي، والكرين يرفع بالخطاف من ذراع. نقلهما مختلف، فاذكر المعدة باسمها الصحيح." },
      { q: "هل يصعد الفوركلفت إلى الشاحنة بنفسه؟", a: "غالبًا باستخدام رامبات مناسبة. أما فوركلفت المستودعات بكفرات صلبة صغيرة فالأسلم رفعه بالكرين أو بفوركلفت آخر." },
      { q: "هل تنقلون رافعات الحاويات والريتش ستاكر؟", a: "نعم باللوبد. هي ثقيلة جدًا، لذلك يُفحص وزن المحور وارتفاع الصاري، وقد يلزم تصريح." },
      { q: "هل يمكن نقل عدة رافعات مقص على شاحنة واحدة؟", a: "غالبًا نعم حسب مقاساتها مطوية ووزنها. أرسل الموديلات والعدد لعرض سعر مجمع." },
    ],
  }),

  heavyPage(CRANE, HEAVY, "crane", [LOWBED, OVERSIZED, EXCAVATOR, `${HEAVY}/riyadh`, `${HEAVY}/jeddah`, `${HEAVY}/dammam`], {
    nav: "Crane Transport",
    title: "Crane Transport & Crane Relocation in KSA",
    description: "Transport for crawler cranes, small mobile cranes and tower crane sections in Saudi Arabia: lowbed and extendable trailers, components and permits.",
    h1: "Crane Transport in Saudi Arabia",
    eyebrow: "Crane relocation",
    answer: "Crane transport moves cranes that cannot or should not drive on public roads: crawler cranes, rough-terrain cranes, tower crane sections and crane components such as booms, counterweights and jibs. These usually travel on lowbed or extendable trailers, often in several loads and sometimes with a permit. Road-going all-terrain cranes usually drive themselves. RideSaudi arranges crane transport across Saudi Arabia.",
    summary: "Crawler and rough-terrain cranes, tower crane sections and crane components on lowbed and extendable trailers.",
    sections: [
      {
        h: "Which cranes need a truck",
        p: [
          "Truck-mounted and all-terrain mobile cranes are built to drive on roads, so they usually travel under their own power, with counterweights carried separately. Crawler cranes, rough-terrain cranes and small pick-and-carry cranes are not road vehicles and travel on a lowbed. Tower cranes are dismantled and travel as mast sections, jib sections, cab and counterweight blocks on flatbeds and extendable trailers.",
          "In Saudi Arabia many people call any lifting machine a 'winch' (ونش) or 'crane' (كرين). Tell us the crane type and model so the correct transport is planned.",
        ],
      },
      {
        h: "Components and number of loads",
        p: [
          "A large crawler crane can travel as a base machine on one lowbed plus boom sections, counterweights and tracks on several other trailers. Long boom and jib sections need extendable trailers, and heavy counterweight blocks are spread across axles. The crane supplier's transport plan, usually in the operator's manual, lists the components and their weights.",
        ],
        list: ["Base machine or upper structure", "Boom and jib sections", "Counterweight blocks", "Tracks or outriggers if removed", "Hook block and rigging"],
      },
      {
        h: "Permits and route checks",
        p: [
          "Crane base machines and long boom sections often exceed standard width, length or axle weights, so crane moves are frequently exceptional loads. Each load is checked against the rules, and permits and escorts are arranged where needed. Allow enough lead time for this before a lift date.",
        ],
      },
    ],
    table: {
      h: "Crane type and how it usually travels",
      head: ["Crane", "Usually travels", "Note"],
      rows: [
        ["All-terrain / truck crane", "Drives itself", "Counterweight may need a separate truck"],
        ["Rough-terrain crane", "Lowbed", "Not a road vehicle; check height"],
        ["Crawler crane", "Lowbed plus several component loads", "Often exceptional loads with permits"],
        ["Tower crane", "Flatbeds and extendable trailers", "Mast, jib, cab and counterweights as separate loads"],
      ],
    },
    checklist: {
      h: "For a crane transport quote",
      items: [
        "Crane type, make and model",
        "Component list with weights (from the transport plan)",
        "Dimensions of the largest piece",
        "Site access and assembly area at both ends",
        "Required delivery date for the lift",
      ],
    },
    faqs: [
      { q: "Do mobile cranes need to be transported on a trailer?", a: "Road-going truck and all-terrain cranes usually drive themselves. Crawler and rough-terrain cranes, and tower crane parts, are carried on trailers." },
      { q: "How many trucks does a crawler crane need?", a: "It depends on the model. Large crawler cranes travel as a base machine plus several loads of boom sections and counterweights. The crane's transport plan tells us." },
      { q: "Can you transport tower crane sections?", a: "Yes. Tower crane mast and jib sections, the cab and counterweight blocks are transported on flatbeds and extendable trailers." },
      { q: "Is a winch the same as a crane?", a: "In Saudi speech 'winch' is often used for any lifting truck. For transport, the exact crane type matters, so please give the model." },
    ],
  }, {
    nav: "نقل الكرينات",
    title: "نقل كرينات ورافعات في السعودية",
    description: "نقل الكرينات الزاحفة والكرينات الصغيرة وأجزاء الكرين البرجي في السعودية: لوبد وتريلات قابلة للتمديد والأجزاء والتصاريح.",
    h1: "نقل الكرينات في السعودية",
    eyebrow: "نقل كرين",
    answer: "نقل الكرينات يعني نقل الكرينات التي لا تسير أو لا يصح أن تسير على الطرق العامة: الكرين الزاحف بالجنزير، وكرين الطرق الوعرة، وأجزاء الكرين البرجي، وقطع الكرين مثل الأذرع والأثقال الموازنة. تُنقل غالبًا على لوبد أو تريلات قابلة للتمديد في عدة حمولات وأحيانًا بتصريح. أما الكرين المتحرك على الطرق فيسير بنفسه عادة.",
    summary: "نقل الكرين الزاحف وكرين الطرق الوعرة وأجزاء الكرين البرجي وقطع الكرين على لوبد وتريلات قابلة للتمديد.",
    sections: [
      {
        h: "أي الكرينات تحتاج شاحنة",
        p: [
          "الكرين المحمول على شاحنة والكرين متعدد التضاريس مصممان للسير على الطرق، فيتحركان غالبًا بنفسيهما مع نقل الأثقال الموازنة منفصلة. أما الكرين الزاحف وكرين الطرق الوعرة والكرينات الصغيرة فليست مركبات طرق وتُنقل على لوبد. والكرين البرجي يُفكك ويُنقل أجزاء: الصاري والذراع والكابينة وكتل الثقل على سطحات وتريلات قابلة للتمديد.",
          "في السعودية يسمي كثيرون أي معدة رفع ونشًا أو كرينًا. أخبرنا بنوع الكرين وموديله حتى نخطط النقل الصحيح.",
        ],
      },
      {
        h: "الأجزاء وعدد الحمولات",
        p: [
          "الكرين الزاحف الكبير قد يُنقل كمعدة أساسية على لوبد، مع أجزاء الذراع والأثقال والجنازير على عدة تريلات أخرى. أجزاء الذراع الطويلة تحتاج تريلات قابلة للتمديد، وكتل الثقل الكبيرة توزع على المحاور. خطة النقل من مورد الكرين، الموجودة غالبًا في دليل التشغيل، تذكر الأجزاء وأوزانها.",
        ],
        list: ["المعدة الأساسية أو الجزء العلوي", "أجزاء الذراع والجيب", "كتل الثقل الموازن", "الجنازير أو الأرجل إذا فُكت", "بكرة الخطاف ومعدات الرفع"],
      },
      {
        h: "التصاريح وفحص المسار",
        p: [
          "المعدة الأساسية للكرين وأجزاء الذراع الطويلة تتجاوز كثيرًا العرض أو الطول أو أوزان المحاور النظامية، لذلك يكون نقل الكرينات غالبًا حمولة استثنائية. نفحص كل حمولة وفق الأنظمة، ونرتب التصاريح والمرافقة عند الحاجة. اترك وقتًا كافيًا لذلك قبل موعد الرفع.",
        ],
      },
    ],
    table: {
      h: "نوع الكرين وكيف يُنقل عادة",
      head: ["الكرين", "يُنقل عادة", "ملاحظة"],
      rows: [
        ["كرين متعدد التضاريس / على شاحنة", "يسير بنفسه", "الثقل الموازن قد يحتاج شاحنة منفصلة"],
        ["كرين طرق وعرة", "لوبد", "ليس مركبة طرق، وفحص الارتفاع"],
        ["كرين زاحف", "لوبد مع عدة حمولات للأجزاء", "غالبًا حمولات استثنائية بتصاريح"],
        ["كرين برجي", "سطحات وتريلات قابلة للتمديد", "الصاري والذراع والكابينة والأثقال حمولات منفصلة"],
      ],
    },
    checklist: {
      h: "لعرض سعر نقل الكرين",
      items: [
        "نوع الكرين وماركته وموديله",
        "قائمة الأجزاء بأوزانها من خطة النقل",
        "مقاسات أكبر قطعة",
        "مدخل الموقع ومنطقة التجميع عند الطرفين",
        "تاريخ التسليم المطلوب قبل الرفع",
      ],
    },
    faqs: [
      { q: "هل يحتاج الكرين المتحرك إلى نقل على تريلا؟", a: "الكرين على شاحنة والكرين متعدد التضاريس يسيران بنفسيهما عادة. أما الكرين الزاحف وكرين الطرق الوعرة وأجزاء الكرين البرجي فتُنقل على تريلات." },
      { q: "كم شاحنة يحتاج الكرين الزاحف؟", a: "يعتمد على الموديل. الكرينات الزاحفة الكبيرة تُنقل كمعدة أساسية مع عدة حمولات لأجزاء الذراع والأثقال، وخطة نقل الكرين تحدد العدد." },
      { q: "هل تنقلون أجزاء الكرين البرجي؟", a: "نعم. أجزاء الصاري والذراع والكابينة وكتل الثقل تُنقل على سطحات وتريلات قابلة للتمديد." },
      { q: "هل الونش هو نفسه الكرين؟", a: "في الكلام اليومي تُطلق كلمة ونش على أي شاحنة رفع. للنقل يهمنا نوع الكرين بالضبط، فأرسل الموديل من فضلك." },
    ],
  }),
];

