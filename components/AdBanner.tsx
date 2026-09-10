"use client";

interface AdBannerProps {
  slot?: string;
  format?: "auto" | "horizontal" | "rectangle";
  className?: string;
}

export default function AdBanner({ slot, className = "" }: AdBannerProps) {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  // Se já tiver client ID real do AdSense configurado
  if (clientId && clientId.startsWith("ca-pub-") && slot) {
    return (
      <div className={`my-8 text-center overflow-hidden ${className}`}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={clientId}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Se ainda não houver anúncio ativo, não renderiza nada para manter o site 100% limpo e profissional
  return null;
}
