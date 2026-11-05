import { getTranslations } from "next-intl/server";
import { SectionHead } from "./SectionHead";

const keys = ["one", "two", "three"] as const;

export async function HowItWorks() {
  const t = await getTranslations("how");
  return (
    <section id="how" className="section section--night" aria-labelledby="how-h">
      <div className="wrap">
        <SectionHead id="how-h" eyebrow={t("eyebrow")} title={t("title")} />
        <ol className="steps">
          {keys.map((k, i) => (
            <li key={k}>
              <span className="steps__n" aria-hidden="true">{i + 1}</span>
              <h3>{t(`steps.${k}.title`)}</h3>
              <p>{t(`steps.${k}.text`)}</p>
            </li>
          ))}
        </ol>
        <p className="steps__note">{t("note")}</p>
      </div>
    </section>
  );
}
