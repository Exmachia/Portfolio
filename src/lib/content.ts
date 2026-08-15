export type Locale = "en" | "es";

export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  link?: string;
  image?: string;
  homeTeaser: string;
  contexto: string;
  problema: string;
  miRol: string;
  proceso: {
    research?: string;
    restricciones?: string;
    iteraciones?: string;
    decisiones?: string;
    validacion?: string;
  };
  solucionFinal: string;
  resultado: string;
  aprendizaje: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  description: string;
};

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  linkText?: string;
  linkSlug?: string;
};

export type ProcessStep = {
  title: string;
  description: string;
  imageLabel: string;
};

export type Interest = {
  icon: "film" | "palette" | "music" | "chef" | "dumbbell";
  label: string;
};

export type ContentBundle = {
  site: {
    name: string;
    role: string;
    tagline: string;
    email: string;
    whatsapp: string;
    whatsappHref: string;
    linkedin: string;
    experienceSummary: string;
    skills: string[];
    cvHref: string;
  };
  nav: {
    home: string;
    projects: string;
    howIWork: string;
    experience: string;
    about: string;
    menu: string;
    close: string;
    openMenu: string;
  };
  ui: {
    viewProjects: string;
    contact: string;
    downloadCV: string;
    featuredProjects: string;
    tools: string;
    viewFullTimeline: string;
    letsTalk: string;
    letsTalkBlurb: string;
    caseStudiesTitle: string;
    caseStudiesSubtitle: string;
    timelineTitle: string;
    backToProjects: string;
    previous: string;
    next: string;
    methodology: string;
    mockupPending: string;
    context: string;
    problem: string;
    role: string;
    process: string;
    research: string;
    constraints: string;
    iterations: string;
    decisions: string;
    validation: string;
    finalSolution: string;
    result: string;
    takeaway: string;
    switchToLight: string;
    switchToDark: string;
  };
  comoTrabajo: {
    title: string;
    kicker: string;
    intro: string;
    steps: ProcessStep[];
    closing: string;
  };
  sobreMi: {
    title: string;
    paragraphs: string[];
  };
  experience: ExperienceEntry[];
  caseStudies: CaseStudy[];
  stats: Stat[];
  interests: Interest[];
};

export const featuredSlugs = ["psl-scout", "geest", "anagram", "nativa"];

