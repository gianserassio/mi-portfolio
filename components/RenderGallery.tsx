"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import { CoverflowCarousel, type CoverflowSlide } from "@/components/CoverflowCarousel";

export default function RenderGallery({ slides }: { slides: CoverflowSlide[] }) {
  const { lang } = useLanguage();
  const tr = t[lang].gallery;

  if (slides.length === 0) return null;

  return (
    <section className="pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto px-6 mb-4">
        <p className="text-[#E87878] text-xs font-semibold tracking-[0.3em] uppercase mb-3 flex items-center gap-2">
          <span className="w-6 h-px bg-[#E87878]" />
          {tr.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          {tr.heading}
          <span className="text-[#A48888] font-light">{tr.heading_sub}</span>
        </h2>
      </div>

      <CoverflowCarousel
        slides={slides}
        showNavigation
        showPagination
        label={tr.eyebrow}
        cardWidth="clamp(200px, 28vw, 340px)"
      />
    </section>
  );
}
