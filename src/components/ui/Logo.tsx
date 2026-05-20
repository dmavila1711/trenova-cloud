type LogoProps = {
  variant?: "full" | "mark";
  className?: string;
  ariaLabel?: string;
};

export function Logo({ variant = "full", className, ariaLabel }: LogoProps) {
  const isFull = variant === "full";
  const idCobalt = `trenova-cobalt-${variant}`;
  const idGlow = `trenova-glow-${variant}`;
  const viewBox = isFull ? "8 18 480 180" : "8 25 220 175";

  return (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      focusable="false"
    >
      <defs>
        <linearGradient id={idCobalt} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6B97FF" />
          <stop offset="1" stopColor="#2F6BFF" />
        </linearGradient>
        <radialGradient id={idGlow} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#2F6BFF" stopOpacity="0.6" />
          <stop offset="1" stopColor="#2F6BFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="124" cy="132" r="104" fill={`url(#${idGlow})`} opacity="0.55" />
      <circle cx="124" cy="78" r="46" fill={`url(#${idGlow})`} />

      <g
        fill="none"
        stroke={`url(#${idCobalt})`}
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

      {isFull && (
        <>
          <text
            x="232"
            y="134"
            fontFamily="'Hanken Grotesk', Arial, sans-serif"
            fontSize="50"
            fontWeight="700"
            letterSpacing="-1"
          >
            <tspan fill="#F4F6FC">tren</tspan>
            <tspan fill="#6B97FF">ova</tspan>
          </text>
          <text
            x="234"
            y="161"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="10.5"
            letterSpacing="3"
            fill="#6E7691"
          >
            TECNOLOGÍA QUE ENTRELAZA
          </text>
        </>
      )}
    </svg>
  );
}
