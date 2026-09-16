import fs from "fs";
import path from "path";
import { assetUrl } from "@/lib/assets";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const IMAGE_EXT = /\.(webp|png|jpe?g|avif)$/i;
const VIDEO_EXT = /\.(mp4|webm|mov)$/i;
const VALID_EXT = new RegExp(`(${IMAGE_EXT.source}|${VIDEO_EXT.source})`, "i");

export interface LooseRender {
  src: string;
  alt: string;
}

/** Recursively lists media files under a directory, returning paths relative to it. */
function walkMediaFiles(dir: string, relativeTo: string): string[] {
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return [];
  }

  let files: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walkMediaFiles(full, relativeTo));
    } else if (VALID_EXT.test(entry.name)) {
      files.push(path.relative(relativeTo, full).split(path.sep).join("/"));
    }
  }
  return files;
}

function listFolderFiles(folder: string): string[] {
  const root = path.join(IMAGES_DIR, folder);
  const files = walkMediaFiles(root, root);
  files.sort();
  return files;
}

/** Reads whatever image or video files are in public/images/<folder> (including subfolders) at build/request time. */
export function getFolderMedia(folder: string): string[] {
  return listFolderFiles(folder).map((file) => assetUrl(`/images/${folder}/${file}`));
}

export interface MediaGroup {
  label: string;
  items: string[];
}

/** Same as getFolderMedia, but grouped by immediate subfolder (files directly in `folder` land in a group with an empty label). */
export function getFolderMediaGrouped(folder: string): MediaGroup[] {
  const groups = new Map<string, string[]>();

  for (const file of listFolderFiles(folder)) {
    const slash = file.indexOf("/");
    const label = slash === -1 ? "" : file.slice(0, slash);
    const src = assetUrl(`/images/${folder}/${file}`);
    if (!groups.has(label)) groups.set(label, []);
    groups.get(label)!.push(src);
  }

  return Array.from(groups.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([label, items]) => ({ label, items }));
}

/** Reads whatever image files are in public/images/Loose renders at build/request time. */
export function getLooseRenders(): LooseRender[] {
  return listFolderFiles("Loose renders").map((file) => ({
    src: assetUrl(`/images/Loose renders/${file}`),
    alt: file.replace(/\.[^.]+$/, ""),
  }));
}
