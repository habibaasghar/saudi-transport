import { ImageResponse } from "next/og";

export const alt = "RideSaudi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", background: "#0F1B2D", color: "#FBFBFA", padding: 80, position: "relative" }}>
        <div style={{ position: "absolute", right: 140, top: 110, width: 150, height: 150, borderRadius: 999, background: "#C9A877" }} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 210, background: "#1F4D3A", opacity: 0.55 }} />
        <div style={{ fontSize: 120, display: "flex" }}>
          Ride<span style={{ color: "#C9A877", fontStyle: "italic" }}>Saudi</span>
        </div>
        <div style={{ fontSize: 32, color: "#C9A877", marginTop: 12 }}>ridesaudi.com</div>
      </div>
    ),
    size,
  );
}
