import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLinkByCode } from "@/lib/supabase";
import { formatNumber, formatDate } from "@/lib/utils";
import { ArrowLeft, ExternalLink, MousePointerClick, Calendar } from "lucide-react";
import AdBanner from "@/components/AdBanner";
import QrCodeGenerator from "@/components/QrCodeGenerator";

interface Props {
  params: { code: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Estatísticas do link /${params.code} | EncurtaBR`,
    description: `Acompanhe métricas e cliques do link encurtado /${params.code} em tempo real.`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function StatsPage({ params }: Props) {
  const link = await getLinkByCode(params.code);

  if (!link) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://encurtabr.com.br";
  const shortUrl = `${siteUrl}/${link.code}`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-brand-600 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar para o encurtador
      </Link>

      <div className="bg-white border border-line rounded-3xl p-6 sm:p-10 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-line">
          <div>
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
              Painel de Estatísticas
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-ink mt-1">
              /{link.code}
            </h1>
          </div>
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 text-brand-700 hover:bg-brand-100 font-bold text-xs rounded-xl transition-colors"
          >
            Testar redirecionamento
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
          <div className="p-6 bg-slate-50 rounded-2xl border border-line flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center font-bold">
              <MousePointerClick className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium">Total de Cliques</span>
              <p className="text-3xl font-black text-ink">{formatNumber(link.clicks_count)}</p>
            </div>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-line flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium">Data de Criação</span>
              <p className="text-sm font-bold text-ink mt-1">{formatDate(link.created_at)}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-line">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Link Encurtado
            </span>
            <div className="p-3 bg-slate-50 rounded-xl border border-line flex items-center justify-between text-sm font-mono text-brand-700 font-bold">
              <span>{shortUrl}</span>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Destino Original
            </span>
            <div className="p-3 bg-slate-50 rounded-xl border border-line break-all text-xs text-slate-600">
              {link.original_url}
            </div>
          </div>
        </div>

        <AdBanner className="mt-8" />

        <div className="mt-10 pt-8 border-t border-line">
          <h3 className="text-lg font-bold text-ink mb-4">QR Code para este link</h3>
          <QrCodeGenerator initialUrl={shortUrl} />
        </div>
      </div>
    </div>
  );
}
