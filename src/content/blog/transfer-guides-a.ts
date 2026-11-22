import type { BlogPost } from "./types";
import { images } from "../images";

/**
 * Private transfer guides, part A (2026-11-23). Cluster: private-transfers.
 * Distances reuse the verified route pages (Google Maps / public route data, November 2026).
 * No prices, guaranteed times, vehicle availability, free waiting, flight tracking or capacity numbers
 * (only the Staria capacity is owner-confirmed). RideSaudi arranges vehicles with drivers through partners.
 */
export const S = "services";
export const I = `${S}/intercity-transfers`;
export const A = `${S}/airport-transfers`;
export const D = "2026-11-23";

export const airportGuidePost: BlogPost = {
  slug: "private-airport-transfers-saudi-arabia",
  published: D,
  updated: D,
  cluster: "private-transfers",
  hero: images.airportJed,
  related: ["airport-pickup-tips-saudi-arrivals", "umrah-private-transport-plan-jeddah-makkah-madinah", "luxury-suv-gmc-transfer-saudi-arabia"],
  links: [A, `${A}/riyadh-airport`, `${A}/jeddah-airport`, `${A}/madinah-airport`, `${A}/dammam-airport`, `${S}/umrah-transport/jeddah-airport-to-makkah`, `${A}/vip-airport-transfer`],
  copy: {
    en: {
      nav: "Private airport transfers, airport by airport",
      title: "Private Airport Transfers in Saudi Arabia: Guide",
      description: "Private airport transfers in Saudi Arabia, airport by airport: Riyadh, Jeddah, Madinah and Dammam, the onward routes from each, and what to send when you book.",
      h1: "Private airport transfers in Saudi Arabia: Riyadh, Jeddah, Madinah and Dammam",
      answer: "A private airport transfer in Saudi Arabia is a pre-booked car with a driver that meets your party at arrivals and takes you straight to your hotel, home or another city. The four busiest airports for transfers are Riyadh (RUH), Jeddah (JED), Madinah (MED) and Dammam (DMM). Send the flight number, arrival time, passengers, bags and destination, and the vehicle and meeting point are confirmed in the quotation.",
      summary: "What changes from one Saudi airport to another, the usual onward routes, and the details that make a pickup go smoothly.",
      table: {
        h: "Main airports and typical onward transfers",
        head: ["Airport", "City", "Typical onward journeys"],
        rows: [
          ["King Khalid International (RUH)", "Riyadh", "Riyadh hotels and offices, KAFD, Diplomatic Quarter; intercity to Qassim or Dammam"],
          ["King Abdulaziz International (JED)", "Jeddah", "Jeddah hotels; Makkah (about 98 km from the airport); Madinah (about 400 km); Taif"],
          ["Prince Mohammad bin Abdulaziz (MED)", "Madinah", "Hotels near the Prophet's Mosque; Makkah; AlUla"],
          ["King Fahd International (DMM)", "Dammam", "Dammam, Al Khobar, Dhahran, Jubail; Bahrain over the King Fahd Causeway"],
        ],
      },
      sections: [
        { h: "What a private airport transfer includes", p: ["One vehicle and driver for your party only, booked before you land. The driver meets you at the agreed point, helps with luggage and drives you directly to your destination. It is not a shared shuttle and not a taxi from the rank. The vehicle category, the meeting arrangement and what is included are confirmed in the quotation."] },
        { h: "Riyadh: King Khalid International (RUH)", p: ["Riyadh's airport has several terminals, so check yours on your ticket and include it in the enquiry. Business travellers usually head to hotels on King Fahd Road, the KAFD district or the Diplomatic Quarter, and peak-hour traffic in the city can be slow. Sedans suit single travellers; families often choose a GMC Yukon."] },
        { h: "Jeddah: King Abdulaziz International (JED)", p: ["Jeddah is the main arrival airport for Umrah, and many transfers go straight on to Makkah, about 98 km from the airport, or to Madinah, about 400 km. If you are going to Makkah for Umrah, plan the timing around your Ihram and your hotel check-in. Groups with Zamzam and luggage often choose a Hyundai Staria, which takes up to 7 passengers with 10 or more bags."] },
        { h: "Madinah: Prince Mohammad bin Abdulaziz (MED)", p: ["Madinah airport is a common arrival point for pilgrims who begin with Madinah and travel on to Makkah later. Most transfers go to hotels around the Prophet's Mosque; some continue to AlUla. Hotel access close to the Haram can be restricted at busy times, so the exact drop-off point is agreed in advance."] },
        { h: "Dammam: King Fahd International (DMM)", p: ["Dammam's airport serves the whole Eastern Province, and it is a long way from the city centres, so transfers to Dammam, Al Khobar, Dhahran and Jubail are planned as real journeys, not short hops. Some travellers continue across the King Fahd Causeway to Bahrain; that needs every passenger's entry requirements and the vehicle's ability to cross confirmed first."] },
        { h: "What to send when you book", p: ["Flight number, date and scheduled arrival time; the terminal if you know it; number of adults, children and infants; bags by size; any child seats or mobility needs; the exact destination address; and whether you need a return transfer. If you are arriving on a connecting flight, say so."] },
        { h: "Delays and waiting time", p: ["Flights run late and passport and baggage queues vary. Ask how waiting time is handled before you confirm, and do not assume free waiting or flight tracking: what is included is stated in the quotation. Tell the provider as soon as you know about a delay."] },
      ],
      faqs: [
        { q: "How do I find my driver at a Saudi airport?", a: "The meeting point and how the driver will contact you are confirmed for each booking, for example at arrivals with a name sign or by phone." },
        { q: "Can I book a private transfer from Jeddah airport straight to Makkah?", a: "Yes. It is one of the most requested transfers, about 98 km from the airport." },
        { q: "Which vehicle is best for an airport transfer with a lot of luggage?", a: "A GMC Yukon for families, or a Hyundai Staria for up to 7 passengers with 10 or more bags. Send your bags by size for a recommendation." },
        { q: "Can I book a return transfer to the airport at the same time?", a: "Yes. Give both dates and times in the same enquiry." },
        { q: "Do you serve airports other than these four?", a: "Yes, including Taif, Abha and AlUla, subject to partner availability. Each has its own page." },
      ],
    },
    ar: {
      nav: "التوصيل الخاص من المطارات السعودية",
      title: "توصيل مطار خاص في السعودية: دليل كل مطار",
      description: "التوصيل الخاص من المطارات في السعودية، مطارًا مطارًا: الرياض وجدة والمدينة والدمام، والطرق المعتادة من كل مطار، وماذا ترسل عند الحجز.",
      h1: "التوصيل الخاص من المطار في السعودية: الرياض وجدة والمدينة والدمام",
      answer: "التوصيل الخاص من المطار في السعودية سيارة مع سائق تُحجز مسبقًا، تستقبل مجموعتك في صالة الوصول وتوصلكم مباشرة إلى الفندق أو البيت أو مدينة أخرى. وأكثر المطارات طلبًا للتوصيل هي الرياض وجدة والمدينة المنورة والدمام. أرسل رقم الرحلة ووقت الوصول وعدد الركاب والحقائب والوجهة، وتُؤكَّد المركبة ونقطة اللقاء في عرض السعر.",
      summary: "ما الذي يختلف من مطار سعودي إلى آخر، والرحلات المعتادة بعد الوصول، والتفاصيل التي تجعل الاستقبال سلسًا.",
      table: {
        h: "المطارات الرئيسية والتوصيل المعتاد بعدها",
        head: ["المطار", "المدينة", "الرحلات المعتادة بعد الوصول"],
        rows: [
          ["مطار الملك خالد الدولي", "الرياض", "فنادق ومكاتب الرياض والمركز المالي والحي الدبلوماسي، وبين المدن إلى القصيم أو الدمام"],
          ["مطار الملك عبدالعزيز الدولي", "جدة", "فنادق جدة، ومكة (نحو 98 كم من المطار)، والمدينة (نحو 400 كم)، والطائف"],
          ["مطار الأمير محمد بن عبدالعزيز", "المدينة المنورة", "الفنادق القريبة من المسجد النبوي، ومكة، والعلا"],
          ["مطار الملك فهد الدولي", "الدمام", "الدمام والخبر والظهران والجبيل، والبحرين عبر جسر الملك فهد"],
        ],
      },
      sections: [
        { h: "ماذا يشمل التوصيل الخاص من المطار", p: ["مركبة وسائق لمجموعتك فقط، محجوزة قبل هبوطك. يستقبلك السائق في النقطة المتفق عليها ويساعدك بالحقائب ويوصلك مباشرة إلى وجهتك. ليس حافلة مشتركة ولا تاكسي من الموقف. وتُؤكَّد فئة المركبة وترتيب اللقاء وما يشمله السعر في عرض السعر."] },
        { h: "الرياض: مطار الملك خالد الدولي", p: ["في مطار الرياض عدة صالات، فتحقق من صالتك في التذكرة واذكرها في الطلب. ويتجه رجال الأعمال عادةً إلى فنادق طريق الملك فهد أو المركز المالي أو الحي الدبلوماسي، وقد تكون الحركة بطيئة في أوقات الذروة. وتناسب السيدان المسافر الفرد، وتختار العائلات غالبًا جمس يوكن."] },
        { h: "جدة: مطار الملك عبدالعزيز الدولي", p: ["جدة هي مطار الوصول الرئيسي للعمرة، وكثير من الرحلات تتجه مباشرة إلى مكة على بعد نحو 98 كم من المطار، أو إلى المدينة على بعد نحو 400 كم. وإن كنت ذاهبًا إلى مكة للعمرة فخطط للتوقيت حسب إحرامك وموعد دخول الفندق. وتختار المجموعات التي معها زمزم وحقائب غالبًا هيونداي ستاريا التي تتسع لسبعة ركاب مع 10 حقائب أو أكثر."] },
        { h: "المدينة المنورة: مطار الأمير محمد بن عبدالعزيز", p: ["مطار المدينة نقطة وصول شائعة لمن يبدأ رحلته بالمدينة ثم ينتقل إلى مكة لاحقًا. ومعظم الرحلات إلى الفنادق حول المسجد النبوي، وبعضها يكمل إلى العلا. وقد يُقيَّد الوصول إلى الفنادق القريبة من الحرم في أوقات الزحام، فيُتفق على نقطة النزول مسبقًا."] },
        { h: "الدمام: مطار الملك فهد الدولي", p: ["يخدم مطار الدمام المنطقة الشرقية كلها، وهو بعيد عن مراكز المدن، فالتوصيل إلى الدمام والخبر والظهران والجبيل يُخطط له كرحلة حقيقية لا مشوار قصير. وبعض المسافرين يكملون عبر جسر الملك فهد إلى البحرين، وهذا يتطلب التحقق أولًا من متطلبات دخول كل راكب وإمكانية عبور المركبة."] },
        { h: "ماذا ترسل عند الحجز", p: ["رقم الرحلة وتاريخ ووقت الوصول المجدول، والصالة إن عرفتها، وعدد البالغين والأطفال والرضع، والحقائب بأحجامها، وأي مقاعد أطفال أو احتياجات حركة، وعنوان الوجهة بدقة، وهل تحتاج توصيل العودة. وإن كنت قادمًا على رحلة ربط فاذكر ذلك."] },
        { h: "التأخير ووقت الانتظار", p: ["تتأخر الرحلات وتختلف طوابير الجوازات والحقائب. اسأل كيف يُحتسب وقت الانتظار قبل التأكيد، ولا تفترض انتظارًا مجانيًا أو متابعة للرحلة، فما يشمله السعر مذكور في عرض السعر. وأخبر المزوّد فور علمك بأي تأخير."] },
      ],
      faqs: [
        { q: "كيف أجد السائق في المطار؟", a: "تُؤكَّد نقطة اللقاء وطريقة تواصل السائق معك لكل حجز، مثل الانتظار في صالة الوصول بلوحة اسم أو الاتصال." },
        { q: "هل يمكن حجز توصيل خاص من مطار جدة إلى مكة مباشرة؟", a: "نعم، وهو من أكثر الرحلات طلبًا، على بعد نحو 98 كم من المطار." },
        { q: "أي مركبة أفضل لتوصيل المطار مع حقائب كثيرة؟", a: "جمس يوكن للعائلات، أو هيونداي ستاريا لسبعة ركاب مع 10 حقائب أو أكثر. أرسل حقائبك بأحجامها لنوصي بالمناسب." },
        { q: "هل أحجز توصيل العودة إلى المطار في الوقت نفسه؟", a: "نعم، اذكر التاريخين والوقتين في الطلب نفسه." },
        { q: "هل تخدمون مطارات أخرى غير هذه الأربعة؟", a: "نعم، منها الطائف وأبها والعلا، حسب توفر الشركاء، ولكل منها صفحة." },
      ],
    },
  },
};

