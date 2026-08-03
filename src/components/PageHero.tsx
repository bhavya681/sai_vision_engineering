import Image from "next/image";
import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-14 pt-28 text-white xs:pb-16 sm:pb-20 sm:pt-32 md:pb-24 md:pt-36">
      <Image
        src="/images/brand/image.png"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Match the homepage: industrial image with a neutral dark vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/35" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/60" />
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Bottom accent stripe */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-sun-band" />

      <div className="pointer-events-none absolute bottom-[12%] left-[8%] h-40 w-40 rounded-full bg-orange-500/10 blur-3xl float-soft" />

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
