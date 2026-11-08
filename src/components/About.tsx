import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SectionHead } from "./SectionHead";

const links = [
  { key: "riyadh", href: "/services/city-transport/riyadh" },
  { key: "airport", href: "/services/airport-transfers" },
  { key: "intercity", href: "/services/intercity-transfers" },
  { key: "border", href: "/services/cross-border-transfers" },
] as const;

/** Answer-first definition of RideSaudi plus the four main entry links (humans, search and AI answers). */
export async function About() {
  const t = await getTranslations("about");
  return (
    <section id="about" className="section section--sand" aria-labelledby="about-h">
      <div className="wrap">
        <SectionHead id="about-h" eyebrow={t("eyebrow")} title={t("title")} />
        <p className="about-lead">{t("lead")}</p>
        <h3 className="mini-title">{t("linksTitle")}</h3>
        <ul className="chips">
          {links.map((l) => (
            <li key={l.key}><Link href={l.href}>{t(`links.${l.key}`)}</Link></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
