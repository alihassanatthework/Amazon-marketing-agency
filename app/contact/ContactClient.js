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
        throw new Error(data.message || "Failed.");
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
        error: error.message,
      });
    }
  };

  return (
    <main className="section container max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <FadeUp>
          <span className="badge">Contact</span>
          <h1 className="heading mt-4">Let’s talk</h1>
          <p className="text-muted mt-6">
            Tell us about your project.
          </p>
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
                placeholder="Email"
                className="input"
                value={form.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                className="input min-h-[160px]"
                value={form.message}
                onChange={handleChange}
                required
              />

              <button className="btn-primary">
                {status.loading ? "Sending..." : "Send"}
              </button>
            </form>

            {status.success && (
              <p className="text-green-600 mt-4">
                Message sent successfully
              </p>
            )}

            {status.error && (
              <p className="text-red-600 mt-4">
                {status.error}
              </p>
            )}
          </div>
        </FadeUp>
      </div>
    </main>
  );
}