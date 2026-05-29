# Trenova Cloud — Blueprint de marca y secciones

Documento de referencia para reutilizar el sistema de marca, tono y composición de secciones de **trenovacloud.com.mx** en una landing nueva. Pensado como contexto para otra IA / otro proyecto que necesita proponer una landing alineada al estilo Trenova.

---

## 1. Marca

- **Nombre:** Trenova Cloud
- **Tagline:** *Tecnología que entrelaza*
- **Posicionamiento:** Firma de ingeniería empresarial B2B premium. No freelancer, no agencia low-cost, no consultora "big-3".
- **Origen del nombre:** Trenova = trenza + nova. Tres hebras = amistad, familia, confianza, sostenidas por un propósito mayor. Inspirado en Eclesiastés 4:12 — **el guiño bíblico es sutil; no se menciona en copy público**.
- **Ubicación:** León, Guanajuato — México. Locale única: `es-MX`.
- **Dominio:** `https://trenovacloud.com.mx`

### Tono de voz

- Sobrio, directo, descriptivo. Frases cortas.
- **Evitar:** "boutique", "para empresas que toman en serio su crecimiento", auto-validación, presunción.
- **Preferir CTAs agnósticos** ("Hablemos") sobre canales específicos ("WhatsApp"), excepto en la sección de Contacto donde sí va explícito.
- Mobile-first, accesibilidad AA, `prefers-reduced-motion` respetado.

### Wordmark

- "TRENOVA" se renderiza como **`tre`** (color `paper`/blanco) + **`nova`** (color `sky`/azul cobalto).
- En código se compone con SVG mark + texto CSS, no como SVG completo (más controlable).

---

## 2. Stack técnico

- **Framework:** Next.js 16.2.6, App Router, Turbopack, React Compiler activo.
- **Estilos:** Tailwind v4 **CSS-first** — tokens definidos en `@theme` dentro de `globals.css`. **Sin `tailwind.config.ts`**.
- **Animación:** Framer Motion (`whileInView`, `once: true`, `margin: "-10% 0px"`).
- **Iconografía:** Lucide React 1.x (`LucideIcon` como tipo).
- **Tipografía:** `next/font/google` con tres familias y variables CSS:
  - `Bricolage_Grotesque` → `--font-bricolage` → `font-display` (titulares)
  - `Hanken_Grotesk` → `--font-hanken` → `font-sans` (cuerpo)
  - `JetBrains_Mono` → `--font-jetbrains` → `font-mono` (eyebrows, datos)
- **Contenido:** MDX en repo (`src/content/apuntes/*.mdx`) con `next-mdx-remote/rsc`, `gray-matter`, `reading-time`, `rehype-pretty-code` + Shiki tema `github-dark`.
- **TypeScript estricto.** Alias `@/*` → `src/*`.

---

## 3. Sistema de diseño (tokens)

Definidos en [src/app/globals.css](src/app/globals.css):

### Colores

| Token            | Hex       | Uso                                      |
|------------------|-----------|------------------------------------------|
| `--color-ink`    | `#06070C` | Fondo base (casi negro azulado)          |
| `--color-deep`   | `#0B1430` | Fondo de cards / paneles elevados        |
| `--color-electric`| `#2F6BFF`| Acento primario (botones, links, glow)   |
| `--color-sky`    | `#6B97FF` | Acento secundario (eyebrows, hover)      |
| `--color-paper`  | `#F4F6FC` | Texto principal sobre ink                |
| `--color-mute`   | `#6E7691` | Texto secundario / descripciones         |
| `--color-stroke` | `#1B2440` | Bordes de cards y divisores              |

Tailwind v4 genera automáticamente las utilidades (`text-paper`, `bg-deep`, `border-stroke`, etc.) a partir de los tokens `--color-*`.

### Radios

- `--radius-card: 22px` → `rounded-card`
- `--radius-pill: 9999px` → `rounded-pill` (botones, badges)

### Easing

