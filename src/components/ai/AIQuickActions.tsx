"use client";

const ACTIONS = [
  "About Sai Vision Engineering",
  "Our Products",
  "Our Services",
  "Industries We Serve",
  "ISO Certification",
  "Request a Quote",
  "Contact Our Team",
];

export function AIQuickActions({ onSelect }: { onSelect: (text: string) => void }) {
  return (
    <div className="mt-4 flex animate-fade-up flex-wrap gap-2 [animation-delay:0.3s]">
      {ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          onClick={() => onSelect(action)}
          className="rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        >
          {action}
        </button>
      ))}
    </div>
  );
}
