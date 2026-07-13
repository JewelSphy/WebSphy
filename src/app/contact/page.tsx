import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { InterestPrefill } from "@/components/InterestPrefill";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} — ${site.email} · ${site.phone}`,
};

export default function ContactPage() {
  return (
    <section className="section pt-16 md:pt-24">
      <div className="section-inner grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">
            <span className="sparkle" aria-hidden>
              ✦
            </span>
            Contact
          </p>
          <h1 className="font-display mt-4 text-4xl text-ink md:text-6xl">
            Let’s build something amazing together.
          </h1>
          <p className="prose-muted mt-5">
            Have a project in mind? Tell us what you need. No pressure — just possibilities and a
            clear recommendation on package or custom scope.
          </p>

          <ul className="mt-10 space-y-4 text-ink-muted">
            <li>
              <span className="block text-xs uppercase tracking-[0.18em] text-ink-dim">
                Phone / text
              </span>
              <a
                href={site.phoneHref}
                className="mt-1 inline-block text-lg text-gold-bright hover:text-gold"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-[0.18em] text-ink-dim">Email</span>
              <a
                href={site.emailHref}
                className="mt-1 inline-block text-lg text-gold-bright hover:text-gold"
              >
                {site.email}
              </a>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-[0.18em] text-ink-dim">
                Social
              </span>
              <div className="mt-1 flex flex-wrap gap-4">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold-bright"
                >
                  LinkedIn
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold-bright"
                >
                  GitHub
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="border border-line bg-bg-elevated/50 p-6 md:p-8">
          <h2 className="font-display text-2xl text-ink">Project inquiry</h2>
          <p className="mt-2 text-sm text-ink-muted">
            Share service interest, timeline, and project size so we can reply with a useful next
            step.
          </p>
          <div className="mt-6">
            <Suspense fallback={null}>
              <InterestPrefill />
            </Suspense>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
