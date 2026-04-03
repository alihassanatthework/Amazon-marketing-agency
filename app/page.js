// 📁 app/page.js

import Hero from "../components/Hero";
// import Stats from "../components/Stats";
import BrandSection from "../components/BrandSection";
import ServicesPreview from "../components/ServicesPreview";
import CaseStudies from "../components/CaseStudies";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";

// ✅ SEO metadata
export const metadata = {
  title: "Home",
  description: "Premium minimal agency website focused on growth and clarity.",
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      {/* <Stats /> */}

      {/* Brand Section */}
      <BrandSection />


      {/* Services Preview */}
      <ServicesPreview />

      {/* Case Studies */}
      <CaseStudies />

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <CTASection />
    </main>
  );
}