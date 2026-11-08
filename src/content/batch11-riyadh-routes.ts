import type { ServicePage } from "./types";

const U = "2026-11-08";
const I = "services/intercity-transfers";
const C = "services/city-transport";
const R = `${C}/riyadh`;

/**
 * Riyadh route pages, batch 2: Abha, Tabuk, Hail, Yanbu. Same rules as batch 10: no distances or times
 * (none sourced), no availability or fare promises, quotation-confirmed everything.
 */
export const batch11RiyadhRoutes: ServicePage[] = [
  {
    path: `${I}/riyadh-to-abha`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${C}/abha`, `${I}/private-intercity-chauffeur`, `${I}/riyadh-to-taif`, R],
    updated: U,
    copy: {
      en: {
        nav: "Riyadh to Abha",
        title: "Riyadh to Abha Private Car with Driver",
        description: "Request a private car with a driver from Riyadh to Abha and the Asir highlands, in either direction. Plan a long road journey and get a RideSaudi quotation.",
        h1: "Riyadh to Abha by private car, from the capital to the Asir highlands",
        eyebrow: "Intercity · Riyadh ⇄ Abha",
        answer: "A private Riyadh to Abha transfer is a pre-booked car with a driver for the long road journey from the capital to Abha, in the Asir highlands of south-west Saudi Arabia, and the same in reverse. It suits families and groups who want to arrive with their luggage and plan stops. RideSaudi quotes each journey individually; availability is confirmed before you commit.",
        summary: "A planned private road journey between Riyadh and Abha in the Asir highlands.",
        sections: [
          { h: "A cool, green contrast to Riyadh", p: ["Abha is the main city of the Asir region, set in mountains that are much greener and cooler than the central desert. Visitors come for the scenery, the heritage villages and the summer weather, and some stay in nearby highland resorts. We do not publish a distance or time; this is one of the long journeys out of Riyadh, so the quotation covers schedule and rest stops."] },
          { h: "Riyadh to Abha: starting in Riyadh", p: ["Outbound travellers start from a Riyadh home or hotel, or from King Khalid International Airport. Give the exact Abha destination: a hotel in the city, a resort in the hills, or a village. Mountain roads can be narrow, so include a map pin and say how many bags you carry."] },
          { h: "Abha to Riyadh: the return journey", p: ["Returning travellers start from an Abha hotel or highland resort and drive back across the country. Say whether you prefer to leave early, break the trip or stay overnight on the way, and add the return to the same enquiry when you know the date."] },
          { h: "Road, air or a longer plan", p: ["Domestic flights serve Abha and are quicker for one traveller. A private car suits families, groups and travellers who want to stop and carry luggage. See Abha city transport for local movement once you arrive, and private intercity chauffeur for planning longer driver arrangements."] },
        ],
        checklist: { h: "Include this in your Riyadh to Abha enquiry", items: ["Direction, date and preferred departure time", "Riyadh pickup and exact Abha destination with a map pin", "Passengers and luggage", "Planned stops or overnight breaks", "Return journey, if known"] },
        faqs: [
          { q: "Can I book a private car from Riyadh to Abha?", a: "You can request it. The journey is quoted individually and confirmed only after you accept the quotation." },
          { q: "How long does Riyadh to Abha take by road?", a: "We do not publish an estimate. Timing and rest stops are agreed in the quotation." },
          { q: "Can you take us to a resort in the mountains?", a: "Include the address or a map pin. Whether a location can be served is confirmed in the quotation." },
          { q: "Can the driver stay with us in Abha?", a: "You can request a multi-day arrangement; terms are confirmed in the quotation." },
          { q: "Can you bring me from Abha back to Riyadh?", a: "You can request the reverse journey; availability is confirmed in the quotation." },
        ],
      },
      ar: {
        nav: "الرياض إلى أبها",
        title: "الرياض إلى أبها بسيارة خاصة مع سائق",
        description: "اطلب سيارة خاصة بسائق من الرياض إلى أبها ومرتفعات عسير بالاتجاهين. خطط لرحلة برية طويلة واستلم عرض سعر من RideSaudi.",
        h1: "من الرياض إلى أبها بسيارة خاصة، من العاصمة إلى مرتفعات عسير",
        eyebrow: "بين المدن · الرياض ⇄ أبها",
        answer: "التوصيل الخاص من الرياض إلى أبها هو سيارة بسائق وبحجز مسبق للرحلة البرية الطويلة من العاصمة إلى أبها في مرتفعات عسير جنوب غرب المملكة، والعكس. وهو مناسب للعائلات والمجموعات التي تريد الوصول بحقائبها وتخطيط التوقفات. تُسعِّر RideSaudi كل رحلة على حدة، وتتأكد الإتاحة قبل أن تلتزم.",
        summary: "رحلة برية خاصة مخطط لها بين الرياض وأبها في مرتفعات عسير.",
        sections: [
          { h: "تباين أخضر معتدل مع الرياض", p: ["أبها هي المدينة الرئيسة في منطقة عسير، وتقع بين جبال أكثر خضرة واعتدالًا بكثير من صحراء الوسط. ويقصدها الزوار للمناظر والقرى التراثية وطقس الصيف، ويقيم بعضهم في منتجعات المرتفعات المجاورة. ولا ننشر مسافة أو زمنًا؛ فهذه من الرحلات الطويلة الخارجة من الرياض، ولذلك يغطي عرض السعر الجدول ومحطات الراحة."] },
          { h: "من الرياض إلى أبها: الانطلاق من الرياض", p: ["ينطلق المسافرون ذهابًا من منزل أو فندق في الرياض أو من مطار الملك خالد الدولي. أعطنا الوجهة الدقيقة في أبها: فندق في المدينة أو منتجع في المرتفعات أو قرية. وقد تضيق الطرق الجبلية، فأضف موقعًا على الخريطة واذكر عدد الحقائب."] },
          { h: "من أبها إلى الرياض: رحلة العودة", p: ["يبدأ العائدون من فندق أو منتجع في أبها ويقودون عائدين عبر البلاد. قل هل تفضّل الانطلاق مبكرًا أو تقسيم الرحلة أو المبيت في الطريق، وأضف العودة إلى الطلب نفسه إن عرفت تاريخها."] },
          { h: "الطريق أم الطيران أم خطة أطول", p: ["تخدم الرحلات الجوية الداخلية أبها وهي أسرع لمسافر وحده. وتناسب السيارة الخاصة العائلات والمجموعات ومن يريد التوقف وحمل الحقائب. وللتنقل المحلي بعد الوصول راجع صفحة النقل داخل أبها، ولتخطيط ترتيبات أطول مع سائق راجع صفحة سائق الرحلات الخاصة بين المدن."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الرياض إلى أبها", items: ["الاتجاه والتاريخ ووقت الانطلاق المفضل", "عنوان الاستلام في الرياض والوجهة الدقيقة في أبها مع موقع على الخريطة", "الركاب والحقائب", "التوقفات أو المبيت المخطط", "رحلة العودة إن عُرفت"] },
        faqs: [
          { q: "هل يمكنني حجز سيارة خاصة من الرياض إلى أبها؟", a: "يمكنك طلب ذلك. تُسعَّر الرحلة على حدة ولا تتأكد إلا بعد موافقتك على عرض السعر." },
          { q: "كم تستغرق الرحلة من الرياض إلى أبها بالسيارة؟", a: "لا ننشر تقديرًا. ويُتَّفق على التوقيت ومحطات الراحة في عرض السعر." },
          { q: "هل يمكنكم أخذنا إلى منتجع في الجبال؟", a: "أضف العنوان أو موقعًا على الخريطة. وتُؤكَّد إمكانية خدمة الموقع في عرض السعر." },
          { q: "هل يبقى السائق معنا في أبها؟", a: "يمكنك طلب ترتيب متعدد الأيام؛ وتُؤكَّد الشروط في عرض السعر." },
          { q: "هل يمكنكم إعادتي من أبها إلى الرياض؟", a: "يمكنك طلب الرحلة العكسية؛ وتُؤكَّد الإتاحة في عرض السعر." },
        ],
      },
    },
  },

  {
    path: `${I}/riyadh-to-tabuk`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${C}/tabuk`, `${I}/riyadh-to-alula`, `${I}/private-intercity-chauffeur`, R],
    updated: U,
    copy: {
      en: {
        nav: "Riyadh to Tabuk",
        title: "Riyadh to Tabuk Private Car with Driver",
        description: "Request a private car with a driver from Riyadh to Tabuk in the north-west, in either direction. Plan a very long road journey and get a RideSaudi quotation.",
        h1: "Riyadh to Tabuk by private car, a very long journey to the north-west",
        eyebrow: "Intercity · Riyadh ⇄ Tabuk",
        answer: "A private Riyadh to Tabuk transfer is a pre-booked car with a driver for the very long road journey from the capital to Tabuk in north-west Saudi Arabia, and the same in reverse. It suits project teams, families and groups with luggage or equipment. RideSaudi quotes each journey individually; availability is confirmed before you commit.",
        summary: "A planned private road journey between Riyadh and Tabuk in the north-west.",
        sections: [
          { h: "Why people travel to Tabuk", p: ["Tabuk is the main city of the north-west and has an airport. It is a base for travellers heading to the Red Sea and Gulf of Aqaba coast and to large development projects in the region, and for visitors to the canyon and desert landscapes nearby. We do not publish a distance or time; the quotation covers the planned schedule, rest stops and any overnight stage."] },
          { h: "Riyadh to Tabuk: starting in Riyadh", p: ["Outbound travellers start from a Riyadh home, hotel or business address, or from King Khalid International Airport. Say where in Tabuk you are going, or whether Tabuk is a stop on the way to another destination in the north-west, and whether you carry equipment that affects the vehicle."] },
          { h: "Tabuk to Riyadh: the return journey", p: ["Returning travellers start from Tabuk and cross the country to Riyadh. Because the drive is so long, decide whether to leave early, split the trip or stay overnight, and say so in your enquiry. Add the return to the same enquiry when you know the date."] },
          { h: "Road, air or a longer itinerary", p: ["Flights are far quicker for one traveller. A private car suits teams with luggage or tools and travellers who want to add stops, for example AlUla. See Riyadh to AlUla, Tabuk city transport for local movement, and private intercity chauffeur for longer driver arrangements."] },
        ],
        checklist: { h: "Include this in your Riyadh to Tabuk enquiry", items: ["Direction, date and preferred departure time", "Riyadh pickup and exact Tabuk destination", "Passengers, luggage and equipment", "Planned stops or overnight breaks", "Return journey, if known"] },
        faqs: [
          { q: "Can I book a private car from Riyadh to Tabuk?", a: "You can request it. The journey is quoted individually and confirmed only after you accept the quotation." },
          { q: "How long does Riyadh to Tabuk take by road?", a: "We do not publish an estimate. Timing and rest stops are agreed in the quotation." },
          { q: "Can the car carry equipment for a project team?", a: "Describe the equipment in your enquiry; whether it fits is confirmed in the quotation." },
          { q: "Can we stop in AlUla on the way?", a: "Mention it in your enquiry; planned stops are confirmed in the quotation." },
          { q: "Can you bring me from Tabuk back to Riyadh?", a: "You can request the reverse journey; availability is confirmed in the quotation." },
        ],
      },
      ar: {
        nav: "الرياض إلى تبوك",
        title: "الرياض إلى تبوك بسيارة خاصة مع سائق",
        description: "اطلب سيارة خاصة بسائق من الرياض إلى تبوك في الشمال الغربي بالاتجاهين. خطط لرحلة برية طويلة جدًا واستلم عرض سعر من RideSaudi.",
        h1: "من الرياض إلى تبوك بسيارة خاصة، رحلة طويلة جدًا نحو الشمال الغربي",
        eyebrow: "بين المدن · الرياض ⇄ تبوك",
        answer: "التوصيل الخاص من الرياض إلى تبوك هو سيارة بسائق وبحجز مسبق للرحلة البرية الطويلة جدًا من العاصمة إلى تبوك في شمال غرب المملكة، والعكس. وهو مناسب لفرق المشاريع والعائلات والمجموعات التي معها حقائب أو معدات. تُسعِّر RideSaudi كل رحلة على حدة، وتتأكد الإتاحة قبل أن تلتزم.",
        summary: "رحلة برية خاصة مخطط لها بين الرياض وتبوك في الشمال الغربي.",
        sections: [
          { h: "لماذا يسافر الناس إلى تبوك", p: ["تبوك هي المدينة الرئيسة في الشمال الغربي ولها مطار. وهي محطة للمتجهين إلى ساحل البحر الأحمر وخليج العقبة والمشاريع التنموية الكبرى في المنطقة، ولزوار الأودية والمناظر الصحراوية القريبة. ولا ننشر مسافة أو زمنًا؛ فعرض السعر يغطي الجدول المخطط ومحطات الراحة وأي مرحلة مبيت."] },
          { h: "من الرياض إلى تبوك: الانطلاق من الرياض", p: ["ينطلق المسافرون ذهابًا من منزل أو فندق أو عنوان عمل في الرياض أو من مطار الملك خالد الدولي. قل أين تتجه في تبوك، أو هل تبوك محطة في الطريق إلى وجهة أخرى في الشمال الغربي، وهل تحمل معدات تؤثر في اختيار المركبة."] },
          { h: "من تبوك إلى الرياض: رحلة العودة", p: ["يبدأ العائدون من تبوك ويعبرون البلاد إلى الرياض. ولأن القيادة طويلة جدًا، قرر هل تنطلق مبكرًا أو تقسّم الرحلة أو تبيت في الطريق، واذكر ذلك في استفسارك. وأضف العودة إلى الطلب نفسه إن عرفت تاريخها."] },
          { h: "الطريق أم الطيران أم برنامج أطول", p: ["الطيران أسرع بكثير لمسافر وحده. وتناسب السيارة الخاصة الفرق التي معها حقائب أو أدوات ومن يريد إضافة توقفات، مثل العلا. راجع صفحة الرياض إلى العلا وصفحة النقل داخل تبوك للتنقل المحلي وصفحة سائق الرحلات الخاصة بين المدن لترتيبات أطول مع سائق."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الرياض إلى تبوك", items: ["الاتجاه والتاريخ ووقت الانطلاق المفضل", "عنوان الاستلام في الرياض والوجهة الدقيقة في تبوك", "الركاب والحقائب والمعدات", "التوقفات أو المبيت المخطط", "رحلة العودة إن عُرفت"] },
        faqs: [
          { q: "هل يمكنني حجز سيارة خاصة من الرياض إلى تبوك؟", a: "يمكنك طلب ذلك. تُسعَّر الرحلة على حدة ولا تتأكد إلا بعد موافقتك على عرض السعر." },
          { q: "كم تستغرق الرحلة من الرياض إلى تبوك بالسيارة؟", a: "لا ننشر تقديرًا. ويُتَّفق على التوقيت ومحطات الراحة في عرض السعر." },
          { q: "هل تتسع السيارة لمعدات فريق مشروع؟", a: "صف المعدات في استفسارك؛ وتُؤكَّد ملاءمتها في عرض السعر." },
          { q: "هل يمكننا التوقف في العلا في الطريق؟", a: "اذكر ذلك في استفسارك؛ وتُؤكَّد التوقفات المخططة في عرض السعر." },
          { q: "هل يمكنكم إعادتي من تبوك إلى الرياض؟", a: "يمكنك طلب الرحلة العكسية؛ وتُؤكَّد الإتاحة في عرض السعر." },
        ],
      },
    },
  },

  {
    path: `${I}/riyadh-to-hail`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${C}/hail`, `${I}/riyadh-to-buraydah`, `${I}/private-intercity-chauffeur`, R],
    updated: U,
    copy: {
      en: {
        nav: "Riyadh to Hail",
        title: "Riyadh to Hail Private Car with Driver",
        description: "Request a private car with a driver from Riyadh to Hail, one way or return, in either direction. Plan the journey and get a RideSaudi quotation.",
        h1: "Riyadh to Hail by private car, to the northern city of rock art and mountains",
        eyebrow: "Intercity · Riyadh ⇄ Hail",
        answer: "A private Riyadh to Hail transfer is a pre-booked car with a driver from Riyadh to Hail in northern Saudi Arabia, and the same in reverse. It can be one way, a return or part of a longer trip through Qassim. RideSaudi quotes each journey individually; availability is confirmed before you commit.",
        summary: "A planned private road journey between Riyadh and Hail in the north.",
        sections: [
          { h: "What Hail is known for", p: ["Hail is the main city of a northern region of mountains and desert. The rock art at Jubbah and Shuwaymis in the Hail region is a UNESCO World Heritage site, and the city also receives business and family travellers. Hail has its own airport. We do not publish a distance or time; the quotation covers the planned schedule."] },
          { h: "Riyadh to Hail: starting in Riyadh", p: ["Outbound travellers start from a Riyadh home, hotel, business address or King Khalid International Airport. Name your Hail destination, or the site you want to reach, because heritage sites are some distance from the city. Visits to the sites are arranged with their official operators and are not part of the transport."] },
          { h: "Hail to Riyadh: the return journey", p: ["Returning travellers start in Hail and drive back through the north and Qassim. If you only have a day, ask for a return or day-trip arrangement so the driver waits. Add the return to the same enquiry when you know the date."] },
          { h: "Combining Hail with Buraydah", p: ["Hail is further north than Buraydah and the two are often combined. See Riyadh to Buraydah and Qassim, Hail city transport for local movement and private intercity chauffeur for multi-stop plans."] },
        ],
        checklist: { h: "Include this in your Riyadh to Hail enquiry", items: ["Direction, date and preferred departure time", "Riyadh pickup and exact Hail destination or site", "One way, return or day trip", "Passengers and luggage", "Planned stops, such as Buraydah"] },
        faqs: [
          { q: "Can I book a private car from Riyadh to Hail?", a: "You can request it. The journey is quoted individually and confirmed only after you accept the quotation." },
          { q: "Can you take me to the rock art sites near Hail?", a: "Include the site in your itinerary. Coverage is confirmed in the quotation; entry is arranged with the site operators." },
          { q: "How long does Riyadh to Hail take by road?", a: "We do not publish an estimate. Timing and rest stops are agreed in the quotation." },
          { q: "Can we stop in Buraydah on the way?", a: "Mention it in your enquiry; planned stops are confirmed in the quotation." },
          { q: "Can you bring me from Hail back to Riyadh?", a: "You can request the reverse journey; availability is confirmed in the quotation." },
        ],
      },
      ar: {
        nav: "الرياض إلى حائل",
        title: "الرياض إلى حائل بسيارة خاصة مع سائق",
        description: "اطلب سيارة خاصة بسائق من الرياض إلى حائل باتجاه واحد أو بعودة، بالاتجاهين. خطط لرحلتك واستلم عرض سعر من RideSaudi.",
        h1: "من الرياض إلى حائل بسيارة خاصة، إلى مدينة الجبال والنقوش الصخرية في الشمال",
        eyebrow: "بين المدن · الرياض ⇄ حائل",
        answer: "التوصيل الخاص من الرياض إلى حائل هو سيارة بسائق وبحجز مسبق من الرياض إلى حائل في شمال المملكة، والعكس. ويمكن أن يكون باتجاه واحد أو بعودة أو ضمن رحلة أطول عبر القصيم. تُسعِّر RideSaudi كل رحلة على حدة، وتتأكد الإتاحة قبل أن تلتزم.",
        summary: "رحلة برية خاصة مخطط لها بين الرياض وحائل في الشمال.",
        sections: [
          { h: "بماذا تشتهر حائل", p: ["حائل هي المدينة الرئيسة في منطقة شمالية من الجبال والصحراء. والفن الصخري في جبة والشويمس في منطقة حائل مسجل في قائمة التراث العالمي لليونسكو، كما تستقبل المدينة مسافري الأعمال والعائلات. ولحائل مطارها الخاص. ولا ننشر مسافة أو زمنًا؛ فعرض السعر يغطي الجدول المخطط."] },
          { h: "من الرياض إلى حائل: الانطلاق من الرياض", p: ["ينطلق المسافرون ذهابًا من منزل أو فندق أو عنوان عمل في الرياض أو مطار الملك خالد الدولي. سمِّ وجهتك في حائل أو الموقع الذي تريد بلوغه، فالمواقع التراثية تبعد مسافة عن المدينة. وتُرتَّب الزيارات مع جهاتها المشغِّلة الرسمية ولا تدخل في النقل."] },
          { h: "من حائل إلى الرياض: رحلة العودة", p: ["يبدأ العائدون من حائل ويقودون عائدين عبر الشمال والقصيم. وإن كان لديك يوم واحد فاطلب ترتيب عودة أو رحلة يوم ليبقى السائق منتظرًا. وأضف العودة إلى الطلب نفسه إن عرفت تاريخها."] },
          { h: "الجمع بين حائل وبريدة", p: ["حائل أبعد شمالًا من بريدة، وكثيرًا ما يُجمع بينهما. راجع صفحة الرياض إلى بريدة والقصيم وصفحة النقل داخل حائل للتنقل المحلي وصفحة سائق الرحلات الخاصة بين المدن للخطط متعددة المحطات."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الرياض إلى حائل", items: ["الاتجاه والتاريخ ووقت الانطلاق المفضل", "عنوان الاستلام في الرياض والوجهة أو الموقع الدقيق في حائل", "اتجاه واحد أو عودة أو رحلة يوم", "الركاب والحقائب", "التوقفات المخططة مثل بريدة"] },
        faqs: [
          { q: "هل يمكنني حجز سيارة خاصة من الرياض إلى حائل؟", a: "يمكنك طلب ذلك. تُسعَّر الرحلة على حدة ولا تتأكد إلا بعد موافقتك على عرض السعر." },
          { q: "هل يمكنكم أخذي إلى مواقع النقوش الصخرية قرب حائل؟", a: "أضف الموقع إلى برنامجك. وتُؤكَّد التغطية في عرض السعر، ويُرتَّب الدخول مع الجهات المشغِّلة للموقع." },
          { q: "كم تستغرق الرحلة من الرياض إلى حائل بالسيارة؟", a: "لا ننشر تقديرًا. ويُتَّفق على التوقيت ومحطات الراحة في عرض السعر." },
          { q: "هل يمكننا التوقف في بريدة في الطريق؟", a: "اذكر ذلك في استفسارك؛ وتُؤكَّد التوقفات المخططة في عرض السعر." },
          { q: "هل يمكنكم إعادتي من حائل إلى الرياض؟", a: "يمكنك طلب الرحلة العكسية؛ وتُؤكَّد الإتاحة في عرض السعر." },
        ],
      },
    },
  },

  {
    path: `${I}/riyadh-to-yanbu`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${C}/yanbu`, `${I}/riyadh-to-madinah`, `${I}/private-intercity-chauffeur`, R],
    updated: U,
    copy: {
      en: {
        nav: "Riyadh to Yanbu",
        title: "Riyadh to Yanbu Private Car with Driver",
        description: "Request a private car with a driver from Riyadh to Yanbu on the Red Sea, in either direction. Plan a long road journey and get a RideSaudi quotation.",
        h1: "Riyadh to Yanbu by private car, from the capital to the Red Sea port",
        eyebrow: "Intercity · Riyadh ⇄ Yanbu",
        answer: "A private Riyadh to Yanbu transfer is a pre-booked car with a driver for the long road journey from the capital to Yanbu on the Red Sea coast, including Yanbu Industrial City, and the same in reverse. It is mostly used for business and project travel. RideSaudi quotes each journey individually; site access and availability are confirmed before you commit.",
        summary: "A planned private road journey between Riyadh and Yanbu on the Red Sea.",
        sections: [
          { h: "Two Yanbus", p: ["Yanbu is both an old Red Sea port town and, nearby, a large industrial city run by the Royal Commission for Jubail and Yanbu. Most Riyadh travellers are heading to company or project sites in the industrial area, while others visit the coast. We do not publish a distance or time; the quotation covers the planned schedule and rest stops."] },
          { h: "Riyadh to Yanbu: starting in Riyadh", p: ["Outbound travellers start from a Riyadh home, hotel, business address or King Khalid International Airport. Give the facility name and any access requirements for industrial sites, because gates and passes are controlled. Whether a site can be served is confirmed before you commit."] },
          { h: "Yanbu to Riyadh: the return journey", p: ["Returning travellers start from a Yanbu site or hotel and drive back across the country. Many visits are short, so say whether you want the car to wait or to collect you later, and add the return to the same enquiry."] },
          { h: "Linked journeys", p: ["Yanbu is also connected by road to Madinah. See Riyadh to Madinah and Yanbu city transport for local movement, and private intercity chauffeur for multi-stop plans."] },
        ],
        checklist: { h: "Include this in your Riyadh to Yanbu enquiry", items: ["Direction, date and preferred departure time", "Riyadh pickup and exact Yanbu destination or facility", "Site access requirements, if any", "One way, return or wait-and-return", "Passengers and luggage"] },
        faqs: [
          { q: "Can I book a private car from Riyadh to Yanbu?", a: "You can request it. The journey is quoted individually and confirmed only after you accept the quotation." },
          { q: "Can you take me to Yanbu Industrial City?", a: "Share the facility name and access rules; coverage is confirmed in the quotation." },
          { q: "How long does Riyadh to Yanbu take by road?", a: "We do not publish an estimate. Timing and rest stops are agreed in the quotation." },
          { q: "Can the driver wait while I work on site?", a: "You can request a wait-and-return arrangement; terms are confirmed in the quotation." },
          { q: "Can you bring me from Yanbu back to Riyadh?", a: "You can request the reverse journey; availability is confirmed in the quotation." },
        ],
      },
      ar: {
        nav: "الرياض إلى ينبع",
        title: "الرياض إلى ينبع بسيارة خاصة مع سائق",
        description: "اطلب سيارة خاصة بسائق من الرياض إلى ينبع على البحر الأحمر بالاتجاهين. خطط لرحلة برية طويلة واستلم عرض سعر من RideSaudi.",
        h1: "من الرياض إلى ينبع بسيارة خاصة، من العاصمة إلى ميناء البحر الأحمر",
        eyebrow: "بين المدن · الرياض ⇄ ينبع",
        answer: "التوصيل الخاص من الرياض إلى ينبع هو سيارة بسائق وبحجز مسبق للرحلة البرية الطويلة من العاصمة إلى ينبع على ساحل البحر الأحمر، ومنها ينبع الصناعية، والعكس. ويُستخدم غالبًا لسفر الأعمال والمشاريع. تُسعِّر RideSaudi كل رحلة على حدة؛ ويُؤكَّد دخول الموقع والإتاحة قبل أن تلتزم.",
        summary: "رحلة برية خاصة مخطط لها بين الرياض وينبع على البحر الأحمر.",
        sections: [
          { h: "ينبعان اثنتان", p: ["ينبع بلدة ميناء قديمة على البحر الأحمر، وبجوارها مدينة صناعية كبيرة تديرها الهيئة الملكية للجبيل وينبع. ومعظم مسافري الرياض متجهون إلى مواقع شركات أو مشاريع في المنطقة الصناعية، ويزور آخرون الساحل. ولا ننشر مسافة أو زمنًا؛ فعرض السعر يغطي الجدول المخطط ومحطات الراحة."] },
          { h: "من الرياض إلى ينبع: الانطلاق من الرياض", p: ["ينطلق المسافرون ذهابًا من منزل أو فندق أو عنوان عمل في الرياض أو مطار الملك خالد الدولي. أعطنا اسم المنشأة وأي متطلبات دخول للمواقع الصناعية لأن البوابات والتصاريح مضبوطة. وتُؤكَّد قبل التزامك إمكانية خدمة الموقع."] },
          { h: "من ينبع إلى الرياض: رحلة العودة", p: ["يبدأ العائدون من موقع أو فندق في ينبع ويقودون عائدين عبر البلاد. وكثير من الزيارات قصيرة، فقل هل تريد بقاء السيارة منتظرة أو أن تُستلم لاحقًا، وأضف العودة إلى الطلب نفسه."] },
          { h: "رحلات مرتبطة", p: ["ترتبط ينبع كذلك بالمدينة المنورة برًّا. راجع صفحة الرياض إلى المدينة المنورة وصفحة النقل داخل ينبع للتنقل المحلي وصفحة سائق الرحلات الخاصة بين المدن للخطط متعددة المحطات."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الرياض إلى ينبع", items: ["الاتجاه والتاريخ ووقت الانطلاق المفضل", "عنوان الاستلام في الرياض والوجهة الدقيقة أو المنشأة في ينبع", "متطلبات دخول الموقع إن وُجدت", "اتجاه واحد أو عودة أو انتظار وعودة", "الركاب والحقائب"] },
        faqs: [
          { q: "هل يمكنني حجز سيارة خاصة من الرياض إلى ينبع؟", a: "يمكنك طلب ذلك. تُسعَّر الرحلة على حدة ولا تتأكد إلا بعد موافقتك على عرض السعر." },
          { q: "هل يمكنكم أخذي إلى ينبع الصناعية؟", a: "شاركنا اسم المنشأة وقواعد الدخول؛ وتُؤكَّد التغطية في عرض السعر." },
          { q: "كم تستغرق الرحلة من الرياض إلى ينبع بالسيارة؟", a: "لا ننشر تقديرًا. ويُتَّفق على التوقيت ومحطات الراحة في عرض السعر." },
          { q: "هل ينتظرني السائق أثناء عملي في الموقع؟", a: "يمكنك طلب ترتيب انتظار وعودة؛ وتُؤكَّد الشروط في عرض السعر." },
          { q: "هل يمكنكم إعادتي من ينبع إلى الرياض؟", a: "يمكنك طلب الرحلة العكسية؛ وتُؤكَّد الإتاحة في عرض السعر." },
        ],
      },
    },
  },
];
