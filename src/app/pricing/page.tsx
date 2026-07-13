import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { domainAndLaunch, packages, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "JewelSphy packages for portfolio sites, business websites, custom apps, and ongoing support — custom quotes after discovery.",
};

export default function PricingPage() {
  return (
    <>
      <section className="section pb-8 pt-16 md:pt-24">
        <div className="section-inner max-w-3xl">
          <p className="eyebrow">
            <span className="sparkle" aria-hidden>
              ✦
            </span>
            Packages
          </p>
          <h1 className="font-display mt-4 text-4xl text-ink md:text-6xl">
            Clear packages. Custom quotes.
          </h1>
          <p className="prose-muted mt-5">
            We don’t publish fixed prices because every project is different — page count, content
            readiness, integrations, and timeline all change the scope. Share what you need and
            we’ll send a clear quote before any work starts.
          </p>
          <p className="mt-4 text-sm text-gold">{site.introNote}</p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="section-inner grid gap-5 md:grid-cols-2">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className={`flex flex-col rounded-2xl border p-7 md:p-9 ${
                pkg.featured
                  ? "border-gold bg-gradient-to-b from-gold-soft to-bg-elevated"
                  : "border-line bg-bg-elevated/40"
              }`}
            >
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold">
                  {pkg.badge}
                </p>
                <h2 className="font-display mt-2 text-3xl text-ink">{pkg.name}</h2>
                <p className="mt-2 text-sm text-ink-muted">{pkg.bestFor}</p>
              </div>
              <p className="mt-6 font-display text-3xl text-gold-bright">{pkg.quote}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-ink-dim">
                Typical timeline · {pkg.timeline}
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-ink-muted">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-gold" aria-hidden>
                      ✦
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-primary mt-8 self-start">
                Request a quote
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section border-t border-line pt-16">
        <div className="section-inner">
          <div className="max-w-2xl">
            <p className="eyebrow">Domains & launch</p>
            <h2 className="font-display mt-3 text-3xl text-ink md:text-4xl">
              Domains, hosting, and email help
            </h2>
            <p className="prose-muted mt-3">
              Domains stay in your name. Registrar renewals are separate. Setup and connection
              work is quoted with your project — no surprise line items.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-line">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-line bg-bg-elevated/80 text-xs uppercase tracking-[0.16em] text-ink-dim">
                <tr>
                  <th className="px-5 py-4 font-medium md:px-6">Item</th>
                  <th className="px-5 py-4 font-medium md:px-6">How it’s billed</th>
                  <th className="hidden px-5 py-4 font-medium md:table-cell md:px-6">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {domainAndLaunch.map((row) => (
                  <tr key={row.name} className="align-top">
                    <td className="px-5 py-4 text-ink md:px-6">
                      {row.name}
                      <p className="mt-1 text-ink-muted md:hidden">{row.note}</p>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 font-display text-base text-gold-bright md:px-6">
                      {row.quote}
                    </td>
                    <td className="hidden px-5 py-4 text-ink-muted md:table-cell md:px-6">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="section-inner rounded-2xl border border-line px-6 py-10 md:px-10">
          <h2 className="font-display text-3xl text-ink">Want the full service menu?</h2>
          <p className="prose-muted mt-4 max-w-3xl">
            Landing pages, redesigns, booking, CMS, portals, and more — with what’s included and
            how we approach each one.
          </p>
          <Link href="/services" className="btn btn-ghost mt-6">
            Browse all services
          </Link>
        </div>
      </section>

      <CTA
        title="Tell us what you’re building."
        body="We’ll come back with a clear scope and quote — no pressure, no surprise pricing."
        secondaryHref="/services"
        secondaryLabel="View services"
      />
    </>
  );
}
