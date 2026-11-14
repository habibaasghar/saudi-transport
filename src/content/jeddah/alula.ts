import type { ServicePage } from "../types";

const U = "2026-11-14";
const I = "services/intercity-transfers";
const A = "services/airport-transfers";
const T = "services/tourism-transport";

/**
 * AlUla to Jeddah (Jeddah to AlUla already exists). Distance: public mapping sources checked
 * 2026-11-14 give about 670 to 690 km and 6.5 to 9 h before stops (sources disagree on time).
 */
export const alulaPages: ServicePage[] = [
  {
    path: `${I}/alula-to-jeddah`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/jeddah-to-alula`, `${I}/alula-to-riyadh`, `${I}/madinah-to-alula`, `${T}/alula`, `${A}/alula-airport`, `${A}/jeddah-airport`],
    updated: U,
    copy: {
      en: {
        nav: "AlUla to Jeddah",
        title: "AlUla to Jeddah Private Car with Driver, Hotel to Airport",
        description: "Request a private car with a driver from your AlUla resort or hotel to Jeddah or King Abdulaziz Airport. Plan an early start and a safe margin for your flight.",
        h1: "AlUla to Jeddah by private car, from desert resort to flight",
        eyebrow: "Intercity · AlUla to Jeddah",
        answer: "A private AlUla to Jeddah transfer is a pre-booked car with a driver from an AlUla resort, hotel or camp to Jeddah or King Abdulaziz Airport. Public mapping sources put the road at about 670 to 690 km and between 6.5 and 9 hours of driving before stops. It is a return-home journey, so the plan starts from your flight or check-in time. RideSaudi quotes each trip individually.",
        summary: "A private road journey from an AlUla resort to Jeddah, timed backwards from your flight.",
        sections: [
          { h: "Why the reverse direction is planned differently", p: ["Travellers leaving AlUla are usually at the end of a trip with a fixed commitment: a flight from Jeddah, a hotel check-out, a family event. That makes the departure time the most important detail. Tell us when you need to be at King Abdulaziz Airport or in Jeddah and we count backwards, including the rest and prayer stops. Allow a generous buffer before an international departure rather than treating the drive as predictable. Going the other way? See Jeddah to AlUla."] },
          { h: "Pickups at AlUla's remote resorts and camps", p: ["Many AlUla stays are in desert resorts, canyons or camps well away from the town, and some access roads are not obvious on a map. Give the property name, the gate or reception, and a phone number the driver can reach. If you are staying at a place with a scheduled check-out, say what time you will be ready rather than the official time. For movement around the area, the AlUla tourism transport page covers local travel."] },
          { h: "Road or flight, and the Madinah option", p: ["AlUla has its own airport, and there are flights between AlUla and Jeddah, so check flight schedules and baggage rules before choosing the road. A private car is chosen when you want to travel door to door, carry more luggage, stop at places on the way, or avoid airport time on a short stay. Many road plans pass through Madinah, so a night or a visit there can be built in; see Madinah to AlUla for that stretch."] },
          { h: "Vehicle for a long day", p: ["For one or two people with a couple of bags, a Toyota Camry or Hyundai Sonata sedan is enough. Families usually ask for a GMC Yukon, Toyota Prado or Chevrolet Tahoe for the extra room, and groups with bags from a desert holiday ask for a Hyundai Staria. Tell us passengers, large bags and any sports or camping equipment; the quotation confirms which vehicle is free on your date."] },
        ],
        checklist: { h: "Include this in your AlUla to Jeddah enquiry", items: ["Flight time from Jeddah, or the time you must arrive", "AlUla property name, gate or reception, and a contact number", "Whether you want a stop in Madinah or a split journey", "Passengers, large bags and any equipment", "Jeddah destination: terminal, hotel or address", "Vehicle: sedan, GMC Yukon or Hyundai Staria"] },
        faqs: [
          { q: "Can I book a private car from AlUla to Jeddah Airport?", a: "Yes, you can request one. Send your flight details and the AlUla property, and we confirm availability and the timings in the quotation before anything is arranged." },
          { q: "How far is AlUla from Jeddah by road?", a: "Public mapping sources give about 670 to 690 km and between 6.5 and 9 hours of driving before stops. Check a live map on the day." },
          { q: "Can you collect me from a desert resort outside AlUla town?", a: "You can request it. Send the exact property name and entrance, and we plan the pickup around it." },
          { q: "Can we stop in Madinah on the way to Jeddah?", a: "You can ask for a stop or an overnight there, and it is set out in the quotation." },
          { q: "Is a GMC Yukon or a Staria better for luggage from AlUla?", a: "Tell us your passengers and bags. A GMC Yukon or a Hyundai Staria can be requested, and the vehicle is confirmed against your numbers in the quotation." },
        ],
      },
      ar: {
        nav: "العلا إلى جدة",
        title: "من العلا إلى جدة بسيارة خاصة بسائق، من المنتجع إلى المطار",
        description: "اطلب سيارة بسائق من منتجعك أو فندقك في العلا إلى جدة أو مطار الملك عبدالعزيز. خطط لانطلاق مبكر وهامش آمن قبل موعد رحلتك.",
        h1: "من العلا إلى جدة بسيارة خاصة، من منتجع الصحراء إلى رحلة الطيران",
        eyebrow: "بين المدن · العلا إلى جدة",
        answer: "التوصيل الخاص من العلا إلى جدة هو سيارة بسائق وبحجز مسبق من منتجع أو فندق أو مخيم في العلا إلى جدة أو مطار الملك عبدالعزيز. وتقدّر مصادر الخرائط العامة الطريق بنحو 670 إلى 690 كم، وبين 6.5 و9 ساعات قيادة قبل التوقفات. هي رحلة عودة، لذلك تبدأ الخطة من موعد رحلتك أو وقت وصولك. تُسعِّر RideSaudi كل رحلة على حدة.",
        summary: "رحلة برية خاصة من منتجع في العلا إلى جدة، يُحسب وقتها عكسيًا من موعد رحلتك.",
        sections: [
          { h: "لماذا يُخطَّط للاتجاه المعاكس بطريقة مختلفة", p: ["من يغادر العلا يكون عادةً في نهاية رحلته ولديه التزام ثابت: رحلة طيران من جدة أو مغادرة فندق أو مناسبة عائلية. لذلك يصبح موعد الانطلاق أهم تفصيل. أخبرنا متى يجب أن تكون في مطار الملك عبدالعزيز أو في جدة، ونحسب الوقت عكسيًا مع توقفات الراحة والصلاة. واترك هامشًا واسعًا قبل أي رحلة دولية ولا تعامل الطريق على أنه مضمون الوقت. وللسفر بالاتجاه الآخر راجع صفحة جدة إلى العلا."] },
          { h: "الاستلام من المنتجعات والمخيمات البعيدة في العلا", p: ["كثير من الإقامات في العلا تقع في منتجعات صحراوية أو وسط الأودية أو في مخيمات بعيدة عن المدينة، وبعض طرق الوصول غير واضحة على الخريطة. أرسل اسم المنشأة والبوابة أو الاستقبال ورقم هاتف يستطيع السائق الوصول إليك عليه. وإن كان لإقامتك وقت مغادرة رسمي فأخبرنا بالوقت الذي ستكون جاهزًا فيه فعلًا. وللتنقل داخل المنطقة راجع صفحة النقل السياحي في العلا."] },
          { h: "الطريق أم الطيران، وخيار المرور بالمدينة المنورة", p: ["للعلا مطارها الخاص، وتوجد رحلات بين العلا وجدة، فراجع مواعيد الرحلات وسياسة الحقائب قبل اختيار الطريق البري. وتُختار السيارة الخاصة لمن يريد التنقل من الباب إلى الباب وحمل حقائب أكثر والتوقف في أماكن على الطريق، أو لتجنب وقت المطار في إقامة قصيرة. وتمر كثير من خطط الطريق بالمدينة المنورة، فيمكن إدخال مبيت أو زيارة هناك؛ راجع صفحة المدينة المنورة إلى العلا لهذا الجزء."] },
          { h: "المركبة ليوم طويل", p: ["لراكب أو اثنين بحقيبتين تكفي سيدان مثل تويوتا كامري أو هيونداي سوناتا. وتطلب العائلات غالبًا جمس يوكن أو تويوتا برادو أو شيفروليه تاهو لمساحته، وتطلب المجموعات العائدة من رحلة صحراوية بحقائب كثيرة هيونداي ستاريا. أخبرنا بعدد الركاب والحقائب الكبيرة وأي معدات رياضية أو تخييم؛ وتُؤكَّد المركبة في عرض السعر بحسب توفرها في تاريخك."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب العلا إلى جدة", items: ["موعد الرحلة من جدة أو الوقت الذي يجب أن تصل فيه", "اسم المنشأة في العلا والبوابة أو الاستقبال ورقم للتواصل", "هل تريد توقفًا في المدينة المنورة أو رحلة مقسمة", "الركاب والحقائب الكبيرة وأي معدات", "وجهتك في جدة: الصالة أو الفندق أو العنوان", "المركبة: سيدان أو جمس يوكن أو هيونداي ستاريا"] },
        faqs: [
          { q: "هل يمكن حجز سيارة خاصة من العلا إلى مطار جدة؟", a: "نعم، يمكنك إرسال طلب. أرسل تفاصيل رحلتك واسم المنشأة في العلا، ونؤكد الإتاحة والمواعيد في عرض السعر قبل ترتيب أي شيء." },
          { q: "كم تبعد العلا عن جدة بالسيارة؟", a: "تذكر مصادر الخرائط العامة نحو 670 إلى 690 كم وبين 6.5 و9 ساعات قيادة قبل التوقفات. راجع خريطة حية يوم السفر." },
          { q: "هل يمكن الاستلام من منتجع صحراوي خارج مدينة العلا؟", a: "يمكنك طلب ذلك. أرسل اسم المنشأة والمدخل بدقة ونخطط الاستلام على أساسه." },
          { q: "هل يمكن التوقف في المدينة المنورة في الطريق إلى جدة؟", a: "يمكنك طلب توقف أو مبيت هناك، ويُكتب ذلك في عرض السعر." },
          { q: "أيهما أنسب للحقائب من العلا: جمس يوكن أم ستاريا؟", a: "أخبرنا بعدد الركاب والحقائب. يمكنك طلب جمس يوكن أو هيونداي ستاريا، وتُؤكَّد المركبة بحسب أعدادكم في عرض السعر." },
        ],
      },
    },
  },
];
