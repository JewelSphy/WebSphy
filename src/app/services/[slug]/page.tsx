import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { ServicePage } from "@/components/ServicePage";
import { getService, services } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.shortName,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <ServicePage service={service} />
      <section className="section pt-0">
        <div className="section-narrow">
          <FAQ items={service.faqs} title="FAQ" />
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Request a quote
            </Link>
            <Link href="/services" className="btn btn-ghost">
              All services
            </Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
