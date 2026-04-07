"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Advertising Management",
    text: "Unlock scalable growth through advanced, data-driven advertising strategies built for performance and profitability.",
    image: "/images/servicecard/card1.png",
  },
  {
    title: "Brand Management",
    text: "Grow and scale your Amazon brand with expert, end-to-end management focused on performance, optimization, and long-term success.",
    image: "/images/servicecard/card2.png",
  },
  {
    title: "Catalog Management",
    text: "Ensure accurate, optimized, and high-converting listings with expert catalog management designed to improve visibility and drive consistent sales.",
    image: "/images/servicecard/card3.png",
  },
];

export default function ServicesPreview() {
  return (
    <section className="services-home-section">
      <div className="container">
        <div className="services-home-heading">
          <h2>
            Shaping Amazon Brands into
            <span> Sustainable Success Stories </span>
            Through Proven Strategies
          </h2>
        </div>

        <div className="services-home-grid">
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
                image={service.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}