import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { Document, Font, Image, Page, renderToBuffer, StyleSheet, Text, View } from "@react-pdf/renderer";
import { CONTACT } from "@/config/contact";
import { money, QUOTE_TERMS } from "@/lib/quotation";
import type { QuotationBundle } from "../services/crm";

/**
 * Quotation PDF (A4, English). Customer-entered text (names, addresses) may be Arabic, so every text run falls back
 * to Noto Sans Arabic. Fonts ship in the repo (SIL OFL, see fonts/OFL-LICENSE.txt) and are traced into the serverless
 * bundle through next.config.ts outputFileTracingIncludes.
 */
const FONT_DIR = join(process.cwd(), "src", "server", "pdf", "fonts");
let registered = false;
let logo: Buffer | null | undefined;
const logoData = () => {
  if (logo === undefined) { try { logo = readFileSync(join(process.cwd(), "public", "logo.png")); } catch { logo = null; } }
  return logo;
};
function registerFonts() {
  if (registered) return;
  Font.register({ family: "Noto", fonts: [
    { src: join(FONT_DIR, "noto-sans-latin-400-normal.woff"), fontWeight: 400 },
    { src: join(FONT_DIR, "noto-sans-latin-700-normal.woff"), fontWeight: 700 },
  ] });
  Font.register({ family: "NotoArabic", fonts: [
    { src: join(FONT_DIR, "noto-sans-arabic-arabic-400-normal.woff"), fontWeight: 400 },
    { src: join(FONT_DIR, "noto-sans-arabic-arabic-700-normal.woff"), fontWeight: 700 },
  ] });
  // Never hyphenate names or addresses.
  Font.registerHyphenationCallback((w) => [w]);
  registered = true;
}

const NAVY = "#0B1F3A";
const SKY = "#38BDF8";
const MUTED = "#5b6678";
const LINE = "#dde3ec";

