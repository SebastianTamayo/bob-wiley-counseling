import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import Comparison from "@/components/Comparison";
import Differentiation from "@/components/Differentiation";
import LeadMagnet from "@/components/LeadMagnet";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import QuoteSection from "@/components/QuoteSection";
import BottomCTA from "@/components/BottomCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustIndicators />
      <Comparison />
      <Differentiation />
      <LeadMagnet />
      <About />
      <Testimonials />
      <QuoteSection />
      <BottomCTA />
    </main>
  );
}
