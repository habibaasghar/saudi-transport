import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { priceFor, PRICES_UPDATED, type PriceVehicle } from "@/content/prices";

const VEHICLES: PriceVehicle[] = ["sedan", "gmc", "staria"];
const DEV = process.env.NODE_ENV !== "production";

/**
 * "Starting from SAR" per vehicle on route / airport / cross-border pages. Prices come only from content/prices.ts.
 * Production shows vehicles that have a price and nothing at all when none do; dev shows "SAR ___" placeholders.
 */
export async function PriceFrom({ path, locale }: { path: string; locale: Locale }) {
  const row = priceFor(path);
  if (!row) return null;
  const shown = VEHICLES.filter((v) => row[v] !== null || DEV);
  if (!VEHICLES.some((v) => row[v] !== null) && !DEV) return null;
  const t = await getTranslations({ locale, namespace: "prices" });
  const fmt = new Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-US");

  return (
    <section className="section section--white prices" aria-labelledby="prices-h">
      <div className="wrap">
        <h2 id="prices-h" className="table-title">{t("title")}</h2>
        <ul className="prices__list">
          {shown.map((v) => (
            <li key={v} className="prices__item">
              <span className="prices__vehicle">{t(`vehicles.${v}`)}</span>
              <span className="prices__amount">
                {row[v] !== null ? t("from", { amount: fmt.format(row[v] as number) }) : <mark>{t("from", { amount: "___" })}</mark>}
              </span>
            </li>
          ))}
        </ul>
        <p className="prices__note">
          {t("note")}
          {PRICES_UPDATED && <> {t("updated")}: <time dateTime={PRICES_UPDATED}>{PRICES_UPDATED}</time></>}
        </p>
      </div>
    </section>
  );
}
