import type { Locale } from "@/i18n/routing";
import type { Section, ServicePage } from "./types";

/**
 * Content enrichment for the city transport pages (thin-page fix, 2026-11-21).
 * Rules: place names and settings are general public knowledge; no prices, no distances (road facts live on the route
 * pages and in docs/phase1/ROUTE_GEOGRAPHY_MASTER.csv), no availability or fleet claims. Each city gets its own angle.
 */
const U = "2026-11-21";
const C = "services/city-transport";
type Add = { sections: Section[]; faqs: { q: string; a: string }[] };

export const cityEnrichments: Record<string, Record<Locale, Add>> = {
  [`${C}/al-khobar`]: {
    en: {
      sections: [
        { h: "Where Al Khobar journeys usually start", p: ["Most requests begin at a hotel or apartment on the Corniche, in the Thuqbah business district around Prince Turki Street, or in Rakah and Aqrabiyah, and end at offices in Dhahran, the Aramco area, the King Fahd Causeway or the airport. Al Khobar, Dhahran and Dammam run into one another, so give the exact district or a map pin and the quotation will match the real journey."] },
        { h: "Airport and causeway timing", p: ["King Fahd International Airport serves the whole Eastern Province and lies outside the built-up area, so plan the transfer as a proper journey, not a short hop. The King Fahd Causeway to Bahrain starts on the Khobar side. Border queues are outside anyone's control and travellers must carry valid documents, so leave generous margin; see cross-border transfers for the checklist."] },
        { h: "Heat, dust and weekends", p: ["Summer afternoons on the Gulf coast are hot and humid, and spring dust can cut visibility. Evenings on the Corniche are busiest on Fridays and Saturdays. Tell us the hour you need the car and the driver can plan around the traffic."] },
      ],
      faqs: [
        { q: "Can one enquiry cover pickup in Al Khobar and drop-off in Dammam or Dhahran?", a: "Yes. The three cities join up, so name both districts in one enquiry and the quotation covers the whole trip." },
        { q: "Can I request a trip to Bahrain from Al Khobar?", a: "You can request it. Each cross-border journey is quoted on its own, and passports, visas and entry permission are the traveller's responsibility." },
      ],
    },
    ar: {
      sections: [
        { h: "من أين تنطلق رحلات الخبر عادةً", p: ["تبدأ أغلب الطلبات من فندق أو شقة على الكورنيش، أو من حي الثقبة التجاري حول شارع الأمير تركي، أو من الراكة والعقربية، وتنتهي في مكاتب الظهران ومنطقة أرامكو أو جسر الملك فهد أو المطار. والخبر والظهران والدمام مدن متصلة، فاذكر الحي بدقة أو أرسل موقعًا على الخريطة ليأتي عرض السعر على قدر الرحلة الفعلية."] },
        { h: "توقيت المطار والجسر", p: ["يخدم مطار الملك فهد الدولي المنطقة الشرقية كلها ويقع خارج النطاق العمراني، فخطّط للتوصيل على أنه رحلة كاملة لا مشوارًا قصيرًا. ويبدأ جسر الملك فهد المتجه إلى البحرين من جهة الخبر. وطوابير المنفذ خارجة عن إرادة الجميع ويلزم المسافر حمل وثائق سارية، فاترك وقتًا كافيًا، وراجع صفحة التوصيل عبر الحدود."] },
        { h: "الحر والغبار وعطلة نهاية الأسبوع", p: ["تكون ظهيرة الصيف على ساحل الخليج حارة ورطبة، وقد يقلل غبار الربيع من الرؤية. وتزدحم الكورنيش مساءً في الجمعة والسبت. أخبرنا بالساعة التي تحتاج فيها السيارة ليخطط السائق وفق حركة المرور."] },
      ],
      faqs: [
        { q: "هل يكفي طلب واحد للانطلاق من الخبر والوصول إلى الدمام أو الظهران؟", a: "نعم. المدن الثلاث متصلة، فاذكر الحيين في طلب واحد ويشمل عرض السعر الرحلة كاملة." },
        { q: "هل يمكنني طلب رحلة إلى البحرين من الخبر؟", a: "يمكنك ذلك. تُسعَّر كل رحلة عبر الحدود على حدة، وجوازات السفر والتأشيرات وإذن الدخول مسؤولية المسافر." },
      ],
    },
  },
  [`${C}/dammam`]: {
    en: {
      sections: [
        { h: "Dammam trips by purpose", p: ["Dammam requests fall into a few kinds: business visits to offices and the port and industrial areas, hotel and Corniche transfers for visitors, and family trips across the Eastern Province. Say which one you need, because a day of meetings across several districts is planned differently from a single airport run."] },
        { h: "The airport side of the city", p: ["King Fahd International Airport (DMM) is the Eastern Province's main airport and is some distance from the city centre. For arrivals, send the flight number so the pickup can be matched to the landing time; for departures, tell us your check-in time and terminal if you know it."] },
        { h: "Working week and peak hours", p: ["Government and office traffic is heaviest at the start and end of the working day, and the Corniche is lively at weekends. If you must be somewhere by a fixed time, give us the appointment time rather than the pickup time and we will work back from it."] },
      ],
      faqs: [
        { q: "Is Dammam the right page if I am staying in Al Khobar?", a: "Use whichever city you start in. If your hotel is in Al Khobar and your meeting is in Dammam, name both places in one enquiry." },
        { q: "Can I book a driver for a full day of meetings in Dammam?", a: "Yes. Send the meeting times and districts, and the quotation covers the day. See chauffeur services for how a day booking works." },
      ],
    },
    ar: {
      sections: [
        { h: "رحلات الدمام بحسب الغرض", p: ["تنقسم طلبات الدمام إلى أنواع قليلة: زيارات عمل إلى المكاتب والميناء والمناطق الصناعية، وتوصيل من الفنادق والكورنيش للزوار، ورحلات عائلية في أنحاء المنطقة الشرقية. اذكر الغرض، فيوم اجتماعات في عدة أحياء يُخطَّط بطريقة تختلف عن مشوار واحد إلى المطار."] },
        { h: "جهة المطار في المدينة", p: ["مطار الملك فهد الدولي (DMM) هو المطار الرئيس في المنطقة الشرقية ويبعد عن وسط المدينة. وللوصول أرسل رقم الرحلة ليُضبط الاستقبال مع وقت الهبوط، وللمغادرة أخبرنا بموعد إنهاء الإجراءات والصالة إن عرفتها."] },
        { h: "أسبوع العمل وأوقات الذروة", p: ["تشتد الحركة في بداية الدوام ونهايته، وتنشط الكورنيش في عطلة نهاية الأسبوع. وإذا كان عليك الوصول في وقت محدد فاذكر موعد الاجتماع لا موعد الانطلاق، ونحسب الوقت رجوعًا منه."] },
      ],
      faqs: [
        { q: "هل صفحة الدمام مناسبة إن كنت مقيمًا في الخبر؟", a: "استخدم المدينة التي تنطلق منها. وإذا كان فندقك في الخبر واجتماعك في الدمام فاذكر المكانين في طلب واحد." },
        { q: "هل يمكنني حجز سائق ليوم كامل من الاجتماعات في الدمام؟", a: "نعم. أرسل أوقات الاجتماعات والأحياء ويشمل عرض السعر اليوم كاملًا. وراجع صفحة السائق الخاص لمعرفة آلية حجز اليوم." },
      ],
    },
  },
  [`${C}/jubail`]: {
    en: {
      sections: [
        { h: "Two Jubails: the industrial city and the old town", p: ["Jubail Industrial City is a planned industrial area with plants, contractor camps and company offices, while Jubail's older town sits on the coast with its Corniche and hotels. They are different places, so state which you mean and the gate, camp or hotel name for site pickups."] },
        { h: "Site access and paperwork", p: ["Industrial sites usually control who may enter. If a pickup or drop-off is inside a plant or camp, tell us early so the access arrangements can be checked with your host. We confirm what can be arranged in the quotation rather than promise entry."] },
        { h: "Linking Jubail with the Eastern Province", p: ["Jubail lies north of Dammam on the Gulf coast, and many trips combine it with Dammam, Al Khobar or the airport. A multi-stop day is cheaper to plan once than as separate rides, so send every stop in one enquiry."] },
      ],
      faqs: [
        { q: "Can you pick me up inside an industrial site or camp?", a: "Name the site and your host. Whether the car can enter is confirmed in the quotation, since access is controlled by the site." },
        { q: "Can I go from Jubail to Dammam airport in one booking?", a: "Yes. Send your flight details and pickup point and the transfer is quoted individually." },
      ],
    },
    ar: {
      sections: [
        { h: "جبيلان: المدينة الصناعية والبلدة القديمة", p: ["الجبيل الصناعية منطقة صناعية مخططة فيها مصانع ومعسكرات مقاولين ومكاتب شركات، أما بلدة الجبيل الأقدم فعلى الساحل بكورنيشها وفنادقها. هما مكانان مختلفان، فاذكر أيهما تقصد، واسم البوابة أو المعسكر أو الفندق في حالة الاستلام من المواقع."] },
        { h: "الدخول إلى المواقع والإجراءات", p: ["تنظّم المواقع الصناعية عادةً من يدخلها. فإذا كان الاستلام أو التوصيل داخل مصنع أو معسكر فأخبرنا مبكرًا لنتحقق من ترتيبات الدخول مع مضيفك. ونوضح في عرض السعر ما يمكن ترتيبه ولا نعد بالدخول."] },
        { h: "ربط الجبيل بالمنطقة الشرقية", p: ["تقع الجبيل شمال الدمام على ساحل الخليج، وتجمع كثير من الرحلات بينها وبين الدمام أو الخبر أو المطار. ويُخطَّط اليوم متعدد المحطات مرة واحدة أفضل من مشاوير منفصلة، فأرسل كل المحطات في طلب واحد."] },
      ],
      faqs: [
        { q: "هل يمكنكم الاستلام من داخل موقع صناعي أو معسكر؟", a: "اذكر الموقع واسم مضيفك. وتُؤكَّد في عرض السعر إمكانية دخول السيارة لأن الدخول تحكمه إدارة الموقع." },
        { q: "هل يمكنني الذهاب من الجبيل إلى مطار الدمام بحجز واحد؟", a: "نعم. أرسل تفاصيل رحلتك ونقطة الاستلام وتُسعَّر الرحلة على حدة." },
      ],
    },
  },
  [`${C}/jeddah`]: {
    en: {
      sections: [
        { h: "Jeddah by district", p: ["Jeddah is long and spread along the Red Sea. Visitors typically move between the airport, the Corniche and Waterfront, Al Hamra and Tahlia Street hotels, the malls, and historic Al Balad. Because the city is large, the district matters more than the city name when we work out timing."] },
        { h: "Airport, train and Umrah connections", p: ["King Abdulaziz International Airport (JED) is a main gateway for Umrah travellers, and the Haramain high-speed railway also has a Jeddah station. Many guests combine a Jeddah stay with Makkah or Madinah, so tell us if the same booking should continue onward; those legs are covered on the route pages."] },
        { h: "Evening traffic and humidity", p: ["Jeddah is humid for much of the year and busy in the evening, especially around the Corniche and on shopping nights. Give us your appointment time and we plan the pickup earlier than a quiet-road estimate would suggest."] },
      ],
      faqs: [
        { q: "Can I use one booking for Jeddah sightseeing and then a transfer to Makkah?", a: "Yes. Describe both parts in one enquiry and they are quoted together or separately, as you prefer." },
        { q: "Which Jeddah areas can you pick up from?", a: "Name the hotel, district or map pin. Availability for that location and date is confirmed in the quotation." },
      ],
    },
    ar: {
      sections: [
        { h: "جدة بحسب الأحياء", p: ["جدة مدينة ممتدة على ساحل البحر الأحمر. وينتقل الزوار عادةً بين المطار والكورنيش والواجهة البحرية وفنادق الحمراء وشارع التحلية والمراكز التجارية والبلد التاريخية. ولاتساع المدينة يهمنا الحي أكثر من اسم المدينة عند حساب الوقت."] },
        { h: "المطار والقطار وربط العمرة", p: ["مطار الملك عبدالعزيز الدولي (JED) بوابة رئيسة للمعتمرين، ولقطار الحرمين السريع محطة في جدة. ويجمع كثيرون بين الإقامة في جدة ومكة المكرمة أو المدينة المنورة، فأخبرنا إن كان الحجز نفسه سيستمر إلى وجهة أخرى؛ وتجد تلك الرحلات في صفحات المسارات."] },
        { h: "زحام المساء والرطوبة", p: ["جدة رطبة معظم العام وتزدحم مساءً خاصةً حول الكورنيش وفي ليالي التسوق. أعطنا موعدك لنخطط للانطلاق أبكر مما يوحي به تقدير الطريق الخالي."] },
      ],
      faqs: [
        { q: "هل أستخدم حجزًا واحدًا لجولة في جدة ثم توصيل إلى مكة المكرمة؟", a: "نعم. صف الجزأين في طلب واحد ويُسعَّران معًا أو منفصلين بحسب رغبتك." },
        { q: "من أي أحياء جدة يمكنكم الاستلام؟", a: "اذكر الفندق أو الحي أو أرسل موقعًا على الخريطة. وتُؤكَّد الإتاحة لذلك الموقع والتاريخ في عرض السعر." },
      ],
    },
  },
  [`${C}/makkah`]: {
    en: {
      sections: [
        { h: "Getting to and from the Haram area", p: ["Hotels around Abraj Al Bait, Jabal Omar, Ajyad and Aziziyah sit close to the Masjid al-Haram, and vehicle access near the Haram is restricted at busy times. Pickups are therefore often arranged at a nearby point that is open to cars rather than at the hotel door; confirm the meeting point with us before you travel."] },
        { h: "Peak seasons", p: ["Ramadan, the last ten nights, the Hajj season and school holidays bring heavy traffic and tighter access. Book early, allow extra time between check-out and a flight or train, and tell us your dates so the quotation reflects the season."] },
        { h: "Who can enter", p: ["Only Muslims may enter Makkah's central area, and non-Muslim travellers are directed away from it by the road system. Hajj-period movement is also controlled by permits issued by the authorities, which RideSaudi does not issue; check the official guidance for your dates."] },
      ],
      faqs: [
        { q: "Can the car wait at my hotel door near the Haram?", a: "Not always. Access near the Haram is controlled, so the pickup point is agreed in advance and confirmed in the quotation." },
        { q: "Can you help with Hajj permits?", a: "No. Permits and Hajj movement rules are set and issued by the authorities; we arrange transport only once you hold what your journey requires." },
      ],
    },
    ar: {
      sections: [
        { h: "الوصول من منطقة الحرم وإليها", p: ["تقع الفنادق حول أبراج البيت وجبل عمر وأجياد والعزيزية قرب المسجد الحرام، ويُقيَّد وصول المركبات قرب الحرم في أوقات الزحام. لذلك يُرتَّب الاستلام غالبًا عند نقطة قريبة مفتوحة للسيارات لا عند باب الفندق؛ فأكّد معنا نقطة اللقاء قبل سفرك."] },
        { h: "مواسم الذروة", p: ["يشهد رمضان والعشر الأواخر وموسم الحج والإجازات المدرسية زحامًا شديدًا وتقييدًا أكبر للوصول. احجز مبكرًا واترك وقتًا إضافيًا بين الخروج من الفندق والرحلة الجوية أو القطار، وأخبرنا بتواريخك ليراعي عرض السعر الموسم."] },
        { h: "من يمكنه الدخول", p: ["لا يدخل المنطقة المركزية في مكة المكرمة إلا المسلمون، وتوجّه شبكة الطرق غير المسلمين بعيدًا عنها. كما تُنظَّم الحركة في موسم الحج بتصاريح تصدرها الجهات المختصة ولا تصدرها RideSaudi؛ فراجع الإرشادات الرسمية لتواريخك."] },
      ],
      faqs: [
        { q: "هل يمكن للسيارة الانتظار عند باب فندقي قرب الحرم؟", a: "ليس دائمًا. فالوصول قرب الحرم منظّم، لذا يُتفق على نقطة الاستلام مسبقًا وتُؤكَّد في عرض السعر." },
        { q: "هل تساعدون في تصاريح الحج؟", a: "لا. التصاريح وقواعد الحركة في الحج تضعها الجهات المختصة وتصدرها؛ ونحن نرتب النقل بعد أن تحصل على ما تتطلبه رحلتك." },
      ],
    },
  },
  [`${C}/madinah`]: {
    en: {
      sections: [
        { h: "Staying near the Prophet's Mosque", p: ["Most visitors stay in the Markaziyah area around the Prophet's Mosque, where vehicle access is limited around prayer times and busy periods. Pickups are usually agreed at an accessible nearby point; tell us your hotel name and we will confirm the practical meeting place."] },
        { h: "Ziyarat and day visits", p: ["Common visits include Quba Mosque, Masjid al-Qiblatain, the Uhud area and the date markets. A short ziyarat circuit is easy to combine in one booking if you list the stops in order and how long you want at each."] },
        { h: "Arriving by air or train", p: ["Prince Mohammad bin Abdulaziz International Airport (MED) and the Haramain railway station are the two usual arrival points. Send the flight or train time so the pickup matches your arrival, and allow for luggage and prayer times when planning the next stop."] },
      ],
      faqs: [
        { q: "Can I plan a ziyarat tour in Madinah in one booking?", a: "Yes. List the places in the order you want and the time at each. The quotation covers the whole circuit." },
        { q: "Do you meet arrivals at the Madinah train station?", a: "You can request it with your train time. Availability is confirmed in the quotation." },
      ],
    },
    ar: {
      sections: [
        { h: "الإقامة قرب المسجد النبوي", p: ["يقيم أغلب الزوار في منطقة المركزية حول المسجد النبوي، حيث يتقيّد وصول المركبات عند أوقات الصلاة والزحام. ويُتفق عادةً على الاستلام من نقطة قريبة يسهل الوصول إليها؛ فأخبرنا باسم فندقك لنؤكد نقطة اللقاء العملية."] },
        { h: "الزيارات والرحلات القصيرة", p: ["من الزيارات الشائعة مسجد قباء ومسجد القبلتين ومنطقة أحد وأسواق التمور. ويسهل جمع جولة زيارات قصيرة في حجز واحد إذا ذكرت المحطات بالترتيب والمدة التي تريدها عند كل منها."] },
        { h: "الوصول بالطائرة أو القطار", p: ["مطار الأمير محمد بن عبدالعزيز الدولي (MED) ومحطة قطار الحرمين هما نقطتا الوصول المعتادتان. أرسل موعد الرحلة أو القطار ليتوافق الاستقبال مع وصولك، واحسب للحقائب وأوقات الصلاة عند تخطيط المحطة التالية."] },
      ],
      faqs: [
        { q: "هل أخطط جولة زيارات في المدينة المنورة بحجز واحد؟", a: "نعم. اذكر الأماكن بالترتيب الذي تريد والوقت عند كل منها، ويشمل عرض السعر الجولة كاملة." },
        { q: "هل تستقبلون القادمين في محطة قطار المدينة المنورة؟", a: "يمكنك طلب ذلك مع ذكر موعد قطارك. وتُؤكَّد الإتاحة في عرض السعر." },
      ],
    },
  },
  [`${C}/abha`]: {
    en: {
      sections: [
        { h: "Mountain roads and fog", p: ["Abha sits high in the Asir mountains, and the roads around it climb and wind. Mist and low cloud are common, especially in the rainy months, and they slow every journey. Tell us your dates and we plan extra time instead of assuming a clear-road estimate."] },
        { h: "Where visitors go", p: ["Typical outings are the Abha Dam lake area, Soudah's high viewpoints, the heritage village of Rijal Almaa and the hanging village of Habala. Each is a half-day or more once travel is included, so list the places you want and we can say whether one booking covers them."] },
        { h: "Cool summers, busy seasons", p: ["The altitude makes summer far cooler than in most of the Kingdom, so Abha is busy in summer holidays and Eid. Book early for those dates and mention if you are arriving at Abha airport or driving up from another region."] },
      ],
      faqs: [
        { q: "Can I visit Soudah and Rijal Almaa in one day?", a: "Often, if you leave early and keep the list short. Send the places and the quotation says whether one day is realistic." },
        { q: "Is the drive safe in fog?", a: "Drivers slow down and may delay a leg when visibility is poor. Tell us your flexibility so the schedule can allow for it." },
      ],
    },
    ar: {
      sections: [
        { h: "طرق الجبال والضباب", p: ["تقع أبها على ارتفاع في جبال عسير، وتصعد الطرق حولها وتلتف. ويكثر الضباب والغيوم المنخفضة خاصةً في أشهر الأمطار، وهي تبطئ كل رحلة. أخبرنا بتواريخك لنخطط وقتًا إضافيًا بدل افتراض طريق صافٍ."] },
        { h: "أين يذهب الزوار", p: ["من الوجهات المعتادة محيط بحيرة سد أبها، ومواقع الإطلالة العالية في السودة، وقرية رجال ألمع التراثية، وقرية حبلة المعلقة. وكل منها نصف يوم أو أكثر مع احتساب الطريق، فاذكر الأماكن التي تريدها لنخبرك إن كان حجز واحد يغطيها."] },
        { h: "صيف معتدل ومواسم مزدحمة", p: ["يجعل الارتفاع الصيف أبرد بكثير من معظم مناطق المملكة، لذا تزدحم أبها في الإجازة الصيفية والأعياد. احجز مبكرًا لتلك التواريخ وأخبرنا إن كنت قادمًا إلى مطار أبها أو صاعدًا بالسيارة من منطقة أخرى."] },
      ],
      faqs: [
        { q: "هل يمكنني زيارة السودة ورجال ألمع في يوم واحد؟", a: "غالبًا نعم إن انطلقت مبكرًا وقصرت القائمة. أرسل الأماكن ويوضح عرض السعر إن كان يوم واحد واقعيًا." },
        { q: "هل القيادة آمنة في الضباب؟", a: "يخفف السائقون السرعة وقد يؤجلون جزءًا من الرحلة عند ضعف الرؤية. أخبرنا بمرونتك ليراعيها الجدول." },
      ],
    },
  },
  [`${C}/najran`]: {
    en: {
      sections: [
        { h: "Najran's heritage sites", p: ["Najran is known for the Al-Ukhdood archaeological site, the old mud-brick Najran Fort and its farming valley with date palms. Most visitors come for these sights, and each is a short drive within the area. List the ones you want and we plan the order."] },
        { h: "Border region: check before you go", p: ["Najran is in the far south, close to the Yemen border. Some areas have access limits and travel advisories can change, so follow official guidance and tell us your intended places; we confirm only what can reasonably be arranged."] },
        { h: "Arriving by air", p: ["Najran has a domestic airport, so most visitors fly in from Riyadh or Jeddah. Send your flight number for the pickup, and tell us if you plan to continue to Abha or Jazan by road."] },
      ],
      faqs: [
        { q: "Can you take me to Al-Ukhdood?", a: "You can request it. Name the site and your date, and the quotation confirms the arrangement." },
        { q: "Is it possible to continue from Najran to Abha?", a: "Yes. Ask for both legs in one enquiry and each is quoted on its own." },
      ],
    },
    ar: {
      sections: [
        { h: "المواقع التراثية في نجران", p: ["تشتهر نجران بموقع الأخدود الأثري وقصر نجران الطيني القديم ووادي المزارع ونخيل التمر. ويأتي أغلب الزوار لهذه المعالم، وكل منها على مسافة قصيرة داخل المنطقة. اذكر ما تريد ونرتب لك التسلسل."] },
        { h: "منطقة حدودية: تحقق قبل الذهاب", p: ["تقع نجران في أقصى الجنوب قرب الحدود مع اليمن. وبعض المواقع يخضع لقيود وصول وقد تتغير تنبيهات السفر، فتابع الإرشادات الرسمية وأخبرنا بالأماكن التي تنوي زيارتها؛ ونؤكد فقط ما يمكن ترتيبه بصورة معقولة."] },
        { h: "الوصول جوًا", p: ["في نجران مطار داخلي، لذا يصل أغلب الزوار من الرياض أو جدة. أرسل رقم رحلتك للاستقبال، وأخبرنا إن كنت تنوي مواصلة الرحلة برًا إلى أبها أو جازان."] },
      ],
      faqs: [
        { q: "هل يمكنكم نقلي إلى الأخدود؟", a: "يمكنك طلب ذلك. اذكر الموقع وتاريخك ويؤكد عرض السعر الترتيب." },
        { q: "هل يمكن المتابعة من نجران إلى أبها؟", a: "نعم. اطلب الرحلتين في طلب واحد وتُسعَّر كل منهما على حدة." },
      ],
    },
  },
  [`${C}/jazan`]: {
    en: {
      sections: [
        { h: "Coast, islands and mountains", p: ["Jazan combines a Red Sea coast, the Farasan Islands offshore and the Fifa mountains inland. The Corniche and Jazan Economic City are the usual city stops, while island and mountain trips are separate outings with their own timing."] },
        { h: "Farasan ferry days", p: ["Visits to the Farasan Islands depend on the ferry from the Jazan side, so the car transfer to the port must match the sailing, not just your preferred hour. Tell us the crossing you plan and we build the pickup around it."] },
        { h: "A humid south-west", p: ["The coast is hot and humid, and the mountain roads inland can be wet and misty. Mention the season and whether you will go up to the highlands so the driver is prepared."] },
      ],
      faqs: [
        { q: "Can you take me to the Farasan ferry?", a: "You can request a transfer to the port timed for your sailing. Availability is confirmed in the quotation." },
        { q: "Is Jazan suitable for a day trip to the mountains?", a: "Yes in many cases. List the places and the quotation says whether one day is realistic." },
      ],
    },
    ar: {
      sections: [
        { h: "ساحل وجزر وجبال", p: ["تجمع جازان بين ساحل البحر الأحمر وجزر فرسان قبالته وجبال فيفا في الداخل. والكورنيش ومدينة جازان الاقتصادية محطتان معتادتان داخل المدينة، أما الجزر والجبال فرحلات مستقلة لكل منها توقيتها."] },
        { h: "أيام عبّارة فرسان", p: ["تعتمد زيارة جزر فرسان على العبّارة من جهة جازان، لذا يجب أن يتوافق التوصيل إلى الميناء مع موعد الإبحار لا مع ساعتك المفضلة فقط. أخبرنا بالرحلة البحرية التي تنوي ونبني الاستلام حولها."] },
        { h: "جنوب غربي رطب", p: ["الساحل حار ورطب، وقد تكون طرق الجبال في الداخل رطبة وضبابية. اذكر الموسم وهل ستصعد إلى المرتفعات ليستعد السائق."] },
      ],
      faqs: [
        { q: "هل يمكنكم نقلي إلى عبّارة فرسان؟", a: "يمكنك طلب توصيل إلى الميناء بما يوافق موعد إبحارك. وتُؤكَّد الإتاحة في عرض السعر." },
        { q: "هل تصلح جازان لرحلة يوم إلى الجبال؟", a: "في كثير من الحالات نعم. اذكر الأماكن ويوضح عرض السعر إن كان يوم واحد واقعيًا." },
      ],
    },
  },
  [`${C}/hail`]: {
    en: {
      sections: [
        { h: "Rock art and mountains", p: ["Hail is known for the rock art of Jubbah and Shuwaymis, a UNESCO World Heritage listing, and for the Aja and Salma mountains around the city. Desert trips to these sites are long half-days, so say how much time you have."] },
        { h: "Events and busy weeks", p: ["Hail hosts motorsport and desert events that fill hotels and roads for short periods. If your dates coincide with an event, book early and give us your hotel and venue so the plan reflects local traffic."] },
        { h: "Reaching Hail", p: ["Visitors arrive at Hail Regional Airport or by road from Riyadh or Madinah. For a road arrival we need the starting point and your preferred time; the route pages cover Riyadh to Hail."] },
      ],
      faqs: [
        { q: "Can you take me to the Jubbah rock art?", a: "You can request it. Name the site and date, and the quotation confirms what can be arranged." },
        { q: "Can I drive from Riyadh to Hail with RideSaudi?", a: "Yes. Ask for the Riyadh to Hail transfer, quoted individually." },
      ],
    },
    ar: {
      sections: [
        { h: "نقوش صخرية وجبال", p: ["تشتهر حائل بالفنون الصخرية في جبة والشويمس المدرجة في قائمة التراث العالمي لليونسكو، وبجبلي أجا وسلمى المحيطين بالمدينة. ورحلات الصحراء إلى هذه المواقع نصف يوم طويل، فاذكر الوقت المتاح لك."] },
        { h: "الفعاليات والأسابيع المزدحمة", p: ["تستضيف حائل فعاليات رياضة المحركات والصحراء التي تملأ الفنادق والطرق لفترات قصيرة. وإذا صادف سفرك فعالية فاحجز مبكرًا وأعطنا اسم فندقك والموقع ليراعي التخطيط حركة المرور المحلية."] },
        { h: "الوصول إلى حائل", p: ["يصل الزوار إلى مطار حائل الإقليمي أو برًا من الرياض أو المدينة المنورة. وللوصول برًا نحتاج نقطة الانطلاق والوقت المفضل لديك؛ وتغطي صفحات المسارات رحلة الرياض إلى حائل."] },
      ],
      faqs: [
        { q: "هل يمكنكم نقلي إلى النقوش الصخرية في جبة؟", a: "يمكنك طلب ذلك. اذكر الموقع والتاريخ ويؤكد عرض السعر ما يمكن ترتيبه." },
        { q: "هل أسافر من الرياض إلى حائل مع RideSaudi؟", a: "نعم. اطلب توصيل الرياض إلى حائل وتُسعَّر الرحلة على حدة." },
      ],
    },
  },
  [`${C}/buraidah`]: {
    en: {
      sections: [
        { h: "Qassim's date country", p: ["Buraidah is the capital of Qassim, one of the Kingdom's main date-growing regions. The big date markets and the annual dates festival draw buyers and visitors, and the nearby town of Unaizah is a frequent second stop."] },
        { h: "Business and family visits", p: ["Trips here are often business calls, family visits from Riyadh or farm and market visits. A day plan with several stops works well in one booking; list the places and the time you must be back."] },
        { h: "Airport and road links", p: ["Qassim's airport (ELQ) serves the region and Buraidah is also reached by road from Riyadh. Tell us whether you are flying or driving and we plan the pickup from your arrival point."] },
      ],
      faqs: [
        { q: "Can you take me to the Buraidah date market?", a: "Yes, you can request it. Give the date and time; markets are busiest at certain hours and in the harvest season." },
        { q: "Can I add Unaizah to the same trip?", a: "Yes. List both stops in one enquiry and the quotation covers them together." },
      ],
    },
    ar: {
      sections: [
        { h: "بلاد التمور في القصيم", p: ["بريدة عاصمة القصيم، إحدى أبرز مناطق زراعة التمور في المملكة. وتجذب أسواق التمور الكبيرة والمهرجان السنوي للتمور المتسوقين والزوار، وتُعد مدينة عنيزة القريبة محطة ثانية متكررة."] },
        { h: "زيارات العمل والعائلة", p: ["كثيرًا ما تكون الرحلات إلى هنا لأعمال أو زيارات عائلية من الرياض أو لزيارة المزارع والأسواق. ويناسب الحجز الواحد خطة يوم متعددة المحطات؛ فاذكر الأماكن والوقت الذي يجب أن تعود فيه."] },
        { h: "المطار والطرق", p: ["يخدم مطار القصيم (ELQ) المنطقة، كما تُقصد بريدة بالطريق البري من الرياض. أخبرنا إن كنت قادمًا جوًا أو بالسيارة لنخطط الاستلام من نقطة وصولك."] },
      ],
      faqs: [
        { q: "هل يمكنكم نقلي إلى سوق التمور في بريدة؟", a: "نعم يمكنك طلب ذلك. اذكر التاريخ والوقت؛ فالأسواق تزدحم في ساعات بعينها وفي موسم الحصاد." },
        { q: "هل أضيف عنيزة إلى الرحلة نفسها؟", a: "نعم. اذكر المحطتين في طلب واحد ويشملهما عرض السعر معًا." },
      ],
    },
  },
  [`${C}/yanbu`]: {
    en: {
      sections: [
        { h: "Industrial city and old town", p: ["Yanbu has two faces: Yanbu Industrial City with its plants and company offices, and the older coastal town with its Corniche and historic quarter. Say which you mean, and for industrial sites give the company and gate name."] },
        { h: "Visitors on the Red Sea coast", p: ["Leisure visitors come for the Red Sea shoreline and diving and beach spots north and south of the town. Outings out of town depend on the road and the place, so name the location and we confirm the arrangement."] },
        { h: "Linking Yanbu with Madinah and Jeddah", p: ["Many trips combine Yanbu with Madinah or Jeddah, either for flights or pilgrimage. Dedicated route pages cover Yanbu to Jeddah and onward travel; send both legs in one enquiry if you want them together."] },
      ],
      faqs: [
        { q: "Can you pick me up at Yanbu airport?", a: "You can request it with your flight number. Availability is confirmed in the quotation." },
        { q: "Can I book Yanbu to Madinah for the same day as my flight?", a: "Yes. Send the flight time and the quotation plans the pickup around it." },
      ],
    },
    ar: {
      sections: [
        { h: "المدينة الصناعية والبلدة القديمة", p: ["لينبع وجهان: ينبع الصناعية بمصانعها ومكاتب شركاتها، والبلدة الساحلية الأقدم بكورنيشها وحيّها التاريخي. اذكر أيهما تقصد، وللمواقع الصناعية اذكر اسم الشركة والبوابة."] },
        { h: "الزوار على ساحل البحر الأحمر", p: ["يأتي زوار الترفيه لشاطئ البحر الأحمر ولمواقع الغوص والشواطئ شمال البلدة وجنوبها. وتعتمد الرحلات خارج المدينة على الطريق والمكان، فسمِّ الموقع ونؤكد الترتيب."] },
        { h: "ربط ينبع بالمدينة المنورة وجدة", p: ["تجمع كثير من الرحلات بين ينبع والمدينة المنورة أو جدة، سواء للطيران أو للزيارة. وتغطي صفحات مسارات مخصصة ينبع إلى جدة والتنقل بعدها؛ وأرسل الرحلتين في طلب واحد إن أردتهما معًا."] },
      ],
      faqs: [
        { q: "هل يمكنكم استقبالي في مطار ينبع؟", a: "يمكنك طلب ذلك مع رقم رحلتك. وتُؤكَّد الإتاحة في عرض السعر." },
        { q: "هل أحجز ينبع إلى المدينة المنورة في يوم رحلتي نفسه؟", a: "نعم. أرسل موعد الرحلة ويخطط عرض السعر الاستلام حوله." },
      ],
    },
  },
  [`${C}/tabuk`]: {
    en: {
      sections: [
        { h: "Sites reached from Tabuk", p: ["Tabuk's own landmark is its old fort in the city centre. Further out are Wadi Disah's red-rock canyon, the coast of the Gulf of Aqaba and the desert of the Hisma plateau. These are long outings, so decide whether you want a city day or a regional day."] },
        { h: "NEOM and project areas", p: ["Parts of the north-west, including project and development areas, restrict who can enter and may need an access permit from the site owner. We cannot grant entry; tell us your host and permit status and we confirm what can be arranged."] },
        { h: "Winter cold, long roads", p: ["Winter nights in the north-west can be near freezing, and distances between sites are large with few services. Mention the season, your luggage and any stops you need so the journey is planned with enough margin."] },
      ],
      faqs: [
        { q: "Can you take me to Wadi Disah from Tabuk?", a: "You can request it. Name the date and the group size, and the quotation confirms what is possible." },
        { q: "Do I need a permit to travel to NEOM?", a: "Entry rules are set by the site owner and the authorities, not by RideSaudi. Check with your host before you travel." },
      ],
    },
    ar: {
      sections: [
        { h: "المواقع التي تُقصد من تبوك", p: ["معلم تبوك داخل المدينة قلعتها القديمة في وسطها. وأبعد منها وادي الديسة بأخدوده الصخري الأحمر، وساحل خليج العقبة، وصحراء هضبة حسمى. وهذه رحلات طويلة، فحدّد إن كنت تريد يومًا داخل المدينة أو يومًا إقليميًا."] },
        { h: "نيوم ومناطق المشاريع", p: ["بعض مناطق الشمال الغربي، ومنها مناطق المشاريع والتطوير، تقيّد الدخول وقد تتطلب تصريح وصول من مالك الموقع. ولا نملك منح الدخول؛ أخبرنا بجهة الاستضافة وحالة التصريح ونؤكد ما يمكن ترتيبه."] },
        { h: "برد الشتاء وطرق طويلة", p: ["قد تقترب ليالي الشتاء في الشمال الغربي من التجمد، وتتباعد المواقع كثيرًا مع قلة الخدمات. اذكر الموسم وحقائبك وأي محطات تحتاجها ليُخطَّط للرحلة بهامش كافٍ."] },
      ],
      faqs: [
        { q: "هل يمكنكم نقلي إلى وادي الديسة من تبوك؟", a: "يمكنك طلب ذلك. اذكر التاريخ وعدد المسافرين ويؤكد عرض السعر ما هو ممكن." },
        { q: "هل أحتاج تصريحًا للسفر إلى نيوم؟", a: "قواعد الدخول يضعها مالك الموقع والجهات المختصة لا RideSaudi. تحقق من جهة الاستضافة قبل السفر." },
      ],
    },
  },
};

export function applyCityEnrichments(pages: ServicePage[]) {
  for (const [path, byLocale] of Object.entries(cityEnrichments)) {
    const page = pages.find((p) => p.path === path);
    if (!page) throw new Error(`cityEnrichments: unknown page ${path}`);
    page.updated = U;
    for (const locale of Object.keys(byLocale) as Locale[]) {
      const c = page.copy[locale];
      c.sections = [...c.sections, ...byLocale[locale].sections];
      c.faqs = [...c.faqs, ...byLocale[locale].faqs];
    }
  }
}
