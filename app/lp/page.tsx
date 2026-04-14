"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

/* ─── Config ──────────────────────────────────────────────────────────── */
const WHATSAPP_NUMBER = "543472581024";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola Giancarlo, vi tu anuncio y quiero saber más sobre tus servicios de Meta Ads."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

/* ─── Testimonios seleccionados ──────────────────────────────────────── */
const TESTIMONIALS = [
  {
    review:
      "Giancarlo did an exceptional job with all my creative requests. He works incredibly fast! I would easily place him in the top 1% of all the freelancers I've hired on Upwork so far.",
    project: "3D Packaging Renders",
    initials: "M",
  },
  {
    review:
      "Brilliant upworker. Communication is excellent and quality of work extremely high. Worked on many projects together and it's always a pleasure.",
    project: "3D Renders de producto",
    initials: "J",
  },
  {
    review:
      "Giancarlo went above and beyond. He was very responsive to requested changes and brought his own creativity to the project. Excellent work!",
    project: "Renderizado fotorrealista",
    initials: "S",
  },
];

/* ─── Helpers ────────────────────────────────────────────────────────── */
function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="text-[#E87878] text-xs font-semibold tracking-[0.3em] uppercase mb-3 flex items-center gap-2">
      <span className="w-6 h-px bg-[#E87878]" />
      {text}
    </p>
  );
}

