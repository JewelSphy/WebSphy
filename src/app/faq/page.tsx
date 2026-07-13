import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { globalFaqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about JewelSphy services, stack, ownership, and scope.",
};

export default function FAQPage() {
  return (
    <>
      <section className="section pb-8 pt-16 md:pt-24">
        <div className="section-narrow">
          <p className="eyebrow">
            <span className="sparkle" aria-hidden>
              ✦
            </span>
            FAQ
          </p>
          <h1 className="font-display mt-4 text-4xl text-ink md:text-6xl">
            Straight answers before we start.
          </h1>
          <div className="mt-12">
            <FAQ items={globalFaqs} title="Good to know" />
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
