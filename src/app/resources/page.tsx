import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Resources & Downloads",
  description:
    "Download the Sai Vision Engineering company profile and access product inquiry resources.",
};

const downloads = [
  {
    name: "Sai Vision Engineering Company Profile",
    description:
      "Official company profile covering overview, vision, mission, product range, services, clients, and contact details.",
    type: "PDF",
    href: "/documents/sai-vision-company-profile.pdf",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Company documents available for download."
        description="Only files that exist in this project are listed. Additional catalogs can be added as assets become available."
      />

      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="Downloads"
            title="Company profile"
            description="Share with procurement and engineering teams evaluating Sai Vision Engineering."
          />
          <div className="grid gap-6">
            {downloads.map((doc) => (
              <article
                key={doc.href}
                className="group grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lift md:grid-cols-[260px_1fr]"
              >
                <div className="relative min-h-64 overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50 md:min-h-[340px]">
                  <Image
                    src="/images/company-profile-cover.webp"
                    alt="Sai Vision Engineering company profile cover"
                    fill
                    className="object-contain p-5 transition-transform duration-500 ease-smooth group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 260px"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-orange-700 shadow-sm">
                    Official document
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-orange-700">
                      {doc.type}
                    </span>
                    <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-gray-600">
                      Company profile
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-gray-950 sm:text-3xl">
                    {doc.name}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-700 sm:text-base">
                    {doc.description}
                  </p>
                  <div className="mt-6 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
                    <a href={doc.href} download className="btn btn-primary">
                      Download PDF
                    </a>
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                    >
                      Preview document
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
