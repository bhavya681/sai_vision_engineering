export type Industry = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  useCases: string[];
  relatedCategories: string[];
};

export const industries: Industry[] = [
  {
    slug: "chemical",
    name: "Chemical Plants",
    shortDescription:
      "Equipment, lined piping, seals, valves, and maintenance support for chemical process facilities.",
    description:
      "Sai Vision Engineering supports chemical plants with glass-lined equipment and spares, lined pipelines, valves, mechanical seals, process vessels, and field services including M.S. structure and pipeline work.",
    useCases: [
      "Glass-lined reactor supply and spare support",
      "PTFE/PFA/FEP lined transfer lines",
      "Valve and safety-valve repair",
      "Mechanical seal supply and installation",
      "AMC and maintenance programs",
    ],
    relatedCategories: [
      "glass-lined-equipment",
      "lined-piping",
      "valves-accessories",
      "mechanical-seals",
    ],
  },
  {
    slug: "pharmaceutical",
    name: "Pharmaceutical Plants",
    shortDescription:
      "Process equipment and reliability services for pharmaceutical manufacturing environments.",
    description:
      "Pharmaceutical plants are a core industry focus, supported through glass-lined equipment services, process vessels, seals, valves, drive systems, and consultation for glass-lined assets.",
    useCases: [
      "Glass-lined equipment service and relining",
      "Reactor and storage tank supply",
      "Seal and valve maintenance",
      "Inspection programs including spark and thickness testing",
    ],
    relatedCategories: [
      "glass-lined-equipment",
      "vessels-heat-transfer",
      "mechanical-seals",
      "nord-drive-systems",
    ],
  },
  {
    slug: "steel",
    name: "Steel Plants",
    shortDescription:
      "Structural and pipeline fabrication support for steel plant environments.",
    description:
      "M.S. structure and pipeline work is provided for steel plants, alongside broader industrial equipment, valve, seal, and drive-system support.",
    useCases: [
      "M.S. structure work",
      "Industrial pipeline fabrication and erection",
      "Valve and mechanical seal support",
      "Gearbox repair and drive solutions",
    ],
    relatedCategories: ["valves-accessories", "mechanical-seals", "nord-drive-systems"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
