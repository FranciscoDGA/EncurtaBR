# 🚀 EncurtaBR — Encurtador de Links e QR Code Brasileiro

Plataforma moderna, rápida e completa de links inteligentes, gerador de QR Code e construtor de parâmetros UTM, desenvolvida em **Next.js (App Router)** com **TypeScript** e **Tailwind CSS**.

Pronta para deploy na **Vercel**, integração com banco de dados em nuvem **Supabase**, indexação no **Google Search Console (GSC)** e monetização via **Google AdSense**.

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Server Actions e API Routes)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS (Clean Design, responsivo)
- **Banco de Dados:** [Supabase](https://supabase.com/) (PostgreSQL Serverless gratuito)
- **QR Code:** Biblioteca `qrcode` integrada com suporte a download em PNG e SVG
- **Ícones:** Lucide React

---

## ✨ Funcionalidades

1. **Encurtador de Links Instantâneo:**
   - Encurta URLs longas em segundos.
   - Suporte a slugs personalizados (ex: `encurtabr.com.br/meu-link`).
   - Redirecionamento HTTP 307 de alta performance.
   - Geração automática do QR Code correspondente ao link encurtado.
   - Botões de cópia rápida e compartilhamento nativo móvel.

2. **Painel de Estatísticas (`/:code/stats`):**
   - Contador de cliques acumulados em tempo real.
   - Data de criação e URL de destino original.

3. **Gerador de QR Code Dedicado (`/qr-code`):**
   - Gera QR Code para qualquer site, WhatsApp, PIX ou texto.
   - Opção de personalização de cor e resolução.
   - Download imediato em PNG.

4. **Gerador de Links UTM para Marketing (`/utm`):**
   - Presets prontos para Instagram Bio, Stories, Facebook Ads, Google Ads e E-mail.
   - Campos `utm_source`, `utm_medium`, `utm_campaign` e `utm_content`.
   - Compatível com Google Analytics 4 (GA4).

5. **Pronto para SEO e Google AdSense:**
   - `sitemap.xml` dinâmico e `robots.txt`.
   - Tags OpenGraph e Twitter Cards completas.
   - Schema.org (JSON-LD WebSite) estruturado.
   - Páginas obrigatórias de compliance:
     - `/privacidade` (LGPD e AdSense)
     - `/termos` (Termos de Uso)
     - `/sobre` (Sobre e Contato)
   - Componente de anúncio `<AdBanner />` com placeholder e suporte a tags reais.

---

## 🚀 Como Executar Localmente

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse: [http://localhost:3000](http://localhost:3000)

---

## 🗄️ Configuração do Supabase (Banco de Dados Gratuito)

1. Crie uma conta gratuita em [supabase.com](https://supabase.com) e crie um novo projeto.
2. No menu lateral do Supabase, vá em **SQL Editor** e clique em **New query**.
3. Copie todo o conteúdo do arquivo `supabase/schema.sql` deste projeto e execute ("Run").
4. Vá em **Project Settings > API** e copie:
   - `Project URL`
   - `anon public` key
   - `service_role secret` key
5. Adicione no seu arquivo `.env.local`:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon
   SUPABASE_SERVICE_ROLE_KEY=sua-chave-service-role
   ```

> **Nota:** Se você não configurar o Supabase imediatamente, a aplicação continuará funcionando localmente com armazenamento em memória para você testar tudo de imediato!

---

## 📦 Como Subir para o GitHub e Vercel

### 1. Subir para o GitHub:
```bash
git init
git add .
git commit -m "feat: lancamento do EncurtaBR"
git branch -M main
git remote add origin https://github.com/FranciscoDGA/EncurtaBR.git
git push -u origin main
```

### 2. Deploy na Vercel:
1. Acesse [vercel.com](https://vercel.com) e faça login com seu GitHub.
2. Clique em **"Add New..." > "Project"**.
3. Selecione o repositório **FranciscoDGA/EncurtaBR** e clique em **Import**.
4. Na seção **Environment Variables**, adicione:
   - `NEXT_PUBLIC_SITE_URL`: o domínio gerado pela Vercel (ex: `https://encurtabr.vercel.app`) ou seu domínio definitivo quando registrar (`https://encurtabr.com.br`).
   - `NEXT_PUBLIC_SUPABASE_URL`: sua URL do Supabase.
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: sua chave anon do Supabase.
   - `SUPABASE_SERVICE_ROLE_KEY`: sua chave service role do Supabase.
5. Clique em **Deploy**. Seu encurtador estará no ar em menos de 1 minuto!

---

## 📈 Google Search Console & AdSense

- **Google Search Console:** Insira o código da tag HTML gerada pelo Search Console na variável `NEXT_PUBLIC_GSC_VERIFICATION` para verificação instantânea. Envie o sitemap: `https://seu-dominio/sitemap.xml`.
- **Google AdSense:** Quando o site estiver com tráfego e pronto para aprovação, coloque seu ID de editor no `.env`:
  ```env
  NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
  ```
