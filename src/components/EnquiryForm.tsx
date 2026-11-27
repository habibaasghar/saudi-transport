"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { DURATIONS, emptyEnquiry, usesCompany, usesDuration, usesVehicleCount, validateEnquiry, type EnquiryInput, type FieldErrors } from "@/lib/enquiry";
import { readAttribution } from "@/lib/attribution";
import { formServiceKeys } from "@/lib/site";
import { PREFILL_EVENT } from "@/lib/events";
import { track, trackLead } from "@/lib/analytics";
import { whatsappHref } from "@/config/contact";
import { Link } from "@/i18n/navigation";
import { fleetCategories, otherVehicleValue } from "@/content/fleet";

type Status = "idle" | "sending" | "success" | "notConfigured" | "rateLimited" | "failed";
type Step = 1 | 2;

// Today's local date, read only in the browser. The server snapshot is undefined, so the statically
// rendered HTML never carries a build-time date that would mismatch on hydration.
const noSubscribe = () => () => {};
const localToday = () => new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);

/** Fields on step 1 (journey). Everything else is step 2 (contact). Used to send the visitor back to the right step. */
const STEP1: (keyof EnquiryInput)[] = ["service", "company", "pickup", "dropoff", "tripType", "date", "time", "returnDate", "returnTime", "hours", "passengers", "vehicles", "luggage", "smallBags", "childSeats", "flight", "vehicle"];

/**
 * Vehicle cards: owner-confirmed categories only (src/content/fleet.ts). The specific sedan models are folded into
 * "Sedan" to keep the choice short; a model handed over by a vehicle page still shows as its own selected card.
 */
const CARD_KEYS = ["sedan", "toyota-prado", "gmc-yukon", "chevrolet-suburban", "chevrolet-tahoe", "hyundai-staria", "luxury-suv-vip"] as const;

const AIRPORT_RE = /airport|terminal|مطار|\b(RUH|JED|DMM|MED|AHB|TIF|TUU|YNB|ULH|GIZ|ELQ|HAS|AJF|NUM|RSI)\b/i;

