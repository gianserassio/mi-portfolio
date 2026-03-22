"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const tr = t[lang].footer;

  return (
    <footer className="py-6 px-6 border-t border-[#1a2540]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="text-sm font-semibold">
          <span className="text-[#00D4FF]">GS</span>
          <span className="text-[#8892A4]/50">.design</span>
        </span>
        <span className="text-xs font-mono text-[#8892A4]/40">
          © {new Date().getFullYear()} · Giancarlo Serassio · {tr.role}
        </span>
      </div>
    </footer>
  );
}
