"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const tr = t[lang].footer;

  return (
    <footer className="py-6 px-6 border-t border-[#3c0000]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="text-sm font-semibold">
          <span className="text-[#E87878]">GS</span>
          <span className="text-[#A48888]/50">.design</span>
        </span>
        <span className="text-xs font-mono text-[#A48888]/40">
          © {new Date().getFullYear()} · Giancarlo Serassio · {tr.role}
        </span>
      </div>
    </footer>
  );
}
