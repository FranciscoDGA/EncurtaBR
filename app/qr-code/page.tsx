import { Metadata } from "next";
import QrCodeGenerator from "@/components/QrCodeGenerator";
import AdBanner from "@/components/AdBanner";
import { QrCode, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Gerador de QR Code Gr�tis | EncurtaBR",
  description: "Crie e baixe QR Codes personalizados em alta resolu��o para links, WhatsApp, redes sociais e produtos. R�pido, gr�tis e sem cadastro.",
  alternates: {
    canonical: "/qr-code",
  },
};

export default function QrCodePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full mb-3">
          <QrCode className="w-3.5 h-3.5" />
          Ferramenta Gratuita
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
          Gerador de QR Code Online
        </h1>
        <p className="mt-3 text-slate-500 text-base">
          Gere c�digos QR para qualquer URL, texto ou rede social e fa�a download em formato PNG de alta qualidade.
        </p>
      </div>

      {/* Componente Interativo */}
      <QrCodeGenerator />

      <AdBanner className="my-10" />

      {/* Se��o Explicativa para SEO & AdSense */}
      <div className="mt-12 bg-white border border-line rounded-2xl p-8 sm:p-10 space-y-6">
        <h2 className="text-2xl font-bold text-ink">Como usar o gerador de QR Code?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <span className="text-brand-600 font-extrabold text-lg">1. Insira o destino</span>
            <p className="text-sm text-slate-600">
              Cole a URL do seu site, link do WhatsApp, chave PIX ou perfil em redes sociais.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-brand-600 font-extrabold text-lg">2. Personalize</span>
            <p className="text-sm text-slate-600">
              Escolha a cor que combina com sua marca e selecione o tamanho desejado para impress�o.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-brand-600 font-extrabold text-lg">3. Baixe e use</span>
            <p className="text-sm text-slate-600">
              Clique em baixar imagem PNG e adicione em embalagens, panfletos, cart�es de visita ou sites.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-line flex flex-wrap gap-6 text-xs font-semibold text-slate-500">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Sem expira��o</span>
          <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-amber-500" /> Leitura instant�nea</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-600" /> 100% seguro e privado</span>
        </div>
      </div>
    </div>
  );
}
