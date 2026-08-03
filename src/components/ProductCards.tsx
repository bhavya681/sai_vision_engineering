import Image from "next/image";
import Link from "next/link";
import { Category, Product } from "@/data/products";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/products/${category.slug}`}
      className="group relative block overflow-hidden rounded-lg bg-ink-900 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:ring-2 focus-visible:ring-sun-400"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />
        <div className="absolute inset-x-0 top-0 h-1 bg-sun-band" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-6">
        <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
          {category.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-on-dark-muted">{category.shortDescription}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-accent-on-dark transition-transform duration-300 group-hover:translate-x-1 sm:mt-4">
          Explore category →
        </span>
      </div>
    </Link>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-sun-500/35 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-flame-600/50 hover:shadow-lift">
      <Link
        href={`/products/${product.category}/${product.slug}`}
        className="relative block aspect-[5/4] overflow-hidden bg-mist-100 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sun-400"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-3 transition duration-500 group-hover:scale-[1.03] sm:p-4"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-sun-band transition-transform duration-400 group-hover:scale-x-100" />
      </Link>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#9a3412]">
          {product.category.replace(/-/g, " ")}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold text-ink-950 sm:text-xl">
          <Link
            href={`/products/${product.category}/${product.slug}`}
            className="hover:text-[#c2410c] focus-visible:text-[#c2410c]"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-800">
          {product.shortDescription}
        </p>
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
