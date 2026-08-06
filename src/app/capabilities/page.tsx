import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { IsoBadge } from "@/components/BrandLogo";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/company";
import { capabilities, services } from "@/data/services";

export const metadata: Metadata = {
  title: "Quality & Capabilities",
  description:
    "ISO 9001:2015 certified quality practices, fabrication focus, glass-lined reactor relining, inspection, installation, AMC, and plant support services from Sai Vision Engineering.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Quality discipline with practical plant service coverage."
        description={company.materialQuality}
      />

      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Certification"
              title="ISO 9001:2015 Certified"
              description="Quality management certification as shown on Sai Vision Engineering brand materials."
            />
          </Reveal>
          <Reveal delay={1} className="mt-6 sm:mt-8">
            <div className="flex flex-col items-start gap-6 rounded-lg border border-orange-200/50 bg-orange-50 p-6 sm:flex-row sm:items-center sm:p-8">
              <div>
                <IsoBadge />
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-700">
                  This certification supports our commitment to consistent quality processes across
                  products, services, and customer delivery.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Quality"
              title="Quality is our intelligent effort."
              description={company.qualityStatement}
            />
          </Reveal>
          <Reveal delay={1} className="mt-8">
            <div className="grid gap-5 md:grid-cols-2">
              {capabilities.map((item) => (
                <article key={item.title} className="surface-card p-5 sm:p-6">
                  <h3 className="font-display text-2xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-y border-gray-100 bg-[#f8f7f3]">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Flagship service"
              title="Glass-lined equipment service: relining of glass-lined reactors."
              description="Customized inspection and maintenance programs help minimize operational problems, with consultation facilities for glass-lined equipment."
            />
          </Reveal>
          <Reveal delay={1} className="mt-8">
            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {["Spark testing", "Thickness testing", "Visual inspection"].map((test) => (
                <div key={test} className="surface-card px-4 py-5 sm:px-5 sm:py-6">
                  <h3 className="font-display text-xl font-semibold text-gray-900">{test}</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Performed during equipment handling stages as part of service programs.
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Service portfolio"
              title="Installation, repair, AMC, and plant fabrication support."
            />
          </Reveal>
          <Reveal delay={1} className="mt-8">
            <div className="grid gap-4 md:grid-cols-2">
              {services.map((service) => (
                <div key={service.title} className="surface-card p-4 sm:p-5">
                  <h3 className="font-display text-lg font-semibold text-gray-900 sm:text-xl">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Need inspection, relining, or AMC support?"
        description="Share equipment details and site location so our team can recommend the right service path."
        primaryLabel="Talk to Our Team"
        primaryHref="/contact"
      />
    </>
  );
}
