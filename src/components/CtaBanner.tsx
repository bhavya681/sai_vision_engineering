import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";

type Props = {
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
}: Props) {
  return (
    <section className="section-pad">
      <div className="container-site relative overflow-hidden rounded-lg bg-warm-panel bg-hero-sheen px-5 py-10 shadow-lift pulse-glow xs:px-6 sm:px-8 sm:py-12 md:px-10 md:py-14">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sun-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-flame-500/20 blur-3xl" />
        <div className="relative max-w-3xl">
          <p className="eyebrow eyebrow-on-dark">Project inquiry</p>
          <div className="accent-bar mt-4" />
          <h2 className="mt-4 font-display text-2xl font-semibold text-white xs:text-3xl sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-sm text-white/95 xs:text-base sm:mt-4 sm:text-lg">
            {description}
          </p>
          <div className="mt-6 flex flex-col gap-3 xs:flex-row xs:flex-wrap sm:mt-8">
            <ButtonLink href={primaryHref} className="w-full xs:w-auto">
              {primaryLabel}
            </ButtonLink>
            <Link
              href={secondaryHref}
              className="btn btn-ghost w-full xs:w-auto"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