export const riyadhJeddahRoadPost: BlogPost = {
  slug: "riyadh-to-jeddah-by-road-guide",
  published: D,
  updated: D,
  cluster: "private-transfers",
  hero: images.riyadh,
  related: ["private-car-vs-flight-vs-rental-saudi-intercity", "luxury-suv-gmc-transfer-saudi-arabia", "makkah-to-taif-private-car-day-trip"],
  links: [`${I}/riyadh-to-jeddah`, `${I}/jeddah-to-riyadh`, `${I}/riyadh-to-taif`, `${I}/riyadh-to-makkah`, `${S}/intercity-transfers`],
  copy: {
    en: {
      nav: "Riyadh to Jeddah by private car",
      title: "Riyadh to Jeddah by Private Car: Road & Stops",
      description: "Riyadh to Jeddah by private car: about 955 km on Route 40, close to ten hours of driving, where to break the trip, Taif or Makkah stops and planning tips.",
      h1: "Riyadh to Jeddah by private car: the road, the stops and how to plan the day",
      answer: "Riyadh to Jeddah by private car is about 955 km on Route 40, close to ten hours of driving before stops, so it is a full-day journey. The road runs west across Najd and climbs to the Taif area before descending to Makkah's outskirts and Jeddah. A private car with a driver lets you leave from your door, stop when you need to and arrive at your Jeddah address without driving yourself.",
      summary: "What the 955 km road looks like, where to stop, and when a private car beats flying or driving yourself.",
      table: {
        h: "Riyadh to Jeddah at a glance",
        head: ["Item", "Detail"],
        rows: [
          ["Distance", "About 955 km, mostly on Route 40"],
          ["Driving time", "Close to ten hours before stops; plan a full day"],
          ["Natural break points", "Fuel and rest areas along Route 40; the Taif area in the west"],
          ["Possible stopovers", "Taif (by arrangement); Makkah for pilgrims, where Miqat rules apply"],
          ["Vehicle choices", "Sedan, GMC Yukon or Chevrolet Suburban, Hyundai Staria for groups"],
        ],
      },
      sections: [
        { h: "What the road is like", p: ["Most of the journey is long, straight highway across open desert, with fuel stations and rest areas at intervals. The last part climbs into the Hejaz mountains near Taif and then drops toward the Red Sea coast. In summer the heat in the middle of the day is intense, so early starts are popular; in winter the mountain section can be cool."] },
        { h: "Where to break the journey", p: ["On a ten-hour drive, plan at least two or three stops for prayer, food and rest. Tell the provider in advance if you want a longer meal stop, a specific prayer time, or a stop in Taif to see the city. A stop in Taif or another detour changes the plan and is quoted as part of the journey."] },
        { h: "Going via Makkah", p: ["Route 40 passes close to Makkah. Non-Muslims cannot enter Makkah, and the route is planned accordingly. Pilgrims who want to perform Umrah on the way should plan their Ihram at the Miqat on the road and confirm the details with their scholar; the driver can stop at the Miqat if it is in the plan."] },
        { h: "Private car, flight or driving yourself", p: ["A flight is faster in the air but adds airport time at both ends and transfers. Driving yourself saves the transport cost but means ten hours at the wheel. A private car with a driver suits families with luggage, travellers who dislike flying, people moving home with many bags, and anyone who wants to stop on the way. The car vs flight vs rental guide compares the three in detail."] },
        { h: "Choosing a vehicle for ten hours", p: ["Comfort matters more on a full day. Families usually choose a GMC Yukon or Chevrolet Suburban; groups of up to seven with bags choose a Hyundai Staria; one or two travellers with light luggage often choose a sedan such as a Toyota Camry. The vehicle for your date is confirmed in the quotation."] },
        { h: "One way, return or the reverse", p: ["Most people travel one way. If you also need Jeddah to Riyadh, mention it: the return is planned and quoted with its own date. The reverse journey has its own page, written for departures from Jeddah."] },
      ],
      faqs: [
        { q: "How long is the drive from Riyadh to Jeddah?", a: "Close to ten hours of driving for about 955 km, before stops. Plan a full day." },
        { q: "Can we stop in Taif on the way to Jeddah?", a: "Yes, by arrangement. Mention it in the enquiry so it is included in the plan and quotation." },
        { q: "Can I perform Umrah on the way from Riyadh to Jeddah?", a: "Pilgrims can plan a stop for Ihram at the Miqat and a visit to Makkah. Confirm the religious details with your scholar and add the stop to the plan." },
        { q: "What time should we leave Riyadh?", a: "Many travellers leave early in the morning to avoid the midday heat and arrive in daylight. Choose the time that suits you." },
        { q: "Is a private car more comfortable than the bus for this route?", a: "It is a vehicle for your party only, leaving from your door at your time, with stops when you need them." },
      ],
    },
    ar: {
      nav: "من الرياض إلى جدة بسيارة خاصة",
      title: "من الرياض إلى جدة بسيارة خاصة: الطريق والتوقف",
      description: "من الرياض إلى جدة بسيارة خاصة: نحو 955 كم على طريق 40 وقرابة عشر ساعات قيادة، وأين تتوقف، والتوقف في الطائف أو مكة، ونصائح التخطيط.",
      h1: "من الرياض إلى جدة بسيارة خاصة: الطريق والتوقفات وتخطيط اليوم",
      answer: "الرحلة من الرياض إلى جدة بسيارة خاصة نحو 955 كم على طريق 40، وقرابة عشر ساعات قيادة قبل التوقفات، فهي رحلة يوم كامل. يتجه الطريق غربًا عبر نجد ويصعد إلى منطقة الطائف ثم ينحدر إلى أطراف مكة وجدة. وتتيح لك السيارة الخاصة مع سائق الانطلاق من بابك والتوقف متى احتجت والوصول إلى عنوانك في جدة دون أن تقود بنفسك.",
      summary: "كيف يبدو طريق 955 كم، وأين تتوقف، ومتى تكون السيارة الخاصة أفضل من الطيران أو القيادة بنفسك.",
      table: {
        h: "الرياض إلى جدة في لمحة",
        head: ["البند", "التفصيل"],
        rows: [
          ["المسافة", "نحو 955 كم، معظمها على طريق 40"],
          ["وقت القيادة", "قرابة عشر ساعات قبل التوقفات، خطط ليوم كامل"],
          ["نقاط استراحة طبيعية", "محطات الوقود والاستراحات على طريق 40، ومنطقة الطائف في الغرب"],
          ["توقفات ممكنة", "الطائف (بترتيب مسبق)، ومكة للمعتمرين مع أحكام الميقات"],
          ["المركبات", "سيدان، أو جمس يوكن أو شيفروليه سوبربان، أو هيونداي ستاريا للمجموعات"],
        ],
      },
      sections: [
        { h: "كيف يبدو الطريق", p: ["معظم الرحلة طريق سريع طويل ومستقيم عبر الصحراء المفتوحة، مع محطات وقود واستراحات على مسافات. ويصعد الجزء الأخير إلى جبال الحجاز قرب الطائف ثم ينحدر نحو ساحل البحر الأحمر. والحر في منتصف النهار صيفًا شديد، فالانطلاق المبكر شائع، وفي الشتاء قد يكون الجزء الجبلي باردًا."] },
        { h: "أين تقسّم الرحلة", p: ["في رحلة عشر ساعات خطط لتوقفين أو ثلاثة على الأقل للصلاة والطعام والراحة. وأخبر المزوّد مسبقًا إن أردت توقفًا أطول للغداء، أو وقت صلاة محددًا، أو التوقف في الطائف لرؤية المدينة. والتوقف في الطائف أو أي تحويلة يغير الخطة ويُسعَّر ضمن الرحلة."] },
        { h: "المرور عبر مكة", p: ["يمر طريق 40 قريبًا من مكة. ولا يُسمح لغير المسلمين بدخول مكة، فيُخطط الطريق على هذا الأساس. ومن أراد أداء العمرة في الطريق فليخطط لإحرامه من الميقات على الطريق ويتأكد من التفاصيل مع أهل العلم، ويمكن للسائق التوقف عند الميقات إن كان ضمن الخطة."] },
        { h: "سيارة خاصة أم طيران أم قيادة بنفسك", p: ["الطيران أسرع في الجو لكنه يضيف وقت المطار في الطرفين والتنقل منهما. والقيادة بنفسك توفر تكلفة النقل لكنها عشر ساعات خلف المقود. أما السيارة الخاصة مع سائق فتناسب العائلات مع الحقائب، ومن لا يحب الطيران، ومن ينقل سكنه مع حقائب كثيرة، وكل من يريد التوقف في الطريق. ويقارن دليل السيارة أو الطيران أو الإيجار بين الخيارات الثلاثة بالتفصيل."] },
        { h: "اختيار المركبة لعشر ساعات", p: ["الراحة أهم في رحلة يوم كامل. تختار العائلات عادةً جمس يوكن أو شيفروليه سوبربان، والمجموعات حتى سبعة أشخاص مع حقائب تختار هيونداي ستاريا، ويختار المسافر أو المسافران مع حقائب خفيفة غالبًا سيدان مثل تويوتا كامري. وتُؤكَّد المركبة لتاريخك في عرض السعر."] },
        { h: "ذهاب فقط أو عودة أو الاتجاه المعاكس", p: ["معظم المسافرين يذهبون في اتجاه واحد. وإن احتجت أيضًا من جدة إلى الرياض فاذكر ذلك، فالعودة تُخطط وتُسعَّر بتاريخها. وللاتجاه المعاكس صفحة خاصة مكتوبة للانطلاق من جدة."] },
      ],
      faqs: [
        { q: "كم تستغرق القيادة من الرياض إلى جدة؟", a: "قرابة عشر ساعات قيادة لنحو 955 كم قبل التوقفات، فخطط ليوم كامل." },
        { q: "هل يمكن التوقف في الطائف في الطريق إلى جدة؟", a: "نعم بترتيب مسبق. اذكر ذلك في الطلب ليُضاف إلى الخطة وعرض السعر." },
        { q: "هل يمكن أداء العمرة في الطريق من الرياض إلى جدة؟", a: "يمكن للمعتمر التخطيط للإحرام من الميقات وزيارة مكة. تأكد من الأحكام مع أهل العلم وأضف التوقف إلى الخطة." },
        { q: "متى ننطلق من الرياض؟", a: "يفضل كثير من المسافرين الانطلاق صباحًا مبكرًا لتجنب حر الظهيرة والوصول نهارًا، واختر الوقت الذي يناسبك." },
        { q: "هل السيارة الخاصة أريح من الباص في هذا الطريق؟", a: "هي مركبة لمجموعتك فقط، تنطلق من بابك في وقتك، مع توقفات حين تحتاجها." },
      ],
    },
  },
};

