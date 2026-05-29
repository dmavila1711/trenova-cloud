import { Reveal } from "@/components/ui/Reveal";
import { DeviceFrame } from "@/components/ui/DeviceFrame";

type AtiendeIaShowcaseProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  imageSide?: "left" | "right";
};

export function AtiendeIaShowcase({
  eyebrow,
  title,
  description,
  image,
  imageSide = "right",
}: AtiendeIaShowcaseProps) {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal
          className={imageSide === "left" ? "lg:order-2" : "lg:order-1"}
        >
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase">
              {eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-paper mt-4 mb-5">
              {title}
            </h2>
            <p className="text-mute text-base sm:text-lg leading-relaxed max-w-xl">
              {description}
            </p>
          </div>
        </Reveal>

        <Reveal
          delay={0.15}
          className={imageSide === "left" ? "lg:order-1" : "lg:order-2"}
        >
          <DeviceFrame
            variant="browser"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1024px) 48vw, 100vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
