import Link from "next/link";

type CTAProps = {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTA({
  title = "Let’s build something amazing together.",
  body = "Have a project in mind? Share your goals — we’ll help you pick the right package. No pressure, just possibilities.",
  primaryHref = "/contact",
  primaryLabel = "Start a project",
  secondaryHref = "/pricing",
  secondaryLabel = "View pricing",
}: CTAProps) {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="relative overflow-hidden rounded-[2rem] border border-line px-6 py-12 text-center md:px-12 md:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,162,39,0.18),transparent_55%)]"
          />
          <p className="eyebrow relative justify-center">
            <span aria-hidden className="sparkle">
              ✦
            </span>
            Ready when you are
          </p>
          <h2 className="font-display relative mt-4 text-3xl text-ink md:text-5xl">
            {title}
          </h2>
          <p className="prose-muted relative mx-auto mt-4 max-w-2xl">{body}</p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href={primaryHref} className="btn btn-primary">
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="btn btn-ghost">
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
