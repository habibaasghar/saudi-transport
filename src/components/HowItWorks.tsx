import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("how");
  const steps = t.raw("steps") as { title: string; text: string }[];
  return (
    <section id="how-it-works" className="section on-night" aria-labelledby="how-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 id="how-title">{t("title")}</h2>
        </div>
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.title} className="step">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="how-note">{t("note")}</p>
      </div>
    </section>
  );
}
