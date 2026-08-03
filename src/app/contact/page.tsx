import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { InquiryForm } from "@/components/InquiryForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Sai Vision Engineering for product inquiries, service support, and quotations across Maharashtra and Gujarat locations.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with our team about products, spares, or plant services."
        description="Reach us by phone or email, or send an inquiry using the form below."
      />

      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            <div>
              <h2 className="font-display text-3xl font-semibold text-ink-950">Direct contacts</h2>
              <ul className="mt-5 space-y-4 text-sm text-ink-800">
                {company.contacts.phones.map((phone) => (
                  <li key={phone.number}>
                    <a className="hover:text-ink-950" href={`tel:+91${phone.number}`}>
                      {phone.label}: +91 {phone.number}
                    </a>
                  </li>
                ))}
                {company.contacts.emails.map((email) => (
                  <li key={email}>
                    <a className="hover:text-ink-950" href={`mailto:${email}`}>
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs font-medium text-ink-800">GSTIN: {company.gstin}</p>
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold text-ink-950">Locations</h2>
              <ul className="mt-5 space-y-5">
                {company.locations.map((loc) => (
                  <li key={loc.label} className="surface-card p-4 sm:p-5">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-flame-700">
                      {loc.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-800">{loc.address}</p>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm italic text-ink-800">
              We are the authorised contractor of GMM Pfaudler Ltd.
            </p>
          </div>

          <div className="rounded-md border border-sun-500/20 bg-white p-5 shadow-soft xs:p-6 sm:p-8 lg:col-span-7">
            <h2 className="font-display text-3xl font-semibold text-ink-950">Send an inquiry</h2>
            <p className="mt-2 text-sm text-ink-800">
              Share your requirement and we will follow up. Backend email delivery can be connected
              later.
            </p>
            <div className="mt-8">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
