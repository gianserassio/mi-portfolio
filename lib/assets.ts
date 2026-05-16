export const ASSETS_BASE_URL = process.env.NEXT_PUBLIC_ASSETS_BASE_URL?.replace(/\/$/, "") ?? "";

export function assetUrl(path: string) {
  if (!ASSETS_BASE_URL) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return path.startsWith("/") ? `${ASSETS_BASE_URL}${path}` : `${ASSETS_BASE_URL}/${path}`;
}
