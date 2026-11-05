import type { Locale } from "@/lib/content";

export type AppId =
  | "finder"
  | "figma"
  | "claude"
  | "notion"
  | "photobooth"
  | "contacts"
  | "preview"
  | "trash";

export type ClaudeBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: { title: string; text: string }[] }
  // Rendered from content.comoTrabajo so the process never drifts from the
  // original "How I work" copy.
  | { type: "process" };

export type ClaudeChat = {
  id: string;
  title: string;
  prompt: string;
  answer: ClaudeBlock[];
};

export type NotionColumn = { name: string; cards: string[] };

export type TrashItem = { name: string; kind: string; note: string };

export type DesktopContent = {
  apps: Record<AppId, string>;
  // What each app is for, shown in the dock tooltip ("Figma" -> "My projects").
  tips: Record<AppId, string>;
  hint: string;
  menu: {
    language: string;
    appearance: string;
    light: string;
    dark: string;
    downloadCV: string;
    close: string;
    minimize: string;
    zoom: string;
  };
  figma: {
    file: string;
    pages: string;
    layers: string;
    details: string;
    openPublic: string;
    visit: string;
    zoomIn: string;
    zoomOut: string;
    zoomReset: string;
    home: {
      title: string;
      all: string;
      projects: string;
      concepts: string;
      pagesUnit: string;
      conceptTag: string;
      back: string;
    };
    frames: {
      cover: string;
      overview: string;
      process: string;
      solution: string;
      result: string;
    };
  };
  claude: {
    recents: string;
    newChat: string;
    suggested: string;
    placeholder: string;
    note: string;
    chats: ClaudeChat[];
  };
  notion: {
    workspace: string;
    sidebar: string[];
    title: string;
    callout: string;
    researchHeading: string;
    researchBody: string;
    researchBullets: string[];
    boardHeading: string;
    boardBody: string;
    boardLabel: string;
    columns: NotionColumn[];
  };
  photobooth: {
    empty: string;
  };
  finder: {
    favorites: string;
    experience: string;
    tools: string;
    skills: string;
    name: string;
    role: string;
    dates: string;
    pick: string;
    items: string;
  };
  contacts: {
    allContacts: string;
    email: string;
    whatsapp: string;
    linkedin: string;
    notes: string;
    interests: string;
    message: string;
    mail: string;
    viewProjects: string;
    openCV: string;
    start: string;
  };
  preview: {
    fileName: string;
    download: string;
    openTab: string;
    mobileHint: string;
  };
  trash: {
    empty: string;
    items: TrashItem[];
    secretName: string;
    secretIntro: string;
    secretCta: string;
    hidden: string;
    emptyButton: string;
    locked: string;
    kindLabel: string;
  };
};

