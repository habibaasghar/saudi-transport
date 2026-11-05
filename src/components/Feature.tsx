import { useTranslations } from "next-intl";

function Art({ kind }: { kind: "airport" | "route" }) {
  return kind === "airport" ? (
    <svg viewBox="0 0 400 320" aria-hidden="true" focusable="false">
      <rect width="400" height="320" fill="#0F1B2D" />
      <circle cx="300" cy="90" r="34" fill="#C9A877" />
      <path d="M20 250C90 70 220 40 370 120" fill="none" stroke="#F3ECE0" strokeOpacity=".6" strokeWidth="1.5" strokeDasharray="3 7" />
      <path d="M338 96l22 22-30 4 8-26z" fill="#F3ECE0" />
      <path d="M0 270c70-30 130-30 200 0s140 20 200-10v60H0z" fill="#1F4D3A" />
      <path d="M0 300c90-20 170-10 250 5s110 0 150-8v23H0z" fill="#A4543B" opacity=".7" />
    </svg>
  ) : (
    <svg viewBox="0 0 400 320" aria-hidden="true" focusable="false">
      <rect width="400" height="320" fill="#0F1B2D" />
      <path d="M50 240C120 240 120 150 200 150s90-70 150-70" fill="none" stroke="#C9A877" strokeWidth="2" strokeDasharray="2 9" strokeLinecap="round" />
      <circle cx="50" cy="240" r="10" fill="#C9A877" />
      <circle cx="50" cy="240" r="20" fill="none" stroke="#C9A877" strokeOpacity=".4" />
      <circle cx="200" cy="150" r="6" fill="#F3ECE0" />
      <circle cx="350" cy="80" r="10" fill="#A4543B" />
      <circle cx="350" cy="80" r="20" fill="none" stroke="#A4543B" strokeOpacity=".6" />
      <path d="M0 290c80-25 160-25 240 0s120 10 160-10v40H0z" fill="#1F4D3A" />
    </svg>
  );
}

export default function Feature({ id, ns, art, flip = false }: { id: string; ns: "airport" | "intercity"; art: "airport" | "route"; flip?: boolean }) {
  const t = useTranslations(ns);
  const points = t.raw("points") as string[];
  return (
    <section id={id} className={`section ${flip ? "" : "alt"}`} aria-labelledby={`${id}-title`}>
      <div className={`container split ${flip ? "flip" : ""}`}>
        <div>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 id={`${id}-title`}>{t("title")}</h2>
          <p className="lead" style={{ marginBlockStart: "1.25rem" }}>
            {t("lead")}
          </p>
          <ul className="points">
            {points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <a href="#quote" className="btn btn-dark">
            {t("cta")} <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
        <div className="split-art">
          <Art kind={art} />
        </div>
      </div>
    </section>
  );
}
