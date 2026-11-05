import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { HeroArt } from "./HeroArt";
import { QuickStart } from "./QuickStart";

export async function Hero() {
  const t = await getTranslations("hero");
  const a = await getTranslations("a11y");
  return (
    <section className="hero" aria-labelledby="hero-title">
      <HeroArt />
      <span className="sr-only">{a("heroArt")}</span>
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--light">{t("eyebrow")}</p>
          <h1 id="hero-title">{t("title")}</h1>
          <p className="hero__sub">{t("subtitle")}</p>
          <div className="hero__actions">
            <Link href="/#quote" className="btn btn--primary btn--lg">{t("ctaQuote")}</Link>
            <Link href="/#services" className="btn btn--ghost btn--lg">{t("ctaServices")}</Link>
          </div>
          <p className="hero__note">{t("note")}</p>
        </div>
        <QuickStart />
      </div>
    </section>
  );
}
