"use client";

import { useState } from "react";

type FAQItem = { q: string; a: string };

export function FAQ({
  items,
  title = "Common questions",
}: {
  items: readonly FAQItem[];
  title?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <h2 className="font-display text-3xl text-ink md:text-4xl">{title}</h2>
      <div className="mt-8 divide-y divide-line border-y border-line">
        {items.map((item, index) => {
          const isOpen = open === index;
          return (
            <div key={item.q}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span className="text-base text-ink md:text-lg">{item.q}</span>
                <span
                  className="text-gold transition-transform duration-200"
                  style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                  aria-hidden
                >
                  ✦
                </span>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="prose-muted pb-5 pr-8 text-[0.98rem]">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
