import type { BlogPost } from "./types";

const S = "services";
const I = `${S}/intercity-transfers`;
const D = "2026-11-18";

/**
 * Guide D4: Madinah to AlUla by road (journey-planning intent; booking stays on the madinah-to-alula page).
 * Facts checked 2026-11-18 on Google Maps (Prophet's Mosque to AlUla town): about 338 km, about 3 h 42 min
 * via Route 328; alternative about 390 km via Route 15 and Route 375, about 4 h 14 min.
 * Site facts reused from the AlUla pages: sites are spread out; Hegra and some sites are visited through the
 * official operator with ticketed or guided access; RideSaudi does not sell tickets or provide guides;
 * AlUla has its own airport (ULH). Not stated: fuel station locations, opening hours, ticket prices, flights.
 */
export const madinahAlulaPost: BlogPost = {
  slug: "madinah-to-alula-by-road-guide",
  published: D,
  updated: D,
  links: [
    `${I}/madinah-to-alula`,
    `${S}/tourism-transport/alula`,
    `${S}/airport-transfers/alula-airport`,
    `${S}/airport-transfers/madinah-airport`,
    `${S}/city-transport/madinah`,
    `${I}/riyadh-to-alula`,
    `${I}/jeddah-to-alula`,
  ],
  copy: {
    en: {
      nav: "Madinah to AlUla by road",
      title: "Madinah to AlUla by Road: Distance, Time and Planning Tips",
      description: "Planning the drive from Madinah to AlUla: about 338 km and under four hours, which road, when to leave, Hegra access and how to combine both cities.",
      h1: "Madinah to AlUla by road: how to plan the journey",
      answer:
        "Madinah to AlUla is about 338 km by road, around 3 hours 40 minutes of driving without stops via Route 328 (Google Maps, November 2026). Leave in the morning, plan a rest stop, and give the exact name of your AlUla hotel or resort, because AlUla is spread out. Book Hegra and other controlled sites separately, through the official AlUla channels.",
      summary: "The road, the timing and the practical details for combining a Madinah visit with AlUla.",
      sections: [
        {
          h: "Why travellers drive between Madinah and AlUla",
          p: [
            "Madinah and AlUla are the two great draws of north-west Saudi Arabia, for very different reasons: prayer and ziyarat in one, sandstone landscapes and the heritage of Hegra in the other. They are close enough to combine in one trip. Driving lets you leave from your Madinah hotel and arrive at your AlUla resort without an extra flight, and with all your luggage in one vehicle.",
          ],
        },
        {
          h: "The road: which way, and how long",
          p: [
            "Google Maps gives the fastest route from the Prophet's Mosque area to AlUla town as about 338 km via Route 328, around 3 hours 42 minutes without stops. A longer route via Route 15 and Route 375 is about 390 km and around 4 hours 14 minutes. Your driver chooses on the day according to traffic and conditions.",
            "Much of the drive is through open desert country with long gaps between towns. That is part of the experience, but it also means planning a rest stop rather than counting on finding one when you need it, especially with children or older passengers.",
          ],
        },
        {
          h: "When to leave",
          p: [
            "Aim to arrive in daylight. AlUla's resorts and hotels sit some distance from the town and from each other, often on quiet roads, and arriving in daylight makes the first evening easier. In Madinah, choose a departure time that fits around the prayer you want to attend and your hotel check-out, then add time for a stop on the road.",
            "AlUla is busiest in the cooler months, when events and festivals run and accommodation and transport are in demand. If you are travelling then, book early.",
          ],
        },
        {
          h: "Arriving in AlUla: give the exact address",
          p: [
            "AlUla is not one compact town. The old town, Elephant Rock, the Hegra archaeological site and the resorts are separated by desert roads. Give the exact name of your hotel or resort, not just 'AlUla', so the drop-off is planned correctly.",
            "If you will move between sites during your stay, a car with a driver in AlUla is a separate booking: see AlUla private transportation.",
          ],
        },
        {
          h: "Hegra and the heritage sites",
          p: [
            "Hegra and some other sites are visited through the official operator, with ticketed or guided access. Book those visits yourself, through the official AlUla channels, before you plan the drive around them. RideSaudi provides the transport only; it does not sell tickets or provide guides.",
          ],
        },
        {
          h: "Ways to combine Madinah and AlUla",
          p: ["Common ways to put the two together:"],
          list: [
            "Madinah first, then drive to AlUla and fly out from AlUla International Airport (ULH)",
            "Fly into AlUla, then drive to Madinah and continue from Madinah's airport or onward to Makkah",
            "A return trip by road from Madinah, with your AlUla stay in between",
            "Arriving from further away: there are also routes to AlUla from Riyadh and Jeddah",
          ],
        },
      ],
      table: {
        h: "Madinah to AlUla at a glance",
        head: ["Detail", "What to know"],
        rows: [
          ["Road distance", "About 338 km, Prophet's Mosque area to AlUla town"],
          ["Driving time", "About 3 h 42 min without stops via Route 328 (Google Maps, November 2026)"],
          ["Longer route", "About 390 km via Route 15 and Route 375, about 4 h 14 min"],
          ["Best time to arrive", "In daylight; AlUla's resorts are spread out on quiet roads"],
          ["Heritage sites", "Hegra and some sites need tickets or guided access through official channels"],
          ["Airports at each end", "Prince Mohammad bin Abdulaziz (Madinah) and AlUla International (ULH)"],
        ],
      },
      faqs: [
        { q: "How far is AlUla from Madinah by road?", a: "About 338 km from the Prophet's Mosque area to AlUla town, around 3 hours 42 minutes without stops via Route 328 (Google Maps, November 2026)." },
        { q: "Can I visit Hegra on the way?", a: "Hegra is visited through the official operator with ticketed or guided access, so book the visit separately and plan the drive around it." },
        { q: "Is it better to drive or fly to AlUla?", a: "From Madinah, driving avoids a second flight and keeps your luggage with you. If you are coming from much further away, flying into AlUla's airport may make more sense." },
        { q: "Can I go from AlUla straight to Madinah at the end of my trip?", a: "Yes. The same road works in reverse; give your Madinah hotel or flight time so the departure from AlUla is planned back from it." },
        { q: "Can I book a private car from Madinah to my AlUla resort?", a: "Yes. Send your hotel in Madinah, your AlUla resort, the date, passengers and bags on the Madinah to AlUla page." },
      ],
    },
    ar: {
      nav: "من المدينة إلى العلا برًّا",
      title: "من المدينة إلى العلا بالسيارة: المسافة والوقت والتخطيط",
      description: "تخطيط الطريق من المدينة المنورة إلى العلا: نحو 338 كم في أقل من أربع ساعات، أي طريق تسلك، ومتى تنطلق، وزيارة الحِجر، والجمع بين المدينتين.",
      h1: "من المدينة إلى العلا برًّا: كيف تخطط للرحلة",
      answer:
        "المسافة من المدينة المنورة إلى العلا نحو 338 كم بالطريق، أي قرابة 3 ساعات و40 دقيقة قيادة بلا توقف عبر طريق 328 (خرائط Google، نوفمبر 2026). انطلق صباحًا، وخطط لتوقف للراحة، واذكر اسم فندقك أو منتجعك في العلا بدقة لأن العلا متباعدة الأطراف. واحجز زيارة الحِجر والمواقع الأخرى المنظمة على حدة عبر القنوات الرسمية للعلا.",
      summary: "الطريق والتوقيت والتفاصيل العملية للجمع بين زيارة المدينة والعلا.",
      sections: [
        {
          h: "لماذا يسافر الناس برًّا بين المدينة والعلا",
          p: [
            "المدينة المنورة والعلا أبرز وجهتين في شمال غرب المملكة، ولأسباب مختلفة تمامًا: الصلاة والزيارة في الأولى، والطبيعة الصخرية وتراث الحِجر في الثانية. وهما قريبتان بما يكفي للجمع بينهما في رحلة واحدة. والسفر بالسيارة يتيح لك الانطلاق من فندقك في المدينة والوصول إلى منتجعك في العلا دون رحلة طيران إضافية، ومع كل حقائبك في سيارة واحدة.",
          ],
        },
        {
          h: "الطريق: أي طريق، وكم يستغرق",
          p: [
            "تعطي خرائط Google أسرع طريق من منطقة المسجد النبوي إلى بلدة العلا بنحو 338 كم عبر طريق 328، قرابة 3 ساعات و42 دقيقة بلا توقف. وهناك طريق أطول عبر طريق 15 وطريق 375 بنحو 390 كم وقرابة 4 ساعات و14 دقيقة. ويختار السائق يوم الرحلة بحسب الحركة والظروف.",
            "ويمر جزء كبير من الطريق بأراضٍ صحراوية مفتوحة تتباعد فيها البلدات. وهذا جزء من متعة الرحلة، لكنه يعني أن تخطط مسبقًا لتوقف الراحة بدل أن تعتمد على إيجاده وقت الحاجة، خصوصًا مع الأطفال أو كبار السن.",
          ],
        },
        {
          h: "متى تنطلق",
          p: [
            "احرص على الوصول في النهار. فمنتجعات العلا وفنادقها تبعد عن البلدة وعن بعضها، وكثيرًا ما تكون على طرق هادئة، والوصول نهارًا يجعل الليلة الأولى أسهل. وفي المدينة اختر موعد انطلاق يناسب الصلاة التي تريد حضورها وموعد مغادرة الفندق، ثم أضف وقتًا للتوقف في الطريق.",
            "وتزدحم العلا في الأشهر الباردة حين تُقام الفعاليات والمهرجانات ويكثر الطلب على السكن والنقل، فإن كنت مسافرًا في هذه الفترة فاحجز مبكرًا.",
          ],
        },
        {
          h: "عند الوصول إلى العلا: اذكر العنوان بدقة",
          p: [
            "العلا ليست بلدة متقاربة الأطراف؛ فالبلدة القديمة وجبل الفيل وموقع الحِجر الأثري والمنتجعات تفصل بينها طرق صحراوية. اذكر اسم فندقك أو منتجعك بدقة، لا «العلا» فقط، ليُخطَّط مكان النزول بشكل صحيح.",
            "وإن كنت ستتنقل بين المواقع خلال إقامتك، فالسيارة مع سائق داخل العلا حجز مستقل: راجع صفحة التنقل الخاص في العلا.",
          ],
        },
        {
          h: "الحِجر والمواقع التراثية",
          p: [
            "تُزار الحِجر وبعض المواقع الأخرى عبر الجهة المشغّلة الرسمية بتذاكر أو بجولات منظمة. احجز هذه الزيارات بنفسك عبر القنوات الرسمية للعلا قبل أن تخطط الطريق حولها. وتقدّم RideSaudi النقل فقط، ولا تبيع تذاكر ولا توفر مرشدين.",
          ],
        },
        {
          h: "طرق للجمع بين المدينة والعلا",
          p: ["طرق شائعة للجمع بين الوجهتين:"],
          list: [
            "المدينة أولًا، ثم السفر برًّا إلى العلا والمغادرة جوًّا من مطار العلا الدولي",
            "الوصول جوًّا إلى العلا، ثم السفر برًّا إلى المدينة والمغادرة من مطارها أو إكمال الرحلة إلى مكة",
            "رحلة ذهاب وعودة برًّا من المدينة مع الإقامة في العلا بينهما",
            "القادمون من أماكن أبعد: توجد أيضًا مسارات إلى العلا من الرياض وجدة",
          ],
        },
      ],
      table: {
        h: "من المدينة إلى العلا باختصار",
        head: ["التفصيل", "ما تحتاج معرفته"],
        rows: [
          ["المسافة بالطريق", "نحو 338 كم من منطقة المسجد النبوي إلى بلدة العلا"],
          ["زمن القيادة", "نحو 3 ساعات و42 دقيقة بلا توقف عبر طريق 328 (خرائط Google، نوفمبر 2026)"],
          ["طريق أطول", "نحو 390 كم عبر طريق 15 وطريق 375، قرابة 4 ساعات و14 دقيقة"],
          ["أفضل وقت للوصول", "في النهار؛ منتجعات العلا متباعدة على طرق هادئة"],
          ["المواقع التراثية", "الحِجر وبعض المواقع تحتاج تذاكر أو جولات منظمة عبر القنوات الرسمية"],
          ["المطاران في الطرفين", "مطار الأمير محمد بن عبدالعزيز (المدينة) ومطار العلا الدولي"],
        ],
      },
      faqs: [
        { q: "كم المسافة من المدينة إلى العلا بالسيارة؟", a: "نحو 338 كم من منطقة المسجد النبوي إلى بلدة العلا، قرابة 3 ساعات و42 دقيقة بلا توقف عبر طريق 328 (خرائط Google، نوفمبر 2026)." },
        { q: "هل يمكنني زيارة الحِجر في الطريق؟", a: "تُزار الحِجر عبر الجهة المشغّلة الرسمية بتذاكر أو جولات منظمة، فاحجز الزيارة على حدة وخطط الطريق حولها." },
        { q: "أيهما أفضل إلى العلا: السيارة أم الطائرة؟", a: "من المدينة تغنيك السيارة عن رحلة طيران ثانية وتبقى حقائبك معك. وإن كنت قادمًا من مكان أبعد بكثير فقد يكون الطيران إلى مطار العلا أنسب." },
        { q: "هل يمكنني الذهاب من العلا إلى المدينة مباشرة في نهاية رحلتي؟", a: "نعم، الطريق نفسه بالعكس. اذكر فندقك في المدينة أو موعد رحلتك ليُخطَّط الانطلاق من العلا على أساسه." },
        { q: "هل يمكنني حجز سيارة خاصة من المدينة إلى منتجعي في العلا؟", a: "نعم. أرسل اسم فندقك في المدينة ومنتجعك في العلا والتاريخ وعدد الركاب والحقائب من صفحة التوصيل من المدينة إلى العلا." },
      ],
    },
  },
};
