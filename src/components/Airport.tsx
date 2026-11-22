import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { servicePath } from "@/lib/site";
import { getPage } from "@/content/registry";
import type { Locale } from "@/i18n/routing";
import { SectionHead } from "./SectionHead";

/** Airport pages with their own live, indexable page (linked from the home page so crawlers reach them first). */
const HOME_AIRPORTS = [
  "services/airport-transfers/jeddah-airport",
  "services/airport-transfers/riyadh-airport",
  "services/airport-transfers/madinah-airport",
  "services/airport-transfers/dammam-airport",
  "services/umrah-transport/jeddah-airport-to-makkah",
  "services/airport-transfers/taif-airport",
];

export async function Airport() {
  const t = await getTranslations("airport");
  const locale = (await getLocale()) as Locale;
  const airports = HOME_AIRPORTS.map(getPage).filter((p) => p !== undefined);
  return (
    <section id="airport" className="section section--sand section--split" aria-labelledby="airport-h">
      <div className="wrap split">
        <div>
          <SectionHead id="airport-h" eyebrow={t("eyebrow")} title={t("title")} intro={t("text")} />
          <ul className="ticks">
            <li>{t("points.one")}</li>
            <li>{t("points.two")}</li>
            <li>{t("points.three")}</li>
          </ul>
          {airports.length > 0 && (
            <>
              <h3 className="mini-title">{t("listTitle")}</h3>
              <ul className="chips">
                {airports.map((p) => (
                  <li key={p.path}><Link href={`/${p.path}/`}>{p.copy[locale].nav}</Link></li>
                ))}
              </ul>
            </>
          )}
          <Link href={servicePath.airport} className="btn btn--dark btn--lg">{t("cta")}</Link>
        </div>
        <div className="split__art" aria-hidden="true">
          <svg viewBox="0 0 400 400" focusable="false">
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="200" cy="200" r="60" />
              <circle cx="200" cy="200" r="110" opacity=".6" />
              <circle cx="200" cy="200" r="160" opacity=".35" />
              <path d="M200 40V360M40 200H360" opacity=".35" />
              <path d="M200 140l8 52 52 8-52 8-8 52-8-52-52-8 52-8z" fill="currentColor" stroke="none" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
