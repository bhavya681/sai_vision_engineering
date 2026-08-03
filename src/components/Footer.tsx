import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { categories } from "@/data/products";

const EXPLORE_LINKS = [
  ["About", "/about"],
  ["Products", "/products"],
  ["Industries", "/industries"],
  ["Capabilities", "/capabilities"],
  ["Resources", "/resources"],
  ["Contact", "/contact"],
  ["Request a Quote", "/request-quote"],
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-[#f8f7f3] text-gray-900">
      {/* Top brand accent stripe */}
      <div className="h-[3px] w-full bg-sun-band" />

      {/* Main footer content */}
      <div className="container-site grid gap-10 py-14 lg:grid-cols-12 lg:gap-8 xl:gap-12">
        {/* ── Brand column ── */}
        <div className="lg:col-span-4">
          {/* Logo + wordmark */}
          <Link href="/" className="inline-flex items-center gap-3 group" aria-label="Sai Vision Engineering — Home">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-orange-200/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md">
              <Image
                src={company.brand.logo}
                alt={`${company.name} logo`}
                width={44}
                height={44}
                className="h-9 w-9 object-contain"
              />
            </span>
            <span>
              <span className="block font-display text-lg font-bold tracking-wide text-gray-950 sm:text-xl">
                {company.name}
              </span>
              <span className="block text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-orange-600">
                {company.tagline}
              </span>
            </span>
          </Link>

          {/* Description */}
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-600">
            {company.summary}
          </p>

          {/* ISO Badge */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
            <Image
              src={company.brand.iso}
              alt="ISO 9001:2015 Certified"
              width={52}
              height={52}
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.18em] text-orange-700">
                Certified
              </p>
              <p className="text-sm font-bold text-gray-950">ISO 9001:2015</p>
              <p className="text-[0.7rem] text-gray-500">Quality Management</p>
            </div>
          </div>

          {/* Presence & GSTIN */}
          <p className="mt-4 text-xs text-gray-600">
            Presence: {company.regions.join(" · ")}
          </p>
          <p className="mt-1.5 text-xs text-gray-500">GSTIN: {company.gstin}</p>
        </div>

        {/* ── Navigation columns ── */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:gap-6">
          {/* Explore */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-700">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {EXPLORE_LINKS.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-600 transition-colors hover:text-orange-700 focus-visible:text-orange-700 focus-visible:outline-none focus-visible:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-700">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/products/${c.slug}`}
                    className="text-sm text-gray-600 transition-colors hover:text-orange-700 focus-visible:text-orange-700 focus-visible:outline-none focus-visible:underline"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-700">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              {company.contacts.phones.map((phone) => (
                <li key={phone.number}>
                  <a
                    href={`tel:+91${phone.number}`}
                    className="text-sm text-gray-600 transition-colors hover:text-orange-700 focus-visible:text-orange-700 focus-visible:outline-none"
                  >
                    {phone.label}: +91 {phone.number}
                  </a>
                </li>
              ))}
              {company.contacts.emails.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="break-all text-sm text-gray-600 transition-colors hover:text-orange-700 focus-visible:text-orange-700 focus-visible:outline-none"
                  >
                    {email}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`https://${company.websiteDisplay}`}
                  className="text-sm text-gray-600 transition-colors hover:text-orange-700 focus-visible:text-orange-700 focus-visible:outline-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  {company.websiteDisplay}
                </a>
              </li>

              {/* Partnerships */}
              <li className="pt-2">
                <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-orange-700">
                  Partnerships
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
                  GMM Pfaudler Authorised Contractor
                  <br />
                  NORD Drive Systems Prime Dealer
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 bg-white/50">
        <div className="container-site flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-600">
            © {year} {company.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link
              href="/privacy"
              className="text-xs text-gray-600 transition-colors hover:text-orange-700 focus-visible:text-orange-700 focus-visible:outline-none focus-visible:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-gray-600 transition-colors hover:text-orange-700 focus-visible:text-orange-700 focus-visible:outline-none focus-visible:underline"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
