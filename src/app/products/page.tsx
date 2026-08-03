import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CategoryCard } from "@/components/ProductCards";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { ProductsExplorer } from "@/components/ProductsExplorer";
import { categories, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Sai Vision Engineering products: glass-lined equipment, reactors, tanks, condensers, lined piping, valves, mechanical seals, and NORD drive systems.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product catalog"
        title="Industrial equipment and components for corrosive and process-critical plants."
        description="Explore categories first, then filter the full catalog by search and product family."
      />

      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Categories"
            title="Start with the equipment family that matches your project."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="All products"
            title="Search and filter the catalog."
            description={`${products.length} products currently listed from the company profile.`}
          />
          <ProductsExplorer products={products} categories={categories} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
