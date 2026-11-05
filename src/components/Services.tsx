import { useTranslations } from "next-intl";
import { services } from "@/lib/site";

export default function Services() {
  const t = useTranslations("services");
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 id="services-title">{t("title")}</h2>
          <p className="lead">{t("lead")}</p>
        </div>
        <ul className="service-grid">
          {services.map((s, i) => (
            <li key={s.id} className="service-card">
              <span className="num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{t(`items.${s.id}.title`)}</h3>
              <p>{t(`items.${s.id}.text`)}</p>
              {/* Switches to the dedicated service page link once `page` is set in lib/site.ts */}
              <a href={s.page ?? "#quote"}>
                {t("learn")} <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
