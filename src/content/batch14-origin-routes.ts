import type { ServicePage } from "./types";

const U = "2026-11-13";
const I = "services/intercity-transfers";
const X = "services/cross-border-transfers";
const C = "services/city-transport";
const A = "services/airport-transfers";

/**
 * Origin-specific route pages: journeys that START in the Eastern Province or Jeddah, plus Riyadh to
 * Al Khobar and Riyadh to Abu Dhabi. They do not repeat the Riyadh-origin pages: each covers its own
 * pickup points, arrival points and alternatives.
 *
 * Deliberately NOT built (already targeted by an existing page's title and H1, so a new URL would
 * cannibalise it): Madinah to Jeddah (jeddah-to-madinah), Madinah to Makkah (makkah-to-madinah),
 * Al Khobar to Bahrain (dammam-to-bahrain).
 *
 * Distances and driving times are approximate figures from public mapping and travel sources checked
 * on 2026-11-13 (Dammam to Riyadh about 400 to 415 km; Jeddah to Riyadh about 950 km; Dammam to Doha
 * 330 to 410 km depending on source; Dammam to Dubai about 880 km; Riyadh to Abu Dhabi 900 to 1,000 km).
 * They are never presented as RideSaudi operating data. Entry rules are not stated: travellers are sent
 * to the official authorities (SEO-RULES.md section 3). Vehicle and driver cross-border permission is
 * an owner fact that is still unverified, so pages say it is confirmed in the quotation.
 */
