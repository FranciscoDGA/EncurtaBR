import { NextRequest, NextResponse } from "next/server";
import { getLinkByCode, registerClick } from "@/lib/supabase";

export async function GET(
  req: NextRequest,
  { params }: { params: { code: string } }
) {
  const code = params.code;

  // Ignora rotas do sistema
  if (!code || code === "favicon.ico" || code === "robots.txt" || code === "sitemap.xml") {
    return new NextResponse(null, { status: 404 });
  }

  const link = await getLinkByCode(code);

  if (!link) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    url.searchParams.set("error", "link-not-found");
    return NextResponse.redirect(url, { status: 307 });
  }

  const referer = req.headers.get("referer") || undefined;
  const userAgent = req.headers.get("user-agent") || undefined;
  
  await registerClick(code, referer, userAgent).catch((err) => {
    console.error("Erro ao registrar clique:", err);
  });

  return NextResponse.redirect(link.original_url, {
    status: 307,
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
  });
}
