import { Reveal } from "@/components/ui/Reveal";
import { TECHNOLOGIES } from "@/lib/constants";

export function Technologies() {
  return (
    <section id="tecnologias" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase">
            Tecnologías
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-paper mt-4 mb-16">
            Stack Tecnológico
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {TECHNOLOGIES.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Reveal
                key={category.name}
                delay={0.15 + idx * 0.08}
                className="h-full"
              >
                <article className="group relative h-full overflow-hidden bg-deep border border-stroke rounded-card p-7 md:p-10 transition-all duration-300 hover:border-sky/40 hover:-translate-y-0.5">
                  <Icon
                    className="absolute -bottom-6 -right-6 h-32 w-32 md:h-40 md:w-40 text-electric/10 group-hover:text-electric/20 transition-colors duration-300 pointer-events-none"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  <div className="relative z-10">
                    <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase mb-6">
                      {category.name}
                    </p>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li
                          key={item}
                          className="font-sans text-paper text-base sm:text-lg leading-snug"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
