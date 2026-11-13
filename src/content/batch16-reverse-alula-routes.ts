import type { ServicePage } from "./types";

const U = "2026-11-14";
const I = "services/intercity-transfers";
const A = "services/airport-transfers";
const C = "services/city-transport";
const T = "services/tourism-transport";
const M = "services/umrah-transport";

/**
 * Reverse-direction and AlUla-origin routes requested by the owner on 2026-11-14: Madinah to Makkah,
 * Taif to Makkah, AlUla to Riyadh, AlUla to Dammam. Each is written for its own direction: the two
 * Makkah-bound pages are built around the Miqat on that road, which the outbound pages do not cover.
 *
 * Vehicle types (sedan, GMC Yukon, Hyundai Staria) are owner-confirmed as of 2026-11-14. Seat counts
 * and luggage capacities are NOT confirmed and are not stated.
 *
 * Distances are approximate figures from public mapping and news sources checked on 2026-11-14
 * (Madinah to Makkah about 420 to 450 km; AlUla to Riyadh about 1,040 km via Hail and Qassim;
 * AlUla to Dammam about 1,430 to 1,445 km). No reliable figure was found for Taif to Makkah, so
 * none is published. Miqat information is general: pilgrims are told to confirm with their scholar
 * or group leader, and RideSaudi gives no religious ruling (SEO-RULES.md section 3).
 */
