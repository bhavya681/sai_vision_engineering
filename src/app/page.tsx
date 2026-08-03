import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CategoryCard, ProductCard } from "@/components/ProductCards";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { ClientMarquee } from "@/components/ClientMarquee";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/company";
import { categories, getFeaturedProducts } from "@/data/products";
import { industries } from "@/data/industries";
import { services } from "@/data/services";

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 6);

  return (
    <>
      {/* ═══════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] overflow-hidden text-white" style={{ background: "linear-gradient(160deg, #0e0e0e 0%, #1a1210 55%, #2a1a0e 100%)" }}>
        {/* Background image */}
        <Image
          src="/images/brand/cover.png"
          alt="Sai Vision Engineering industrial equipment"
          fill
          priority
          className="object-cover object-center opacity-20"
          sizes="100vw"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-hero-sheen opacity-80" />

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Bottom accent stripe */}
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-sun-band" />

        {/* Ambient glows */}
        <div className="pointer-events-none absolute right-[12%] top-[18%] h-36 w-36 rounded-full bg-orange-500/20 blur-3xl float-soft" />
        <div className="pointer-events-none absolute bottom-[20%] left-[8%] h-48 w-48 rounded-full bg-flame-700/15 blur-3xl float-soft [animation-delay:1.4s]" />

        {/* Hero content */}
        <div className="container-site relative flex min-h-[100svh] flex-col justify-end pb-14 pt-28 xs:pb-16 sm:justify-center sm:pb-24 sm:pt-32 md:pb-28">
          <p className="eyebrow eyebrow-on-dark animate-fade-up">
            {company.tagline}
          </p>
          <div className="accent-bar mt-3 animate-fade-up [animation-delay:50ms]" />

          <h1 className="mt-4 max-w-[14ch] font-display text-[2.1rem] font-semibold leading-[1.07] tracking-tight text-white animate-fade-up [animation-delay:90ms] xs:text-[2.5rem] sm:text-5xl md:text-[3.5rem] lg:text-6xl xl:text-[4rem]">
            Process equipment and plant support you can specify with confidence.
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-300 animate-fade-up [animation-delay:150ms] xs:text-base sm:mt-6 sm:text-lg">
            Glass-lined equipment, vessels, lined piping, valves, mechanical seals,
            and NORD drive solutions — backed by authorised contractor and dealership
            relationships for chemical and pharmaceutical plants.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex w-full flex-col gap-3 animate-fade-up [animation-delay:210ms] xs:w-auto xs:flex-row xs:flex-wrap sm:mt-9">
            <ButtonLink href="/products" className="w-full xs:w-auto">
              Explore Products
            </ButtonLink>
            <ButtonLink href="/request-quote" variant="ghost" className="w-full xs:w-auto">
              Request a Quote
            </ButtonLink>
          </div>

          {/* Trust chips */}
          <dl className="mt-10 grid max-w-2xl gap-3 border-t border-white/15 pt-8 animate-fade-up [animation-delay:270ms] xs:mt-12 xs:grid-cols-3 sm:mt-14 sm:gap-5">
            {[
              ["Authorised", "GMM Pfaudler Contractor"],
              ["Certified", "ISO 9001:2015"],
              ["Presence", company.regions.slice(0, 3).join(", ")],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-white/12 bg-white/6 px-3 py-3 sm:border-transparent sm:bg-transparent sm:px-0 sm:py-0">
                <dt className="text-[0.6rem] font-extrabold uppercase tracking-[0.18em] text-orange-400 sm:text-[0.65rem]">
                  {label}
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-gray-200">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CLIENT MARQUEE
          ═══════════════════════════════════════════════ */}
      <ClientMarquee />

      {/* ═══════════════════════════════════════════════
          TRUST STRIP — ISO + Regions + Lockup
          ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-white py-8 sm:py-10">
        <div className="container-site flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center sm:gap-8">
          {/* ISO badge */}
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <Image
                src={company.brand.iso}
                alt="ISO 9001:2015 Certified"
                width={60}
                height={60}
                className="h-14 w-14 object-contain sm:h-16 sm:w-16"
              />
              <div>
                <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-orange-700">
                  Certified
                </p>
                <p className="font-display text-lg font-bold text-gray-900 sm:text-xl">
                  ISO 9001:2015
                </p>
              </div>
            </div>
          </Reveal>

          {/* Region badges */}
          <Reveal delay={1} className="flex flex-wrap gap-2">
            {company.regions.map((region) => (
              <span
                key={region}
                className="rounded-md border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-800"
              >
                {region}
              </span>
            ))}
          </Reveal>

          {/* Partner chips */}
          <Reveal delay={2} className="flex flex-wrap gap-2">
            {company.partnerships.slice(0, 2).map((p) => (
              <span
                key={p.name}
                className="rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-700"
              >
                {p.name}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          COMPANY INTRO
          ═══════════════════════════════════════════════ */}
      <section className="section-pad">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SectionHeading
              eyebrow="Company"
              title="Mechanical engineering partner for corrosive process industries."
              description={company.overview[0]}
            />
            <p className="text-sm leading-relaxed text-gray-600 xs:text-base">
              {company.overview[1]}
            </p>
            <div className="mt-7 sm:mt-8">
              <ButtonLink href="/about" variant="secondary">
                About Our Company
              </ButtonLink>
            </div>
          </Reveal>

          {/* Image panel */}
          <Reveal delay={2} className="media-frame relative min-h-[240px] bg-gray-900 xs:min-h-[280px] sm:min-h-[360px]">
            <Image
              src="/images/products/img-1.png"
              alt="Industrial reactor and process equipment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-x-0 top-0 z-[2] h-[3px] bg-sun-band" />
            <div className="absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 sm:p-6">
              <p className="text-sm text-gray-200">
                Precisely fabricated equipment with sturdy construction, long service
                life, and minimum maintenance requirements.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PRODUCT CATEGORIES
          ═══════════════════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Product range"
              title="Organized categories for faster product discovery."
              description="Browse by equipment family — from glass-lined systems to NORD drive solutions."
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {categories.map((category, index) => (
              <Reveal key={category.slug} delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | 4}>
                <CategoryCard category={category} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FEATURED PRODUCTS
          ═══════════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: "#f5f5f0" }}>
        <div className="container-site">
          <Reveal>
            <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Featured products"
                title="High-inquiry equipment and components."
                description="Selected offerings commonly requested by plant engineering and procurement teams."
              />
              <ButtonLink
                href="/products"
                variant="secondary"
                className="shrink-0 self-start md:self-auto"
              >
                View full catalog
              </ButtonLink>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {featured.map((product, index) => (
              <Reveal key={product.slug} delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | 4}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHY SAI VISION
          ═══════════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: "linear-gradient(160deg, #111111 0%, #1c1210 50%, #2a1810 100%)" }}>
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Why Sai Vision"
              title="Advantages that support reliable plant operations."
              light
            />
          </Reveal>
          <div className="grid gap-3 xs:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {company.whyChooseUs.map((item, index) => (
              <Reveal key={item} delay={(Math.min(index % 4, 3) + 1) as 1 | 2 | 3 | 4}>
                <div className="flex items-center gap-3 rounded-xl border border-white/12 bg-white/6 px-4 py-4 text-sm font-medium text-gray-100 transition-all duration-200 hover:border-orange-400/30 hover:bg-white/10 sm:px-5 sm:py-5">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full bg-orange-500"
                    aria-hidden="true"
                  />
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          INDUSTRIES
          ═══════════════════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-site grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <SectionHeading
              eyebrow="Industries"
              title="Where our products and services are applied."
            />
            <ButtonLink href="/industries" variant="secondary">
              View industries
            </ButtonLink>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:col-span-8">
            {industries.map((industry, index) => (
              <Reveal key={industry.slug} delay={(index + 1) as 1 | 2 | 3}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group surface-card block h-full p-5 sm:p-6"
                >
                  <h3 className="font-display text-xl font-semibold text-gray-900 transition-colors group-hover:text-orange-700 sm:text-2xl">
                    {industry.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {industry.shortDescription}
                  </p>
                  <span className="link-underline mt-4 text-sm font-bold">
                    View applications →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SERVICES
          ═══════════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: "#f5f5f0" }}>
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Relining, inspection, installation, and plant support."
              description="Flagship capability: glass-lined equipment service including relining of glass-lined reactors."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <Reveal key={service.title} delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | 4}>
                <div className="surface-card h-full p-5 sm:p-6">
                  <h3 className="font-display text-lg font-semibold text-gray-900 sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <ButtonLink href="/capabilities">View capabilities</ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PARTNERSHIPS
          ═══════════════════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Partnerships"
              title="Authorised relationships that strengthen supply confidence."
            />
          </Reveal>
          <div className="grid gap-5 sm:gap-6 md:gap-8 lg:grid-cols-3">
            {company.partnerships.map((partner, index) => (
              <Reveal key={partner.name} delay={(index + 1) as 1 | 2 | 3}>
                <div className="surface-card h-full p-6 sm:p-7">
                  <p className="eyebrow">Partnership</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-gray-900 sm:text-3xl">
                    {partner.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {partner.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
