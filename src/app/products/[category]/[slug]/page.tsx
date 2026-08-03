import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { ProductCard } from "@/components/ProductCards";
import { CtaBanner } from "@/components/CtaBanner";
import {
  getCategory,
  getProduct,
  getRelatedProducts,
  products,
} from "@/data/products";
import { company } from "@/data/company";

type Props = { params: Promise<{ category: string; slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const product = getProduct(category, slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { category: categorySlug, slug } = await params;
  const product = getProduct(categorySlug, slug);
  if (!product) notFound();

  const category = getCategory(categorySlug);
  const related = getRelatedProducts(product);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: company.name },
    category: category?.name,
    image: product.image,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Products", item: `${company.siteUrl}/products` },
      {
        "@type": "ListItem",
        position: 2,
        name: category?.name,
        item: `${company.siteUrl}/products/${categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${company.siteUrl}/products/${categorySlug}/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <section className="bg-white pb-12 pt-24 xs:pb-14 sm:pb-16 sm:pt-28 md:pb-20 md:pt-32">
        <div className="container-site">
          <nav className="mb-6 text-xs text-ink-800 sm:mb-8 sm:text-sm" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/products" className="hover:text-flame-700">
                  Products
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={`/products/${categorySlug}`} className="hover:text-flame-700">
                  {category?.name}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ink-950">{product.name}</li>
            </ol>
          </nav>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="relative aspect-[5/4] overflow-hidden rounded-md bg-mist-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-x-0 top-0 h-1 bg-sun-band" />
            </div>

            <div>
              <p className="eyebrow">{category?.name}</p>
              <h1 className="mt-3 font-display text-[1.85rem] font-semibold tracking-tight text-ink-950 xs:text-4xl sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-ink-800 sm:mt-5 sm:text-base md:text-lg">
                {product.description}
              </p>

              <div className="mt-6 flex w-full flex-col gap-3 xs:w-auto xs:flex-row xs:flex-wrap sm:mt-8">
                <ButtonLink
                  href={`/request-quote?product=${encodeURIComponent(product.name)}`}
                  className="w-full xs:w-auto"
                >
                  Request Quote
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary" className="w-full xs:w-auto">
                  Contact Us
                </ButtonLink>
              </div>

              {product.variants?.length ? (
                <div className="mt-8">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-800">
                    Available variants
                  </h2>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {product.variants.map((v) => (
                      <li
                        key={v}
                        className="rounded-md border border-sun-500/20 bg-sun-50 px-3 py-1.5 text-sm"
                      >
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            <div>
              <h2 className="font-display text-2xl font-semibold">Features</h2>
              <ul className="mt-4 space-y-2 text-sm text-ink-800">
                {product.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sun-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">Specifications</h2>
              <dl className="mt-4 space-y-3 text-sm">
                {product.specifications.map((spec) => (
                  <div key={spec.label} className="border-b border-sun-500/15 pb-3">
                    <dt className="font-medium text-ink-900">{spec.label}</dt>
                    <dd className="mt-1 text-ink-800">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">Applications</h2>
              <ul className="mt-4 space-y-2 text-sm text-ink-800">
                {product.applications.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sun-400" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="section-pad bg-mist-100">
          <div className="container-site">
            <h2 className="font-display text-3xl font-semibold text-ink-950">Related products</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBanner />
    </>
  );
}
