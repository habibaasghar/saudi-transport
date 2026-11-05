"use client";
import { useEffect, useRef, useState } from "react";

type L = { href: string; label: string };

export default function MobileNav({
  links,
  cta,
  ctaHref,
  openLabel,
  closeLabel,
  navLabel,
}: {
  links: L[];
  cta: string;
  ctaHref: string;
  openLabel: string;
  closeLabel: string;
  navLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      }
      if (e.key === "Tab" && panel.current) {
        const f = [btn.current, ...Array.from(panel.current.querySelectorAll<HTMLElement>("a"))].filter(Boolean) as HTMLElement[];
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        ref={btn}
        type="button"
        className="menu-btn"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          {open ? <path d="M5 5l12 12M17 5L5 17" /> : <path d="M3 7h16M3 15h16" />}
        </svg>
      </button>
      <nav ref={panel} id="mobile-nav" className="nav-panel" aria-label={navLabel} hidden={!open}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href={ctaHref} className="btn btn-primary" onClick={() => setOpen(false)}>
          {cta}
        </a>
      </nav>
    </>
  );
}
