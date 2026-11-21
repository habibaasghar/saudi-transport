import type { BlogPost } from "./types";

const S = "services";
const I = `${S}/intercity-transfers`;
const D = "2026-11-18";

/**
 * Guide C2: Makkah to Madinah options (informational; booking intent stays on the two route pages).
 * Sources checked 2026-11-18:
 * - Saudipedia, "Haramain High Speed Railway": five stations, none at a miqat; Makkah station in al-Rusaifa,
 *   about 3 km from the Grand Mosque; Madinah station in Knowledge Economic City, about 7 km from the
 *   Prophet's Mosque; Makkah to Madinah about 2 h 45 min.
 * - Road: about 436 km on Route 15, about 4 h 20 min without stops (Google Maps, November 2026; see the
 *   makkah-to-madinah route page).
 * Not stated (not verified): timetables, fares, luggage or Zamzam rules on the train, bus operators or fares.
 */
export const makkahMadinahPost: BlogPost = {
  slug: "makkah-to-madinah-train-bus-or-private-car",
  published: D,
  updated: D,
  links: [
    `${I}/makkah-to-madinah`,
    `${I}/madinah-to-makkah`,
    `${S}/umrah-transport/family-umrah-transport`,
    `${S}/umrah-transport/madinah-ziyarat`,
    `${S}/city-transport/madinah`,
    `${S}/airport-transfers/madinah-airport`,
    `${S}/umrah-transport`,
  ],
  copy: {
    en: {
      nav: "Makkah to Madinah: your options",
      title: "Makkah to Madinah: Train, Bus or Private Car?",
      description: "Compare the Haramain train, the bus and a private car between Makkah and Madinah: real door-to-door time, luggage, the Miqat and who each option suits.",
      h1: "Makkah to Madinah: train, bus or private car?",
      answer:
        "Between Makkah and Madinah you can take the Haramain train, an intercity bus or a private car. The train is quicker on board, about 2 hours 45 minutes, but its stations are about 3 km from the Haram and about 7 km from the Prophet's Mosque. A private car drives about 436 km hotel to hotel, around 4 hours 20 minutes before stops.",
      summary: "The honest comparison: time on board against door-to-door time, luggage, group size and the Miqat.",
      sections: [
        {
          h: "There is no flight, so the choice is rail or road",
          p: [
            "Makkah has no commercial airport, so this journey is made by train or by road. The question is not which option is fastest on paper, but which gets your whole group from one hotel to the other with the least effort. A train journey starts and ends at stations outside the central areas, while a car starts and ends at the hotels.",
          ],
        },
        {
          h: "The train: quick on board, with a transfer at each end",
          p: [
            "The Haramain High Speed Railway runs between the two cities in about 2 hours 45 minutes, according to Saudipedia; some services may differ, so check the timetable for your date. The Makkah station is in al-Rusaifa, about 3 km from the Masjid al-Haram, and the Madinah station is in Knowledge Economic City, about 7 km from the Prophet's Mosque.",
            "That means three legs, not one: hotel to the Makkah station, the train, then the Madinah station to your hotel. Add time to reach the station through traffic near the Haram, to arrive before departure and to find a car at the other end. For one or two people with light bags this is easy. For a family with suitcases and Zamzam water, each change of vehicle means lifting everything again.",
          ],
          list: [
            "Check before you book: the timetable, the luggage allowance, and whether and how Zamzam water may be carried",
            "Plan both transfers: how you reach the Makkah station, and who meets you at the Madinah station",
          ],
        },
        {
          h: "The bus: the budget option",
          p: [
            "Intercity coaches run between Makkah and Madinah. They are usually the lowest-cost option, but the journey is long, departure and arrival points may be some way from your hotels, and timings are fixed. Confirm the current operator, the pickup point in Makkah and the stop in Madinah before you rely on it.",
          ],
        },
        {
          h: "The private car: slower on the road, simpler overall",
          p: [
            "A private car leaves from your Makkah hotel, at the nearest point vehicle access allows, and drives about 436 km on Route 15 to your Madinah hotel: around 4 hours 20 minutes before stops. It is longer than the train ride itself, but there are no transfers, no fixed departure time and no limit beyond the space in the vehicle you choose: a sedan, a GMC Yukon or a Hyundai Staria.",
            "You can stop for prayer and rest when your group needs to, and leave after the prayer you want to attend rather than to match a timetable. For one traveller it is not the cheapest option. For a family or a group, compare one quotation for the car with the total of every train ticket plus the taxis at both ends.",
          ],
        },
        {
          h: "The other direction: Madinah to Makkah and the Miqat",
          p: [
            "Pilgrims going from Madinah to Makkah for Umrah pass the Miqat of Dhul Hulaifah, also called Abyar Ali, shortly after leaving Madinah. The Haramain railway has no station at a miqat, so train passengers need to plan where they enter Ihram; ask a scholar. A private car can stop at Abyar Ali so that everyone enters Ihram there before continuing to Makkah. Mention the stop when you enquire.",
          ],
        },
        {
          h: "Which option fits your group",
          p: ["A simple way to decide:"],
          list: [
            "One or two travellers, light bags, comfortable with transfers: the train",
            "Lowest cost and time to spare: the bus, after checking where it stops",
            "A family, older pilgrims, several suitcases or Zamzam water: a private car, hotel to hotel",
            "Madinah to Makkah for Umrah with a stop at the Miqat: a private car makes the stop simple",
          ],
        },
      ],
      table: {
        h: "Train, bus and car compared",
        head: ["Option", "Time on the move", "Hotel to hotel?", "Best for"],
        rows: [
          ["Haramain train", "About 2 h 45 min on board, plus transfers at both ends", "No: stations are about 3 km and 7 km from the two mosques", "Light travellers comfortable with transfers"],
          ["Intercity bus", "Longer; depends on the service", "No: depends on the stops", "Lowest cost, flexible time"],
          ["Private car", "About 4 h 20 min before stops", "Yes, to the nearest point access allows", "Families, older pilgrims, lots of luggage, Miqat stop"],
        ],
      },
      faqs: [
        { q: "Is the train faster than a car from Makkah to Madinah?", a: "On board, yes: about 2 hours 45 minutes against about 4 hours 20 minutes of driving. Door to door the gap is smaller, because the train needs a transfer at each end." },
        { q: "How far are the train stations from the two mosques?", a: "The Makkah station is about 3 km from the Masjid al-Haram and the Madinah station about 7 km from the Prophet's Mosque (Saudipedia)." },
        { q: "Does the train stop at the Miqat on the way from Madinah to Makkah?", a: "No. The railway has no station at a miqat, so ask a scholar where to enter Ihram if you travel by train. A private car can stop at Abyar Ali." },
        { q: "Can I take Zamzam water on the train?", a: "Check the current luggage rules with Saudi Arabian Railways before you travel. In a private car the only limit is the space in the vehicle." },
        { q: "Can I book a private car for the whole Makkah to Madinah trip?", a: "Yes. Send your hotels, date, passengers and bags on the Makkah to Madinah page for a quotation." },
      ],
    },
    ar: {
      nav: "من مكة إلى المدينة: الخيارات",
      title: "مكة إلى المدينة: القطار أم الحافلة أم السيارة؟",
      description: "قارن بين قطار الحرمين والحافلة والسيارة الخاصة بين مكة والمدينة: الزمن الفعلي من الباب إلى الباب، والحقائب، والميقات، ولمن يناسب كل خيار.",
      h1: "من مكة إلى المدينة: القطار أم الحافلة أم السيارة الخاصة؟",
      answer:
        "بين مكة المكرمة والمدينة المنورة يمكنك ركوب قطار الحرمين أو الحافلة أو سيارة خاصة. القطار أسرع في زمن الرحلة نفسها، نحو ساعتين و45 دقيقة، لكن محطتيه على بعد نحو 3 كم من الحرم ونحو 7 كم من المسجد النبوي. أما السيارة الخاصة فتقطع نحو 436 كم من فندق إلى فندق في قرابة 4 ساعات و20 دقيقة قبل التوقفات.",
      summary: "مقارنة صادقة: زمن الرحلة على متن القطار مقابل الزمن من الباب إلى الباب، والحقائب، وحجم المجموعة، والميقات.",
      sections: [
        {
          h: "لا طيران بين المدينتين، فالخيار بين القطار والطريق",
          p: [
            "لا يوجد في مكة مطار تجاري، لذلك تكون هذه الرحلة بالقطار أو برًّا. والسؤال ليس أي الخيارات أسرع على الورق، بل أيها يوصل مجموعتك كلها من فندق إلى فندق بأقل جهد. فرحلة القطار تبدأ وتنتهي في محطات خارج المناطق المركزية، أما السيارة فتبدأ وتنتهي عند الفنادق.",
          ],
        },
        {
          h: "القطار: سريع على متنه، مع تنقل عند كل طرف",
          p: [
            "يقطع قطار الحرمين السريع المسافة بين المدينتين في نحو ساعتين و45 دقيقة بحسب الموسوعة السعودية (سعوديبيديا)، وقد تختلف بعض الرحلات، فتحقق من الجدول لتاريخك. تقع محطة مكة في حي الرصيفة على بعد نحو 3 كم من المسجد الحرام، وتقع محطة المدينة في مدينة المعرفة الاقتصادية على بعد نحو 7 كم من المسجد النبوي.",
            "وهذا يعني ثلاث مراحل لا مرحلة واحدة: من الفندق إلى محطة مكة، ثم القطار، ثم من محطة المدينة إلى فندقك. أضف وقتًا للوصول إلى المحطة عبر الزحام قرب الحرم، وللحضور قبل موعد الانطلاق، ولإيجاد سيارة في الطرف الآخر. وهذا سهل لشخص أو شخصين بحقائب خفيفة، أما العائلة التي معها حقائب وماء زمزم فكل تبديل للوسيلة يعني حمل كل شيء من جديد.",
          ],
          list: [
            "تحقق قبل الحجز من: المواعيد، وحد الأمتعة، وهل يُسمح بحمل ماء زمزم وكيف",
            "خطط للتنقلين: كيف تصل إلى محطة مكة، ومن يستقبلك في محطة المدينة",
          ],
        },
        {
          h: "الحافلة: الخيار الاقتصادي",
          p: [
            "تعمل حافلات بين مكة والمدينة، وهي غالبًا الخيار الأقل تكلفة، لكن الرحلة طويلة، وقد تكون نقاط الانطلاق والوصول بعيدة عن فنادقك، والمواعيد ثابتة. تأكد من الجهة المشغّلة حاليًا ونقطة الركوب في مكة ومكان النزول في المدينة قبل الاعتماد عليها.",
          ],
        },
        {
          h: "السيارة الخاصة: أبطأ على الطريق، وأبسط في المجمل",
          p: [
            "تنطلق السيارة الخاصة من فندقك في مكة، من أقرب نقطة يسمح بها دخول السيارات، وتقطع نحو 436 كم عبر طريق 15 حتى فندقك في المدينة: قرابة 4 ساعات و20 دقيقة قبل التوقفات. وهي أطول من رحلة القطار نفسها، لكن لا تبديل للوسيلة ولا موعد انطلاق ثابت، ولا حد للحقائب سوى مساحة السيارة التي تختارها: سيدان أو جمس يوكن أو هيونداي ستاريا.",
            "ويمكنكم التوقف للصلاة والراحة متى احتاجت مجموعتك، والانطلاق بعد الصلاة التي تريد حضورها بدل الالتزام بجدول. وليست الخيار الأرخص لمسافر واحد، أما للعائلة أو المجموعة فقارن عرض سعر واحدًا للسيارة بمجموع تذاكر القطار لكل الأفراد مع سيارات الأجرة في الطرفين.",
          ],
        },
        {
          h: "الاتجاه المعاكس: من المدينة إلى مكة والميقات",
          p: [
            "يمر المعتمرون المتجهون من المدينة إلى مكة بميقات ذي الحليفة، المعروف بأبيار علي، بعد مغادرة المدينة بقليل. ولا توجد لقطار الحرمين محطة عند أي ميقات، فعلى من يسافر بالقطار أن يخطط لموضع الإحرام، واسأل أهل العلم. أما السيارة الخاصة فيمكنها التوقف عند أبيار علي ليُحرم الجميع ثم تكمل إلى مكة. اذكر التوقف عند الطلب.",
          ],
        },
        {
          h: "أي خيار يناسب مجموعتك",
          p: ["طريقة بسيطة للاختيار:"],
          list: [
            "مسافر أو اثنان بحقائب خفيفة ولا يمانعان التنقل: القطار",
            "أقل تكلفة مع وقت كافٍ: الحافلة، بعد التأكد من أماكن توقفها",
            "عائلة أو كبار سن أو عدة حقائب أو ماء زمزم: سيارة خاصة من فندق إلى فندق",
            "من المدينة إلى مكة للعمرة مع التوقف عند الميقات: السيارة الخاصة تجعل التوقف سهلًا",
          ],
        },
      ],
      table: {
        h: "مقارنة القطار والحافلة والسيارة",
        head: ["الخيار", "زمن التنقل", "من فندق إلى فندق؟", "الأنسب لـ"],
        rows: [
          ["قطار الحرمين", "نحو ساعتين و45 دقيقة على متنه، مع التنقل في الطرفين", "لا: المحطتان على بعد نحو 3 كم و7 كم من المسجدين", "المسافر الخفيف الذي لا يمانع التنقل"],
          ["الحافلة بين المدن", "أطول، وبحسب الخدمة", "لا: بحسب أماكن التوقف", "أقل تكلفة ووقت مرن"],
          ["السيارة الخاصة", "نحو 4 ساعات و20 دقيقة قبل التوقفات", "نعم، حتى أقرب نقطة يسمح بها الدخول", "العائلات وكبار السن والحقائب الكثيرة والتوقف عند الميقات"],
        ],
      },
      faqs: [
        { q: "هل القطار أسرع من السيارة من مكة إلى المدينة؟", a: "على متنه نعم: نحو ساعتين و45 دقيقة مقابل نحو 4 ساعات و20 دقيقة قيادة. لكن الفارق من الباب إلى الباب أقل، لأن القطار يحتاج إلى تنقل في كل طرف." },
        { q: "كم تبعد محطتا القطار عن المسجدين؟", a: "تبعد محطة مكة نحو 3 كم عن المسجد الحرام، ومحطة المدينة نحو 7 كم عن المسجد النبوي (سعوديبيديا)." },
        { q: "هل يتوقف القطار عند الميقات في الطريق من المدينة إلى مكة؟", a: "لا. ليست للقطار محطة عند أي ميقات، فاسأل أهل العلم عن موضع الإحرام إن سافرت بالقطار. أما السيارة الخاصة فيمكنها التوقف عند أبيار علي." },
        { q: "هل يمكنني حمل ماء زمزم في القطار؟", a: "تحقق من قواعد الأمتعة الحالية لدى الخطوط الحديدية السعودية قبل السفر. وفي السيارة الخاصة لا حد سوى مساحة السيارة." },
        { q: "هل يمكنني حجز سيارة خاصة للرحلة كاملة من مكة إلى المدينة؟", a: "نعم. أرسل اسمي الفندقين والتاريخ وعدد الركاب والحقائب من صفحة التوصيل من مكة إلى المدينة لتحصل على عرض سعر." },
      ],
    },
  },
};
