"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./Icons";
import { track } from "@/lib/analytics";

type Props = {
  href: string;
  label: string;
  aria: string;
  locale: string;
  bar: { quote: string; whatsapp: string; aria: string };
};

/**
 * Site-wide quick contact.
 *  - Phones (< 700px): a bottom bar with "Get a quote" (primary) and WhatsApp.
 *  - Larger screens: the floating WhatsApp button.
 * Both hide while the quote form is on screen, so they never cover form fields or the submit button.
 * There is no call button: RideSaudi takes WhatsApp and email only.
 */
export function FloatingWhatsApp({ href, label, aria, locale, bar }: Props) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = document.getElementById("quote");
    if (!el || typeof IntersectionObserver === "undefined") return;
    // Hide once the quote section reaches the top 65% of the screen. A ratio threshold would fail on
    // phones, where the section is taller than the screen and 15% of it never fits in view.
    const io = new IntersectionObserver(([e]) => setHidden(e.isIntersecting), { rootMargin: "0px 0px -35% 0px", threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Pages without a quote section (contact, legal) send the visitor to the homepage form.
  const quoteHref = `/${locale}/#quote`;
  const onQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    track("quote_cta_click", { location: "sticky_bar", language: locale });
    const el = document.getElementById("quote");
    if (!el) return;
    e.preventDefault();
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    // Go straight to the form: on phones the section intro sits a full screen above it.
    (el.querySelector("form") ?? el).scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", "#quote");
    // Move focus into the form so keyboard and screen-reader users land in the right place.
    el.querySelector<HTMLElement>("select, input")?.focus({ preventScroll: true });
  };

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`wa-float${hidden ? " wa-float--hidden" : ""}`}
        aria-label={aria}
        title={label}
        tabIndex={hidden ? -1 : 0}
      >
        <WhatsAppIcon className="wa-float__icon" />
        <span className="wa-float__label">{label}</span>
      </a>
      <nav className={`sticky-bar${hidden ? " sticky-bar--hidden" : ""}`} aria-label={bar.aria} aria-hidden={hidden || undefined}>
        <a href={quoteHref} className="sticky-bar__quote" onClick={onQuote} tabIndex={hidden ? -1 : 0}>{bar.quote}</a>
        <a href={href} className="sticky-bar__wa" target="_blank" rel="noopener noreferrer" aria-label={aria} tabIndex={hidden ? -1 : 0}>
          <WhatsAppIcon className="sticky-bar__icon" />
          <span>{bar.whatsapp}</span>
        </a>
      </nav>
    </>
  );
}