- `--ease-out-soft: cubic-bezier(0.2, 0.7, 0.2, 1)` — usar también en Framer Motion (`EASE` constante).

### Utilidades custom

```css
@utility scrollbar-hide { scrollbar-width: none; &::-webkit-scrollbar { display: none; } }
```

### Reglas globales

- `color-scheme: dark` en `<html>`.
- Selección con fondo `electric`.
- `:focus-visible` outline `electric` 2px.
- `@media (prefers-reduced-motion: reduce)` apaga animaciones globalmente.

---

## 4. Patrones de composición

### Estructura de sección

```tsx
<section id="<anchor>" className="px-6 py-24 md:py-32">
  <div className="mx-auto max-w-6xl">      {/* o max-w-5xl/4xl según contenido */}
    <Reveal>
      <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase">
        Eyebrow
      </p>
    </Reveal>
    <Reveal delay={0.1}>
      <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-paper mt-4 mb-16">
        Título de sección
      </h2>
    </Reveal>
    {/* contenido */}
  </div>
</section>
```

### Card estándar

```tsx
<article className="h-full bg-deep border border-stroke rounded-card p-7 md:p-8
                    transition-all duration-300 hover:border-sky/40 hover:-translate-y-0.5">
  <Icon className="h-7 w-7 text-electric mb-6" strokeWidth={1.75} aria-hidden="true" />
  <h3 className="font-sans font-semibold text-lg text-paper mb-2">{title}</h3>
  <p className="text-mute text-sm leading-relaxed">{description}</p>
</article>
```

### Botón primario / secundario

- **Primary:** `rounded-pill bg-electric px-8 py-4 text-paper hover:bg-sky`
- **Secondary:** `rounded-pill border border-stroke px-8 py-4 text-paper hover:border-sky hover:text-sky`

### Reveal (animación de entrada)

Wrapper con Framer Motion. Props `delay` (s) y `className`. Trigger `whileInView`, `once: true`, `margin: "-10% 0px"`. Respeta `prefers-reduced-motion`.

### Glow ambiental

En Hero y CTA:

```tsx
<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
  <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2
                  w-[800px] h-[800px] rounded-full bg-electric/15 blur-[120px]" />
</div>
```

### Eyebrow tipográfico

`font-mono text-xs tracking-[0.3em] text-sky uppercase` — usar en todas las cabeceras de sección y como meta-dato en cards.

---

## 5. Navegación

`NAV` en [src/lib/constants.ts](src/lib/constants.ts), con **paths absolutos** para que cross-page (desde `/apuntes/[slug]` a la home) funcione con soft navigation de Next Link:

```ts
[
  { label: "Servicios",    href: "/#servicios" },
  { label: "Casos",        href: "/#casos" },
  { label: "Método",       href: "/#metodo" },
  { label: "Tecnologías",  href: "/#tecnologias" },
  { label: "Apuntes",      href: "/#apuntes" },
  { label: "Contacto",     href: "/#contacto" },
]
```

---

## 6. Secciones (orden y propósito)

Orden en [src/app/page.tsx](src/app/page.tsx):

1. **Header** (sticky, blur)
2. **Hero**
3. **Services** — `#servicios`
4. **Cases** — `#casos`
5. **Differentiators** — `#por-que`
6. **Method** — `#metodo`
7. **Technologies** — `#tecnologias`
8. **ApuntesCarousel** — `#apuntes`
9. **CTA** — `#contacto`
10. **Footer**

### 6.1 Header

[src/components/layout/Header.tsx](src/components/layout/Header.tsx)

- `sticky top-0 z-50 backdrop-blur-md bg-ink/70 border-b border-stroke/60`
- Altura: `h-16` móvil, `h-20` desktop.
- Izquierda: logo mark + wordmark CSS (`tre` paper + `nova` sky).
- Centro/derecha desktop: links de `NAV`, color `paper/80 hover:paper`.
- CTA "Hablemos" en pill `electric` a la derecha.
- Móvil: botón menú → overlay full-screen con animación stagger (Framer Motion). `Escape` cierra; lock de scroll del documento al abrir.

