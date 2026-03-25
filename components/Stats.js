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
      <div className="container grid md:grid-cols-3 gap-6">
        <div className="card-soft text-center">
          <h3 className="text-3xl font-semibold">75+</h3>
          <p className="text-muted mt-2">Projects delivered</p>
        </div>

        <div className="card-soft text-center">
          <h3 className="text-3xl font-semibold">173%</h3>
          <p className="text-muted mt-2">Growth uplift</p>
        </div>

        <div className="card-soft text-center">
          <h3 className="text-3xl font-semibold">5★</h3>
          <p className="text-muted mt-2">Client satisfaction</p>
        </div>
      </div>
    </section>
  );
}