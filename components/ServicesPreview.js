"use client";

import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "Strategy",
    text: "Clear planning and positioning that turns ideas into action.",
  },
  {
    title: "Performance Marketing",
    text: "Campaign execution focused on efficiency, reach, and sustainable growth.",
  },
  {
    title: "Creative Direction",
    text: "Minimal visual systems and messaging that improve trust and conversion.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="section bg-[#0d0d0d]">
      <div className="container">
        <SectionHeading
          badge="Services"
          title="A focused set of services built for growth."
          text="We keep things simple: strategy, execution, and measurable progress."
        />

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <ServiceCard
                title={service.title}
                description={service.text}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}