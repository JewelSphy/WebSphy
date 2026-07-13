import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Process",
  description: "How JewelSphy scopes, builds, and launches websites and lightweight web systems.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="section pb-8 pt-16 md:pt-24">
        <div className="section-inner">
          <p className="eyebrow">
            <span className="sparkle" aria-hidden>
              ✦
            </span>
            Process
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl text-ink md:text-6xl">
            A calm path from idea to launch.
          </h1>
          <p className="prose-muted mt-5 max-w-2xl">
            Clear checkpoints, honest scope, and handoff that leaves your team with a site you can
            actually use — not a mystery black box.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="section-inner space-y-0">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="grid gap-4 border-t border-line py-8 md:grid-cols-[140px_1fr] md:items-start"
            >
              <p className="font-display text-4xl text-gold-bright">{step.step}</p>
              <div>
                <h2 className="font-display text-3xl text-ink">{step.title}</h2>
                <p className="prose-muted mt-3 max-w-2xl">{step.body}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-line" />
        </div>
        <div className="section-inner mt-10">
          <Link href="/contact" className="btn btn-primary">
            Book a discovery chat
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
