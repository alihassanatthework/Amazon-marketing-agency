"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Velvora",
    text: "Highly satisfied with the results. We’ve seen consistent improvement month after month. Campaigns are now scalable and much more efficient.",
  },
  {
    name: "Nexora",
    text: "Exactly what my brand needed. Our Amazon store was struggling, but their PPC strategy completely turned things around. Sales are growing and ACOS is under control now.",
  },
  {
    name: "Zenvyra",
    text: "Highly satisfied with the results. We’ve seen consistent improvement month after month. Campaigns are now scalable and much more efficient.",
  },
  {
    name: "Cartivo",
    text: "Very professional and results-driven. They helped restructure our campaigns and optimize everything. The difference was noticeable almost immediately.",
  },
  {
    name: "Sellnexa",
    text: "Amazon PPC finally works. I’ve been running Amazon ads for a while but never saw consistent results. After working with the team, everything changed. ACOS dropped and sales became much more stable.",
  },
  {
    name: "Aeith",
    text: "Strong growth in a short time. We’ve seen a big increase in revenue within a few months. What I like most is that the growth is actually profitable, not just more spend.",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          badge="Testimonials"
          title="Hear From Our Clients"
          text="What our clients remember most is the consistent results we deliver and the growth we help them achieve."
        />

        <div className="testimonial-slider-shell mt-16">
          <div className="testimonial-slider-track">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="testimonial-slide"
              >
                <p className="testimonial-quote">“{item.text}”</p>

                <div className="testimonial-stars" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="#FF9900"
                      stroke="#FF9900"
                    />
                  ))}
                </div>

                <h4 className="testimonial-name">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}