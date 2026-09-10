import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://encurtabr.com.br";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/*/stats"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
