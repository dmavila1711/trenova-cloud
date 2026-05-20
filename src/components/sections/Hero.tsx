import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)] flex items-center px-6 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-electric/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl w-full text-center space-y-8 py-20">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase">
            Ingeniería · IA · Automatización
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-paper max-w-4xl mx-auto">
            Convertimos procesos complejos en soluciones digitales{" "}
            <span className="text-electric">simples</span>.
          </h1>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-mute text-base sm:text-lg max-w-2xl mx-auto">
            Software a la medida, automatización, IA y WhatsApp Business para empresas.
          </p>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button href="#contacto" variant="primary">
              Hablemos
            </Button>
            <Button href="#servicios" variant="secondary">
              Ver servicios
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
