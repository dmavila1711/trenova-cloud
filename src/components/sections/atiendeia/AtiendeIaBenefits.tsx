import {
  MessageSquareText,
  Database,
  BellRing,
  ContactRound,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const BENEFITS: readonly Benefit[] = [
  {
    icon: MessageSquareText,
    title: "Atención por WhatsApp",
    description: "Responde al instante, incluso fuera de horario.",
  },
  {
    icon: Database,
    title: "Información controlada",
    description:
      "Responde con los datos que tú cargas: servicios, horarios, precios y preguntas frecuentes.",
  },
  {
    icon: BellRing,
    title: "Avisos cuando hace falta",
    description:
      "Si una conversación necesita una persona, recibes un aviso en tu celular, aunque la app esté cerrada.",
  },
  {
    icon: ContactRound,
    title: "Clientes registrados",
    description:
      "Cada prospecto queda guardado con su nombre, interés y estado.",
  },
  {
    icon: Palette,
    title: "Con la imagen de tu negocio",
    description:
      "Tu logo, tus colores y el tono con el que quieres atender.",
  },
];

export function AtiendeIaBenefits() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase">
            Incluye
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-paper mt-4 mb-16">
            Lo que viene en AtiendeIA.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {BENEFITS.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <Reveal
                key={benefit.title}
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
                    {benefit.title}
                  </h3>
                  <p className="text-mute text-sm leading-relaxed">
                    {benefit.description}
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
