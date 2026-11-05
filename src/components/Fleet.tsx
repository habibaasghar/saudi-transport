import { useTranslations } from "next-intl";
import { fleet } from "@/lib/site";

export default function Fleet() {
  const t = useTranslations("fleet");
  const slots = t.raw("slots") as string[];
  return (
    <section id="fleet" className="section" aria-labelledby="fleet-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 id="fleet-title">{t("title")}</h2>
          <p className="lead">{t("lead")}</p>
        </div>
        {fleet.length > 0 ? (
          <ul className="fleet-grid">
            {fleet.map((v) => (
              <li key={v.id} className="fleet-card filled">
                <h3>{v.name}</h3>
                <p className="tag">
                  {v.seats} {t("seats")} · {v.bags} {t("bags")}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <ul className="fleet-grid" aria-hidden="true">
              {slots.map((s) => (
                <li key={s} className="fleet-card">
                  <h3>{s}</h3>
                  <span className="tag">—</span>
                </li>
              ))}
            </ul>
            <div className="fleet-empty">
              <h3>{t("emptyTitle")}</h3>
              <p>{t("emptyText")}</p>
              <a href="#quote" className="btn btn-outline">
                {t("cta")}
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
