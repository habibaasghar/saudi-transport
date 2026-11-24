"use client";

import { useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { readAttribution } from "@/lib/attribution";
import { track, trackLead } from "@/lib/analytics";
import { heavyGroup, validateHeavyQuick, type HeavyQuickErrors } from "@/lib/heavy-quote";
import { whatsappHref } from "@/config/contact";

type Status = "idle" | "sending" | "success" | "failed" | "rateLimited";

/**
 * Above-the-fold recovery / lowbed request: what, where from, where to, WhatsApp number. Someone on the roadside cannot
 * fill in the full form. It creates a real heavy enquiry (POST /api/heavy-quote/ with quick: true); if delivery fails the
 * same details open as a WhatsApp message, so the lead is not lost.
 */
export function HeavyQuickForm({ locale, service, pickup: initialPickup = "" }: { locale: string; service?: string; pickup?: string }) {
  const t = useTranslations("heavy.quick");
  const uid = useId();
  const group = heavyGroup(service);
  const recovery = group === "recovery" || group === "truck";
  const [d, setD] = useState({ loadType: "", pickup: initialPickup, dropoff: "", phone: "" });
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<HeavyQuickErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [reference, setReference] = useState<string | undefined>();
  const [startedAt] = useState(() => Date.now());
  const started = useRef(false);
  const sending = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  const set = (k: keyof typeof d, v: string) => {
    if (!started.current) {
      started.current = true;
      track("quote_form_start", { form: "heavy_quick", service: service ?? "", language: locale });
    }
    setD((x) => ({ ...x, [k]: v }));
  };
  const wa = (ref?: string) => whatsappHref(t("whatsappMessage", { ref: ref ?? "-", load: d.loadType || "-", pickup: d.pickup || "-", dropoff: d.dropoff || "-" }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (sending.current) return;
    const errs = validateHeavyQuick(d);
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) {
      track("form_error", { form: "heavy_quick", field: first });
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    sending.current = true;
    setStatus("sending");
    try {
      const res = await fetch("/api/heavy-quote/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ quick: true, ...d, service: service ?? "other_heavy", locale, website, startedAt, source: window.location.pathname, attribution: readAttribution() }),
      });
      if (res.ok) {
        const j = await res.json().catch(() => ({}));
        setReference(j.reference);
        // Fired only after the backend accepted the enquiry; no personal data is sent to analytics.
        track("quick_form_submit", { form: "heavy_quick", service: service ?? "", language: locale });
        trackLead({ form: "heavy_quick", service: `heavy_${service ?? "other_heavy"}`, language: locale, complete: false });
        setStatus("success");
      } else {
        track("quote_submission_error", { form: "heavy_quick", status: res.status, language: locale });
        setStatus(res.status === 429 ? "rateLimited" : "failed");
      }
    } catch {
      track("quote_submission_error", { form: "heavy_quick", status: 0, language: locale });
      setStatus("failed");
    }
    sending.current = false;
  }

  if (status === "success") {
    return (
      <div className="panel quick" role="status" aria-live="polite">
        <p className="panel__title">{t("successTitle")}</p>
        {reference && <p><strong>{t("reference", { ref: reference })}</strong></p>}
        <p>{t(recovery ? "successRecovery" : "successCargo")}</p>
        <a href={wa(reference)} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--block">{t(recovery ? "sendPin" : "sendPhotos")}</a>
      </div>
    );
  }

  const field = (k: keyof typeof d, label: string, placeholder: string, required: boolean, extra: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div className="field">
      <label htmlFor={`${uid}-${k}`}>{label}</label>
      <input id={`${uid}-${k}`} name={k} type="text" autoComplete="off" placeholder={placeholder} value={d[k]} onChange={(e) => set(k, e.target.value)} required={required} aria-invalid={errors[k] ? true : undefined} aria-describedby={errors[k] ? `${uid}-${k}-e` : undefined} {...extra} />
      {errors[k] && <p id={`${uid}-${k}-e`} className="field__error">{t(`errors.${errors[k]}`)}</p>}
    </div>
  );

  return (
    <form ref={formRef} className="panel quick" onSubmit={onSubmit} noValidate aria-labelledby={`${uid}-t`}>
      <h2 id={`${uid}-t`} className="panel__title">{t(`titles.${group}`)}</h2>
      {field("loadType", t(recovery ? "vehicle" : "machine"), t(group === "truck" ? "truckPh" : recovery ? "vehiclePh" : "machinePh"), true, { maxLength: 80 })}
      {field("pickup", t("pickup"), t("pickupPh"), true, { maxLength: 200 })}
      {field("dropoff", t("dropoff"), t("dropoffPh"), false, { maxLength: 200 })}
      {field("phone", t("phone"), "+966 5x xxx xxxx", true, { type: "tel", inputMode: "tel", autoComplete: "tel", dir: "ltr", maxLength: 20 })}
      {/* Spam trap: never displayed. */}
      <div className="hp" hidden>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <button type="submit" className="btn btn--primary btn--block" disabled={status === "sending"}>{status === "sending" ? t("sending") : t("submit")}</button>
      <p className="panel__hint">{t.rich("privacy", { privacy: (chunks) => <Link href="/privacy-policy">{chunks}</Link> })}</p>
      {(status === "failed" || status === "rateLimited") && (
        <div role="alert" className="quick__fail">
          <p>{t(status)}</p>
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--block">{t("sendOnWhatsApp")}</a>
        </div>
      )}
    </form>
  );
}
