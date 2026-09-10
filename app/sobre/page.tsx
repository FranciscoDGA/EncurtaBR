import { Metadata } from "next";
import Link from "next/link";
import { Mail, CheckCircle2, Shield, Zap, Sparkles, Server, Globe2, HeartHandshake } from "lucide-react";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "Sobre o EncurtaBR | Missão, Tecnologia e Propósito",
  description: "Conheça a história, a missão e a infraestrutura por trás do EncurtaBR: utilitários digitais gratuitos, rápidos e seguros feitos para o público brasileiro.",
  alternates: {
    canonical: "/sobre",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="bg-white border border-line rounded-3xl p-6 sm:p-12 shadow-sm space-y-10">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            Nossa História & Missão
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Sobre o EncurtaBR
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-3xl leading-relaxed">
            O <strong>EncurtaBR</strong> é uma plataforma brasileira de utilidades digitais criada com o propósito de simplificar a forma como links, campanhas e QR Codes são compartilhados na internet.
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-600 space-y-4 leading-relaxed">
          <p>
            Muitas ferramentas tradicionais de encurtamento disponíveis na web tornaram-se lentas, repletas de telas intermediárias abusivas ou exigem cadastros burocráticos e planos pagos para funcionalidades básicas. Nós acreditamos que a internet precisa de ferramentas diretas, limpas e instantâneas.
          </p>
          <p>
            No <strong>EncurtaBR</strong>, você encurta uma URL em 1 clique, gera um QR Code em alta definição imediatamente e cria URLs com parâmetros UTM prontos para campanhas no Instagram, TikTok, Google Ads e WhatsApp, sem pagar nada por isso.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-50 border border-line rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center font-bold mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-ink text-base mb-1.5">Redirecionamento Rápido</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Infraestrutura distribuída com baixa latência para garantir que seus visitantes não esperem para chegar ao destino.
            </p>
          </div>

          <div className="p-6 bg-slate-50 border border-line rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-ink text-base mb-1.5">Segurança & LGPD</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Foco rigoroso em privacidade, combate a links maliciosos e respeito total às diretrizes da legislação brasileira.
            </p>
          </div>

          <div className="p-6 bg-slate-50 border border-line rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-ink text-base mb-1.5">Acesso 100% Livre</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Ferramentas completas disponíveis para produtores de conteúdo, e-commerces, profissionais liberais e agências.
            </p>
          </div>
        </div>

        <div className="p-8 bg-slate-50 border border-line rounded-2xl space-y-4">
          <h2 className="text-xl font-bold text-ink flex items-center gap-2">
            <Server className="w-5 h-5 text-brand-600" />
            Tecnologia de Ponta
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Desenvolvido utilizando as tecnologias mais modernas do ecossistema web, incluindo Next.js, TypeScript, banco de dados relacional distribuído e servidores na borda (Edge Network). Essa arquitetura proporciona estabilidade superior mesmo sob picos intensos de tráfego.
          </p>
          <div className="pt-2">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm"
            >
              <Mail className="w-4 h-4" />
              Fale com nossa equipe
            </Link>
          </div>
        </div>

        <AdBanner />
      </div>
    </div>
  );
}
