import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, Cookie } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade | EncurtaBR",
  description: "Política de privacidade e proteção de dados do EncurtaBR em conformidade com a LGPD e Google AdSense.",
  alternates: {
    canonical: "/privacidade",
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="bg-white border border-line rounded-3xl p-6 sm:p-12 shadow-sm space-y-8">
        <div>
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
            Transparência & Segurança
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mt-2">
            Política de Privacidade
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Última atualização: Setembro de 2026
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-sm text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-ink">1. Introdução</h2>
            <p>
              A sua privacidade é de extrema importância para nós. Esta Política de Privacidade descreve como o <strong>EncurtaBR</strong> coleta, utiliza, armazena e protege as informações geradas quando você utiliza nossa plataforma de encurtamento de links, geração de QR Codes e rastreamento de campanhas.
            </p>
            <p>
              Ao utilizar o EncurtaBR, você concorda com os termos descritos nesta política, em total conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-ink">2. Informações que Coletamos</h2>
            <p>O EncurtaBR foi projetado para coletar o mínimo necessário de dados:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>URLs e Links Fornecidos:</strong> Armazenamos a URL original que você submete para permitir o redirecionamento adequado e a criação do link encurtado.</li>
              <li><strong>Dados de Acesso aos Links (Estatísticas Anônimas):</strong> Quando alguém clica em um link encurtado, registramos dados não identificáveis pessoalmente como data/hora do clique, cabeçalho de referência (referrer) e tipo genérico de dispositivo/navegador. Não vinculamos essas estatísticas a identidades pessoais.</li>
              <li><strong>Informações de Uso do Site:</strong> Dados anônimos de navegação coletados via ferramentas de métricas para aprimorar o desempenho e a estabilidade dos servidores.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-ink">3. Cookies e Tecnologias de Anúncios (Google AdSense)</h2>
            <p>
              Nosso site pode exibir anúncios fornecidos pelo <strong>Google AdSense</strong> e parceiros de publicidade.
            </p>
            <p>
              O Google, como fornecedor terceirizado, utiliza cookies (incluindo o cookie DoubleClick DART) para veicular anúncios com base nas visitas anteriores dos usuários a este ou a outros sites na internet.
            </p>
            <p>
              Os usuários podem optar por desativar o uso de cookies para publicidade personalizada visitando as{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 underline"
              >
                Configurações de Anúncios do Google
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-ink">4. Links Proibidos e Segurança</h2>
            <p>
              É expressamente proibido utilizar o EncurtaBR para disseminar:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Spam, phishing, golpes ou links maliciosos contendo malwares, cavalos de Troia ou vírus;</li>
              <li>Conteúdo ilícito, abusivo, que promova crimes ou violação de propriedade intelectual;</li>
              <li>Páginas destinadas a roubo de credenciais ou dados bancários.</li>
            </ul>
            <p>
              Links denunciados ou identificados como fraudulentos serão removidos imediatamente sem aviso prévio.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-ink">5. Contato sobre Privacidade</h2>
            <p>
              Caso tenha dúvidas sobre esta política ou queira solicitar a remoção de um link abusivo, entre em contato através da nossa página de{" "}
              <Link href="/sobre" className="text-brand-600 underline">
                Contato e Suporte
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
