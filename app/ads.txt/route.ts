import { NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  if (clientId) {
    const pubId = clientId.replace("ca-", "");
    const content = `google.com, ${pubId}, DIRECT, f08c47fec0942fa0\n`;
    return new NextResponse(content, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=86400",
      },
    });
  }

  return new NextResponse("# EncurtaBR - ads.txt\n# Preencha NEXT_PUBLIC_ADSENSE_CLIENT_ID quando aprovado no AdSense\n", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
