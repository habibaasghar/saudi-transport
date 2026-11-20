import type { ServicePage } from "../types";

const U = "2026-11-14";
const I = "services/intercity-transfers";
const A = "services/airport-transfers";
const C = "services/city-transport";

/**
 * Jeddah to Abha and the reverse. No single reliable road figure was found on 2026-11-14: a
 * distance calculator estimates about 653 km, Makkah to Abha is listed at about 621 km and Thuwal to
 * Abha at about 700 km, so the pages state "roughly 620 to 700 km, eight to nine hours" and say
 * that sources vary.
 */
export const abhaPages: ServicePage[] = [
  {
    path: `${I}/jeddah-to-abha`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/abha-to-jeddah`, `${I}/jeddah-to-jazan`, `${I}/riyadh-to-abha`, `${A}/jeddah-airport`, `${C}/jeddah`, `${C}/abha`],
    updated: U,
    copy: {
      en: {
        nav: "Jeddah to Abha",
        title: "Jeddah to Abha Private Car: GMC, Staria or Sedan",
        description: "Request a private GMC Yukon, Hyundai Staria or sedan with a driver from Jeddah or King Abdulaziz Airport to Abha in the Asir mountains, one way or return.",
        h1: "Jeddah to Abha by private car, from the coast to the Asir mountains",
        eyebrow: "Intercity · Jeddah to Abha",
        answer: "A private Jeddah to Abha transfer is a pre-booked car with a driver from Jeddah, or King Abdulaziz Airport, to Abha in the Asir mountains. We found no single reliable road figure, but public mapping sources and nearby routes point to roughly 620 to 700 km and eight to nine hours before stops, ending in a mountain climb. RideSaudi quotes each journey individually and confirms the vehicle for your date.",
        summary: "A private road journey from Jeddah up into the Asir mountains to Abha.",
        sections: [
          { h: "A drive that ends in a climb", p: ["Abha sits in the Asir mountains, far above the Jeddah coast, so the last part of the journey climbs through mountain road with bends and changes in weather. Public mapping sources do not agree on one distance, so we give a range of roughly 620 to 700 km and eight to nine hours of driving before stops; the quotation sets the schedule for your chosen route. Plan to arrive in daylight, and tell us about anyone who is prone to travel sickness so breaks can be planned."] },
          { h: "Why travellers choose the car", p: ["There are flights between Jeddah and Abha, so the road is a choice rather than the only way. A private car makes sense for families and groups travelling with luggage, for travellers who want to stop in places on the way, and for guests who do not want to arrange separate airport and hotel transfers at both ends. It also suits a trip where you plan to move around the Asir region afterwards; see Abha city transport."] },
          { h: "Starting from Jeddah", p: ["Pickup is usually King Abdulaziz Airport or a Jeddah hotel. If you land and continue straight to Abha, send the terminal and flight number, and consider whether a late arrival is better followed by a night in Jeddah and an early morning start. For the airport side, see Jeddah airport transfers. Reverse direction? See Abha to Jeddah."] },
          { h: "Choosing the vehicle for the mountains", p: ["A sedan such as a Toyota Camry or Hyundai Sonata suits one or two passengers with ordinary luggage. Families usually ask for a GMC Yukon, Toyota Prado or Chevrolet Suburban for the room and the ride on a long mountain road, and groups with several bags ask for a Hyundai Staria. Tell us passengers, large bags and any equipment; the vehicle is confirmed in the quotation, subject to availability for your date."] },
        ],
        checklist: { h: "Include this in your Jeddah to Abha enquiry", items: ["Date, departure time and one way or return", "Jeddah airport terminal and flight, or hotel address", "Abha hotel or resort, or another Asir destination", "Anyone prone to motion sickness, and children or older passengers", "Passengers and large bags", "Vehicle: sedan, GMC Yukon or Hyundai Staria"] },
        table: { h: "Jeddah to Abha: car or flight?", head: ["", "Private car with driver", "Flight"], rows: [["Start and finish", "Door to door between your chosen addresses", "Airport to airport, with transfers at both ends"], ["Luggage and groups", "One vehicle for everyone and the bags", "Subject to airline baggage rules"], ["Journey", "Eight to nine hours before stops (approximate, sources vary), ending with a mountain climb", "A short flight, plus airport time"], ["Flexibility", "Stops on the way at your pace", "Fixed schedule"]] },
        faqs: [
          { q: "Can I book a private car from Jeddah to Abha?", a: "Yes, you can request one. Send your date, pickup point and Abha destination, and we confirm availability and send a quotation before anything is arranged." },
          { q: "How far is Abha from Jeddah by road?", a: "Public sources vary, and we found no single reliable figure. Expect roughly 620 to 700 km and eight to nine hours before stops, and check a live map for your route." },
          { q: "Is the road to Abha difficult?", a: "The final part climbs through mountain road with bends and changing weather, so we advise daylight arrival and unhurried driving." },
          { q: "Can you take me from Jeddah Airport to an Abha resort?", a: "You can request it. Send the flight number and the resort name; availability and timings are confirmed in the quotation." },
          { q: "Which vehicle is best for a family going to Abha?", a: "Families usually request a GMC Yukon; a larger group with many bags can request a Hyundai Staria. The vehicle is confirmed in the quotation." },
        ],
      },
      ar: {
        nav: "جدة إلى أبها",
        title: "من جدة إلى أبها: سيارة خاصة بسائق، جمس أو ستاريا أو سيدان",
        description: "اطلب جمس يوكن أو هيونداي ستاريا أو سيدان بسائق من جدة أو مطار الملك عبدالعزيز إلى أبها في جبال عسير، ذهابًا فقط أو ذهابًا وعودة.",
        h1: "من جدة إلى أبها بسيارة خاصة، من الساحل إلى جبال عسير",
        eyebrow: "بين المدن · جدة إلى أبها",
        answer: "التوصيل الخاص من جدة إلى أبها هو سيارة بسائق وبحجز مسبق من جدة أو مطار الملك عبدالعزيز إلى أبها في جبال عسير. لم نجد رقمًا واحدًا موثوقًا للطريق، لكن مصادر الخرائط العامة والمسارات القريبة تشير إلى نحو 620 إلى 700 كم وثماني إلى تسع ساعات قبل التوقفات، وتنتهي بصعود جبلي. تُسعِّر RideSaudi كل رحلة على حدة وتؤكد المركبة لتاريخك.",
        summary: "رحلة برية خاصة من جدة صعودًا إلى جبال عسير حتى أبها.",
        sections: [
          { h: "رحلة تنتهي بصعود", p: ["تقع أبها في جبال عسير على ارتفاع كبير فوق ساحل جدة، لذلك يمر الجزء الأخير من الرحلة بطريق جبلي فيه منعطفات وتغيّر في الطقس. ولا تتفق مصادر الخرائط العامة على مسافة واحدة، فنذكر نطاقًا يقارب 620 إلى 700 كم وثماني إلى تسع ساعات قيادة قبل التوقفات؛ ويحدد عرض السعر الجدول للمسار الذي تختاره. خطط للوصول نهارًا، وأخبرنا بمن يتأثر بدوار السفر لنخطط الاستراحات."] },
          { h: "لماذا يختار المسافرون السيارة", p: ["توجد رحلات جوية بين جدة وأبها، فالطريق البري خيار لا وسيلة وحيدة. وتناسب السيارة الخاصة العائلات والمجموعات التي تسافر بحقائبها، ومن يريد التوقف في أماكن على الطريق، ومن لا يريد ترتيب تنقلات منفصلة للمطار والفندق في الطرفين. وهي مناسبة أيضًا لرحلة تنوي فيها التنقل في منطقة عسير بعد الوصول؛ راجع صفحة النقل داخل أبها."] },
          { h: "الانطلاق من جدة", p: ["الاستلام عادةً من مطار الملك عبدالعزيز أو فندق في جدة. وإن هبطت وتكمل إلى أبها مباشرة فأرسل رقم الصالة والرحلة، وفكّر هل الأفضل بعد وصول متأخر مبيت في جدة وانطلاق صباحي مبكر. وللجانب المتعلق بالمطار راجع صفحة التوصيل من مطار جدة. وللاتجاه المعاكس راجع صفحة أبها إلى جدة."] },
          { h: "اختيار المركبة للطريق الجبلي", p: ["تناسب السيدان مثل تويوتا كامري أو هيونداي سوناتا راكبًا أو اثنين بحقائب عادية. وتطلب العائلات غالبًا جمس يوكن أو تويوتا برادو أو شيفروليه سوبربان لمساحته وراحته على طريق جبلي طويل، وتطلب المجموعات بحقائب متعددة هيونداي ستاريا. أخبرنا بعدد الركاب والحقائب الكبيرة وأي معدات؛ وتُؤكَّد المركبة في عرض السعر بحسب توفرها في تاريخك."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب جدة إلى أبها", items: ["التاريخ ووقت الانطلاق وهل الرحلة ذهاب فقط أم ذهاب وعودة", "صالة مطار جدة والرحلة، أو عنوان الفندق", "فندق أو منتجع في أبها، أو وجهة أخرى في عسير", "من يتأثر بدوار السفر، والأطفال أو كبار السن", "الركاب والحقائب الكبيرة", "المركبة: سيدان أو جمس يوكن أو هيونداي ستاريا"] },
        table: { h: "من جدة إلى أبها: السيارة أم الطيران؟", head: ["", "سيارة خاصة بسائق", "الطيران"], rows: [["نقطة البداية والنهاية", "من الباب إلى الباب بين العنوانين اللذين تختارهما", "من مطار إلى مطار مع تنقل في الطرفين"], ["الحقائب والمجموعات", "مركبة واحدة للجميع وللحقائب", "بحسب سياسة الحقائب لدى الناقل"], ["الرحلة", "ثماني إلى تسع ساعات قبل التوقفات (تقريبي، والمصادر تختلف) وتنتهي بصعود جبلي", "رحلة جوية قصيرة مع وقت المطار"], ["المرونة", "توقفات في الطريق على راحتك", "جدول ثابت"]] },
        faqs: [
          { q: "هل يمكن حجز سيارة خاصة من جدة إلى أبها؟", a: "نعم، يمكنك إرسال طلب. أرسل التاريخ ونقطة الاستلام ووجهتك في أبها، ونؤكد الإتاحة ونرسل عرض السعر قبل ترتيب أي شيء." },
          { q: "كم تبعد أبها عن جدة بالسيارة؟", a: "تختلف المصادر العامة ولم نجد رقمًا واحدًا موثوقًا. توقعوا نحو 620 إلى 700 كم وثماني إلى تسع ساعات قبل التوقفات، وراجعوا خريطة حية لمسارك." },
          { q: "هل طريق أبها صعب؟", a: "الجزء الأخير يصعد في طريق جبلي فيه منعطفات وطقس متغير، لذلك ننصح بالوصول نهارًا والقيادة بلا استعجال." },
          { q: "هل يمكن التوصيل من مطار جدة إلى منتجع في أبها؟", a: "يمكنك طلب ذلك. أرسل رقم الرحلة واسم المنتجع، وتُؤكَّد الإتاحة والمواعيد في عرض السعر." },
          { q: "ما المركبة الأنسب لعائلة متجهة إلى أبها؟", a: "تطلب العائلات غالبًا جمس يوكن، ويمكن للمجموعة الأكبر ذات الحقائب الكثيرة طلب هيونداي ستاريا. وتُؤكَّد المركبة في عرض السعر." },
        ],
      },
    },
  },

  {
    path: `${I}/abha-to-jeddah`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/jeddah-to-abha`, `${I}/jazan-to-jeddah`, `${I}/riyadh-to-abha`, `${A}/jeddah-airport`, `${C}/abha`, `${C}/jeddah`],
    updated: U,
    copy: {
      en: {
        nav: "Abha to Jeddah",
        title: "Abha to Jeddah Private Car with Driver, Down the Mountain",
        description: "Request a private car with a driver from your Abha hotel or Asir resort to Jeddah, King Abdulaziz Airport or onward to Makkah. Sedan, GMC Yukon or Hyundai Staria.",
        h1: "Abha to Jeddah by private car, down from the Asir mountains",
        eyebrow: "Intercity · Abha to Jeddah",
        answer: "A private Abha to Jeddah transfer is a pre-booked car with a driver from an Abha hotel or Asir resort down to Jeddah, King Abdulaziz Airport or onward to Makkah. Public mapping sources and nearby routes point to roughly 620 to 700 km and eight to nine hours before stops, with a mountain descent at the start. RideSaudi quotes each journey individually and plans the departure from your arrival time.",
        summary: "A private car from Abha down to Jeddah, timed from your flight or arrival.",
        sections: [
          { h: "Leaving the mountains first", p: ["The road from Abha begins with a descent through mountain bends before reaching the coastal plain, and low cloud or mist can occur in the Asir mountains at some times of year, so we plan the start in daylight and without a rush. Distance sources do not agree on one figure, so we give a range of roughly 620 to 700 km and eight to nine hours before stops. If anyone is prone to travel sickness, tell us in the enquiry so breaks are planned. The outbound direction is on Jeddah to Abha."] },
          { h: "Timed from your flight", p: ["Most people leaving Abha for Jeddah have a flight from King Abdulaziz Airport, an Umrah itinerary or a work commitment. Give us the check-in time or the time you must arrive and we count backwards, with room for meal and prayer stops. If you can, depart in the morning for an afternoon or evening flight, and add a margin rather than relying on the road being predictable."] },
          { h: "Pickup from Abha hotels and Asir resorts", p: ["Many stays in the region are in mountain resorts or villages outside the city, some on narrow roads. Give the exact property name and entrance, a phone number the driver can reach, and the time you will actually be ready. For hotels in the city itself, the name is enough; see Abha city transport for local movement."] },
          { h: "Going on to Makkah, and the vehicle", p: ["If your real destination is Makkah for Umrah, ask for the journey to end there and we quote it as one trip; see Jeddah to Makkah for the last stretch. A sedan such as a Toyota Camry or Hyundai Sonata suits one or two passengers; a GMC Yukon, Toyota Prado or Chevrolet Suburban suits families who want room on a long day; a Hyundai Staria suits larger groups with many bags. The vehicle is confirmed in the quotation, subject to availability."] },
        ],
        checklist: { h: "Include this in your Abha to Jeddah enquiry", items: ["The time you must arrive, or your flight time from Jeddah", "Abha hotel or Asir resort name, entrance and contact number", "Destination: Jeddah hotel, airport terminal or Makkah", "Anyone prone to motion sickness, children or older passengers", "Passengers and large bags", "Vehicle: sedan, GMC Yukon or Hyundai Staria"] },
        faqs: [
          { q: "Can I book a private car from Abha to Jeddah Airport?", a: "Yes, you can request one. Send your flight time and the Abha pickup, and we plan the departure and confirm availability before arranging anything." },
          { q: "How long is the drive from Abha to Jeddah?", a: "Public sources vary. Sources differ, so treat roughly 620 to 700 km and eight to nine hours before stops as a guide and confirm on a live map." },
          { q: "Can you collect me from a mountain resort outside Abha?", a: "You can request it. Send the property name, the entrance and a contact number, and the pickup is planned around them." },
          { q: "Can the car go on to Makkah?", a: "You can ask for the journey to end in Makkah, and it is quoted as one trip to the destination you give." },
          { q: "What if mist or rain affects the descent?", a: "The driver adjusts speed and breaks to conditions. Tell us your flight time early, so a safety margin is already part of the plan." },
        ],
      },
      ar: {
        nav: "أبها إلى جدة",
        title: "من أبها إلى جدة بسيارة خاصة بسائق، نزولًا من الجبال",
        description: "اطلب سيارة بسائق من فندقك في أبها أو منتجع في عسير إلى جدة أو مطار الملك عبدالعزيز أو مواصلة إلى مكة. سيدان أو جمس يوكن أو هيونداي ستاريا.",
        h1: "من أبها إلى جدة بسيارة خاصة نزولًا من جبال عسير",
        eyebrow: "بين المدن · أبها إلى جدة",
        answer: "التوصيل الخاص من أبها إلى جدة هو سيارة بسائق وبحجز مسبق من فندق في أبها أو منتجع في عسير نزولًا إلى جدة أو مطار الملك عبدالعزيز أو مواصلة إلى مكة. وتشير مصادر الخرائط العامة والمسارات القريبة إلى نحو 620 إلى 700 كم وثماني إلى تسع ساعات قبل التوقفات، مع نزول جبلي في البداية. تُسعِّر RideSaudi كل رحلة على حدة وتحسب الانطلاق من وقت وصولك.",
        summary: "سيارة خاصة من أبها نزولًا إلى جدة، يُحسب وقتها من موعد رحلتك أو وصولك.",
        sections: [
          { h: "البداية بالنزول من الجبال", p: ["يبدأ الطريق من أبها بنزول عبر منعطفات جبلية قبل بلوغ السهل الساحلي، وقد تظهر سُحب منخفضة أو ضباب في جبال عسير في بعض أوقات السنة، لذلك نخطط للانطلاق نهارًا ودون استعجال. ولا تتفق مصادر المسافة على رقم واحد، فنذكر نطاقًا يقارب 620 إلى 700 كم وثماني إلى تسع ساعات قبل التوقفات. وإن كان أحد الركاب يتأثر بدوار السفر فأخبرنا في الطلب لنخطط الاستراحات. وتجد الاتجاه المعاكس في صفحة جدة إلى أبها."] },
          { h: "الوقت محسوب من موعد رحلتك", p: ["أغلب من يغادرون أبها إلى جدة لديهم رحلة من مطار الملك عبدالعزيز أو برنامج عمرة أو التزام عمل. أرسل لنا وقت إنهاء الإجراءات أو الوقت الذي يلزمك الوصول فيه ونحسب عكسيًا مع فسحة للوجبات والصلاة. وإن أمكنك فانطلق صباحًا لرحلة بعد الظهر أو المساء، وأضف هامشًا ولا تعتمد على أن الطريق مضمون الوقت."] },
          { h: "الاستلام من فنادق أبها ومنتجعات عسير", p: ["كثير من الإقامات في المنطقة في منتجعات جبلية أو قرى خارج المدينة، وبعضها على طرق ضيقة. أرسل اسم المنشأة والمدخل بدقة ورقم هاتف يصل إليك عليه السائق والوقت الذي ستكون جاهزًا فيه فعلًا. أما فنادق المدينة نفسها فيكفي اسمها؛ وللتنقل المحلي راجع صفحة النقل داخل أبها."] },
          { h: "المواصلة إلى مكة والمركبة", p: ["إن كانت وجهتك الحقيقية مكة للعمرة فاطلب أن تنتهي الرحلة هناك ونُسعِّرها رحلة واحدة؛ وراجع صفحة جدة إلى مكة للمرحلة الأخيرة. تناسب السيدان مثل تويوتا كامري أو هيونداي سوناتا راكبًا أو اثنين، ويناسب جمس يوكن أو تويوتا برادو أو شيفروليه سوبربان العائلات التي تريد مساحة خلال يوم طويل، وتناسب هيونداي ستاريا المجموعات الأكبر ذات الحقائب الكثيرة. وتُؤكَّد المركبة في عرض السعر بحسب توفرها."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب أبها إلى جدة", items: ["الوقت الذي يجب أن تصل فيه أو موعد رحلتك من جدة", "اسم الفندق في أبها أو منتجع عسير والمدخل ورقم للتواصل", "الوجهة: فندق في جدة أو صالة المطار أو مكة", "من يتأثر بدوار السفر، والأطفال أو كبار السن", "الركاب والحقائب الكبيرة", "المركبة: سيدان أو جمس يوكن أو هيونداي ستاريا"] },
        faqs: [
          { q: "هل يمكن حجز سيارة خاصة من أبها إلى مطار جدة؟", a: "نعم، يمكنك إرسال طلب. أرسل موعد رحلتك ونقطة الاستلام في أبها، ونخطط الانطلاق ونؤكد الإتاحة قبل ترتيب أي شيء." },
          { q: "كم تستغرق الرحلة من أبها إلى جدة؟", a: "تختلف المصادر العامة. تختلف المصادر، فاعتبروا نحو 620 إلى 700 كم وثماني إلى تسع ساعات قبل التوقفات تقديرًا وتأكدوا على خريطة حية." },
          { q: "هل يمكن الاستلام من منتجع جبلي خارج أبها؟", a: "يمكنك طلب ذلك. أرسل اسم المنشأة والمدخل ورقم للتواصل، ويُخطَّط الاستلام على أساسها." },
          { q: "هل تواصل السيارة إلى مكة؟", a: "يمكنك طلب أن تنتهي الرحلة في مكة، وتُسعَّر رحلة واحدة إلى الوجهة التي تحددها." },
          { q: "ماذا لو أثّر الضباب أو المطر في النزول؟", a: "يُعدِّل السائق سرعته واستراحاته بحسب الظروف. أخبرنا بموعد رحلتك مبكرًا ليكون هامش الأمان جزءًا من الخطة منذ البداية." },
        ],
      },
    },
  },
];
