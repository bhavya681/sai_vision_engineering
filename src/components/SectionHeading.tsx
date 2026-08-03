import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  children,
  light = false,
}: Props) {
  return (
    <div
      className={`mb-8 max-w-3xl sm:mb-10 ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p className={`eyebrow mb-3 ${light ? "eyebrow-on-dark" : ""}`}>{eyebrow}</p>
      ) : null}
      <div className={`accent-bar mb-4 ${align === "center" ? "mx-auto" : ""}`} />
      <h2
        className={`font-display text-[1.7rem] font-semibold tracking-tight xs:text-3xl sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-white" : "text-ink-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-3 text-sm leading-relaxed xs:text-base sm:mt-4 sm:text-lg ${
            light ? "text-on-dark-muted" : "text-ink-800"
          }`}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
