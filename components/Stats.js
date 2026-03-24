"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "100+", label: "Projects completed" },
  { number: "50+", label: "Brands supported" },
  { number: "10x", label: "Better clarity in execution" },
  { number: "24/7", label: "Commitment to quality" },
];

export default function Stats() {
  return (
    <section className="section pt-0">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            className="card text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <h3 className="text-3xl md:text-4xl font-semibold">{item.number}</h3>
            <p className="text-muted mt-2">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}