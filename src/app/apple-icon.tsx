import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#06070C",
        }}
      >
        <svg
          width="180"
          height="180"
          viewBox="8 25 220 175"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="c-apple" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#6B97FF" />
              <stop offset="1" stopColor="#2F6BFF" />
            </linearGradient>
            <radialGradient id="g-apple" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor="#2F6BFF" stopOpacity="0.6" />
              <stop offset="1" stopColor="#2F6BFF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="124" cy="132" r="104" fill="url(#g-apple)" opacity="0.55" />
          <circle cx="124" cy="78" r="46" fill="url(#g-apple)" />
          <g
            fill="none"
            stroke="url(#c-apple)"
            strokeWidth="9"
            strokeLinecap="round"
          >
            <path d="M124 190 C124 162 124 112 124 80" strokeOpacity="0.95" />
            <path d="M90 182 C92 152 154 126 124 80" strokeOpacity="0.8" />
            <path d="M158 182 C156 152 94 126 124 80" strokeOpacity="0.7" />
          </g>
          <circle cx="90" cy="182" r="6" fill="#6B97FF" />
          <circle cx="124" cy="190" r="6" fill="#6B97FF" />
          <circle cx="158" cy="182" r="6" fill="#6B97FF" />
          <circle cx="124" cy="78" r="11" fill="#F4F6FC" />
          <circle
            cx="124"
            cy="78"
            r="11"
            fill="none"
            stroke="#2F6BFF"
            strokeWidth="3"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
