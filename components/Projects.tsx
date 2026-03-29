"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const BADGE: Record<string, { bg: string; text: string; dot: string }> = {
  "3D Modeling":  { bg: "bg-[#E87878]/10", text: "text-[#E87878]", dot: "bg-[#E87878]" },
  "Modelado 3D":  { bg: "bg-[#E87878]/10", text: "text-[#E87878]", dot: "bg-[#E87878]" },
  Render:         { bg: "bg-[#E89E6E]/10", text: "text-[#E89E6E]", dot: "bg-[#E89E6E]" },
  Animation:      { bg: "bg-[#FF6B6B]/10", text: "text-[#FF6B6B]", dot: "bg-[#FF6B6B]" },
  Animación:      { bg: "bg-[#FF6B6B]/10", text: "text-[#FF6B6B]", dot: "bg-[#FF6B6B]" },
};

/* ─── Images per project (index matches tr.items order) ────────────────
   cover → shown on the card
   gallery → opened in the lightbox on click
──────────────────────────────────────────────────────────────────────── */
const PROJECT_IMAGES: Record<number, { cover: string; gallery: string[] }> = {
  1: {
    cover: "/images/Craftd/Craftd _Banner.png",
    gallery: [
      "/images/Craftd/Craftd _Banner.png",
      "/images/Craftd/CRGD3CRB_Craftd Glass Dispenser Set_350 ML_Style 3_Black Gold_Large.jpg",
      "/images/Craftd/CRGD3CRB_Craftd Glass Dispenser Set_350 ML_Style 3_Clear Black_Large.jpg",
      "/images/Craftd/CRGD3CRB_Craftd Glass Dispenser Set_350 ML_Style 3_Clear Bronze_Large.jpg",
      "/images/Craftd/CRGD3CRB_Craftd Glass Dispenser Set_350 ML_Style 3_Clear Gold_Large.jpg",
      "/images/Craftd/CRGD3CRB_Craftd Glass Dispenser Set_350 ML_Style 3_Clear Silver_Large.jpg",
      "/images/Craftd/CRGD3CRB_Craftd Glass Dispenser Set_350 ML_Style 3_Cream Gold_Large.jpg",
      "/images/Craftd/CRGD8CLG_Glass Dispenser Set 500ML Style 8_Solid Clear Gold_Large.jpg",
      "/images/Craftd/CRGD8FRG_Glass Dispenser Set 500ML Style 8_Flower Pattern Gold_Large.jpg",
      "/images/Craftd/CRGD8GYS_Glass Dispenser Set 500ML Style 8_Smokey Grey Silver_Large.jpg",
      "/images/Craftd/CRM1BLK_Craftd Potato Masher Style 1_Black_Large.jpg",
      "/images/Craftd/CRM1CMG_Craftd Potato Masher Style 1_Cream Gold_Large.jpg",
      "/images/Craftd/CRM1OLV_Craftd Potato Masher Style 1_Grey Olive_Large.jpg",
      "/images/Craftd/CRM1SGG_Craftd Potato Masher Style 1_Sage Green Gold_Large.jpg",
      "/images/Craftd/CRMF7BLK Portable_Rechargeable Milk Frother Style 7_Black_Large.jpg",
      "/images/Craftd/CRMF7BLK Portable_Rechargeable Milk Frother Style 7_Cream_Large.jpg",
      "/images/Craftd/CRMF7BLK Portable_Rechargeable Milk Frother Style 7_Latte_Large.jpg",
      "/images/Craftd/CRMF7BLK Portable_Rechargeable Milk Frother Style 7_Sage Green_Large.jpg",
      "/images/Craftd/CRSC3BLK_Craftd Soft-Grip Cookie Scoop_Style 3_Cannoli Cream_Large.jpg",
      "/images/Craftd/CRSC3BLK_Craftd Soft-Grip Cookie Scoop_Style 3_Garden Green_Large.jpg",
      "/images/Craftd/CRSC3BLK_Craftd Soft-Grip Cookie Scoop_Style 3_Grey Olive_Large.jpg",
      "/images/Craftd/CRSC3BLK_Craftd Soft-Grip Cookie Scoop_Style 3_Reseda_Large.jpg",
      "/images/Craftd/CRSC3BLK_Craftd Soft-Grip Cookie Scoop_Style 3_Roman Coffee_Large.jpg",
      "/images/Craftd/CRSC3BLK_Craftd Soft-Grip Cookie Scoop_Style 3_Taupe_Large.jpg",
      "/images/Craftd/CRT2BLKG_Craftd Craftd Silicone Tongs_9\" +12__Style 2_Black_Gold_Large.jpg",
      "/images/Craftd/CRT2BLKG_Craftd Craftd Silicone Tongs_9\" +12__Style 2_Black_Silver_Large.jpg",
      "/images/Craftd/CRT2BLKG_Craftd Craftd Silicone Tongs_9\" +12__Style 2_Cream_Bronze_Large.jpg",
      "/images/Craftd/CRT2BLKG_Craftd Craftd Silicone Tongs_9\" +12__Style 2_Cream_Gold_Large.jpg",
      "/images/Craftd/CRT2GOLV_Craftd Craftd Silicone Tongs_9\" +12__Style 2_Garden_Green_Silver_Large.jpg",
      "/images/Craftd/CRT2GOLV_Craftd Craftd Silicone Tongs_9\" +12__Style 2_GreyOlive_Silver_Large.jpg",
      "/images/Craftd/CRT2GOLV_Craftd Craftd Silicone Tongs_9\" +12__Style 2_Pink_Gold_Large.jpg",
      "/images/Craftd/CRT2GOLV_Craftd Craftd Silicone Tongs_9\" +12__Style 2_Slate_Silver_Large.jpg",
      "/images/Craftd/CRT2GOLV_Craftd Craftd Silicone Tongs_9\" +12__Style 2_Taupe_Silver_Large.jpg",
    ],
  },
  5: {
    cover: "/images/Fused/Scene_1_V6.png",
    gallery: [
      "/images/Fused/Scene_1_V6.png",
      "/images/Fused/1 - Front.png",
      "/images/Fused/2 - Back.png",
      "/images/Fused/3 - 30° front-right.png",
      "/images/Fused/4 - 30° front-left.png",
      "/images/Fused/5 - Top-down leve.png",
      "/images/Fused/6 - Grouped 3-pack.png",
      "/images/Fused/7 - Grouped 2-pack.png",
      "/images/Fused/Gummie.png",
      "/images/Fused/Gummie_V1.png",
      "/images/Fused/Gummie_V2.png",
      "/images/Fused/Gummie_V3.png",
      "/images/Fused/Gummie_V4.png",
      "/images/Fused/Gummie_V5.png",
      "/images/Fused/Gummie_V6.png",
      "/images/Fused/Gummie_V7.png",
      "/images/Fused/Gummie_V7.2.png",
    ],
  },
  4: {
    cover: "/images/Numera Lighting/982aa5239855637.6931d2394e393.png",
    gallery: [
      "/images/Numera Lighting/982aa5239855637.6931d2394e393.png",
      "/images/Numera Lighting/NL1105.01.png",
      "/images/Numera Lighting/NL1262.03.png",
      "/images/Numera Lighting/NL1262.03_Scene.png",
      "/images/Numera Lighting/NL1357.01_Scene.png",
      "/images/Numera Lighting/NL1357.01_v2.png",
      "/images/Numera Lighting/NL1364.01.png",
      "/images/Numera Lighting/NL1432.02 from Giancarlo.png",
      "/images/Numera Lighting/NL1535.01 - Scene 2.png",
      "/images/Numera Lighting/NL1580.01 - Scene_2.png",
      "/images/Numera Lighting/NL1580.01.png",
      "/images/Numera Lighting/NL1585.01.png",
      "/images/Numera Lighting/NL1585.01_Scene.png",
      "/images/Numera Lighting/002fce239855637.6931d2394c5b8.png",
      "/images/Numera Lighting/06170b239855637.6931d2394b8c8.png",
      "/images/Numera Lighting/0ac4ab239855637.6931d2394ad48.png",
      "/images/Numera Lighting/28e9bd239855637.6931d23b2fdd3.png",
      "/images/Numera Lighting/49d3cd239855637.6931d23b31b4a.png",
      "/images/Numera Lighting/6f3823239855637.6931d2394c0a4.png",
      "/images/Numera Lighting/8109d3239855637.6931d23b306c3.png",
      "/images/Numera Lighting/91b412239855637.6931d2394d794.png",
      "/images/Numera Lighting/b9c12c239855637.6931d2394b2f1.png",
      "/images/Numera Lighting/c31c30239855637.6931d23b2f5ba.png",
      "/images/Numera Lighting/c531c6239855637.6931d23b2ed3e.png",
      "/images/Numera Lighting/d0d89d239855637.6931d23b2e491.png",
      "/images/Numera Lighting/ef6005239855637.6931d23b30ffb.png",
      "/images/Numera Lighting/Gemini_Generated_Image_kk7skekk7skekk7s.png",
    ],
  },
  3: {
    cover: "/images/Friday/download (9).png",
    gallery: [
      "/images/Friday/Aura Pro.png",
      "/images/Friday/Aura.png",
      "/images/Friday/Fever 102.png",
      "/images/Friday/Aura Pro - Black.png",
      "/images/Friday/Aura Pro - Green.png",
      "/images/Friday/Aura Pro - Lunar.png",
      "/images/Friday/download.png",
      "/images/Friday/download (1).png",
      "/images/Friday/download (2).png",
      "/images/Friday/download (3).png",
      "/images/Friday/download (4).png",
      "/images/Friday/download (5).png",
      "/images/Friday/download (6).png",
      "/images/Friday/download (7).png",
      "/images/Friday/download (8).png",
      "/images/Friday/download (9).png",
    ],
  },
  2: {
    cover: "/images/Monster Vape Laps/Vr_Scene_Test.png",
    gallery: [
      "/images/Monster Vape Laps/Vr_Scene_Test.png",
      "/images/Monster Vape Laps/MVL_Booth_1.png",
      "/images/Monster Vape Laps/MVL_Booth_2.png",
      "/images/Monster Vape Laps/MVL_Booth_3.png",
      "/images/Monster Vape Laps/MVL Embossed.png",
      "/images/Monster Vape Laps/Bottles - (1).png",
      "/images/Monster Vape Laps/Bottles - (2).png",
      "/images/Monster Vape Laps/Bottles - (3).png",
      "/images/Monster Vape Laps/Bottles - (4).png",
      "/images/Monster Vape Laps/Bottles - (5).png",
      "/images/Monster Vape Laps/Bottles - (6).png",
      "/images/Monster Vape Laps/Bottles - (7).png",
      "/images/Monster Vape Laps/Bottles - (8).png",
      "/images/Monster Vape Laps/Bottles - (9).png",
      "/images/Monster Vape Laps/Bottles - (10).png",
      "/images/Monster Vape Laps/MINI_Device A - (1).png",
      "/images/Monster Vape Laps/MINI_Device A - (2).png",
      "/images/Monster Vape Laps/MINI_Device A - (3).png",
      "/images/Monster Vape Laps/MINI_Device A - (4).png",
      "/images/Monster Vape Laps/MINI_Device A - (5).png",
      "/images/Monster Vape Laps/Monster80K_POS_50mg_Front - (1).png",
      "/images/Monster Vape Laps/Monster80K_POS_50mg_Front - (2).png",
      "/images/Monster Vape Laps/Monster80K_POS_50mg_Front - (3).png",
      "/images/Monster Vape Laps/Monster80K_POS_50mg_Front - (4).png",
      "/images/Monster Vape Laps/Monster80K_POS_50mg_Front - (5).png",
      "/images/Monster Vape Laps/Monster80K_POS_50mg_Left - (1).png",
      "/images/Monster Vape Laps/Monster80K_POS_50mg_Left - (2).png",
      "/images/Monster Vape Laps/Monster80K_POS_50mg_Left - (3).png",
      "/images/Monster Vape Laps/Monster80K_POS_50mg_Left - (4).png",
      "/images/Monster Vape Laps/Monster80K_POS_50mg_Left - (5).png",
      "/images/Monster Vape Laps/Monster80K_POS_50mg_Right - (1).png",
      "/images/Monster Vape Laps/Monster80K_POS_50mg_Right - (2).png",
      "/images/Monster Vape Laps/Monster80K_POS_50mg_Right - (3).png",
      "/images/Monster Vape Laps/Monster80K_POS_50mg_Right - (4).png",
      "/images/Monster Vape Laps/Monster80K_POS_50mg_Right - (5).png",
      "/images/Monster Vape Laps/Monster80K_POS_Open_50mg_Front - (1).png",
      "/images/Monster Vape Laps/Monster80K_POS_Open_50mg_Front - (2).png",
      "/images/Monster Vape Laps/Monster80K_POS_Open_50mg_Front - (3).png",
      "/images/Monster Vape Laps/Monster80K_POS_Open_50mg_Front - (4).png",
      "/images/Monster Vape Laps/Monster80K_POS_Open_50mg_Front - (5).png",
      "/images/Monster Vape Laps/Monster80K_POS_Open_50mg_Left - (1).png",
      "/images/Monster Vape Laps/Monster80K_POS_Open_50mg_Left - (2).png",
      "/images/Monster Vape Laps/Monster80K_POS_Open_50mg_Left - (3).png",
      "/images/Monster Vape Laps/Monster80K_POS_Open_50mg_Left - (4).png",
      "/images/Monster Vape Laps/Monster80K_POS_Open_50mg_Left - (5).png",
      "/images/Monster Vape Laps/Monster80K_POS_Open_50mg_Right - (1).png",
      "/images/Monster Vape Laps/Monster80K_POS_Open_50mg_Right - (2).png",
      "/images/Monster Vape Laps/Monster80K_POS_Open_50mg_Right - (3).png",
      "/images/Monster Vape Laps/Monster80K_POS_Open_50mg_Right - (4).png",
      "/images/Monster Vape Laps/Monster80K_POS_Open_50mg_Right - (5).png",
      "/images/Monster Vape Laps/Monter_80K_Box_Front -0001.png",
      "/images/Monster Vape Laps/Monter_80K_Box_Front -0002.png",
      "/images/Monster Vape Laps/Monter_80K_Box_Front -0003.png",
      "/images/Monster Vape Laps/Monter_80K_Box_Front -0004.png",
      "/images/Monster Vape Laps/Monter_80K_Box_Front -0005.png",
      "/images/Monster Vape Laps/Monter_80K_Box_Left -0001.png",
      "/images/Monster Vape Laps/Monter_80K_Box_Left -0002.png",
      "/images/Monster Vape Laps/Monter_80K_Box_Left -0003.png",
      "/images/Monster Vape Laps/Monter_80K_Box_Left -0004.png",
      "/images/Monster Vape Laps/Monter_80K_Box_Left -0005.png",
      "/images/Monster Vape Laps/Monter_80K_Box_Right -0001.png",
      "/images/Monster Vape Laps/Monter_80K_Box_Right -0002.png",
      "/images/Monster Vape Laps/Monter_80K_Box_Right -0003.png",
      "/images/Monster Vape Laps/Monter_80K_Box_Right -0004.png",
      "/images/Monster Vape Laps/Monter_80K_Box_Right -0005.png",
    ],
  },
  0: {
    cover: "/images/Odyssey/Portada.png",
    gallery: [
      "/images/Odyssey/Portada.png",
      "/images/Odyssey/Angle_Png (1).png",
      "/images/Odyssey/Angle_Png (2).png",
      "/images/Odyssey/Angle_Png (3).png",
      "/images/Odyssey/Angle_Png (4).png",
      "/images/Odyssey/Angle_Png (5).png",
      "/images/Odyssey/Angle_Png (6).png",
      "/images/Odyssey/Angle_Png (7).png",
      "/images/Odyssey/Grupo 1.png",
      "/images/Odyssey/Grupo 1-1.png",
      "/images/Odyssey/Grupo 2.png",
      "/images/Odyssey/Grupo 2-2.png",
      "/images/Odyssey/Grupo 3.png",
      "/images/Odyssey/Grupo 3-2.png",
      "/images/Odyssey/Grupo 4.png",
      "/images/Odyssey/Grupo 4-2.png",
      "/images/Odyssey/Grupo 5.png",
      "/images/Odyssey/Grupo 5-2.png",
      "/images/Odyssey/Grupo 6.png",
      "/images/Odyssey/Grupo 6-2.png",
      "/images/Odyssey/Grupo 7.png",
      "/images/Odyssey/Grupo 7-2.png",
      "/images/Odyssey/02_0001.png",
      "/images/Odyssey/02_0002.png",
      "/images/Odyssey/02_0003.png",
      "/images/Odyssey/02_0004.png",
      "/images/Odyssey/02_0005.png",
      "/images/Odyssey/02_0006.png",
      "/images/Odyssey/02_0007.png",
      "/images/Odyssey/03_.png0001.png",
      "/images/Odyssey/03_.png0002.png",
      "/images/Odyssey/03_.png0003.png",
      "/images/Odyssey/03_.png0004.png",
      "/images/Odyssey/03_.png0005.png",
      "/images/Odyssey/03_.png0006.png",
      "/images/Odyssey/03_.png0007.png",
      "/images/Odyssey/Gummy.png",
    ],
  },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { lang } = useLanguage();
  const tr = t[lang].projects;

  const [gallery, setGallery] = useState<{ images: string[]; title: string } | null>(null);

  return (
    <>
      <section id="proyectos" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div ref={ref} className="mb-14">
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[#E87878] text-xs font-semibold tracking-[0.3em] uppercase mb-3 flex items-center gap-2"
            >
              <span className="w-6 h-px bg-[#E87878]" />
              {tr.eyebrow}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              {tr.heading}
              <span className="text-[#A48888] font-light">{tr.heading_sub}</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tr.items.map((p, i) => (
              <ProjectCard
                key={i}
                project={p}
                index={i}
                images={PROJECT_IMAGES[i]}
                onOpenGallery={(imgs) => setGallery({ images: imgs, title: p.titulo })}
              />
            ))}
          </div>
        </div>
      </section>

      {gallery && (
        <ProjectGallery
          images={gallery.images}
          title={gallery.title}
          onClose={() => setGallery(null)}
        />
      )}
    </>
  );
}

