import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${company.name}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How inquiry information submitted through this website is handled."
      />
      <section className="section-pad">
        <div className="container-site prose-industrial max-w-3xl space-y-4">
          <p>
            {company.name} collects contact and inquiry details that you voluntarily submit through
            forms on this website, such as name, company, email, phone, and project requirements.
          </p>
          <p>
            This information is used only to respond to your inquiry and provide relevant product or
            service information. We do not sell personal information.
          </p>
          <p>
            For privacy questions, contact {company.contacts.emails[0]}.
          </p>
        </div>
      </section>
    </>
  );
}
