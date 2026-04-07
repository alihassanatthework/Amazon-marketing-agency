"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { DollarSign, TrendingUp, PieChart, Target } from "lucide-react";

const stats = [
  {
    value: "$7M+",
    label: "Revenue Generated",
    icon: DollarSign,
  },
  {
    value: "170%",
    label: "YoY Sales Growth",
    icon: TrendingUp,
  },
  {
    value: "27%",
    label: "Profit Acquired",
    icon: PieChart,
  },
  {
    value: "5-10%",
    label: "Average ACOS",
    icon: Target,
  },
];

export default function Hero() {
  const router = useRouter();

  return (
    <section className="hero-home">
      <div className="container">
        <div className="hero-home-grid">
          <div>
            <motion.span
              className="hero-badge"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              We Scaled!
            </motion.span>

            <motion.h1
              className="hero-title"
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
              className="hero-subtitle"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              without taking a single percentage of profit.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                className="hero-primary-btn"
                onClick={() => router.push("/contact")}
              >
                Start Project
              </button>

              <button
                className="hero-secondary-btn"
                onClick={() => router.push("/services")}
              >
                Explore Services
              </button>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual-shell"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hero-visual-card">
              <Image
                src="/images/hero-new.png"
                alt="Performance dashboard"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-stats-grid"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="hero-stat-card hero-stat-card-row">
                <div className="hero-stat-icon">
                  <Icon size={28} strokeWidth={2.2} className="text-[#FF9900]" />
                </div>

                <div>
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}