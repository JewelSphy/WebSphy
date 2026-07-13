import Image from "next/image";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { CTA } from "@/components/CTA";
import { packages, processSteps, services, site, workSamples } from "@/lib/site";

export default function HomePage() {
  return (
    <>
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
        <div aria-hidden className="hero-grid pointer-events-none absolute inset-0 opacity-[0.18]" />

        <div className="section-inner relative flex min-h-[100svh] flex-col justify-center px-5 pb-20 pt-16 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="fade-up float-soft mx-auto mb-2 w-full max-w-[260px] md:max-w-[320px]">
              <BrandMark variant="full" href={null} />
            </div>

            <div className="gold-rule fade-up fade-up-delay-1 mx-auto my-6 max-w-md">
              <span className="px-3 text-[0.72rem] uppercase tracking-[0.32em] text-ink">
                {site.motto}
              </span>
            </div>

            <p className="prose-muted fade-up fade-up-delay-2 mx-auto max-w-2xl text-lg md:text-xl">
              Custom websites and lightweight systems that help service businesses, startups, and
              personal brands look credible and convert visitors into leads.
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
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent"
        />
      </section>

      {/* Who it's for */}
      <section className="section border-t border-line">
        <div className="section-inner">
          <p className="eyebrow">Who we help</p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl text-ink md:text-5xl">
            Built for people who need a real online presence — not an enterprise software project.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Service businesses",
                body: "Consultants, local providers, and studios that need clear service pages, strong contact paths, and a site that looks as professional as the work behind it.",
              },
              {
                title: "Startups & founders",
                body: "Early-stage teams launching an offer, waitlist, or credibility site — fast enough to ship, flexible enough to grow.",
              },
              {
                title: "Personal brands",
                body: "Freelancers, graduates, and creators who need a polished portfolio or personal site that makes contacting them easy.",
              },
            ].map((item) => (
              <article key={item.title} className="border-t border-line pt-6">
                <h3 className="font-display text-2xl text-gold-bright">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Full services explained */}
      <section className="section border-t border-line">
        <div className="section-inner">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Services</p>
              <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
                What we actually build — explained.
              </h2>
              <p className="prose-muted mt-4">
                Every service below can stand alone or stack together. Quotes come after a short
                discovery so scope stays honest.
              </p>
            </div>
            <Link href="/services" className="text-sm text-gold-bright hover:text-gold">
              Full catalog →
            </Link>
          </div>

          <div className="mt-14 space-y-0">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className="grid gap-6 border-t border-line py-10 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-ink-dim">
                    0{index + 1} · {service.timeline}
                  </p>
                  <h3 className="font-display mt-2 text-3xl text-ink md:text-4xl">
                    {service.shortName}
                  </h3>
                  <p className="mt-3 text-gold-bright">{service.quote}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-5 inline-block text-sm text-gold-bright hover:text-gold"
                  >
                    Full details →
                  </Link>
                </div>
                <div>
                  <p className="text-ink-muted leading-relaxed">{service.summary}</p>
                  <p className="mt-4 text-ink-muted leading-relaxed">
                    {service.description[0]}
                  </p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-ink-dim">
                        <span className="text-gold" aria-hidden>
                          ✦
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs uppercase tracking-[0.16em] text-ink-dim">
                    Typically includes
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">
                    {service.deliverables.join(" · ")}
                  </p>
                </div>
              </article>
            ))}
            <div className="border-t border-line" />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section border-t border-line bg-bg-elevated/20">
        <div className="section-inner">
          <p className="eyebrow">Process</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl text-ink md:text-5xl">
            From idea to launch without the chaos.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-5">
            {processSteps.map((step) => (
              <div key={step.step}>
                <p className="font-display text-3xl text-gold-bright">{step.step}</p>
                <h3 className="font-display mt-2 text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
              </div>
            ))}
          </div>
          <Link href="/process" className="btn btn-ghost mt-10">
            See the full process
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="section border-t border-line">
        <div className="section-inner grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Why JewelSphy</p>
            <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
              Clean code. Fast communication. Reliable delivery.
            </h2>
            <p className="prose-muted mt-5">
              A growing studio focused on shipping sites and systems that help your business move —
              clear scope, modern builds, and support after launch.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full ring-1 ring-line-strong">
                <Image
                  src="/brand/logo.png"
                  alt=""
                  width={64}
                  height={64}
                  className="h-full w-full scale-[1.35] object-cover object-[center_12%]"
                />
              </div>
              <div>
                <p className="font-display text-lg text-gold-bright">{site.fullName}</p>
                <p className="text-sm text-ink-dim">{site.tagline}</p>
              </div>
            </div>
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
      </section>

      {/* Packages */}
      <section className="section border-t border-line">
        <div className="section-inner">
          <div className="max-w-2xl">
            <p className="eyebrow">Packages</p>
            <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
              Clear packages. Quoted to fit your project.
            </h2>
            <p className="prose-muted mt-4">
              What’s included is spelled out. The number comes after discovery — so it matches your
              real scope.
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
                <p className="mt-5 font-display text-2xl text-gold-bright">{pkg.quote}</p>
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
                  Request a quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains & launch */}
      <section className="section border-t border-line">
        <div className="section-inner grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Domains & launch</p>
            <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
              Need a domain, hosting, or email too?
            </h2>
            <p className="prose-muted mt-4">
              We can help you buy and connect a domain (like jewelsphy.com), set up hosting, add
              business email, and get SSL live — always registered in your name.
            </p>
            <Link href="/services#domains-hosting" className="btn btn-ghost mt-8">
              See domain & launch help
            </Link>
          </div>
          <ul className="space-y-4 text-ink-muted">
            {[
              "Domain search, purchase, and DNS setup",
              "Connect a domain you already own",
              "Hosting / deploy setup on modern platforms",
              "Business email (you@yourdomain.com)",
              "Migration from an old host or builder",
            ].map((item) => (
              <li key={item} className="flex gap-3 border-b border-line pb-4">
                <span className="text-gold" aria-hidden>
                  ✦
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Work */}
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
