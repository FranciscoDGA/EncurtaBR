import { Metadata } from "next";
import Link from "next/link";
import { FileText, CheckCircle2, AlertTriangle } from "lucide-react";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "Termos de Uso e Condições Gerais | EncurtaBR",
  description: "Termos e condições gerais de uso da plataforma EncurtaBR para encurtamento de URLs, criação de QR Codes e rastreamento de campanhas.",
  alternates: {
    canonical: "/termos",
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="bg-white border border-line rounded-3xl p-6 sm:p-12 shadow-sm space-y-8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full mb-3">
            <FileText className="w-3.5 h-3.5" />
            Termos Legais
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Termos e Condições de Uso
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Última atualização: Setembro de 2026
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">1. Aceitação dos Termos</h2>
            <p>
              Bem-vindo ao <strong>EncurtaBR</strong>. Ao acessar o site ou utilizar qualquer uma de nossas ferramentas (encurtador de links, gerador de QR Code, gerador de links UTM ou visualizador de estatísticas), você concorda expressamente em vincular-se a estes Termos de Uso. Caso discorde de qualquer disposição, solicitamos que não utilize a plataforma.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">2. Objeto e Serviços Prestados</h2>
            <p>
              O EncurtaBR disponibiliza utilitários digitais gratuitos, incluindo mas não limitados a:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Encurtamento de links longos para facilitar a digitação, estética e compartilhamento;</li>
              <li>Geração instantânea e download de códigos QR para leitura em smartphones;</li>
              <li>Construtor de parâmetros UTM para rastreamento de tráfego em campanhas de marketing digital;</li>
              <li>Exibição de dados estatísticos agregados de cliques.</li>
            </ul>
          </section>

          <section className="space-y-3 p-6 bg-red-50/70 border border-red-200 rounded-2xl">
            <h2 className="text-xl font-bold text-red-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              3. Uso Proibido e Regras de Conduta
            </h2>
            <p className="text-red-900 text-sm">
              É estritamente vedado usar o EncurtaBR para fins fraudulentos ou que violem os direitos de terceiros. Especificamente, é proibido encurtar ou propagar:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-red-800 text-sm">
              <li>Páginas de clonagem, roubo de credenciais ou golpes bancários (phishing);</li>
              <li>Distribuição de códigos maliciosos, vírus, spywares ou trojans;</li>
              <li>Disparo massivo de e-mails ou mensagens não solicitadas (SPAM);</li>
              <li>Conteúdo que viole direitos autorais, marcas registradas ou propriedade intelectual;</li>
              <li>Material violento, odioso ou ilícito segundo o Código Penal Brasileiro.</li>
            </ul>
            <p className="text-red-900 text-xs mt-2 font-medium">
              O EncurtaBR reserva-se o direito soberano de remover, bloquear ou redirecionar imediatamente qualquer link que viole estas regras, sem aviso prévio.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">4. Disponibilidade e Isenção de Responsabilidade</h2>
            <p>
              O serviço é disponibilizado "no estado em que se encontra" (<em>as is</em>). Embora empreguemos infraestrutura em nuvem de alta disponibilidade (Edge Network com latência reduzida), não oferecemos garantia absoluta de funcionamento ininterrupto ou livre de falhas temporárias causadas por instabilidades em telecomunicações.
            </p>
            <p>
              O EncurtaBR não é responsável pelo conteúdo, veracidade, segurança ou práticas dos sites de terceiros aos quais os links encurtados direcionam. O usuário é o único e exclusivo responsável pelo destino do link que encurtou.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">5. Publicidade e Links de Terceiros</h2>
            <p>
              O site é financiado através da exibição de anúncios publicitários (incluindo Google AdSense). A exibição desses anúncios é regida pelas diretrizes do provedor e por nossa Política de Privacidade.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">6. Lei Aplicável e Foro</h2>
            <p>
              Estes Termos são regidos pelas leis vigentes na República Federativa do Brasil. Quaisquer disputas serão submetidas ao foro do domicílio do administrador do serviço, renunciando a qualquer outro por mais privilegiado que seja.
            </p>
          </section>
        </div>

        <AdBanner />
      </div>
    </div>
  );
}
