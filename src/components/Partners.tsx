import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function Partners() {
  return (
    <section className="border-y border-gray-100 bg-white py-12 sm:py-16">
      <div className="container-site">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-2xl font-semibold text-gray-900 sm:text-3xl">
              Trusted by process industry leaders
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 max-w-2xl mx-auto">
              We partner with top-tier organizations to deliver high-quality engineering solutions.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 sm:mt-14 relative w-full overflow-hidden rounded-xl bg-gray-50/50 p-4 sm:p-8 border border-gray-100">
            <div className="relative w-full aspect-[2/1] sm:aspect-[3/1] md:aspect-[4/1]">
              <Image
                src="/images/brand/partners.png"
                alt="Sai Vision Engineering Partners and Clients"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
