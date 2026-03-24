import FadeUp from "../../components/FadeUp";

const services = [
  {
    title: "Strategy",
    description:
      "We create clear direction, refined messaging, and growth-focused planning that reduces noise and improves decision-making.",
  },
  {
    title: "Performance Marketing",
    description:
      "Campaign systems designed for efficient growth, better conversion quality, and stronger long-term performance.",
  },
  {
    title: "Creative Direction",
    description:
      "Minimal and premium design language that builds trust and supports higher conversion.",
  },
  {
    title: "Brand Positioning",
    description:
      "Sharper positioning to help your business feel distinct, credible, and easier to understand.",
  },
  {
    title: "Landing Page Design",
    description:
      "Focused page structures built to guide attention, improve UX, and support lead generation.",
  },
  {
    title: "Conversion Optimization",
    description:
      "We refine copy, hierarchy, and interaction patterns to create smoother user journeys.",
  },
];

export const metadata = {
  title: "Services | YourBrand",
  description: "Explore our premium minimal services built for growth.",
};

export default function ServicesPage() {
  return (
    <main className="section container">
      <FadeUp className="text-center max-w-3xl mx-auto">
        <span className="badge">Services</span>
        <h1 className="heading mt-4">
          Services built for clarity, performance, and trust.
        </h1>
        <p className="text-muted mt-6">
          We keep the offering focused so every service feels intentional,
          premium, and effective.
        </p>
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-6 mt-16">
        {services.map((service, index) => (
          <FadeUp key={service.title} delay={index * 0.06}>
            <div className="card h-full">
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="text-muted mt-4">{service.description}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp className="mt-20">
        <div className="card-soft text-center py-14">
          <h2 className="subheading">Let’s build something strong together.</h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            If you want a cleaner and more intentional digital presence, this is
            a good place to start.
          </p>
          <a href="/contact" className="inline-block mt-8 btn-primary">
            Start a Conversation
          </a>
        </div>
      </FadeUp>
    </main>
  );
}