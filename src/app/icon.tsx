import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          width="32"
          height="32"
          viewBox="8 25 220 175"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="c-icon" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#6B97FF" />
              <stop offset="1" stopColor="#2F6BFF" />
            </linearGradient>
          </defs>
          <g
            fill="none"
            stroke="url(#c-icon)"
            strokeWidth="14"
            strokeLinecap="round"
          >
            <path d="M124 190 C124 162 124 112 124 80" />
            <path d="M90 182 C92 152 154 126 124 80" />
            <path d="M158 182 C156 152 94 126 124 80" />
          </g>
          <circle cx="124" cy="78" r="16" fill="#F4F6FC" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
