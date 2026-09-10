import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://encurta-br.vercel.app");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/*/stats"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
