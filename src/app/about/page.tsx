import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { ButtonLink } from "@/components/ButtonLink";
import { IsoBadge } from "@/components/BrandLogo";
import { company } from "@/data/company";
import { capabilities } from "@/data/services";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sai Vision Engineering — mechanical engineering partner for glass-lined equipment, process vessels, seals, valves, and NORD drive solutions.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built for process reliability, service discipline, and long-term partnerships."
        description={company.overview[0]}
      />

      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="prose-industrial space-y-4">
            <SectionHeading eyebrow="Overview" title="Who we are" />
            {company.overview.map((para) => (
              <p key={para}>{para}</p>
            ))}
            <div className="pt-2">
              <IsoBadge />
            </div>
            <p className="text-sm font-medium text-gray-700">
              Operating presence: {company.regions.join(" · ")}
            </p>
            <a
              href={`https://${company.websiteDisplay}`}
              className="inline-flex text-sm font-semibold text-orange-700 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {company.websiteDisplay}
            </a>
          </div>
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-soft">
              <Image
                src={company.brand.lockup}
                alt="Sai Vision Engineering logo and ISO 9001:2015 certification"
                width={700}
                height={320}
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="relative min-h-[200px] overflow-hidden rounded-lg bg-gray-900 sm:min-h-[260px]">
              <Image
                src="/images/products/img-4.png"
                alt="Process vessels and condensers"
                fill
                className="object-contain p-2"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site grid gap-5 lg:grid-cols-2 lg:gap-6">
          <div
            className="rounded-lg p-5 text-white xs:p-7 sm:p-8"
            style={{ background: "linear-gradient(160deg, #111111 0%, #1c1210 50%, #2a1810 100%)" }}
          >
            <p className="eyebrow eyebrow-on-dark">Vision</p>
            <p className="mt-4 font-display text-xl leading-snug text-white sm:text-2xl md:text-3xl">
              &ldquo;{company.vision}&rdquo;
            </p>
          </div>
          <div className="rounded-lg border border-orange-200 bg-orange-50 p-5 xs:p-7 sm:p-8">
            <p className="eyebrow">Mission</p>
            <p className="mt-4 font-display text-xl leading-snug text-gray-900 sm:text-2xl md:text-3xl">
              &ldquo;{company.mission}&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="Quality"
            title={company.qualityStatement.split(".")[0] + "."}
            description={company.qualityStatement}
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item) => (
              <div key={item.title} className="surface-card p-5 sm:p-6">
                <h3 className="font-display text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-gray-50">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why customers choose us"
            title="Practical advantages for procurement and plant teams."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {company.whyChooseUs.map((item) => (
              <div key={item} className="group flex cursor-default items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-soft sm:px-5 sm:py-4">
                <span className="h-2 w-2 shrink-0 rounded-full bg-orange-500 transition-transform duration-300 group-hover:scale-125" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="Partnerships"
            title="Authorised relationships that strengthen supply confidence."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {company.partnerships.map((p) => (
              <article key={p.name} className="surface-card p-5 sm:p-6">
                <h3 className="font-display text-2xl font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{p.detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/capabilities">Capabilities</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
