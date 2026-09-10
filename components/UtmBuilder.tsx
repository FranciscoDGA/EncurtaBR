"use client";

import { useState } from "react";
import { Copy, Check, Sparkles, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function UtmBuilder() {
  const [baseUrl, setBaseUrl] = useState("");
  const [source, setSource] = useState("instagram");
  const [medium, setMedium] = useState("social");
  const [campaign, setCampaign] = useState("");
  const [content, setContent] = useState("");
  const [term, setTerm] = useState("");
  const [copied, setCopied] = useState(false);

  // Presets r�pidos
  const applyPreset = (pSource: string, pMedium: string, pContent?: string) => {
    setSource(pSource);
    setMedium(pMedium);
    if (pContent) setContent(pContent);
  };

  const buildUrl = (): string => {
    const raw = baseUrl.trim();
    if (!raw) return "";

    try {
      const parsed = new URL(raw.startsWith("http") ? raw : `https://${raw}`);
      if (source.trim()) parsed.searchParams.set("utm_source", source.trim());
      if (medium.trim()) parsed.searchParams.set("utm_medium", medium.trim());
      if (campaign.trim()) parsed.searchParams.set("utm_campaign", campaign.trim());
      if (content.trim()) parsed.searchParams.set("utm_content", content.trim());
      if (term.trim()) parsed.searchParams.set("utm_term", term.trim());
      return parsed.toString();
    } catch {
      return "";
    }
  };

  const finalUrl = buildUrl();

  const handleCopy = async () => {
    if (!finalUrl) return;
    try {
      await navigator.clipboard.writeText(finalUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {}
  };

  return (
    <div className="bg-white border border-line rounded-2xl p-6 sm:p-8 shadow-sm">
      {/* Presets R�pidos */}
      <div className="mb-6">
        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
          Modelos Prontos (Clique para preencher r�pido)
        </span>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => applyPreset("instagram", "social", "link_bio")}
            className="px-3 py-1.5 bg-slate-100 hover:bg-brand-50 hover:text-brand-600 text-xs font-semibold rounded-lg text-slate-700 transition-colors"
          >
            ?? Instagram Bio
          </button>
          <button
            type="button"
            onClick={() => applyPreset("instagram", "stories", "arrasta_cima")}
            className="px-3 py-1.5 bg-slate-100 hover:bg-brand-50 hover:text-brand-600 text-xs font-semibold rounded-lg text-slate-700 transition-colors"
          >
            ?? Instagram Stories
          </button>
          <button
            type="button"
            onClick={() => applyPreset("facebook", "paid_social", "feed_ad")}
            className="px-3 py-1.5 bg-slate-100 hover:bg-brand-50 hover:text-brand-600 text-xs font-semibold rounded-lg text-slate-700 transition-colors"
          >
            ?? Facebook Ads
          </button>
          <button
            type="button"
            onClick={() => applyPreset("google", "cpc")}
            className="px-3 py-1.5 bg-slate-100 hover:bg-brand-50 hover:text-brand-600 text-xs font-semibold rounded-lg text-slate-700 transition-colors"
          >
            ?? Google Ads
          </button>
          <button
            type="button"
            onClick={() => applyPreset("newsletter", "email")}
            className="px-3 py-1.5 bg-slate-100 hover:bg-brand-50 hover:text-brand-600 text-xs font-semibold rounded-lg text-slate-700 transition-colors"
          >
            ?? E-mail Marketing
          </button>
        </div>
      </div>

      {/* Formul�rio de Campos */}
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            URL do seu site ou destino <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={baseUrl}
            onChange={(e) => setBaseUrl(e.target.value)}
            placeholder="https://meusite.com.br/produto"
            className="w-full px-4 py-3 bg-slate-50 border border-line rounded-xl text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-brand-500 focus:bg-white transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Origem (utm_source) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="instagram, google, newsletter"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-line rounded-xl text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-brand-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              M�dia / Canal (utm_medium)
            </label>
            <input
              type="text"
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
              placeholder="social, stories, cpc, email"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-line rounded-xl text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-brand-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Nome da Campanha (utm_campaign)
            </label>
            <input
              type="text"
              value={campaign}
              onChange={(e) => setCampaign(e.target.value)}
              placeholder="promocao-verao, lancamento"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-line rounded-xl text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-brand-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Conte�do / Varia��o (utm_content)
            </label>
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="bio, video1, banner-azul"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-line rounded-xl text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-brand-500"
            />
          </div>
        </div>
      </div>

      {/* URL Final Gerada */}
      {finalUrl && (
        <div className="mt-8 p-5 bg-brand-50 border border-brand-200 rounded-2xl animate-fadeIn">
          <span className="text-xs font-bold text-brand-700 uppercase tracking-wider block mb-2">
            Sua URL Rastre�vel com UTM:
          </span>
          <div className="bg-white border border-brand-200 rounded-xl p-3 sm:p-4 mb-4">
            <code className="text-xs sm:text-sm font-bold text-brand-800 break-all select-all block">
              {finalUrl}
            </code>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-all"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "URL Copiada!" : "Copiar URL com UTM"}
            </button>

            <Link
              href={`/#encurtar`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-brand-200 hover:bg-brand-100 text-slate-700 text-xs sm:text-sm font-bold rounded-xl transition-all"
            >
              <Sparkles className="w-4 h-4 text-brand-600" />
              Encurtar este link no EncurtaBR
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