### 6.2 Hero

[src/components/sections/Hero.tsx](src/components/sections/Hero.tsx) — `#hero`

- `min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)]`, centrado.
- Glow ambiental detrás.
- **Eyebrow:** `INGENIERÍA · IA · AUTOMATIZACIÓN`
- **H1:** `text-4xl sm:text-5xl md:text-6xl font-display font-semibold`. Copy:
  > Convertimos procesos complejos en soluciones digitales **simples**.
  > (la palabra "simples" va en `text-electric`)
- **Subtítulo (`text-mute`):** "Software a la medida, automatización, IA y WhatsApp Business para empresas."
- **CTAs:** `Hablemos` (primary → `#contacto`) + `Ver servicios` (secondary → `#servicios`).

### 6.3 Services

[src/components/sections/Services.tsx](src/components/sections/Services.tsx) — `#servicios`

- **Eyebrow:** `Servicios`
- **H2:** "Lo que construimos"
- **Grid:** 1 col → `sm:2` → `lg:3`. Card estándar con icono `electric` arriba.
- **6 items** (de `SERVICES` en constants):

| Icono (Lucide) | Título                    | Descripción                                                       |
|----------------|---------------------------|-------------------------------------------------------------------|
| `Code2`        | Software a la medida      | Sistemas construidos al proceso del cliente, no al revés.         |
| `Workflow`     | Automatización            | Procesos repetitivos pasan a correr solos, con trazabilidad.      |
| `Sparkles`     | IA para empresas          | Modelos y agentes adaptados a la operación, no demos genéricos.   |
| `MessageCircle`| WhatsApp + IA             | Chatbots con tono humano, integrados al CRM y al inventario.      |
| `Network`      | Integración de sistemas   | Conectamos las herramientas que ya usas en un flujo único.        |
| `Compass`      | Consultoría tecnológica   | Asesoría enfocada en decisiones, no en venta de horas.            |

### 6.4 Cases

[src/components/sections/Cases.tsx](src/components/sections/Cases.tsx) — `#casos`

- **Eyebrow:** `Casos`
- **H2:** "Industrias que conocemos"
- **Grid:** 1 col → `md:2`. Card más grande (`p-7 md:p-10`), icono `h-9 w-9`.
- **Estructura de card:** icono → eyebrow del vertical (mono) → **problema** (font-sans semibold) → **solución** (mute).
- **4 verticales** (de `CASES`):

| Icono       | Vertical            | Problema                                            | Solución                                                                                                                                            |
|-------------|---------------------|-----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Briefcase` | Despachos           | Casos en hojas de cálculo y WhatsApp como CRM.       | Web + CRM enfocada al expediente. Tracker con notificaciones automáticas, captura por WhatsApp con IA y reportes para el cliente.                   |
| `HardHat`   | Constructoras       | Avances en fotos sueltas, presupuestos en Excel.     | Bitácora de obra con foto y geolocalización, dashboard de presupuesto vs ejecutado y reportes en tiempo real para el cliente final.                 |
| `Store`     | Comercios           | Inventario en la memoria, pedidos en mensajes.       | Inventario centralizado multi-sucursal y pedidos por WhatsApp con confirmación automática. Integración con Mercado Pago, Oxxo Pay, Stripe y PayPal. |
| `Layers`    | PyMEs tradicionales | Procesos de papel y sistemas que ya no escalan.      | Digitalización gradual por fases, sin big-bang. Migración de Excel a sistema, con acompañamiento y entrenamiento.                                    |

### 6.5 Differentiators

[src/components/sections/Differentiators.tsx](src/components/sections/Differentiators.tsx) — `#por-que`

- **Eyebrow:** `Diferenciadores`
- **H2:** "Por qué Trenova"
- **Layout:** lista divisores horizontales (`border-t border-stroke/40`), grid `md:[100px_1fr]` con número grande en `electric` (font-display) + título + descripción.
- **3 principios:**

