import type { Locale } from "@/i18n/routing";
import type { ServicePage, Section } from "./types";

/**
 * Master brief Phase 4 (2026-11-28): upgrade existing city pages with a distance table, genuinely local sections and
 * specific FAQs. The audit found Dammam, Al Khobar, Yanbu and Tabuk thin (about 500 words, no table); Makkah, Madinah
 * and AlUla needed only the items the brief lists; Jeddah already covered all of them (hourly, port, KAEC).
 *
 * Distances: Google Maps, driving, usual traffic, no stops, read 27 and 28 Nov 2026, start and end named in each row.
 * AlUla airport figures (town about 24 km, Ashar Valley about 21 km, Hegra about 38 km) are from the brief's verified
 * fact list. No prices, opening hours or ticket rules are stated.
 */
const U = "2026-11-28";
const S = "services";
const C = `${S}/city-transport`;
const I = `${S}/intercity-transfers`;
const A = `${S}/airport-transfers`;

type L<T> = Record<Locale, T>;
type Table = { h: string; head: string[]; rows: string[][] };
type Patch = {
  table?: L<Table>;
  sections?: L<Section[]>;
  /** Sentences appended to the last paragraph of an existing section (same index in EN and AR). */
  append?: { section: number; text: L<string> }[];
  faqs?: L<{ q: string; a: string }[]>;
  related?: string[];
};

const src: L<string> = { en: "Google Maps, usual traffic, no stops, checked 28 Nov 2026", ar: "خرائط جوجل، حركة سير معتادة، دون توقف، تحقق في 28 نوفمبر 2026" };

