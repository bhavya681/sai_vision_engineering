export const company = {
  name: "Sai Vision Engineering",
  shortName: "Sai Vision",
  legalName: "Sai Vision Engineering",
  tagline: "Engineering. Surveying. Solutions.",
  websiteDisplay: "www.saivisionengineering.com",
  gstin: "27APMPP3928D2ZN",
  summary:
    "Sai Vision Engineering supplies and supports glass-lined equipment, process vessels, lined piping, valves, mechanical seals, and NORD drive solutions for chemical, pharmaceutical, and industrial plants.",
  overview: [
    "Sai Vision Engineering is a mechanical engineering partner focused on glass-lined equipment, reactors, storage tanks, condensers, pipelines, structural work, valves, and mechanical seals.",
    "Products are precisely fabricated using optimum quality raw materials and sophisticated technology under skilled professional supervision, with emphasis on high precision, sturdy construction, compact design, rustproof composition, long service life, and minimum maintenance.",
    "We customize a wide range of equipment and support clients through thorough planning, process optimization, and long-term service relationships across demanding industrial markets.",
  ],
  certifications: [
    {
      name: "ISO 9001:2015",
      detail: "ISO 9001:2015 Certified",
      image: "/images/brand/iso-9001.png",
    },
  ],
  regions: ["Maharashtra", "Gujarat", "Delhi", "Andhra Pradesh"],
  brand: {
    logo: "/images/brand/logo-source.png",
    lockup: "/images/brand/lockup.png",
    iso: "/images/brand/iso-source.png",
  },
  partnerships: [
    {
      name: "GMM Pfaudler Ltd.",
      detail: "Authorised contractor of GMM Pfaudler Ltd.",
    },
    {
      name: "Getriebebau NORD",
      detail:
        "Registered dealership of Getriebebau NORD. Prime dealer — pan India — for NORD drive systems used with pumps, reactors, and related equipment.",
    },
    {
      name: "M/S. Kulswamini Enterprises",
      detail:
        "S.S./M.S. reactors, storage tanks, and condensers manufactured by M/S. Kulswamini Enterprises.",
    },
  ],
  vision:
    "To be the global leader widening our reach beyond boundaries and be recognized as the most innovative, dedicated, and product marketing company across the globe and as the first choice for our esteemed customers.",
  mission:
    "To strive as a benchmark company for the mechanical engineering industry providing world-class products and service to customers through continuous improvement driven by the integrity, teamwork, and creativity of our people and adhering to safety standards.",
  qualityStatement:
    "Quality is our intelligent effort. The priceless asset we possess is the attitude of being always the number one in innovation and customer centricity. Gaining experience and expertise, we are laying foundation for adding new products and customized solutions to our basket at the most cost-effective price.",
  materialQuality:
    "We combine design competence with quality consciousness across materials and finished products. Sai Vision Engineering is ISO 9001:2015 Certified.",
  whyChooseUs: [
    "Industry experience",
    "Complete ethical policies",
    "Transparent dealing",
    "Adherence to safety and sincerity",
    "Optimum quality products",
    "On-time delivery",
    "Cost-effective pricing",
    "Focused approach",
    "Competent and efficient team",
    "Accurate material availability",
    "Efficient logistics facility",
  ],
  strengths: [
    {
      title: "Glass-lined expertise",
      description:
        "Sales of glass-lined equipment and spares, plus relining, inspection, and maintenance programs for glass-lined reactors.",
    },
    {
      title: "Process equipment range",
      description:
        "Reactors, storage tanks, condensers, lined pipelines, valves, gaskets, mechanical seals, and drive systems under one partner.",
    },
    {
      title: "Authorised partnerships",
      description:
        "Authorised contractor of GMM Pfaudler Ltd. and registered NORD dealership for geared motors and drive solutions.",
    },
    {
      title: "Plant services",
      description:
        "Spark testing, thickness testing, visual inspection, erection, pipeline work, seal installation, gearbox repair, AMC, and valve repair.",
    },
  ],
  contacts: {
    primaryName: "Pravin",
    phones: [{ label: "Pravin", number: "9665444009" }],
    emails: ["Info@saivisionengineering.com", "saivision.kk@gmail.com"],
  },
  locations: [
    {
      label: "Boisar, Maharashtra",
      address:
        "Bunglow No. 29, Shrinivas Park Housing Society, near D Mart, Maan, Boisar East, Dist. Taluka Palghar, Pin 401501, Maharashtra.",
    },
    {
      label: "Makarpura, Vadodara",
      address:
        "78/3/Q, G.I.D.C. Industrial Estate, Makarpura, Vadodara – 390 010.",
    },
    {
      label: "Sojitra, Anand",
      address:
        "65, G.I.D.C. Sojitra, Nr. Russian Paint, Sojitra – 387240, Anand, Gujarat, India.",
    },
  ],
  clients: [
    "Lupin",
    "Zydus",
    "Takeda",
    "Aarti Pharmalabs",
    "Anuh Pharma",
    "Macleods",
    "Aarti Industries",
    "Aarti Drugs",
    "Neogen Chemicals",
    "Pidilite",
    "GMM Pfaudler",
    "UPL",
    "Meghmani Organics",
    "Tarak Chemicals",
    "Melzer Chemicals",
    "Sarex Overseas",
    "Best Value Chem",
    "Valorganics",
    "Hindustan Platinum",
    "Netzsch",
  ],
  siteUrl: "https://saivisionengineering.com",
} as const;

export type Company = typeof company;
