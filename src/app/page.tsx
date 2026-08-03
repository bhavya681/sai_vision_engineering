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
          HERO SECTION — Industrial Photo Background
          ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] overflow-hidden text-white">
        {/* Background photograph */}
        <Image
          src="/images/brand/hero-bg.png"
          alt="Industrial process equipment — vessels, piping, and valves"
          fill
          priority
          className="object-cover object-right-top sm:object-center"
          sizes="100vw"
          quality={85}
        />

        {/* Left-heavy overlay: dark on left for text, fading to transparent on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 80%, rgba(0,0,0,0.05) 100%)",
          }}
        />
        {/* Top-bottom vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        {/* Subtle warm tint in the dark area */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 15% 60%, rgba(234,88,12,0.25), transparent 70%)",
          }}
        />

        {/* Bottom accent stripe */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-[3px] bg-sun-band" />

        {/* Hero content */}
        <div className="container-site relative z-[5] flex min-h-[100svh] flex-col justify-end pb-12 pt-24 xs:pb-14 sm:justify-center sm:pb-20 sm:pt-28 md:pb-24">
          <p className="eyebrow eyebrow-on-dark animate-fade-up">
            {company.tagline}
          </p>
          <div className="accent-bar mt-3 animate-fade-up [animation-delay:50ms]" />

          <h1 className="mt-4 max-w-[15ch] font-display text-[2rem] font-semibold leading-[1.08] tracking-tight text-white animate-fade-up [animation-delay:90ms] xs:text-[2.4rem] sm:text-[2.8rem] md:text-5xl lg:text-[3.5rem] xl:text-6xl">
            Process equipment and plant support you can specify with confidence.
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-200 animate-fade-up [animation-delay:150ms] xs:text-base sm:mt-5 sm:text-lg md:max-w-xl">
            Glass-lined equipment, vessels, lined piping, valves, mechanical seals,
            and NORD drive solutions — backed by authorised contractor and dealership
            relationships for chemical and pharmaceutical plants.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex w-full flex-col gap-3 animate-fade-up [animation-delay:210ms] xs:w-auto xs:flex-row xs:flex-wrap sm:mt-8">
            <ButtonLink href="/products" className="w-full xs:w-auto">
              Explore Products
            </ButtonLink>
            <ButtonLink href="/request-quote" variant="ghost" className="w-full xs:w-auto">
              Request a Quote
            </ButtonLink>
          </div>

          {/* Trust chips */}
          <dl className="mt-8 grid max-w-2xl gap-3 border-t border-white/15 pt-6 animate-fade-up [animation-delay:270ms] xs:mt-10 xs:grid-cols-3 sm:mt-12 sm:gap-4 sm:pt-8">
            {[
              ["Authorised", "GMM Pfaudler Contractor"],
              ["Certified", "ISO 9001:2015"],
              ["Presence", company.regions.slice(0, 3).join(", ")],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 sm:border-transparent sm:bg-transparent sm:px-0 sm:py-0">
                <dt className="text-[0.6rem] font-extrabold uppercase tracking-[0.18em] text-orange-400 sm:text-[0.65rem]">
                  {label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-gray-200">{value}</dd>
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
          TRUST STRIP — ISO + Regions + Partners
          ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-white py-6 sm:py-8 md:py-10">
        <div className="container-site flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:gap-8">
          {/* ISO badge */}
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <Image
                src={company.brand.iso}
                alt="ISO 9001:2015 Certified"
                width={56}
                height={56}
                className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
              />
              <div>
                <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.18em] text-orange-700">
                  Certified
                </p>
                <p className="font-display text-base font-bold text-gray-900 sm:text-lg">
                  ISO 9001:2015
                </p>
              </div>
            </div>
          </Reveal>

          {/* Region badges */}
          <Reveal delay={1} className="flex flex-wrap gap-1.5 sm:gap-2">
            {company.regions.map((region) => (
              <span
                key={region}
                className="rounded-md border border-orange-200 bg-orange-50 px-2.5 py-1 text-[0.65rem] font-bold text-orange-800 sm:px-3 sm:py-1.5 sm:text-xs"
              >
                {region}
              </span>
            ))}
          </Reveal>

          {/* Partner chips */}
          <Reveal delay={2} className="hidden flex-wrap gap-2 md:flex">
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
        <div className="container-site grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SectionHeading
              eyebrow="Company"
              title="Mechanical engineering partner for corrosive process industries."
              description={company.overview[0]}
            />
            <p className="text-sm leading-relaxed text-gray-600 xs:text-base">
              {company.overview[1]}
            </p>
            <div className="mt-6 sm:mt-8">
              <ButtonLink href="/about" variant="secondary">
                About Our Company
              </ButtonLink>
            </div>
          </Reveal>

          {/* Image panel */}
          <Reveal delay={2} className="media-frame relative min-h-[220px] bg-gray-900 xs:min-h-[260px] sm:min-h-[340px]">
            <Image
              src="/images/products/img-1.png"
              alt="Industrial reactor and process equipment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-x-0 top-0 z-[2] h-[3px] bg-sun-band" />
            <div className="absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 sm:p-5">
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
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
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
      <section className="section-pad bg-gray-50">
        <div className="container-site">
          <Reveal>
            <div className="mb-6 flex flex-col justify-between gap-4 sm:mb-8 md:flex-row md:items-end">
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
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
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
      <section
        className="section-pad"
        style={{ background: "linear-gradient(160deg, #111111 0%, #1c1210 50%, #2a1810 100%)" }}
      >
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Why Sai Vision"
              title="Advantages that support reliable plant operations."
              light
            />
          </Reveal>
          <div className="grid gap-2.5 xs:gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {company.whyChooseUs.map((item, index) => (
              <Reveal key={item} delay={(Math.min(index % 4, 3) + 1) as 1 | 2 | 3 | 4}>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm font-medium text-gray-100 transition-all duration-200 hover:border-orange-400/25 hover:bg-white/8 sm:px-5 sm:py-4">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-orange-500" aria-hidden="true" />
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
        <div className="container-site grid gap-6 lg:grid-cols-12 lg:gap-10">
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
                  className="group surface-card block h-full p-4 sm:p-5 md:p-6"
                >
                  <h3 className="font-display text-lg font-semibold text-gray-900 transition-colors group-hover:text-orange-700 sm:text-xl md:text-2xl">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:mt-3">
                    {industry.shortDescription}
                  </p>
                  <span className="link-underline mt-3 text-sm font-bold sm:mt-4">
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
      <section className="section-pad bg-gray-50">
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
                <div className="surface-card h-full p-4 sm:p-5 md:p-6">
                  <h3 className="font-display text-lg font-semibold text-gray-900 sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6 sm:mt-8">
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
          <div className="grid gap-4 sm:gap-5 md:gap-6 lg:grid-cols-3">
            {company.partnerships.map((partner, index) => (
              <Reveal key={partner.name} delay={(index + 1) as 1 | 2 | 3}>
                <div className="surface-card h-full p-5 sm:p-6 md:p-7">
                  <p className="eyebrow">Partnership</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl">
                    {partner.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:mt-3 sm:text-base">
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
