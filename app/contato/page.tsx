"use client";

import { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle2, ShieldAlert, Clock, HelpCircle } from "lucide-react";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("suporte");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="bg-white border border-line rounded-3xl p-6 sm:p-12 shadow-sm space-y-10">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full mb-3">
            <Mail className="w-3.5 h-3.5" />
            Atendimento & Suporte
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Fale Conosco
          </h1>
          <p className="text-base text-slate-500 mt-2 max-w-2xl leading-relaxed">
            Dúvidas, sugestões, parcerias ou denúncia de link malicioso? Nossa equipe está pronta para ajudar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-slate-50 border border-line rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center font-bold mb-3">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">E-mail Oficial</span>
            <p className="text-sm font-bold text-brand-700 font-mono">contato@encurtabr.com.br</p>
          </div>

          <div className="p-5 bg-slate-50 border border-line rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold mb-3">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Canal de Denúncias</span>
            <p className="text-sm font-bold text-red-700 font-mono">abuso@encurtabr.com.br</p>
          </div>

          <div className="p-5 bg-slate-50 border border-line rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Tempo de Resposta</span>
            <p className="text-sm font-bold text-ink">Em até 24 horas úteis</p>
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-slate-50 border border-line rounded-2xl">
          <h2 className="text-xl font-bold text-ink mb-6 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-brand-600" />
            Envie sua Mensagem
          </h2>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-emerald-900">Mensagem Enviada com Sucesso!</h3>
              <p className="text-sm text-emerald-700 max-w-md mx-auto">
                Obrigado pelo contato, {name}! Responderemos no e-mail informado ({email}) o mais breve possível.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setMessage("");
                }}
                className="mt-4 px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Seu Nome Completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: João da Silva"
                    className="w-full px-4 py-2.5 bg-white border border-line rounded-xl text-sm text-slate-800 outline-none focus:border-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Seu E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="voce@exemplo.com.br"
                    className="w-full px-4 py-2.5 bg-white border border-line rounded-xl text-sm text-slate-800 outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Assunto
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-line rounded-xl text-sm text-slate-800 outline-none focus:border-brand-500"
                >
                  <option value="suporte">Dúvida ou Suporte Técnico</option>
                  <option value="denuncia">Denúncia de Link Malicioso / Phishing</option>
                  <option value="parceria">Parcerias e Anúncios</option>
                  <option value="sugestao">Sugestão de Nova Ferramenta</option>
                  <option value="outro">Outro Assunto</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escreva sua mensagem com o máximo de detalhes..."
                  className="w-full px-4 py-3 bg-white border border-line rounded-xl text-sm text-slate-800 outline-none focus:border-brand-500 resize-y"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-xl transition-all shadow-sm active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                Enviar Mensagem
              </button>
            </form>
          )}
        </div>

        <AdBanner />
      </div>
    </div>
  );
}
