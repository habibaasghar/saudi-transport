import { getTranslations } from "next-intl/server";
import { SectionHead } from "./SectionHead";

const keys = ["comms", "info", "experience", "planning", "support"] as const;

export async function Trust() {
  const t = await getTranslations("trust");
  return (
    <section id="trust" className="section section--sand" aria-labelledby="trust-h">
      <div className="wrap">
        <SectionHead id="trust-h" eyebrow={t("eyebrow")} title={t("title")} />
        <dl className="trust">
          {keys.map((k) => (
            <div key={k}>
              <dt>{t(`items.${k}.title`)}</dt>
              <dd>{t(`items.${k}.text`)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