/* ─── Project Card ─────────────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  images,
  onOpenGallery,
}: {
  project: { titulo: string; categoria: string; descripcion: string; tags: readonly string[]; año: string };
  index: number;
  images?: { cover: string; gallery: string[] };
  onOpenGallery: (images: string[]) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const { lang } = useLanguage();
  const badge = BADGE[project.categoria] ?? { bg: "bg-[#E87878]/10", text: "text-[#E87878]", dot: "bg-[#E87878]" };

  const iconShape =
    project.categoria === "3D Modeling" || project.categoria === "Modelado 3D" ? "box"
    : project.categoria === "Render" ? "sphere"
    : "motion";

  const galleryLabel = lang === "en"
    ? `View gallery · ${images?.gallery.length} images`
    : `Ver galería · ${images?.gallery.length} imágenes`;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      onClick={images ? () => onOpenGallery(images.gallery) : undefined}
      className={`group bg-[#150000] border border-[#3c0000] hover:border-[#E87878]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(232,120,120,0.07)] flex flex-col ${images ? "cursor-pointer" : "cursor-default"}`}
    >
      {/* Image area */}
      <div className="relative h-52 bg-[#1a0000] overflow-hidden flex-shrink-0">
        {images?.cover ? (
          <Image
            src={images.cover}
            alt={project.titulo}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={85}
          />
        ) : (
          <>
            <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`g-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E87878" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#g-${index})`} />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <ProjectIcon shape={iconShape} />
            </div>
          </>
        )}

        <span className="absolute top-3 right-3 text-[10px] font-mono text-[#A48888]/60 bg-[#0d0000]/60 px-2 py-1 rounded-full z-10">
          {project.año}
        </span>

        <div className="absolute inset-0 bg-gradient-to-t from-[#150000] via-transparent to-transparent opacity-60" />

        {/* Hover overlay: gallery hint */}
        {images && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0d0000]/30">
            <span className="text-white text-[11px] font-semibold tracking-widest uppercase bg-[#0d0000]/70 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
              {galleryLabel}
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <span className={`inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full w-fit ${badge.bg} ${badge.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
          {project.categoria}
        </span>
        <h3 className="text-lg font-bold text-white group-hover:text-[#E87878] transition-colors leading-snug">
          {project.titulo}
        </h3>
        <p className="text-sm text-[#A48888] leading-relaxed flex-1">{project.descripcion}</p>
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#3c0000]">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-medium text-[#A48888] bg-[#1a0000] border border-[#3c0000] px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Gallery — collection grid + zoom ────────────────────────────── */
function ProjectGallery({
  images,
  title,
  onClose,
}: {
  images: string[];
  title: string;
  onClose: () => void;
}) {
  const [zoomed, setZoomed] = useState<number | null>(null);

  const prevZoom = useCallback(() => setZoomed((z) => z !== null ? (z - 1 + images.length) % images.length : null), [images.length]);
  const nextZoom = useCallback(() => setZoomed((z) => z !== null ? (z + 1) % images.length : null), [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") zoomed !== null ? setZoomed(null) : onClose();
      if (e.key === "ArrowLeft" && zoomed !== null) prevZoom();
      if (e.key === "ArrowRight" && zoomed !== null) nextZoom();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, zoomed, prevZoom, nextZoom]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex flex-col bg-[#0d0000] backdrop-blur-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#3c0000] flex-shrink-0">
        <div>
          <span className="text-white font-bold tracking-tight">{title}</span>
          <span className="text-[#A48888] text-xs font-mono ml-3">{images.length} images</span>
        </div>
        <button onClick={onClose} className="text-[#A48888] hover:text-white transition-colors p-1">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 max-w-7xl mx-auto">
          {images.map((src, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: i * 0.015 }}
              onClick={() => setZoomed(i)}
              className="relative aspect-square rounded-xl overflow-hidden group/img bg-[#150000]"
            >
              <Image
                src={src}
                alt={`${title} ${i + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover/img:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                quality={70}
              />
              <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors duration-200" />
              <span className="absolute bottom-1.5 right-2 text-[9px] font-mono text-white/40 opacity-0 group-hover/img:opacity-100 transition-opacity">
                {i + 1}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Zoom overlay */}
      {zoomed !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[110] flex flex-col bg-[#0d0000]/95 backdrop-blur-md"
          onClick={() => setZoomed(null)}
        >
          {/* Zoom header */}
          <div
            className="flex items-center justify-between px-6 py-3 flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-[#A48888] text-xs font-mono">{zoomed + 1} / {images.length}</span>
            <button onClick={() => setZoomed(null)} className="text-[#A48888] hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Zoomed image */}
          <div className="flex-1 flex items-center justify-center px-16 min-h-0 relative" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-full max-w-3xl">
              <Image
                key={zoomed}
                src={images[zoomed]}
                alt={`${title} ${zoomed + 1}`}
                fill
                className="object-contain"
                quality={90}
                sizes="(max-width: 768px) 100vw, 70vw"
              />
            </div>
            <button
              onClick={prevZoom}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-[#3c0000] bg-[#150000]/80 text-[#A48888] hover:text-white hover:border-[#E87878]/40 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextZoom}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-[#3c0000] bg-[#150000]/80 text-[#A48888] hover:text-white hover:border-[#E87878]/40 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

/* ─── SVG icon fallback ────────────────────────────────────────────── */
function ProjectIcon({ shape }: { shape: string }) {
  const color = shape === "box" ? "#E87878" : shape === "sphere" ? "#E89E6E" : "#FF6B6B";
  return (
    <svg className="w-16 h-16 opacity-20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="0.8">
      {shape === "box" && (<><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>)}
      {shape === "sphere" && (<><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /></>)}
      {shape === "motion" && (<polygon points="5 3 19 12 5 21 5 3" />)}
    </svg>
  );
}
