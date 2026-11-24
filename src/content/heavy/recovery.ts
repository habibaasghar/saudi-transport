import type { ServicePage } from "../types";
import { CARS, HEAVY, HT, HYDRAULIC, LOWBED, SATHA, TRUCKS, heavyPage } from "./shared";

/**
 * Recovery pages added 2026-11-24 (owner brief: recovery trucks and lowbed).
 *  - Hydraulic satha: own search intent (سطحة هيدروليك / فل داون / مغلقة + city in Google SA autocomplete) and own competitor
 *    pages. It expands a service the satha page already offered "on request".
 *  - Truck recovery: "ونش سحب شاحنات" / "سطحة شاحنات". Scope is the lowbed move of a non-running truck or bus, which the
 *    category already offers, plus tow-truck recovery only when a partner confirms it. No heavy wrecker, rotator or
 *    overturned-truck capability is claimed (owner confirmation open: docs/heavy-transport/RECOVERY_LOWBED_REPORT.md).
 */
const base: ServicePage[] = [
  heavyPage(HYDRAULIC, SATHA, "hydraulic_satha", [SATHA, CARS, `${SATHA}/riyadh`, `${SATHA}/jeddah`, `${SATHA}/dammam`, TRUCKS], {
    nav: "Hydraulic Recovery Truck",
    title: "Hydraulic Recovery Truck & Full-Down Satha",
    description: "Hydraulic satha (full-down flatbed) for low, sports, luxury and damaged cars in Saudi Arabia. When you need one, how loading works and what to send for a quote.",
    h1: "Hydraulic Recovery Truck (Hydraulic Satha) in Saudi Arabia",
    eyebrow: "Hydraulic satha · full-down deck",
    answer: "A hydraulic recovery truck, called satha hydraulic in Saudi Arabia, slides its deck back and lowers it close to the ground, so a car is loaded at a shallow angle instead of up a steep ramp. Choose it for low, sports, luxury or accident-damaged cars. RideSaudi arranges one on request in Riyadh, Jeddah, Dammam and between cities, priced before it is sent.",
    summary: "Full-down hydraulic satha for low, sports, luxury and damaged cars that would scrape on a normal ramp.",
    sections: [
      {
        h: "When do you need a hydraulic recovery truck?",
        p: [
          "The question is clearance, not price. If the front lip, the underbody or a hanging part would touch the ramp of an ordinary satha, ask for a hydraulic one. Standard sedans and SUVs that roll and have normal ground clearance usually do not need it, and an ordinary [car recovery truck](services/recovery-heavy-transport/satha-car-recovery) is easier to find.",
          "Damage matters as much as height. A car with a collapsed wheel, a dropped bumper or a leaking underside is safer on a deck that comes down to it.",
        ],
        list: [
          "Sports and supercars with a low front lip or splitter",
          "Lowered cars and cars on coilovers",
          "Air-suspension cars that have sunk and will not rise",
          "Accident cars with a broken wheel, arm or axle",
          "Long-wheelbase saloons that ground in the middle of a steep ramp",
          "Electric cars that must not be rolled with the driven wheels on the road",
        ],
      },
      {
        h: "What full-down means",
        p: [
          "Every sliding deck lowers, but not to the same point. On a basic sliding bed the tail touches the ground while the deck still leans. On a full-down satha (فل داون) the whole deck comes nearly flat to the road, which gives the smallest loading angle of all. If your car has only a few centimetres of clearance, write full-down in the request and add a side photo of the front bumper.",
        ],
      },
      {
        h: "How a car is loaded on a hydraulic satha",
        p: [
          "The truck stops in line with the car and the deck slides back and down. A car that runs is driven on slowly with a person guiding it; one that does not run is pulled by winch from its towing eye, straight, with the steering unlocked. Wheel skates help when a wheel is jammed. The wheels are strapped, the parking brake is set if it works, and the deck slides forward and levels before the truck moves.",
          "Leave room: the truck needs a clear, firm strip behind or in front of the car longer than its own deck. In a basement or a tight villa street, send the entrance height and a photo, because the truck itself may not get in.",
        ],
      },
      {
        h: "Open hydraulic or enclosed carrier",
        p: [
          "An open hydraulic satha is right for most city trips. For a classic, prototype or high-value car going to another city, an enclosed carrier keeps off sand, sun and stone chips. Enclosed units are fewer, so ask early and keep the date flexible. The choice for long trips is explained under [car transport between cities](services/recovery-heavy-transport/car-transport-between-cities).",
        ],
      },
      {
        h: "What affects the price of a hydraulic satha",
        p: [
          "A hydraulic truck normally costs more than an ordinary satha on the same trip because fewer are on the road and loading takes longer. The distance, the car's value and condition, the access and the hour decide the rest. No fixed fare is published; you get one price for your car and route before anything moves. City details are on the [Riyadh](services/recovery-heavy-transport/satha-car-recovery/riyadh), [Jeddah](services/recovery-heavy-transport/satha-car-recovery/jeddah) and [Dammam and Al Khobar](services/recovery-heavy-transport/satha-car-recovery/dammam) pages.",
        ],
      },
    ],
    table: {
      h: "Ordinary, hydraulic, full-down or enclosed?",
      head: ["Truck", "Loading angle", "Choose it for", "Not needed for"],
      rows: [
        ["Ordinary tilting satha", "Steepest", "Sedans, SUVs and pickups with normal clearance", "Low or damaged front ends"],
        ["Hydraulic sliding satha", "Shallow", "Luxury cars, accident cars, long saloons", "Standard cars on short trips"],
        ["Full-down satha", "Almost flat", "Supercars, lowered cars, sunk air suspension", "Cars with normal clearance"],
        ["Enclosed carrier", "Depends on its ramp or lift", "Classic and high-value cars between cities", "Urgent short recoveries"],
      ],
    },
    checklist: {
      h: "What to send for a hydraulic satha",
      items: [
        "Make, model and any lowering or body kit",
        "Side photo showing the front bumper and ground gap",
        "Does it start, roll and steer? Which wheel is damaged?",
        "Location pin, and entrance height if it is in a basement",
        "Destination, date and whether open or enclosed is wanted",
      ],
    },
    faqs: [
      { q: "When do I need a hydraulic recovery truck?", a: "When the car is low, has body damage near the ground, or cannot climb a normal ramp without scraping. Cars with ordinary clearance can use a standard satha." },
      { q: "What is a full-down satha?", a: "A hydraulic flatbed whose whole deck comes nearly flat to the road, giving the smallest loading angle. It is the usual choice for supercars and lowered cars." },
      { q: "Is a hydraulic satha more expensive than a normal satha?", a: "Usually yes on the same trip, because there are fewer of them and loading takes longer. The exact price is quoted for your car and route." },
      { q: "Can a hydraulic satha take an electric car?", a: "Yes, carrying it with all four wheels off the road is the suitable method. Tell us the model and whether it can be put in transport or neutral mode." },
      { q: "Is the hydraulic truck available straight away?", a: "It depends on the city and the time. Availability is checked with partners for your location and confirmed with the price; it is not guaranteed in advance." },
    ],
  }, {
    nav: "سطحة هيدروليك",
    title: "سطحة هيدروليك فل داون ومغلقة في السعودية",
    description: "سطحة هيدروليك وفل داون للسيارات المنخفضة والرياضية والفاخرة والمصدومة في الرياض وجدة والدمام وبين المدن. أرسل نوع السيارة وموقعها لعرض السعر.",
    h1: "سطحة هيدروليك لنقل السيارات المنخفضة والفاخرة في السعودية",
    eyebrow: "سطحة هيدروليك · فل داون",
    answer: "السطحة الهيدروليك شاحنة نقل ينزلق صندوقها إلى الخلف وينزل حتى يقارب الأرض، فتصعد السيارة بزاوية هادئة بدل المنحدر الحاد. تناسب السيارات المنخفضة والرياضية والفاخرة والمصدومة. ترتبها RideSaudi عند الطلب في الرياض وجدة والدمام وبين المدن، ويصلك السعر قبل إرسال السطحة.",
    summary: "سطحة هيدروليك وفل داون للسيارات المنخفضة والرياضية والفاخرة والمصدومة التي تحتك بالسطحة العادية.",
    sections: [
      {
        h: "متى تحتاج سطحة هيدروليك؟",
        p: [
          "انظر إلى ارتفاع السيارة عن الأرض. إذا كان الصدام أو بطن السيارة أو قطعة متدلية ستلمس منحدر السطحة العادية فاطلب هيدروليك. أما السدان والجيب بارتفاعهما المعتاد وهما يتدحرجان فتكفيهما غالبًا [سطحة نقل سيارات عادية](services/recovery-heavy-transport/satha-car-recovery)، وهي أسهل توفرًا.",
          "والصدمة تهم مثل الارتفاع: سيارة كفرها طايح أو صدامها نازل أو تسرّب من تحتها، الأسلم لها صندوق ينزل إليها.",
        ],
        list: [
          "السيارات الرياضية والسوبر كار ذات الصدام المنخفض",
          "السيارات المنزّلة والمعدلة",
          "سيارات التعليق الهوائي التي نزلت ولا ترتفع",
          "السيارات المصدومة بكسر في المقص أو العكس أو الجنط",
          "السيارات الطويلة التي تحتك من وسطها بالمنحدر الحاد",
          "السيارات الكهربائية التي لا يصح سحبها وعجلات الدفع على الأرض",
        ],
      },
      {
        h: "ما معنى سطحة فل داون؟",
        p: [
          "كل صندوق منزلق ينزل، لكن ليس بالقدر نفسه. في الهيدروليك المعتاد تلامس مؤخرة الصندوق الأرض ويبقى الصندوق مائلًا، أما الفل داون فينزل الصندوق كله حتى يقارب مستوى الأرض، فتكون زاوية الصعود أقل ما يمكن. إذا كان تحت سيارتك سنتيمترات قليلة فقط فاكتب فل داون في الطلب وأرفق صورة جانبية للصدام الأمامي.",
        ],
      },
      {
        h: "طريقة تحميل السيارة على السطحة الهيدروليك",
        p: [
          "تقف السطحة على خط واحد مع السيارة، وينزلق الصندوق للخلف وللأسفل. السيارة الشغالة تُقاد ببطء مع شخص يوجّه السائق، والمعطلة تُسحب بالونش من حلقة السحب بخط مستقيم والدركسون مفتوح. وإذا كان كفر عالقًا تُستخدم عجلات نقل تحته. بعدها تُربط الكفرات ويُرفع الجلنط إن كان يعمل، ثم يعود الصندوق ويستوي قبل التحرك.",
          "اترك مساحة كافية أمام السيارة أو خلفها أطول من صندوق السطحة. وإذا كانت في قبو أو شارع ضيق فأرسل ارتفاع المدخل وصورة له، فقد لا تستطيع الشاحنة نفسها الدخول.",
        ],
      },
      {
        h: "سطحة هيدروليك مكشوفة أم سطحة مغلقة؟",
        p: [
          "المكشوفة تكفي أغلب المشاوير داخل المدينة. أما السيارة الكلاسيكية أو الثمينة المسافرة لمدينة أخرى فالسطحة المغلقة تحميها من الرمل والشمس وحصى الطريق. المغلقة أقل عددًا، فاطلبها مبكرًا واترك الموعد مرنًا. وتفاصيل المشاوير الطويلة في صفحة [نقل السيارات بين المدن](services/recovery-heavy-transport/car-transport-between-cities).",
        ],
      },
      {
        h: "كم سعر السطحة الهيدروليك؟",
        p: [
          "الهيدروليك أغلى عادة من السطحة العادية للمشوار نفسه لأنها أقل توفرًا وتحميلها أطول. والباقي يحدده طول المشوار ونوع السيارة وحالتها وسهولة الوصول ووقت الطلب. لا ننشر سعرًا ثابتًا، ويصلك سعر واحد لسيارتك ومشوارك قبل أي تحرك. ولتفاصيل مدينتك راجع [سطحة الرياض](services/recovery-heavy-transport/satha-car-recovery/riyadh) و[سطحة جدة](services/recovery-heavy-transport/satha-car-recovery/jeddah) و[سطحة الدمام والخبر](services/recovery-heavy-transport/satha-car-recovery/dammam).",
        ],
      },
    ],
    table: {
      h: "عادية أم هيدروليك أم فل داون أم مغلقة؟",
      head: ["السطحة", "زاوية الصعود", "تناسب", "لا حاجة لها مع"],
      rows: [
        ["سطحة عادية", "الأشد ميلًا", "السدان والجيب والونيت بارتفاع معتاد", "السيارات المنخفضة أو المصدومة من الأمام"],
        ["سطحة هيدروليك", "هادئة", "السيارات الفاخرة والمصدومة والطويلة", "السيارات المعتادة في مشوار قصير"],
        ["سطحة فل داون", "شبه مستوية", "السوبر كار والسيارات المنزّلة والتعليق الهوائي النازل", "السيارات ذات الارتفاع المعتاد"],
        ["سطحة مغلقة", "حسب الرامبة أو الرافعة", "السيارات الكلاسيكية والثمينة بين المدن", "الأعطال العاجلة القريبة"],
      ],
    },
    checklist: {
      h: "ما الذي ترسله لطلب سطحة هيدروليك",
      items: [
        "ماركة السيارة وموديلها وأي تنزيل أو بودي كت",
        "صورة جانبية تبين الصدام والمسافة عن الأرض",
        "هل تشتغل وتتدحرج ويلف الدركسون؟ وأي كفر متضرر؟",
        "الموقع، وارتفاع المدخل إذا كانت في قبو",
        "الوجهة والموعد، ومكشوفة أم مغلقة",
      ],
    },
    faqs: [
      { q: "متى أطلب سطحة هيدروليك بدل العادية؟", a: "إذا كانت السيارة منخفضة أو متضررة قرب الأرض أو ستحتك بمنحدر السطحة العادية. أما السيارة بارتفاعها المعتاد فتكفيها العادية." },
      { q: "ما الفرق بين سطحة هيدروليك وسطحة فل داون؟", a: "الفل داون نوع من الهيدروليك ينزل صندوقه كله حتى يقارب مستوى الأرض، فزاوية الصعود أقل. يطلبها أصحاب السوبر كار والسيارات المنزّلة." },
      { q: "هل السطحة الهيدروليك أغلى من العادية؟", a: "غالبًا نعم للمشوار نفسه لأنها أقل توفرًا وتحميلها أطول. ويصلك السعر المحدد لسيارتك ومشوارك قبل الموافقة." },
      { q: "هل تنقل السطحة الهيدروليك السيارات الكهربائية؟", a: "نعم، حملها وعجلاتها الأربع مرفوعة هو الأنسب. اذكر الموديل وهل يمكن وضعها على النيوترل أو وضع النقل." },
      { q: "هل السطحة الهيدروليك متوفرة فورًا؟", a: "حسب المدينة والوقت. نتحقق من المتاح قرب موقعك ونؤكده لك مع السعر، ولا نعد بتوفر مسبق." },
    ],
  }),

  heavyPage(TRUCKS, HT, "truck_recovery", [LOWBED, SATHA, HEAVY, `${HEAVY}/riyadh`, `${HEAVY}/jeddah`, `${HEAVY}/dammam`], {
    nav: "Truck & Heavy Vehicle Recovery",
    title: "Truck & Heavy Vehicle Recovery Saudi Arabia",
    description: "Move a broken-down truck, tractor head, bus or pickup in Saudi Arabia: lowbed carriage or tow truck on request, what decides the method, and details to send.",
    h1: "Truck and Heavy Vehicle Recovery in Saudi Arabia",
    eyebrow: "Trucks · buses · commercial vehicles",
    answer: "Truck recovery means moving a truck, tractor head, bus or van that cannot drive to a workshop, yard or another city. Light trucks can ride on a large satha; heavier ones are carried on a lowbed or towed by a heavy tow truck. RideSaudi takes the vehicle's details and location, checks which method a partner can provide, and quotes it before anything is sent.",
    summary: "Moving broken-down trucks, tractor heads, buses and vans by large satha, lowbed or tow truck, confirmed per vehicle.",
    sections: [
      {
        h: "Why a car satha cannot move most trucks",
        p: [
          "A normal satha is built for a car. A loaded pickup may already be near its limit, and a tractor head or a bus is far beyond it in both weight and length. Sending the wrong truck wastes hours on the roadside, so the first questions are always weight, number of axles and whether the vehicle is empty or loaded.",
          "For ordinary cars, SUVs and empty pickups use [car recovery by satha](services/recovery-heavy-transport/satha-car-recovery) instead.",
        ],
      },
      {
        h: "Three ways to recover a heavy vehicle",
        p: [
          "Which one fits depends on the damage as much as on the weight. A truck with a failed engine but sound axles can be towed or carried. A truck with a broken front axle, seized brakes or accident damage is usually better carried on a [lowbed trailer](services/recovery-heavy-transport/lowbed-transport), because nothing of it has to roll.",
        ],
        list: [
          "Large satha: light trucks, small dynas and vans within the deck's length and weight",
          "Lowbed: tractor heads, rigid trucks, buses and empty tankers that should not roll, and long distances",
          "Heavy tow truck: short moves of vehicles whose axles and brakes can be released, when a partner has one near",
        ],
      },
      {
        h: "Loaded trucks, trailers and cargo",
        p: [
          "Say first whether there is cargo on board. A loaded trailer often has to be uncoupled and pulled by another tractor head, or its load transferred, before the broken vehicle can be moved. Refrigerated, hazardous or liquid cargo changes everything: the cargo owner and the authorities decide what may be touched, so tell us exactly what it is.",
          "RideSaudi does not claim rotator cranes, overturned-vehicle lifting or spill clean-up. If a truck has rolled over, blocks the road or is leaking, the emergency services and the highway authority come first; transport of the vehicle can be arranged once it has been released.",
        ],
      },
      {
        h: "On the highway: what to do first",
        p: [
          "Pull as far off the carriageway as the vehicle allows, switch on hazard lights, place the warning triangle well behind and keep people away from traffic. Report accidents to the police before moving anything. Then send a map pin, the direction of travel and the nearest kilometre marker or exit; on long desert roads the direction saves a wrong turn of many kilometres.",
        ],
      },
      {
        h: "Planned moves for fleets and workshops",
        p: [
          "Not every recovery is an emergency. Fleets move dead trucks from a branch yard to a central workshop, dealers collect trade-ins that do not run, and insurers release damaged trucks for repair. With a flexible date a lowbed can often be planned together with other work on the same road. City pages for [Riyadh](services/recovery-heavy-transport/heavy-equipment-transport/riyadh), [Jeddah](services/recovery-heavy-transport/heavy-equipment-transport/jeddah) and [Dammam and Jubail](services/recovery-heavy-transport/heavy-equipment-transport/dammam) describe truck hours and site access there.",
        ],
      },
    ],
    table: {
      h: "Which recovery method suits which vehicle",
      head: ["Vehicle", "Usual method", "What must be known"],
      rows: [
        ["Pickup, van, small dyna", "Large satha", "Empty or loaded, length"],
        ["Rigid truck (two or three axles)", "Lowbed, or tow truck on request", "Weight, axle damage, brakes released or not"],
        ["Tractor head", "Lowbed, or tow truck on request", "Coupled to a trailer? Drive shaft condition"],
        ["Bus or coach", "Lowbed", "Length, ground clearance, air suspension"],
        ["Loaded semi-trailer", "Replacement tractor head or cargo transfer first", "Cargo type, documents, who releases it"],
      ],
    },
    checklist: {
      h: "Details that get a truck recovery quote",
      items: [
        "Vehicle type, make, model and number of axles",
        "Empty or loaded; cargo type and approximate total weight",
        "The fault: engine, gearbox, axle, brakes or accident",
        "Map pin, direction of travel and nearest exit or kilometre marker",
        "Destination workshop or yard, and a contact there",
        "Photos of the front, the side and the damaged part",
      ],
    },
    faqs: [
      { q: "Can a recovery truck carry a tractor head?", a: "A normal car satha cannot. A tractor head is carried on a lowbed, or towed by a heavy tow truck if its axles and brakes allow it and a partner has one available." },
      { q: "Do you recover loaded trucks?", a: "It depends on the cargo and the fault. Often the trailer is moved by another tractor head or the load is transferred first. Send the cargo type and weight and we tell you what can be arranged." },
      { q: "Can you lift an overturned truck?", a: "We do not claim that service. An overturned truck is handled by the authorities and specialised lifting companies; we can arrange transport of the vehicle once it is released." },
      { q: "Can a bus be transported on a lowbed?", a: "Yes, if its length, height and ground clearance suit the trailer. Send the model and a side photo, because coaches with low bumpers need careful ramps." },
      { q: "How much does truck recovery cost in Saudi Arabia?", a: "It is quoted per job from the weight, the fault, the method, the distance and the access. No fixed price is published, and nothing is sent until you accept the quote." },
    ],
  }, {
    nav: "سحب ونقل الشاحنات المعطلة",
    title: "سحب شاحنات وسطحة نقل شاحنات في السعودية",
    description: "نقل وسحب الشاحنات والتريلات ورؤوس التريلات والباصات المعطلة في السعودية باللوبد أو سطحة كبيرة أو ونش عند الطلب. أرسل النوع والوزن والموقع لعرض السعر.",
    h1: "سحب ونقل الشاحنات والمركبات الثقيلة المعطلة في السعودية",
    eyebrow: "شاحنات · باصات · مركبات تجارية",
    answer: "سحب الشاحنات يعني نقل شاحنة أو رأس تريلا أو باص أو دينا لا تستطيع السير إلى ورشة أو حوش أو مدينة أخرى. الخفيف منها يُحمل على سطحة كبيرة، والأثقل يُنقل على لوبد أو يسحبه ونش ثقيل. تأخذ RideSaudi بيانات المركبة وموقعها، وتتحقق من الطريقة المتاحة، وترسل السعر قبل إرسال أي شيء.",
    summary: "نقل الشاحنات ورؤوس التريلات والباصات والدينات المعطلة بسطحة كبيرة أو لوبد أو ونش سحب، حسب كل مركبة.",
    sections: [
      {
        h: "لماذا لا تنفع سطحة السيارات مع الشاحنات",
        p: [
          "السطحة العادية مصممة لسيارة. الونيت المحمّل قد يصل إلى حدها، أما رأس التريلا أو الباص فأثقل وأطول منها بكثير. إرسال الشاحنة الخطأ يضيّع ساعات على الطريق، ولذلك أول الأسئلة دائمًا: كم الوزن، وكم محورًا، وهل المركبة فاضية أم محمّلة.",
          "للسيارات والجيوب والونيتات الفاضية راجع [سطحة نقل السيارات](services/recovery-heavy-transport/satha-car-recovery).",
        ],
      },
      {
        h: "ثلاث طرق لنقل المركبة الثقيلة",
        p: [
          "نوع العطل يحسم الاختيار بقدر الوزن. الشاحنة التي مكينتها واقفة ومحاورها سليمة يمكن سحبها أو حملها. أما التي فيها محور مكسور أو فرامل ماسكة أو صدمة فالأفضل غالبًا حملها على [لوبد](services/recovery-heavy-transport/lowbed-transport) لأن عجلاتها لا تحتاج أن تدور.",
        ],
        list: [
          "سطحة كبيرة: الشاحنات الخفيفة والدينات الصغيرة والفانات ضمن طول الصندوق ووزنه",
          "لوبد: رؤوس التريلات والشاحنات والباصات والصهاريج الفاضية التي لا يصح أن تتدحرج، والمسافات الطويلة",
          "ونش سحب شاحنات: مشاوير قصيرة لمركبة يمكن فك فراملها ومحاورها سليمة، إذا توفر ونش قريب",
        ],
      },
      {
        h: "الشاحنات المحمّلة والمقطورات والبضاعة",
        p: [
          "اذكر أولًا هل هناك حمولة. المقطورة المحمّلة يلزم غالبًا فصلها وسحبها برأس آخر أو تحويل بضاعتها قبل نقل المركبة المعطلة. والبضاعة المبردة أو الخطرة أو السائلة لها حكم مختلف: صاحب البضاعة والجهات المختصة هم من يحددون ما يجوز تحريكه، فأخبرنا بنوعها بالضبط.",
          "لا ندّعي توفير كرينات رفع الشاحنات المنقلبة ولا تنظيف الانسكابات. إذا انقلبت الشاحنة أو سدت الطريق أو كان فيها تسريب فالجهات الأمنية وجهة الطريق أولًا، ونرتب نقل المركبة بعد الإفراج عنها.",
        ],
      },
      {
        h: "تعطلت على الطريق السريع: ابدأ بهذا",
        p: [
          "أبعد المركبة عن المسار قدر ما تسمح حالتها، وشغّل الفليشر، وضع المثلث على مسافة كافية، وأبعد الناس عن حركة السير. وبلّغ عن الحادث قبل تحريك أي شيء. ثم أرسل الموقع واتجاه السير وأقرب مخرج أو علامة كيلو، فمعرفة الاتجاه في الطرق الصحراوية توفر دورانًا طويلًا.",
        ],
      },
      {
        h: "نقل مجدول للأساطيل والورش",
        p: [
          "ليست كل الطلبات عاجلة. الشركات تنقل شاحنات واقفة من فرع إلى الورشة المركزية، والمعارض تستلم مركبات لا تعمل، وشركات التأمين تفرج عن شاحنات مصدومة للإصلاح. وإذا كان الموعد مرنًا أمكن تخطيط اللوبد مع أعمال أخرى على الطريق نفسه. وتجد أوقات دخول الشاحنات وملاحظات المواقع في صفحات [الرياض](services/recovery-heavy-transport/heavy-equipment-transport/riyadh) و[جدة](services/recovery-heavy-transport/heavy-equipment-transport/jeddah) و[الدمام والجبيل](services/recovery-heavy-transport/heavy-equipment-transport/dammam).",
        ],
      },
    ],
    table: {
      h: "أي طريقة تناسب أي مركبة",
      head: ["المركبة", "الطريقة المعتادة", "ما يجب معرفته"],
      rows: [
        ["ونيت أو فان أو دينا صغيرة", "سطحة كبيرة", "فاضية أم محمّلة، والطول"],
        ["شاحنة بمحورين أو ثلاثة", "لوبد، أو ونش عند الطلب", "الوزن وعطل المحور وهل الفرامل مفكوكة"],
        ["رأس تريلا", "لوبد، أو ونش عند الطلب", "هل هو مشبوك بمقطورة، وحالة عمود الدوران"],
        ["باص أو حافلة", "لوبد", "الطول والارتفاع عن الأرض والتعليق الهوائي"],
        ["تريلا محمّلة", "رأس بديل أو تحويل البضاعة أولًا", "نوع البضاعة ومستنداتها ومن يفرج عنها"],
      ],
    },
    checklist: {
      h: "أرسل هذه البيانات لتسعير نقل الشاحنة",
      items: [
        "نوع المركبة وماركتها وموديلها وعدد المحاور",
        "فاضية أم محمّلة، ونوع البضاعة والوزن التقريبي",
        "العطل: مكينة أو قير أو محور أو فرامل أو حادث",
        "الموقع واتجاه السير وأقرب مخرج أو علامة كيلو",
        "الورشة أو الحوش المقصود ورقم شخص هناك",
        "صور من الأمام والجنب ومكان الضرر",
      ],
    },
    faqs: [
      { q: "هل تنقل السطحة رأس تريلا؟", a: "سطحة السيارات لا. رأس التريلا يُحمل على لوبد، أو يسحبه ونش شاحنات إذا سمحت محاوره وفرامله وتوفر ونش قريب." },
      { q: "هل تسحبون شاحنة محمّلة؟", a: "حسب البضاعة والعطل. كثيرًا ما تُسحب المقطورة برأس آخر أو تُحوّل البضاعة أولًا. أرسل نوع الحمولة ووزنها ونخبرك بما يمكن ترتيبه." },
      { q: "هل ترفعون شاحنة منقلبة؟", a: "لا ندّعي هذه الخدمة. الشاحنة المنقلبة تتعامل معها الجهات المختصة وشركات الرفع المتخصصة، ونرتب نقلها بعد الإفراج عنها." },
      { q: "هل يمكن نقل باص على لوبد؟", a: "نعم إذا ناسب طوله وارتفاعه المقطورة. أرسل الموديل وصورة جانبية لأن الباصات ذات الصدام المنخفض تحتاج رامبات مناسبة." },
      { q: "كم تكلفة سحب شاحنة في السعودية؟", a: "تُسعَّر كل عملية حسب الوزن والعطل والطريقة والمسافة وسهولة الوصول. لا ننشر سعرًا ثابتًا ولا يتحرك شيء قبل موافقتك." },
    ],
  }),
];

export const heavyRecovery: ServicePage[] = base.map((p) => ({ ...p, updated: "2026-11-24" }));
