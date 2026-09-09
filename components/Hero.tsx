"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import { assetUrl } from "@/lib/assets";

/* ─── Tiles del collage ─────────────────────────────────────────────────
   Layout 4×3 grid — placement explícito — 10 imágenes / 12 celdas
   Col: 1           2           3           4
   R1:  img1 (1×2)  img4 (1×1)  img3 (1×1)  img7 (1×2)
   R2:  ↕           img10(1×1)  img2 (1×1)  ↕
   R3:  img5 (1×1)  img8 (1×1)  img9 (1×1)  img6 (1×1)
─────────────────────────────────────────────────────────────────────── */
const TILES = [
  // Col 1 · Row 1-2 — portrait 0.67
  {
    id: 1 as const,
    image: assetUrl("/images/Imagenes fondo/hf_20260322_163656_d0e12f17-6908-4a71-a0b4-ca35fe60c1a2.webp"),
    col: "col-span-1", row: "row-span-2", colStart: "col-start-1", rowStart: "row-start-1",
  },
  // Col 2 · Row 1 — landscape 1.79
  {
    id: 2 as const,
    image: assetUrl("/images/Imagenes fondo/hf_20260322_164140_d490a045-1c4c-422f-90ba-38ce50c58d67.webp"),
    col: "col-span-1", row: "row-span-1", colStart: "col-start-2", rowStart: "row-start-1",
  },
  // Col 3 · Row 1 — landscape 1.49
  {
    id: 3 as const,
    image: assetUrl("/images/Imagenes fondo/hf_20260322_164007_be220f3b-9573-4509-ac86-5d8a7e8237a5.webp"),
    col: "col-span-1", row: "row-span-1", colStart: "col-start-3", rowStart: "row-start-1",
  },
  // Col 4 · Row 1-2 — portrait tall 0.56
  {
    id: 4 as const,
    image: assetUrl("/images/Imagenes fondo/hf_20260322_165330_c2ccd9ed-9459-4e7a-b600-4e0dda42f865.webp"),
    col: "col-span-1", row: "row-span-2", colStart: "col-start-4", rowStart: "row-start-1",
  },
  // Col 2 · Row 2 — square 1.0
  {
    id: 5 as const,
    image: assetUrl("/images/Imagenes fondo/C2693_V2.webp"),
    col: "col-span-1", row: "row-span-1", colStart: "col-start-2", rowStart: "row-start-2",
  },
  // Col 3 · Row 2 — portrait 0.67
  {
    id: 6 as const,
    image: assetUrl("/images/Imagenes fondo/hf_20260322_163830_329e85e2-441c-4e9e-89a3-eae5257a1685.webp"),
    col: "col-span-1", row: "row-span-1", colStart: "col-start-3", rowStart: "row-start-2",
  },
  // Col 1 · Row 3 — landscape 1.33
  {
    id: 7 as const,
    image: assetUrl("/images/Imagenes fondo/hf_20260322_164726_67a69235-ce0e-4607-9a0a-3fb0db487d7e.webp"),
    col: "col-span-1", row: "row-span-1", colStart: "col-start-1", rowStart: "row-start-3",
  },
  // Col 2 · Row 3 — portrait tall 0.56
  {
    id: 8 as const,
    image: assetUrl("/images/Imagenes fondo/hf_20260322_165501_d70350f8-d9d4-4e65-bebb-d5ba95fef175.webp"),
    col: "col-span-1", row: "row-span-1", colStart: "col-start-2", rowStart: "row-start-3",
  },
  // Col 3 · Row 3 — landscape 1.34
  {
    id: 9 as const,
    image: assetUrl("/images/Imagenes fondo/hf_20260322_165652_0cd2acd4-f7c7-4122-a7e9-1da5ab070cff (1).webp"),
    col: "col-span-1", row: "row-span-1", colStart: "col-start-3", rowStart: "row-start-3",
  },
  // Col 4 · Row 3 — landscape 1.34
  {
    id: 10 as const,
    image: assetUrl("/images/Imagenes fondo/hf_20260322_164842_029ac075-0d61-487b-8569-a26483a8db90.webp"),
    col: "col-span-1", row: "row-span-1", colStart: "col-start-4", rowStart: "row-start-3",
  },
];

