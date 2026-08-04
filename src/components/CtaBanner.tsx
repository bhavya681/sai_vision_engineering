import Link from "next/link";

type CtaBannerProps = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBanner({
  title = "Looking for the right equipment for your plant?",
  description = "Share your requirement and our team will help you with product selection, spare support, or service planning.",
  primaryHref = "/request-quote",
  primaryLabel = "Request a Quote",
  secondaryHref = "/contact",
  secondaryLabel = "Talk to Our Team",
}: CtaBannerProps) {
  return (
    <section className="section-pad">
      <div className="container-site">
        <div
          className="relative overflow-hidden rounded-2xl px-6 py-12 sm:px-10 sm:py-14 md:px-14 border border-gray-200 bg-[#f8f7f3] shadow-soft"
        >
          {/* Top accent */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-sun-band" />

          {/* Content */}
          <div className="relative max-w-3xl">
            <p className="eyebrow">Project inquiry</p>
            <div className="accent-bar mt-3" />
            <h2 className="mt-4 font-display text-2xl font-semibold text-gray-950 xs:text-3xl sm:text-[2.25rem] lg:text-4xl leading-tight">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <Link
                href={primaryHref}
                className="btn btn-primary btn-lg w-full xs:w-auto"
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="btn btn-secondary btn-lg w-full xs:w-auto"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
