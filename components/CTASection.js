"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CTASection() {
  const router = useRouter();

  return (
    <section className="section">
      <div className="container">
        <motion.div
          className="card-soft text-center py-16"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="subheading max-w-2xl mx-auto">
            Ready to build a cleaner, stronger version of your brand online?
          </h2>

          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Let’s create a website experience that feels premium, focused, and easy to trust.
          </p>

          <button
            className="btn-primary mt-8"
            onClick={() => router.push("/contact")}
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}