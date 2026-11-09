"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

type Props = {
  items: { href: string; label: string }[];
  quoteLabel: string;
  quoteHref: string;
  switchHref: string;
  openLabel: string;
  closeLabel: string;
  navLabel: string;
  otherLocale: "en" | "ar";
  otherLabel: string;
  whatsappHref: string;
  telHref: string;
  mailHref: string;
  whatsappLabel: string;
  callLabel: string;
  emailLabel: string;
  phoneDisplay: string;
};

export function MobileNav({ items, quoteLabel, quoteHref, switchHref, openLabel, closeLabel, navLabel, otherLocale, otherLabel, whatsappHref, telHref, mailHref, whatsappLabel, callLabel, emailLabel, phoneDisplay }: Props) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.add("nav-open");
    const panel = panelRef.current!;
    const focusables = () => Array.from(panel.querySelectorAll<HTMLElement>("a, button"));
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      } else if (e.key === "Tab") {
        const f = focusables();
        const first = f[0];
        const last = f[f.length - 1];
        const active = document.activeElement;
        if (e.shiftKey && (active === first || active === toggleRef.current)) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("nav-open");
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((o) => !o)}
      >
        <span aria-hidden="true" className="menu-toggle__bars" />
      </button>
      <div id="mobile-nav" ref={panelRef} className="mobile-nav" hidden={!open} role="dialog" aria-modal="true" aria-label={navLabel}>
        <nav aria-label={navLabel}>
          <ul>
            {items.map((i) => (
              <li key={i.href}><Link href={i.href} onClick={close}>{i.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="mobile-nav__foot">
          {quoteHref.startsWith("#") ? (
            <a href={quoteHref} className="btn btn--primary" onClick={close}>{quoteLabel}</a>
          ) : (
            <Link href={quoteHref} className="btn btn--primary" onClick={close}>{quoteLabel}</Link>
          )}
          <div className="mobile-nav__contact">
            <a href={whatsappHref} className="btn cta cta--whatsapp" target="_blank" rel="noopener noreferrer" onClick={close}>
              <WhatsAppIcon className="cta__icon" />
              <span>{whatsappLabel}</span>
            </a>
            <a href={telHref} className="btn cta cta--ghost cta--call" onClick={close}>
              <PhoneIcon className="cta__icon" />
              <span>{callLabel} <bdi dir="ltr">{phoneDisplay}</bdi></span>
            </a>
            <a href={mailHref} className="btn cta cta--ghost cta--email" onClick={close}>
              <MailIcon className="cta__icon" />
              <span>{emailLabel}</span>
            </a>
          </div>
          <Link href={switchHref} locale={otherLocale} hrefLang={otherLocale} lang={otherLocale} className="lang-switch" onClick={close}>{otherLabel}</Link>
        </div>
      </div>
    </>
  );
}
