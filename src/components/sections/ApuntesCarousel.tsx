"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type ApunteMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTimeMin: number;
};

const MONTHS_ES = [
  "ENE",
  "FEB",
  "MAR",
  "ABR",
  "MAY",
  "JUN",
  "JUL",
  "AGO",
  "SEP",
  "OCT",
  "NOV",
  "DIC",
];

function formatDate(iso: string): string {
  const date = new Date(iso);
  if (isNaN(date.getTime())) return iso;
  return `${date.getUTCDate()} ${MONTHS_ES[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

export function ApuntesCarousel({ apuntes }: { apuntes: ApunteMeta[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const firstCard = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.offsetWidth ?? 320;
    const gap = 24;
    container.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  if (apuntes.length === 0) return null;

  return (
    <section id="apuntes" className="px-6 py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-between items-end mb-12 gap-6">
          <div>
            <Reveal>
              <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase">
                Apuntes
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-paper mt-4">
                Antes de decidir
              </h2>
            </Reveal>
          </div>

          {apuntes.length > 1 && (
            <Reveal delay={0.15}>
              <div className="hidden md:flex gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => scroll("left")}
                  aria-label="Apunte anterior"
                  className="w-11 h-11 rounded-full border border-stroke text-paper hover:border-sky hover:text-sky transition-colors flex items-center justify-center"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll("right")}
                  aria-label="Siguiente apunte"
                  className="w-11 h-11 rounded-full border border-stroke text-paper hover:border-sky hover:text-sky transition-colors flex items-center justify-center"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.2}>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 -mx-6 px-6 pb-2 scrollbar-hide"
          >
            {apuntes.map((apunte) => (
              <Link
                key={apunte.slug}
                href={`/apuntes/${apunte.slug}`}
                className="snap-start flex-shrink-0 w-[280px] sm:w-[340px] md:w-[380px] group"
              >
                <article className="h-full bg-deep border border-stroke rounded-card p-7 md:p-8 transition-all duration-300 group-hover:border-sky/40 group-hover:-translate-y-0.5">
                  <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase mb-5">
                    {formatDate(apunte.date)} · {apunte.readingTimeMin} MIN
                  </p>
                  <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-paper group-hover:text-sky transition-colors mb-3 leading-snug">
                    {apunte.title}
                  </h3>
                  <p className="text-mute text-sm sm:text-base leading-relaxed">
                    {apunte.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
