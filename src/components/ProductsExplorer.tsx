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
      {/* Filter bar */}
      <div className="sticky top-16 z-20 -mx-4 mb-6 border-y border-gray-100 bg-white px-4 py-3 shadow-soft sm:top-[4.5rem] sm:mb-8 sm:py-4 md:top-20 md:mx-0 md:rounded-xl md:border md:border-gray-100 md:px-5">
        <div className="flex flex-col gap-3 md:flex-row">
          {/* Search */}
          <label className="flex-1 text-sm">
            <span className="sr-only">Search products</span>
            <div className="relative">
              <svg
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                placeholder="Search by product, application, or keyword…"
                className="field-control pl-9"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </label>

          {/* Category filter */}
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

        {/* Result count */}
        <p className="mt-2 text-xs text-gray-500">
          {filtered.length === products.length
            ? `${products.length} products`
            : `${filtered.length} of ${products.length} products`}
        </p>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-200 bg-white p-8 text-center sm:p-12">
          <p className="text-sm font-medium text-gray-500">
            No products match your filters.
          </p>
          <p className="mt-1 text-xs text-gray-400">
            Try another keyword or select a different category.
          </p>
          <button
            type="button"
            onClick={() => { setQuery(""); setCategory("all"); }}
            className="mt-4 text-sm font-semibold text-orange-700 hover:text-orange-800 hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard
              key={`${product.category}-${product.slug}`}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
}
