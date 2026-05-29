import { ImageResponse } from "next/og";

export const alt = "Trenova Cloud — Tecnología que entrelaza";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#06070C",
          color: "#F4F6FC",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          position: "relative",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-280px",
            right: "-280px",
            width: "800px",
            height: "800px",
            display: "flex",
            background:
              "radial-gradient(circle, rgba(47,107,255,0.4) 0%, rgba(47,107,255,0) 65%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <svg
            width="120"
            height="120"
            viewBox="8 25 220 175"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="cobalt-og" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#6B97FF" />
                <stop offset="1" stopColor="#2F6BFF" />
              </linearGradient>
              <radialGradient id="glow-og" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0" stopColor="#2F6BFF" stopOpacity="0.6" />
                <stop offset="1" stopColor="#2F6BFF" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="124" cy="132" r="104" fill="url(#glow-og)" opacity="0.55" />
            <circle cx="124" cy="78" r="46" fill="url(#glow-og)" />
            <g
              fill="none"
              stroke="url(#cobalt-og)"
              strokeWidth="7"
              strokeLinecap="round"
            >
              <path d="M124 190 C124 162 124 112 124 80" strokeOpacity="0.95" />
              <path d="M90 182 C92 152 154 126 124 80" strokeOpacity="0.8" />
              <path d="M158 182 C156 152 94 126 124 80" strokeOpacity="0.7" />
            </g>
            <circle cx="90" cy="182" r="5" fill="#6B97FF" />
            <circle cx="124" cy="190" r="5" fill="#6B97FF" />
            <circle cx="158" cy="182" r="5" fill="#6B97FF" />
            <circle cx="124" cy="78" r="9.5" fill="#F4F6FC" />
            <circle
              cx="124"
              cy="78"
              r="9.5"
              fill="none"
              stroke="#2F6BFF"
              strokeWidth="2.5"
            />
          </svg>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: "72px",
                fontWeight: 700,
                letterSpacing: "-2px",
                lineHeight: 1,
              }}
            >
              <span style={{ color: "#F4F6FC" }}>tre</span>
              <span style={{ color: "#6B97FF" }}>nova</span>
            </div>
            <div
              style={{
                fontSize: "14px",
                letterSpacing: "4.5px",
                color: "#6E7691",
                marginTop: "14px",
                fontWeight: 500,
              }}
            >
              TECNOLOGÍA QUE ENTRELAZA
            </div>
          </div>
        </div>

        <div style={{ flexGrow: 1, display: "flex" }} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "60px",
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: "-1.5px",
            maxWidth: "1000px",
          }}
        >
          <div style={{ display: "flex" }}>Convertimos procesos complejos</div>
          <div style={{ display: "flex" }}>
            en soluciones digitales simples.
          </div>
        </div>

        <div style={{ flexGrow: 1, display: "flex" }} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: "15px",
            letterSpacing: "4.5px",
            color: "#6E7691",
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex" }}>
            INGENIERÍA · IA · AUTOMATIZACIÓN
          </div>
          <div style={{ display: "flex" }}>LEÓN, GTO · MÉXICO</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
