"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { company } from "@/data/company";
import { categories } from "@/data/products";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products", hasDropdown: true },
  { href: "/industries", label: "Industries" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const Chevron = ({ open = false }: { open?: boolean }) => (
  <svg
    aria-hidden
    className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

const Arrow = () => (
  <svg aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(pathname.startsWith("/products"));
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = useCallback(
    (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href)),
    [pathname],
  );

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) setProductsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("pointerdown", closeDropdown);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeDropdown);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-4 sm:pt-3">
        <div
          className={`pointer-events-auto mx-auto flex max-w-[1380px] items-center justify-between gap-3 overflow-visible rounded-2xl border border-white/70 bg-white/95 px-3 py-2 shadow-[0_10px_35px_rgba(17,17,17,0.12)] backdrop-blur-xl transition-all duration-300 sm:px-4 lg:px-5 ${
            scrolled ? "translate-y-0 shadow-[0_12px_38px_rgba(17,17,17,0.16)]" : ""
          }`}
        >
          <Link
            href="/"
            className="group flex min-w-0 shrink-0 items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:gap-3"
            aria-label={`${company.name} home`}
          >
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 ring-1 ring-orange-200/70 transition-all duration-300 group-hover:-rotate-2 group-hover:scale-105 sm:h-11 sm:w-11">
              <Image
                src={company.brand.logo}
                alt=""
                width={44}
                height={44}
                className="h-9 w-9 object-contain sm:h-10 sm:w-10"
                priority
              />
            </span>
            <span className="min-w-0 leading-none">
              <span className="block truncate font-display text-base font-bold tracking-wide text-gray-950 sm:text-lg">
                SAI VISION
              </span>
              <span className="mt-1 block text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-orange-600 sm:text-[0.62rem]">
                Engineering
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
            {NAV_LINKS.map((item) => {
              const active = isActive(item.href);
              const common = `group relative flex items-center gap-1 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                active
                  ? "bg-[#fff3e8] text-gray-950 shadow-sm ring-1 ring-orange-200/70"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-950"
              }`;

              if (item.hasDropdown) {
                return (
                  <div ref={dropdownRef} key={item.href} className="relative">
                    <button
                      type="button"
                      className={common}
                      aria-expanded={productsOpen}
                      aria-controls="products-menu"
                      onClick={() => setProductsOpen((value) => !value)}
                    >
                      {item.label}
                      <Chevron open={productsOpen} />
                    </button>
                    <div
                      id="products-menu"
                      className={`absolute left-1/2 top-[calc(100%+0.7rem)] w-80 -translate-x-1/2 origin-top rounded-2xl border border-gray-200 bg-white p-2.5 shadow-[0_20px_55px_rgba(17,17,17,0.18)] transition-all duration-200 ${
                        productsOpen
                          ? "visible translate-y-0 scale-100 opacity-100"
                          : "invisible -translate-y-2 scale-95 opacity-0"
                      }`}
                    >
                      <Link
                        href="/products"
                        className="group flex items-center justify-between rounded-xl bg-gradient-to-r from-[#221611] to-[#3a2115] px-4 py-3 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        Explore all products
                        <Arrow />
                      </Link>
                      <ul className="mt-2 grid gap-1">
                        {categories.map((category) => (
                          <li key={category.slug}>
                            <Link
                              href={`/products/${category.slug}`}
                              className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:translate-x-0.5 hover:bg-[#fff3e8] hover:text-gray-950"
                            >
                              {category.name}
                              <span aria-hidden className="text-orange-500">→</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={common}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="/request-quote"
              className="group hidden items-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 px-4 py-2.5 text-sm font-bold text-white shadow-[0_7px_20px_rgba(234,88,12,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(234,88,12,0.36)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 sm:flex"
            >
              <span className="hidden lg:inline">Request a Quote</span>
              <span className="lg:hidden">Quote</span>
              <Arrow />
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-900 transition-all duration-200 hover:border-orange-200 hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 xl:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setMobileOpen((value) => !value)}
            >
              <span className="flex w-5 flex-col gap-[5px]">
                <span className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${mobileOpen ? "scale-x-0 opacity-0" : ""}`} />
                <span className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={closeMobile}
        className={`fixed inset-0 z-40 bg-black/55 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        id="mobile-navigation"
        aria-hidden={!mobileOpen}
        className={`fixed bottom-3 right-3 top-3 z-50 flex w-[min(90vw,390px)] flex-col overflow-hidden rounded-2xl border border-white/50 bg-white shadow-2xl transition-transform duration-300 ease-smooth xl:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-[calc(100%+1rem)]"
        }`}
      >
        <div className="h-1 shrink-0 bg-gradient-to-r from-orange-700 via-orange-500 to-amber-400" />
        <div className="flex items-center justify-between border-b border-gray-100 p-4">
          <Link href="/" onClick={closeMobile} className="flex items-center gap-2.5">
            <Image src={company.brand.logo} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
            <span className="font-display text-lg font-bold text-gray-950">Sai Vision</span>
          </Link>
          <button
            type="button"
            onClick={closeMobile}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 text-xl text-gray-800 transition-colors hover:bg-orange-50"
            aria-label="Close navigation menu"
          >
            ×
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {NAV_LINKS.map((item) => {
              const active = isActive(item.href);
              const linkStyle = `flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-[0.95rem] font-semibold transition-all duration-200 ${
                active
                  ? "bg-[#fff3e8] text-gray-950 ring-1 ring-orange-200/70"
                  : "text-gray-700 hover:translate-x-0.5 hover:bg-gray-100 hover:text-gray-950"
              }`;

              if (item.hasDropdown) {
                return (
                  <li key={item.href}>
                    <div className="flex gap-1">
                      <Link href={item.href} onClick={closeMobile} className={`${linkStyle} flex-1`}>
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        className="flex w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-800 transition-colors hover:bg-orange-50"
                        aria-label="Toggle product categories"
                        aria-expanded={mobileProductsOpen}
                        onClick={() => setMobileProductsOpen((value) => !value)}
                      >
                        <Chevron open={mobileProductsOpen} />
                      </button>
                    </div>
                    <div className={`grid transition-all duration-300 ${mobileProductsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <ul className="ml-4 overflow-hidden border-l border-orange-200 pl-2">
                        {categories.map((category) => (
                          <li key={category.slug}>
                            <Link
                              href={`/products/${category.slug}`}
                              onClick={closeMobile}
                              className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-orange-50 hover:text-gray-950"
                            >
                              {category.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link href={item.href} onClick={closeMobile} aria-current={active ? "page" : undefined} className={linkStyle}>
                    {item.label}
                    <span aria-hidden className={active ? "text-orange-500" : "text-gray-300"}>→</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="grid gap-2 border-t border-gray-100 p-4">
          <Link
            href="/request-quote"
            onClick={closeMobile}
            className="group flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 px-4 text-sm font-bold text-white shadow-brand transition-transform duration-300 hover:-translate-y-0.5"
          >
            Request a Quote
            <Arrow />
          </Link>
          <a
            href={`tel:+91${company.contacts.phones[0].number}`}
            className="flex min-h-11 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm font-semibold text-gray-800 transition-colors hover:border-orange-200 hover:bg-orange-50"
          >
            Call +91 {company.contacts.phones[0].number}
          </a>
        </div>
      </aside>
    </>
  );
}
