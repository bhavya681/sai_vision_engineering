"use client";

import { useMemo, useState } from "react";
import { Category, Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCards";

export function ProductsExplorer({
  products,
  categories,
}: {
  products: Product[];
  categories: Category[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCategory = category === "all" || p.category === category;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.applications.some((a) => a.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [products, query, category]);

  return (
    <div>
      <div className="sticky top-16 z-20 -mx-4 mb-6 border-y border-sun-500/25 bg-[#fffdf8] px-4 py-3 shadow-sm sm:top-[4.25rem] sm:mb-8 sm:py-4 md:top-[4.75rem] md:mx-0 md:rounded-md md:border md:px-4">
        <div className="flex flex-col gap-3 md:flex-row">
          <label className="flex-1 text-sm">
            <span className="sr-only">Search products</span>
            <input
              type="search"
              placeholder="Search by product, application, or keyword"
              className="field-control"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <label className="text-sm md:w-72">
            <span className="sr-only">Filter by category</span>
            <select
              className="field-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All categories</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-md border border-dashed border-sun-500/30 bg-white p-6 text-sm text-ink-800 sm:p-8">
          No products match your filters. Try another keyword or category.
        </p>
      ) : (
        <div className="grid gap-4 xs:gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={`${product.category}-${product.slug}`} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
