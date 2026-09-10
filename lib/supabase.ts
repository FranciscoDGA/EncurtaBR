import { createClient } from "@supabase/supabase-js";
import { generateRandomCode, sanitizeSlug } from "./utils";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Verifica se as chaves reais do Supabase estão configuradas
export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseAnonKey &&
    !supabaseUrl.includes("seu-projeto.supabase.co")
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseServiceKey || supabaseAnonKey!)
  : null;

export interface ShortLink {
  id: string;
  code: string;
  original_url: string;
  title?: string | null;
  clicks_count: number;
  created_at: string;
}

// Fallback em memória para testes locais sem configuração inicial do Supabase
const globalMemory = global as unknown as {
  __demoLinks?: Map<string, ShortLink>;
};
if (!globalMemory.__demoLinks) {
  globalMemory.__demoLinks = new Map<string, ShortLink>();
}
const demoLinks = globalMemory.__demoLinks;

export async function getLinkByCode(code: string): Promise<ShortLink | null> {
  const cleanCode = code.trim().toLowerCase();

  if (supabase) {
    const { data, error } = await supabase
      .from("links")
      .select("*")
      .eq("code", cleanCode)
      .single();

    if (error || !data) return null;
    return data as ShortLink;
  }

  return demoLinks.get(cleanCode) || null;
}

export async function createShortLink(
  originalUrl: string,
  customCode?: string
): Promise<{ link: ShortLink; isExisting?: boolean }> {
  const code = customCode
    ? sanitizeSlug(customCode)
    : generateRandomCode(6);

  if (supabase) {
    // Verifica se o código já existe
    const { data: existing } = await supabase
      .from("links")
      .select("*")
      .eq("code", code)
      .single();

    if (existing) {
      if (customCode) {
        throw new Error("Este link personalizado já está em uso. Escolha outro.");
      }
      return { link: existing as ShortLink, isExisting: true };
    }

    const { data, error } = await supabase
      .from("links")
      .insert({
        code,
        original_url: originalUrl,
        clicks_count: 0,
      })
      .select()
      .single();

    if (error || !data) {
      throw new Error(error?.message || "Erro ao salvar o link no banco de dados.");
    }

    return { link: data as ShortLink };
  }

  // Fallback em memória
  const existing = demoLinks.get(code);
  if (existing) {
    if (customCode) {
      throw new Error("Este link personalizado já está em uso. Escolha outro.");
    }
    return { link: existing, isExisting: true };
  }

  const newLink: ShortLink = {
    id: String(Date.now()),
    code,
    original_url: originalUrl,
    clicks_count: 0,
    created_at: new Date().toISOString(),
  };

  demoLinks.set(code, newLink);
  return { link: newLink };
}

export async function registerClick(
  code: string,
  referer?: string,
  userAgent?: string
): Promise<void> {
  const cleanCode = code.trim().toLowerCase();

  if (supabase) {
    try {
      await supabase.rpc("increment_link_clicks", { link_code: cleanCode });
    } catch {
      // Fallback update direto
      const { data: link } = await supabase
        .from("links")
        .select("id, clicks_count")
        .eq("code", cleanCode)
        .single();

      if (link) {
        await supabase
          .from("links")
          .update({ clicks_count: (link.clicks_count || 0) + 1 })
          .eq("id", link.id);
      }
    }
    return;
  }

  const link = demoLinks.get(cleanCode);
  if (link) {
    link.clicks_count += 1;
  }
}
