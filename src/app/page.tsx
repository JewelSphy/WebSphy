import Link from "next/link";
import { CTA } from "@/components/CTA";
import { packages, services, site, workSamples } from "@/lib/site";

const offerIcons = [
  { slug: "small-business-websites", label: "Websites", blurb: "Custom responsive sites that represent your brand." },
  { slug: "landing-pages", label: "Portfolios", blurb: "Personal sites that highlight work and make contact easy." },
  { slug: "booking-integrations", label: "Integrations", blurb: "Booking, payments, forms, and lead routing." },
  { slug: "maintenance", label: "Support", blurb: "Updates, edits, and care after launch." },
] as const;

export default function HomePage() {
  const featured = services.filter((s) =>
    ["landing-pages", "small-business-websites", "website-redesigns"].includes(s.slug),
  );

  return (
    <>
      {/* Full-bleed brand hero — typography + atmosphere, no awkward logo photo */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 90% 60% at 50% -5%, rgba(224,197,106,0.22), transparent 55%),
              radial-gradient(ellipse 50% 45% at 85% 55%, rgba(138,112,32,0.18), transparent 50%),
              radial-gradient(ellipse 40% 40% at 10% 70%, rgba(201,162,39,0.1), transparent 45%),
              linear-gradient(180deg, #070706 0%, #050505 45%, #0a0907 100%)
            `,
          }}
        />
        <div
          aria-hidden
          className="hero-grid pointer-events-none absolute inset-0 opacity-[0.18]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[18%] -translate-x-1/2 select-none font-display text-[28vw] leading-none text-gold/[0.04] md:text-[16rem]"
        >
          JS
        </div>

        <div className="section-inner relative flex min-h-[100svh] flex-col justify-center px-5 pb-24 pt-20 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow fade-up justify-center">
              <span className="sparkle" aria-hidden>
                ✦
              </span>
              {site.fullName}
              <span className="sparkle" aria-hidden>
                ✦
              </span>
            </p>

            <h1 className="font-display fade-up fade-up-delay-1 mt-5 text-6xl leading-[0.92] text-gold-bright md:text-8xl lg:text-9xl">
              {site.name}
            </h1>

            <div className="gold-rule fade-up fade-up-delay-2 mx-auto my-7 max-w-md">
              <span className="px-3 text-[0.72rem] uppercase tracking-[0.32em] text-ink">
                {site.motto}
              </span>
            </div>

            <p className="prose-muted fade-up fade-up-delay-2 mx-auto max-w-2xl text-lg md:text-xl">
              Custom websites and systems built to help you grow and stand out online.
              Designed with intention. Built with care.
            </p>

            <div className="fade-up fade-up-delay-3 mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                Start a project
              </Link>
              <Link href="/services" className="btn btn-ghost">
                Explore services
              </Link>
            </div>

            <p className="fade-up fade-up-delay-3 mt-8 text-sm tracking-wide text-gold/80">
              {site.introNote}
            </p>
          </div>

          <div className="mx-auto mt-16 grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {offerIcons.map((item, i) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group rounded-2xl border border-line/80 bg-bg-elevated/40 px-4 py-5 text-left backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold-soft"
                style={{ animationDelay: `${0.4 + i * 0.06}s` }}
              >
                <span className="text-gold" aria-hidden>
                  ✦
                </span>
                <span className="mt-2 block font-display text-xl text-ink group-hover:text-gold-bright">
                  {item.label}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-ink-dim">
                  {item.blurb}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent"
        />
      </section>

      <section className="section relative">
        <div className="section-inner">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">What we offer</p>
              <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
                Websites, portfolios, apps, and support — without the agency markup.
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm text-gold-bright transition-colors hover:text-gold"
            >
              View all services →
            </Link>
          </div>

          <div className="mt-14 space-y-0">
            {featured.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group grid gap-3 border-t border-line py-8 transition-colors hover:border-gold md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8"
              >
                <span className="font-display text-3xl text-gold/50 md:w-16">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-display text-3xl text-ink transition-colors group-hover:text-gold-bright">
                    {service.shortName}
                  </h3>
                  <p className="mt-2 max-w-2xl text-ink-muted">{service.summary}</p>
                </div>
                <div className="md:text-right">
                  <p className="font-display text-xl text-gold-bright">{service.quote}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-dim">
                    {service.timeline}
                  </p>
                </div>
              </Link>
            ))}
            <div className="border-t border-line" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-line">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(201,162,39,0.1),transparent_50%)]"
        />
        <div className="section section-inner relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow">Why JewelSphy</p>
              <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
                Clean code. Fast communication. Reliable delivery.
              </h2>
              <p className="prose-muted mt-5">
                A growing studio focused on shipping sites and systems that actually help your
                business move — clear scope, modern builds, and support that sticks around after
                launch.
              </p>
              <Link href="/about" className="btn btn-ghost mt-8">
                About the studio
              </Link>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  t: "Clean & modern",
                  d: "Thoughtful UI, solid performance, code you can grow with.",
                },
                {
                  t: "Fast communication",
                  d: "Quick replies and clear checkpoints — no radio silence.",
                },
                {
                  t: "On-time delivery",
                  d: "Honest timelines and packages that match what ships.",
                },
                {
                  t: "Built around you",
                  d: "Solutions shaped to your offer, audience, and workflow.",
                },
              ].map((item) => (
                <li
                  key={item.t}
                  className="rounded-2xl border border-line bg-bg-elevated/60 p-5 transition hover:border-gold/60"
                >
                  <p className="font-display text-xl text-gold-bright">{item.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="max-w-2xl">
            <p className="eyebrow">Packages</p>
            <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
              Clear packages. Quoted to fit your project.
            </h2>
            <p className="prose-muted mt-4">
              We outline what’s included — then quote after a short discovery so the number matches
              your real scope, not a one-size sticker price.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${
                  pkg.featured
                    ? "border-gold bg-gradient-to-b from-gold-soft to-bg-elevated shadow-[0_20px_50px_rgba(201,162,39,0.12)]"
                    : "border-line bg-bg-elevated/50 hover:border-gold/50"
                }`}
              >
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold">{pkg.badge}</p>
                <h3 className="font-display mt-3 text-2xl text-ink">{pkg.name}</h3>
                <p className="mt-2 text-sm text-ink-muted">{pkg.bestFor}</p>
                <p className="mt-5 font-display text-3xl text-gold-bright">{pkg.quote}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-dim">
                  {pkg.timeline}
                </p>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-ink-muted">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-gold" aria-hidden>
                        ✦
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`btn mt-7 w-full ${pkg.featured ? "btn-primary" : "btn-ghost"}`}
                >
                  Inquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="section-inner">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Work</p>
              <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
                Project shapes we ship most.
              </h2>
            </div>
            <Link href="/work" className="text-sm text-gold-bright hover:text-gold">
              See work →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {workSamples.map((sample, index) => (
              <article
                key={sample.title}
                className="group relative overflow-hidden rounded-2xl border border-line bg-bg-elevated/40 p-6 transition hover:border-gold"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(145deg,rgba(201,162,39,0.14),transparent_55%)] opacity-70 transition group-hover:opacity-100"
                />
                <p className="relative text-xs uppercase tracking-[0.2em] text-gold">
                  0{index + 1} · {sample.type}
                </p>
                <h3 className="font-display relative mt-3 text-2xl text-ink">{sample.title}</h3>
                <p className="relative mt-3 text-sm text-ink-muted">{sample.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
