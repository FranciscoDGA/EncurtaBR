import { Metadata } from "next";
import Link from "next/link";
import { Mail, CheckCircle2, Shield, Zap, Sparkles } from "lucide-react";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "Sobre e Contato | EncurtaBR",
  description: "Conheça o EncurtaBR: nossa missão de simplificar links, oferecer QR Codes gratuitos e potencializar campanhas no Brasil.",
  alternates: {
    canonical: "/sobre",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="bg-white border border-line rounded-3xl p-6 sm:p-12 shadow-sm space-y-10">
        <div>
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
            Nossa Proposta
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mt-2">
            Sobre o EncurtaBR
          </h1>
          <p className="text-base text-slate-600 mt-3 max-w-2xl leading-relaxed">
            O <strong>EncurtaBR</strong> nasceu com a missão de fornecer uma suíte de utilidades digitais rápida, intuitiva e sem burocracia para criadores de conteúdo, profissionais de marketing, e-commerces e empreendedores no Brasil.
          </p>
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 bg-slate-50 border border-line rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center font-bold mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-ink text-base mb-1">Velocidade Instantânea</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Infraestrutura de ponta na borda (Edge Network) que garante redirecionamentos em milissegundos para seus clientes.
            </p>
          </div>

          <div className="p-5 bg-slate-50 border border-line rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-ink text-base mb-1">Privacidade e Respeito</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Totalmente em conformidade com a LGPD. Não vendemos dados de navegação e respeitamos sua privacidade.
            </p>
          </div>

          <div className="p-5 bg-slate-50 border border-line rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-ink text-base mb-1">100% Gratuito</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Você pode encurtar links, gerar QR Codes e criar URLs com parâmetros UTM sem necessidade de cadastro ou cartão.
            </p>
          </div>
        </div>

        {/* Informações de Contato */}
        <div className="p-8 bg-slate-50 border border-line rounded-2xl space-y-4">
          <h2 className="text-xl font-bold text-ink flex items-center gap-2">
            <Mail className="w-5 h-5 text-brand-600" />
            Fale Conosco e Denúncias
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Dúvidas, sugestões de novos recursos, denúncias de links suspeitos ou parcerias comerciais? Nossa equipe está pronta para atendê-lo:
          </p>
          <div className="p-4 bg-white border border-line rounded-xl inline-block text-sm font-mono font-semibold text-brand-700">
            contato@encurtabr.com.br
          </div>
          <p className="text-xs text-slate-400">
            Tempo médio de resposta: até 24 horas úteis.
          </p>
        </div>

        <AdBanner />
      </div>
    </div>
  );
}
