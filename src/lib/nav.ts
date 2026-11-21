/**
 * Primary navigation. Luxury and Event transportation are deliberately first-class here.
 * `children` are registry page paths shown in a dropdown (desktop) or an expandable group (mobile);
 * their labels come from each page's own `nav` copy, so English and Arabic never drift.
 * Keep each list short: this is navigation to the main pages, not a full sitemap.
 */
const S = "services";
const I = `${S}/intercity-transfers`;
const A = `${S}/airport-transfers`;
const C = `${S}/city-transport`;
const U = `${S}/umrah-transport`;
const HT = `${S}/recovery-heavy-transport`;

export type NavKey = "services" | "routes" | "airports" | "cities" | "umrah" | "luxury" | "events" | "heavy" | "contact";
export type NavItem = { key: NavKey; href: string; children?: readonly string[]; /** Hidden on narrower desktop widths to keep the bar on one line. */ optional?: boolean };

export const navItems: readonly NavItem[] = [
  {
    key: "services",
    href: "/services",
    children: [S, A, I, U, `${S}/chauffeur-services`, C, `${S}/cross-border-transfers`, `${S}/group-transportation`, `${S}/tourism-transport`, `${S}/special-transportation`, "fleet"],
  },
  {
    key: "routes",
    href: "/services/intercity-transfers",
    children: [
      I,
      `${I}/makkah-to-madinah`,
      `${I}/madinah-to-makkah`,
      `${I}/jeddah-to-makkah`,
      `${I}/makkah-to-jeddah`,
      `${I}/jeddah-to-madinah`,
      `${I}/madinah-to-jeddah`,
      `${I}/riyadh-to-dammam`,
      `${I}/dammam-to-riyadh`,
      `${I}/riyadh-to-jeddah`,
      `${I}/jeddah-to-riyadh`,
      `${I}/riyadh-to-makkah`,
      `${I}/riyadh-to-manama`,
      `${I}/dammam-to-bahrain`,
    ],
  },
  {
    key: "airports",
    href: "/services/airport-transfers",
    children: [A, `${A}/jeddah-airport`, `${A}/riyadh-airport`, `${A}/madinah-airport`, `${A}/dammam-airport`, `${A}/taif-airport`],
  },
  {
    key: "cities",
    href: "/services/city-transport",
    children: [C, `${C}/riyadh`, `${C}/jeddah`, `${C}/makkah`, `${C}/madinah`, `${C}/dammam`, `${C}/al-khobar`],
  },
  {
    key: "umrah",
    href: "/services/umrah-transport",
    children: [U, `${U}/jeddah-airport-to-makkah`, `${U}/makkah-ziyarat`, `${U}/madinah-ziyarat`, `${U}/family-umrah-transport`, `${U}/private-umrah-chauffeur`],
  },
  { key: "luxury", href: "/luxury-transportation" },
  { key: "events", href: "/services/event-transportation" },
  {
    key: "heavy",
    href: `/${HT}`,
    children: [HT, `${HT}/satha-car-recovery`, `${HT}/car-transport-between-cities`, `${HT}/lowbed-transport`, `${HT}/heavy-equipment-transport`, `${HT}/excavator-transport`, `${HT}/wheel-loader-transport`, `${HT}/forklift-transport`, `${HT}/crane-transport`],
  },
  { key: "contact", href: "/#quote", optional: true },
];

export type ResolvedNavItem = { key: string; href: string; label: string; optional?: boolean; children?: { href: string; label: string }[] };
