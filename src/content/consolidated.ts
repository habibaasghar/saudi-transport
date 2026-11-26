/**
 * Consolidated pages (2026-11-23, owner instruction "redirect or whatever is better").
 * Each source page targeted the same search intent as an existing page (docs/RIDESAUDI-INDEXING-RECOVERY-REPORT.md
 * section 6). The source is removed from the registry, sitemap, llms.txt and related links, and its EN + AR URLs
 * 308-redirect in one hop to the destination (next.config.ts). The Luxury section keeps its vehicle-class pages
 * (luxury chauffeur, VIP car service, luxury SUV, VIP delegations), so it stays a first-class category.
 *
 * Kept on purpose: services/special-transportation/business-travel (B2B travel-manager intent, not a chauffeur
 * request), and all luxury vehicle-class pages.
 *
 * No imports: next.config.ts reads this file.
 */
export const consolidated: Record<string, string> = {
  "luxury-transportation/luxury-airport-transfers": "services/airport-transfers/vip-airport-transfer",
  "luxury-transportation/executive-transport": "services/chauffeur-services/business-chauffeur",
  "luxury-transportation/luxury-intercity-transfers": "services/intercity-transfers/private-intercity-chauffeur",
  "luxury-transportation/luxury-family-transport": "services/group-transportation/family-transport",
  "luxury-transportation/premium-group-transport": "services/group-transportation",
  "luxury-transportation/luxury-event-transport": "services/event-transportation/vip-event-chauffeur",
  "services/event-transportation/group-event-transport": "services/event-transportation",
  // 2026-11-27: the GMC and Staria guides targeted the same queries as the new vehicle pages (0 impressions in GSC,
  // 7 Nov to 24 Nov); their content moved into the vehicle pages.
  "blog/luxury-suv-gmc-transfer-saudi-arabia": "fleet/gmc-yukon-with-driver",
  "blog/hyundai-staria-with-driver-family-group-travel": "fleet/hyundai-staria-with-driver",
};

/** Links that the removed pages used to carry, so the remaining luxury pages keep their contextual inlinks. */
export const consolidationLinks: Record<string, string[]> = {
  "services/group-transportation/family-transport": ["luxury-transportation/luxury-suv"],
  "services/chauffeur-services/business-chauffeur": ["luxury-transportation/luxury-chauffeur"],
  "services/intercity-transfers/private-intercity-chauffeur": ["luxury-transportation/luxury-suv", "luxury-transportation/luxury-chauffeur"],
  "services/group-transportation": ["luxury-transportation/vip-delegation-transport"],
  "services/event-transportation/vip-event-chauffeur": ["luxury-transportation/luxury-chauffeur"],
};

/** The one angle a removed page had that its destination lacked, written for the destination (EN + AR). */
export const mergedSections: Record<string, { en: { h: string; p: string[] }; ar: { h: string; p: string[] } }> = {
  "services/group-transportation/family-transport": {
    en: {
      h: "When the family wants a more comfortable vehicle",
      p: ["Some families ask for more space and comfort rather than simply enough seats: a long drive with grandparents, a special occasion or a trip with a lot of luggage. Ask for a larger SUV such as a GMC Yukon, or a Hyundai Staria when seats and bags both matter, and say why. The vehicle offered for your date is confirmed in the quotation; see luxury SUV with driver for what that class covers."],
    },
    ar: {
      h: "حين تريد العائلة مركبة أكثر راحة",
      p: ["تطلب بعض العائلات مساحة وراحة أكبر لا مجرد عدد كافٍ من المقاعد: رحلة طويلة مع الأجداد، أو مناسبة خاصة، أو سفر بأمتعة كثيرة. اطلب سيارة دفع رباعي أكبر مثل جمس يوكن، أو هيونداي ستاريا حين تهم المقاعد والحقائب معًا، واذكر السبب. وتتأكد المركبة المتاحة لتاريخك في عرض السعر؛ وراجع صفحة السيارات الفاخرة رباعية الدفع مع سائق لتعرف ما تشمله هذه الفئة."],
    },
  },
};
