import type { Locale } from "@/i18n/routing";
import type { Section, ServicePage } from "./types";

/**
 * Content enrichment, batch 3 (thin-page fix, 2026-11-21): luxury/VIP, event, special and tourism pages.
 * Same rules as batches 1-2: general public knowledge only, no prices, distances, fleet or availability claims, and each
 * overlapping page gets its own distinct angle (the VIP, executive and delegation pages must not read alike).
 */
const U = "2026-11-21";
const L = "luxury-transportation";
const E = "services/event-transportation";
const S = "services/special-transportation";
const T = "services/tourism-transport";
type Add = { sections: Section[]; faqs: { q: string; a: string }[] };

export const batch3Enrichments: Record<string, Record<Locale, Add>> = {
  [`${L}/vip-car-service`]: {
    en: {
      sections: [
        { h: "Who speaks for the guest", p: ["A VIP journey runs best through one person on the guest's side, usually a personal assistant or chief of staff. That person confirms times, receives the driver's call and approves changes, so the guest is never asked to manage logistics."] },
        { h: "The arrival routine", p: ["Agree how the car should present itself: where it waits, how the guest is greeted, and what happens to luggage. These small decisions are what make a VIP service feel planned, and they cost nothing to settle in advance."] },
      ],
      faqs: [
        { q: "Can the guest's assistant book and manage the journey?", a: "Yes. Name the assistant as the contact and the guest as the passenger in the same enquiry." },
        { q: "Can we ask for a specific vehicle category for a VIP guest?", a: "You can state a preference. Availability for your date is confirmed in the quotation." },
      ],
    },
    ar: {
      sections: [
        { h: "من يتحدث باسم الضيف", p: ["تسير رحلة كبار الضيوف أفضل عبر شخص واحد من جهة الضيف، غالبًا مساعد شخصي أو مدير مكتب. يؤكد هذا الشخص الأوقات ويتلقى اتصال السائق ويوافق على التغييرات، فلا يُطلب من الضيف إدارة الترتيبات."] },
        { h: "روتين الوصول", p: ["اتفق على كيفية ظهور السيارة: أين تنتظر وكيف يُستقبل الضيف وما يجري للحقائب. هذه التفاصيل الصغيرة هي ما يجعل الخدمة تبدو مخططة، ولا تكلّف شيئًا عند ترتيبها مسبقًا."] },
      ],
      faqs: [
        { q: "هل يحجز مساعد الضيف الرحلة ويديرها؟", a: "نعم. سمِّ المساعد جهة اتصال والضيف راكبًا في الطلب نفسه." },
        { q: "هل نطلب فئة مركبة معينة لضيف كبير؟", a: "يمكنك ذكر تفضيل. وتُؤكَّد الإتاحة لتاريخك في عرض السعر." },
      ],
    },
  },
  [`${L}/executive-transport`]: {
    en: {
      sections: [
        { h: "Standing instructions for repeat travel", p: ["An executive who travels the same routes each week benefits from standing instructions: the usual pickup point, the preferred airport entrance, the driver's contact and how late changes are handled. Write them once and reuse them for every booking."] },
        { h: "Days with tight transitions", p: ["Flight-to-meeting days leave no slack. State the landing time, the meeting start and how much time is needed in between, and we plan backwards from the meeting rather than forwards from the landing."] },
      ],
      faqs: [
        { q: "Can I book the same driver for every trip?", a: "You can ask for continuity. Whether the same driver is available for each date is confirmed in the quotation." },
        { q: "Can a company set up recurring bookings?", a: "Describe the pattern in an enquiry, such as a weekly route, and the arrangement is quoted individually." },
      ],
    },
    ar: {
      sections: [
        { h: "تعليمات ثابتة للسفر المتكرر", p: ["يستفيد التنفيذي الذي يسافر المسارات نفسها كل أسبوع من تعليمات ثابتة: نقطة الاستلام المعتادة ومدخل المطار المفضل وتواصل السائق وكيفية التعامل مع التغييرات المتأخرة. اكتبها مرة واحدة وأعد استخدامها في كل حجز."] },
        { h: "أيام الانتقال الضيق", p: ["لا يترك يوم الانتقال من الطائرة إلى الاجتماع هامشًا. اذكر وقت الهبوط وبدء الاجتماع والمدة اللازمة بينهما، ونخطط رجوعًا من الاجتماع لا تقدمًا من الهبوط."] },
      ],
      faqs: [
        { q: "هل أحجز السائق نفسه في كل رحلة؟", a: "يمكنك طلب الاستمرارية. وتُؤكَّد في عرض السعر إتاحة السائق نفسه لكل تاريخ." },
        { q: "هل تضع الشركة حجوزات متكررة؟", a: "صف النمط في طلبك، مثل مسار أسبوعي، ويُسعَّر الترتيب على حدة." },
      ],
    },
  },
  [`${L}/luxury-suv`]: {
    en: {
      sections: [
        { h: "Seats, boot and what travels where", p: ["In an SUV, the third row or the luggage area usually gives up space to the other, so a full cabin and a full load rarely coexist. Tell us the passengers and the bag types and we say which combination suits the vehicle category."] },
        { h: "Routes where an SUV earns its place", p: ["Higher ground clearance and a larger cabin matter most on long highway legs and on trips with hill or desert sections, such as Abha, AlUla and mountain roads. For short city hops a smaller vehicle may be all you need."] },
      ],
      faqs: [
        { q: "How many people and bags fit in a luxury SUV?", a: "It depends on the exact vehicle and seat layout. State your numbers and the capacity is confirmed for the real vehicle in your quotation." },
        { q: "Is an SUV better for long intercity trips?", a: "Often, for comfort and space. Compare it with the other categories when you enquire." },
      ],
    },
    ar: {
      sections: [
        { h: "المقاعد والصندوق وما يُحمل أين", p: ["في سيارات الدفع الرباعي يقتطع الصف الثالث أو منطقة الأمتعة من مساحة الآخر، فنادرًا يجتمع مقصورة ممتلئة وحمولة ممتلئة. أخبرنا بعدد الركاب وأنواع الحقائب ونبيّن أي توليفة تناسب فئة المركبة."] },
        { h: "مسارات تستحق فيها الدفع الرباعي", p: ["يهم ارتفاع المركبة عن الأرض ورحابة المقصورة في المقاطع الطويلة على الطرق السريعة وفي الرحلات ذات الأجزاء الجبلية أو الصحراوية، كأبها والعلا والطرق الجبلية. وللمشاوير القصيرة داخل المدينة قد تكفيك مركبة أصغر."] },
      ],
      faqs: [
        { q: "كم شخصًا وحقيبة تتسع لهم السيارة الفاخرة؟", a: "يعتمد ذلك على المركبة وتوزيع مقاعدها. اذكر أعدادك وتُؤكَّد السعة للمركبة الفعلية في عرض السعر." },
        { q: "هل الدفع الرباعي أفضل للرحلات الطويلة بين المدن؟", a: "غالبًا، للراحة والمساحة. قارنها بالفئات الأخرى عند الطلب." },
      ],
    },
  },
  [`${L}/luxury-family-transport`]: {
    en: {
      sections: [
        { h: "Eid visits and family occasions", p: ["Families use a premium car for Eid rounds, weddings and reunions, when several relatives need collecting in a set order. Write the stops in sequence with the people at each, and say how long you expect to stay."] },
        { h: "Seating for grandparents and children together", p: ["Mixed-age families need easy entry for older passengers and secure seating for small children. Tell us ages and any mobility needs so the vehicle and the pickup points suit everyone."] },
      ],
      faqs: [
        { q: "Can the car collect relatives from several homes?", a: "Yes. List the addresses and the order, and the route is quoted as one plan." },
        { q: "Can we request child seats for a premium family car?", a: "Yes, say how many and for what ages. Child seats are provided only where confirmed in the quotation." },
      ],
    },
    ar: {
      sections: [
        { h: "زيارات العيد والمناسبات العائلية", p: ["تستخدم العائلات سيارة مميزة لجولات العيد وحفلات الزواج ولمّ الشمل، حين يلزم اصطحاب عدة أقارب بترتيب معين. اكتب المحطات بالتسلسل مع الأشخاص عند كل منها، واذكر مدة بقائك المتوقعة."] },
        { h: "جلوس الأجداد والأطفال معًا", p: ["تحتاج العائلات متعددة الأعمار دخولًا سهلًا للكبار وجلوسًا آمنًا للصغار. أخبرنا بالأعمار وأي احتياجات حركة لتناسب المركبة ونقاط الاستلام الجميع."] },
      ],
      faqs: [
        { q: "هل تصطحب السيارة أقارب من عدة بيوت؟", a: "نعم. اذكر العناوين والترتيب وتُسعَّر الرحلة خطةً واحدة." },
        { q: "هل نطلب مقاعد أطفال لسيارة عائلية مميزة؟", a: "نعم، اذكر عددها وأعمار الأطفال. ولا تُوفَّر المقاعد إلا إذا أُكِّدت في عرض السعر." },
      ],
    },
  },
  [`${L}/luxury-airport-transfers`]: {
    en: {
      sections: [
        { h: "Know your terminal", p: ["Large airports have more than one terminal, and the right meeting point depends on it. Jeddah's King Abdulaziz airport, for example, handles flights through Terminal 1 and the North Terminal. Send your flight number and the terminal if you know it."] },
        { h: "Asking for the arrival you want", p: ["If you expect a name sign, help with luggage or a specific meeting point, ask in the enquiry. Whether each can be arranged at your airport is confirmed in the quotation, so you know before you travel."] },
      ],
      faqs: [
        { q: "Can I arrange a luxury pickup from any Saudi airport?", a: "You can request any airport. Coverage and availability for your date are confirmed in the quotation." },
        { q: "What if my terminal changes after booking?", a: "Message us as soon as you know so the meeting point is updated." },
      ],
    },
    ar: {
      sections: [
        { h: "اعرف صالتك", p: ["للمطارات الكبيرة أكثر من صالة، وتعتمد نقطة اللقاء الصحيحة عليها. فمطار الملك عبدالعزيز في جدة مثلًا يستقبل الرحلات عبر الصالة 1 والصالة الشمالية. أرسل رقم رحلتك والصالة إن عرفتها."] },
        { h: "اطلب الاستقبال الذي تريده", p: ["إذا كنت تتوقع لوحة باسمك أو مساعدة في الحقائب أو نقطة لقاء بعينها فاذكر ذلك في الطلب. وتُؤكَّد في عرض السعر إمكانية كل منها في مطارك، فتعرف قبل سفرك."] },
      ],
      faqs: [
        { q: "هل أرتب استقبالًا فاخرًا من أي مطار سعودي؟", a: "يمكنك طلب أي مطار. وتُؤكَّد التغطية والإتاحة لتاريخك في عرض السعر." },
        { q: "ماذا لو تغيّرت صالتي بعد الحجز؟", a: "راسلنا فور علمك ليُحدَّث موضع اللقاء." },
      ],
    },
  },
  [`${L}/luxury-intercity-transfers`]: {
    en: {
      sections: [
        { h: "Comfort on a four-hour drive", p: ["On a long leg, rear-seat room, cabin temperature and a smooth ride matter more than appearance. Tell us how many hours you expect to travel and whether you plan to work or rest in the car."] },
        { h: "Timing the departure", p: ["Leaving before the midday heat and avoiding the late-afternoon traffic out of big cities makes a long journey calmer. Give us a window rather than a single minute, and we propose the best start inside it."] },
      ],
      faqs: [
        { q: "Can I work in the car during a long intercity transfer?", a: "Yes. Mention it, and ask about any needs such as a quiet cabin." },
        { q: "Can we stop for prayer and food on a long route?", a: "Yes. List the stops you want and the quotation reflects them." },
      ],
    },
    ar: {
      sections: [
        { h: "الراحة في قيادة أربع ساعات", p: ["في المقطع الطويل تهم مساحة المقعد الخلفي وحرارة المقصورة وسلاسة القيادة أكثر من المظهر. أخبرنا بعدد الساعات المتوقعة وهل ستعمل في السيارة أم تستريح."] },
        { h: "توقيت الانطلاق", p: ["الانطلاق قبل حر الظهيرة وتجنب زحام العصر الخارج من المدن الكبرى يجعل الرحلة الطويلة أهدأ. أعطنا نافذة زمنية لا دقيقة واحدة، ونقترح أفضل بداية ضمنها."] },
      ],
      faqs: [
        { q: "هل أعمل في السيارة أثناء توصيل طويل بين المدن؟", a: "نعم. اذكر ذلك واسأل عن أي احتياج مثل مقصورة هادئة." },
        { q: "هل نتوقف للصلاة والطعام في مسار طويل؟", a: "نعم. اذكر المحطات التي تريدها ويراعيها عرض السعر." },
      ],
    },
  },
  [`${L}/premium-group-transport`]: {
    en: {
      sections: [
        { h: "Convoy or separate vehicles", p: ["A senior group can travel as a convoy that arrives together or as separate vehicles that meet at the destination. A convoy suits a shared arrival, while separate vehicles suit people leaving from different places. Say which you want."] },
        { h: "Who rides with whom", p: ["Decide the seating plan before the day: who shares a vehicle, who needs privacy for calls, who travels with luggage. A clear plan avoids last-minute shuffling at the kerb."] },
      ],
      faqs: [
        { q: "Can the group be given one coordinator on the day?", a: "Name one organiser as the contact, and changes go through that person." },
        { q: "Can vehicles of the same category be requested for everyone?", a: "You can ask for it. Availability for your date is confirmed in the quotation." },
      ],
    },
    ar: {
      sections: [
        { h: "موكب أم مركبات منفصلة", p: ["قد تسافر المجموعة الكبيرة موكبًا يصل معًا أو مركبات منفصلة تلتقي في الوجهة. يناسب الموكب الوصول المشترك، وتناسب المركبات المنفصلة من ينطلقون من أماكن مختلفة. اذكر ما تريد."] },
        { h: "من يركب مع من", p: ["قرر خطة الجلوس قبل اليوم: من يتشارك مركبة ومن يحتاج خصوصية للمكالمات ومن يسافر مع الحقائب. وخطة واضحة تمنع إعادة الترتيب في اللحظة الأخيرة على الرصيف."] },
      ],
      faqs: [
        { q: "هل نخصص منسقًا واحدًا للمجموعة يوم الرحلة؟", a: "سمِّ منظّمًا واحدًا جهة اتصال، وتمر التغييرات عبره." },
        { q: "هل نطلب مركبات من الفئة نفسها للجميع؟", a: "يمكنك طلب ذلك. وتُؤكَّد الإتاحة لتاريخك في عرض السعر." },
      ],
    },
  },
  [`${L}/vip-delegation-transport`]: {
    en: {
      sections: [
        { h: "Advance planning with the host", p: ["Delegation visits usually involve a host organisation with its own protocol. Share the host's contact early so pickup points, entrances and timings are agreed with them, not improvised on the day."] },
        { h: "A rehearsal for the first day", p: ["For a complex programme, walk the first day's route with the host before the delegation arrives: gates, drop-off zones and the order of vehicles. Problems found in rehearsal cost nothing; the same problems on the day cost the programme."] },
      ],
      faqs: [
        { q: "Can you work with the host's protocol team?", a: "Give us the host's contact and requirements, and we plan within them as far as access allows." },
        { q: "Can the programme change during the visit?", a: "Changes are expected. Tell us through one named contact, and larger changes are re-quoted." },
      ],
    },
    ar: {
      sections: [
        { h: "التخطيط المسبق مع الجهة المضيفة", p: ["تتضمن زيارات الوفود عادةً جهة مضيفة لها بروتوكولها. شاركنا بجهة اتصال المضيف مبكرًا لتُتفق معها نقاط الاستلام والمداخل والتوقيتات لا أن تُرتجل يوم الزيارة."] },
        { h: "بروفة لليوم الأول", p: ["في البرنامج المعقد، سِر مسار اليوم الأول مع المضيف قبل وصول الوفد: البوابات ومناطق النزول وترتيب المركبات. والمشكلات التي تُكتشف في البروفة لا تكلّف شيئًا، أما عند حدوثها يوم الزيارة فتكلّف البرنامج."] },
      ],
      faqs: [
        { q: "هل تعملون مع فريق البروتوكول لدى المضيف؟", a: "أعطنا جهة اتصال المضيف ومتطلباته ونخطط ضمنها بقدر ما يسمح الوصول." },
        { q: "هل يتغير البرنامج أثناء الزيارة؟", a: "التغيير متوقع. أبلغنا عبر جهة اتصال واحدة، وتُسعَّر التغييرات الكبيرة من جديد." },
      ],
    },
  },
  [`${L}/luxury-event-transport`]: {
    en: {
      sections: [
        { h: "Sequencing arrivals at a gala", p: ["At a gala or launch, the order in which guests step out of their cars is part of the show. Agree an arrival window with the organiser so vehicles queue and release in sequence, not all at once."] },
        { h: "Dress, luggage and the valet", p: ["Guests in formal dress need a clear, short path from car to entrance. Ask the venue about valet and drop-off rules, and tell us if guests will carry bags, so the vehicle and the stop are suitable."] },
      ],
      faqs: [
        { q: "Can vehicles be held for guests until the end of the event?", a: "Waiting is arranged in advance, with the terms in your quotation." },
        { q: "Can you coordinate with the venue's valet team?", a: "Give us the venue contact and we align the arrival plan with their rules." },
      ],
    },
    ar: {
      sections: [
        { h: "ترتيب وصول الضيوف في الحفل", p: ["في الحفلات وإطلاق المنتجات يكون ترتيب نزول الضيوف من سياراتهم جزءًا من العرض. اتفق مع المنظّم على نافذة وصول لتصطف المركبات وتنطلق بالتسلسل لا دفعة واحدة."] },
        { h: "الملابس الرسمية والحقائب وخدمة صف السيارات", p: ["يحتاج الضيوف بالملابس الرسمية مسارًا قصيرًا واضحًا من السيارة إلى المدخل. اسأل الموقع عن خدمة صف السيارات وقواعد النزول، وأخبرنا إن كان الضيوف سيحملون حقائب لتناسب المركبة ونقطة التوقف."] },
      ],
      faqs: [
        { q: "هل تُبقى المركبات للضيوف حتى نهاية الفعالية؟", a: "يُرتَّب الانتظار مسبقًا، وشروطه في عرض السعر." },
        { q: "هل تنسقون مع فريق صف السيارات في الموقع؟", a: "أعطنا جهة اتصال الموقع ونوفّق خطة الوصول مع قواعدهم." },
      ],
    },
  },
  [`${E}/concert-transport`]: {
    en: {
      sections: [
        { h: "Agree the pickup point before the show", p: ["Concert zones usually fix where private cars may collect guests, often away from the main gate. Pick the exact spot in advance and share a map pin with the driver and your group, since phone signal can be poor in a crowd."] },
        { h: "Arriving early, leaving late", p: ["Gates often open well before the show, and the crush after it is the real challenge. If you want to avoid it, plan to leave a little after the finale or to walk to a quieter pickup point."] },
      ],
      faqs: [
        { q: "What if the concert runs over time?", a: "Tell us the expected end time and your flexibility. How extra waiting is handled is set out in your quotation." },
        { q: "Can the driver wait at the venue during the show?", a: "Waiting is arranged in advance if the venue allows it. Terms are in your quotation." },
      ],
    },
    ar: {
      sections: [
        { h: "حدد نقطة الاستلام قبل الحفل", p: ["تحدد مناطق الحفلات عادةً أين يجوز للسيارات الخاصة استلام الضيوف، وغالبًا بعيدًا عن البوابة الرئيسة. اختر النقطة بدقة مسبقًا وشاركها موقعًا على الخريطة مع السائق ومجموعتك، فالشبكة قد تضعف وسط الزحام."] },
        { h: "الوصول مبكرًا والمغادرة متأخرًا", p: ["تفتح البوابات غالبًا قبل الحفل بوقت طويل، والتحدي الحقيقي هو الزحام بعده. فإن أردت تجنبه فخطّط للمغادرة بعد الختام بقليل أو للمشي إلى نقطة استلام أهدأ."] },
      ],
      faqs: [
        { q: "ماذا لو تجاوز الحفل وقته؟", a: "أخبرنا بوقت الانتهاء المتوقع ومرونتك. وتُبيَّن آلية الانتظار الإضافي في عرض السعر." },
        { q: "هل ينتظر السائق عند الموقع أثناء الحفل؟", a: "يُرتَّب الانتظار مسبقًا إذا سمح الموقع. والشروط في عرض السعر." },
      ],
    },
  },
  [`${E}/event-airport-transfers`]: {
    en: {
      sections: [
        { h: "Signage and delegate lists", p: ["For a conference, send the delegate list with flights and the name the sign should carry. A consistent sign at arrivals helps strangers find their driver, especially when many flights land together."] },
        { h: "Late arrivals and hotel check-in", p: ["Delegates who land after midnight still need rooms ready. Coordinate with the hotel so late check-ins are expected, and pass the final arrival list to us, so the last cars are not waiting on an unconfirmed flight."] },
      ],
      faqs: [
        { q: "Can we update the delegate list the day before?", a: "Yes. Send changes through your coordinator as early as possible." },
        { q: "Can guests who arrive early still use the event cars?", a: "Ask for their pickups separately. Each arrival window is quoted individually." },
      ],
    },
    ar: {
      sections: [
        { h: "اللوحات وقوائم المشاركين", p: ["في المؤتمر أرسل قائمة المشاركين مع الرحلات والاسم الذي تحمله اللوحة. وتساعد لوحة موحّدة في صالة الوصول الغرباء على إيجاد سائقهم، خاصةً حين تهبط رحلات كثيرة معًا."] },
        { h: "الوصول المتأخر وتسجيل الفندق", p: ["يظل المشاركون الذين يهبطون بعد منتصف الليل بحاجة إلى غرف جاهزة. نسّق مع الفندق ليُتوقَّع التسجيل المتأخر، وأرسل لنا قائمة الوصول النهائية كي لا تنتظر آخر السيارات رحلة غير مؤكدة."] },
      ],
      faqs: [
        { q: "هل نحدّث قائمة المشاركين قبل يوم؟", a: "نعم. أرسل التغييرات عبر منسقك في أقرب وقت." },
        { q: "هل يستخدم الضيوف الذين يصلون مبكرًا سيارات الفعالية؟", a: "اطلب استلامهم منفصلًا. وتُسعَّر كل نافذة وصول على حدة." },
      ],
    },
  },
  [`${E}/festival-transport`]: {
    en: {
      sections: [
        { h: "Packing for several days", p: ["Festival visitors often carry more than a day bag: chairs, jackets and gear. Count them in your bag total and tell us how many return trips a day you expect, so the vehicle is not undersized."] },
        { h: "The last day and the flight home", p: ["The final day mixes check-out, a last visit to the site and a flight. Give the flight time and the check-out time, and we plan the last pickup to leave generous time before the airport."] },
      ],
      faqs: [
        { q: "Can the same driver take us to the festival each day?", a: "You can request it. Availability across your dates is confirmed in the quotation." },
        { q: "What if the festival site moves its entrance or timings?", a: "Tell us as soon as you hear. Changes are confirmed with you before they affect the quotation." },
      ],
    },
    ar: {
      sections: [
        { h: "التجهيز لعدة أيام", p: ["كثيرًا ما يحمل زوار المهرجانات أكثر من حقيبة يوم: كراسي وسترات ومستلزمات. احسبها ضمن عدد الحقائب وأخبرنا بعدد الرحلات التي تتوقعها يوميًا كي لا تكون المركبة أصغر من اللازم."] },
        { h: "اليوم الأخير ورحلة العودة", p: ["يجمع اليوم الأخير بين الخروج من الفندق وزيارة أخيرة للموقع ورحلة جوية. أعطنا موعد الرحلة ووقت الخروج ونخطط الاستلام الأخير بوقت وافٍ قبل المطار."] },
      ],
      faqs: [
        { q: "هل يوصلنا السائق نفسه إلى المهرجان كل يوم؟", a: "يمكنك طلب ذلك. وتُؤكَّد الإتاحة عبر تواريخك في عرض السعر." },
        { q: "ماذا لو غيّر موقع المهرجان مدخله أو توقيته؟", a: "أخبرنا فور علمك. ونؤكد معك التغييرات قبل أن تؤثر في عرض السعر." },
      ],
    },
  },
  [`${E}/vip-event-chauffeur`]: {
    en: {
      sections: [
        { h: "Working from the run of show", p: ["A speaker or guest's day follows a run of show. Share it, with the times they must be at each place, and we plan the pickups backwards from each slot rather than guessing."] },
        { h: "Passes and backstage access", p: ["Backstage and green-room areas usually need passes or a named contact for the driver. Ask the organiser who issues them and send us the names and plate details they need before the day."] },
      ],
      faqs: [
        { q: "Can the chauffeur stay with the guest between sessions?", a: "Yes, by arrangement. Standby time and its terms are in your quotation." },
        { q: "Can the driver enter the backstage area?", a: "That depends on the venue's passes. Ask the organiser and tell us what is required." },
      ],
    },
    ar: {
      sections: [
        { h: "العمل وفق جدول الفعالية", p: ["يتبع يوم المتحدث أو الضيف جدولًا زمنيًا للفعالية. شاركنا به مع الأوقات التي يجب أن يكون فيها في كل مكان، ونخطط الاستلام رجوعًا من كل موعد بدل التخمين."] },
        { h: "التصاريح ومناطق الكواليس", p: ["تحتاج الكواليس وغرف الضيوف عادةً إلى تصاريح أو جهة اتصال مسماة للسائق. اسأل المنظّم من يصدرها وأرسل لنا الأسماء وبيانات اللوحات التي يطلبونها قبل اليوم."] },
      ],
      faqs: [
        { q: "هل يبقى السائق مع الضيف بين الجلسات؟", a: "نعم، بالترتيب المسبق. ووقت الانتظار وشروطه في عرض السعر." },
        { q: "هل يدخل السائق منطقة الكواليس؟", a: "يعتمد ذلك على تصاريح الموقع. اسأل المنظّم وأخبرنا بالمطلوب." },
      ],
    },
  },
  [`${E}/group-event-transport`]: {
    en: {
      sections: [
        { h: "Fixing the headcount", p: ["A group's numbers change until the last day. Agree a date after which the headcount is final, and tell us how much the number may still move, so the vehicle size has room without being wasteful."] },
        { h: "Seating a mixed group", p: ["Colleagues, families and guests travel differently. Group people sensibly, name a lead per vehicle and let us know about anyone who needs step-free access."] },
      ],
      faqs: [
        { q: "What if more people join after the quotation?", a: "Tell us as soon as possible. Adding passengers may need a larger vehicle, so it is re-quoted." },
        { q: "Can the group return at different times?", a: "Yes. Give each return window and the quotation covers them separately." },
      ],
    },
    ar: {
      sections: [
        { h: "تثبيت عدد الأشخاص", p: ["يتغير عدد المجموعة حتى اليوم الأخير. حدد تاريخًا يصبح بعده العدد نهائيًا، وأخبرنا بمدى ما قد يتغير بعده، ليكون في حجم المركبة متسع دون هدر."] },
        { h: "توزيع المجموعة المختلطة", p: ["يسافر الزملاء والعائلات والضيوف بطرق مختلفة. وزّع الأشخاص توزيعًا معقولًا وسمِّ مسؤولًا لكل مركبة وأخبرنا بمن يحتاج وصولًا بلا درج."] },
      ],
      faqs: [
        { q: "ماذا لو انضم أشخاص بعد عرض السعر؟", a: "أخبرنا في أقرب وقت. فإضافة الركاب قد تتطلب مركبة أكبر، لذا يُعاد التسعير." },
        { q: "هل تعود المجموعة في أوقات مختلفة؟", a: "نعم. اذكر كل نافذة عودة ويشملها عرض السعر منفصلة." },
      ],
    },
  },
  [`${S}/hotel-transportation`]: {
    en: {
      sections: [
        { h: "How a concierge desk should hand over a request", p: ["A concierge can send the guest's name, flight, hotel name, room-ready time and destination in one message. The guest then needs to do nothing, and the hotel's name on the booking helps the driver and the reception match the pickup."] },
        { h: "Lead time for hotel requests", p: ["Same-day requests are harder to arrange than planned ones. Hotels that give us the guest's plan a day or more ahead get the most reliable result, though last-minute requests can still be asked for."] },
      ],
      faqs: [
        { q: "Can a hotel book on behalf of a guest?", a: "Yes. The concierge becomes the contact and the guest the passenger in the same enquiry." },
        { q: "Can a guest ask the front desk to confirm our booking?", a: "Give us the hotel's name and the concierge contact, and we can reference the booking in our confirmation." },
      ],
    },
    ar: {
      sections: [
        { h: "كيف يسلّم مكتب الاستقبال الطلب", p: ["يستطيع موظف الاستقبال إرسال اسم الضيف ورحلته واسم الفندق ووقت جاهزية الغرفة والوجهة في رسالة واحدة. فلا يحتاج الضيف إلى فعل شيء، ويساعد اسم الفندق في الحجز السائق والاستقبال على مطابقة الاستلام."] },
        { h: "المهلة في طلبات الفنادق", p: ["الطلبات في اليوم نفسه أصعب ترتيبًا من المخطط لها. والفنادق التي تعطينا خطة الضيف قبل يوم أو أكثر تحصل على أكثر النتائج ثباتًا، وإن كان بالإمكان طلب الطلبات الأخيرة."] },
      ],
      faqs: [
        { q: "هل يحجز الفندق نيابة عن ضيفه؟", a: "نعم. يصبح موظف الاستقبال جهة الاتصال والضيف راكبًا في الطلب نفسه." },
        { q: "هل يطلب الضيف من الاستقبال تأكيد حجزنا؟", a: "أعطنا اسم الفندق وجهة اتصال الاستقبال ويمكننا الإشارة إلى الحجز في تأكيدنا." },
      ],
    },
  },
  [`${S}/cruise-port-transfers`]: {
    en: {
      sections: [
        { h: "Embarkation cut-offs", p: ["Cruise lines set a latest check-in time before sailing, and missing it means missing the ship. Work back from that time, not from the sailing time, and add a margin for traffic around the port."] },
        { h: "Disembarking onto a flight", p: ["Disembarkation takes longer than people expect, with luggage collected and passport checks to clear. If you have a flight the same day, tell us its time and we plan a generous buffer."] },
      ],
      faqs: [
        { q: "Can the car meet the ship if it arrives late?", a: "Tell us the vessel and the expected time. How a late arrival is handled is set out in your quotation." },
        { q: "Is luggage handled between the ship and the car?", a: "Luggage handling depends on the terminal. We confirm what can be arranged for your port in the quotation." },
      ],
    },
    ar: {
      sections: [
        { h: "مواعيد إغلاق الصعود", p: ["تحدد شركات الرحلات البحرية آخر موعد لإنهاء الإجراءات قبل الإبحار، وفواته يعني فوات السفينة. احسب رجوعًا من ذلك الموعد لا من موعد الإبحار، وأضف هامشًا لحركة المرور حول الميناء."] },
        { h: "النزول من السفينة إلى رحلة جوية", p: ["يستغرق النزول وقتًا أطول مما يتوقع الناس، مع استلام الحقائب وإنهاء فحص الجوازات. وإذا كانت لديك رحلة جوية في اليوم نفسه فأخبرنا بموعدها ونخطط هامشًا وافيًا."] },
      ],
      faqs: [
        { q: "هل تنتظر السيارة السفينة إن تأخرت؟", a: "أخبرنا باسم السفينة والوقت المتوقع. وتُبيَّن آلية التعامل مع التأخر في عرض السعر." },
        { q: "هل تُنقل الحقائب بين السفينة والسيارة؟", a: "يعتمد نقل الحقائب على المحطة. ونؤكد ما يمكن ترتيبه لميناءك في عرض السعر." },
      ],
    },
  },
  [`${S}/business-travel`]: {
    en: {
      sections: [
        { h: "Arrival manifests for visiting teams", p: ["When a team visits, send one sheet listing each traveller, flight, landing time, hotel and the host contact. It lets arrivals be grouped sensibly and lets one person on your side answer questions."] },
        { h: "A contact if something goes wrong", p: ["Give an emergency contact on the company side, someone reachable out of hours. If a flight is cancelled or a meeting moves, one decision-maker keeps the day moving."] },
      ],
      faqs: [
        { q: "Can several travellers on different flights share a vehicle?", a: "Sometimes, if their landing times are close. We group arrivals where it makes sense and quote it." },
        { q: "Can invoices go to the company instead of the traveller?", a: "Say so in your enquiry. Billing arrangements are confirmed in the quotation." },
      ],
    },
    ar: {
      sections: [
        { h: "قوائم الوصول للفرق الزائرة", p: ["عندما يزورك فريق أرسل ورقة واحدة بكل مسافر ورحلته ووقت هبوطه وفندقه وجهة اتصال المضيف. فتُجمّع الوصولات بصورة معقولة ويجيب شخص واحد من جهتك عن الأسئلة."] },
        { h: "جهة اتصال عند الطوارئ", p: ["أعطِ جهة اتصال للطوارئ من جهة الشركة، شخصًا يمكن الوصول إليه خارج الدوام. فإذا أُلغيت رحلة أو انتقل اجتماع حافظ صاحب قرار واحد على سير اليوم."] },
      ],
      faqs: [
        { q: "هل يتشارك عدة مسافرين على رحلات مختلفة مركبة واحدة؟", a: "أحيانًا إذا تقاربت أوقات هبوطهم. نجمع الوصولات حيث يناسب ونسعّر ذلك." },
        { q: "هل تُرسل الفواتير إلى الشركة بدل المسافر؟", a: "اذكر ذلك في طلبك. وتُؤكَّد ترتيبات الفوترة في عرض السعر." },
      ],
    },
  },
  [`${S}/travel-agency-transport`]: {
    en: {
      sections: [
        { h: "Asking for quotes by leg and by group", p: ["Agencies usually need a clear price per leg and per group size so they can build a package. Send each leg, with dates and passengers, in one enquiry and we return the quotation in that shape."] },
        { h: "A one-page sheet for clients", p: ["Prepare a short sheet for your travellers with the meeting point, driver contact and what to do if the driver cannot be found. It cuts the late-night calls that arrive when guests land in an unfamiliar airport."] },
      ],
      faqs: [
        { q: "Can an agency get a quotation for a whole season of groups?", a: "Describe the groups and dates, and the arrangement is quoted individually. Availability for each date is confirmed." },
        { q: "Can the agency's name appear on the sign at arrivals?", a: "Ask for it in your enquiry. Whether it can be arranged is confirmed in the quotation." },
      ],
    },
    ar: {
      sections: [
        { h: "طلب عروض الأسعار بحسب المقطع والمجموعة", p: ["تحتاج الوكالات عادةً إلى سعر واضح لكل مقطع ولكل حجم مجموعة لتبني باقتها. أرسل كل مقطع بتواريخه وركابه في طلب واحد ونعيد عرض السعر بهذه الصيغة."] },
        { h: "ورقة موجزة للعملاء", p: ["جهّز ورقة قصيرة لمسافريك فيها نقطة اللقاء وتواصل السائق وما يفعلونه إن تعذّر العثور عليه. فهذا يقلل اتصالات الليل التي تأتي حين يهبط الضيوف في مطار غير مألوف."] },
      ],
      faqs: [
        { q: "هل تحصل الوكالة على عرض سعر لموسم كامل من المجموعات؟", a: "صف المجموعات والتواريخ ويُسعَّر الترتيب على حدة. وتُؤكَّد الإتاحة لكل تاريخ." },
        { q: "هل يظهر اسم الوكالة على اللوحة في الوصول؟", a: "اطلب ذلك في طلبك. وتُؤكَّد إمكانيته في عرض السعر." },
      ],
    },
  },
  [`${S}/bilingual-chauffeur`]: {
    en: {
      sections: [
        { h: "Helping across a language gap", p: ["Even with a shared language, written addresses and a map pin remove most misunderstandings. Send your hotel and destination names in Arabic as well as English, since drivers and map apps often match the Arabic spelling better."] },
        { h: "When the language need is specific", p: ["If you need a particular language, for example for an elderly parent, say so early and state how important it is. A preference is easier to meet than a requirement, and we tell you honestly which one we can offer."] },
      ],
      faqs: [
        { q: "Can I request a driver who speaks my language?", a: "You can state a language preference. Whether it can be met for your dates is confirmed in the quotation." },
        { q: "What if no driver with my language is available?", a: "We tell you before you confirm, and you decide whether to accept the alternative." },
      ],
    },
    ar: {
      sections: [
        { h: "تجاوز حاجز اللغة", p: ["حتى مع وجود لغة مشتركة تزيل العناوين المكتوبة وموقع الخريطة معظم سوء الفهم. أرسل اسم فندقك ووجهتك بالعربية إلى جانب الإنجليزية، فكثيرًا ما يطابق السائقون وتطبيقات الخرائط الإملاء العربي بصورة أفضل."] },
        { h: "حين تكون الحاجة اللغوية محددة", p: ["إذا كنت تحتاج لغة بعينها، مثلًا لأحد الوالدين من كبار السن، فاذكر ذلك مبكرًا ومدى أهميته. فالتفضيل أسهل تحقيقًا من الشرط، ونخبرك بصدق بما نستطيع تقديمه."] },
      ],
      faqs: [
        { q: "هل أطلب سائقًا يتحدث لغتي؟", a: "يمكنك ذكر تفضيل لغوي. وتُؤكَّد إمكانية تحقيقه لتواريخك في عرض السعر." },
        { q: "ماذا لو لم يتوفر سائق بلغتي؟", a: "نخبرك قبل أن تؤكد، وأنت تقرر قبول البديل." },
      ],
    },
  },
  [`${S}/senior-friendly-transportation`]: {
    en: {
      sections: [
        { h: "Mobility aids and loading", p: ["A folding walker or wheelchair needs space and a few minutes to load. Tell us what aid the traveller uses, whether they can transfer into a car seat unaided, and how much help they will need at both ends."] },
        { h: "Choosing a vehicle by step height", p: ["A tall vehicle has a higher step that some elderly passengers find hard, while a low saloon can be hard to get out of. Say which suits the traveller, and ask us to recommend if you are unsure."] },
      ],
      faqs: [
        { q: "Can the driver help with a wheelchair?", a: "Tell us the aid used and the help needed. What can be arranged is confirmed in the quotation." },
        { q: "Can a relative travel alongside the elderly passenger?", a: "Yes. Include them in the passenger count so the seating is planned for both." },
      ],
    },
    ar: {
      sections: [
        { h: "وسائل الحركة والتحميل", p: ["يحتاج المشّاية القابلة للطي أو الكرسي المتحرك مساحة ودقائق للتحميل. أخبرنا بالوسيلة التي يستخدمها المسافر وهل يستطيع الانتقال إلى مقعد السيارة دون مساعدة وكم يحتاج من عون عند الطرفين."] },
        { h: "اختيار المركبة بحسب ارتفاع الدرجة", p: ["للمركبة المرتفعة درجة أعلى قد يجدها بعض كبار السن صعبة، وقد يصعب الخروج من سيارة منخفضة. اذكر ما يناسب المسافر، واطلب منا الاقتراح إن لم تكن متأكدًا."] },
      ],
      faqs: [
        { q: "هل يساعد السائق في الكرسي المتحرك؟", a: "أخبرنا بالوسيلة المستخدمة والعون المطلوب. وتُؤكَّد في عرض السعر الإمكانية." },
        { q: "هل يسافر قريب برفقة الراكب المسن؟", a: "نعم. ضمّنه في عدد الركاب ليُخطَّط الجلوس للاثنين." },
      ],
    },
  },
  [`${T}/private-sightseeing-driver`]: {
    en: {
      sections: [
        { h: "Old quarters and where cars can go", p: ["Historic districts such as Diriyah's At-Turaif and Jeddah's Al Balad have pedestrian lanes and limited parking. The car usually waits at the nearest accessible point, and the walk in is part of the visit. Tell us the pace you want."] },
        { h: "Photo stops and light", p: ["Good light for photographs comes early and late, while midday is harsh and hot. Share how many stops you want and which sights matter most, and we help you order the day around the light."] },
      ],
      faqs: [
        { q: "Does the driver act as a guide?", a: "No. A sightseeing driver provides transport only. If you want a guide, arrange one separately and we coordinate the pickups." },
        { q: "Can I change the order of places during the day?", a: "Small changes are fine. Large changes may add time, so tell the driver early." },
      ],
    },
    ar: {
      sections: [
        { h: "الأحياء القديمة وأين تصل السيارة", p: ["تضم الأحياء التاريخية كالطريف في الدرعية والبلد في جدة ممرات للمشاة ومواقف محدودة. وتنتظر السيارة عادةً عند أقرب نقطة يمكن الوصول إليها، ويكون المشي إلى الداخل جزءًا من الزيارة. أخبرنا بالوتيرة التي تريدها."] },
        { h: "محطات التصوير والضوء", p: ["يأتي الضوء الجيد للصور مبكرًا ومتأخرًا، أما الظهيرة فقاسية وحارة. أخبرنا بعدد المحطات وأهم المعالم، ونساعدك في ترتيب اليوم حول الضوء."] },
      ],
      faqs: [
        { q: "هل يعمل السائق مرشدًا سياحيًا؟", a: "لا. يقدم سائق الجولات النقل فقط. وإن أردت مرشدًا فرتّبه منفصلًا وننسق الاستلام." },
        { q: "هل أغيّر ترتيب الأماكن خلال اليوم؟", a: "التعديلات الصغيرة مقبولة. والكبيرة قد تضيف وقتًا، فأخبر السائق مبكرًا." },
      ],
    },
  },
  [`${T}/multi-stop-transport`]: {
    en: {
      sections: [
        { h: "Pins, not just names", p: ["For a multi-stop day, a list of map pins beats a list of place names, since many places share names across a city. Send a pin for each stop and the driver builds the route without calling you at every junction."] },
        { h: "Errand circuits", p: ["Multi-stop bookings are also used for errands such as banks, appointments and collections. Say which stops need you to leave the car and how long each takes, so the waiting is planned, not guessed."] },
      ],
      faqs: [
        { q: "Is there a limit on the number of stops?", a: "The practical limit is time. Send your list and the quotation shows what fits in the hours you want." },
        { q: "Can I add a stop on the day?", a: "Often yes, if time allows. Tell the driver early; the terms for extra time are in your quotation." },
      ],
    },
    ar: {
      sections: [
        { h: "مواقع على الخريطة لا أسماء فقط", p: ["في اليوم متعدد المحطات تغلب قائمة المواقع على الخريطة قائمة أسماء الأماكن، إذ تتشارك أماكن كثيرة الاسم نفسه في المدينة. أرسل موقعًا لكل محطة ويبني السائق المسار دون الاتصال بك عند كل تقاطع."] },
        { h: "جولات المشاوير", p: ["تُستخدم الحجوزات متعددة المحطات أيضًا للمشاوير كالمصارف والمواعيد واستلام الأغراض. اذكر المحطات التي تحتاج فيها إلى النزول ومدة كل منها ليُخطَّط الانتظار لا أن يُخمَّن."] },
      ],
      faqs: [
        { q: "هل هناك حد لعدد المحطات؟", a: "الحد العملي هو الوقت. أرسل قائمتك ويبيّن عرض السعر ما يتسع له الوقت الذي تريده." },
        { q: "هل أضيف محطة في يوم الرحلة؟", a: "غالبًا نعم إن سمح الوقت. أخبر السائق مبكرًا؛ وشروط الوقت الإضافي في عرض السعر." },
      ],
    },
  },
};

export function applyBatch3Enrichments(pages: ServicePage[]) {
  for (const [path, byLocale] of Object.entries(batch3Enrichments)) {
    const page = pages.find((p) => p.path === path);
    if (!page) throw new Error(`batch3Enrichments: unknown page ${path}`);
    page.updated = U;
    for (const locale of Object.keys(byLocale) as Locale[]) {
      const c = page.copy[locale];
      c.sections = [...c.sections, ...byLocale[locale].sections];
      c.faqs = [...c.faqs, ...byLocale[locale].faqs];
    }
  }
}
