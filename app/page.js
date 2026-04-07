import Hero from "../components/Hero";
import BrandSection from "../components/BrandSection";
import ServicesPreview from "../components/ServicesPreview";
import CaseStudies from "../components/CaseStudies";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandSection />
      <ServicesPreview />
      <CaseStudies />
      <Testimonials />
      <CTASection />
    </main>
  );
}