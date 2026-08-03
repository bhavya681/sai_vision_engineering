import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { categories, products } from "@/data/products";
import { industries } from "@/data/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.siteUrl;
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/industries",
    "/capabilities",
    "/resources",
    "/contact",
    "/request-quote",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${base}/products/${c.slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/products/${p.category}/${p.slug}`,
    lastModified: new Date(),
  }));

  const industryRoutes = industries.map((i) => ({
    url: `${base}/industries/${i.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...industryRoutes];
}
