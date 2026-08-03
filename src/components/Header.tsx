"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";

const nav = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth ${
        scrolled || open
          ? "border-b border-sun-500/25 bg-[#fffdf8] shadow-soft"
          : "border-b border-sun-500/15 bg-[#fffdf8]/97 backdrop-blur-md"
      }`}
    >
      <div className="h-1 w-full bg-sun-band-animated" />
      <div className="container-site flex h-16 items-center justify-between gap-3 sm:h-[4.25rem] md:h-[4.5rem]">
        <Link
          href="/"
          className="group min-w-0 transition-transform duration-300 hover:-translate-y-0.5"
          onClick={() => setOpen(false)}
        >
          <BrandLogo priority />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex xl:gap-7" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-semibold text-ink-900 transition-colors duration-300 hover:text-flame-700 focus-visible:text-flame-700 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-sun-band after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link href="/request-quote" className="btn btn-primary">
            Request a Quote
          </Link>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <Link
            href="/request-quote"
            className="btn btn-primary btn-sm hidden sm:inline-flex"
          >
            Quote
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-sun-500/30 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-flame-500 hover:bg-sun-50 hover:shadow-glow sm:h-11 sm:w-11"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full origin-center bg-ink-900 transition-all duration-300 ease-smooth ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-ink-900 transition-all duration-300 ease-smooth ${
                  open ? "scale-x-0 opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full origin-center bg-ink-900 transition-all duration-300 ease-smooth ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-sun-500/20 bg-[#fffdf8] transition-all duration-300 ease-smooth xl:hidden ${
          open ? "max-h-[80vh] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav
          className={`container-site flex flex-col gap-1 py-3 ${open ? "animate-slide-down" : ""}`}
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-3 text-base font-medium text-ink-900 transition-colors duration-200 hover:bg-sun-100 hover:text-flame-700"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/request-quote"
            className="btn btn-primary mt-2 mb-2 w-full sm:hidden"
            onClick={() => setOpen(false)}
          >
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