export const batch14OriginRoutes: ServicePage[] = [
  {
    path: `${I}/dammam-to-riyadh`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/riyadh-to-dammam`, `${I}/riyadh-to-al-khobar`, `${A}/dammam-airport`, `${A}/riyadh-airport`, `${C}/dammam`, `${C}/riyadh`],
    updated: U,
    copy: {
      en: {
        nav: "Dammam to Riyadh",
        title: "Dammam to Riyadh Private Car: Eastern Province Pickups",
        description: "Request a private car with a driver from Dammam, Al Khobar, Dhahran or King Fahd Airport to Riyadh. About 400 km by road. Send your pickup and get a quotation.",
        h1: "Dammam to Riyadh by private car, door to door from the Eastern Province",
        eyebrow: "Intercity · Eastern Province to Riyadh",
        answer: "A private Dammam to Riyadh transfer is a pre-booked car with a driver from an address in Dammam, Al Khobar or Dhahran, or from King Fahd International Airport, to a Riyadh address. Public mapping sources put the road at roughly 400 to 415 km, about three and a half to four hours of driving before stops. RideSaudi quotes each journey individually and confirms availability first.",
        summary: "A private car from Dammam, Al Khobar, Dhahran or the airport to an address in Riyadh.",
        sections: [
          { h: "Where the journey starts in the Eastern Province", p: ["Dammam, Al Khobar and Dhahran sit side by side, but a pickup on the Khobar Corniche, at a Dhahran office gate or at a home in Dammam each adds a different first stretch before the highway. King Fahd International Airport lies outside the city to the north-west, so travellers who land there and are needed in Riyadh the same day sometimes skip the connecting flight and go by road. Name the exact starting point; pickups in Qatif or Jubail can be requested too."] },
          { h: "Where you want to arrive in Riyadh", p: ["Riyadh is large, and the last part of the journey depends on where you are going: the King Abdullah Financial District and the northern districts, Olaya, the Diplomatic Quarter, an exhibition venue, or King Khalid International Airport on the northern edge of the city. Give the address or the flight time if you are travelling to catch a flight from Riyadh. For getting around once you arrive, see Riyadh city transport."] },
          { h: "Car, train or flight from Dammam", p: ["A passenger train links Dammam and Riyadh through Abqaiq and Hofuf in about four hours according to public timetables, and flights between the two cities are short. A private car is usually chosen for a door-to-door trip with luggage, for a group that wants to travel together, or when the schedule has to fit a meeting rather than a timetable. RideSaudi does not sell train or air tickets; compare the options and choose what suits your day."] },
          { h: "Day returns and waiting in Riyadh", p: ["A morning departure, a meeting in Riyadh and an evening drive home is a common request. Waiting time is quoted as part of the journey, so tell us how long you expect to stay. If you stay overnight, the return can be added to the same enquiry or requested later. Planning the trip from the capital instead? The Riyadh to Dammam page is written for that direction."] },
        ],
        checklist: { h: "Include this in your Dammam to Riyadh enquiry", items: ["City and exact pickup point: Dammam, Al Khobar, Dhahran or the airport", "Riyadh address, or flight time if you are going to the airport", "Date and preferred departure time", "Number of passengers and bags", "One way, same-day return or return on another date", "Vehicle preference, if any"] },
        faqs: [
          { q: "How far is Dammam from Riyadh by road?", a: "Public mapping sources give roughly 400 to 415 km and about three and a half to four hours of driving without stops. Treat it as approximate; the pickup and drop-off points change it." },
          { q: "Can the car collect me in Al Khobar or Dhahran for Riyadh?", a: "You can request a pickup in either city. Give the hotel, office or gate so the starting point is clear in the quotation." },
          { q: "Can I go from King Fahd International Airport straight to Riyadh?", a: "You can request it. Send your flight number and arrival time; where the driver meets you and any waiting are confirmed in the quotation, not assumed." },
          { q: "Can I travel from Dammam to Riyadh and back on the same day?", a: "You can request a same-day return. Waiting time in Riyadh is included in the quotation." },
          { q: "Can you drop me at King Khalid International Airport in Riyadh?", a: "You can request the airport as the destination. Share the flight time so the departure from Dammam can be planned with margin." },
        ],
      },
      ar: {
        nav: "الدمام إلى الرياض",
        title: "من الدمام إلى الرياض: سيارة خاصة من المنطقة الشرقية",
        description: "اطلب سيارة خاصة بسائق من الدمام أو الخبر أو الظهران أو مطار الملك فهد إلى الرياض. نحو 400 كم بالطريق. أرسل نقطة الاستلام واستلم عرض سعر.",
        h1: "من الدمام إلى الرياض بسيارة خاصة، من الباب إلى الباب",
        eyebrow: "بين المدن · من المنطقة الشرقية إلى الرياض",
        answer: "التوصيل الخاص من الدمام إلى الرياض هو سيارة بسائق وبحجز مسبق من عنوان في الدمام أو الخبر أو الظهران، أو من مطار الملك فهد الدولي، إلى عنوان في الرياض. وتقدّر خرائط عامة الطريق بنحو 400 إلى 415 كم، أي ثلاث ساعات ونصف إلى أربع ساعات قيادة قبل التوقفات. تُسعِّر RideSaudi كل رحلة على حدة وتؤكد الإتاحة أولًا.",
        summary: "سيارة خاصة من الدمام أو الخبر أو الظهران أو المطار إلى عنوان في الرياض.",
        sections: [
          { h: "من أين تبدأ الرحلة في المنطقة الشرقية", p: ["الدمام والخبر والظهران متجاورة، لكن الاستلام من كورنيش الخبر أو من بوابة مكتب في الظهران أو من منزل في الدمام يضيف كلٌّ منه مسافة أولى مختلفة قبل الطريق السريع. ويقع مطار الملك فهد الدولي خارج المدينة إلى الشمال الغربي، ولذلك يفضّل بعض القادمين إليه ممن لديهم موعد في الرياض في اليوم نفسه متابعة الطريق بالسيارة بدل رحلة طيران ثانية. حدّد نقطة الانطلاق بدقة، ويمكن طلب الاستلام من القطيف أو الجبيل أيضًا."] },
          { h: "أين تريد الوصول في الرياض", p: ["الرياض مدينة واسعة، والجزء الأخير من الرحلة يتوقف على وجهتك: مركز الملك عبدالله المالي وأحياء الشمال، أو العليا، أو الحي الدبلوماسي، أو مقر معرض، أو مطار الملك خالد الدولي في شمال المدينة. أرسل العنوان، أو موعد الرحلة إن كنت مسافرًا من مطار الرياض. وللتنقل بعد الوصول راجع صفحة التنقل داخل الرياض."] },
          { h: "السيارة أم القطار أم الطيران من الدمام", p: ["يربط قطار الركاب الدمام بالرياض مرورًا ببقيق والهفوف في نحو أربع ساعات بحسب الجداول المنشورة، ورحلات الطيران بين المدينتين قصيرة. وتُختار السيارة الخاصة غالبًا لرحلة من الباب إلى الباب مع الحقائب، أو لمجموعة تريد السفر معًا، أو حين يجب أن يوافق الموعد اجتماعًا لا جدول رحلات. ولا تبيع RideSaudi تذاكر قطار أو طيران؛ قارن الخيارات واختر ما يناسب يومك."] },
          { h: "الذهاب والعودة في اليوم نفسه والانتظار في الرياض", p: ["من الطلبات المعتادة انطلاق صباحي واجتماع في الرياض ثم عودة مسائية. ويُسعَّر وقت الانتظار ضمن الرحلة، فأخبرنا بالمدة المتوقعة لبقائك. وإن بتَّ في الرياض فيمكن إضافة العودة إلى الطلب نفسه أو طلبها لاحقًا. وإن كنت تخطط للرحلة من العاصمة فصفحة الرياض إلى الدمام مكتوبة لذلك الاتجاه."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الدمام إلى الرياض", items: ["المدينة ونقطة الاستلام بدقة: الدمام أو الخبر أو الظهران أو المطار", "العنوان في الرياض، أو موعد الرحلة إن كانت الوجهة المطار", "التاريخ ووقت الانطلاق المفضل", "عدد الركاب والحقائب", "اتجاه واحد أو عودة في اليوم نفسه أو في تاريخ آخر", "تفضيل السيارة إن وجد"] },
        faqs: [
          { q: "كم تبعد الدمام عن الرياض بالسيارة؟", a: "تذكر خرائط عامة نحو 400 إلى 415 كم وثلاث ساعات ونصف إلى أربع ساعات قيادة دون توقف. الرقم تقريبي ويتغير بحسب نقطتي الاستلام والوصول." },
          { q: "هل تستلمني السيارة من الخبر أو الظهران إلى الرياض؟", a: "يمكنك طلب الاستلام من أي من المدينتين. اذكر الفندق أو المكتب أو البوابة لتكون نقطة الانطلاق واضحة في عرض السعر." },
          { q: "هل يمكن الذهاب من مطار الملك فهد الدولي مباشرة إلى الرياض؟", a: "يمكنك طلب ذلك. أرسل رقم الرحلة ووقت الوصول؛ ومكان لقاء السائق والانتظار يُؤكَّدان في عرض السعر ولا يُفترضان." },
          { q: "هل يمكن السفر من الدمام إلى الرياض والعودة في اليوم نفسه؟", a: "يمكنك طلب ذهاب وعودة في اليوم نفسه. ويدخل وقت الانتظار في الرياض ضمن عرض السعر." },
          { q: "هل توصلونني إلى مطار الملك خالد الدولي في الرياض؟", a: "يمكنك طلب المطار وجهةً للرحلة. أرسل موعد الإقلاع ليُخطَّط الانطلاق من الدمام بهامش كافٍ." },
        ],
      },
    },
  },
  {
    path: `${I}/jeddah-to-riyadh`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/riyadh-to-jeddah`, `${I}/jeddah-to-taif`, `${I}/riyadh-to-makkah`, `${A}/jeddah-airport`, `${C}/jeddah`, `${C}/riyadh`],
    updated: U,
    copy: {
      en: {
        nav: "Jeddah to Riyadh",
        title: "Jeddah to Riyadh Private Car with Driver",
        description: "Request a private car with a driver from Jeddah or Jeddah airport to Riyadh. About 950 km by road, a full-day journey. Plan stops and get a quotation.",
        h1: "Jeddah to Riyadh by private car, from the Red Sea coast to the capital",
        eyebrow: "Intercity · Jeddah to Riyadh",
        answer: "A private Jeddah to Riyadh transfer is a pre-booked car with a driver from a Jeddah address or King Abdulaziz International Airport to Riyadh. Public mapping sources give about 950 km and around nine and a half hours of driving before stops, so it is a full-day journey. RideSaudi quotes each trip individually and confirms availability before you commit.",
        summary: "A full-day private road journey from Jeddah or its airport to Riyadh.",
        sections: [
          { h: "Who goes from Jeddah to Riyadh by road", p: ["Flying between the two cities is far quicker, and for one traveller with hand luggage it usually makes more sense. The road suits other situations: a family with more bags than an airline allows comfortably, a household moving between the two cities, travellers who prefer not to fly, and groups who want to stay together and stop when they choose. If your journey starts in Makkah after Umrah rather than in Jeddah, the Riyadh to Makkah page covers that pairing."] },
          { h: "The road heads inland past Taif", p: ["From the coast, the main highway runs inland past the Makkah area and Taif before crossing the central plateau towards Riyadh. That makes Taif a natural place to pause, or to spend a night and split the journey over two days. Say in your enquiry if you want a planned stop there; a stop changes the timing and the quotation."] },
          { h: "Starting point and timing in Jeddah", p: ["Tell us whether the car should meet you at the airport after a flight or at a home or hotel in the city. An early departure keeps most of the driving in daylight. Breaks for prayer, meals and fuel are part of a journey this long, so allow for them when you choose your arrival time rather than counting driving hours alone."] },
          { h: "Arriving in Riyadh", p: ["Give the Riyadh address and, if it is a hotel, check that it accepts a late check-in. If you only know the district, say so and confirm the address before the travel date. Starting from the capital instead? See Riyadh to Jeddah, which is written for departures from Riyadh."] },
        ],
        checklist: { h: "Include this in your Jeddah to Riyadh enquiry", items: ["Pickup: Jeddah address, or airport with flight number and arrival time", "Riyadh destination", "Date and earliest time you can leave", "Passengers, including children, and number of bags", "Planned stops, such as Taif, or an overnight break", "Whether a return journey is needed"] },
        faqs: [
          { q: "How long is the drive from Jeddah to Riyadh?", a: "Public mapping sources give about 950 km and around nine and a half hours of driving. Stops add to that, so plan for a full day." },
          { q: "Can the car pick me up at Jeddah airport and drive to Riyadh?", a: "You can request it. Send the flight number and arrival time; meeting point and waiting are confirmed in the quotation." },
          { q: "Can we break the Jeddah to Riyadh journey in Taif?", a: "You can request a stop or an overnight break in Taif. Mention it in the enquiry so it is included in the quotation." },
          { q: "Is driving from Jeddah to Riyadh better than flying?", a: "Flying is much faster. The road is chosen for heavy luggage, moving house, groups travelling together or travellers who prefer not to fly." },
          { q: "Can I start in Makkah instead of Jeddah?", a: "You can request a Makkah pickup for Riyadh. See the Riyadh to Makkah page, which covers that pair of cities in both directions." },
        ],
      },
      ar: {
        nav: "جدة إلى الرياض",
        title: "من جدة إلى الرياض: سيارة خاصة مع سائق",
        description: "اطلب سيارة خاصة بسائق من جدة أو مطار جدة إلى الرياض. نحو 950 كم بالطريق ورحلة تستغرق يومًا كاملًا. خطط للتوقفات واستلم عرض سعر.",
        h1: "من جدة إلى الرياض بسيارة خاصة، من ساحل البحر الأحمر إلى العاصمة",
        eyebrow: "بين المدن · جدة إلى الرياض",
        answer: "التوصيل الخاص من جدة إلى الرياض هو سيارة بسائق وبحجز مسبق من عنوان في جدة أو من مطار الملك عبدالعزيز الدولي إلى الرياض. وتذكر خرائط عامة نحو 950 كم وقرابة تسع ساعات ونصف من القيادة قبل التوقفات، فهي رحلة يوم كامل. تُسعِّر RideSaudi كل رحلة على حدة وتؤكد الإتاحة قبل أن تلتزم.",
        summary: "رحلة برية خاصة ليوم كامل من جدة أو مطارها إلى الرياض.",
        sections: [
          { h: "من يسافر من جدة إلى الرياض برًّا", p: ["الطيران بين المدينتين أسرع بكثير، وهو الأنسب غالبًا لمسافر واحد بحقيبة يد. أما الطريق فيناسب حالات أخرى: عائلة معها حقائب أكثر مما يسهل حمله على الطائرة، وأسرة تنتقل للسكن بين المدينتين، ومن لا يفضّل الطيران، ومجموعات تريد البقاء معًا والتوقف متى شاءت. وإن كانت رحلتك تبدأ من مكة المكرمة بعد العمرة لا من جدة، فصفحة الرياض إلى مكة تغطي ذلك."] },
          { h: "الطريق يتجه إلى الداخل مرورًا بالطائف", p: ["ينطلق الطريق السريع الرئيسي من الساحل نحو الداخل مرورًا بمنطقة مكة المكرمة والطائف ثم يعبر الهضبة الوسطى إلى الرياض. ولذلك تُعدّ الطائف محطة طبيعية للاستراحة، أو للمبيت وتقسيم الرحلة على يومين. اذكر في طلبك إن أردت توقفًا مخططًا هناك، فالتوقف يغيّر التوقيت وعرض السعر."] },
          { h: "نقطة الانطلاق والتوقيت في جدة", p: ["أخبرنا هل تلتقيك السيارة في المطار بعد رحلة طيران أم في منزل أو فندق داخل المدينة. والانطلاق المبكر يجعل أغلب القيادة في ضوء النهار. واستراحات الصلاة والطعام والوقود جزء من رحلة بهذا الطول، فاحسب حسابها عند تحديد وقت وصولك ولا تعتمد على ساعات القيادة وحدها."] },
          { h: "الوصول إلى الرياض", p: ["أرسل عنوان الوجهة في الرياض، وإن كانت فندقًا فتأكد من قبوله تسجيل الدخول المتأخر. وإن كنت تعرف الحي فقط فاذكره ثم أكّد العنوان قبل موعد السفر. وإن كان انطلاقك من العاصمة فراجع صفحة الرياض إلى جدة المكتوبة للمغادرين من الرياض."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب جدة إلى الرياض", items: ["الاستلام: عنوان في جدة، أو المطار مع رقم الرحلة ووقت الوصول", "الوجهة في الرياض", "التاريخ وأبكر وقت يمكنك الانطلاق فيه", "عدد الركاب ومنهم الأطفال وعدد الحقائب", "التوقفات المخططة مثل الطائف أو المبيت في الطريق", "هل تحتاج رحلة عودة"] },
        faqs: [
          { q: "كم تستغرق الرحلة بالسيارة من جدة إلى الرياض؟", a: "تذكر خرائط عامة نحو 950 كم وقرابة تسع ساعات ونصف من القيادة. والتوقفات تزيد على ذلك، فخطط ليوم كامل." },
          { q: "هل تستلمني السيارة من مطار جدة وتتجه إلى الرياض؟", a: "يمكنك طلب ذلك. أرسل رقم الرحلة ووقت الوصول؛ ونقطة اللقاء والانتظار يُؤكَّدان في عرض السعر." },
          { q: "هل يمكن تقسيم رحلة جدة إلى الرياض بتوقف في الطائف؟", a: "يمكنك طلب توقف أو مبيت في الطائف. اذكره في الطلب ليدخل في عرض السعر." },
          { q: "هل السفر بالسيارة من جدة إلى الرياض أفضل من الطيران؟", a: "الطيران أسرع بكثير. ويُختار الطريق عند كثرة الحقائب أو الانتقال للسكن أو سفر المجموعات معًا أو لمن لا يفضّل الطيران." },
          { q: "هل يمكن أن أبدأ من مكة المكرمة بدل جدة؟", a: "يمكنك طلب الاستلام من مكة المكرمة إلى الرياض. راجع صفحة الرياض إلى مكة التي تغطي المدينتين بالاتجاهين." },
        ],
      },
    },
  },
  {
    path: `${I}/riyadh-to-al-khobar`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/riyadh-to-dammam`, `${I}/dammam-to-riyadh`, `${C}/al-khobar`, `${C}/dhahran`, `${I}/dammam-to-bahrain`, `${C}/riyadh`],
    updated: U,
    copy: {
      en: {
        nav: "Riyadh to Al Khobar",
        title: "Riyadh to Al Khobar & Dhahran Private Car with Driver",
        description: "Request a private car with a driver from Riyadh to a hotel or office in Al Khobar or Dhahran, with the option to continue to Bahrain. Get a quotation.",
        h1: "Riyadh to Al Khobar and Dhahran by private car",
        eyebrow: "Intercity · Riyadh to the Gulf coast",
        answer: "A private Riyadh to Al Khobar transfer is a pre-booked car with a driver from Riyadh to a hotel, office or home in Al Khobar or Dhahran. Both cities sit just beyond Dammam on the Gulf coast, a little over 400 km from Riyadh by public mapping figures, around four hours of driving. RideSaudi quotes each journey individually and confirms availability first.",
        summary: "A private car from Riyadh to hotels and offices in Al Khobar and Dhahran.",
        sections: [
          { h: "How this differs from Riyadh to Dammam", p: ["The highway from Riyadh is shared with the Dammam journey for most of the way; the difference is the last stretch and the reason for travelling. Al Khobar is where many of the area's waterfront hotels are, Dhahran is where energy-sector offices and the university are, and the causeway to Bahrain begins on the Khobar side. The Riyadh to Dammam page covers the general route and the comparison with the train."] },
          { h: "Where people are dropped in Al Khobar and Dhahran", p: ["In Al Khobar, typical destinations are Corniche and waterfront hotels and the city's business towers. In Dhahran, they are company offices, King Fahd University of Petroleum and Minerals, the King Abdulaziz Center for World Culture (Ithra) and the Dhahran Expo exhibition halls. Company and residential compounds control their own entry, so arrange access with your host and tell us which gate to use."] },
          { h: "Continuing to Bahrain", p: ["Because the King Fahd Causeway starts near Al Khobar, some travellers stay a night on the Saudi side and cross the next day, and others ask for one continuous journey. Either can be requested. Entry documents are each passenger's responsibility, and whether a given vehicle and driver can cross is confirmed in the quotation; see Dammam to Bahrain."] },
          { h: "Coming back to Riyadh", p: ["A same-day return works for a single meeting; for a longer stay, request the return for another date. If you are based on the coast and travelling to the capital, the Dammam to Riyadh page is written for that direction."] },
        ],
        checklist: { h: "Include this in your Riyadh to Al Khobar enquiry", items: ["Riyadh pickup address and departure time", "Exact destination in Al Khobar or Dhahran, with gate or building", "Passengers and luggage", "Whether the car should wait, return the same day or return later", "Any onward journey to Bahrain"] },
        faqs: [
          { q: "How far is Al Khobar from Riyadh by road?", a: "A little over 400 km by public mapping figures, around four hours of driving. It is close to the Riyadh to Dammam distance, with a slightly different final stretch." },
          { q: "Can you drop me at a company office in Dhahran?", a: "You can request it. Entry to company sites is controlled by the site, so arrange your pass with your host and tell us the gate." },
          { q: "Can the same car take me from Riyadh to Al Khobar and on to Bahrain?", a: "You can request a continuous journey or a second leg the next day. Cross-border availability and documents are confirmed before you commit." },
          { q: "Can I book Riyadh to Al Khobar as a same-day return?", a: "You can request it. Tell us how long you need on the coast, since waiting time is part of the quotation." },
        ],
      },
      ar: {
        nav: "الرياض إلى الخبر",
        title: "من الرياض إلى الخبر والظهران: سيارة خاصة مع سائق",
        description: "اطلب سيارة خاصة بسائق من الرياض إلى فندق أو مكتب في الخبر أو الظهران، مع إمكانية متابعة الطريق إلى البحرين. استلم عرض سعر.",
        h1: "من الرياض إلى الخبر والظهران بسيارة خاصة",
        eyebrow: "بين المدن · من الرياض إلى ساحل الخليج",
        answer: "التوصيل الخاص من الرياض إلى الخبر هو سيارة بسائق وبحجز مسبق من الرياض إلى فندق أو مكتب أو منزل في الخبر أو الظهران. وتقع المدينتان بعد الدمام مباشرة على ساحل الخليج، على بعد يزيد قليلًا على 400 كم من الرياض بحسب خرائط عامة، أي نحو أربع ساعات قيادة. تُسعِّر RideSaudi كل رحلة على حدة وتؤكد الإتاحة أولًا.",
        summary: "سيارة خاصة من الرياض إلى فنادق ومكاتب الخبر والظهران.",
        sections: [
          { h: "ما الفرق عن رحلة الرياض إلى الدمام", p: ["الطريق السريع من الرياض مشترك مع رحلة الدمام في معظمه، والفرق في الجزء الأخير وفي سبب السفر. ففي الخبر كثير من فنادق الواجهة البحرية، وفي الظهران مكاتب قطاع الطاقة والجامعة، ومن جهة الخبر يبدأ الجسر إلى البحرين. أما صفحة الرياض إلى الدمام فتغطي الطريق عمومًا والمقارنة بالقطار."] },
          { h: "أين يُنزَل الركاب في الخبر والظهران", p: ["في الخبر تكون الوجهات المعتادة فنادق الكورنيش والواجهة البحرية وأبراج الأعمال. وفي الظهران مكاتب الشركات وجامعة الملك فهد للبترول والمعادن ومركز الملك عبدالعزيز الثقافي العالمي (إثراء) وصالات معارض الظهران. وتتحكم المجمعات السكنية ومقار الشركات في الدخول إليها، فرتّب الدخول مع مضيفك وأخبرنا بالبوابة المطلوبة."] },
          { h: "متابعة الطريق إلى البحرين", p: ["لأن جسر الملك فهد يبدأ قرب الخبر، يبيت بعض المسافرين ليلة في الجانب السعودي ويعبرون في اليوم التالي، ويطلب آخرون رحلة واحدة متصلة. ويمكن طلب أي من الخيارين. ووثائق الدخول مسؤولية كل راكب، وإمكانية عبور مركبة وسائق محددين تُؤكَّد في عرض السعر؛ راجع صفحة الدمام إلى البحرين."] },
          { h: "العودة إلى الرياض", p: ["تناسب العودة في اليوم نفسه اجتماعًا واحدًا؛ وللإقامة الأطول اطلب العودة في تاريخ آخر. وإن كنت مقيمًا على الساحل ومسافرًا إلى العاصمة فصفحة الدمام إلى الرياض مكتوبة لذلك الاتجاه."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الرياض إلى الخبر", items: ["عنوان الاستلام في الرياض ووقت الانطلاق", "الوجهة بدقة في الخبر أو الظهران مع البوابة أو المبنى", "الركاب والحقائب", "هل تنتظر السيارة أم تعود في اليوم نفسه أم في تاريخ لاحق", "أي متابعة للرحلة إلى البحرين"] },
        faqs: [
          { q: "كم تبعد الخبر عن الرياض بالسيارة؟", a: "ما يزيد قليلًا على 400 كم بحسب خرائط عامة، ونحو أربع ساعات قيادة. وهي قريبة من مسافة الرياض إلى الدمام مع اختلاف يسير في الجزء الأخير." },
          { q: "هل توصلونني إلى مكتب شركة في الظهران؟", a: "يمكنك طلب ذلك. الدخول إلى مواقع الشركات يحدده الموقع نفسه، فرتّب تصريحك مع مضيفك وأخبرنا بالبوابة." },
          { q: "هل تأخذني السيارة نفسها من الرياض إلى الخبر ثم إلى البحرين؟", a: "يمكنك طلب رحلة متصلة أو مرحلة ثانية في اليوم التالي. وتُؤكَّد إتاحة العبور والوثائق قبل أن تلتزم." },
          { q: "هل يمكن حجز الرياض إلى الخبر ذهابًا وعودة في اليوم نفسه؟", a: "يمكنك طلب ذلك. أخبرنا بالمدة التي تحتاجها على الساحل لأن وقت الانتظار جزء من عرض السعر." },
        ],
      },
    },
  },
  {
    path: `${I}/dammam-to-doha`,
    parent: `${X}/qatar`,
    variant: "default",
    service: "intercity",
    related: [`${X}/qatar`, `${I}/riyadh-to-doha`, `${I}/dammam-to-bahrain`, `${C}/al-ahsa`, `${C}/dammam`, `${A}/dammam-airport`],
    updated: U,
    copy: {
      en: {
        nav: "Dammam to Doha",
        title: "Dammam to Doha Private Transfer via Salwa",
        description: "Request a private car with a driver from Dammam, Al Khobar or Dhahran to Doha through the Salwa and Abu Samra crossing, and back. Get a RideSaudi quotation.",
        h1: "Dammam and Al Khobar to Doha by private car",
        eyebrow: "Cross-border · Eastern Province to Qatar",
        answer: "A private Dammam to Doha transfer is a pre-booked car with a driver from Dammam, Al Khobar or Dhahran to Doha by road, crossing at Salwa on the Saudi side and Abu Samra on the Qatari side. Public sources vary from about 330 to 410 km, three and a half to five hours before border time. RideSaudi quotes each journey individually; documents are yours to check.",
        summary: "A private road transfer from the Eastern Province to Doha through the Salwa crossing.",
        sections: [
          { h: "The closest large Saudi starting point for Qatar", p: ["The Eastern Province is considerably nearer to Qatar than Riyadh is, which is why most road journeys to Doha begin in Dammam, Al Khobar, Dhahran or Al Ahsa. From the coast the road runs south through the Al Ahsa area to Salwa. Travellers starting in the capital should read Riyadh to Doha, which covers the longer drive."] },
          { h: "One crossing: Salwa and Abu Samra", p: ["Qatar has a single land border, and this route uses it. A public logistics source places the Abu Samra post about 90 km from Doha. Processing time at the border changes with the day, the hour and the season, and we do not publish a crossing time. If you have a fixed commitment in Doha, leave more margin than the driving time alone suggests."] },
          { h: "Documents and vehicle permission", p: ["Entry rules for Qatar and re-entry rules for Saudi Arabia depend on nationality, residency and purpose, and they change. RideSaudi does not issue visas or permits and cannot confirm eligibility; check each passenger's position with the official Qatari and Saudi authorities. Whether a particular vehicle and driver can cross is confirmed in your quotation, never assumed."] },
          { h: "Where you are going in Doha, and the way back", p: ["Tell us the Doha destination: Hamad International Airport, a hotel in West Bay, Lusail, The Pearl or a private address. For a flight, send the departure time. The return from Doha to Dammam, Al Khobar or Dhahran can be added to the same enquiry or requested separately."] },
        ],
        checklist: { h: "Include this in your Dammam to Doha enquiry", items: ["Direction, date and preferred departure time", "Exact Saudi pickup and Doha destination", "Nationality and residency status of each passenger", "Passengers and luggage", "Flight time if you are heading to Hamad International Airport", "Return date, if known"] },
        faqs: [
          { q: "How far is Dammam from Doha by road?", a: "Public sources range from about 330 to 410 km and three and a half to five hours of driving, plus border time. Treat every figure as approximate." },
          { q: "Which crossing does the Dammam to Doha road use?", a: "Salwa on the Saudi side and Abu Samra on the Qatari side. It is Qatar's only land border." },
          { q: "Can you take me from Al Khobar to Hamad International Airport?", a: "You can request it. Share the flight time so the departure allows for the border; availability is confirmed in the quotation." },
          { q: "Is Dammam to Doha realistic as a day trip?", a: "The driving distance allows it, but border time is unpredictable. You can request a same-day return; waiting time is quoted." },
          { q: "Can you collect me in Doha and bring me to Dammam?", a: "You can request the journey in that direction from a Doha hotel, home or the airport. Saudi entry requirements apply to every passenger." },
        ],
      },
      ar: {
        nav: "الدمام إلى الدوحة",
        title: "من الدمام إلى الدوحة: توصيل خاص عبر منفذ سلوى",
        description: "اطلب سيارة خاصة بسائق من الدمام أو الخبر أو الظهران إلى الدوحة عبر منفذ سلوى وأبو سمرة، والعودة أيضًا. استلم عرض سعر من RideSaudi.",
        h1: "من الدمام والخبر إلى الدوحة بسيارة خاصة",
        eyebrow: "عبر الحدود · من المنطقة الشرقية إلى قطر",
        answer: "التوصيل الخاص من الدمام إلى الدوحة هو سيارة بسائق وبحجز مسبق من الدمام أو الخبر أو الظهران إلى الدوحة برًّا، عبر منفذ سلوى من الجانب السعودي وأبو سمرة من الجانب القطري. وتتفاوت المصادر العامة بين نحو 330 و410 كم، أي ثلاث ساعات ونصف إلى خمس ساعات قبل وقت المنفذ. تُسعِّر RideSaudi كل رحلة على حدة؛ والوثائق عليك التحقق منها.",
        summary: "رحلة برية خاصة من المنطقة الشرقية إلى الدوحة عبر منفذ سلوى.",
        sections: [
          { h: "أقرب نقطة انطلاق سعودية كبيرة إلى قطر", p: ["المنطقة الشرقية أقرب إلى قطر من الرياض بفارق واضح، ولهذا تبدأ أغلب الرحلات البرية إلى الدوحة من الدمام أو الخبر أو الظهران أو الأحساء. ويتجه الطريق من الساحل جنوبًا عبر منطقة الأحساء إلى سلوى. ومن ينطلق من العاصمة فليقرأ صفحة الرياض إلى الدوحة التي تغطي الطريق الأطول."] },
          { h: "منفذ واحد: سلوى وأبو سمرة", p: ["لقطر منفذ بري واحد، وهذا المسار يمر به. ويذكر مصدر لوجستي عام أن منفذ أبو سمرة يبعد نحو 90 كم عن الدوحة. ويتغير زمن الإجراءات في المنفذ باليوم والساعة والموسم، ولا ننشر زمنًا للعبور. وإن كان لديك موعد ثابت في الدوحة فاترك هامشًا أكبر مما توحي به ساعات القيادة وحدها."] },
          { h: "الوثائق وتصريح المركبة", p: ["تعتمد شروط دخول قطر وشروط العودة إلى السعودية على الجنسية والإقامة والغرض، وهي تتغير. ولا تصدر RideSaudi تأشيرات أو تصاريح ولا تستطيع تأكيد الأهلية؛ فتحقق من وضع كل راكب لدى الجهات الرسمية القطرية والسعودية. وإمكانية عبور مركبة وسائق محددين تُؤكَّد في عرض السعر ولا تُفترض أبدًا."] },
          { h: "وجهتك في الدوحة وطريق العودة", p: ["أخبرنا بوجهتك في الدوحة: مطار حمد الدولي، أو فندق في الخليج الغربي، أو لوسيل، أو اللؤلؤة، أو عنوان خاص. وللرحلات الجوية أرسل موعد الإقلاع. ويمكن إضافة العودة من الدوحة إلى الدمام أو الخبر أو الظهران إلى الطلب نفسه أو طلبها منفصلة."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الدمام إلى الدوحة", items: ["الاتجاه والتاريخ ووقت الانطلاق المفضل", "عنوان الاستلام في السعودية والوجهة في الدوحة بدقة", "جنسية كل راكب وحالة إقامته", "الركاب والحقائب", "موعد الرحلة إن كانت الوجهة مطار حمد الدولي", "تاريخ العودة إن عُرف"] },
        faqs: [
          { q: "كم تبعد الدمام عن الدوحة بالسيارة؟", a: "تتراوح المصادر العامة بين نحو 330 و410 كم وثلاث ساعات ونصف إلى خمس ساعات قيادة، يضاف إليها وقت المنفذ. اعتبر كل رقم تقريبيًا." },
          { q: "أي منفذ يمر به طريق الدمام إلى الدوحة؟", a: "منفذ سلوى من الجانب السعودي وأبو سمرة من الجانب القطري، وهو المنفذ البري الوحيد لقطر." },
          { q: "هل توصلونني من الخبر إلى مطار حمد الدولي؟", a: "يمكنك طلب ذلك. أرسل موعد الرحلة ليحسب الانطلاق حساب المنفذ؛ وتُؤكَّد الإتاحة في عرض السعر." },
          { q: "هل يمكن الذهاب من الدمام إلى الدوحة والعودة في يوم واحد؟", a: "مسافة القيادة تسمح بذلك، لكن وقت المنفذ غير متوقع. يمكنك طلب عودة في اليوم نفسه، ويُسعَّر وقت الانتظار." },
          { q: "هل تستلمونني من الدوحة إلى الدمام؟", a: "يمكنك طلب الرحلة بهذا الاتجاه من فندق أو منزل في الدوحة أو من المطار. وتنطبق شروط دخول السعودية على كل راكب." },
        ],
      },
    },
  },
  {
    path: `${I}/dammam-to-dubai`,
    parent: `${X}/uae`,
    variant: "default",
    service: "intercity",
    related: [`${X}/uae`, `${I}/riyadh-to-dubai`, `${I}/riyadh-to-abu-dhabi`, `${I}/dammam-to-doha`, `${C}/dammam`],
    updated: U,
    copy: {
      en: {
        nav: "Dammam to Dubai",
        title: "Dammam to Dubai Private Transfer by Road",
        description: "Request a private car with a driver from Dammam, Al Khobar or Dhahran to Dubai through the Batha crossing. About 880 km by road. Get a RideSaudi quotation.",
        h1: "Dammam to Dubai by private car, down the Gulf to the Batha crossing",
        eyebrow: "Cross-border · Eastern Province to the UAE",
        answer: "A private Dammam to Dubai transfer is a pre-booked car with a driver from Dammam, Al Khobar or Dhahran to Dubai by road, leaving Saudi Arabia at Batha and entering the UAE at Ghuwaifat. Route calculators mostly give about 880 km and nine to nine and a half hours of driving before border time. RideSaudi quotes each journey individually; documents are yours to confirm.",
        summary: "A long private road journey from the Eastern Province to Dubai through Batha.",
        sections: [
          { h: "What the journey involves", p: ["From the Eastern Province the road runs south through the Al Ahsa area to the Batha crossing, then enters the UAE at Ghuwaifat and continues across the emirate of Abu Dhabi to Dubai. It is a full day on the road. The figures above come from public route calculators, which differ from one another, and they exclude the time spent at the border."] },
          { h: "Road or flight from Dammam", p: ["Flights between Dammam and Dubai are short, and for most single travellers flying is the practical choice. The road is requested by families carrying more than an airline allowance, by people who prefer not to fly, and by groups who want one vehicle from door to door. Decide with the whole day in mind, not the distance alone."] },
          { h: "Timing, breaks and an Abu Dhabi stop", p: ["An early start keeps the border crossing in daytime. Plan breaks for prayer, meals and fuel. Abu Dhabi lies on the way, so you can ask to be dropped there instead of Dubai or to stop there overnight and continue the next day; say which in the enquiry so the quotation matches the plan."] },
          { h: "Documents and vehicle permission", p: ["UAE entry and Saudi re-entry rules depend on nationality, residency and purpose. RideSaudi does not arrange visas and cannot confirm eligibility; check with the official UAE and Saudi authorities for every passenger. Whether a specific vehicle and driver can make the crossing is confirmed in the quotation before you commit."] },
        ],
        checklist: { h: "Include this in your Dammam to Dubai enquiry", items: ["Direction, date and earliest departure time", "Exact Saudi pickup and UAE destination", "Nationality and residency status of each passenger", "Passengers, children and luggage", "Planned stops or an overnight break", "Return date, if any"] },
        faqs: [
          { q: "How far is Dammam from Dubai by road?", a: "Most public route calculators give about 880 km and nine to nine and a half hours of driving, before border time. Sources differ, so treat it as approximate." },
          { q: "Can I be dropped in Abu Dhabi instead of Dubai on the Dammam route?", a: "You can request Abu Dhabi as the destination or as a stop. It lies on the way, so the journey is shorter than going on to Dubai." },
          { q: "Is one day enough for Dammam to Dubai by car?", a: "It is a full day of driving plus the border. You can request an overnight stop if you prefer to split it." },
          { q: "Can you pick me up in Dubai and bring me to Al Khobar?", a: "You can request the journey in that direction. Saudi entry requirements apply to every passenger." },
          { q: "Do you sort out UAE entry for a Dammam departure?", a: "No. RideSaudi does not issue visas or permits; check entry requirements with the official authorities." },
        ],
      },
      ar: {
        nav: "الدمام إلى دبي",
        title: "من الدمام إلى دبي: توصيل خاص بالطريق البري",
        description: "اطلب سيارة خاصة بسائق من الدمام أو الخبر أو الظهران إلى دبي عبر منفذ البطحاء. نحو 880 كم بالطريق. استلم عرض سعر من RideSaudi.",
        h1: "من الدمام إلى دبي بسيارة خاصة عبر منفذ البطحاء",
        eyebrow: "عبر الحدود · من المنطقة الشرقية إلى الإمارات",
        answer: "التوصيل الخاص من الدمام إلى دبي هو سيارة بسائق وبحجز مسبق من الدمام أو الخبر أو الظهران إلى دبي برًّا، بالخروج من السعودية عبر منفذ البطحاء والدخول إلى الإمارات عبر الغويفات. وتذكر أغلب حاسبات المسافات نحو 880 كم وتسع ساعات إلى تسع ساعات ونصف من القيادة قبل وقت المنفذ. تُسعِّر RideSaudi كل رحلة على حدة؛ والوثائق عليك التحقق منها.",
        summary: "رحلة برية خاصة طويلة من المنطقة الشرقية إلى دبي عبر البطحاء.",
        sections: [
          { h: "ما الذي تتضمنه الرحلة", p: ["يتجه الطريق من المنطقة الشرقية جنوبًا عبر منطقة الأحساء إلى منفذ البطحاء، ثم يدخل الإمارات عبر الغويفات ويتابع عبر إمارة أبوظبي إلى دبي. وهي رحلة يوم كامل على الطريق. والأرقام أعلاه من حاسبات مسافات عامة تختلف فيما بينها، ولا تشمل الوقت في المنفذ."] },
          { h: "الطريق أم الطيران من الدمام", p: ["رحلات الطيران بين الدمام ودبي قصيرة، والطيران هو الخيار العملي لأغلب المسافرين الأفراد. ويطلب الطريقَ العائلاتُ التي تحمل أكثر من وزن الطائرة المسموح، ومن لا يفضّل الطيران، والمجموعات التي تريد مركبة واحدة من الباب إلى الباب. فاتخذ قرارك بالنظر إلى اليوم كله لا إلى المسافة وحدها."] },
          { h: "التوقيت والاستراحات والتوقف في أبوظبي", p: ["الانطلاق المبكر يجعل عبور المنفذ نهارًا. وخطط لاستراحات الصلاة والطعام والوقود. وأبوظبي على الطريق، فيمكنك طلب النزول فيها بدل دبي أو المبيت فيها ثم المتابعة في اليوم التالي؛ واذكر ذلك في الطلب ليطابق عرض السعر خطتك."] },
          { h: "الوثائق وتصريح المركبة", p: ["تعتمد شروط دخول الإمارات والعودة إلى السعودية على الجنسية والإقامة والغرض. ولا ترتّب RideSaudi التأشيرات ولا تستطيع تأكيد الأهلية؛ فتحقق لدى الجهات الرسمية الإماراتية والسعودية عن كل راكب. وإمكانية عبور مركبة وسائق محددين تُؤكَّد في عرض السعر قبل أن تلتزم."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الدمام إلى دبي", items: ["الاتجاه والتاريخ وأبكر وقت للانطلاق", "عنوان الاستلام في السعودية والوجهة في الإمارات بدقة", "جنسية كل راكب وحالة إقامته", "الركاب والأطفال والحقائب", "التوقفات المخططة أو المبيت في الطريق", "تاريخ العودة إن وجد"] },
        faqs: [
          { q: "كم تبعد الدمام عن دبي بالسيارة؟", a: "تذكر أغلب حاسبات المسافات العامة نحو 880 كم وتسع ساعات إلى تسع ساعات ونصف من القيادة قبل وقت المنفذ. وتختلف المصادر، فاعتبر الرقم تقريبيًا." },
          { q: "هل يمكن النزول في أبوظبي بدل دبي في رحلة الدمام؟", a: "يمكنك طلب أبوظبي وجهةً أو محطة توقف. وهي على الطريق، فتكون الرحلة أقصر من المتابعة إلى دبي." },
          { q: "هل يكفي يوم واحد للسفر من الدمام إلى دبي بالسيارة؟", a: "هي قيادة يوم كامل يضاف إليها المنفذ. ويمكنك طلب مبيت في الطريق إن فضّلت تقسيمها." },
          { q: "هل تستلمونني من دبي إلى الخبر؟", a: "يمكنك طلب الرحلة بهذا الاتجاه. وتنطبق شروط دخول السعودية على كل راكب." },
          { q: "هل ترتبون دخول الإمارات للمسافر من الدمام؟", a: "لا. لا تصدر RideSaudi تأشيرات أو تصاريح؛ تحقق من شروط الدخول لدى الجهات الرسمية." },
        ],
      },
    },
  },
  {
    path: `${I}/riyadh-to-abu-dhabi`,
    parent: `${X}/uae`,
    variant: "default",
    service: "intercity",
    related: [`${X}/uae`, `${I}/riyadh-to-dubai`, `${I}/dammam-to-dubai`, `${A}/riyadh-airport`, `${C}/riyadh`],
    updated: U,
    copy: {
      en: {
        nav: "Riyadh to Abu Dhabi",
        title: "Riyadh to Abu Dhabi Private Transfer by Road",
        description: "Request a private car with a driver from Riyadh to Abu Dhabi through the Batha and Ghuwaifat crossing, and back. Plan the day and get a quotation.",
        h1: "Riyadh to Abu Dhabi by private car",
        eyebrow: "Cross-border · Riyadh to the UAE capital",
        answer: "A private Riyadh to Abu Dhabi transfer is a pre-booked car with a driver from Riyadh to Abu Dhabi by road, crossing from Saudi Arabia at Batha into the UAE at Ghuwaifat. Public sources disagree on the distance, roughly 900 to 1,000 km, which is a full day on the road before border time. RideSaudi quotes each journey individually and confirms availability first.",
        summary: "A full-day private road journey from Riyadh to Abu Dhabi through the Batha crossing.",
        sections: [
          { h: "The first UAE city on the road from Riyadh", p: ["Riyadh to Abu Dhabi and Riyadh to Dubai share the same road as far as the UAE: east and south from the capital to Batha, across the border at Ghuwaifat, then along the coast of the emirate of Abu Dhabi. Abu Dhabi city comes first, and Dubai is further on, so this is the shorter of the two journeys. If Dubai is your real destination, read Riyadh to Dubai."] },
          { h: "Where you are going in Abu Dhabi", p: ["Name the destination: Zayed International Airport, a hotel on the Corniche, Yas Island, Saadiyat Island or a private address. Al Ain or an onward leg to Dubai can be requested as well, and each changes the distance and the quotation."] },
          { h: "Planning the day", p: ["Leave early, so that the border falls in daytime and you arrive before late evening. Breaks for prayer, meals and fuel belong in the plan. Border processing time varies and is not something we publish or promise. For a flight from Abu Dhabi on the same day, build in a wide margin or travel the day before."] },
          { h: "Documents, vehicle permission and the return", p: ["Entry rules depend on nationality, residency and purpose; check each passenger's requirements with the official UAE and Saudi authorities, as RideSaudi does not issue visas. Whether a specific vehicle and driver can cross is confirmed in the quotation. The journey from Abu Dhabi back to Riyadh can be requested in the same enquiry."] },
        ],
        checklist: { h: "Include this in your Riyadh to Abu Dhabi enquiry", items: ["Direction, date and earliest departure time", "Riyadh pickup and exact Abu Dhabi destination", "Nationality and residency status of each passenger", "Passengers and luggage", "Flight time if you are heading to Zayed International Airport", "Onward leg to Dubai or Al Ain, and any return"] },
        faqs: [
          { q: "How far is Riyadh from Abu Dhabi by road?", a: "Public sources disagree, giving roughly 900 to 1,000 km. Plan for a full day of driving plus border time and check a current map before you travel." },
          { q: "Is Riyadh to Abu Dhabi shorter than Riyadh to Dubai?", a: "Yes. Both use the same road and crossing, and Abu Dhabi is reached before Dubai." },
          { q: "Can you drop me at Zayed International Airport in Abu Dhabi?", a: "You can request the airport as the destination. Share the flight time and allow a wide margin for the border." },
          { q: "Can the car continue from Abu Dhabi to Dubai later?", a: "You can request an onward leg on the same day or another day. It is quoted with the rest of the journey." },
          { q: "Can you bring me from Abu Dhabi to Riyadh?", a: "You can request the journey in that direction from an Abu Dhabi hotel, home or the airport." },
        ],
      },
      ar: {
        nav: "الرياض إلى أبوظبي",
        title: "من الرياض إلى أبوظبي: توصيل خاص بالطريق البري",
        description: "اطلب سيارة خاصة بسائق من الرياض إلى أبوظبي عبر منفذ البطحاء والغويفات، والعودة أيضًا. خطط ليوم السفر واستلم عرض سعر.",
        h1: "من الرياض إلى أبوظبي بسيارة خاصة",
        eyebrow: "عبر الحدود · من الرياض إلى العاصمة الإماراتية",
        answer: "التوصيل الخاص من الرياض إلى أبوظبي هو سيارة بسائق وبحجز مسبق من الرياض إلى أبوظبي برًّا، بالعبور من السعودية عبر منفذ البطحاء إلى الإمارات عبر الغويفات. وتختلف المصادر العامة في المسافة بين نحو 900 و1000 كم، وهي رحلة يوم كامل على الطريق قبل وقت المنفذ. تُسعِّر RideSaudi كل رحلة على حدة وتؤكد الإتاحة أولًا.",
        summary: "رحلة برية خاصة ليوم كامل من الرياض إلى أبوظبي عبر منفذ البطحاء.",
        sections: [
          { h: "أول مدينة إماراتية على الطريق من الرياض", p: ["تشترك رحلتا الرياض إلى أبوظبي والرياض إلى دبي في الطريق نفسه حتى الإمارات: شرقًا وجنوبًا من العاصمة إلى البطحاء، ثم عبور الحدود عند الغويفات، ثم على ساحل إمارة أبوظبي. وتأتي مدينة أبوظبي أولًا ثم دبي بعدها، فهذه أقصر الرحلتين. وإن كانت دبي وجهتك الفعلية فاقرأ صفحة الرياض إلى دبي."] },
          { h: "وجهتك في أبوظبي", p: ["حدّد الوجهة: مطار زايد الدولي، أو فندق على الكورنيش، أو جزيرة ياس، أو جزيرة السعديات، أو عنوان خاص. ويمكن طلب العين أو متابعة الطريق إلى دبي أيضًا، وكل منهما يغيّر المسافة وعرض السعر."] },
          { h: "التخطيط ليوم السفر", p: ["انطلق مبكرًا ليكون المنفذ نهارًا وتصل قبل ساعة متأخرة من المساء. واستراحات الصلاة والطعام والوقود جزء من الخطة. وزمن الإجراءات في المنفذ متغير ولا ننشره ولا نعد به. وإن كانت لديك رحلة طيران من أبوظبي في اليوم نفسه فاترك هامشًا واسعًا أو سافر قبلها بيوم."] },
          { h: "الوثائق وتصريح المركبة والعودة", p: ["تعتمد شروط الدخول على الجنسية والإقامة والغرض؛ فتحقق من متطلبات كل راكب لدى الجهات الرسمية الإماراتية والسعودية، إذ لا تصدر RideSaudi تأشيرات. وإمكانية عبور مركبة وسائق محددين تُؤكَّد في عرض السعر. ويمكن طلب رحلة العودة من أبوظبي إلى الرياض في الطلب نفسه."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الرياض إلى أبوظبي", items: ["الاتجاه والتاريخ وأبكر وقت للانطلاق", "عنوان الاستلام في الرياض والوجهة في أبوظبي بدقة", "جنسية كل راكب وحالة إقامته", "الركاب والحقائب", "موعد الرحلة إن كانت الوجهة مطار زايد الدولي", "متابعة الطريق إلى دبي أو العين، وأي رحلة عودة"] },
        faqs: [
          { q: "كم تبعد الرياض عن أبوظبي بالسيارة؟", a: "تختلف المصادر العامة وتذكر نحو 900 إلى 1000 كم. خطط ليوم كامل من القيادة مع وقت المنفذ وراجع خريطة حديثة قبل السفر." },
          { q: "هل الرياض إلى أبوظبي أقصر من الرياض إلى دبي؟", a: "نعم. الرحلتان على الطريق والمنفذ نفسيهما، وأبوظبي تسبق دبي على الطريق." },
          { q: "هل توصلونني إلى مطار زايد الدولي في أبوظبي؟", a: "يمكنك طلب المطار وجهةً للرحلة. أرسل موعد الإقلاع واترك هامشًا واسعًا للمنفذ." },
          { q: "هل تتابع السيارة من أبوظبي إلى دبي لاحقًا؟", a: "يمكنك طلب مرحلة إضافية في اليوم نفسه أو في يوم آخر، وتُسعَّر مع بقية الرحلة." },
          { q: "هل تعيدونني من أبوظبي إلى الرياض؟", a: "يمكنك طلب الرحلة بهذا الاتجاه من فندق أو منزل في أبوظبي أو من المطار." },
        ],
      },
    },
  },
];
