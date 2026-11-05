"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const KEY = "rs-analytics-consent";

function load(id: string) {
  if (document.getElementById("ga-script")) return;
  const w = window as unknown as { dataLayer: unknown[]; gtag?: (...a: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function () {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", id, { anonymize_ip: true, allow_google_signals: false, allow_ad_personalization_signals: false });
  const s = document.createElement("script");
  s.id = "ga-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
}

/** Renders nothing and loads nothing unless NEXT_PUBLIC_GA_ID is set AND the visitor accepts. */
export default function Analytics() {
  const t = useTranslations("consent");
  const [state, setState] = useState<"unknown" | "granted" | "denied">("unknown");

  useEffect(() => {
    if (!GA_ID) return;
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(KEY);
    } catch {}
    if (saved === "granted") {
      setState("granted");
      load(GA_ID);
    } else if (saved === "denied") setState("denied");
  }, []);

  if (!GA_ID || state !== "unknown") return null;

  const choose = (v: "granted" | "denied") => {
    try {
      localStorage.setItem(KEY, v);
    } catch {}
    setState(v);
    if (v === "granted") load(GA_ID);
  };

  return (
    <div className="consent-banner" role="region" aria-label="Cookies">
      <p>{t("text")}</p>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button type="button" className="btn btn-ghost" onClick={() => choose("denied")}>{t("decline")}</button>
        <button type="button" className="btn btn-primary" onClick={() => choose("granted")}>{t("accept")}</button>
      </div>
    </div>
  );
}
