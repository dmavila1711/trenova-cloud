import {
  Briefcase,
  HardHat,
  Store,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Vertical = {
  icon: LucideIcon;
  name: string;
};

const VERTICALS: readonly Vertical[] = [
  { icon: Briefcase, name: "Despachos" },
  { icon: HardHat, name: "Constructoras" },
  { icon: Store, name: "Comercios" },
  { icon: Building2, name: "Servicios profesionales" },
];

export function AtiendeIaForWho() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase">
            Para quién
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-paper mt-4 mb-4">
            Para negocios que viven de WhatsApp.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-mute text-base sm:text-lg max-w-2xl mb-12 md:mb-16">
            Si los prospectos llegan por mensaje y necesitas responder rápido
            sin perder el control, AtiendeIA está pensado para ti.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {VERTICALS.map((vertical, idx) => {
            const Icon = vertical.icon;
            return (
              <Reveal
                key={vertical.name}
                delay={0.2 + idx * 0.08}
                className="h-full"
              >
                <article className="h-full bg-deep border border-stroke rounded-card p-6 sm:p-8 flex flex-col items-start gap-4 transition-all duration-300 hover:border-sky/40 hover:-translate-y-0.5">
                  <Icon
                    className="h-7 w-7 text-electric"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <p className="font-sans font-semibold text-base sm:text-lg text-paper">
                    {vertical.name}
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
