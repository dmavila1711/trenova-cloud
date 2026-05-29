import { Reveal } from "@/components/ui/Reveal";

type TrustItem = {
  num: string;
  title: string;
  description: string;
};

const TRUST: readonly TrustItem[] = [
  {
    num: "01",
    title: "Trabaja solo con tu información.",
    description:
      "No inventa. Si no sabe algo, te lo pasa para que tú respondas.",
  },
  {
    num: "02",
    title: "No improvisa precios ni promociones.",
    description:
      "Solo responde lo que tú cargaste en su base de conocimiento.",
  },
  {
    num: "03",
    title: "Tú ajustas la información cuando cambie.",
    description: "Sin esperar a nadie. Los cambios aplican al siguiente mensaje.",
  },
  {
    num: "04",
    title: "El equipo conserva el control.",
    description:
      "Cada conversación queda visible. Tú decides cuándo entrar.",
  },
];

export function AtiendeIaTrust() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase">
            Confianza
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-paper mt-4 mb-16">
            No es un robot que responde cualquier cosa.
          </h2>
        </Reveal>

        <div>
          {TRUST.map((item, idx) => {
            const isLast = idx === TRUST.length - 1;
            return (
              <Reveal key={item.num} delay={0.15 + idx * 0.1}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-[100px_1fr] gap-3 md:gap-10 py-8 md:py-10 border-t border-stroke/40 ${
                    isLast ? "border-b" : ""
                  }`}
                >
                  <p className="font-display text-3xl md:text-5xl text-electric leading-none">
                    {item.num}
                  </p>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-paper mb-3">
                      {item.title}
                    </h3>
                    <p className="text-mute text-sm sm:text-base leading-relaxed max-w-2xl">
                      {item.description}
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
