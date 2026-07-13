import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { domainAndLaunch, serviceCatalog, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full JewelSphy service catalog — websites, redesigns, domains, hosting, integrations, apps, and support from $25/mo.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section pb-8 pt-16 md:pt-24">
        <div className="section-inner">
          <p className="eyebrow">
            <span className="sparkle" aria-hidden>
              ✦
            </span>
            Services
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl text-ink md:text-6xl">
            Everything we build — listed clearly.
          </h1>
          <p className="prose-muted mt-5 max-w-2xl">
            From landing pages and business sites to domains, email, booking, and monthly support.
            Sticker prices where we can. A few custom builds are scoped after a quick chat.
          </p>

          <nav
            className="mt-10 flex flex-wrap gap-2"
            aria-label="Service categories"
          >
            {serviceCatalog.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="rounded-full border border-line px-3.5 py-1.5 text-sm text-ink-muted transition hover:border-gold hover:text-gold-bright"
              >
                {group.title}
              </a>
            ))}
            <a
              href="#domains-hosting"
              className="rounded-full border border-line px-3.5 py-1.5 text-sm text-ink-muted transition hover:border-gold hover:text-gold-bright"
            >
              Domain price list
            </a>
          </nav>
        </div>
      </section>

      {/* Featured detail pages */}
      <section className="section pt-0">
        <div className="section-inner">
          <p className="eyebrow">Deep dives</p>
          <h2 className="font-display mt-3 text-3xl text-ink md:text-4xl">
            Flagship offers with full pages
          </h2>
          <div className="mt-8 space-y-0">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group grid gap-3 border-t border-line py-7 transition-colors hover:border-gold md:grid-cols-[0.3fr_1fr_0.3fr] md:items-center"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-ink-dim">
                    0{index + 1}
                  </p>
                  <h3 className="font-display mt-1 text-2xl text-ink group-hover:text-gold-bright md:text-3xl">
                    {service.shortName}
                  </h3>
                </div>
                <p className="text-ink-muted">{service.summary}</p>
                <div className="md:text-right">
                  <p className="font-display text-xl text-gold-bright">{service.price}</p>
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

      {/* Full catalog */}
      {serviceCatalog.map((group) => (
        <section
          key={group.id}
          id={group.id}
          className="scroll-mt-24 border-t border-line"
        >
          <div className="section section-inner !py-14 md:!py-16">
            <div className="max-w-2xl">
              <p className="eyebrow">{group.title}</p>
              <h2 className="font-display mt-3 text-3xl text-ink md:text-4xl">
                {group.title}
              </h2>
              <p className="prose-muted mt-3">{group.intro}</p>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-line">
              <ul className="divide-y divide-line">
                {group.items.map((item) => {
                  const row = (
                    <>
                      <div className="min-w-0">
                        <p className="font-display text-xl text-ink group-hover:text-gold-bright">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-ink-muted">{item.summary}</p>
                      </div>
                      <div className="shrink-0 text-left sm:text-right">
                        <p className="font-display text-lg text-gold-bright">{item.price}</p>
                        {item.variable ? (
                          <p className="mt-1 text-xs text-ink-dim">Scoped to your build</p>
                        ) : null}
                      </div>
                    </>
                  );

                  return (
                    <li key={item.name}>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="group grid gap-3 px-5 py-5 transition hover:bg-gold-soft/40 sm:grid-cols-[1fr_auto] sm:items-center md:px-6"
                        >
                          {row}
                        </Link>
                      ) : (
                        <div className="grid gap-3 px-5 py-5 sm:grid-cols-[1fr_auto] sm:items-center md:px-6">
                          {row}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* Domain price sheet */}
      <section id="domains-hosting" className="scroll-mt-24 border-t border-line">
        <div className="section section-inner !py-14 md:!py-16">
          <div className="max-w-2xl">
            <p className="eyebrow">Domain & launch sheet</p>
            <h2 className="font-display mt-3 text-3xl text-ink md:text-4xl">
              Domains, hosting, email, and go-live
            </h2>
            <p className="prose-muted mt-3">
              Domains are registered in your name. Yearly renewal is the registrar’s price —
              our fee is only for setup and connection when you want help.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-line">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-line bg-bg-elevated/80 text-xs uppercase tracking-[0.16em] text-ink-dim">
                <tr>
                  <th className="px-5 py-4 font-medium md:px-6">Item</th>
                  <th className="px-5 py-4 font-medium md:px-6">Price</th>
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
                      {row.price}
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

      <CTA
        title="Not sure what you need?"
        body="Tell us what you’re launching. We’ll point you to the right line items — no mystery bundles."
      />
    </>
  );
}
