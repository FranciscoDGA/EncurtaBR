import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://encurta-br.vercel.app");

  const routes = [
    "",
    "/qr-code",
    "/utm",
    "/sobre",
    "/contato",
    "/privacidade",
    "/termos",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
