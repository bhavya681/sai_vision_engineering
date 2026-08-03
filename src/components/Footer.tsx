import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { categories } from "@/data/products";
import { industries } from "@/data/industries";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sun-500/30 bg-ink-950 text-white">
      <div className="h-1.5 w-full bg-sun-band-animated" />
      <div className="container-site grid gap-10 py-12 sm:gap-12 sm:py-14 md:py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={company.brand.logo}
              alt={`${company.name} logo`}
              width={48}
              height={48}
              className="h-11 w-11 object-contain"
            />
            <span>
              <span className="block font-display text-lg font-semibold text-white sm:text-xl">
                {company.name}
              </span>
              <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.16em] text-accent-on-dark sm:text-xs">
                {company.tagline}
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-on-dark-muted">
            {company.summary}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <Image
              src={company.brand.iso}
              alt="ISO 9001:2015 Certified"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent-on-dark">
                Certified
              </p>
              <p className="text-sm font-semibold text-white">ISO 9001:2015</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-on-dark-muted">
            Presence: {company.regions.join(" · ")}
          </p>
          <p className="mt-2 text-xs text-on-dark-muted">GSTIN: {company.gstin}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10 lg:col-span-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-accent-on-dark">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-on-dark-muted">
              {[
                ["About", "/about"],
                ["Products", "/products"],
                ["Industries", "/industries"],
                ["Capabilities", "/capabilities"],
                ["Resources", "/resources"],
                ["Contact", "/contact"],
                ["Request a Quote", "/request-quote"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white transition-colors hover:text-[#ffcc66] focus-visible:text-[#ffcc66]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-accent-on-dark">
              Products
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/products/${c.slug}`}
                    className="text-white transition-colors hover:text-[#ffcc66] focus-visible:text-[#ffcc66]"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-accent-on-dark">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:+91${company.contacts.phones[0].number}`}
                  className="text-white transition-colors hover:text-[#ffcc66] focus-visible:text-[#ffcc66]"
                >
                  {company.contacts.primaryName}: {company.contacts.phones[0].number}
                </a>
              </li>
              {company.contacts.emails.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="break-all text-white transition-colors hover:text-[#ffcc66] focus-visible:text-[#ffcc66]"
                  >
                    {email}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`https://${company.websiteDisplay}`}
                  className="text-white transition-colors hover:text-[#ffcc66] focus-visible:text-[#ffcc66]"
                  target="_blank"
                  rel="noreferrer"
                >
                  {company.websiteDisplay}
                </a>
              </li>
              <li className="pt-2 text-on-dark-muted">
                Industries: {industries.map((i) => i.name).join(" · ")}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="container-site flex flex-col gap-3 py-5 text-xs text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-5">
            <Link
              href="/privacy"
              className="text-white transition-colors hover:text-[#ffcc66] focus-visible:text-[#ffcc66]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white transition-colors hover:text-[#ffcc66] focus-visible:text-[#ffcc66]"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