function WhatsAppButton({ full = false }: { full?: boolean }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bf5a] text-white font-bold text-sm tracking-wide rounded-full transition-all duration-200 ${
        full ? "w-full justify-center py-4 px-6 text-base" : "px-5 py-2.5"
      }`}
    >
      <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {full ? "Escribime por WhatsApp" : "WhatsApp"}
    </a>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════════════ */
export default function LandingMetaAds() {
  return (
    <main className="bg-[#0d0000] text-white font-[family-name:var(--font-space-grotesk)] overflow-x-hidden">
      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bf5a] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 transition-all duration-200 hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* ── HEADER ────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-[#3c0000]/60 bg-[#0d0000]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-white tracking-tight">
            Giancarlo<span className="text-[#E87878]">.</span>
          </span>
          <WhatsAppButton />
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── PROBLEMS ──────────────────────────────────────────────────── */}
      <ProblemsSection />

      {/* ── WHAT'S INCLUDED ───────────────────────────────────────────── */}
      <IncludesSection />

      {/* ── SOCIAL PROOF ──────────────────────────────────────────────── */}
      <ProofSection />

      {/* ── PROCESS ───────────────────────────────────────────────────── */}
      <ProcessSection />

      {/* ── CTA FINAL ─────────────────────────────────────────────────── */}
      <CtaSection />

      {/* ── MINI FOOTER ───────────────────────────────────────────────── */}
      <footer className="border-t border-[#3c0000] py-6 px-6 text-center text-xs text-[#A48888]/40">
        © {new Date().getFullYear()} Giancarlo Serassio · Meta Ads & Marketing Digital
      </footer>
    </main>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative py-24 md:py-36 px-6 overflow-hidden">
      {/* Glow bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,120,120,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E87878]/20 bg-[#E87878]/5 text-[#E87878] text-xs font-medium tracking-widest uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E87878] animate-pulse" />
          Meta Ads · Facebook & Instagram
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Tu negocio merece anuncios que{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg, #E87878 0%, #E89E6E 100%)" }}
          >
            realmente convierten
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-[#A48888] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Gestiono campañas de Meta Ads en Facebook e Instagram para que llegues
          exactamente a quienes van a comprarte — sin desperdiciar presupuesto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <WhatsAppButton full />
          <a
            href="#como-funciona"
            className="text-sm font-medium text-[#A48888] hover:text-white transition-colors"
          >
            Ver cómo funciona ↓
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-sm mx-auto"
        >
          {[
            { value: "7+", label: "Años de exp." },
            { value: "150+", label: "Proyectos" },
            { value: "100+", label: "Clientes" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-[11px] text-[#A48888]/70 mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   PROBLEMS
══════════════════════════════════════════════════════════════════════ */
function ProblemsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const problems = [
    {
      icon: "💸",
      title: "Gastás plata y no ves resultados",
      desc: "Invertís en anuncios todos los meses pero las ventas no crecen. No sabés qué está fallando ni cómo arreglarlo.",
    },
    {
      icon: "🎯",
      title: "Tus anuncios no llegan a quien compra",
      desc: "Alcance alto, conversiones bajas. El problema no es el presupuesto — es que estás apuntando al público equivocado.",
    },
    {
      icon: "😵",
      title: "No tenés tiempo de aprender todo esto",
      desc: "Meta Ads cambia constantemente. Administrar campañas, creativos y métricas es un trabajo de tiempo completo.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#100000]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionLabel text="¿Te suena familiar?" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Los errores que queman el{" "}
            <span className="text-[#A48888] font-light">presupuesto publicitario</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-3xl border border-[#3c0000] bg-[#150000]"
            >
              <span className="text-3xl mb-4 block">{p.icon}</span>
              <h3 className="text-white font-semibold text-base mb-2">{p.title}</h3>
              <p className="text-[#A48888] text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   INCLUDES
══════════════════════════════════════════════════════════════════════ */
function IncludesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const items = [
    {
      num: "01",
      title: "Estrategia y audiencias",
      desc: "Análisis de tu negocio, competencia y público ideal. Definimos los segmentos exactos que van a ver tus anuncios.",
    },
    {
      num: "02",
      title: "Creativos que detienen el scroll",
      desc: "Diseño de copies, imágenes y videos pensados para Meta: hooks que enganchan en los primeros 3 segundos.",
    },
    {
      num: "03",
      title: "Gestión y optimización continua",
      desc: "Monitoreo diario de campañas, A/B testing de creativos y ajustes de puja para maximizar tu ROAS.",
    },
    {
      num: "04",
      title: "Reportes claros y sin vueltas",
      desc: "Cada semana recibís un reporte con los números que importan: costo por resultado, alcance y retorno real.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionLabel text="Qué incluye el servicio" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Todo lo que necesitás para{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #E87878 0%, #E89E6E 100%)" }}
            >
              escalar con Meta Ads
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-3xl border border-[#3c0000] bg-[#150000] hover:border-[#E87878]/20 transition-colors duration-300"
            >
              <span
                className="text-3xl font-bold flex-shrink-0 leading-none"
                style={{
                  backgroundImage: "linear-gradient(135deg, #E87878 0%, #E89E6E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.num}
              </span>
              <div>
                <h3 className="text-white font-semibold text-base mb-1.5">{item.title}</h3>
                <p className="text-[#A48888] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <WhatsAppButton full />
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   SOCIAL PROOF
══════════════════════════════════════════════════════════════════════ */
function ProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 px-6 bg-[#100000]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionLabel text="Resultados reales" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Lo que dicen{" "}
            <span className="text-[#A48888] font-light">los clientes</span>
          </h2>
        </motion.div>

        {/* Upwork badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center gap-6 p-5 rounded-2xl border border-[#3c0000] bg-[#150000] mb-8"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#14a800]/10 border border-[#14a800]/30 flex items-center justify-center">
              <img src="/images/Logos programas/Upwork.webp" alt="Upwork" className="w-5 h-5 object-contain" />
            </div>
            <span className="text-xs font-semibold text-[#A48888] tracking-wide">En Upwork</span>
          </div>
          <div className="w-px h-8 bg-[#3c0000]" />
          <div className="flex flex-wrap gap-6">
            <div>
              <p className="text-xl font-bold text-white">138</p>
              <p className="text-[10px] text-[#A48888]/60 tracking-wide">Proyectos completados</p>
            </div>
            <div>
              <p className="text-xl font-bold text-[#14a800]">100%</p>
              <p className="text-[10px] text-[#A48888]/60 tracking-wide">Job Success</p>
            </div>
            <div className="flex items-center">
              <span className="px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
                ★ Top Rated
              </span>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="flex flex-col gap-4 p-6 rounded-3xl border border-[#3c0000] bg-[#150000]"
            >
              <Stars />
              <p className="text-[#A48888] text-sm leading-relaxed flex-1">"{t.review}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-[#3c0000]">
                <div className="w-8 h-8 rounded-full bg-[#E87878]/10 border border-[#E87878]/20 flex items-center justify-center text-[#E87878] text-xs font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <span className="text-[11px] text-[#A48888]/60 tracking-wide">{t.project}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   PROCESS
══════════════════════════════════════════════════════════════════════ */
function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const steps = [
    {
      num: "1",
      title: "Diagnóstico gratuito",
      desc: "Revisamos tu cuenta publicitaria (o tu negocio si arrancás de cero), identificamos errores y oportunidades, y te doy un plan de acción concreto.",
    },
    {
      num: "2",
      title: "Lanzamos la campaña",
      desc: "Configuro el pixel, las audiencias y los creativos. En menos de una semana tus anuncios están activos.",
    },
    {
      num: "3",
      title: "Optimizamos y escalamos",
      desc: "Con datos reales de tu cuenta ajustamos lo que funciona y cortamos lo que no. El objetivo: más resultados con el mismo presupuesto.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel text="Cómo funciona" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Tres pasos para empezar a{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #E87878 0%, #E89E6E 100%)" }}
            >
              ver resultados
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-transparent via-[#E87878]/20 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-5 relative z-10"
                  style={{ background: "linear-gradient(135deg, #E87878 0%, #E89E6E 100%)" }}
                >
                  {step.num}
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-[#A48888] text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   CTA FINAL
══════════════════════════════════════════════════════════════════════ */
function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ nombre: "", email: "", negocio: "", website: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: form.nombre,
          email: form.email,
          mensaje: `Consulta desde landing Meta Ads. Negocio/marca: ${form.negocio}`,
          website: form.website,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ nombre: "", email: "", negocio: "", website: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="py-24 px-6 bg-[#100000] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E87878]/20 to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(232,120,120,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <SectionLabel text="Hablemos" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Pedí tu diagnóstico{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #E87878 0%, #E89E6E 100%)" }}
            >
              gratuito
            </span>
          </h2>
          <p className="text-[#A48888] text-base leading-relaxed mb-6">
            Sin compromiso ni costo. En una llamada de 30 minutos analizamos tu situación y te llevo un plan de acción real.
          </p>

          {/* What's included in diagnostic */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-2">
            {[
              { icon: "🔍", text: "Revisión de tu cuenta publicitaria o situación actual" },
              { icon: "🎯", text: "Identificación de audiencias ideales para tu negocio" },
              { icon: "⚡", text: "Detección de errores que están quemando tu presupuesto" },
              { icon: "📋", text: "Plan de acción con 3–5 puntos concretos para arrancar" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-2.5 p-3 rounded-xl border border-[#3c0000] bg-[#0d0000]">
                <span className="text-base flex-shrink-0">{item.icon}</span>
                <span className="text-sm text-[#A48888] leading-snug">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="p-8 rounded-3xl border border-[#3c0000] bg-[#150000]"
        >
          {status === "sent" ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-[#E87878]/10 border border-[#E87878]/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#E87878]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">¡Mensaje recibido!</h3>
              <p className="text-[#A48888] text-sm">Te contacto en menos de 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: "none" }}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Tu nombre", name: "nombre", placeholder: "Juan García", type: "text" },
                  { label: "Email", name: "email", placeholder: "juan@empresa.com", type: "email" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-[10px] font-semibold tracking-widest uppercase text-[#A48888]/60 mb-2">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      name={f.name}
                      value={form[f.name as keyof typeof form]}
                      onChange={handleChange}
                      required
                      placeholder={f.placeholder}
                      className="w-full bg-[#0d0000] border border-[#3c0000] text-white text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-[#E87878]/40 transition-colors placeholder-[#A48888]/30"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[10px] font-semibold tracking-widest uppercase text-[#A48888]/60 mb-2">
                  Tu negocio o marca
                </label>
                <input
                  type="text"
                  name="negocio"
                  value={form.negocio}
                  onChange={handleChange}
                  required
                  placeholder="Ej: tienda de ropa, restaurante, e-commerce..."
                  className="w-full bg-[#0d0000] border border-[#3c0000] text-white text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-[#E87878]/40 transition-colors placeholder-[#A48888]/30"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 rounded-full text-white text-sm font-bold tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
                style={{
                  background:
                    status === "error"
                      ? "#ef4444"
                      : "linear-gradient(135deg, #E87878 0%, #E89E6E 100%)",
                }}
              >
                {status === "loading" ? (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : status === "error" ? (
                  "Error al enviar, intentá de nuevo"
                ) : (
                  <>
                    Quiero mi diagnóstico gratuito
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>

              <div className="flex items-center gap-3 pt-1">
                <div className="flex-1 h-px bg-[#3c0000]" />
                <span className="text-[11px] text-[#A48888]/40 tracking-wide">o si preferís</span>
                <div className="flex-1 h-px bg-[#3c0000]" />
              </div>

              <WhatsAppButton full />
            </form>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-[#A48888]/40 mt-4"
        >
          Sin spam. Tus datos solo se usan para contactarte.
        </motion.p>
      </div>
    </section>
  );
}
