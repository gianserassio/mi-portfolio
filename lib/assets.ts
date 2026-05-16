export const ASSETS_BASE_URL = process.env.NEXT_PUBLIC_ASSETS_BASE_URL?.replace(/\/$/, "") ?? "";

export function assetUrl(path: string) {
  if (!ASSETS_BASE_URL) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const encodedPath = encodeURI(path);
  return encodedPath.startsWith("/") ? `${ASSETS_BASE_URL}${encodedPath}` : `${ASSETS_BASE_URL}/${encodedPath}`;
}
