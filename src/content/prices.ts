/**
 * "Starting from SAR" prices per vehicle, shown on route, airport and cross-border pages (PriceFrom component).
 *
 * OWNER TO FILL IN. Every value below is `null` on purpose: no price is published until the owner supplies it
 * (SEO-RULES.md section 3: never invent fares). A page shows the price table only for vehicles that have a number;
 * with all three `null`, the table is not rendered in production. In `next dev` the empty slots show "SAR ___"
 * so the placeholders are easy to spot while reviewing.
 *
 * How to fill in: replace `null` with the lowest one-way price in SAR, e.g. `sedan: 450`.
 * The same price is used in English and Arabic. Update `PRICES_UPDATED` when you change any number.
 */
export type PriceVehicle = "sedan" | "gmc" | "staria";
export type PriceRow = Record<PriceVehicle, number | null>;

/** ISO date the prices were last confirmed by the owner. Shown under the table. */
export const PRICES_UPDATED = "";

const empty = (): PriceRow => ({ sedan: null, gmc: null, staria: null });

export const PRICE_FROM: Record<string, PriceRow> = {
  "services/airport-transfers/al-ahsa-airport": empty(),
  "services/airport-transfers/alula-airport": empty(),
  "services/airport-transfers/dammam-airport": empty(),
  "services/airport-transfers/jeddah-airport": empty(),
  "services/airport-transfers/madinah-airport": empty(),
  "services/airport-transfers/qassim-airport": empty(),
  "services/airport-transfers/riyadh-airport": empty(),
  "services/airport-transfers/tabuk-airport": empty(),
  "services/airport-transfers/taif-airport": empty(),
  "services/airport-transfers/yanbu-airport": empty(),
  "services/cross-border-transfers/bahrain": empty(),
  "services/cross-border-transfers/kuwait": empty(),
  "services/cross-border-transfers/qatar": empty(),
  "services/cross-border-transfers/uae": empty(),
  "services/intercity-transfers/abha-to-jeddah": empty(),
  "services/intercity-transfers/abha-to-riyadh": empty(),
  "services/intercity-transfers/al-khobar-to-riyadh": empty(),
  "services/intercity-transfers/alula-to-dammam": empty(),
  "services/intercity-transfers/alula-to-jeddah": empty(),
  "services/intercity-transfers/alula-to-madinah": empty(),
  "services/intercity-transfers/alula-to-riyadh": empty(),
  "services/intercity-transfers/dammam-to-al-ahsa": empty(),
  "services/intercity-transfers/dammam-to-bahrain": empty(),
  "services/intercity-transfers/dammam-to-doha": empty(),
  "services/intercity-transfers/dammam-to-dubai": empty(),
  "services/intercity-transfers/dammam-to-jeddah": empty(),
  "services/intercity-transfers/dammam-to-jubail": empty(),
  "services/intercity-transfers/dammam-to-riyadh": empty(),
  "services/intercity-transfers/jazan-to-jeddah": empty(),
  "services/intercity-transfers/jeddah-to-abha": empty(),
  "services/intercity-transfers/tabuk-to-alula": empty(),
  "services/intercity-transfers/madinah-to-yanbu": empty(),
  "services/intercity-transfers/madinah-to-tabuk": empty(),
  "services/intercity-transfers/jeddah-to-alula": empty(),
  "services/intercity-transfers/jeddah-to-dammam": empty(),
  "services/intercity-transfers/jeddah-to-jazan": empty(),
  "services/intercity-transfers/jeddah-to-madinah": empty(),
  "services/intercity-transfers/jeddah-to-makkah": empty(),
  "services/intercity-transfers/jeddah-to-riyadh": empty(),
  "services/intercity-transfers/jeddah-to-taif": empty(),
  "services/intercity-transfers/jeddah-to-yanbu": empty(),
  "services/intercity-transfers/madinah-to-alula": empty(),
  "services/intercity-transfers/madinah-to-jeddah": empty(),
  "services/intercity-transfers/madinah-to-makkah": empty(),
  "services/intercity-transfers/madinah-to-riyadh": empty(),
  "services/intercity-transfers/makkah-to-jeddah": empty(),
  "services/intercity-transfers/makkah-to-madinah": empty(),
  "services/intercity-transfers/makkah-to-riyadh": empty(),
  "services/intercity-transfers/makkah-to-taif": empty(),
  "services/intercity-transfers/riyadh-to-abha": empty(),
  "services/intercity-transfers/riyadh-to-abu-dhabi": empty(),
  "services/intercity-transfers/riyadh-to-al-ahsa": empty(),
  "services/intercity-transfers/riyadh-to-al-khobar": empty(),
  "services/intercity-transfers/riyadh-to-alula": empty(),
  "services/intercity-transfers/riyadh-to-buraydah": empty(),
  "services/intercity-transfers/riyadh-to-dammam": empty(),
  "services/intercity-transfers/riyadh-to-doha": empty(),
  "services/intercity-transfers/riyadh-to-dubai": empty(),
  "services/intercity-transfers/riyadh-to-hafar-al-batin": empty(),
  "services/intercity-transfers/riyadh-to-hail": empty(),
  "services/intercity-transfers/riyadh-to-jeddah": empty(),
  "services/intercity-transfers/riyadh-to-jubail": empty(),
  "services/intercity-transfers/riyadh-to-kuwait-city": empty(),
  "services/intercity-transfers/riyadh-to-madinah": empty(),
  "services/intercity-transfers/riyadh-to-makkah": empty(),
  "services/intercity-transfers/riyadh-to-manama": empty(),
  "services/intercity-transfers/riyadh-to-tabuk": empty(),
  "services/intercity-transfers/riyadh-to-taif": empty(),
  "services/intercity-transfers/riyadh-to-yanbu": empty(),
  "services/intercity-transfers/taif-to-jeddah": empty(),
  "services/intercity-transfers/taif-to-makkah": empty(),
  "services/intercity-transfers/yanbu-to-jeddah": empty(),
};

/** Price row for a page, or undefined when the page is not a priced route/airport page. */
export const priceFor = (path: string): PriceRow | undefined => PRICE_FROM[path];
