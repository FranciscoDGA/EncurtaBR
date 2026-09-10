-- Schema do EncurtaBR para o Supabase (PostgreSQL)

-- 1. Tabela de links encurtados
CREATE TABLE IF NOT EXISTS public.links (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code VARCHAR(32) NOT NULL UNIQUE,
  original_url TEXT NOT NULL,
  title TEXT,
  clicks_count BIGINT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Tabela de cliques e telemetria simplificada
CREATE TABLE IF NOT EXISTS public.clicks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  link_id UUID REFERENCES public.links(id) ON DELETE CASCADE,
  clicked_at TIMESTAMPTZ DEFAULT NOW(),
  referer TEXT,
  user_agent TEXT,
  country VARCHAR(8)
);

-- 3. Índices para buscas ultrarrápidas
CREATE INDEX IF NOT EXISTS idx_links_code ON public.links(code);
CREATE INDEX IF NOT EXISTS idx_clicks_link_id ON public.clicks(link_id);
CREATE INDEX IF NOT EXISTS idx_clicks_clicked_at ON public.clicks(clicked_at);

-- 4. Função para incrementar contador de cliques de forma atômica
CREATE OR REPLACE FUNCTION public.increment_link_clicks(link_code VARCHAR)
RETURNS VOID AS $$
BEGIN
  UPDATE public.links
  SET clicks_count = clicks_count + 1,
      updated_at = NOW()
  WHERE code = link_code;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 5. Habilitar Row Level Security (RLS)
ALTER TABLE public.links ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.clicks ENABLE ROW LEVEL SECURITY;

-- Políticas de acesso público para leitura de redirecionamento e inserção de links
CREATE POLICY "Permitir leitura pública de links" 
ON public.links FOR SELECT 
USING (true);

CREATE POLICY "Permitir inserção pública de links" 
ON public.links FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Permitir inserção pública de cliques" 
ON public.clicks FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Permitir leitura de cliques" 
ON public.clicks FOR SELECT 
USING (true);
