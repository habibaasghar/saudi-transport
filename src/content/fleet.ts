import type { Locale } from "@/i18n/routing";

/**
 * Single source of truth for vehicle categories shown on the homepage, the /fleet/ page and the quote form.
 *
 * RULES (SEO-RULES.md, "no invented facts"):
 *  - Only categories the owner has confirmed are listed. Add a new vehicle here ONLY after the owner has
 *    confirmed availability through RideSaudi's transport partners.
 *  - `capacity` is a number only where the owner confirmed it. Otherwise it stays `null` and the page says the
 *    capacity is confirmed for the actual vehicle in the quotation.
 *  - `photo` stays `undefined` until a photograph of a vehicle actually used for RideSaudi bookings is supplied
 *    (public/images/fleet/..., with alt text in both languages). Never use a stock image as a fleet photograph.
 *  - RideSaudi does not claim to own the vehicles: they are supplied with a driver by transport partners.
 *
 * Candidates awaiting owner confirmation (NOT shown anywhere): Chevrolet Tahoe, GMC Yukon XL, Chevrolet Suburban,
 * Toyota Camry, Ford Taurus, Toyota Hiace, VIP vans, executive and luxury sedans. See docs/phase1/FLEET_VERIFICATION_MATRIX.csv.
 */
type L = Record<Locale, string>;

export type FleetCategory = {
  key: "sedan" | "gmc-yukon" | "hyundai-staria";
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
    suitableFor: {
      en: ["Families and executives who want more space", "Long intercity routes such as Riyadh to Dammam or Makkah to Madinah", "Airport arrivals with luggage"],
      ar: ["العائلات والتنفيذيون الذين يريدون مساحة أوسع", "المسارات الطويلة بين المدن مثل الرياض إلى الدمام ومكة المكرمة إلى المدينة المنورة", "الوصول من المطار مع الحقائب"],
    },
  },
  {
    key: "hyundai-staria",
    value: "Hyundai Staria",
    name: { en: "Hyundai Staria", ar: "هيونداي ستاريا" },
    category: { en: "Family van with driver", ar: "حافلة عائلية مع سائق" },
    capacity: { passengers: 7, luggageAtLeast: 10 },
    suitableFor: {
      en: ["Larger families and small groups travelling together", "Umrah families with luggage", "Airport arrivals and long routes in one vehicle"],
      ar: ["العائلات الكبيرة والمجموعات الصغيرة المسافرة معًا", "عائلات العمرة مع الحقائب", "الوصول من المطار والمسارات الطويلة في مركبة واحدة"],
    },
  },
];

export const otherVehicleValue = "Other / larger group";
