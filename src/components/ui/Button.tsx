import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
};

const BASE =
  "inline-flex items-center justify-center rounded-pill px-6 py-3 text-sm sm:text-base font-medium transition-colors duration-200";

const VARIANTS = {
  primary: "bg-electric text-paper hover:bg-sky",
  secondary:
    "border border-stroke text-paper hover:border-sky hover:text-sky bg-transparent",
} as const;

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const isExternal = href.startsWith("http");
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`.trim();

  return (
    <a
      href={href}
      className={classes}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
