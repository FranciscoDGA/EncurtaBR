import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, Cookie, FileText } from "lucide-react";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "Política de Privacidade e Cookies | EncurtaBR",
  description: "Conheça a política de privacidade, uso de cookies e conformidade com a LGPD e diretrizes do Google AdSense do EncurtaBR.",
  alternates: {
    canonical: "/privacidade",
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="bg-white border border-line rounded-3xl p-6 sm:p-12 shadow-sm space-y-8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Privacidade & Proteção de Dados
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Política de Privacidade e Cookies
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Última atualização: Setembro de 2026 · Em total conformidade com a LGPD (Lei nº 13.709/2018)
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">1. Introdução e Compromisso</h2>
            <p>
              A sua privacidade e a segurança das suas informações são prioridades fundamentais para o <strong>EncurtaBR</strong> (disponível através do domínio <code>encurtabr.com.br</code> e suas aplicações vinculadas). Esta Política de Privacidade tem por finalidade esclarecer, de forma clara e transparente, como coletamos, tratamos, armazenamos e protegemos os seus dados ao utilizar nossas ferramentas digitais de encurtamento de links, geração de códigos QR e criação de URLs rastreáveis com parâmetros UTM.
            </p>
            <p>
              Ao navegar pelo EncurtaBR e usufruir de nossos utilitários, você declara expressamente concordar com os termos desta política, a qual observa integralmente os ditames da Lei Geral de Proteção de Dados Pessoais do Brasil (LGPD, Lei Federal nº 13.709/2018), do Marco Civil da Internet (Lei nº 12.965/2014) e as melhores práticas globais de segurança da informação.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">2. Dados que Coletamos e Suas Finalidades</h2>
            <p>
              Nossa plataforma foi concebida com foco em minimização de dados (<em>Privacy by Design</em>). Isso significa que exigimos o mínimo absoluto de informações para fornecer o serviço com máxima velocidade:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Links e URLs Fornecidas:</strong> Quando você encurta um endereço web, armazenamos a URL original em nossos bancos de dados para que possamos realizar o redirecionamento automático (código HTTP 307) quando alguém acessar o código curto gerado.
              </li>
              <li>
                <strong>Métricas Anônimas de Acesso:</strong> Ao ocorrer um clique em um link encurtado, nosso sistema registra apenas metadados técnicos agregados e anônimos: data e hora exata do clique, cabeçalho de referência (referrer — informando, por exemplo, se o clique veio do Instagram, WhatsApp ou navegador direto) e tipo de dispositivo genérico. Nós <strong>não</strong> rastreamos a identidade civil dos visitantes nem cruzamos esses dados com perfis pessoais.
              </li>
              <li>
                <strong>Logs Técnicos de Conexão:</strong> Como exigido pelo Artigo 15 do Marco Civil da Internet e para a proteção da nossa infraestrutura contra ataques cibernéticos (DDoS, tentativas de invasão e robôs de spam), nossos servidores registram temporariamente dados padrão de cabeçalho e endereço IP de requisições.
              </li>
            </ul>
          </section>

          <section className="space-y-3 p-6 bg-slate-50 border border-line rounded-2xl">
            <h2 className="text-xl font-bold text-ink flex items-center gap-2">
              <Cookie className="w-5 h-5 text-brand-600" />
              3. Cookies e Publicidade do Google AdSense
            </h2>
            <p>
              O EncurtaBR é um serviço gratuito para o usuário final, sendo mantido e financiado através da veiculação de anúncios publicitários online, principalmente por meio do programa <strong>Google AdSense</strong> (operado pela Google LLC e suas afiliadas):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                <strong>Cookies de Terceiros:</strong> O Google, como fornecedor terceirizado, utiliza cookies (incluindo o cookie DoubleClick DART) para exibir anúncios em nosso site com base nas visitas anteriores que você realizou a este ou a outros sites na rede mundial de computadores.
              </li>
              <li>
                <strong>Publicidade Personalizada:</strong> O uso de cookies para anúncios permite ao Google e a redes parceiras veicular anúncios personalizados e relevantes com base nos interesses dos usuários.
              </li>
              <li>
                <strong>Como Desativar a Publicidade Personalizada:</strong> Os usuários podem desativar o uso de cookies de publicidade personalizada a qualquer momento acessando a página oficial de{" "}
                <a
                  href="https://adssettings.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 font-bold underline"
                >
                  Configurações de Anúncios do Google
                </a>
                .
              </li>
              <li>
                <strong>Desativação Independente:</strong> Você também pode optar por desativar cookies de terceiros para publicidade comportamental através do portal independente da Network Advertising Initiative em{" "}
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 font-bold underline"
                >
                  www.aboutads.info/choices
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">4. Direitos do Usuário sob a LGPD</h2>
            <p>
              Em harmonia com o Artigo 18 da Lei Geral de Proteção de Dados (LGPD), asseguramos a você todos os direitos como titular de dados pessoais, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>A confirmação da existência de qualquer tratamento de dados;</li>
              <li>O acesso aos dados eventualmente tratados;</li>
              <li>A correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>A anonimização, bloqueio ou eliminação de dados desnecessários ou em desconformidade com a legislação;</li>
              <li>A revogação de consentimento a qualquer instante, mediante manifestação gratuita.</li>
            </ul>
            <p className="pt-1">
              Para exercer qualquer um desses direitos, basta entrar em contato direto com o nosso Encarregado de Proteção de Dados (DPO) através da página de{" "}
              <Link href="/contato" className="text-brand-600 font-bold underline">
                Contato e Suporte
              </Link>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">5. Política contra Links Abusivos, Phishing e Golpes</h2>
            <p>
              O EncurtaBR adota tolerância zero contra qualquer forma de uso indevido da plataforma. É estritamente proibido criar links ou QR Codes que direcionem para:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Páginas falsas com intenção de roubo de credenciais ou senhas bancárias (phishing);</li>
              <li>Arquivos infectados com vírus, malwares, spywares ou ransomware;</li>
              <li>Disseminação massiva de mensagens indesejadas (SPAM);</li>
              <li>Conteúdo que viole direitos de propriedade intelectual ou leis federais.</li>
            </ul>
            <p>
              Nossa equipe monitora denúncias ativamente e desativa links maliciosos imediatamente assim que identificados, além de cooperar com as autoridades judiciais competentes quando formalmente solicitado.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">6. Alterações e Atualizações Desta Política</h2>
            <p>
              Reservamo-nos o direito de aprimorar ou atualizar esta Política de Privacidade sempre que necessário, visando refletir evoluções em nossas funcionalidades ou adequações normativas. A data da versão mais recente estará sempre disponível no início deste documento.
            </p>
          </section>
        </div>

        <AdBanner />
      </div>
    </div>
  );
}
