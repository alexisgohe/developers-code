import PortfolioHero from "@/components/portafolio/PortfolioHero";
import ProjectsGrid from "@/components/portafolio/ProjectsGrid";
import TechStack from "@/components/portafolio/TechStack";
import Testimonial from "@/components/portafolio/Testimonial";
import FinalCTA from "@/components/portafolio/FinalCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio | Developers Code",
  description: "Explora nuestros casos de éxito y proyectos destacados en desarrollo web, sistemas a medida y consultoría.",
  alternates: {
    canonical: "/portafolio",
  },
  openGraph: {
    title: "Portafolio | Developers Code",
    description: "Explora nuestros casos de éxito y proyectos destacados en desarrollo web, sistemas a medida y consultoría.",
    url: "https://developers-code.vercel.app/portafolio",
  },
  twitter: {
    title: "Portafolio | Developers Code",
    description: "Explora nuestros casos de éxito y proyectos destacados en desarrollo web, sistemas a medida y consultoría.",
  },
};

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