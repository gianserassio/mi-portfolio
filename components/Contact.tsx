"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const ICON_EMAIL = (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const ICON_LINKEDIN = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ICONS = [ICON_EMAIL, ICON_LINKEDIN];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { lang } = useLanguage();
  const tr = t[lang].contact;

  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "", website: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ nombre: "", email: "", mensaje: "", website: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contacto" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E87878]/20 to-transparent" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="mb-14">
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <p className="text-[#A48888] text-base leading-relaxed">{tr.description}</p>

            <div className="space-y-3">
              {tr.links.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 border border-[#3c0000] hover:border-[#E87878]/30 bg-[#150000] hover:bg-[#E87878]/5 rounded-2xl transition-all duration-200"
                >
                  <span className="text-[#E87878] flex-shrink-0">{ICONS[i]}</span>
                  <div>
                    <p className="text-[10px] text-[#A48888]/60 tracking-widest uppercase mb-0.5">{item.label}</p>
                    <p className="text-sm text-[#A48888] group-hover:text-white transition-colors">{item.value}</p>
                  </div>
                  <svg className="w-4 h-4 text-[#A48888]/30 group-hover:text-[#E87878] ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-[#A48888]">
              <span className="w-2 h-2 rounded-full bg-[#E87878] animate-pulse" />
              {tr.availability}
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot — invisible para humanos, los bots lo rellenan */}
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
                  { label: tr.form.name, name: "nombre", type: "text", placeholder: tr.form.name_placeholder },
                  { label: tr.form.email, name: "email", type: "email", placeholder: tr.form.email_placeholder },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-[10px] font-semibold tracking-widest uppercase text-[#A48888]/60 mb-2">{f.label}</label>
                    <input
                      type={f.type}
                      name={f.name}
                      value={form[f.name as keyof typeof form]}
                      onChange={handleChange}
                      required
                      placeholder={f.placeholder}
                      className="w-full bg-[#150000] border border-[#3c0000] text-white text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-[#E87878]/40 transition-colors placeholder-[#A48888]/30"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[10px] font-semibold tracking-widest uppercase text-[#A48888]/60 mb-2">{tr.form.message}</label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={tr.form.message_placeholder}
                  className="w-full bg-[#150000] border border-[#3c0000] text-white text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-[#E87878]/40 transition-colors placeholder-[#A48888]/30 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 rounded-full text-white text-sm font-bold tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: status === "error" ? "#ef4444" : "linear-gradient(135deg, #E87878 0%, #E89E6E 100%)" }}
              >
                {status === "sent" ? (
                  <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>{tr.form.sent}</>
                ) : status === "loading" ? (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                ) : status === "error" ? (
                  <>{lang === "es" ? "Error al enviar, intentá de nuevo" : "Error sending, try again"}</>
                ) : (
                  <>{tr.form.submit}<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
