import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section id="servicios" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase">
            Servicios
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-paper mt-4 mb-16">
            Lo que construimos
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Reveal
                key={service.title}
                delay={0.15 + idx * 0.08}
                className="h-full"
              >
                <article className="group h-full bg-deep border border-stroke rounded-card p-7 md:p-8 transition-all duration-300 hover:border-sky/40 hover:-translate-y-0.5">
                  <Icon
                    className="h-7 w-7 text-electric mb-6"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <h3 className="font-sans font-semibold text-lg text-paper mb-2">
                    {service.title}
                  </h3>
                  <p className="text-mute text-sm leading-relaxed">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
