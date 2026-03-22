export type Lang = "en" | "es";

export const t = {
  en: {
    /* Navbar */
    nav: {
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },

    /* Hero */
    hero: {
      badge: "Portfolio 2026",
      roles: ["3D Modeling", "Rendering", "Animation", "Industrial Design"],
      description:
        "I create 3D products and visualizations that communicate with precision and generate visual impact.",
      cta_primary: "View projects",
      cta_secondary: "Contact",
      stats: [
        { value: "7+", label: "Years exp." },
        { value: "150+", label: "Projects" },
        { value: "100+", label: "Clients" },
      ],
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
      heading_italic: "thinks in 3D",
      bio1: "I'm Giancarlo Serassio, an industrial designer with over 7 years creating products and visualizations that balance technical precision and visual impact. My work spans from ideation to production-ready renders.",
      bio2: "I collaborate with design studios, consumer brands and technology startups to bring their products to life through advanced modelling, visualization and motion design. I also integrate AI, web development and automations to deliver more complete solutions.",
      tools_label: "Tools",
      proficiency_label: "Proficiency",
      services_label: "I also work with",
      services: [
        { name: "AI Integration", desc: "Claude, Nano Banana Pro, Kling AI, Sora, Runway Gen-3, Midjourney" },
        { name: "Web Development", desc: "Custom sites adapted to products and brands" },
        { name: "n8n Automation", desc: "Custom chatbots and integrations" },
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
    },

    hero: {
      badge: "Portfolio 2026",
      roles: ["Modelado 3D", "Rendering", "Animación", "Diseño Industrial"],
      description:
        "Creo productos y visualizaciones 3D que comunican con precisión y generan impacto visual.",
      cta_primary: "Ver proyectos",
      cta_secondary: "Contacto",
      stats: [
        { value: "7+", label: "Años exp." },
        { value: "150+", label: "Proyectos" },
        { value: "100+", label: "Clientes" },
      ],
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
      heading_italic: "piensa en 3D",
      bio1: "Soy Giancarlo Serassio, diseñador industrial con más de 7 años creando productos y visualizaciones que equilibran precisión técnica e impacto visual. Mi trabajo va desde la ideación hasta renders listos para producción.",
      bio2: "Colaboro con estudios de diseño, marcas de consumo y startups de tecnología para dar vida a sus productos a través de modelado avanzado, visualización y motion design. Además integro IA, desarrollo web y automatizaciones para ofrecer soluciones más completas.",
      tools_label: "Herramientas",
      proficiency_label: "Nivel de dominio",
      services_label: "También trabajo con",
      services: [
        { name: "Integración de IA", desc: "Claude, Nano Banana Pro, Kling AI, Sora, Runway Gen-3, Midjourney" },
        { name: "Desarrollo web", desc: "Sitios adaptados a producto y marca" },
        { name: "Automatización n8n", desc: "Chatbots e integraciones personalizadas" },
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

    footer: {
      role: "Diseñador Industrial",
    },
  },
} as const;
