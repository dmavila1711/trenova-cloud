import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Cases } from "@/components/sections/Cases";
import { Differentiators } from "@/components/sections/Differentiators";
import { ProductsHome } from "@/components/sections/ProductsHome";
import { Method } from "@/components/sections/Method";
import { Technologies } from "@/components/sections/Technologies";
import { ApuntesCarousel } from "@/components/sections/ApuntesCarousel";
import { CTA } from "@/components/sections/CTA";
import { getAllApuntes } from "@/lib/apuntes";

export default async function Home() {
  const apuntes = await getAllApuntes();

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Cases />
      <Differentiators />
      <ProductsHome />
      <Method />
      <Technologies />
      <ApuntesCarousel apuntes={apuntes} />
      <CTA />
      <Footer />
    </>
  );
}
