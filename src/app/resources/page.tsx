import type { Metadata } from "next";
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
          <div className="grid gap-4">
            {downloads.map((doc) => (
              <article
                key={doc.href}
                className="flex flex-col justify-between gap-5 rounded-md border border-gray-200 bg-white p-5 shadow-soft xs:p-6 sm:flex-row sm:items-center"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">
                    {doc.type}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-gray-900">
                    {doc.name}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-700">{doc.description}</p>
                </div>
                <a href={doc.href} download className="btn btn-primary shrink-0">
                  Download PDF
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