export const umrahPlanPost: BlogPost = {
  slug: "umrah-private-transport-plan-jeddah-makkah-madinah",
  published: D,
  updated: D,
  cluster: "private-transfers",
  hero: images.makkah,
  related: ["jeddah-airport-to-makkah-train-bus-taxi-private-car", "makkah-to-madinah-train-bus-or-private-car", "hyundai-staria-with-driver-family-group-travel"],
  links: [`${S}/umrah-transport`, `${S}/umrah-transport/jeddah-airport-to-makkah`, `${I}/makkah-to-madinah`, `${I}/madinah-to-jeddah`, `${S}/umrah-transport/makkah-ziyarat`, `${S}/umrah-transport/madinah-ziyarat`, `${S}/umrah-transport/family-umrah-transport`],
  copy: {
    en: {
      nav: "Planning private transport for Umrah",
      title: "Umrah Private Transport Plan: Every Leg",
      description: "Plan private transport for your whole Umrah trip: Jeddah airport to Makkah, Makkah to Madinah, Ziyarat, and back to the airport, with distances and booking tips.",
      h1: "Planning private transport for Umrah: every leg from arrival to departure",
      answer: "Most Umrah trips need four or five road legs: Jeddah airport to your Makkah hotel (about 98 km), Makkah to Madinah (about 436 km), optional Ziyarat tours in each city, and Madinah back to Jeddah airport (about 400 km) or to Madinah airport. Booking every leg with one private car plan keeps the same vehicle size for your family and luggage and lets each time be set around prayers and check-ins.",
      summary: "The usual sequence of journeys on an Umrah trip, with distances, and how to plan them as one booking.",
      table: {
        h: "A typical Umrah transport sequence",
        head: ["Leg", "Distance", "Plan around"],
        rows: [
          ["Jeddah airport to Makkah hotel", "About 98 km", "Landing time, Ihram, hotel check-in"],
          ["Makkah Ziyarat (optional)", "Local", "Prayer times and heat"],
          ["Makkah to Madinah", "About 436 km, around 4 h 20 min before stops", "Check-out, prayer stops, Madinah check-in"],
          ["Madinah Ziyarat (optional)", "Local", "Prayer times"],
          ["Madinah to Jeddah airport", "About 400 km", "Departure time with generous margin"],
        ],
      },
      sections: [
        { h: "Why plan the whole trip at once", p: ["On an Umrah trip, luggage grows: Zamzam water, dates and gifts are added along the way. Booking each leg separately risks a smaller car on the last day. A single plan keeps the right vehicle size for the whole trip, keeps one point of contact and lets each pickup be timed to your hotel and prayer schedule."] },
        { h: "Arrival: Jeddah airport to Makkah", p: ["Many pilgrims arrive at Jeddah already in Ihram, or enter Ihram on the flight before the Miqat. The transfer to Makkah is about 98 km from the airport. Send the flight number, arrival time and hotel; late-night arrivals are common and the driver needs the right time. If you arrive at Madinah instead, the plan simply starts there."] },
        { h: "Makkah to Madinah", p: ["The road between the two holy cities is about 436 km on Route 15, around 4 hours 20 minutes before stops. Most families plan one or two stops for prayer and rest. Hotel check-out and check-in times decide the best departure time. The train is an alternative; the separate guide compares train, bus and private car for this leg."] },
        { h: "Ziyarat in Makkah and Madinah", p: ["Many families add a Ziyarat tour in each city to visit historical sites. These are booked as separate local journeys of a few hours, planned around prayer times. RideSaudi arranges the transport; it does not provide religious guidance."] },
        { h: "Departure: back to the airport", p: ["From Madinah you can fly out of Madinah airport or travel about 400 km back to Jeddah airport. Leave generous margin before your flight for road conditions and airport procedures. If you end in Makkah instead, the transfer to Jeddah airport is planned from there."] },
        { h: "Choosing the vehicle", p: ["Couples and small families often choose a sedan or a GMC Yukon. Larger families or groups with lots of luggage choose a Hyundai Staria, which takes up to 7 passengers with 10 or more bags. Groups larger than that need two vehicles or a larger van, quoted together."] },
        { h: "What to send", p: ["All flight details, hotel names and dates in each city, number of adults, children and infants, bags by size, wheelchairs or mobility needs, and which Ziyarat you want. Elderly passengers and wheelchairs should be mentioned at the start so the vehicle and help are planned."] },
      ],
      faqs: [
        { q: "How far is Makkah from Madinah by road?", a: "About 436 km on Route 15, around 4 hours 20 minutes before stops." },
        { q: "Can I book all my Umrah transfers in one enquiry?", a: "Yes. List every leg with dates and times and they are quoted together." },
        { q: "Can the driver stop for prayer on the way to Madinah?", a: "Yes. Prayer and rest stops can be planned; mention any preferred times." },
        { q: "Is there a vehicle for a family of seven with luggage?", a: "The Hyundai Staria takes up to 7 passengers with 10 or more bags, depending on bag size." },
        { q: "Do you arrange Ziyarat tours?", a: "Yes, the transport for Ziyarat in Makkah and Madinah can be arranged as separate local journeys." },
      ],
    },
    ar: {
      nav: "التخطيط لتنقلات العمرة بسيارة خاصة",
      title: "خطة تنقلات العمرة بسيارة خاصة: كل الرحلات",
      description: "خطط لتنقلات رحلة العمرة كاملة بسيارة خاصة: من مطار جدة إلى مكة، ومن مكة إلى المدينة، والزيارات، والعودة إلى المطار، مع المسافات ونصائح الحجز.",
      h1: "التخطيط لتنقلات العمرة بسيارة خاصة: كل رحلة من الوصول إلى المغادرة",
      answer: "تحتاج معظم رحلات العمرة إلى أربع أو خمس رحلات برية: من مطار جدة إلى فندقك في مكة (نحو 98 كم)، ومن مكة إلى المدينة (نحو 436 كم)، وجولات الزيارة في كل مدينة إن رغبت، ومن المدينة إلى مطار جدة (نحو 400 كم) أو إلى مطار المدينة. وحجز كل الرحلات بخطة سيارة خاصة واحدة يحافظ على حجم المركبة المناسب لعائلتك وحقائبك، ويتيح ضبط كل موعد حسب الصلوات ومواعيد الفنادق.",
      summary: "الترتيب المعتاد لتنقلات رحلة العمرة مع المسافات، وكيف تخطط لها في حجز واحد.",
      table: {
        h: "الترتيب المعتاد لتنقلات العمرة",
        head: ["الرحلة", "المسافة", "خطط حسب"],
        rows: [
          ["من مطار جدة إلى فندق مكة", "نحو 98 كم", "وقت الهبوط والإحرام ودخول الفندق"],
          ["زيارات مكة (اختياري)", "داخل المدينة", "أوقات الصلاة والحر"],
          ["من مكة إلى المدينة", "نحو 436 كم، قرابة 4 ساعات و20 دقيقة قبل التوقف", "الخروج من الفندق وتوقفات الصلاة ودخول فندق المدينة"],
          ["زيارات المدينة (اختياري)", "داخل المدينة", "أوقات الصلاة"],
          ["من المدينة إلى مطار جدة", "نحو 400 كم", "وقت الإقلاع مع هامش كافٍ"],
        ],
      },
      sections: [
        { h: "لماذا تخطط للرحلة كاملة مرة واحدة", p: ["في رحلة العمرة تزيد الحقائب: ماء زمزم والتمور والهدايا تُضاف في الطريق. وحجز كل رحلة منفصلة قد يأتي بسيارة أصغر في اليوم الأخير. أما الخطة الواحدة فتحافظ على حجم المركبة المناسب طوال الرحلة، وتبقي جهة تواصل واحدة، وتضبط كل استلام حسب فندقك ومواعيد الصلاة."] },
        { h: "الوصول: من مطار جدة إلى مكة", p: ["يصل كثير من المعتمرين إلى جدة محرمين، أو يحرمون في الطائرة قبل الميقات. والتوصيل إلى مكة نحو 98 كم من المطار. أرسل رقم الرحلة ووقت الوصول والفندق، فالوصول في آخر الليل شائع ويحتاج السائق الوقت الصحيح. وإن وصلت إلى المدينة بدلًا من جدة فالخطة تبدأ من هناك."] },
        { h: "من مكة إلى المدينة", p: ["الطريق بين الحرمين نحو 436 كم على طريق 15، وقرابة 4 ساعات و20 دقيقة قبل التوقفات. وتخطط معظم العائلات لتوقف أو اثنين للصلاة والراحة. ومواعيد الخروج من الفندق والدخول إلى الآخر تحدد أفضل وقت للانطلاق. والقطار بديل، ويقارن دليل مستقل بين القطار والباص والسيارة الخاصة لهذه الرحلة."] },
        { h: "الزيارات في مكة والمدينة", p: ["تضيف عائلات كثيرة جولة زيارة في كل مدينة للمواقع التاريخية. وتُحجز كرحلات محلية منفصلة لعدة ساعات، مخططة حسب أوقات الصلاة. وترتب RideSaudi النقل فقط ولا تقدم إرشادًا دينيًا."] },
        { h: "المغادرة: العودة إلى المطار", p: ["من المدينة يمكنك السفر من مطار المدينة أو قطع نحو 400 كم إلى مطار جدة. واترك هامشًا كافيًا قبل رحلتك لظروف الطريق وإجراءات المطار. وإن انتهت رحلتك في مكة فيُخطط التوصيل إلى مطار جدة من هناك."] },
        { h: "اختيار المركبة", p: ["يختار الزوجان والعائلات الصغيرة غالبًا سيدان أو جمس يوكن. والعائلات الكبيرة أو المجموعات مع حقائب كثيرة تختار هيونداي ستاريا التي تتسع لسبعة ركاب مع 10 حقائب أو أكثر. والمجموعات الأكبر تحتاج مركبتين أو فان أكبر، يُسعَّر معًا."] },
        { h: "ماذا ترسل", p: ["كل تفاصيل الرحلات الجوية، وأسماء الفنادق والتواريخ في كل مدينة، وعدد البالغين والأطفال والرضع، والحقائب بأحجامها، والكراسي المتحركة أو احتياجات الحركة، والزيارات التي تريدها. واذكر كبار السن والكراسي المتحركة من البداية ليُخطط للمركبة والمساعدة."] },
      ],
      faqs: [
        { q: "كم المسافة بين مكة والمدينة بالسيارة؟", a: "نحو 436 كم على طريق 15، وقرابة 4 ساعات و20 دقيقة قبل التوقفات." },
        { q: "هل أحجز كل تنقلات العمرة في طلب واحد؟", a: "نعم. اذكر كل رحلة بتاريخها ووقتها وتُسعَّر معًا." },
        { q: "هل يتوقف السائق للصلاة في الطريق إلى المدينة؟", a: "نعم، يمكن التخطيط لتوقفات الصلاة والراحة، واذكر أي أوقات تفضلها." },
        { q: "هل توجد مركبة لعائلة من سبعة أشخاص مع حقائب؟", a: "هيونداي ستاريا تتسع لسبعة ركاب مع 10 حقائب أو أكثر حسب حجم الحقائب." },
        { q: "هل ترتبون جولات الزيارة؟", a: "نعم، يمكن ترتيب النقل للزيارات في مكة والمدينة كرحلات محلية منفصلة." },
      ],
    },
  },
};

