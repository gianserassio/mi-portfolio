import fs from "fs";
import path from "path";
import { assetUrl } from "@/lib/assets";

const RENDERS_DIR = path.join(process.cwd(), "public", "images", "Loose renders");
const VALID_EXT = /\.(webp|png|jpe?g|avif)$/i;

export interface LooseRender {
  src: string;
  alt: string;
}

/** Reads whatever image files are in public/images/Loose renders at build/request time. */
export function getLooseRenders(): LooseRender[] {
  let files: string[];
  try {
    files = fs.readdirSync(RENDERS_DIR).filter((f) => VALID_EXT.test(f));
  } catch {
    return [];
  }

  files.sort();

  return files.map((file) => ({
    src: assetUrl(`/images/Loose renders/${file}`),
    alt: file.replace(/\.[^.]+$/, ""),
  }));
}