const s = StyleSheet.create({
  page: { fontFamily: ["Noto", "NotoArabic"] as unknown as string, fontSize: 9.5, color: NAVY, paddingBottom: 50 },
  head: { backgroundColor: NAVY, paddingVertical: 16, paddingHorizontal: 36, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  logo: { width: 110, height: 48, objectFit: "contain", backgroundColor: "#ffffff", borderRadius: 4, padding: 4 },
  headRight: { alignItems: "flex-end" },
  title: { color: "#ffffff", fontSize: 20, fontWeight: 700 },
  sub: { color: SKY, fontSize: 10, marginTop: 4 },
  body: { paddingHorizontal: 36, paddingTop: 16 },
  meta: { flexDirection: "row", justifyContent: "space-between", marginBottom: 6 },
  metaBox: { width: "48%" },
  label: { color: MUTED, fontSize: 8, textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 2 },
  value: { fontSize: 11, fontWeight: 700 },
  h: { fontSize: 10.5, fontWeight: 700, marginTop: 10, marginBottom: 4, paddingBottom: 3, borderBottomWidth: 1, borderBottomColor: LINE },
  row: { flexDirection: "row", paddingVertical: 3, borderBottomWidth: 0.5, borderBottomColor: LINE },
  k: { width: "34%", color: MUTED },
  v: { width: "66%" },
  price: { marginTop: 12, backgroundColor: "#EAF6FF", borderRadius: 6, padding: 12, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  priceAmt: { fontSize: 20, fontWeight: 700 },
  list: { marginTop: 2 },
  li: { flexDirection: "row", marginBottom: 2 },
  dot: { width: 10 },
  liText: { flex: 1 },
  foot: { position: "absolute", bottom: 22, left: 36, right: 36, borderTopWidth: 1, borderTopColor: LINE, paddingTop: 8, flexDirection: "row", justifyContent: "space-between", color: MUTED, fontSize: 8 },
});

const lines = (t?: string | null) => (t ?? "").split(/\r?\n/).map((x) => x.trim()).filter(Boolean);
const fmtDate = (ymd?: string | null) => {
  if (!ymd) return "";
  const d = new Date(`${ymd}T00:00:00Z`);
  return Number.isNaN(d.getTime()) ? ymd : d.toLocaleDateString("en-GB", { timeZone: "UTC", weekday: "short", day: "numeric", month: "long", year: "numeric" });
};

function Row({ k, v }: { k: string; v?: string | number | null }) {
  if (v === undefined || v === null || v === "") return null;
  return <View style={s.row} wrap={false}><Text style={s.k}>{k}</Text><Text style={s.v}>{String(v)}</Text></View>;
}
function List({ items }: { items: string[] }) {
  return <View style={s.list}>{items.map((x, i) => <View key={i} style={s.li}><Text style={s.dot}>•</Text><Text style={s.liText}>{x}</Text></View>)}</View>;
}

export function QuotationDoc({ b, issued }: { b: QuotationBundle; issued: Date }) {
  const { quote: q, inquiry: i, customer: c } = b;
  const pax = [i.adults ? `${i.adults} adult${i.adults === 1 ? "" : "s"}` : "", i.children ? `${i.children} ${i.children === 1 ? "child" : "children"}` : "", i.infants ? `${i.infants} infant${i.infants === 1 ? "" : "s"}` : ""].filter(Boolean).join(", ");
  const bags = [i.largeBags ? `${i.largeBags} large` : "", i.smallBags ? `${i.smallBags} small` : ""].filter(Boolean).join(", ");
  return (
    <Document title={`RideSaudi quotation ${q.reference}`} author="RideSaudi" subject={`Quotation for inquiry ${i.reference}`}>
      <Page size="A4" style={s.page}>
        <View style={s.head}>
          {/* eslint-disable-next-line jsx-a11y/alt-text -- react-pdf Image has no alt */}
          {logoData() ? <Image src={{ data: logoData()!, format: "png" }} style={s.logo} /> : <Text style={s.title}>RideSaudi</Text>}
          <View style={s.headRight}>
            <Text style={s.title}>QUOTATION</Text>
            <Text style={s.sub}>{q.reference}</Text>
          </View>
        </View>
        <View style={s.body}>
          <View style={s.meta}>
            <View style={s.metaBox}>
              <Text style={s.label}>Prepared for</Text>
              <Text style={s.value}>{c.name}</Text>
              {c.email ? <Text>{c.email}</Text> : null}
              {c.phone ? <Text>{c.phone}</Text> : null}
            </View>
            <View style={[s.metaBox, { alignItems: "flex-end" }]}>
              <Text style={s.label}>Issued</Text>
              <Text style={s.value}>{issued.toLocaleDateString("en-GB", { timeZone: "Asia/Riyadh", day: "numeric", month: "long", year: "numeric" })}</Text>
              <Text style={[s.label, { marginTop: 4 }]}>Valid until</Text>
              <Text style={s.value}>{fmtDate(q.validUntil)}</Text>
              <Text style={[s.label, { marginTop: 4 }]}>Inquiry reference</Text>
              <Text>{i.reference}</Text>
            </View>
          </View>

          <Text style={s.h}>Journey</Text>
          <Row k="Pickup" v={i.pickup} />
          <Row k="Destination" v={i.dropoff} />
          <Row k="Travel date" v={`${fmtDate(i.pickupDate)}${i.pickupTime ? `, ${i.pickupTime}` : ""}`} />
          <Row k="Trip type" v={i.tripType === "round_trip" ? "Round trip" : "One way"} />
          {i.tripType === "round_trip" ? <Row k="Return" v={`${fmtDate(i.returnDate)}${i.returnTime ? `, ${i.returnTime}` : ""}`} /> : null}
          <Row k="Flight" v={i.flightNo} />
          <Row k="Passengers" v={pax} />
          <Row k="Luggage" v={bags} />
          <Row k="Vehicle" v={q.vehicle} />

          <View style={s.price} wrap={false}>
            <View>
              <Text style={s.label}>Quoted price</Text>
              <Text style={{ color: MUTED, fontSize: 9 }}>{i.tripType === "round_trip" ? "Total for both journeys" : "Total for the journey"}, private vehicle with driver</Text>
            </View>
            <Text style={s.priceAmt}>{money(q.amount, q.currency)}</Text>
          </View>

          {lines(q.inclusions).length ? <><Text style={s.h}>Included</Text><List items={lines(q.inclusions)} /></> : null}
          {lines(q.exclusions).length ? <><Text style={s.h}>Not included</Text><List items={lines(q.exclusions)} /></> : null}
          {lines(q.notes).length ? <><Text style={s.h}>Notes</Text>{lines(q.notes).map((x, k) => <Text key={k} style={{ marginBottom: 3 }}>{x}</Text>)}</> : null}

          <Text style={s.h}>Terms</Text>
          <List items={[`Valid until ${fmtDate(q.validUntil)}.`, ...QUOTE_TERMS]} />

          <Text style={s.h}>Confirm your booking</Text>
          <Text>Reply to the email this quotation came with, or message us on WhatsApp {CONTACT.whatsappDisplay} (WhatsApp only) quoting {q.reference}.</Text>
        </View>
        <View style={s.foot} fixed>
          <Text>RideSaudi · {CONTACT.website.replace(/^https?:\/\//, "").replace(/\/$/, "")} · {CONTACT.email} · WhatsApp {CONTACT.whatsappDisplay}</Text>
          <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
}

export async function renderQuotationPdf(b: QuotationBundle, issued = b.quote.sentAt ?? b.quote.createdAt): Promise<Buffer> {
  registerFonts();
  return renderToBuffer(<QuotationDoc b={b} issued={issued} />);
}

export const quotationFilename = (ref: string) => `RideSaudi-Quotation-${ref}.pdf`;
