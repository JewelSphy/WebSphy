import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { workSamples } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected project directions and case-study style examples from JewelSphy.",
};

export default function WorkPage() {
  return (
    <>
      <section className="section pb-8 pt-16 md:pt-24">
        <div className="section-inner">
          <p className="eyebrow">
            <span className="sparkle" aria-hidden>
              ✦
            </span>
            Work
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl text-ink md:text-6xl">
            Portfolio examples and project shapes I deliver most often.
          </h1>
          <p className="prose-muted mt-5 max-w-2xl">
            Early case studies focus on the deliverables clients actually buy: landing pages,
            small business sites, and redesigns. Full client stories will land here as launches
            ship.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="section-inner grid gap-6 md:grid-cols-3">
          {workSamples.map((sample, index) => (
            <article
              key={sample.title}
              className="relative overflow-hidden border border-line bg-bg-elevated/40 p-7"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(135deg,rgba(201,162,39,0.18),transparent_60%)]"
              />
              <p className="relative text-xs uppercase tracking-[0.22em] text-gold">
                0{index + 1} · {sample.type}
              </p>
              <h2 className="font-display relative mt-4 text-3xl text-ink">{sample.title}</h2>
              <p className="relative mt-4 text-ink-muted">{sample.outcome}</p>
            </article>
          ))}
        </div>
        <div className="section-inner mt-12 border border-dashed border-line px-6 py-10 text-center">
          <p className="font-script text-2xl text-gold-bright">Your project could be next</p>
          <p className="prose-muted mx-auto mt-3 max-w-xl">
            If you have an existing site or offer that needs a clearer conversion path, that’s the
            kind of work that belongs in this gallery.
          </p>
          <Link href="/contact" className="btn btn-primary mt-6">
            Pitch a project
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
