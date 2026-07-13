"use client";

import Link from "next/link";
import { useState } from "react";
import { packages } from "@/lib/site";

export function PackagePicker() {
  const [active, setActive] = useState(
    Math.max(
      0,
      packages.findIndex((p) => p.featured),
    ),
  );
  const pkg = packages[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-3">
        {packages.map((item, index) => {
          const on = index === active;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(index)}
              className={`w-full rounded-2xl border px-5 py-4 text-left transition ${
                on
                  ? "border-gold bg-gold-soft"
                  : "border-line bg-bg-elevated/40 hover:border-gold/50"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-display text-xl text-ink">{item.name}</span>
                <span className="text-xs uppercase tracking-[0.16em] text-gold">{item.badge}</span>
              </div>
              <p className="mt-1 text-sm text-ink-muted">{item.bestFor}</p>
            </button>
          );
        })}
      </div>

      <div className="rounded-2xl border border-gold bg-gradient-to-b from-gold-soft to-bg-elevated p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">{pkg.badge}</p>
        <h3 className="font-display mt-3 text-3xl text-ink">{pkg.name}</h3>
        <p className="mt-2 text-ink-muted">{pkg.bestFor}</p>
        <p className="mt-5 font-display text-3xl text-gold-bright">{pkg.quote}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-dim">
          Typical timeline · {pkg.timeline}
        </p>
        <ul className="mt-6 space-y-3 text-ink-muted">
          {pkg.includes.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-gold" aria-hidden>
                ✦
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn btn-primary mt-8">
          Request a quote for {pkg.name}
        </Link>
      </div>
    </div>
  );
}
