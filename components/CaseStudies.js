"use client";

import SectionHeading from "./SectionHeading";
import FadeUp from "./FadeUp";

const cases = [
  {
    title: "Home Improvement Brand",
    result: "163% Revenue Growth",
    description:
      "We restructured campaigns and simplified strategy to unlock scalable growth.",
  },
  {
    title: "Seasonal Brand",
    result: "$100K / Month",
    description:
      "Focused execution and timing helped achieve consistent revenue spikes.",
  },
  {
    title: "Snack Brand",
    result: "196% PPC Sales",
    description:
      "A clean launch strategy improved conversion and reduced wasted spend.",
  },
];

export default function CaseStudies() {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <FadeUp>
          <SectionHeading
            badge="Case Studies"
            title="Proof, not promises."
            text="Real outcomes from structured execution and focused strategies."
          />
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {cases.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.08}>
              <div className="card bg-white">
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  {item.title}
                </p>

                <h3 className="text-2xl font-semibold mt-4">
                  {item.result}
                </h3>

                <p className="text-muted mt-4">
                  {item.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}