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
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* ── Left: contact info ── */}
          <div className="space-y-8 lg:col-span-5">
            {/* Direct contacts */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-gray-900 sm:text-3xl">
                Direct contacts
              </h2>
              <ul className="mt-5 space-y-3">
                {company.contacts.phones.map((phone) => (
                  <li key={phone.number}>
                    <a
                      href={`tel:+91${phone.number}`}
                      className="group flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-soft transition-all hover:border-orange-200 hover:text-orange-700"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.04 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {phone.label}: +91 {phone.number}
                    </a>
                  </li>
                ))}
                {company.contacts.emails.map((email) => (
                  <li key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="group flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-soft transition-all hover:border-orange-200 hover:text-orange-700 break-all"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs font-medium text-gray-500">
                GSTIN: {company.gstin}
              </p>
            </div>

            {/* Locations */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-gray-900 sm:text-3xl">
                Locations
              </h2>
              <ul className="mt-5 space-y-4">
                {company.locations.map((loc) => (
                  <li key={loc.label} className="surface-card p-4 sm:p-5">
                    <h3 className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-700">
                      {loc.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {loc.address}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <p className="rounded-lg border border-orange-100 bg-orange-50 px-4 py-3 text-sm text-gray-700">
              <span className="font-semibold text-orange-800">Note:</span> We are
              the authorised contractor of GMM Pfaudler Ltd.
            </p>
          </div>

          {/* ── Right: Inquiry form ── */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-lift xs:p-6 sm:p-8 lg:col-span-7">
            <h2 className="font-display text-2xl font-semibold text-gray-900 sm:text-3xl">
              Send an inquiry
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Share your requirement and we will follow up as soon as possible.
            </p>
            <div className="mt-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
