import type { ServicePage } from "./types";

const U = "2026-11-10";
const I = "services/intercity-transfers";
const X = "services/cross-border-transfers";

/**
 * Eastern Province-origin routes. Distances are approximate figures from public travel sources
 * (Dammam to Hofuf about 150 to 155 km; King Fahd Causeway about 25 km; Dammam to Jubail roughly 100 km)
 * and are never presented as RideSaudi operating data. Entry rules are not stated: travellers are sent
 * to official authorities (SEO-RULES.md section 3).
 */
export const batch13EasternProvince: ServicePage[] = [
  {
    path: `${I}/dammam-to-bahrain`,
    parent: `${X}/bahrain`,
    variant: "default",
    service: "intercity",
    related: [`${X}/bahrain`, `${I}/riyadh-to-manama`, "services/airport-transfers/dammam-airport", "services/city-transport/al-khobar", `${I}/riyadh-to-dammam`, "services/city-transport/dhahran"],
    updated: U,
    copy: {
      en: {
        nav: "Dammam to Bahrain",
        title: "Dammam & Al Khobar to Bahrain Private Transfer",
        description: "Request a private car with a driver from Dammam, Al Khobar or Dhahran to Manama or Bahrain Airport over the King Fahd Causeway, and back. Get a quotation.",
        h1: "Dammam and Al Khobar to Bahrain by private car",
        eyebrow: "Cross-border · Eastern Province ⇄ Bahrain",
        answer: "A private Dammam to Bahrain transfer is a pre-booked car with a driver from Dammam, Al Khobar or Dhahran to a Bahrain address or Bahrain International Airport over the King Fahd Causeway, and back. The causeway is about 25 km long. RideSaudi quotes each journey individually; documents are yours to check and availability is confirmed before you commit.",
        summary: "A short planned private road transfer from the Eastern Province to Bahrain, including the airport.",
        sections: [
          { h: "Why start from the Eastern Province", p: ["Most Bahrain-bound road journeys begin in Al Khobar, Dhahran or Dammam because the King Fahd Causeway starts on the Khobar side. That makes this the shortest way to reach Bahrain by car from Saudi Arabia, and a common choice for a weekend, a business meeting or a Bahrain flight. Travellers starting in Riyadh should read Riyadh to Manama, which adds the long drive to the coast."] },
          { h: "Heading to Bahrain International Airport", p: ["Some travellers cross by road to catch a flight from Bahrain rather than from Dammam. If you do, give us your flight time and terminal, and leave generous margin for the causeway: queues and processing times vary by day and hour and we do not publish a crossing time. Compare this with Dammam airport transfers if the flight departs from King Fahd International Airport instead."] },
          { h: "Starting in Dammam, Al Khobar or Dhahran", p: ["Tell us the district, hotel or company gate where the car should meet you; Corniche hotels, Dhahran offices and Dammam homes all start from different points, and the pickup point shapes the first part of the journey. The Al Khobar page lists the local areas we are asked about."] },
          { h: "Coming back: Bahrain to the Eastern Province", p: ["The return starts at a Bahrain hotel, home or the airport and ends in Dammam, Al Khobar or Dhahran, or continues on to Riyadh. Add the return to the same enquiry when the date is known, or request it later. Every passenger must meet Saudi entry or re-entry requirements on the way back."] },
          { h: "Documents, vehicle and causeway conditions", p: ["Visa and entry rules depend on nationality, residency and purpose and change over time. RideSaudi does not issue visas. Check each passenger's requirements with the Saudi and Bahraini authorities. The causeway has been closed or restricted at short notice in the past, so confirm conditions close to your travel date. Whether a specific vehicle and driver can cross is confirmed in your quotation, not assumed."] },
        ],
        checklist: { h: "Include this in your Dammam to Bahrain enquiry", items: ["Direction, date and preferred departure time", "Exact Saudi pickup and Bahrain destination or airport and flight time", "Nationalities and residency status of every passenger", "Number of passengers and luggage", "Return journey, if known", "Vehicle preference"] },
        faqs: [
          { q: "Can I book a private car from Dammam to Bahrain?", a: "You can request it. The journey is quoted individually and confirmed only after you accept the quotation." },
          { q: "How long is the King Fahd Causeway?", a: "About 25 km according to public sources. Crossing time depends on traffic and processing, so we do not publish a figure." },
          { q: "Can you take me from Al Khobar to Bahrain Airport?", a: "You can request it. Give your flight time so the departure can be planned with margin; availability is confirmed in the quotation." },
          { q: "Do I need a visa for Bahrain from Dammam?", a: "It depends on nationality and status. RideSaudi cannot confirm eligibility; check with the official Saudi and Bahraini authorities." },
          { q: "Can I return from Bahrain to Dammam with you?", a: "You can request the reverse journey from a Bahrain hotel, home or the airport." },
        ],
      },
      ar: {
        nav: "الدمام إلى البحرين",
        title: "من الدمام والخبر إلى البحرين: توصيل خاص",
        description: "اطلب سيارة خاصة بسائق من الدمام أو الخبر أو الظهران إلى المنامة أو مطار البحرين عبر جسر الملك فهد، والعودة أيضًا. استلم عرض سعر.",
        h1: "من الدمام والخبر إلى البحرين بسيارة خاصة",
        eyebrow: "عبر الحدود · المنطقة الشرقية ⇄ البحرين",
        answer: "التوصيل الخاص من الدمام إلى البحرين هو سيارة بسائق وبحجز مسبق من الدمام أو الخبر أو الظهران إلى عنوان في البحرين أو مطار البحرين الدولي عبر جسر الملك فهد، والعكس. ويبلغ طول الجسر نحو 25 كم. تُسعِّر RideSaudi كل رحلة على حدة؛ والوثائق عليك التحقق منها وتتأكد الإتاحة قبل أن تلتزم.",
        summary: "رحلة برية قصيرة مخطط لها من المنطقة الشرقية إلى البحرين، ومنها المطار.",
        sections: [
          { h: "لماذا الانطلاق من المنطقة الشرقية", p: ["تبدأ معظم الرحلات البرية إلى البحرين من الخبر أو الظهران أو الدمام لأن جسر الملك فهد ينطلق من جهة الخبر. وهذا أقصر طريق بالسيارة من السعودية إلى البحرين، وهو خيار شائع لنهاية أسبوع أو اجتماع عمل أو رحلة طيران من البحرين. ومن ينطلق من الرياض فليقرأ صفحة الرياض إلى المنامة التي تضيف الطريق الطويل إلى الساحل."] },
          { h: "التوجه إلى مطار البحرين الدولي", p: ["يعبر بعض المسافرين برًّا ليستقلوا رحلتهم من البحرين بدل الدمام. إن كنت منهم فأرسل لنا موعد الرحلة والصالة واترك هامشًا واسعًا للجسر، فالطوابير وزمن الإجراءات يختلفان باليوم والساعة ولا ننشر زمنًا للعبور. وقارن ذلك بخدمة التوصيل من مطار الدمام إن كانت رحلتك تغادر من مطار الملك فهد الدولي."] },
          { h: "الانطلاق من الدمام أو الخبر أو الظهران", p: ["حدّد الحي أو الفندق أو بوابة الشركة التي تريد أن تلتقي السيارة بك عندها؛ فالفنادق على الكورنيش ومكاتب الظهران ومنازل الدمام تنطلق من نقاط مختلفة، ونقطة الاستلام تحدد الجزء الأول من الرحلة. وتذكر صفحة الخبر المناطق المحلية التي نُسأل عنها."] },
          { h: "العودة: من البحرين إلى المنطقة الشرقية", p: ["تبدأ العودة من فندق أو منزل في البحرين أو من المطار وتنتهي في الدمام أو الخبر أو الظهران، أو تتابع إلى الرياض. أضف العودة إلى الطلب نفسه إن عُرف التاريخ، أو اطلبها لاحقًا. ويجب أن يستوفي كل راكب شروط الدخول أو العودة إلى السعودية."] },
          { h: "الوثائق والمركبة وأحوال الجسر", p: ["تعتمد شروط التأشيرة والدخول على الجنسية والإقامة والغرض وتتغير مع الوقت. ولا تصدر RideSaudi تأشيرات. تحقق من متطلبات كل راكب لدى الجهات السعودية والبحرينية. وقد أُغلق الجسر أو قُيّد في السابق بإشعار قصير، فتأكد من الأحوال قرب موعد سفرك. وإمكانية عبور مركبة وسائق محددين تُؤكَّد في عرض السعر ولا تُفترض."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الدمام إلى البحرين", items: ["الاتجاه والتاريخ ووقت الانطلاق المفضل", "عنوان الاستلام في السعودية ووجهة البحرين أو المطار وموعد الرحلة", "جنسيات الركاب وحالة إقامة كل منهم", "عدد الركاب والحقائب", "رحلة العودة إن عُرفت", "تفضيل السيارة"] },
        faqs: [
          { q: "هل يمكنني حجز سيارة خاصة من الدمام إلى البحرين؟", a: "يمكنك طلب ذلك. تُسعَّر الرحلة على حدة ولا تتأكد إلا بعد موافقتك على عرض السعر." },
          { q: "ما طول جسر الملك فهد؟", a: "نحو 25 كم بحسب مصادر عامة. ويتوقف زمن العبور على الحركة والإجراءات، لذلك لا ننشر رقمًا." },
          { q: "هل توصلونني من الخبر إلى مطار البحرين؟", a: "يمكنك طلب ذلك. أرسل موعد رحلتك ليُخطَّط الانطلاق بهامش كافٍ؛ وتُؤكَّد الإتاحة في عرض السعر." },
          { q: "هل أحتاج تأشيرة للبحرين عند السفر من الدمام؟", a: "يعتمد ذلك على الجنسية والوضع. لا تستطيع RideSaudi تأكيد أهليتك؛ تحقق لدى الجهات الرسمية السعودية والبحرينية." },
          { q: "هل يمكنني العودة من البحرين إلى الدمام معكم؟", a: "يمكنك طلب الرحلة العكسية من فندق أو منزل في البحرين أو من المطار." },
        ],
      },
    },
  },
  {
    path: `${I}/dammam-to-al-ahsa`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/riyadh-to-al-ahsa`, `${I}/riyadh-to-dammam`, "services/city-transport/dammam", "services/airport-transfers/dammam-airport", "services/city-transport/al-ahsa", "services/airport-transfers/al-ahsa-airport"],
    updated: U,
    copy: {
      en: {
        nav: "Dammam to Al Ahsa",
        title: "Dammam to Al Ahsa (Hofuf) Private Car with Driver",
        description: "Request a private car with a driver between Dammam, Al Khobar and Al Ahsa (Hofuf), in either direction. Plan the journey and get a RideSaudi quotation.",
        h1: "Dammam to Al Ahsa by private car",
        eyebrow: "Intercity · Eastern Province",
        answer: "A private Dammam to Al Ahsa transfer is a pre-booked car with a driver between Dammam or Al Khobar and Al Ahsa (Hofuf), and back. Public sources put the road at about 150 to 155 km, roughly an hour and a half to 1 hour 45 minutes of driving. RideSaudi quotes each journey individually and confirms availability first.",
        summary: "A day-trip or one-way private car between the Gulf coast and the Al Ahsa oasis.",
        sections: [
          { h: "A short intercity run with a clear purpose", p: ["Al Ahsa is reached from the Dammam and Al Khobar area by a high-quality highway, and the figures above are approximate: traffic, stops and the exact start and end points change them. Typical reasons to book are family visits, business in Hofuf, weekend visits to the oasis and heritage sites, or meeting a flight on the coast."] },
          { h: "One way, return or a full day", p: ["You can request a single transfer, a same-day return, or a car and driver kept with you for the day. If you plan to stay in Al Ahsa for several hours, say so in the enquiry because waiting time is quoted separately from the transfer. See hourly driver for time-based booking."] },
          { h: "Coming from the airport", p: ["Travellers landing at King Fahd International Airport often continue directly to Al Ahsa. Send your flight number and arrival time and tell us how many passengers and bags you have so the vehicle can be matched; see Dammam airport transfers. Meet-and-greet and flight monitoring are not assumed and are confirmed in the quotation."] },
          { h: "From Riyadh instead?", p: ["Those starting in the capital should use the Riyadh to Al Ahsa page, which covers the longer drive from Riyadh."] },
        ],
        checklist: { h: "Include this in your Dammam to Al Ahsa enquiry", items: ["Direction, date and departure time", "Exact pickup and Al Ahsa destination", "Passengers and luggage", "Whether you need a return or the car to wait", "Flight details if starting at the airport"] },
        faqs: [
          { q: "How far is Dammam from Al Ahsa by road?", a: "Public sources give about 150 to 155 km and around 1.5 to 1.75 hours of driving. Treat it as approximate." },
          { q: "Can I book a same-day return from Dammam to Hofuf?", a: "You can request it. Waiting time is part of the quotation." },
          { q: "Can the car meet me at King Fahd International Airport?", a: "You can request an airport pickup followed by the Al Ahsa journey; availability is confirmed in the quotation." },
          { q: "Is a fixed price listed for Dammam to Al Ahsa?", a: "No. Each journey is quoted by date, vehicle and requirements." },
        ],
      },
      ar: {
        nav: "الدمام إلى الأحساء",
        title: "الدمام إلى الأحساء: سيارة خاصة مع سائق",
        description: "اطلب سيارة خاصة بسائق بين الدمام والخبر والأحساء (الهفوف) بالاتجاهين. خطط لرحلتك واستلم عرض سعر من RideSaudi.",
        h1: "من الدمام إلى الأحساء بسيارة خاصة",
        eyebrow: "بين المدن · المنطقة الشرقية",
        answer: "التوصيل الخاص من الدمام إلى الأحساء هو سيارة بسائق وبحجز مسبق بين الدمام أو الخبر والأحساء (الهفوف)، والعودة. وتقدّر مصادر عامة الطريق بنحو 150 إلى 155 كم، أي ساعة ونصف إلى ساعة و45 دقيقة تقريبًا. تُسعِّر RideSaudi كل رحلة على حدة وتؤكد الإتاحة أولًا.",
        summary: "سيارة خاصة لرحلة يوم أو اتجاه واحد بين ساحل الخليج وواحة الأحساء.",
        sections: [
          { h: "رحلة قصيرة بين المدن لها غرض واضح", p: ["يُوصل إلى الأحساء من الدمام والخبر عبر طريق سريع جيد، والأرقام أعلاه تقريبية: فالحركة والتوقفات ونقطتا البداية والنهاية تغيّرها. ومن أسباب الحجز المعتادة زيارة الأهل وأعمال في الهفوف وزيارات نهاية الأسبوع للواحة والمواقع التراثية، أو اللحاق برحلة طيران على الساحل."] },
          { h: "اتجاه واحد أو ذهاب وعودة أو يوم كامل", p: ["يمكنك طلب توصيلة واحدة أو ذهابًا وعودة في اليوم نفسه أو إبقاء سيارة وسائق معك طوال اليوم. وإن كنت ستبقى في الأحساء ساعات فاذكر ذلك في الطلب لأن وقت الانتظار يُسعَّر منفصلًا عن التوصيلة. راجع صفحة السائق بالساعة للحجز بالوقت."] },
          { h: "القادمون من المطار", p: ["كثير من القادمين إلى مطار الملك فهد الدولي يتابعون مباشرة إلى الأحساء. أرسل رقم رحلتك ووقت الوصول وعدد الركاب والحقائب ليُطابَق المركبة المناسبة؛ وراجع صفحة التوصيل من مطار الدمام. ولا نفترض الاستقبال بالاسم أو متابعة الرحلة، وتُؤكَّد في عرض السعر."] },
          { h: "من الرياض بدلًا من ذلك؟", p: ["من ينطلق من العاصمة فليستخدم صفحة الرياض إلى الأحساء التي تغطي الطريق الأطول من الرياض."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الدمام إلى الأحساء", items: ["الاتجاه والتاريخ ووقت الانطلاق", "عنوان الاستلام والوجهة في الأحساء", "الركاب والحقائب", "هل تحتاج عودة أو انتظار السيارة", "تفاصيل الرحلة إن كان الانطلاق من المطار"] },
        faqs: [
          { q: "كم تبعد الدمام عن الأحساء بالسيارة؟", a: "تذكر مصادر عامة نحو 150 إلى 155 كم ونحو ساعة ونصف إلى ساعة و45 دقيقة. اعتبرها تقريبية." },
          { q: "هل يمكن حجز ذهاب وعودة في اليوم نفسه من الدمام إلى الهفوف؟", a: "يمكنك طلب ذلك. ويدخل وقت الانتظار في عرض السعر." },
          { q: "هل تستقبلني السيارة في مطار الملك فهد الدولي؟", a: "يمكنك طلب استقبال من المطار يتبعه مشوار الأحساء؛ وتُؤكَّد الإتاحة في عرض السعر." },
          { q: "هل يوجد سعر ثابت للدمام إلى الأحساء؟", a: "لا. تُسعَّر كل رحلة بحسب التاريخ والسيارة والمتطلبات." },
        ],
      },
    },
  },
  {
    path: `${I}/dammam-to-jubail`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/riyadh-to-jubail`, "services/city-transport/jubail", "services/city-transport/dammam", "services/airport-transfers/dammam-airport"],
    updated: U,
    copy: {
      en: {
        nav: "Dammam to Jubail",
        title: "Dammam to Jubail Private Car with Driver",
        description: "Request a private car with a driver between Dammam, King Fahd Airport and Jubail, in either direction, for business, industrial-city visits or family travel.",
        h1: "Dammam to Jubail by private car",
        eyebrow: "Intercity · Eastern Province",
        answer: "A private Dammam to Jubail transfer is a pre-booked car with a driver between Dammam, Al Khobar or Dammam airport and Jubail, and back. The road is roughly 100 km, about an hour or a little more depending on traffic and where in each city you start. RideSaudi quotes each journey individually.",
        summary: "A planned private car along the Gulf coast between Dammam and Jubail.",
        sections: [
          { h: "Who books this route", p: ["Most requests involve business: visitors with meetings in Jubail Industrial City or at a Jubail office, contractors and engineers arriving at Dammam airport, and families visiting the Jubail area. Distance and time are approximate figures from public sources; they change with traffic, roadworks and the exact start and end addresses."] },
          { h: "Jubail Industrial City vs Jubail city", p: ["The industrial city and the residential and tourist areas are in different parts of the Jubail area. Tell us the exact site, gate or hotel, and whether the destination needs access arrangements. Visitor access rules are set by the site, not by us, so check them with your host before you travel."] },
          { h: "Airport arrivals and departures", p: ["King Fahd International Airport is the usual gateway. Send flight details and the number of passengers and bags. For departures, say the flight time so the pickup can be planned with margin; see Dammam airport transfers. Waiting, flight monitoring and meet-and-greet are confirmed in the quotation, not assumed."] },
          { h: "Coming from Riyadh", p: ["If you travel from Riyadh, the Riyadh to Jubail page covers the longer inland route."] },
        ],
        checklist: { h: "Include this in your Dammam to Jubail enquiry", items: ["Direction, date and time", "Exact pickup and Jubail destination, including any site gate", "Passengers and luggage", "Flight details if using the airport", "Return or waiting time needed"] },
        faqs: [
          { q: "How far is Dammam from Jubail?", a: "Roughly 100 km and about an hour or a little more by road. Public sources vary, so treat it as approximate." },
          { q: "Can I book a private car from Dammam airport to Jubail?", a: "You can request it. Send your flight details; availability is confirmed in the quotation." },
          { q: "Can you take me to Jubail Industrial City?", a: "You can request it. Check site access requirements with your host first." },
          { q: "Do you publish a fixed fare for Dammam to Jubail?", a: "No. Journeys are quoted individually." },
        ],
      },
      ar: {
        nav: "الدمام إلى الجبيل",
        title: "الدمام إلى الجبيل: سيارة خاصة مع سائق",
        description: "اطلب سيارة خاصة بسائق بين الدمام ومطار الملك فهد والجبيل بالاتجاهين، لأعمال أو زيارة المدينة الصناعية أو سفر عائلي.",
        h1: "من الدمام إلى الجبيل بسيارة خاصة",
        eyebrow: "بين المدن · المنطقة الشرقية",
        answer: "التوصيل الخاص من الدمام إلى الجبيل هو سيارة بسائق وبحجز مسبق بين الدمام أو الخبر أو مطار الدمام والجبيل، والعودة. والطريق نحو 100 كم تقريبًا، أي ساعة أو أكثر قليلًا بحسب الحركة ونقطتي الانطلاق والوصول. تُسعِّر RideSaudi كل رحلة على حدة.",
        summary: "سيارة خاصة مخطط لها على ساحل الخليج بين الدمام والجبيل.",
        sections: [
          { h: "من يحجز هذا المسار", p: ["تدور أغلب الطلبات حول الأعمال: زوار لديهم اجتماعات في الجبيل الصناعية أو مكتب في الجبيل، ومقاولون ومهندسون يصلون مطار الدمام، وعائلات تزور منطقة الجبيل. والمسافة والزمن أرقام تقريبية من مصادر عامة، وتتغير بالحركة والأشغال والعنوانين بدقة."] },
          { h: "الجبيل الصناعية أم مدينة الجبيل", p: ["تقع المدينة الصناعية والمناطق السكنية والسياحية في أجزاء مختلفة من منطقة الجبيل. أخبرنا بالموقع أو البوابة أو الفندق بدقة، وهل تحتاج الوجهة ترتيبات دخول. قواعد دخول الزوار يحددها الموقع لا نحن، فتأكد منها مع مضيفك قبل السفر."] },
          { h: "الوصول والمغادرة عبر المطار", p: ["مطار الملك فهد الدولي هو البوابة المعتادة. أرسل تفاصيل الرحلة وعدد الركاب والحقائب. وللمغادرة اذكر موعد الرحلة ليُخطَّط الاستلام بهامش كافٍ؛ وراجع صفحة التوصيل من مطار الدمام. ويُؤكَّد الانتظار ومتابعة الرحلة والاستقبال في عرض السعر ولا تُفترض."] },
          { h: "القادمون من الرياض", p: ["إن كنت مسافرًا من الرياض فتغطي صفحة الرياض إلى الجبيل الطريق الداخلي الأطول."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الدمام إلى الجبيل", items: ["الاتجاه والتاريخ والوقت", "عنوان الاستلام ووجهة الجبيل بدقة مع بوابة الموقع إن وجدت", "الركاب والحقائب", "تفاصيل الرحلة إن استُخدم المطار", "العودة أو وقت الانتظار المطلوب"] },
        faqs: [
          { q: "كم تبعد الدمام عن الجبيل؟", a: "نحو 100 كم تقريبًا وساعة أو أكثر قليلًا بالسيارة. وتتفاوت المصادر العامة، فاعتبر الرقم تقريبيًا." },
          { q: "هل يمكن حجز سيارة خاصة من مطار الدمام إلى الجبيل؟", a: "يمكنك طلب ذلك. أرسل تفاصيل رحلتك؛ وتُؤكَّد الإتاحة في عرض السعر." },
          { q: "هل توصلونني إلى الجبيل الصناعية؟", a: "يمكنك طلب ذلك. تأكد من متطلبات دخول الموقع مع مضيفك أولًا." },
          { q: "هل تنشرون سعرًا ثابتًا للدمام إلى الجبيل؟", a: "لا. تُسعَّر الرحلات على حدة." },
        ],
      },
    },
  },
];