const patches: Record<string, Patch> = {
  [`${C}/dammam`]: {
    related: [`${I}/dammam-to-jubail`, `${I}/dammam-to-bahrain`, `${C}/jubail`],
    table: {
      en: {
        h: "How far is Dammam from the airport, Al Khobar, Jubail and the causeway?",
        head: ["Route", "Distance", "Driving time"],
        rows: [
          ["King Fahd International Airport (DMM) to Dammam Corniche", "About 46.8 km", "About 35 min, via King Fahd Road"],
          ["King Fahd International Airport to Al Khobar (Al Kurnaish)", "About 58.4 km", "About 44 min"],
          ["King Fahd International Airport to the Royal Commission, Jubail", "About 100 km", "About 1 h 01 min"],
          ["Dammam Corniche to Al Khobar (Al Kurnaish)", "About 29.1 km", "About 31 min"],
          ["Dammam Corniche to the King Fahd Causeway (Saudi side)", "About 54.9 km", "About 44 min"],
          ["Source", src.en, ""],
        ],
      },
      ar: {
        h: "كم تبعد الدمام عن المطار والخبر والجبيل والجسر؟",
        head: ["المسار", "المسافة", "مدة القيادة"],
        rows: [
          ["من مطار الملك فهد الدولي إلى كورنيش الدمام", "نحو 46.8 كم", "نحو 35 دقيقة عبر طريق الملك فهد"],
          ["من مطار الملك فهد الدولي إلى الخبر (حي الكورنيش)", "نحو 58.4 كم", "نحو 44 دقيقة"],
          ["من مطار الملك فهد الدولي إلى الهيئة الملكية بالجبيل", "نحو 100 كم", "نحو ساعة ودقيقة"],
          ["من كورنيش الدمام إلى الخبر (حي الكورنيش)", "نحو 29.1 كم", "نحو 31 دقيقة"],
          ["من كورنيش الدمام إلى جسر الملك فهد (الجانب السعودي)", "نحو 54.9 كم", "نحو 44 دقيقة"],
          ["المصدر", src.ar, ""],
        ],
      },
    },
    sections: {
      en: [
        { h: "Why is the airport transfer so long?", p: ["Because King Fahd International Airport is well outside the city: about 46.8 km from the Dammam Corniche and around 35 minutes on King Fahd Road in usual traffic, and longer at peak times. Send the flight number rather than a fixed time, so the pickup follows the real landing, and for a departure allow for that drive before check-in. Arrivals and departures have their own page: [Dammam airport transfer](services/airport-transfers/dammam-airport)."] },
        { h: "Going to Jubail for work", p: ["Jubail's Royal Commission offices are about 100 km from the airport, an hour's drive, and the plants and company housing lie further on. Give the company, the gate and any pass the driver must show, because each site sets its own rules. For the road on its own, see [Dammam to Jubail](services/intercity-transfers/dammam-to-jubail); for moving around once you are there, see [Jubail city transport](services/city-transport/jubail)."] },
        { h: "Dammam, Al Khobar and Dhahran in one day", p: ["The two corniches are about 29 km apart, around half an hour, and Dhahran lies between them, so a car with a driver for the day can cover meetings in all three without you looking for taxis in between. Send the addresses in order with the meeting times, and say where the day ends."] },
      ],
      ar: [
        { h: "لماذا يطول مشوار المطار؟", p: ["لأن مطار الملك فهد الدولي بعيد عن المدينة: نحو 46.8 كم عن كورنيش الدمام، وقرابة 35 دقيقة عبر طريق الملك فهد في حركة سير معتادة، وأطول في أوقات الذروة. أرسل رقم الرحلة بدل وقت ثابت ليتبع الاستقبال وقت الهبوط الفعلي، وللمغادرة احسب هذا الطريق قبل موعد إنهاء الإجراءات. وللوصول والمغادرة صفحة خاصة: [توصيل مطار الدمام](services/airport-transfers/dammam-airport)."] },
        { h: "الذهاب إلى الجبيل للعمل", p: ["مكاتب الهيئة الملكية بالجبيل على بعد نحو 100 كم من المطار، أي ساعة بالسيارة، والمصانع وسكن الشركات أبعد من ذلك. اذكر اسم الشركة والبوابة وأي تصريح يجب أن يُظهره السائق، لأن لكل موقع قواعده. وللطريق وحده راجع [من الدمام إلى الجبيل](services/intercity-transfers/dammam-to-jubail)، وللتنقل بعد الوصول راجع [التنقل في الجبيل](services/city-transport/jubail)."] },
        { h: "الدمام والخبر والظهران في يوم واحد", p: ["بين الكورنيشين نحو 29 كم، قرابة نصف ساعة، والظهران بينهما، فسيارة مع سائق ليوم كامل تغطي اجتماعاتك في المدن الثلاث دون البحث عن سيارة أجرة بين كل موعد وآخر. أرسل العناوين مرتبة مع أوقات الاجتماعات، واذكر أين ينتهي اليوم."] },
      ],
    },
    faqs: {
      en: [
        { q: "How far is King Fahd International Airport from Dammam city?", a: "About 46.8 km to the Dammam Corniche, around 35 minutes on King Fahd Road in usual traffic (Google Maps, November 2026). Allow more at the evening peak." },
        { q: "How long is the drive from Dammam airport to Jubail?", a: "About 100 km to the Royal Commission offices in Jubail, around an hour. Plants further into the industrial city take longer; give the company and gate." },
        { q: "How far is the King Fahd Causeway from Dammam?", a: "About 54.9 km from the Dammam Corniche to the Saudi side of the causeway, around 44 minutes before any border queue." },
      ],
      ar: [
        { q: "كم يبعد مطار الملك فهد الدولي عن مدينة الدمام؟", a: "نحو 46.8 كم إلى كورنيش الدمام، قرابة 35 دقيقة عبر طريق الملك فهد في حركة سير معتادة (خرائط جوجل، نوفمبر 2026). واحسب وقتًا أطول في ذروة المساء." },
        { q: "كم تستغرق الرحلة من مطار الدمام إلى الجبيل؟", a: "نحو 100 كم إلى مكاتب الهيئة الملكية بالجبيل، قرابة ساعة. والمصانع الأبعد داخل المدينة الصناعية تأخذ وقتًا أطول؛ اذكر الشركة والبوابة." },
        { q: "كم يبعد جسر الملك فهد عن الدمام؟", a: "نحو 54.9 كم من كورنيش الدمام إلى الجانب السعودي من الجسر، قرابة 44 دقيقة قبل أي انتظار عند المنفذ." },
      ],
    },
  },

  [`${C}/al-khobar`]: {
    related: [`${I}/dammam-to-bahrain`, `${I}/dammam-to-jubail`],
    table: {
      en: {
        h: "How far is Al Khobar from the causeway, the airport, Dhahran and Jubail?",
        head: ["From Al Khobar (Al Kurnaish) to", "Distance", "Driving time"],
        rows: [
          ["King Fahd Causeway (Saudi side)", "About 29.3 km", "About 28 min"],
          ["King Fahd University of Petroleum and Minerals, Dhahran", "About 15.9 km", "About 22 min"],
          ["Dammam Corniche", "About 29.1 km", "About 31 min"],
          ["King Fahd International Airport (DMM)", "About 58.4 km", "About 44 min"],
          ["Royal Commission, Jubail", "About 120 km", "About 1 h 14 min"],
          ["Source", src.en, ""],
        ],
      },
      ar: {
        h: "كم تبعد الخبر عن الجسر والمطار والظهران والجبيل؟",
        head: ["من الخبر (حي الكورنيش) إلى", "المسافة", "مدة القيادة"],
        rows: [
          ["جسر الملك فهد (الجانب السعودي)", "نحو 29.3 كم", "نحو 28 دقيقة"],
          ["جامعة الملك فهد للبترول والمعادن، الظهران", "نحو 15.9 كم", "نحو 22 دقيقة"],
          ["كورنيش الدمام", "نحو 29.1 كم", "نحو 31 دقيقة"],
          ["مطار الملك فهد الدولي", "نحو 58.4 كم", "نحو 44 دقيقة"],
          ["الهيئة الملكية بالجبيل", "نحو 120 كم", "نحو ساعة و14 دقيقة"],
          ["المصدر", src.ar, ""],
        ],
      },
    },
    sections: {
      en: [
        { h: "Is Al Khobar closer to the Bahrain causeway than Dammam?", p: ["Yes, by about half. From Al Khobar's Corniche district the Saudi side of the King Fahd Causeway is about 29 km, under half an hour, compared with about 55 km from the Dammam Corniche. That is why many Bahrain trips start here. Passports, visas and the vehicle's permission to cross must be checked before you book; see [Dammam and Al Khobar to Bahrain](services/intercity-transfers/dammam-to-bahrain)."] },
        { h: "Meetings in Dhahran", p: ["Dhahran sits between Al Khobar and Dammam, and King Fahd University of Petroleum and Minerals is about 16 km from the Al Khobar Corniche, around 20 minutes. Company campuses in the area have their own gates and visitor rules, so give the gate and the host's name, and the driver waits where cars are allowed. See [Dhahran city transport](services/city-transport/dhahran) for the city on its own."] },
        { h: "A day trip to Jubail", p: ["From Al Khobar, Jubail's Royal Commission offices are about 120 km, around an hour and a quarter on the Dhahran–Jubail expressway. A same-day return with meetings in between makes a long day; send the meeting times and the car waits between them. The road is also covered by [Dammam to Jubail](services/intercity-transfers/dammam-to-jubail)."] },
      ],
      ar: [
        { h: "هل الخبر أقرب إلى جسر البحرين من الدمام؟", p: ["نعم، بنحو النصف. فمن حي الكورنيش في الخبر يبعد الجانب السعودي من جسر الملك فهد نحو 29 كم، أقل من نصف ساعة، مقابل نحو 55 كم من كورنيش الدمام. لذلك تبدأ رحلات كثيرة إلى البحرين من هنا. ويجب التحقق من الجوازات والتأشيرات وإذن عبور السيارة قبل الحجز؛ راجع [من الدمام والخبر إلى البحرين](services/intercity-transfers/dammam-to-bahrain)."] },
        { h: "اجتماعات في الظهران", p: ["تقع الظهران بين الخبر والدمام، وتبعد جامعة الملك فهد للبترول والمعادن نحو 16 كم عن كورنيش الخبر، قرابة 20 دقيقة. ولمجمعات الشركات في المنطقة بواباتها وقواعد زوارها، فاذكر البوابة واسم المضيف، وينتظر السائق حيث يُسمح للسيارات. وراجع [التنقل في الظهران](services/city-transport/dhahran) للمدينة وحدها."] },
        { h: "رحلة يوم إلى الجبيل", p: ["من الخبر تبعد مكاتب الهيئة الملكية بالجبيل نحو 120 كم، قرابة ساعة وربع عبر طريق الظهران الجبيل السريع. والعودة في اليوم نفسه مع اجتماعات بينهما تجعل اليوم طويلًا؛ أرسل أوقات الاجتماعات وتنتظر السيارة بينها. والطريق مغطى أيضًا في [من الدمام إلى الجبيل](services/intercity-transfers/dammam-to-jubail)."] },
      ],
    },
    faqs: {
      en: [
        { q: "How far is the Bahrain causeway from Al Khobar?", a: "About 29.3 km from Al Khobar's Corniche district to the Saudi side of the King Fahd Causeway, around 28 minutes before any border queue (Google Maps, November 2026)." },
        { q: "How long is the drive from Al Khobar to Dammam airport?", a: "About 58.4 km, around 44 minutes in usual traffic. Leave more time at the evening peak and for check-in." },
        { q: "How far is Jubail from Al Khobar?", a: "About 120 km to the Royal Commission offices, around 1 hour 14 minutes on the Dhahran–Jubail expressway." },
      ],
      ar: [
        { q: "كم يبعد جسر البحرين عن الخبر؟", a: "نحو 29.3 كم من حي الكورنيش في الخبر إلى الجانب السعودي من جسر الملك فهد، قرابة 28 دقيقة قبل أي انتظار عند المنفذ (خرائط جوجل، نوفمبر 2026)." },
        { q: "كم تستغرق الرحلة من الخبر إلى مطار الدمام؟", a: "نحو 58.4 كم، قرابة 44 دقيقة في حركة سير معتادة. واحسب وقتًا أطول في ذروة المساء ولإنهاء الإجراءات." },
        { q: "كم تبعد الجبيل عن الخبر؟", a: "نحو 120 كم إلى مكاتب الهيئة الملكية، قرابة ساعة و14 دقيقة عبر طريق الظهران الجبيل السريع." },
      ],
    },
  },

  [`${C}/yanbu`]: {
    table: {
      en: {
        h: "How far is it between Yanbu's old town, the industrial city and the nearby cities?",
        head: ["Route", "Distance", "Driving time"],
        rows: [
          ["Yanbu historic area to the Royal Commission HQ, Yanbu Industrial City", "About 20.6 km", "About 24 min"],
          ["Yanbu airport (YNB) to the historic area", "About 15.1 km", "About 20 min"],
          ["Yanbu airport (YNB) to the Royal Commission HQ", "About 31.3 km", "About 26 min"],
          ["Prophet's Mosque, Madinah, to the historic area", "About 246 km", "About 2 h 36 min"],
          ["Yanbu airport (YNB) to King Abdulaziz International Airport, Jeddah", "About 326 km", "About 3 h 01 min"],
          ["Yanbu airport (YNB) to Umluj", "About 145 km", "About 1 h 33 min"],
          ["Source", "Google Maps, usual traffic, no stops, checked 27 and 28 Nov 2026", ""],
        ],
      },
      ar: {
        h: "كم المسافة بين البلد القديمة في ينبع والمدينة الصناعية والمدن القريبة؟",
        head: ["المسار", "المسافة", "مدة القيادة"],
        rows: [
          ["من المنطقة التاريخية إلى مقر الهيئة الملكية، مدينة ينبع الصناعية", "نحو 20.6 كم", "نحو 24 دقيقة"],
          ["من مطار ينبع إلى المنطقة التاريخية", "نحو 15.1 كم", "نحو 20 دقيقة"],
          ["من مطار ينبع إلى مقر الهيئة الملكية", "نحو 31.3 كم", "نحو 26 دقيقة"],
          ["من المسجد النبوي بالمدينة إلى المنطقة التاريخية", "نحو 246 كم", "نحو 2 س 36 د"],
          ["من مطار ينبع إلى مطار الملك عبدالعزيز الدولي بجدة", "نحو 326 كم", "نحو 3 س 01 د"],
          ["من مطار ينبع إلى أملج", "نحو 145 كم", "نحو ساعة و33 دقيقة"],
          ["المصدر", "خرائط جوجل، حركة سير معتادة، دون توقف، تحقق في 27 و28 نوفمبر 2026", ""],
        ],
      },
    },
    sections: {
      en: [
        { h: "How far apart are the old town and the industrial city?", p: ["About 20.6 km by road, around 24 minutes from the historic area of Yanbu Al Bahr to the Royal Commission headquarters, and further to the plants beyond it. So a hotel in the old town and a meeting in the industrial city are not a short hop: if you have several meetings across both, a car with a driver for the day saves arranging a new ride each time. For the airport, see [Yanbu airport transfers](services/airport-transfers/yanbu-airport)."] },
      ],
      ar: [
        { h: "كم المسافة بين البلد القديمة والمدينة الصناعية؟", p: ["نحو 20.6 كم بالطريق، قرابة 24 دقيقة من المنطقة التاريخية في ينبع البحر إلى مقر الهيئة الملكية، وأبعد من ذلك إلى المصانع. فالفندق في البلد القديمة والاجتماع في المدينة الصناعية ليسا مشوارًا قصيرًا: وإن كانت لديك اجتماعات متعددة في الاثنتين فسيارة مع سائق ليوم كامل تغنيك عن ترتيب مشوار جديد كل مرة. وللمطار راجع [التوصيل من مطار ينبع](services/airport-transfers/yanbu-airport)."] },
      ],
    },
    faqs: {
      en: [
        { q: "How far is Yanbu Industrial City from the old town?", a: "About 20.6 km from the historic area to the Royal Commission headquarters, around 24 minutes by car (Google Maps, November 2026)." },
        { q: "How far is Umluj from Yanbu?", a: "About 145 km from Yanbu airport, around 1 hour 33 minutes north along the Red Sea coast. Give the resort name if you are going to the beaches." },
      ],
      ar: [
        { q: "كم تبعد مدينة ينبع الصناعية عن البلد القديمة؟", a: "نحو 20.6 كم من المنطقة التاريخية إلى مقر الهيئة الملكية، قرابة 24 دقيقة بالسيارة (خرائط جوجل، نوفمبر 2026)." },
        { q: "كم تبعد أملج عن ينبع؟", a: "نحو 145 كم من مطار ينبع، قرابة ساعة و33 دقيقة شمالًا على ساحل البحر الأحمر. اذكر اسم المنتجع إن كنت ذاهبًا إلى الشواطئ." },
      ],
    },
  },

  [`${C}/tabuk`]: {
    related: [`${I}/tabuk-to-alula`],
    table: {
      en: {
        h: "How far is Tabuk from the airport, Wadi Disah, AlUla, NEOM Bay and Madinah?",
        head: ["Route", "Distance", "Driving time"],
        rows: [
          ["Tabuk Fortress to Tabuk airport (TUU)", "About 6.8 km", "About 11 min"],
          ["Tabuk Fortress to Wadi Disah", "About 260 km", "About 3 h 12 min"],
          ["Tabuk Fortress to AlUla", "About 298 km", "About 3 h 29 min"],
          ["Tabuk Fortress to NEOM Bay Airport (NUM)", "About 173 km", "About 1 h 55 min"],
          ["Tabuk Fortress to the Prophet's Mosque, Madinah", "About 633 km", "About 6 h 51 min, through AlUla"],
          ["Tabuk airport (TUU) to Duba", "About 199 km", "About 2 h 18 min"],
          ["Tabuk airport (TUU) to Haql", "About 233 km", "About 2 h 48 min"],
          ["Source", "Google Maps, usual traffic, no stops, checked 27 and 28 Nov 2026", ""],
        ],
      },
      ar: {
        h: "كم تبعد تبوك عن المطار ووادي الديسة والعلا وخليج نيوم والمدينة؟",
        head: ["المسار", "المسافة", "مدة القيادة"],
        rows: [
          ["من قلعة تبوك إلى مطار تبوك", "نحو 6.8 كم", "نحو 11 دقيقة"],
          ["من قلعة تبوك إلى وادي الديسة", "نحو 260 كم", "نحو 3 س 12 د"],
          ["من قلعة تبوك إلى العلا", "نحو 298 كم", "نحو 3 س 29 د"],
          ["من قلعة تبوك إلى مطار خليج نيوم", "نحو 173 كم", "نحو ساعة و55 دقيقة"],
          ["من قلعة تبوك إلى المسجد النبوي بالمدينة", "نحو 633 كم", "نحو 6 س 51 د عبر العلا"],
          ["من مطار تبوك إلى ضباء", "نحو 199 كم", "نحو ساعتين و18 دقيقة"],
          ["من مطار تبوك إلى حقل", "نحو 233 كم", "نحو ساعتين و48 دقيقة"],
          ["المصدر", "خرائط جوجل، حركة سير معتادة، دون توقف، تحقق في 27 و28 نوفمبر 2026", ""],
        ],
      },
    },
    sections: {
      en: [
        { h: "Day trips and long roads from Tabuk", p: ["Distances here are what decide the plan. Wadi Disah is about 260 km from the city, more than three hours each way, so a same-day visit means leaving at first light and coming back after dark; some visitors stay nearby instead. AlUla is about 298 km and usually an overnight move, set out on [Tabuk to AlUla by car](services/intercity-transfers/tabuk-to-alula). NEOM Bay Airport is about 173 km on the coast road. Tell us which you want and the vehicle and timing are planned around the longest stretch."] },
      ],
      ar: [
        { h: "رحلات اليوم والطرق الطويلة من تبوك", p: ["المسافات هنا هي التي تحدد الخطة. فوادي الديسة على بعد نحو 260 كم من المدينة، أكثر من ثلاث ساعات في كل اتجاه، فالزيارة في اليوم نفسه تعني الانطلاق مع أول الضوء والعودة بعد الظلام، ولذلك يبيت بعض الزوار قريبًا منه. والعلا على بعد نحو 298 كم وتكون عادةً انتقالًا بمبيت، وتفاصيلها في [من تبوك إلى العلا بالسيارة](services/intercity-transfers/tabuk-to-alula). ومطار خليج نيوم على بعد نحو 173 كم عبر الطريق الساحلي. أخبرنا بما تريد وتُخطَّط السيارة والتوقيت على أساس أطول مرحلة."] },
      ],
    },
    faqs: {
      en: [
        { q: "How long does a day trip from Tabuk to Wadi Disah take?", a: "About 260 km each way, around 3 hours 12 minutes of driving in each direction, so plan a full day starting early, or stay a night near the canyon." },
        { q: "Which is closer to Tabuk city, AlUla or NEOM Bay Airport?", a: "NEOM Bay Airport, about 173 km from Tabuk Fortress. AlUla is about 298 km (Google Maps, November 2026)." },
      ],
      ar: [
        { q: "كم تستغرق رحلة يوم من تبوك إلى وادي الديسة؟", a: "نحو 260 كم في كل اتجاه، قرابة 3 ساعات و12 دقيقة قيادة ذهابًا ومثلها إيابًا، فخطط ليوم كامل يبدأ مبكرًا أو بت ليلة قرب الوادي." },
        { q: "أيهما أقرب إلى مدينة تبوك: العلا أم مطار خليج نيوم؟", a: "مطار خليج نيوم، على بعد نحو 173 كم من قلعة تبوك. أما العلا فنحو 298 كم (خرائط جوجل، نوفمبر 2026)." },
      ],
    },
  },

  [`${S}/tourism-transport/alula`]: {
    sections: {
      en: [
        { h: "A driver for the whole day, or the whole stay", p: ["AlUla's airport is about 24 km from the town, the resorts in Ashar Valley about 21 km from the airport, and Hegra about 38 km, so a stay is a series of drives between places that are far apart. Booking the same car and driver by the day, or for your whole stay, means the car waits while you visit and you do not depend on finding a ride in the evening. Say how many days, where you are staying and what is already booked."] },
        { h: "What does a two-day AlUla plan with a driver look like?", p: ["An example to adapt, not a fixed tour:"], list: [
          "Day 1: the driver meets your flight at AlUla airport and takes you to your hotel, for example in Ashar Valley; in the afternoon the Old Town, and Elephant Rock around sunset",
          "Day 2: the driver takes you to the meeting point of your booked Hegra visit; a rest at the hotel in the heat of the day; dinner in or near the Old Town",
          "Day 3 morning: hotel to the airport, or on by road to Madinah, Tabuk or Jeddah",
          "Tickets for Hegra and other controlled sites are booked separately through the official AlUla channels; RideSaudi provides the car and driver only",
        ] },
      ],
      ar: [
        { h: "سائق ليوم كامل أو للإقامة كلها", p: ["يبعد مطار العلا نحو 24 كم عن البلدة، ومنتجعات وادي عشار نحو 21 كم عن المطار، والحجر نحو 38 كم، فالإقامة سلسلة مشاوير بين أماكن متباعدة. وحجز السيارة والسائق نفسيهما باليوم أو للإقامة كلها يعني أن السيارة تنتظرك أثناء الزيارة ولا تعتمد على إيجاد سيارة في المساء. اذكر عدد الأيام ومكان إقامتك وما حجزته مسبقًا."] },
        { h: "كيف تبدو خطة يومين في العلا مع سائق؟", p: ["مثال تعدّله بحسب رحلتك، لا جولة ثابتة:"], list: [
          "اليوم الأول: يستقبلك السائق عند رحلتك في مطار العلا ويوصلك إلى فندقك، مثلًا في وادي عشار؛ وبعد الظهر البلدة القديمة، وجبل الفيل قرب الغروب",
          "اليوم الثاني: يوصلك السائق إلى نقطة اللقاء لزيارتك المحجوزة إلى الحجر؛ ثم راحة في الفندق وقت الحر؛ والعشاء في البلدة القديمة أو قربها",
          "صباح اليوم الثالث: من الفندق إلى المطار، أو برًا إلى المدينة أو تبوك أو جدة",
          "تُحجز تذاكر الحجر والمواقع المنظمة الأخرى منفصلة عبر قنوات العلا الرسمية؛ وتوفر RideSaudi السيارة والسائق فقط",
        ] },
      ],
    },
    faqs: {
      en: [{ q: "What does a two-day AlUla trip with a driver include?", a: "Usually the airport pickup, the Old Town and Elephant Rock on the first day, the drive to your booked Hegra visit on the second, and the airport or an onward road on the third morning. You choose the order; tickets are booked separately." }],
      ar: [{ q: "ماذا تشمل رحلة يومين في العلا مع سائق؟", a: "عادةً الاستقبال من المطار، والبلدة القديمة وجبل الفيل في اليوم الأول، والتوصيل إلى زيارتك المحجوزة للحجر في اليوم الثاني، ثم المطار أو طريق المغادرة صباح اليوم الثالث. أنت تختار الترتيب، وتُحجز التذاكر منفصلة." }],
    },
  },

  [`${C}/makkah`]: {
    append: [
      { section: 3, text: { en: "The same applies in Misfalah, south of the Haram, where many pilgrim hotels stand: the driver stops at the nearest point cars are allowed at that hour.", ar: "وينطبق الأمر نفسه في المسفلة جنوب الحرم، حيث فنادق كثيرة للمعتمرين: يتوقف السائق عند أقرب نقطة يُسمح للسيارات بها في تلك الساعة." } },
      { section: 4, text: { en: "Count Zamzam water as luggage: the containers are heavy and stand upright, so say how many you have when you book the trip to the airport.", ar: "واحسب ماء زمزم ضمن الحقائب: فالعبوات ثقيلة وتُحمل واقفة، فاذكر عددها حين تحجز مشوار المطار." } },
    ],
    faqs: {
      en: [{ q: "Can you collect us from a hotel in Misfalah?", a: "Yes, you can request it. As around the rest of the Haram, the pickup is at the nearest point cars may reach at that hour; give the hotel name and we confirm the meeting point." }],
      ar: [{ q: "هل تستلموننا من فندق في المسفلة؟", a: "نعم، يمكنك طلب ذلك. وكما في بقية محيط الحرم يكون الاستلام عند أقرب نقطة تصلها السيارات في تلك الساعة؛ اذكر اسم الفندق ونؤكد نقطة اللقاء." }],
    },
  },

  [`${C}/madinah`]: {
    sections: {
      en: [{ h: "A day trip to Badr", p: ["Badr, the site of the first great battle of Islam, is about 157 km from the Prophet's Mosque, around 1 hour 55 minutes by Route 60 and Route 340 (Google Maps, November 2026). A same-day visit is about four hours of driving in total, so it is best to leave early in the morning. Badr can also be a stop on the way to Yanbu or between Makkah and Madinah; see [Madinah to Yanbu](services/intercity-transfers/madinah-to-yanbu)."] }],
      ar: [{ h: "رحلة يوم إلى بدر", p: ["تقع بدر، موقع أول معركة كبرى في الإسلام، على بعد نحو 157 كم من المسجد النبوي، قرابة ساعة و55 دقيقة عبر طريق 60 وطريق 340 (خرائط جوجل، نوفمبر 2026). والزيارة في اليوم نفسه نحو أربع ساعات قيادة إجمالًا، لذلك يُفضَّل الانطلاق في الصباح الباكر. ويمكن أن تكون بدر محطة في الطريق إلى ينبع أو بين مكة والمدينة؛ راجع [من المدينة إلى ينبع](services/intercity-transfers/madinah-to-yanbu)."] }],
    },
    faqs: {
      en: [{ q: "How far is Badr from Madinah?", a: "About 157 km from the Prophet's Mosque, around 1 hour 55 minutes by car. A return day trip is about four hours of driving plus your visit." }],
      ar: [{ q: "كم تبعد بدر عن المدينة المنورة؟", a: "نحو 157 كم من المسجد النبوي، قرابة ساعة و55 دقيقة بالسيارة. والذهاب والعودة في يوم واحد نحو أربع ساعات قيادة إضافة إلى وقت الزيارة." }],
    },
  },
};

export function applyPhase4Cities(pages: ServicePage[]) {
  for (const [path, patch] of Object.entries(patches)) {
    const p = pages.find((x) => x.path === path);
    if (!p) throw new Error(`phase4-cities: unknown page ${path}`);
    for (const l of ["en", "ar"] as Locale[]) {
      const c = p.copy[l];
      for (const a of patch.append ?? []) {
        const s = c.sections[a.section];
        if (!s) throw new Error(`phase4-cities: no section ${a.section} on ${path}/${l}`);
        s.p = [...s.p.slice(0, -1), `${s.p[s.p.length - 1]} ${a.text[l]}`];
      }
      const added = patch.sections?.[l] ?? [];
      if (patch.table) {
        // Shown after the first new section, or after the last existing one when no section is added.
        const after = added.length ? c.sections.length : Math.max(0, c.sections.length - 1);
        if (!c.table) c.table = patch.table[l];
        else c.tables = [...(c.tables ?? []), { after, ...patch.table[l] }];
      }
      c.sections = [...c.sections, ...added];
      c.faqs = [...c.faqs, ...(patch.faqs?.[l] ?? [])];
    }
    for (const r of patch.related ?? []) if (!p.related.includes(r)) p.related.push(r);
    p.updated = U;
  }
}
