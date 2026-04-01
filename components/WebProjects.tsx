"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const WEB_PROJECTS = [
  {
    titulo: { en: "Lic. Lucas Serassio", es: "Lic. Lucas Serassio" },
    descripcion: {
      en: "Professional website for a licensed psychologist — clean, minimal design focused on trust and clarity.",
      es: "Sitio web profesional para un psicólogo licenciado — diseño limpio y minimalista centrado en la confianza y la claridad.",
    },
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    año: "2025",
    url: "https://www.liclucasserassio.com/",
    cover: "/images/Webs/Lic Lucas Serassio.png",
  },
  {
    titulo: { en: "Annapurna Outdoors", es: "Annapurna Outdoors" },
    descripcion: {
      en: "E-commerce site for an Argentine outdoor clothing and gear brand — full product catalogue and shopping experience.",
      es: "Sitio e-commerce para una marca argentina de ropa y equipamiento outdoor — catálogo completo y experiencia de compra.",
    },
    tags: ["Shopify", "CSS", "UX"],
    año: "2025",
    url: "https://www.annapurnaoutdoors.com/",
    cover: "/images/Webs/Annapurna.png",
  },
  {
    titulo: { en: "Evi Rost", es: "Evi Rost" },
    descripcion: {
      en: "Personal brand site for a content creator and digital marketing professional — portfolio, services and social presence.",
      es: "Sitio de marca personal para una creadora de contenido y marketing digital — portfolio, servicios y presencia en redes.",
    },
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    año: "2025",
    url: "https://www.evirost.com/",
    cover: "/images/Webs/Evi Rost.png",
  },
];

const BADGE = { bg: "bg-[#7898E8]/10", text: "text-[#7898E8]", dot: "bg-[#7898E8]" };

export default function WebProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { lang } = useLanguage();

  const eyebrow = lang === "en" ? "Web Design" : "Diseño Web";
  const heading = lang === "en" ? "Web" : "Webs";
  const heading_sub = lang === "en" ? " projects" : " diseñadas";
  const visitLabel = lang === "en" ? "Visit site" : "Visitar sitio";

  return (
    <section className="pb-24 md:pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="mb-14">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#7898E8] text-xs font-semibold tracking-[0.3em] uppercase mb-3 flex items-center gap-2"
          >
            <span className="w-6 h-px bg-[#7898E8]" />
            {eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            {heading}
            <span className="text-[#8898A4] font-light">{heading_sub}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WEB_PROJECTS.map((p, i) => (
            <WebCard key={i} project={p} index={i} visitLabel={visitLabel} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WebCard({
  project,
  index,
  visitLabel,
  lang,
}: {
  project: (typeof WEB_PROJECTS)[number];
  index: number;
  visitLabel: string;
  lang: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const comingSoon = lang === "en" ? "Coming soon" : "Próximamente";

  const card = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className={`group bg-[#00071A] border border-[#001a3c] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col ${project.url ? "hover:border-[#7898E8]/40 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(120,152,232,0.07)] cursor-pointer" : "cursor-default opacity-80"}`}
    >
      {/* Image */}
      <div className="relative h-52 bg-[#000d1a] overflow-hidden flex-shrink-0">
        <Image
          src={project.cover}
          alt={project.titulo[lang as "en" | "es"]}
          fill
          className={`object-cover object-top transition-transform duration-500 ${project.url ? "group-hover:scale-105" : ""}`}
          sizes="(max-width: 768px) 100vw, 33vw"
          quality={85}
        />

        <span className="absolute top-3 right-3 text-[10px] font-mono text-[#8898A4]/60 bg-[#000d1a]/60 px-2 py-1 rounded-full z-10">
          {project.año}
        </span>

        {!project.url && (
          <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-widest uppercase text-[#7898E8] bg-[#000d1a]/80 border border-[#7898E8]/30 px-2.5 py-1 rounded-full z-10">
            {comingSoon}
          </span>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#00071A] via-transparent to-transparent opacity-60" />

        {/* Hover overlay — only when URL exists */}
        {project.url && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#000d1a]/30">
            <span className="text-white text-[11px] font-semibold tracking-widest uppercase bg-[#000d1a]/70 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 flex items-center gap-2">
              {visitLabel}
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <span className={`inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full w-fit ${BADGE.bg} ${BADGE.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${BADGE.dot}`} />
          {lang === "en" ? "Web Design" : "Diseño Web"}
        </span>
        <h3 className="text-lg font-bold text-white group-hover:text-[#7898E8] transition-colors leading-snug">
          {project.titulo[lang as "en" | "es"]}
        </h3>
        <p className="text-sm text-[#8898A4] leading-relaxed flex-1">
          {project.descripcion[lang as "en" | "es"]}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#001a3c]">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-medium text-[#8898A4] bg-[#000d1a] border border-[#001a3c] px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  if (project.url) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        {card}
      </a>
    );
  }

  return card;
}
