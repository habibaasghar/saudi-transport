import { useTranslations } from "next-intl";
import QuoteForm from "./QuoteForm";
import TrackedLink from "./TrackedLink";

/** Original illustration (desert dunes at dusk). Not a photograph and implies no vehicle or fleet. */
function DuneArt() {
  return (
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0F1B2D" />
          <stop offset="0.62" stopColor="#172a41" />
          <stop offset="1" stopColor="#3a3a3d" />
        </linearGradient>
      </defs>
      <rect width="1440" height="900" fill="url(#sky)" />
      <g fill="#FBFBFA" opacity=".55">
        <circle cx="120" cy="110" r="1.6" />
        <circle cx="310" cy="60" r="1.2" />
        <circle cx="520" cy="150" r="1.4" />
        <circle cx="760" cy="80" r="1.2" />
        <circle cx="980" cy="40" r="1.6" />
        <circle cx="1180" cy="120" r="1.2" />
        <circle cx="1330" cy="200" r="1.4" />
      </g>
      <circle cx="1040" cy="470" r="92" fill="#C9A877" opacity=".92" />
      <circle cx="1040" cy="470" r="150" fill="none" stroke="#C9A877" strokeOpacity=".25" />
      <path d="M0 640C180 560 300 560 470 620s330 70 520 10 330-40 450 20v250H0z" fill="#1F4D3A" opacity=".85" />
      <path d="M0 720C200 650 340 680 520 730s360 40 560-20 250-30 360 10v180H0z" fill="#A4543B" opacity=".55" />
      <path d="M0 800C260 740 420 790 640 820s420-30 800-20v100H0z" fill="#0F1B2D" />
    </svg>
  );
}

export default function Hero({ locale }: { locale: string }) {
  const t = useTranslations("hero");
  const c = useTranslations("common");
  return (
    <section className="hero on-night" aria-labelledby="hero-title">
      <div className="hero-art" role="img" aria-label={t("artLabel")}>
        <DuneArt />
      </div>
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h1 id="hero-title">{t("title")}</h1>
          <p className="lead">{t("lead")}</p>
          <div className="hero-actions">
            <TrackedLink href="#quote" className="btn btn-primary" event="quote_cta_click" where="hero">
              {c("getQuote")} <span className="arrow" aria-hidden="true">→</span>
            </TrackedLink>
            <a href="#services" className="btn btn-ghost">
              {c("exploreServices")}
            </a>
          </div>
          <p className="hero-note">{t("note")}</p>
        </div>
        <div id="quote" style={{ scrollMarginBlockStart: "6rem" }}>
          <QuoteForm locale={locale} />
        </div>
      </div>
    </section>
  );
}
