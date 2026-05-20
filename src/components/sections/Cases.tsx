import { Reveal } from "@/components/ui/Reveal";
import { CASES } from "@/lib/constants";

export function Cases() {
  return (
    <section id="casos" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase">
            Casos
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-paper mt-4 mb-16">
            Industrias que conocemos
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {CASES.map((c, idx) => {
            const Icon = c.icon;
            return (
              <Reveal
                key={c.vertical}
                delay={0.15 + idx * 0.1}
                className="h-full"
              >
                <article className="h-full bg-deep border border-stroke rounded-card p-7 md:p-10 transition-all duration-300 hover:border-sky/40 hover:-translate-y-0.5">
                  <Icon
                    className="h-9 w-9 text-electric mb-6"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase mb-4">
                    {c.vertical}
                  </p>
                  <p className="font-sans font-semibold text-paper text-lg leading-snug mb-4">
                    {c.problem}
                  </p>
                  <p className="text-mute text-sm leading-relaxed">
                    {c.solution}
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
