import { company } from "@/data/company";

export function ClientMarquee() {
  const items = [...company.clients, ...company.clients];
  return (
    <div className="overflow-hidden border-y border-sun-500/25 bg-sun-50 py-6 sm:py-8">
      <p className="container-site eyebrow mb-4 sm:mb-5">Trusted by process industry customers</p>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-sun-50 to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-sun-50 to-transparent sm:w-16" />
        <div className="animate-marquee flex w-max gap-8 px-5 sm:gap-10">
          {items.map((client, idx) => (
            <span
              key={`${client}-${idx}`}
              className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.14em] text-[#2c1d0e] sm:text-sm"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
