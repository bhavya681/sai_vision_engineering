import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const clients = [
  ["Aarti Drugs", "aarti-drugs"],
  ["Aarti Industries", "aarti-industries"],
  ["NETZSCH", "netzsch"],
  ["Hindustan Platinum", "hindustan-platinum"],
  ["Sarex Overseas", "sarex-overseas"],
  ["Neogen Chemicals", "neogen-chemicals"],
  ["Best Value Chem", "best-value-chem"],
  ["Val Organics", "val-organics"],
  ["Mehta API", "mehta-api"],
  ["Tarak Chemicals", "tarak-chemicals"],
  ["Pidilite", "pidilite"],
  ["Neogen", "neogen"],
  ["Meghmani Organics", "meghmani-organics"],
  ["Aalidhra", "aalidhra"],
  ["Charms Chem", "charms-chem"],
  ["Deccan Fine Chemicals", "deccan-fine-chemicals"],
  ["Lupin", "lupin"],
  ["Metropolitan", "metropolitan"],
  ["Anuh Pharma", "anuh-pharma"],
  ["Aarti Pharmalabs", "aarti-pharmalabs"],
  ["Melzer Chemicals", "melzer-chemicals"],
  ["Zydus / Takeda", "zydus-takeda"],
  ["GMM Pfaudler", "gmm-pfaudler"],
  ["Hexagon Overseas", "hexagon-overseas"],
  ["KDAC Chem", "kdac-chem"],
  ["Macleods", "macleods"],
  ["Kannad Hospital", "kannad-hospital"],
  ["Wellchem Pharmaceuticals", "wellchem-pharmaceuticals"],
  ["UPL", "upl"],
  ["VIC", "vic"],
  ["Yogi Intermediate", "yogi-intermediate"],
  ["Surajlok", "surajlok"],
] as const;

const firstRow = clients.slice(0, 16);
const secondRow = clients.slice(16);

function LogoCard({ client }: { client: (typeof clients)[number] }) {
  return (
    <div className="client-logo-card group relative flex h-24 w-52 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm sm:h-28 sm:w-60">
      <Image
        src={`/images/clients/${client[1]}.png`}
        alt=""
        width={300}
        height={120}
        className="h-full w-full object-contain grayscale-[30%] brightness-[0.97] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02] group-hover:grayscale-0 group-hover:brightness-100"
        sizes="240px"
      />
      <span className="pointer-events-none absolute inset-x-4 bottom-1.5 truncate text-center text-[0.58rem] font-bold uppercase tracking-[0.12em] text-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {client[0]}
      </span>
    </div>
  );
}

function LogoRow({
  items,
  reverse = false,
}: {
  items: readonly (typeof clients)[number][];
  reverse?: boolean;
}) {
  return (
    <div className="logo-marquee relative overflow-hidden py-2" aria-hidden="true">
      <div className={`logo-track flex w-max gap-4 ${reverse ? "logo-track-reverse" : ""}`}>
        {[...items, ...items].map((client, index) => (
          <LogoCard key={`${client[1]}-${index}`} client={client} />
        ))}
      </div>
    </div>
  );
}

export function Partners() {
  return (
    <section className="relative overflow-hidden border-y border-gray-200 bg-[#f8f7f3] py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-orange-100/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-orange-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-700">
                Our Partners & Clients
              </span>
              <span className="h-px w-10 bg-orange-500" />
            </div>

            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Trusted across the{" "}
              <span className="text-orange-600">process industry</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Organizations featured in the Sai Vision Engineering company profile,
              presented individually for clearer recognition.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={1}>
        <div className="relative mt-10 sm:mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#f8f7f3] to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#f8f7f3] to-transparent sm:w-28" />
          <LogoRow items={firstRow} />
          <LogoRow items={secondRow} reverse />
        </div>
      </Reveal>

      <div className="container-site relative">
        <ul className="sr-only">
          {clients.map(([name]) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <Reveal delay={2}>
          <div className="mx-auto mt-9 flex max-w-3xl items-center justify-center gap-3 text-center">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-gray-500 sm:text-sm">
              Hover over the showcase to pause
            </p>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}