import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Cases } from "@/components/sections/Cases";
import { Differentiators } from "@/components/sections/Differentiators";
import { Method } from "@/components/sections/Method";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Cases />
      <Differentiators />
      <Method />
    </>
  );
}
