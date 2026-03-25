"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="section-loose">
      <div className="container grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.span
            className="badge"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Growth-focused digital agency
          </motion.span>

          <motion.h1
            className="heading mt-6 max-w-xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We help brands grow with clarity and better execution.
          </motion.h1>

          <motion.p
            className="text-muted mt-6 max-w-lg"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A minimal, structured approach to building stronger digital presence.
          </motion.p>

          <motion.div
            className="flex gap-4 mt-8"
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
              width={600}
              height={600}
              priority
              className="rounded-2xl object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}