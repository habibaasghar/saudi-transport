import type { Locale } from "@/i18n/routing";

/**
 * Single source of truth for vehicle categories shown on the homepage, the /fleet/ page and the quote form.
 *
 * RULES (SEO-RULES.md, "no invented facts"):
 *  - Only categories the owner has confirmed are listed. Add a new vehicle here ONLY after the owner has
 *    confirmed availability through RideSaudi's transport partners.
 *  - `capacity` is a number only where the owner confirmed it. Otherwise it stays `null` and the page says the
 *    capacity is confirmed for the actual vehicle in the quotation.
 *  - `photo` (public/images/fleet/..., alt text in both languages) is illustrative of the model only. The owner supplied
 *    web photos of the models on 2026-11-21; the pages say the actual vehicle is confirmed in the quotation, and they are
 *    never described as RideSaudi-owned vehicles.
 *  - RideSaudi does not claim to own the vehicles: they are supplied with a driver by transport partners.
 *
 * Owner confirmed in chat on 2026-11-21: Toyota Camry, Hyundai Sonata, Ford Taurus, GMC Yukon, Chevrolet Suburban,
 * Chevrolet Tahoe, Toyota Prado, Hyundai Staria and luxury / VIP SUVs, all through transport partners and subject to
 * availability. Capacities stay null (confirmed per quotation) except the Staria. Still NOT shown: Toyota Hiace and vans
 * other than the Staria. See docs/phase1/FLEET_VERIFICATION_MATRIX.csv.
 */
type L = Record<Locale, string>;

export type FleetCategory = {
  key: "sedan" | "toyota-camry" | "hyundai-sonata" | "ford-taurus" | "gmc-yukon" | "chevrolet-suburban" | "chevrolet-tahoe" | "toyota-prado" | "hyundai-staria" | "luxury-suv-vip";
  /** Value stored in the enquiry's vehicle preference (kept stable: it is saved in the CRM). */
  value: string;
  name: L;
  category: L;
  /** Owner-confirmed capacity, or null when it is confirmed per quotation. */
  capacity: { passengers: number; luggageAtLeast: number } | null;
  suitableFor: Record<Locale, string[]>;
  photo?: { src: string; width: number; height: number; alt: L };
};

