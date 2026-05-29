import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const ATIENDEIA_DEMO_WHATSAPP = `https://wa.me/524772762700?text=${encodeURIComponent(
  "Hola Trenova, quiero ver una demo de AtiendeIA para mi negocio.",
)}`;

export function AtiendeIaHero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)] flex items-center px-6 overflow-hidden pt-24 pb-16 md:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-electric/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="space-y-7 text-center lg:text-left">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase">
              AtiendeIA · Producto Trenova
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-paper">
              Tu negocio pierde clientes cuando tarda en responder WhatsApp.{" "}
              <span className="text-electric">
                AtiendeIA los atiende por ti.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-mute text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Asistente inteligente que conoce tu negocio. Responde al
              instante, registra prospectos y te avisa cuando necesitas
              intervenir.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Button href={ATIENDEIA_DEMO_WHATSAPP} variant="primary">
                Solicitar demo
              </Button>
              <Button href="#como-funciona" variant="secondary">
                Ver cómo funciona
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.35}>
          <ChatMockup />
        </Reveal>
      </div>
    </section>
  );
}

function ChatMockup() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-md bg-deep border border-stroke rounded-card p-6 sm:p-7 shadow-2xl shadow-ink/50"
    >
      <div className="flex items-center justify-between pb-4 border-b border-stroke/60 mb-5">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-electric/20 flex items-center justify-center">
            <span className="font-display text-sm font-semibold text-sky">
              Z
            </span>
          </div>
          <div className="leading-tight">
            <p className="font-sans text-sm font-semibold text-paper">
              Zapatería Reyes
            </p>
            <p className="font-mono text-[10px] tracking-[0.2em] text-sky uppercase">
              En línea
            </p>
          </div>
        </div>
        <p className="font-mono text-[10px] text-mute">09:47</p>
      </div>

      <div className="space-y-3">
        <div className="flex justify-end">
          <div className="max-w-[80%] bg-paper/5 border border-stroke rounded-2xl rounded-tr-sm px-4 py-2.5">
            <p className="font-sans text-sm text-paper leading-snug">
              Hola, ¿tienen del 28?
            </p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="max-w-[85%] bg-electric/15 border border-electric/30 rounded-2xl rounded-tl-sm px-4 py-2.5">
            <p className="font-mono text-[10px] tracking-[0.2em] text-sky uppercase mb-1">
              AtiendeIA
            </p>
            <p className="font-sans text-sm text-paper leading-snug">
              ¡Hola! Sí, tenemos del 28 en negro y café. ¿Quieres apartarlo en
              la sucursal del centro?
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-stroke/60 flex items-center gap-2">
        <Check className="h-3.5 w-3.5 text-sky" strokeWidth={2.5} />
        <p className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase">
          Respondido al instante
        </p>
      </div>
    </div>
  );
}
