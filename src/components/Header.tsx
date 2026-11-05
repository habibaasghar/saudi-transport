import { useTranslations } from "next-intl";
import Wordmark from "./Wordmark";
import MobileNav from "./MobileNav";
import LangSwitcher from "./LangSwitcher";
import TrackedLink from "./TrackedLink";

export const navItems = [
  { key: "services", href: "#services" },
  { key: "airport", href: "#airport-transfers" },
  { key: "intercity", href: "#intercity" },
  { key: "fleet", href: "#fleet" },
  { key: "about", href: "#why" },
  { key: "contact", href: "#contact" },
] as const;

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const c = useTranslations("common");
  const links = navItems.map((n) => ({ href: `/${locale}${n.href}`, label: t(n.key) }));
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Wordmark />
        <nav className="nav-desktop" aria-label={c("mainNav")}>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <LangSwitcher locale={locale} label={c("language")} en={c("english")} ar={c("arabic")} />
          <TrackedLink href={`/${locale}#quote`} className="btn btn-primary header-cta" event="quote_cta_click" where="header">
            {c("getQuote")}
          </TrackedLink>
          <MobileNav links={links} cta={c("getQuote")} ctaHref={`/${locale}#quote`} openLabel={c("openMenu")} closeLabel={c("closeMenu")} navLabel={c("mainNav")} />
        </div>
      </div>
    </header>
  );
}
