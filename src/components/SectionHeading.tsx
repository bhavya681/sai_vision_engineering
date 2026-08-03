import { ReactNode } from "react";

type SectionHeadingProps = {
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
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={`mb-10 max-w-3xl sm:mb-12 ${isCentered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`eyebrow mb-3 ${light ? "eyebrow-on-dark" : ""}`}>{eyebrow}</p>
      )}
      <div className={`accent-bar mb-4 ${isCentered ? "mx-auto" : ""}`} />
      <h2
        className={`font-display font-semibold leading-tight tracking-tight
          text-[1.65rem] xs:text-3xl sm:text-[2.25rem] lg:text-[2.75rem]
          ${light ? "text-white" : "text-gray-900"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-relaxed sm:text-base lg:text-lg ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
          style={{ maxWidth: "62ch" }}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
