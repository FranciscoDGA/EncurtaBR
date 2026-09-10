import { Metadata } from "next";
import UtmBuilder from "@/components/UtmBuilder";
import AdBanner from "@/components/AdBanner";
import { Link2, Target, BarChart2, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Gerador de UTM para Marketing e Instagram | EncurtaBR",
  description: "Crie URLs rastreáveis com parâmetros UTM para Instagram, Facebook Ads, Google Ads e campanhas. Acompanhe a origem de cada clique no Google Analytics.",
  alternates: {
    canonical: "/utm",
  },
};

export default function UtmPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full mb-3">
          <Target className="w-3.5 h-3.5" />
          Rastreamento de Campanhas
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
          Gerador de Links UTM para Marketing
        </h1>
        <p className="mt-3 text-slate-500 text-base">
          Adicione parâmetros UTM nas suas URLs para saber exatamente de onde vem cada venda e clique no Google Analytics.
        </p>
      </div>

      {/* Componente Interativo */}
      <UtmBuilder />

      <AdBanner className="my-10" />

      {/* Seção Explicativa para SEO & AdSense */}
      <div className="mt-12 bg-white border border-line rounded-2xl p-8 sm:p-10 space-y-6">
        <h2 className="text-2xl font-bold text-ink">O que são parâmetros UTM e por que usar?</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Os parâmetros UTM (Urchin Tracking Module) são pequenos trechos adicionados ao final de um link que identificam a campanha, a rede social ou o anúncio exato que levou o usuário ao seu site.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 bg-slate-50 rounded-xl border border-line">
            <span className="font-bold text-slate-800 text-sm block mb-1">utm_source (Origem)</span>
            <p className="text-xs text-slate-500">Ex: instagram, google, newsletter. Identifica a plataforma de onde veio o visitante.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-line">
            <span className="font-bold text-slate-800 text-sm block mb-1">utm_medium (Meio)</span>
            <p className="text-xs text-slate-500">Ex: social, cpc, email, stories. O tipo de canal ou meio de divulgação utilizado.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-line">
            <span className="font-bold text-slate-800 text-sm block mb-1">utm_campaign (Campanha)</span>
            <p className="text-xs text-slate-500">Ex: black-friday, lancamento. O nome específico da ação promocional.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-line">
            <span className="font-bold text-slate-800 text-sm block mb-1">utm_content (Conteúdo)</span>
            <p className="text-xs text-slate-500">Ex: botao-azul, link-bio. Útil para testes A/B ou diferenciar links no mesmo post.</p>
          </div>
        </div>

        <div className="pt-6 border-t border-line flex flex-wrap gap-6 text-xs font-semibold text-slate-500">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Compatível com Google Analytics 4 (GA4)</span>
          <span className="flex items-center gap-1.5"><BarChart2 className="w-4 h-4 text-brand-600" /> Rastreamento 100% preciso</span>
        </div>
      </div>
    </div>
  );
}
