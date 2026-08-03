import Image from "next/image";
import Link from "next/link";
import { Category, Product } from "@/data/products";

/** Category card with dark overlay, image zoom, and brand stripe */
export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/products/${category.slug}`}
      className="group relative block overflow-hidden rounded-xl bg-gray-900 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient overlay — stronger at bottom for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />
        {/* Top brand stripe */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-sun-band" />
      </div>

      {/* Text overlay */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-6">
        <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
          {category.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-gray-300">{category.shortDescription}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-orange-400 transition-all duration-300 group-hover:gap-2.5 sm:mt-4">
          Explore category
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

/** Product card with image, category label, name, description, CTAs */
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-lift">
      {/* Product image */}
      <Link
        href={`/products/${product.category}/${product.slug}`}
        className="relative block aspect-[5/4] overflow-hidden bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange-500"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 transition duration-500 group-hover:scale-[1.04] sm:p-5"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Brand stripe on hover */}
        <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-sun-band transition-transform duration-300 group-hover:scale-x-100" />
      </Link>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Category label */}
        <p className="text-[0.67rem] font-extrabold uppercase tracking-[0.16em] text-orange-700">
          {product.category.replace(/-/g, " ")}
        </p>

        {/* Product name */}
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-gray-900 sm:text-xl">
          <Link
            href={`/products/${product.category}/${product.slug}`}
            className="transition-colors hover:text-orange-700 focus-visible:text-orange-700 focus-visible:outline-none"
          >
            {product.name}
          </Link>
        </h3>

        {/* Description */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
          {product.shortDescription}
        </p>

        {/* CTAs */}
        <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
          <Link
            href={`/products/${product.category}/${product.slug}`}
            className="btn btn-secondary btn-sm"
          >
            View Details
          </Link>
          <Link
            href={`/request-quote?product=${encodeURIComponent(product.name)}`}
            className="btn btn-primary btn-sm"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </article>
  );
}
