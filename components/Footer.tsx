import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-line mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 font-black text-xl text-ink mb-3">
              <span className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center font-black text-base">
                E
              </span>
              <span>Encurta<span className="text-brand-600">BR</span></span>
            </Link>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              O encurtador de links e gerador de QR Codes mais rápido e seguro do Brasil. Links simples, confiáveis e fáceis de rastrear.
            </p>
          </div>

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
              <li>
                <Link href="/contato" className="hover:text-brand-600 transition-colors">
                  Fale Conosco / Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} EncurtaBR · Todos os direitos reservados no Brasil.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacidade" className="hover:underline">Política de Privacidade</Link>
            <Link href="/termos" className="hover:underline">Termos de Uso</Link>
            <Link href="/sobre" className="hover:underline">Sobre Nós</Link>
            <Link href="/contato" className="hover:underline">Contato</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
