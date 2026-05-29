import type { ComponentProps, ReactNode } from "react";
import { Info, AlertTriangle, CheckCircle2 } from "lucide-react";

type CalloutType = "info" | "warning" | "success";

const CALLOUT_STYLES: Record<
  CalloutType,
  { Icon: typeof Info; border: string; text: string }
> = {
  info: {
    Icon: Info,
    border: "border-sky/40",
    text: "text-sky",
  },
  warning: {
    Icon: AlertTriangle,
    border: "border-amber-400/40",
    text: "text-amber-300",
  },
  success: {
    Icon: CheckCircle2,
    border: "border-emerald-400/40",
    text: "text-emerald-300",
  },
};

function Callout({
  type = "info",
  children,
}: {
  type?: CalloutType;
  children: ReactNode;
}) {
  const { Icon, border, text } = CALLOUT_STYLES[type];
  return (
    <aside
      className={`my-8 flex gap-4 rounded-card border ${border} bg-deep/60 p-5 sm:p-6`}
    >
      <Icon
        className={`h-5 w-5 flex-shrink-0 mt-0.5 ${text}`}
        strokeWidth={1.75}
        aria-hidden="true"
      />
      <div className="text-paper/90 text-base leading-relaxed [&>p]:m-0 [&>p+p]:mt-3">
        {children}
      </div>
    </aside>
  );
}

export const mdxComponents = {
  h1: (props: ComponentProps<"h1">) => (
    <h1
      className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-paper mt-12 mb-6"
      {...props}
    />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2
      className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-paper mt-12 mb-4"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3
      className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-paper mt-8 mb-3"
      {...props}
    />
  ),
  p: (props: ComponentProps<"p">) => (
    <p
      className="text-paper/90 text-base sm:text-lg leading-relaxed mb-5"
      {...props}
    />
  ),
  a: (props: ComponentProps<"a">) => (
    <a
      className="text-sky hover:text-electric underline underline-offset-4 transition-colors"
      {...props}
    />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul
      className="text-paper/90 text-base sm:text-lg leading-relaxed mb-6 list-disc pl-6 space-y-2 marker:text-sky"
      {...props}
    />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol
      className="text-paper/90 text-base sm:text-lg leading-relaxed mb-6 list-decimal pl-6 space-y-2 marker:text-sky"
      {...props}
    />
  ),
  li: (props: ComponentProps<"li">) => <li className="pl-1" {...props} />,
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-2 border-electric pl-6 my-8 text-mute italic text-base sm:text-lg [&>p]:m-0"
      {...props}
    />
  ),
  code: (props: ComponentProps<"code">) => (
    <code
      className="font-mono text-[0.9em] bg-deep border border-stroke rounded px-1.5 py-0.5 text-paper before:content-none after:content-none"
      {...props}
    />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre
      className="font-mono text-sm bg-deep border border-stroke rounded-card p-5 overflow-x-auto my-6 leading-relaxed [&_code]:bg-transparent [&_code]:border-0 [&_code]:p-0 [&_code]:text-paper"
      {...props}
    />
  ),
  hr: (props: ComponentProps<"hr">) => (
    <hr className="border-stroke/40 my-10" {...props} />
  ),
  Callout,
};
