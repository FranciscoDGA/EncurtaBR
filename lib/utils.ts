export function isValidUrl(urlString: string): boolean {
  try {
    const trimmed = urlString.trim();
    const url = new URL(trimmed);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return false;
    }

    const hostname = url.hostname.toLowerCase();

    // Bloquear loops para localhost e redes internas / metadados (prevenção SSRF e abusos)
    if (
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "::1" ||
      hostname === "169.254.169.254" ||
      hostname.endsWith(".local") ||
      hostname.endsWith(".internal") ||
      hostname.startsWith("10.") ||
      hostname.startsWith("192.168.") ||
      /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(hostname)
    ) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

export function sanitizeSlug(slug: string): string {
  return slug
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "")
    .slice(0, 30);
}

export function generateRandomCode(length: number = 6): string {
  const chars = "abcdefghjkmnpqrstuvwxyz23456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("pt-BR").format(num);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}
