import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { DeviceFrame } from "@/components/ui/DeviceFrame";

const ATIENDEIA_DEMO_WHATSAPP = `https://wa.me/524772762700?text=${encodeURIComponent(
  "Hola Trenova, quiero ver una demo de AtiendeIA para mi negocio.",
)}`;

export function AtiendeIaHero() {
  return (
    <section
      id="hero"
      className="relative flex items-center px-6 overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-electric/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
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
          <div className="relative">
            <DeviceFrame
              variant="browser"
              src="/images/products/atiendeia/conversaciones-escritorio.webp"
              alt="Panel de AtiendeIA mostrando conversaciones de WhatsApp atendidas en tiempo real"
              width={1400}
              height={626}
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
            <DeviceFrame
              variant="phone"
              src="/images/products/atiendeia/conversaciones-movil.webp"
              alt="AtiendeIA en el celular mostrando la lista de conversaciones"
              width={720}
              height={1555}
              sizes="160px"
              className="hidden sm:block absolute -bottom-8 -right-4 w-[130px] md:w-[160px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
