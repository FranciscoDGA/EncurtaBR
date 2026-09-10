"use client";

import { useState, useEffect } from "react";
import QRCodeLib from "qrcode";
import { Download, QrCode, Sparkles } from "lucide-react";

export default function QrCodeGenerator({ initialUrl = "" }: { initialUrl?: string }) {
  const [text, setText] = useState(initialUrl);
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [color, setColor] = useState("#0f172a");
  const [size, setSize] = useState(300);

  useEffect(() => {
    const val = text.trim() || "https://encurtabr.com.br";
    QRCodeLib.toDataURL(val, {
      width: size,
      margin: 2,
      color: {
        dark: color,
        light: "#ffffff",
      },
    })
      .then((url) => setDataUrl(url))
      .catch(() => setDataUrl(null));
  }, [text, color, size]);

  return (
    <div className="bg-white border border-line rounded-2xl p-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Formul�rio */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              URL ou Texto do QR Code
            </label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Cole seu site, WhatsApp, rede social ou link..."
              className="w-full px-4 py-3 bg-slate-50 border border-line rounded-xl text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-brand-500 focus:bg-white transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Cor do C�digo
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-10 h-10 rounded-lg cursor-pointer border border-line p-1 bg-white"
                />
                <span className="text-xs font-mono text-slate-500">{color}</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Resolu��o
              </label>
              <select
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-slate-50 border border-line rounded-xl text-xs text-slate-700 outline-none"
              >
                <option value={200}>Pequeno (200x200)</option>
                <option value={300}>M�dio (300x300)</option>
                <option value={500}>Alta Resolu��o (500x500)</option>
              </select>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            ? O QR Code � gerado instantaneamente no seu navegador sem limite de uso.
          </p>
        </div>

        {/* Pr�-visualiza��o do QR Code */}
        <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-line text-center">
          {dataUrl ? (
            <>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-4 inline-block">
                <img
                  src={dataUrl}
                  alt="QR Code gerado"
                  className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
                />
              </div>
              <a
                href={dataUrl}
                download="qrcode-encurtabr.png"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-xl transition-all shadow-sm shadow-brand-600/20 active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                Baixar Imagem (PNG)
              </a>
            </>
          ) : (
            <div className="text-slate-400 py-12 flex flex-col items-center gap-2">
              <QrCode className="w-12 h-12 stroke-[1.5]" />
              <span className="text-xs">Digite um link acima para gerar</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
