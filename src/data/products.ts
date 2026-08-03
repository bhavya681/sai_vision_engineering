export type ProductCategorySlug =
  | "glass-lined-equipment"
  | "vessels-heat-transfer"
  | "lined-piping"
  | "valves-accessories"
  | "mechanical-seals"
  | "nord-drive-systems";

export type Product = {
  slug: string;
  category: ProductCategorySlug;
  name: string;
  shortDescription: string;
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
  applications: string[];
  variants?: string[];
  image: string;
  featured?: boolean;
};

export type Category = {
  slug: ProductCategorySlug;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "glass-lined-equipment",
    name: "Glass-Lined Equipment",
    shortDescription:
      "Glass-lined equipment and spare parts for corrosive process applications.",
    description:
      "Sai Vision Engineering supplies complete glass-lined equipment and all types of spare parts, with focus on quality, innovation, technology, sustainability, and cost-effectiveness.",
    image: "/images/products/img-5.png",
  },
  {
    slug: "vessels-heat-transfer",
    name: "Reactors, Tanks & Condensers",
    shortDescription:
      "S.S./M.S. reactors, storage tanks, and condensers for process plants.",
    description:
      "S.S./M.S. reactors, storage tanks, and condensers manufactured by M/S. Kulswamini Enterprises, supplied to meet evolving process plant requirements.",
    image: "/images/products/img-4.png",
  },
  {
    slug: "lined-piping",
    name: "Lined Piping & Fittings",
    shortDescription:
      "M.S./S.S. pipelines and fittings with PTFE, PFA, and FEP linings.",
    description:
      "Specialized supply of M.S. and S.S. pipelines, fittings, and accessories with PTFE, PFA, and FEP linings for corrosion-resistant process transfer.",
    image: "/images/products/img-6.png",
  },
  {
    slug: "valves-accessories",
    name: "Valves & Accessories",
    shortDescription:
      "Industrial valves, accessories, and gasket solutions with service support.",
    description:
      "All types of valves and accessories, along with gaskets, are supplied and serviced with attention to quality and timeliness.",
    image: "/images/products/img-2.png",
  },
  {
    slug: "mechanical-seals",
    name: "Mechanical Seals",
    shortDescription:
      "Mechanical seals for pumps, reactors, ships, and industrial plant equipment.",
    description:
      "Mechanical seals for applications ranging from ships, pumps, and reactors to industrial plant equipment are readily available.",
    image: "/images/products/img-3.png",
  },
  {
    slug: "nord-drive-systems",
    name: "NORD Drive Systems",
    shortDescription:
      "NORD geared motors and drive solutions for pumps, reactors, and plant equipment.",
    description:
      "As a registered Getriebebau NORD dealer and prime pan-India dealer for NORD drive systems, we supply geared motor series with high output torque and high efficiency, customized to application needs.",
    image: "/images/products/img-7.png",
  },
];

