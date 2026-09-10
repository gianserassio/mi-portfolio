export type Lang = "en" | "es";

export const t = {
  en: {
    /* Navbar */
    nav: {
      projects: "Projects",
      about: "About",
      contact: "Contact",
      cv: "CV",
    },

    /* Hero */
    hero: {
      eyebrow: "Industrial design · 2026",
      heading_first: "Giancarlo",
      heading_last: "Serassio",
      role: "3D Product Designer",
      description:
        "Modeling, texturing and photorealistic rendering that show your product at its best.",
      cta_primary: "View projects",
      cta_secondary: "Contact",
      trust: "7+ years experience · 150+ projects · Odyssey, Craftd, Monster Vape Labs",
      tile_labels: {
        1: "Product",
        2: "Interior",
        3: "Close-up",
        4: "Scene",
        5: "Concept",
        6: "Exterior",
        7: "Packaging",
        8: "Industrial",
        9: "Visualization",
        10: "Animation",
      },
    },

    /* Render Gallery */
    gallery: {
      eyebrow: "More renders",
      heading: "Loose",
      heading_sub: " renders",
    },

    /* Projects */
    projects: {
      eyebrow: "Selected work",
      heading: "Projects",
      heading_sub: " selected",
      count_suffix: "projects",
      categories: {
        "Modelado 3D": "3D Modeling",
        Render: "Render",
        Animación: "Animation",
      },
      items: [
        {
          titulo: "Odyssey",
          categoria: "Render",
          descripcion:
            "3D modelling, texturing and rendering in Blender. Post-production and layout in Illustrator and Photoshop.",
          tags: ["Blender", "Illustrator", "Photoshop"],
          año: "2025",
        },
        {
          titulo: "Craftd",
          categoria: "Render",
          descripcion:
            "Kitchen product line — glass dispensers, tongs, scoops and mashers modelled, textured and rendered in Blender across multiple finishes and colourways.",
          tags: ["Blender", "Illustrator", "Photoshop"],
          año: "2025",
        },
        {
          titulo: "Monster Vape Labs",
          categoria: "Render",
          descripcion:
            "Full product visualisation for Monster Vape Labs — devices, bottles, packaging and booth renders across the 80K POS line.",
          tags: ["Blender", "Illustrator", "Photoshop"],
          año: "2025",
        },
        {
          titulo: "Friday",
          categoria: "Render",
          descripcion:
            "Product visualisation for a consumer electronics brand — speaker and headphone line (Aura, Aura Pro, Fever 102) across multiple colourways.",
          tags: ["Blender", "Illustrator", "Photoshop"],
          año: "2025",
        },
        {
          titulo: "Numera Lighting",
          categoria: "Render",
          descripcion:
            "Lighting product visualisation for Numera — architectural fixtures rendered in context and isolated, across the full NL catalogue.",
          tags: ["Blender", "Illustrator", "Photoshop"],
          año: "2025",
        },
        {
          titulo: "Fused",
          categoria: "Render",
          descripcion:
            "Product visualisation for a gummy supplement brand — hero scene, isolated angles and colour variant series.",
          tags: ["Blender", "Illustrator", "Photoshop"],
          año: "2025",
        },
      ],
    },

    /* About */
    about: {
      eyebrow: "About me",
      heading: "Designer who",
      heading_italic: "models, renders, animates & advertises",
      bio1: "I'm Giancarlo Serassio — I help brands show their products at their best.",
      bio2: "Over 7 years working in 3D visualization and marketing: modeling, texturing and rendering to show products with precision and impact; motion and animation to bring them to life; and Meta Ads campaigns to reach the right people.",
      tools_label: "Tools",
      proficiency_label: "Proficiency",
      services_label: "Services",
      services: [
        { name: "3D Modeling & Rendering", desc: "Product modeling, texturing and photorealistic rendering" },
        { name: "Animation & Motion", desc: "Product animation and motion graphics for marketing and presentations" },
        { name: "Meta Ads", desc: "Ad campaigns on Facebook & Instagram to drive results and grow your brand" },
      ],
    },

    /* Contact */
    contact: {
      eyebrow: "Contact",
      heading: "Let's work",
      heading_sub: " together",
      description:
        "Available for freelance projects, collaborations and consulting, but also open to joining a team on a permanent basis. If you're looking for a 3D designer with strong criteria and drive to grow, let's talk.",
      availability: "Available — freelance or full-time",
      links: [
        { label: "Email", value: "gianserassio@gmail.com", href: "mailto:gianserassio@gmail.com" },
        { label: "LinkedIn", value: "linkedin.com/in/giancarlo-serassio", href: "https://www.linkedin.com/in/giancarlo-serassio-2ab58a291/" },
      ],
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        name_placeholder: "Your name",
        email_placeholder: "you@email.com",
        message_placeholder: "Tell me about your project...",
        submit: "Send message",
        sent: "Message sent",
      },
    },

    /* Testimonials */
    testimonials: {
      eyebrow: "Client reviews",
      heading: "What clients",
      heading_sub: " say",
      upwork_label: "On Upwork",
      projects_value: "138",
      projects_label: "Completed projects",
      success_value: "100%",
      success_label: "Job Success",
      top_rated: "Top Rated",
      view_profile: "View Upwork profile",
      view_more: "View more testimonials",
      view_less: "Show less",
    },

    /* CV */
    cv: {
      eyebrow: "Resume",
      name: "Giancarlo Serassio",
      role: "3D Product Visualization Lead | Industrial Designer | E-commerce",
      location: "Córdoba, Argentina | Open to remote opportunities worldwide",
      download: "Download PDF",
      summary_label: "Professional Summary",
      summary:
        "Industrial designer and 3D product visualization lead with 7+ years of experience creating photorealistic product imagery, animation, packaging visuals, and launch assets for international e-commerce and DTC brands. Top Rated on Upwork with $80K+ earned, 100% Job Success, 140+ projects delivered, and 100+ clients worldwide. Combines art direction, precise modeling, material development, lighting, post-production, and reliable remote client leadership.",
      expertise_label: "Core Expertise",
      expertise: [
        { name: "3D Production", desc: "Product modeling, CAD cleanup, photorealistic rendering, animation, materials, texturing, lighting, colorways, exploded views" },
        { name: "Commercial Visuals", desc: "Amazon and Shopify imagery, hero shots, lifestyle scenes, packaging mockups, launch campaigns, advertising production" },
        { name: "Tools", desc: "Blender, SolidWorks, Fusion 360, Adobe Photoshop, Illustrator, After Effects" },
        { name: "Leadership", desc: "Art direction, reusable asset systems, client discovery, scope management, feedback cycles, production prioritization, quality control" },
        { name: "Digital Differentiator", desc: "Web design, Next.js, Shopify, Framer, Tailwind CSS, responsive product experiences" },
      ],
      experience_label: "Professional Experience",
      experience: [
        {
          title: "Co-Founder & 3D Product Visualization Lead",
          company: "Product Hangar",
          dates: "Apr 2020 - Present",
          location: "Córdoba, Argentina | Remote",
          bullets: [
            "Lead art direction and end-to-end 3D production for consumer electronics, lighting, packaging, supplements, cosmetics, home products, and industrial products.",
            "Create product models, materials, lighting systems, animation, post-production, and final visuals for Amazon, Shopify, advertising, packaging, booths, and launches.",
            "Build reusable asset systems for product catalogs, variants, and recurring campaigns while maintaining consistent brand and visual standards.",
            "Collaborate directly with international clients and agencies, managing briefs, feedback, priorities, timelines, and final delivery.",
          ],
        },
        {
          title: "3D Product Visualization Specialist",
          company: "Upwork",
          dates: "Jan 2020 - Present",
          location: "Remote",
          bullets: [
            "Top Rated freelancer with $80K+ earned, 100% Job Success, 140+ completed projects, 100+ clients, and multiple repeat-client relationships.",
            "Produce hero images, lifestyle scenes, color and material variants, exploded views, product animations, packaging renders, and launch-ready visual systems.",
            "Support both one-off product launches and ongoing production pipelines for brands, manufacturers, and creative agencies.",
          ],
        },
        {
          title: "Co-Founder",
          company: "BEAM Agency",
          dates: "Jan 2021 - Apr 2025",
          location: "Remote",
          bullets: [
            "Led 3D visualization projects for consumer products in e-commerce, including creative direction, client communication, Amazon-optimized imagery, and final visual delivery.",
          ],
        },
        {
          title: "Product Manager",
          company: "Freelanders",
          dates: "Jan 2024 - Apr 2025",
          location: "Remote",
          bullets: [
            "Coordinated development, visual design, branding, and 3D content across creative teams and clients for product presentations and launches.",
          ],
        },
      ],
      clientwork_label: "Selected Client Work",
      clientwork: [
        { name: "Monster Vape Labs", tag: "Blender / Adobe CC", desc: "Produced 30,000+ individual renders across hundreds of distinct products and multiple product lines, including devices, bottles, packaging, POS displays, and trade-show booth visuals." },
        { name: "Numera Lighting", tag: "SolidWorks / Product Development", desc: "Contributed to technical SolidWorks modeling, product design decisions, production drawings, and isolated and in-context renders across an architectural lighting catalog." },
        { name: "Craftd, Friday & Fused", tag: "Product / Electronics / Packaging", desc: "Modeled and rendered kitchen products, electronics, and supplement packaging across finishes and color variants." },
      ],
      education_label: "Education, Certification & Languages",
      education: [
        { name: "Industrial Design", detail: "Universidad Nacional de Córdoba", dates: "Mar 2014 - Jul 2020" },
      ],
      certifications: [
        { name: "Upwork Skill Certification - 3D Modeling", dates: "Issued Jul 2021" },
      ],
      languages_label: "Languages",
      languages: "Spanish - Native/Bilingual | English - Fluent",
    },

    /* Footer */
    footer: {
      role: "Industrial Designer",
    },
  },

  /* ─── ESPAÑOL ───────────────────────────────────────────────────────── */
  es: {
    nav: {
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
      cv: "CV",
    },

    hero: {
      eyebrow: "Diseño industrial · 2026",
      heading_first: "Giancarlo",
      heading_last: "Serassio",
      role: "Diseñador de Producto 3D",
      description:
        "Modelado, texturizado y render fotorrealista que muestran tu producto en su mejor versión.",
      cta_primary: "Ver proyectos",
      cta_secondary: "Contacto",
      trust: "7+ años de experiencia · 150+ proyectos · Odyssey, Craftd, Monster Vape Labs",
      tile_labels: {
        1: "Producto",
        2: "Interior",
        3: "Close-up",
        4: "Escena",
        5: "Concepto",
        6: "Exterior",
        7: "Packaging",
        8: "Industrial",
        9: "Visualización",
        10: "Animación",
      },
    },

    gallery: {
      eyebrow: "Más renders",
      heading: "Renders",
      heading_sub: " sueltos",
    },

    projects: {
      eyebrow: "Trabajos seleccionados",
      heading: "Proyectos",
      heading_sub: " seleccionados",
      count_suffix: "proyectos",
      categories: {
        "Modelado 3D": "Modelado 3D",
        Render: "Render",
        Animación: "Animación",
      },
      items: [
        {
          titulo: "Odyssey",
          categoria: "Render",
          descripcion:
            "Modelado 3D, texturizado y renderizado en Blender. Post-producción y maquetación en Illustrator y Photoshop.",
          tags: ["Blender", "Illustrator", "Photoshop"],
          año: "2025",
        },
        {
          titulo: "Craftd",
          categoria: "Render",
          descripcion:
            "Línea de productos de cocina — dispensadores, pinzas, cucharas y machacadores modelados, texturizados y renderizados en Blender en múltiples terminaciones y colores.",
          tags: ["Blender", "Illustrator", "Photoshop"],
          año: "2025",
        },
        {
          titulo: "Monster Vape Labs",
          categoria: "Render",
          descripcion:
            "Visualización completa para Monster Vape Labs — dispositivos, botellas, packaging y renders de stand para la línea 80K POS.",
          tags: ["Blender", "Illustrator", "Photoshop"],
          año: "2025",
        },
        {
          titulo: "Friday",
          categoria: "Render",
          descripcion:
            "Visualización de producto para una marca de electrónica de consumo — línea de parlantes y auriculares (Aura, Aura Pro, Fever 102) en múltiples colores.",
          tags: ["Blender", "Illustrator", "Photoshop"],
          año: "2025",
        },
        {
          titulo: "Numera Lighting",
          categoria: "Render",
          descripcion:
            "Visualización de luminarias para Numera — fixtures arquitectónicos renderizados en contexto y aislados, a lo largo del catálogo NL completo.",
          tags: ["Blender", "Illustrator", "Photoshop"],
          año: "2025",
        },
        {
          titulo: "Fused",
          categoria: "Render",
          descripcion:
            "Visualización de producto para una marca de suplementos — escena hero, ángulos aislados y serie de variantes de color.",
          tags: ["Blender", "Illustrator", "Photoshop"],
          año: "2025",
        },
      ],
    },

    about: {
      eyebrow: "Sobre mí",
      heading: "Diseñador que",
      heading_italic: "modela, renderiza, anima y publicita",
      bio1: "Soy Giancarlo Serassio — ayudo a las marcas a mostrar sus productos en su mejor versión.",
      bio2: "Más de 7 años trabajando en visualización 3D y marketing: modelado, texturizado y renderizado para mostrar productos con precisión e impacto; motion y animación para darles vida; y campañas de Meta Ads para llegar a las personas correctas.",
      tools_label: "Herramientas",
      proficiency_label: "Nivel de dominio",
      services_label: "Servicios",
      services: [
        { name: "Modelado 3D & Render", desc: "Modelado, texturizado y renderizado fotorrealista de producto" },
        { name: "Animación & Motion", desc: "Animación de producto y motion graphics para marketing y presentaciones" },
        { name: "Meta Ads", desc: "Campañas publicitarias en Facebook e Instagram para generar resultados y hacer crecer tu marca" },
      ],
    },

    contact: {
      eyebrow: "Contacto",
      heading: "Trabajemos",
      heading_sub: " juntos",
      description:
        "Disponible para proyectos freelance, colaboraciones y consultoría, pero también abierto a incorporarme a un equipo de forma permanente. Si buscás un diseñador 3D con criterio propio y ganas de crecer, hablemos.",
      availability: "Disponible — freelance o posición fija",
      links: [
        { label: "Email", value: "gianserassio@gmail.com", href: "mailto:gianserassio@gmail.com" },
        { label: "LinkedIn", value: "linkedin.com/in/giancarlo-serassio", href: "https://www.linkedin.com/in/giancarlo-serassio-2ab58a291/" },
      ],
      form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        name_placeholder: "Tu nombre",
        email_placeholder: "tu@email.com",
        message_placeholder: "Cuéntame sobre tu proyecto...",
        submit: "Enviar mensaje",
        sent: "Mensaje enviado",
      },
    },

    testimonials: {
      eyebrow: "Reseñas de clientes",
      heading: "Lo que dicen",
      heading_sub: " los clientes",
      upwork_label: "En Upwork",
      projects_value: "138",
      projects_label: "Proyectos completados",
      success_value: "100%",
      success_label: "Job Success",
      top_rated: "Top Rated",
      view_profile: "Ver perfil de Upwork",
      view_more: "Ver más testimonios",
      view_less: "Ver menos",
    },

    cv: {
      eyebrow: "Currículum",
      name: "Giancarlo Serassio",
      role: "Lead de Visualización 3D de Producto | Diseñador Industrial | E-commerce",
      location: "Córdoba, Argentina | Disponible para trabajo remoto en cualquier parte del mundo",
      download: "Descargar PDF",
      summary_label: "Resumen Profesional",
      summary:
        "Diseñador industrial y lead de visualización 3D de producto con más de 7 años de experiencia creando imágenes fotorrealistas, animación, visuales de packaging y assets de lanzamiento para marcas internacionales de e-commerce y DTC. Top Rated en Upwork con más de $80K facturados, 100% Job Success, 140+ proyectos entregados y 100+ clientes en todo el mundo. Combina dirección de arte, modelado preciso, desarrollo de materiales, iluminación, post-producción y liderazgo confiable de clientes remotos.",
      expertise_label: "Expertise Principal",
      expertise: [
        { name: "Producción 3D", desc: "Modelado de producto, limpieza de CAD, renderizado fotorrealista, animación, materiales, texturizado, iluminación, colorways, vistas explosionadas" },
        { name: "Visuales Comerciales", desc: "Imágenes para Amazon y Shopify, hero shots, escenas lifestyle, mockups de packaging, campañas de lanzamiento, producción publicitaria" },
        { name: "Herramientas", desc: "Blender, SolidWorks, Fusion 360, Adobe Photoshop, Illustrator, After Effects" },
        { name: "Liderazgo", desc: "Dirección de arte, sistemas de assets reutilizables, discovery de clientes, gestión de alcance, ciclos de feedback, priorización de producción, control de calidad" },
        { name: "Diferencial Digital", desc: "Diseño web, Next.js, Shopify, Framer, Tailwind CSS, experiencias de producto responsive" },
      ],
      experience_label: "Experiencia Profesional",
      experience: [
        {
          title: "Co-Fundador & Lead de Visualización 3D de Producto",
          company: "Product Hangar",
          dates: "Abr 2020 - Presente",
          location: "Córdoba, Argentina | Remoto",
          bullets: [
            "Lidero la dirección de arte y la producción 3D de punta a punta para electrónica de consumo, iluminación, packaging, suplementos, cosmética, productos del hogar y productos industriales.",
            "Creo modelos de producto, materiales, sistemas de iluminación, animación, post-producción y visuales finales para Amazon, Shopify, publicidad, packaging, stands y lanzamientos.",
            "Construyo sistemas de assets reutilizables para catálogos de producto, variantes y campañas recurrentes, manteniendo estándares de marca y visuales consistentes.",
            "Colaboro directamente con clientes y agencias internacionales, gestionando briefs, feedback, prioridades, tiempos y entrega final.",
          ],
        },
        {
          title: "Especialista en Visualización 3D de Producto",
          company: "Upwork",
          dates: "Ene 2020 - Presente",
          location: "Remoto",
          bullets: [
            "Freelancer Top Rated con más de $80K facturados, 100% Job Success, 140+ proyectos completados, 100+ clientes y múltiples relaciones de clientes recurrentes.",
            "Produzco hero images, escenas lifestyle, variantes de color y material, vistas explosionadas, animaciones de producto, renders de packaging y sistemas visuales listos para lanzamiento.",
            "Doy soporte tanto a lanzamientos de producto puntuales como a pipelines de producción continuos para marcas, fabricantes y agencias creativas.",
          ],
        },
        {
          title: "Co-Fundador",
          company: "BEAM Agency",
          dates: "Ene 2021 - Abr 2025",
          location: "Remoto",
          bullets: [
            "Lideré proyectos de visualización 3D para productos de consumo en e-commerce, incluyendo dirección creativa, comunicación con clientes, imágenes optimizadas para Amazon y entrega visual final.",
          ],
        },
        {
          title: "Product Manager",
          company: "Freelanders",
          dates: "Ene 2024 - Abr 2025",
          location: "Remoto",
          bullets: [
            "Coordiné desarrollo, diseño visual, branding y contenido 3D entre equipos creativos y clientes para presentaciones de producto y lanzamientos.",
          ],
        },
      ],
      clientwork_label: "Trabajos Destacados",
      clientwork: [
        { name: "Monster Vape Labs", tag: "Blender / Adobe CC", desc: "Produje más de 30.000 renders individuales a lo largo de cientos de productos distintos y múltiples líneas, incluyendo dispositivos, botellas, packaging, displays POS y visuales de stands para ferias." },
        { name: "Numera Lighting", tag: "SolidWorks / Desarrollo de Producto", desc: "Contribuí al modelado técnico en SolidWorks, decisiones de diseño de producto, planos de producción y renders aislados y en contexto a lo largo de un catálogo de iluminación arquitectónica." },
        { name: "Craftd, Friday & Fused", tag: "Producto / Electrónica / Packaging", desc: "Modelé y rendericé productos de cocina, electrónica y packaging de suplementos en distintas terminaciones y variantes de color." },
      ],
      education_label: "Educación, Certificación e Idiomas",
      education: [
        { name: "Diseño Industrial", detail: "Universidad Nacional de Córdoba", dates: "Mar 2014 - Jul 2020" },
      ],
      certifications: [
        { name: "Certificación Upwork - Modelado 3D", dates: "Emitida Jul 2021" },
      ],
      languages_label: "Idiomas",
      languages: "Español - Nativo/Bilingüe | Inglés - Fluido",
    },

    footer: {
      role: "Diseñador Industrial",
    },
  },
} as const;
