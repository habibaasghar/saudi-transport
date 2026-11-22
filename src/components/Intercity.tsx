import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { servicePath } from "@/lib/site";
import { getPage } from "@/content/registry";
import type { Locale } from "@/i18n/routing";
import { SectionHead } from "./SectionHead";

const HOME_ROUTES = [
  "services/intercity-transfers/makkah-to-madinah",
  "services/intercity-transfers/jeddah-to-makkah",
  "services/intercity-transfers/jeddah-to-madinah",
  "services/intercity-transfers/riyadh-to-jeddah",
  "services/intercity-transfers/riyadh-to-dammam",
  "services/intercity-transfers/riyadh-to-makkah",
  "services/intercity-transfers/riyadh-to-madinah",
  "services/intercity-transfers/madinah-to-makkah",
  "services/intercity-transfers/jeddah-to-riyadh",
  "services/intercity-transfers/jeddah-to-taif",
];

export async function Intercity({ locale }: { locale: Locale }) {
  const t = await getTranslations("intercity");
  // Highest-demand corridors (Phase 1 research) that have their own live, indexable route page.
  const routes = HOME_ROUTES.map(getPage).filter((p) => p !== undefined);
  return (
    <section id="intercity" className="section section--palm" aria-labelledby="intercity-h">
      <div className="wrap split split--rev">
        <div className="split__art route" aria-hidden="true">
          <svg viewBox="0 0 400 300" focusable="false">
            <path d="M40 240 C 120 60, 260 280, 360 60" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2 10" strokeLinecap="round" />
            <circle cx="40" cy="240" r="9" fill="currentColor" />
            <circle cx="360" cy="60" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div>
          <SectionHead id="intercity-h" eyebrow={t("eyebrow")} title={t("title")} intro={t("text")} />
          {routes.length > 0 ? (
            <>
              <h3 className="mini-title">{t("listTitle")}</h3>
              <ul className="chips">
                {routes.map((r) => (
                  <li key={r.path}><Link href={`/${r.path}/`}>{r.copy[locale].nav}</Link></li>
                ))}
              </ul>
            </>
          ) : (
            <div className="note-box">
              <h3>{t("emptyTitle")}</h3>
              <p>{t("emptyText")}</p>
            </div>
          )}
          <Link href={servicePath.intercity} className="btn btn--primary btn--lg">{t("cta")}</Link>
        </div>
      </div>
    </section>
  );
}