export const fleetCategories: FleetCategory[] = [
  {
    key: "sedan",
    value: "Sedan",
    name: { en: "Sedan", ar: "سيدان" },
    category: { en: "Private sedan with driver", ar: "سيدان خاصة مع سائق" },
    capacity: null,
    suitableFor: {
      en: ["Individuals, couples and business travellers", "Airport transfers with light luggage", "City-to-city journeys"],
      ar: ["الأفراد والأزواج ورجال الأعمال", "التوصيل من المطار وإليه بحقائب خفيفة", "الرحلات بين المدن"],
    },
  },
  {
    key: "gmc-yukon",
    value: "GMC Yukon",
    name: { en: "GMC Yukon", ar: "جمس يوكن" },
    category: { en: "Full-size SUV with driver", ar: "دفع رباعي كبيرة مع سائق" },
    capacity: null,
    photo: { src: "/images/fleet/gmc-yukon-at4-exterior.webp", width: 892, height: 762, alt: { en: "GMC Yukon full-size SUV parked in a desert landscape", ar: "جمس يوكن دفع رباعي كبيرة في أرض صحراوية" } },
    suitableFor: {
      en: ["Families and executives who want more space", "Long intercity routes such as Riyadh to Dammam or Makkah to Madinah", "Airport arrivals with luggage"],
      ar: ["العائلات والتنفيذيون الذين يريدون مساحة أوسع", "المسارات الطويلة بين المدن مثل الرياض إلى الدمام ومكة المكرمة إلى المدينة المنورة", "الوصول من المطار مع الحقائب"],
    },
  },
  {
    key: "toyota-camry",
    value: "Toyota Camry",
    name: { en: "Toyota Camry", ar: "تويوتا كامري" },
    category: { en: "Private sedan with driver", ar: "سيدان خاصة مع سائق" },
    capacity: null,
    photo: { src: "/images/fleet/toyota-camry-exterior.webp", width: 860, height: 460, alt: { en: "Toyota Camry sedan in a three-quarter front view", ar: "سيدان تويوتا كامري من زاوية أمامية جانبية" } },
    suitableFor: {
      en: ["Business travellers and couples", "Airport transfers with light luggage", "City-to-city journeys"],
      ar: ["رجال الأعمال والأزواج", "التوصيل من المطار وإليه بحقائب خفيفة", "الرحلات بين المدن"],
    },
  },
  {
    key: "hyundai-sonata",
    value: "Hyundai Sonata",
    name: { en: "Hyundai Sonata", ar: "هيونداي سوناتا" },
    category: { en: "Private sedan with driver", ar: "سيدان خاصة مع سائق" },
    capacity: null,
    photo: { src: "/images/fleet/hyundai-sonata-exterior.webp", width: 1400, height: 536, alt: { en: "Hyundai Sonata sedan driving on a mountain road", ar: "سيدان هيونداي سوناتا على طريق جبلي" } },
    suitableFor: {
      en: ["Individuals and business travellers", "Short and medium city-to-city trips", "Airport arrivals with light luggage"],
      ar: ["الأفراد ورجال الأعمال", "الرحلات القصيرة والمتوسطة بين المدن", "الوصول من المطار بحقائب خفيفة"],
    },
  },
  {
    key: "ford-taurus",
    value: "Ford Taurus",
    name: { en: "Ford Taurus", ar: "فورد توروس" },
    category: { en: "Private sedan with driver", ar: "سيدان خاصة مع سائق" },
    capacity: null,
    suitableFor: {
      en: ["Business travellers who want a larger sedan", "Airport and hotel transfers", "City-to-city journeys"],
      ar: ["رجال الأعمال الذين يريدون سيدان أوسع", "التوصيل بين المطار والفنادق", "الرحلات بين المدن"],
    },
  },
  {
    key: "chevrolet-suburban",
    value: "Chevrolet Suburban",
    name: { en: "Chevrolet Suburban", ar: "شيفروليه سوبربان" },
    category: { en: "Full-size SUV with driver", ar: "دفع رباعي كبيرة مع سائق" },
    capacity: null,
    photo: { src: "/images/fleet/chevrolet-suburban-exterior.webp", width: 858, height: 357, alt: { en: "Chevrolet Suburban full-size SUV beside the sea", ar: "شيفروليه سوبربان دفع رباعي كبيرة قرب البحر" } },
    suitableFor: {
      en: ["Families and groups who want extra room", "Long intercity routes", "Airport arrivals with luggage"],
      ar: ["العائلات والمجموعات التي تريد مساحة إضافية", "المسارات الطويلة بين المدن", "الوصول من المطار مع الحقائب"],
    },
  },
  {
    key: "chevrolet-tahoe",
    value: "Chevrolet Tahoe",
    name: { en: "Chevrolet Tahoe", ar: "شيفروليه تاهو" },
    category: { en: "Full-size SUV with driver", ar: "دفع رباعي كبيرة مع سائق" },
    capacity: null,
    photo: { src: "/images/fleet/chevrolet-tahoe-exterior.webp", width: 700, height: 370, alt: { en: "Chevrolet Tahoe full-size SUV in black", ar: "شيفروليه تاهو دفع رباعي كبيرة باللون الأسود" } },
    suitableFor: {
      en: ["Families and executives", "Long routes such as Riyadh to Dammam", "Airport arrivals with luggage"],
      ar: ["العائلات والتنفيذيون", "المسارات الطويلة مثل الرياض إلى الدمام", "الوصول من المطار مع الحقائب"],
    },
  },
  {
    key: "toyota-prado",
    value: "Toyota Prado",
    name: { en: "Toyota Prado", ar: "تويوتا برادو" },
    category: { en: "SUV with driver", ar: "دفع رباعي مع سائق" },
    capacity: null,
    photo: { src: "/images/fleet/toyota-prado-exterior.webp", width: 1000, height: 750, alt: { en: "Toyota Prado SUV in black", ar: "تويوتا برادو دفع رباعي باللون الأسود" } },
    suitableFor: {
      en: ["Mountain roads such as Abha, Al Baha and Taif", "Families who want an SUV", "Mixed road and city journeys"],
      ar: ["الطرق الجبلية مثل أبها والباحة والطائف", "العائلات التي تريد سيارة دفع رباعي", "الرحلات المختلطة بين الطرق والمدن"],
    },
  },
  {
    key: "luxury-suv-vip",
    value: "Luxury SUV / VIP",
    name: { en: "Luxury SUV / VIP", ar: "دفع رباعي فاخر / VIP" },
    category: { en: "Luxury and VIP vehicle with chauffeur", ar: "مركبة فاخرة وVIP مع سائق" },
    capacity: null,
    suitableFor: {
      en: ["Senior guests, executives and delegations", "Business events and occasions", "Premium airport and intercity transfers"],
      ar: ["كبار الضيوف والتنفيذيون والوفود", "فعاليات الأعمال والمناسبات", "التوصيل الفاخر من المطار وبين المدن"],
    },
  },
  {
    key: "hyundai-staria",
    value: "Hyundai Staria",
    name: { en: "Hyundai Staria", ar: "هيونداي ستاريا" },
    category: { en: "Family van with driver", ar: "حافلة عائلية مع سائق" },
    capacity: { passengers: 7, luggageAtLeast: 10 },
    photo: { src: "/images/fleet/hyundai-staria-exterior.webp", width: 1200, height: 675, alt: { en: "Hyundai Staria van in black, front three-quarter view", ar: "هيونداي ستاريا فان باللون الأسود من زاوية أمامية جانبية" } },
    suitableFor: {
      en: ["Larger families and small groups travelling together", "Umrah families with luggage", "Airport arrivals and long routes in one vehicle"],
      ar: ["العائلات الكبيرة والمجموعات الصغيرة المسافرة معًا", "عائلات العمرة مع الحقائب", "الوصول من المطار والمسارات الطويلة في مركبة واحدة"],
    },
  },
];

export const otherVehicleValue = "Other / larger group";
