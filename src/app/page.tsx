import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import Comparison from "@/components/Comparison";
import LeadMagnet from "@/components/LeadMagnet";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import BottomCTA from "@/components/BottomCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustIndicators />
      <Comparison />
      <LeadMagnet />
      <About />
      <Testimonials />
      <BottomCTA />
    </main>
  );
}
