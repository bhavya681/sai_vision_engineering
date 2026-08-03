import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBanner } from "@/components/CtaBanner";
import { getIndustry, industries } from "@/data/industries";
import { getCategory } from "@/data/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Industry" };
  return {
    title: industry.name,
    description: industry.shortDescription,
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const related = industry.relatedCategories
    .map((slug) => getCategory(slug))
    .filter(Boolean);

  return (
    <>
      <PageHero eyebrow="Industry" title={industry.name} description={industry.description}>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/request-quote">Request a Quote</ButtonLink>
          <ButtonLink href="/products" variant="secondary">
            Browse Products
          </ButtonLink>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-gray-900">Use cases</h2>
            <ul className="mt-5 space-y-3">
              {industry.useCases.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-gray-900">
              Relevant product categories
            </h2>
            <div className="mt-5 space-y-3">
              {related.map((category) =>
                category ? (
                  <Link
                    key={category.slug}
                    href={`/products/${category.slug}`}
                    className="surface-card block p-4 sm:p-5"
                  >
                    <h3 className="font-display text-xl font-semibold text-gray-900">{category.name}</h3>
                    <p className="mt-2 text-sm text-gray-700">{category.shortDescription}</p>
                  </Link>
                ) : null,
              )}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Planning a project for ${industry.name.toLowerCase()}?`}
        description="Tell us about the equipment, spare, or service requirement and we will guide the next step."
      />
    </>
  );
}
