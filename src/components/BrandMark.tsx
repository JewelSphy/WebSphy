import Link from "next/link";

/** Text-based brand mark — avoids dumping the full logo PNG as a photo. */
export function BrandMark({
  size = "md",
  href = "/",
  showWordmark = true,
}: {
  size?: "sm" | "md" | "lg";
  href?: string;
  showWordmark?: boolean;
}) {
  const dims =
    size === "sm"
      ? "h-9 w-9 text-sm"
      : size === "lg"
        ? "h-16 w-16 text-2xl"
        : "h-11 w-11 text-base";

  const content = (
    <span className="group inline-flex items-center gap-3">
      <span
        className={`relative inline-flex ${dims} items-center justify-center rounded-full border border-line-strong bg-bg-elevated shadow-[0_0_24px_rgba(201,162,39,0.12)]`}
        aria-hidden
      >
        <span className="font-display font-semibold tracking-tight text-gold-bright">
          JS
        </span>
        <span className="absolute -right-0.5 -top-0.5 text-[0.55rem] text-gold sparkle">
          ✦
        </span>
      </span>
      {showWordmark ? (
        <span className="leading-tight">
          <span className="font-display block text-xl tracking-wide text-gold-bright transition-colors group-hover:text-gold">
            JewelSphy
          </span>
          <span className="hidden text-[0.65rem] uppercase tracking-[0.22em] text-ink-dim sm:block">
            Web Solutions
          </span>
        </span>
      ) : null}
    </span>
  );

  if (!href) return content;
  return (
    <Link href={href} className="inline-flex" aria-label="JewelSphy home">
      {content}
    </Link>
  );
}
