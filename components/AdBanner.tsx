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

  // Placeholder elegante de anúncio (conforme layout de referência)
  return (
    <div
      className={`my-8 min-h-[90px] border border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center bg-white/70 text-slate-400 text-xs px-4 py-3 select-none ${className}`}
    >
      <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-400">
        Publicidade
      </span>
      <span className="text-[11px] text-slate-300 mt-0.5">
        Espaço reservado para anúncios do Google AdSense
      </span>
    </div>
  );
}
