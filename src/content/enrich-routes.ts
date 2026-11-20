import type { Locale } from "@/i18n/routing";
import type { Copy, Section, ServicePage } from "./types";

/**
 * Deep-content expansion of the 11 priority route pages (2026-11-21), original text only.
 * Facts follow docs/phase1/ROUTE_GEOGRAPHY_MASTER.csv and what the pages already state; no prices, no train or flight
 * timings, no availability promises. Each direction gets its own angle so reverse pairs do not read alike.
 */
const U = "2026-11-21";
const I = "services/intercity-transfers";
type Add = { sections: Section[]; faqs: { q: string; a: string }[]; table?: Copy["table"] };

export const routeEnrichments: Record<string, Record<Locale, Add>> = {
  [`${I}/riyadh-to-dammam`]: {
    en: {
      sections: [
        { h: "Leaving Riyadh outside the rush", p: ["The roads east out of Riyadh fill in the early morning and again in the late afternoon, and the first stretch of Route 40 is where you feel it. If your appointment allows, leaving mid-morning or after the evening peak keeps the first hour calm. Tell us your fixed time and we plan the pickup backwards from it, instead of from a hopeful arrival estimate."] },
        { h: "A one-day trip for a meeting in the Eastern Province", p: ["Business travellers often go out and back in a day. Give us the meeting address and the time you must be there, the time you want to be back in Riyadh, and the buffer you need afterwards. We tell you honestly whether the day is realistic or whether a short overnight stay would serve you better."] },
        { h: "Families, bags and breaks", p: ["For a family, the number of passengers is only half the plan. Say how many suitcases and cabin bags you carry, whether children need child seats, and when they will need a break. A planned stop is easier to fit into the drive than an unplanned one at the roadside."] },
      ],
      faqs: [
        { q: "What is the best time of day to leave Riyadh for Dammam?", a: "Mid-morning and after the evening peak are usually calmer than the early morning and late afternoon. Share your fixed appointment time and we suggest a departure." },
        { q: "Can the driver wait in Dammam while I attend a meeting?", a: "Yes, by arrangement. Waiting time and its terms are set out in your quotation." },
        { q: "Can I add a stop in Hofuf or another town on the way?", a: "You can request a stop. Anything that adds significant time is reflected in the quotation." },
        { q: "How many bags fit for a family of five on this route?", a: "It depends on the vehicle and bag sizes. List your bags by type and we confirm the vehicle that fits." },
        { q: "Can I book a return a few days later?", a: "Yes. Add the return date and pickup point to the same enquiry; each leg is quoted individually." },
      ],
    },
    ar: {
      sections: [
        { h: "مغادرة الرياض خارج أوقات الزحام", p: ["تمتلئ الطرق الشرقية الخارجة من الرياض في الصباح الباكر ومرة أخرى في أواخر العصر، وأول مقطع من الطريق 40 هو الأكثر ازدحامًا. وإذا سمح موعدك فمغادرة منتصف الصباح أو بعد ذروة المساء تُبقي الساعة الأولى هادئة. أخبرنا بموعدك الثابت ونخطط الاستلام رجوعًا منه، بدل الاعتماد على تقدير وصول متفائل."] },
        { h: "رحلة يوم واحد لاجتماع في المنطقة الشرقية", p: ["كثيرًا ما يذهب رجال الأعمال ويعودون في اليوم نفسه. أعطنا عنوان الاجتماع والوقت الذي يجب أن تكون فيه هناك، ووقت العودة المطلوب إلى الرياض، والهامش الذي تحتاجه بعده. ونخبرك بصدق إن كان اليوم واقعيًا أم يخدمك مبيت قصير أكثر."] },
        { h: "العائلات والحقائب والاستراحات", p: ["بالنسبة للعائلة عدد الركاب نصف الخطة فقط. اذكر عدد الحقائب الكبيرة وحقائب اليد، وهل يحتاج الأطفال إلى مقاعد خاصة، ومتى سيحتاجون إلى استراحة. فالتوقف المخطط أسهل إدراجًا في الرحلة من توقف مفاجئ على جانب الطريق."] },
      ],
      faqs: [
        { q: "ما أفضل وقت في اليوم للانطلاق من الرياض إلى الدمام؟", a: "غالبًا ما يكون منتصف الصباح وما بعد ذروة المساء أهدأ من الصباح الباكر وأواخر العصر. أرسل موعدك الثابت ونقترح وقت الانطلاق." },
        { q: "هل ينتظر السائق في الدمام أثناء اجتماعي؟", a: "نعم، بالترتيب المسبق. ويُبيَّن وقت الانتظار وشروطه في عرض السعر." },
        { q: "هل أضيف توقفًا في الهفوف أو بلدة أخرى في الطريق؟", a: "يمكنك طلب توقف. وأي شيء يضيف وقتًا ملحوظًا يظهر في عرض السعر." },
        { q: "كم حقيبة تتسع لعائلة من خمسة أشخاص في هذا المسار؟", a: "يعتمد على المركبة وأحجام الحقائب. اذكر حقائبك بنوعها ونؤكد المركبة المناسبة." },
        { q: "هل أحجز العودة بعد أيام؟", a: "نعم. أضف تاريخ العودة ونقطة الاستلام إلى الطلب نفسه، وتُسعَّر كل رحلة على حدة." },
      ],
    },
  },
  [`${I}/dammam-to-riyadh`]: {
    en: {
      sections: [
        { h: "Landing at King Fahd Airport and driving on to Riyadh", p: ["Many travellers on this direction arrive by air at Dammam and continue straight to the capital. Send your flight number and landing time, and tell us how long you usually take to clear immigration and collect bags. The pickup is then timed to your arrival, not to the scheduled landing alone."] },
        { h: "Early starts for Riyadh meetings and flights", p: ["If you must be in Riyadh for a morning meeting or a departure from King Khalid International Airport, the plan starts the evening before. Tell us the appointment or flight time and how much buffer you want. For a flight, the airline's check-in guidance decides the latest sensible arrival at the airport."] },
        { h: "Weekend and holiday traffic", p: ["Thursday evening and the weekend bring families on the move between the Eastern Province and the capital, and school holidays stretch the same pattern. If your dates fall in those periods, allow extra time and tell us how flexible your departure is."] },
      ],
      faqs: [
        { q: "Can the driver meet me inside Dammam airport for the drive to Riyadh?", a: "You can request an arrivals pickup with your flight number. The meeting arrangement is confirmed in the quotation." },
        { q: "How early should I leave Dammam for a flight from Riyadh?", a: "Work back from your airline's check-in guidance, then add a margin for traffic. Give us the flight time and we propose a departure." },
        { q: "Can we stop in Hofuf on the way to Riyadh?", a: "You can ask for a stop; anything that adds time is reflected in the quotation." },
        { q: "Can I book Dammam to Riyadh for a group of colleagues?", a: "Yes. State the number of passengers and bags, and we confirm one vehicle or more." },
        { q: "Can the car take me to a hotel in KAFD or Olaya?", a: "Give the hotel name and area. The drop-off point is confirmed in the quotation." },
      ],
    },
    ar: {
      sections: [
        { h: "الهبوط في مطار الملك فهد ثم المتابعة إلى الرياض", p: ["يصل كثير من المسافرين في هذا الاتجاه جوًا إلى الدمام ويتابعون مباشرة إلى العاصمة. أرسل رقم رحلتك ووقت الهبوط، وأخبرنا كم تستغرق عادةً في الجوازات واستلام الحقائب. فيُضبط الاستلام على وصولك الفعلي لا على موعد الهبوط المجدول وحده."] },
        { h: "الانطلاق المبكر لاجتماعات الرياض ورحلاتها", p: ["إذا كان عليك أن تكون في الرياض لاجتماع صباحي أو لمغادرة من مطار الملك خالد الدولي فتبدأ الخطة من مساء اليوم السابق. أخبرنا بموعد الاجتماع أو الرحلة والهامش الذي تريده. وفي الرحلة الجوية تحدد إرشادات تسجيل الوصول لدى شركة الطيران آخر وقت معقول للوصول إلى المطار."] },
        { h: "زحام نهاية الأسبوع والإجازات", p: ["تجلب مساء الخميس ونهاية الأسبوع عائلات تتنقل بين المنطقة الشرقية والعاصمة، وتمدّ الإجازات المدرسية النمط نفسه. وإذا وقعت تواريخك في تلك الفترات فاترك وقتًا إضافيًا وأخبرنا بمرونة موعد انطلاقك."] },
      ],
      faqs: [
        { q: "هل يقابلني السائق داخل مطار الدمام للذهاب إلى الرياض؟", a: "يمكنك طلب استقبال في صالة الوصول مع رقم رحلتك. وتُؤكَّد آلية اللقاء في عرض السعر." },
        { q: "متى أغادر الدمام لرحلة جوية من الرياض؟", a: "احسب رجوعًا من إرشادات تسجيل الوصول لدى شركة الطيران ثم أضف هامشًا للزحام. أعطنا موعد الرحلة ونقترح وقت الانطلاق." },
        { q: "هل نتوقف في الهفوف في الطريق إلى الرياض؟", a: "يمكنك طلب توقف؛ وأي شيء يضيف وقتًا يظهر في عرض السعر." },
        { q: "هل أحجز من الدمام إلى الرياض لمجموعة زملاء؟", a: "نعم. اذكر عدد الركاب والحقائب ونؤكد مركبة واحدة أو أكثر." },
        { q: "هل توصلني السيارة إلى فندق في مركز الملك عبدالله المالي أو العليا؟", a: "اذكر اسم الفندق ومنطقته. وتُؤكَّد نقطة النزول في عرض السعر." },
      ],
    },
  },
  [`${I}/jeddah-to-makkah`]: {
    en: {
      sections: [
        { h: "Arriving for Umrah: luggage and ihram clothing", p: ["Many guests on this route are on their way to perform Umrah. Keep the clothing and items you need at the miqat or on arrival in a bag you can reach, not at the bottom of the boot, and tell us if you intend to stop to change. Large suitcases and cabin bags are counted together when we size the vehicle."] },
        { h: "Hotel check-in and the Haram area", p: ["Rooms in Makkah are often ready only from the afternoon, and vehicle access near the Haram is controlled. For an early arrival, ask your hotel whether luggage can be held, and tell us the hotel's name and area so the car can drop you at the nearest accessible point."] },
        { h: "Evening and Ramadan travel", p: ["In summer and in Ramadan, many pilgrims travel after sunset to avoid the heat, and the Jeddah to Makkah road is busy then. If you can, leave a window for the drive instead of a single minute, and say if you need to be in time for a particular prayer."] },
      ],
      faqs: [
        { q: "Can the driver stop at a pharmacy or shop before Makkah?", a: "Short stops can be requested. Tell us in your enquiry so they are included in the plan." },
        { q: "Is the drive suitable for elderly relatives?", a: "Yes, with planning. Tell us about mobility needs so the vehicle, the pickup point and any breaks suit them." },
        { q: "Can we arrive in Makkah in the evening and leave the next morning?", a: "Yes. Add both legs, or the return, to one enquiry; each is quoted individually." },
        { q: "Do you arrange Umrah permits?", a: "No. Permits are issued by the authorities. We provide transport only." },
        { q: "How do I pay for the transfer?", a: "By payment link, STC Pay or cash, as agreed in your confirmation." },
      ],
    },
    ar: {
      sections: [
        { h: "الوصول للعمرة: الأمتعة وملابس الإحرام", p: ["كثير من ضيوف هذا المسار في طريقهم لأداء العمرة. اجعل الملابس والأغراض التي تحتاجها عند الميقات أو عند الوصول في حقيبة يسهل الوصول إليها لا في قاع الصندوق، وأخبرنا إن كنت تنوي التوقف للتغيير. وتُحتسب الحقائب الكبيرة وحقائب اليد معًا عند تحديد حجم المركبة."] },
        { h: "تسجيل الفندق ومنطقة الحرم", p: ["غالبًا لا تجهز الغرف في مكة المكرمة إلا بعد الظهر، ويُنظَّم وصول المركبات قرب الحرم. وفي الوصول المبكر اسأل فندقك هل تُحفظ الحقائب، وأخبرنا باسم الفندق ومنطقته لتنزلك السيارة عند أقرب نقطة يمكن الوصول إليها."] },
        { h: "السفر مساءً وفي رمضان", p: ["في الصيف وفي رمضان يسافر كثير من المعتمرين بعد الغروب تجنبًا للحر، ويزدحم طريق جدة إلى مكة المكرمة حينها. وإن أمكن فاترك نافذة زمنية للرحلة بدل دقيقة واحدة، وأخبرنا إن كان عليك الوصول في وقت صلاة بعينها."] },
      ],
      faqs: [
        { q: "هل يتوقف السائق عند صيدلية أو متجر قبل مكة المكرمة؟", a: "يمكن طلب توقفات قصيرة. أخبرنا في طلبك لتُدرج في الخطة." },
        { q: "هل الرحلة مناسبة لقريب مسن؟", a: "نعم، مع التخطيط. أخبرنا باحتياجات الحركة لتناسبه المركبة ونقطة الاستلام وأي استراحات." },
        { q: "هل نصل مكة المكرمة مساءً ونغادر صباح اليوم التالي؟", a: "نعم. أضف الرحلتين أو العودة إلى طلب واحد وتُسعَّر كل منهما على حدة." },
        { q: "هل ترتبون تصاريح العمرة؟", a: "لا. تصدر التصاريح الجهات المختصة. ونحن نوفر النقل فقط." },
        { q: "كيف أدفع ثمن التوصيل؟", a: "عبر رابط دفع أو STC Pay أو نقدًا، بحسب ما يُتفق عليه في التأكيد." },
      ],
    },
  },
  [`${I}/makkah-to-jeddah`]: {
    en: {
      sections: [
        { h: "Timing the farewell tawaf and check-out", p: ["Pilgrims leaving Makkah usually finish their final tawaf, return to the hotel, collect luggage and only then set off. That chain is easy to underestimate, especially in crowded seasons. Tell us when you expect to finish and we plan the pickup after it, not before."] },
        { h: "From the hotel to the airport kerb", p: ["Luggage leaves a Haram-area hotel through lifts, lobbies and a controlled drop-off zone, which takes longer than a normal departure. Ask your hotel to bring the bags down ahead of time, and give us the hotel name and the exit you will use."] },
        { h: "A stop in Jeddah before the flight", p: ["If your flight is late, you may want a stop in Al Balad or on the Corniche on the way. Tell us the flight time and the places you want to see, and we say how much time is realistic without putting your departure at risk."] },
      ],
      faqs: [
        { q: "What if I finish the farewell tawaf later than planned?", a: "Message us as soon as you know. The pickup time can usually be adjusted, subject to the terms in your quotation." },
        { q: "Can you drop me at the Jeddah airport terminal for my airline?", a: "Tell us your airline and flight number. The terminal and drop-off point are confirmed in the quotation." },
        { q: "Can I travel with a group to Jeddah airport in two vehicles?", a: "Yes. State the passengers and bags and we confirm the vehicles needed." },
        { q: "Is it better to leave Makkah the evening before an early flight?", a: "It can be. If your flight is early, a night in Jeddah avoids a very early start; discuss the option in your enquiry." },
        { q: "Can I book the car for the same day as my arrival from another city?", a: "Yes, if you give both journeys' times. We check they fit together." },
      ],
    },
    ar: {
      sections: [
        { h: "ضبط توقيت طواف الوداع والخروج من الفندق", p: ["عادةً يُنهي المغادرون من مكة المكرمة طواف الوداع ثم يعودون إلى الفندق ويأخذون الحقائب وبعدها ينطلقون. وهذه السلسلة يسهل التقليل من وقتها خاصة في المواسم المزدحمة. أخبرنا متى تتوقع الانتهاء ونخطط الاستلام بعده لا قبله."] },
        { h: "من الفندق إلى رصيف المطار", p: ["تخرج الحقائب من فندق قرب الحرم عبر المصاعد والردهات ومنطقة نزول منظّمة، وهذا يستغرق أطول من المغادرة المعتادة. اطلب من فندقك إنزال الحقائب مسبقًا، وأعطنا اسم الفندق والمخرج الذي ستستخدمه."] },
        { h: "توقف في جدة قبل الرحلة", p: ["إذا كانت رحلتك متأخرة فقد ترغب في توقف في البلد أو على الكورنيش في الطريق. أخبرنا بموعد الرحلة والأماكن التي تريدها، ونقول لك كم من الوقت واقعي دون تعريض موعد مغادرتك للخطر."] },
      ],
      faqs: [
        { q: "ماذا لو أنهيت طواف الوداع متأخرًا عن المخطط؟", a: "راسلنا فور علمك. ويمكن عادةً تعديل وقت الاستلام، بحسب الشروط الواردة في عرض السعر." },
        { q: "هل توصلونني إلى صالة مطار جدة الخاصة بشركة الطيران التي أسافر معها؟", a: "أخبرنا بشركة الطيران ورقم الرحلة. وتُؤكَّد الصالة ونقطة النزول في عرض السعر." },
        { q: "هل أسافر بمجموعة إلى مطار جدة في مركبتين؟", a: "نعم. اذكر الركاب والحقائب ونؤكد المركبات اللازمة." },
        { q: "هل الأفضل مغادرة مكة المكرمة في مساء اليوم السابق لرحلة مبكرة؟", a: "قد يكون كذلك. فإن كانت رحلتك مبكرة جدًا يجنبك المبيت في جدة انطلاقًا مبكرًا؛ ناقش الخيار في طلبك." },
        { q: "هل أحجز السيارة في يوم وصولي من مدينة أخرى؟", a: "نعم، إذا أعطيت توقيت الرحلتين. ونتحقق من توافقهما." },
      ],
    },
  },
  [`${I}/makkah-to-madinah`]: {
    en: {
      sections: [
        { h: "After Umrah: leaving Makkah for Madinah", p: ["Many travellers on this road have just completed Umrah and are tired. Plan the check-out and the departure for a time when the family is rested, and add a margin for the final tawaf and luggage. A calm start makes the four-hour drive easier for everyone."] },
        { h: "Prayer and rest stops on the road", p: ["On a road of more than 400 km, plan where you will pray and eat. Tell us the prayer times you care about and we choose stops accordingly, and say if anyone needs more frequent breaks, such as young children or elderly passengers."] },
        { h: "Day or night driving", p: ["Some pilgrims prefer to drive in the cooler evening, others to arrive in daylight and settle into the hotel. Tell us which suits you and whether your Madinah hotel has a late check-in, so you are not left waiting in the lobby."] },
      ],
      faqs: [
        { q: "Do I need to stop at a miqat between Makkah and Madinah?", a: "No. The miqat applies to pilgrims entering ihram on the way to Makkah. This direction has no ihram stop." },
        { q: "Can we stop at a mosque on the way for prayer?", a: "Yes. Tell us the prayers you want to catch and the stops are planned into the journey." },
        { q: "Can our elderly parents sit in the front seat?", a: "You can ask for seating arrangements. Tell us about mobility needs and we confirm what suits the vehicle." },
        { q: "Can the driver wait while we visit the Prophet's Mosque on arrival?", a: "Waiting is possible by arrangement, with the terms stated in your quotation." },
        { q: "Is it worth booking the return Madinah to Makkah at the same time?", a: "If you know the date, yes. Add it to the same enquiry; each leg is quoted individually." },
      ],
    },
    ar: {
      sections: [
        { h: "بعد العمرة: مغادرة مكة المكرمة إلى المدينة المنورة", p: ["كثير من مسافري هذا الطريق أنهوا العمرة للتو وهم متعبون. خطّط للخروج من الفندق والانطلاق في وقت تكون فيه العائلة مرتاحة، وأضف هامشًا لطواف الوداع والحقائب. فالبداية الهادئة تجعل رحلة الأربع ساعات أسهل على الجميع."] },
        { h: "استراحات الصلاة والطعام في الطريق", p: ["في طريق يزيد على 400 كم خطّط أين ستصلي وتأكل. أخبرنا بأوقات الصلاة التي تهمك ونختار التوقفات بحسبها، وأخبرنا إن كان أحد يحتاج استراحات أكثر، كالأطفال الصغار أو كبار السن."] },
        { h: "القيادة نهارًا أو ليلًا", p: ["يفضل بعض المعتمرين القيادة في المساء الأبرد، وآخرون الوصول في ضوء النهار والاستقرار في الفندق. أخبرنا بما يناسبك وهل لفندقك في المدينة المنورة موعد دخول متأخر، كي لا تنتظر في الردهة."] },
      ],
      faqs: [
        { q: "هل أتوقف عند ميقات بين مكة المكرمة والمدينة المنورة؟", a: "لا. يخص الميقات من يحرمون في طريقهم إلى مكة المكرمة. وهذا الاتجاه ليس فيه توقف للإحرام." },
        { q: "هل نتوقف عند مسجد في الطريق للصلاة؟", a: "نعم. أخبرنا بالصلوات التي تريد إدراكها وتُدرج التوقفات في الرحلة." },
        { q: "هل يجلس والداي المسنان في المقعد الأمامي؟", a: "يمكنك طلب ترتيب الجلوس. أخبرنا باحتياجات الحركة ونؤكد ما يناسب المركبة." },
        { q: "هل ينتظر السائق أثناء زيارتنا للمسجد النبوي عند الوصول؟", a: "الانتظار ممكن بالترتيب المسبق، وشروطه في عرض السعر." },
        { q: "هل يجدر حجز العودة من المدينة المنورة إلى مكة المكرمة في الوقت نفسه؟", a: "إن عرفت التاريخ فنعم. أضفه إلى الطلب نفسه وتُسعَّر كل رحلة على حدة." },
      ],
    },
  },
  [`${I}/madinah-to-makkah`]: {
    en: {
      sections: [
        { h: "Having your ihram items ready", p: ["Pilgrims who enter ihram on the way to Makkah need their clothing and items reachable before the journey starts. Keep them in a small bag in the passenger area, and tell us if you plan to change at your hotel or at the miqat, so the timing includes it. Ihram arrangements are your own decision with your scholar or group leader."] },
        { h: "Arriving in Makkah around prayer times", p: ["Check-in, traffic and the Haram access all behave differently around prayer times. If you know when you want to reach the Haram, tell us; we can plan the arrival to avoid the most congested hour, though no one can guarantee a quiet road in busy seasons."] },
        { h: "Connecting with a flight from Jeddah", p: ["Some travellers continue from Makkah to Jeddah airport right after Umrah. If that is your plan, tell us the flight time when you book the Madinah to Makkah leg, so both journeys are planned together and the airport leg has a safe margin."] },
      ],
      faqs: [
        { q: "Can we stop at the miqat even if the driver is in a hurry?", a: "Tell us in advance and the stop is planned into the journey, not squeezed in. It is confirmed in the quotation." },
        { q: "Can I change into ihram clothing at the miqat?", a: "Many do. Mention it in the enquiry and we allow time for it." },
        { q: "How early should I leave Madinah if I want to reach the Haram by evening?", a: "Allow the drive plus the miqat stop and check-in. Share your target time and we suggest a departure." },
        { q: "Can the car wait in Makkah while we complete Umrah?", a: "Waiting is arranged in advance. The terms are in your quotation." },
        { q: "Can we add a stop at a restaurant or shop on the way?", a: "Short stops can be requested. Anything that adds substantial time is reflected in the quotation." },
      ],
    },
    ar: {
      sections: [
        { h: "تجهيز أغراض الإحرام", p: ["يحتاج من يحرمون في طريقهم إلى مكة المكرمة إلى ملابسهم وأغراضهم في متناول اليد قبل بدء الرحلة. ضعها في حقيبة صغيرة في مقصورة الركاب، وأخبرنا إن كنت ستغيّر ملابسك في الفندق أو عند الميقات ليتضمن التوقيت ذلك. وترتيبات الإحرام قرارك مع عالمك أو قائد مجموعتك."] },
        { h: "الوصول إلى مكة المكرمة حول أوقات الصلاة", p: ["يختلف سلوك التسجيل في الفنادق وحركة المرور والوصول إلى الحرم حول أوقات الصلاة. وإذا كنت تعرف متى تريد الوصول إلى الحرم فأخبرنا؛ ونخطط الوصول لتجنب أشد الساعات ازدحامًا، وإن كان لا أحد يضمن طريقًا هادئًا في المواسم المزدحمة."] },
        { h: "الربط برحلة جوية من جدة", p: ["يتابع بعض المسافرين من مكة المكرمة إلى مطار جدة بعد العمرة مباشرة. فإن كانت هذه خطتك فأخبرنا بموعد الرحلة عند حجز مقطع المدينة المنورة إلى مكة المكرمة، لتُخطَّط الرحلتان معًا ويكون لمقطع المطار هامش آمن."] },
      ],
      faqs: [
        { q: "هل نتوقف عند الميقات حتى لو كان السائق مستعجلًا؟", a: "أخبرنا مسبقًا ويُدرج التوقف في الرحلة لا أن يُحشر. ويُؤكَّد في عرض السعر." },
        { q: "هل أغيّر إلى ملابس الإحرام عند الميقات؟", a: "يفعل ذلك كثيرون. اذكره في الطلب ونترك وقتًا له." },
        { q: "متى أغادر المدينة المنورة إن أردت الوصول إلى الحرم مساءً؟", a: "احسب الرحلة مع توقف الميقات والتسجيل في الفندق. أرسل وقتك المستهدف ونقترح موعد الانطلاق." },
        { q: "هل تنتظر السيارة في مكة المكرمة حتى نكمل العمرة؟", a: "يُرتَّب الانتظار مسبقًا. وشروطه في عرض السعر." },
        { q: "هل نضيف توقفًا في مطعم أو متجر في الطريق؟", a: "يمكن طلب توقفات قصيرة. وأي شيء يضيف وقتًا كبيرًا يظهر في عرض السعر." },
      ],
    },
  },
  [`${I}/jeddah-to-madinah`]: {
    en: {
      sections: [
        { h: "Airport arrivals: Jeddah or Madinah", p: ["Some travellers land at Jeddah because of the flight or fare, then drive to Madinah; others could fly straight to Madinah's own airport. If you are choosing, compare the whole journey from landing to hotel door, including bag collection and the four-hour drive, rather than the flight alone."] },
        { h: "Night drives and driver rest", p: ["A late-night landing followed by a four-hour drive is tiring for passengers and the driver. If you arrive after midnight, consider resting in Jeddah first, or tell us you want to travel at night so the driver's hours are planned for it."] },
        { h: "Children and breaks", p: ["For families with small children, plan a break roughly halfway and keep snacks and water within reach. Tell us ages and the number of child seats, and we plan the vehicle and the stops to suit."] },
      ],
      faqs: [
        { q: "Is it better to fly into Jeddah or Madinah?", a: "It depends on fares and timing. Compare door-to-door time, including the drive, and tell us which you choose so the pickup is planned." },
        { q: "Can I go from Jeddah airport to my hotel in Madinah?", a: "Yes. Send your flight number and the hotel name and area; the drop-off point is confirmed in the quotation." },
        { q: "Can we rest in Jeddah overnight and leave in the morning?", a: "Yes. Tell us the date and time you want to leave and we quote that journey." },
        { q: "Is a sedan big enough for four with luggage?", a: "It depends on the bag sizes. List your bags and we confirm which vehicle fits." },
        { q: "Can the driver stop at a mosque or restaurant on the way?", a: "Yes, by arrangement. Tell us in the enquiry so stops are planned." },
      ],
    },
    ar: {
      sections: [
        { h: "الوصول جوًا: جدة أم المدينة المنورة", p: ["يهبط بعض المسافرين في جدة بسبب الرحلة أو سعرها ثم يقودون إلى المدينة المنورة، وآخرون يستطيعون الطيران مباشرة إلى مطار المدينة. فإن كنت تختار فقارن الرحلة كاملة من الهبوط إلى باب الفندق، بما فيها استلام الحقائب وقيادة الأربع ساعات، لا الرحلة الجوية وحدها."] },
        { h: "القيادة الليلية وراحة السائق", p: ["الهبوط في وقت متأخر ليلًا تتبعه قيادة أربع ساعات متعب للركاب والسائق. فإن وصلت بعد منتصف الليل ففكّر في الراحة في جدة أولًا، أو أخبرنا بأنك تريد السفر ليلًا ليُخطَّط لساعات السائق."] },
        { h: "الأطفال والاستراحات", p: ["للعائلات التي معها أطفال صغار خطّطوا لاستراحة تقريبًا في منتصف الطريق وأبقوا الوجبات الخفيفة والماء في متناول اليد. أخبرنا بالأعمار وعدد مقاعد الأطفال ونخطط المركبة والتوقفات على ذلك."] },
      ],
      faqs: [
        { q: "هل الأفضل الطيران إلى جدة أم إلى المدينة المنورة؟", a: "يعتمد على الأسعار والتوقيت. قارن الوقت من الباب إلى الباب بما فيه القيادة، وأخبرنا بخيارك ليُخطَّط الاستقبال." },
        { q: "هل أذهب من مطار جدة إلى فندقي في المدينة المنورة؟", a: "نعم. أرسل رقم رحلتك واسم الفندق ومنطقته، وتُؤكَّد نقطة النزول في عرض السعر." },
        { q: "هل نرتاح في جدة ليلة ونغادر صباحًا؟", a: "نعم. أخبرنا بتاريخ ووقت المغادرة ونسعّر تلك الرحلة." },
        { q: "هل السيدان كافية لأربعة مع حقائب؟", a: "يعتمد على أحجام الحقائب. اذكرها ونؤكد المركبة المناسبة." },
        { q: "هل يتوقف السائق عند مسجد أو مطعم في الطريق؟", a: "نعم، بالترتيب المسبق. أخبرنا في الطلب لتُخطَّط التوقفات." },
      ],
    },
  },
  [`${I}/madinah-to-jeddah`]: {
    en: {
      sections: [
        { h: "Leaving Madinah after your visit", p: ["Visitors leaving Madinah often make a last prayer at the Prophet's Mosque and then collect luggage. Give yourself a margin after that last visit; rushing a farewell is the commonest reason a Jeddah flight becomes tight. Tell us when you expect to leave the mosque and we plan the pickup from there."] },
        { h: "Arriving at the right Jeddah terminal", p: ["King Abdulaziz International Airport serves flights through Terminal 1 and the North Terminal, and the right kerb depends on your airline. Send the airline and flight number so the drop-off point is correct and you are not walking between terminals with bags."] },
        { h: "Not just the airport", p: ["Not every traveller from Madinah is flying. Some are going to a Jeddah hotel, to Al Balad or on to Makkah. Say where you are going in Jeddah, and if the plan includes Makkah the same day, ask for both legs so the timing fits."] },
      ],
      faqs: [
        { q: "How much margin should I add for a Jeddah flight?", a: "Work back from your airline's check-in guidance, then add a margin for traffic. Share your flight time and we suggest a departure." },
        { q: "Can I go to a Jeddah hotel instead of the airport?", a: "Yes. Give the hotel name and area and the journey is quoted to that address." },
        { q: "Can we visit Quba or Uhud before leaving Madinah?", a: "Yes. List the stops and how long you want at each; the quotation covers the circuit." },
        { q: "Is there a night option for a very early flight?", a: "Yes, if your flight is early a late-evening departure can be planned. Tell us the flight time and we say what is realistic." },
        { q: "Can two vehicles travel together for a bigger family?", a: "Yes. State passengers and bags and we confirm the vehicles needed." },
      ],
    },
    ar: {
      sections: [
        { h: "مغادرة المدينة المنورة بعد زيارتك", p: ["كثيرًا ما يؤدي الزوار المغادرون صلاة أخيرة في المسجد النبوي ثم يأخذون الحقائب. اترك لنفسك هامشًا بعد تلك الزيارة الأخيرة؛ فالعجلة في الوداع أشيع أسباب ضيق وقت رحلة جدة. أخبرنا متى تتوقع الخروج من المسجد ونخطط الاستلام من هناك."] },
        { h: "الوصول إلى صالة جدة الصحيحة", p: ["يخدم مطار الملك عبدالعزيز الدولي الرحلات عبر الصالة 1 والصالة الشمالية، وتعتمد الرصيف الصحيح على شركة الطيران. أرسل اسم الشركة ورقم الرحلة لتكون نقطة النزول صحيحة فلا تمشي بين الصالات بالحقائب."] },
        { h: "ليس المطار وحده", p: ["ليس كل مسافر من المدينة المنورة متجهًا إلى رحلة جوية. فبعضهم إلى فندق في جدة أو إلى البلد أو متابعًا إلى مكة المكرمة. اذكر وجهتك في جدة، وإن كانت الخطة تشمل مكة المكرمة في اليوم نفسه فاطلب الرحلتين ليتوافق التوقيت."] },
      ],
      faqs: [
        { q: "كم هامشًا أضيف لرحلة جوية من جدة؟", a: "احسب رجوعًا من إرشادات تسجيل الوصول لدى شركة الطيران ثم أضف هامشًا للزحام. شاركنا بموعد رحلتك ونقترح وقت الانطلاق." },
        { q: "هل أذهب إلى فندق في جدة بدل المطار؟", a: "نعم. اذكر اسم الفندق ومنطقته وتُسعَّر الرحلة إلى ذلك العنوان." },
        { q: "هل نزور قباء أو أحد قبل مغادرة المدينة المنورة؟", a: "نعم. اذكر المحطات والمدة عند كل منها ويشمل عرض السعر الجولة." },
        { q: "هل هناك خيار ليلي لرحلة مبكرة جدًا؟", a: "نعم، إن كانت رحلتك مبكرة يمكن ترتيب انطلاق في أواخر المساء. أخبرنا بموعد الرحلة ونقول ما هو واقعي." },
        { q: "هل تسافر مركبتان معًا لعائلة أكبر؟", a: "نعم. اذكر الركاب والحقائب ونؤكد المركبات اللازمة." },
      ],
    },
  },
  [`${I}/riyadh-to-jeddah`]: {
    en: {
      sections: [
        { h: "A long day, planned honestly", p: ["At 955 km the drive is long, and the sensible plan is to treat it as most of a day on the road. Leave early, plan the meal and prayer stops in advance, and decide whether you need to arrive at a fixed time. We tell you plainly if the schedule you want does not leave room for rest."] },
        { h: "One day or two", p: ["Some travellers split the journey with a night on the way, particularly families with young children or elderly passengers. If you want to break the trip, tell us where you would like to stay and we plan the two days as one booking."] },
        { h: "Road, air or a mix", p: ["Domestic flights are the fast option, but a car carries luggage and a family together and reaches your hotel door at the end. If part of your group flies and part drives, tell us and we plan the drive to match the flight arrivals."] },
      ],
      faqs: [
        { q: "How many breaks should I plan on a 955 km drive?", a: "Plan at least two or three: a meal, prayer and fuel stops. Tell us the pace you prefer and the stops are built into the schedule." },
        { q: "Can the driver rest before the return?", a: "Yes. For a return the next day or later, driver rest is planned and reflected in the quotation." },
        { q: "Can I ask for a night start to arrive in the morning?", a: "You can request it. Night driving is planned with the driver's hours in mind and confirmed in the quotation." },
        { q: "Is a GMC Yukon or a Hyundai Staria better for this distance?", a: "It depends on your party and luggage. State your numbers and we confirm the vehicle that fits." },
        { q: "Can I add a stop in Taif or another city on the way?", a: "You can request it. Any detour is reflected in the quotation." },
      ],
    },
    ar: {
      sections: [
        { h: "يوم طويل يُخطَّط بصدق", p: ["القيادة لمسافة 955 كم طويلة، والخطة المعقولة أن تعدّها معظم يوم على الطريق. انطلق مبكرًا وخطّط توقفات الطعام والصلاة مسبقًا، وقرر هل يجب أن تصل في موعد ثابت. ونقول لك بوضوح إن كان الجدول الذي تريده لا يترك مجالًا للراحة."] },
        { h: "يوم واحد أم يومان", p: ["يقسم بعض المسافرين الرحلة بمبيت في الطريق، خاصةً العائلات التي معها أطفال صغار أو كبار سن. فإن أردت تقسيم الرحلة فأخبرنا أين تريد المبيت ونخطط اليومين حجزًا واحدًا."] },
        { h: "الطريق أم الجو أم مزيج", p: ["الرحلات الجوية الداخلية هي الخيار السريع، لكن السيارة تحمل الحقائب والعائلة معًا وتصل إلى باب فندقك في النهاية. وإن كان جزء من مجموعتك يطير وجزء يقود فأخبرنا لنخطط القيادة بما يتوافق مع وصول الرحلات."] },
      ],
      faqs: [
        { q: "كم استراحة أخطط في قيادة 955 كم؟", a: "خطّط لاثنتين أو ثلاث على الأقل: وجبة وصلاة ووقود. أخبرنا بالوتيرة التي تفضلها وتُدرج التوقفات في الجدول." },
        { q: "هل يرتاح السائق قبل العودة؟", a: "نعم. وفي العودة بعد يوم أو أكثر تُخطَّط راحة السائق وتنعكس في عرض السعر." },
        { q: "هل أطلب انطلاقًا ليليًا للوصول صباحًا؟", a: "يمكنك طلب ذلك. ويُخطَّط القيادة الليلية مع مراعاة ساعات السائق وتُؤكَّد في عرض السعر." },
        { q: "هل الجمس يوكن أفضل أم هيونداي ستاريا لهذه المسافة؟", a: "يعتمد على جماعتك وحقائبك. اذكر أعدادك ونؤكد المركبة المناسبة." },
        { q: "هل أضيف توقفًا في الطائف أو مدينة أخرى في الطريق؟", a: "يمكنك طلب ذلك. وأي انحراف عن المسار يظهر في عرض السعر." },
      ],
    },
  },
  [`${I}/riyadh-to-makkah`]: {
    en: {
      sections: [
        { h: "Timing the arrival around prayers and check-in", p: ["After a drive of 871 km, you will want to reach the hotel, rest and then go to the Haram. Check-in times and the crowds around prayers decide how smooth that is. Tell us your target arrival and which prayer you hope to attend, and we plan the departure to give you a realistic chance."] },
        { h: "Straight through or overnight", p: ["Some pilgrims drive through in one long day; others prefer a night on the way, especially with elderly parents or young children. Tell us how you want to pace the journey and we quote it as a single day or as a two-day trip."] },
        { h: "Back to Riyadh or on to Madinah", p: ["After Umrah, many travellers continue to Madinah or return to Riyadh. If you know your dates, add them to the same enquiry; the Makkah to Madinah and Madinah to Riyadh legs are quoted individually, and driver rest is planned for longer sequences."] },
      ],
      faqs: [
        { q: "What time should I leave Riyadh to reach Makkah by evening?", a: "Allow the full drive plus breaks. Give us your target arrival and we suggest a departure." },
        { q: "Can we do Umrah the same night we arrive?", a: "Many do. Tell us your plan so the arrival time and the hotel check-in fit it." },
        { q: "Can I travel with a group of eight from Riyadh to Makkah?", a: "State the passengers and bags and we confirm one or more vehicles." },
        { q: "Can the driver wait at the Makkah hotel while we rest?", a: "Waiting is possible by arrangement. Terms are set out in your quotation." },
        { q: "Can you bring us back to Riyadh a few days later?", a: "Yes. Add the return to the enquiry; each leg is quoted individually." },
      ],
    },
    ar: {
      sections: [
        { h: "ضبط الوصول حول أوقات الصلاة وتسجيل الفندق", p: ["بعد قيادة 871 كم ستريد الوصول إلى الفندق والراحة ثم التوجه إلى الحرم. وتحدد أوقات التسجيل في الفندق والزحام حول الصلوات مدى سلاسة ذلك. أخبرنا بموعد وصولك المستهدف والصلاة التي ترجو حضورها، ونخطط الانطلاق ليكون لك فرصة واقعية."] },
        { h: "مباشرة أم مع مبيت", p: ["يقطع بعض المعتمرين الطريق في يوم طويل واحد، وآخرون يفضلون مبيتًا في الطريق، خاصةً مع والدين مسنّين أو أطفال صغار. أخبرنا بوتيرة الرحلة التي تريد ونسعّرها يومًا واحدًا أو رحلة يومين."] },
        { h: "العودة إلى الرياض أو المتابعة إلى المدينة المنورة", p: ["بعد العمرة يتابع كثير من المسافرين إلى المدينة المنورة أو يعودون إلى الرياض. فإن عرفت تواريخك فأضفها إلى الطلب نفسه؛ وتُسعَّر مقاطع مكة المكرمة إلى المدينة المنورة والمدينة المنورة إلى الرياض كل على حدة، وتُخطَّط راحة السائق للتسلسلات الأطول."] },
      ],
      faqs: [
        { q: "متى أغادر الرياض لأصل مكة المكرمة مساءً؟", a: "احسب الرحلة كاملة مع الاستراحات. أعطنا موعد وصولك المستهدف ونقترح وقت الانطلاق." },
        { q: "هل نؤدي العمرة في الليلة نفسها التي نصل فيها؟", a: "يفعل ذلك كثيرون. أخبرنا بخطتك ليتوافق وقت الوصول وتسجيل الفندق معها." },
        { q: "هل أسافر بمجموعة من ثمانية من الرياض إلى مكة المكرمة؟", a: "اذكر الركاب والحقائب ونؤكد مركبة أو أكثر." },
        { q: "هل ينتظر السائق عند فندق مكة المكرمة ونحن نرتاح؟", a: "الانتظار ممكن بالترتيب المسبق. والشروط في عرض السعر." },
        { q: "هل تعيدوننا إلى الرياض بعد أيام؟", a: "نعم. أضف العودة إلى الطلب وتُسعَّر كل رحلة على حدة." },
      ],
    },
  },
  [`${I}/riyadh-to-madinah`]: {
    en: {
      table: {
        h: "Riyadh to Madinah at a glance",
        head: ["Item", "Detail"],
        rows: [
          ["Road distance", "About 826 km, city centre to city centre (routing data)"],
          ["Driving time", "About 7 h 40 min without stops (routing estimate; stops and traffic add to it)"],
          ["Main road", "Route 65 for about 99% of the distance (routing data)"],
          ["Pickup area in Riyadh", "Olaya and the King Fahd Road hotel corridor, or your address"],
          ["Drop-off area in Madinah", "The Markaziyah area around the Prophet's Mosque, or your hotel"],
          ["Airports", "King Khalid International Airport (RUH) and Prince Mohammad bin Abdulaziz International Airport (MED)"],
        ],
      },
      sections: [
        { h: "How the day runs", p: ["A road journey of this length is an entire day. A typical plan is an early start from Riyadh, a first stop for fuel and breakfast, a prayer and lunch stop in the middle, and an arrival in Madinah in the afternoon or evening. Tell us the time you want to arrive and we work backwards to a departure."] },
        { h: "Flight or road", p: ["Domestic flights between Riyadh and Madinah are quicker in the air, but the airport process at both ends adds time, and a flight cannot carry a family's luggage to the hotel door. A car suits a larger party, heavy bags, travellers who want to stop on the way and anyone who prefers to travel privately."] },
        { h: "Staying near the Prophet's Mosque", p: ["Vehicle access around the Prophet's Mosque is managed and busy around prayer times. Give us the hotel name and area, and ask the hotel where cars can stop. The drop-off point is confirmed in the quotation; the last stretch may be on foot."] },
        { h: "Families, elders and heavy luggage", p: ["A trip of this length is easier when the plan fits the people. Tell us how many adults and children travel, whether anyone has limited mobility, how many large suitcases and cabin bags you carry, and whether you need child seats. We confirm a vehicle with room for everyone and the bags, and we plan breaks that suit the slowest traveller."] },
        { h: "Ziyarat and onward legs", p: ["Most guests spend several days in Madinah. If you want transport for Quba, Uhud and Masjid al-Qiblatain, or to continue to Makkah, ask in the same enquiry. Each leg is quoted individually and you decide which to confirm."] },
      ],
      faqs: [
        { q: "How far is Riyadh from Madinah by road?", a: "About 826 km city centre to city centre, mostly on Route 65, by routing data. The exact distance depends on your pickup and hotel." },
        { q: "How long is the drive from Riyadh to Madinah?", a: "About 7 h 40 min without stops by routing estimate. With breaks and traffic, plan on a full day on the road." },
        { q: "Is the Riyadh to Madinah car shared with other passengers?", a: "No. The vehicle is reserved for you and your party only." },
        { q: "Can the driver start from a Riyadh hotel or home address?", a: "Yes. Give the address or a map pin and the pickup is quoted from there." },
        { q: "Can we stop for prayer and meals on the way?", a: "Yes. Tell us the stops you want and they are built into the schedule." },
        { q: "Can we return from Madinah to Riyadh on a later date?", a: "Yes. Add the return to the enquiry; each leg is quoted individually." },
      ],
    },
    ar: {
      table: {
        h: "الرياض إلى المدينة المنورة في لمحة",
        head: ["البند", "التفصيل"],
        rows: [
          ["المسافة بالطريق", "نحو 826 كم من مركز المدينة إلى مركز المدينة (بيانات التوجيه)"],
          ["مدة القيادة", "نحو 7 ساعات و40 دقيقة دون توقف (تقدير التوجيه؛ وتضيف التوقفات والزحام إليها)"],
          ["الطريق الرئيس", "الطريق 65 لنحو 99% من المسافة (بيانات التوجيه)"],
          ["منطقة الاستلام في الرياض", "العليا وممر فنادق طريق الملك فهد، أو عنوانك"],
          ["منطقة النزول في المدينة المنورة", "منطقة المركزية حول المسجد النبوي، أو فندقك"],
          ["المطارات", "مطار الملك خالد الدولي (RUH) ومطار الأمير محمد بن عبدالعزيز الدولي (MED)"],
        ],
      },
      sections: [
        { h: "كيف يسير اليوم", p: ["رحلة برية بهذا الطول تستغرق يومًا كاملًا. والخطة المعتادة انطلاق مبكر من الرياض، وتوقف أول للوقود والإفطار، وتوقف للصلاة والغداء في المنتصف، ووصول إلى المدينة المنورة بعد الظهر أو في المساء. أخبرنا بوقت الوصول الذي تريده ونحسب رجوعًا إلى موعد الانطلاق."] },
        { h: "الطيران أم الطريق", p: ["الرحلات الجوية الداخلية بين الرياض والمدينة المنورة أسرع في الجو، لكن إجراءات المطار في الطرفين تضيف وقتًا، ولا تحمل الطائرة حقائب عائلة إلى باب الفندق. وتناسب السيارة المجموعة الأكبر والحقائب الثقيلة ومن يريد التوقف في الطريق ومن يفضل السفر بخصوصية."] },
        { h: "الإقامة قرب المسجد النبوي", p: ["يُنظَّم وصول المركبات حول المسجد النبوي ويزدحم حول أوقات الصلاة. أعطنا اسم الفندق ومنطقته، واسأل الفندق أين يمكن للسيارات التوقف. وتُؤكَّد نقطة النزول في عرض السعر؛ وقد يكون المقطع الأخير مشيًا."] },
        { h: "العائلات وكبار السن والحقائب الثقيلة", p: ["تكون الرحلة بهذا الطول أسهل حين تناسب الخطة الأشخاص. أخبرنا بعدد البالغين والأطفال، وهل أحد منهم محدود الحركة، وكم حقيبة كبيرة وحقيبة يد تحملون، وهل تحتاجون مقاعد أطفال. ونؤكد مركبة تتسع للجميع وللحقائب، ونخطط استراحات تناسب أبطأ المسافرين."] },
        { h: "الزيارات والمقاطع التالية", p: ["يقضي أغلب الضيوف عدة أيام في المدينة المنورة. فإن أردت نقلًا إلى قباء وأحد ومسجد القبلتين أو متابعة إلى مكة المكرمة فاطلب ذلك في الطلب نفسه. وتُسعَّر كل رحلة على حدة وأنت تقرر ما تؤكده."] },
      ],
      faqs: [
        { q: "كم تبعد الرياض عن المدينة المنورة بالطريق؟", a: "نحو 826 كم من مركز المدينة إلى مركزها، أغلبها على الطريق 65، بحسب بيانات التوجيه. وتعتمد المسافة الدقيقة على نقطة استلامك وفندقك." },
        { q: "كم تستغرق القيادة من الرياض إلى المدينة المنورة؟", a: "نحو 7 ساعات و40 دقيقة دون توقف بحسب تقدير التوجيه. ومع الاستراحات والزحام خطّط ليوم كامل على الطريق." },
        { q: "هل تشارك سيارة الرياض إلى المدينة المنورة ركاب آخرون؟", a: "لا. المركبة مخصصة لك ولمرافقيك فقط." },
        { q: "هل ينطلق السائق من فندق في الرياض أو عنوان منزلي؟", a: "نعم. أعطنا العنوان أو موقعًا على الخريطة ويُسعَّر الاستلام من هناك." },
        { q: "هل نتوقف للصلاة والطعام في الطريق؟", a: "نعم. أخبرنا بالتوقفات التي تريدها وتُدرج في الجدول." },
        { q: "هل نعود من المدينة المنورة إلى الرياض في تاريخ لاحق؟", a: "نعم. أضف العودة إلى الطلب وتُسعَّر كل رحلة على حدة." },
      ],
    },
  },
};

export function applyRouteEnrichments(pages: ServicePage[]) {
  for (const [path, byLocale] of Object.entries(routeEnrichments)) {
    const page = pages.find((p) => p.path === path);
    if (!page) throw new Error(`routeEnrichments: unknown page ${path}`);
    page.updated = U;
    for (const locale of Object.keys(byLocale) as Locale[]) {
      const c = page.copy[locale];
      const add = byLocale[locale];
      c.sections = [...c.sections, ...add.sections];
      c.faqs = [...c.faqs, ...add.faqs];
      if (add.table && !c.table) c.table = add.table;
    }
  }
}