export const riyadhDammamBusinessPost: BlogPost = {
  slug: "riyadh-to-dammam-private-transfer",
  published: D,
  updated: D,
  cluster: "private-transfers",
  hero: images.alKhobar,
  related: ["private-chauffeur-service-saudi-arabia", "saudi-arabia-to-bahrain-private-transfer", "private-car-vs-flight-vs-rental-saudi-intercity"],
  links: [`${I}/riyadh-to-dammam`, `${I}/riyadh-to-al-khobar`, `${I}/riyadh-to-jubail`, `${I}/dammam-to-riyadh`, `${A}/dammam-airport`, `${S}/chauffeur-services/business-chauffeur`],
  copy: {
    en: {
      nav: "Riyadh to Dammam for business",
      title: "Riyadh to Dammam & Al Khobar by Private Car",
      description: "Riyadh to Dammam or Al Khobar by private car for business: about 410 km on Route 40, under four hours of driving, same-day returns and what to send.",
      h1: "Riyadh to Dammam and Al Khobar by private car: a guide for business travellers",
      answer: "Riyadh to Dammam by private car is about 410 km on Route 40, close to 3 hours 55 minutes of driving before stops, which makes a same-day business trip possible. A private car with a driver collects you from your Riyadh office, hotel or home and takes you to your meeting in Dammam, Al Khobar, Dhahran or Jubail, so you can work, call or rest on the way.",
      summary: "How the Riyadh–Eastern Province road works for meetings, day returns and multi-stop business trips.",
      table: {
        h: "Riyadh to the Eastern Province",
        head: ["Destination", "Distance from Riyadh", "Note"],
        rows: [
          ["Dammam", "About 410 km", "Close to 3 h 55 min before stops"],
          ["Al Khobar or Dhahran", "About 424 km", "Around four and a half hours"],
          ["Jubail", "Further north along the coast", "Plan extra time for the industrial city"],
          ["King Fahd International Airport (DMM)", "On the way into the region", "Useful if you fly back from Dammam"],
        ],
      },
      sections: [
        { h: "Why a private car for this route", p: ["The Riyadh–Dammam corridor links the capital with the Eastern Province's energy, industrial and port businesses. A flight saves little door to door once airport time is added, and the train runs between stations. A car with a driver goes from your door to the meeting room, and the time on the road becomes working time."] },
        { h: "Planning a same-day return", p: ["With under four hours each way, a morning departure, a meeting and an evening return is a long but common day. Give the provider the meeting address and an expected finish time; waiting time between legs is quoted as part of the plan. If the meeting may overrun, say so in advance."] },
        { h: "Multi-stop days in the Eastern Province", p: ["Business visits often cover several addresses: an office in Al Khobar, a site in Dhahran, a plant in Jubail. List each stop with its time, and the day is planned as one journey with a single vehicle. For overnight trips, the return can be on another day."] },
        { h: "Choosing a vehicle for business", p: ["Single executives usually choose a sedan such as a Toyota Camry or Ford Taurus. Teams of two or three, or visitors with luggage, often choose a GMC Yukon or Chevrolet Suburban. For VIP guests and delegations, the executive transport page explains the options. The vehicle for your date is confirmed in the quotation."] },
        { h: "Company bookings and invoices", p: ["If you book for a guest or a colleague, give their name and phone number and your own, and say who should receive the confirmation. Tell us at the start if you need a company invoice or regular bookings on the same route."] },
        { h: "Continuing to Bahrain", p: ["Some trips continue across the King Fahd Causeway to Bahrain. That is a cross-border journey: each passenger's entry requirements and the vehicle's ability to cross must be confirmed before booking. The Bahrain guide explains what to check."] },
      ],
      faqs: [
        { q: "How long is the drive from Riyadh to Dammam?", a: "Close to 3 hours 55 minutes for about 410 km, before stops." },
        { q: "Can I go to Dammam and back to Riyadh in one day?", a: "Yes, many business travellers do. The waiting time between legs is included in the plan and quotation." },
        { q: "Can the car take me to several meetings in Al Khobar and Dhahran?", a: "Yes. List each address and time and the day is planned as one journey." },
        { q: "Which car is best for an executive?", a: "A sedan such as a Toyota Camry or Ford Taurus for one traveller, or a GMC Yukon for more space." },
        { q: "Can I book for a visiting guest?", a: "Yes. Give the guest's name and phone number and yours, and who should get the confirmation." },
      ],
    },
    ar: {
      nav: "من الرياض إلى الدمام لرجال الأعمال",
      title: "من الرياض إلى الدمام والخبر بسيارة خاصة",
      description: "من الرياض إلى الدمام أو الخبر بسيارة خاصة لرحلات العمل: نحو 410 كم على طريق 40 وأقل من أربع ساعات، والعودة في اليوم نفسه، وماذا ترسل.",
      h1: "من الرياض إلى الدمام والخبر بسيارة خاصة: دليل لرحلات العمل",
      answer: "الرحلة من الرياض إلى الدمام بسيارة خاصة نحو 410 كم على طريق 40، وقرابة 3 ساعات و55 دقيقة قيادة قبل التوقفات، فيمكن إنجاز رحلة عمل والعودة في اليوم نفسه. تستلمك السيارة الخاصة مع سائق من مكتبك أو فندقك أو بيتك في الرياض وتوصلك إلى اجتماعك في الدمام أو الخبر أو الظهران أو الجبيل، فتعمل أو تتصل أو ترتاح في الطريق.",
      summary: "كيف يخدم طريق الرياض والمنطقة الشرقية الاجتماعات والعودة في اليوم نفسه ورحلات العمل متعددة المحطات.",
      table: {
        h: "من الرياض إلى المنطقة الشرقية",
        head: ["الوجهة", "المسافة من الرياض", "ملاحظة"],
        rows: [
          ["الدمام", "نحو 410 كم", "قرابة 3 ساعات و55 دقيقة قبل التوقف"],
          ["الخبر أو الظهران", "نحو 424 كم", "قرابة أربع ساعات ونصف"],
          ["الجبيل", "أبعد شمالًا على الساحل", "خطط لوقت إضافي للمدينة الصناعية"],
          ["مطار الملك فهد الدولي", "في الطريق إلى المنطقة", "مفيد إن كنت ستعود جوًا من الدمام"],
        ],
      },
      sections: [
        { h: "لماذا سيارة خاصة لهذا الطريق", p: ["يربط طريق الرياض والدمام العاصمة بأعمال الطاقة والصناعة والموانئ في المنطقة الشرقية. والطيران لا يوفر كثيرًا من الباب إلى الباب بعد إضافة وقت المطار، والقطار يعمل بين المحطات. أما السيارة مع سائق فتنتقل من بابك إلى قاعة الاجتماع، ويصبح وقت الطريق وقت عمل."] },
        { h: "التخطيط للعودة في اليوم نفسه", p: ["مع أقل من أربع ساعات في كل اتجاه، يصبح الانطلاق صباحًا والاجتماع ثم العودة مساءً يومًا طويلًا لكنه شائع. أعطِ المزوّد عنوان الاجتماع ووقت الانتهاء المتوقع، ويُسعَّر وقت الانتظار بين الرحلتين ضمن الخطة. وإن احتمل أن يطول الاجتماع فاذكر ذلك مسبقًا."] },
        { h: "أيام متعددة المحطات في الشرقية", p: ["تشمل زيارات العمل غالبًا عدة عناوين: مكتب في الخبر، وموقع في الظهران، ومصنع في الجبيل. اذكر كل محطة ووقتها ويُخطط اليوم كرحلة واحدة بمركبة واحدة. وفي الرحلات التي تتضمن مبيتًا يمكن أن تكون العودة في يوم آخر."] },
        { h: "اختيار المركبة لرحلات العمل", p: ["يختار المسؤول المسافر وحده غالبًا سيدان مثل تويوتا كامري أو فورد توروس. وتختار الفرق من شخصين أو ثلاثة، أو الزوار مع حقائب، غالبًا جمس يوكن أو شيفروليه سوبربان. ولكبار الضيوف والوفود تشرح صفحة نقل رجال الأعمال الخيارات. وتُؤكَّد المركبة لتاريخك في عرض السعر."] },
        { h: "حجوزات الشركات والفواتير", p: ["إن كنت تحجز لضيف أو زميل فاذكر اسمه ورقمه واسمك ورقمك، ومن يجب أن يستلم التأكيد. وأخبرنا من البداية إن احتجت فاتورة باسم الشركة أو حجوزات منتظمة على الطريق نفسه."] },
        { h: "الإكمال إلى البحرين", p: ["بعض الرحلات تكمل عبر جسر الملك فهد إلى البحرين، وهذه رحلة عبر الحدود: يجب التحقق قبل الحجز من متطلبات دخول كل راكب وإمكانية عبور المركبة. ويشرح دليل البحرين ما يجب التحقق منه."] },
      ],
      faqs: [
        { q: "كم تستغرق القيادة من الرياض إلى الدمام؟", a: "قرابة 3 ساعات و55 دقيقة لنحو 410 كم قبل التوقفات." },
        { q: "هل يمكن الذهاب إلى الدمام والعودة إلى الرياض في يوم واحد؟", a: "نعم، ويفعل ذلك كثير من رجال الأعمال، ويُضمَّن وقت الانتظار بين الرحلتين في الخطة وعرض السعر." },
        { q: "هل تنقلني السيارة إلى عدة اجتماعات في الخبر والظهران؟", a: "نعم. اذكر كل عنوان ووقته ويُخطط اليوم كرحلة واحدة." },
        { q: "أي سيارة أفضل لرجل الأعمال؟", a: "سيدان مثل تويوتا كامري أو فورد توروس لمسافر واحد، أو جمس يوكن لمساحة أكبر." },
        { q: "هل يمكن الحجز لضيف زائر؟", a: "نعم. اذكر اسم الضيف ورقمه ورقمك ومن يستلم التأكيد." },
      ],
    },
  },
};

