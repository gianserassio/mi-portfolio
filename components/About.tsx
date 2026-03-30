"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

/* ─── Tools ────────────────────────────────────────────────────────── */
const TOOLS = [
  { name: "Blender",       logo: "/images/Logos programas/Blender.webp" },
  { name: "Photoshop",     logo: "/images/Logos programas/Photoshop.webp" },
  { name: "Illustrator",   logo: "/images/Logos programas/Illustrator.webp" },
  { name: "After Effects", logo: "/images/Logos programas/After Effects.webp" },
  { name: "Solidworks",    logo: "/images/Logos programas/Solidworks.webp" },
  { name: "Fusion 360",    logo: "/images/Logos programas/Fusion.webp" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { lang } = useLanguage();
  const tr = t[lang].about;

  return (
    <section id="sobre-mi" className="py-24 md:py-32 px-6 bg-[#100000]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#E87878] text-xs font-semibold tracking-[0.3em] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-[#E87878]" />
              {tr.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              {tr.heading}
              <br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #E87878 0%, #E89E6E 100%)" }}>
                {tr.heading_italic}
              </span>
            </h2>

            <div className="space-y-4 text-[#A48888] text-base leading-relaxed mb-8">
              <p>{tr.bio1}</p>
              <p>{tr.bio2}</p>
            </div>

            {/* Photo */}
            <div className="relative w-full max-w-sm aspect-[3/2] rounded-2xl overflow-hidden border border-[#3c0000]">
              <Image
                src="/images/Foto perfil.webp"
                alt="Giancarlo Serassio — Industrial Designer"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 384px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0000]/60 via-transparent to-transparent" />
              {["top-3 left-3 border-t border-l", "top-3 right-3 border-t border-r",
                "bottom-3 left-3 border-b border-l", "bottom-3 right-3 border-b border-r"].map((cls) => (
                <span key={cls} className={`absolute w-4 h-4 border-[#E87878]/50 ${cls}`} />
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#A48888]/60 mb-5">
              {tr.tools_label}
            </p>

            {/* Tool icon grid */}
            <div className="grid grid-cols-3 gap-3 mb-10">
              {TOOLS.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.06 }}
                  className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-[#3c0000] bg-[#150000] hover:border-[#E87878]/20 hover:bg-[#E87878]/[0.03] transition-all duration-200 cursor-default"
                >
                  <div className="relative w-11 h-11">
                    <Image src={tool.logo} alt={tool.name} fill className="object-contain" sizes="44px" />
                  </div>
                  <span className="text-[11px] font-medium text-[#A48888] text-center leading-tight">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#A48888]/60 mb-4">
              {tr.services_label}
            </p>
            <div className="space-y-3">
              {tr.services.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: 16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="flex items-start gap-3 p-3 rounded-xl border border-[#E89E6E]/20 bg-[#E89E6E]/5"
                >
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#E89E6E] flex-shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-[#E89E6E]">{s.name}</span>
                    <span className="text-[#A48888] text-sm"> — {s.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
