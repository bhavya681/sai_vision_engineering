import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { industries } from "@/data/industries";
import { categories } from "@/data/products";

export const metadata: Metadata = {
  title: "Industries & Applications",
  description:
    "Sai Vision Engineering supports chemical, pharmaceutical, and steel plants with process equipment, lined systems, and maintenance services.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Equipment and services mapped to plant environments."
        description="Use industry pages to understand which Sai Vision offerings align with your facility type."
      />

      <section className="section-pad">
        <div className="container-site grid gap-6 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="surface-card group p-5 sm:p-6 md:p-7"
            >
              <p className="eyebrow">Industry</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-gray-900 group-hover:text-orange-700 sm:text-3xl">
                {industry.name}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                {industry.shortDescription}
              </p>
              <span className="mt-6 inline-flex text-sm font-bold text-[#9a3412]">
                View applications →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Related catalog"
            title="Browse products commonly specified across these industries."
          />
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className="rounded-md border border-[#d4a017] bg-[#fff8e8] px-3 py-2.5 text-sm font-bold text-[#1a1208] transition hover:border-[#e85d04] hover:bg-white sm:px-4 sm:py-3"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
