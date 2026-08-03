import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CategoryCard, ProductCard } from "@/components/ProductCards";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { ClientMarquee } from "@/components/ClientMarquee";
import { Reveal } from "@/components/Reveal";
import { IsoBadge } from "@/components/BrandLogo";
import { company } from "@/data/company";
import { categories, getFeaturedProducts } from "@/data/products";
import { industries } from "@/data/industries";
import { services } from "@/data/services";

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 6);

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-warm-panel text-white">
        <Image
          src="/images/brand/cover.png"
          alt="Sai Vision Engineering industrial equipment"
          fill
          priority
          className="object-cover object-center opacity-30 transition duration-[1.2s] will-change-transform"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/88 to-ink-900/40" />
        <div className="absolute inset-0 bg-hero-sheen" />
        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-sun-band-animated" />
        <div className="pointer-events-none absolute right-[8%] top-[22%] h-28 w-28 rounded-full bg-sun-400/25 blur-3xl float-soft" />
        <div className="pointer-events-none absolute bottom-[18%] left-[10%] h-36 w-36 rounded-full bg-flame-500/20 blur-3xl float-soft [animation-delay:1.2s]" />

        <div className="container-site relative flex min-h-[100svh] flex-col justify-end pb-12 pt-28 xs:pb-14 sm:justify-center sm:pb-20 sm:pt-32 md:pb-24">
          <p className="eyebrow eyebrow-on-dark animate-fade-up">{company.tagline}</p>
          <div className="accent-bar mt-4 animate-fade-up [animation-delay:60ms]" />
          <h1 className="mt-4 max-w-4xl font-display text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-white xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up [animation-delay:100ms]">
            Process equipment and plant support you can specify with confidence.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/95 xs:text-base sm:mt-6 sm:text-lg animate-fade-up [animation-delay:160ms]">
            Glass-lined equipment, vessels, lined piping, valves, mechanical seals, and NORD drive
            solutions — backed by authorised contractor and dealership relationships for chemical
            and pharmaceutical plants.
          </p>
          <div className="mt-7 flex w-full flex-col gap-3 xs:w-auto xs:flex-row xs:flex-wrap sm:mt-9 animate-fade-up [animation-delay:220ms]">
            <ButtonLink href="/products" className="w-full xs:w-auto">
              Explore Products
            </ButtonLink>
            <ButtonLink
              href="/request-quote"
              variant="ghost"
              className="w-full border border-white/25 xs:w-auto"
            >
              Request a Quote
            </ButtonLink>
          </div>

          <dl className="mt-10 grid max-w-3xl gap-4 border-t border-white/15 pt-6 xs:mt-12 sm:mt-14 sm:grid-cols-3 sm:gap-6 sm:pt-8">
            {[
              ["Authorised", "GMM Pfaudler contractor"],
              ["Certified", "ISO 9001:2015"],
              ["Presence", company.regions.join(" · ")],
            ].map(([label, value], i) => (
              <div
                key={label}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-sun-400/40 hover:bg-white/10 sm:border-transparent sm:bg-transparent sm:px-0 sm:py-0 sm:hover:translate-y-0 sm:hover:bg-transparent"
                style={{ animationDelay: `${280 + i * 60}ms` }}
              >
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#ffcc66] sm:text-xs">
                  {label}
                </dt>
                <dd className="mt-1.5 text-sm text-white/95">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ClientMarquee />

      <section className="border-b border-sun-500/20 bg-white py-8 sm:py-10">
        <div className="container-site flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Reveal>
            <IsoBadge />
          </Reveal>
          <Reveal delay={1} className="flex flex-wrap gap-2">
            {company.regions.map((region) => (
              <span
                key={region}
                className="rounded-md border border-[#d4a017] bg-[#fff8e8] px-3 py-2 text-sm font-bold text-[#1a1208]"
              >
                {region}
              </span>
            ))}
          </Reveal>
          <Reveal delay={2}>
            <Image
              src={company.brand.lockup}
              alt="Sai Vision Engineering brand lockup with ISO certification"
              width={280}
              height={120}
              className="h-auto w-full max-w-[240px] object-contain sm:max-w-[280px]"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="Company"
              title="Mechanical engineering partner for corrosive process industries."
              description={company.overview[0]}
            />
            <p className="text-sm leading-relaxed text-ink-800 xs:text-base">
              {company.overview[1]}
            </p>
            <div className="mt-6 sm:mt-8">
              <ButtonLink href="/about" variant="secondary">
                About Our Company
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={2} className="media-frame relative min-h-[240px] bg-ink-900 shadow-soft xs:min-h-[280px] sm:min-h-[340px]">
            <Image
              src="/images/products/img-1.png"
              alt="Industrial reactor and process equipment"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-x-0 top-0 z-[2] h-1 bg-sun-band" />
            <div className="absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-ink-950 to-transparent p-4 sm:p-6">
              <p className="text-sm text-white/95">
                Precisely fabricated equipment with sturdy construction, long service life, and
                minimum maintenance requirements.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Product range"
              title="Organized categories for faster product discovery."
              description="Browse by equipment family — from glass-lined systems to drive solutions."
            />
          </Reveal>
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {categories.map((category, index) => (
              <Reveal key={category.slug} delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | 4}>
                <CategoryCard category={category} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
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
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {featured.map((product, index) => (
              <Reveal key={product.slug} delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | 4}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm-panel text-white">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Why Sai Vision"
              title="Advantages that support reliable plant operations."
              description="Claims below are drawn from the company profile."
              light
            />
          </Reveal>
          <div className="grid gap-3 xs:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {company.whyChooseUs.map((item, index) => (
              <Reveal key={item} delay={(Math.min(index % 4, 3) + 1) as 1 | 2 | 3 | 4}>
                <div className="rounded-md border border-white/25 bg-white/10 px-4 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 sm:px-5 sm:py-5">
                  <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[#ffcc66]" />
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
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
                <Link href={`/industries/${industry.slug}`} className="surface-card block h-full p-5 sm:p-6">
                  <h3 className="font-display text-xl font-semibold text-ink-950 transition-colors group-hover:text-flame-600 sm:text-2xl">
                    {industry.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-800">
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

      <section className="section-pad bg-mist-100">
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
                  <h3 className="font-display text-lg font-semibold text-ink-950 sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-800">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6 sm:mt-8">
            <ButtonLink href="/capabilities">View capabilities</ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site grid gap-5 sm:gap-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {company.partnerships.map((partner, index) => (
            <Reveal key={partner.name} delay={(index + 1) as 1 | 2 | 3}>
              <div className="surface-card h-full p-6 sm:p-7">
                <p className="eyebrow">Partnership</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
                  {partner.name}
                </h3>
                <p className="mt-3 text-sm text-ink-800 sm:text-base">{partner.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
