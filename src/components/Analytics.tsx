"use client";

import Script from "next/script";
import { useEffect } from "react";
import { track } from "@/lib/analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
const VALID = /^G-[A-Z0-9]{4,}$/.test(GA_ID);

/** Loads GA4 only when NEXT_PUBLIC_GA_ID is set, and reports WhatsApp / phone / email clicks site-wide. */
export function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const where = a.closest("header") ? "header" : a.closest("footer") ? "footer" : a.classList.contains("wa-float") ? "floating" : "content";
      if (/^https:\/\/wa\.me\//.test(href)) track("whatsapp_click", { location: where });
      else if (href.startsWith("tel:")) track("phone_click", { location: where });
      else if (href.startsWith("mailto:")) track("email_click", { location: where });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
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
