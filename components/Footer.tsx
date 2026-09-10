import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-line mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Coluna 1: Marca */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 font-black text-xl text-ink mb-3">
              <span className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center font-black text-base">
                E
              </span>
              <span>Encurta<span className="text-brand-600">BR</span></span>
            </Link>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              O encurtador de links e gerador de QR Codes mais rápido do Brasil. Links simples, seguros e fáceis de rastrear.
            </p>
          </div>

          {/* Coluna 2: Ferramentas */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Ferramentas
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/#encurtar" className="hover:text-brand-600 transition-colors">
                  Encurtador de Links
                </Link>
              </li>
              <li>
                <Link href="/qr-code" className="hover:text-brand-600 transition-colors">
                  Gerador de QR Code
                </Link>
              </li>
              <li>
                <Link href="/utm" className="hover:text-brand-600 transition-colors">
                  Gerador de Links UTM
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Institucional & Legal */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Institucional
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/sobre" className="hover:text-brand-600 transition-colors">
                  Sobre o EncurtaBR
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="hover:text-brand-600 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:text-brand-600 transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} EncurtaBR · Feito no Brasil para o mundo todo.</p>
          <div className="flex gap-4">
            <Link href="/privacidade" className="hover:underline">Privacidade</Link>
            <Link href="/termos" className="hover:underline">Termos</Link>
            <Link href="/sobre" className="hover:underline">Contato</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
