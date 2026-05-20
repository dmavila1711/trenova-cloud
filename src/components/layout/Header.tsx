"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { NAV } from "@/lib/constants";

const EASE = [0.2, 0.7, 0.2, 1] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-ink/70 border-b border-stroke/60">
      <div className="mx-auto max-w-6xl px-6 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Trenova Cloud — inicio"
          className="flex items-center gap-2 sm:gap-3"
        >
          <Logo variant="mark" className="h-12 sm:h-14" />
          <span
            aria-hidden="true"
            className="font-display font-semibold text-2xl sm:text-3xl tracking-tight leading-none"
          >
            <span className="text-paper">tren</span>
            <span className="text-sky">ova</span>
          </span>
        </Link>

        <nav
          aria-label="Principal"
          className="hidden md:flex items-center gap-8"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-paper/80 hover:text-paper transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center rounded-pill bg-electric px-5 py-2.5 text-sm font-medium text-paper hover:bg-sky transition-colors"
          >
            Hablemos
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-paper hover:bg-paper/5 transition-colors"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div className="h-16 px-6 flex items-center justify-between border-b border-stroke/60">
              <div className="flex items-center gap-2">
                <Logo variant="mark" className="h-12" />
                <span
                  aria-hidden="true"
                  className="font-display font-semibold text-2xl tracking-tight leading-none"
                >
                  <span className="text-paper">tren</span>
                  <span className="text-sky">ova</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="inline-flex items-center justify-center w-10 h-10 rounded-md text-paper hover:bg-paper/5 transition-colors"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav
              aria-label="Móvil"
              className="px-6 py-8 flex flex-col"
            >
              {NAV.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.05 + idx * 0.05,
                    ease: EASE,
                  }}
                  className="font-display text-3xl font-semibold text-paper py-4 border-b border-stroke/40"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contacto"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.05 + NAV.length * 0.05,
                  ease: EASE,
                }}
                className="mt-8 inline-flex items-center justify-center rounded-pill bg-electric px-6 py-3.5 text-base font-medium text-paper hover:bg-sky transition-colors"
              >
                Hablemos
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
