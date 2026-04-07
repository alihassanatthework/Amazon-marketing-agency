"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Headphones, ArrowRight } from "lucide-react";

export default function CTASection() {
  const router = useRouter();

  return (
    <section className="section-sm">
      <div className="container">
        <motion.div
          className="cta-banner"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="cta-banner-left">
            <div className="cta-banner-icon">
              <Headphones size={34} strokeWidth={2} />
            </div>

            <div className="cta-banner-copy">
              <h2>If you want to scale, stop wasting time.</h2>
              <p>
                Let&apos;s build a <span>profitable Amazon growth</span> engine
                for your brand.
              </p>
            </div>
          </div>

          <button
            className="cta-banner-button"
            onClick={() => router.push("/contact")}
          >
            <span>Contact Us</span>
            <ArrowRight size={18} strokeWidth={2.4} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}