import FadeUp from "../../components/FadeUp";
import OnboardingProcessSection from "../../components/OnboardingProcessSection";
import {
  Megaphone,
  TrendingUp,
  ShoppingCart,
  Search,
  LineChart,
  Target,
  BarChart3,
  ClipboardList,
  PenSquare,
  ScanSearch,
  Image as ImageIcon,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    titleWhite: "Amazon PPC",
    titleAccent: "Management",
    description:
      "Scale your revenue with high-performance PPC systems built for profitability. We build, optimize, and scale campaigns that drive profitable growth with low ACOS.",
    highlights: [
      "Full-Funnel Campaign Strategy",
      "High-Converting Keyword Targeting",
      "ACOS & TACOS Optimization",
      "Daily Bid & Budget Management",
      "Search Term Mining & Expansion",
      "Competitor Targeting & Defense",
    ],
    process: [
      { icon: Search, title: "Research" },
      { icon: Megaphone, title: "Build" },
      { icon: LineChart, title: "Optimize" },
      { icon: BarChart3, title: "Scale" },
    ],
  },
  {
    icon: TrendingUp,
    titleWhite: "Brand Growth &",
    titleAccent: "Optimization",
    description:
      "Turn your brand into a category leader on Amazon. From positioning to conversion rate optimization, we help you scale faster with a data-driven strategy.",
    highlights: [
      "Brand Positioning & Messaging",
      "Conversion Rate Optimization",
      "A+ Content & Brand Story Creation",
      "Storefront Design & Optimization",
      "Competitor & Market Analysis",
      "Growth Strategy & Roadmap",
    ],
    process: [
      { icon: Target, title: "Discover" },
      { icon: ClipboardList, title: "Strategize" },
      { icon: PenSquare, title: "Optimize" },
      { icon: BarChart3, title: "Track" },
    ],
  },
  {
    icon: ShoppingCart,
    titleWhite: "Listing & Catalog",
    titleAccent: "Optimization",
    description:
      "Maximize visibility, clicks, and conversions. We optimize listings to improve rankings, increase CTR, and turn traffic into consistent sales.",
    highlights: [
      "SEO-Driven Listing Optimization",
      "Keyword & Backend Optimization",
      "Enhanced Content Creation",
      "Product Image & Video Optimization",
      "Catalog & Attribute Optimization",
      "Ongoing Listing Performance Tracking",
    ],
    process: [
      { icon: ScanSearch, title: "Audit" },
      { icon: PenSquare, title: "Optimize" },
      { icon: ImageIcon, title: "Create" },
      { icon: BarChart3, title: "Improve" },
    ],
  },
];

export const metadata = {
  title: "Services",
  description:
    "Explore Sellerova's Amazon growth services including PPC management, brand management, and catalog optimization.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Sellerova",
    description:
      "Explore Sellerova's Amazon growth services including PPC management, brand management, and catalog optimization.",
    url: "https://www.sellerova.com/services",
    siteName: "Sellerova",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Sellerova",
    description:
      "Explore Sellerova's Amazon growth services including PPC management, brand management, and catalog optimization.",
  },
};

export default function ServicesPage() {
  return (
    <main className="services-home-section">
      <div className="container">
        <FadeUp className="services-block-heading">
          <span className="services-badge">Services</span>

          <h1>
            What We Actually Do to
            <span> Scale </span>
            Your
            <span> Brand </span>
          </h1>

          <p>
            We combine data, strategy, and execution to grow Amazon brands
            profitably and predictably.
          </p>
        </FadeUp>

        <div className="services-block-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeUp
                key={`${service.titleWhite}-${index}`}
                delay={index * 0.08}
              >
                <div className="service-block-card group">
                  <div className="service-block-topglow" />

                  <div className="service-block-header">
                    <div className="service-block-icon">
                      <Icon size={34} strokeWidth={2.1} />
                    </div>

                    <h2 className="service-block-title">
                      <span>{service.titleWhite}</span>
                      <span className="accent">{service.titleAccent}</span>
                    </h2>
                  </div>

                  <p className="service-block-description">
                    {service.description}
                  </p>

                  <div className="service-block-divider" />

                  <div className="service-block-section">
                    <p className="service-block-label">What’s Included:</p>

                    <div className="service-block-list">
                      {service.highlights.map((item, itemIndex) => (
                        <div
                          key={`${item}-${itemIndex}`}
                          className="service-block-list-item"
                        >
                          <CheckCircle2 size={18} strokeWidth={2.1} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="service-block-divider" />

                  <div className="service-block-section">
                    <p className="service-block-label">How We Do It:</p>

                    <div className="service-block-process">
                      {service.process.map((step, stepIndex) => {
                        const StepIcon = step.icon;

                        return (
                          <div
                            key={`${step.title}-${stepIndex}`}
                            className="service-block-step"
                          >
                            <StepIcon size={18} strokeWidth={2.1} />
                            <span>{step.title}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
        <div className="services-block-grid">
        </div>

        <OnboardingProcessSection />

        <FadeUp className="mt-8">
          
        </FadeUp>

        <FadeUp className="section-sm">
          <div className="cta-banner">
            <div className="cta-banner-left">
              <div className="cta-banner-icon">
                <span className="text-[28px] leading-none">⦿</span>
              </div>

              <div className="cta-banner-copy">
                <h2>Ready to scale your brand the right way?</h2>
                <p>
                  Get a free PPC audit and see exactly what&apos;s holding your
                  brand back.
                </p>
              </div>
            </div>

            <a href="/contact" className="cta-banner-button">
              Get Your Free PPC Audit
            </a>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}