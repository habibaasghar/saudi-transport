import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { confirmed } from "@/lib/site";
import type { Locale } from "@/i18n/routing";
import { SectionHead } from "./SectionHead";

export async function Intercity({ locale }: { locale: Locale }) {
  const t = await getTranslations("intercity");
  const routes = confirmed.routes;
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
                {routes.map((r, i) => (
                  <li key={i}>{r.from[locale]} <span aria-hidden="true">{locale === "ar" ? "←" : "→"}</span> {r.to[locale]}</li>
                ))}
              </ul>
            </>
          ) : (
            <div className="note-box">
              <h3>{t("emptyTitle")}</h3>
              <p>{t("emptyText")}</p>
            </div>
          )}
          <Link href={{ pathname: "/", query: { service: "intercity" }, hash: "quote" }} className="btn btn--primary btn--lg">{t("cta")}</Link>
        </div>
      </div>
    </section>
  );
}
