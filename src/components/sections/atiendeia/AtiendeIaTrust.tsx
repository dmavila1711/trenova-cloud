import { Reveal } from "@/components/ui/Reveal";
import { DeviceFrame } from "@/components/ui/DeviceFrame";

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
    description: "Cada conversación queda visible. Tú decides cuándo entrar.",
  },
];

export function AtiendeIaTrust() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase">
            Confianza
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-paper mt-4 mb-16 max-w-3xl">
            No es un robot que responde cualquier cosa.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal delay={0.15}>
            <DeviceFrame
              variant="browser"
              src="/images/products/atiendeia/base-conocimiento-escritorio.webp"
              alt="Base de conocimiento de AtiendeIA: las respuestas salen de la información que el negocio carga"
              width={1400}
              height={627}
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </Reveal>

          <ul>
            {TRUST.map((item, idx) => (
              <Reveal key={item.num} delay={0.2 + idx * 0.08}>
                <li className="flex gap-5 py-5 border-t border-stroke/40 last:border-b">
                  <span className="font-display text-2xl md:text-3xl text-electric leading-none flex-shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-display text-lg md:text-xl font-semibold tracking-tight text-paper mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-mute text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
