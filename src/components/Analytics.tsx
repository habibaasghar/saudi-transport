"use client";

import Script from "next/script";
import { useEffect } from "react";
import { track } from "@/lib/analytics";
import { captureAttribution } from "@/lib/attribution";
import { CONTACT } from "@/config/contact";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
const VALID = /^G-[A-Z0-9]{4,}$/.test(GA_ID);

/** Loads GA4 only when NEXT_PUBLIC_GA_ID is set, and reports WhatsApp / phone / email clicks site-wide. */
export function Analytics() {
  useEffect(() => {
    captureAttribution();
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const where = a.closest("header") ? "header" : a.closest("footer") ? "footer" : a.classList.contains("wa-float") ? "floating" : "content";
      if (/^https:\/\/wa\.me\//.test(href)) {
        // Which service and language the click came from; a click is contact intent, never a booking.
        const hero = document.querySelector<HTMLAnchorElement>("main a[data-wa-heavy]");
        const heavy = hero?.dataset.waHeavy;
        // Header and footer WhatsApp links carry the private-transfer message: on recovery and lowbed pages use the page's own.
        if (where === "header" || where === "footer") {
          a.dataset.waBase ??= href;
          a.href = hero?.href ?? a.dataset.waBase;
        }
        track("whatsapp_click", { location: where, service: heavy ? `heavy_${heavy}` : "passenger", language: document.documentElement.lang });
      }
      else if (href.startsWith("tel:")) track("phone_click", { location: where });
      else if (href.startsWith("mailto:")) track("email_click", { location: where });
    };
    // phone_copy: someone copied the WhatsApp number (we take no voice calls, so copying it is contact intent). Only a flag is sent.
    const onCopy = () => {
      const digits = (window.getSelection()?.toString() || "").replace(/\D/g, "");
      if (digits.includes(CONTACT.whatsapp.slice(-9))) track("phone_copy", { location: "selection" });
    };
    document.addEventListener("click", onClick);
    document.addEventListener("copy", onCopy);
    return () => { document.removeEventListener("click", onClick); document.removeEventListener("copy", onCopy); };
  }, []);

  if (!VALID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
