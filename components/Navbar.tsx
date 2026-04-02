"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggle } = useLanguage();
  const tr = t[lang].nav;

  const LINKS = [
    { label: tr.projects, href: "#proyectos" },
    { label: tr.about, href: "#sobre-mi" },
    { label: tr.contact, href: "#contacto" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["proyectos", "sobre-mi", "contacto"];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(`#${e.target.id}`); }),
      { threshold: 0.4 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4"
      >
        <div className={`w-full max-w-3xl px-6 h-14 flex items-center justify-between rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0d0000]/80 backdrop-blur-xl border border-[#3c0000]"
            : "bg-[#150000]/60 border border-[#3c0000]/50 backdrop-blur-sm"
        }`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-1.5 group">
            <span className="text-[#E87878] font-bold text-xl tracking-tight">GS</span>
            <span className="text-[#A48888] text-xl font-light group-hover:text-white transition-colors">.design</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {LINKS.map((link) => {
                const isActive = active === link.href;
                return (
                  <li key={link.href} className="relative">
                    <a
                      href={link.href}
                      className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                        isActive ? "text-[#E87878]" : "text-[#A48888] hover:text-white"
                      }`}
                    >
                      {link.label}
                    </a>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-[#E87878]"
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Language toggle */}
            <button
              onClick={toggle}
              className="flex items-center gap-1 px-3 py-1 rounded-full border border-[#3c0000] hover:border-[#E87878]/40 transition-colors duration-200 text-xs font-semibold tracking-widest"
            >
              <span className={lang === "en" ? "text-[#E87878]" : "text-[#A48888]"}>EN</span>
              <span className="text-[#3c0000]">/</span>
              <span className={lang === "es" ? "text-[#E87878]" : "text-[#A48888]"}>ES</span>
            </button>
          </div>

          {/* Mobile right side */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggle}
              className="flex items-center gap-1 px-3 py-1 rounded-full border border-[#3c0000] hover:border-[#E87878]/40 transition-colors duration-200 text-xs font-semibold tracking-widest"
            >
              <span className={lang === "en" ? "text-[#E87878]" : "text-[#A48888]"}>EN</span>
              <span className="text-[#3c0000]">/</span>
              <span className={lang === "es" ? "text-[#E87878]" : "text-[#A48888]"}>ES</span>
            </button>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full border border-[#3c0000] hover:border-[#E87878]/40 transition-colors duration-200"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className={`block w-4 h-px bg-[#A48888] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
              <span className={`block w-4 h-px bg-[#A48888] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-4 h-px bg-[#A48888] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[4.5rem] z-40 mx-4 rounded-2xl border border-[#3c0000] bg-[#0d0000]/95 backdrop-blur-xl px-6 py-6 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {LINKS.map((link) => {
                const isActive = active === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`flex items-center gap-3 py-3 text-base font-medium tracking-wide transition-colors duration-200 border-b border-[#3c0000] last:border-0 ${
                        isActive ? "text-[#E87878]" : "text-[#A48888] hover:text-white"
                      }`}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E87878] flex-shrink-0" />}
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