| Núm  | Título                                          | Descripción                                                                                              |
|------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `01` | Hablas con quien construye                      | Sin filtros de cuenta, sin sub-contratación. Una sola conversación de la idea al deploy.                  |
| `02` | Stack elegido por proyecto, no por inercia      | El cliente anterior usó X. El tuyo puede ser Y. Cada decisión técnica empieza desde tu problema.          |
| `03` | El go-live es el inicio                         | Acompañamos en producción. Soporte, evolución y mejoras planeadas, no entregamos y desaparecemos.        |

### 6.6 Method

[src/components/sections/Method.tsx](src/components/sections/Method.tsx) — `#metodo`

- **Eyebrow:** `Método`
- **H2:** "Proceso"
- **Layout:** timeline vertical (`max-w-4xl`). Círculo `w-10 h-10 rounded-full bg-ink border border-stroke` con número en `text-electric` (font-mono). Línea vertical `bg-stroke` conectando pasos.
- **4 pasos** (`METHOD`):

| Núm  | Título         | Descripción                                                                                                                |
|------|----------------|-----------------------------------------------------------------------------------------------------------------------------|
| `01` | Diagnóstico    | Mapeamos el proceso actual, identificamos puntos críticos y definimos un alcance realista.                                  |
| `02` | Diseño         | Arquitectura técnica + prototipo navegable de las pantallas críticas.                                                       |
| `03` | Construcción   | Desarrollo iterativo con demos cada 1–2 semanas. Ves el progreso real, no reportes de avance.                              |
| `04` | Operación      | Implementación, capacitación, migración de datos. Después: soporte, evolución continua y mejoras basadas en uso real.       |

### 6.7 Technologies

[src/components/sections/Technologies.tsx](src/components/sections/Technologies.tsx) — `#tecnologias`

- **Eyebrow:** `Tecnologías`
- **H2:** "Stack Tecnológico"
- **Grid:** 1 col → `md:2`. Cards con **icono fantasma** decorativo en esquina inferior derecha (`absolute -bottom-6 -right-6 h-32 md:h-40 text-electric/10 group-hover:text-electric/20`).
- **Estructura:** eyebrow del nombre (mono) + lista `<ul>` de items en `font-sans text-paper`.
- **4 categorías:**

| Categoría     | Icono          | Items                                                              |
|---------------|----------------|--------------------------------------------------------------------|
| Frontend      | `Layout`       | Next.js, React, TypeScript, Tailwind                               |
| Backend       | `Database`     | Node.js, Python, .NET, PostgreSQL                                  |
| IA            | `BrainCircuit` | OpenAI, Anthropic Claude                                           |
| Integraciones | `Cable`        | WhatsApp Business API, Stripe, Mercado Pago, PayPal, Oxxo Pay      |

### 6.8 ApuntesCarousel

[src/components/sections/ApuntesCarousel.tsx](src/components/sections/ApuntesCarousel.tsx) — `#apuntes`

- **Eyebrow:** `Apuntes`
- **H2:** "Antes de decidir"
- **Cliente** (`"use client"`). Carrusel scroll-snap horizontal con flechas en desktop, swipe nativo en móvil.
- **Card width:** `280px` → `sm:340px` → `md:380px`. Gap `4 → sm:6`. Lleva `scrollbar-hide`.
- **Cada card** → `<Link>` a `/apuntes/[slug]`, con:
  - eyebrow `DD MMM YYYY · N MIN` (font-mono, sky uppercase)
  - título (`font-display text-xl md:text-2xl`)
  - excerpt (`text-mute`)
- **Hover:** `border-sky/40 -translate-y-0.5 text-sky` en título.
- **Fuente de datos:** `getAllApuntes()` desde [src/lib/apuntes.ts](src/lib/apuntes.ts) (`import "server-only"`), lee MDX de `src/content/apuntes/`.

### 6.9 CTA

