import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function Partners() {
  return (
    <section className="relative overflow-hidden border-y border-gray-100 bg-white py-16 sm:py-20 lg:py-24">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[900px] -translate-x-1/2 rounded-full bg-orange-50/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative">
        {/* Heading */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-700">
                Our Partners & Clients
              </span>

              <span className="h-px w-10 bg-orange-500" />
            </div>

            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Trusted by{" "}
              <span className="text-orange-600">
                process industry leaders
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              We partner with leading organizations across the chemical,
              pharmaceutical, and process industries to deliver dependable
              engineering solutions.
            </p>
          </div>
        </Reveal>

        {/* Logo showcase */}
        <Reveal delay={1}>
          <div className="mx-auto mt-12 max-w-6xl sm:mt-16">
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 py-5 shadow-sm transition-all duration-500 hover:border-orange-200 hover:shadow-lg sm:px-8 sm:py-7 lg:px-12 lg:py-8">
              {/* Top accent */}
              <div
                className="absolute inset-x-0 top-0 h-[3px] origin-center scale-x-50 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-70 transition-all duration-700 group-hover:scale-x-100 group-hover:opacity-100"
                aria-hidden="true"
              />

              {/* Logos */}
              <div className="relative mx-auto w-full">
                <Image
                  src="/images/brand/partners.png"
                  alt="Sai Vision Engineering partners and clients"
                  width={1600}
                  height={600}
                  className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Trust statement */}
        <Reveal delay={2}>
          <div className="mx-auto mt-8 flex max-w-3xl items-center justify-center gap-3 text-center">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />

            <p className="text-xs font-medium uppercase tracking-[0.12em] text-gray-500 sm:text-sm">
              Building long-term relationships through quality, reliability,
              and engineering excellence
            </p>

            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}