import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getPage } from "@/content/registry";
import { priceFor, PRICES_UPDATED } from "@/content/prices";
import { vehicleRoutes } from "@/content/vehicle-pages";

const DEV = process.env.NODE_ENV !== "production";

/**
 * Vehicle pages: the routes this vehicle is booked for most, each linked to its route page, with the distance and
 * driving time already published there. A "from" price column appears only when content/prices.ts has a price for this
 * vehicle on at least one listed route (dev shows "SAR ___" so the empty slots are easy to see).
 */
export async function VehicleRoutes({ path, locale }: { path: string; locale: Locale }) {
  const v = vehicleRoutes[path];
  if (!v) return null;
  const t = await getTranslations({ locale, namespace: "vehicleRoutes" });
  const p = await getTranslations({ locale, namespace: "prices" });
  const fmt = new Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-US");
  const rows = v.routes.map((r) => ({ r, page: getPage(r.path), price: priceFor(r.path)?.[v.vehicle] ?? null })).filter((x) => x.page);
  const showPrice = DEV || rows.some((x) => x.price !== null);

  return (
    <section className="section section--sand" aria-labelledby="vroutes-h">
      <div className="wrap">
        <h2 id="vroutes-h" className="table-title">{t("title")}</h2>
        <div className="table-wrap" tabIndex={0} role="region" aria-labelledby="vroutes-h">
          <table>
            <thead>
              <tr>
                <th scope="col">{t("route")}</th>
                <th scope="col">{t("distance")}</th>
                <th scope="col">{t("time")}</th>
                {showPrice && <th scope="col">{t("price")}</th>}
              </tr>
            </thead>
            <tbody>
              {rows.map(({ r, page, price }) => (
                <tr key={r.path}>
                  <th scope="row"><Link href={`/${r.path}`}>{page!.copy[locale].nav}</Link></th>
                  <td>{r.km[locale]}</td>
                  <td>{r.time[locale]}</td>
                  {showPrice && <td>{price !== null ? p("from", { amount: fmt.format(price) }) : DEV ? <mark>{p("from", { amount: "___" })}</mark> : t("onRequest")}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="prices__note">
          {t("source")}
          {showPrice && <> {p("note")}</>}
          {showPrice && PRICES_UPDATED && <> {p("updated")}: <time dateTime={PRICES_UPDATED}>{PRICES_UPDATED}</time></>}
        </p>
      </div>
    </section>
  );
}
