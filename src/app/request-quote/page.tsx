import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { InquiryForm } from "@/components/InquiryForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a quotation from Sai Vision Engineering for glass-lined equipment, vessels, lined piping, valves, seals, or NORD drive systems.",
};

type Props = {
  searchParams: Promise<{ product?: string }>;
};

export default async function RequestQuotePage({ searchParams }: Props) {
  const { product } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Tell us what you need — product, spare, or service."
        description="If you arrived from a product page, the selected product name is prefilled below."
      />

      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl font-semibold text-gray-900">What happens next</h2>
            <ol className="mt-5 space-y-4 text-sm text-gray-700">
              <li>1. Submit your requirement with contact details.</li>
              <li>2. Our team reviews product/category and scope.</li>
              <li>3. We respond with clarification questions or a quotation path.</li>
            </ol>
            <div className="mt-8 rounded-md border border-orange-200/50 bg-orange-50 p-5 text-sm">
              <p className="font-medium text-gray-900">Prefer direct contact?</p>
              <a
                className="mt-2 block text-orange-700 hover:underline"
                href={`tel:+91${company.contacts.phones[0].number}`}
              >
                +91 {company.contacts.phones[0].number}
              </a>
              <a
                className="mt-1 block break-all text-orange-700 hover:underline"
                href={`mailto:${company.contacts.emails[0]}`}
              >
                {company.contacts.emails[0]}
              </a>
            </div>
          </div>

          <div className="rounded-md border border-orange-200/50 bg-white p-5 shadow-soft xs:p-6 sm:p-8 lg:col-span-8">
            <InquiryForm defaultProduct={product ?? ""} />
          </div>
        </div>
      </section>
    </>
  );
}