export const content: Record<Locale, ContentBundle> = {
  en: {
    site: {
      name: "Luis Eduardo Chacón Manzo",
      role: "Product Designer",
      tagline:
        "I design product driven by research, and I can take it all the way to code. I use AI as part of the process, not as a shortcut, to build interfaces that actually solve problems.",
      email: "eduardo-chacom@hotmail.com",
      whatsapp: "+52 312 121 4827",
      whatsappHref: "https://wa.me/523121214827",
      linkedin: "https://www.linkedin.com/in/eduardo-chacon-171367275/",
      experienceSummary:
        "Currently at PSL Scout, with 3+ years of experience designing product.",
      skills: ["Figma", "Pencil", "Claude", "Notion", "PostHog", "Miro"],
      cvHref: "/cv-en.pdf",
    },
    nav: {
      home: "Home",
      projects: "Projects",
      howIWork: "How I work",
      experience: "Experience",
      about: "About",
      menu: "Menu",
      close: "Close",
      openMenu: "Open navigation menu",
    },
    ui: {
      viewProjects: "View projects",
      contact: "Contact",
      downloadCV: "Download CV",
      featuredProjects: "Featured projects",
      tools: "Tools",
      viewFullTimeline: "View full timeline",
      letsTalk: "Let's talk?",
      letsTalkBlurb:
        "Whether you have a project in mind or just want to say hello, I'd genuinely love to hear from you.",
      caseStudiesTitle: "Case studies",
      caseStudiesSubtitle:
        "Context, problem, process, and result for each project, not just the final screen.",
      timelineTitle: "Timeline",
      backToProjects: "Projects",
      previous: "Previous",
      next: "Next",
      methodology: "Methodology",
      mockupPending: "mockup pending",
      context: "Context",
      problem: "The problem",
      role: "My role",
      process: "Process",
      research: "Research",
      constraints: "Constraints",
      iterations: "Iterations",
      decisions: "Decisions & trade-offs",
      validation: "Validation",
      finalSolution: "Final solution",
      result: "Result",
      takeaway: "Takeaway",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
    },
    comoTrabajo: {
      title: "How I work",
      kicker: "Research first, always",
      intro:
        "In a market where products compete head to head, the difference isn't just in the interface anymore, it's in how well you understand your user before you draw the first wireframe. Here's the full process, step by step.",
      steps: [
        {
          title: "Research",
          description:
            "I start by understanding the real problem: talking to stakeholders, reviewing existing data, and defining exactly what we need to learn before touching a screen.",
          imageLabel: "Discovery notes",
        },
        {
          title: "UX research",
          description:
            "Then I go deeper with the actual users: interviews, surveys, watching how they behave today, what frustrates them, and what language they use to describe their own problem.",
          imageLabel: "User interviews",
        },
        {
          title: "Benchmarking",
          description:
            "In parallel, I benchmark the competition and adjacent products, not to copy them, but to understand what's already solved and where the real opportunity is.",
          imageLabel: "Competitive analysis",
        },
        {
          title: "Notion as source of truth",
          description:
            "Every finding lands in Notion, my single source of truth. I use Claude connected via MCP to synthesize interviews, benchmarking, and data into one place instead of scattered docs and screenshots.",
          imageLabel: "Notion workspace",
        },
        {
          title: "Low-fidelity wireframes",
          description:
            "With the research organized, I start sketching by hand. Low-fidelity, fast, disposable, the goal is to get the structure and flow right before investing in visuals.",
          imageLabel: "Paper sketches",
        },
        {
          title: "Mid-fidelity",
          description:
            "The sketches move into Figma or a Pencil MCP that works directly with the research, turning structure into real components and layout, still without final visual polish.",
          imageLabel: "Mid-fi in Figma",
        },
        {
          title: "High-fidelity",
          description:
            "Once the flow is validated, I bring in the final visual layer: typography, color, spacing, and the details that make it feel like a real product.",
          imageLabel: "High-fidelity UI",
        },
        {
          title: "User testing",
          description:
            "Before shipping, I test the high-fidelity prototype with real users, sometimes through an interactive prototype generated with Claude, to see where it breaks before it's in production.",
          imageLabel: "Usability testing",
        },
      ],
      closing:
        "Design is still where everything gets resolved, but without this step, there's nothing solid to resolve.",
    },
    sobreMi: {
      title: "About me",
      paragraphs: [
        "I'm a passionate person, at work and outside of it. I like film, art, music, cooking, and working out, things that, underneath it all, feed the same curiosity I apply to design: paying attention to detail and enjoying the process, not just the outcome.",
        "My background as a software engineer helps me better understand projects with a more technical side, and communicate directly with development teams without losing anything in translation.",
      ],
    },
    experience: [
      {
        company: "PSL Scout",
        role: "Product Designer",
        dates: "April 2026 — present",
        description:
          "Marketplace for NFL Personal Seat Licenses. End-to-end product design focused on building trust and enabling high-value transactions, from real-time negotiation to interactive seat maps.",
      },
      {
        company: "Geest",
        role: "Product Designer",
        dates: "October 2024 — April 2026",
        description:
          "B2B SaaS for installation companies. I prioritized and designed growth-oriented features, including an onboarding AI for new users, data structures, real-time chat, and a token system.",
      },
      {
        company: "E3",
        role: "Design & creative direction",
        dates: "February 2025 — present (parallel, intermittent)",
        description:
          "Design and creative direction for a real estate/architecture agency, including the Anagram, Nativa, and Casas Exclusivas Colima projects.",
      },
      {
        company: "Enova",
        role: "UI Lead",
        dates: "January 2024 — October 2024",
        description:
          "Led the design of 50+ pages for one of the largest waste collection companies, managing a large-scale migration with a focus on design, user experience, SEO, and delivery timelines.",
      },
    ],
    caseStudies: [
      {
        slug: "psl-scout",
        title: "PSL Scout",
        subtitle: "Marketplace for NFL Personal Seat Licenses",
        image: "/projects/psl-scout.png",
        homeTeaser:
          "From 0 to 10+ closed sales on a marketplace that hadn't sold a single one before.",
        contexto:
          "PSL Scout is a marketplace where fans buy and sell NFL Personal Seat Licenses (PSLs), a high-value product that in many cases represents a considerable financial investment. I joined as Product Designer.",
        problema:
          "Before I joined, the platform hadn't closed a single sale. It was missing key features that actually helped users complete a transaction, and underneath that was a deeper problem: distrust. A PSL isn't cheap, and buying one on an unfamiliar platform, without the brand backing of something like StubHub or Ticketmaster, created friction before the user even got to consider the price.",
        miRol:
          "Product decided which features made the roadmap and in what order. My job was the how: designing the solution for each feature, the flow, and the UX writing that built trust at every step of the transaction.",
        proceso: {
          research:
            "Benchmarking resale platforms and analyzing existing usage data. Part of that research included understanding how users talk about their favorite teams, the difference between sports scouting language and casual social media language, to design the watchlist/favorites feature with the right terminology.",
          restricciones:
            "Only one competitor in the market is licensed to use official NFL team logos; we aren't. That meant solving the feeling of \"this is your team's marketplace\" with other visual elements (colors, iconography, typography) instead of relying on the real logo.",
          iteraciones:
            "The seat map and the negotiation flow went through several versions before reaching the final solution.",
          decisiones:
            "One of the clearest decisions came out of A/B testing: we tested showing seat information in a summary card against an interactive map where the user sees and selects the individual seat inside the stadium. The map won on clarity, the real location is easier to understand when you visualize it spatially than when you read it as a list of data.",
          validacion:
            "A/B testing between design variants before locking in the final version of each feature.",
        },
        solucionFinal:
          "The product ended up including real-time chat for direct negotiation between buyer and seller, an interactive stadium-level seat map, an AI concierge to capture new leads, and real-time visibility into the status of documentation, offers, and counteroffers during negotiation.",
        resultado:
          "The platform went from 0 sales to 10+ closed sales after the redesign, the result of a team effort between design, product, and marketing, but with research and UX writing as a central part of building the trust that was missing.",
        aprendizaje:
          "No design guarantees it'll work before you put it to the test. What you can control is how fast you turn that into real data, with real users, and what you do with what it tells you: improve what you already have or propose something completely different. Changing direction with data in hand isn't a delay, it's part of the process.",
      },
      {
        slug: "geest",
        title: "Geest",
        subtitle: "Process management SaaS for installation companies",
        homeTeaser:
          "120+ new companies onboarded after redesigning what we built first.",
        contexto:
          "Geest is a B2B SaaS for installation companies that helps centralize all their information and build their work processes in one place: flows with nodes, automations, and decision points. Users receive pending tasks within those flows and resolve them by filling out lookup fields and evidence until they're complete. I was the product's Product Designer over a long stretch.",
        problema:
          "When I joined, the team was focused almost entirely on fixing bugs. The features that did ship helped users who were already on the platform, but none of them were designed to attract new users: the product wasn't growing.",
        miRol:
          "I took charge of prioritizing which features we shipped based on two criteria: real impact on current users and the potential to attract new ones. Under that criteria I designed Hey Geest, an AI to help new users build processes from scratch, along with the product's table structures, real-time chat, the token system for automations, and the offline app. I led both the desktop version and the mobile app.",
        proceso: {
          research:
            "Direct feedback from real users through support tickets, which I prioritized by urgency and impact. I also benchmarked the competition to identify best practices in the space.",
          restricciones:
            "A good part of the product carries a lot of technical context (automations, data structures, node logic) that I initially struggled to fully decode. I solved this with direct meetings with the technical team and my managers to really understand what was needed before designing the solution.",
          iteraciones:
            "For confidentiality reasons I can't go into the specific detail of each version, but the process relied on A/B testing to validate design decisions before shipping them.",
          validacion: "A/B testing.",
        },
        solucionFinal:
          "Hey Geest (AI for building processes from scratch), table structures, real-time chat, a token system for automations, and an offline app, on desktop and mobile.",
        resultado:
          "120+ new companies joined the platform, drawn by the features we prioritized with a focus on growth, not just retention.",
        aprendizaje:
          "The biggest friction wasn't design, it was translation: a lot of the context arrived in very technical language and it took me time to understand it before I could design. Next time I'd put together less technical PRDs for the design team from the start, so I wouldn't lose time decoding instead of designing.",
      },
      {
        slug: "anagram",
        title: "Anagram",
        subtitle: "Portfolio and catalog for an architecture studio",
        link: "https://anagramarquitectos.com/portafolio",
        image: "/projects/anagram.png",
        homeTeaser: "From zero Google presence to #1 for \"arquitectos Colima\".",
        contexto:
          "Anagram is an architecture studio in Colima. The project was their main site, designed as a portfolio (showcasing their flagship projects) with a catalog of properties for sale as a complement, since Anagram has a separate sister site dedicated exclusively to property sales.",
        problema:
          "Anagram had a presence on GoDaddy, but nothing worth showing: no proper portfolio or catalog, and zero visibility in Google search.",
        miRol:
          "I took full ownership of the project: product design, SEO strategy, competitive analysis, and copywriting. The client gave me complete freedom, so I also decided everything that wasn't software development, including which technologies to use.",
        proceso: {
          research:
            "I researched what people were searching for and which keywords drove the local architecture and real estate market. I built a system with Claude to identify the best keywords to target, along with an analysis of how the competition was ranking.",
          restricciones:
            "Almost none, the previous site had nothing worth keeping, so there was complete freedom to build from scratch.",
          decisiones:
            "The site's hierarchy (flagship projects first, sales catalog after) wasn't arbitrary: another Anagram site exists focused exclusively on property sales, so this site needed to make clear it was the architecture studio first, with the catalog as a complement, not the focus.",
          validacion:
            "Tracking ranking in Search Console and Analytics over time, watching the position climb until it reached first place.",
        },
        solucionFinal:
          "A site with a flagship-project portfolio as the main entry point and a property catalog as a secondary section, with structure and content optimized for SEO from the copy down to the information architecture.",
        resultado:
          "Ranked #1 on Google for \"arquitectos Colima\", starting from zero search presence.",
        aprendizaje:
          "Having complete freedom from a client is a privilege, not a license to design in a vacuum. Even though the final call was mine, I learned it's always worth asking about references and preferences before assuming, even when no one's asking you to.",
      },
      {
        slug: "nativa",
        title: "Nativa",
        subtitle: "Pre-sale for a high-value residential development",
        link: "https://nativaliving.anagramarquitectos.com/",
        image: "/projects/nativa.png",
        homeTeaser: "Pre-sale fully sold out before construction was finished.",
        contexto:
          "Nativa is a high-value residential development in Colima, sold as a pre-sale before construction was finished. The site launched as a subdomain of Anagram.",
        problema:
          "Selling apartments that don't physically exist yet depends entirely on how the project is communicated: unable to show the finished product, the page had to do all the work of building trust and desire.",
        miRol:
          "Same as Anagram, I took full ownership of the site's design and decided everything that wasn't software development. Here, the final sales hook came from Nativa's sales team working directly with each client; my job was to generate and qualify that interest from the page.",
        proceso: {
          research:
            "I worked with the architect's renders and benchmarked other pre-sale pages to see how well they communicated their projects. I also gave myself the freedom to think like a user: what would someone expect to find landing on a pre-sale page for apartments at this level.",
          restricciones:
            "Practically none in terms of content: we had every render we could need, including 360° images that I used to build a virtual walkthrough of the facilities, aiming to give users a sense of closeness to the apartments even though they didn't exist yet.",
          validacion:
            "Emails and calls generated directly from the page were the signal that the site was doing its job, those leads were what Nativa's sales team then closed.",
        },
        solucionFinal:
          "A pre-sale site centered on a 360° virtual walkthrough of the facilities, with the information and renders needed to generate qualified leads before the physical product existed.",
        resultado:
          "Every apartment sold before construction was finished, with emails and calls generated from the page as part of the funnel feeding the sales team.",
        aprendizaje:
          "In a pre-sale involving this much money, it would have been worth doing even more benchmarking. When the user can't touch or visit the product, every piece of information you show them has to be as relevant as possible, there's no room for filler.",
      },
      {
        slug: "muvi",
        title: "Muvi",
        subtitle: "Virtual tours for the Universidad de Colima museums",
        homeTeaser: "200+ students earned credit through virtual tours.",
        contexto:
          "Muvi is a B2C project for the Universidad de Colima's university museums: it sold virtual tours that students used as part of their academic accreditation process.",
        problema:
          "The challenge was turning an academic requirement (accreditation) into a simple, frictionless transactional flow, for students who weren't used to \"buying\" something as part of a school process.",
        miRol:
          "I led a 3-person design team (two focused on UX/UI, research, and ideation, one on graphic design), all the resources we had for the project. I assigned tasks, gave feedback, set goals, and ran the kickoff sessions. When building the team, I prioritized talent over mastery of specific tools, some people didn't know certain tools yet but had the judgment the project needed. I was also the direct bridge to the development team, translating technical topics the rest of the design team didn't handle.",
        proceso: {
          research:
            "Research with students revealed their real motivation: many lived far from the city and found it much harder to attend an accreditation event in person than to do it virtually. That became the basis for orienting the entire design around the convenience of earning credit from home.",
          restricciones:
            "Since it was a university product, we had to keep the design system and visual identity they already had in place, we weren't starting from a blank slate style-wise.",
          decisiones:
            "I designed the user journeys around a fast transaction (entry, tour selection, payment, access) and worked directly on integrating the payment gateways, so buying access to the tour felt as simple as any online transaction, not extra friction inside their academic process.",
          validacion:
            "I tested the full flow with different students to identify where friction showed up and adjust before launch.",
        },
        solucionFinal:
          "A virtual tour platform with a simplified purchase-and-access flow, integrated with payment gateways, and aligned with the Universidad de Colima's design system.",
        resultado: "200+ students earned accreditation through the platform.",
        aprendizaje:
          "As a lead, my tendency was to solve things myself or supervise closely. I learned I needed to delegate more and trust that my team could present and own their topics, not just execute them.",
      },
      {
        slug: "casas-exclusivas-colima",
        title: "Casas Exclusivas Colima",
        subtitle: "Real estate catalog",
        link: "https://www.casasexclusivas-colima.com/",
        image: "/projects/casas-exclusivas-colima.png",
        homeTeaser: "Top 20 on Google and real sales generated from the catalog.",
        contexto:
          "Property catalog for sale for the company Casas Exclusivas Colima.",
        problema:
          "The client wanted something closely tied to a specific reference, Century 21, and asked for the structure to be nearly identical to it. The challenge wasn't creating from scratch but giving the project its own identity within that imposed reference.",
        miRol:
          "The same setup as Anagram and Nativa: full site design and SEO strategy.",
        proceso: {
          decisiones:
            "The catalog of homes for sale was prioritized as the central element, since the client's goal was to stand out against competitors in a real estate market much bigger and more saturated than Anagram's or Nativa's.",
          validacion:
            "Ranking the site was harder than the other projects because of the market's size, even so we reached the top 20 on Google. There's no hard traffic or lead metric, but the page has generated real sales, around 5 homes sold through the site.",
        },
        solucionFinal:
          "A real estate catalog with a structure similar to industry references like Century 21, but with the client's own visual identity.",
        resultado:
          "Top 20 on Google within a large, saturated market, and around 5 homes sold through the site.",
        aprendizaje:
          "Even when a client asks for something closely tied to an exact reference, there's still room, and a responsibility on your part, to give it its own identity, not a copy.",
      },
    ],
    stats: [
      {
        value: 10,
        suffix: "+",
        label: "Sales on PSL Scout, up from zero",
        linkText: "PSL Scout",
        linkSlug: "psl-scout",
      },
      {
        value: 120,
        suffix: "+",
        label: "Companies onboarded at Geest",
        linkText: "Geest",
        linkSlug: "geest",
      },
      {
        value: 200,
        suffix: "+",
        label: "Students accredited via Muvi",
        linkText: "Muvi",
        linkSlug: "muvi",
      },
      { value: 3, suffix: "+", label: "Years designing product" },
    ],
    interests: [
      { icon: "film", label: "Film" },
      { icon: "palette", label: "Art" },
      { icon: "music", label: "Music" },
      { icon: "chef", label: "Cooking" },
      { icon: "dumbbell", label: "Working out" },
    ],
  },
  es: {
    site: {
      name: "Luis Eduardo Chacón Manzo",
      role: "Product Designer",
      tagline:
        "Diseño producto guiado por research, y lo puedo llevar hasta el código. Uso IA como parte del proceso, no como atajo, para construir interfaces que de verdad resuelven.",
      email: "eduardo-chacom@hotmail.com",
      whatsapp: "+52 312 121 4827",
      whatsappHref: "https://wa.me/523121214827",
      linkedin: "https://www.linkedin.com/in/eduardo-chacon-171367275/",
      experienceSummary:
        "Actualmente en PSL Scout, con más de 3 años de experiencia diseñando producto.",
      skills: ["Figma", "Pencil", "Claude", "Notion", "PostHog", "Miro"],
      cvHref: "/cv-es.pdf",
    },
    nav: {
      home: "Home",
      projects: "Proyectos",
      howIWork: "Cómo trabajo",
      experience: "Experiencia",
      about: "Sobre mí",
      menu: "Menú",
      close: "Cerrar",
      openMenu: "Abrir menú de navegación",
    },
    ui: {
      viewProjects: "Ver proyectos",
      contact: "Contacto",
      downloadCV: "Descargar CV",
      featuredProjects: "Proyectos destacados",
      tools: "Herramientas",
      viewFullTimeline: "Ver timeline completo",
      letsTalk: "¿Hablamos?",
      letsTalkBlurb:
        "Ya sea que tengas un proyecto en mente o solo quieras saludar, me encantaría saber de ti.",
      caseStudiesTitle: "Case studies",
      caseStudiesSubtitle:
        "Contexto, problema, proceso y resultado de cada proyecto, no solo la pantalla final.",
      timelineTitle: "Trayectoria",
      backToProjects: "Proyectos",
      previous: "Anterior",
      next: "Siguiente",
      methodology: "Metodología",
      mockupPending: "mockup pendiente",
      context: "Contexto",
      problem: "El problema",
      role: "Mi rol",
      process: "Proceso",
      research: "Research",
      constraints: "Restricciones",
      iterations: "Iteraciones",
      decisions: "Decisiones y trade-offs",
      validation: "Validación",
      finalSolution: "Solución final",
      result: "Resultado",
      takeaway: "Aprendizaje",
      switchToLight: "Cambiar a modo claro",
      switchToDark: "Cambiar a modo oscuro",
    },
    comoTrabajo: {
      title: "Cómo trabajo",
      kicker: "Investigación primero, siempre",
      intro:
        "En un mercado donde los productos compiten cabeza a cabeza, la diferencia ya no está solo en la interfaz, está en qué tan bien entiendes a tu usuario antes de dibujar el primer wireframe. Este es el proceso completo, paso a paso.",
      steps: [
        {
          title: "Investigación",
          description:
            "Empiezo por entender el problema real: hablo con stakeholders, reviso la información existente, y defino exactamente qué necesitamos aprender antes de tocar una pantalla.",
          imageLabel: "Notas de discovery",
        },
        {
          title: "UX research",
          description:
            "Después profundizo con los usuarios reales: entrevistas, encuestas, observar cómo se comportan hoy, qué les frustra, y qué lenguaje usan para describir su propio problema.",
          imageLabel: "Entrevistas a usuarios",
        },
        {
          title: "Benchmarking",
          description:
            "En paralelo, hago benchmarking de la competencia y productos similares, no para copiarlos, sino para entender qué ya está resuelto y dónde está la oportunidad real.",
          imageLabel: "Análisis de competencia",
        },
        {
          title: "Notion como fuente",
          description:
            "Cada hallazgo llega a Notion, mi única fuente de verdad. Uso Claude conectado vía MCP para sintetizar entrevistas, benchmarking y datos en un solo lugar, en vez de tenerlo disperso en documentos y capturas de pantalla.",
          imageLabel: "Workspace de Notion",
        },
        {
          title: "Wireframes de baja fidelidad",
          description:
            "Con la investigación organizada, empiezo a dibujar a mano. Baja fidelidad, rápido, desechable, el objetivo es dejar bien la estructura y el flujo antes de invertir en lo visual.",
          imageLabel: "Bocetos a mano",
        },
        {
          title: "Media fidelidad",
          description:
            "Los bocetos pasan a Figma o a un MCP de Pencil que trabaja directamente con la investigación, convirtiendo la estructura en componentes y layout reales, todavía sin el pulido visual final.",
          imageLabel: "Media fidelidad en Figma",
        },
        {
          title: "Alta fidelidad",
          description:
            "Una vez que el flujo está validado, agrego la capa visual final: tipografía, color, espaciado, y los detalles que hacen que se sienta como un producto real.",
          imageLabel: "UI de alta fidelidad",
        },
        {
          title: "Pruebas con usuarios",
          description:
            "Antes de lanzar, pruebo el prototipo de alta fidelidad con usuarios reales, a veces mediante un prototipo interactivo generado con Claude, para ver dónde falla antes de que esté en producción.",
          imageLabel: "Pruebas de usabilidad",
        },
      ],
      closing:
        "El diseño sigue siendo donde todo se resuelve, pero sin este paso, no hay nada sólido que resolver.",
    },
    sobreMi: {
      title: "Sobre mí",
      paragraphs: [
        "Soy una persona apasionada, dentro y fuera del trabajo. Me gusta el cine, el arte, la música, cocinar y hacer ejercicio, cosas que en el fondo alimentan la misma curiosidad que aplico al diseño: prestar atención a los detalles y disfrutar el proceso, no solo el resultado.",
        "Mi background como ingeniero en software me ayuda a entender mejor los proyectos que requieren un lado más técnico, y a comunicarme directamente con equipos de desarrollo sin perder nada en la traducción.",
      ],
    },
    experience: [
      {
        company: "PSL Scout",
        role: "Product Designer",
        dates: "Abril 2026 — presente",
        description:
          "Marketplace de Personal Seat Licenses para la NFL. Diseño de producto end-to-end enfocado en generar confianza y facilitar transacciones de alto valor, desde negociación en tiempo real hasta mapas interactivos de asientos.",
      },
      {
        company: "Geest",
        role: "Product Designer",
        dates: "Octubre 2024 — Abril 2026",
        description:
          "SaaS B2B para empresas de instalaciones. Prioricé y diseñé features orientadas a crecimiento, incluyendo una IA de onboarding para nuevos usuarios, estructuras de datos, chat en tiempo real y sistema de tokens.",
      },
      {
        company: "E3",
        role: "Diseño y dirección creativa",
        dates: "Febrero 2025 — presente (paralelo, intermitente)",
        description:
          "Diseño y dirección creativa para agencia de real estate/arquitectura, incluyendo los proyectos Anagram, Nativa y Casas Exclusivas Colima.",
      },
      {
        company: "Enova",
        role: "UI Lead",
        dates: "Enero 2024 — Octubre 2024",
        description:
          "Lideré el diseño de más de 50 páginas para una de las empresas más grandes de recolección de residuos, gestionando una migración a gran escala con foco en diseño, experiencia de usuario, SEO y tiempos de entrega.",
      },
    ],
    caseStudies: [
      {
        slug: "psl-scout",
        title: "PSL Scout",
        subtitle: "Marketplace de Personal Seat Licenses para la NFL",
        image: "/projects/psl-scout.png",
        homeTeaser:
          "De 0 a más de 10 ventas cerradas en un marketplace donde antes no se vendía nada.",
        contexto:
          "PSL Scout es un marketplace donde fans compran y venden Personal Seat Licenses (PSLs) de la NFL, un producto de alto valor que en muchos casos representa una inversión considerable de dinero. Me uní como Product Designer.",
        problema:
          "Antes de mi llegada, la plataforma no había cerrado ni una sola venta. Faltaban features clave que realmente ayudaran al usuario a transaccionar, y por debajo de eso había un problema más de fondo: desconfianza. Un PSL no es barato, y comprarlo en una plataforma desconocida, sin el respaldo de marca de algo como StubHub o Ticketmaster, generaba fricción antes de que el usuario llegara siquiera a considerar el precio.",
        miRol:
          "Producto definía qué features entraban al roadmap y en qué orden. Mi trabajo era el cómo: diseñar la solución de cada feature, el flujo, y el UX writing que construyera confianza en cada paso de la transacción.",
        proceso: {
          research:
            "Benchmarking de plataformas de reventa y análisis de datos de uso existentes. Parte de ese research incluyó entender cómo los usuarios hablan de sus equipos favoritos, la diferencia entre el lenguaje de scouting deportivo y el lenguaje casual de redes sociales, para diseñar la feature de watchlist/favoritos con la terminología correcta.",
          restricciones:
            "Solo un competidor en el mercado tiene licencia para usar los logos oficiales de los equipos de la NFL; nosotros no. Esto significó resolver con otros elementos visuales (colores, iconografía, tipografía) la sensación de \"este es el marketplace de tu equipo\" sin poder apoyarnos en el logo real.",
          iteraciones:
            "El mapa de asientos y el flujo de negociación pasaron por varias versiones antes de llegar a la solución final.",
          decisiones:
            "Una de las decisiones más claras salió de A/B testing: probamos mostrar la información del asiento en una card resumen contra un mapa interactivo donde el usuario ve y selecciona el asiento individual dentro del estadio. El mapa ganó por claridad, se entiende mejor la ubicación real cuando la visualizas espacialmente que cuando la lees en una lista de datos.",
          validacion:
            "A/B testing entre variantes de diseño antes de definir la versión final de cada feature.",
        },
        solucionFinal:
          "El producto terminó incluyendo chat en tiempo real para negociar directamente entre comprador y vendedor, mapa interactivo de asientos a nivel de estadio, un concierge con IA para captar nuevos leads, y visibilidad en tiempo real del estado de documentación, ofertas y contraofertas durante la negociación.",
        resultado:
          "La plataforma pasó de 0 ventas a más de 10 ventas cerradas después del rediseño, resultado de un esfuerzo de equipo entre diseño, producto y marketing, pero con el research y UX writing como parte central de construir la confianza que faltaba.",
        aprendizaje:
          "Ningún diseño te garantiza que va a funcionar antes de ponerlo a prueba. Lo que sí puedes controlar es qué tan rápido conviertes eso en data real, con usuarios reales, y qué haces con lo que te dice: mejorar lo que ya tienes o proponer algo completamente distinto. Cambiar de dirección con datos en la mano no es retraso, es parte del proceso.",
      },
      {
        slug: "geest",
        title: "Geest",
        subtitle: "SaaS de gestión de procesos para empresas de instalaciones",
        homeTeaser:
          "120+ empresas nuevas atraídas después de rediseñar qué construíamos primero.",
        contexto:
          "Geest es un SaaS B2B para empresas de instalaciones que ayuda a centralizar toda su información y armar sus procesos de trabajo en un solo lugar: flujos con nodos, automatizaciones y puntos de decisión. Los usuarios reciben pendientes dentro de esos flujos y los resuelven llenando campos de consulta y evidencia hasta completarlos. Fui Product Designer del producto durante un periodo largo.",
        problema:
          "Cuando llegué, el equipo estaba enfocado casi por completo en resolver bugs. Las features que sí se lanzaban ayudaban a los usuarios que ya estaban en la plataforma, pero ninguna estaba pensada para atraer usuarios nuevos: el producto no estaba creciendo.",
        miRol:
          "Me encargué de priorizar qué features lanzábamos según dos criterios: el impacto real en el usuario actual y el potencial para atraer usuarios nuevos. Bajo ese criterio diseñé Hey Geest, una IA para ayudar a usuarios nuevos a crear procesos desde cero, además de las estructuras de tablas del producto, el chat en tiempo real, el sistema de tokens para automatizaciones, y la app offline. Llevé tanto la versión desktop como la app mobile.",
        proceso: {
          research:
            "Feedback directo de usuarios reales a través de tickets de soporte, que priorizaba según urgencia e impacto. También hice benchmarking de la competencia para identificar mejores prácticas del sector.",
          restricciones:
            "Buena parte del producto tiene mucho contexto técnico (automatizaciones, estructuras de datos, lógica de nodos) que al principio me costaba descifrar del todo. Resolví esto con reuniones directas con el equipo técnico y mis jefes para entender bien qué se necesitaba antes de diseñar la solución.",
          iteraciones:
            "Por confidencialidad no puedo entrar en el detalle específico de cada versión, pero el proceso se apoyó en A/B testing para validar decisiones de diseño antes de lanzarlas.",
          validacion: "A/B testing.",
        },
        solucionFinal:
          "Hey Geest (IA para creación de procesos desde cero), estructuras de tablas, chat en tiempo real, sistema de tokens para automatizaciones, y app offline, en desktop y mobile.",
        resultado:
          "Más de 120 empresas nuevas se incorporaron a la plataforma, atraídas por las features que priorizamos con foco en crecimiento, no solo en retención.",
        aprendizaje:
          "La mayor fricción no fue de diseño sino de traducción: mucho del contexto llegaba con lenguaje muy técnico y me tomaba tiempo entenderlo antes de poder diseñar. La próxima vez armaría PRDs menos técnicos para el equipo de diseño desde el inicio, para no perder tiempo decodificando en vez de diseñando.",
      },
      {
        slug: "anagram",
        title: "Anagram",
        subtitle: "Portafolio y catálogo para un estudio de arquitectura",
        link: "https://anagramarquitectos.com/portafolio",
        image: "/projects/anagram.png",
        homeTeaser: "De cero presencia en Google al #1 para \"arquitectos Colima\".",
        contexto:
          "Anagram es un estudio de arquitectura en Colima. El proyecto era su sitio principal, pensado como portafolio (destacando sus proyectos insignia) con un catálogo de inmuebles en venta como complemento, ya que Anagram tiene otra página hermana dedicada exclusivamente a la venta de inmuebles.",
        problema:
          "Anagram tenía presencia en GoDaddy, pero nada relevante que mostrar: sin portafolio ni catálogo en condiciones, y sin ninguna visibilidad en búsquedas de Google.",
        miRol:
          "Me hice cargo por completo del proyecto: diseño del producto, estrategia de SEO, análisis de competencia y redacción de los textos. El cliente me dio libertad total, así que también decidí todo lo que no fuera desarrollo de software, incluyendo qué tecnologías usar.",
        proceso: {
          research:
            "Investigué qué buscaba la gente y qué keywords movían el mercado de arquitectos e inmobiliarias en la zona. Desarrollé un sistema con Claude para identificar las mejores keywords a atacar, junto con un análisis de cómo se posicionaba la competencia.",
          restricciones:
            "Casi ninguna, el sitio anterior no tenía nada que conservar, así que había libertad total para construir desde cero.",
          decisiones:
            "La jerarquía del sitio (proyectos insignia primero, catálogo de venta después) no fue arbitraria: existe otra página de Anagram enfocada exclusivamente en venta de inmuebles, así que este sitio necesitaba dejar claro que era el estudio de arquitectura primero, y el catálogo un complemento, no el foco.",
          validacion:
            "Seguimiento de ranking en Search Console y Analytics a lo largo del tiempo, viendo cómo subía la posición hasta llegar al primer lugar.",
        },
        solucionFinal:
          "Sitio con portafolio de proyectos insignia como entrada principal y catálogo de inmuebles en venta como sección secundaria, con estructura y contenido optimizados para SEO desde el copy hasta la arquitectura de información.",
        resultado:
          "Posicionamiento en el primer lugar de Google para \"arquitectos Colima\", partiendo de cero presencia en buscadores.",
        aprendizaje:
          "Tener libertad total del cliente es un privilegio, pero no un permiso para diseñar en el vacío. Aunque la decisión final fuera mía, aprendí que vale la pena preguntar siempre por referencias y gustos antes de asumir, incluso cuando nadie te lo está pidiendo.",
      },
      {
        slug: "nativa",
        title: "Nativa",
        subtitle: "Preventa de desarrollo residencial de alta plusvalía",
        link: "https://nativaliving.anagramarquitectos.com/",
        image: "/projects/nativa.png",
        homeTeaser: "Preventa vendida por completo antes de terminar la construcción.",
        contexto:
          "Nativa es un desarrollo residencial de alta plusvalía en Colima, vendido en modalidad de preventa antes de terminar la construcción. El sitio se lanzó como subdominio de Anagram.",
        problema:
          "Vender departamentos que todavía no existen físicamente depende por completo de cómo se comunica el proyecto: sin poder mostrar el producto terminado, la página tenía que hacer todo el trabajo de generar confianza y deseo.",
        miRol:
          "Igual que en Anagram, me hice cargo del diseño completo del sitio y decidía todo lo que no fuera desarrollo de software. Aquí el gancho final de venta lo daban los vendedores de Nativa directamente con cada cliente; mi trabajo era generar y calificar ese interés desde la página.",
        proceso: {
          research:
            "Trabajé con los renders del arquitecto y hice benchmarking de otras páginas de preventa para ver qué tan bien comunicaban sus proyectos. También me di la libertad de pensar como usuario: qué esperaría encontrar alguien que llega a una página de preventa de departamentos de este nivel.",
          restricciones:
            "Prácticamente ninguna en cuanto a contenido: teníamos todos los renders posibles, incluyendo imágenes 360° que aproveché para armar un recorrido virtual por las instalaciones, buscando darle al usuario una sensación de cercanía con los departamentos aunque no existieran todavía.",
          validacion:
            "Los correos y llamadas generados directamente desde la página fueron la señal de que el sitio estaba haciendo su trabajo, esos leads eran los que después cerraban los vendedores de Nativa.",
        },
        solucionFinal:
          "Sitio de preventa centrado en el recorrido virtual 360° de las instalaciones, con la información y renders necesarios para generar leads calificados antes de que existiera el producto físico.",
        resultado:
          "Se vendieron todos los departamentos antes de terminar la construcción, con correos y llamadas generados desde la página como parte del embudo que alimentaba al equipo de ventas.",
        aprendizaje:
          "En una preventa donde se maneja tanto dinero, hubiera valido la pena hacer aún más benchmarking. Cuando el usuario no puede tocar ni visitar el producto, cada pieza de información que le muestras tiene que ser la más relevante posible, no hay margen para relleno.",
      },
      {
        slug: "muvi",
        title: "Muvi",
        subtitle: "Recorridos virtuales para los museos de la Universidad de Colima",
        homeTeaser: "Más de 200 alumnos acreditados a través de recorridos virtuales.",
        contexto:
          "Muvi es un proyecto B2C para los museos universitarios de la Universidad de Colima: se vendían recorridos virtuales que los estudiantes usaban como parte de su proceso de acreditación académica.",
        problema:
          "El reto era convertir un trámite académico (la acreditación) en un flujo transaccional simple y sin fricción, para estudiantes que no estaban acostumbrados a \"comprar\" algo dentro de un proceso escolar.",
        miRol:
          "Lideré un equipo de diseño de 3 personas (dos enfocadas en UX/UI, investigación e ideación, y una en diseño gráfico), todos los recursos con los que contábamos para el proyecto. Asigné tareas, di feedback, establecí metas y llevé las sesiones de arranque. Al armar el equipo, prioricé el talento sobre el dominio de herramientas específicas, algunas personas no conocían ciertas herramientas de trabajo pero tenían el criterio que el proyecto necesitaba. También fui el puente directo con el equipo de desarrollo, traduciendo temas técnicos que el resto del equipo de diseño no manejaba.",
        proceso: {
          research:
            "La investigación con estudiantes reveló su verdadera motivación: muchos vivían lejos de la ciudad y les resultaba mucho más difícil asistir presencialmente a un evento de acreditación que hacerlo virtualmente. Esa fue la base para orientar todo el diseño hacia la conveniencia de acreditar desde casa.",
          restricciones:
            "Al ser un producto de la universidad, teníamos que mantener el sistema de diseño e identidad visual que ellos ya manejaban, no partíamos de una hoja en blanco en cuanto a estilo.",
          decisiones:
            "Diseñé los user journeys enfocados en una transacción rápida (entrada, selección de recorrido, pago, acceso) y trabajé directamente en la integración de las pasarelas de pago, para que comprar el acceso al recorrido se sintiera tan simple como cualquier trámite en línea, no como una fricción extra dentro de su proceso académico.",
          validacion:
            "Probé el flujo completo con distintos estudiantes para identificar dónde se generaba fricción y ajustar antes del lanzamiento.",
        },
        solucionFinal:
          "Plataforma de recorridos virtuales con flujo de compra y acceso simplificado, integrada a pasarelas de pago, y alineada al sistema de diseño de la Universidad de Colima.",
        resultado: "Más de 200 alumnos se acreditaron a través de la plataforma.",
        aprendizaje:
          "Como lead, mi tendencia era resolver o supervisar de cerca. Aprendí que debía delegar más y confiar en que mi equipo podía presentar y exponer sus propios temas, no solo ejecutarlos.",
      },
      {
        slug: "casas-exclusivas-colima",
        title: "Casas Exclusivas Colima",
        subtitle: "Catálogo inmobiliario",
        link: "https://www.casasexclusivas-colima.com/",
        image: "/projects/casas-exclusivas-colima.png",
        homeTeaser: "Top 20 en Google y ventas reales generadas desde el catálogo.",
        contexto:
          "Catálogo de propiedades en venta para la empresa Casas Exclusivas Colima.",
        problema:
          "El cliente quería algo muy apegado a una referencia concreta, Century 21, y pedía que la estructura fuera prácticamente exacta a esa. El reto no fue crear desde cero sino darle identidad propia al proyecto dentro de esa referencia impuesta.",
        miRol:
          "El mismo esquema que en Anagram y Nativa: diseño completo del sitio y estrategia de SEO.",
        proceso: {
          decisiones:
            "Se priorizó el catálogo de casas en venta como elemento central, ya que el objetivo del cliente era destacar frente a la competencia dentro de un mercado inmobiliario mucho más grande y saturado que el de Anagram o Nativa.",
          validacion:
            "Posicionar el sitio fue más difícil que en los otros proyectos por el tamaño del mercado, aun así llegamos al top 20 en Google. No hay una métrica dura de tráfico o leads, pero la página ha generado ventas reales, alrededor de 5 casas vendidas a través del sitio.",
        },
        solucionFinal:
          "Catálogo inmobiliario con estructura similar a referencias del sector como Century 21, pero con identidad visual propia del cliente.",
        resultado:
          "Top 20 en Google dentro de un mercado grande y saturado, y alrededor de 5 casas vendidas a través del sitio.",
        aprendizaje:
          "Incluso cuando un cliente pide algo muy apegado a una referencia exacta, sigue habiendo espacio (y la responsabilidad de tu parte) para darle su propia identidad, no una copia.",
      },
    ],
    stats: [
      {
        value: 10,
        suffix: "+",
        label: "Ventas en PSL Scout, partiendo de cero",
        linkText: "PSL Scout",
        linkSlug: "psl-scout",
      },
      {
        value: 120,
        suffix: "+",
        label: "Empresas incorporadas en Geest",
        linkText: "Geest",
        linkSlug: "geest",
      },
      {
        value: 200,
        suffix: "+",
        label: "Alumnos acreditados vía Muvi",
        linkText: "Muvi",
        linkSlug: "muvi",
      },
      { value: 3, suffix: "+", label: "Años diseñando producto" },
    ],
    interests: [
      { icon: "film", label: "Cine" },
      { icon: "palette", label: "Arte" },
      { icon: "music", label: "Música" },
      { icon: "chef", label: "Cocina" },
      { icon: "dumbbell", label: "Ejercicio" },
    ],
  },
};
