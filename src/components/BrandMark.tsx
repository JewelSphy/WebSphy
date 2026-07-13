import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

/** Real JewelSphy logo — monogram crop for nav, full lockup for hero. */
export function BrandMark({
  size = "md",
  href = "/",
  showWordmark = true,
  variant = "mark",
}: {
  size?: "sm" | "md" | "lg";
  href?: string | null;
  showWordmark?: boolean;
  /** mark = circular monogram crop; full = full logo lockup */
  variant?: "mark" | "full";
}) {
  if (variant === "full") {
    const img = (
      <Image
        src="/brand/logo.png"
        alt={`${site.name} — ${site.tagline}`}
        width={640}
        height={640}
        priority
        className="mx-auto h-auto w-full max-w-[280px] object-contain drop-shadow-[0_0_40px_rgba(201,162,39,0.25)] md:max-w-[340px]"
      />
    );
    if (!href) return img;
    return (
      <Link href={href} className="inline-flex" aria-label={`${site.name} home`}>
        {img}
      </Link>
    );
  }

  const dims = size === "sm" ? "h-9 w-9" : size === "lg" ? "h-14 w-14" : "h-11 w-11";

  const content = (
    <span className="group inline-flex items-center gap-3">
      <span
        className={`relative ${dims} overflow-hidden rounded-full ring-1 ring-line-strong shadow-[0_0_20px_rgba(201,162,39,0.15)]`}
      >
        <Image
          src="/brand/logo.png"
          alt=""
          width={112}
          height={112}
          className="h-full w-full scale-[1.35] object-cover object-[center_12%]"
          priority={size !== "sm"}
        />
      </span>
      {showWordmark ? (
        <span className="leading-tight">
          <span className="font-display block text-xl tracking-wide text-gold-bright transition-colors group-hover:text-gold">
            {site.name}
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
    <Link href={href} className="inline-flex" aria-label={`${site.name} home`}>
      {content}
    </Link>
  );
}
