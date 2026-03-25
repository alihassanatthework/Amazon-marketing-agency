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
    <main className="section container max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <FadeUp>
          <span className="badge">Contact</span>
          <h1 className="heading mt-4">Let’s talk about your project.</h1>
          <p className="text-muted mt-6">
            Share a little about what you’re building. We’ll keep the process
            simple, clear, and focused.
          </p>

          <div className="mt-10 space-y-4 text-sm text-gray-600">
            <p>Response-focused communication</p>
            <p>Minimal and structured process</p>
            <p>Built for serious, thoughtful projects</p>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="card">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                name="name"
                placeholder="Your Name"
                className="input"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="input"
                value={form.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Tell us about your project"
                className="input min-h-[160px]"
                value={form.message}
                onChange={handleChange}
                required
              />

              <button
                className="btn-primary mt-2 disabled:opacity-60 flex items-center justify-center gap-2"
                disabled={status.loading}
              >
                {status.loading && (
                  <span className="inline-block h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                )}
                {status.loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {status.success && (
              <p className="mt-5 text-green-600">
                Your message was sent successfully.
              </p>
            )}

            {status.error && (
              <p className="mt-5 text-red-600">{status.error}</p>
            )}
          </div>
        </FadeUp>
      </div>
    </main>
  );
}