export const makkahTaifPost: BlogPost = {
  slug: "makkah-to-taif-private-car-day-trip",
  published: D,
  updated: D,
  cluster: "private-transfers",
  hero: images.taif,
  related: ["umrah-private-transport-plan-jeddah-makkah-madinah", "riyadh-to-jeddah-by-road-guide", "hyundai-staria-with-driver-family-group-travel"],
  links: [`${I}/makkah-to-taif`, `${I}/taif-to-makkah`, `${I}/jeddah-to-taif`, `${S}/tourism-transport/taif`, `${A}/taif-airport`],
  copy: {
    en: {
      nav: "Makkah to Taif day trip by private car",
      title: "Makkah to Taif Day Trip by Private Car: Guide",
      description: "Makkah to Taif by private car: about 89 km up the mountain road, around 1 hour 20 minutes, a day trip plan, places families visit and the return to Makkah.",
      h1: "Makkah to Taif by private car: planning a day trip to the mountains",
      answer: "Makkah to Taif by private car is about 89 km, around 1 hour 20 minutes, climbing from the Makkah plain into the Sarawat mountains, where the air is noticeably cooler. A private car with a driver makes it an easy day trip: leave after the morning prayer, spend the day in Taif and return to your Makkah hotel in the evening. Pilgrims coming back for Umrah should plan their Ihram at the Miqat.",
      summary: "The road up to Taif, how to plan a day there from Makkah, and what to know before returning.",
      table: {
        h: "Makkah to Taif at a glance",
        head: ["Item", "Detail"],
        rows: [
          ["Distance", "About 89 km"],
          ["Driving time", "Around 1 hour 20 minutes before stops"],
          ["Trip types", "One way, return the same day, or a stay in Taif"],
          ["Why people go", "Cooler mountain air, the city, parks, the heights above the city, rose farms in season"],
          ["Coming back for Umrah", "Ihram from the Miqat on the road; confirm details with your scholar"],
        ],
      },
      sections: [
        { h: "Why families go to Taif", p: ["Taif sits high in the Sarawat mountains and is much cooler than Makkah, especially in summer. Families on long Umrah stays often take a day in Taif to rest, see the city, visit its parks and markets, and enjoy the mountain views. The rose farms around Taif are known for their season in spring."] },
        { h: "The road up the mountains", p: ["The drive climbs steadily out of the Makkah area into the mountains, with long bends and views on the way up. People who get car-sick should sit in front or ask for gentle driving. The weather at the top can be very different from Makkah, so bring a light layer."] },
        { h: "A sample day", p: ["Leave Makkah after the morning prayer, arrive in Taif mid-morning, spend the day at the places you choose, have lunch in the city, and set off back before evening. Tell the provider the places you want to visit and roughly how long you want at each; the driver's waiting time during the day is part of the plan. RideSaudi arranges the transport; it does not run guided tours."] },
        { h: "Returning to Makkah and the Miqat", p: ["If you plan to perform Umrah when you return to Makkah from Taif, you will pass the Miqat on the way back. Plan the timing and Ihram with your scholar, and tell the provider if you need a stop there."] },
        { h: "One way or staying in Taif", p: ["Some families move to Taif for a few days instead of a day trip. Book the transfer to Taif one way and the return separately, or include both in one enquiry. Taif also has its own airport and road links to Jeddah, about 171 km away."] },
        { h: "Vehicle and what to send", p: ["Send the date, pickup hotel, passengers and the places you want to visit. Families often choose a GMC Yukon, and larger groups a Hyundai Staria, which takes up to 7 passengers with 10 or more bags. The vehicle is confirmed in the quotation."] },
      ],
      faqs: [
        { q: "How far is Taif from Makkah?", a: "About 89 km by road, around 1 hour 20 minutes before stops." },
        { q: "Can we do Makkah to Taif and back in one day?", a: "Yes. It is a common day trip; the driver's waiting time during the day is included in the plan." },
        { q: "Is Taif cooler than Makkah?", a: "Yes, Taif is high in the mountains and is noticeably cooler, especially in summer." },
        { q: "Do I need Ihram when I come back to Makkah from Taif?", a: "If you intend to perform Umrah, you enter Ihram at the Miqat on the way. Confirm the details with your scholar." },
        { q: "Can you arrange a tour guide in Taif?", a: "RideSaudi arranges the car and driver only, not guided tours. You choose the places to visit." },
      ],
    },
    ar: {
      nav: "رحلة يوم من مكة إلى الطائف بسيارة خاصة",
      title: "رحلة من مكة إلى الطائف بسيارة خاصة: دليل اليوم",
      description: "من مكة إلى الطائف بسيارة خاصة: نحو 89 كم صعودًا في الطريق الجبلي، وقرابة ساعة و20 دقيقة، وخطة رحلة اليوم، والأماكن التي تزورها العائلات، والعودة.",
      h1: "من مكة إلى الطائف بسيارة خاصة: التخطيط لرحلة يوم إلى الجبال",
      answer: "الرحلة من مكة إلى الطائف بسيارة خاصة نحو 89 كم، وقرابة ساعة و20 دقيقة، صعودًا من سهل مكة إلى جبال السروات حيث الجو أبرد بوضوح. وتجعلها السيارة الخاصة مع سائق رحلة يوم سهلة: انطلق بعد صلاة الفجر، واقضِ اليوم في الطائف، وعد إلى فندقك في مكة مساءً. ومن سيعود لأداء العمرة فليخطط لإحرامه من الميقات.",
      summary: "الطريق إلى الطائف، وكيف تخطط ليوم فيها من مكة، وما تعرفه قبل العودة.",
      table: {
        h: "من مكة إلى الطائف في لمحة",
        head: ["البند", "التفصيل"],
        rows: [
          ["المسافة", "نحو 89 كم"],
          ["وقت القيادة", "قرابة ساعة و20 دقيقة قبل التوقف"],
          ["أنواع الرحلة", "ذهاب فقط، أو ذهاب وعودة في اليوم نفسه، أو إقامة في الطائف"],
          ["لماذا يذهب الناس", "هواء الجبل الأبرد، والمدينة، والحدائق، والمرتفعات المطلة، ومزارع الورد في موسمها"],
          ["العودة لأداء العمرة", "الإحرام من الميقات في الطريق، وتأكد من الأحكام مع أهل العلم"],
        ],
      },
      sections: [
        { h: "لماذا تذهب العائلات إلى الطائف", p: ["تقع الطائف عالية في جبال السروات وجوها أبرد كثيرًا من مكة خاصة في الصيف. وتخصص العائلات في إقامات العمرة الطويلة غالبًا يومًا للطائف للراحة ورؤية المدينة وزيارة حدائقها وأسواقها والاستمتاع بإطلالات الجبال. وتشتهر مزارع الورد حول الطائف بموسمها في الربيع."] },
        { h: "الطريق الجبلي", p: ["يصعد الطريق تدريجيًا من منطقة مكة إلى الجبال بمنعطفات طويلة وإطلالات في الطريق. ومن يصاب بدوار السيارة فليجلس في الأمام أو يطلب قيادة هادئة. وقد يختلف الطقس في الأعلى كثيرًا عن مكة، فاحمل طبقة خفيفة من الملابس."] },
        { h: "مثال على يوم", p: ["انطلق من مكة بعد صلاة الفجر، وصل إلى الطائف في منتصف الصباح، واقضِ اليوم في الأماكن التي تختارها، وتناول الغداء في المدينة، وانطلق عائدًا قبل المساء. أخبر المزوّد بالأماكن التي تريد زيارتها والوقت التقريبي لكل منها، فوقت انتظار السائق خلال اليوم جزء من الخطة. وترتب RideSaudi النقل ولا تنظم جولات بمرشد."] },
        { h: "العودة إلى مكة والميقات", p: ["إن كنت تنوي أداء العمرة عند عودتك من الطائف إلى مكة فستمر بالميقات في طريق العودة. خطط للتوقيت والإحرام مع أهل العلم، وأخبر المزوّد إن احتجت التوقف هناك."] },
        { h: "ذهاب فقط أو الإقامة في الطائف", p: ["تنتقل بعض العائلات إلى الطائف لعدة أيام بدل رحلة اليوم. احجز التوصيل إلى الطائف ذهابًا والعودة منفصلة، أو اجمعهما في طلب واحد. وللطائف مطار خاص وطريق إلى جدة على بعد نحو 171 كم."] },
        { h: "المركبة وماذا ترسل", p: ["أرسل التاريخ وفندق الاستلام وعدد الركاب والأماكن التي تريد زيارتها. وتختار العائلات غالبًا جمس يوكن، والمجموعات الأكبر هيونداي ستاريا التي تتسع لسبعة ركاب مع 10 حقائب أو أكثر. وتُؤكَّد المركبة في عرض السعر."] },
      ],
      faqs: [
        { q: "كم تبعد الطائف عن مكة؟", a: "نحو 89 كم بالسيارة، وقرابة ساعة و20 دقيقة قبل التوقف." },
        { q: "هل يمكن الذهاب من مكة إلى الطائف والعودة في يوم واحد؟", a: "نعم، وهي رحلة يوم شائعة، ويُضمَّن وقت انتظار السائق خلال اليوم في الخطة." },
        { q: "هل الطائف أبرد من مكة؟", a: "نعم، فالطائف عالية في الجبال وجوها أبرد بوضوح خاصة في الصيف." },
        { q: "هل أحتاج الإحرام عند العودة من الطائف إلى مكة؟", a: "إن كنت تنوي أداء العمرة فتحرم من الميقات في الطريق، وتأكد من الأحكام مع أهل العلم." },
        { q: "هل ترتبون مرشدًا سياحيًا في الطائف؟", a: "ترتب RideSaudi السيارة والسائق فقط لا الجولات المرشدة، وأنت تختار الأماكن." },
      ],
    },
  },
};
