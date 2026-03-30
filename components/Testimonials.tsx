"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const UPWORK_URL = "https://www.upwork.com/freelancers/~01b2f61f6034e5a8b0";

const TESTIMONIALS = [
  {
    review: "Giancarlo did an exceptional job with all my creative requests. He works incredibly fast! I would easily place him in the top 1% of all the freelancers I've hired on Upwork so far. I will definitely be coming back for more business. Highly recommended!",
    project: "3D Packaging Renders for Gummy Vitamin Pouch",
  },
  {
    review: "Fabulous project. Giancarlo did a great job. He made great suggestions and the end design is really very beautiful. Highly recommended",
    project: "Video layout of stand Version B",
  },
  {
    review: "Giancarlo is a top rated upworker and did a fantastic job on our project. Great quality and promptly completed. Highly recommended",
    project: "Video layout of stand",
  },
  {
    review: "Brilliant upworker. Skilled in making 3D renders with Blender. Worked on many projects together and it's always a pleasure to work with him. Communication is excellent and quality of work extremely high",
    project: "3D renders of cleaning oven",
  },
  {
    review: "Brilliant upworker. Very talented at 3D renders. We have worked together more than 5 times and the work is always excellent. Recommended",
    project: "3D renders of cleaning oven",
  },
  {
    review: "Giancarlo went above and beyond. He was very responsive to requested changes and brought his own creativity to the project. Excellent work!",
    project: "Photorealistic rendering of products",
  },
  {
    review: "Excellent freelancer. Very skilled. Very pleased to have worked on another project together. Highly recommend",
    project: "3D renders of cleaning oven",
  },
  {
    review: "Hired Giancarlo for the 2nd time. Once again, he goes above and beyond to provide the exact renders we're looking for and gives creative input. I will be hiring this guy again and again every single time we need renders. Highly recommended!",
    project: "Photorealistic rendering of products",
  },
  {
    review: "Giancarlo was a great help. He was patient, made plenty of revisions, and was extremely responsive. Coming from someone that has had bad luck with freelancer talent, I would definitely recommend Giancarlo for 3d rendering needs.",
    project: "3d rendering for nutritional product",
  },
  {
    review: "Working with Giancarlo was amazing! Everything was done exactly as needed, super fast and always open to feedback and receptive to any edits needed!",
    project: "AquaSonic Toothbrush Rendering",
  },
  {
    review: "Giancarlo worked really closely with me to understand project needs and create a clear project proposal. During the project, Giancarlo took care of full details. The result was great renders that look like a photo!! I will definitely work with this agency again for my future projects.",
    project: "Renders Farmapiel Faceit",
  },
  {
    review: "Giancarlo delivered a set of custom jar mockups that I'll be able to use to present a variety of label designs. His communication, skills, and professionalism are top-tier and made the project extremely smooth. I feel lucky to be able to work with him and would always choose him for 3D modeling jobs in the future.",
    project: "Custom mockup: glass jar",
  },
];

const INITIAL_COUNT = 6;

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ review, project, index }: { review: string; project: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="flex flex-col gap-4 p-6 rounded-3xl border border-[#3c0000] bg-[#150000] hover:border-[#E87878]/20 transition-colors duration-300"
    >
      <Stars />
      <p className="text-[#A48888] text-sm leading-relaxed flex-1">"{review}"</p>
      <div className="flex items-center gap-2 pt-3 border-t border-[#3c0000]">
        <svg className="w-3 h-3 text-[#14a800] fill-current flex-shrink-0" viewBox="0 0 24 24">
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.Safe703c-2.386 0-4.335 1.515-5.104 3.607-.731-.472-1.862-1.013-3.083-1.013C8.935 7.049 7.387 8.6 7.387 10.5c0 1.343.817 2.515 2.044 3.109l-.013.054C8.819 15.449 7.741 17.5 6.03 17.5c-1.343 0-2.494-1.012-2.703-2.338L1.5 16.027C2.129 18.303 4.181 20 6.03 20c2.489 0 4.472-1.843 5.238-4.429.474.117.969.179 1.481.179 2.386 0 4.335-1.516 5.104-3.607.366.109.751.168 1.149.168 2.703 0 4.998-2.295 4.998-4.998.001-2.703-2.294-4.998-4.997-4.858z"/>
        </svg>
        <span className="text-[10px] font-mono text-[#A48888]/50 tracking-wide truncate">{project}</span>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { lang } = useLanguage();
  const tr = t[lang].testimonials;
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? TESTIMONIALS : TESTIMONIALS.slice(0, INITIAL_COUNT);
  const hidden = TESTIMONIALS.slice(INITIAL_COUNT);

  return (
    <section className="py-24 md:py-32 px-6 bg-[#100000]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
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
            className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-10"
          >
            {tr.heading}
            <span className="text-[#A48888] font-light">{tr.heading_sub}</span>
          </motion.h2>

          {/* Upwork stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 p-5 rounded-2xl border border-[#3c0000] bg-[#150000]"
          >
            {/* Upwork badge */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#14a800]/10 border border-[#14a800]/30 flex items-center justify-center flex-shrink-0">
                <img src="/images/Logos programas/Upwork.webp" alt="Upwork" className="w-5 h-5 object-contain" />
              </div>
              <span className="text-xs font-semibold text-[#A48888] tracking-wide">{tr.upwork_label}</span>
            </div>

            <div className="w-px h-8 bg-[#3c0000]" />

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-xl font-bold text-white">{tr.projects_value}</p>
                <p className="text-[10px] text-[#A48888]/60 tracking-wide">{tr.projects_label}</p>
              </div>
              <div>
                <p className="text-xl font-bold text-[#14a800]">{tr.success_value}</p>
                <p className="text-[10px] text-[#A48888]/60 tracking-wide">{tr.success_label}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
                  ★ {tr.top_rated}
                </span>
              </div>
            </div>

            <div className="ml-auto">
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-[#A48888] hover:text-[#14a800] transition-colors duration-200"
              >
                {tr.view_profile}
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((item, i) => (
            <TestimonialCard key={i} review={item.review} project={item.project} index={i} />
          ))}

          <AnimatePresence>
            {expanded && hidden.map((item, i) => (
              <TestimonialCard
                key={`extra-${i}`}
                review={item.review}
                project={item.project}
                index={INITIAL_COUNT + i}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#3c0000] text-sm font-medium text-[#A48888] hover:border-[#E87878]/40 hover:text-white transition-all duration-200"
          >
            {expanded ? tr.view_less : tr.view_more}
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
