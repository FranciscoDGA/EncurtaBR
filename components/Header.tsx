"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Link as LinkIcon, QrCode, SlidersHorizontal, BarChart3 } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-50/95 backdrop-blur-md border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 font-black text-xl tracking-tight text-ink">
          <span className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center font-black text-base shadow-sm shadow-brand-600/30">
            E
          </span>
          <span>Encurta<span className="text-brand-600">BR</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <Link href="/#ferramentas" className="hover:text-brand-600 transition-colors">
            Ferramentas
          </Link>
          <Link href="/qr-code" className="hover:text-brand-600 transition-colors">
            QR Code
          </Link>
          <Link href="/utm" className="hover:text-brand-600 transition-colors">
            Gerador UTM
          </Link>
          <Link href="/#como-funciona" className="hover:text-brand-600 transition-colors">
            Como Funciona
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#encurtar"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl transition-all shadow-sm shadow-brand-600/20 active:scale-[0.98]"
          >
            Encurtar link
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-ink focus:outline-none"
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-line bg-white px-4 pt-3 pb-5 space-y-3">
          <Link
            href="/#ferramentas"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600"
          >
            <SlidersHorizontal className="w-4 h-4 text-brand-600" />
            Todas as Ferramentas
          </Link>
          <Link
            href="/qr-code"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600"
          >
            <QrCode className="w-4 h-4 text-brand-600" />
            Gerador de QR Code
          </Link>
          <Link
            href="/utm"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600"
          >
            <LinkIcon className="w-4 h-4 text-brand-600" />
            Gerador de Links UTM
          </Link>
          <Link
            href="/#como-funciona"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600"
          >
            <BarChart3 className="w-4 h-4 text-brand-600" />
            Como Funciona
          </Link>
          <div className="pt-2">
            <Link
              href="/#encurtar"
              onClick={() => setIsOpen(false)}
              className="w-full text-center block py-2.5 px-4 text-sm font-bold text-white bg-brand-600 rounded-xl"
            >
              Encurtar link agora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
