import Image from "next/image";
import { company } from "@/data/company";

type Props = {
  size?: number;
  className?: string;
  priority?: boolean;
  showWordmark?: boolean;
};

export function BrandLogo({
  size = 44,
  className = "",
  priority = false,
  showWordmark = true,
}: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <Image
        src={company.brand.logo}
        alt={`${company.name} logo`}
        width={size}
        height={size}
        className="h-9 w-9 object-contain sm:h-10 sm:w-10 md:h-11 md:w-11"
        priority={priority}
      />
      {showWordmark ? (
        <span className="min-w-0 leading-tight">
          <span className="block truncate font-display text-base font-bold tracking-wide text-[#120c06] sm:text-lg md:text-xl">
            SAI VISION
          </span>
          <span className="block text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#9a3412] sm:text-[0.65rem]">
            Engineering
          </span>
        </span>
      ) : null}
    </span>
  );
}

export function IsoBadge({ className = "" }: { className?: string }) {
  const cert = company.certifications[0];
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src={cert.image}
        alt={cert.detail}
        width={72}
        height={72}
        className="h-14 w-14 object-contain sm:h-16 sm:w-16"
      />
      <div>
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#9a3412]">
          Certified
        </p>
        <p className="font-display text-lg font-bold text-[#120c06] sm:text-xl">
          {cert.name}
        </p>
      </div>
    </div>
  );
}
