import { useTranslations } from "next-intl";

const keys = ["prebooked", "planned", "clear", "bilingual"] as const;

export default function WhyUs() {
  const t = useTranslations("why");
  return (
    <section id="why" className="section on-night" aria-labelledby="why-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 id="why-title">{t("title")}</h2>
          <p className="lead">{t("lead")}</p>
        </div>
        <div className="why-grid">
          {keys.map((k) => (
            <div key={k} className="why-item">
              <h3>{t(`items.${k}.title`)}</h3>
              <p>{t(`items.${k}.text`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
