import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso | EncurtaBR",
  description: "Termos e condições gerais de uso da plataforma EncurtaBR.",
  alternates: {
    canonical: "/termos",
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="bg-white border border-line rounded-3xl p-6 sm:p-12 shadow-sm space-y-8">
        <div>
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
            Regras de Utilização
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mt-2">
            Termos de Uso
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Última atualização: Setembro de 2026
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-sm text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-ink">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar os serviços do <strong>EncurtaBR</strong>, você declara ter lido, compreendido e aceito integralmente estes Termos de Uso. Caso não concorde com qualquer disposição aqui estabelecida, solicitamos que não utilize nossos serviços.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-ink">2. Descrição dos Serviços</h2>
            <p>
              O EncurtaBR oferece ferramentas gratuitas de encurtamento de URLs, geração de QR Codes, criação de links rastreáveis com parâmetros UTM e monitoramento de estatísticas básicas de cliques.
            </p>
            <p>
              Nos reservamos o direito de atualizar, modificar ou descontinuar qualquer recurso a qualquer momento, visando aprimorar a estabilidade e a segurança da plataforma.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-ink">3. Responsabilidade do Usuário</h2>
            <p>
              O usuário é o único responsável pelo conteúdo das URLs submetidas e compartilhadas através do EncurtaBR. O serviço não deve ser utilizado para:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Qualquer atividade ilegal sob a legislação brasileira ou internacional;</li>
              <li>Envio não solicitado em massa (SPAM);</li>
              <li>Hospedagem ou direcionamento para malwares, spywares ou páginas de clonagem (phishing);</li>
              <li>Violação de direitos autorais ou marcas registradas de terceiros.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-ink">4. Cancelamento e Exclusão de Links</h2>
            <p>
              O EncurtaBR reserva-se o direito de suspender, redirecionar ou desativar permanentemente qualquer link que viole estes Termos de Uso, sem necessidade de aviso prévio ou indenização ao usuário infrator.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-ink">5. Isenção de Garantias</h2>
            <p>
              Nossos serviços são prestados "como estão" ("as is"), sem garantias de disponibilidade ininterrupta de 100% do tempo. Empregamos os melhores padrões de infraestrutura na nuvem para assegurar a máxima disponibilidade e rapidez nos redirecionamentos.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
