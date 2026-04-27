import PortfolioHero from "@/components/portafolio/PortfolioHero";
import ProjectsGrid from "@/components/portafolio/ProjectsGrid";
import TechStack from "@/components/portafolio/TechStack";
import Testimonial from "@/components/portafolio/Testimonial";
import FinalCTA from "@/components/portafolio/FinalCTA";

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <ProjectsGrid />
      <TechStack />
      <Testimonial />
      <FinalCTA />
    </>
  );
}