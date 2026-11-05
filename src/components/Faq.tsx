import { useTranslations } from "next-intl";

/** Native details/summary: keyboard and screen-reader accessible, works without JavaScript, content stays in the HTML. */
export default function Faq() {
  const t = useTranslations("faq");
  const items = t.raw("items") as { q: string; a: string }[];
  return (
    <section id="faq" className="section alt" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 id="faq-title">{t("title")}</h2>
        </div>
        <div className="faq-list">
          {items.map((i) => (
            <details key={i.q}>
              <summary>{i.q}</summary>
              <p className="answer">{i.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
