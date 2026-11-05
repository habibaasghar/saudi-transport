"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";

type Props = {
  items: { href: string; label: string }[];
  quoteLabel: string;
  openLabel: string;
  closeLabel: string;
  navLabel: string;
  otherLocale: "en" | "ar";
  otherLabel: string;
};

export function MobileNav({ items, quoteLabel, openLabel, closeLabel, navLabel, otherLocale, otherLabel }: Props) {
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
          <Link href="/#quote" className="btn btn--primary" onClick={close}>{quoteLabel}</Link>
          <Link href="/" locale={otherLocale} hrefLang={otherLocale} lang={otherLocale} className="lang-switch" onClick={close}>{otherLabel}</Link>
        </div>
      </div>
    </>
  );
}
