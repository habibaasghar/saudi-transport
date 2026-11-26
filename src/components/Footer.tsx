import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getPage } from "@/content/registry";
import { navItems } from "@/lib/nav";
import { ContactCta } from "./ContactCta";
import { CONTACT } from "@/config/contact";
import { FooterSocial } from "./SocialLinks";

const footerServices = [
  "services/airport-transfers",
  "services/umrah-transport",
  "services/intercity-transfers",
  "services/chauffeur-services",
  "services/event-transportation",
  "luxury-transportation",
  "services/cross-border-transfers",
  "services/city-transport",
  "services/tourism-transport",
  "services/group-transportation",
  "services/special-transportation",
  "services/recovery-heavy-transport",
  "services/recovery-heavy-transport/satha-car-recovery",
  "services/recovery-heavy-transport/truck-recovery",
  "services/recovery-heavy-transport/lowbed-transport",
  "fleet",
];

/** Sitewide region hubs: each region lists its city hubs and main airport, so every region gets a crawl path. */
const C = "services/city-transport";
const A = "services/airport-transfers";
const footerRegions = [
  { key: "hejaz", paths: [`${C}/jeddah`, `${C}/makkah`, `${C}/madinah`, "services/tourism-transport/taif", `${C}/yanbu`, `${A}/jeddah-airport`, `${A}/yanbu-airport`] },
  { key: "central", paths: [`${C}/riyadh`, `${C}/buraidah`, `${C}/hail`, `${A}/riyadh-airport`, `${A}/qassim-airport`] },
  { key: "eastern", paths: [`${C}/dammam`, `${C}/al-khobar`, `${C}/dhahran`, `${C}/jubail`, `${C}/al-ahsa`, `${A}/dammam-airport`] },
  { key: "northWest", paths: [`${C}/tabuk`, "services/tourism-transport/alula", `${A}/alula-airport`, `${A}/tabuk-airport`] },
  { key: "south", paths: [`${C}/abha`, `${C}/khamis-mushait`, `${C}/jazan`, `${C}/najran`, `${C}/al-baha`] },
] as const;

export async function Footer({ locale, switchHref = "/" }: { locale: Locale; switchHref?: string }) {
  const t = await getTranslations("footer");
  const n = await getTranslations("nav");
  const a = await getTranslations("a11y");
  const l = await getTranslations("lang");
  const c = await getTranslations("contact");

  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <p className="footer__logo"><Image src="/logo.webp" alt="RideSaudi" width={830} height={360} sizes="200px" className="logo logo--footer" /></p>
          <p className="footer__tag">{t("tagline")}</p>
          <div className="footer__contact">
            <h2>{c("footerHeading")}</h2>
            <p className="footer__phone">{c("whatsappNumber")}: <bdi dir="ltr">{CONTACT.whatsappDisplay}</bdi></p>
            <p className="footer__mail"><bdi dir="ltr">{CONTACT.email}</bdi></p>
            <div className="cta-row">
              <ContactCta kind="whatsapp" locale={locale} size="sm" />
              <ContactCta kind="email" locale={locale} size="sm" variant="ghost" />
            </div>
          </div>
          <FooterSocial />
        </div>
        <nav aria-label={a("footerNav")} className="footer__cols">
          <div>
            <h2>{t("explore")}</h2>
            <ul>
              {navItems.map((i) => <li key={i.key}><Link href={i.href}>{n(i.key)}</Link></li>)}
              <li><Link href="/blog">{locale === "ar" ? "الأدلة" : "Guides"}</Link></li>
            </ul>
          </div>
          <div>
            <h2>{t("services")}</h2>
            <ul>
              {footerServices.map((p) => (
                <li key={p}><Link href={`/${p}`}>{getPage(p)!.copy[locale].nav}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer__regions">
            <h2>{t("regions")}</h2>
            {footerRegions.map((r) => (
              <div key={r.key}>
                <h3>{t(`region.${r.key}`)}</h3>
                <ul>
                  {r.paths.map((p) => (
                    <li key={p}><Link href={`/${p}`}>{getPage(p)!.copy[locale].nav}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h2>{t("legal")}</h2>
            <ul>
              <li><Link href="/privacy-policy">{t("privacy")}</Link></li>
              <li><Link href="/terms-and-conditions">{t("terms")}</Link></li>
              <li><Link href="/contact">{t("contactPage")}</Link></li>
            </ul>
            <h2>{t("language")}</h2>
            <ul>
              {routing.locales.map((x) => (
                <li key={x}>
                  {x === locale ? (
                    <span aria-current="true">{l(x)}</span>
                  ) : (
                    <Link href={switchHref} locale={x} hrefLang={x} lang={x}>{l(x)}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div className="wrap footer__base">
        <p>{t("contactText")}</p>
        <p>{t("copyright", { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
}