export const products: Product[] = [
  {
    slug: "glass-lined-reactor-spares",
    category: "glass-lined-equipment",
    name: "Glass-Lined Reactor Spares",
    shortDescription:
      "Cobalt-blue glass-lined spare parts for reactors and related assemblies.",
    description:
      "Spare parts for glass-lined equipment including lined components used in chemical and pharmaceutical process systems. Supplied with attention to fit, durability, and process reliability.",
    features: [
      "Glass-lined construction for corrosive media",
      "Spare-part support for existing installations",
      "Suitable for chemical and pharmaceutical service",
    ],
    specifications: [
      { label: "Category", value: "Glass-lined spare parts" },
      { label: "Typical lining", value: "Glass lining (cobalt-blue finish shown)" },
    ],
    applications: [
      "Glass-lined reactors",
      "Chemical process plants",
      "Pharmaceutical manufacturing",
    ],
    variants: ["Manhole covers", "Flanged discs", "Lined pipe sections", "Agitator components"],
    image: "/images/products/img-5.png",
    featured: true,
  },
  {
    slug: "glass-lined-agitator-components",
    category: "glass-lined-equipment",
    name: "Glass-Lined Agitator Components",
    shortDescription:
      "Agitator and related glass-lined internals for mixing duties.",
    description:
      "Glass-lined agitator components supplied as part of glass-lined equipment and spare support for process reactors.",
    features: [
      "Designed for glass-lined reactor service",
      "Corrosion-resistant working surfaces",
      "Available as part of spare-part programs",
    ],
    specifications: [
      { label: "Category", value: "Glass-lined agitator components" },
    ],
    applications: ["Mixing in glass-lined reactors", "Corrosive chemical processes"],
    image: "/images/products/img-5.png",
  },
  {
    slug: "ss-ms-reactor",
    category: "vessels-heat-transfer",
    name: "S.S./M.S. Reactor",
    shortDescription:
      "Process reactors in stainless steel and mild steel configurations.",
    description:
      "S.S./M.S. reactors manufactured by M/S. Kulswamini Enterprises for process industry requirements, with focus on meeting evolving customer needs.",
    features: [
      "S.S. and M.S. construction options",
      "Process plant oriented design",
      "Supported through Sai Vision Engineering supply channel",
    ],
    specifications: [
      { label: "Materials", value: "Stainless steel / Mild steel" },
      { label: "Manufacturer", value: "M/S. Kulswamini Enterprises" },
    ],
    applications: [
      "Chemical reaction systems",
      "Pharmaceutical process plants",
      "Industrial process units",
    ],
    image: "/images/products/img-1.png",
    featured: true,
  },
  {
    slug: "storage-tank",
    category: "vessels-heat-transfer",
    name: "Storage Tank",
    shortDescription:
      "Industrial storage tanks for process and utility duties.",
    description:
      "S.S./M.S. storage tanks manufactured by M/S. Kulswamini Enterprises for plant storage requirements.",
    features: [
      "Industrial storage duty",
      "S.S./M.S. options",
      "Suitable for chemical and pharmaceutical facilities",
    ],
    specifications: [
      { label: "Materials", value: "Stainless steel / Mild steel" },
      { label: "Manufacturer", value: "M/S. Kulswamini Enterprises" },
    ],
    applications: ["Process storage", "Intermediate holding", "Plant utilities"],
    image: "/images/products/img-4.png",
    featured: true,
  },
  {
    slug: "condenser-heat-exchanger",
    category: "vessels-heat-transfer",
    name: "Condenser / Heat Exchanger",
    shortDescription:
      "Condensers and heat-transfer vessels for process plants.",
    description:
      "Condensers and related heat-transfer equipment in the S.S./M.S. vessel range manufactured by M/S. Kulswamini Enterprises.",
    features: [
      "Heat-transfer oriented construction",
      "Process plant integration",
      "S.S./M.S. material options",
    ],
    specifications: [
      { label: "Category", value: "Condenser / heat-transfer vessel" },
      { label: "Manufacturer", value: "M/S. Kulswamini Enterprises" },
    ],
    applications: ["Condensation circuits", "Process cooling/heating loops"],
    image: "/images/products/img-4.png",
  },
  {
    slug: "ptfe-pfa-fep-lined-pipe",
    category: "lined-piping",
    name: "PTFE / PFA / FEP Lined Pipe",
    shortDescription:
      "Corrosion-resistant lined pipe for aggressive chemical media.",
    description:
      "M.S./S.S. pipelines supplied with PTFE, PFA, or FEP lining for chemical-resistant fluid transfer.",
    features: [
      "PTFE, PFA, and FEP lining options",
      "M.S. and S.S. carrier pipe options",
      "Intended for corrosive process media",
    ],
    specifications: [
      { label: "Lining options", value: "PTFE / PFA / FEP" },
      { label: "Carrier materials", value: "Mild steel / Stainless steel" },
    ],
    applications: [
      "Chemical transfer lines",
      "Pharmaceutical utilities",
      "Corrosive process piping",
    ],
    image: "/images/products/img-6.png",
    featured: true,
  },
  {
    slug: "lined-pipe-fittings",
    category: "lined-piping",
    name: "Lined Pipe Fittings",
    shortDescription:
      "Elbows, tees, crosses, flanges, and manway fittings with chemical-resistant linings.",
    description:
      "Lined fittings and accessories for M.S./S.S. pipeline systems, including elbows, crosses, flanges, and related components.",
    features: [
      "Compatible with lined piping systems",
      "Chemical-resistant internal linings",
      "Range of fitting geometries",
    ],
    specifications: [
      { label: "Examples", value: "Elbows, crosses, flanges, manway covers" },
      { label: "Lining options", value: "PTFE / PFA / FEP" },
    ],
    applications: ["Process pipe networks", "Plant interconnects"],
    variants: ["Elbow", "Cross", "Flange", "Manway cover"],
    image: "/images/products/img-6.png",
  },
  {
    slug: "industrial-valves",
    category: "valves-accessories",
    name: "Industrial Valves",
    shortDescription:
      "Gate, globe, safety, and related industrial valves with service support.",
    description:
      "All types of valves are supplied and serviced. Quality and timeliness of service are core commitments for valve and accessory support.",
    features: [
      "Broad valve range",
      "Supply and service capability",
      "Repair support for valves and safety valves",
    ],
    specifications: [
      { label: "Scope", value: "All types of valves and accessories" },
    ],
    applications: [
      "Process isolation and control",
      "Safety relief duties",
      "Plant utility systems",
    ],
    variants: ["Gate valves", "Globe valves", "Safety / relief valves"],
    image: "/images/products/img-2.png",
    featured: true,
  },
  {
    slug: "gaskets-and-packing",
    category: "valves-accessories",
    name: "Gaskets & Packing",
    shortDescription:
      "Industrial gaskets and sealing materials for flanges and equipment.",
    description:
      "Gaskets and related sealing accessories are supplied and serviced alongside valves and process equipment needs.",
    features: [
      "Gasket supply for industrial equipment",
      "Supports flanged joints and maintenance work",
      "Aligned with valve and piping service",
    ],
    specifications: [{ label: "Category", value: "Gaskets and sealing accessories" }],
    applications: ["Flanged joints", "Maintenance and overhaul", "Process equipment sealing"],
    image: "/images/products/img-2.png",
  },
  {
    slug: "single-spring-mechanical-seal",
    category: "mechanical-seals",
    name: "Single & Multi-Spring Mechanical Seals",
    shortDescription:
      "Spring-type mechanical seals for pumps and rotating equipment.",
    description:
      "Mechanical seals for pumps, reactors, ships, and industrial plant equipment. Configurations include single-spring and multi-spring designs.",
    features: [
      "Available for pumps and plant equipment",
      "Multiple seal constructions",
      "Installation support available",
    ],
    specifications: [
      { label: "Types", value: "Single-spring / multi-spring designs" },
    ],
    applications: ["Pumps", "Reactors", "Industrial plant equipment", "Marine applications"],
    image: "/images/products/img-3.png",
    featured: true,
  },
  {
    slug: "cartridge-and-bellows-seals",
    category: "mechanical-seals",
    name: "Cartridge & Bellows Seals",
    shortDescription:
      "Cartridge-style and metallic bellows mechanical seals for demanding duties.",
    description:
      "Cartridge and metallic bellows seal options for industrial rotating equipment where reliable shaft sealing is required.",
    features: [
      "Cartridge seal formats",
      "Metallic bellows options",
      "Suitable for industrial process equipment",
    ],
    specifications: [
      { label: "Types", value: "Cartridge seals / metallic bellows seals" },
    ],
    applications: ["Process pumps", "Reactors", "Plant rotating equipment"],
    image: "/images/products/img-3.png",
  },
  {
    slug: "nord-geared-motors",
    category: "nord-drive-systems",
    name: "NORD Geared Motors",
    shortDescription:
      "High-efficiency NORD geared motors for industrial drive applications.",
    description:
      "NORD produces geared motor series with high output torques and high efficiency for a wide variety of applications across more than 100 industries. Sai Vision Engineering is a registered Getriebebau NORD dealer and a prime pan-India dealer for NORD drive systems used with pumps, reactors, and other equipment.",
    features: [
      "High output torque",
      "High efficiency geared motor series",
      "Customization on application parameters",
      "Support for pumps, reactors, and related equipment",
    ],
    specifications: [
      { label: "Brand", value: "Getriebebau NORD" },
      { label: "Dealer status", value: "Registered dealership / prime dealer — pan India" },
    ],
    applications: [
      "Pump drives",
      "Reactor drives",
      "Industrial process equipment",
    ],
    image: "/images/products/img-7.png",
    featured: true,
  },
  {
    slug: "nord-drive-customization",
    category: "nord-drive-systems",
    name: "Customized NORD Drive Solutions",
    shortDescription:
      "Application-matched NORD drive configurations for plant equipment.",
    description:
      "Drive solutions customized on various parameters to provide total customer satisfaction for pumps, reactors, and other process equipment.",
    features: [
      "Application-based customization",
      "Integration with process equipment",
      "Dealer-backed supply support",
    ],
    specifications: [
      { label: "Brand", value: "Getriebebau NORD" },
      { label: "Scope", value: "Customized drive system supply" },
    ],
    applications: ["Process plants", "Pumping systems", "Reactor agitation drives"],
    image: "/images/products/img-7.png",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProduct(category: string, slug: string) {
  return products.find((p) => p.category === category && p.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, limit = 3) {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
}
