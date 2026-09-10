import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://encurtabr.com.br");
const gscVerification =
  process.env.NEXT_PUBLIC_GSC_VERIFICATION ||
  "qH9gltE4Lk1p5ONSBCSMwkXGR9eqixIDruwOJLPqlZQ";
const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EncurtaBR | Encurtador de Links e QR Code Grátis",
    template: "%s | EncurtaBR",
  },
  description:
    "Encurte links longos, gere QR Codes em alta resolução e crie URLs com parâmetros UTM em segundos. O encurtador mais rápido e seguro do Brasil.",
  keywords: [
    "encurtador de link",
    "encurtar url",
    "gerador de qr code",
    "link curto",
    "gerador utm",
    "encurtador de link gratuito",
    "link instagram",
    "utm instagram",
  ],
  authors: [{ name: "EncurtaBR" }],
  creator: "EncurtaBR",
  publisher: "EncurtaBR",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "EncurtaBR | Encurtador de Links e QR Code Grátis",
    description:
      "Transforme links longos em URLs curtas, gere QR Codes personalizados e acompanhe seus cliques com o EncurtaBR.",
    siteName: "EncurtaBR",
  },
  twitter: {
    card: "summary_large_image",
    title: "EncurtaBR | Encurtador de Links e QR Code Grátis",
    description:
      "Transforme links longos em URLs curtas e gere QR Codes em segundos.",
  },
  verification: {
    google: gscVerification || undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Google Search Console Verification Tag */}
        <meta
          name="google-site-verification"
          content="qH9gltE4Lk1p5ONSBCSMwkXGR9eqixIDruwOJLPqlZQ"
        />
        {/* Google AdSense Script (quando aprovado) */}
        {adsenseId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
          />
        )}
        {/* Schema.org WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "EncurtaBR",
              url: siteUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
