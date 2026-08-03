"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { categories } from "@/data/products";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products", hasDropdown: true },
  { href: "/industries", label: "Industries" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  // Scroll tracking
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close drawer and dropdowns on route change
  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  const closeMenu = useCallback(() => setOpen(false), []);
  const toggleMenu = useCallback(() => setOpen((v) => !v), []);

  // Returns true when the given link should be highlighted as active
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Transparent: only on home page before scroll
  const transparent = isHome && !scrolled && !open;

  // Global click listener to close dropdown
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (productsOpen) {
        const target = e.target as HTMLElement;
        if (!target.closest(".products-dropdown-container")) {
          setProductsOpen(false);
        }
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [productsOpen]);

  return (
    <>
      {/* ─────────────────────────────── HEADER ─────────────────────────────── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          transparent
            ? "bg-transparent"
            : "border-b border-gray-100/80 bg-white/96 shadow-sm backdrop-blur-md"
        }`}
      >
        {/* Brand accent stripe */}
        <div
          className="h-[3px] w-full"
          style={{
            background: "linear-gradient(90deg, #c2410c 0%, #f97316 45%, #fbbf24 100%)",
          }}
        />

        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8 lg:py-3.5">
          {/* ── LOGO ── */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            aria-label="Sai Vision Engineering — Home"
          >
            <div
              className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-105 sm:h-11 sm:w-11 md:h-12 md:w-12 ${
                transparent
                  ? "bg-white/15 ring-1 ring-white/25"
                  : "bg-orange-50 ring-1 ring-orange-200/60"
              }`}
            >
              <Image
                src="/images/brand/logo-source.png"
                alt="Sai Vision Engineering logo"
                width={48}
                height={48}
                className="h-8 w-8 object-contain sm:h-9 sm:w-9 md:h-10 md:w-10"
                priority
              />
            </div>

            <div className="min-w-0 leading-snug">
              <span
                className={`block truncate font-display text-[0.95rem] font-bold tracking-wide transition-colors duration-300 sm:text-base md:text-lg ${
                  transparent ? "text-white" : "text-gray-900"
                }`}
              >
                SAI VISION
              </span>
              <span
                className={`block text-[0.58rem] font-extrabold uppercase tracking-[0.18em] transition-colors duration-300 sm:text-[0.62rem] ${
                  transparent ? "text-orange-300" : "text-orange-600"
                }`}
              >
                Engineering
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV (lg+) ── */}
          <nav
            className="hidden lg:flex lg:items-center lg:gap-0.5 xl:gap-1"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((item) => {
              const active = isActive(item.href);

              if (item.hasDropdown) {
                return (
                  <div key={item.href} className="products-dropdown-container relative">
                    <button
                      type="button"
                      aria-expanded={productsOpen}
                      onClick={() => setProductsOpen(!productsOpen)}
                      className={`group relative flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-1 xl:px-3.5 ${
                        active
                          ? transparent
                            ? "text-orange-300"
                            : "text-orange-700"
                          : transparent
                            ? "text-white/88 hover:text-white"
                            : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {/* Active indicator */}
                      <span
                        className={`absolute bottom-0.5 left-3 right-3 h-[2px] origin-left rounded-full bg-orange-500 transition-transform duration-200 ${
                          active ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {productsOpen && (
                      <div className="absolute left-1/2 mt-2 w-72 -translate-x-1/2 animate-slide-down rounded-xl border border-gray-100 bg-white p-2 shadow-xl ring-1 ring-black/5">
                        <Link
                          href="/products"
                          className="block rounded-lg px-4 py-2 text-sm font-bold text-gray-900 hover:bg-orange-50 hover:text-orange-700"
                        >
                          View All Products
                        </Link>
                        <div className="my-1 border-t border-gray-100" />
                        <ul className="space-y-1">
                          {categories.map((cat) => (
                            <li key={cat.slug}>
                              <Link
                                href={`/products/${cat.slug}`}
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                              >
                                {cat.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative rounded-md px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-1 xl:px-3.5 ${
                    active
                      ? transparent
                        ? "text-orange-300"
                        : "text-orange-700"
                      : transparent
                        ? "text-white/88 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                  {/* Active / hover indicator */}
                  <span
                    className={`absolute bottom-0.5 left-3 right-3 h-[2px] origin-left rounded-full bg-orange-500 transition-transform duration-200 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ── DESKTOP CTA ── */}
          <div className="hidden lg:block">
            <Link
              href="/request-quote"
              className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-bold tracking-wide shadow-md transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${
                isActive("/request-quote")
                  ? "bg-orange-800 text-white shadow-orange-900/30"
                  : "bg-orange-600 text-white shadow-orange-500/30 hover:bg-orange-700 hover:shadow-orange-500/40"
              }`}
            >
              Request a Quote
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* ── MOBILE CONTROLS ── */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Compact quote link (sm+) */}
            <Link
              href="/request-quote"
              className="hidden items-center gap-1 rounded-lg bg-orange-600 px-3 py-2 text-xs font-bold text-white shadow-sm hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:inline-flex"
            >
              Quote
            </Link>

            {/* Hamburger / Close button */}
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav-drawer"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              onClick={toggleMenu}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-1 ${
                transparent
                  ? "border-white/30 text-white hover:border-white/50 hover:bg-white/10"
                  : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <div className="flex w-5 flex-col gap-[5px]">
                <span
                  className={`h-0.5 w-full origin-center rounded-full bg-current transition-all duration-300 ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                    open ? "scale-x-0 opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full origin-center rounded-full bg-current transition-all duration-300 ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ──────────────────── MOBILE DRAWER ──────────────────── */}

      {/* Backdrop overlay */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/55 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer panel */}
      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(88vw,360px)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer top accent */}
        <div
          className="h-[3px] w-full shrink-0"
          style={{
            background: "linear-gradient(90deg, #c2410c 0%, #f97316 45%, #fbbf24 100%)",
          }}
        />

        {/* Drawer header */}
        <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-5 py-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5"
            aria-label="Sai Vision Engineering — Home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 ring-1 ring-orange-200/60">
              <Image
                src="/images/brand/logo-source.png"
                alt="Sai Vision Engineering logo"
                width={36}
                height={36}
                className="h-7 w-7 object-contain"
              />
            </div>
            <div>
              <span className="block font-display text-sm font-bold tracking-wide text-gray-900">
                SAI VISION
              </span>
              <span className="block text-[0.55rem] font-extrabold uppercase tracking-[0.18em] text-orange-600">
                Engineering
              </span>
            </div>
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="flex h-8 w-8 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile navigation">
          <ul className="space-y-1" role="list">
            {NAV_LINKS.map((item) => {
              const active = isActive(item.href);

              if (item.hasDropdown) {
                return (
                  <li key={item.href} className="space-y-1">
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between rounded-lg px-4 py-3.5 text-[0.9375rem] font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange-500 ${
                        active
                          ? "border-l-[3px] border-orange-600 bg-orange-50 pl-[calc(1rem-3px)] text-orange-700"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                    <ul className="pl-6 pr-2 space-y-1">
                      {categories.map((cat) => (
                        <li key={cat.slug}>
                          <Link
                            href={`/products/${cat.slug}`}
                            onClick={closeMenu}
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          >
                            {cat.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-lg px-4 py-3.5 text-[0.9375rem] font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange-500 ${
                      active
                        ? "border-l-[3px] border-orange-600 bg-orange-50 pl-[calc(1rem-3px)] text-orange-700"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <svg
                        className="h-4 w-4 text-orange-600"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          d="M6 4l4 4-4 4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer CTAs */}
        <div className="shrink-0 space-y-2.5 border-t border-gray-100 px-5 pb-6 pt-4">
          <Link
            href="/request-quote"
            onClick={closeMenu}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-3.5 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
          >
            Request a Quote
            <svg
              className="h-4 w-4"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
