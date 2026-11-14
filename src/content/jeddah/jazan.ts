import type { ServicePage } from "../types";

const U = "2026-11-14";
const I = "services/intercity-transfers";
const A = "services/airport-transfers";
const C = "services/city-transport";

/**
 * Jeddah to Jazan and the reverse. Distance: public distance-calculator and transfer-operator
 * sources checked 2026-11-14 give about 710 to 725 km and about 7 to 8 h before stops. Ferry
 * details are not published here; readers are sent to the operator.
 */
export const jazanPages: ServicePage[] = [
  {
    path: `${I}/jeddah-to-jazan`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/jazan-to-jeddah`, `${I}/jeddah-to-abha`, `${I}/jeddah-to-makkah`, `${A}/jeddah-airport`, `${C}/jeddah`, `${C}/jazan`],
    updated: U,
    copy: {
      en: {
        nav: "Jeddah to Jazan",
        title: "Jeddah to Jazan Private Car: GMC, Staria or Sedan",
        description: "Request a private GMC Yukon, Hyundai Staria or sedan with a driver from Jeddah or King Abdulaziz Airport to Jazan along the Red Sea road, one way or return.",
        h1: "Jeddah to Jazan by private car, down the Red Sea coast",
        eyebrow: "Intercity · Jeddah to Jazan",
        answer: "A private Jeddah to Jazan transfer is a pre-booked car with a driver from Jeddah, or King Abdulaziz Airport, south along the Red Sea coast to Jazan. Public mapping sources put the road at about 710 to 725 km, roughly seven to eight hours of driving before stops. RideSaudi quotes each journey individually and confirms the vehicle, a sedan, GMC Yukon or Hyundai Staria, for your date.",
        summary: "A private road journey from Jeddah to Jazan along the Red Sea coast.",
        sections: [
          { h: "A coastal journey of a full day", p: ["The road to Jazan follows the Red Sea coast through towns such as Al Lith and Al Qunfudhah. Mapping sources give about 710 to 725 km and seven to eight hours at normal speed, and stops come on top, so plan it as a full day rather than an afternoon trip. Because there are fewer large towns along the way than on the Jeddah to Riyadh road, tell us if you want planned meal and prayer stops rather than leaving it to chance. A flight between Jeddah and Jazan is far shorter; the car is for people who want to travel with family and luggage, or stop along the coast."] },
          { h: "Leaving Jeddah", p: ["Pickups are usually from King Abdulaziz Airport or a Jeddah hotel. If you arrive by air and continue straight south, send the terminal and flight number so the driver is waiting after baggage; if your flight lands late, consider starting the next morning. See Jeddah airport transfers for the terminal side. Going to Makkah first? See Jeddah to Makkah."] },
          { h: "At Jazan and beyond", p: ["Jazan is the base for the south-western corner of the Kingdom and for the ferry to the Farasan Islands, which operates from Jazan port; confirm ferry times and booking rules with the operator and plan your arrival around them. Give us your exact hotel or the port, and tell us if you will continue further inland. Distances inland are not published here, so ask in the enquiry and we will confirm."] },
          { h: "Choosing the vehicle", p: ["A sedan such as a Hyundai Sonata or Ford Taurus suits one or two passengers with ordinary bags. Families usually ask for a GMC Yukon, Toyota Prado or GMC Suburban for the room on a long coastal drive, and groups carrying diving, fishing or holiday gear ask for a Hyundai Staria. Tell us passengers, bags and equipment; the vehicle is confirmed in the quotation, subject to availability for your date."] },
        ],
        checklist: { h: "Include this in your Jeddah to Jazan enquiry", items: ["Date, departure time and one way or return", "Jeddah airport terminal and flight, or hotel address", "Jazan hotel, port or other destination", "Whether you want planned meal and prayer stops", "Passengers, large bags and any equipment", "Vehicle: sedan, GMC Yukon or Hyundai Staria"] },
        table: { h: "What to settle before you travel", head: ["Question", "Why it matters", "What to send us"], rows: [["Final destination", "Jazan city, the port and inland towns are different drives", "Hotel or port name"], ["Departure time", "Seven to eight hours before stops means a morning start", "Your preferred time"], ["Return plan", "A return needs its own pickup time and place", "Return date and pickup point"], ["Equipment", "Diving or fishing gear takes boot space", "Number and size of bags"]] },
        faqs: [
          { q: "Can I book a private car from Jeddah to Jazan?", a: "Yes, you can request one. Send your date, pickup point and Jazan destination, and we confirm availability and send a quotation before anything is arranged." },
          { q: "How long is the drive from Jeddah to Jazan?", a: "Public mapping sources give about 710 to 725 km and roughly seven to eight hours of driving before stops. Check a live map on the day." },
          { q: "Can you take me from Jeddah Airport to Jazan?", a: "You can request it. Send your flight number so the driver waits after baggage; a late arrival may be better started the next morning." },
          { q: "Can I reach the Farasan ferry by private car?", a: "You can ask to be taken to Jazan port. Check ferry times and booking rules with the operator, and give us the time you need to be there." },
          { q: "Is a GMC Yukon available for Jazan?", a: "A GMC Yukon, Hyundai Staria or sedan can be requested. Availability for your date is confirmed in the quotation." },
        ],
      },
      ar: {
        nav: "جدة إلى جازان",
        title: "من جدة إلى جازان: سيارة خاصة بسائق، جمس أو ستاريا أو سيدان",
        description: "اطلب جمس يوكن أو هيونداي ستاريا أو سيدان بسائق من جدة أو مطار الملك عبدالعزيز إلى جازان عبر طريق ساحل البحر الأحمر، ذهابًا فقط أو ذهابًا وعودة.",
        h1: "من جدة إلى جازان بسيارة خاصة على امتداد ساحل البحر الأحمر",
        eyebrow: "بين المدن · جدة إلى جازان",
        answer: "التوصيل الخاص من جدة إلى جازان هو سيارة بسائق وبحجز مسبق من جدة أو مطار الملك عبدالعزيز جنوبًا على ساحل البحر الأحمر إلى جازان. وتقدّر مصادر الخرائط العامة الطريق بنحو 710 إلى 725 كم، أي قرابة سبع إلى ثماني ساعات قيادة قبل التوقفات. تُسعِّر RideSaudi كل رحلة على حدة وتؤكد المركبة، سيدان أو جمس يوكن أو هيونداي ستاريا، لتاريخك.",
        summary: "رحلة برية خاصة من جدة إلى جازان على ساحل البحر الأحمر.",
        sections: [
          { h: "رحلة ساحلية تستغرق يومًا كاملًا", p: ["يتبع الطريق إلى جازان ساحل البحر الأحمر مارًّا بمدن مثل الليث والقنفذة. وتذكر مصادر الخرائط نحو 710 إلى 725 كم وسبع إلى ثماني ساعات بسرعة اعتيادية، يضاف إليها التوقفات، فخططوا لها يومًا كاملًا لا رحلة عصر. ولأن المدن الكبيرة على الطريق أقل منها على طريق جدة والرياض، أخبرنا إن أردت توقفات مخططة للوجبات والصلاة بدل تركها للصدفة. والطيران بين جدة وجازان أقصر بكثير، والسيارة لمن يريد السفر مع العائلة والحقائب أو التوقف على الساحل."] },
          { h: "الانطلاق من جدة", p: ["الاستلام عادةً من مطار الملك عبدالعزيز أو من فندق في جدة. وإن وصلت جوًّا وتكمل جنوبًا مباشرة فأرسل رقم الصالة والرحلة ليكون السائق بانتظارك بعد استلام الحقائب؛ وإن كانت رحلتك تهبط متأخرة فقد يكون الانطلاق صباح اليوم التالي أفضل. وللجانب المتعلق بالمطار راجع صفحة التوصيل من مطار جدة. وإن كنت ستذهب إلى مكة أولًا فراجع صفحة جدة إلى مكة."] },
          { h: "في جازان وما بعدها", p: ["جازان هي قاعدة الركن الجنوبي الغربي من المملكة، ومنها تنطلق العبّارة إلى جزر فرسان من ميناء جازان؛ فتأكد من مواعيد العبّارة وشروط الحجز لدى الجهة المشغّلة وخطط وصولك على أساسها. أرسل اسم فندقك أو الميناء، وأخبرنا إن كنت ستتابع إلى مناطق أبعد داخل المنطقة. ولا ننشر هنا مسافات الداخل، فاسأل في طلبك ونؤكدها لك."] },
          { h: "اختيار المركبة", p: ["تناسب السيدان مثل هيونداي سوناتا أو فورد توروس راكبًا أو اثنين بحقائب عادية. وتطلب العائلات غالبًا جمس يوكن أو تويوتا برادو أو جمس سوبربان لمساحته على طريق ساحلي طويل، وتطلب المجموعات التي تحمل معدات غوص أو صيد أو عطلة هيونداي ستاريا. أخبرنا بعدد الركاب والحقائب والمعدات؛ وتُؤكَّد المركبة في عرض السعر بحسب توفرها في تاريخك."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب جدة إلى جازان", items: ["التاريخ ووقت الانطلاق وهل الرحلة ذهاب فقط أم ذهاب وعودة", "صالة مطار جدة والرحلة، أو عنوان الفندق", "فندق جازان أو الميناء أو وجهة أخرى", "هل تريد توقفات مخططة للوجبات والصلاة", "الركاب والحقائب الكبيرة وأي معدات", "المركبة: سيدان أو جمس يوكن أو هيونداي ستاريا"] },
        table: { h: "ما الذي تحدده قبل السفر", head: ["السؤال", "لماذا يهم", "ما الذي ترسله لنا"], rows: [["الوجهة النهائية", "مدينة جازان والميناء والبلدات الداخلية رحلات مختلفة", "اسم الفندق أو الميناء"], ["وقت الانطلاق", "سبع إلى ثماني ساعات قبل التوقفات تعني انطلاقًا صباحيًا", "الوقت الذي تفضله"], ["خطة العودة", "تحتاج العودة إلى وقت ومكان استلام خاصين بها", "تاريخ العودة ونقطة الاستلام"], ["المعدات", "معدات الغوص أو الصيد تشغل مساحة الصندوق", "عدد الحقائب وأحجامها"]] },
        faqs: [
          { q: "هل يمكن حجز سيارة خاصة من جدة إلى جازان؟", a: "نعم، يمكنك إرسال طلب. أرسل التاريخ ونقطة الاستلام ووجهتك في جازان، ونؤكد الإتاحة ونرسل عرض السعر قبل ترتيب أي شيء." },
          { q: "كم تستغرق الرحلة من جدة إلى جازان؟", a: "تذكر مصادر الخرائط العامة نحو 710 إلى 725 كم وقرابة سبع إلى ثماني ساعات قيادة قبل التوقفات. راجع خريطة حية يوم السفر." },
          { q: "هل يمكن التوصيل من مطار جدة إلى جازان؟", a: "يمكنك طلب ذلك. أرسل رقم رحلتك ليكون السائق بانتظارك بعد الحقائب؛ وقد يكون الانطلاق صباح اليوم التالي أفضل عند الوصول المتأخر." },
          { q: "هل يمكن الوصول إلى عبّارة فرسان بسيارة خاصة؟", a: "يمكنك طلب التوصيل إلى ميناء جازان. تأكد من مواعيد العبّارة وشروط الحجز لدى الجهة المشغّلة، وأخبرنا بالوقت الذي يلزمك الوصول فيه." },
          { q: "هل يتوفر جمس يوكن لرحلة جازان؟", a: "يمكنك طلب جمس يوكن أو هيونداي ستاريا أو سيدان. وتُؤكَّد الإتاحة لتاريخك في عرض السعر." },
        ],
      },
    },
  },

  {
    path: `${I}/jazan-to-jeddah`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/jeddah-to-jazan`, `${I}/abha-to-jeddah`, `${I}/jeddah-to-makkah`, `${A}/jeddah-airport`, `${C}/jazan`, `${C}/jeddah`],
    updated: U,
    copy: {
      en: {
        nav: "Jazan to Jeddah",
        title: "Jazan to Jeddah Private Car with Driver, Coast Road North",
        description: "Request a private car with a driver from Jazan, its hotels or the port to Jeddah, King Abdulaziz Airport or onward to Makkah. Sedan, GMC Yukon or Hyundai Staria.",
        h1: "Jazan to Jeddah by private car, north along the coast",
        eyebrow: "Intercity · Jazan to Jeddah",
        answer: "A private Jazan to Jeddah transfer is a pre-booked car with a driver from Jazan, its hotels or the port to Jeddah, King Abdulaziz Airport or onward to Makkah. Public mapping sources put the road at about 710 to 725 km, roughly seven to eight hours of driving before stops. It is usually a journey with a deadline, so RideSaudi quotes each trip individually and plans the departure from your arrival time.",
        summary: "A private car from Jazan north to Jeddah, timed from your flight or arrival.",
        sections: [
          { h: "The return journey has a deadline", p: ["People leaving Jazan are usually heading for a flight at Jeddah, an Umrah itinerary or a work commitment. Give us the time you must be in Jeddah and we count back, adding room for meal and prayer stops. Plan a morning departure for an afternoon or evening flight and leave a safety margin before check-in, since a seven to eight hour road is not something to run close to a departure. The outbound direction is on Jeddah to Jazan."] },
          { h: "Pickup at Jazan hotels, the port or the airport", p: ["Pickups can be from a hotel in Jazan, the port after the Farasan ferry, or Jazan airport. If you come off the ferry, send the expected arrival time, check it against the operator's timetable, and allow for delays in the pickup window. For an airport pickup, send the flight number. Give an exact meeting point at the port, since vehicle access there can be restricted at busy times."] },
          { h: "Heading on to Makkah", p: ["Many travellers from the south continue to Makkah for Umrah. Tell us if your real destination is Makkah and not Jeddah, and we can quote the whole way; see Jeddah to Makkah for the final stretch. For a flight, see Jeddah airport transfers for terminal pickups and drop-offs."] },
          { h: "A long day on the coast road", p: ["A sedan such as a Hyundai Sonata or Ford Taurus suits one or two travellers. Families usually ask for a GMC Yukon, Toyota Prado or GMC Suburban for the room over a long day, and groups with luggage ask for a Hyundai Staria so everyone travels together. Tell us passengers, bags, children and any health needs, and whether the group wants more frequent breaks; the vehicle is confirmed in the quotation, subject to availability."] },
        ],
        checklist: { h: "Include this in your Jazan to Jeddah enquiry", items: ["The time you must arrive, or your flight time from Jeddah", "Pickup: hotel, port after the ferry, or Jazan airport flight", "Destination: Jeddah hotel, airport terminal or Makkah", "Passengers, children, bags and any health needs", "Preferred break stops", "Vehicle: sedan, GMC Yukon or Hyundai Staria"] },
        faqs: [
          { q: "Can I book a private car from Jazan to Jeddah Airport?", a: "Yes, you can request one. Send your flight time and the Jazan pickup, and we plan the departure and confirm availability before arranging anything." },
          { q: "Can you collect me from the port after the Farasan ferry?", a: "You can request it. Give the ferry arrival time, which should be checked with the operator, and a meeting point; we allow some margin for delays." },
          { q: "How far is Jazan from Jeddah by road?", a: "Public mapping sources give about 710 to 725 km, roughly seven to eight hours of driving before stops." },
          { q: "Can the car continue to Makkah for Umrah?", a: "You can ask for the journey to end in Makkah. It is quoted as one trip to the destination you give." },
          { q: "What time should we leave Jazan for an evening flight?", a: "Work back from check-in, with a margin on top of the driving time and stops. A morning start is the usual choice, and we agree it in the quotation." },
        ],
      },
      ar: {
        nav: "جازان إلى جدة",
        title: "من جازان إلى جدة بسيارة خاصة بسائق، شمالًا عبر طريق الساحل",
        description: "اطلب سيارة بسائق من جازان أو فنادقها أو الميناء إلى جدة أو مطار الملك عبدالعزيز أو مواصلة إلى مكة. سيدان أو جمس يوكن أو هيونداي ستاريا.",
        h1: "من جازان إلى جدة بسيارة خاصة شمالًا على امتداد الساحل",
        eyebrow: "بين المدن · جازان إلى جدة",
        answer: "التوصيل الخاص من جازان إلى جدة هو سيارة بسائق وبحجز مسبق من جازان أو فنادقها أو الميناء إلى جدة أو مطار الملك عبدالعزيز أو مواصلة إلى مكة. وتقدّر مصادر الخرائط العامة الطريق بنحو 710 إلى 725 كم، أي قرابة سبع إلى ثماني ساعات قيادة قبل التوقفات. وهي في الغالب رحلة لها موعد، لذلك تُسعِّر RideSaudi كل رحلة على حدة وتحسب الانطلاق من وقت وصولك.",
        summary: "سيارة خاصة من جازان شمالًا إلى جدة، يُحسب وقتها من موعد رحلتك أو وصولك.",
        sections: [
          { h: "رحلة العودة لها موعد", p: ["المغادرون من جازان يتجهون غالبًا إلى رحلة طيران في جدة أو برنامج عمرة أو التزام عمل. أخبرنا بالوقت الذي يلزمك الوصول فيه إلى جدة ونحسب عكسيًا مع فسحة للوجبات والصلاة. خطط لانطلاق صباحي لرحلة بعد الظهر أو المساء، واترك هامش أمان قبل إنهاء الإجراءات، فطريق من سبع إلى ثماني ساعات لا يُترك لآخر لحظة. وتجد الاتجاه المعاكس في صفحة جدة إلى جازان."] },
          { h: "الاستلام من فنادق جازان أو الميناء أو المطار", p: ["يمكن أن يكون الاستلام من فندق في جازان أو من الميناء بعد عبّارة فرسان أو من مطار جازان. وإن كنت قادمًا من العبّارة فأرسل وقت الوصول المتوقع وتأكد منه من جدول الجهة المشغّلة، واترك في نافذة الاستلام فسحة للتأخير. وفي المطار أرسل رقم الرحلة. وحدد نقطة لقاء دقيقة في الميناء، فقد يُقيَّد وصول المركبات هناك في أوقات الازدحام."] },
          { h: "المواصلة إلى مكة", p: ["يواصل كثير من القادمين من الجنوب إلى مكة المكرمة للعمرة. أخبرنا إن كانت وجهتك الحقيقية مكة لا جدة، ونُسعِّر الطريق كاملًا؛ وراجع صفحة جدة إلى مكة للمرحلة الأخيرة. وللطيران راجع صفحة التوصيل من مطار جدة للاستلام والتوصيل من الصالات."] },
          { h: "يوم طويل على طريق الساحل", p: ["تناسب السيدان مثل هيونداي سوناتا أو فورد توروس مسافرًا أو اثنين. وتطلب العائلات غالبًا جمس يوكن أو تويوتا برادو أو جمس سوبربان لمساحته خلال يوم طويل، وتطلب المجموعات ذات الحقائب هيونداي ستاريا ليسافر الجميع معًا. أخبرنا بعدد الركاب والحقائب والأطفال وأي احتياجات صحية، وهل تريد المجموعة استراحات أكثر؛ وتُؤكَّد المركبة في عرض السعر بحسب توفرها."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب جازان إلى جدة", items: ["الوقت الذي يجب أن تصل فيه أو موعد رحلتك من جدة", "الاستلام: فندق أو الميناء بعد العبّارة أو رحلة مطار جازان", "الوجهة: فندق في جدة أو صالة المطار أو مكة", "الركاب والأطفال والحقائب وأي احتياجات صحية", "أماكن الاستراحة المفضلة", "المركبة: سيدان أو جمس يوكن أو هيونداي ستاريا"] },
        faqs: [
          { q: "هل يمكن حجز سيارة خاصة من جازان إلى مطار جدة؟", a: "نعم، يمكنك إرسال طلب. أرسل موعد رحلتك ونقطة الاستلام في جازان، ونخطط الانطلاق ونؤكد الإتاحة قبل ترتيب أي شيء." },
          { q: "هل يمكن الاستلام من الميناء بعد عبّارة فرسان؟", a: "يمكنك طلب ذلك. أرسل وقت وصول العبّارة، ويُتحقق منه لدى الجهة المشغّلة، ونقطة لقاء، ونترك هامشًا للتأخير." },
          { q: "كم تبعد جازان عن جدة بالسيارة؟", a: "تذكر مصادر الخرائط العامة نحو 710 إلى 725 كم، أي قرابة سبع إلى ثماني ساعات قيادة قبل التوقفات." },
          { q: "هل تكمل السيارة إلى مكة للعمرة؟", a: "يمكنك طلب أن تنتهي الرحلة في مكة، وتُسعَّر رحلة واحدة إلى الوجهة التي تحددها." },
          { q: "متى نغادر جازان لرحلة مسائية؟", a: "احسب عكسيًا من وقت إنهاء الإجراءات مع هامش فوق وقت القيادة والتوقفات. الانطلاق الصباحي هو المعتاد، ونتفق عليه في عرض السعر." },
        ],
      },
    },
  },
];
