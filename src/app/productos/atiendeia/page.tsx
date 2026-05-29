import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AtiendeIaHero } from "@/components/sections/atiendeia/AtiendeIaHero";
import { AtiendeIaProblem } from "@/components/sections/atiendeia/AtiendeIaProblem";
import { AtiendeIaHowItWorks } from "@/components/sections/atiendeia/AtiendeIaHowItWorks";
import { AtiendeIaBenefits } from "@/components/sections/atiendeia/AtiendeIaBenefits";
import { AtiendeIaTrust } from "@/components/sections/atiendeia/AtiendeIaTrust";
import { AtiendeIaForWho } from "@/components/sections/atiendeia/AtiendeIaForWho";
import { AtiendeIaCTA } from "@/components/sections/atiendeia/AtiendeIaCTA";

const PAGE_URL = "https://trenovacloud.com.mx/productos/atiendeia";
const PAGE_TITLE =
  "AtiendeIA — Asistente inteligente para WhatsApp · Trenova Cloud";
const PAGE_DESCRIPTION =
  "AtiendeIA ayuda a PyMEs mexicanas a responder WhatsApp más rápido, registrar prospectos y recibir avisos cuando una conversación necesita atención humana.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "asistente WhatsApp PyME México",
    "chatbot WhatsApp para negocios",
    "asistente inteligente para WhatsApp",
    "atención automática WhatsApp",
    "CRM WhatsApp PyME",
    "AtiendeIA",
    "Trenova Cloud",
  ],
  alternates: {
    canonical: "/productos/atiendeia",
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Trenova Cloud",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AtiendeIA",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  inLanguage: "es-MX",
  provider: {
    "@type": "Organization",
    name: "Trenova Cloud",
    url: "https://trenovacloud.com.mx",
  },
};

export default function AtiendeIaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <AtiendeIaHero />
        <AtiendeIaProblem />
        <AtiendeIaHowItWorks />
        <AtiendeIaBenefits />
        <AtiendeIaTrust />
        <AtiendeIaForWho />
        <AtiendeIaCTA />
      </main>
      <Footer />
    </>
  );
}
