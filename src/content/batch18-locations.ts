import type { ServicePage } from "./types";

const U = "2026-11-15";
const I = "services/intercity-transfers";
const A = "services/airport-transfers";
const C = "services/city-transport";
const T = "services/tourism-transport";

/**
 * Location pages added after the 2026-11-15 competitor review (docs/seo/location-pages-strategy-2026.md):
 * Khamis Mushait, Al Baha and King Abdullah Economic City. Facts used (checked 2026-11-15, public sources):
 *  - Abha to Khamis Mushait is roughly 26 km in a straight line, about 30 minutes by car; Abha International
 *    Airport serves both cities (sources disagree on its distance from Khamis Mushait, so no figure is published).
 *  - Jeddah to Al Baha is about 380 to 438 km depending on the source, roughly 4.5 to 5 hours; Raghadan Forest
 *    Park is about 4 to 5 km from the centre; Dhee Ain village is about 24 km from Al Baha.
 *  - KAEC is about 100 km north of Jeddah in the Rabigh area; the Haramain station serving it is at the city
 *    entrance near KAUST.
 * Vehicle models are owner-confirmed (2026-11-15); capacities, prices and availability are not stated.
 */
export const batch18Locations: ServicePage[] = [
  {
    path: `${C}/khamis-mushait`,
    parent: C,
    variant: "default",
    service: "chauffeur",
    related: [`${C}/abha`, `${I}/riyadh-to-abha`, `${I}/abha-to-riyadh`, `${I}/jeddah-to-abha`, `${I}/abha-to-jeddah`, `${C}/najran`, `${C}/jazan`],
    updated: U,
    copy: {
      en: {
        nav: "Khamis Mushait",
        title: "Khamis Mushait Private Car with Driver: Camry, Yukon, Prado",
        description: "Request a private car with a driver in Khamis Mushait for Abha airport transfers, business trips and long routes to Riyadh and Jeddah. Quoted per trip.",
        h1: "Private car with a driver in Khamis Mushait, Asir",
        eyebrow: "Locations · Khamis Mushait",
        answer: "A private car with a driver in Khamis Mushait is a pre-booked vehicle for airport pickups, business trips and long journeys to Riyadh, Jeddah or Najran. The city sits about 26 km, roughly 30 minutes by car, from Abha, and Abha International Airport is the airport used for the area. RideSaudi quotes each trip individually and confirms the vehicle and availability first.",
        summary: "Private cars with a driver in Khamis Mushait, linked to Abha airport and the long routes out of Asir.",
        sections: [
          { h: "A commercial city next to Abha, not a suburb of it", p: ["Khamis Mushait is one of the largest cities of the Asir region and a commercial hub in its own right, and it sits a short drive from Abha. Travellers often stay in one and work or visit family in the other, so a trip that crosses between them is common. People searching for a car here usually mean one of three things: a pickup from the airport, a trip for a business appointment, or a long journey out of the region. This page is for those; for hotels, resorts and the highland sights, read Abha city transport."] },
          { h: "Getting between Khamis Mushait and the airport", p: ["Abha International Airport is the airport used for the Khamis Mushait area. Sources give different distances between the airport and the city centre, so we do not publish a figure: tell us your hotel or address and your flight number and we plan the pickup time around it. For an arrival, give the terminal and expect to be met after baggage; for a departure, allow a margin for the road and check-in."] },
          { h: "Between the two cities", p: ["Abha and Khamis Mushait are roughly 26 km apart in a straight line and about 30 minutes by car in normal traffic. A short transfer between them, a visit to a hospital, a family event or a hotel move is a simple private-car job, quoted by the trip. Give the exact pickup and drop-off addresses, since both cities are spread out."] },
          { h: "Long routes out of the region", p: ["Most longer requests from here go to Riyadh or Jeddah, and both are full-day road journeys. See Riyadh to Abha and Abha to Riyadh for the capital road, and Jeddah to Abha and Abha to Jeddah for the coast; the same routes can start from Khamis Mushait, and the quotation sets the schedule. For the south, see Najran and Jazan."] },
          { h: "Which vehicle", p: ["A sedan such as a Toyota Camry, Hyundai Sonata or Ford Taurus suits one or two business travellers. Families ask for a GMC Yukon, Chevrolet Tahoe or Toyota Prado, the last being a common choice on mountain roads, and larger groups with bags ask for a Hyundai Staria. Executives can request a luxury SUV or VIP vehicle. Availability for your date is confirmed in the quotation, subject to partner availability."] },
        ],
        checklist: { h: "Include this in your Khamis Mushait enquiry", items: ["Pickup address or hotel, and drop-off address", "Flight number and terminal if you use Abha airport", "Date, time and one way or return", "Passengers and large bags", "For a long route, whether you want a night stop", "Vehicle: sedan, GMC Yukon, Tahoe, Prado, Staria or luxury SUV"] },
        faqs: [
          { q: "Can I book a private car in Khamis Mushait?", a: "Yes, you can request one. Send your pickup, destination, date and passengers, and we confirm availability and send a quotation before anything is arranged." },
          { q: "Which airport do I use for Khamis Mushait?", a: "Abha International Airport serves the area. Tell us your flight and hotel, and we plan the pickup around them." },
          { q: "How far is Khamis Mushait from Abha?", a: "Public sources give about 26 km in a straight line and roughly 30 minutes by car in normal traffic." },
          { q: "Can you take me from Khamis Mushait to Riyadh or Jeddah?", a: "You can request either route. These are long road journeys, and the schedule and any overnight are set out in the quotation." },
          { q: "Can I ask for a Toyota Prado in Khamis Mushait?", a: "You can request a Toyota Prado, GMC Yukon, Chevrolet Tahoe or Hyundai Staria. The vehicle available for your date is confirmed in the quotation." },
        ],
      },
      ar: {
        nav: "خميس مشيط",
        title: "سيارة خاصة بسائق في خميس مشيط: كامري ويوكن وبرادو",
        description: "اطلب سيارة بسائق في خميس مشيط للتوصيل من مطار أبها ورحلات العمل والمسارات الطويلة إلى الرياض وجدة. بسعر لكل رحلة.",
        h1: "سيارة خاصة بسائق في خميس مشيط بمنطقة عسير",
        eyebrow: "المواقع · خميس مشيط",
        answer: "السيارة الخاصة بسائق في خميس مشيط هي مركبة بحجز مسبق للاستلام من المطار ورحلات العمل والرحلات الطويلة إلى الرياض أو جدة أو نجران. تبعد المدينة نحو 26 كم، أي قرابة 30 دقيقة بالسيارة، عن أبها، ومطار أبها الدولي هو المطار المستخدم للمنطقة. تُسعِّر RideSaudi كل رحلة على حدة وتؤكد المركبة والإتاحة أولًا.",
        summary: "سيارات خاصة بسائق في خميس مشيط، مرتبطة بمطار أبها والمسارات الطويلة من عسير.",
        sections: [
          { h: "مدينة تجارية بجوار أبها لا ضاحية لها", p: ["خميس مشيط من أكبر مدن منطقة عسير ومركز تجاري قائم بذاته، وهي على مسافة قصيرة بالسيارة من أبها. وكثيرًا ما يقيم المسافر في إحداهما ويعمل أو يزور أهله في الأخرى، فالتنقل بينهما شائع. ومن يبحث عن سيارة هنا يقصد عادةً أحد ثلاثة أمور: استلامًا من المطار، أو رحلة لموعد عمل، أو سفرًا طويلًا خارج المنطقة. وهذه الصفحة لهذه الأمور؛ أما الفنادق والمنتجعات ومعالم المرتفعات فراجع صفحة النقل داخل أبها."] },
          { h: "بين خميس مشيط والمطار", p: ["مطار أبها الدولي هو المطار المستخدم لمنطقة خميس مشيط. وتختلف المصادر في المسافة بين المطار ووسط المدينة، لذلك لا ننشر رقمًا: أرسل لنا فندقك أو عنوانك ورقم رحلتك ونحسب وقت الاستلام على أساسها. وفي الوصول أرسل رقم الصالة وستُستقبل بعد الحقائب، وفي المغادرة اترك هامشًا للطريق وإنهاء الإجراءات."] },
          { h: "بين المدينتين", p: ["تبعد أبها عن خميس مشيط نحو 26 كم في خط مستقيم وقرابة 30 دقيقة بالسيارة في الحركة العادية. والتوصيل القصير بينهما أو زيارة مستشفى أو مناسبة عائلية أو نقل فندقي مهمة بسيطة بسيارة خاصة تُسعَّر لكل رحلة. أرسل عنوان الاستلام والتوصيل بدقة، فالمدينتان ممتدتان."] },
          { h: "المسارات الطويلة خارج المنطقة", p: ["أغلب الطلبات الأطول من هنا إلى الرياض أو جدة، وكلاهما رحلة برية ليوم كامل. راجع صفحتي الرياض إلى أبها وأبها إلى الرياض لطريق العاصمة، وصفحتي جدة إلى أبها وأبها إلى جدة لطريق الساحل؛ ويمكن أن تنطلق المسارات نفسها من خميس مشيط، ويحدد عرض السعر الجدول. وللجنوب راجع صفحتي نجران وجازان."] },
          { h: "أي مركبة تناسبك", p: ["تناسب السيدان مثل تويوتا كامري أو هيونداي سوناتا أو فورد توروس رجل أعمال أو اثنين. وتطلب العائلات جمس يوكن أو شيفروليه تاهو أو تويوتا برادو، وهذه الأخيرة اختيار شائع للطرق الجبلية، وتطلب المجموعات الأكبر ذات الحقائب هيونداي ستاريا. ويمكن للتنفيذيين طلب سيارة دفع رباعي فاخرة أو مركبة VIP. وتُؤكَّد الإتاحة لتاريخك في عرض السعر بحسب توفر الشركاء."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب خميس مشيط", items: ["عنوان الاستلام أو الفندق، وعنوان التوصيل", "رقم الرحلة والصالة إن كنت ستستخدم مطار أبها", "التاريخ والوقت وهل الرحلة ذهاب فقط أم ذهاب وعودة", "الركاب والحقائب الكبيرة", "في المسار الطويل: هل تريد مبيتًا في الطريق", "المركبة: سيدان أو جمس يوكن أو تاهو أو برادو أو ستاريا أو دفع رباعي فاخر"] },
        faqs: [
          { q: "هل يمكن حجز سيارة خاصة في خميس مشيط؟", a: "نعم، يمكنك إرسال طلب. أرسل نقطة الاستلام والوجهة والتاريخ والركاب، ونؤكد الإتاحة ونرسل عرض السعر قبل ترتيب أي شيء." },
          { q: "أي مطار أستخدم لخميس مشيط؟", a: "يخدم مطار أبها الدولي المنطقة. أخبرنا برحلتك وفندقك ونخطط الاستلام على أساسهما." },
          { q: "كم تبعد خميس مشيط عن أبها؟", a: "تذكر مصادر عامة نحو 26 كم في خط مستقيم وقرابة 30 دقيقة بالسيارة في الحركة العادية." },
          { q: "هل يمكن التوصيل من خميس مشيط إلى الرياض أو جدة؟", a: "يمكنك طلب أي من المسارين. وهما رحلتان برّيتان طويلتان، ويُكتب الجدول وأي مبيت في عرض السعر." },
          { q: "هل يمكن طلب تويوتا برادو في خميس مشيط؟", a: "يمكنك طلب تويوتا برادو أو جمس يوكن أو شيفروليه تاهو أو هيونداي ستاريا. وتُؤكَّد المركبة المتاحة لتاريخك في عرض السعر." },
        ],
      },
    },
  },

  {
    path: `${C}/al-baha`,
    parent: C,
    variant: "default",
    service: "chauffeur",
    related: [`${I}/jeddah-to-taif`, `${I}/taif-to-jeddah`, `${T}/taif`, `${C}/jeddah`, `${A}/jeddah-airport`, `${C}/abha`],
    updated: U,
    copy: {
      en: {
        nav: "Al Baha",
        title: "Al Baha Private Car with Driver from Jeddah: Yukon or Prado",
        description: "Request a private car with a driver to or around Al Baha from Jeddah or King Abdulaziz Airport, with planning notes for Raghadan Forest and Dhee Ain. Quoted per trip.",
        h1: "Private car with a driver to Al Baha, in the Sarawat mountains",
        eyebrow: "Locations · Al Baha",
        answer: "A private car with a driver to Al Baha is a pre-booked vehicle from Jeddah, King Abdulaziz Airport or another city to Al Baha, and for getting around once you are there. Public sources put the road from Jeddah at about 380 to 438 km, roughly four and a half to five hours before stops. RideSaudi quotes each trip individually and confirms the vehicle and availability first.",
        summary: "Private cars with a driver to Al Baha and around its forest and village sights.",
        sections: [
          { h: "A mountain destination reached mostly by road from Jeddah", p: ["Al Baha is a small highland city in the Sarawat mountains, known for its cooler weather, forests and old stone villages. Most visitors from outside the region come from Jeddah, and the sources we found put the road at roughly 380 to 438 km and about four and a half to five hours of driving, a range that depends on the source and the route. Travel is by mountain road with bends and changing weather, so plan to arrive in daylight and tell us if anyone in your group is prone to travel sickness."] },
          { h: "Where visitors go", p: ["Raghadan Forest Park is about four to five kilometres from the city centre and is the usual first stop for families, with picnic areas and viewpoints. Dhee Ain, an old village on a hillside about 24 km from Al Baha, is the other well-known visit. Both are short drives from the city, and a private car with a driver lets you reach them and move on without arranging separate transport for each. Opening times and entry conditions are set by the sites, so check them before you go."] },
          { h: "Airport and arrivals", p: ["Al Baha has a domestic airport outside the city. Sources disagree on the distance, so we do not publish one: send your flight number and hotel, and we plan the pickup around them. Many visitors instead fly into Jeddah and drive; if so, see Jeddah airport transfers for the arrival side, and ask for a through journey from King Abdulaziz Airport to your Al Baha hotel."] },
          { h: "Combining Al Baha with Taif or Abha", p: ["Al Baha sits on the highland road between Taif and the Asir region, so it can be a stop on a longer trip. See Jeddah to Taif and Taif tourism transport for the northern end of that route, and Abha city transport for the south. Tell us the whole itinerary and we quote it as one journey."] },
          { h: "Choosing the vehicle", p: ["A sedan such as a Toyota Camry or Hyundai Sonata suits one or two travellers. For a family on a mountain road, a Toyota Prado, GMC Yukon or Chevrolet Tahoe gives more room, and larger groups with bags ask for a Hyundai Staria. The vehicle is confirmed in the quotation, subject to partner availability."] },
        ],
        checklist: { h: "Include this in your Al Baha enquiry", items: ["Starting point: Jeddah airport terminal, hotel or other city", "Al Baha hotel or area, and whether you want sightseeing stops", "Date, time and one way or return", "Anyone prone to motion sickness; children or older passengers", "Passengers and large bags", "Vehicle: sedan, GMC Yukon, Tahoe, Prado or Hyundai Staria"] },
        faqs: [
          { q: "Can I book a private car from Jeddah to Al Baha?", a: "Yes, you can request one. Send your date, pickup point and Al Baha destination, and we confirm availability and send a quotation before anything is arranged." },
          { q: "How far is Al Baha from Jeddah by road?", a: "Public sources vary between about 380 and 438 km, with roughly four and a half to five hours of driving before stops. Check a live map on the day." },
          { q: "Can the driver take us to Raghadan Forest Park and Dhee Ain?", a: "You can request both as stops. Raghadan is about four to five km from the centre and Dhee Ain about 24 km, and the quotation includes the plan." },
          { q: "Does Al Baha have an airport?", a: "Al Baha has a domestic airport outside the city. Tell us your flight and hotel so the pickup is planned around them." },
          { q: "Is it better to hire a Prado or a Yukon for the mountain road?", a: "Both can be requested. The Prado is a common choice for mountain roads and the Yukon for extra room; the vehicle for your date is confirmed in the quotation." },
        ],
      },
      ar: {
        nav: "الباحة",
        title: "سيارة خاصة بسائق إلى الباحة من جدة: يوكن أو برادو",
        description: "اطلب سيارة بسائق إلى الباحة أو داخلها من جدة أو مطار الملك عبدالعزيز، مع ملاحظات تخطيط لغابة رغدان وذي عين. بسعر لكل رحلة.",
        h1: "سيارة خاصة بسائق إلى الباحة في جبال السروات",
        eyebrow: "المواقع · الباحة",
        answer: "السيارة الخاصة بسائق إلى الباحة هي مركبة بحجز مسبق من جدة أو مطار الملك عبدالعزيز أو مدينة أخرى إلى الباحة، وللتنقل داخلها بعد الوصول. وتقدّر مصادر عامة الطريق من جدة بنحو 380 إلى 438 كم، أي قرابة أربع ساعات ونصف إلى خمس قبل التوقفات. تُسعِّر RideSaudi كل رحلة على حدة وتؤكد المركبة والإتاحة أولًا.",
        summary: "سيارات خاصة بسائق إلى الباحة وحول معالم غاباتها وقراها.",
        sections: [
          { h: "وجهة جبلية يُوصل إليها غالبًا بالطريق من جدة", p: ["الباحة مدينة مرتفعات صغيرة في جبال السروات، معروفة باعتدال طقسها وغاباتها وقراها الحجرية القديمة. ويأتي أغلب زوارها من خارج المنطقة عبر جدة، وتضع المصادر التي وجدناها الطريق بنحو 380 إلى 438 كم وقرابة أربع ساعات ونصف إلى خمس ساعات قيادة، وهو نطاق يتغير بحسب المصدر والمسار. والسفر عبر طريق جبلي فيه منعطفات وتغيّر في الطقس، فخططوا للوصول نهارًا وأخبرونا إن كان أحدكم يتأثر بدوار السفر."] },
          { h: "أين يقصد الزوار", p: ["تبعد غابة رغدان نحو أربعة إلى خمسة كيلومترات عن وسط المدينة، وهي أول محطة معتادة للعائلات بمناطق جلوس ومطلات. وقرية ذي عين، القرية القديمة على سفح جبل على بعد نحو 24 كم من الباحة، هي الزيارة المعروفة الأخرى. وكلتاهما رحلة قصيرة من المدينة، والسيارة الخاصة بسائق تتيح لك الوصول إليهما والانتقال دون ترتيب نقل منفصل لكل منهما. وتحدد المواقع أوقات الفتح وشروط الدخول، فتأكد منها قبل الذهاب."] },
          { h: "المطار والوصول", p: ["في الباحة مطار محلي خارج المدينة. وتختلف المصادر في المسافة، لذلك لا ننشر رقمًا: أرسل رقم رحلتك وفندقك ونحسب الاستلام على أساسهما. ويفضّل كثير من الزوار الطيران إلى جدة ثم القيادة؛ وإن كنت منهم فراجع صفحة التوصيل من مطار جدة للجانب المتعلق بالوصول، واطلب رحلة متصلة من مطار الملك عبدالعزيز إلى فندقك في الباحة."] },
          { h: "الجمع بين الباحة والطائف أو أبها", p: ["تقع الباحة على طريق المرتفعات بين الطائف ومنطقة عسير، فيمكن أن تكون محطة في رحلة أطول. راجع صفحتي جدة إلى الطائف والنقل السياحي في الطائف لطرف الطريق الشمالي، وصفحة النقل داخل أبها للجنوب. أخبرنا بالبرنامج كله ونُسعِّره رحلة واحدة."] },
          { h: "اختيار المركبة", p: ["تناسب السيدان مثل تويوتا كامري أو هيونداي سوناتا مسافرًا أو اثنين. وللعائلة على طريق جبلي تمنحك تويوتا برادو أو جمس يوكن أو شيفروليه تاهو مساحة أكبر، وتطلب المجموعات الأكبر ذات الحقائب هيونداي ستاريا. وتُؤكَّد المركبة في عرض السعر بحسب توفر الشركاء."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الباحة", items: ["نقطة الانطلاق: صالة مطار جدة أو فندق أو مدينة أخرى", "فندق الباحة أو المنطقة، وهل تريد توقفات سياحية", "التاريخ والوقت وهل الرحلة ذهاب فقط أم ذهاب وعودة", "من يتأثر بدوار السفر؛ الأطفال أو كبار السن", "الركاب والحقائب الكبيرة", "المركبة: سيدان أو جمس يوكن أو تاهو أو برادو أو هيونداي ستاريا"] },
        faqs: [
          { q: "هل يمكن حجز سيارة خاصة من جدة إلى الباحة؟", a: "نعم، يمكنك إرسال طلب. أرسل التاريخ ونقطة الاستلام ووجهتك في الباحة، ونؤكد الإتاحة ونرسل عرض السعر قبل ترتيب أي شيء." },
          { q: "كم تبعد الباحة عن جدة بالسيارة؟", a: "تتراوح المصادر العامة بين نحو 380 و438 كم، وقرابة أربع ساعات ونصف إلى خمس ساعات قيادة قبل التوقفات. راجع خريطة حية يوم السفر." },
          { q: "هل يمكن للسائق أخذنا إلى غابة رغدان وقرية ذي عين؟", a: "يمكنك طلبهما محطتين. تبعد رغدان نحو أربعة إلى خمسة كم عن الوسط وذو عين نحو 24 كم، ويتضمن عرض السعر الخطة." },
          { q: "هل في الباحة مطار؟", a: "في الباحة مطار محلي خارج المدينة. أخبرنا برحلتك وفندقك ليُخطَّط الاستلام على أساسهما." },
          { q: "هل الأفضل برادو أم يوكن للطريق الجبلي؟", a: "يمكن طلب كليهما. البرادو اختيار شائع للطرق الجبلية واليوكن لمساحة أكبر؛ وتُؤكَّد المركبة لتاريخك في عرض السعر." },
        ],
      },
    },
  },

  {
    path: `${C}/king-abdullah-economic-city`,
    parent: C,
    variant: "default",
    service: "chauffeur",
    related: [`${C}/jeddah`, `${A}/jeddah-airport`, `${I}/jeddah-to-makkah`, `${I}/jeddah-to-yanbu`, `${I}/yanbu-to-jeddah`, `${C}/makkah`],
    updated: U,
    copy: {
      en: {
        nav: "King Abdullah Economic City",
        title: "King Abdullah Economic City (KAEC) Private Car from Jeddah",
        description: "Request a private car with a driver between King Abdullah Economic City, Jeddah airport and Makkah. Executive sedan, GMC Yukon or Staria, quoted per trip.",
        h1: "Private car with a driver to King Abdullah Economic City, north of Jeddah",
        eyebrow: "Locations · KAEC",
        answer: "A private car with a driver to King Abdullah Economic City (KAEC) is a pre-booked transfer between KAEC, Jeddah's King Abdulaziz Airport or Jeddah itself, and onward cities such as Makkah. Public sources put KAEC about 100 km north of Jeddah, in the Rabigh area. RideSaudi quotes each trip individually and confirms availability before arranging anything.",
        summary: "Business-focused private transfers between KAEC, Jeddah airport and neighbouring cities.",
        sections: [
          { h: "A planned city and business destination, not a tourist town", p: ["King Abdullah Economic City is a planned development on the Red Sea coast, in the Rabigh area about 100 km north of Jeddah according to public sources. People travelling there are mostly business visitors, contractors and staff of the companies based there, and visitors to the nearby university. A private car is chosen for a fixed arrival time, for carrying luggage or equipment, and for an executive standard on a day of meetings."] },
          { h: "Between KAEC and Jeddah airport", p: ["The usual request is King Abdulaziz Airport to a KAEC hotel or office, or the reverse. Send your flight number, the terminal and the exact KAEC address or site gate, and we plan the pickup so that the driver is waiting after baggage. For a departure, work back from check-in and leave a margin for the road. Details of the terminal side are on Jeddah airport transfers."] },
          { h: "Car or high-speed train", p: ["The Haramain high-speed railway has a station serving KAEC, at the entrance to the city near the university, and public sources list journey times to the Jeddah area of well under an hour with only a few services a day. The train suits a light traveller whose timings fit the schedule; a private car suits a traveller with luggage, a group, a tight appointment or a pickup from a site that is not at the station. Check current timetables with the railway before you rely on them."] },
          { h: "Onward to Makkah, Yanbu or the city", p: ["Some travellers continue from KAEC to Makkah, to the Yanbu industrial area or back into Jeddah. See Jeddah to Makkah and Yanbu to Jeddah for those directions, and Jeddah city transport for hotel and business-district pickups in the city. Ask for a through quotation if the journey has more than one leg."] },
          { h: "Executive vehicles", p: ["For meetings, a sedan such as a Toyota Camry, Hyundai Sonata or Ford Taurus is the usual request, and senior guests can ask for a luxury SUV or VIP vehicle. Colleagues travelling together usually choose a GMC Yukon, GMC Suburban or Chevrolet Tahoe, and groups with equipment a Hyundai Staria. Availability is confirmed in the quotation, subject to partner availability."] },
        ],
        checklist: { h: "Include this in your KAEC enquiry", items: ["Flight number and terminal, or the Jeddah address", "KAEC hotel, office or site gate and a contact number", "Date, time and one way or return", "Passengers and luggage or equipment", "Any onward leg: Makkah, Yanbu or Jeddah", "Vehicle: executive sedan, GMC Yukon or Suburban, Staria or luxury SUV"] },
        faqs: [
          { q: "Can I book a private car from Jeddah Airport to King Abdullah Economic City?", a: "Yes, you can request one. Send your flight and the KAEC address, and we confirm availability and the timings in the quotation before arranging anything." },
          { q: "How far is KAEC from Jeddah?", a: "Public sources put KAEC about 100 km north of Jeddah, in the Rabigh area. Check a live map for your route." },
          { q: "Is there a train to KAEC?", a: "The Haramain high-speed railway has a station serving KAEC. Check current timetables with the railway; a private car is the alternative for luggage, groups or tight timings." },
          { q: "Can I travel on from KAEC to Makkah?", a: "You can ask for the journey to continue to Makkah, and it is quoted as one trip." },
          { q: "Can I request an executive vehicle for a business visit to KAEC?", a: "You can request an executive sedan, GMC SUV or a luxury or VIP vehicle, and availability for your date is confirmed in the quotation." },
        ],
      },
      ar: {
        nav: "مدينة الملك عبدالله الاقتصادية",
        title: "سيارة خاصة إلى مدينة الملك عبدالله الاقتصادية من جدة",
        description: "اطلب سيارة بسائق بين مدينة الملك عبدالله الاقتصادية ومطار جدة ومكة. سيدان تنفيذي أو جمس يوكن أو ستاريا بسعر لكل رحلة.",
        h1: "سيارة خاصة بسائق إلى مدينة الملك عبدالله الاقتصادية شمال جدة",
        eyebrow: "المواقع · مدينة الملك عبدالله الاقتصادية",
        answer: "السيارة الخاصة بسائق إلى مدينة الملك عبدالله الاقتصادية هي توصيلة بحجز مسبق بين المدينة ومطار الملك عبدالعزيز في جدة أو جدة نفسها ومدن أبعد مثل مكة. وتضع مصادر عامة المدينة على بعد نحو 100 كم شمال جدة في منطقة رابغ. تُسعِّر RideSaudi كل رحلة على حدة وتؤكد الإتاحة قبل ترتيب أي شيء.",
        summary: "توصيلات خاصة لرجال الأعمال بين المدينة الاقتصادية ومطار جدة والمدن المجاورة.",
        sections: [
          { h: "مدينة مخططة ووجهة أعمال لا بلدة سياحية", p: ["مدينة الملك عبدالله الاقتصادية مشروع مخطط على ساحل البحر الأحمر في منطقة رابغ على بعد نحو 100 كم شمال جدة بحسب مصادر عامة. والمسافرون إليها في الغالب زوار أعمال ومقاولون وموظفو الشركات فيها وزوار الجامعة القريبة. وتُختار السيارة الخاصة لموعد وصول ثابت ولحمل الأمتعة أو المعدات ولمستوى تنفيذي في يوم اجتماعات."] },
          { h: "بين المدينة ومطار جدة", p: ["الطلب المعتاد من مطار الملك عبدالعزيز إلى فندق أو مكتب في المدينة الاقتصادية أو العكس. أرسل رقم رحلتك والصالة وعنوان المدينة الدقيق أو بوابة الموقع، ونخطط الاستلام ليكون السائق بانتظارك بعد الحقائب. وفي المغادرة احسب عكسيًا من وقت إنهاء الإجراءات واترك هامشًا للطريق. وتفاصيل جانب الصالات في صفحة التوصيل من مطار جدة."] },
          { h: "السيارة أم القطار السريع", p: ["لقطار الحرمين السريع محطة تخدم المدينة الاقتصادية عند مدخلها قرب الجامعة، وتذكر مصادر عامة أزمنة رحلة إلى منطقة جدة أقل من ساعة بكثير مع رحلات قليلة يوميًا. ويناسب القطار مسافرًا خفيفًا تتوافق مواعيده مع الجدول؛ وتناسب السيارة الخاصة من معه أمتعة أو مجموعة أو موعدًا ضيقًا أو استلامًا من موقع ليس عند المحطة. وتأكد من مواعيد القطار الحالية لدى الجهة المشغّلة قبل الاعتماد عليها."] },
          { h: "إلى مكة أو ينبع أو المدينة", p: ["يواصل بعض المسافرين من المدينة الاقتصادية إلى مكة أو إلى منطقة ينبع الصناعية أو يعودون إلى جدة. راجع صفحتي جدة إلى مكة وينبع إلى جدة لهذه الاتجاهات، وصفحة النقل داخل جدة للاستلام من الفنادق ومناطق الأعمال في المدينة. واطلب عرضًا متصلًا إن كانت الرحلة بأكثر من مرحلة."] },
          { h: "مركبات تنفيذية", p: ["للاجتماعات تكون السيدان مثل تويوتا كامري أو هيونداي سوناتا أو فورد توروس هي الطلب المعتاد، ويمكن للضيوف الكبار طلب سيارة دفع رباعي فاخرة أو مركبة VIP. ويختار الزملاء المسافرون معًا غالبًا جمس يوكن أو جمس سوبربان أو شيفروليه تاهو، وتختار المجموعات ذات المعدات هيونداي ستاريا. وتُؤكَّد الإتاحة في عرض السعر بحسب توفر الشركاء."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب المدينة الاقتصادية", items: ["رقم الرحلة والصالة، أو عنوان جدة", "فندق المدينة الاقتصادية أو المكتب أو بوابة الموقع ورقم للتواصل", "التاريخ والوقت وهل الرحلة ذهاب فقط أم ذهاب وعودة", "الركاب والأمتعة أو المعدات", "أي مرحلة لاحقة: مكة أو ينبع أو جدة", "المركبة: سيدان تنفيذي أو جمس يوكن أو سوبربان أو ستاريا أو دفع رباعي فاخر"] },
        faqs: [
          { q: "هل يمكن حجز سيارة خاصة من مطار جدة إلى مدينة الملك عبدالله الاقتصادية؟", a: "نعم، يمكنك إرسال طلب. أرسل رحلتك وعنوان المدينة، ونؤكد الإتاحة والمواعيد في عرض السعر قبل ترتيب أي شيء." },
          { q: "كم تبعد المدينة الاقتصادية عن جدة؟", a: "تضعها مصادر عامة على بعد نحو 100 كم شمال جدة في منطقة رابغ. راجع خريطة حية لمسارك." },
          { q: "هل يوجد قطار إلى المدينة الاقتصادية؟", a: "لقطار الحرمين السريع محطة تخدم المدينة. راجع المواعيد الحالية لدى الجهة المشغّلة؛ والسيارة الخاصة بديل للأمتعة والمجموعات والمواعيد الضيقة." },
          { q: "هل يمكن مواصلة السفر من المدينة الاقتصادية إلى مكة؟", a: "يمكنك طلب مواصلة الرحلة إلى مكة، وتُسعَّر رحلة واحدة." },
          { q: "هل يمكن طلب مركبة تنفيذية لزيارة عمل إلى المدينة الاقتصادية؟", a: "يمكنك طلب سيدان تنفيذي أو جمس أو مركبة فاخرة أو VIP، وتُؤكَّد الإتاحة لتاريخك في عرض السعر." },
        ],
      },
    },
  },
];

/** Existing pages that link to the new location pages so none is orphaned. */
export const locationBacklinks: Record<string, string[]> = {
  [`${C}/abha`]: [`${C}/khamis-mushait`],
  [`${I}/riyadh-to-abha`]: [`${C}/khamis-mushait`],
  [`${I}/abha-to-riyadh`]: [`${C}/khamis-mushait`],
  [`${C}/najran`]: [`${C}/khamis-mushait`],
  [`${C}/jeddah`]: [`${C}/al-baha`, `${C}/king-abdullah-economic-city`],
  [`${T}/taif`]: [`${C}/al-baha`],
  [`${I}/jeddah-to-taif`]: [`${C}/al-baha`],
  [`${A}/jeddah-airport`]: [`${C}/king-abdullah-economic-city`],
  [`${I}/jeddah-to-yanbu`]: [`${C}/king-abdullah-economic-city`],
  [`${I}/jeddah-to-makkah`]: [`${C}/king-abdullah-economic-city`],
};
