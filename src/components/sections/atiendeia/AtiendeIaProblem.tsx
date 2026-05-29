import { Reveal } from "@/components/ui/Reveal";

const PROBLEMS = [
  "Te escriben mientras atiendes otra cosa.",
  "Alguien queda de contestar y se le pasa.",
  "Los datos del cliente se pierden entre mensajes.",
  "No sabes qué conversaciones siguen abiertas.",
  "Fuera de horario, los prospectos se enfrían.",
] as const;

export function AtiendeIaProblem() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase">
            El problema
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-paper mt-4 mb-12">
            WhatsApp vende. También se descontrola.
          </h2>
        </Reveal>

        <ul className="space-y-4">
          {PROBLEMS.map((item, idx) => (
            <Reveal key={item} delay={0.15 + idx * 0.06}>
              <li className="flex gap-4 text-paper/90 text-base sm:text-lg leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 rounded-full bg-electric flex-shrink-0"
                />
                {item}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
