"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Client One",
    text: "Highly satisfied with the results. We’ve seen consistent improvement month after month. Campaigns are now scalable and much more efficient.",
  },
  {
    name: "Client Two",
    text: "Exactly what my brand needed. Our Amazon store was struggling, but their PPC strategy completely turned things around. Sales are growing and ACOS is under control now.",
  },
  {
    name: "Client Three",
    text: "Highly satisfied with the results. We’ve seen consistent improvement month after month. Campaigns are now scalable and much more efficient.",
  },
  {
    name: "Client Four",
    text: "Very professional and results-driven. They helped restructure our campaigns and optimize everything. The difference was noticeable almost immediately.",
  },
  {
    name: "Client Five",
    text: "Amazon PPC finally works I’ve been running Amazon ads for a while but never saw consistent results. After working with the team, everything changed. ACOS dropped and sales became much more stable.",
  },
  {
    name: "Client Six",
    text: "Strong growth in a short time We’ve seen a big increase in revenue within a few months. What I like most is that the growth is actually profitable, not just more spend.",
  }

];


export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          badge="Testimonials"
          title="What clients remember most is clarity."
          text="Instead of cluttered sliders, use fewer and stronger quotes."
        />

        <div className="testimonial-slider-shell mt-16">
          <div className="testimonial-slider-track">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="testimonial-slide"
              >
                <p className="testimonial-quote">“{item.text}”</p>
                <h4 className="testimonial-name">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}