import type { ServicePage } from "../types";

const U = "2026-11-14";
const I = "services/intercity-transfers";
const A = "services/airport-transfers";
const C = "services/city-transport";

/**
 * Jeddah to Dammam and the reverse. Distance: public mapping sources checked 2026-11-14 give about
 * 1,350 to 1,365 km and about 13 to 13.5 h before stops. Vehicle types are owner-confirmed; no
 * capacities, prices or response times are stated.
 */
export const dammamPages: ServicePage[] = [
  {
    path: `${I}/jeddah-to-dammam`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/dammam-to-jeddah`, `${I}/jeddah-to-riyadh`, `${I}/riyadh-to-dammam`, `${A}/jeddah-airport`, `${C}/jeddah`, `${C}/dammam`],
    updated: U,
    copy: {
      en: {
        nav: "Jeddah to Dammam",
        title: "Jeddah to Dammam Private Car: GMC, Staria or Sedan",
        description: "Request a private GMC Yukon, Hyundai Staria or sedan with a driver from Jeddah or King Abdulaziz Airport to Dammam and the Eastern Province, one way or return.",
        h1: "Jeddah to Dammam by private car, across the whole Kingdom",
        eyebrow: "Intercity · Jeddah to Dammam",
        answer: "A private Jeddah to Dammam transfer is a pre-booked car with a driver from Jeddah, or King Abdulaziz Airport, to Dammam, Al Khobar or the Eastern Province. Public mapping sources put the road at roughly 1,350 to 1,365 km, about 13 hours of driving before stops, so most travellers plan it as a full day or split it with a night in Riyadh. RideSaudi quotes each journey individually.",
        summary: "A full-day private road journey from Jeddah to Dammam, planned around the stop in Riyadh.",
        sections: [
          { h: "Plan it as one of the longest road journeys in Saudi Arabia", p: ["Jeddah and Dammam sit on opposite coasts, and the road between them runs the width of the country, generally through the Riyadh region. Mapping sources give about 13 to 13.5 hours at normal speed, and meals, prayer stops, fuel and traffic come on top. That is a long day for children and older passengers, so tell us how many hours your group is comfortable travelling before a break. The flight between Jeddah and the Eastern Province is much shorter, and a car is the choice when you travel as a family or group with a lot of luggage, when you are relocating, or when you want to stop on the way."] },
          { h: "One day or split at Riyadh", p: ["The simplest plan is an early departure and one long day. If you would rather arrive rested, ask for the journey to be split with a night in Riyadh and the second leg the next morning; see Jeddah to Riyadh and Riyadh to Dammam for each half. The overnight and the exact timings are set out in the quotation, and we do not promise a driver swap or a fixed arrival time that we have not confirmed."] },
          { h: "Starting from King Abdulaziz Airport or a Jeddah hotel", p: ["If you land in Jeddah and drive straight on, send your terminal and flight number. A journey of this length should not start in a rush after a delayed flight or a long baggage wait, so also tell us if you would rather rest in Jeddah first and leave the next morning. Hotel and home pickups only need an address and a pickup time. For the airport side, read Jeddah airport transfers."] },
          { h: "Choosing the vehicle for 13 hours", p: ["Comfort matters more than anything else at this distance. A sedan such as a Toyota Camry, Hyundai Sonata or Ford Taurus suits one or two passengers with ordinary luggage. Families usually ask for a GMC Yukon, Chevrolet Suburban or Chevrolet Tahoe for the extra room, and larger groups with many bags ask for a Hyundai Staria so that everyone travels together. Tell us passengers, large bags and whether anyone needs frequent breaks; the model is settled in the quotation, subject to availability. Executive travellers can request a luxury SUV or a VIP chauffeur vehicle."] },
          { h: "Arriving in Dammam, Al Khobar or beyond", p: ["Give the exact hotel, compound or office address, since the Dammam, Al Khobar and Dhahran area is a spread-out urban region. If you are catching a flight at Dammam airport instead, see Dammam airport transfers. Returning west later? The reverse direction is on Dammam to Jeddah."] },
        ],
        checklist: { h: "Include this in your Jeddah to Dammam enquiry", items: ["Date, departure time and whether it is one way or return", "Jeddah airport terminal and flight, or hotel address", "One long day or a split journey with a night in Riyadh", "Passengers, children, large bags and any health needs", "Dammam, Al Khobar or Dhahran destination address", "Vehicle: sedan, GMC Yukon or Hyundai Staria"] },
        table: { h: "Jeddah to Dammam: car or flight?", head: ["", "Private car with driver", "Flight"], rows: [["Start and finish", "Your hotel or home to your address", "Airport to airport, plus transfers at both ends"], ["Luggage and family", "Everything travels with you in one vehicle", "Subject to airline baggage rules"], ["Time", "About 13 hours of driving before stops, per public mapping sources", "A short flight, plus airport time"], ["Stops on the way", "You decide: meals, prayer, an overnight in Riyadh", "None"]] },
        faqs: [
          { q: "Can I book a private car from Jeddah to Dammam?", a: "Yes, you can request one. Send your date, pickup point and Dammam address; we confirm availability and send a quotation before anything is arranged." },
          { q: "How long does the drive from Jeddah to Dammam take?", a: "Public mapping sources give about 1,350 to 1,365 km and roughly 13 hours of driving before stops. Plan a full day or a night in Riyadh." },
          { q: "Is a night's stop in Riyadh possible?", a: "Yes. You can ask for the journey to be split, and the plan is written into the quotation." },
          { q: "Can I travel with a GMC Yukon from Jeddah to Dammam?", a: "You can request a GMC Yukon, a Hyundai Staria or a sedan. Which vehicle is available for your date is confirmed in the quotation." },
          { q: "Can I pay in advance or by cash?", a: "Payment can be by payment link, STC Pay or cash. Cancellation is allowed at least 24 hours before pickup." },
        ],
      },
      ar: {
        nav: "جدة إلى الدمام",
        title: "من جدة إلى الدمام: سيارة خاصة بسائق، جمس أو ستاريا أو سيدان",
        description: "اطلب جمس يوكن أو هيونداي ستاريا أو سيدان بسائق من جدة أو مطار الملك عبدالعزيز إلى الدمام والمنطقة الشرقية، ذهابًا فقط أو ذهابًا وعودة.",
        h1: "من جدة إلى الدمام بسيارة خاصة، رحلة تقطع المملكة من الغرب إلى الشرق",
        eyebrow: "بين المدن · جدة إلى الدمام",
        answer: "التوصيل الخاص من جدة إلى الدمام هو سيارة بسائق وبحجز مسبق من جدة أو مطار الملك عبدالعزيز إلى الدمام أو الخبر أو المنطقة الشرقية. وتقدّر مصادر الخرائط العامة الطريق بنحو 1,350 إلى 1,365 كم، أي قرابة 13 ساعة قيادة قبل التوقفات، لذلك يخطط له أغلب المسافرين ليومٍ كامل أو يقسمونه بمبيت في الرياض. تُسعِّر RideSaudi كل رحلة على حدة.",
        summary: "رحلة برية خاصة ليوم كامل من جدة إلى الدمام مع التوقف في الرياض ضمن الخطة.",
        sections: [
          { h: "خططوا لها كإحدى أطول الرحلات البرية في المملكة", p: ["تقع جدة والدمام على ساحلين متقابلين، والطريق بينهما يقطع عرض المملكة مرورًا بمنطقة الرياض عادةً. وتذكر مصادر الخرائط نحو 13 إلى 13.5 ساعة بسرعة اعتيادية، ويضاف إليها وقت الوجبات والصلاة والتعبئة والازدحام. وهذا يوم طويل على الأطفال وكبار السن، فأخبرنا كم ساعة تريح مجموعتك قبل الاستراحة. الطيران بين جدة والمنطقة الشرقية أقصر بكثير، وتُختار السيارة حين تسافر عائلة أو مجموعة بحقائب كثيرة، أو عند الانتقال للسكن، أو لمن يريد التوقف في الطريق."] },
          { h: "يوم واحد أم تقسيم الرحلة في الرياض", p: ["أبسط خطة هي انطلاق مبكر ويوم واحد طويل. وإن فضّلت الوصول مرتاحًا فاطلب تقسيم الرحلة بمبيت في الرياض وإكمال الجزء الثاني صباح اليوم التالي؛ راجع صفحتي جدة إلى الرياض والرياض إلى الدمام لكل نصف. ويُكتب المبيت والمواعيد بدقة في عرض السعر، ولا نَعِد بتبديل سائق أو بوقت وصول ثابت لم نؤكده."] },
          { h: "الانطلاق من مطار الملك عبدالعزيز أو من فندق في جدة", p: ["إن كنت تصل إلى جدة وتكمل الطريق مباشرة فأرسل رقم الصالة والرحلة. فرحلة بهذا الطول لا ينبغي أن تبدأ على عجل بعد تأخر طائرة أو طول انتظار للحقائب، لذا أخبرنا إن كنت تفضل الراحة في جدة والانطلاق صباح اليوم التالي. أما الاستلام من فندق أو منزل فيكفيه العنوان ووقت الاستلام. وللاستلام من الصالات راجع صفحة التوصيل من مطار جدة."] },
          { h: "اختيار المركبة لرحلة 13 ساعة", p: ["الراحة هنا أهم من أي اعتبار آخر. تناسب السيدان مثل تويوتا كامري أو هيونداي سوناتا أو فورد توروس راكبًا أو اثنين بحقائب عادية. وتطلب العائلات غالبًا جمس يوكن أو شيفروليه سوبربان أو شيفروليه تاهو لمساحته، وتطلب المجموعات الأكبر ذات الحقائب الكثيرة هيونداي ستاريا ليسافر الجميع معًا. أخبرنا بعدد الركاب والحقائب الكبيرة وهل يحتاج أحدهم استراحات متكررة؛ وتُؤكَّد المركبة في عرض السعر بحسب توفرها في تاريخك. ويمكن للمسافرين التنفيذيين طلب سيارة دفع رباعي فاخرة أو مركبة كبار الشخصيات بسائق."] },
          { h: "الوصول إلى الدمام أو الخبر أو ما بعدهما", p: ["أرسل عنوان الفندق أو المجمع السكني أو المكتب بدقة، فمنطقة الدمام والخبر والظهران مدينة ممتدة. وإن كنت ستلحق برحلة من مطار الدمام فراجع صفحة التوصيل من مطار الدمام. وللعودة غربًا لاحقًا تجد الاتجاه المعاكس في صفحة الدمام إلى جدة."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب جدة إلى الدمام", items: ["التاريخ ووقت الانطلاق وهل الرحلة ذهاب فقط أم ذهاب وعودة", "صالة مطار جدة والرحلة، أو عنوان الفندق", "يوم واحد طويل أم رحلة مقسمة بمبيت في الرياض", "الركاب والأطفال والحقائب الكبيرة وأي احتياجات صحية", "عنوان الوجهة في الدمام أو الخبر أو الظهران", "المركبة: سيدان أو جمس يوكن أو هيونداي ستاريا"] },
        table: { h: "من جدة إلى الدمام: السيارة أم الطيران؟", head: ["", "سيارة خاصة بسائق", "الطيران"], rows: [["نقطة البداية والنهاية", "من فندقك أو منزلك إلى عنوانك", "من مطار إلى مطار مع تنقل في الطرفين"], ["الحقائب والعائلة", "كل شيء معك في مركبة واحدة", "بحسب سياسة الحقائب لدى الناقل"], ["الوقت", "نحو 13 ساعة قيادة قبل التوقفات بحسب مصادر الخرائط العامة", "رحلة جوية قصيرة مع وقت المطار"], ["التوقف في الطريق", "بقرارك: وجبات وصلاة ومبيت في الرياض", "لا يوجد"]] },
        faqs: [
          { q: "هل يمكن حجز سيارة خاصة من جدة إلى الدمام؟", a: "نعم، يمكنك إرسال طلب. أرسل التاريخ ونقطة الاستلام وعنوانك في الدمام، ونؤكد الإتاحة ونرسل عرض السعر قبل ترتيب أي شيء." },
          { q: "كم تستغرق الرحلة بالسيارة من جدة إلى الدمام؟", a: "تذكر مصادر الخرائط العامة نحو 1,350 إلى 1,365 كم وقرابة 13 ساعة قيادة قبل التوقفات. خططوا ليوم كامل أو لمبيت في الرياض." },
          { q: "هل يمكن المبيت في الرياض أثناء الرحلة؟", a: "نعم، يمكنك طلب تقسيم الرحلة، وتُكتب الخطة في عرض السعر." },
          { q: "هل يمكن السفر بجمس يوكن من جدة إلى الدمام؟", a: "يمكنك طلب جمس يوكن أو هيونداي ستاريا أو سيدان. وتُؤكَّد المركبة المتاحة لتاريخك في عرض السعر." },
          { q: "هل الدفع مقدمًا أم نقدًا؟", a: "الدفع متاح برابط دفع أو STC Pay أو نقدًا. والإلغاء مسموح قبل موعد الاستلام بـ 24 ساعة على الأقل." },
        ],
      },
    },
  },

  {
    path: `${I}/dammam-to-jeddah`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/jeddah-to-dammam`, `${I}/dammam-to-riyadh`, `${I}/riyadh-to-jeddah`, `${A}/dammam-airport`, `${A}/jeddah-airport`, `${C}/dammam`],
    updated: U,
    copy: {
      en: {
        nav: "Dammam to Jeddah",
        title: "Dammam to Jeddah Private Car with Driver, Return West",
        description: "Request a private car with a driver from Dammam, Al Khobar or the Eastern Province to Jeddah, King Abdulaziz Airport or onward to Makkah. Sedan, GMC Yukon or Staria.",
        h1: "Dammam to Jeddah by private car, built around your arrival time",
        eyebrow: "Intercity · Dammam to Jeddah",
        answer: "A private Dammam to Jeddah transfer is a pre-booked car with a driver from Dammam, Al Khobar or another Eastern Province address to Jeddah, its hotels or King Abdulaziz Airport. Public sources put the road at roughly 1,350 to 1,365 km, about 13 hours before stops. Because most people travelling west have somewhere to be, the departure time is worked back from your arrival. RideSaudi quotes each journey individually.",
        summary: "A private car from the Eastern Province to Jeddah, with the departure planned back from your arrival.",
        sections: [
          { h: "Start from the time you must arrive", p: ["Travelling to Jeddah usually means an Umrah group, a flight, a family event or work on a fixed day. Tell us the time you need to be in Jeddah and we work the departure back from it, with room for prayer stops, meals and traffic on the way. If the journey ends at the airport, add a safe margin before check-in; a journey of this length is not one to run close to a departure. The outbound version of this trip is on Jeddah to Dammam."] },
          { h: "Pickup in the Dammam, Al Khobar and Dhahran area", p: ["The Eastern Province is spread across several cities that merge into one another. Give the exact hotel, compound or office, and if you are coming from Dammam airport rather than the city, say so and send the flight; see Dammam airport transfers. Early departures suit a drive this long, so a pickup before sunrise is a normal request."] },
          { h: "Heading for Makkah or the airport", p: ["Many Eastern Province families travel to Jeddah as the first step of an Umrah journey, or to fly onward from King Abdulaziz Airport. Tell us the real final destination, whether that is a Jeddah hotel, the airport terminal, or Makkah: if it is Makkah, we can quote the journey straight through. See Jeddah to Makkah for the last leg, and Jeddah airport transfers for terminal pickups."] },
          { h: "Stopping at Riyadh", p: ["The road generally passes the Riyadh region, which makes it the natural place to rest. Ask for a split journey with a night there if you would rather not drive 13 hours in a day; see Dammam to Riyadh and Riyadh to Jeddah for the two halves. Vehicle choice follows your group: a sedan (Toyota Camry, Hyundai Sonata or Ford Taurus) for one or two travellers, a GMC Yukon, Chevrolet Suburban or Chevrolet Tahoe for families, a Hyundai Staria for larger groups with luggage, confirmed in the quotation."] },
        ],
        checklist: { h: "Include this in your Dammam to Jeddah enquiry", items: ["The time you must arrive in Jeddah, or your flight time", "Pickup address in Dammam, Al Khobar or Dhahran, or the Dammam airport flight", "Final destination: Jeddah hotel, airport terminal or Makkah", "One day or a split journey with a night in Riyadh", "Passengers, children, bags and any health needs", "Vehicle: sedan, GMC Yukon or Hyundai Staria"] },
        faqs: [
          { q: "Can I book a private car from Dammam to Jeddah Airport?", a: "Yes, you can request one. Send your flight time and pickup address, and we work out the departure and confirm availability before arranging anything." },
          { q: "Can the same car continue to Makkah?", a: "You can ask for the journey to end in Makkah. It is quoted as one trip with the final destination you give." },
          { q: "How far is Dammam from Jeddah by road?", a: "Public mapping sources give roughly 1,350 to 1,365 km, about 13 hours of driving before stops." },
          { q: "What time should we leave Dammam?", a: "Work it back from your arrival or flight, and leave a safety margin. Early starts are common for this distance; we agree the time with you in the quotation." },
          { q: "Do you offer a Hyundai Staria for a family going west?", a: "You can request a Hyundai Staria, a GMC Yukon or a sedan. The one available for your date is confirmed in the quotation." },
        ],
      },
      ar: {
        nav: "الدمام إلى جدة",
        title: "من الدمام إلى جدة بسيارة خاصة بسائق، العودة غربًا",
        description: "اطلب سيارة بسائق من الدمام أو الخبر أو المنطقة الشرقية إلى جدة أو مطار الملك عبدالعزيز أو مواصلة إلى مكة. سيدان أو جمس يوكن أو ستاريا.",
        h1: "من الدمام إلى جدة بسيارة خاصة، بموعد انطلاق محسوب على وقت وصولك",
        eyebrow: "بين المدن · الدمام إلى جدة",
        answer: "التوصيل الخاص من الدمام إلى جدة هو سيارة بسائق وبحجز مسبق من الدمام أو الخبر أو أي عنوان في المنطقة الشرقية إلى جدة أو فنادقها أو مطار الملك عبدالعزيز. وتقدّر مصادر عامة الطريق بنحو 1,350 إلى 1,365 كم، أي قرابة 13 ساعة قبل التوقفات. ولأن أغلب المسافرين غربًا لديهم موعد يلتزمون به، يُحسب وقت الانطلاق انطلاقًا من وقت وصولك. تُسعِّر RideSaudi كل رحلة على حدة.",
        summary: "سيارة خاصة من المنطقة الشرقية إلى جدة، يُحسب موعد انطلاقها على وقت وصولك.",
        sections: [
          { h: "ابدأ من الوقت الذي يجب أن تصل فيه", p: ["السفر إلى جدة يعني غالبًا مجموعة عمرة أو رحلة طيران أو مناسبة عائلية أو عملًا في يوم محدد. أخبرنا بالوقت الذي يلزمك الوصول فيه لنحسب الانطلاق منه، مع فسحة لوقت الصلاة والوجبات والازدحام في الطريق. وإن كانت نهاية الرحلة في المطار فاترك هامشًا آمنًا قبل إنهاء الإجراءات؛ فرحلة بهذا الطول لا تُترك لآخر لحظة. وتجد الاتجاه المعاكس في صفحة جدة إلى الدمام."] },
          { h: "الاستلام من الدمام والخبر والظهران", p: ["المنطقة الشرقية مدن متجاورة متصلة ببعضها. أرسل اسم الفندق أو المجمع أو المكتب بدقة، وإن كنت قادمًا من مطار الدمام لا من المدينة فاذكر ذلك وأرسل رقم الرحلة؛ راجع صفحة التوصيل من مطار الدمام. والانطلاق المبكر يناسب مسافة كهذه، فطلب الاستلام قبل الشروق أمر معتاد."] },
          { h: "الوجهة مكة أو المطار", p: ["كثير من عائلات المنطقة الشرقية تسافر إلى جدة بوصفها أولى محطات رحلة العمرة، أو لتكمل بالطيران من مطار الملك عبدالعزيز. أخبرنا بوجهتك النهائية الحقيقية: فندق في جدة أو صالة المطار أو مكة. فإن كانت مكة سعّرنا الرحلة متصلة. وراجع صفحة جدة إلى مكة للمرحلة الأخيرة، وصفحة التوصيل من مطار جدة للاستلام من الصالات."] },
          { h: "التوقف في الرياض", p: ["يمر الطريق عادةً بمنطقة الرياض، فهي مكان طبيعي للاستراحة. اطلب رحلة مقسمة بمبيت هناك إن لم تُرد قيادة 13 ساعة في يوم واحد؛ راجع صفحتي الدمام إلى الرياض والرياض إلى جدة للنصفين. وتتبع المركبة مجموعتك: سيدان (تويوتا كامري أو هيونداي سوناتا أو فورد توروس) لمسافر أو اثنين، وجمس يوكن أو شيفروليه سوبربان أو شيفروليه تاهو للعائلات، وهيونداي ستاريا للمجموعات الأكبر بحقائبها، وتُؤكَّد في عرض السعر."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الدمام إلى جدة", items: ["الوقت الذي يجب أن تصل فيه إلى جدة أو موعد رحلتك", "عنوان الاستلام في الدمام أو الخبر أو الظهران، أو رحلة مطار الدمام", "الوجهة النهائية: فندق في جدة أو صالة المطار أو مكة", "يوم واحد أم رحلة مقسمة بمبيت في الرياض", "الركاب والأطفال والحقائب وأي احتياجات صحية", "المركبة: سيدان أو جمس يوكن أو هيونداي ستاريا"] },
        faqs: [
          { q: "هل يمكن حجز سيارة خاصة من الدمام إلى مطار جدة؟", a: "نعم، يمكنك إرسال طلب. أرسل موعد رحلتك وعنوان الاستلام ونحسب وقت الانطلاق ونؤكد الإتاحة قبل ترتيب أي شيء." },
          { q: "هل تكمل السيارة نفسها إلى مكة؟", a: "يمكنك طلب أن تنتهي الرحلة في مكة، وتُسعَّر رحلة واحدة بالوجهة النهائية التي تحددها." },
          { q: "كم تبعد الدمام عن جدة بالسيارة؟", a: "تذكر مصادر الخرائط العامة نحو 1,350 إلى 1,365 كم، أي قرابة 13 ساعة قيادة قبل التوقفات." },
          { q: "متى ننطلق من الدمام؟", a: "احسبه انطلاقًا من وقت وصولك أو رحلتك واترك هامش أمان. الانطلاق المبكر معتاد لهذه المسافة، ونتفق معك على الوقت في عرض السعر." },
          { q: "هل تتوفر هيونداي ستاريا لعائلة متجهة غربًا؟", a: "يمكنك طلب هيونداي ستاريا أو جمس يوكن أو سيدان. وتُؤكَّد المركبة المتاحة لتاريخك في عرض السعر." },
        ],
      },
    },
  },
];
