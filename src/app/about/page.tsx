import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.fullName} — clean, modern, purposeful web work for startups and growing brands.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="section relative overflow-hidden pb-8 pt-16 md:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-10 font-display text-[12rem] leading-none text-gold/[0.05]"
        >
          JS
        </div>
        <div className="section-inner relative max-w-3xl">
          <p className="eyebrow">
            <span className="sparkle" aria-hidden>
              ✦
            </span>
            About
          </p>
          <h1 className="font-display mt-4 text-4xl text-ink md:text-6xl">
            A growing studio for{" "}
            <span className="text-gold-bright">clean digital work</span>
          </h1>
          <div className="gold-rule my-7 max-w-sm">
            <span className="px-2 text-[0.7rem] uppercase tracking-[0.28em] text-gold">
              {site.tagline}
            </span>
          </div>
          <p className="prose-muted text-lg">{site.positioning}</p>
          <p className="prose-muted mt-4">
            Founded by {site.owner}, JewelSphy is building toward a full team — designers,
            developers, and collaborators who care about craft. Today the focus is shipping
            conversion-minded websites, redesigns, and lightweight systems for startups and
            service businesses. Designed with intention. Built with care.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Work with us
            </Link>
            <Link href="/process" className="btn btn-ghost">
              See the process
            </Link>
          </div>
        </div>
      </section>

      <section className="section border-y border-line">
        <div className="section-inner grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Startup-friendly",
              body: "Introductory packages that help early-stage teams launch without boutique pricing.",
            },
            {
              title: "Modern stack",
              body: "Next.js, Tailwind, Cloudflare, WordPress when content editing matters, plus Cal.com and Stripe for bookings and payments.",
            },
            {
              title: "Growing with you",
              body: "A small team mentality with room to scale — clear communication, honest timelines, and ownership that stays with the client.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-bg-elevated/40 p-6">
              <h2 className="font-display text-2xl text-gold-bright">{item.title}</h2>
              <p className="mt-3 text-ink-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA
        title="Let’s build something together."
        body="Have a project in mind? Share your goals — we’ll recommend a package that fits where you are now."
        primaryLabel="Start a project"
      />
    </>
  );
}
