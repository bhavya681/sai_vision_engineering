import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import type { Category, Product } from "@/data/products";

/**
 * Category card with image overlay, zoom effect, and brand accent.
 */
export function CategoryCard({ category }: { category: Category }) {
  return (
    <Reveal>
      <Link
        href={`/products/${category.slug}`}
        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-soft transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 hover:border-orange-200 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
      >
        {/* Image container with diagonal sweep */}
        <div className="image-anime relative aspect-[16/10] overflow-hidden border-b border-gray-100 bg-gradient-to-br from-gray-50 to-orange-50/40">
          <Image
            src={category.image}
            alt={category.name}
            fill
            priority={false}
            className="object-contain p-4 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03] group-hover:brightness-105 sm:p-5"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Top accent bar */}
          <div
            className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-sun-band transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-x-100"
            aria-hidden="true"
          />
          <span className="absolute right-3 top-3 rounded-full border border-orange-100 bg-white/90 px-2.5 py-1 text-[0.6rem] font-extrabold uppercase tracking-[0.14em] text-orange-700 shadow-sm backdrop-blur transition-all duration-300 group-hover:bg-orange-50 group-hover:shadow-md">
            Product family
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="font-display text-xl font-semibold leading-tight text-gray-950 transition-colors duration-300 group-hover:text-orange-700 sm:text-2xl">
            {category.name}
          </h3>

          <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
            {category.shortDescription}
          </p>

          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-orange-700 transition-all duration-300 group-hover:gap-3">
            Explore category
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/**
 * Product card with product image, category, description, and CTAs.
 */
export function ProductCard({ product }: { product: Product }) {
  const productHref = `/products/${product.category}/${product.slug}`;
  const quoteHref = `/request-quote?product=${encodeURIComponent(
    product.name,
  )}`;

  return (
    <Reveal>
      <article className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-soft transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 hover:border-orange-200 hover:shadow-lift">
        {/* Product image with diagonal sweep */}
        <Link
          href={productHref}
          aria-label={`View details for ${product.name}`}
          className="image-anime relative block aspect-[5/4] overflow-hidden bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange-500"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={false}
            className="object-contain p-4 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03] group-hover:brightness-105 sm:p-5"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Brand accent on hover */}
          <span
            className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-sun-band transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-x-100"
            aria-hidden="true"
          />
        </Link>

        {/* Product information */}
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          {/* Category */}
          <p className="text-[0.67rem] font-extrabold uppercase tracking-[0.16em] text-orange-700">
            {product.category.replace(/-/g, " ")}
          </p>

          {/* Product name */}
          <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-orange-700 sm:text-xl">
            <Link
              href={productHref}
              className="transition-colors duration-200 hover:text-orange-700 focus-visible:text-orange-700 focus-visible:outline-none"
            >
              {product.name}
            </Link>
          </h3>

          {/* Product description */}
          <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
            {product.shortDescription}
          </p>

          {/* Actions */}
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href={productHref}
              className="btn btn-secondary btn-sm"
            >
              View Details
            </Link>

            <Link
              href={quoteHref}
              className="btn btn-primary btn-sm"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}