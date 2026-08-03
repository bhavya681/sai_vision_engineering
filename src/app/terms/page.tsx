import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for the ${company.name} website.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="Guidelines for using this website and its content."
      />
      <section className="section-pad">
        <div className="container-site prose-industrial max-w-3xl space-y-4">
          <p>
            Content on this website is provided for general business information about{" "}
            {company.name}. Product availability, specifications, and service scope should be
            confirmed directly with our team before purchasing or project decisions.
          </p>
          <p>
            Partnership statements (including authorised contractor and dealership relationships)
            are presented as stated in the company profile. Always verify current commercial terms
            for your requirement.
          </p>
          <p>
            For questions, contact {company.contacts.emails[0]} or call{" "}
            {company.contacts.phones[0].number}.
          </p>
        </div>
      </section>
    </>
  );
}
