"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="section-loose pb-20 md:pb-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <motion.span
              className="badge"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              We Scaled!
            </motion.span>

            <motion.h1
              className="heading mt-6 max-w-3xl"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              A Multi SKU portfolio to{" "}
              <span className="text-[#FF9900]">$9.5M</span> in annual revenue
              with zero founder involvement delivering full cycle PPC
              Management
            </motion.h1>

            <motion.p
              className="text-muted mt-6 max-w-lg"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              without taking a single percentage of profit.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                className="btn-primary"
                onClick={() => router.push("/contact")}
              >
                Start a Project
              </button>

              <button
                className="btn-outline"
                onClick={() => router.push("/services")}
              >
                Explore Services
              </button>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-[#111] p-3 rounded-3xl border border-gray-800 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/hero.png"
                alt="Hero Image"
                width={700}
                height={700}
                priority
                className="rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-14 md:mt-16"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="hero-stat">
            <h3>$7M+</h3>
            <p>Revenue Generated</p>
          </div>

          <div className="hero-stat">
            <h3>170%</h3>
            <p>PPC Sales Growth</p>
          </div>

          <div className="hero-stat">
            <h3>27%</h3>
            <p>Profit Acquired</p>
          </div>

          <div className="hero-stat">
            <h3>5–10%</h3>
            <p>Average TACOS</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}