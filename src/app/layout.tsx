import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/data/company";
import { AIChatWidget } from "@/components/ai/AIChatWidget";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.name} | Glass-Lined Equipment & Process Solutions`,
    template: `%s | ${company.name}`,
  },
  description: company.summary,
  icons: {
    icon: [
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-48.png", sizes: "192x192", type: "image/png" },
      { url: "/images/brand/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon-48.png",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: company.name,
    description: company.summary,
    type: "website",
    locale: "en_IN",
    siteName: company.name,
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description: company.summary,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    description: company.summary,
    url: company.siteUrl,
    email: company.contacts.emails[0],
    telephone: `+91-${company.contacts.phones[0].number}`,
    address: company.locations.map((loc) => ({
      "@type": "PostalAddress",
      streetAddress: loc.address,
      addressCountry: "IN",
    })),
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <AIChatWidget />
      </body>
    </html>
  );
}
