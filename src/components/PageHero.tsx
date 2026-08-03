import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-warm-panel pb-14 pt-28 text-white xs:pb-16 sm:pb-20 sm:pt-32 md:pb-24 md:pt-36">
      {/* Decorative overlays */}
      <div className="pointer-events-none absolute inset-0 bg-hero-sheen" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Bottom accent stripe */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-sun-band" />

      {/* Floating ambient glows */}
      <div className="pointer-events-none absolute right-[10%] top-[20%] h-32 w-32 rounded-full bg-orange-500/20 blur-3xl float-soft" />
      <div className="pointer-events-none absolute bottom-[15%] left-[8%] h-40 w-40 rounded-full bg-flame-700/15 blur-3xl float-soft [animation-delay:1.5s]" />

      {/* Content */}
      <div className="container-site relative animate-fade-up">
        {eyebrow && (
          <p className="eyebrow eyebrow-on-dark">{eyebrow}</p>
        )}
        <div className="accent-bar mt-3" />
        <h1 className="mt-4 max-w-4xl font-display text-[1.9rem] font-semibold leading-[1.1] tracking-tight text-white xs:text-4xl sm:text-5xl md:text-[3.25rem] lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 xs:text-base sm:mt-5 sm:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
