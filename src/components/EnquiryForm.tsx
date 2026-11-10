"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { emptyEnquiry, validateEnquiry, type EnquiryInput, type FieldErrors } from "@/lib/enquiry";
import { formServiceKeys } from "@/lib/site";
import { PREFILL_EVENT } from "@/lib/events";
import { track } from "@/lib/analytics";
import { whatsappHref } from "@/config/contact";

type Status = "idle" | "sending" | "success" | "notConfigured" | "rateLimited" | "failed";

export function EnquiryForm({ locale, defaultService, prefill }: { locale: string; defaultService?: string; prefill?: { pickup: string; dropoff: string } }) {
  const t = useTranslations("form");
  const uid = useId();
  const params = useSearchParams();
  const [data, setData] = useState<EnquiryInput>({ ...emptyEnquiry(), locale, service: defaultService ?? "", pickup: prefill?.pickup ?? "", dropoff: prefill?.dropoff ?? "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [receipt, setReceipt] = useState<{ reference?: string; wa: string } | null>(null);
  const [started, setStarted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [today] = useState(() => new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10));

  const set = <K extends keyof EnquiryInput>(k: K, v: EnquiryInput[K]) => {
    if (!started) {
      setStarted(true);
      track("form_start", { form: "quote" });
    }
    setData((d) => ({ ...d, [k]: v }));
  };

  const [startedAt, setStartedAt] = useState(() => Date.now());

  // ?service=airport from service cards (adjust state during render when the param changes)
  const qs = params.get("service");
  const [seenQs, setSeenQs] = useState<string | null>(null);
  if (qs !== seenQs) {
    setSeenQs(qs);
    if (qs && (formServiceKeys as readonly string[]).includes(qs)) setData((d) => ({ ...d, service: qs }));
  }

  // Values handed over from the hero panel
  useEffect(() => {
    const on = (e: Event) => {
      const d = (e as CustomEvent<Record<string, string>>).detail || {};
      setData((prev) => ({
        ...prev,
        service: d.service || prev.service,
        pickup: d.pickup || prev.pickup,
        dropoff: d.dropoff || prev.dropoff,
        date: d.date || prev.date,
      }));
    };
    window.addEventListener(PREFILL_EVENT, on);
    return () => window.removeEventListener(PREFILL_EVENT, on);
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateEnquiry(data);
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) {
      track("form_error", { form: "quote", field: first });
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, startedAt, source: window.location.pathname }),
      });
      if (res.ok) {
        const j = await res.json().catch(() => ({}));
        const sent = data;
        const wa = whatsappHref(
          t("whatsappFollowUp", {
            ref: j.reference ?? "-",
            service: t(`services.${sent.service}` as never),
            pickup: sent.pickup,
            dropoff: sent.dropoff,
            date: sent.date,
            time: sent.time,
            pax: sent.passengers,
          }),
        );
        setReceipt({ reference: j.reference, wa });
        track("generate_lead", { form: "quote", service: sent.service, trip_type: sent.tripType, language: locale });
        setStatus("success");
        setData({ ...emptyEnquiry(), locale });
        setStartedAt(Date.now());
      } else if (res.status === 503) setStatus("notConfigured");
      else if (res.status === 429) setStatus("rateLimited");
      else if (res.status === 422) {
        const j = await res.json().catch(() => ({}));
        setErrors(j.fields || {});
        setStatus("failed");
      } else setStatus("failed");
    } catch {
      setStatus("failed");
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const id = (n: string) => `f-${n}`;
  const errText = (k: keyof EnquiryInput) => (errors[k] ? t(`errors.${errors[k]}`) : null);

  function Field(props: {
    name: keyof EnquiryInput;
    label: string;
    hint?: string;
    type?: string;
    inputMode?: "tel" | "numeric" | "email" | "text";
    autoComplete?: string;
    required?: boolean;
    min?: string | number;
    max?: number;
    maxLength?: number;
    dir?: "ltr";
    wide?: boolean;
  }) {
    const { name, label, hint, type = "text", required, wide, ...rest } = props;
    const err = errText(name);
    const describedBy = [hint ? `${uid}-${name}-h` : "", err ? `${uid}-${name}-e` : ""].filter(Boolean).join(" ") || undefined;
    return (
      <div className={`field${wide ? " field--wide" : ""}`}>
        <label htmlFor={id(name)}>{label}{required && <span aria-hidden="true"> *</span>}</label>
        <input
          id={id(name)}
          name={name}
          type={type}
          value={String(data[name] ?? "")}
          onChange={(e) => set(name, e.target.value as never)}
          required={required}
          aria-invalid={err ? true : undefined}
          aria-describedby={describedBy}
          {...rest}
        />
        {hint && <p id={`${uid}-${name}-h`} className="field__hint">{hint}</p>}
        {err && <p id={`${uid}-${name}-e`} className="field__error">{err}</p>}
      </div>
    );
  }

  const messageKey = status === "idle" || status === "sending" ? null : status;
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form ref={formRef} className="form" onSubmit={onSubmit} noValidate aria-labelledby={`${uid}-title`}>
      <h3 id={`${uid}-title`} className="form__title">{t("title")}</h3>

      {hasErrors && status !== "success" && (
        <p role="alert" className="form__summary">{t("errors.summary")}</p>
      )}

      <fieldset>
        <legend>{t("journey")}</legend>
        <div className="grid">
          <div className="field field--wide">
            <label htmlFor={id("service")}>{t("fields.service")} <span aria-hidden="true">*</span></label>
            <select
              id={id("service")}
              name="service"
              value={data.service}
              onChange={(e) => set("service", e.target.value)}
              required
              aria-invalid={errors.service ? true : undefined}
              aria-describedby={errors.service ? `${uid}-service-e` : undefined}
            >
              <option value="">{t("fields.servicePlaceholder")}</option>
              {formServiceKeys.map((k) => <option key={k} value={k}>{t(`services.${k}`)}</option>)}
            </select>
            {errors.service && <p id={`${uid}-service-e`} className="field__error">{t(`errors.${errors.service}`)}</p>}
          </div>
          {Field({ name: "pickup", label: t("fields.pickup"), required: true, autoComplete: "off", maxLength: 160 })}
          {Field({ name: "dropoff", label: t("fields.dropoff"), required: true, autoComplete: "off", maxLength: 160 })}
          <div className="field field--wide">
            <label htmlFor={id("tripType")}>{t("fields.tripType")}</label>
            <select id={id("tripType")} name="tripType" value={data.tripType} onChange={(e) => set("tripType", e.target.value)}>
              <option value="one_way">{t("fields.oneWay")}</option>
              <option value="round_trip">{t("fields.roundTrip")}</option>
            </select>
          </div>
          {Field({ name: "date", label: t("fields.date"), type: "date", required: true, min: today })}
          {Field({ name: "time", label: t("fields.time"), type: "time", required: true })}
          {data.tripType === "round_trip" && (
            <>
              {Field({ name: "returnDate", label: t("fields.returnDate"), type: "date", required: true, min: data.date || today })}
              {Field({ name: "returnTime", label: t("fields.returnTime"), type: "time", required: true })}
            </>
          )}
          {Field({ name: "passengers", label: t("fields.passengers"), type: "number", inputMode: "numeric", required: true, min: 1, max: 100 })}
          {Field({ name: "luggage", label: t("fields.luggage"), type: "number", inputMode: "numeric", min: 0, max: 100 })}
          {data.service === "airport" &&
            Field({ name: "flight", label: t("fields.flight"), hint: t("fields.flightHint"), maxLength: 12, autoComplete: "off", dir: "ltr" })}
          {Field({ name: "vehicle", label: t("fields.vehicle"), hint: t("fields.vehicleHint"), maxLength: 160, wide: true })}
        </div>
      </fieldset>

      <fieldset>
        <legend>{t("you")}</legend>
        <div className="grid">
          {Field({ name: "name", label: t("fields.name"), required: true, autoComplete: "name", maxLength: 160 })}
          {Field({ name: "phone", label: t("fields.phone"), hint: t("fields.phoneHint"), type: "tel", inputMode: "tel", required: true, autoComplete: "tel", maxLength: 20, dir: "ltr" })}
          {Field({ name: "email", label: t("fields.email"), type: "email", inputMode: "email", autoComplete: "email", maxLength: 160, dir: "ltr", wide: true })}
          <div className="field field--wide">
            <label htmlFor={id("notes")}>{t("fields.notes")}</label>
            <textarea id={id("notes")} name="notes" rows={4} maxLength={1500} value={data.notes} onChange={(e) => set("notes", e.target.value)} />
          </div>
        </div>
      </fieldset>

      {/* Honeypot: hidden from people and assistive tech */}
      <div className="hp" aria-hidden="true">
        <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" value={data.website} onChange={(e) => set("website", e.target.value)} /></label>
      </div>

      <div className="check">
        <input
          id={id("consent")}
          name="consent"
          type="checkbox"
          checked={data.consent}
          onChange={(e) => set("consent", e.target.checked)}
          aria-invalid={errors.consent ? true : undefined}
          aria-describedby={errors.consent ? `${uid}-consent-e` : undefined}
        />
        <label htmlFor={id("consent")}>{t("fields.consent")}</label>
      </div>
      {errors.consent && <p id={`${uid}-consent-e`} className="field__error">{t("errors.consent")}</p>}

      <button type="submit" className="btn btn--primary btn--lg btn--block" disabled={status === "sending"}>
        {status === "sending" ? t("sending") : t("submit")}
      </button>

      <div ref={statusRef} tabIndex={-1} role="status" aria-live="polite" className="form__status">
        {messageKey && (
          <p className={status === "success" ? "ok" : "bad"}>{t(`status.${messageKey}`)}</p>
        )}
        {status === "success" && receipt && (
          <p>
            {receipt.reference && <strong>{t("reference", { ref: receipt.reference })} </strong>}
            <a href={receipt.wa} target="_blank" rel="noopener noreferrer" className="btn btn--primary">{t("followUpWhatsApp")}</a>
          </p>
        )}
      </div>
    </form>
  );
}
