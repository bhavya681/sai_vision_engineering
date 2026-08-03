import { company } from "@/data/company";

export function ClientMarquee() {
  const items = [...company.clients, ...company.clients];

  return (
    <div className="overflow-hidden border-y border-gray-100 bg-white py-5 sm:py-6">
      <p className="container-site mb-3.5 text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-gray-400 sm:mb-4">
        Trusted by process industry customers
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-16" />
        {/* Scrolling track */}
        <div className="animate-marquee flex w-max gap-8 px-5 sm:gap-12">
          {items.map((client, idx) => (
            <span
              key={`${client}-${idx}`}
              className="whitespace-nowrap text-xs font-extrabold uppercase tracking-[0.14em] text-gray-500 transition-colors hover:text-gray-800 sm:text-sm"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
