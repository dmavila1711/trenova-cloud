import {
  Code2,
  Workflow,
  Sparkles,
  MessageCircle,
  Network,
  Compass,
  Briefcase,
  HardHat,
  Store,
  Layers,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  name: "Trenova Cloud",
  tagline: "Tecnología que entrelaza",
  url: "https://trenovacloud.com.mx",
  location: "León, Guanajuato — México",
} as const;

export const CONTACT = {
  whatsapp: "524772762700",
  whatsappDisplay: "+52 477 276 2700",
  email: "TODO",
} as const;

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  "Hola Trenova, me gustaría conversar sobre un proyecto."
)}`;

export const NAV = [
  { label: "Servicios", href: "#servicios" },
  { label: "Casos", href: "#casos" },
  { label: "Método", href: "#metodo" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Contacto", href: "#contacto" },
] as const;

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const SERVICES: readonly Service[] = [
  {
    icon: Code2,
    title: "Software a la medida",
    description: "Sistemas construidos al proceso del cliente, no al revés.",
  },
  {
    icon: Workflow,
    title: "Automatización",
    description: "Procesos repetitivos pasan a correr solos, con trazabilidad.",
  },
  {
    icon: Sparkles,
    title: "IA para empresas",
    description: "Modelos y agentes adaptados a la operación, no demos genéricos.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp + IA",
    description: "Chatbots con tono humano, integrados al CRM y al inventario.",
  },
  {
    icon: Network,
    title: "Integración de sistemas",
    description: "Conectamos las herramientas que ya usas en un flujo único.",
  },
  {
    icon: Compass,
    title: "Consultoría tecnológica",
    description: "Asesoría enfocada en decisiones, no en venta de horas.",
  },
];

type Case = {
  icon: LucideIcon;
  vertical: string;
  problem: string;
  solution: string;
};

export const CASES: readonly Case[] = [
  {
    icon: Briefcase,
    vertical: "Despachos",
    problem: "Casos en hojas de cálculo y WhatsApp como CRM.",
    solution:
      "Web + CRM enfocada al expediente. Tracker con notificaciones automáticas, captura por WhatsApp con IA y reportes para el cliente.",
  },
  {
    icon: HardHat,
    vertical: "Constructoras",
    problem: "Avances en fotos sueltas, presupuestos en Excel.",
    solution:
      "Bitácora de obra con foto y geolocalización, dashboard de presupuesto vs ejecutado y reportes en tiempo real para el cliente final.",
  },
  {
    icon: Store,
    vertical: "Comercios",
    problem: "Inventario en la memoria, pedidos en mensajes.",
    solution:
      "Inventario centralizado multi-sucursal y pedidos por WhatsApp con confirmación automática. Integración nativa con pasarelas de pago: Mercado Pago, Oxxo Pay, Stripe y PayPal.",
  },
  {
    icon: Layers,
    vertical: "PyMEs tradicionales",
    problem: "Procesos de papel y sistemas que ya no escalan.",
    solution:
      "Digitalización gradual por fases, sin big-bang. Migración de Excel a sistema, con acompañamiento y entrenamiento.",
  },
];

type Differentiator = {
  num: string;
  title: string;
  description: string;
};

export const DIFFERENTIATORS: readonly Differentiator[] = [
  {
    num: "01",
    title: "Hablas con quien construye",
    description:
      "Sin filtros de cuenta, sin sub-contratación. Una sola conversación de la idea al deploy.",
  },
  {
    num: "02",
    title: "Stack elegido por proyecto, no por inercia",
    description:
      "El cliente anterior usó X. El tuyo puede ser Y. Cada decisión técnica empieza desde tu problema.",
  },
  {
    num: "03",
    title: "El go-live es el inicio",
    description:
      "Acompañamos en producción. Soporte, evolución y mejoras planeadas, no entregamos y desaparecemos.",
  },
];

type MethodStep = {
  num: string;
  title: string;
  description: string;
};

export const METHOD: readonly MethodStep[] = [
  {
    num: "01",
    title: "Diagnóstico",
    description:
      "Mapeamos el proceso actual, identificamos puntos críticos y definimos un alcance realista. Entiendes qué se va a construir y por qué.",
  },
  {
    num: "02",
    title: "Diseño",
    description:
      "Arquitectura técnica + prototipo navegable de las pantallas críticas.",
  },
  {
    num: "03",
    title: "Construcción",
    description:
      "Desarrollo iterativo con demos cada 1–2 semanas. Ves el progreso real, no reportes de avance.",
  },
  {
    num: "04",
    title: "Operación",
    description:
      "Implementación, capacitación, migración de datos. Después: soporte, evolución continua y mejoras basadas en uso real.",
  },
];
