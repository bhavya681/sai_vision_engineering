import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function Partners() {
  return (
    <section className="border-y border-gray-100 bg-white py-12 sm:py-16 lg:py-20">
      <div className="container-site">
        {/* Section heading */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Trusted by process industry leaders
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              We partner with top-tier organizations to deliver high-quality
              engineering solutions.
            </p>
          </div>
        </Reveal>

        {/* Partners image */}
        <Reveal delay={1}>
          <div className="mx-auto mt-10 w-full max-w-6xl sm:mt-14">
            <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-4 shadow-sm sm:p-6 md:p-8">
              <div className="relative min-h-[180px] w-full sm:min-h-[220px] md:min-h-[260px] lg:min-h-[300px]">
                <Image
                  src="/images/brand/partners.png"
                  alt="Sai Vision Engineering partners and clients"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}