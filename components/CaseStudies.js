"use client";

import SectionHeading from "./SectionHeading";
import FadeUp from "./FadeUp";
import Image from "next/image";

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
    <section className="section">
      <div className="container">

        <FadeUp>
          <SectionHeading
            badge="Case Studies"
            title="Proof, not promises."
            text="Real outcomes from structured execution and focused strategies."
          />
        </FadeUp>

        {/* 🔥 FIX: ADD MAP */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mt-16">
          {cases.map((item, index) => (
            <div
              key={item.title}
              className="card bg-[#111] overflow-hidden group hover:-translate-y-1 transition"
            >

              {/* Image */}
              <div className="relative w-full h-[200px]">
                <Image
                  src={`/images/case${index + 1}.jpeg`}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-500 uppercase">
                  {item.title}
                </p>

                <h3 className="text-2xl font-semibold mt-3">
                  {item.result}
                </h3>

                <p className="text-muted mt-3">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}