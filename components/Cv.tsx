"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const CV_PDF_URL = "/cv/Giancarlo_Serassio_CV_3D_Ecommerce_EN_2026.pdf";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="text-[#E87878] text-xs font-semibold tracking-[0.3em] uppercase mb-5 flex items-center gap-2">
      <span className="w-6 h-px bg-[#E87878]" />
      {text}
    </p>
  );
}

export default function Cv() {
  const { lang } = useLanguage();
  const tr = t[lang].cv;

  return (
    <section className="bg-[#0d0000]">
      <div className="max-w-5xl mx-auto bg-[#171112] px-6 md:px-16 pt-40 pb-24 md:pb-32 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Reveal>
          <p className="text-[#A48888] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
            {tr.eyebrow}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4">
            {tr.name}
          </h1>
          <p className="text-[#E87878] text-lg md:text-xl font-semibold mb-2">{tr.role}</p>
          <p className="text-[#A48888] text-sm md:text-base mb-8">{tr.location}</p>
          <a
            href={CV_PDF_URL}
            download
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#E87878] text-[#0d0000] text-sm font-bold tracking-wide hover:bg-white transition-colors duration-200"
          >
            {tr.download}
            <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
            </svg>
          </a>
        </Reveal>

        {/* Summary */}
        <div className="mt-16 md:mt-20">
          <Reveal>
            <SectionLabel text={tr.summary_label} />
            <p className="text-[#D6C4C4] text-base md:text-lg leading-relaxed max-w-3xl">{tr.summary}</p>
          </Reveal>
        </div>

        {/* Core Expertise */}
        <div className="mt-16 md:mt-20">
          <Reveal>
            <SectionLabel text={tr.expertise_label} />
          </Reveal>
          <div className="divide-y divide-[#2a1c1c] border-t border-[#2a1c1c]">
            {tr.expertise.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.05}>
                <div className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                  <h3 className="text-white font-semibold text-sm sm:w-52 flex-shrink-0">{item.name}</h3>
                  <p className="text-[#D6C4C4] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mt-16 md:mt-20">
          <Reveal>
            <SectionLabel text={tr.experience_label} />
          </Reveal>
          <div className="space-y-5">
            {tr.experience.map((job, i) => (
              <Reveal key={job.title + job.company} delay={i * 0.06}>
                <div className="p-6 rounded-2xl border border-[#2a1c1c] bg-[#0d0808]">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="text-white font-bold text-base md:text-lg">
                      {job.title} <span className="text-[#E89E6E] font-semibold">· {job.company}</span>
                    </h3>
                    <span className="text-[#A48888] text-xs font-mono whitespace-nowrap">{job.dates}</span>
                  </div>
                  <p className="text-[#A48888] text-xs mb-4">{job.location}</p>
                  <ul className="space-y-2">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-[#D6C4C4] leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#E87878] flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Selected Client Work */}
        <div className="mt-16 md:mt-20">
          <Reveal>
            <SectionLabel text={tr.clientwork_label} />
          </Reveal>
          <div className="divide-y divide-[#2a1c1c] border-t border-[#2a1c1c]">
            {tr.clientwork.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.05}>
                <div className="py-4">
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="text-white font-semibold text-sm">{c.name}</h3>
                    <span className="text-[#E87878] text-[11px] font-medium tracking-wide">{c.tag}</span>
                  </div>
                  <p className="text-[#D6C4C4] text-sm leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Education, Certification & Languages */}
        <div className="mt-16 md:mt-20">
          <Reveal>
            <SectionLabel text={tr.education_label} />
            <div className="p-6 rounded-2xl border border-[#2a1c1c] bg-[#0d0808] space-y-4 max-w-2xl">
              {tr.education.map((e) => (
                <div key={e.name} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <span className="text-sm text-white">
                    <span className="font-semibold">{e.name}</span>
                    <span className="text-[#A48888]"> — {e.detail}</span>
                  </span>
                  <span className="text-[#A48888] text-xs font-mono whitespace-nowrap">{e.dates}</span>
                </div>
              ))}
              {tr.certifications.map((c) => (
                <div key={c.name} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <span className="text-sm text-white">{c.name}</span>
                  <span className="text-[#A48888] text-xs font-mono whitespace-nowrap">{c.dates}</span>
                </div>
              ))}
              <div className="pt-3 border-t border-[#2a1c1c]">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E89E6E]">{tr.languages_label}</span>
                <p className="text-sm text-[#D6C4C4] mt-1">{tr.languages}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      </div>
    </section>
  );
}
