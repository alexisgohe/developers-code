import CTASection from "./CTASection";
import Hero from "./Hero";
import ProblemSection from "./ProblemSection";
import ProcessSection from "./ProcessSection";
import WhyTrust from "./WhyTrust";
import Services from "./Services";
import FAQ from "./FAQ";

export default function DevelopersCodeLanding() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <Services />
      <ProcessSection />
      <WhyTrust />
      <FAQ />
      <CTASection />
    </>
  );
}
