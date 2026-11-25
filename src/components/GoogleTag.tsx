/**
 * Google tag for the Google Tag Manager container, as Google asks: in <head> on every page, once.
 * It also defines window.gtag, so the conversion events in lib/analytics.ts reach the container's dataLayer
 * even when NEXT_PUBLIC_GA_ID is not set.
 */
export const GTM_ID = "GTM-NB9KHHW4";

export function GoogleTag() {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} />
      <script
        id="google-tag-init"
        dangerouslySetInnerHTML={{
          __html: "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());",
        }}
      />
    </>
  );
}
