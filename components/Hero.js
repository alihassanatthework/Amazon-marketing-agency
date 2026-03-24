"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="section">
      <div className="container text-center flex flex-col items-center">
        <motion.span
          className="badge"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Growth-focused digital agency
        </motion.span>

        <motion.h1
          className="heading max-w-4xl mt-6"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We help brands grow with clean strategy, smart execution, and better results.
        </motion.h1>

        <motion.p
          className="text-muted max-w-2xl mt-6"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A minimal, modern agency experience focused on performance, clarity,
          and sustainable growth.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="btn-primary" onClick={() => router.push("/contact")}>
            Start a Project
          </button>

          <button className="btn-outline" onClick={() => router.push("/services")}>
            Explore Services
          </button>
        </motion.div>

        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-6 w-full"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="card-soft">
            <h3 className="text-3xl font-semibold">75+</h3>
            <p className="text-muted mt-2">Projects delivered</p>
          </div>

          <div className="card-soft">
            <h3 className="text-3xl font-semibold">173%</h3>
            <p className="text-muted mt-2">Average growth uplift</p>
          </div>

          <div className="card-soft">
            <h3 className="text-3xl font-semibold">5★</h3>
            <p className="text-muted mt-2">Client-first experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}