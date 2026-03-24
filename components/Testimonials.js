"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Client One",
    text: "Very structured, very clear, and easy to work with. The experience felt premium from day one.",
  },
  {
    name: "Client Two",
    text: "They simplified what used to feel messy. We had better direction and far more confidence.",
  },
  {
    name: "Client Three",
    text: "The minimal approach actually made everything stronger. Less noise, more clarity, better outcomes.",
  },
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

        <div className="grid md:grid-cols-3 gap-6 section-space">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              className="card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <p className="text-muted">“{item.text}”</p>
              <h4 className="mt-6 font-semibold">{item.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}