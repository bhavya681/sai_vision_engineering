import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-warm-panel pb-12 pt-24 text-white xs:pb-14 sm:pb-16 sm:pt-28 md:pb-20 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-hero-sheen" />
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:24px_24px] opacity-30 sm:bg-[size:28px_28px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-sun-band-animated" />
      <div className="container-site relative animate-fade-up">
        {eyebrow ? <p className="eyebrow eyebrow-on-dark">{eyebrow}</p> : null}
        <div className="accent-bar mt-4" />
        <h1 className="mt-4 max-w-4xl font-display text-[2rem] font-semibold leading-tight tracking-tight text-white xs:text-4xl sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/95 xs:text-base sm:mt-5 sm:text-lg">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
