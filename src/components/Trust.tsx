import { useTranslations } from "next-intl";

export default function Trust() {
  const t = useTranslations("trust");
  const items = t.raw("items") as { title: string; text: string }[];
  return (
    <section id="about" className="section" aria-labelledby="trust-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 id="trust-title">{t("title")}</h2>
          <p className="lead">{t("lead")}</p>
        </div>
        <div className="trust-grid">
          {items.map((i) => (
            <div key={i.title} className="trust-item">
              <h3>{i.title}</h3>
              <p>{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
