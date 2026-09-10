"use client";

import { useState } from "react";
import { Copy, Check, Share2, QrCode, BarChart2, Sparkles, ExternalLink } from "lucide-react";
import QRCodeLib from "qrcode";

export default function ShortenerForm() {
  const [url, setUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    code: string;
    shortUrl: string;
    originalUrl: string;
  } | null>(null);

  const [copied, setCopied] = useState(false);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string | null>(null);
  const [showQrModal, setShowQrModal] = useState(false);

  const handleShorten = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    setQrCodeDataUrl(null);

    const cleanUrl = url.trim();
    if (!cleanUrl) {
      setError("Por favor, cole um link para encurtar.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: cleanUrl,
          customCode: customCode.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "N�o foi poss�vel encurtar o link.");
      }

      const host = window.location.origin;
      const fullShortUrl = `${host}/${data.code}`;

      setResult({
        code: data.code,
        shortUrl: fullShortUrl,
        originalUrl: cleanUrl,
      });

      // Gera o QR Code correspondente
      const qr = await QRCodeLib.toDataURL(fullShortUrl, {
        width: 320,
        margin: 2,
        color: {
          dark: "#0f172a",
          light: "#ffffff",
        },
      });
      setQrCodeDataUrl(qr);
    } catch (err: any) {
      setError(err.message || "Erro inesperado. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const el = document.createElement("textarea");
      el.value = result.shortUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShare = async () => {
    if (!result) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Link encurtado com EncurtaBR",
          url: result.shortUrl,
        });
      } catch {
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        onSubmit={handleShorten}
        className="bg-white p-2.5 sm:p-3 rounded-2xl border border-line shadow-xl shadow-slate-900/5 transition-all focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-100"
      >
        <div className="flex flex-col sm:flex-row items-stretch gap-2">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Cole seu link longo aqui (ex: https://...)"
            required
            className="flex-1 min-w-0 px-4 py-3.5 text-base text-slate-800 placeholder-slate-400 bg-transparent border-none outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3.5 bg-brand-600 hover:bg-brand-700 active:scale-[0.98] text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-60 shadow-sm shadow-brand-600/30 whitespace-nowrap"
          >
            {loading ? (
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Encurtar link
              </>
            )}
          </button>
        </div>

        {/* Op��o de link personalizado */}
        <div className="pt-2 px-2 border-t border-slate-100 mt-2 flex items-center justify-between text-xs text-slate-500">
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-brand-600 font-semibold hover:underline"
          >
            {showAdvanced ? "Ocultar personaliza��o" : "+ Personalizar c�digo do link (opcional)"}
          </button>
          <span className="hidden sm:inline">100% gratuito e sem cadastro</span>
        </div>

        {showAdvanced && (
          <div className="p-3 mt-2 bg-slate-50 rounded-xl border border-line flex flex-col sm:flex-row items-center gap-2">
            <span className="text-xs text-slate-500 font-mono">encurtabr/</span>
            <input
              type="text"
              value={customCode}
              onChange={(e) => setCustomCode(e.target.value)}
              placeholder="meu-link-especial"
              maxLength={30}
              className="flex-1 w-full bg-white border border-line rounded-lg px-3 py-1.5 text-xs text-slate-700 outline-none focus:border-brand-500"
            />
          </div>
        )}
      </form>

      {/* Alerta de erro */}
      {error && (
        <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center justify-between animate-fadeIn">
          <span>{error}</span>
          <button onClick={() => setError(null)} className="text-red-500 font-bold ml-2">�</button>
        </div>
      )}

      {/* Resultado do Link Encurtado */}
      {result && (
        <div className="mt-6 p-5 sm:p-6 bg-brand-50 border border-brand-200 rounded-2xl animate-fadeIn">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">
              Link Encurtado com Sucesso!
            </span>
            <a
              href={`/${result.code}/stats`}
              className="text-xs font-semibold text-brand-700 hover:text-brand-800 flex items-center gap-1"
            >
              <BarChart2 className="w-3.5 h-3.5" />
              Ver estat�sticas
            </a>
          </div>

          <div className="bg-white border border-brand-200 rounded-xl p-3 sm:p-4 flex items-center justify-between gap-3 overflow-hidden shadow-sm">
            <code className="text-base sm:text-lg font-bold text-brand-700 truncate select-all">
              {result.shortUrl}
            </code>
            <a
              href={result.shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-brand-600 transition-colors"
              title="Testar link"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Bot�es de A��o */}
          <div className="flex flex-wrap items-center gap-2.5 mt-4">
            <button
              type="button"
              onClick={copyToClipboard}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-all"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copiado para a �rea de transfer�ncia!" : "Copiar link"}
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-brand-200 hover:bg-brand-100 text-slate-700 text-xs sm:text-sm font-bold rounded-xl transition-all"
            >
              <Share2 className="w-4 h-4 text-brand-600" />
              Compartilhar
            </button>

            {qrCodeDataUrl && (
              <button
                type="button"
                onClick={() => setShowQrModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-brand-200 hover:bg-brand-100 text-slate-700 text-xs sm:text-sm font-bold rounded-xl transition-all"
              >
                <QrCode className="w-4 h-4 text-brand-600" />
                Ver QR Code
              </button>
            )}
          </div>
        </div>
      )}

      {/* Modal / Card de QR Code */}
      {showQrModal && qrCodeDataUrl && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl text-center relative border border-line">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-ink font-bold text-lg"
            >
              �
            </button>
            <h3 className="font-bold text-lg text-ink mb-1">QR Code do seu Link</h3>
            <p className="text-xs text-slate-500 mb-4 truncate">{result?.shortUrl}</p>
            <div className="bg-slate-50 p-4 rounded-xl border border-line inline-block mb-4">
              <img
                src={qrCodeDataUrl}
                alt="QR Code gerado"
                className="w-48 h-48 mx-auto"
              />
            </div>
            <div className="flex gap-2 justify-center">
              <a
                href={qrCodeDataUrl}
                download={`qrcode-${result?.code || "link"}.png`}
                className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-sm"
              >
                Baixar PNG
              </a>
              <button
                onClick={() => setShowQrModal(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
