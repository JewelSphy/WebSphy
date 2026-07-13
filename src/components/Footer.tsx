import Link from "next/link";
import { services, site } from "@/lib/site";
import { BrandMark } from "@/components/BrandMark";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-elevated/30">
      <div className="section-inner px-5 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <BrandMark href="/" />
            <p className="mt-5 max-w-sm text-sm uppercase tracking-[0.22em] text-ink-dim">
              {site.motto}
            </p>
            <p className="prose-muted mt-4 max-w-md text-sm">{site.positioning}</p>
          </div>

          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-4 space-y-2 text-ink-muted">
              {[
                ["/services", "Services"],
                ["/pricing", "Pricing"],
                ["/work", "Work"],
                ["/process", "Process"],
                ["/faq", "FAQ"],
                ["/about", "About"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-gold-bright">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-4 space-y-2 text-ink-muted">
              <li>
                <a href={site.phoneHref} className="hover:text-gold-bright">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="hover:text-gold-bright">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold-bright"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold-bright"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-line pt-8 md:grid-cols-2 md:items-center">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink-dim">
            {services.slice(0, 5).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="hover:text-gold"
              >
                {service.shortName}
              </Link>
            ))}
          </div>
          <p className="text-center text-xs uppercase tracking-[0.18em] text-ink-dim md:text-right">
            Small team <span className="text-gold">✦</span> Big impact{" "}
            <span className="text-gold">✦</span> Your vision{" "}
            <span className="text-gold">✦</span> Our code
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-ink-dim md:text-left">
          © {new Date().getFullYear()} {site.fullName}. {site.tagline}.
        </p>
      </div>
    </footer>
  );
}
