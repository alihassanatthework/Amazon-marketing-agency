"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: <span style={{ color: "#FF9900" }}>Advertising Management</span>,
    text: "Unlock scalable growth through advanced, data driven advertising strategies built for performance and profitability.",
    image: "/images/servicecard/card1.png",
  },
  {
    title: <span style={{ color: "#FF9900" }}>Brand Management</span>,
    text: "Grow and scale your Amazon brand with expert, end to end management focused on performance, optimization, and long-term success.",
    image: "/images/servicecard/card2.png",
  },
  {
    title: <span style={{ color: "#FF9900" }}>Catalog Management</span>,
    text: "Ensure accurate, optimized, and high converting listings with expert catalog management designed to improve visibility and drive consistent sales.",
    image: "/images/servicecard/card3.png",
  },
];

export default function ServicesPreview() {
  return (
    <section className="section pt-24 md:pt-28">
      <div className="container">
        <SectionHeading

          title={
            <>
              Shaping Amazon Brands into <span style={{ color: "#FF9900" }}>Sustainable Success</span>
              <br />
              Stories Through Proven <span style={{ color: "#FF9900" }}>Strategies</span>
            </>
          }
          text=""
        />

        <div className="grid lg:grid-cols-3 gap-8 md:gap-10 mt-14">
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