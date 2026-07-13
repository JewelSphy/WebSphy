"use client";

import Link from "next/link";
import { useState } from "react";
import { services, type Service } from "@/lib/site";

export function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const current: Service = services[active];

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Services">
        {services.map((service, index) => {
          const selected = index === active;
          return (
            <button
              key={service.slug}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(index)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                selected
                  ? "border-gold bg-gold-soft text-gold-bright"
                  : "border-line text-ink-muted hover:border-gold hover:text-gold-bright"
              }`}
            >
              {service.shortName}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="mt-8 grid gap-8 rounded-2xl border border-line bg-bg-elevated/40 p-6 md:grid-cols-[1fr_1fr] md:p-10"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink-dim">
            0{active + 1} · {current.timeline}
          </p>
          <h3 className="font-display mt-3 text-3xl text-ink md:text-4xl">
            {current.shortName}
          </h3>
          <p className="mt-3 text-gold-bright">{current.quote}</p>
          <p className="prose-muted mt-4">{current.summary}</p>
          <p className="prose-muted mt-3 text-[0.98rem]">{current.description[0]}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`/services/${current.slug}`} className="btn btn-ghost !min-h-10 !text-sm">
              Full details
            </Link>
            <Link href="/contact" className="btn btn-primary !min-h-10 !text-sm">
              Request a quote
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-ink-dim">Why it helps</p>
          <ul className="mt-4 space-y-3">
            {current.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex gap-3 rounded-xl border border-line/70 bg-bg/40 px-4 py-3 text-sm text-ink-muted transition hover:border-gold/50"
              >
                <span className="text-gold" aria-hidden>
                  ✦
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-ink-dim">
            Typically includes
          </p>
          <ul className="mt-3 space-y-2 text-sm text-ink-muted">
            {current.deliverables.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-gold">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
