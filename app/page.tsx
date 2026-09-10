import Link from "next/link";
import ShortenerForm from "@/components/ShortenerForm";
import QrCodeGenerator from "@/components/QrCodeGenerator";
import UtmBuilder from "@/components/UtmBuilder";
import AdBanner from "@/components/AdBanner";
import {
  Link2,
  QrCode,
  Target,
  BarChart3,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  HelpCircle,
} from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="pt-16 pb-14 px-4 sm:px-6 text-center border-b border-line bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-bold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            Ferramentas para links inteligentes
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-ink tracking-tight leading-[1.08] max-w-3xl mx-auto">
            Transforme links longos em <span className="text-brand-600">links simples</span>.
          </h1>

          <p className="mt-5 text-base sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Encurte URLs, crie QR Codes profissionais e gere links rastreáveis para suas campanhas em um só lugar.
          </p>

          {/* FORMULÁRIO ENCURTADOR */}
          <div id="encurtar" className="mt-8">
            <ShortenerForm />
          </div>

          {/* TRUST BADGES */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-8 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Gratuito para começar
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" /> Redirecionamento instantâneo
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-600" /> Seguro e sem instalação
            </span>
          </div>
        </div>
      </section>

      {/* BANNER DE ANÚNCIO (TOPO) */}
      <div className="max-w-4xl mx-auto px-4">
        <AdBanner />
      </div>

      {/* FERRAMENTAS DISPONÍVEIS */}
      <section id="ferramentas" className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight">
              Tudo o que você precisa para seus links
            </h2>
            <p className="mt-2 text-slate-500 text-sm sm:text-base">
              Uma plataforma completa para criar, divulgar e entender o alcance de cada clique.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Encurtador */}
            <article className="p-6 bg-white border border-line rounded-2xl hover:border-brand-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold mb-4">
                  <Link2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-ink text-lg mb-2">Encurtador de Links</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Transforme URLs gigantes em endereços curtos, elegantes e fáceis de compartilhar.
                </p>
              </div>
              <a href="#encurtar" className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700">
                Encurtar agora <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* Card 2: QR Code */}
            <article className="p-6 bg-white border border-line rounded-2xl hover:border-brand-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4">
                  <QrCode className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-ink text-lg mb-2">Gerador de QR Code</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Gere QR Codes personalizáveis para cardápios, redes sociais, produtos e eventos.
                </p>
              </div>
              <Link href="/qr-code" className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700">
                Criar QR Code <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>

            {/* Card 3: UTM */}
            <article className="p-6 bg-white border border-line rounded-2xl hover:border-brand-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-ink text-lg mb-2">Gerador de UTM</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Crie URLs rastreáveis com parâmetros UTM para Instagram, Facebook Ads e campanhas.
                </p>
              </div>
              <Link href="/utm" className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700">
                Gerar link UTM <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>

            {/* Card 4: Estatísticas */}
            <article className="p-6 bg-white border border-line rounded-2xl hover:border-brand-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold mb-4">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-ink text-lg mb-2">Estatísticas</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Descubra quantas pessoas clicaram nos seus links em tempo real com facilidade.
                </p>
              </div>
              <a href="#encurtar" className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700">
                Começar a medir <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="py-16 px-4 sm:px-6 bg-white border-y border-line">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight">
              Como funciona o EncurtaBR?
            </h2>
            <p className="mt-2 text-slate-500 text-sm sm:text-base">
              Três passos simples para compartilhar seus links com facilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-line">
              <span className="text-brand-600 font-black text-2xl">01</span>
              <h3 className="font-bold text-ink text-lg mt-3 mb-2">Cole seu link longo</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Insira qualquer link no campo de encurtamento: site, loja virtual, link de afiliado ou rede social.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-line">
              <span className="text-brand-600 font-black text-2xl">02</span>
              <h3 className="font-bold text-ink text-lg mt-3 mb-2">Gere o link curto</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Em milissegundos criamos uma URL compacta e geramos um QR Code correspondente para download.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-line">
              <span className="text-brand-600 font-black text-2xl">03</span>
              <h3 className="font-bold text-ink text-lg mt-3 mb-2">Compartilhe e meça</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Divulgue em bios do Instagram, WhatsApp ou campanhas e acompanhe o total de cliques recebidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO QR CODE EMBUTIDA */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
              Praticidade
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-ink mt-1">
              Gere seu QR Code agora mesmo
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Experimente a ferramenta abaixo sem sair da página inicial.
            </p>
          </div>
          <QrCodeGenerator initialUrl="https://encurtabr.com.br" />
        </div>
      </section>

      {/* SEÇÃO UTM EMBUTIDA */}
      <section className="py-16 px-4 sm:px-6 bg-white border-t border-line">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
              Marketing Digital
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-ink mt-1">
              Construtor de Links UTM para Instagram e Campanhas
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Monitore a conversão dos seus anúncios e posts em redes sociais.
            </p>
          </div>
          <UtmBuilder />
        </div>
      </section>

      {/* BANNER DE ANÚNCIO (MEIO) */}
      <div className="max-w-4xl mx-auto px-4">
        <AdBanner />
      </div>

      {/* FAQ SECTION (Excelente para SEO e GSC) */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-brand-600" />
              Perguntas Frequentes
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Tire suas dúvidas sobre o EncurtaBR e nossos recursos.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 bg-white border border-line rounded-2xl">
              <h3 className="font-bold text-ink text-sm sm:text-base">
                O EncurtaBR é totalmente gratuito?
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                Sim! Você pode encurtar links, gerar códigos QR e criar parâmetros UTM sem pagar nada e sem necessidade de criar conta.
              </p>
            </div>

            <div className="p-5 bg-white border border-line rounded-2xl">
              <h3 className="font-bold text-ink text-sm sm:text-base">
                Os links encurtados têm data de expiração?
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                Não. Os links criados permanecem ativos indefinidamente em nossa base de dados, garantindo que seus materiais impressos e digitais continuem funcionando.
              </p>
            </div>

            <div className="p-5 bg-white border border-line rounded-2xl">
              <h3 className="font-bold text-ink text-sm sm:text-base">
                Como vejo quantas pessoas clicaram no meu link?
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                Basta adicionar <code className="text-brand-600 font-mono">/stats</code> ao final do seu link encurtado (por exemplo, <code className="text-brand-600 font-mono">encurtabr.com.br/codigo/stats</code>) para abrir o painel com o contador de cliques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-8 sm:p-14 text-center text-white shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-3">
            Comece a simplificar seus links hoje.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Crie seu primeiro link curto gratuitamente e sinta a diferença na sua divulgação.
          </p>
          <a
            href="#encurtar"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-brand-600/30 active:scale-[0.98]"
          >
            Encurtar um link agora →
          </a>
        </div>
      </section>
    </div>
  );
}
