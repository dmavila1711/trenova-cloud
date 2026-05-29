import { MessageCircle, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { WHATSAPP_URL, EMAIL_URL, CONTACT } from "@/lib/constants";

export function CTA() {
  return (
    <section
      id="contacto"
      className="relative px-6 py-24 md:py-32 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-electric/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl w-full text-center space-y-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase">
            Hablemos
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-paper max-w-3xl mx-auto">
            Construyamos lo siguiente.
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-pill bg-electric px-8 py-4 text-base font-medium text-paper hover:bg-sky transition-colors"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={EMAIL_URL}
              className="inline-flex items-center justify-center gap-3 rounded-pill border border-stroke px-8 py-4 text-base font-medium text-paper hover:border-sky hover:text-sky transition-colors"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              Email
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.45}>
          <p className="font-mono text-xs tracking-[0.3em] text-mute uppercase">
            {CONTACT.whatsappDisplay} · León, GTO · México
          </p>
        </Reveal>
      </div>
    </section>
  );
}
