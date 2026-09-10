import { NextRequest, NextResponse } from "next/server";
import { isValidUrl } from "@/lib/utils";
import { createShortLink } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url, customCode } = body;

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "A URL a ser encurtada é obrigatória." },
        { status: 400 }
      );
    }

    if (!isValidUrl(url)) {
      return NextResponse.json(
        { error: "Por favor, insira uma URL válida iniciando com http:// ou https://" },
        { status: 400 }
      );
    }

    const { link, isExisting } = await createShortLink(url.trim(), customCode);

    return NextResponse.json({
      success: true,
      code: link.code,
      original_url: link.original_url,
      clicks_count: link.clicks_count,
      isExisting: !!isExisting,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Erro interno ao encurtar o link." },
      { status: 400 }
    );
  }
}
