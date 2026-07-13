"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          service: data.get("service"),
          budget: data.get("budget"),
          timeline: data.get("timeline"),
          message: data.get("message"),
          company: data.get("company"), // honeypot
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setError(result.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError(`Could not send. Email ${site.email} or text ${site.phone}.`);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-gold bg-gold-soft px-6 py-8">
        <p className="font-display text-2xl text-gold-bright">Inquiry sent</p>
        <p className="prose-muted mt-3 text-sm">
          Your message is on its way to {site.email}. We’ll get back to you soon.
        </p>
        <button
          type="button"
          className="btn btn-ghost mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className="input" autoComplete="name" />
        </div>
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="input"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="label" htmlFor="service">
            Service interest
          </label>
          <select id="service" name="service" className="select" defaultValue="Business Website">
            <option>Portfolio / Landing Page</option>
            <option>Business Website</option>
            <option>Website Redesign</option>
            <option>Custom Web App</option>
            <option>Booking & Integrations</option>
            <option>Support & Updates</option>
            <option>Domain / hosting</option>
            <option>Custom quote</option>
          </select>
        </div>
        <div>
          <label className="label" htmlFor="budget">
            Project size
          </label>
          <select id="budget" name="budget" className="select" defaultValue="Full website">
            <option>Landing / portfolio</option>
            <option>Full website</option>
            <option>Custom app / portal</option>
            <option>Ongoing support</option>
            <option>Domain / hosting help</option>
            <option>Not sure yet — let’s discuss</option>
          </select>
        </div>
      </div>

      <div>
        <label className="label" htmlFor="timeline">
          Ideal timeline
        </label>
        <select id="timeline" name="timeline" className="select" defaultValue="2–4 weeks">
          <option>ASAP</option>
          <option>1–2 weeks</option>
          <option>2–4 weeks</option>
          <option>1–2 months</option>
          <option>Flexible</option>
        </select>
      </div>

      <div>
        <label className="label" htmlFor="message">
          Project notes
        </label>
        <textarea
          id="message"
          name="message"
          className="textarea"
          placeholder="What are you building, and what should visitors do on the site?"
          required
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full md:w-auto"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Send inquiry"}
      </button>

      {status === "error" ? (
        <p className="text-sm text-red-300" role="alert">
          {error}
        </p>
      ) : (
        <p className="text-sm text-ink-dim">
          Goes to {site.email}. Or text {site.phone}.
        </p>
      )}
    </form>
  );
}
