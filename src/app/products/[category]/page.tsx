import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCards";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBanner } from "@/components/CtaBanner";
import { categories, getCategory, getProductsByCategory } from "@/data/products";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category" };
  return {
    title: category.name,
    description: category.shortDescription,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getProductsByCategory(slug);

  return (
    <>
      <PageHero eyebrow="Category" title={category.name} description={category.description}>
        <div className="mt-8">
          <ButtonLink href="/request-quote">Request a Quote</ButtonLink>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-site">
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className={`rounded-md px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] transition focus-visible:ring-2 focus-visible:ring-sun-400 sm:text-xs ${
                  c.slug === slug
                    ? "bg-[#e85d04] text-white shadow-soft"
                    : "border border-[#d4a017] bg-white text-[#1a1208] hover:border-[#e85d04] hover:bg-[#fff8e8]"
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {items.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Need help specifying ${category.name.toLowerCase()}?`}
        description="Share process media, size range, or spare requirements and we will respond with a focused recommendation."
      />
    </>
  );
}