export const batch16ReverseAlulaRoutes: ServicePage[] = [
  {
    path: `${I}/madinah-to-makkah`,
    parent: I,
    variant: "umrah",
    service: "intercity",
    related: [`${I}/makkah-to-madinah`, `${M}/madinah-ziyarat`, `${A}/madinah-airport`, `${C}/madinah`, `${C}/makkah`, "fleet"],
    updated: U,
    copy: {
      en: {
        nav: "Madinah to Makkah",
        title: "Madinah to Makkah Private Car: GMC, Staria or Sedan",
        description: "Request a private GMC Yukon, Hyundai Staria or sedan with a driver from your Madinah hotel to Makkah, with a stop at the Dhul Hulaifah Miqat. Get a quotation.",
        h1: "Madinah to Makkah by private car, with a Miqat stop at Dhul Hulaifah",
        eyebrow: "Intercity · Madinah to Makkah",
        answer: "A private Madinah to Makkah transfer is a pre-booked car with a driver from your Madinah hotel to your Makkah hotel, usually with a stop at the Miqat of Dhul Hulaifah (Abyar Ali) for pilgrims entering Ihram. Public sources put the road at about 420 to 450 km, four to five hours of driving before stops. RideSaudi quotes each journey individually in a sedan, GMC Yukon or Hyundai Staria.",
        summary: "A private car from a Madinah hotel to Makkah, with the Miqat stop planned in.",
        sections: [
          { h: "The Miqat stop is what makes this direction different", p: ["Travellers going from Madinah to Makkah for Umrah pass the Miqat of Dhul Hulaifah, also known as Abyar Ali, shortly after leaving Madinah. It is the Miqat for those setting out from Madinah, and pilgrims stop there to enter Ihram and make their intention before continuing. Tell us in the enquiry that you need this stop and roughly how long your group wants, so the time is part of the plan and the quotation. For any question about the rites themselves, follow your scholar or group leader; RideSaudi gives no religious rulings."] },
          { h: "Leaving your Madinah hotel", p: ["Most pickups are from hotels around the Prophet's Mosque, where streets can be restricted around prayer times. Give the hotel name and the gate or entrance you will use, and choose a pickup time that is clear of the prayer you plan to attend. If you want Ziyarat visits in Madinah on the morning you leave, ask for them in the same enquiry; see Madinah Ziyarat."] },
          { h: "Sedan, GMC Yukon or Hyundai Staria on this road", p: ["A sedan suits one or two pilgrims with ordinary luggage. Families usually ask for a GMC Yukon for the extra room on a journey of several hours, and larger families or small groups with many bags ask for a Hyundai Staria so that everyone travels in one vehicle. Tell us the number of passengers, the number of large bags and whether you carry a wheelchair or a stroller; the vehicle is confirmed in the quotation."] },
          { h: "Arriving in Makkah", p: ["Give the Makkah hotel name. Vehicle access close to the Grand Mosque changes with the season and the time of day, so the drop-off is made as near to the hotel as the traffic arrangements on the day allow. If you prefer the train, the Haramain High Speed Railway also links the two cities; a car is chosen for door-to-door travel with luggage and for the Miqat stop at your own pace. Travelling the other way? See Makkah to Madinah."] },
        ],
        checklist: { h: "Include this in your Madinah to Makkah enquiry", items: ["Madinah hotel and preferred pickup time", "Makkah hotel", "Whether you need the Miqat stop at Dhul Hulaifah, and for how long", "Passengers, including children and elderly travellers", "Number of large bags, wheelchair or stroller", "Vehicle: sedan, GMC Yukon or Hyundai Staria"] },
        faqs: [
          { q: "Will the driver stop at the Miqat between Madinah and Makkah?", a: "You can request a stop at Dhul Hulaifah (Abyar Ali). Mention it in the enquiry so the waiting time is included in the quotation." },
          { q: "How far is Madinah from Makkah by road?", a: "Public sources give about 420 to 450 km and four to five hours of driving. The Miqat stop and breaks add to that." },
          { q: "Can I book a GMC Yukon from Madinah to Makkah?", a: "You can request a GMC Yukon, a Hyundai Staria or a sedan. The vehicle and its availability for your date are confirmed in the quotation." },
          { q: "Can we do Ziyarat in Madinah before leaving for Makkah?", a: "You can request Ziyarat stops before the journey. They are quoted together with the transfer." },
          { q: "Is the train or a private car better from Madinah to Makkah?", a: "The train is fast between stations. A private car goes hotel to hotel, carries your luggage with you and stops at the Miqat for as long as your group needs." },
        ],
      },
      ar: {
        nav: "المدينة إلى مكة",
        title: "من المدينة المنورة إلى مكة: جمس أو ستاريا أو سيدان بسائق",
        description: "اطلب جمس يوكن أو هيونداي ستاريا أو سيدان بسائق من فندقك في المدينة المنورة إلى مكة المكرمة مع التوقف في ميقات ذي الحليفة. استلم عرض سعر.",
        h1: "من المدينة المنورة إلى مكة المكرمة بسيارة خاصة مع التوقف في ميقات ذي الحليفة",
        eyebrow: "بين المدن · المدينة إلى مكة",
        answer: "التوصيل الخاص من المدينة المنورة إلى مكة المكرمة هو سيارة بسائق وبحجز مسبق من فندقك في المدينة إلى فندقك في مكة، مع توقف في ميقات ذي الحليفة (أبيار علي) لمن يريد الإحرام. وتقدّر مصادر عامة الطريق بنحو 420 إلى 450 كم، أي أربع إلى خمس ساعات قيادة قبل التوقفات. تُسعِّر RideSaudi كل رحلة على حدة بسيدان أو جمس يوكن أو هيونداي ستاريا.",
        summary: "سيارة خاصة من فندق في المدينة المنورة إلى مكة المكرمة مع توقف الميقات ضمن الخطة.",
        sections: [
          { h: "توقف الميقات هو ما يميز هذا الاتجاه", p: ["يمر المتجهون من المدينة المنورة إلى مكة المكرمة للعمرة بميقات ذي الحليفة المعروف بأبيار علي بعد الخروج من المدينة بقليل. وهو ميقات من ينطلق من المدينة، ويتوقف عنده المعتمرون للإحرام وعقد النية قبل متابعة الطريق. اذكر في طلبك أنك تحتاج هذا التوقف والمدة التقريبية التي تريدها مجموعتك، ليدخل الوقت في الخطة وعرض السعر. وفي كل ما يخص المناسك نفسها اتبع شيخك أو مشرف مجموعتك؛ فـRideSaudi لا تقدّم فتاوى."] },
          { h: "الانطلاق من فندقك في المدينة", p: ["أغلب نقاط الاستلام من الفنادق المحيطة بالمسجد النبوي، حيث تُقيَّد بعض الشوارع قرب أوقات الصلاة. أرسل اسم الفندق والبوابة أو المدخل الذي ستستخدمه، واختر وقت استلام بعيدًا عن الصلاة التي تنوي حضورها. وإن أردت زيارات في المدينة صباح يوم المغادرة فاطلبها في الطلب نفسه؛ راجع صفحة مزارات المدينة."] },
          { h: "سيدان أم جمس يوكن أم هيونداي ستاريا على هذا الطريق", p: ["تناسب السيدان معتمرًا أو اثنين بحقائب عادية. وتطلب العائلات غالبًا جمس يوكن لمساحته الأوسع في رحلة تمتد ساعات، وتطلب العائلات الكبيرة والمجموعات الصغيرة كثيرة الحقائب هيونداي ستاريا ليسافر الجميع في مركبة واحدة. أخبرنا بعدد الركاب وعدد الحقائب الكبيرة وهل معكم كرسي متحرك أو عربة أطفال؛ وتُؤكَّد المركبة في عرض السعر."] },
          { h: "الوصول إلى مكة المكرمة", p: ["أرسل اسم فندقك في مكة. ويتغير وصول المركبات قرب المسجد الحرام بحسب الموسم والوقت، فيكون الإنزال أقرب ما تسمح به تنظيمات السير في ذلك اليوم. وإن فضّلت القطار فقطار الحرمين السريع يربط المدينتين أيضًا؛ وتُختار السيارة للتنقل من الباب إلى الباب مع الحقائب وللتوقف في الميقات على راحتكم. وإن كنت مسافرًا بالاتجاه الآخر فراجع صفحة مكة إلى المدينة."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب المدينة إلى مكة", items: ["فندق المدينة ووقت الاستلام المفضل", "فندق مكة المكرمة", "هل تحتاج التوقف في ميقات ذي الحليفة وكم مدته", "الركاب ومنهم الأطفال وكبار السن", "عدد الحقائب الكبيرة والكرسي المتحرك أو عربة الأطفال", "المركبة: سيدان أو جمس يوكن أو هيونداي ستاريا"] },
        faqs: [
          { q: "هل يتوقف السائق في الميقات بين المدينة ومكة؟", a: "يمكنك طلب التوقف في ذي الحليفة (أبيار علي). اذكره في الطلب ليدخل وقت الانتظار في عرض السعر." },
          { q: "كم تبعد المدينة المنورة عن مكة المكرمة بالسيارة؟", a: "تذكر مصادر عامة نحو 420 إلى 450 كم وأربع إلى خمس ساعات قيادة. ويضاف إليها توقف الميقات والاستراحات." },
          { q: "هل يمكن حجز جمس يوكن من المدينة إلى مكة؟", a: "يمكنك طلب جمس يوكن أو هيونداي ستاريا أو سيدان. وتُؤكَّد المركبة وإتاحتها لتاريخك في عرض السعر." },
          { q: "هل يمكن زيارة مزارات المدينة قبل التوجه إلى مكة؟", a: "يمكنك طلب محطات الزيارة قبل الرحلة، وتُسعَّر مع التوصيلة." },
          { q: "أيهما أنسب من المدينة إلى مكة: القطار أم السيارة الخاصة؟", a: "القطار سريع بين المحطتين. والسيارة الخاصة من الفندق إلى الفندق، وحقائبك معك، وتتوقف في الميقات المدة التي تحتاجها مجموعتك." },
        ],
      },
    },
  },
  {
    path: `${I}/taif-to-makkah`,
    parent: I,
    variant: "umrah",
    service: "intercity",
    related: [`${I}/makkah-to-taif`, `${A}/taif-airport`, `${T}/taif`, `${I}/jeddah-to-taif`, `${C}/makkah`],
    updated: U,
    copy: {
      en: {
        nav: "Taif to Makkah",
        title: "Taif to Makkah Private Car with Driver",
        description: "Request a private sedan, GMC Yukon or Hyundai Staria with a driver from Taif or Taif airport to Makkah, with a Miqat stop on the way. Get a quotation.",
        h1: "Taif to Makkah by private car, down from the mountains",
        eyebrow: "Intercity · Taif to Makkah",
        answer: "A private Taif to Makkah transfer is a pre-booked car with a driver from a Taif hotel, home or Taif International Airport down to Makkah. Two roads link the cities, and each passes a Miqat where Umrah pilgrims enter Ihram: Qarn al-Manazil on the Sayl road and Wadi Muhrim on the Al Hada road. RideSaudi quotes each journey individually and confirms the vehicle first.",
        summary: "A private car from Taif or its airport down to Makkah, with the Miqat stop planned.",
        sections: [
          { h: "Two roads down, and why it matters", p: ["The Al Hada road is the steep mountain descent with the views; the Sayl road is the longer, gentler highway. Which one is used depends on where in Taif you start, the weather and road conditions on the day: the mountain road can be affected by fog and rain. We do not publish a distance or time for this journey because the two roads differ and no reliable single figure is available. Say if you have a preference, and say if anyone in your group is uneasy with mountain bends."] },
          { h: "The Miqat on each road", p: ["Pilgrims travelling to Makkah for Umrah stop at the Miqat on their road: Qarn al-Manazil, at As-Sayl Al-Kabir, on the Sayl road, or Wadi Muhrim on the Al Hada road. Tell us that you need the stop so the route and the waiting time are planned around it. Confirm the rites and the correct Miqat for your journey with your scholar or group leader; RideSaudi does not give religious rulings."] },
          { h: "From Taif airport to Makkah", p: ["Some pilgrims fly into Taif International Airport and continue to Makkah by road. Send the flight number, arrival time, passengers and bags. Where the driver meets you is confirmed in the quotation. If you plan to change into Ihram garments before the Miqat, allow time for it at the airport or your hotel."] },
          { h: "Choosing the vehicle", p: ["For a couple or a single traveller a sedan is usually enough on this short route. Families with children and luggage tend to ask for a GMC Yukon, and groups who want to stay together ask for a Hyundai Staria. Coming up to Taif from Makkah for the day instead? See Makkah to Taif."] },
        ],
        checklist: { h: "Include this in your Taif to Makkah enquiry", items: ["Pickup in Taif: hotel, home or airport with flight details", "Makkah hotel or address", "Whether you need a Miqat stop", "Road preference, if you have one", "Passengers and bags", "Vehicle: sedan, GMC Yukon or Hyundai Staria"] },
        faqs: [
          { q: "Where is the Miqat when travelling from Taif to Makkah?", a: "On the Sayl road it is Qarn al-Manazil at As-Sayl Al-Kabir; on the Al Hada road it is Wadi Muhrim. Confirm the right one for your journey with your scholar." },
          { q: "Can you take me from Taif airport to Makkah?", a: "You can request it. Send your flight details; the meeting point and availability are confirmed in the quotation." },
          { q: "Which road does the driver take from Taif to Makkah?", a: "It depends on your starting point, the weather and conditions on the day. Tell us if you prefer the highway to the mountain road." },
          { q: "How far is Taif from Makkah?", a: "We do not publish a figure: the two roads differ in length and no reliable single number is available. Check a current map for your exact addresses." },
        ],
      },
      ar: {
        nav: "الطائف إلى مكة",
        title: "من الطائف إلى مكة المكرمة: سيارة خاصة مع سائق",
        description: "اطلب سيدان أو جمس يوكن أو هيونداي ستاريا بسائق من الطائف أو مطار الطائف إلى مكة المكرمة مع التوقف في الميقات على الطريق. استلم عرض سعر.",
        h1: "من الطائف إلى مكة المكرمة بسيارة خاصة نزولًا من الجبال",
        eyebrow: "بين المدن · الطائف إلى مكة",
        answer: "التوصيل الخاص من الطائف إلى مكة المكرمة هو سيارة بسائق وبحجز مسبق من فندق أو منزل في الطائف أو من مطار الطائف الدولي نزولًا إلى مكة. ويربط المدينتين طريقان، وعلى كل منهما ميقات يُحرم منه المعتمرون: قرن المنازل على طريق السيل، ووادي محرم على طريق الهدا. تُسعِّر RideSaudi كل رحلة على حدة وتؤكد المركبة أولًا.",
        summary: "سيارة خاصة من الطائف أو مطارها نزولًا إلى مكة المكرمة مع التوقف في الميقات.",
        sections: [
          { h: "طريقان للنزول، ولماذا يهم ذلك", p: ["طريق الهدا هو النزول الجبلي شديد الانحدار ذو الإطلالات، وطريق السيل هو الطريق السريع الأطول والأسهل. ويتوقف اختيار أحدهما على مكان انطلاقك في الطائف وعلى الطقس وحالة الطريق في ذلك اليوم، فالطريق الجبلي قد يتأثر بالضباب والأمطار. ولا ننشر مسافة أو زمنًا لهذه الرحلة لاختلاف الطريقين وعدم توفر رقم واحد موثوق. فاذكر تفضيلك إن وجد، واذكر إن كان في مجموعتك من لا يرتاح للمنعطفات الجبلية."] },
          { h: "الميقات على كل طريق", p: ["يتوقف المتجهون إلى مكة المكرمة للعمرة عند الميقات الذي على طريقهم: قرن المنازل في السيل الكبير على طريق السيل، أو وادي محرم على طريق الهدا. أخبرنا بحاجتك إلى التوقف ليُخطَّط المسار ووقت الانتظار عليه. وتأكد من المناسك ومن الميقات الصحيح لرحلتك مع شيخك أو مشرف مجموعتك؛ فـRideSaudi لا تقدّم فتاوى."] },
          { h: "من مطار الطائف إلى مكة", p: ["يصل بعض المعتمرين إلى مطار الطائف الدولي ثم يكملون إلى مكة برًّا. أرسل رقم الرحلة ووقت الوصول وعدد الركاب والحقائب. ويُؤكَّد مكان لقاء السائق في عرض السعر. وإن كنت ستلبس ملابس الإحرام قبل الميقات فاترك لذلك وقتًا في المطار أو الفندق."] },
          { h: "اختيار المركبة", p: ["تكفي السيدان غالبًا لمسافر واحد أو اثنين في هذا الطريق القصير. وتميل العائلات بأطفالها وحقائبها إلى طلب جمس يوكن، والمجموعات التي تريد البقاء معًا إلى طلب هيونداي ستاريا. وإن كنت صاعدًا من مكة إلى الطائف ليوم واحد فراجع صفحة مكة إلى الطائف."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الطائف إلى مكة", items: ["الاستلام في الطائف: فندق أو منزل أو المطار مع تفاصيل الرحلة", "الفندق أو العنوان في مكة المكرمة", "هل تحتاج التوقف في الميقات", "الطريق المفضل إن وجد", "الركاب والحقائب", "المركبة: سيدان أو جمس يوكن أو هيونداي ستاريا"] },
        faqs: [
          { q: "أين الميقات للمسافر من الطائف إلى مكة؟", a: "على طريق السيل هو قرن المنازل في السيل الكبير، وعلى طريق الهدا هو وادي محرم. وتأكد من الميقات الصحيح لرحلتك مع شيخك." },
          { q: "هل توصلونني من مطار الطائف إلى مكة المكرمة؟", a: "يمكنك طلب ذلك. أرسل تفاصيل رحلتك؛ وتُؤكَّد نقطة اللقاء والإتاحة في عرض السعر." },
          { q: "أي طريق يسلكه السائق من الطائف إلى مكة؟", a: "يتوقف ذلك على نقطة انطلاقك والطقس وحالة الطريق في ذلك اليوم. أخبرنا إن كنت تفضّل الطريق السريع على الطريق الجبلي." },
          { q: "كم تبعد الطائف عن مكة المكرمة؟", a: "لا ننشر رقمًا: فالطريقان مختلفان في الطول ولا يتوفر رقم واحد موثوق. راجع خريطة حديثة لعنوانيك بدقة." },
        ],
      },
    },
  },
  {
    path: `${I}/alula-to-riyadh`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/riyadh-to-alula`, `${A}/alula-airport`, `${T}/alula`, `${I}/alula-to-dammam`, `${C}/hail`, `${C}/riyadh`],
    updated: U,
    copy: {
      en: {
        nav: "AlUla to Riyadh",
        title: "AlUla to Riyadh Private Car: GMC, Staria or Sedan",
        description: "Request a private GMC Yukon, Hyundai Staria or sedan with a driver from your AlUla hotel or resort to Riyadh. About 1,040 km by road. Get a quotation.",
        h1: "AlUla to Riyadh by private car, a full day across the north",
        eyebrow: "Intercity · AlUla to Riyadh",
        answer: "A private AlUla to Riyadh transfer is a pre-booked car with a driver from an AlUla hotel or resort to an address in Riyadh. A Saudi news report puts the quicker road, through Hail and Qassim, at about 1,040 km and roughly 11 hours of driving. It is a full day, or two with an overnight stop. RideSaudi quotes each journey individually in a sedan, GMC Yukon or Hyundai Staria.",
        summary: "A long private road journey from an AlUla hotel or resort to Riyadh.",
        sections: [
          { h: "Why travellers leave AlUla by road", p: ["Flights from AlUla to Riyadh do not run at every hour, and seats fill around events and holidays. Visitors who have finished their stay and cannot get a flight that suits them, families with a lot of luggage, and groups who would rather not split across flights are the people who ask for this journey. If a flight fits your dates, it is much quicker; the road is the alternative when it does not."] },
          { h: "Two ways across, and where to stop", p: ["The route through Hail and Qassim is the shorter one. A second route runs south through Madinah and is about 1,160 km by the same report, which suits travellers who want to visit Madinah on the way. On the northern route, Hail and Buraydah are the natural places to break the journey for a meal or a night. Tell us which route you want and whether you plan an overnight stop, because both change the quotation."] },
          { h: "Pickup at AlUla hotels and resorts", p: ["AlUla's accommodation is spread across the valley, and some resorts have their own access arrangements for outside vehicles. Give the resort name and ask its reception where a private car may collect guests. An early start is strongly advised so that most of the driving is in daylight."] },
          { h: "Which vehicle for eleven hours on the road", p: ["Comfort matters more here than on a short transfer. A GMC Yukon is the usual request for families and for anyone who wants room to stretch on a long day; a Hyundai Staria suits a group travelling with many bags; a sedan suits one or two passengers travelling light. Coming the other way for a holiday? See Riyadh to AlUla."] },
        ],
        checklist: { h: "Include this in your AlUla to Riyadh enquiry", items: ["AlUla hotel or resort and earliest departure time", "Riyadh address", "Route: via Hail and Qassim, or via Madinah", "Overnight stop, if you want one, and where", "Passengers and number of large bags", "Vehicle: sedan, GMC Yukon or Hyundai Staria"] },
        faqs: [
          { q: "How far is AlUla from Riyadh by road?", a: "About 1,040 km and roughly 11 hours of driving through Hail and Qassim, according to a Saudi news report. The route through Madinah is about 1,160 km." },
          { q: "Can I travel from AlUla to Riyadh in one day by car?", a: "It is possible with an early start, but it is a very long day. You can request an overnight stop in Hail or Buraydah." },
          { q: "Can we go from AlUla to Riyadh through Madinah?", a: "You can request the Madinah route, including a stop there. It is longer and is quoted accordingly." },
          { q: "Can I book a GMC Yukon from AlUla to Riyadh?", a: "You can request a GMC Yukon, a Hyundai Staria or a sedan. Availability in AlUla for your date is confirmed in the quotation." },
        ],
      },
      ar: {
        nav: "العلا إلى الرياض",
        title: "من العلا إلى الرياض: جمس أو ستاريا أو سيدان بسائق",
        description: "اطلب جمس يوكن أو هيونداي ستاريا أو سيدان بسائق من فندقك أو منتجعك في العلا إلى الرياض. نحو 1040 كم بالطريق. استلم عرض سعر.",
        h1: "من العلا إلى الرياض بسيارة خاصة، يوم كامل عبر الشمال",
        eyebrow: "بين المدن · العلا إلى الرياض",
        answer: "التوصيل الخاص من العلا إلى الرياض هو سيارة بسائق وبحجز مسبق من فندق أو منتجع في العلا إلى عنوان في الرياض. ويذكر تقرير صحفي سعودي أن الطريق الأقصر عبر حائل والقصيم نحو 1040 كم وقرابة 11 ساعة قيادة. فهي رحلة يوم كامل، أو يومين مع مبيت في الطريق. تُسعِّر RideSaudi كل رحلة على حدة بسيدان أو جمس يوكن أو هيونداي ستاريا.",
        summary: "رحلة برية خاصة طويلة من فندق أو منتجع في العلا إلى الرياض.",
        sections: [
          { h: "لماذا يغادر المسافرون العلا برًّا", p: ["رحلات الطيران من العلا إلى الرياض لا تتوفر في كل ساعة، وتمتلئ مقاعدها في مواسم الفعاليات والإجازات. والذين يطلبون هذه الرحلة هم زوار أنهوا إقامتهم ولم يجدوا رحلة تناسبهم، وعائلات معها حقائب كثيرة، ومجموعات لا تريد التوزع على أكثر من رحلة. وإن وافقت رحلة طيران تواريخك فهي أسرع بكثير؛ والطريق هو البديل حين لا توافق."] },
          { h: "طريقان للعبور، وأين التوقف", p: ["الطريق عبر حائل والقصيم هو الأقصر. وهناك طريق ثانٍ يتجه جنوبًا عبر المدينة المنورة ويبلغ نحو 1160 كم بحسب التقرير نفسه، ويناسب من يريد زيارة المدينة في طريقه. وعلى الطريق الشمالي تُعدّ حائل وبريدة محطتين طبيعيتين لوجبة أو مبيت. أخبرنا بالطريق الذي تريده وهل تنوي المبيت، فكلاهما يغيّر عرض السعر."] },
          { h: "الاستلام من فنادق العلا ومنتجعاتها", p: ["أماكن الإقامة في العلا متباعدة في الوادي، ولبعض المنتجعات ترتيبات خاصة لدخول المركبات الخارجية. أرسل اسم المنتجع واسأل الاستقبال عن المكان الذي يُسمح فيه لسيارة خاصة باستلام النزلاء. وننصح بشدة بالانطلاق المبكر ليكون أغلب الطريق في ضوء النهار."] },
          { h: "أي مركبة لإحدى عشرة ساعة على الطريق", p: ["الراحة هنا أهم منها في توصيلة قصيرة. فجمس يوكن هو الطلب المعتاد للعائلات ولمن يريد مساحة في يوم طويل، وهيونداي ستاريا تناسب مجموعة تسافر بحقائب كثيرة، والسيدان تناسب راكبًا أو اثنين بحقائب خفيفة. وإن كنت قادمًا بالاتجاه الآخر لقضاء إجازة فراجع صفحة الرياض إلى العلا."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب العلا إلى الرياض", items: ["الفندق أو المنتجع في العلا وأبكر وقت للانطلاق", "العنوان في الرياض", "الطريق: عبر حائل والقصيم أم عبر المدينة المنورة", "المبيت في الطريق إن أردته، وأين", "الركاب وعدد الحقائب الكبيرة", "المركبة: سيدان أو جمس يوكن أو هيونداي ستاريا"] },
        faqs: [
          { q: "كم تبعد العلا عن الرياض بالسيارة؟", a: "نحو 1040 كم وقرابة 11 ساعة قيادة عبر حائل والقصيم بحسب تقرير صحفي سعودي. والطريق عبر المدينة المنورة نحو 1160 كم." },
          { q: "هل يمكن السفر من العلا إلى الرياض بالسيارة في يوم واحد؟", a: "يمكن ذلك مع انطلاق مبكر، لكنه يوم طويل جدًا. ويمكنك طلب مبيت في حائل أو بريدة." },
          { q: "هل يمكن الذهاب من العلا إلى الرياض عبر المدينة المنورة؟", a: "يمكنك طلب طريق المدينة مع التوقف فيها. وهو أطول ويُسعَّر على ذلك." },
          { q: "هل يمكن حجز جمس يوكن من العلا إلى الرياض؟", a: "يمكنك طلب جمس يوكن أو هيونداي ستاريا أو سيدان. وتُؤكَّد الإتاحة في العلا لتاريخك في عرض السعر." },
        ],
      },
    },
  },
  {
    path: `${I}/alula-to-dammam`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/alula-to-riyadh`, `${I}/riyadh-to-dammam`, `${I}/dammam-to-riyadh`, `${A}/alula-airport`, `${T}/alula`, `${C}/dammam`],
    updated: U,
    copy: {
      en: {
        nav: "AlUla to Dammam",
        title: "AlUla to Dammam Private Car, and Dammam to AlUla",
        description: "Request a private GMC Yukon, Hyundai Staria or sedan with a driver between AlUla and Dammam or Al Khobar. About 1,430 km, planned over two days.",
        h1: "AlUla to Dammam by private car: a two-day journey across the Kingdom",
        eyebrow: "Intercity · AlUla ⇄ Eastern Province",
        answer: "A private AlUla to Dammam transfer is a pre-booked car with a driver between AlUla and Dammam, Al Khobar or Dhahran, in either direction. Public route calculators give about 1,430 to 1,445 km and around 15 hours of driving, so it is planned over two days with a night on the way, usually in Riyadh. RideSaudi quotes each journey individually and confirms the vehicle first.",
        summary: "A two-day private road journey between AlUla and the Eastern Province.",
        sections: [
          { h: "Be realistic about the distance", p: ["This is one of the longest journeys inside Saudi Arabia: from the north-west almost to the Gulf. Fifteen hours of driving is not a sensible single day for passengers or for a driver, so we plan it in two stages. For most travellers a flight, direct or through Riyadh, is quicker. The road is requested by families from the Eastern Province who want to take their holiday at their own pace, by groups with a lot of equipment or luggage, and by travellers who want to see Hail or Riyadh on the way."] },
          { h: "How the two days are usually split", p: ["The common plan is AlUla to Riyadh on the first day, through Hail and Qassim, and Riyadh to Dammam on the second, a much shorter stage of about 400 km. Some travellers prefer to stop earlier, in Hail or Buraydah, and make the second day longer. Hotels on the way are booked by you; tell us where you will stay so the pickup on the second morning is arranged."] },
          { h: "From Dammam to AlUla", p: ["In this direction the journey usually starts from a home in Dammam, Al Khobar or Dhahran and ends at an AlUla resort. Leave early on both days, and check your resort's check-in time and its rules for outside vehicles. If you want the car to stay with you in AlUla for visits to the heritage sites, ask for that in the same enquiry; site tickets are booked through the official AlUla channels."] },
          { h: "Vehicle for two days on the road", p: ["Most requests for this route are for a GMC Yukon or a Hyundai Staria, because space and luggage room matter over two days. A sedan can be requested for one or two passengers. Say how many large bags you have and whether you carry anything bulky."] },
        ],
        checklist: { h: "Include this in your AlUla to Dammam enquiry", items: ["Direction and start date", "Pickup and final destination addresses", "Where you plan to stay overnight on the way", "Passengers and number of large bags", "Whether the car should stay with you at the destination", "Vehicle: GMC Yukon, Hyundai Staria or sedan"] },
        faqs: [
          { q: "How far is AlUla from Dammam by road?", a: "Public route calculators give about 1,430 to 1,445 km and around 15 hours of driving. Treat it as approximate." },
          { q: "Can AlUla to Dammam be driven in one day?", a: "We plan it over two days. Fifteen hours of driving is too long for one day, so the journey includes a night on the way." },
          { q: "Where do people stop overnight between AlUla and Dammam?", a: "Riyadh is the usual stop. Hail and Buraydah are alternatives if you prefer a shorter first day." },
          { q: "Can I book a private car from Dammam to AlUla for a family holiday?", a: "You can request it, including keeping the car in AlUla for your stay. The vehicle and availability are confirmed in the quotation." },
        ],
      },
      ar: {
        nav: "العلا إلى الدمام",
        title: "من العلا إلى الدمام والعكس: سيارة خاصة مع سائق",
        description: "اطلب جمس يوكن أو هيونداي ستاريا أو سيدان بسائق بين العلا والدمام أو الخبر. نحو 1430 كم، وتُخطَّط الرحلة على يومين.",
        h1: "من العلا إلى الدمام بسيارة خاصة: رحلة يومين عبر المملكة",
        eyebrow: "بين المدن · العلا ⇄ المنطقة الشرقية",
        answer: "التوصيل الخاص من العلا إلى الدمام هو سيارة بسائق وبحجز مسبق بين العلا والدمام أو الخبر أو الظهران بالاتجاهين. وتذكر حاسبات المسافات العامة نحو 1430 إلى 1445 كم وقرابة 15 ساعة قيادة، ولذلك تُخطَّط الرحلة على يومين مع مبيت في الطريق، في الرياض غالبًا. تُسعِّر RideSaudi كل رحلة على حدة وتؤكد المركبة أولًا.",
        summary: "رحلة برية خاصة على يومين بين العلا والمنطقة الشرقية.",
        sections: [
          { h: "كن واقعيًا في تقدير المسافة", p: ["هذه من أطول الرحلات داخل السعودية: من الشمال الغربي إلى قرب الخليج. وخمس عشرة ساعة قيادة ليست يومًا معقولًا للركاب ولا للسائق، ولذلك نخططها على مرحلتين. والطيران، مباشرًا أو عبر الرياض، أسرع لأغلب المسافرين. ويطلب الطريقَ عائلاتٌ من المنطقة الشرقية تريد قضاء إجازتها على مهلها، ومجموعات معها معدات أو حقائب كثيرة، ومسافرون يريدون رؤية حائل أو الرياض في الطريق."] },
          { h: "كيف يُقسَّم اليومان عادة", p: ["الخطة الشائعة هي من العلا إلى الرياض في اليوم الأول عبر حائل والقصيم، ومن الرياض إلى الدمام في اليوم الثاني، وهي مرحلة أقصر بكثير تبلغ نحو 400 كم. ويفضّل بعض المسافرين التوقف أبكر في حائل أو بريدة وجعل اليوم الثاني أطول. وحجز الفنادق في الطريق عليك؛ فأخبرنا أين ستقيم ليُرتَّب الاستلام في صباح اليوم الثاني."] },
          { h: "من الدمام إلى العلا", p: ["في هذا الاتجاه تبدأ الرحلة غالبًا من منزل في الدمام أو الخبر أو الظهران وتنتهي في منتجع بالعلا. انطلق مبكرًا في اليومين، وتأكد من موعد تسجيل الدخول في منتجعك ومن قواعده للمركبات الخارجية. وإن أردت بقاء السيارة معك في العلا لزيارة المواقع التراثية فاطلب ذلك في الطلب نفسه؛ وتُحجز تذاكر المواقع عبر القنوات الرسمية للعلا."] },
          { h: "المركبة ليومين على الطريق", p: ["أغلب طلبات هذا المسار لجمس يوكن أو هيونداي ستاريا، لأن المساحة ومكان الحقائب مهمان على مدى يومين. ويمكن طلب سيدان لراكب أو اثنين. اذكر عدد الحقائب الكبيرة وهل معك شيء كبير الحجم."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب العلا إلى الدمام", items: ["الاتجاه وتاريخ البدء", "عنوان الاستلام والوجهة النهائية", "أين تنوي المبيت في الطريق", "الركاب وعدد الحقائب الكبيرة", "هل تبقى السيارة معك في الوجهة", "المركبة: جمس يوكن أو هيونداي ستاريا أو سيدان"] },
        faqs: [
          { q: "كم تبعد العلا عن الدمام بالسيارة؟", a: "تذكر حاسبات المسافات العامة نحو 1430 إلى 1445 كم وقرابة 15 ساعة قيادة. اعتبر الرقم تقريبيًا." },
          { q: "هل يمكن قطع الطريق من العلا إلى الدمام في يوم واحد؟", a: "نخططه على يومين. فخمس عشرة ساعة قيادة أطول من أن تكون في يوم واحد، ولذلك تتضمن الرحلة مبيتًا في الطريق." },
          { q: "أين يبيت المسافرون بين العلا والدمام؟", a: "الرياض هي المحطة المعتادة. وحائل وبريدة بديلان لمن يفضّل يومًا أول أقصر." },
          { q: "هل يمكن حجز سيارة خاصة من الدمام إلى العلا لإجازة عائلية؟", a: "يمكنك طلب ذلك، ومعه بقاء السيارة في العلا مدة إقامتك. وتُؤكَّد المركبة والإتاحة في عرض السعر." },
        ],
      },
    },
  },
];
