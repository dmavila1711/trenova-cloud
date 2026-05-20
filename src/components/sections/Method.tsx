import { Reveal } from "@/components/ui/Reveal";
import { METHOD } from "@/lib/constants";

export function Method() {
  return (
    <section id="metodo" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase">
            Método
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-paper mt-4 mb-16">
            Proceso
          </h2>
        </Reveal>

        <div>
          {METHOD.map((step, idx) => {
            const isLast = idx === METHOD.length - 1;
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
