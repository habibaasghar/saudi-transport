import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { contact, services } from "@/lib/site";
import Wordmark from "./Wordmark";
import { navItems } from "./Header";
import TrackedLink from "./TrackedLink";

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations("footer");
  const n = useTranslations("nav");
  const s = useTranslations("services.items");
  const c = useTranslations("common");
  const base = `/${locale}`;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="brand">
            <Wordmark />
            <p>{t("about")}</p>
          </div>
          <div>
            <h2>{t("explore")}</h2>
            <ul>
              {navItems.map((i) => (
                <li key={i.key}>
                  <a href={`${base}${i.href}`}>{n(i.key)}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{t("servicesHeading")}</h2>
            <ul>
              {services.map((i) => (
                <li key={i.id}>
                  <a href={i.page ?? `${base}#${i.anchor}`}>{s(`${i.id}.title`)}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{t("languageHeading")}</h2>
            <ul>
              <li>
                <Link href="/" locale="en" hrefLang="en" lang="en" aria-current={locale === "en" ? "true" : undefined}>
                  {c("english")}
                </Link>
              </li>
              <li>
                <Link href="/" locale="ar" hrefLang="ar" lang="ar" aria-current={locale === "ar" ? "true" : undefined}>
                  {c("arabic")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>{t("contactHeading")}</h2>
            <p>{t("contactNote")}</p>
            <ul style={{ marginBlockStart: "0.75rem" }}>
              {contact.whatsapp && (
                <li>
                  <TrackedLink href={`https://wa.me/${contact.whatsapp}`} event="whatsapp_click" where="footer">
                    {t("whatsapp")}
                  </TrackedLink>
                </li>
              )}
              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="legal-row">
          <p>
            © {new Date().getFullYear()} RideSaudi. {t("rights")}
          </p>
          <ul>
            <li>
              <Link href="/privacy">{t("privacy")}</Link>
            </li>
            <li>
              <Link href="/terms">{t("terms")}</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
