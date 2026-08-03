import Image from "next/image";
import { company } from "@/data/company";

type BrandLogoProps = {
  size?: number;
  className?: string;
  priority?: boolean;
  showWordmark?: boolean;
  /** Use "light" variant on dark backgrounds */
  variant?: "default" | "light";
};

export function BrandLogo({
  size = 44,
  className = "",
  priority = false,
  showWordmark = true,
  variant = "default",
}: BrandLogoProps) {
  const isLight = variant === "light";

  return (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Logo mark with a subtle background ring for clarity */}
      <span
        className={`relative flex shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
          isLight
            ? "bg-white/15 ring-1 ring-white/30"
            : "bg-orange-50 ring-1 ring-orange-200/60"
        }`}
        style={{ width: size, height: size }}
      >
        <Image
          src={company.brand.logo}
          alt={`${company.name} logo`}
          width={size}
          height={size}
          className="object-contain"
          style={{ width: Math.round(size * 0.78), height: Math.round(size * 0.78) }}
          priority={priority}
        />
      </span>

      {showWordmark && (
        <span className="min-w-0 leading-snug">
          <span
            className={`block truncate font-display font-bold tracking-wide ${
              isLight ? "text-white" : "text-gray-900"
            }`}
            style={{ fontSize: `${Math.max(size * 0.38, 13)}px` }}
          >
            SAI VISION
          </span>
          <span
            className={`block font-extrabold uppercase tracking-[0.18em] ${
              isLight ? "text-orange-300" : "text-orange-600"
            }`}
            style={{ fontSize: `${Math.max(size * 0.22, 9)}px` }}
          >
            Engineering
          </span>
        </span>
      )}
    </span>
  );
}

/** ISO 9001:2015 certification badge */
export function IsoBadge({ className = "" }: { className?: string }) {
  const cert = company.certifications[0];
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src={company.brand.iso}
        alt={cert.detail}
        width={64}
        height={64}
        className="h-14 w-14 object-contain sm:h-16 sm:w-16"
      />
      <div>
        <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-orange-700">
          Certified
        </p>
        <p className="font-display text-lg font-bold text-gray-900 sm:text-xl">
          {cert.name}
        </p>
      </div>
    </div>
  );
}
