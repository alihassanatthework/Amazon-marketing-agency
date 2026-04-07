"use client";

import SectionHeading from "./SectionHeading";
import FadeUp from "./FadeUp";
import Image from "next/image";

const cases = [
  {
    title: "Beauty and Personal Care",
    result: "$5.7M Revenue driven by 5.2% ACOS",
    description:
      "Scale a beauty .",
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
  {
    title: "Snack Brand",
    result: "196% PPC Sales",
    description:
      "A clean launch strategy improved conversion and reduced wasted spend.",
  },
  {
    title: "Snack Brand",
    result: "196% PPC Sales",
    description:
      "A clean launch strategy improved conversion and reduced wasted spend.",
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
    <section className="section">
      <div className="container">

        <FadeUp>
          <SectionHeading
            badge="Case Studies"
            title="Proof Not Promises"
            text="Maximize your Amazon brand with proven optimization and advertising."
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
                    sizes="(max-width: 768px) 90vw, 50vw"
                    className="object-contain"
                  />
                </div>

                <div className="case-slide-content">
                  <p className="case-slide-label">{item.title}</p>
                  <h3 className="case-slide-title">{item.result}</h3>
                  <p className="case-slide-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}