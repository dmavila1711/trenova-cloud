import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import {
  NAV,
  CONTACT,
  WHATSAPP_URL,
  EMAIL_URL,
  SITE,
} from "@/lib/constants";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-stroke/40 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <Link
              href="/"
              aria-label="Trenova Cloud — inicio"
              className="inline-flex items-center gap-3"
            >
              <Logo variant="mark" className="h-14" />
              <span aria-hidden="true" className="flex flex-col leading-none">
                <span className="font-display font-semibold text-3xl tracking-tight">
                  <span className="text-paper">tre</span>
                  <span className="text-sky">nova</span>
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] text-mute uppercase mt-2">
                  Tecnología que entrelaza
                </span>
              </span>
            </Link>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase mb-5">
              Navegación
            </p>
            <nav aria-label="Footer" className="flex flex-col gap-2.5">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-paper/80 hover:text-paper text-sm transition-colors w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase mb-5">
              Contacto
            </p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper/80 hover:text-paper text-sm transition-colors w-fit inline-block"
                >
                  {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_URL}
                  className="text-paper/80 hover:text-paper text-sm transition-colors w-fit inline-block"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-mute text-sm">{SITE.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stroke/40">
          <p className="font-mono text-xs text-mute text-center">
            © {YEAR} {SITE.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
