import type { Locale } from "@/i18n/routing";
import type { Copy, Section, ServicePage } from "../types";
import { CARS, CRANE, EXCAVATOR, FLATBED, FORKLIFT, HEAVY, HT, HYDRAULIC, LOADER, LOWBED, OVERSIZED, RELOCATION, SATHA, TRUCKS } from "./shared";

/**
 * Recovery + lowbed growth pass, 2026-11-24. Keyword basis: Google Saudi Arabia autocomplete (EN + AR) and competitor
 * pages, see docs/heavy-transport/RECOVERY_LOWBED_REPORT.md. One primary intent per page:
 *  - English searchers say "recovery truck", "tow truck" and "car towing"; the old titles only said "satha".
 *  - Arabic searchers say سطحة هيدروليك + city, سطحة بين المدن, سطحة مغلقة, لوبد للإيجار + city.
 * No prices, response times, fleet numbers, licences, insurance or 24/7 claims.
 */
const U = "2026-11-24";
type Patch = Partial<Pick<Copy, "nav" | "title" | "description" | "h1" | "answer" | "summary" | "faqs">> & { sections?: Section[]; table?: NonNullable<Copy["tables"]>[number] };
type Entry = { related?: string[]; en: Patch; ar: Patch };

const patches: Record<string, Entry> = {
  [HT]: {
    en: {
      title: "Heavy Transport & Recovery Trucks Saudi Arabia",
      description: "Recovery trucks for cars and trucks, lowbed and flatbed haulage, and excavator, loader, forklift and crane transport across Saudi Arabia. Quoted per load.",
      h1: "Heavy Transport, Recovery Trucks and Lowbed Haulage in Saudi Arabia",
      sections: [
        {
          h: "What is the difference between a recovery truck and a lowbed?",
          p: [
            "A recovery truck rescues one vehicle that cannot drive: it pulls a car onto its own deck and carries it. A lowbed is a trailer behind a tractor head, with a dropped deck for heavy or tall machines, and it is planned by weight, dimensions and route. A broken-down car belongs on the first, an excavator on the second, and a dead tractor head or bus usually on the second as well.",
            "Follow the link that matches your load: [recovery truck for cars and SUVs](services/recovery-heavy-transport/satha-car-recovery), [hydraulic satha for low cars](services/recovery-heavy-transport/satha-car-recovery/hydraulic-satha), [truck and heavy vehicle recovery](services/recovery-heavy-transport/truck-recovery), [lowbed transport](services/recovery-heavy-transport/lowbed-transport), [heavy equipment transport](services/recovery-heavy-transport/heavy-equipment-transport) or [oversized loads](services/recovery-heavy-transport/oversized-load-transport).",
          ],
        },
      ],
      faqs: [{ q: "What information do I need to book a recovery truck or a lowbed?", a: "For a vehicle: its type, what is wrong, the map pin and the destination. For a machine: its model or weight, dimensions if known, both sites and the date. Photos help in both cases." }],
    },
    ar: {
      title: "نقل ثقيل ولوبد وسطحات نقل سيارات وشاحنات",
      description: "سطحة لنقل السيارات، ونقل وسحب الشاحنات المعطلة، ولوبد وتريلا سطحة لنقل الحفارات والشيولات والكرينات بين مدن السعودية. أرسل تفاصيل حمولتك لعرض سعر.",
      sections: [
        {
          h: "ما الفرق بين السطحة واللوبد ومتى تطلب كلًا منهما؟",
          p: [
            "السطحة تنقذ مركبة واحدة لا تمشي: تسحبها إلى صندوقها وتحملها. أما اللوبد فمقطورة خلف رأس تريلا بأرضية منخفضة للمعدات الثقيلة والعالية، وتُخطط رحلته حسب الوزن والمقاسات والطريق. السيارة المعطلة مكانها السطحة، والحفار مكانه اللوبد، ورأس التريلا أو الباص المعطل يذهب غالبًا على لوبد أيضًا.",
            "اختر ما يناسب حمولتك: [سطحة نقل السيارات](services/recovery-heavy-transport/satha-car-recovery)، أو [سطحة هيدروليك للسيارات المنخفضة](services/recovery-heavy-transport/satha-car-recovery/hydraulic-satha)، أو [سحب ونقل الشاحنات](services/recovery-heavy-transport/truck-recovery)، أو [نقل باللوبد](services/recovery-heavy-transport/lowbed-transport)، أو [نقل المعدات الثقيلة](services/recovery-heavy-transport/heavy-equipment-transport)، أو [الحمولات الاستثنائية](services/recovery-heavy-transport/oversized-load-transport).",
          ],
        },
      ],
      faqs: [{ q: "ما المعلومات المطلوبة لحجز سطحة أو لوبد؟", a: "للمركبة: نوعها والعطل والموقع والوجهة. وللمعدة: الموديل أو الوزن، والمقاسات إن عُرفت، والموقعان والتاريخ. والصور تفيد في الحالتين." }],
    },
  },

  [SATHA]: {
    related: [TRUCKS],
    en: {
      nav: "Car Recovery & Satha",
      title: "Recovery Truck & Car Towing in Saudi Arabia",
      description: "Recovery truck (satha) for broken-down and accident cars and SUVs in Riyadh, Jeddah, Dammam and between cities. Send a map pin; price confirmed first.",
      h1: "Recovery Truck and Satha Car Towing in Saudi Arabia",
      answer: "A recovery truck, called satha in Saudi Arabia, is a flatbed tow truck that lifts a vehicle onto its deck so all four wheels travel off the road. RideSaudi arranges recovery trucks for broken-down, accident-damaged and non-running cars and SUVs in Riyadh, Jeddah, Dammam and between Saudi cities. Send your map pin and the car details; the price is confirmed before the truck is sent.",
      summary: "Flatbed recovery truck (satha) for cars and SUVs that will not start, have crashed or must not be driven, in the city or between cities.",
      table: {
        after: 2, h: "Which recovery truck does your vehicle need?", head: ["Vehicle", "Truck to ask for"],
        rows: [["Sedan, hatchback, SUV or empty pickup", "Ordinary satha"], ["Sports, lowered or luxury car", "Hydraulic or full-down satha"], ["Car stuck in a low basement", "Wheel-lift tow truck to the entrance, then a satha"], ["Dyna, truck, tractor head or bus", "Truck recovery, usually a lowbed"], ["Excavator, loader or forklift", "Lowbed or flatbed trailer, not a car satha"]],
      },
      sections: [
        {
          h: "How much does a recovery truck cost in Saudi Arabia?",
          p: [
            "There is no single tariff. The price is built from how far the truck travels to reach you, the distance to the destination, the type of truck, the condition of the car and how easy it is to reach. A rolling sedan on an open street is the simplest job; a car with a locked wheel in a basement, or a city-to-city trip at short notice, is the most involved.",
            "To lower the cost, give the exact pin, say honestly whether the wheels turn, keep the time flexible if the car is safe where it is, and for long distances compare with [planned car transport between cities](services/recovery-heavy-transport/car-transport-between-cities).",
          ],
        },
        {
          h: "Choose your city or vehicle type",
          p: ["Local pages cover districts, highways and workshop areas: [tow truck in Riyadh](services/recovery-heavy-transport/satha-car-recovery/riyadh), [tow truck in Jeddah](services/recovery-heavy-transport/satha-car-recovery/jeddah) and [tow truck in Dammam and Al Khobar](services/recovery-heavy-transport/satha-car-recovery/dammam). Low and high-value cars have their own page, [hydraulic recovery truck](services/recovery-heavy-transport/satha-car-recovery/hydraulic-satha); trucks and buses go to [heavy vehicle recovery](services/recovery-heavy-transport/truck-recovery)."],
        },
      ],
      faqs: [
        { q: "What is a recovery truck?", a: "A truck that collects a vehicle which cannot or should not be driven. In Saudi Arabia it is usually a satha: a flatbed with a tilting or sliding deck and a winch." },
        { q: "Can a recovery truck carry a large SUV or pickup?", a: "Usually yes, if the truck's deck and weight rating suit it. Give the model and say whether a pickup is empty or loaded." },
        { q: "Do you offer vehicle recovery for companies?", a: "Yes. Fleets, rental companies, dealers and workshops can send several vehicles in one request and receive a quote for each or for the group." },
      ],
    },
    ar: {
      title: "سطحة وونش سحب سيارات في السعودية",
      description: "سطحة لنقل وسحب السيارات المعطلة والمصدومة في الرياض وجدة والدمام وبين المدن، وهيدروليك عند الطلب. أرسل موقعك ونوع السيارة ويصلك السعر أولًا.",
      h1: "سطحة لنقل وسحب السيارات المعطلة والمصدومة في السعودية",
      table: {
        after: 2, h: "أي سطحة تناسب مركبتك؟", head: ["المركبة", "اطلب"],
        rows: [["سدان أو جيب أو ونيت فاضي", "سطحة عادية"], ["سيارة رياضية أو منزّلة أو فاخرة", "سطحة هيدروليك أو فل داون"], ["سيارة في قبو منخفض", "ونش سحب إلى المدخل ثم سطحة"], ["دينا أو شاحنة أو رأس تريلا أو باص", "سحب شاحنات، وغالبًا لوبد"], ["حفار أو شيول أو رافعة شوكية", "لوبد أو تريلا سطحة وليس سطحة سيارات"]],
      },
      sections: [
        {
          h: "كم سعر السطحة في السعودية؟",
          p: [
            "لا توجد تسعيرة واحدة. السعر يتكون من مسافة السطحة حتى تصل إليك، والمسافة إلى الوجهة، ونوع السطحة، وحالة السيارة، وسهولة الوصول إليها. أبسط مشوار سيارة تتدحرج في شارع مفتوح، وأصعبه سيارة كفرها ماسك في قبو أو مشوار بين مدينتين على عجل.",
            "لتخفيف التكلفة أرسل الموقع بدقة، ووضّح هل الكفرات تدور، واترك الوقت مرنًا إذا كانت السيارة في مكان آمن، وقارن في المسافات الطويلة مع [سطحة بين المدن بموعد مسبق](services/recovery-heavy-transport/car-transport-between-cities).",
          ],
        },
        {
          h: "اختر مدينتك أو نوع مركبتك",
          p: ["صفحات المدن تشرح الأحياء والطرق ومناطق الورش: [سطحة الرياض](services/recovery-heavy-transport/satha-car-recovery/riyadh) و[سطحة جدة](services/recovery-heavy-transport/satha-car-recovery/jeddah) و[سطحة الدمام والخبر](services/recovery-heavy-transport/satha-car-recovery/dammam). وللسيارات المنخفضة والثمينة صفحة [سطحة هيدروليك](services/recovery-heavy-transport/satha-car-recovery/hydraulic-satha)، وللشاحنات والباصات صفحة [سحب ونقل الشاحنات](services/recovery-heavy-transport/truck-recovery)."],
        },
      ],
      faqs: [
        { q: "هل السطحة وونش السحب شيء واحد؟", a: "لا. السطحة تحمل السيارة كاملة على صندوقها، أما ونش السحب فيرفع عجلتين وتبقى عجلتان على الطريق. السطحة أسلم لأغلب السيارات." },
        { q: "هل تنقل السطحة جيب كبير أو ونيت؟", a: "غالبًا نعم إذا ناسب صندوق السطحة ووزنها. اذكر الموديل وهل الونيت فاضي أم محمّل." },
        { q: "هل توفرون سطحات للشركات والمعارض؟", a: "نعم. شركات التأجير والأساطيل والمعارض والورش ترسل عدة سيارات في طلب واحد ويصلها السعر لكل سيارة أو للمجموعة." },
      ],
    },
  },

  [`${SATHA}/riyadh`]: {
    related: [HYDRAULIC],
    en: {
      title: "Satha Riyadh: Tow Truck & Car Recovery",
      h1: "Satha and Tow Truck in Riyadh: Car Recovery and Towing",
      sections: [{ h: "Which satha to ask for in Riyadh", p: ["Villas and wide streets in the north suit an ordinary satha. Basement parking in towers around Olaya and the financial district is the hard case: measure the entrance and ask for a wheel-lift to bring the car up. For low cars in any district choose a [full-down hydraulic satha](services/recovery-heavy-transport/satha-car-recovery/hydraulic-satha); for a dyna or tractor head use [truck recovery](services/recovery-heavy-transport/truck-recovery); and for machines see [lowbed transport in Riyadh](services/recovery-heavy-transport/heavy-equipment-transport/riyadh)."] }],
      faqs: [{ q: "What decides the satha price in Riyadh?", a: "The distance between districts matters most in a city this wide, then the type of satha, access and the time. Send both pins and you get one price before it is sent." }],
    },
    ar: {
      title: "سطحة الرياض عادية وهيدروليك لنقل السيارات",
      sections: [{ h: "أي سطحة تطلب في الرياض", p: ["الشوارع الواسعة والفلل في شمال الرياض تكفيها سطحة عادية. أما أقبية الأبراج حول العليا والمركز المالي فهي الأصعب: قِس ارتفاع المدخل واطلب ونشًا يُخرج السيارة أولًا. وللسيارات المنخفضة في أي حي اطلب [سطحة هيدروليك فل داون](services/recovery-heavy-transport/satha-car-recovery/hydraulic-satha)، وللدينا ورأس التريلا [سحب الشاحنات](services/recovery-heavy-transport/truck-recovery)، وللمعدات [لوبد الرياض](services/recovery-heavy-transport/heavy-equipment-transport/riyadh)."] }],
      faqs: [{ q: "كم سعر السطحة داخل الرياض؟", a: "المسافة بين الأحياء هي الأهم في مدينة بهذا الاتساع، ثم نوع السطحة وسهولة الوصول والوقت. أرسل الموقعين ويصلك سعر واحد قبل إرسال السطحة." }],
    },
  },
  [`${SATHA}/jeddah`]: {
    related: [HYDRAULIC],
    en: {
      title: "Satha Jeddah: Tow Truck & Car Recovery",
      h1: "Satha and Tow Truck in Jeddah: Car Recovery and Towing",
      sections: [{ h: "Port cars, city breakdowns and low cars", p: ["A car leaving the port without plates or a battery needs its release papers ready and an ordinary satha; a breakdown in the old central streets needs a short truck and a precise pin. For coupes and lowered cars ask for a [hydraulic satha](services/recovery-heavy-transport/satha-car-recovery/hydraulic-satha). Trucks and buses are handled as [heavy vehicle recovery](services/recovery-heavy-transport/truck-recovery), and machinery from the port as [lowbed transport in Jeddah](services/recovery-heavy-transport/heavy-equipment-transport/jeddah)."] }],
      faqs: [{ q: "What does a tow truck in Jeddah charge for?", a: "For reaching the car, the trip to the destination, and any extra work such as a locked wheel or port waiting. All of it is in one quote that you accept first." }],
    },
    ar: {
      title: "سطحة جدة عادية وهيدروليك لنقل السيارات",
      sections: [{ h: "سيارات الميناء وأعطال المدينة والسيارات المنخفضة", p: ["السيارة الخارجة من الميناء بلا لوحات أو بطارية تحتاج أوراق الفسح جاهزة وسطحة عادية، والعطل في شوارع وسط جدة القديمة يحتاج شاحنة قصيرة وموقعًا دقيقًا. وللكوبيه والسيارات المنزّلة اطلب [سطحة هيدروليك](services/recovery-heavy-transport/satha-car-recovery/hydraulic-satha). أما الشاحنات والباصات فضمن [سحب ونقل الشاحنات](services/recovery-heavy-transport/truck-recovery)، ومعدات الميناء ضمن [لوبد جدة](services/recovery-heavy-transport/heavy-equipment-transport/jeddah)."] }],
      faqs: [{ q: "ماذا يشمل سعر السطحة في جدة؟", a: "وصول السطحة إلى السيارة، والمشوار إلى الوجهة، وأي عمل إضافي مثل كفر ماسك أو انتظار الميناء. كله في عرض سعر واحد توافق عليه أولًا." }],
    },
  },
  [`${SATHA}/dammam`]: {
    related: [HYDRAULIC],
    en: {
      title: "Tow Truck Dammam & Al Khobar: Satha Recovery",
      h1: "Satha and Tow Truck in Dammam, Al Khobar and the Eastern Province",
      sections: [{ h: "Short metro trips and the Jubail run", p: ["Dammam, Al Khobar and Dhahran sit close together, so most trips between them are short. Jubail and Al Ahsa are separate highway runs, and a car at an industrial gate also needs a pass for the truck. Ask for a [hydraulic recovery truck](services/recovery-heavy-transport/satha-car-recovery/hydraulic-satha) for low cars, [truck recovery](services/recovery-heavy-transport/truck-recovery) for commercial vehicles, and [lowbed transport in Dammam and Jubail](services/recovery-heavy-transport/heavy-equipment-transport/dammam) for equipment."] }],
      faqs: [{ q: "How is a tow truck priced between Dammam and Al Khobar?", a: "By both map pins, the type of satha and the car's condition. A metro trip and a Jubail or Al Ahsa trip are different jobs, so send the exact places." }],
    },
    ar: {
      title: "سطحة الدمام والخبر عادية وهيدروليك",
      sections: [{ h: "مشاوير الحاضرة ومشوار الجبيل", p: ["الدمام والخبر والظهران متقاربة، فأغلب المشاوير بينها قصيرة. أما الجبيل والأحساء فمشاوير طريق سريع مستقلة، والسيارة عند بوابة صناعية تحتاج تصريح دخول للسطحة. اطلب [سطحة هيدروليك](services/recovery-heavy-transport/satha-car-recovery/hydraulic-satha) للسيارات المنخفضة، و[سحب شاحنات](services/recovery-heavy-transport/truck-recovery) للمركبات التجارية، و[لوبد الدمام والجبيل](services/recovery-heavy-transport/heavy-equipment-transport/dammam) للمعدات."] }],
      faqs: [{ q: "كيف يُسعَّر مشوار السطحة بين الدمام والخبر؟", a: "حسب موقعي الاستلام والتسليم ونوع السطحة وحالة السيارة. مشوار الحاضرة يختلف عن مشوار الجبيل أو الأحساء، فأرسل الأماكن بدقة." }],
    },
  },

  [CARS]: {
    related: [HYDRAULIC],
    en: {
      sections: [{ h: "What decides the cost of intercity car transport", p: ["Distance is only the start. A busy corridor such as Riyadh to Jeddah offers shared space; a quiet one may need a truck of its own. Enclosed carriage, a non-running car, a [hydraulic deck](services/recovery-heavy-transport/satha-car-recovery/hydraulic-satha) and a fixed delivery day all add to the quote, while a flexible pickup window reduces it. For a car stranded on the road today use [car recovery](services/recovery-heavy-transport/satha-car-recovery) instead."] }],
      faqs: [{ q: "How much does it cost to ship a car between Saudi cities?", a: "It is quoted per car from the two cities, open or enclosed carriage, whether the car runs and how flexible the date is. Send those four details for a figure." }],
    },
    ar: {
      title: "سطحة بين المدن لنقل السيارات مغلقة ومكشوفة",
      description: "سطحة بين المدن لنقل السيارات في السعودية: الرياض وجدة والدمام وغيرها، مكشوفة أو مغلقة، للسيارة الشغالة أو المعطلة. اطلب عرض سعر لسيارتك.",
      sections: [{ h: "ما الذي يحدد سعر السطحة بين المدن", p: ["المسافة هي البداية فقط. المسار المزدحم مثل الرياض وجدة تتوفر فيه ناقلات مشتركة، والمسار الهادئ قد يحتاج سطحة كاملة. السطحة المغلقة، والسيارة المعطلة، و[الصندوق الهيدروليك](services/recovery-heavy-transport/satha-car-recovery/hydraulic-satha)، وتحديد يوم التسليم، كلها ترفع السعر، والموعد المرن يخفضه. وإذا كانت السيارة متعطلة الآن في الطريق فاطلب [سطحة نقل سيارات](services/recovery-heavy-transport/satha-car-recovery)."] }],
      faqs: [{ q: "كم سعر سطحة بين المدن؟", a: "يُسعَّر لكل سيارة حسب المدينتين، ومكشوفة أم مغلقة، وهل السيارة تعمل، ومرونة الموعد. أرسل هذه الأربعة ويصلك السعر." }],
    },
  },

  [LOWBED]: {
    related: [TRUCKS],
    en: {
      title: "Lowbed Transport & Lowbed Rental Saudi Arabia",
      description: "Lowbed (low loader) transport for excavators, loaders, dozers and cranes across Saudi Arabia. Hired per move with driver; cost factors and quote checklist.",
      h1: "Lowbed and Low Loader Transport in Saudi Arabia",
      sections: [
        {
          h: "How much does lowbed transportation cost in Saudi Arabia?",
          p: [
            "Each lowbed move is priced on its own, because two machines of the same type can need different trailers. Six things move the figure: the machine's weight, its height and width when loaded, the distance and whether the trailer returns empty, how it gets on and off, any permit or escort, and waiting time at gates and sites.",
            "The weight class sets the trailer, so a correct model number prevents most price changes later. Two or three machines on the same road, or a flexible day, usually bring the cost per machine down.",
          ],
        },
        {
          h: "Lowbed rental: by the move or by the day?",
          p: ["People search for lowbed rental when they mean a truck, trailer and driver for one job, and that is how RideSaudi arranges it: per move, with a quote that names the trailer. A long project with many moves can be quoted as a list. A bare trailer without a tractor head and driver is not offered. Start from your city: [lowbed in Riyadh](services/recovery-heavy-transport/heavy-equipment-transport/riyadh), [lowbed in Jeddah](services/recovery-heavy-transport/heavy-equipment-transport/jeddah), [lowbed in Dammam and Jubail](services/recovery-heavy-transport/heavy-equipment-transport/dammam)."],
        },
        {
          h: "What travels on a lowbed",
          p: ["Most loads are machines: [excavators](services/recovery-heavy-transport/excavator-transport), [wheel loaders](services/recovery-heavy-transport/wheel-loader-transport), [cranes](services/recovery-heavy-transport/crane-transport), bulldozers and rollers. Broken-down [trucks and buses](services/recovery-heavy-transport/truck-recovery) are carried the same way. If the load is wider, taller or longer than the normal limits it becomes an [oversized load](services/recovery-heavy-transport/oversized-load-transport) with its own planning."],
        },
      ],
      faqs: [
        { q: "What should I send to get a lowbed price?", a: "The machine's model or weight, its transport size if known, both locations, how it loads and the date. The price for that move comes back before anything is booked." },
        { q: "Is a low loader the same as a lowbed?", a: "Yes. Low loader, lowbed and lowboy are names for the same family of dropped-deck trailers; Saudi sites say lowbed (لوبد)." },
      ],
      table: { after: 4, h: "What changes the price of a lowbed move", head: ["Factor", "Lower cost", "Higher cost"], rows: [["Weight and size", "Fits a standard lowbed", "Needs extra axles, permit or escort"], ["Distance", "Busy route with return work", "Remote site, empty return"], ["Loading", "Machine drives on by itself", "Winch or crane needed"], ["Site access", "Firm ground, gate pass ready", "Soft sand, long waiting"], ["Date", "Flexible, several machines together", "Fixed hour at short notice"]] },
    },
    ar: {
      title: "لوبد للإيجار ونقل معدات باللوبد في السعودية",
      description: "لوبد مع رأس وسائق لنقل الحفارات والشيولات والدركترات والكرينات بين مدن السعودية، يُسعَّر لكل نقلة. ما يحدد السعر وما ترسله لعرض سعر اللوبد.",
      h1: "لوبد لنقل المعدات الثقيلة في السعودية",
      sections: [
        {
          h: "كم سعر اللوبد في السعودية؟",
          p: [
            "كل نقلة تُسعَّر وحدها، فمعدتان من النوع نفسه قد تحتاجان لوبدين مختلفين. ستة أمور تغيّر السعر: وزن المعدة، وارتفاعها وعرضها بعد التحميل، والمسافة وهل يرجع اللوبد فاضيًا، وطريقة الصعود والنزول، وأي تصريح أو مرافقة، والانتظار عند البوابات والمواقع.",
            "فئة الوزن تحدد نوع اللوبد، ورقم الموديل الصحيح يمنع أغلب التغيرات لاحقًا. ونقل معدتين أو ثلاث على الطريق نفسه، أو ترك اليوم مرنًا، يخفض تكلفة المعدة الواحدة غالبًا.",
          ],
        },
        {
          h: "لوبد للإيجار: بالنقلة أم باليوم؟",
          p: ["من يبحث عن لوبد للإيجار يقصد غالبًا رأسًا ومقطورة وسائقًا لمهمة واحدة، وهكذا ترتبه RideSaudi: بالنقلة، مع عرض سعر يذكر نوع اللوبد. والمشروع الذي فيه نقلات كثيرة يُسعَّر كقائمة. ولا نؤجر مقطورة وحدها بلا رأس وسائق. ابدأ من مدينتك: [لوبد الرياض](services/recovery-heavy-transport/heavy-equipment-transport/riyadh) أو [لوبد جدة](services/recovery-heavy-transport/heavy-equipment-transport/jeddah) أو [لوبد الدمام والجبيل](services/recovery-heavy-transport/heavy-equipment-transport/dammam)."],
        },
        {
          h: "ماذا يُنقل على اللوبد",
          p: ["أغلب الحمولات معدات: [حفارات وبوكلينات](services/recovery-heavy-transport/excavator-transport) و[شيولات](services/recovery-heavy-transport/wheel-loader-transport) و[كرينات](services/recovery-heavy-transport/crane-transport) ودركترات وحدلات. و[الشاحنات والباصات المعطلة](services/recovery-heavy-transport/truck-recovery) تُحمل بالطريقة نفسها. وإذا تجاوزت الحمولة العرض أو الارتفاع أو الطول المعتاد صارت [حمولة استثنائية](services/recovery-heavy-transport/oversized-load-transport) لها تخطيطها."],
        },
      ],
      faqs: [
        { q: "ماذا أرسل لأعرف سعر نقلة لوبد؟", a: "موديل المعدة أو وزنها، ومقاساتها إن عُرفت، والموقعين وطريقة التحميل والتاريخ. ويصلك سعر هذه النقلة قبل أي حجز." },
        { q: "ما الفرق بين لوبد وسطحة لوبد ولوبوي؟", a: "كلها أسماء لعائلة واحدة من المقطورات ذات الأرضية المنخفضة. المهم في الطلب وزن المعدة ومقاساتها لا الاسم." },
      ],
      table: { after: 4, h: "ما الذي يغيّر سعر نقلة اللوبد", head: ["العامل", "تكلفة أقل", "تكلفة أعلى"], rows: [["الوزن والمقاس", "يناسب لوبد عادي", "يحتاج محاور أكثر أو تصريحًا أو مرافقة"], ["المسافة", "طريق مطلوب مع حمولة رجوع", "موقع بعيد ورجوع فاضي"], ["التحميل", "المعدة تصعد بنفسها", "تحتاج ونشًا أو كرينًا"], ["دخول الموقع", "أرض صلبة وتصريح جاهز", "رمل ناعم وانتظار طويل"], ["الموعد", "مرن مع عدة معدات", "ساعة محددة وعلى عجل"]] },
    },
  },

  [HEAVY]: {
    related: [TRUCKS],
    en: {
      description: "Heavy machinery transport across Saudi Arabia: excavators, bulldozers, shuwel, graders, rollers and lifts matched to lowbed or flatbed, inside or between cities.",
      sections: [
        {
          h: "Bulldozer transport: blade, tracks and weight",
          p: ["A bulldozer is short but dense and wide, so it nearly always needs a lowbed. Measure the blade at its widest point, because that, not the tracks, sets the width on the road; on larger dozers the blade is taken off and carried beside the machine. Lower the ripper and blade to the deck, clean the tracks and chain the frame at its tie-down points. For the trailer itself see [lowbed and low loader transport](services/recovery-heavy-transport/lowbed-transport)."],
        },
        {
          h: "Moving machinery between Saudi cities",
          p: ["Machines travel between regions for many reasons: plant from port to inland sites, rental fleets between branches, and equipment leaving a finished project. Between cities the plan adds three things to a local move: the limits and permits for the whole route, a place for the truck to stop, and someone to receive the machine. Local access is covered for [Riyadh](services/recovery-heavy-transport/heavy-equipment-transport/riyadh), [Jeddah and the Red Sea coast](services/recovery-heavy-transport/heavy-equipment-transport/jeddah), and [Dammam and Jubail](services/recovery-heavy-transport/heavy-equipment-transport/dammam); for single types see [excavator transport](services/recovery-heavy-transport/excavator-transport), [shuwel transport](services/recovery-heavy-transport/wheel-loader-transport) and [forklift transport](services/recovery-heavy-transport/forklift-transport)."],
        },
      ],
      faqs: [
        { q: "Can heavy machinery be transported between Saudi cities?", a: "Yes. Machines move between cities on lowbed or flatbed trailers. The quote covers the route, any permit for size or weight, and the loading and unloading method at both ends." },
        { q: "How is heavy equipment transport priced?", a: "Per load: the machine's weight and transport size choose the trailer, then distance, loading method, permits and site conditions set the price. Several machines can be quoted together." },
      ],
    },
    ar: {
      sections: [
        {
          h: "نقل الدركتر (البلدوزر): الشفرة والجنزير والوزن",
          p: ["الدركتر قصير لكنه ثقيل وعريض، فيحتاج لوبد في الغالب. قِس الشفرة عند أعرض نقطة لأنها هي التي تحدد العرض على الطريق وليس الجنزير، وفي الدركترات الكبيرة تُفك الشفرة وتُحمل بجانبه. أنزل الريبر والشفرة على الأرضية، ونظف الجنزير، واربط الهيكل من نقاط الربط. وعن المقطورة نفسها راجع [لوبد نقل المعدات](services/recovery-heavy-transport/lowbed-transport)."],
        },
        {
          h: "نقل المعدات بين مدن السعودية",
          p: ["تتنقل المعدات بين المناطق لأسباب كثيرة: من الموانئ إلى المواقع، وبين فروع التأجير، ومن مشروع انتهى إلى آخر. والنقل بين المدن يضيف ثلاثة أمور على النقل المحلي: حدود الطريق وتصاريحه كاملًا، ومكان توقف الشاحنة، وشخص يستلم المعدة. وتجد تفاصيل الدخول في صفحات [الرياض](services/recovery-heavy-transport/heavy-equipment-transport/riyadh) و[جدة وساحل البحر الأحمر](services/recovery-heavy-transport/heavy-equipment-transport/jeddah) و[الدمام والجبيل](services/recovery-heavy-transport/heavy-equipment-transport/dammam)، وحسب النوع في [نقل الحفارات](services/recovery-heavy-transport/excavator-transport) و[نقل الشيولات](services/recovery-heavy-transport/wheel-loader-transport) و[نقل الرافعات الشوكية](services/recovery-heavy-transport/forklift-transport)."],
        },
      ],
      faqs: [
        { q: "هل يمكن نقل المعدات الثقيلة بين مدن السعودية؟", a: "نعم، على لوبد أو تريلا سطحة. يغطي عرض السعر الطريق وأي تصريح للمقاس أو الوزن وطريقة التحميل والتنزيل عند الطرفين." },
        { q: "كيف يُحسب سعر نقل المعدات الثقيلة؟", a: "لكل حمولة: الوزن والمقاس يحددان التريلا، ثم المسافة وطريقة التحميل والتصاريح وحالة الموقع. ويمكن تسعير عدة معدات معًا." },
      ],
    },
  },

  [`${HEAVY}/riyadh`]: {
    related: [TRUCKS],
    en: { faqs: [{ q: "How do I get a lowbed price in Riyadh?", a: "Send the machine model, the pickup yard or site, the destination and the date. The quote names the trailer and includes the timing allowed for trucks on your Riyadh roads." }] },
    ar: { title: "لوبد الرياض للإيجار ونقل معدات ثقيلة", faqs: [{ q: "كيف أعرف سعر لوبد في الرياض؟", a: "أرسل موديل المعدة وموقع الاستلام والوجهة والتاريخ. عرض السعر يذكر نوع اللوبد والأوقات المسموحة للشاحنات على مسارك في الرياض." }] },
  },
  [`${HEAVY}/jeddah`]: {
    related: [TRUCKS],
    en: { faqs: [{ q: "How do I get a lowbed price in Jeddah?", a: "Send the machine model, whether it is at the port or a yard, the destination and the release date. Port gate times and release papers are planned into the quote." }] },
    ar: { title: "لوبد جدة للإيجار ونقل معدات ثقيلة", faqs: [{ q: "كيف أعرف سعر لوبد في جدة؟", a: "أرسل موديل المعدة وهل هي في الميناء أو حوش، والوجهة وتاريخ الفسح. ندخل أوقات بوابة الميناء وأوراق الفسح في عرض السعر." }] },
  },
  [`${HEAVY}/dammam`]: {
    related: [TRUCKS],
    en: { title: "Lowbed Dammam & Jubail Equipment Transport", faqs: [{ q: "How do I get a lowbed price in Dammam or Jubail?", a: "Send the machine model, the plant, port or yard at each end, the gate pass rules and the date. Site induction and waiting are part of the plan." }] },
    ar: { title: "لوبد الدمام والجبيل ونقل معدات ثقيلة", faqs: [{ q: "كيف أعرف سعر لوبد في الدمام أو الجبيل؟", a: "أرسل موديل المعدة والمصنع أو الميناء أو الحوش عند كل طرف، وشروط تصريح الدخول والتاريخ. تعريف السلامة والانتظار جزء من الخطة." }] },
  },

  [EXCAVATOR]: {
    en: {
      title: "Excavator Transport by Lowbed in Saudi Arabia",
      sections: [{ h: "Can a lowbed transport an excavator?", p: ["Yes, and for mid-size and large crawler excavators it is the normal choice: the low deck keeps the folded boom under height limits and spreads the weight over the axles. A mini excavator rarely needs one and can go by [flatbed trailer](services/recovery-heavy-transport/flatbed-trailer-transport). Compare trailers on the [lowbed transport](services/recovery-heavy-transport/lowbed-transport) page, or move it with the rest of your fleet as [heavy equipment transport](services/recovery-heavy-transport/heavy-equipment-transport)."] }],
      faqs: [{ q: "What does it cost to transport an excavator?", a: "The weight class, folded height, distance and loading method decide it, plus any permit. Send the model and both sites and you receive a price before booking." }],
    },
    ar: {
      title: "نقل حفارات وبوكلينات باللوبد في السعودية",
      sections: [{ h: "هل ينقل اللوبد الحفار؟", p: ["نعم، وهو الخيار المعتاد للحفارات المتوسطة والكبيرة بالجنزير: أرضيته المنخفضة تبقي الذراع المطوي ضمن حد الارتفاع وتوزع الوزن على المحاور. أما الحفار الصغير فقلّما يحتاجه وتكفيه [تريلا سطحة](services/recovery-heavy-transport/flatbed-trailer-transport). قارن المقطورات في صفحة [النقل باللوبد](services/recovery-heavy-transport/lowbed-transport)، أو انقله مع باقي معداتك ضمن [نقل المعدات الثقيلة](services/recovery-heavy-transport/heavy-equipment-transport)."] }],
      faqs: [{ q: "كم تكلفة نقل حفار (بوكلين)؟", a: "تحددها فئة الوزن والارتفاع مطويًا والمسافة وطريقة التحميل وأي تصريح. أرسل الموديل والموقعين ويصلك السعر قبل الحجز." }],
    },
  },
  [LOADER]: {
    en: { sections: [{ h: "Trailer choice for a shuwel", p: ["Most loaders ride on a [lowbed](services/recovery-heavy-transport/lowbed-transport); compact ones may fit a [flatbed](services/recovery-heavy-transport/flatbed-trailer-transport). If the shuwel moves with a dozer or roller, request them together under [heavy equipment transport](services/recovery-heavy-transport/heavy-equipment-transport) so the trailers are grouped."] }] },
    ar: { sections: [{ h: "أي تريلا تناسب الشيول", p: ["أغلب الشيولات تُنقل على [لوبد](services/recovery-heavy-transport/lowbed-transport)، والصغيرة قد تكفيها [تريلا سطحة](services/recovery-heavy-transport/flatbed-trailer-transport). وإذا كان الشيول مع دركتر أو حدلة فاطلبها معًا ضمن [نقل المعدات الثقيلة](services/recovery-heavy-transport/heavy-equipment-transport) لتُجمع التريلات."] }] },
  },
  [FLATBED]: {
    en: {
      sections: [{ h: "Hiring a flatbed trailer", p: ["A flatbed is arranged with its tractor head and driver for a move, or for a list of moves on one project. It is the economical choice until height or weight rules it out; then compare a [lowbed](services/recovery-heavy-transport/lowbed-transport) or an [oversized load plan](services/recovery-heavy-transport/oversized-load-transport). Small machines such as [forklifts](services/recovery-heavy-transport/forklift-transport) usually fit."] }],
      faqs: [{ q: "Can I rent a flatbed trailer without a driver?", a: "No. Flatbeds are arranged with a tractor head and driver, priced per move or per list of moves." }],
    },
    ar: {
      title: "تريلا سطحة للإيجار ونقل معدات وبضائع",
      sections: [{ h: "تريلا سطحة للإيجار", p: ["تُرتب التريلا السطحة مع رأسها وسائقها لنقلة واحدة أو لقائمة نقلات في مشروع. وهي الخيار الاقتصادي ما لم يمنعها الارتفاع أو الوزن، وعندها قارن مع [لوبد](services/recovery-heavy-transport/lowbed-transport) أو [نقل الحمولات الاستثنائية](services/recovery-heavy-transport/oversized-load-transport). والمعدات الصغيرة مثل [الرافعات الشوكية](services/recovery-heavy-transport/forklift-transport) تناسبها غالبًا."] }],
      faqs: [{ q: "هل أستأجر تريلا سطحة بدون سائق؟", a: "لا. تُرتب التريلا مع الرأس والسائق، ويُحسب السعر بالنقلة أو بقائمة نقلات." }],
    },
  },
  [OVERSIZED]: {
    en: {
      title: "Heavy Haulage & Oversized Load Transport KSA",
      h1: "Heavy Haulage and Oversized Load Transport in Saudi Arabia",
      sections: [{ h: "When a normal move becomes heavy haulage", p: ["The same machine can be an ordinary lowbed job on one trailer and an exceptional load on another. Before planning permits, check whether a [different lowbed](services/recovery-heavy-transport/lowbed-transport), a removed counterweight or a separate load for the bucket brings it back within limits. That is the first saving to look for with [cranes](services/recovery-heavy-transport/crane-transport), [large excavators](services/recovery-heavy-transport/excavator-transport) and plant from [Jubail and Dammam](services/recovery-heavy-transport/heavy-equipment-transport/dammam)."] }],
      faqs: [{ q: "What is heavy haulage?", a: "Road transport of loads beyond normal weight or size, using multi-axle or extendable trailers with permits and, where required, escort vehicles and a route check." }],
    },
    ar: {
      sections: [{ h: "متى يصبح النقل العادي حمولة استثنائية", p: ["المعدة نفسها قد تكون نقلة لوبد عادية على مقطورة، وحمولة استثنائية على أخرى. قبل التصاريح تحقق هل يعيدها [لوبد مختلف](services/recovery-heavy-transport/lowbed-transport) أو فك الثقل الموازن أو نقل الجردل وحده إلى الحدود المعتادة. هذا أول توفير ممكن مع [الكرينات](services/recovery-heavy-transport/crane-transport) و[الحفارات الكبيرة](services/recovery-heavy-transport/excavator-transport) ومعدات [الدمام والجبيل](services/recovery-heavy-transport/heavy-equipment-transport/dammam)."] }],
      faqs: [{ q: "ما المقصود بالنقل الثقيل الاستثنائي؟", a: "نقل حمولات تتجاوز الوزن أو المقاس المعتاد على مقطورات متعددة المحاور أو قابلة للتمديد، بتصاريح ومرافقة وفحص للطريق عند اللزوم." }],
    },
  },
  [CRANE]: {
    en: {
      sections: [{ h: "Does the crane drive, ride or travel in pieces?", p: ["An all-terrain crane often drives itself to a nearby site, and only its counterweights need a truck. A rough-terrain crane is slow on the highway and rides on a [lowbed](services/recovery-heavy-transport/lowbed-transport). A crawler crane is taken apart, so list every piece: a long boom section may go on an extendable [flatbed](services/recovery-heavy-transport/flatbed-trailer-transport), while the body can be an [oversized load](services/recovery-heavy-transport/oversized-load-transport). Lifting the pieces at each end needs its own assist crane."] }],
      faqs: [{ q: "Who takes the crane apart before transport?", a: "The crane owner's rigging team. Tell us the pieces, their weights and when they will be ready, so each trailer arrives in loading order." }],
    },
    ar: {
      sections: [{ h: "هل يسير الكرين أم يُحمل أم يُنقل قطعًا؟", p: ["الكرين المتحرك لكل الطرق يسير غالبًا بنفسه إلى موقع قريب، ولا تحتاج شاحنة إلا أثقاله الموازنة. وكرين الطرق الوعرة بطيء على الطريق السريع فيُحمل على [لوبد](services/recovery-heavy-transport/lowbed-transport). أما الزاحف فيُفكك، فاكتب كل قطعة: قد تذهب قطعة الذراع الطويلة على [تريلا سطحة](services/recovery-heavy-transport/flatbed-trailer-transport) قابلة للتمديد، ويكون الجسم [حمولة استثنائية](services/recovery-heavy-transport/oversized-load-transport). ورفع القطع عند كل طرف يحتاج كرينًا مساعدًا."] }],
      faqs: [{ q: "من يفكك الكرين قبل النقل؟", a: "فريق الرفع التابع لمالك الكرين. أخبرنا بالقطع وأوزانها وموعد جاهزيتها لتصل كل تريلا بترتيب التحميل." }],
    },
  },
  [FORKLIFT]: {
    en: { sections: [{ h: "One forklift, a warehouse fleet or a reach stacker", p: ["A single warehouse truck can share a [flatbed](services/recovery-heavy-transport/flatbed-trailer-transport) with other cargo. When a whole warehouse moves, the racking, chargers and forklifts are better planned as one [machinery relocation](services/recovery-heavy-transport/industrial-machinery-relocation). A reach stacker or a container forklift is a different job: its mast and weight usually mean a [lowbed](services/recovery-heavy-transport/lowbed-transport). Electric forklifts should arrive charged enough to leave the ramp on their own."] }] },
    ar: { sections: [{ h: "رافعة واحدة أم أسطول مستودع أم رافعة حاويات", p: ["رافعة مستودع واحدة قد تشارك [تريلا سطحة](services/recovery-heavy-transport/flatbed-trailer-transport) مع بضائع أخرى. وعند نقل مستودع كامل فالأفضل تخطيط الأرفف والشواحن والرافعات معًا ضمن [نقل معدات المصانع](services/recovery-heavy-transport/industrial-machinery-relocation). أما رافعة الحاويات فمهمة مختلفة، صاريها ووزنها يعنيان غالبًا [لوبد](services/recovery-heavy-transport/lowbed-transport). والرافعة الكهربائية يجب أن تكون مشحونة بما يكفي لتنزل من الرامبة بنفسها."] }] },
  },
  [RELOCATION]: {
    en: { sections: [{ h: "Matching each factory machine to a trailer", p: ["A relocation is rarely one truck. Presses and lathes are dense and go low; control cabinets are light but must stay dry; conveyors are long. Split the list into what fits a covered [flatbed](services/recovery-heavy-transport/flatbed-trailer-transport), what needs a [lowbed](services/recovery-heavy-transport/lowbed-transport), and what becomes an [oversized load](services/recovery-heavy-transport/oversized-load-transport), and number the crates in the order the new site wants them. Lift trucks move with the line as [forklift transport](services/recovery-heavy-transport/forklift-transport)."] }] },
    ar: { sections: [{ h: "أي تريلا لكل آلة في المصنع", p: ["نقل المصنع نادرًا ما يكون شاحنة واحدة. المكابس والمخارط ثقيلة فتُحمل منخفضة، ولوحات التحكم خفيفة لكنها يجب أن تبقى جافة، والسيور طويلة. قسّم القائمة إلى ما تكفيه [تريلا سطحة](services/recovery-heavy-transport/flatbed-trailer-transport) مغطاة، وما يحتاج [لوبد](services/recovery-heavy-transport/lowbed-transport)، وما يصبح [حمولة استثنائية](services/recovery-heavy-transport/oversized-load-transport)، ورقّم الصناديق بالترتيب الذي يريده الموقع الجديد. وتنتقل رافعات الخط ضمن [نقل الرافعات الشوكية](services/recovery-heavy-transport/forklift-transport)."] }] },
  },
};

export function applyHeavyGrowth(pages: ServicePage[]) {
  for (const [path, entry] of Object.entries(patches)) {
    const page = pages.find((p) => p.path === path);
    if (!page) throw new Error(`heavyGrowth: unknown page ${path}`);
    page.updated = U;
    if (entry.related) page.related.push(...entry.related);
    for (const locale of ["en", "ar"] as Locale[]) {
      const { sections, faqs, table, ...meta } = entry[locale];
      const c = page.copy[locale];
      Object.assign(c, meta);
      c.sections = [...c.sections, ...(sections ?? [])];
      c.faqs = [...c.faqs, ...(faqs ?? [])];
      if (table) c.tables = [...(c.tables ?? []), table];
    }
  }
}
