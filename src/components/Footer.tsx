import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getPage } from "@/content/registry";
import { navItems } from "@/lib/nav";
import { ContactCta } from "./ContactCta";
import { CONTACT } from "@/config/contact";

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
  "fleet",
];

const footerRiyadh = [
  "services/city-transport/riyadh",
  "services/airport-transfers/riyadh-airport",
  "services/tourism-transport/riyadh-sightseeing",
  "services/event-transportation/riyadh",
  "services/intercity-transfers/riyadh-to-dammam",
  "services/intercity-transfers/riyadh-to-jeddah",
  "services/intercity-transfers/riyadh-to-makkah",
  "services/intercity-transfers/riyadh-to-madinah",
  "services/intercity-transfers/riyadh-to-doha",
  "services/intercity-transfers/riyadh-to-dubai",
] as const;

export async function Footer({ locale }: { locale: Locale }) {
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
            <p className="footer__phone"><bdi dir="ltr">{CONTACT.phoneDisplay}</bdi></p>
            <p className="footer__mail"><bdi dir="ltr">{CONTACT.email}</bdi></p>
            <div className="cta-row">
              <ContactCta kind="whatsapp" locale={locale} size="sm" />
              <ContactCta kind="call" locale={locale} size="sm" variant="ghost" />
              <ContactCta kind="email" locale={locale} size="sm" variant="ghost" />
            </div>
          </div>
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
          <div>
            <h2>{t("riyadh")}</h2>
            <ul>
              {footerRiyadh.map((p) => (
                <li key={p}><Link href={`/${p}`}>{getPage(p)!.copy[locale].nav}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{t("legal")}</h2>
            <ul>
              <li>{t("privacy")} <small>({t("soon")})</small></li>
              <li>{t("terms")} <small>({t("soon")})</small></li>
            </ul>
            <h2>{t("language")}</h2>
            <ul>
              {routing.locales.map((x) => (
                <li key={x}>
                  {x === locale ? (
                    <span aria-current="true">{l(x)}</span>
                  ) : (
                    <Link href="/" locale={x} hrefLang={x} lang={x}>{l(x)}</Link>
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