export default function Hero() {
  const { lang } = useLanguage();
  const tr = t[lang].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0000]">
      <CollageBackground tileLabels={tr.tile_labels} />

      {/* Overlay global */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(13,0,0,0.20) 0%, rgba(13,0,0,0.55) 60%, rgba(13,0,0,0.88) 100%)",
        }}
      />

      {/* Glows */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,120,120,0.18) 0%, transparent 65%)" }}
        />
        <motion.div
          animate={{ opacity: [0.06, 0.14, 0.06] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,158,110,0.18) 0%, transparent 65%)" }}
        />
      </div>

      {/* Contenido */}
      <div className="relative z-20 max-w-3xl mx-auto md:mx-0 md:ml-[8%] px-6 text-left">
        {/* Halo oscuro detrás del texto */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 90% at 30% 50%, rgba(13,0,0,0.72) 0%, rgba(13,0,0,0.45) 55%, transparent 100%)",
            filter: "blur(18px)",
            transform: "scale(1.15)",
          }}
        />

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#A48888] text-sm font-semibold tracking-[0.3em] uppercase mb-6"
        >
          {tr.eyebrow}
        </motion.p>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-4"
        >
          {tr.heading_first}{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg, #E87878 0%, #E89E6E 100%)" }}
          >
            {tr.heading_last}
          </span>
        </motion.h1>

        {/* Rol */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[#E87878] text-xl md:text-2xl font-semibold mb-7"
        >
          {tr.role}
        </motion.p>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[#A48888] text-lg md:text-xl max-w-lg mb-9 leading-relaxed"
        >
          {tr.description}
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap items-center gap-5 mb-8"
        >
          <a
            href="#proyectos"
            className="group px-8 py-3.5 rounded-full bg-[#E87878] text-[#0d0000] text-base font-bold tracking-wide hover:bg-white transition-colors duration-200 flex items-center gap-2"
          >
            {tr.cta_primary}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contacto"
            className="px-8 py-3.5 rounded-full border border-white/25 text-base font-medium text-white/70 hover:border-white/60 hover:text-white transition-colors duration-200"
          >
            {tr.cta_secondary}
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="text-[#A48888] text-sm md:text-base border-t border-[#3c0000] pt-4 max-w-lg"
        >
          {tr.trust}
        </motion.p>
      </div>

    </section>
  );
}

/* ─── Collage ─────────────────────────────────────────────────────────── */
function CollageBackground({ tileLabels }: { tileLabels: Record<number, string> }) {
  return (
    <div className="absolute inset-0 z-0 p-2 grid grid-cols-4 grid-rows-3 gap-2">
      {TILES.map((tile, i) => (
        <motion.div
          key={tile.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          className={`relative overflow-hidden rounded-2xl ${tile.col} ${tile.row} ${tile.colStart} ${tile.rowStart}`}
        >
          <Image
            src={tile.image}
            alt={tileLabels[tile.id] ?? ""}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 50vw, 25vw"
            quality={85}
            priority={i < 4}
          />
          <div className="absolute inset-0 bg-[#0d0000]/10" />
          <div className="absolute bottom-2 left-3 z-10">
            <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-white/40">
              {tileLabels[tile.id]}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Formas SVG ──────────────────────────────────────────────────────── */
function TileShape({ shape, accent }: { shape: string; accent: string }) {
  const props = { stroke: accent, fill: "none", strokeWidth: "0.6", opacity: 0.25 };
  switch (shape) {
    case "box": return (
      <svg viewBox="0 0 80 80" className="w-3/4 h-3/4" {...props}>
        <path d="M40 10 L70 25 L70 55 L40 70 L10 55 L10 25 Z" />
        <path d="M40 10 L40 70" /><path d="M10 25 L70 25" /><path d="M10 55 L70 55" />
      </svg>
    );
    case "arch": return (
      <svg viewBox="0 0 120 60" className="w-3/4 h-3/4" {...props}>
        <rect x="10" y="10" width="30" height="45" /><rect x="80" y="10" width="30" height="45" />
        <path d="M10 10 Q60 -15 110 10" /><line x1="0" y1="55" x2="120" y2="55" />
      </svg>
    );
    case "sphere": return (
      <svg viewBox="0 0 80 80" className="w-3/4 h-3/4" {...props}>
        <circle cx="40" cy="40" r="30" /><ellipse cx="40" cy="40" rx="15" ry="30" />
        <ellipse cx="40" cy="40" rx="30" ry="10" />
      </svg>
    );
    case "room": return (
      <svg viewBox="0 0 80 70" className="w-3/4 h-3/4" {...props}>
        <polygon points="20,15 60,15 60,55 20,55" />
        <line x1="0" y1="0" x2="20" y2="15" /><line x1="80" y1="0" x2="60" y2="15" />
        <line x1="80" y1="70" x2="60" y2="55" /><line x1="0" y1="70" x2="20" y2="55" />
      </svg>
    );
    case "motion": return (
      <svg viewBox="0 0 120 50" className="w-3/4 h-3/4" {...props}>
        <polygon points="85,25 65,15 65,35" strokeOpacity="0.4" />
        <circle cx="90" cy="25" r="12" strokeOpacity="0.3" />
      </svg>
    );
    case "building": return (
      <svg viewBox="0 0 80 80" className="w-3/4 h-3/4" {...props}>
        <polygon points="20,70 20,20 50,10 50,60" /><polygon points="50,10 70,20 70,70 50,60" />
        <line x1="20" y1="70" x2="70" y2="70" />
        <rect x="25" y="25" width="6" height="8" /><rect x="35" y="25" width="6" height="8" />
      </svg>
    );
    case "cylinder": return (
      <svg viewBox="0 0 60 80" className="w-3/4 h-3/4" {...props}>
        <ellipse cx="30" cy="18" rx="22" ry="8" /><ellipse cx="30" cy="62" rx="22" ry="8" />
        <line x1="8" y1="18" x2="8" y2="62" /><line x1="52" y1="18" x2="52" y2="62" />
      </svg>
    );
    case "gear": return (
      <svg viewBox="0 0 80 80" className="w-3/4 h-3/4" {...props}>
        <circle cx="40" cy="40" r="20" /><circle cx="40" cy="40" r="8" />
        {Array.from({ length: 8 }, (_, i) => {
          const a = (i * Math.PI * 2) / 8;
          return <line key={i} x1={40 + 20 * Math.cos(a)} y1={40 + 20 * Math.sin(a)} x2={40 + 28 * Math.cos(a)} y2={40 + 28 * Math.sin(a)} strokeWidth="4" strokeOpacity="0.3" />;
        })}
      </svg>
    );
    default: return null;
  }
}
