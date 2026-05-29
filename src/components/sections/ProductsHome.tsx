import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { PRODUCTS } from "@/lib/constants";

export function ProductsHome() {
  return (
    <section id="productos" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase">
            Productos
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-paper mt-4 mb-16">
            Producto propio, en producción
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6">
          {PRODUCTS.map((product, idx) => {
            const Icon = product.icon;
            return (
              <Reveal key={product.name} delay={0.15 + idx * 0.08}>
                <Link
                  href={product.href}
                  className="group block bg-deep border border-stroke rounded-card p-8 md:p-12 transition-all duration-300 hover:border-sky/40 hover:-translate-y-0.5"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                    <div>
                      <Icon
                        className="h-9 w-9 text-electric mb-6"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase mb-4">
                        {product.name} · Producto Trenova
                      </p>
                      <p className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-paper leading-snug mb-6">
                        {product.tagline}
                      </p>

                      <ul className="flex flex-col gap-3 mb-8">
                        {product.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex gap-3 text-paper/90 text-sm sm:text-base leading-relaxed"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 rounded-full bg-electric flex-shrink-0"
                            />
                            {benefit}
                          </li>
                        ))}
                      </ul>

                      <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-paper uppercase group-hover:text-sky transition-colors">
                        {product.cta}
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>

                    <DeviceFrame
                      variant="browser"
                      src={product.image.src}
                      alt={product.image.alt}
                      width={product.image.width}
                      height={product.image.height}
                      sizes="(min-width: 1024px) 44vw, 100vw"
                    />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
