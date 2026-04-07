"use client";

import SectionHeading from "./SectionHeading";
import FadeUp from "./FadeUp";
import Image from "next/image";

const cases = [
  {
    title: " Beauty & Personal Care Brand",
    result: "$5.7M Revenue driven by 5.2% ACOS",
    description:
      "Witness how our performance-focused approach unlocked consistent growth while maintaining strong efficiency.",
    stats: [
      { value: "4.3x", label: "ROAS" },
      { value: "5.2%", label: "ACOS" },
    ],
  },
  {
    title: "Household Brand",
    result: "$100K / Month",
    description:
      "Focused execution and campaign timing helped the brand capture seasonal demand and maintain strong monthly revenue spikes.",
    stats: [
      { value: "$100K", label: "Monthly Revenue" },
      { value: "Seasonal", label: "Demand Capture" },
    ],
  },
  {
    title: "Apparel Brand",
    result: "$4.7M Revenue with 231% PPC Sales Growth",
    description:
      "Witness how our data-driven approach scaled performance while maintaining exceptional efficiency.",
    stats: [
      { value: "231%", label: "PPC Sales" },
      { value: "4.2%", label: "ACOS" },
    ],
  },
  {
    title: "Health Brand",
    result: "$6.8M Revenue with 4.2% ACOS",
    description:
      "See how precise targeting and continuous optimization delivered massive growth with low ACOS.",
    stats: [
      { value: "3.8x+", label: "ROAS" },
      { value: "4.2%", label: "ACOS" },
    ],
  },
  {
    title: "Pet Supplies Brand",
    result: " $4.8M Revenue with 4.2% ACOS",
    description:
      "Witness how our performance-focused approach drove consistent growth while maintaining strong efficiency.",
    stats: [
      { value: "176%", label: "ROAS" },
      { value: "4.9%", label: "ACOS" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="section">
      <div className="container">

        <FadeUp>
          <SectionHeading
            badge="Case Studies"
            title="Proof Not Promises"
            text="Maximize your Amazon brand with proven optimization and advertising. Driven by data. Proven by results."
          />
        </FadeUp>

        {/* 🔥 FIX: ADD MAP */}
        <div className="case-slider-shell mt-16">
          <div className="case-slider-track">
            {[...cases, ...cases].map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="case-slide"
              >
                <div className="case-slide-image">
                  <Image
                    src={`/images/case${(index % cases.length) + 1}.jpeg`}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 88vw, 540px"
                    className="object-contain"
                  />
                </div>

                <div className="case-slide-content">
                  <p className="case-slide-label">{item.title}</p>
                  <h3 className="case-slide-title">{item.result}</h3>
                  <p className="case-slide-text">{item.description}</p>

                  {item.stats && (
                    <div className="case-slide-stats">
                      {item.stats.map((stat, statIndex) => (
                        <div
                          key={`${stat.label}-${statIndex}`}
                          className="case-slide-stat"
                        >
                          <strong>{stat.value}</strong>
                          <span>{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}