[src/components/sections/CTA.tsx](src/components/sections/CTA.tsx) — `#contacto`

- **Eyebrow:** `Hablemos`
- **H2:** "Construyamos lo siguiente." (`text-4xl sm:text-5xl md:text-6xl`)
- Glow ambiental detrás (igual al Hero).
- **Dos CTAs explícitos** (única sección donde sí va el canal):
  - **WhatsApp** (pill `electric`) → `WHATSAPP_URL` con mensaje pre-llenado
  - **Email** (pill outline `stroke`) → `EMAIL_URL` con asunto pre-llenado
- **Meta-línea inferior** (font-mono, mute): `+52 477 276 2700 · León, GTO · México`

### 6.10 Footer

[src/components/layout/Footer.tsx](src/components/layout/Footer.tsx)

- `border-t border-stroke/40 py-16 md:py-20`.
- Grid `md:grid-cols-3`:
  1. **Brand:** mark + wordmark CSS + tagline ("Tecnología que entrelaza") en mono uppercase.
  2. **Navegación:** eyebrow + lista `NAV` (verticales).
  3. **Contacto:** WhatsApp, email, ubicación.
- **Strip inferior:** `© {YEAR} Trenova Cloud.` centrado, font-mono mute.

---

## 7. Contacto (constantes)

[src/lib/constants.ts](src/lib/constants.ts):

```ts
CONTACT = {
  whatsapp: "524772762700",
  whatsappDisplay: "+52 477 276 2700",
  email: "contacto@trenovacloud.com.mx",
}

WHATSAPP_URL = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
  "Hola Trenova, me gustaría conversar sobre un proyecto."
)}`

EMAIL_URL = `mailto:${email}?subject=${encodeURIComponent(
  "Trenova Cloud — Consulta"
)}`
```

---

## 8. SEO y metadata

[src/app/layout.tsx](src/app/layout.tsx):

- `metadataBase` con dominio del sitio.
- `title.template`: `"%s · {SITE_NAME}"`.
- OpenGraph + Twitter Card configurados.
- `viewport.themeColor: "#06070C"`, `colorScheme: "dark"`. **NO** ponerlos en `metadata` (deprecated desde Next 14).
- **JSON-LD `Organization`** inyectado en `<body>` con `dangerouslySetInnerHTML`. Incluye `address`, `contactPoint`.
- `verification.google` para Google Search Console.
- Files complementarios en `src/app/`: `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `icon.tsx`, `apple-icon.tsx`.

---

## 9. Reglas de trabajo (workflow)

Importante si otro proyecto va a "montar" una landing en este estilo:

- **Antes de codear cualquier sección:** entregar propuesta en texto (estructura, decisiones, librerías) y esperar `ok` del fundador.
- Si una decisión se va a complicar (dependencia innecesaria, atajo frágil, estructura mala), **decirlo aunque se haya pedido lo contrario**.
- Sin documentación markdown salvo que se pida explícitamente.
- Commits sugeridos al cerrar cada fase, convención `feat:` / `chore:` / `fix:`.

---

## 10. Cómo "montar" una landing nueva en Trenova

Dos caminos viables:

### A. Como ruta dentro del mismo Next.js
- Crear `src/app/<producto>/page.tsx` y, si necesita layout propio, `layout.tsx` en esa carpeta.
- Reusar `Header` + `Footer` actuales, o duplicar y ajustar si la landing es independiente.
- Reusar tokens (`globals.css` ya está cargado), `Reveal`, `Button`, patrones de card, eyebrow, glow.
- Añadir entrada en `sitemap.ts`.

### B. Como subdominio o proyecto separado
- Clonar tokens (`@theme` de globals.css), familias de fuente y componentes `Reveal`, `Button`, `Logo`.
- Mantener paleta y radios idénticos para coherencia visual con la marca madre.
- Linkear de regreso a `trenovacloud.com.mx` desde el Footer.

**Recomendación por defecto:** A — ruta dentro del repo. Menos infra, mismo deploy, SEO unificado.
