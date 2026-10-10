import Hero from "@/components/home/Hero";
import StudioIntro from "@/components/home/StudioIntro";
import ServicesOverview from "@/components/home/ServicesOverview";
import SelectedWork from "@/components/home/SelectedWork";
import Process from "@/components/home/Process";
import StudioPhilosophy from "@/components/home/StudioPhilosophy";
import Founders from "@/components/home/Founders";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StudioIntro />
      <ServicesOverview />
      <SelectedWork />
      <Process />
      <StudioPhilosophy />
      <Founders />
      <FAQ />
      <FinalCTA />
    </>
  );
}
