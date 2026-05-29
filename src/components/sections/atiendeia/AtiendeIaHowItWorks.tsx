import { Reveal } from "@/components/ui/Reveal";

type Step = {
  num: string;
  title: string;
  description: string;
};

const STEPS: readonly Step[] = [
  {
    num: "01",
    title: "Un cliente te escribe por WhatsApp.",
    description:
      "El mensaje llega como siempre. Tus clientes no cambian la forma de contactarte.",
  },
  {
    num: "02",
    title: "AtiendeIA responde al instante.",
    description:
      "Con la información de tu negocio: servicios, horarios, precios, ubicación y preguntas frecuentes.",
  },
  {
    num: "03",
    title: "Si necesita una persona, te avisa.",
    description:
      "Cuando la conversación se complica o el cliente pide atención humana, recibes un aviso en tu celular.",
  },
  {
    num: "04",
    title: "Todo queda registrado.",
    description:
      "Ves quién escribió, qué pidió y qué conversaciones siguen pendientes.",
  },
];

export function AtiendeIaHowItWorks() {
  return (
    <section id="como-funciona" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase">
            Cómo funciona
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-paper mt-4 mb-16">
            Cuatro pasos, sin cambiar tu forma de trabajar.
          </h2>
        </Reveal>

        <div>
          {STEPS.map((step, idx) => {
            const isLast = idx === STEPS.length - 1;
            return (
              <Reveal key={step.num} delay={0.15 + idx * 0.1}>
                <div
                  className={`relative flex gap-5 sm:gap-6 ${
                    isLast ? "" : "pb-10 md:pb-12"
                  }`}
                >
                  {!isLast && (
                    <div
                      aria-hidden="true"
                      className="absolute left-5 top-10 bottom-0 w-px bg-stroke"
                    />
                  )}
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-ink border border-stroke flex items-center justify-center">
                    <span className="font-mono text-xs text-electric">
                      {step.num}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-paper mb-2">
                      {step.title}
                    </h3>
                    <p className="text-mute text-sm sm:text-base leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
