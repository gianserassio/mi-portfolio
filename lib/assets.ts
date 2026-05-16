export const ASSETS_BASE_URL = process.env.NEXT_PUBLIC_ASSETS_BASE_URL?.replace(/\/$/, "") ?? "";

export function assetUrl(path: string) {
  if (!ASSETS_BASE_URL) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const encodedPath = encodeURI(path);
  const remotePath = encodedPath.startsWith("/images/") ? encodedPath.slice(7) : encodedPath;
  return remotePath.startsWith("/") ? `${ASSETS_BASE_URL}${remotePath}` : `${ASSETS_BASE_URL}/${remotePath}`;
}