export function EnquiryForm({ locale, defaultService, prefill, vehicle }: { locale: string; defaultService?: string; prefill?: { pickup: string; dropoff: string }; vehicle?: string }) {
  const t = useTranslations("form");
  const uid = useId();
  const initial = (): EnquiryInput => ({ ...emptyEnquiry(), locale, service: defaultService ?? "", pickup: prefill?.pickup ?? "", dropoff: prefill?.dropoff ?? "", vehicle: vehicle ?? "" });
  const [data, setData] = useState<EnquiryInput>(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [step, setStep] = useState<Step>(1);
  const [receipt, setReceipt] = useState<{ reference?: string; wa: string } | null>(null);
  const [started, setStarted] = useState(false);
  const sendingRef = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const today = useSyncExternalStore(noSubscribe, localToday, () => undefined);
  const lang = (locale === "ar" ? "ar" : "en") as "en" | "ar";

  const set = <K extends keyof EnquiryInput>(k: K, v: EnquiryInput[K]) => {
    if (!started) {
      setStarted(true);
      track("quote_form_start", { form: "quote", language: locale });
    }
    setData((d) => ({ ...d, [k]: v }));
    // Clear a field's error as soon as the visitor changes it.
    if (errors[k]) setErrors((e) => { const n = { ...e }; delete n[k]; return n; });
  };

  const [startedAt, setStartedAt] = useState(() => Date.now());

  // quote_form_view: once per page view, when at least a third of the form is on screen.
  useEffect(() => {
    const el = formRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((x) => x.isIntersecting)) {
        track("quote_form_view", { form: "quote", language: locale });
        io.disconnect();
      }
    }, { threshold: 0.33 });
    io.observe(el);
    return () => io.disconnect();
  }, [locale]);

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

  const focusField = (name: string) =>
    requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>(`[name="${name}"]`)?.focus());

  function goToStep2() {
    const all = validateEnquiry(data);
    const errs = Object.fromEntries(Object.entries(all).filter(([k]) => STEP1.includes(k as keyof EnquiryInput))) as FieldErrors;
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) {
      track("form_error", { form: "quote", field: first });
      focusField(first);
      return;
    }
    track("quote_form_step", { form: "quote", step: 2, language: locale });
    setStep(2);
    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      focusField("name");
    });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (step === 1) { goToStep2(); return; }
    // Duplicate-submission guard: a fast double click/tap must never send two enquiries.
    if (sendingRef.current) return;
    const errs = validateEnquiry(data);
    setErrors(errs);
    const first = Object.keys(errs)[0] as keyof EnquiryInput | undefined;
    if (first) {
      track("form_error", { form: "quote", field: first });
      if (STEP1.includes(first)) setStep(1);
      focusField(first);
      return;
    }
    sendingRef.current = true;
    setStatus("sending");
    track("quote_form_submit", { form: "quote", service: data.service, trip_type: data.tripType, language: locale });
    try {
      const res = await fetch("/api/enquiry/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, startedAt, source: window.location.pathname, attribution: readAttribution() }),
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
        // No names, phone numbers, emails or journey details are ever sent to analytics.
        track("quote_form_success", { form: "quote", service: sent.service, trip_type: sent.tripType, language: locale });
        trackLead({ form: "quote", service: sent.service, trip_type: sent.tripType, language: locale, complete: j.complete === true });
        // Fired only after the backend accepted the enquiry (never on a button click).
        track("form_submit", { form: "quote", service: sent.service, language: locale });
        // Pickup/drop-off are free text (can be a home address), so they never go to analytics.
        track("quote_request", { service: sent.service, language: locale });
        setStatus("success");
      } else {
        // Everything the visitor typed stays in the form (nothing is reset on failure).
        track("quote_submission_error", { form: "quote", status: res.status, language: locale });
        if (res.status === 503) setStatus("notConfigured");
        else if (res.status === 429) setStatus("rateLimited");
        else if (res.status === 422) {
          const j = await res.json().catch(() => ({}));
          const fields = (j.fields || {}) as FieldErrors;
          setErrors(fields);
          const f = Object.keys(fields)[0] as keyof EnquiryInput | undefined;
          if (f && STEP1.includes(f)) setStep(1);
          setStatus("failed");
        } else setStatus("failed");
      }
    } catch {
      track("quote_submission_error", { form: "quote", status: 0, language: locale });
      setStatus("failed");
    }
    sendingRef.current = false;
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  function reset() {
    setData(initial());
    setErrors({});
    setReceipt(null);
    setStatus("idle");
    setStep(1);
    setStartedAt(Date.now());
    requestAnimationFrame(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
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
    placeholder?: string;
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

  const messageKey = status === "idle" || status === "sending" || status === "success" ? null : status;
  const hasErrors = Object.keys(errors).length > 0;
  const showFlight = data.service === "airport" || AIRPORT_RE.test(`${data.pickup} ${data.dropoff}`) || !!data.flight;
  const cards = [
    ...CARD_KEYS.map((k) => fleetCategories.find((v) => v.key === k)!).filter(Boolean),
    // A specific model chosen on a vehicle page (e.g. Toyota Camry) keeps its own card.
    ...fleetCategories.filter((v) => v.value === data.vehicle && !(CARD_KEYS as readonly string[]).includes(v.key)),
  ];

  if (status === "success") {
    return (
      <div className="form form--done" aria-labelledby={`${uid}-done`}>
        <div ref={statusRef} tabIndex={-1} role="status" aria-live="polite" className="done">
          <span className="done__icon" aria-hidden="true">✓</span>
          <h3 id={`${uid}-done`} className="form__title">{t("success.title")}</h3>
          {receipt?.reference && <p className="done__ref">{t("reference", { ref: receipt.reference })}</p>}
          <p>{t("success.text")}</p>
          <p className="field__hint">{t("success.next")}</p>
          <div className="done__actions">
            {receipt && <a href={receipt.wa} target="_blank" rel="noopener noreferrer" className="btn btn--primary">{t("followUpWhatsApp")}</a>}
            <button type="button" className="btn btn--outline" onClick={reset}>{t("success.again")}</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} className="form" onSubmit={onSubmit} noValidate aria-labelledby={`${uid}-title`}>
      <div className="form__head">
        <h3 id={`${uid}-title`} className="form__title">{t("title")}</h3>
        <ol className="steps" aria-label={t("stepOf", { n: step })}>
          {([1, 2] as const).map((n) => (
            <li key={n} className={n === step ? "is-on" : n < step ? "is-done" : ""} aria-current={n === step ? "step" : undefined}>
              <span aria-hidden="true">{n}</span>{t(n === 1 ? "steps.journey" : "steps.details")}
            </li>
          ))}
        </ol>
      </div>

      {hasErrors && <p role="alert" className="form__summary">{t("errors.summary")}</p>}

      {/* Step 1 stays in the DOM when hidden, so typed values and the server-rendered HTML are kept. */}
      <fieldset hidden={step !== 1}>
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
          {usesCompany(data.service) &&
            Field({ name: "company", label: t("fields.company"), autoComplete: "organization", maxLength: 160, wide: true })}
          {Field({ name: "pickup", label: t("fields.pickup"), required: true, autoComplete: "off", maxLength: 160 })}
          {Field({ name: "dropoff", label: t("fields.dropoff"), required: true, autoComplete: "off", maxLength: 160 })}

          <div className="field field--wide" role="radiogroup" aria-labelledby={`${uid}-trip`}>
            <span id={`${uid}-trip`} className="field__label">{t("fields.tripType")}</span>
            <div className="seg">
              {(["one_way", "round_trip"] as const).map((v) => (
                <label key={v} className={data.tripType === v ? "is-on" : ""}>
                  <input type="radio" name="tripType" value={v} checked={data.tripType === v} onChange={() => set("tripType", v)} />
                  {t(v === "one_way" ? "fields.oneWay" : "fields.roundTrip")}
                </label>
              ))}
            </div>
          </div>
          {Field({ name: "date", label: t("fields.date"), type: "date", required: true, min: today })}
          {Field({ name: "time", label: t("fields.time"), type: "time", required: true })}
          {data.tripType === "round_trip" && (
            <>
              {Field({ name: "returnDate", label: t("fields.returnDate"), type: "date", required: true, min: data.date || today })}
              {Field({ name: "returnTime", label: t("fields.returnTime"), type: "time", required: true })}
            </>
          )}
          {usesDuration(data.service) && (
            <div className="field field--wide">
              <label htmlFor={id("hours")}>
                {t(data.service === "event" ? "fields.durationEvent" : "fields.duration")}
                {data.service === "hourly" && <span aria-hidden="true"> *</span>}
              </label>
              <select
                id={id("hours")}
                name="hours"
                value={data.hours}
                onChange={(e) => set("hours", e.target.value)}
                required={data.service === "hourly"}
                aria-invalid={errors.hours ? true : undefined}
                aria-describedby={`${uid}-hours-h${errors.hours ? ` ${uid}-hours-e` : ""}`}
              >
                <option value="">{t("fields.durationPlaceholder")}</option>
                {DURATIONS.map((h) => (
                  <option key={h} value={h}>
                    {h === "full_day" ? t("fields.durationFullDay") : h === "multi_day" ? t("fields.durationMultiDay") : t("fields.durationHours", { h: Number(h) })}
                  </option>
                ))}
              </select>
              <p id={`${uid}-hours-h`} className="field__hint">{t("fields.durationHint")}</p>
              {errors.hours && <p id={`${uid}-hours-e`} className="field__error">{t(`errors.${errors.hours}`)}</p>}
            </div>
          )}
          <div className="field--wide grid grid--3">
            {Field({ name: "passengers", label: t(data.service === "event" ? "fields.guests" : "fields.passengers"), type: "number", inputMode: "numeric", required: true, min: 1, max: 100 })}
            {Field({ name: "luggage", label: t("fields.luggage"), type: "number", inputMode: "numeric", min: 0, max: 100 })}
            {Field({ name: "smallBags", label: t("fields.smallBags"), type: "number", inputMode: "numeric", min: 0, max: 100 })}
          </div>
          {usesVehicleCount(data.service) &&
            Field({ name: "vehicles", label: t("fields.vehicles"), hint: t("fields.vehiclesHint"), type: "number", inputMode: "numeric", min: 1, max: 50 })}
          {Field({ name: "childSeats", label: t("fields.childSeats"), hint: t("fields.childSeatsHint"), type: "number", inputMode: "numeric", min: 0, max: 10 })}
          {showFlight &&
            Field({ name: "flight", label: t("fields.flight"), hint: t("fields.flightHint"), maxLength: 12, autoComplete: "off", dir: "ltr" })}

          <div className="field field--wide" role="radiogroup" aria-labelledby={`${uid}-veh`} aria-describedby={`${uid}-vehicle-h`}>
            <span id={`${uid}-veh`} className="field__label">{t("fields.vehicle")}</span>
            <div className="vcards">
              <label className={`vcard${data.vehicle === "" ? " is-on" : ""}`}>
                <input type="radio" name="vehicle" value="" checked={data.vehicle === ""} onChange={() => set("vehicle", "")} />
                <b>{t("fields.vehicleAny")}</b><small>{t("fields.vehicleAnySub")}</small>
              </label>
              {cards.map((v) => (
                <label key={v.key} className={`vcard${data.vehicle === v.value ? " is-on" : ""}`}>
                  <input type="radio" name="vehicle" value={v.value} checked={data.vehicle === v.value} onChange={() => set("vehicle", v.value)} />
                  <b>{v.name[lang]}</b>
                  <small>{v.capacity ? t("fields.vehicleCapacity", { n: v.capacity.passengers }) : v.category[lang]}</small>
                </label>
              ))}
              <label className={`vcard${data.vehicle === otherVehicleValue ? " is-on" : ""}`}>
                <input type="radio" name="vehicle" value={otherVehicleValue} checked={data.vehicle === otherVehicleValue} onChange={() => set("vehicle", otherVehicleValue)} />
                <b>{t("fields.vehicleOther")}</b><small>{t("fields.vehicleOtherSub")}</small>
              </label>
            </div>
            <p id={`${uid}-vehicle-h`} className="field__hint">{t("fields.vehicleHint")}</p>
          </div>
        </div>
        <button type="submit" className="btn btn--primary btn--lg btn--block">{t("continue")}</button>
      </fieldset>

      <fieldset hidden={step !== 2}>
        <legend>{t("you")}</legend>
        <p className="recap">
          <span dir="auto">{t("summaryLine", { pickup: data.pickup, dropoff: data.dropoff, date: data.date, time: data.time })}</span>
          <button type="button" className="linkbtn" onClick={() => { setStep(1); focusField("pickup"); }}>{t("back")}</button>
        </p>
        <div className="grid">
          {Field({ name: "name", label: t("fields.name"), required: true, autoComplete: "name", maxLength: 160 })}
          {Field({ name: "phone", label: t("fields.phone"), hint: t("fields.phoneHint"), type: "tel", inputMode: "tel", required: true, autoComplete: "tel", maxLength: 20, dir: "ltr", placeholder: "+966 5X XXX XXXX" })}
          {Field({ name: "email", label: t("fields.email"), hint: t("fields.emailHint"), type: "email", inputMode: "email", required: true, autoComplete: "email", maxLength: 160, dir: "ltr", wide: true })}
          <div className="field field--wide">
            <label htmlFor={id("notes")}>{t(usesDuration(data.service) ? "fields.notesItinerary" : "fields.notes")}</label>
            <textarea id={id("notes")} name="notes" rows={3} maxLength={1500} value={data.notes} onChange={(e) => set("notes", e.target.value)} />
          </div>
        </div>

        {/* Spam trap: never displayed (display: none) and carries no visible label, so people and screen readers never meet it. */}
        <div className="hp" hidden>
          <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={data.website} onChange={(e) => set("website", e.target.value)} />
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
          <label htmlFor={id("consent")}>{t.rich("fields.consent", { privacy: (chunks) => <Link href="/privacy-policy">{chunks}</Link> })}</label>
        </div>
        {errors.consent && <p id={`${uid}-consent-e`} className="field__error">{t("errors.consent")}</p>}
        <p className="form__legal">{t.rich("legal", { terms: (chunks) => <Link href="/terms-and-conditions">{chunks}</Link> })}</p>

        <div className="form__nav">
          <button type="button" className="btn btn--outline" onClick={() => setStep(1)}>{t("back")}</button>
          <button type="submit" className="btn btn--primary btn--lg" disabled={status === "sending"} aria-busy={status === "sending"}>
            {status === "sending" ? t("sending") : t("submit")}
          </button>
        </div>
      </fieldset>

      <div ref={statusRef} tabIndex={-1} role="status" aria-live="polite" className="form__status">
        {messageKey && <p className="bad">{t(`status.${messageKey}`)}</p>}
        {(status === "failed" || status === "notConfigured") && Object.keys(errors).length === 0 && (
          /* Safety net: if online delivery fails, the customer can still send the same details on WhatsApp. */
          <p>
            <a
              href={whatsappHref(
                t("whatsappFallback", {
                  service: data.service ? t(`services.${data.service}` as never) : "-",
                  pickup: data.pickup,
                  dropoff: data.dropoff,
                  date: data.date,
                  time: data.time,
                  pax: data.passengers,
                  bags: data.luggage,
                  name: data.name,
                }),
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              {t("sendOnWhatsApp")}
            </a>
          </p>
        )}
      </div>
    </form>
  );
}