export const desktopContent: Record<Locale, DesktopContent> = {
  en: {
    apps: {
      finder: "Finder",
      figma: "Figma",
      claude: "Claude",
      notion: "Notion",
      photobooth: "Photo Booth",
      contacts: "Contacts",
      preview: "Preview",
      trash: "Trash",
    },
    tips: {
      finder: "Experience & skills",
      figma: "My projects",
      claude: "How I use AI",
      notion: "How I use Notion",
      photobooth: "Photos",
      contacts: "About me",
      preview: "My CV",
      trash: "Trash",
    },
    hint: "Open Figma in the dock to see my projects",
    menu: {
      language: "Language",
      appearance: "Appearance",
      light: "Light",
      dark: "Dark",
      downloadCV: "Download CV",
      close: "Close",
      minimize: "Minimize",
      zoom: "Zoom",
    },
    figma: {
      file: "Portfolio · Luis Chacón",
      pages: "Pages",
      layers: "Layers",
      details: "Details",
      openPublic: "Open in Figma",
      visit: "Visit site",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      zoomReset: "Reset zoom to 100%",
      home: {
        title: "Recents",
        all: "All files",
        projects: "Projects",
        concepts: "Concepts",
        pagesUnit: "pages",
        conceptTag: "Concept",
        back: "Recents",
      },
      frames: {
        cover: "Cover",
        overview: "Overview",
        process: "Process",
        solution: "Solution",
        result: "Result",
      },
    },
    claude: {
      recents: "Recents",
      newChat: "New chat",
      suggested: "Ask about my process",
      placeholder: "Reply to Claude...",
      note: "A static interface, not a live AI. These answers are mine.",
      chats: [
        {
          id: "use",
          title: "How I use Claude",
          prompt: "How do you use Claude in your design work?",
          answer: [
            {
              type: "p",
              text: "Claude is part of my process, not a shortcut. I use it for the mechanical parts, so my time goes to the thinking.",
            },
            {
              type: "list",
              items: [
                {
                  title: "Research synthesis",
                  text: "Every finding lands in Notion. With Claude connected through MCP, I synthesize interviews, benchmarking, and data in one place instead of scattered docs and screenshots.",
                },
                {
                  title: "Prototypes for testing",
                  text: "Sometimes I generate an interactive prototype with Claude, so I can test with real users and see where it breaks before it's in production.",
                },
                {
                  title: "SEO research",
                  text: "For Anagram, I built a system with Claude to identify the best keywords to target and analyze how the competition was ranking.",
                },
                {
                  title: "Code",
                  text: "I come from software engineering, so I can take a design all the way to code. AI supports that development, like on Sinagua.",
                },
              ],
            },
            {
              type: "p",
              text: "What I don't hand off is the judgment: which problem to solve, what to cut, and what the user actually needs. Design is still where everything gets resolved.",
            },
          ],
        },
        {
          id: "process",
          title: "My design process",
          prompt: "Walk me through your design process.",
          answer: [{ type: "process" }],
        },
        {
          id: "ai",
          title: "Designing AI features",
          prompt: "Have you designed AI features?",
          answer: [
            { type: "p", text: "Yes, in two products." },
            {
              type: "list",
              items: [
                {
                  title: "Geest",
                  text: "Hey Geest, an AI that helps new users build their processes from scratch. It was part of the features that helped bring 120+ new companies to the platform.",
                },
                {
                  title: "PSL Scout",
                  text: "An AI concierge to capture new leads, part of the product that went from 0 to 10+ closed sales.",
                },
              ],
            },
            {
              type: "p",
              text: "Both were validated with A/B testing before shipping.",
            },
          ],
        },
      ],
    },
    notion: {
      workspace: "Luis's Workspace",
      sidebar: ["How I use Notion", "Research hub", "Task board"],
      title: "How I use Notion",
      callout:
        "My single source of truth. Every finding from research, interviews, and benchmarking lands here.",
      researchHeading: "Research hub",
      researchBody:
        "Interviews, benchmarking, and data live in one place. With Claude connected through MCP, I synthesize them instead of digging through scattered docs and screenshots.",
      researchBullets: [
        "Interviews and user notes",
        "Competitive benchmarking",
        "Existing data and stakeholder input",
      ],
      boardHeading: "Task board",
      boardBody:
        "Work moves across the board as research turns into decisions.",
      boardLabel: "Example board",
      columns: [
        {
          name: "To do",
          cards: ["Define what we need to learn", "Plan user interviews"],
        },
        {
          name: "In progress",
          cards: ["Synthesize interviews with Claude", "Benchmark competitors"],
        },
        {
          name: "Done",
          cards: ["Talk to stakeholders", "Review existing data"],
        },
      ],
    },
    photobooth: { empty: "Photo coming soon" },
    finder: {
      favorites: "Favorites",
      experience: "Experience",
      tools: "Tools",
      skills: "Skills",
      name: "Name",
      role: "Role",
      dates: "Dates",
      pick: "Select an item to preview it",
      items: "items",
    },
    contacts: {
      allContacts: "All Contacts",
      email: "email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      notes: "Notes",
      interests: "Interests",
      message: "Message",
      mail: "Mail",
      viewProjects: "View my projects in Figma",
      openCV: "Open my CV",
      start: "Start here",
    },
    preview: {
      fileName: "Luis_Chacon_CV.pdf",
      download: "Download",
      openTab: "Open in new tab",
      mobileHint: "Your browser may not preview PDFs here.",
    },
    trash: {
      empty: "Trash is empty",
      items: [
        {
          name: "portfolio-v1-liquid-glass.fig",
          kind: "Figma file",
          note: "Too shiny. It looked AI-generated, so it didn't make it.",
        },
        {
          name: "portfolio-v2-paper-and-grain.fig",
          kind: "Figma file",
          note: "Warm and handmade, but generic.",
        },
        {
          name: "final-FINAL-v7.fig",
          kind: "Figma file",
          note: "You know how it goes.",
        },
      ],
      secretName: "do-not-open.txt",
      secretIntro:
        "You opened the file that said do not open. Good instinct: that's the curiosity I bring to a product. If you made it this far, let's talk.",
      secretCta: "Write to me",
      hidden: "Hidden item",
      emptyButton: "Empty",
      locked: "This one is locked and can't be deleted. Nice try.",
      kindLabel: "Kind",
    },
  },
  es: {
    apps: {
      finder: "Finder",
      figma: "Figma",
      claude: "Claude",
      notion: "Notion",
      photobooth: "Photo Booth",
      contacts: "Contactos",
      preview: "Vista previa",
      trash: "Papelera",
    },
    tips: {
      finder: "Experiencia y skills",
      figma: "Mis proyectos",
      claude: "Cómo uso la IA",
      notion: "Cómo uso Notion",
      photobooth: "Fotos",
      contacts: "Sobre mí",
      preview: "Mi CV",
      trash: "Papelera",
    },
    hint: "Abre Figma en el dock para ver mis proyectos",
    menu: {
      language: "Idioma",
      appearance: "Apariencia",
      light: "Claro",
      dark: "Oscuro",
      downloadCV: "Descargar CV",
      close: "Cerrar",
      minimize: "Minimizar",
      zoom: "Zoom",
    },
    figma: {
      file: "Portfolio · Luis Chacón",
      pages: "Páginas",
      layers: "Capas",
      details: "Detalles",
      openPublic: "Abrir en Figma",
      visit: "Visitar sitio",
      zoomIn: "Acercar",
      zoomOut: "Alejar",
      zoomReset: "Restablecer zoom al 100%",
      home: {
        title: "Recientes",
        all: "Todos los archivos",
        projects: "Proyectos",
        concepts: "Conceptos",
        pagesUnit: "páginas",
        conceptTag: "Concepto",
        back: "Recientes",
      },
      frames: {
        cover: "Portada",
        overview: "Resumen",
        process: "Proceso",
        solution: "Solución",
        result: "Resultado",
      },
    },
    claude: {
      recents: "Recientes",
      newChat: "Nuevo chat",
      suggested: "Pregunta sobre mi proceso",
      placeholder: "Responder a Claude...",
      note: "Una interfaz estática, no una IA en vivo. Estas respuestas son mías.",
      chats: [
        {
          id: "use",
          title: "Cómo uso Claude",
          prompt: "¿Cómo usas Claude en tu trabajo de diseño?",
          answer: [
            {
              type: "p",
              text: "Claude es parte de mi proceso, no un atajo. Lo uso en lo mecánico, para que mi tiempo se vaya en pensar.",
            },
            {
              type: "list",
              items: [
                {
                  title: "Síntesis de research",
                  text: "Cada hallazgo llega a Notion. Con Claude conectado vía MCP, sintetizo entrevistas, benchmarking y datos en un solo lugar, en vez de documentos y capturas de pantalla dispersos.",
                },
                {
                  title: "Prototipos para pruebas",
                  text: "A veces genero un prototipo interactivo con Claude para probarlo con usuarios reales y ver dónde falla antes de que esté en producción.",
                },
                {
                  title: "Research de SEO",
                  text: "En Anagram desarrollé un sistema con Claude para identificar las mejores keywords y analizar cómo se posicionaba la competencia.",
                },
                {
                  title: "Código",
                  text: "Vengo de la ingeniería en software, así que puedo llevar un diseño hasta el código. La IA apoya ese desarrollo, como en Sinagua.",
                },
              ],
            },
            {
              type: "p",
              text: "Lo que no delego es el criterio: qué problema resolver, qué recortar y qué necesita realmente el usuario. El diseño sigue siendo donde todo se resuelve.",
            },
          ],
        },
        {
          id: "process",
          title: "Mi proceso de diseño",
          prompt: "Cuéntame tu proceso de diseño paso a paso.",
          answer: [{ type: "process" }],
        },
        {
          id: "ai",
          title: "Diseñar features con IA",
          prompt: "¿Has diseñado features con IA?",
          answer: [
            { type: "p", text: "Sí, en dos productos." },
            {
              type: "list",
              items: [
                {
                  title: "Geest",
                  text: "Hey Geest, una IA que ayuda a usuarios nuevos a crear sus procesos desde cero. Fue parte de las features que ayudaron a atraer más de 120 empresas nuevas a la plataforma.",
                },
                {
                  title: "PSL Scout",
                  text: "Un concierge con IA para captar nuevos leads, parte del producto que pasó de 0 a más de 10 ventas cerradas.",
                },
              ],
            },
            {
              type: "p",
              text: "Ambas se validaron con A/B testing antes de lanzarse.",
            },
          ],
        },
      ],
    },
    notion: {
      workspace: "Workspace de Luis",
      sidebar: ["Cómo uso Notion", "Hub de research", "Tablero de tareas"],
      title: "Cómo uso Notion",
      callout:
        "Mi única fuente de verdad. Cada hallazgo de research, entrevistas y benchmarking llega aquí.",
      researchHeading: "Hub de research",
      researchBody:
        "Entrevistas, benchmarking y datos viven en un solo lugar. Con Claude conectado vía MCP los sintetizo, en vez de rascar entre documentos y capturas dispersos.",
      researchBullets: [
        "Entrevistas y notas de usuarios",
        "Benchmarking de la competencia",
        "Datos existentes y aportes de stakeholders",
      ],
      boardHeading: "Tablero de tareas",
      boardBody:
        "El trabajo avanza por el tablero conforme el research se vuelve decisiones.",
      boardLabel: "Tablero de ejemplo",
      columns: [
        {
          name: "Por hacer",
          cards: ["Definir qué necesitamos aprender", "Planear entrevistas"],
        },
        {
          name: "En curso",
          cards: [
            "Sintetizar entrevistas con Claude",
            "Benchmark de la competencia",
          ],
        },
        {
          name: "Hecho",
          cards: ["Hablar con stakeholders", "Revisar datos existentes"],
        },
      ],
    },
    photobooth: { empty: "Foto próximamente" },
    finder: {
      favorites: "Favoritos",
      experience: "Experiencia",
      tools: "Herramientas",
      skills: "Skills",
      name: "Nombre",
      role: "Rol",
      dates: "Fechas",
      pick: "Selecciona un elemento para verlo",
      items: "elementos",
    },
    contacts: {
      allContacts: "Todos los contactos",
      email: "correo",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      notes: "Notas",
      interests: "Intereses",
      message: "Mensaje",
      mail: "Correo",
      viewProjects: "Ver mis proyectos en Figma",
      openCV: "Abrir mi CV",
      start: "Empieza aquí",
    },
    preview: {
      fileName: "Luis_Chacon_CV.pdf",
      download: "Descargar",
      openTab: "Abrir en pestaña nueva",
      mobileHint: "Tu navegador quizá no previsualice PDFs aquí.",
    },
    trash: {
      empty: "La papelera está vacía",
      items: [
        {
          name: "portfolio-v1-liquid-glass.fig",
          kind: "Archivo de Figma",
          note: "Demasiado brillante. Parecía hecho por IA, así que no pasó.",
        },
        {
          name: "portfolio-v2-papel-y-grano.fig",
          kind: "Archivo de Figma",
          note: "Cálido y artesanal, pero genérico.",
        },
        {
          name: "final-FINAL-v7.fig",
          kind: "Archivo de Figma",
          note: "Ya sabes cómo es.",
        },
      ],
      secretName: "no-abrir.txt",
      secretIntro:
        "Abriste el archivo que decía no abrir. Buen instinto: esa es la curiosidad que le pongo a un producto. Si llegaste hasta aquí, hablemos.",
      secretCta: "Escríbeme",
      hidden: "Elemento oculto",
      emptyButton: "Vaciar",
      locked: "Este está bloqueado y no se puede eliminar. Buen intento.",
      kindLabel: "Tipo",
    },
  },
};

// Public Figma file with the full design work. Leave null to hide the
// "Open in Figma" button until the link is available.
export const figmaPublicUrl: string | null = null;

// Case studies kept in content.ts but not shown in the Figma app for now.
// Remove a slug from this list to bring it back.
export const hiddenCaseStudies: string[] = ["psl-scout", "geest", "muvi"];

export const isCaseStudyVisible = (slug: string) =>
  !hiddenCaseStudies.includes(slug);

export function visibleCaseStudies<T extends { slug: string }>(list: T[]): T[] {
  return list.filter((c) => isCaseStudyVisible(c.slug));
}
