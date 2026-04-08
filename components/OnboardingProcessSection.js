import React from "react";

const steps = [
  {
    number: "01",
    icon: "⌕",
    title: "Deep Business",
    highlight: "Review",
    subtitle: "Understanding where you are before moving forward",
    description:
      "We begin by diving into your business, brand, and current performance. This helps us uncover what’s working, what’s missing, and where the real opportunities lie.",
    label: "This step includes:",
    points: [
      "Initial strategy call",
      "Business and audience analysis",
      "Review of current marketing efforts",
      "Identifying growth opportunities",
    ],
    bottomIcon: "◉",
  },
  {
    number: "02",
    icon: "◎",
    title: "Strategy &",
    highlight: "Direction",
    subtitle: "Turning insights into a clear plan",
    description:
      "Once we have the full picture, we define your goals and map out a focused strategy. Everything is aligned with your business objectives so there’s no guesswork.",
    label: "In this phase we:",
    points: [
      "Define clear goals and KPIs",
      "Outline project scope and priorities",
      "Build a step-by-step action plan",
      "Set realistic timelines and expectations",
    ],
    bottomIcon: "▣",
  },
  {
    number: "03",
    icon: "↗",
    title: "Launch & Growth",
    highlight: "Execution",
    subtitle: "Bringing the strategy to life",
    description:
      "With a solid plan in place, we move into execution. Our focus is on delivering consistent results while continuously improving performance.",
    label: "What we focus on:",
    points: [
      "Campaign setup and management",
      "Ongoing optimization and testing",
      "Scaling what works",
      "Monitoring performance and refining strategy",
    ],
    bottomIcon: "▲",
  },
];

export default function OnboardingProcessSection() {
  return (
    <section className="process-section">
      <div className="container">
        <div className="process-heading">
          <div className="process-badge">Our Process</div>

          <h2 className="process-title">
            <span className="mr-3 inline-block"></span>
            How We Get You <span>Results</span>
          </h2>

          <p className="process-subtitle">
            A simple process designed to understand, plan, and grow your
            business. We follow a clear, step-by-step approach to ensure every
            project starts with clarity and ends with measurable success.
          </p>
        </div>

        <div className="process-icons-row">
          <div className="process-icons-line" />
          {steps.map((step) => (
            <div key={step.number} className="process-top-icon-wrap">
              <div className="process-top-icon">{step.icon}</div>
            </div>
          ))}
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <div key={step.number} className="process-card">
              <div className="process-card-glow" />

              <div className="process-step-badge">{step.number}</div>

              <div className="process-card-header">
                <h3 className="process-card-title">
                  {step.title} <span>{step.highlight}</span>
                </h3>
                <p className="process-card-subtitle">{step.subtitle}</p>
              </div>

              <p className="process-card-description">{step.description}</p>

              <div className="process-card-body">
                <p className="process-card-label">{step.label}</p>

                <ul className="process-points">
                  {step.points.map((point) => (
                    <li key={point} className="process-point">
                      <span className="process-point-icon">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}