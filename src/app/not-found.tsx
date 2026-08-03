import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[70vh] flex-col items-center justify-center py-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink-950 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-ink-800">
        The page you requested is unavailable. Return home or browse the product catalog.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">
          Go Home
        </Link>
        <Link href="/products" className="btn btn-secondary">
          View Products
        </Link>
      </div>
    </section>
  );
}
