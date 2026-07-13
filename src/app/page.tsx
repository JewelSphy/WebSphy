import Link from "next/link";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { NeedFinder } from "@/components/NeedFinder";
import { PackagePicker } from "@/components/PackagePicker";
import { ServiceExplorer } from "@/components/ServiceExplorer";
import { globalFaqs, processSteps, site, workSamples } from "@/lib/site";

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
              <a href="#finder" className="btn btn-ghost">
                Find what you need
              </a>
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

      <section id="finder" className="section scroll-mt-24 border-t border-line">
        <div className="section-inner">
          <NeedFinder />
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="section-inner">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Services</p>
              <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
                Tap a service to explore what’s included.
              </h2>
              <p className="prose-muted mt-4">
                Landing pages, business sites, redesigns, booking/integrations, and support — plus
                domains, hosting, apps, and more in the full catalog.
              </p>
            </div>
            <Link href="/services" className="text-sm text-gold-bright hover:text-gold">
              Full catalog →
            </Link>
          </div>
          <div className="mt-10">
            <ServiceExplorer />
          </div>
        </div>
      </section>

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
              <article
                key={item.title}
                className="rounded-2xl border border-line bg-bg-elevated/40 p-6 transition hover:-translate-y-1 hover:border-gold"
              >
                <h3 className="font-display text-2xl text-gold-bright">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-bg-elevated/20">
        <div className="section-inner">
          <p className="eyebrow">Process</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl text-ink md:text-5xl">
            From idea to launch without the chaos.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-5">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-transparent p-2 transition hover:border-line hover:bg-bg-elevated/50"
              >
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

      <section className="section border-t border-line">
        <div className="section-inner">
          <div className="max-w-2xl">
            <p className="eyebrow">Packages</p>
            <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
              Pick a package to preview what’s included.
            </h2>
            <p className="prose-muted mt-4">
              Click each package on the left — then request a custom quote for that shape of work.
            </p>
          </div>
          <div className="mt-10">
            <PackagePicker />
          </div>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="section-inner grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Domains & launch</p>
            <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
              Need a domain, hosting, or email too?
            </h2>
            <p className="prose-muted mt-4">
              Buy and connect a domain, set up hosting, add business email, and get SSL live —
              always registered in your name.
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
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-line px-4 py-3 transition hover:border-gold/50"
              >
                <span className="text-gold" aria-hidden>
                  ✦
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="section-inner grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Why JewelSphy</p>
            <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
              Clean code. Fast communication. Reliable delivery.
            </h2>
            <p className="prose-muted mt-5">
              A growing studio focused on shipping sites and systems that help your business move.
            </p>
            <Link href="/about" className="btn btn-ghost mt-8">
              About the studio
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              { t: "Clean & modern", d: "Thoughtful UI, solid performance, code you can grow with." },
              { t: "Fast communication", d: "Quick replies and clear checkpoints — no radio silence." },
              { t: "On-time delivery", d: "Honest timelines and packages that match what ships." },
              { t: "Built around you", d: "Solutions shaped to your offer, audience, and workflow." },
            ].map((item) => (
              <li
                key={item.t}
                className="rounded-2xl border border-line bg-bg-elevated/60 p-5 transition hover:-translate-y-0.5 hover:border-gold/60"
              >
                <p className="font-display text-xl text-gold-bright">{item.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.d}</p>
              </li>
            ))}
          </ul>
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
                className="group relative overflow-hidden rounded-2xl border border-line bg-bg-elevated/40 p-6 transition hover:-translate-y-1 hover:border-gold"
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

      <section className="section border-t border-line">
        <div className="section-narrow">
          <FAQ items={globalFaqs.slice(0, 5)} title="Quick answers" />
          <Link href="/faq" className="mt-6 inline-block text-sm text-gold-bright hover:text-gold">
            More FAQ →
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
