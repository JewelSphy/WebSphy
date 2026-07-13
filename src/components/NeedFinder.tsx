"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { serviceCatalog } from "@/lib/site";

const intents = [
  {
    id: "launch",
    label: "Launch something new",
    hint: "Landing page, portfolio, or first business site",
    href: "/contact?interest=Launch%20something%20new",
    matches: ["websites"],
  },
  {
    id: "refresh",
    label: "Refresh an existing site",
    hint: "Redesign, cleanup, speed, or clearer structure",
    href: "/contact?interest=Website%20redesign",
    matches: ["redesign"],
  },
  {
    id: "convert",
    label: "Get more leads / bookings",
    hint: "Forms, calendars, payments, analytics",
    href: "/contact?interest=Booking%20%26%20Integrations",
    matches: ["integrations"],
  },
  {
    id: "domain",
    label: "Domain, hosting, or email",
    hint: "Go live with a real address and inbox",
    href: "/contact?interest=Domain%20%2F%20hosting",
    matches: ["domains"],
  },
  {
    id: "app",
    label: "Build a small app / portal",
    hint: "Dashboards, client areas, starter stores",
    href: "/contact?interest=Custom%20Web%20App",
    matches: ["apps"],
  },
  {
    id: "care",
    label: "Ongoing support",
    hint: "Updates, edits, and monthly care",
    href: "/contact?interest=Support%20%26%20Updates",
    matches: ["support"],
  },
] as const;

export function NeedFinder() {
  const [selected, setSelected] = useState<string | null>(null);

  const related = useMemo(() => {
    const intent = intents.find((i) => i.id === selected);
    if (!intent) return [];
    return serviceCatalog.filter((g) =>
      (intent.matches as readonly string[]).includes(g.id),
    );
  }, [selected]);

  const intent = intents.find((i) => i.id === selected);

  return (
    <div>
      <p className="eyebrow">Quick finder</p>
      <h2 className="font-display mt-3 max-w-2xl text-4xl text-ink md:text-5xl">
        What do you need help with?
      </h2>
      <p className="prose-muted mt-4 max-w-2xl">
        Tap an option — we’ll show matching services. No commitment, just a clearer next step.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {intents.map((item) => {
          const on = selected === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelected(on ? null : item.id)}
              className={`rounded-2xl border p-5 text-left transition ${
                on
                  ? "border-gold bg-gold-soft shadow-[0_12px_40px_rgba(201,162,39,0.12)]"
                  : "border-line bg-bg-elevated/40 hover:border-gold/60"
              }`}
            >
              <span className="font-display text-xl text-ink">{item.label}</span>
              <span className="mt-2 block text-sm text-ink-muted">{item.hint}</span>
            </button>
          );
        })}
      </div>

      {intent ? (
        <div className="mt-8 rounded-2xl border border-line bg-bg-elevated/50 p-6 md:p-8">
          <p className="text-sm text-gold-bright">Suggested for: {intent.label}</p>
          <div className="mt-5 space-y-6">
            {related.map((group) => (
              <div key={group.id}>
                <h3 className="font-display text-2xl text-ink">{group.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{group.intro}</p>
                <ul className="mt-4 grid gap-2 md:grid-cols-2">
                  {group.items.slice(0, 6).map((item) => (
                    <li
                      key={item.name}
                      className="rounded-xl border border-line/80 px-4 py-3 text-sm text-ink-muted"
                    >
                      <span className="block text-ink">{item.name}</span>
                      <span className="mt-1 block text-xs text-ink-dim">{item.summary}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={intent.href} className="btn btn-primary">
              Start with this
            </Link>
            <Link href="/services" className="btn btn-ghost">
              Browse full catalog
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
