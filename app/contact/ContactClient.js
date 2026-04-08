"use client";

import { useState } from "react";
import FadeUp from "../../components/FadeUp";

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: false,
      error: "",
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus({
        loading: false,
        success: true,
        error: "",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error.message || "Something went wrong.",
      });
    }
  };

  return (
    <main className="contact-page-section">
      <div className="container">
        <div className="contact-page-grid">
          <FadeUp>
            <div className="contact-copy-card">
              <span className="contact-badge">Contact</span>

              <h1 className="contact-title">
                Let’s build the next stage of your
                <span> Amazon growth.</span>
              </h1>

              <p className="contact-subtitle">
                Tell us where your brand is today, what is holding growth back,
                and what kind of support you need. We will keep the process
                focused, clear, and practical.
              </p>

              <div className="contact-points">
                <div className="contact-point">
                  <span className="contact-point-icon">✓</span>
                  <span>Response-focused communication</span>
                </div>

                <div className="contact-point">
                  <span className="contact-point-icon">✓</span>
                  <span>Clear and structured onboarding</span>
                </div>

                <div className="contact-point">
                  <span className="contact-point-icon">✓</span>
                  <span>Built for serious Amazon growth</span>
                </div>
              </div>

              <div className="contact-info-strip">
                <div className="contact-info-item">
                  <p className="contact-info-label">Email</p>
                  <a href="mailto:info@sellerova.com">info@sellerova.com</a>
                </div>

                <div className="contact-info-item">
                  <p className="contact-info-label">Call</p>
                  <a href="tel:+13252023203">+1 325 202 3203</a>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="contact-form-card">
              <div className="contact-form-topglow" />

              <div className="contact-form-head">
                <h2>Tell us about your project</h2>
                <p>
                  Fill out the form and we’ll get back to you with the next best
                  step.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form-grid">
                <div className="contact-field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="input"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="input"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field contact-field-full">
                  <label htmlFor="message">Project details</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your brand, current challenges, and what you want to achieve."
                    className="input min-h-[180px]"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  className="contact-submit-btn"
                  disabled={status.loading}
                  type="submit"
                >
                  {status.loading && (
                    <span className="inline-block h-4 w-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                  )}
                  {status.loading ? "Sending..." : "Send Message"}
                </button>
              </form>

              {status.success && (
                <p className="contact-success-message">
                  Your message was sent successfully.
                </p>
              )}

              {status.error && (
                <p className="contact-error-message">{status.error}</p>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </main>
  );
}