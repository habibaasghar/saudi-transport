import type { Locale } from "@/i18n/routing";
import type { Section, ServicePage } from "./types";

/**
 * Content enrichment, batch 2 (thin-page fix, 2026-11-21). Same rules as enrich-cities.ts: general public knowledge only,
 * no prices, no distances, no fleet or availability claims, nothing that restates a section the page already has.
 */
const U = "2026-11-21";
const A = "services/airport-transfers";
const M = "services/umrah-transport";
const CH = "services/chauffeur-services";
const T = "services/tourism-transport";
const E = "services/event-transportation";
const G = "services/group-transportation";
type Add = { sections: Section[]; faqs: { q: string; a: string }[] };

export const batch2Enrichments: Record<string, Record<Locale, Add>> = {
  [`${A}/airport-to-hotel`]: {
    en: {
      sections: [
        { h: "Hotel entrances and large complexes", p: ["Big hotels and towers often have several entrances, a lobby on a different street from the car park, or a drop-off zone that changes during busy periods. Tell us which entrance your booking confirmation names. Near the Haram in Makkah and the Prophet's Mosque in Madinah, vehicle access is controlled, so the car may drop you at the nearest open point and the hotel finishes the last stretch."] },
        { h: "Late arrivals and early flights", p: ["If you land after midnight, tell the hotel you are coming so reception stays staffed, and give us the same arrival time. For an early landing, hotels commonly hold luggage until a room is ready; ask the hotel in advance rather than at the desk."] },
      ],
      faqs: [
        { q: "What if my hotel booking is under another name?", a: "Give us both the passenger's name and the name on the hotel booking, so the driver and the reception can match you." },
        { q: "How is a delayed flight handled on an airport to hotel pickup?", a: "Send your flight number. How waiting time and delays are handled is set out in your quotation and confirmation." },
      ],
    },
    ar: {
      sections: [
        { h: "مداخل الفنادق والمجمّعات الكبيرة", p: ["تملك الفنادق والأبراج الكبيرة غالبًا عدة مداخل، وردهة على شارع غير شارع المواقف، أو منطقة نزول تتغير في أوقات الزحام. أخبرنا بالمدخل المذكور في تأكيد حجزك. وقرب الحرم في مكة المكرمة والمسجد النبوي في المدينة المنورة يُنظَّم وصول المركبات، فقد تنزلك السيارة عند أقرب نقطة مفتوحة ويُكمل الفندق المسافة الأخيرة."] },
        { h: "الوصول المتأخر والرحلات المبكرة", p: ["إذا هبطت بعد منتصف الليل فأخبر الفندق بقدومك لتبقى الاستقبال مفتوحة، وأعطنا وقت الوصول نفسه. وعند الهبوط المبكر تحتفظ الفنادق عادةً بالحقائب حتى تجهز الغرفة؛ فاسأل الفندق مسبقًا لا عند المكتب."] },
      ],
      faqs: [
        { q: "ماذا لو كان حجز الفندق باسم شخص آخر؟", a: "زودنا باسم الراكب واسم صاحب حجز الفندق معًا ليتعرف السائق والاستقبال عليك." },
        { q: "كيف يُتعامل مع تأخر الرحلة في الاستقبال من المطار إلى الفندق؟", a: "أرسل رقم رحلتك. وتُبيَّن آلية الانتظار والتأخير في عرض السعر والتأكيد." },
      ],
    },
  },
  [`${A}/family-airport-transfer`]: {
    en: {
      sections: [
        { h: "Prams, strollers and cabin bags", p: ["A folded stroller, a car seat base and a nappy bag take real space even though they are not suitcases. Count them when you tell us your bags, and say whether the stroller must stay open at the airport exit, since that changes how the boot is packed."] },
        { h: "After a long flight with children", p: ["Tired children and a long queue at immigration make a family's landing time less predictable than an adult's. Share the flight number, and tell us if you need a short stop on the way, for example for prayer, a feeding break or a quick toilet stop."] },
      ],
      faqs: [
        { q: "Does a folded stroller count as a bag?", a: "For planning, yes. List it with your luggage so the vehicle is sized for everything, not just the passengers." },
        { q: "Can we stop on the way from the airport for prayer or a feeding break?", a: "Ask when you enquire. Short stops are confirmed in your quotation." },
      ],
    },
    ar: {
      sections: [
        { h: "العربات وحقائب اليد", p: ["تشغل العربة المطوية وقاعدة مقعد الطفل وحقيبة الحفاضات حيّزًا حقيقيًا وإن لم تكن حقائب سفر. احسبها عند ذكر عدد الحقائب، واذكر إن كان لا بد أن تبقى العربة مفتوحة عند مخرج المطار لأن ذلك يغيّر طريقة ترتيب الصندوق."] },
        { h: "بعد رحلة طويلة مع الأطفال", p: ["إرهاق الأطفال وطول الانتظار في الجوازات يجعلان وقت خروج العائلة أقل توقعًا من وقت خروج البالغين. أرسل رقم الرحلة، وأخبرنا إن كنت تحتاج توقفًا قصيرًا في الطريق، مثل الصلاة أو إطعام الطفل أو دورة المياه."] },
      ],
      faqs: [
        { q: "هل تُحتسب العربة المطوية حقيبة؟", a: "لأغراض التخطيط نعم. اذكرها مع الأمتعة ليُحدَّد حجم المركبة للجميع لا للركاب فقط." },
        { q: "هل يمكننا التوقف في الطريق من المطار للصلاة أو إطعام الطفل؟", a: "اسأل عند الطلب. وتُؤكَّد التوقفات القصيرة في عرض السعر." },
      ],
    },
  },
  [`${A}/vip-airport-transfer`]: {
    en: {
      sections: [
        { h: "Agree the meeting flow in advance", p: ["The smoothest VIP arrivals are scripted: who meets the guest, where, and who the driver calls if the guest is delayed in immigration. Name one contact on the guest's side and one on the host's side, and share a phone number for each."] },
        { h: "Handling guest details", p: ["Guest names, itineraries and destinations are shared only with the people who need them to carry out the pickup. If the guest's identity is sensitive, say so in your enquiry and give a reference name instead; our Privacy Policy explains how details are handled."] },
      ],
      faqs: [
        { q: "Can the driver hold a name sign at arrivals?", a: "Ask for the meeting arrangement you want. Whether it can be arranged is confirmed in your quotation." },
        { q: "Can I use a reference name instead of the guest's real name?", a: "Yes, say so in your enquiry. We still need a contact person who can identify the guest at pickup." },
      ],
    },
    ar: {
      sections: [
        { h: "اتفق على آلية اللقاء مسبقًا", p: ["أسلس استقبالات كبار الضيوف هي المكتوبة بدقة: من يستقبل الضيف وأين، ومن يتصل به السائق إن تأخر الضيف في الجوازات. سمِّ شخصًا واحدًا من جهة الضيف وآخر من جهة المضيف، وأعطنا رقم هاتف كل منهما."] },
        { h: "التعامل مع بيانات الضيف", p: ["لا نشارك أسماء الضيوف وجداول رحلاتهم ووجهاتهم إلا مع من يحتاجها لتنفيذ الاستقبال. وإذا كانت هوية الضيف حساسة فاذكر ذلك في طلبك وأعطنا اسمًا مرجعيًا بدلًا منها؛ وتوضح سياسة الخصوصية كيفية التعامل مع البيانات."] },
      ],
      faqs: [
        { q: "هل يمكن للسائق حمل لوحة باسم الضيف في صالة الوصول؟", a: "اطلب ترتيب اللقاء الذي تريده. وتُؤكَّد إمكانية ذلك في عرض السعر." },
        { q: "هل أستخدم اسمًا مرجعيًا بدل اسم الضيف الحقيقي؟", a: "نعم، اذكر ذلك في طلبك. ونحتاج مع ذلك إلى شخص للتواصل يستطيع التعرف على الضيف عند الاستلام." },
      ],
    },
  },
  [`${M}/family-umrah-transport`]: {
    en: {
      sections: [
        { h: "A pace set by the slowest traveller", p: ["Plan each day around the family member who tires first. Leave gaps between the Haram visit and the next move, avoid packing a transfer into the hour after a long tawaf, and tell us if anyone needs a wheelchair or help with steps so the vehicle and pickup point suit them."] },
        { h: "Hotel distance and the walk to the Haram", p: ["Hotels differ widely in how far they are from the Haram, and the final stretch is often on foot because vehicle access is controlled. Say how far your family can comfortably walk, and we plan the drop-off point with that in mind."] },
      ],
      faqs: [
        { q: "Can the car wait while the family completes Umrah?", a: "Waiting is possible by arrangement. The terms for waiting time are set out in your quotation." },
        { q: "Can we arrange pickup for an elderly relative at a quieter point?", a: "Ask for it. A nearby accessible point can often be agreed in advance and is confirmed in the quotation." },
      ],
    },
    ar: {
      sections: [
        { h: "وتيرة يحددها أبطأ المسافرين", p: ["خطّط كل يوم على قدر أول من يتعب من العائلة. اترك فواصل بين زيارة الحرم والتنقل التالي، وتجنب جدولة مشوار بعد ساعة من طواف طويل، وأخبرنا إن كان أحدهم يحتاج كرسيًا متحركًا أو مساعدة في الدرج لتناسبه المركبة ونقطة الاستلام."] },
        { h: "بُعد الفندق والمشي إلى الحرم", p: ["تتفاوت الفنادق كثيرًا في بُعدها عن الحرم، وغالبًا ما يكون المقطع الأخير مشيًا لأن وصول المركبات منظَّم. اذكر المسافة التي تستطيع عائلتك مشيها براحة، ونحدد نقطة النزول على ذلك."] },
      ],
      faqs: [
        { q: "هل تنتظر السيارة حتى تنهي العائلة العمرة؟", a: "الانتظار ممكن بالترتيب المسبق. وتُبيَّن شروط وقت الانتظار في عرض السعر." },
        { q: "هل يمكن ترتيب استلام قريب أهدأ لقريب مسن؟", a: "اطلب ذلك. وغالبًا يمكن الاتفاق مسبقًا على نقطة قريبة يسهل الوصول إليها وتُؤكَّد في عرض السعر." },
      ],
    },
  },
  [`${M}/group-umrah-transport`]: {
    en: {
      sections: [
        { h: "Splitting a group across vehicles", p: ["A coach-size group usually travels as several vehicles. Assign people by family or age rather than alphabetically, name one lead per vehicle, and keep each vehicle's luggage together so a bag is never in a different car from its owner."] },
        { h: "The manifest that saves time", p: ["Send a simple list before arrival: names, flight, landing time, hotel and number of bags per party. The more complete the list, the less is decided at the airport, where signal and time are short."] },
      ],
      faqs: [
        { q: "What if the group's flights land hours apart?", a: "List each flight separately. We quote the waves of pickups and confirm how the earlier arrivals are handled." },
        { q: "Can one person coordinate the whole group?", a: "Yes. Name one coordinator with a phone number, and we direct changes through that person." },
      ],
    },
    ar: {
      sections: [
        { h: "توزيع المجموعة على المركبات", p: ["تسافر المجموعة بحجم حافلة عادةً في عدة مركبات. وزّع الأفراد بحسب العائلة أو العمر لا بالترتيب الأبجدي، وسمِّ مسؤولًا لكل مركبة، وأبقِ حقائب كل مركبة معًا كي لا تكون حقيبة في سيارة غير سيارة صاحبها."] },
        { h: "قائمة تختصر الوقت", p: ["أرسل قبل الوصول قائمة بسيطة: الأسماء والرحلة ووقت الهبوط والفندق وعدد الحقائب لكل مجموعة. وكلما اكتملت القائمة قلّ ما يُقرَّر في المطار حيث يضيق الوقت وتضعف الشبكة."] },
      ],
      faqs: [
        { q: "ماذا لو هبطت رحلات المجموعة بفارق ساعات؟", a: "اذكر كل رحلة منفصلة. ونسعّر دفعات الاستقبال ونؤكد كيفية التعامل مع القادمين أولًا." },
        { q: "هل يمكن لشخص واحد تنسيق المجموعة كلها؟", a: "نعم. سمِّ منسقًا واحدًا ورقم هاتفه، ونمرّر التغييرات عبره." },
      ],
    },
  },
  [`${M}/private-umrah-chauffeur`]: {
    en: {
      sections: [
        { h: "Where one chauffeur helps most", p: ["A single driver for the whole trip pays off on the Makkah and Madinah legs, on very early departures for Fajr, and on ziyarat days when stops are many and short. He learns your hotel, your pace and your luggage, so each move needs less explaining."] },
        { h: "Stopping at the miqat", p: ["Pilgrims travelling from Madinah to Makkah usually enter ihram at Dhul Hulayfah, also called Abyar Ali. If you want to stop there, put it in your plan; whether the stop is included is confirmed in the quotation, and ihram arrangements are yours to decide with your scholar or group."] },
      ],
      faqs: [
        { q: "Can the same chauffeur stay with us in both Makkah and Madinah?", a: "That is what a private chauffeur arrangement is for. Availability for your dates is confirmed in the quotation." },
        { q: "Can we change the plan day by day?", a: "Small changes are normal; tell the chauffeur early. Larger changes may affect the quotation, so message us as well." },
      ],
    },
    ar: {
      sections: [
        { h: "أين يفيد سائق واحد أكثر", p: ["تظهر فائدة سائق واحد طوال الرحلة في مقاطع مكة المكرمة والمدينة المنورة، وفي الانطلاق المبكر جدًا لصلاة الفجر، وفي أيام الزيارات حيث تكثر المحطات القصيرة. فهو يتعرف على فندقك ووتيرتك وحقائبك، فيقل ما يحتاج كل تنقل إلى شرحه."] },
        { h: "التوقف عند الميقات", p: ["يُحرم القادمون من المدينة المنورة إلى مكة المكرمة عادةً من ذي الحليفة، ويُعرف بأبيار علي. وإن أردت التوقف هناك فضمّنه خطتك؛ وتُؤكَّد في عرض السعر إمكانية ضمّ التوقف، وترتيبات الإحرام شأنك مع عالمك أو مجموعتك."] },
      ],
      faqs: [
        { q: "هل يبقى السائق نفسه معنا في مكة المكرمة والمدينة المنورة؟", a: "هذا هو الغرض من ترتيب السائق الخاص. وتُؤكَّد الإتاحة لتواريخك في عرض السعر." },
        { q: "هل نغيّر الخطة يومًا بيوم؟", a: "التعديلات الصغيرة معتادة؛ أخبر السائق مبكرًا. أما الكبيرة فقد تؤثر في عرض السعر، فراسلنا أيضًا." },
      ],
    },
  },
  [`${CH}/business-chauffeur`]: {
    en: {
      sections: [
        { h: "Building a meeting day", p: ["On a full meeting day, leave a buffer between appointments and give the exact building and entrance for each, not only the district. In Riyadh, KAFD, Olaya and the Diplomatic Quarter are far enough apart that the district alone does not tell us the journey time."] },
        { h: "Invoices and records", p: ["If your company needs an invoice or a trip record for expenses, say so in your enquiry. What documentation can be provided, and in which form, is confirmed in the quotation."] },
      ],
      faqs: [
        { q: "Can I add a last-minute stop between meetings?", a: "Usually yes if the driver is booked for the period. Tell him early; the terms for extra time are in your quotation." },
        { q: "Can my assistant manage the booking for me?", a: "Yes. Name the assistant as the contact and the traveller as the passenger in the same enquiry." },
      ],
    },
    ar: {
      sections: [
        { h: "بناء يوم اجتماعات", p: ["في يوم اجتماعات كامل اترك فاصلًا بين المواعيد وأعطنا المبنى والمدخل بدقة لكل موعد لا الحي فقط. وفي الرياض تتباعد مناطق مثل مركز الملك عبدالله المالي والعليا والحي الدبلوماسي بما يجعل الحي وحده لا يكفي لتقدير زمن الرحلة."] },
        { h: "الفواتير والسجلات", p: ["إذا احتجت شركتك إلى فاتورة أو سجل للرحلة للمصروفات فاذكر ذلك في طلبك. وتُؤكَّد في عرض السعر الوثائق التي يمكن تقديمها وصيغتها."] },
      ],
      faqs: [
        { q: "هل أضيف توقفًا في اللحظة الأخيرة بين اجتماعين؟", a: "غالبًا نعم إذا كان السائق محجوزًا للمدة. أخبره مبكرًا؛ وشروط الوقت الإضافي في عرض السعر." },
        { q: "هل تدير مساعدتي الحجز نيابة عني؟", a: "نعم. سمِّ المساعدة جهة اتصال والمسافر راكبًا في الطلب نفسه." },
      ],
    },
  },
  [`${CH}/multi-day-chauffeur`]: {
    en: {
      sections: [
        { h: "Driver hours and rest", p: ["A driver on a multi-day booking needs rest, so agree the daily start and finish times, and avoid stacking a late-night return and an early start. A long intercity leg is best placed as the main task of its day."] },
        { h: "Hotel changes and luggage across days", p: ["When you move hotels mid-trip, tell us the check-out and check-in times and the next day's starting point. Keeping luggage in the vehicle overnight is a decision to make with the driver and your hotel, not an assumption."] },
      ],
      faqs: [
        { q: "Can the driver change between days?", a: "Ask for the same driver for continuity. Whether that is possible for every day is confirmed in the quotation." },
        { q: "Can I end the booking early?", a: "Tell us as soon as you know. The terms for shortening a multi-day booking are set out in your quotation." },
      ],
    },
    ar: {
      sections: [
        { h: "ساعات السائق وراحته", p: ["يحتاج السائق في الحجز متعدد الأيام إلى راحة، فاتفق على وقت بدء اليوم ونهايته، وتجنب جمع عودة متأخرة بانطلاق مبكر. وأنسب موضع للرحلة الطويلة بين المدن أن تكون مهمة اليوم الأساسية."] },
        { h: "تغيير الفنادق والحقائب عبر الأيام", p: ["عند تبديل الفندق في منتصف الرحلة أخبرنا بوقتي الخروج والدخول ونقطة انطلاق اليوم التالي. أما إبقاء الحقائب في المركبة ليلًا فقرار يُتخذ مع السائق وفندقك ولا يُفترض افتراضًا."] },
      ],
      faqs: [
        { q: "هل يتغير السائق بين الأيام؟", a: "اطلب السائق نفسه للاستمرارية. وتُؤكَّد إمكانية ذلك لكل يوم في عرض السعر." },
        { q: "هل أنهي الحجز مبكرًا؟", a: "أخبرنا بمجرد أن تعلم. وتُبيَّن شروط تقصير الحجز متعدد الأيام في عرض السعر." },
      ],
    },
  },
  [`${T}/alula`]: {
    en: {
      sections: [
        { h: "Reaching AlUla", p: ["Visitors arrive at AlUla International Airport (ULH) or by road from Madinah, which has its own route page. Because sites are spread across the desert, most visitors base themselves in one place and make half-day outings from there."] },
        { h: "Tickets, tours and who provides what", p: ["Entry to some sites, Hegra among them, is normally through the official operators' tours and tickets, not by driving in on your own. RideSaudi provides only the car and driver; tickets and permits are arranged with the operators, and the plan should leave room for tour start times."] },
        { h: "Sunrise, sunset and cold nights", p: ["AlUla's popular viewpoints are best at sunrise and sunset, and winter nights in the desert can be cold. Tell us the dates and the outings you want so the day starts and ends at the right hours."] },
      ],
      faqs: [
        { q: "Does RideSaudi sell Hegra tickets?", a: "No. We arrange transport only. Tickets and tours are booked with the official operators." },
        { q: "Can I travel from Madinah to AlUla and then stay for a few days?", a: "Yes. Request the road transfer and the local outings in one enquiry, and each is quoted individually." },
      ],
    },
    ar: {
      sections: [
        { h: "الوصول إلى العلا", p: ["يصل الزوار إلى مطار العلا الدولي (ULH) أو برًا من المدينة المنورة، ولها صفحة مسار خاصة. ولتوزع المواقع في الصحراء يتخذ أغلب الزوار مكانًا واحدًا للإقامة ويقومون منه برحلات نصف يوم."] },
        { h: "التذاكر والجولات ومن يوفّر ماذا", p: ["يتم الدخول إلى بعض المواقع، ومنها الحِجر، عادةً عبر جولات الجهات المشغّلة الرسمية وتذاكرها لا بالقيادة إليها منفردًا. وتوفّر RideSaudi السيارة والسائق فقط؛ أما التذاكر والتصاريح فتُرتَّب مع الجهات المشغّلة، فاترك في الخطة مجالًا لمواعيد بدء الجولات."] },
        { h: "الشروق والغروب والليالي الباردة", p: ["أفضل أوقات إطلالات العلا الشهيرة عند الشروق والغروب، وقد تكون ليالي الشتاء في الصحراء باردة. أخبرنا بالتواريخ والرحلات التي تريدها ليبدأ اليوم وينتهي في الأوقات المناسبة."] },
      ],
      faqs: [
        { q: "هل تبيع RideSaudi تذاكر الحِجر؟", a: "لا. نرتب النقل فقط. وتُحجز التذاكر والجولات لدى الجهات المشغّلة الرسمية." },
        { q: "هل أسافر من المدينة المنورة إلى العلا ثم أقيم أيامًا؟", a: "نعم. اطلب التوصيل البري والرحلات المحلية في طلب واحد وتُسعَّر كل منها على حدة." },
      ],
    },
  },
  [`${T}/taif`]: {
    en: {
      sections: [
        { h: "Rose season and weekend crowds", p: ["Taif is known for its roses, and the harvest season in spring draws crowds to the rose farms, so book early for those weeks. Summer weekends bring families from Jeddah and Makkah escaping the heat, and the roads up fill accordingly."] },
        { h: "The mountain road and Al Hada", p: ["The road up to Taif climbs through the Sarawat mountains, and the Al Hada area is a popular stop with its viewpoints. Mist can form on the climb, so tell us your flexibility on timing and we plan a margin."] },
      ],
      faqs: [
        { q: "Can I visit Taif in a day from Jeddah?", a: "Yes, as a day trip with an early start. Send your list of places and the quotation says whether one day is realistic." },
        { q: "Can a Taif day be combined with an Umrah trip?", a: "Yes. Describe the Makkah and Taif parts in one enquiry and plan the order around your Umrah." },
      ],
    },
    ar: {
      sections: [
        { h: "موسم الورد وزحام نهاية الأسبوع", p: ["تشتهر الطائف بورودها، ويجذب موسم القطاف في الربيع زوارًا إلى مزارع الورد، فاحجز مبكرًا لتلك الأسابيع. وتأتي في عطلات الصيف عائلات من جدة ومكة المكرمة هربًا من الحر، فتزدحم الطرق الصاعدة."] },
        { h: "طريق الجبل والهدا", p: ["يصعد الطريق إلى الطائف عبر جبال السروات، وتُعد منطقة الهدا محطة محبوبة بإطلالاتها. وقد يتكوّن الضباب أثناء الصعود، فأخبرنا بمرونتك في التوقيت لنترك هامشًا."] },
      ],
      faqs: [
        { q: "هل أزور الطائف في يوم واحد من جدة؟", a: "نعم، كرحلة يوم بانطلاق مبكر. أرسل قائمة الأماكن ويوضح عرض السعر إن كان يوم واحد واقعيًا." },
        { q: "هل يمكن جمع يوم في الطائف مع رحلة عمرة؟", a: "نعم. صف جزأي مكة المكرمة والطائف في طلب واحد ورتب التسلسل حول عمرتك." },
      ],
    },
  },
  [`${T}/day-trip-transport`]: {
    en: {
      sections: [
        { h: "Day trip or overnight", p: ["If the round trip plus the time at the destination leaves you returning late and tired, an overnight stay is often better than forcing a day. Tell us how many hours you want at the destination and we say whether a same-day return is realistic."] },
        { h: "Prayer, meals and rest stops", p: ["Plan prayer and meal stops into the day so the schedule does not run on guesses. List them, and say if the party includes children or elders who need more frequent breaks."] },
      ],
      faqs: [
        { q: "Can I decide the stops on the day?", a: "Small changes are possible, but a stop that adds a lot of time may change the quotation. Share the main stops in advance." },
        { q: "What if the weather turns bad on the day?", a: "Tell us as early as you can. Rescheduling or cancelling follows the terms in your quotation and our Terms and Conditions." },
      ],
    },
    ar: {
      sections: [
        { h: "رحلة يوم أم مبيت", p: ["إذا جعلتك الرحلة ذهابًا وإيابًا مع وقتك في الوجهة تعود متأخرًا ومتعبًا، فالمبيت غالبًا أفضل من إجبار اليوم الواحد. أخبرنا بعدد ساعاتك في الوجهة ونوضح إن كانت العودة في اليوم نفسه واقعية."] },
        { h: "الصلاة والوجبات والاستراحات", p: ["ضمّن اليوم أوقات الصلاة والوجبات كي لا يسير الجدول بالتخمين. اذكرها، وأخبرنا إن كان معكم أطفال أو كبار سن يحتاجون استراحات أكثر."] },
      ],
      faqs: [
        { q: "هل أحدد المحطات في يوم الرحلة؟", a: "التعديلات الصغيرة ممكنة، لكن محطة تضيف وقتًا كبيرًا قد تغيّر عرض السعر. شاركنا بالمحطات الأساسية مسبقًا." },
        { q: "ماذا لو ساء الطقس يوم الرحلة؟", a: "أخبرنا في أقرب وقت. ويتبع التأجيل أو الإلغاء الشروط الواردة في عرض السعر وفي الشروط والأحكام." },
      ],
    },
  },
  [`${E}/riyadh`]: {
    en: {
      sections: [
        { h: "Venue drop-off zones", p: ["Large exhibition centres, entertainment zones and hotel ballrooms in Riyadh usually run controlled drop-off and pickup zones, sometimes with passes. Ask the organiser which gate your guests should use and share it with us; a car sent to the wrong gate can add a long walk or queue."] },
        { h: "Leaving after the event", p: ["Everyone leaves at once when a big event ends. Agree a pickup time for your guests that allows for the crowd, or arrange a staggered pickup, rather than leaving the car to wait in the exit queue."] },
      ],
      faqs: [
        { q: "Do my guests need a pass for the car to enter the venue?", a: "Many venues require one. Ask the organiser and tell us what is needed so the arrival is arranged correctly." },
        { q: "Can you take guests from several hotels to one venue?", a: "Yes. List the hotels, guest numbers and the venue arrival time, and the plan is quoted as one event." },
      ],
    },
    ar: {
      sections: [
        { h: "مناطق النزول عند الفعاليات", p: ["تعتمد مراكز المعارض الكبرى ومناطق الترفيه وقاعات الفنادق في الرياض عادةً مناطق نزول واستلام منظّمة، وأحيانًا بتصاريح. اسأل المنظّم عن البوابة التي يستخدمها ضيوفك وشاركنا بها؛ فسيارة تذهب إلى بوابة خاطئة قد تضيف مشيًا طويلًا أو طابورًا."] },
        { h: "المغادرة بعد الفعالية", p: ["يغادر الجميع معًا حين تنتهي الفعالية الكبيرة. اتفق على موعد استلام لضيوفك يراعي الزحام، أو رتّب استلامًا متدرجًا، بدل ترك السيارة تنتظر في طابور الخروج."] },
      ],
      faqs: [
        { q: "هل يحتاج ضيوفي إلى تصريح لدخول السيارة إلى الموقع؟", a: "كثير من المواقع تشترطه. اسأل المنظّم وأخبرنا بالمطلوب ليُرتَّب الوصول على وجهه." },
        { q: "هل تنقلون ضيوفًا من عدة فنادق إلى موقع واحد؟", a: "نعم. اذكر الفنادق وأعداد الضيوف ووقت الوصول إلى الموقع وتُسعَّر الخطة فعالية واحدة." },
      ],
    },
  },
  [`${E}/jeddah`]: {
    en: {
      sections: [
        { h: "Waterfront and Corniche evenings", p: ["Events along the Corniche and Waterfront draw heavy traffic from late afternoon, and parking is tight. Give us the start time and the gate or hotel, and we plan the drop-off earlier than the programme begins."] },
        { h: "Mixing event nights with Umrah", p: ["Guests who attend an event and then continue to Makkah or Madinah need two plans: the event night and the onward leg. Send both in one enquiry so the timing between them is realistic."] },
      ],
      faqs: [
        { q: "Can you pick guests up from the airport and take them straight to the event?", a: "Yes. Send flight numbers, the event start time and the venue, and the arrival is planned as part of the event quote." },
        { q: "Can the same cars take guests onward to Makkah after the event?", a: "Ask for it in the same enquiry. The onward leg is quoted separately." },
      ],
    },
    ar: {
      sections: [
        { h: "أمسيات الكورنيش والواجهة البحرية", p: ["تجذب الفعاليات على الكورنيش والواجهة البحرية زحامًا شديدًا منذ العصر وتضيق المواقف. أعطنا وقت البدء والبوابة أو الفندق، ونخطط النزول قبل بداية البرنامج بوقت."] },
        { h: "الجمع بين أمسية فعالية وعمرة", p: ["يحتاج الضيوف الذين يحضرون فعالية ثم يتابعون إلى مكة المكرمة أو المدينة المنورة إلى خطتين: ليلة الفعالية والمقطع التالي. أرسل الاثنين في طلب واحد ليكون التوقيت بينهما واقعيًا."] },
      ],
      faqs: [
        { q: "هل تستقبلون الضيوف من المطار وتنقلونهم مباشرة إلى الفعالية؟", a: "نعم. أرسل أرقام الرحلات ووقت بدء الفعالية والموقع ويُخطَّط الوصول ضمن عرض سعر الفعالية." },
        { q: "هل تنقل السيارات نفسها الضيوف إلى مكة المكرمة بعد الفعالية؟", a: "اطلب ذلك في الطلب نفسه. وتُسعَّر الرحلة التالية على حدة." },
      ],
    },
  },
  [`${E}/dammam`]: {
    en: {
      sections: [
        { h: "Company campuses and site passes", p: ["Many Eastern Province events take place on company campuses or industrial sites that control entry with passes or advance guest lists. Collect the names and plate details the host needs and tell us the lead time, so the cars are cleared when guests arrive."] },
        { h: "Evenings on the Corniche", p: ["Open-air events and dinners along the Gulf Corniche are best in the cooler months, and the roads there fill quickly on Friday and Saturday evenings. Share the venue and hours so pickups are spaced out."] },
      ],
      faqs: [
        { q: "Can you arrange guest lists for site entry?", a: "We can share names with the host as needed; the host's own pass rules apply. Tell us the requirements in your enquiry." },
        { q: "Can you move delegates between Dammam, Al Khobar and Dhahran in one evening?", a: "Yes. Give us the order of stops and the times, and it is quoted as one plan." },
      ],
    },
    ar: {
      sections: [
        { h: "مقار الشركات وتصاريح المواقع", p: ["تُقام كثير من فعاليات المنطقة الشرقية في مقار شركات أو مواقع صناعية تنظّم الدخول بتصاريح أو قوائم ضيوف مسبقة. اجمع الأسماء وبيانات اللوحات التي يطلبها المضيف وأخبرنا بالمهلة المطلوبة، ليكون الإذن للسيارات جاهزًا عند وصول الضيوف."] },
        { h: "أمسيات الكورنيش", p: ["أفضل أوقات الفعاليات والعشاءات المكشوفة على كورنيش الخليج في الأشهر الأبرد، وتزدحم طرقها سريعًا مساء الجمعة والسبت. شاركنا بالموقع والساعات لتتباعد أوقات الاستلام."] },
      ],
      faqs: [
        { q: "هل ترتبون قوائم الضيوف لدخول المواقع؟", a: "يمكننا مشاركة الأسماء مع المضيف عند الحاجة، وتسري قواعد التصاريح لدى المضيف. اذكر المتطلبات في طلبك." },
        { q: "هل تنقلون المشاركين بين الدمام والخبر والظهران في أمسية واحدة؟", a: "نعم. أعطنا ترتيب المحطات وأوقاتها وتُسعَّر خطةً واحدة." },
      ],
    },
  },
  "services/cross-border-transfers/kuwait": {
    en: {
      sections: [
        { h: "Holidays lengthen crossings", p: ["Crossings tend to be slower around Eid, school holidays and long weekends, when many families travel between the Gulf states. If your dates fall in those periods, allow a wider window for the border and avoid tight onward connections in Kuwait."] },
        { h: "Return legs are quoted separately", p: ["A return trip from Kuwait is a separate journey with its own date and timing. Ask for both legs in one enquiry if you want them planned together, and give the return date even if it is provisional."] },
      ],
      faqs: [
        { q: "Can one booking cover Riyadh to Kuwait and the return?", a: "You can request both legs in one enquiry. Each leg is quoted individually." },
        { q: "Who checks the vehicle and driver permissions for crossing?", a: "These are confirmed as part of the quotation for your journey. Travellers remain responsible for their own passports and visas." },
      ],
    },
    ar: {
      sections: [
        { h: "العطلات تطيل العبور", p: ["يميل العبور إلى البطء حول العيد والإجازات المدرسية وعطلات نهاية الأسبوع الطويلة حين تسافر عائلات كثيرة بين دول الخليج. وإذا صادفت تواريخك تلك الفترات فاترك نافذة أوسع للمنفذ وتجنب الارتباطات الضيقة بعده في الكويت."] },
        { h: "رحلات العودة تُسعَّر منفصلة", p: ["رحلة العودة من الكويت رحلة مستقلة لها تاريخها وتوقيتها. اطلب الرحلتين في طلب واحد إن أردت تخطيطهما معًا، وأعطنا تاريخ العودة ولو كان مبدئيًا."] },
      ],
      faqs: [
        { q: "هل يكفي حجز واحد للرياض إلى الكويت والعودة؟", a: "يمكنك طلب الرحلتين في طلب واحد. وتُسعَّر كل رحلة على حدة." },
        { q: "من يتحقق من أذونات المركبة والسائق للعبور؟", a: "تُؤكَّد هذه ضمن عرض السعر لرحلتك. ويبقى المسافر مسؤولًا عن جوازه وتأشيرته." },
      ],
    },
  },
  [`${G}/family-transport`]: {
    en: {
      sections: [
        { h: "Errand days versus travel days", p: ["A family using a driver for school runs, shopping and visits needs a flexible half-day or full-day booking, while a family on an airport or intercity journey needs a fixed plan. Say which you want and we shape the quotation to it."] },
        { h: "More than one household", p: ["When cousins or grandparents travel together in separate cars, list each household with its passengers and bags and the point where the cars should meet. One enquiry is easier to coordinate than three."] },
      ],
      faqs: [
        { q: "Can we use the same driver for several family outings?", a: "Yes. Book the days you need and name the outings; availability is confirmed in the quotation." },
        { q: "Can two cars travel together for one family?", a: "Yes. State the number of cars you expect and who rides in each, and the quotation covers both." },
      ],
    },
    ar: {
      sections: [
        { h: "أيام المشاوير وأيام السفر", p: ["تحتاج العائلة التي تستخدم سائقًا للمدرسة والتسوق والزيارات إلى حجز مرن لنصف يوم أو يوم كامل، أما العائلة المسافرة إلى المطار أو بين المدن فتحتاج خطة ثابتة. أخبرنا بما تريد ونصيغ عرض السعر عليه."] },
        { h: "أكثر من أسرة", p: ["عندما يسافر الأقارب أو الأجداد معًا في سيارات منفصلة، اذكر كل أسرة بركابها وحقائبها ونقطة التقاء السيارات. وطلب واحد أسهل تنسيقًا من ثلاثة."] },
      ],
      faqs: [
        { q: "هل نستخدم السائق نفسه لعدة مشاوير عائلية؟", a: "نعم. احجز الأيام التي تحتاجها وسمِّ المشاوير؛ وتُؤكَّد الإتاحة في عرض السعر." },
        { q: "هل تسافر سيارتان معًا لعائلة واحدة؟", a: "نعم. اذكر عدد السيارات المتوقع ومن يركب في كل منها ويشملهما عرض السعر." },
      ],
    },
  },
  [`${G}/group-airport-transfers`]: {
    en: {
      sections: [
        { h: "One list, one contact", p: ["Before the group lands, send a passenger list with each person's party, the flight, and one contact who will be on the phone at arrival. Changes to the list should go through that contact so the driver is never given two versions."] },
        { h: "Leaving the airport together", p: ["Bags take longer to collect for a group than for an individual, so agree where everyone gathers after customs and how long the vehicles wait. Setting this in advance prevents the common problem of half a group in the terminal and half at the kerb."] },
      ],
      faqs: [
        { q: "Can the vehicles wait for a group that clears customs slowly?", a: "Waiting is arranged in advance. The terms for waiting time are in your quotation." },
        { q: "Do we need to name every passenger?", a: "Names help, especially for sign boards and hotel check-in, but a count by party is enough to start the quotation." },
      ],
    },
    ar: {
      sections: [
        { h: "قائمة واحدة وجهة اتصال واحدة", p: ["قبل هبوط المجموعة أرسل قائمة بالركاب مع كل مجموعة صغيرة ورحلتها، وجهة اتصال واحدة تكون على الهاتف عند الوصول. وتمر تعديلات القائمة عبر هذا الشخص كي لا يتلقى السائق نسختين."] },
        { h: "مغادرة المطار معًا", p: ["يستغرق استلام الحقائب للمجموعة وقتًا أطول منه للفرد، فاتفقوا على مكان التجمع بعد الجمارك ومدة انتظار المركبات. وتحديد ذلك مسبقًا يمنع المشكلة المعتادة: نصف المجموعة في الصالة ونصفها على الرصيف."] },
      ],
      faqs: [
        { q: "هل تنتظر المركبات مجموعة بطيئة في إنهاء إجراءات الجمارك؟", a: "يُرتَّب الانتظار مسبقًا. وتُبيَّن شروط وقت الانتظار في عرض السعر." },
        { q: "هل يلزم ذكر اسم كل راكب؟", a: "الأسماء تفيد خاصةً للوحات الاستقبال وتسجيل الفندق، لكن يكفي عدد كل مجموعة صغيرة لبدء عرض السعر." },
      ],
    },
  },
  [`${G}/van-and-minibus`]: {
    en: {
      sections: [
        { h: "Where a van fits and where it does not", p: ["Larger vehicles struggle in narrow historic streets, such as parts of old Jeddah, and at hotels with small drop-off zones. If your hotel or venue is in a tight area, tell us and the pickup point can be set at the nearest street a van can use."] },
        { h: "Soft bags, hard cases and the boot", p: ["Luggage shape matters more than the count: soft duffels pack around people, hard suitcases do not. List bags by type, as well as the number of passengers, so the vehicle choice is realistic."] },
      ],
      faqs: [
        { q: "Can a van get right to my hotel entrance?", a: "Sometimes. Access depends on the street and the hotel's drop-off zone, so we confirm the practical meeting point in the quotation." },
        { q: "How do I know whether I need a van or two cars?", a: "Send your passenger and bag counts. We recommend the option that fits, and you decide." },
      ],
    },
    ar: {
      sections: [
        { h: "أين تناسب الحافلة وأين لا تناسب", p: ["تتعثر المركبات الكبيرة في الأزقة التاريخية الضيقة، كأجزاء من جدة القديمة، وعند الفنادق ذات مناطق النزول الصغيرة. وإذا كان فندقك أو موقعك في منطقة ضيقة فأخبرنا لتُحدَّد نقطة الاستلام عند أقرب شارع تستطيع الحافلة دخوله."] },
        { h: "الحقائب اللينة والصلبة والصندوق", p: ["يهم شكل الحقائب أكثر من عددها: فالحقائب اللينة تُرتَّب حول الركاب، أما الصلبة فلا. اذكر الحقائب بنوعها إضافةً إلى عدد الركاب ليكون اختيار المركبة واقعيًا."] },
      ],
      faqs: [
        { q: "هل تصل الحافلة إلى مدخل فندقي مباشرة؟", a: "أحيانًا. فالوصول يعتمد على الشارع ومنطقة نزول الفندق، لذا نؤكد نقطة اللقاء العملية في عرض السعر." },
        { q: "كيف أعرف إن كنت أحتاج حافلة أم سيارتين؟", a: "أرسل عدد الركاب والحقائب. ونقترح الخيار المناسب وأنت تقرر." },
      ],
    },
  },
  [`services/intercity-transfers/private-intercity-chauffeur`]: {
    en: {
      sections: [
        { h: "Avoiding fatigue on long legs", p: ["On a multi-city trip, one very long leg a day is a comfortable limit. Put the long drive early, leave the afternoon for rest or a short city visit, and avoid joining a late-night arrival to an early next-day start."] },
        { h: "Overnight stops", p: ["When the driver stays overnight in another city, who arranges the accommodation and what is included is part of the quotation, not an assumption. Raise it in your enquiry so it is settled before the trip."] },
      ],
      faqs: [
        { q: "Can I change the order of the cities after booking?", a: "Tell us as early as possible. A change in order can alter distances and the quotation, so we confirm it with you first." },
        { q: "Is it cheaper to book one chauffeur for the whole trip?", a: "Not necessarily. We quote both options so you can compare a single chauffeur with separate transfers." },
      ],
    },
    ar: {
      sections: [
        { h: "تجنب الإرهاق في المقاطع الطويلة", p: ["في الرحلة متعددة المدن يُعد مقطع طويل واحد في اليوم حدًا مريحًا. اجعل القيادة الطويلة مبكرًا، واترك العصر للراحة أو لزيارة قصيرة في المدينة، وتجنب ضم وصول متأخر ليلًا إلى انطلاق مبكر في اليوم التالي."] },
        { h: "المبيت في مدينة أخرى", p: ["عندما يبيت السائق في مدينة أخرى فإن من يرتب إقامته وما يشمله ذلك جزء من عرض السعر لا أمر يُفترض. أثِره في طلبك ليُحسم قبل الرحلة."] },
      ],
      faqs: [
        { q: "هل أغيّر ترتيب المدن بعد الحجز؟", a: "أخبرنا في أقرب وقت. فتغيير الترتيب قد يغيّر المسافات وعرض السعر، ولذلك نؤكده معك أولًا." },
        { q: "هل الأرخص حجز سائق واحد للرحلة كلها؟", a: "ليس بالضرورة. نسعّر الخيارين لتقارن بين سائق واحد وتوصيلات منفصلة." },
      ],
    },
  },
};

export function applyBatch2Enrichments(pages: ServicePage[]) {
  for (const [path, byLocale] of Object.entries(batch2Enrichments)) {
    const page = pages.find((p) => p.path === path);
    if (!page) throw new Error(`batch2Enrichments: unknown page ${path}`);
    page.updated = U;
    for (const locale of Object.keys(byLocale) as Locale[]) {
      const c = page.copy[locale];
      c.sections = [...c.sections, ...byLocale[locale].sections];
      c.faqs = [...c.faqs, ...byLocale[locale].faqs];
    }
  }
}
