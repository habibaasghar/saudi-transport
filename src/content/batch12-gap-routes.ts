import type { ServicePage } from "./types";

const U = "2026-11-09";
const I = "services/intercity-transfers";
const A = "services/airport-transfers";
const C = "services/city-transport";
const T = "services/tourism-transport";
const X = "services/cross-border-transfers";

/**
 * Gap-fill batch (route and airport pages the keyword map showed as missing):
 * Jeddah to Yanbu, Makkah to Taif, Madinah to AlUla, Jeddah to AlUla, AlUla Airport, Riyadh to Hafar Al Batin.
 * No distances, durations, prices, vehicle claims or availability are published: none are owner-verified
 * (SEO-RULES.md section 3). Pages describe planning, point to official sources for permits and tickets, and
 * say availability is confirmed in the quotation.
 */
export const batch12GapRoutes: ServicePage[] = [
  {
    path: `${I}/jeddah-to-yanbu`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${C}/yanbu`, `${I}/riyadh-to-yanbu`, `${A}/jeddah-airport`, `${C}/jeddah`],
    updated: U,
    copy: {
      en: {
        nav: "Jeddah to Yanbu",
        title: "Jeddah to Yanbu Private Car Transfer",
        description: "Request a private car with a driver between Jeddah (or Jeddah Airport) and Yanbu, in either direction. Planning notes and a RideSaudi quotation.",
        h1: "Jeddah to Yanbu by private car with a driver",
        eyebrow: "Intercity · Jeddah ⇄ Yanbu",
        answer: "A private Jeddah to Yanbu transfer is a pre-booked car with a driver that takes you along the Red Sea coast between Jeddah, or King Abdulaziz Airport, and Yanbu, and back. It suits business trips to the industrial areas, family visits and airport connections. RideSaudi quotes each journey individually and confirms availability before you commit.",
        summary: "A pre-booked road journey up the Red Sea coast between Jeddah and Yanbu.",
        sections: [
          { h: "Two very different Yanbus", p: ["Yanbu is really two places: the older waterfront town of Yanbu Al Bahr and the planned industrial city and port area, with its own offices, camps and plant gates. Say which one you are going to, and the exact gate, hotel or address, because a driver cannot guess between them. If you are arriving to work at a site, ask your host for the entry gate and any access permit well before the date."] },
          { h: "Starting from Jeddah", p: ["Most people start either at King Abdulaziz International Airport or at a hotel or home in Jeddah. The road runs north along the Red Sea coast, and towns such as Rabigh lie on the way. We do not publish a distance or driving time on this page; the planned schedule is in your quotation. If you land late in the evening, tell us your flight number so the pickup can be planned around the arrival time."] },
          { h: "Starting from Yanbu", p: ["Going the other way, the usual starts are a Yanbu hotel, a site gate or Yanbu's own airport, and the usual destinations are Jeddah airport for an onward flight or a Jeddah address. For a flight, leave a safety margin and tell us the departure time and terminal. Our Riyadh to Yanbu page covers the longer inland route to the same city, and the Yanbu city page covers local movement once you arrive."] },
          { h: "One way, return or several days", p: ["You can ask for a single one-way transfer, a return the same day, or a driver who stays with you for a multi-day business trip. Waiting time, overnight arrangements and returning empty are all handled in the quotation, so state your plan honestly at the start rather than changing it on the road."] },
        ],
        checklist: { h: "Include this in your Jeddah to Yanbu enquiry", items: ["Direction, date and pickup time", "Yanbu Al Bahr or Yanbu Industrial area, plus exact gate or hotel", "Jeddah airport terminal and flight number, if relevant", "Passengers and luggage, including any work equipment", "One way or return, and waiting time at either end"] },
        faqs: [
          { q: "Can I book a private car from Jeddah Airport to Yanbu?", a: "You can request it. Send the flight number and the Yanbu address; availability and the quotation are confirmed before anything is arranged." },
          { q: "Does the driver know which part of Yanbu I mean?", a: "Only if you tell us. Name Yanbu Al Bahr or the industrial area, and give the hotel name or site gate." },
          { q: "Can the same car wait for me and bring me back to Jeddah?", a: "A return with waiting time can be requested. How waiting is charged is set out in your quotation." },
          { q: "Do you publish a fixed price for Jeddah to Yanbu?", a: "No. Each journey is quoted individually after we know the date, passengers, luggage and any waiting." },
          { q: "Is a work permit needed to enter an industrial site?", a: "Site access is controlled by the site, not by RideSaudi. Ask your host for the gate and permit requirements in advance." },
        ],
      },
      ar: {
        nav: "جدة إلى ينبع",
        title: "جدة إلى ينبع: توصيل بسيارة خاصة مع سائق",
        description: "اطلب سيارة خاصة بسائق بين جدة أو مطارها وينبع بالاتجاهين. ملاحظات للتخطيط وعرض سعر من RideSaudi.",
        h1: "من جدة إلى ينبع بسيارة خاصة مع سائق",
        eyebrow: "بين المدن · جدة ⇄ ينبع",
        answer: "التوصيل الخاص من جدة إلى ينبع هو سيارة بسائق وبحجز مسبق تنقلك على ساحل البحر الأحمر بين جدة أو مطار الملك عبدالعزيز وينبع، وبالعكس. وهو مناسب لرحلات العمل إلى المناطق الصناعية وزيارات العائلة ووصلات المطار. تُسعِّر RideSaudi كل رحلة على حدة وتؤكد الإتاحة قبل أن تلتزم.",
        summary: "رحلة برية بحجز مسبق على ساحل البحر الأحمر بين جدة وينبع.",
        sections: [
          { h: "ينبعان مختلفان", p: ["ينبع في الواقع مكانان: بلدة ينبع البحر الساحلية القديمة، ومدينة ينبع الصناعية وميناؤها بمكاتبها ومعسكراتها وبوابات مصانعها. حدّد أيهما تقصد مع البوابة أو الفندق أو العنوان بدقة، فالسائق لا يستطيع التخمين. وإن كنت قادمًا للعمل في موقع فاطلب من مضيفك رقم البوابة وأي تصريح دخول قبل الموعد بوقت كافٍ."] },
          { h: "الانطلاق من جدة", p: ["ينطلق أغلب المسافرين من مطار الملك عبدالعزيز الدولي أو من فندق أو منزل في جدة. ويسير الطريق شمالًا على ساحل البحر الأحمر وتقع على جانبه بلدات مثل رابغ. ولا ننشر في هذه الصفحة مسافة أو زمن قيادة؛ فالجدول المخطط يأتي في عرض السعر. وإن وصلت متأخرًا مساءً فأخبرنا برقم رحلتك ليُرتَّب الاستلام وفق موعد وصولك."] },
          { h: "الانطلاق من ينبع", p: ["في الاتجاه المعاكس تبدأ الرحلة عادةً من فندق في ينبع أو بوابة موقع أو مطار ينبع، وتنتهي في مطار جدة لرحلة متصلة أو في عنوان بجدة. وللرحلات الجوية اترك هامشًا آمنًا وأخبرنا بموعد الإقلاع والصالة. وتغطي صفحة الرياض إلى ينبع الطريق الداخلي الأطول إلى المدينة نفسها، وتغطي صفحة مدينة ينبع التنقل المحلي بعد وصولك."] },
          { h: "ذهاب فقط أو ذهاب وعودة أو عدة أيام", p: ["يمكنك طلب توصيلة واحدة ذهابًا، أو رحلة ذهاب وعودة في اليوم نفسه، أو سائقًا يرافقك خلال رحلة عمل من عدة أيام. وتُحدَّد في عرض السعر تفاصيل الانتظار والمبيت والعودة بلا ركاب، فاذكر خطتك بصدق من البداية بدل تغييرها على الطريق."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب جدة إلى ينبع", items: ["الاتجاه والتاريخ ووقت الاستلام", "ينبع البحر أو ينبع الصناعية مع البوابة أو الفندق بدقة", "صالة مطار جدة ورقم الرحلة إن لزم", "عدد الركاب والحقائب ومنها أي معدات عمل", "ذهاب فقط أم ذهاب وعودة ووقت الانتظار في أي من الطرفين"] },
        faqs: [
          { q: "هل يمكنني حجز سيارة خاصة من مطار جدة إلى ينبع؟", a: "يمكنك طلب ذلك. أرسل رقم الرحلة وعنوان ينبع؛ وتُؤكَّد الإتاحة وعرض السعر قبل ترتيب أي شيء." },
          { q: "هل يعرف السائق أي جزء من ينبع أقصد؟", a: "فقط إذا أخبرتنا. اذكر ينبع البحر أو المنطقة الصناعية مع اسم الفندق أو بوابة الموقع." },
          { q: "هل تنتظرني السيارة نفسها وتعيدني إلى جدة؟", a: "يمكن طلب رحلة ذهاب وعودة مع انتظار. وتوضح عرض السعر كيفية احتساب الانتظار." },
          { q: "هل تنشرون سعرًا ثابتًا من جدة إلى ينبع؟", a: "لا. تُسعَّر كل رحلة على حدة بعد معرفة التاريخ وعدد الركاب والحقائب وأي انتظار." },
          { q: "هل أحتاج تصريحًا لدخول موقع صناعي؟", a: "الدخول إلى المواقع تنظمه الجهة المشغلة لا RideSaudi. اطلب من مضيفك بوابة الدخول ومتطلبات التصريح مسبقًا." },
        ],
      },
    },
  },

  {
    path: `${I}/makkah-to-taif`,
    parent: I,
    variant: "umrah",
    service: "intercity",
    related: [`${I}/jeddah-to-taif`, `${A}/taif-airport`, `${T}/taif`, "services/umrah-transport/makkah-ziyarat", `${C}/makkah`],
    updated: U,
    copy: {
      en: {
        nav: "Makkah to Taif",
        title: "Makkah to Taif Private Transfer by Mountain Road",
        description: "Request a private car with a driver between Makkah and Taif in either direction, for pilgrims, families and day visitors. Quoted by RideSaudi.",
        h1: "Makkah to Taif by private car, up the Sarawat mountains",
        eyebrow: "Intercity · Makkah ⇄ Taif",
        answer: "A private Makkah to Taif transfer is a pre-booked car with a driver from Makkah up into the Sarawat mountains to Taif, and back. Visitors use it to escape the heat, visit family or add a mountain day to an Umrah trip. Passengers who are not Muslim cannot enter the Makkah area, so those travellers should use our Jeddah to Taif page. Quotations are individual.",
        summary: "A private mountain-road journey between Makkah and Taif, for Umrah visitors and families.",
        sections: [
          { h: "A road that climbs", p: ["Taif sits in the Sarawat mountains, much higher and cooler than Makkah, and the road up is a steep, winding climb rather than a flat highway. People with motion sickness, small children or elderly relatives should say so in the enquiry so the drive and any rest stop can be planned. We do not publish a distance or driving time on this page; your quotation gives the planned schedule."] },
          { h: "Who this route is for", p: ["Most requests come from pilgrims who want a cooler day after Umrah, families visiting relatives in Taif, and people who add Taif to a longer stay. A typical day out takes in places such as Shubra Palace, Al Rudaf Park, the Al Hada heights and the rose farms in season, but we are a transport arranger and do not run tours, so tell us your stops and the driver follows your plan. For wider sightseeing see the Taif tourism page."] },
          { h: "Makkah rules and Ihram", p: ["Entry to Makkah is limited to Muslims, so a mixed group should instead use the Jeddah to Taif route, which does not enter Makkah. If you are travelling in Ihram, or plan to be, tell us in the enquiry so we can plan around your timing and any stop you want. Which miqat applies to you is a religious matter for you and your scholar or Umrah operator, not for us to decide."] },
          { h: "Between Taif and Makkah", p: ["Coming down from Taif to Makkah, give us your Makkah hotel or the gate you will use, and note that traffic around the Haram area is heavier at prayer times, in Ramadan and in the Hajj season. If you need to reach Jeddah airport afterwards, say so and we can plan the next leg together."] },
        ],
        checklist: { h: "Include this in your Makkah to Taif enquiry", items: ["Direction, date and preferred time", "Makkah hotel or pickup point, and the Taif address", "Whether anyone is in Ihram and whether everyone is Muslim", "Passengers, ages and any health or mobility needs", "Day trip or one way, and stops you want"] },
        faqs: [
          { q: "Can I book a private car from Makkah to Taif?", a: "You can request it. The journey is quoted individually and confirmed only after you accept the quotation." },
          { q: "Can non-Muslim passengers travel from Makkah to Taif?", a: "Entry to Makkah is limited to Muslims. A mixed group should ask about the Jeddah to Taif route instead." },
          { q: "Is the road to Taif steep?", a: "Yes, it climbs into the Sarawat mountains with bends. Tell us about motion sickness, children or elderly passengers when you enquire." },
          { q: "Can I do Taif as a day trip from Makkah?", a: "You can request a return journey with waiting time. The stops and the length of the day are agreed in the quotation." },
          { q: "Do you arrange Ihram at the miqat?", a: "No. Ihram is your own religious matter. We can plan a stop where you ask for one, if the route allows it." },
        ],
      },
      ar: {
        nav: "مكة إلى الطائف",
        title: "مكة إلى الطائف: توصيل خاص عبر الطريق الجبلي",
        description: "اطلب سيارة خاصة بسائق بين مكة المكرمة والطائف بالاتجاهين للمعتمرين والعائلات وزوار اليوم الواحد. عرض سعر من RideSaudi.",
        h1: "من مكة إلى الطائف بسيارة خاصة عبر جبال السروات",
        eyebrow: "بين المدن · مكة ⇄ الطائف",
        answer: "التوصيل الخاص من مكة إلى الطائف هو سيارة بسائق وبحجز مسبق من مكة المكرمة صعودًا إلى جبال السروات حتى الطائف، وبالعكس. يستخدمه الزوار للهروب من الحر أو زيارة الأهل أو إضافة يوم جبلي إلى رحلة العمرة. ولا يدخل غير المسلمين منطقة مكة، فعليهم استخدام صفحة جدة إلى الطائف. وعروض الأسعار فردية.",
        summary: "رحلة برية جبلية خاصة بين مكة والطائف للمعتمرين والعائلات.",
        sections: [
          { h: "طريق يصعد بالجبال", p: ["تقع الطائف في جبال السروات على ارتفاع أعلى وأبرد من مكة، والطريق إليها صعود شديد ومتعرج لا طريق مستوٍ. وعلى من يعاني دوار الحركة أو معه أطفال صغار أو كبار سن أن يذكر ذلك في الطلب ليُخطَّط للقيادة ولأي توقف للراحة. ولا ننشر في هذه الصفحة مسافة أو زمن قيادة؛ فالجدول المخطط يأتي في عرض السعر."] },
          { h: "لمن هذا المسار", p: ["تأتي أغلب الطلبات من معتمرين يريدون يومًا أبرد بعد العمرة وعائلات تزور أقاربها في الطائف وأشخاص يضيفون الطائف إلى إقامة أطول. ويشمل اليوم المعتاد أماكن مثل قصر شبرا ومنتزه الردف ومرتفعات الهدا ومزارع الورد في موسمها، لكننا جهة ترتيب نقل ولا ننظم جولات، فأخبرنا بوقفاتك ويتبع السائق خطتك. وللمزيد من الأماكن راجع صفحة السياحة في الطائف."] },
          { h: "قواعد مكة والإحرام", p: ["الدخول إلى مكة مقصور على المسلمين، فعلى المجموعة المختلطة استخدام مسار جدة إلى الطائف الذي لا يدخل مكة. وإن كنت محرمًا أو تنوي الإحرام فأخبرنا في الطلب لنراعي توقيتك وأي توقف تريده. أما الميقات الذي ينطبق عليك فمسألة دينية تخصك مع عالمك أو منظم رحلة العمرة، ولا نقرر فيها نحن."] },
          { h: "بين الطائف ومكة", p: ["عند النزول من الطائف إلى مكة زوّدنا بفندقك في مكة أو البوابة التي ستقصدها، وتذكّر أن الازدحام حول الحرم أشد في أوقات الصلاة وفي رمضان وموسم الحج. وإن احتجت إلى مطار جدة بعد ذلك فأخبرنا لنخطط للمرحلة التالية معًا."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب مكة إلى الطائف", items: ["الاتجاه والتاريخ والوقت المفضل", "فندق مكة أو نقطة الاستلام وعنوان الطائف", "هل أحد في إحرام وهل الجميع مسلمون", "عدد الركاب وأعمارهم وأي احتياجات صحية أو حركية", "رحلة يوم واحد أم ذهاب فقط والوقفات التي تريدها"] },
        faqs: [
          { q: "هل يمكنني حجز سيارة خاصة من مكة إلى الطائف؟", a: "يمكنك طلب ذلك. تُسعَّر الرحلة على حدة ولا تتأكد إلا بعد موافقتك على عرض السعر." },
          { q: "هل يستطيع غير المسلمين السفر من مكة إلى الطائف؟", a: "الدخول إلى مكة مقصور على المسلمين. وعلى المجموعة المختلطة السؤال عن مسار جدة إلى الطائف بدلًا من ذلك." },
          { q: "هل طريق الطائف شديد الانحدار؟", a: "نعم، يصعد في جبال السروات بمنعطفات. أخبرنا عند الطلب عن دوار الحركة أو الأطفال أو كبار السن." },
          { q: "هل يمكنني زيارة الطائف في يوم واحد من مكة؟", a: "يمكنك طلب رحلة ذهاب وعودة مع انتظار. وتُتفق الوقفات ومدة اليوم في عرض السعر." },
          { q: "هل ترتبون الإحرام عند الميقات؟", a: "لا. الإحرام شأنك الديني. ويمكننا تخطيط توقف حيث تطلبه إن سمح المسار." },
        ],
      },
    },
  },

  {
    path: `${I}/madinah-to-alula`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/riyadh-to-alula`, `${T}/alula`, `${A}/alula-airport`, `${A}/madinah-airport`, `${C}/madinah`],
    updated: U,
    copy: {
      en: {
        nav: "Madinah to AlUla",
        title: "Madinah to AlUla Private Transfer with a Driver",
        description: "Request a private car with a driver between Madinah (or Madinah Airport) and AlUla in either direction, with planning notes and a RideSaudi quotation.",
        h1: "Madinah to AlUla by private car with a driver",
        eyebrow: "Intercity · Madinah ⇄ AlUla",
        answer: "A private Madinah to AlUla transfer is a pre-booked car with a driver from Madinah, or Prince Mohammad bin Abdulaziz Airport, north to AlUla, and the reverse. It is a long road journey through desert country. It fits travellers combining a Madinah visit with AlUla's heritage sites. RideSaudi quotes it individually and confirms availability first.",
        summary: "A long private road journey from Madinah to AlUla, for travellers combining the two.",
        sections: [
          { h: "Why travellers combine Madinah and AlUla", p: ["Madinah draws visitors for ziyarat and prayer, and AlUla draws them for sandstone landscapes and the heritage sites around Hegra. Linking the two by road lets a family or small group see both without arranging two separate trips, but the drive is long, so plan it as a half-day or more of travel rather than a short hop. We do not publish a distance or time here; the quotation covers the schedule."] },
          { h: "Starting from Madinah", p: ["Common starting points are a hotel near the Prophet's Mosque, a Madinah residence or Madinah's airport. Tell us your hotel and your departure time, and whether you are checking out the same day. Our Madinah airport and city pages explain how pickups there work."] },
          { h: "Arriving in AlUla", p: ["AlUla is spread over a wide area: the old town, the Hegra site, Elephant Rock and the resorts are not next to each other, so give us your exact hotel or resort. Entry to heritage sites is usually by ticket or guided access through official AlUla channels, so book that yourself; we carry you between places and do not sell entry or guide you. Check seasonal opening times on the official AlUla visitor channels."] },
          { h: "Rest stops and the return leg", p: ["On a long desert road, fuel and rest stops are sparse. Ask us to plan a stop, particularly with children or elderly passengers. For the return, give your Madinah flight or hotel deadline so the schedule works backwards from it. Travellers coming from the east can see our Riyadh to AlUla page."] },
        ],
        checklist: { h: "Include this in your Madinah to AlUla enquiry", items: ["Direction, date and departure time", "Madinah hotel or airport, and exact AlUla hotel or site", "Passengers, luggage and any rest-stop needs", "Your onward flight or check-out time", "One way or return, and days in AlUla"] },
        faqs: [
          { q: "Can I book a private car from Madinah Airport to AlUla?", a: "You can request it. Send your flight number and AlUla hotel, and availability and the quotation are confirmed before anything is arranged." },
          { q: "Is this a long drive?", a: "Yes, it is a long desert road journey. The planned schedule is given in your quotation rather than on this page." },
          { q: "Do you sell tickets to Hegra or arrange guides?", a: "No. Heritage entry is booked through official AlUla channels. We provide the transport between places." },
          { q: "Can the driver wait while we see the sites?", a: "Waiting can be requested. How it is handled and charged is set out in the quotation." },
          { q: "Can we do AlUla and return to Madinah the same day?", a: "That would be a very long day. Ask about it in your enquiry, and consider staying a night in AlUla." },
        ],
      },
      ar: {
        nav: "المدينة المنورة إلى العلا",
        title: "المدينة المنورة إلى العلا: توصيل خاص مع سائق",
        description: "اطلب سيارة خاصة بسائق بين المدينة المنورة أو مطارها والعلا بالاتجاهين، مع ملاحظات للتخطيط وعرض سعر من RideSaudi.",
        h1: "من المدينة المنورة إلى العلا بسيارة خاصة مع سائق",
        eyebrow: "بين المدن · المدينة ⇄ العلا",
        answer: "التوصيل الخاص من المدينة المنورة إلى العلا هو سيارة بسائق وبحجز مسبق من المدينة أو من مطار الأمير محمد بن عبدالعزيز شمالًا إلى العلا، وبالعكس. وهي رحلة برية طويلة عبر أراضٍ صحراوية، تناسب من يجمع بين زيارة المدينة ومواقع العلا التراثية. تُسعِّرها RideSaudi على حدة وتؤكد الإتاحة أولًا.",
        summary: "رحلة برية خاصة طويلة من المدينة المنورة إلى العلا لمن يجمع بين الوجهتين.",
        sections: [
          { h: "لماذا يجمع المسافرون بين المدينة والعلا", p: ["تجذب المدينة المنورة الزوار للزيارة والصلاة، وتجذبهم العلا لمناظرها الرملية ومواقعها التراثية حول الحِجر. وربط الوجهتين بالطريق البري يتيح لعائلة أو مجموعة صغيرة رؤية الاثنتين دون ترتيب رحلتين منفصلتين، لكن القيادة طويلة، فخطط لها بنصف يوم من السفر أو أكثر لا لمشوار قصير. ولا ننشر هنا مسافة أو زمنًا؛ فعرض السعر يغطي الجدول."] },
          { h: "الانطلاق من المدينة المنورة", p: ["تتنوع نقاط الانطلاق بين فندق قرب المسجد النبوي أو سكن في المدينة أو مطارها. أخبرنا باسم فندقك ووقت المغادرة وهل ستغادر الفندق في اليوم نفسه. وتشرح صفحتا مطار المدينة ومدينتها كيفية الاستلام هناك."] },
          { h: "الوصول إلى العلا", p: ["تمتد العلا على مساحة واسعة: البلدة القديمة وموقع الحِجر وجبل الفيل والمنتجعات ليست متجاورة، فزوّدنا باسم فندقك أو منتجعك بدقة. ويكون دخول المواقع التراثية عادةً بتذكرة أو بمرافقة عبر القنوات الرسمية للعلا، فاحجز ذلك بنفسك؛ فنحن ننقلك بين الأماكن ولا نبيع الدخول ولا نرشدك. وراجع مواعيد الفتح الموسمية لدى القنوات الرسمية لزوار العلا."] },
          { h: "محطات الراحة ورحلة العودة", p: ["على الطريق الصحراوي الطويل تقل محطات الوقود والراحة. اطلب منا تخطيط توقف خاصة مع الأطفال أو كبار السن. وفي العودة زوّدنا بموعد رحلتك أو مغادرة فندقك في المدينة ليُبنى الجدول انطلاقًا منه. ويمكن للقادمين من الشرق الاطلاع على صفحة الرياض إلى العلا."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب المدينة المنورة إلى العلا", items: ["الاتجاه والتاريخ ووقت المغادرة", "فندق المدينة أو المطار وفندق العلا أو الموقع بدقة", "الركاب والحقائب وأي حاجة إلى توقفات راحة", "رحلتك التالية أو وقت إخلاء الفندق", "ذهاب فقط أم ذهاب وعودة وعدد الأيام في العلا"] },
        faqs: [
          { q: "هل يمكنني حجز سيارة خاصة من مطار المدينة إلى العلا؟", a: "يمكنك طلب ذلك. أرسل رقم رحلتك وفندق العلا؛ وتُؤكَّد الإتاحة وعرض السعر قبل ترتيب أي شيء." },
          { q: "هل هي رحلة طويلة؟", a: "نعم، رحلة برية صحراوية طويلة. ويُعطى الجدول المخطط في عرض السعر لا في هذه الصفحة." },
          { q: "هل تبيعون تذاكر الحِجر أو ترتبون مرشدين؟", a: "لا. يُحجز الدخول التراثي عبر القنوات الرسمية للعلا. ونحن نوفر النقل بين الأماكن." },
          { q: "هل ينتظرنا السائق أثناء زيارة المواقع؟", a: "يمكن طلب الانتظار. وتوضح عرض السعر كيفية التعامل معه واحتسابه." },
          { q: "هل يمكن زيارة العلا والعودة إلى المدينة في اليوم نفسه؟", a: "سيكون يومًا طويلًا جدًا. اسأل عن ذلك في طلبك، وفكر في المبيت ليلة في العلا." },
        ],
      },
    },
  },

  {
    path: `${I}/jeddah-to-alula`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/madinah-to-alula`, `${I}/riyadh-to-alula`, `${T}/alula`, `${A}/alula-airport`, `${A}/jeddah-airport`],
    updated: U,
    copy: {
      en: {
        nav: "Jeddah to AlUla",
        title: "Jeddah to AlUla Private Car Transfer, One Way or Return",
        description: "Request a private car with a driver from Jeddah or King Abdulaziz Airport to AlUla and back. Planning notes for a very long road journey, with a quotation.",
        h1: "Jeddah to AlUla by private car, planned as a long journey",
        eyebrow: "Intercity · Jeddah ⇄ AlUla",
        answer: "A private Jeddah to AlUla transfer is a pre-booked car with a driver that carries you from Jeddah, or King Abdulaziz Airport, across the Hijaz to AlUla, and back. It is one of the longest domestic road journeys we are asked about, so it is planned with rest stops and often an overnight. RideSaudi quotes it individually and confirms availability first.",
        summary: "A very long private road journey from Jeddah to AlUla, planned around rest stops.",
        sections: [
          { h: "Be realistic about the distance", p: ["Jeddah to AlUla is a full day of travel by road, not an afternoon drive. We do not publish a distance or time here because we have not verified one for this page; the quotation sets the schedule. Many travellers weigh the drive against other ways of reaching AlUla. If you choose the road, plan the day around it and avoid fixed same-day commitments at the other end."] },
          { h: "Starting from Jeddah", p: ["Starting points are usually King Abdulaziz International Airport, a Jeddah hotel or a family home. Give the terminal and flight number if you are arriving, since the driver must be there when you clear immigration and baggage, and a long road trip should not begin in a rush. If you land in the evening, consider whether travelling the next morning suits you better."] },
          { h: "Rest stops and overnight options", p: ["Fuel and rest points thin out away from the main towns. Tell us if you want a meal or prayer stop, or if you would rather split the trip with a night on the way, and that can be built into the quotation. A split journey with a night in Madinah can also let you visit the city. See our Madinah to AlUla page for the second half."] },
          { h: "At AlUla", p: ["AlUla's sights are far apart, so give your exact resort or hotel. Heritage-site tickets and guided access are booked through official AlUla channels, and we only provide the transport between places. For the destination itself, read the AlUla tourism transport page."] },
        ],
        checklist: { h: "Include this in your Jeddah to AlUla enquiry", items: ["Direction, date and departure time", "Jeddah airport terminal and flight, or hotel address", "Whether you prefer one long day or a split journey", "Passengers, luggage and any health or mobility needs", "Exact AlUla hotel or resort, and the return plan"] },
        faqs: [
          { q: "Can I book a private car from Jeddah Airport to AlUla?", a: "You can request it. Send your flight number and the AlUla hotel; availability and the quotation are confirmed before anything is arranged." },
          { q: "Can the journey be split with an overnight stop?", a: "Yes, you can ask for that. The stop and its costs are set out in the quotation." },
          { q: "Do you publish a fixed price?", a: "No. A journey this long is quoted individually after we know your plan." },
          { q: "How many people can travel together?", a: "It depends on the vehicle available on your date. Give your passengers and luggage and we confirm what fits in the quotation." },
          { q: "Do you arrange AlUla entry tickets?", a: "No. Tickets and guides are booked through official AlUla channels. We provide the transport." },
        ],
      },
      ar: {
        nav: "جدة إلى العلا",
        title: "جدة إلى العلا: توصيل خاص ذهابًا أو ذهابًا وعودة",
        description: "اطلب سيارة خاصة بسائق من جدة أو مطار الملك عبدالعزيز إلى العلا وبالعكس. ملاحظات لرحلة برية طويلة جدًا مع عرض سعر.",
        h1: "من جدة إلى العلا بسيارة خاصة، رحلة طويلة يُخطط لها",
        eyebrow: "بين المدن · جدة ⇄ العلا",
        answer: "التوصيل الخاص من جدة إلى العلا هو سيارة بسائق وبحجز مسبق تنقلك من جدة أو مطار الملك عبدالعزيز عبر الحجاز إلى العلا، وبالعكس. وهي من أطول الرحلات البرية الداخلية التي نُسأل عنها، فتُخطَّط بمحطات راحة وكثيرًا ما بمبيت. تُسعِّرها RideSaudi على حدة وتؤكد الإتاحة أولًا.",
        summary: "رحلة برية خاصة طويلة جدًا من جدة إلى العلا تُخطَّط حول محطات الراحة.",
        sections: [
          { h: "كن واقعيًا بشأن المسافة", p: ["جدة إلى العلا يوم سفر كامل بالسيارة لا قيادة عصر. ولا ننشر هنا مسافة أو زمنًا لأننا لم نتحقق منهما لهذه الصفحة؛ فعرض السعر يحدد الجدول. ويوازن كثيرون بين القيادة وسبل أخرى للوصول إلى العلا. وإن اخترت الطريق البري فخطط يومك حوله وتجنب التزامات ثابتة في اليوم نفسه عند الوصول."] },
          { h: "الانطلاق من جدة", p: ["تكون نقاط الانطلاق عادةً مطار الملك عبدالعزيز الدولي أو فندقًا في جدة أو منزل عائلة. زوّدنا بالصالة ورقم الرحلة إن كنت قادمًا، فيجب أن يكون السائق حاضرًا حين تنهي إجراءات الجوازات والحقائب، ولا ينبغي أن تبدأ رحلة برية طويلة على عجل. وإن هبطت مساءً فانظر هل السفر صباح اليوم التالي أنسب لك."] },
          { h: "محطات الراحة وخيارات المبيت", p: ["تقل محطات الوقود والراحة بعيدًا عن المدن الرئيسية. أخبرنا إن أردت وقفة للطعام أو الصلاة، أو إن فضلت تقسيم الرحلة بمبيت في الطريق، ويمكن إدراج ذلك في عرض السعر. وقد يتيح تقسيم الرحلة بمبيت في المدينة المنورة زيارتها أيضًا. راجع صفحة المدينة المنورة إلى العلا للنصف الثاني."] },
          { h: "في العلا", p: ["معالم العلا متباعدة، فزوّدنا باسم منتجعك أو فندقك بدقة. وتُحجز تذاكر المواقع التراثية والمرافقة عبر القنوات الرسمية للعلا، ونحن نوفر النقل بين الأماكن فقط. وللوجهة نفسها اقرأ صفحة النقل السياحي في العلا."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب جدة إلى العلا", items: ["الاتجاه والتاريخ ووقت المغادرة", "صالة مطار جدة والرحلة أو عنوان الفندق", "هل تفضل يومًا طويلًا واحدًا أم رحلة مقسمة", "الركاب والحقائب وأي احتياجات صحية أو حركية", "فندق العلا أو المنتجع بدقة وخطة العودة"] },
        faqs: [
          { q: "هل يمكنني حجز سيارة خاصة من مطار جدة إلى العلا؟", a: "يمكنك طلب ذلك. أرسل رقم رحلتك وفندق العلا؛ وتُؤكَّد الإتاحة وعرض السعر قبل ترتيب أي شيء." },
          { q: "هل يمكن تقسيم الرحلة بمبيت في الطريق؟", a: "نعم، يمكنك طلب ذلك. ويُوضَّح التوقف وتكلفته في عرض السعر." },
          { q: "هل تنشرون سعرًا ثابتًا؟", a: "لا. رحلة بهذا الطول تُسعَّر على حدة بعد معرفة خطتك." },
          { q: "كم شخصًا يمكنهم السفر معًا؟", a: "يعتمد على المركبة المتاحة في تاريخك. أرسل عدد الركاب والحقائب ونؤكد ما يناسب في عرض السعر." },
          { q: "هل ترتبون تذاكر دخول العلا؟", a: "لا. تُحجز التذاكر والمرشدون عبر القنوات الرسمية للعلا. ونحن نوفر النقل." },
        ],
      },
    },
  },

  {
    path: `${A}/alula-airport`,
    parent: A,
    variant: "default",
    service: "airport",
    related: [`${T}/alula`, `${I}/madinah-to-alula`, `${I}/jeddah-to-alula`, `${I}/riyadh-to-alula`],
    updated: U,
    copy: {
      en: {
        nav: "AlUla Airport Transfers",
        title: "AlUla Airport (ULH) Private Transfers",
        description: "Request a private transfer between AlUla International Airport (ULH) and your AlUla hotel, resort or heritage site. Share your flight and get a quotation.",
        h1: "AlUla International Airport (ULH) private transfers",
        eyebrow: "Airport Transfers · AlUla",
        answer: "A private AlUla Airport transfer is a pre-booked car with a driver between AlUla International Airport (ULH) and your hotel, resort or another place in AlUla. AlUla's attractions are spread out, so a pre-arranged car saves arranging transport on arrival. Send your flight number and destination and RideSaudi confirms availability and a quotation.",
        summary: "Pre-booked pickups and drop-offs at AlUla International Airport (ULH).",
        sections: [
          { h: "Arriving at ULH", p: ["AlUla International Airport is a small regional airport. Because the area has few public transport options and sights are far apart, travellers arriving by air generally want transport waiting. Send the airline, flight number and arrival date so your pickup is planned around the actual landing time, and say how many people and bags are travelling."] },
          { h: "Where people go from the airport", p: ["Typical destinations are resorts and hotels in the AlUla valley, the old town, and areas near Hegra and Elephant Rock. Because destinations are spread out, give your exact hotel or resort name rather than just AlUla. If you plan to move around during your stay, ask about a driver for part of a day as well; our AlUla tourism transport page covers that."] },
          { h: "Departures from AlUla", p: ["For a departing flight, tell us the departure time and airline, and we plan the pickup back from it. Because flights from small airports can be limited and check-in closes at a fixed time, leave a safe margin. Check the current flight schedule with your airline; we do not publish airline routes or timings here."] },
          { h: "Connecting by road instead", p: ["If you reach AlUla by road, see the Madinah, Jeddah and Riyadh to AlUla pages. Combining a flight in with a road leg out is also possible, and we can quote the pieces together if you ask."] },
        ],
        checklist: { h: "Include this in your AlUla Airport enquiry", items: ["Arrival or departure date, airline and flight number", "Exact AlUla hotel, resort or site", "Passengers and luggage", "Any onward or earlier day trips you want a driver for", "Return transfer to the airport, if known"] },
        faqs: [
          { q: "Can I pre-book a private transfer from AlUla Airport?", a: "You can request one. Send your flight number and destination; availability is confirmed in the quotation." },
          { q: "What is the AlUla airport code?", a: "AlUla International Airport uses the IATA code ULH." },
          { q: "Will the driver track my flight?", a: "Tell us your flight number and ask how delays are handled. The terms are set out in your quotation and confirmation." },
          { q: "Can you take me straight to a heritage site?", a: "You can ask for a drop-off near a site. Entry tickets are booked through official AlUla channels, not through us." },
          { q: "Do you cover other Saudi airports?", a: "Yes, see our airport transfers hub for Jeddah, Riyadh, Madinah, Dammam and Taif." },
        ],
      },
      ar: {
        nav: "التوصيل من مطار العلا وإليه",
        title: "التوصيل الخاص من مطار العلا الدولي وإليه",
        description: "اطلب توصيلًا خاصًا بين مطار العلا الدولي وفندقك أو منتجعك أو موقعك التراثي في العلا. أرسل رحلتك واستلم عرض سعر.",
        h1: "التوصيل الخاص من مطار العلا الدولي وإليه",
        eyebrow: "التوصيل من المطار · العلا",
        answer: "التوصيل الخاص من مطار العلا هو سيارة بسائق وبحجز مسبق بين مطار العلا الدولي وفندقك أو منتجعك أو مكان آخر في العلا. ومعالم العلا متباعدة، فيوفر ترتيب السيارة مسبقًا عناء البحث عن وسيلة عند الوصول. أرسل رقم رحلتك ووجهتك وتؤكد RideSaudi الإتاحة وعرض السعر.",
        summary: "استلام وتوصيل بحجز مسبق في مطار العلا الدولي.",
        sections: [
          { h: "الوصول إلى مطار العلا", p: ["مطار العلا الدولي مطار إقليمي صغير. ولأن وسائل النقل العام قليلة في المنطقة والمعالم متباعدة، يفضل القادمون جوًا أن تنتظرهم سيارة. أرسل شركة الطيران ورقم الرحلة وتاريخ الوصول ليُرتَّب استلامك وفق موعد الهبوط الفعلي، وأخبرنا بعدد الركاب والحقائب."] },
          { h: "إلى أين يتجه الناس من المطار", p: ["تشمل الوجهات المعتادة المنتجعات والفنادق في وادي العلا والبلدة القديمة والمناطق القريبة من الحِجر وجبل الفيل. ولأن الوجهات متباعدة فاذكر اسم فندقك أو منتجعك بدقة لا العلا فقط. وإن كنت تنوي التنقل خلال إقامتك فاسأل عن سائق لجزء من اليوم أيضًا؛ وتغطي ذلك صفحة النقل السياحي في العلا."] },
          { h: "المغادرة من العلا", p: ["للرحلات المغادرة أخبرنا بموعد الإقلاع وشركة الطيران لنخطط الاستلام انطلاقًا منه. ولأن رحلات المطارات الصغيرة قد تكون محدودة ويُغلق الإجراء في وقت ثابت فاترك هامشًا آمنًا. وتحقق من جدول الرحلات الحالي مع شركة الطيران؛ فلا ننشر هنا مسارات الطيران ولا مواعيدها."] },
          { h: "الوصول برًّا بدل ذلك", p: ["إن كنت تصل إلى العلا برًّا فراجع صفحات المدينة المنورة وجدة والرياض إلى العلا. ويمكن أيضًا الجمع بين رحلة جوية في الذهاب ومرحلة برية في العودة، ونسعّر الأجزاء معًا إن طلبت."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب مطار العلا", items: ["تاريخ الوصول أو المغادرة وشركة الطيران ورقم الرحلة", "فندق العلا أو المنتجع أو الموقع بدقة", "الركاب والحقائب", "أي رحلات يومية تريد لها سائقًا", "التوصيل إلى المطار عند العودة إن عُرف"] },
        faqs: [
          { q: "هل يمكنني حجز توصيل خاص مسبقًا من مطار العلا؟", a: "يمكنك طلب ذلك. أرسل رقم رحلتك ووجهتك؛ وتُؤكَّد الإتاحة في عرض السعر." },
          { q: "ما رمز مطار العلا؟", a: "يستخدم مطار العلا الدولي رمز الإياتا ULH." },
          { q: "هل يتابع السائق رحلتي؟", a: "أخبرنا برقم رحلتك واسأل عن آلية التعامل مع التأخير. وتُوضَّح الشروط في عرض السعر والتأكيد." },
          { q: "هل توصلونني مباشرة إلى موقع تراثي؟", a: "يمكنك طلب الإنزال قرب موقع. وتُحجز تذاكر الدخول عبر القنوات الرسمية للعلا لا عبرنا." },
          { q: "هل تغطون مطارات سعودية أخرى؟", a: "نعم، راجع صفحة التوصيل من المطارات لجدة والرياض والمدينة والدمام والطائف." },
        ],
      },
    },
  },

  {
    path: `${I}/riyadh-to-hafar-al-batin`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${X}/kuwait`, `${I}/riyadh-to-kuwait-city`, `${I}/riyadh-to-dammam`, `${A}/riyadh-airport`, `${C}/riyadh`, "services/city-transport/hafar-al-batin"],
    updated: U,
    copy: {
      en: {
        nav: "Riyadh to Hafar Al Batin",
        title: "Riyadh to Hafar Al Batin Private Transfer",
        description: "Request a private car with a driver between Riyadh and Hafar Al Batin in the north-east, in either direction, for business, family and onward Kuwait travel.",
        h1: "Riyadh to Hafar Al Batin by private car with a driver",
        eyebrow: "Intercity · Riyadh ⇄ Hafar Al Batin",
        answer: "A private Riyadh to Hafar Al Batin transfer is a pre-booked car with a driver from Riyadh to Hafar Al Batin, a city in the far north-east of Saudi Arabia near the Kuwait border, and back. It is a long inland journey used for business, family visits and onward travel. RideSaudi quotes each journey individually and confirms availability first.",
        summary: "A long private road journey from Riyadh to Hafar Al Batin in the north-east.",
        sections: [
          { h: "Where Hafar Al Batin is", p: ["Hafar Al Batin lies in the Eastern Province, close to the borders with Kuwait and Iraq, so a journey there from Riyadh crosses a great deal of open country. We do not publish a distance or driving time on this page because none has been verified for it; the quotation gives the planned schedule. Treat it as a full day of travel with at least one rest stop."] },
          { h: "Why people take this route", p: ["Typical reasons are business visits to employers and contractors in the north, family visits, and the first leg of a journey to Kuwait. Because public transport options are limited for the distance, a pre-booked car with a driver is a practical alternative for families and for people carrying luggage or equipment."] },
          { h: "Continuing to Kuwait", p: ["The Saudi–Kuwait land crossing used from this area is near Hafar Al Batin. If you intend to continue to Kuwait City, see our Riyadh to Kuwait City page and the Kuwait cross-border page; entry rules, visas and vehicle permission at the border are for you to check with the official authorities and are confirmed for your vehicle in the quotation. We do not issue visas."] },
          { h: "Starting from Riyadh", p: ["Typical starts are a Riyadh hotel, a home or office, or King Khalid International Airport. Tell us the pickup point, the Hafar Al Batin address or hotel, and whether you need to be there at a fixed time. For the return, give the Riyadh address or flight time and we plan backwards from it."] },
        ],
        checklist: { h: "Include this in your Riyadh to Hafar Al Batin enquiry", items: ["Direction, date and preferred departure time", "Exact Riyadh pickup and the Hafar Al Batin address", "Passengers, luggage and any equipment", "Whether you continue to Kuwait", "One way or return, and any fixed meeting time"] },
        faqs: [
          { q: "Can I book a private car from Riyadh to Hafar Al Batin?", a: "You can request it. The journey is quoted individually and confirmed after you accept the quotation." },
          { q: "Is Hafar Al Batin near Kuwait?", a: "Yes, it is in the north-east near the Kuwait border, which is why some travellers continue to Kuwait from there." },
          { q: "Can you take me on to Kuwait City?", a: "You can request it. Border entry and vehicle permission are checked and confirmed in the quotation; see the Riyadh to Kuwait City page." },
          { q: "How long does the journey take?", a: "It is a long drive. The planned schedule comes in your quotation, not on this page." },
          { q: "Can I travel back to Riyadh the same day?", a: "A return can be requested, but it is a very long day. Ask about timing and waiting in your enquiry." },
        ],
      },
      ar: {
        nav: "الرياض إلى حفر الباطن",
        title: "الرياض إلى حفر الباطن: توصيل خاص مع سائق",
        description: "اطلب سيارة خاصة بسائق بين الرياض وحفر الباطن في الشمال الشرقي بالاتجاهين، للأعمال وزيارات العائلة والسفر المتصل إلى الكويت.",
        h1: "من الرياض إلى حفر الباطن بسيارة خاصة مع سائق",
        eyebrow: "بين المدن · الرياض ⇄ حفر الباطن",
        answer: "التوصيل الخاص من الرياض إلى حفر الباطن هو سيارة بسائق وبحجز مسبق من الرياض إلى حفر الباطن، المدينة الواقعة في أقصى الشمال الشرقي للمملكة قرب حدود الكويت، وبالعكس. وهي رحلة داخلية طويلة تُستخدم للأعمال وزيارة الأهل والسفر المتصل. تُسعِّر RideSaudi كل رحلة على حدة وتؤكد الإتاحة أولًا.",
        summary: "رحلة برية خاصة طويلة من الرياض إلى حفر الباطن في الشمال الشرقي.",
        sections: [
          { h: "أين تقع حفر الباطن", p: ["تقع حفر الباطن في المنطقة الشرقية قرب حدود الكويت والعراق، فتعبر الرحلة إليها من الرياض مساحات واسعة مفتوحة. ولا ننشر في هذه الصفحة مسافة أو زمن قيادة لأننا لم نتحقق منهما لها؛ فعرض السعر يعطي الجدول المخطط. تعامل معها على أنها يوم سفر كامل بمحطة راحة واحدة على الأقل."] },
          { h: "لماذا يسلك الناس هذا المسار", p: ["من الأسباب المعتادة زيارات العمل لدى أصحاب العمل والمقاولين في الشمال وزيارات الأهل والمرحلة الأولى من رحلة إلى الكويت. ولأن خيارات النقل العام محدودة لهذه المسافة فالسيارة الخاصة بسائق وبحجز مسبق بديل عملي للعائلات ولمن يحمل حقائب أو معدات."] },
          { h: "المتابعة إلى الكويت", p: ["يقع المنفذ البري السعودي الكويتي المستخدم من هذه المنطقة قرب حفر الباطن. وإن كنت تنوي المتابعة إلى مدينة الكويت فراجع صفحة الرياض إلى مدينة الكويت وصفحة العبور إلى الكويت؛ فقواعد الدخول والتأشيرات وإذن المركبة عند الحدود تتحقق منها أنت لدى الجهات الرسمية، وتُؤكَّد لمركبتك في عرض السعر. ولا نصدر تأشيرات."] },
          { h: "الانطلاق من الرياض", p: ["تكون نقاط الانطلاق المعتادة فندقًا في الرياض أو منزلًا أو مكتبًا أو مطار الملك خالد الدولي. أخبرنا بنقطة الاستلام وعنوان أو فندق حفر الباطن وهل يلزمك الوصول في وقت ثابت. وفي العودة زوّدنا بعنوان الرياض أو موعد الرحلة ونخطط انطلاقًا منه."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الرياض إلى حفر الباطن", items: ["الاتجاه والتاريخ ووقت الانطلاق المفضل", "نقطة الاستلام في الرياض وعنوان حفر الباطن بدقة", "الركاب والحقائب وأي معدات", "هل ستتابع إلى الكويت", "ذهاب فقط أم ذهاب وعودة وأي موعد ثابت"] },
        faqs: [
          { q: "هل يمكنني حجز سيارة خاصة من الرياض إلى حفر الباطن؟", a: "يمكنك طلب ذلك. تُسعَّر الرحلة على حدة وتتأكد بعد موافقتك على عرض السعر." },
          { q: "هل حفر الباطن قريبة من الكويت؟", a: "نعم، تقع في الشمال الشرقي قرب حدود الكويت، ولذلك يتابع بعض المسافرين منها إلى الكويت." },
          { q: "هل توصلونني إلى مدينة الكويت؟", a: "يمكنك طلب ذلك. ويُتحقق من الدخول عند الحدود وإذن المركبة ويُؤكدان في عرض السعر؛ راجع صفحة الرياض إلى مدينة الكويت." },
          { q: "كم تستغرق الرحلة؟", a: "إنها قيادة طويلة. ويأتي الجدول المخطط في عرض السعر لا في هذه الصفحة." },
          { q: "هل يمكن العودة إلى الرياض في اليوم نفسه؟", a: "يمكن طلب ذهاب وعودة لكنه يوم طويل جدًا. اسأل عن التوقيت والانتظار في طلبك." },
        ],
      },
    },
  },
];
