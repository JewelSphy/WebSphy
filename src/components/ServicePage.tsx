import Link from "next/link";
import type { Service } from "@/lib/site";

export function ServicePage({ service }: { service: Service }) {
  return (
    <>
      <section className="section pb-10 pt-16 md:pt-24">
        <div className="section-inner">
          <p className="eyebrow fade-up">
            <span className="sparkle" aria-hidden>
              ✦
            </span>
            {service.shortName}
          </p>
          <h1 className="font-display fade-up fade-up-delay-1 mt-4 max-w-4xl text-4xl leading-tight text-ink md:text-6xl">
            {service.headline}
          </h1>
          <p className="prose-muted fade-up fade-up-delay-2 mt-6 max-w-2xl">
            {service.summary}
          </p>
          <div className="fade-up fade-up-delay-3 mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Request a quote
            </Link>
            <Link href="/pricing" className="btn btn-ghost">
              See packages
            </Link>
          </div>
          <dl className="mt-12 grid gap-4 border-y border-line py-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-ink-dim">Pricing</dt>
              <dd className="mt-2 font-display text-2xl text-gold-bright">{service.quote}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-ink-dim">Timeline</dt>
              <dd className="mt-2 font-display text-2xl text-ink">{service.timeline}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-ink-dim">Ideal client</dt>
              <dd className="mt-2 text-ink-muted">Startups & service brands</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section pt-0">
        <div className="section-inner grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl text-ink md:text-4xl">What you get</h2>
            <ul className="mt-6 space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-ink-muted">
                  <span className="mt-1 text-gold" aria-hidden>
                    ✦
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-5">
              {service.description.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="prose-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-[1.5rem] border border-line bg-bg-elevated/70 p-6 md:p-8">
            <p className="eyebrow">Scope summary</p>
            <ul className="mt-5 space-y-3 text-ink-muted">
              {service.deliverables.map((item) => (
                <li key={item} className="border-b border-line/70 pb-3 last:border-0">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-dim">Typical stack: {service.stack}</p>
            <p className="mt-2 text-sm text-ink-dim">{service.hourly}</p>
            <Link href="/contact" className="btn btn-primary mt-8 w-full">
              Start this project
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
