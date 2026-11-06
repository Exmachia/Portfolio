export type Locale = "en" | "es";

export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "es";
export const siteUrl = "https://luis-chacon.com";

// An extra picture shown inside a case study frame (see CaseStudy.images).
export type CaseImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

// Images live in public/projects/<slug>/. Width/height are the pixel size of
// the optimized file, so next/image can reserve the space.
export function caseImage(
  slug: string,
  file: string,
  width: number,
  height: number,
  text: { alt: string; caption?: string },
): CaseImage {
  return { src: `/projects/${slug}/${file}`, width, height, ...text };
}

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  link?: string;
  image?: string;
  // Alt text for the cover; falls back to the title.
  imageAlt?: string;
  confidential?: boolean;
  // Unlaunched concept: not affiliated with the brand (shows ui.conceptNote).
  concept?: boolean;
  // Extra pictures per frame, in reading order. Cases without it render as before.
  images?: {
    overview?: CaseImage[];
    process?: CaseImage[];
    solution?: CaseImage[];
  };
  homeTeaser: string;
  contexto: string;
  problema: string;
  // Hidden while empty (concept cases wait for the author to approve it).
  miRol?: string;
  proceso: {
    research?: string;
    restricciones?: string;
    iteraciones?: string;
    decisiones?: string;
    validacion?: string;
  };
  solucionFinal: string;
  resultado: string;
  aprendizaje?: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  description: string;
  confidential?: boolean;
};

export type Skill = {
  name: string;
  years: number;
  rating: number;
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
    heroStatement: string;
    tagline: string;
    email: string;
    whatsapp: string;
    whatsappHref: string;
    linkedin: string;
    experienceSummary: string;
    skills: Skill[];
    expertise: Skill[];
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
    skillsLabel: string;
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
    phase: string;
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
    yearsOfExperience: string;
    proficiency: string;
    confidentialLabel: string;
    confidentialNote: string;
    conceptLabel: string;
    conceptNote: string;
    shareCaseStudy: string;
    linkCopied: string;
  };
  comoTrabajo: {
    title: string;
    kicker: string;
    intro: string;
    phases: string[];
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
      heroStatement: "Product design that actually solves the problem.",
      tagline:
        "I design end-to-end digital products across fintech, travel, SaaS, marketplaces, and real estate, driven by research, not assumptions.",
      email: "eduardo-chacom@hotmail.com",
      whatsapp: "+52 312 121 4827",
      whatsappHref: "https://wa.me/523121214827",
      linkedin: "https://www.linkedin.com/in/eduardo-chacon-171367275/",
      experienceSummary:
        "Currently at PSL Scout, with 3+ years of experience designing product.",
      skills: [
        { name: "Figma", years: 5, rating: 5 },
        { name: "Pencil", years: 1, rating: 4 },
        { name: "Claude", years: 2, rating: 4 },
        { name: "Notion", years: 4, rating: 5 },
        { name: "PostHog", years: 2, rating: 4 },
        { name: "Miro", years: 2, rating: 5 },
        { name: "Sketch", years: 3, rating: 5 },
        { name: "Lovable", years: 1, rating: 4 },
        { name: "Webflow", years: 2, rating: 5 },
        { name: "Google Analytics", years: 2, rating: 4 },
      ],
      expertise: [
        { name: "User Research", years: 4, rating: 5 },
        { name: "UX Writing", years: 4, rating: 4 },
        { name: "Information Architecture", years: 3, rating: 4 },
        { name: "Interaction Design & Prototyping", years: 5, rating: 5 },
        { name: "UI / Visual Design", years: 5, rating: 4 },
        { name: "A/B Testing & Validation", years: 3, rating: 4 },
        { name: "Design Systems", years: 3, rating: 4 },
        { name: "SEO Strategy", years: 3, rating: 4 },
        { name: "Product Analytics", years: 2, rating: 4 },
        { name: "Team Leadership", years: 3, rating: 4 },
        { name: "Stakeholder Communication", years: 2, rating: 4 },
      ],
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
      skillsLabel: "Skills",
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
      phase: "Phase",
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
      yearsOfExperience: "years of experience",
      proficiency: "Proficiency",
      confidentialLabel: "Confidential",
      confidentialNote:
        "Some details of this project are under an NDA, so I keep the description high-level out of respect for the client.",
      conceptLabel: "Concept project",
      conceptNote:
        "A concept project: not affiliated with the brand and never launched. The screens are my own recreations, and names and amounts are sample data.",
      shareCaseStudy: "Share",
      linkCopied: "Link copied",
    },
    comoTrabajo: {
      title: "How I work",
      kicker: "Research first, always",
      intro:
        "In a market where products compete head to head, the difference isn't just in the interface anymore, it's in how well you understand your user before you draw the first wireframe. Here's the full process, step by step.",
      phases: ["Discovery", "Design", "Validation"],
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
        {
          title: "Monitoring",
          description:
            "Once it's live, I set up monitoring with PostHog to see how it actually performs with real usage, not just in testing, and use that data to decide what to iterate on next.",
          imageLabel: "PostHog dashboard",
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
        dates: "February 2025 — present (freelance)",
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
      {
        company: "Universidad de Colima",
        role: "UX/UI Lead",
        dates: "January 2023 — January 2024",
        description:
          "Led UX/UI for Muvi, a virtual tour platform for the university's museums that students used as part of their academic accreditation process.",
      },
    ],
    caseStudies: [
      {
        slug: "psl-scout",
        title: "PSL Scout",
        subtitle: "Marketplace for NFL Personal Seat Licenses",
        image: "/projects/psl-scout.png",
        confidential: true,
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
        confidential: true,
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
        image: "/projects/anagram/01-cover-v2.webp",
        imageAlt:
          "Anagram case cover on a cream background: \"From having nothing to show to a portfolio of flagship projects\", with three iPhones showing the site's home, about and portfolio",
        images: {
          overview: [
            caseImage("anagram", "02-antes.webp", 2880, 1514, {
              alt: "Diagram of the starting point: no portfolio, no catalog and no visibility. It's a reconstruction, not a capture of the previous site",
              caption: "Reconstruction of the starting point. Not a capture of the previous site.",
            }),
          ],
          process: [
            caseImage("anagram", "04-lofi-direcciones.webp", 3936, 2278, {
              alt: "Two reconstructed grayscale wireframes: A catalog as the focus, discarded, and B flagship projects first, chosen",
              caption: "Reconstruction. Not the project's original wireframes.",
            }),
            caseImage("anagram", "03-user-flow.webp", 3360, 1640, {
              alt: "User flows: from Google to a project and from the menu to a property for sale",
            }),
          ],
          solution: [
            caseImage("anagram", "06-hifi-inicio.webp", 2880, 7696, {
              alt: "Recreation of the home page with its real photos",
              caption: "Recreation of the published site, observed on November 5, 2026.",
            }),
            caseImage("anagram", "07-hifi-portafolio.webp", 2880, 7530, {
              alt: "Paginated portfolio with the projects in black and white",
            }),
            caseImage("anagram", "08-hifi-proyecto.webp", 2880, 7238, {
              alt: "Casa Maple 31 project detail with spec sheet and gallery",
            }),
            caseImage("anagram", "09-hifi-inmobiliaria.webp", 2880, 3782, {
              alt: "Properties for sale with filters by type, prices and details",
            }),
            caseImage("anagram", "05-design-system.webp", 3360, 3784, {
              alt: "Anagram design system: neutral scale, Outfit typography, components and contrast table",
            }),
            caseImage("anagram", "10-hifi-modo-oscuro.webp", 1440, 3848, {
              alt: "Home in dark mode",
            }),
            caseImage("anagram", "11-hifi-movil.webp", 2742, 1896, {
              alt: "Adapted mobile views: home, portfolio and real estate",
            }),
          ],
        },
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
        image: "/projects/nativa/01-cover-v2.webp",
        imageAlt:
          "Nativa case cover on a green background: \"Selling what doesn't exist yet: the page builds trust and desire on its own\", with the site's home and its mobile view",
        images: {
          overview: [
            caseImage("nativa", "02-antes.webp", 2880, 2072, {
              alt: "Starting material: renders, plans and images, with the questions the buyer has to resolve. It's a reconstruction, not a capture of a previous site",
              caption: "Reconstruction of the starting point. Not a capture of a previous site.",
            }),
          ],
          process: [
            caseImage("nativa", "04-lofi-direcciones.webp", 5816, 2368, {
              alt: "Grayscale wireframes: A gallery of renders and B models first, both hypothetical, and C tour and information, the chosen one",
              caption: "Reconstruction. Directions A and B are hypothetical.",
            }),
            caseImage("nativa", "03-user-flow.webp", 3360, 2040, {
              alt: "User flows for buying an apartment and for renting or buying a commercial space, up to the sales team",
            }),
          ],
          solution: [
            caseImage("nativa", "06-hifi-inicio.webp", 1440, 13253, {
              alt: "Recreation of the site's full page with its real renders and plans",
              caption: "Recreation of the published site, observed on November 5, 2026.",
            }),
            caseImage("nativa", "08-hifi-portada-y-proyecto.webp", 6048, 1992, {
              alt: "Cover and About the project sections",
            }),
            caseImage("nativa", "07-hifi-modelos.webp", 2880, 5582, {
              alt: "Models page with the plans for Ceiba, Primavera, Rosa Morada and Parota",
            }),
            caseImage("nativa", "05-design-system.webp", 3360, 5072, {
              alt: "Nativa design system: green and terracotta measured from the site, substitute typography Prata and Nunito Sans, components and contrast table",
            }),
            caseImage("nativa", "09-hifi-financiamiento-y-contacto.webp", 3072, 3738, {
              alt: "Financing plans and contact form",
            }),
            caseImage("nativa", "10-hifi-movil.webp", 3624, 1896, {
              alt: "Mobile views: cover, side menu, Ceiba model and contact",
            }),
          ],
        },
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
        image: "/projects/casas-exclusivas-colima/01-cover-v2.webp",
        imageAlt:
          "Casas Exclusivas case cover on a dark background: \"The client asked for a structure like Century 21. The challenge: give it its own identity\", with the site on desktop and mobile",
        images: {
          overview: [
            caseImage("casas-exclusivas-colima", "02-antes.webp", 3600, 1536, {
              alt: "Grayscale reconstruction of the structure the client asked for: listing with filters, property sheet and contact, unbranded",
              caption: "Reconstruction of the structure the client asked for. Not a capture of a previous site.",
            }),
          ],
          process: [
            caseImage("casas-exclusivas-colima", "04-lofi-direcciones.webp", 3360, 2118, {
              alt: "Two grayscale directions: A copy of the reference, discarded; B reference structure with its own identity, chosen",
              caption: "Reconstruction. Not the project's original wireframes.",
            }),
            caseImage("casas-exclusivas-colima", "03-user-flow.webp", 3990, 1254, {
              alt: "Reconstructed user flow: arriving directly or from Google, home or local guide, sales, filter, detail and three contact exits",
            }),
          ],
          solution: [
            caseImage("casas-exclusivas-colima", "06-hifi-inicio.webp", 2880, 8116, {
              alt: "Home on desktop: hero with an aerial photo, Unique Opportunities, local guides, mission and vision, contact, FAQ and footer",
              caption: "Recreation of the published site, observed on November 5, 2026.",
            }),
            caseImage("casas-exclusivas-colima", "07-hifi-venta.webp", 2880, 7028, {
              alt: "For sale on desktop: kitchen hero, a Filter your search panel and a grid of properties with code, price, area and square meters",
            }),
            caseImage("casas-exclusivas-colima", "08-hifi-detalle.webp", 2880, 6618, {
              alt: "Property detail on desktop: gallery, map, house details, Call now, Send WhatsApp and similar properties",
            }),
            caseImage("casas-exclusivas-colima", "09-hifi-guia.webp", 2880, 2620, {
              alt: "Colima local guide: introduction, what living in Colima is like and average prices",
            }),
            caseImage("casas-exclusivas-colima", "11-hifi-movil.webp", 2742, 5122, {
              alt: "Home, For sale and Detail on mobile",
            }),
            caseImage("casas-exclusivas-colima", "05-design-system.webp", 3360, 7104, {
              alt: "Design system: primitive and semantic colors, Outfit typography, spacing, radii, shadow, WCAG contrast table and components",
            }),
            caseImage("casas-exclusivas-colima", "10-hifi-estados.webp", 2880, 1492, {
              alt: "States seen on the site: an open question, the budget select, an invitation to get in touch and the nav on scroll, with key decisions and notes to verify",
            }),
          ],
        },
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
      {
        slug: "sinagua",
        title: "Sinagua",
        subtitle: "Open data platform on water in Mexico",
        link: "https://www.sinagua.org",
        image: "/projects/sinagua/01-cover-v2.webp",
        imageAlt:
          "Sinagua case cover on a cream background: \"The water data exists, but it's scattered. Here it reads municipality by municipality and in plain language\", with the map of Mexico's aquifers and the platform's detail",
        images: {
          overview: [
            caseImage("sinagua", "02-antes.webp", 2880, 1994, {
              alt: "Before Sinagua: four cards for CONAGUA, SMN and INEGI sources and the five manual steps to learn how water is doing in a municipality",
              caption:
                "Reconstruction of the problem. Not a capture of a previous product.",
            }),
          ],
          process: [
            caseImage("sinagua", "04-lofi-direcciones.webp", 6456, 2360, {
              alt: "Three grayscale directions: A Articles (discarded), B Complaints wall (complement) and C Navigation by territory (main)",
              caption:
                "Drawn after building it: the project kept no original wireframes.",
            }),
            caseImage("sinagua", "03-user-flow.webp", 3360, 2480, {
              alt: "User flow with three journeys: finding how water is where you live, reporting what happens with water, and the automatic twice-weekly data update",
            }),
          ],
          solution: [
            caseImage("sinagua", "06-hifi-inicio.webp", 2880, 13590, {
              alt: "Full home page: Mexico is running out of water, drought, aquifers, dry years, dams, who uses the water and water quality",
            }),
            caseImage("sinagua", "07-hifi-mapas.webp", 6048, 1992, {
              alt: "Aquifer map: national overview with the most exposed states, and the Valle de León aquifer detail in Guanajuato",
            }),
            caseImage("sinagua", "08-hifi-presas-y-sequia.webp", 6048, 1992, {
              alt: "Dams map with average fill level by state, and drought map with the states with the most people in drought",
            }),
            caseImage("sinagua", "09-hifi-denuncias.webp", 6048, 2192, {
              alt: "Anonymous complaints wall filtered by state, and the form to send a complaint with its error state",
            }),
            caseImage("sinagua", "10-hifi-urgente.webp", 2880, 2896, {
              alt: "Urgent page: the most critical water stories of the week, with buttons to share them in stories",
            }),
            caseImage("sinagua", "11-hifi-movil.webp", 3624, 1896, {
              alt: "Four mobile screens: home, aquifer map with a bottom sheet, complaints and urgent",
            }),
            caseImage("sinagua", "05-design-system.webp", 3360, 6204, {
              alt: "Sinagua design system: color primitives and semantics, Newsreader and Schibsted Grotesk type, spacing, radii, shadows, components and WCAG contrast",
            }),
          ],
        },
        homeTeaser:
          "2,475 municipalities, 653 aquifers, and 214 dams in one place, for anyone.",
        contexto:
          "Sinagua is an open data platform on water in Mexico. It brings together, municipality by municipality, information on drought, dam levels, aquifer availability, water quality, and who uses the water. It's a citizen, non-profit project.",
        problema:
          "Water data in Mexico exists, but it's scattered across CONAGUA, the SMN, and INEGI, in formats that are hard for anyone to read.",
        miRol:
          "A personal, end-to-end project. I handled the research, information architecture, interface design, data visualization, and development, with AI tools supporting the coding.",
        proceso: {
          decisiones:
            "I designed the navigation at the municipal level so anyone can find their locality's situation in a few clicks, and turned complex government datasets into visualizations a non-technical audience can understand.",
          iteraciones:
            "I added two dams that aren't part of the national monitoring, following a tip from a conservation organization in southern Sinaloa.",
        },
        solucionFinal:
          "One place with the situation of each municipality: drought, dam levels, aquifer availability, water quality, and who uses the water. The data updates itself twice a week with no manual intervention, and a form and an anonymous complaints wall, with moderation rules and a privacy notice, bring what people live through alongside the official data.",
        resultado:
          "Coverage of 2,475 municipalities, 653 aquifers, 214 dams, and more than 2,200 water quality monitoring sites, all in one place.",
      },
      {
        slug: "nu-wallet",
        title: "Nu Wallet",
        subtitle: "A wallet to see and control all your cards",
        concept: true,
        image: "/projects/nu-wallet/01-cover-v2.webp",
        imageAlt:
          "Nu Wallet case cover on a purple background: \"Several cards at once, and no place to see them together or know which to use for what\", with the card stack on an iPhone and the Concept project label, not affiliated with Nu",
        homeTeaser:
          "A speculative redesign of how a Nu Mexico customer sees and controls all their cards.",
        contexto:
          "A speculative redesign of how a Nu Mexico customer sees and controls all their cards: a physical credit card, up to 3 virtual credit cards, and a physical and a virtual debit card. A 2-week concept sprint.",
        problema:
          "Nu encourages having several cards to organize spending, but the app doesn't offer a view where that organization shows: there's no place to see them together or tell which one is used for what.\n\nSeeing a virtual card today: Home → My cards → Debit or Credit → Virtual card → PIN. That's 4 steps to see a single one, repeated for each. The proposal removes the product choice and the PIN for viewing only; security moves to revealing the number.\n\nPublic evidence:\n• Nu allows up to 3 active virtual credit cards and suggests naming them to organize spending (Nu Blog).\n• It recommends using the virtual card for subscriptions, which requires remembering which service is on which card (Nu Blog).\n• More than 7 million credit card customers in Mexico (Nu Blog).",
        images: {
          overview: [
            caseImage("nu-wallet", "02-antes.webp", 4890, 2592, {
              alt: "Recreation of Nu's current flow in five screens: Home, My cards, Virtual card, PIN and card details",
              caption:
                "Recreation of the current flow. Not a capture of the app.",
            }),
          ],
          process: [
            caseImage("nu-wallet", "04-lofi-direcciones.webp", 3980, 2616, {
              alt: "Grayscale wireframes of directions A List, B Carousel and C Stacked wallet, with C marked as chosen",
            }),
            caseImage("nu-wallet", "03-user-flow.webp", 3920, 2640, {
              alt: "User flow for direction C: from Home to viewing details, copying, renaming, recurring charges, blocking and creating a virtual card",
            }),
          ],
          solution: [
            caseImage("nu-wallet", "06-hifi-wallet.webp", 2806, 2228, {
              alt: "Hi-fi screens: Wallet with five stacked cards, front card with actions, and recurring charges",
              caption: "Names and amounts are sample data.",
            }),
            caseImage("nu-wallet", "09-hifi-crear-virtual.webp", 2806, 2228, {
              alt: "Hi-fi screens for creating a virtual card: empty form, filled form and the new card in the stack",
            }),
            caseImage("nu-wallet", "07-hifi-revelar-copiar.webp", 2806, 2228, {
              alt: "Hi-fi screens for revealing and copying: Face ID, revealed details and copied number",
            }),
            caseImage("nu-wallet", "08-hifi-bloquear.webp", 2806, 2228, {
              alt: "Hi-fi screens for blocking: front card, a confirmation saying Netflix and Spotify will stop being charged, and the blocked card",
            }),
            caseImage("nu-wallet", "05-design-system.webp", 3360, 10350, {
              alt: "Nu Wallet design system: colors, typography, spacing, radii, shadows, components, AA contrast and references",
            }),
            caseImage("nu-wallet", "10-hifi-estados.webp", 4570, 2228, {
              alt: "States and edge cases: a single card, blocked in the stack, physical card on its way, limit of 3 virtual cards and offline",
            }),
          ],
        },
        proceso: {
          research:
            "The references solve \"many cards\" with a single visual surface; Nu splits them by product.\n• Apple Wallet: stacked cards; tap one and it moves to the front. We took the \"wallet\" mental model.\n• Revolut: a carousel with quick actions per card, no menus.\n• Nu (current): separated by Debit / Credit in \"My cards\". This is what needs unifying.\n\nHypotheses to validate in the test:\n1. People think in terms of use, not product: \"the Netflix one\" matters more than \"debit\".\n2. Viewing ≠ revealing: seeing your cards shouldn't ask for a PIN; seeing the full number should.\n3. Blocking is a panic action: it should be one tap away.\n\nBenchmark to verify with current captures.",
          restricciones:
            "Respect Nu's visual identity; don't add products, only reorganize existing ones; sensitive data always behind a PIN or biometrics.",
          iteraciones:
            "Three directions as lo-fi wireframes; C was chosen.\n• A · List: clear but cold; it looks like a settings menu.\n• B · Carousel: pretty, but it hides how many cards you have; with 5+ users get lost.\n• C · Stacked wallet: all stacked with their edge visible; tap one and it rises with its actions. Chosen: you see the total at a glance and the detail in one tap.",
          decisiones:
            "• Name on top, number below: people identify cards by use (\"Streaming\").\n• View without a PIN, reveal with biometrics.\n• Block with a confirmation that says what breaks: \"Netflix and Spotify will stop being charged\" instead of \"Are you sure?\".",
          validacion:
            "A plan, not yet carried out: a moderated test with 5 Nu customers, over video call with the Figma prototype. Results: pending.\n\nTasks: find the card used for subscriptions, block it saying what they think will happen, create a virtual card and copy the debit card's number. It would measure task success, time, errors and perceived ease (1 to 5), compared against the current app.",
        },
        solucionFinal:
          "\"My cards\" becomes a wallet: all stacked, each with a name for its use and its actions one tap away.\n\n1. Wallet: a stack colored by type (credit, debit, virtual).\n2. Front card: view details, block, rename and copy the number.\n3. Recurring charges: subscriptions tied to that card, so you block knowing what is affected.\n4. Create virtual: a button at the end of the stack; name and use in the same step.",
        resultado:
          "An unlaunched concept. There are no results yet: the usability test is planned, not carried out.",
        aprendizaje:
          "• In banking, reorganizing is often worth more than adding features.\n• Security and speed don't compete if you separate \"viewing\" from \"revealing\".\n• Next: run the test and explore recurring-charge alerts per card.",
      },
      {
        slug: "spotify-modo-clasico",
        title: "Spotify Classic Mode",
        subtitle: "A player with a touch ring for listening to full albums",
        concept: true,
        image: "/projects/spotify-modo-clasico/01-cover-v2.webp",
        imageAlt:
          "Spotify Classic Mode case cover on a black background: \"Listening to a full album, or controlling the music without looking, takes a back seat\", with three iPhones and the touch ring, and the Concept project label, not affiliated with Spotify",
        homeTeaser:
          "A speculative redesign of a playback mode for listening to full albums with a circular touch control.",
        contexto:
          "A speculative redesign of a playback mode for listening to full albums with a circular touch control, inspired by the iPod click wheel. A 2-week concept sprint.",
        problema:
          "Spotify's player is designed for skipping between songs while looking at the screen. Listening to a full album, or controlling the music without looking, has little support.\n\nToday, to go back to a moment in a song: Library → album → Play → Now Playing → drag the progress bar (to verify in the app). The bar is thin and gives no tactile reference, so you have to look at it. The proposal combines navigating and seeking in a single circular control with haptic ticks.\n\nPublic evidence:\n• Until November 2021 an album's main button played it on shuffle; Spotify changed it after Adele's request (Gizmodo).\n• Users asked on the official forum to turn off shuffle by default on albums and to seek within a song without opening its screen (Spotify Community).\n• Rewound, an app that imitated the click wheel with haptics, passed 170,000 downloads in about a week; Apple pulled it in 2019 (iMore, iCulture).",
        images: {
          overview: [
            caseImage("spotify-modo-clasico", "02-antes.webp", 4890, 2748, {
              alt: "Recreation of Spotify's current flow in five screens: library, album, Play with mini player, Now Playing and dragging the progress bar",
              caption:
                "Recreation of the current flow. Not a capture of the app, and the flow is still to be verified.",
            }),
          ],
          process: [
            caseImage("spotify-modo-clasico", "04-lofi-direcciones.webp", 3980, 2680, {
              alt: "Grayscale wireframes of directions A iPod replica, B Haptic bar and C Ring plus album view, with C marked as chosen",
            }),
            caseImage("spotify-modo-clasico", "03-user-flow.webp", 4080, 3272, {
              alt: "User flow for direction C and a map of haptic ticks per action",
            }),
          ],
          solution: [
            caseImage("spotify-modo-clasico", "06-hifi-entrada-y-navegar.webp", 2806, 2232, {
              alt: "Hi-fi screens: album page with the Classic Mode button, navigating tracks with the green ring and track 7 playing",
              caption: "Names and data on the screens are sample data.",
            }),
            caseImage("spotify-modo-clasico", "07-hifi-scrubbing.webp", 2806, 2232, {
              alt: "Hi-fi scrubbing screens: track mode, fast turn at 3:12 and slow turn at 2:30 with the white ring",
            }),
            caseImage("spotify-modo-clasico", "08-hifi-cierre-y-salida.webp", 1924, 2232, {
              alt: "Hi-fi closing screens: end of album with total duration, and the normal player on exit",
            }),
            caseImage("spotify-modo-clasico", "05-design-system.webp", 3360, 10676, {
              alt: "Spotify Classic Mode design system: colors, typography, spacing, radii, touch ring, components, contrast and references",
            }),
            caseImage("spotify-modo-clasico", "09-hifi-estados.webp", 5452, 2232, {
              alt: "States and edge cases: single-track release, more than 30 tracks, track unavailable, Free without on-demand time, offline and no haptic engine",
            }),
          ],
        },
        proceso: {
          research:
            "The references solve fine control with a turn and a physical pulse; Spotify with a bar you drag while looking.\n• Apple Watch (Digital Crown): the speed of the turn sets the speed of change and each item gives a haptic tick (Apple HIG).\n• Rewound (2019, pulled): an on-screen click wheel with haptic ticks; the circular gesture works on a touch phone.\n• Spotify (current): a linear bar in Now Playing. This is what needs complementing, not replacing.\n\nHypotheses to validate in the test:\n1. Fine control needs a stop you can feel; without a pulse, the bar forces you to look.\n2. Listening to an album is a decision: whoever makes it wants track order and no mixed-in recommendations.\n3. Nostalgia opens the door; usefulness retains.\n\nBenchmark to verify with current captures.",
          restricciones:
            "Respect Spotify's visual identity; take the iPod's interaction principle, not its brand or design; use the native haptics APIs; the mode is optional and doesn't replace the current player.",
          iteraciones:
            "Three directions as lo-fi wireframes; C was chosen.\n• A · iPod replica: faithful but slow; finding an album through nested menus costs more than today, and it brushes against Apple's brand image.\n• B · Haptic bar: cheap to build, but it still requires looking and doesn't solve navigating tracks.\n• C · Ring + album view: cover and tracks on top, a touch ring below with two modes (navigate and seek). Chosen: one gesture for everything and the album stays visible.",
          decisiones:
            "• Two modes, one gesture: the same turn navigates or seeks; the active mode is named on screen and changes the ring's color.\n• Turn speed rules: slow = 1 s precision; fast = 30 s jumps.\n• Clear haptics, not a buzz: short ticks for frequent events and a strong one only for minutes and track changes.",
          validacion:
            "A plan, not yet carried out: a moderated test with 5 users who listen to full albums every week, in person with the prototype on a real phone to feel the haptics. Results: pending.\n\nTasks: play an album from the start and go to track 7, go back to minute 2:30 (also without looking) and exit the mode. It would measure success, accuracy against 2:30, time, errors and confidence (1 to 5), compared against the current app.",
        },
        solucionFinal:
          "Classic Mode is an optional player inside Spotify: cover and tracks on top, a touch ring below, and the album always in order.\n\n1. Entry: a \"Classic Mode\" button next to Play; it opens the album in order, with no shuffle or recommendations.\n2. Navigate tracks: turning the ring moves the selection, one tick per track; tapping the center plays.\n3. Seeking: holding the center switches to time mode; a tick every 5 s and a stronger pulse every minute.\n4. End of album: total duration and options to repeat, see the artist's next album or exit.",
        resultado:
          "An unlaunched concept. There are no results yet: the usability test is planned, not carried out.",
        aprendizaje:
          "• Nostalgia is a good hook, but the case stands on a concrete need: fine control without looking.\n• Haptics are interaction design: intensity and frequency must be specified the way a color is.\n• Next: run the test on a real phone and adjust tick density based on errors.",
      },
      {
        slug: "bbva-transferencias-seguras",
        title: "BBVA Secure Transfers",
        subtitle: "A confirmation centered on who receives the money",
        concept: true,
        image: "/projects/bbva-transferencias-seguras/01-cover-v2.webp",
        imageAlt:
          "BBVA Secure Transfers case cover on a blue background: \"A SPEI already deposited can't be cancelled, and when sending there's no clear signal of who receives it\", with two iPhones showing the confirmation and the Concept project label, not affiliated with BBVA",
        homeTeaser:
          "A speculative redesign of sending SPEI transfers in the BBVA Mexico app.",
        contexto:
          "A speculative redesign of sending SPEI transfers in the BBVA Mexico app. A 2-week concept sprint. Technical assumption: that the bank can obtain the account holder's name from the destination CLABE before sending (feasibility to verify with BBVA).",
        problema:
          "A SPEI transfer that has already been deposited can't be cancelled, and fraud is the main cause of complaints against banks. When sending, the customer has no clear signal of who is receiving the money: the app should help catch the error or the fraud before sending, not after.\n\nSending to a new account today (to verify): Home → Transfer → new recipient → CLABE → name and concept → amount → confirm with biometrics or Token. The confirmation repeats what the user typed; it doesn't say who the real account holder is or whether you've sent to them before. Pending: confirm whether it shows the account holder's name today after the CLABE is entered.\n\nPublic evidence:\n• According to Banxico, a SPEI payment can only be cancelled before it is deposited; afterwards it depends on the recipient agreeing to return it (El Imparcial).\n• January to May 2026: 35,762 claims for possible fraud before CONDUSEF (+18.95% year over year); in multiple banking, 54% of claims were for fraud and BBVA is among the four with the most complaints (El CEO).\n• Since October 2025 the MTU allows different limits for new accounts: the system already tells \"new\" from \"known\", but the user doesn't see it when sending (Xataka México).",
        images: {
          overview: [
            caseImage("bbva-transferencias-seguras", "02-antes.webp", 6814, 2596, {
              alt: "Approximate recreation of the current flow in seven screens: home, transfer, CLABE, name and concept, amount, confirm and biometrics",
              caption:
                "Approximate recreation of the current flow. Not a capture of the app, and it's still to confirm whether it shows the account holder's name today.",
            }),
          ],
          process: [
            caseImage("bbva-transferencias-seguras", "04-lofi-direcciones.webp", 3980, 2628, {
              alt: "Grayscale wireframes of directions A Universal notice, B Mandatory wait and C Recipient card plus graduated alert, with C marked as chosen",
            }),
            caseImage("bbva-transferencias-seguras", "03-user-flow.webp", 4496, 1720, {
              alt: "User flow for direction C with its branches by alert level",
            }),
          ],
          solution: [
            caseImage("bbva-transferencias-seguras", "07-hifi-captura-y-coincidencia.webp", 2806, 2240, {
              alt: "Hi-fi capture screens: CLABE, the account holder appears and the name doesn't match",
              caption: "Names and amounts are sample data.",
            }),
            caseImage("bbva-transferencias-seguras", "06-hifi-tres-niveles.webp", 2806, 2240, {
              alt: "Hi-fi screens of the three levels: known contact with no alert, new account with an amber strip, and intervention",
            }),
            caseImage("bbva-transferencias-seguras", "08-hifi-autorizar-y-resultado.webp", 2806, 2240, {
              alt: "Hi-fi authorization screens: new account with no risk signal, Face ID and transfer sent",
            }),
            caseImage("bbva-transferencias-seguras", "09-hifi-detenerse.webp", 1924, 2240, {
              alt: "Hi-fi stop screens: intervention with cancel as the main action, and transfer cancelled",
            }),
            caseImage("bbva-transferencias-seguras", "05-design-system.webp", 3360, 9700, {
              alt: "BBVA Secure Transfers design system: colors, typography, spacing, radii, recipient card, components, contrast and references",
            }),
            caseImage("bbva-transferencias-seguras", "10-hifi-estados.webp", 7216, 2240, {
              alt: "States and edge cases: match, partial match, no match, couldn't verify, business account, contact with no transfers, above the MTU and offline",
            }),
          ],
        },
        proceso: {
          research:
            "The UK references validate the recipient's name against the real account and adapt the warning to the risk; a generic confirmation isn't enough.\n• NatWest: Confirmation of Payee with four match states, each with an action.\n• Wise: verifies the name when the recipient is created, not at the end of the flow.\n• Revolut: a warning on every new recipient and questions if the payment looks risky; a case before the British ombudsman shows its limit: the customer lied, coached by the scammer.\n• In Mexico the infrastructure to get a CLABE's account holder already exists (Fintoc Docs).\n\nHypotheses to validate in the test:\n1. Users trust what they typed themselves; they need a piece of data that comes from the bank.\n2. \"New\" is the simplest risk signal: \"you've never sent to this account\".\n3. The scammer guides the answers: the alert must name the typical script, not just ask.\n\nBenchmark to verify with current captures.",
          restricciones:
            "Respect BBVA's visual identity; don't add steps to sends to frequent contacts; compatible with Banxico's guidelines.",
          iteraciones:
            "Three directions as lo-fi wireframes; C was chosen.\n• A · Universal notice: it always appears, so users learn to close it without reading.\n• B · Mandatory wait: it protects, but slows down urgent legitimate payments and doesn't explain why.\n• C · Recipient card + graduated alert: the confirmation centers on who receives and the alert level depends on whether the account is new, whether the name matches and the amount. Chosen: no friction for known contacts, clear friction when there's risk.",
          decisiones:
            "• The bank says the name, not the user: the account holder appears as verified data.\n• Three levels: known contact with no alert; new account with an informative strip; new + risk signal with an intervention screen.\n• Name the script, not the fear: \"BBVA will never ask you to move your money to a safe account\" (a proposed phrase, to verify against the official policy).",
          validacion:
            "A plan, not yet carried out: a moderated test with 5 BBVA customers, over video call with the prototype. Results: pending.\n\nTasks: send to a known contact (no extra friction), send to a new CLABE belonging to another account holder (do they catch it?), react to a simulated fraudulent-call scenario and say who will receive the money. It would measure error detection, stopping fraud, friction with known contacts and confidence (1 to 5). The fraud task is a simulated scenario and the participant is told at the end.",
        },
        solucionFinal:
          "The confirmation stops being a summary of what was entered and becomes a card about who receives, with an alert proportional to the risk.\n\n1. CLABE: when the 18 digits are complete, the bank and the account holder appear, before the amount.\n2. Name match: if what you typed differs from the account holder, it asks whether this is who you want to send to.\n3. Recipient card: account holder, bank, last 4 digits and history (\"Last send: Oct 12 · $1,500\" or \"You've never sent to them\").\n4. New account alert: an amber strip with the question \"Is someone asking you to make this transfer by phone or message?\".\n5. Intervention: if they answer yes or the amount exceeds their limit for new accounts, the typical fraud script and \"Cancel and call BBVA\" as the primary action.",
        resultado:
          "An unlaunched concept. There are no results yet: the usability test is planned, not carried out.",
        aprendizaje:
          "• In irreversible payments, design is worth more before the \"Send\" button than after.\n• Friction works when it is proportional: a notice that always shows stops being read.\n• The concept depends on a piece of data (the CLABE's account holder) that the bank must be able to obtain: it is the first risk to validate.\n• Next: run the test and align the flow with Banxico's December 2026 guidelines.",
      },
      {
        slug: "banorte-estado-de-cuenta",
        title: "Banorte Statement",
        subtitle: "One screen to decide how much of your card to pay",
        concept: true,
        image: "/projects/banorte-estado-de-cuenta/01-cover-v2.webp",
        imageAlt:
          "Banorte Statement case cover on a red background: \"Three amounts left unexplained. You see how much you owe, but not how much it's worth paying\", with a tilted iPhone showing the payment options and the Concept project label, not affiliated with Banorte",
        homeTeaser:
          "A speculative redesign of how a Banorte mobile customer understands their credit card statement and decides how much to pay.",
        contexto:
          "A speculative redesign of how a Banorte mobile customer understands their credit card statement and decides how much to pay. A 2-week concept sprint.",
        problema:
          "The statement shows three amounts (minimum payment, payment to avoid interest, total balance) without saying what happens with each one. The customer sees how much they owe, but not how much it's worth paying or how much paying less costs.\n\nToday (to verify in the app): Home → credit card → \"My card details\" → PDF statement to see the minimum and the interest-free payment → back to Pay and type the amount. The user compares the amounts and their cost from memory. The proposal brings together on one screen what is today spread across the details, the PDF and the payment form.\n\nPublic evidence:\n• At Banorte, 48.0% of cards are not paid in full and hold 70.9% of the balance; their average effective rate is 38.0% (Banxico, Dec 2025).\n• System-wide, 24.4% of those who don't pay in full paid exactly the minimum and 4.5% not even that (Banxico).\n• Banorte's brochure warns that paying only the minimum increases the time and cost of the debt, but that warning lives in a PDF, not at the moment of paying.",
        images: {
          overview: [
            caseImage("banorte-estado-de-cuenta", "02-antes.webp", 3928, 2752, {
              alt: "Approximate recreation of the current flow in four screens: home, card details, PDF statement and pay",
              caption:
                "Approximate recreation based on 2020 and 2021 captures. Not a capture of the app, and it isn't confirmed that it looks like this today.",
            }),
          ],
          process: [
            caseImage("banorte-estado-de-cuenta", "04-lofi-direcciones.webp", 3980, 2672, {
              alt: "Grayscale wireframes of directions A Glossary, B Slider and C Option cards, with C marked as chosen",
            }),
            caseImage("banorte-estado-de-cuenta", "03-user-flow.webp", 3536, 1600, {
              alt: "User flow for direction C: summary, how much to pay, options, confirmation and a suggestion to set up direct debit",
            }),
          ],
          solution: [
            caseImage("banorte-estado-de-cuenta", "06-hifi-decision.webp", 2806, 2244, {
              alt: "Hi-fi screens: card summary with the due date, three comparable options and the minimum payment with its cost beside it",
              caption: "Names and amounts are sample data.",
            }),
            caseImage("banorte-estado-de-cuenta", "07-hifi-desglose-y-otro-monto.webp", 1948, 2244, {
              alt: "Hi-fi screens: breakdown of why the interest-free payment isn't the total balance, and another amount with a numeric keypad",
            }),
            caseImage("banorte-estado-de-cuenta", "08-hifi-confirmacion.webp", 2806, 2244, {
              alt: "Hi-fi screens: interest-free confirmation, a confirmation that repeats the estimated cost, and a receipt with a suggestion to set up direct debit",
            }),
            caseImage("banorte-estado-de-cuenta", "05-design-system.webp", 3360, 9434, {
              alt: "Banorte Statement design system: colors, typography, spacing, radii, option card, components, contrast and references",
            }),
            caseImage("banorte-estado-de-cuenta", "09-hifi-estados.webp", 7216, 2244, {
              alt: "States and edge cases: zero balance, already covered, partial payment, due today, overdue, credit balance, cut-off in progress and offline",
            }),
          ],
        },
        proceso: {
          research:
            "The references show the cost of paying less at the moment of paying; in Mexico that data tends to stay in the PDF.\n• Apple Card: when you choose a one-time payment it shows the estimated interest for that amount, with a notice that it's an estimate.\n• Nu Mexico: the minimum payment appears right below the total balance; the rate lives in the profile.\n• BBVA Mexico: lets you set up direct debit for the interest-free payment, a natural next step after paying.\n\nHypotheses to validate in the test:\n1. \"Payment to avoid interest\" describes a rule, not an outcome; \"Pay without interest\" might read better.\n2. The minimum gets chosen for being the first or the smallest; without its cost beside it, it looks like the safe option.\n3. The due date weighs more than the cut-off date: people think in \"how many days do I have left\".\n\nBenchmark to verify with current captures.",
          restricciones:
            "Respect Banorte's visual identity; use only data that already exists in the statement; official amounts and dates without rounding; interest always as an estimate, never as a final amount.",
          iteraciones:
            "Three directions as lo-fi wireframes; C was chosen.\n• A · Glossary: it explains, but doesn't help decide; the cost is still not calculated.\n• B · Slider: powerful, but without clear anchors and hard with a screen reader and exact amounts.\n• C · Option cards: three stacked options (interest-free, minimum, total) with cost and outcome, and \"Other amount\" at the end. Chosen: clear anchors and direct comparison; the slider remains as \"Other amount\".",
          decisiones:
            "• Names by outcome: \"Pay without interest\" as the label, with the official term below.\n• The cost lives next to the amount, in the same row.\n• Recommend without hiding: the minimum stays visible and selectable, with its consequence beside it.",
          validacion:
            "A plan, not yet carried out: a moderated test with 5 Banorte credit card customers, over video call with the prototype. Results: pending.\n\nTasks: decide how much to pay with $3,000 available, say how many days are left to pay without charges, estimate the cost of paying only the minimum and explain why the interest-free payment is lower than the total balance. It would measure understanding of amounts, cost accuracy, time and confidence (1 to 5), compared against the current app.",
        },
        solucionFinal:
          "The card detail opens with a single question, \"How much do I pay this month?\", and three answers with their consequence.\n\n1. Card summary: the due date as a countdown (\"6 days left\") and the interest-free payment as the main amount.\n2. How much do I pay?: Pay without interest (recommended), Minimum payment and Total balance, plus \"Other amount\"; each says what happens (\"$0 in interest\" or \"≈ $X in interest next month\").\n3. Breakdown: why the interest-free payment isn't the total balance.\n4. Confirmation: if they chose less than the interest-free payment, the estimated cost is repeated before confirming.\n5. After paying: a receipt and a suggestion to set up direct debit.\n\nIllustrative example for the prototype: with a rate of 69% per year (Banorte Básica), one month of ordinary interest equals ≈ 5.75% + VAT of the unpaid balance; it's a simplified calculation.",
        resultado:
          "An unlaunched concept. There are no results yet: the usability test is planned, not carried out.",
        aprendizaje:
          "• In credit, design doesn't change the rate, but it does change when users see their cost: moving the warning from the PDF to the pay button.\n• Recommending isn't hiding: the minimum stays available, just with its consequence beside it.\n• Next: run the test and validate the \"Pay without interest\" wording with legal.",
      },
      {
        slug: "mercado-pago-metas-de-ahorro",
        title: "Mercado Pago Savings Goals",
        subtitle: "Savings pockets that say how much is left and when you reach your goal",
        concept: true,
        image: "/projects/mercado-pago-metas-de-ahorro/01-cover-v2.webp",
        imageAlt:
          "Savings goals case cover on a yellow background: \"You see a percentage, but not how much is left or when you reach your goal\", with four iPhones showing the goals and the Concept project label, not affiliated with Mercado Pago",
        images: {
          overview: [
            caseImage("mercado-pago-metas-de-ahorro", "02-antes.webp", 3908, 2356, {
              alt: "Recreation of the current flow, to verify in the app: Home, money and yields, Apartados, Apartado and conditions on another screen",
              caption: "Recreation of the current flow. Not a capture of the app, and the flow is still to be verified.",
            }),
          ],
          process: [
            caseImage("mercado-pago-metas-de-ahorro", "04-lofi-direcciones.webp", 3120, 2628, {
              alt: "Three grayscale directions: A calculator, B progress bar and C goal with a date plus a visible rule, the chosen one",
            }),
            caseImage("mercado-pago-metas-de-ahorro", "03-user-flow.webp", 3896, 1860, {
              alt: "User flow for direction C: summary, rate detail, Apartado as a goal and create goal, with states",
            }),
          ],
          solution: [
            caseImage("mercado-pago-metas-de-ahorro", "06-hifi-resumen.webp", 8000, 1737, {
              alt: "Savings summary in its six states: rule pending, met, cutoff notice, first use, offline and rate change",
              caption: "Names and amounts are sample data.",
            }),
            caseImage("mercado-pago-metas-de-ahorro", "07-hifi-detalle-tasa.webp", 2820, 1892, {
              alt: "Rate detail: within the cap and balance above the cap",
            }),
            caseImage("mercado-pago-metas-de-ahorro", "09-hifi-crear-meta.webp", 7242, 1892, {
              alt: "Create goal: empty, with a suggestion every two weeks, a date that already passed, no date and goal created",
            }),
            caseImage("mercado-pago-metas-de-ahorro", "10-hifi-meta-alcanzada.webp", 1346, 1892, {
              alt: "Goal reached with what was earned and options to withdraw, keep saving or a new goal",
            }),
            caseImage("mercado-pago-metas-de-ahorro", "05-design-system.webp", 3360, 8184, {
              alt: "Design system: colors, Inter typography, spacing, radii, shadows, WCAG contrast and components",
            }),
            caseImage("mercado-pago-metas-de-ahorro", "08-hifi-apartado-meta.webp", 8000, 1485, {
              alt: "Apartado as a goal in its states: on time, behind, no date, overdue, a withdrawal that delays the date, after the withdrawal and offline",
            }),
          ],
        },
        homeTeaser:
          "A speculative redesign of how a Mercado Pago Mexico user sees their Apartados (savings pockets) and what their money earns.",
        contexto:
          "A speculative redesign of how a Mercado Pago Mexico user sees their Apartados (savings pockets) and what their money earns. A 2-week concept sprint.",
        problema:
          "Mercado Pago advertises its rate as a percentage, but users save in pesos and in dates. The rate changes by balance, type of money, the month's deposits and membership, and the rules change every few months. The user sees a percentage, but not how much is left or when they reach their goal.\n\nToday (to verify in the app): Home → money and yields → Apartados → an Apartado → see balance. The rate and its conditions live on another screen or in the terms and conditions. Pending: confirm the current rate at publication.\n\nPublic evidence:\n• Users already use Apartados as goals: 545,000 for vacations in the first months of 2026, nearly double the previous year (Descubre).\n• Oct 2025: 7% base and up to 13% with $3,000 monthly deposits, only on the first $25,000 (Xataka). Jun 2026: the maximum drops to 12% (Xataka). Sep 2026: 15% for Meli+ members (DPL News).\n• The rules changed at least 3 times in 12 months.",
        proceso: {
          research:
            "People in Mexico save a lot, but little in products that earn: 66.4% had some savings in 2024 (INEGI, ENIF), but according to CONDUSEF 41% save at home, 20% in tandas and only 3% invest.\n\nBenchmark:\n• Monzo (Pots): a goal amount under what's saved, a progress bar and a notice on arrival. We took the goal as the main piece of data.\n• Nu Mexico (Cajitas): up to 10 named ones, but rate and GAT in the fine print. We took a name per goal and showing the GAT next to the rate.\n• Mercado Pago (current): named Apartados; rate in %, rules in the news and T&C (to verify). This is what needs translating into pesos and dates.\n\nHypotheses to validate in the test:\n1. People think in pesos and dates, not percentages: \"I'm $4,000 short for Cancún\".\n2. A rule you can't see doesn't get met: without the minimum deposit's progress, the bonus rate is lost without warning.\n3. Consistency needs rhythm: \"$500 every two weeks\" motivates more than a bar at 30%.\n\nBenchmark to verify with current captures.",
          restricciones:
            "Respect Mercado Pago's visual identity; don't change rates or rules, only explain them; projections always marked as estimates.",
          iteraciones:
            "Three directions as lo-fi wireframes; C was chosen.\n• A · Calculator: useful but disconnected; users have to go looking for it and don't see their real money.\n• B · Progress bar: it motivates, but doesn't say when you arrive or what happens with the month's rate.\n• C · Goal with a date + visible rule: each Apartado shows what's left, an estimated date and earnings in pesos; on top, the status of the month's rate. Chosen: it answers how much it earns, how much is left and when without leaving the screen.",
          decisiones:
            "• Pesos first, percentage second: \"You earned $84 this month\" on top and \"12% a year\" as secondary data.\n• Honest projection: the estimated date says \"if you keep depositing $500 every two weeks\" and is marked as an estimate at today's rate.\n• The rate rule with progress: the month's minimum deposit is shown as progress, with a notice 5 days before the cutoff.",
          validacion:
            "A plan, not yet carried out: a moderated test with 5 users who use or have used Apartados, over video call with the prototype. Results: pending.\n\nTasks: say how much they earned this month, what to do to keep the higher rate, create a $8,000 goal for April and estimate when they reach an Apartado's goal (and what happens if they withdraw $1,000). It would measure success, understanding of the rate, time and trust in the projection (1 to 5), compared against the current app.",
        },
        solucionFinal:
          "Apartados become goals: each one says how much is left, when you arrive and how much you've earned in pesos.\n\n1. Savings summary: total, the month's earnings in pesos and a \"Rate of the month\" chip with its status (\"You need $1,200 more in deposits to keep 12%\").\n2. Rate detail: the rule in one sentence and the balance cap that earns.\n3. Apartado as a goal: what's saved against the goal, what's left, estimated arrival date and accumulated earnings.\n4. Create goal: name, amount and date; the app suggests a deposit every two weeks.\n5. Goal reached: what was earned and options to withdraw, keep saving or create another.",
        resultado:
          "An unlaunched concept. There are no results yet: the usability test is planned, not carried out.",
        aprendizaje:
          "• In savings, translating is worth more than adding: the rate already exists, it just needs to be told in pesos and dates.\n• A projection only helps if it says what it depends on; without that condition it reads as a promise.\n• Next: run the test and adjust the rule's wording based on what users don't understand.",
      },
      {
        slug: "wise-usd-a-mxn",
        title: "Wise USD to MXN",
        subtitle: "Convert dollars to pesos knowing whether to do it today or wait",
        concept: true,
        image: "/projects/wise-usd-a-mxn/01-cover-v2.webp",
        imageAlt:
          "Convert to MXN case cover on a green background: \"Is today's rate good? How many pesos do I get? Today it isn't visible in one place\", with an iPhone showing the net in pesos and the Concept project label, not affiliated with Wise",
        images: {
          overview: [
            caseImage("wise-usd-a-mxn", "02-antes.webp", 3895, 1891, {
              alt: "Recreation of the current flow, to verify in the app: home, USD balance, convert, converter with a chart, alerts in Profile and Auto Conversions",
              caption: "Recreation of the current flow. Not a capture of the app, and the flow is still to be verified.",
            }),
          ],
          process: [
            caseImage("wise-usd-a-mxn", "04-lofi-direcciones.webp", 3120, 2648, {
              alt: "Three grayscale directions: A market dashboard, B proactive alert and C convert with context, the chosen one",
            }),
            caseImage("wise-usd-a-mxn", "03-user-flow.webp", 3882, 1538, {
              alt: "User flow for direction C: convert today or wait for a rate, with orders, notices and states",
            }),
          ],
          solution: [
            caseImage("wise-usd-a-mxn", "06-hifi-convertir.webp", 5752, 1868, {
              alt: "Convert with context: USD balance, net in pesos and 30-day range, with no history and offline",
              caption: "Names and amounts are sample data.",
            }),
            caseImage("wise-usd-a-mxn", "07-hifi-desglose.webp", 3702, 1868, {
              alt: "Net breakdown: USD sent, fee, rate applied and pesos that arrive, with a guaranteed rate and conversion ready",
            }),
            caseImage("wise-usd-a-mxn", "08-hifi-esperar.webp", 6618, 1868, {
              alt: "Wait for a rate: suggested rates with their net, a switch between order and notice, visible rules, the limit of 15 and Sunday",
            }),
            caseImage("wise-usd-a-mxn", "09-hifi-ordenes.webp", 5434, 1868, {
              alt: "My orders: a pending order with distance to the rate, confirm cancellation, cancelled order, cancelled for balance and notice created",
            }),
            caseImage("wise-usd-a-mxn", "05-design-system.webp", 3360, 8160, {
              alt: "Design system: colors, Barlow Semi Condensed and Inter, spacing, radii, shadows, WCAG contrast and components",
            }),
          ],
        },
        homeTeaser:
          "A speculative redesign of how a freelancer in Mexico decides when to convert their dollars to pesos.",
        contexto:
          "A speculative redesign of how a freelancer in Mexico who bills US clients in USD decides when to convert their dollars to pesos. A 2-week concept sprint. Key assumption: the user already has a USD balance in Wise; today availability for residents of Mexico is limited (to verify).",
        problema:
          "Wise already has rate alerts and automatic conversions, but they live on separate screens: rate, history, alert and fee are in different places and the user has to put them together alone. Before converting, they can't see in one place whether today's rate is good or how many net pesos they will receive.\n\nToday (to verify in the app): Home → USD balance → Convert → MXN → see rate and fee. To compare against previous days you have to leave for the converter with a chart; alerts are set in Profile → Notifications; converting automatically at a rate is another flow (Auto Conversions).\n\nPublic evidence:\n• Auto Conversions converts when a target rate is reached; at most 15 pending, they can't be edited and they don't run on Sundays (Wise Help).\n• The FIX exchange rate went from 18.8148 (Oct 29, 2026) to 18.6285 (Nov 4, 2026): on 2,000 USD that's a 372.60 MXN difference in a week (Banxico).\n• Users report that residents of Mexico can't receive into a local Wise account (Reddit r/ExpatFinance). Verify current availability.",
        proceso: {
          research:
            "The references give context (recent range) or automate (target rate); none of those reviewed combines both with the net in pesos.\n• Wise web converter: a summary of the 30 and 90-day high and low. We took it as quick context inside the conversion flow.\n• Revolut Auto-Exchange: conversion at a target rate; we took explaining in plain language when and why an order doesn't execute.\n• DolarApp: compares final net pesos. We took showing the net result, not just the rate.\n\nHypotheses to validate in the test:\n1. Users think in net pesos, not the rate: \"I get 37,200\" weighs more than \"18.63\".\n2. \"Is it a good day?\" needs a reference: without the recent range, today's rate says nothing.\n3. Waiting is a decision: setting a target rate should be one tap from the conversion.\n\nBenchmark to verify with current captures.",
          restricciones:
            "Respect Wise's visual identity; use only features that already exist (alerts, Auto Conversions, conversion); always show fee and rate before confirming. Out of scope: tax advice and exchange rate prediction.",
          iteraciones:
            "Three directions as lo-fi wireframes; C was chosen.\n• A · Market dashboard: powerful, but it looks like a trading app and pulls the user away from converting.\n• B · Proactive alert: useful as an entry point, but without context once tapped; it pushes to convert without comparing.\n• C · Convert with context: the conversion screen adds a 30-day range bar, the net in MXN and \"Wait for a rate\". Chosen: it reuses the flow that already exists; converting and waiting sit at the same level.",
          decisiones:
            "• Net pesos on top, rate below: users decide by what they receive.\n• Range, not prediction: the bar shows facts (30-day high/low); no \"good moment\" or market recommendations.\n• Alert and automatic conversion in the same step: a switch picks \"just notify me\" or \"convert for me\".",
          validacion:
            "A plan, not yet carried out: a moderated test with 5 freelancers in Mexico who bill in USD, over video call with the prototype. Results: pending.\n\nTasks: decide whether to convert 2,000 USD today and why, say how many pesos would arrive, set up an automatic conversion at a better rate and cancel it to create just a notice. It would measure success, net accuracy, time and confidence (1 to 5), compared against the current app.",
        },
        solucionFinal:
          "\"Convert to MXN\" becomes a decision screen: today's rate in context, net pesos and two clear exits, convert now or wait.\n\n1. Convert with context: the USD amount, the current rate and a bar with the 30-day low and high that marks where today sits.\n2. Net breakdown: USD sent, fee, rate applied and the pesos that arrive.\n3. Wait for a rate: suggests target rates and shows the net at each; it creates an Auto Conversion or just an alert.\n4. My orders: pending conversions with their distance to the current rate and a cancel action.",
        resultado:
          "An unlaunched concept. There are no results yet: the usability test is planned, not carried out.",
        aprendizaje:
          "• In fintech, sometimes the product already has the features; the work is bringing them together at the moment of deciding.\n• Showing context without giving financial advice is a design line: range yes, prediction no.\n• Next: confirm USD balance availability for residents of Mexico and run the test.",
      },
      {
        slug: "aeromexico-reacomodo",
        title: "Aeroméxico Rebooking",
        subtitle: "One-tap rebooking when your flight is delayed or cancelled",
        concept: true,
        image: "/projects/aeromexico-reacomodo/01-cover-v2.webp",
        imageAlt:
          "One-tap rebooking case cover on a blue background: \"When a flight falls through, you queue or call, and you don't know what you're owed by law\", with two iPhones showing the rebooking and the Concept project label, not affiliated with Aeroméxico",
        images: {
          overview: [
            caseImage("aeromexico-reacomodo", "02-antes.webp", 3943, 2237, {
              alt: "Recreation of the current flow, to verify in the app: notification, My trips, status with no options, help channels and compensation handled separately",
              caption: "Recreation of the current flow. Not a capture of the app, and the flow is still to be verified.",
            }),
          ],
          process: [
            caseImage("aeromexico-reacomodo", "04-lofi-direcciones.webp", 3120, 2628, {
              alt: "Three grayscale directions: A search, B automatic and C suggested plus alternatives, the chosen one",
            }),
            caseImage("aeromexico-reacomodo", "03-user-flow.webp", 3882, 1538, {
              alt: "User flow for direction C with delay and cancellation branches, rights, other options and states",
            }),
          ],
          solution: [
            caseImage("aeromexico-reacomodo", "06-hifi-reacomodo.webp", 7210, 1880, {
              alt: "Notification and rebooking: cancellation, a 3-hour delay, a short delay and a missed connection",
              caption: "Names and amounts are sample data.",
            }),
            caseImage("aeromexico-reacomodo", "07-hifi-derechos.webp", 5160, 1880, {
              alt: "Your rights by cause and hours: cancellation, a delay of 2 to 4 hours, more than 4 hours and weather",
            }),
            caseImage("aeromexico-reacomodo", "08-hifi-otras-opciones.webp", 3960, 1880, {
              alt: "Other options: travel another day or request a refund with the estimated amount before confirming",
            }),
            caseImage("aeromexico-reacomodo", "09-hifi-confirmacion.webp", 3110, 1880, {
              alt: "Confirmation with a new pass and a meal voucher, and switching to another flight",
            }),
            caseImage("aeromexico-reacomodo", "05-design-system.webp", 3360, 7540, {
              alt: "Design system: dark palette, Schibsted Grotesk, spacing, radii, shadows, WCAG contrast and components",
            }),
            caseImage("aeromexico-reacomodo", "10-hifi-casos-borde.webp", 5160, 1880, {
              alt: "Edge cases: no flights today, several passengers, an agency ticket and offline",
            }),
          ],
        },
        homeTeaser:
          "A speculative redesign of how Aeroméxico's app supports a passenger when their flight is delayed or cancelled.",
        contexto:
          "A speculative redesign of how Aeroméxico's app supports a passenger when their flight is delayed or cancelled, with a push notification as the entry point. A 2-week concept sprint.",
        problema:
          "Aeroméxico is among the most punctual airlines in the world, but when a flight does fall through, the app informs and doesn't resolve: rebooking moves to the queue or the phone, and the passenger doesn't know what they are owed by law.\n\nToday (according to public sources, to verify in the app): notification → My trips / Status → no flight options visible → call center, WhatsApp bot or the counter queue → negotiate the new flight → look separately for what compensation applies.\n\nPublic evidence:\n• In 2025 Aeroméxico operated about 190 thousand flights with 91.88% on-time departures (Cirium); even so, about 8% were not on time.\n• The app's published features are status, notifications, check-in and My trips; rebooking isn't mentioned (El Imparcial).\n• In October 2025 at least 53 flights were reported cancelled and 315 delayed in two days because of a dispute with pilots (Mexico News Daily).",
        proceso: {
          research:
            "References from the US and Canada already solve rebooking inside the app; none explains rights as clearly as Mexican law requires.\n• United: with a delay of 60+ min, the home screen shows whether you've been rebooked, other flights, vouchers and a chat agent. We took having the whole solution on the home screen while it lasts.\n• Delta: \"Trip Support\" with one suggested option and \"see other options\", without hiding the search.\n• Air Canada: a default rebooking the passenger can accept or change.\n\nHypotheses to validate in the test:\n1. The first question is \"what time do I arrive?\", not \"why?\": sort by arrival time.\n2. Rights depend on hours and cause: if the app calculates what applies, the passenger doesn't have to look for it.\n3. Accepting must be reversible: a \"you can change it later\" lowers the fear of being stuck with a bad flight.\n\nBenchmark to verify with current captures.",
          restricciones:
            "Respect Aeroméxico's visual identity; only offer flights with an available seat; rights wording aligned to art. 47 Bis and reviewed by legal.",
          iteraciones:
            "Three directions as lo-fi wireframes; C was chosen.\n• A · Search: familiar, but it shifts all the work to the passenger at a stressful moment.\n• B · Automatic: faster, but if the flight doesn't work for them they are back in the queue and it doesn't show rights.\n• C · Suggested + alternatives: a card with the best flight already held, 2 or 3 alternatives and rights on the side. Chosen: one tap if the suggestion works, control if not, and rights visible before deciding.",
          decisiones:
            "• Arrival time as the main data; the flight number goes to the background.\n• Rights before the button, not after: the passenger chooses between rebooking and a refund knowing what they gain or lose.\n• Cause stated in plain language (\"due to weather\" or \"due to Aeroméxico's operation\"), because compensation depends on it.",
          validacion:
            "A plan, not yet carried out: a moderated test with 5 passengers who flew in the last year, over video call with the prototype. Results: pending.\n\nTasks: find a flight for today from the notice, say what they are owed for the cancellation, request a refund and change an already accepted flight. It would measure success, time from the notice to confirming, understanding of rights, errors and confidence (1 to 5).",
        },
        solucionFinal:
          "While the disruption lasts, the app's home screen becomes a rebooking center: what happened, your best option and what you're owed.\n\n1. Notification: \"Your flight AM 123 was cancelled. We held AM 127 for you, you arrive 19:40.\" It opens straight to the rebooking card.\n2. Rebooking: a suggested flight with arrival time and seat, 2 or 3 alternatives sorted by arrival and \"Accept this flight\".\n3. Your rights: a panel by cause and hours (meals, a minimum 7.5% discount with a 2 to 4 h delay, or a refund / flight with a minimum 25% compensation if cancelled or past 4 h), citing art. 47 Bis.\n4. Other options: travel another day or request a refund, with the estimated amount before confirming.\n5. Confirmation: a new pass, digital vouchers if they apply and \"You can change it up to 2 h before\" (rule to be defined with the business).",
        resultado:
          "An unlaunched concept. There are no results yet: the usability test is planned, not carried out.",
        aprendizaje:
          "• In airlines, high punctuality doesn't remove the problem: the roughly 8% that fails defines the experience of whoever lives it.\n• Explaining rights isn't only legal; it's what lets people choose between rebooking and a refund without fear.\n• Next: run the test and validate the rights wording with a lawyer.",
      },
      {
        slug: "volaris-precio-total",
        title: "Volaris Total Price",
        subtitle: "Your flight's price with what you actually carry, from the results",
        concept: true,
        image: "/projects/volaris-precio-total/01-cover-v2.webp",
        imageAlt:
          "What are you carrying? case cover on a plum background: \"The price you compare while searching isn't the one you pay\", with several tilted iPhones showing the results and the Concept project label, not affiliated with Volaris",
        images: {
          overview: [
            caseImage("volaris-precio-total", "02-antes.webp", 3895, 1876, {
              alt: "Recreation of the current flow, to verify: search, results with base fare, choose fare, passengers, extras and payment with the total going up",
              caption: "Recreation of the current flow. Not a capture of the app, and the flow is still to be verified.",
            }),
          ],
          process: [
            caseImage("volaris-precio-total", "04-lofi-direcciones.webp", 3120, 3780, {
              alt: "Three grayscale directions: A fare table, B checkout notice and C configurator, the chosen one, with the table of baggage rules to suggested fare",
            }),
            caseImage("volaris-precio-total", "03-user-flow.webp", 3882, 1288, {
              alt: "User flow for direction C: search, what you carry, results with total, breakdown and checkout, with states",
            }),
          ],
          solution: [
            caseImage("volaris-precio-total", "06-hifi-que-llevas.webp", 7484, 1872, {
              alt: "What are you carrying? screen with the measurements of each option, carry-on, 25 kg, counts as carry-on and decide later",
              caption: "Names and amounts are sample data.",
            }),
            caseImage("volaris-precio-total", "07-hifi-resultados.webp", 3110, 1872, {
              alt: "Results with the total per person based on baggage, with the base fare as secondary text",
            }),
            caseImage("volaris-precio-total", "08-hifi-desglose.webp", 2836, 1872, {
              alt: "Breakdown when tapping a flight: suggested fare and a Plus alternative with the difference in pesos",
            }),
            caseImage("volaris-precio-total", "09-hifi-checkout.webp", 2244, 1872, {
              alt: "Checkout without surprises and a notice when the price changes",
            }),
            caseImage("volaris-precio-total", "05-design-system.webp", 3360, 6848, {
              alt: "Design system: colors, Nunito Sans, spacing, radii, shadows, WCAG contrast and components",
            }),
            caseImage("volaris-precio-total", "10-hifi-casos-borde.webp", 4568, 1872, {
              alt: "Edge cases: several passengers, round trip by leg, international and seats sold out",
            }),
          ],
        },
        homeTeaser:
          "A speculative redesign of the start of the flight purchase on volaris.com and the app.",
        contexto:
          "A speculative redesign of the start of the flight purchase on volaris.com and the app. A 2-week concept sprint. Out of scope: the legal position on baggage fees and pricing logic.",
        problema:
          "The Zero fare, the most visible one, includes only a personal item. Carry-on, checked bag and seat are added later, and the real price only appears at checkout or at the airport: with a carry-on, the fare can cost double.\n\nToday (to verify with captures): Search → results with base fare price → choose fare → passengers → extras (baggage, seat) → payment. Baggage is decided in step 5, after choosing the flight. Pending: confirm fare names (the official page says Flex, Expansión reports Básica).\n\nPublic evidence:\n• In a Mexico City–Monterrey simulation, Zero cost $945 and Plus $1,943: $998 more to bring a carry-on (Expansión, May 2026).\n• The Civil Aviation Law (art. 47 Bis) allows two pieces in the cabin of 55 × 40 × 25 cm and 10 kg in total; in 2021 Profeco put suspension seals on Volaris for charging for it (Expansión).\n• Profeco's recommendation: compare the total cost, not the base fare (El Imparcial).\n\nThe legal debate isn't solved by design; what can be designed is that the total price is visible before choosing.",
        proceso: {
          research:
            "The references ask what you're carrying before showing prices; Volaris asks after you've already chosen a flight.\n• Google Flights: a \"Bags\" filter that recalculates the results with those charges. We took declaring baggage once.\n• KAYAK: a fee calculator above the results. We took putting the configurator on top, not in a later step.\n• Viva Aerobus: packages with the difference in pesos against the base. We took showing the delta in pesos.\n\nHypotheses to validate in the test:\n1. Users know what they carry before searching: it's an input, not an extra discovered at the end.\n2. They compare flights by the big number; if it's the Zero fare, they're comparing prices they won't pay.\n3. The surprise is paid twice: in money and in trust toward the brand.\n\nBenchmark to verify with current captures.",
          restricciones:
            "Respect the Zero, Flex and Plus fares as they exist; don't change prices or policies; Volaris's visual identity intact.",
          iteraciones:
            "Three directions as lo-fi wireframes; C was chosen because it's the only one that changes the number users compare.\n• A · Fare table: it already exists in essence; it still compares flights by base price.\n• B · Checkout notice: it comes too late; the flight was already chosen at the wrong price.\n• C · \"What are you carrying?\" configurator: a row of icons above the results (personal item, carry-on, checked bag, seat). Chosen: it recalculates the total of all flights and picks the cheapest fare that covers what you carry.",
          decisiones:
            "• Total on top, base below: the big number is the price with your baggage.\n• The system picks the fare, the user picks what they carry.\n• Measurements visible, not hidden in policies: each icon shows cm and kg so users know whether the bag counts as carry-on.",
          validacion:
            "A plan, not yet carried out: a moderated test with 5 people who flew a low-cost airline in the last year, over video call with the prototype. Results: pending.\n\nTasks: find the cheapest flight traveling with a carry-on, say how much they think they'll pay in total, add a 25 kg checked bag and decide whether a 60 cm bag counts as carry-on. It would measure success, total accuracy, correct fare and trust in the price (1 to 5), against the current flow.",
        },
        solucionFinal:
          "The search starts by asking what you carry; from there, every price on screen is the one you're going to pay.\n\n1. What are you carrying?: four icons with measurements (personal item, carry-on of 55 × 40 × 25 cm and 10 kg, checked bag of 15 or 25 kg, and seat).\n2. Results with total: each flight shows the final price per person with what's chosen (\"Includes your carry-on\").\n3. Breakdown on tap: suggested fare + extras, with the alternative (\"Plus costs $X more and includes changes\").\n4. Checkout without surprises: the total doesn't change; if it does, it's explained in one line before paying.",
        resultado:
          "An unlaunched concept. There are no results yet: the usability test is planned, not carried out.",
        aprendizaje:
          "• In low-cost airlines, the problem isn't the charge but the moment it's shown.\n• Changing the order of the flow can be worth more than redesigning screens: ask first, charge later.\n• Next: run the test and validate the suggested-fare rule on more routes.",
      },
      {
        slug: "viva-viaje-en-grupo",
        title: "Viva Aerobus Group Travel",
        subtitle: "Seats and check-in for the whole family in a single flow",
        concept: true,
        image: "/projects/viva-viaje-en-grupo/01-cover-v2.webp",
        imageAlt:
          "Seats and check-in for the whole family case cover on a green background: \"Today it's decided person by person, without seeing who sits with whom or how much it costs to sit together\", with iPhones showing the group map and the Concept project label, not affiliated with Viva Aerobus",
        images: {
          overview: [
            caseImage("viva-viaje-en-grupo", "02-antes.webp", 3895, 1879, {
              alt: "Recreation of the estimated flow, to verify in the app: My trips, booking, seats per passenger, payment and check-in per passenger",
              caption: "Recreation of the current flow. Not a capture of the app, and the flow is still to be verified.",
            }),
          ],
          process: [
            caseImage("viva-viaje-en-grupo", "04-lofi-direcciones.webp", 3120, 2588, {
              alt: "Three grayscale directions: A step per passenger, B Sit us together button and C group map, the chosen one",
            }),
            caseImage("viva-viaje-en-grupo", "03-user-flow.webp", 3882, 1288, {
              alt: "User flow for direction C with 2 adults, 1 girl and 1 baby, and its states",
            }),
          ],
          solution: [
            caseImage("viva-viaje-en-grupo", "06-hifi-grupo-y-mapa.webp", 8000, 1858, {
              alt: "Your group and group map: everyone together, minors with their adult, moving a token, a minor without an adult and list mode",
              caption: "Names and amounts are sample data.",
            }),
            caseImage("viva-viaje-en-grupo", "07-hifi-comparar.webp", 1378, 1876, {
              alt: "Compare options: everyone together, minors with their adult and assignment at check-in with a risk notice",
            }),
            caseImage("viva-viaje-en-grupo", "08-hifi-check-in.webp", 3702, 1876, {
              alt: "Group check-in, mixed fares and a minor with a third party",
            }),
            caseImage("viva-viaje-en-grupo", "09-hifi-pases.webp", 2518, 1876, {
              alt: "Boarding passes and a who-sits-where summary to share",
            }),
            caseImage("viva-viaje-en-grupo", "05-design-system.webp", 3360, 10264, {
              alt: "Design system: colors, Albert Sans, spacing, radii, shadows, icons, components and WCAG contrast",
            }),
            caseImage("viva-viaje-en-grupo", "10-hifi-casos-borde.webp", 5434, 1876, {
              alt: "Edge cases: no adjacent block, aircraft change, more babies than adults, a baby in an exit row and offline",
            }),
          ],
        },
        homeTeaser:
          "A speculative redesign of how a family or group chooses seats and checks in on Viva's app.",
        contexto:
          "A speculative redesign of how a family or group chooses seats and checks in on Viva's app. A 2-week concept sprint. Out of scope: pricing logic and immigration rules.",
        problema:
          "A booking with several passengers (including minors) forces deciding seats and check-in person by person, without clearly seeing who sits next to whom or how much it costs to sit together. Viva sells the app for traveling \"with your family and friends\", but seats and check-in are still designed for one passenger at a time.\n\nToday (estimated, to verify in the app): My trips → Seats → choose passenger and seat, repeated for each passenger → pay → Check-in with each passenger's details → passes. With 4 passengers, those steps repeat 4 times. Hypothesis to verify with captures: the cost of sitting together only appears added up at the end and the map doesn't show which minor sits next to which adult.\n\nPublic evidence:\n• Check-in opens depending on the fare (Zero 4 hours before, Light 8 hours, Smart 10 days): a family with mixed fares can't check everyone in at the same time (Viva Blog).\n• Babies travel on a lap, not in an emergency row, and only one per adult (Viva Blog); a minor with a third party requires a release letter.\n• No public Viva page was found guaranteeing free adjacent seats for minors. Verify in the terms and conditions.",
        proceso: {
          research:
            "The references treat \"seat the family together\" as a system rule; at Viva today it looks like an individual purchase.\n• United: children under 12 sit next to an adult at no cost and the map marks the free seats. We took marking on the map which seats put the family together and how much they cost.\n• Ryanair: it separates the mandatory (minor + adult) from the optional (the whole group). We took stating the price of each.\n• Southwest: it \"tries\" to seat them together, and in 2026 it separated a 2-year-old. A counterexample: show the outcome before the flight and warn if there's risk.\n\nHypotheses to validate in the test:\n1. Families think in \"who sits with whom\", not seat numbers.\n2. The fear is being separated, not the price: if the cost is clear and early, the decision is made without anxiety.\n3. Check-in is a group chore: whoever books wants to do it once for everyone.\n\nBenchmark to verify with current captures.",
          restricciones:
            "Respect Viva's visual identity; don't change fares or seat prices, only show them better; comply with safety rules (babies on a lap outside the emergency row, one baby per adult).",
          iteraciones:
            "Three directions as lo-fi wireframes; C was chosen.\n• A · Step per passenger: the same as today with a better UI; users still build the group from memory.\n• B · \"Sit us together\" button: fast, but it removes control and you can't see which minor sits with which adult.\n• C · Group map: all passengers as draggable tokens on the map, with a suggested block and its price. Chosen: it suggests by default, lets you adjust and the total changes live.",
          decisiones:
            "• People before numbers: the token shows a name and age (\"Ana, 7\"); the seat goes at a second level.\n• Total price, not per seat: \"Sit together: $X for 4\".\n• The system protects the minor: it doesn't let you confirm if they end up without an adjacent adult; it explains why and proposes the nearest free seat.",
          validacion:
            "A plan, not yet carried out: a moderated test with 5 people who flew with minors in the last year, over video call with the prototype (test booking: 2 adults, a 7-year-old girl and a baby). Results: pending.\n\nTasks: seat the girl next to an adult saying how much they'll pay, seat all four together, check in the whole family and show their partner who sits where. It would measure success, price accuracy, time, errors (a minor without an adjacent adult) and confidence (1 to 5).",
        },
        solucionFinal:
          "\"Seats\" and \"Check-in\" become a single group flow: a map where each passenger is a token, with the price of sitting together visible from the start.\n\n1. Your group: passengers with age, type (adult, child, baby on a lap) and fare; this is where minors are paired with their adult.\n2. Group map: a suggested adjacent block; drag a token to change and the total updates live.\n3. Compare options: \"Everyone together\", \"Minors with their adult\" and \"Assignment at check-in\" (with a risk notice), each with its price.\n4. Group check-in: a single confirmation for everyone, with minors' details preloaded.\n5. Boarding passes: a carousel with all the passes and a \"who sits where\" summary to share.",
        resultado:
          "An unlaunched concept. There are no results yet: the usability test is planned, not carried out.",
        aprendizaje:
          "• In low-cost airlines, price transparency can be the UX improvement, without changing the business model.\n• Designing for the group changes the unit of the flow: from \"passenger\" to \"booking\".\n• Next: capture the current flow and run the test.",
      },
      {
        slug: "delta-modo-conexion",
        title: "Delta Connection Mode",
        subtitle: "A clear verdict on whether you make your next flight",
        concept: true,
        image: "/projects/delta-modo-conexion/01-cover-v2.webp",
        imageAlt:
          "Will I make it or not? case cover on a navy background: \"Gate, time, map and alerts scattered to answer a single question\", with the On time, Tight and At risk cards and an iPhone, and the Concept project label, not affiliated with Delta Air Lines",
        images: {
          overview: [
            caseImage("delta-modo-conexion", "02-antes.webp", 3895, 1859, {
              alt: "Recreation of the current flow, to verify in the app: gate notification, flight card, map, hand calculation, immigration left out of the calculation and rebooking",
              caption: "Recreation of the current flow. Not a capture of the app, and the flow is still to be verified.",
            }),
          ],
          process: [
            caseImage("delta-modo-conexion", "04-lofi-direcciones.webp", 3120, 2640, {
              alt: "Three grayscale directions: A card in Today, B map first and C connection mode, the chosen one",
            }),
            caseImage("delta-modo-conexion", "03-user-flow.webp", 3896, 1446, {
              alt: "User flow for direction C with the On time, Tight and At risk states, route, plan B and edge cases",
            }),
          ],
          solution: [
            caseImage("delta-modo-conexion", "06-hifi-veredicto.webp", 5160, 1888, {
              alt: "Live Activity and verdict in its three states: On time, Tight and At risk",
              caption: "Names and amounts are sample data.",
            }),
            caseImage("delta-modo-conexion", "07-hifi-ruta.webp", 3702, 1888, {
              alt: "Your route: domestic, with immigration and the existing map",
            }),
            caseImage("delta-modo-conexion", "08-hifi-plan-b.webp", 3110, 1888, {
              alt: "Plan B: options, already rebooked and flight confirmed",
            }),
            caseImage("delta-modo-conexion", "05-design-system.webp", 3360, 9048, {
              alt: "Design system: colors, Source Sans 3, spacing, radii, shadows, components, icons and WCAG contrast",
            }),
            caseImage("delta-modo-conexion", "09-hifi-estados.webp", 8000, 1880, {
              alt: "States: gate change, delayed departure, separate tickets, no signal, long connection and mobility assistance",
            }),
          ],
        },
        homeTeaser:
          "A speculative redesign of how the Fly Delta app supports a passenger during a short layover.",
        contexto:
          "A speculative redesign of how the Fly Delta app supports a passenger during a short layover, with a Live Activity on iOS. A 2-week concept sprint. Out of scope: deciding whether to hold a flight and real immigration times.",
        problema:
          "When landing with little time, the passenger pieces together loose data (gate, boarding time, map, notifications) to answer a single question: will I make it or not? Fly Delta already has the pieces (gate, status, maps, alerts, rebooking), but scattered; nobody brings them together into a verdict.\n\nToday (to verify in the app): gate notification → Today tab → next flight card → tap the gate to open the map → calculate by hand the closing time minus the walking time. If there's immigration or security, the app doesn't add it (to verify).\n\nPublic evidence:\n• Connecting gate information is offered \"via maps\"; remaining time or risk isn't mentioned (Delta Pro).\n• Version 7.0 adds Live Activities with a gate-closing notice, on iOS only (Delta News).\n• In 2025, 76.4% of flights by reporting US airlines arrived on time (DOT); Delta Network, 79.3%.",
        proceso: {
          research:
            "The references treat the connection as a task with a countdown and steps; Fly Delta treats it as one more flight in the list.\n• United: a connection page with a countdown and steps to the gate; if you don't make it, you rebook for free right there. We took a single screen for the connection with the emergency exit included.\n• Flighty: Connection Assistant with steps and typical times for each (security, bags, terminal). We took breaking time down into steps, not just distance.\n• Fly Delta (current): the data already exists; it needs to be joined into a verdict.\n\nHypotheses to validate in the test:\n1. The question is binary: \"do I make it?\" comes before the exact gate.\n2. Real time isn't distance: immigration, security and bags weigh more than walking; hiding them gives false calm.\n3. Plan B lowers stress even if it isn't used.\n\nBenchmark to verify with current captures.",
          restricciones:
            "Respect Delta's visual identity; use only data the app already shows (gate, status, maps, rebooking); work with weak signal on the plane and the jet bridge.",
          iteraciones:
            "Three directions as lo-fi wireframes; C was chosen.\n• A · Card in Today: low cost, but it competes with the boarding pass and offers; the risk gets lost.\n• B · Map first: useful for walking, but it doesn't show immigration or plan B, and it's slow to load with weak signal.\n• C · Connection mode: a dedicated screen that activates on landing, with a verdict, steps and plan B, mirrored in a Live Activity. Chosen: the verdict on the lock screen and detail one tap away, with data Delta already has.",
          decisiones:
            "• Verdict before data: the status goes on top; the gate and the map below.\n• Doors closing, not takeoff: the count uses the gate closing, which is the real limit.\n• Mandatory steps visible: if there's immigration or security, they are added to the calculation and shown as steps.",
          validacion:
            "A plan, not yet carried out: a moderated test with 5 people who made a Delta connection in the last year, over video call with the prototype. Results: pending.\n\nTasks: say whether they make their next flight and how they know, what's left to do before the gate on an international flight, what to do if the gate changes and choose an alternative when at risk. It would measure success, time to a correct \"I make it / I don't\", understanding of steps, errors and calm (1 to 5).",
        },
        solucionFinal:
          "\"Your connection\" activates on landing: a verdict, the countdown to gate closing, the steps left and a plan B ready.\n\n1. Verdict: a large status (On time / Tight / At risk), minutes until gate closing and arrival gate → departure gate.\n2. Your route: steps in order with their time (leaving the plane, immigration, bags, security, walking or train); \"View on map\" opens the existing map.\n3. Plan B: if the status is At risk, the next available flight, whether Delta already rebooked you and actions to accept, choose another or talk to an agent.\n4. Live Activity: verdict, minutes and gate on the lock screen and Dynamic Island; on Android, a persistent notification.",
        resultado:
          "An unlaunched concept. There are no results yet: the usability test is planned, not carried out.",
        aprendizaje:
          "• In airlines, high-value design is in moments of stress, not in booking: joining existing data is worth more than adding features.\n• An honest verdict (including \"At risk\") builds more trust than hiding the bad news until the end.\n• Next: run the test and calibrate the thresholds with real ATL data.",
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
      heroStatement: "Diseño de producto que sí resuelve el problema.",
      tagline:
        "Diseño producto digital end-to-end para fintech, viajes, SaaS, marketplaces y real estate, guiado por research, no por suposiciones.",
      email: "eduardo-chacom@hotmail.com",
      whatsapp: "+52 312 121 4827",
      whatsappHref: "https://wa.me/523121214827",
      linkedin: "https://www.linkedin.com/in/eduardo-chacon-171367275/",
      experienceSummary:
        "Actualmente en PSL Scout, con más de 3 años de experiencia diseñando producto.",
      skills: [
        { name: "Figma", years: 5, rating: 5 },
        { name: "Pencil", years: 1, rating: 4 },
        { name: "Claude", years: 2, rating: 4 },
        { name: "Notion", years: 4, rating: 5 },
        { name: "PostHog", years: 2, rating: 4 },
        { name: "Miro", years: 2, rating: 5 },
        { name: "Sketch", years: 3, rating: 5 },
        { name: "Lovable", years: 1, rating: 4 },
        { name: "Webflow", years: 2, rating: 5 },
        { name: "Google Analytics", years: 2, rating: 4 },
      ],
      expertise: [
        { name: "Investigación de usuarios", years: 4, rating: 5 },
        { name: "UX Writing", years: 4, rating: 4 },
        { name: "Arquitectura de la información", years: 3, rating: 4 },
        { name: "Diseño de interacción y prototipado", years: 5, rating: 5 },
        { name: "UI / Diseño visual", years: 5, rating: 4 },
        { name: "A/B Testing y validación", years: 3, rating: 4 },
        { name: "Design Systems", years: 3, rating: 4 },
        { name: "Estrategia SEO", years: 3, rating: 4 },
        { name: "Product Analytics", years: 2, rating: 4 },
        { name: "Liderazgo de equipos", years: 3, rating: 4 },
        { name: "Comunicación con stakeholders", years: 2, rating: 4 },
      ],
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
      skillsLabel: "Skills",
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
      phase: "Fase",
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
      yearsOfExperience: "años de experiencia",
      proficiency: "Dominio",
      confidentialLabel: "Confidencial",
      confidentialNote:
        "Algunos detalles de este proyecto están bajo NDA, así que mantengo la descripción a nivel general por respeto al cliente.",
      conceptLabel: "Concept project",
      conceptNote:
        "Proyecto conceptual: no está afiliado a la marca ni se ha lanzado. Las pantallas son recreaciones mías y los nombres y montos son datos de ejemplo.",
      shareCaseStudy: "Compartir",
      linkCopied: "Link copiado",
    },
    comoTrabajo: {
      title: "Cómo trabajo",
      kicker: "Investigación primero, siempre",
      intro:
        "En un mercado donde los productos compiten cabeza a cabeza, la diferencia ya no está solo en la interfaz, está en qué tan bien entiendes a tu usuario antes de dibujar el primer wireframe. Este es el proceso completo, paso a paso.",
      phases: ["Discovery", "Diseño", "Validación"],
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
        {
          title: "Monitoreo",
          description:
            "Ya en producción, configuro monitoreo con PostHog para ver cómo se comporta con uso real, no solo en pruebas, y uso esos datos para decidir qué iterar después.",
          imageLabel: "Dashboard de PostHog",
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
        dates: "Febrero 2025 — presente (freelance)",
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
      {
        company: "Universidad de Colima",
        role: "UX/UI Lead",
        dates: "Enero 2023 — Enero 2024",
        description:
          "Lideré UX/UI para Muvi, una plataforma de recorridos virtuales para los museos de la universidad que los estudiantes usaban como parte de su proceso de acreditación académica.",
      },
    ],
    caseStudies: [
      {
        slug: "psl-scout",
        title: "PSL Scout",
        subtitle: "Marketplace de Personal Seat Licenses para la NFL",
        image: "/projects/psl-scout.png",
        confidential: true,
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
        confidential: true,
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
        image: "/projects/anagram/01-cover-v2.webp",
        imageAlt:
          "Portada del caso Anagram sobre fondo crema: \"De no tener nada que mostrar a un portafolio de proyectos insignia\", con tres iPhones del inicio, nosotros y portafolio del sitio",
        images: {
          overview: [
            caseImage("anagram", "02-antes.webp", 2880, 1514, {
              alt: "Esquema del punto de partida: sin portafolio, sin catálogo y sin visibilidad. Es una reconstrucción, no una captura del sitio anterior",
              caption: "Reconstrucción del punto de partida. No es una captura del sitio anterior.",
            }),
          ],
          process: [
            caseImage("anagram", "04-lofi-direcciones.webp", 3936, 2278, {
              alt: "Dos wireframes en grises reconstruidos: A catálogo como foco, descartada, y B proyectos insignia primero, elegida",
              caption: "Reconstrucción. No son los wireframes originales del proyecto.",
            }),
            caseImage("anagram", "03-user-flow.webp", 3360, 1640, {
              alt: "Flujos de usuario: de Google a un proyecto y del menú a una propiedad en venta",
            }),
          ],
          solution: [
            caseImage("anagram", "06-hifi-inicio.webp", 2880, 7696, {
              alt: "Recreación de la página de inicio con sus fotos reales",
              caption: "Recreación del sitio publicado, observado el 5 de noviembre de 2026.",
            }),
            caseImage("anagram", "07-hifi-portafolio.webp", 2880, 7530, {
              alt: "Portafolio paginado con los proyectos en blanco y negro",
            }),
            caseImage("anagram", "08-hifi-proyecto.webp", 2880, 7238, {
              alt: "Detalle del proyecto Casa Maple 31 con ficha y galería",
            }),
            caseImage("anagram", "09-hifi-inmobiliaria.webp", 2880, 3782, {
              alt: "Propiedades en venta con filtros por tipo, precios y datos",
            }),
            caseImage("anagram", "05-design-system.webp", 3360, 3784, {
              alt: "Design system de Anagram: escala neutra, tipografía Outfit, componentes y tabla de contraste",
            }),
            caseImage("anagram", "10-hifi-modo-oscuro.webp", 1440, 3848, {
              alt: "Inicio en modo oscuro",
            }),
            caseImage("anagram", "11-hifi-movil.webp", 2742, 1896, {
              alt: "Vistas móviles adaptadas: inicio, portafolio e inmobiliaria",
            }),
          ],
        },
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
        image: "/projects/nativa/01-cover-v2.webp",
        imageAlt:
          "Portada del caso Nativa sobre fondo verde: \"Vender lo que todavía no existe: la página genera confianza y deseo por sí sola\", con la portada del sitio y su vista móvil",
        images: {
          overview: [
            caseImage("nativa", "02-antes.webp", 2880, 2072, {
              alt: "Material de partida: renders, planos e imágenes, con las preguntas que el comprador tiene que resolver. Es una reconstrucción, no la captura de un sitio anterior",
              caption: "Reconstrucción del punto de partida. No es la captura de un sitio anterior.",
            }),
          ],
          process: [
            caseImage("nativa", "04-lofi-direcciones.webp", 5816, 2368, {
              alt: "Wireframes en grises: A galería de renders y B modelos primero, ambas hipotéticas, y C recorrido e información, la elegida",
              caption: "Reconstrucción. Las direcciones A y B son hipotéticas.",
            }),
            caseImage("nativa", "03-user-flow.webp", 3360, 2040, {
              alt: "Flujos de usuario para comprar un departamento y para rentar o comprar un local, hasta el equipo de ventas",
            }),
          ],
          solution: [
            caseImage("nativa", "06-hifi-inicio.webp", 1440, 13253, {
              alt: "Recreación de la página completa del sitio con sus renders y planos reales",
              caption: "Recreación del sitio publicado, observado el 5 de noviembre de 2026.",
            }),
            caseImage("nativa", "08-hifi-portada-y-proyecto.webp", 6048, 1992, {
              alt: "Secciones de portada y Sobre el proyecto",
            }),
            caseImage("nativa", "07-hifi-modelos.webp", 2880, 5582, {
              alt: "Página de modelos con los planos de Ceiba, Primavera, Rosa Morada y Parota",
            }),
            caseImage("nativa", "05-design-system.webp", 3360, 5072, {
              alt: "Design system de Nativa: verde y terracota medidos del sitio, tipografía sustituta Prata y Nunito Sans, componentes y tabla de contraste",
            }),
            caseImage("nativa", "09-hifi-financiamiento-y-contacto.webp", 3072, 3738, {
              alt: "Planes de financiamiento y formulario de contacto",
            }),
            caseImage("nativa", "10-hifi-movil.webp", 3624, 1896, {
              alt: "Vistas móviles: portada, menú lateral, modelo Ceiba y contacto",
            }),
          ],
        },
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
        image: "/projects/casas-exclusivas-colima/01-cover-v2.webp",
        imageAlt:
          "Portada del caso Casas Exclusivas sobre fondo oscuro: \"El cliente pidió una estructura como Century 21. El reto: darle identidad propia\", con el sitio en escritorio y móvil",
        images: {
          overview: [
            caseImage("casas-exclusivas-colima", "02-antes.webp", 3600, 1536, {
              alt: "Reconstrucción en grises de la estructura pedida por el cliente: listado con filtros, ficha de propiedad y contacto, sin marca",
              caption: "Reconstrucción de la estructura que pidió el cliente. No es la captura de un sitio anterior.",
            }),
          ],
          process: [
            caseImage("casas-exclusivas-colima", "04-lofi-direcciones.webp", 3360, 2118, {
              alt: "Dos direcciones en grises: A copia de la referencia, descartada; B estructura de referencia con identidad propia, elegida",
              caption: "Reconstrucción. No son los wireframes originales del proyecto.",
            }),
            caseImage("casas-exclusivas-colima", "03-user-flow.webp", 3990, 1254, {
              alt: "User flow reconstruido: llegada directa o desde Google, inicio o guía local, venta, filtro, detalle y tres salidas de contacto",
            }),
          ],
          solution: [
            caseImage("casas-exclusivas-colima", "06-hifi-inicio.webp", 2880, 8116, {
              alt: "Inicio en escritorio: hero con foto aérea, Oportunidades Únicas, guías locales, misión y visión, contacto, preguntas frecuentes y pie",
              caption: "Recreación del sitio publicado, observado el 5 de noviembre de 2026.",
            }),
            caseImage("casas-exclusivas-colima", "07-hifi-venta.webp", 2880, 7028, {
              alt: "Venta en escritorio: hero de cocina, panel Filtra tu búsqueda y cuadrícula de propiedades con clave, precio, zona y metros",
            }),
            caseImage("casas-exclusivas-colima", "08-hifi-detalle.webp", 2880, 6618, {
              alt: "Detalle de propiedad en escritorio: galería, mapa, datos de la casa, Llamar ahora, Enviar WhatsApp y propiedades similares",
            }),
            caseImage("casas-exclusivas-colima", "09-hifi-guia.webp", 2880, 2620, {
              alt: "Guía local de Colima: introducción, cómo es vivir en Colima y precios promedio",
            }),
            caseImage("casas-exclusivas-colima", "11-hifi-movil.webp", 2742, 5122, {
              alt: "Inicio, Venta y Detalle en móvil",
            }),
            caseImage("casas-exclusivas-colima", "05-design-system.webp", 3360, 7104, {
              alt: "Design system: colores primitivos y semánticos, tipografía Outfit, espaciado, radios, sombra, tabla de contraste WCAG y componentes",
            }),
            caseImage("casas-exclusivas-colima", "10-hifi-estados.webp", 2880, 1492, {
              alt: "Estados vistos en el sitio: pregunta abierta, select de presupuesto, invitación a contactar y nav al hacer scroll, con decisiones clave y notas por verificar",
            }),
          ],
        },
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
      {
        slug: "sinagua",
        title: "Sinagua",
        subtitle: "Plataforma de datos abiertos sobre el agua en México",
        link: "https://www.sinagua.org",
        image: "/projects/sinagua/01-cover-v2.webp",
        imageAlt:
          "Portada del caso Sinagua sobre fondo crema: \"Los datos del agua existen, pero están dispersos. Aquí se leen municipio por municipio y en lenguaje llano\", con el mapa de acuíferos de México y el detalle de la plataforma",
        images: {
          overview: [
            caseImage("sinagua", "02-antes.webp", 2880, 1994, {
              alt: "Antes de Sinagua: cuatro tarjetas de fuentes de CONAGUA, SMN e INEGI y los cinco pasos a mano para saber cómo está el agua de un municipio",
              caption:
                "Reconstrucción del problema. No es la captura de un producto anterior.",
            }),
          ],
          process: [
            caseImage("sinagua", "04-lofi-direcciones.webp", 6456, 2360, {
              alt: "Tres direcciones en grises: A Artículos (descartada), B Muro de denuncias (complemento) y C Navegación por territorio (principal)",
              caption:
                "Dibujado después de construirlo: el proyecto no conserva wireframes originales.",
            }),
            caseImage("sinagua", "03-user-flow.webp", 3360, 2480, {
              alt: "User flow con tres recorridos: saber cómo está el agua donde vives, contar lo que pasa con el agua y la actualización automática dos veces por semana",
            }),
          ],
          solution: [
            caseImage("sinagua", "06-hifi-inicio.webp", 2880, 13590, {
              alt: "Página de inicio completa: México se está quedando sin agua, sequía, acuíferos, años secos, presas, quién usa el agua y calidad del agua",
            }),
            caseImage("sinagua", "07-hifi-mapas.webp", 6048, 1992, {
              alt: "Mapa de acuíferos: panorama nacional con los estados más expuestos y el detalle del acuífero Valle de León en Guanajuato",
            }),
            caseImage("sinagua", "08-hifi-presas-y-sequia.webp", 6048, 1992, {
              alt: "Mapa de presas con el llenado promedio por estado y mapa de sequía con los estados con más gente en sequía",
            }),
            caseImage("sinagua", "09-hifi-denuncias.webp", 6048, 2192, {
              alt: "Muro de denuncias anónimas filtrado por estado y el formulario para mandar una denuncia con su estado de error",
            }),
            caseImage("sinagua", "10-hifi-urgente.webp", 2880, 2896, {
              alt: "Página Urgente: lo más crítico del agua de la semana, con botones para compartirlo en historias",
            }),
            caseImage("sinagua", "11-hifi-movil.webp", 3624, 1896, {
              alt: "Cuatro pantallas en móvil: inicio, mapa de acuíferos con hoja inferior, denuncias y urgente",
            }),
            caseImage("sinagua", "05-design-system.webp", 3360, 6204, {
              alt: "Design system de Sinagua: colores primitivos y semánticos, tipografía Newsreader y Schibsted Grotesk, espacio, radios, sombras, componentes y contraste WCAG",
            }),
          ],
        },
        homeTeaser:
          "2,475 municipios, 653 acuíferos y 214 presas en un solo lugar, para cualquier persona.",
        contexto:
          "Sinagua es una plataforma de datos abiertos sobre el agua en México. Reúne en un solo lugar, municipio por municipio, la información sobre sequía, nivel de presas, disponibilidad de acuíferos, calidad del agua y quién la usa. Es un proyecto ciudadano y sin fines de lucro.",
        problema:
          "Los datos del agua en México existen, pero están dispersos entre CONAGUA, el SMN y el INEGI, en formatos difíciles de leer para cualquier persona.",
        miRol:
          "Proyecto personal end-to-end. Me encargué de la investigación, la arquitectura de información, el diseño de la interfaz, la visualización de datos y el desarrollo, con apoyo de herramientas de IA para programar.",
        proceso: {
          decisiones:
            "Diseñé la navegación a nivel municipal para que cualquier persona encuentre la situación de su localidad en pocos clics, y convertí datasets gubernamentales complejos en visualizaciones entendibles para un público no técnico.",
          iteraciones:
            "Sumé dos presas que no están en el monitoreo nacional, a partir del aviso de una organización de conservación del sur de Sinaloa.",
        },
        solucionFinal:
          "Un solo lugar con la situación de cada municipio: sequía, nivel de presas, disponibilidad de acuíferos, calidad del agua y quién la usa. Los datos se actualizan solos dos veces por semana, sin intervención manual, y un formulario y un muro de denuncias anónimas, con reglas de moderación y aviso de privacidad, suman lo que vive la gente a los datos oficiales.",
        resultado:
          "Cobertura de 2,475 municipios, 653 acuíferos, 214 presas y más de 2,200 sitios de monitoreo de calidad del agua, todo en un solo lugar.",
      },
      {
        slug: "nu-wallet",
        title: "Nu Wallet",
        subtitle: "Una wallet para ver y controlar todas tus tarjetas",
        concept: true,
        image: "/projects/nu-wallet/01-cover-v2.webp",
        imageAlt:
          "Portada del caso Nu Wallet sobre fondo morado: \"Varias tarjetas a la vez, y ningún lugar donde verlas juntas ni saber cuál usar para qué\", con la pila de tarjetas en un iPhone y la etiqueta Concept project, no afiliado a Nu",
        homeTeaser:
          "Rediseño especulativo de cómo un cliente de Nu México ve y controla todas sus tarjetas.",
        contexto:
          "Rediseño especulativo de cómo un cliente de Nu México ve y controla todas sus tarjetas: crédito física, hasta 3 virtuales de crédito, débito física y virtual. Concept sprint de 2 semanas.",
        problema:
          "Nu promueve tener varias tarjetas para organizar gastos, pero la app no ofrece una vista donde esa organización se vea: no hay un lugar para verlas juntas ni saber cuál se usa para qué.\n\nVer una tarjeta virtual hoy: Inicio → Mis tarjetas → Débito o Crédito → Tarjeta virtual → NIP. Son 4 pasos para ver una sola, y se repite por cada una. La propuesta quita la elección de producto y el NIP para solo ver; la seguridad se mueve a revelar el número.\n\nEvidencia pública:\n• Nu permite hasta 3 tarjetas virtuales de crédito activas y sugiere ponerles nombre para organizar gastos (Nu Blog).\n• Recomienda usar la virtual para suscripciones, lo que exige recordar qué servicio está en qué tarjeta (Nu Blog).\n• Más de 7 millones de clientes de tarjeta de crédito en México (Nu Blog).",
        images: {
          overview: [
            caseImage("nu-wallet", "02-antes.webp", 4890, 2592, {
              alt: "Recreación del flujo actual de Nu en cinco pantallas: Inicio, Mis tarjetas, Tarjeta virtual, NIP y datos de la tarjeta",
              caption:
                "Recreación del flujo actual. No es una captura de la app.",
            }),
          ],
          process: [
            caseImage("nu-wallet", "04-lofi-direcciones.webp", 3980, 2616, {
              alt: "Wireframes en grises de las direcciones A Lista, B Carrusel y C Wallet apilado, con la C marcada como elegida",
            }),
            caseImage("nu-wallet", "03-user-flow.webp", 3920, 2640, {
              alt: "Flujo de usuario de la dirección C: desde Inicio hasta ver datos, copiar, renombrar, cargos recurrentes, bloquear y crear virtual",
            }),
          ],
          solution: [
            caseImage("nu-wallet", "06-hifi-wallet.webp", 2806, 2228, {
              alt: "Pantallas hi-fi: Wallet con cinco tarjetas apiladas, tarjeta al frente con acciones y cargos recurrentes",
              caption: "Los nombres y montos son datos de ejemplo.",
            }),
            caseImage("nu-wallet", "09-hifi-crear-virtual.webp", 2806, 2228, {
              alt: "Pantallas hi-fi de crear tarjeta virtual: formulario vacío, formulario lleno y tarjeta nueva en la pila",
            }),
            caseImage("nu-wallet", "07-hifi-revelar-copiar.webp", 2806, 2228, {
              alt: "Pantallas hi-fi de revelar y copiar: Face ID, datos revelados y número copiado",
            }),
            caseImage("nu-wallet", "08-hifi-bloquear.webp", 2806, 2228, {
              alt: "Pantallas hi-fi de bloquear: tarjeta al frente, confirmación que dice que Netflix y Spotify dejarán de cobrarse, y tarjeta bloqueada",
            }),
            caseImage("nu-wallet", "05-design-system.webp", 3360, 10350, {
              alt: "Design system de Nu Wallet: colores, tipografía, espaciado, radios, sombras, componentes, contraste AA y referencias",
            }),
            caseImage("nu-wallet", "10-hifi-estados.webp", 4570, 2228, {
              alt: "Estados y casos borde: una sola tarjeta, bloqueada en la pila, física en camino, límite de 3 virtuales y sin conexión",
            }),
          ],
        },
        proceso: {
          research:
            "Los referentes resuelven \"muchas tarjetas\" con una sola superficie visual; Nu las reparte por producto.\n• Apple Wallet: tarjetas apiladas; tocas una y pasa al frente. Se toma el modelo mental de \"cartera\".\n• Revolut: carrusel con acciones rápidas por tarjeta, sin menús.\n• Nu (actual): separadas por Débito / Crédito en \"Mis tarjetas\". Es lo que hay que unificar.\n\nHipótesis a validar en el test:\n1. El usuario piensa en uso, no en producto: \"la de Netflix\" importa más que \"débito\".\n2. Ver ≠ revelar: ver las tarjetas no debería pedir NIP; ver el número completo sí.\n3. Bloquear es una acción de pánico: debe estar a un toque.\n\nBenchmark por verificar con capturas actuales.",
          restricciones:
            "Respetar la identidad visual de Nu; no agregar productos, solo reorganizar los existentes; datos sensibles siempre detrás de NIP o biometría.",
          iteraciones:
            "Tres direcciones en wireframes lo-fi; se eligió la C.\n• A · Lista: clara pero fría; parece un menú de ajustes.\n• B · Carrusel: bonita, pero oculta cuántas tarjetas tienes; con 5+ el usuario se pierde.\n• C · Wallet apilado: todas apiladas con su borde visible; tocas una y sube con sus acciones. Elegida: ves el total de un vistazo y el detalle en un toque.",
          decisiones:
            "• Nombre arriba, número abajo: el usuario identifica por uso (\"Streaming\").\n• Ver sin NIP, revelar con biometría.\n• Bloquear con una confirmación que dice qué se rompe: \"Netflix y Spotify dejarán de cobrarse\" en vez de \"¿Seguro?\".",
          validacion:
            "Plan, aún no realizado: test moderado con 5 clientes de Nu, por videollamada con el prototipo de Figma. Resultados: pendientes.\n\nTareas: encontrar la tarjeta de las suscripciones, bloquearla diciendo qué cree que pasará, crear una virtual y copiar el número de la de débito. Se mediría éxito por tarea, tiempo, errores y facilidad percibida (1 a 5), y se compararía contra la app actual.",
        },
        solucionFinal:
          "\"Mis tarjetas\" se vuelve una cartera: todas apiladas, cada una con su nombre de uso y sus acciones a un toque.\n\n1. Wallet: pila con color por tipo (crédito, débito, virtual).\n2. Tarjeta al frente: ver datos, bloquear, renombrar y copiar número.\n3. Cargos recurrentes: suscripciones ligadas a esa tarjeta, para bloquear sabiendo qué se afecta.\n4. Crear virtual: botón al final de la pila; nombre y uso en el mismo paso.",
        resultado:
          "Concepto sin lanzar. Todavía no hay resultados: el test de usabilidad está planeado, no realizado.",
        aprendizaje:
          "• En banca, reorganizar suele valer más que agregar funciones.\n• Seguridad y rapidez no compiten si se separa \"ver\" de \"revelar\".\n• Siguiente: correr el test y explorar alertas de cargos recurrentes por tarjeta.",
      },
      {
        slug: "spotify-modo-clasico",
        title: "Spotify Modo Clásico",
        subtitle: "Un reproductor con anillo táctil para escuchar álbumes completos",
        concept: true,
        image: "/projects/spotify-modo-clasico/01-cover-v2.webp",
        imageAlt:
          "Portada del caso Spotify Modo Clásico sobre fondo negro: \"Escuchar un álbum completo, o controlar la música sin ver, queda en segundo plano\", con tres iPhones y el anillo táctil, y la etiqueta Concept project, no afiliado a Spotify",
        homeTeaser:
          "Rediseño especulativo de un modo de reproducción para escuchar álbumes completos con un control circular táctil.",
        contexto:
          "Rediseño especulativo de un modo de reproducción para escuchar álbumes completos con un control circular táctil, inspirado en el click wheel del iPod. Concept sprint de 2 semanas.",
        problema:
          "El reproductor de Spotify está pensado para saltar entre canciones mirando la pantalla. Escuchar un álbum completo, o controlar la música sin ver, tiene pocos apoyos.\n\nHoy, para volver a un momento de una canción: Biblioteca → álbum → Play → Now Playing → arrastrar la barra de progreso (por verificar en la app). La barra es delgada y no da referencia táctil, así que hay que mirarla. La propuesta junta navegar y adelantar en un solo control circular con ticks hápticos.\n\nEvidencia pública:\n• Hasta noviembre de 2021 el botón principal de un álbum lo reproducía en aleatorio; Spotify lo cambió tras la petición de Adele (Gizmodo).\n• Usuarios pidieron en el foro oficial desactivar el aleatorio por defecto en álbumes y adelantar dentro de una canción sin abrir su pantalla (Spotify Community).\n• Rewound, una app que imitaba el click wheel con háptica, superó 170,000 descargas en cerca de una semana; Apple la retiró en 2019 (iMore, iCulture).",
        images: {
          overview: [
            caseImage("spotify-modo-clasico", "02-antes.webp", 4890, 2748, {
              alt: "Recreación del flujo actual de Spotify en cinco pantallas: biblioteca, álbum, Play con mini reproductor, Now Playing y arrastrar la barra de progreso",
              caption:
                "Recreación del flujo actual. No es una captura de la app y el flujo está por verificar.",
            }),
          ],
          process: [
            caseImage("spotify-modo-clasico", "04-lofi-direcciones.webp", 3980, 2680, {
              alt: "Wireframes en grises de las direcciones A Réplica del iPod, B Barra háptica y C Anillo más vista de álbum, con la C marcada como elegida",
            }),
            caseImage("spotify-modo-clasico", "03-user-flow.webp", 4080, 3272, {
              alt: "Flujo de usuario de la dirección C y mapa de ticks hápticos por acción",
            }),
          ],
          solution: [
            caseImage("spotify-modo-clasico", "06-hifi-entrada-y-navegar.webp", 2806, 2232, {
              alt: "Pantallas hi-fi: página del álbum con el botón Modo Clásico, navegar pistas con el anillo verde y pista 7 reproduciendo",
              caption: "Los nombres y datos de las pantallas son de ejemplo.",
            }),
            caseImage("spotify-modo-clasico", "07-hifi-scrubbing.webp", 2806, 2232, {
              alt: "Pantallas hi-fi de scrubbing: modo pistas, giro rápido en 3:12 y giro lento en 2:30 con el anillo blanco",
            }),
            caseImage("spotify-modo-clasico", "08-hifi-cierre-y-salida.webp", 1924, 2232, {
              alt: "Pantallas hi-fi de cierre: fin del álbum con duración total y reproductor normal al salir",
            }),
            caseImage("spotify-modo-clasico", "05-design-system.webp", 3360, 10676, {
              alt: "Design system de Spotify Modo Clásico: colores, tipografía, espaciado, radios, anillo táctil, componentes, contraste y referencias",
            }),
            caseImage("spotify-modo-clasico", "09-hifi-estados.webp", 5452, 2232, {
              alt: "Estados y casos borde: sencillo de una pista, más de 30 pistas, pista no disponible, Free sin tiempo on-demand, sin conexión y sin motor háptico",
            }),
          ],
        },
        proceso: {
          research:
            "Los referentes resuelven el control fino con un giro y un pulso físico; Spotify, con una barra que se arrastra mirando.\n• Apple Watch (Digital Crown): la velocidad del giro marca la del cambio y cada elemento da un tick háptico (Apple HIG).\n• Rewound (2019, retirada): click wheel en pantalla con ticks hápticos; el gesto circular funciona en un teléfono táctil.\n• Spotify (actual): barra lineal en Now Playing. Es lo que hay que complementar, no reemplazar.\n\nHipótesis a validar en el test:\n1. El control fino necesita un tope que se sienta; sin pulso, la barra obliga a mirar.\n2. Escuchar un álbum es una decisión: quien la toma quiere orden de pistas y sin recomendaciones mezcladas.\n3. La nostalgia abre la puerta; la utilidad retiene.\n\nBenchmark por verificar con capturas actuales.",
          restricciones:
            "Respetar la identidad visual de Spotify; tomar el principio de interacción del iPod, no su marca ni su diseño; usar las APIs de háptica nativas; el modo es opcional y no reemplaza el reproductor actual.",
          iteraciones:
            "Tres direcciones en wireframes lo-fi; se eligió la C.\n• A · Réplica del iPod: fiel pero lenta; buscar un álbum con menús anidados cuesta más que hoy, y roza la imagen de marca de Apple.\n• B · Barra háptica: barata de construir, pero sigue exigiendo mirar y no resuelve navegar pistas.\n• C · Anillo + vista de álbum: portada y pistas arriba, anillo táctil abajo con dos modos (navegar y hacer scrubbing). Elegida: un solo gesto para todo y el álbum sigue visible.",
          decisiones:
            "• Dos modos, un gesto: el mismo giro navega o adelanta; el modo activo se nombra en pantalla y cambia el color del anillo.\n• La velocidad del giro manda: lento = precisión de 1 s; rápido = saltos de 30 s.\n• Háptica clara, no zumbido: ticks cortos para lo frecuente y uno fuerte solo para minutos y cambio de pista.",
          validacion:
            "Plan, aún no realizado: test moderado con 5 usuarios que escuchen álbumes completos cada semana, en persona con el prototipo en un teléfono real para sentir la háptica. Resultados: pendientes.\n\nTareas: poner un álbum desde el inicio e ir a la pista 7, regresar al minuto 2:30 (también sin mirar) y salir del modo. Se mediría éxito, precisión contra 2:30, tiempo, errores y confianza (1 a 5), contra la app actual.",
        },
        solucionFinal:
          "Modo Clásico es un reproductor opcional dentro de Spotify: portada y pistas arriba, un anillo táctil abajo, y el álbum siempre en orden.\n\n1. Entrada: botón \"Modo Clásico\" junto a Play; abre el álbum en orden, sin aleatorio ni recomendaciones.\n2. Navegar pistas: girar el anillo mueve la selección, un tick por pista; tocar el centro reproduce.\n3. Scrubbing: mantener el centro cambia a modo tiempo; un tick cada 5 s y un pulso más fuerte cada minuto.\n4. Fin del álbum: duración total y opciones para repetir, ver el siguiente del artista o salir.",
        resultado:
          "Concepto sin lanzar. Todavía no hay resultados: el test de usabilidad está planeado, no realizado.",
        aprendizaje:
          "• La nostalgia es un buen gancho, pero el caso se sostiene por una necesidad concreta: control fino sin mirar.\n• La háptica es diseño de interacción: hay que especificar intensidad y frecuencia como se especifica un color.\n• Siguiente: correr el test en teléfono real y ajustar la densidad de ticks según los errores.",
      },
      {
        slug: "bbva-transferencias-seguras",
        title: "BBVA Transferencias Seguras",
        subtitle: "Una confirmación centrada en quién recibe el dinero",
        concept: true,
        image: "/projects/bbva-transferencias-seguras/01-cover-v2.webp",
        imageAlt:
          "Portada del caso BBVA Transferencias Seguras sobre fondo azul: \"Un SPEI ya depositado no se cancela, y al enviar no hay una señal clara de a quién le llega\", con dos iPhones de la confirmación y la etiqueta Concept project, no afiliado a BBVA",
        homeTeaser:
          "Rediseño especulativo del envío de transferencias SPEI en la app BBVA México.",
        contexto:
          "Rediseño especulativo del envío de transferencias SPEI en la app BBVA México. Concept sprint de 2 semanas. Supuesto técnico: que el banco pueda obtener el nombre del titular de la CLABE destino antes de enviar (por verificar con BBVA).",
        problema:
          "Una transferencia SPEI ya depositada no se puede cancelar, y el fraude es la principal causa de quejas contra bancos. Al enviar, el cliente no tiene una señal clara de a quién le llega el dinero: la app debe ayudar a detectar el error o el fraude antes de enviar, no después.\n\nEnviar a una cuenta nueva hoy (por verificar): Inicio → Transferir → nuevo destinatario → CLABE → nombre y concepto → monto → confirmar con biometría o Token. La confirmación repite lo que el usuario escribió; no dice quién es el titular real ni si ya le enviaste antes. Pendiente: confirmar si hoy muestra el nombre del titular tras capturar la CLABE.\n\nEvidencia pública:\n• Según Banxico, un pago SPEI solo se cancela antes de depositarse; después depende de que el receptor acepte devolverlo (El Imparcial).\n• Enero a mayo de 2026: 35,762 reclamaciones por posible fraude ante CONDUSEF (+18.95% anual); en banca múltiple, 54% de las reclamaciones fueron por fraude y BBVA está entre las cuatro con más quejas (El CEO).\n• Desde octubre de 2025 el MTU permite límites distintos para cuentas nuevas: el sistema ya distingue \"nuevo\" de \"conocido\", pero el usuario no lo ve al enviar (Xataka México).",
        images: {
          overview: [
            caseImage("bbva-transferencias-seguras", "02-antes.webp", 6814, 2596, {
              alt: "Recreación aproximada del flujo actual en siete pantallas: inicio, transferir, CLABE, nombre y concepto, monto, confirmar y biometría",
              caption:
                "Recreación aproximada del flujo actual. No es una captura de la app y falta confirmar si hoy muestra el nombre del titular.",
            }),
          ],
          process: [
            caseImage("bbva-transferencias-seguras", "04-lofi-direcciones.webp", 3980, 2628, {
              alt: "Wireframes en grises de las direcciones A Aviso universal, B Espera obligatoria y C Tarjeta de destinatario más alerta graduada, con la C marcada como elegida",
            }),
            caseImage("bbva-transferencias-seguras", "03-user-flow.webp", 4496, 1720, {
              alt: "Flujo de usuario de la dirección C con sus ramas por nivel de alerta",
            }),
          ],
          solution: [
            caseImage("bbva-transferencias-seguras", "07-hifi-captura-y-coincidencia.webp", 2806, 2240, {
              alt: "Pantallas hi-fi de captura: CLABE, aparece el titular y el nombre no coincide",
              caption: "Los nombres y montos son datos de ejemplo.",
            }),
            caseImage("bbva-transferencias-seguras", "06-hifi-tres-niveles.webp", 2806, 2240, {
              alt: "Pantallas hi-fi de los tres niveles: contacto conocido sin alerta, cuenta nueva con franja ámbar e intervención",
            }),
            caseImage("bbva-transferencias-seguras", "08-hifi-autorizar-y-resultado.webp", 2806, 2240, {
              alt: "Pantallas hi-fi de autorización: cuenta nueva sin señal de riesgo, Face ID y transferencia enviada",
            }),
            caseImage("bbva-transferencias-seguras", "09-hifi-detenerse.webp", 1924, 2240, {
              alt: "Pantallas hi-fi de detenerse: intervención con cancelar como acción principal y transferencia cancelada",
            }),
            caseImage("bbva-transferencias-seguras", "05-design-system.webp", 3360, 9700, {
              alt: "Design system de BBVA Transferencias Seguras: colores, tipografía, espaciado, radios, tarjeta de destinatario, componentes, contraste y referencias",
            }),
            caseImage("bbva-transferencias-seguras", "10-hifi-estados.webp", 7216, 2240, {
              alt: "Estados y casos borde: coincide, coincidencia parcial, no coincide, no se pudo verificar, empresa, contacto sin envíos, arriba del MTU y sin conexión",
            }),
          ],
        },
        proceso: {
          research:
            "Los referentes del Reino Unido validan el nombre del destinatario contra la cuenta real y adaptan la advertencia al riesgo; una confirmación genérica no basta.\n• NatWest: Confirmation of Payee con cuatro estados de coincidencia, cada uno con una acción.\n• Wise: verifica el nombre al dar de alta al destinatario, no al final del flujo.\n• Revolut: advertencia en todo destinatario nuevo y preguntas si el pago parece riesgoso; un caso ante el ombudsman británico muestra su límite: el cliente mintió guiado por el estafador.\n• En México ya hay infraestructura para obtener el titular de una CLABE (Fintoc Docs).\n\nHipótesis a validar en el test:\n1. El usuario confía en lo que él mismo escribió; necesita un dato que venga del banco.\n2. \"Nuevo\" es la señal de riesgo más simple: \"nunca le has enviado a esta cuenta\".\n3. El estafador guía las respuestas: la alerta debe nombrar el guion típico, no solo preguntar.\n\nBenchmark por verificar con capturas actuales.",
          restricciones:
            "Respetar la identidad visual de BBVA; no agregar pasos a envíos a contactos frecuentes; compatible con las guías de Banxico.",
          iteraciones:
            "Tres direcciones en wireframes lo-fi; se eligió la C.\n• A · Aviso universal: aparece siempre, así que el usuario aprende a cerrarlo sin leer.\n• B · Espera obligatoria: protege, pero frena pagos legítimos urgentes y no explica el porqué.\n• C · Tarjeta de destinatario + alerta graduada: la confirmación se centra en quién recibe y el nivel de alerta depende de si la cuenta es nueva, si el nombre coincide y del monto. Elegida: sin fricción para contactos conocidos, fricción clara cuando hay riesgo.",
          decisiones:
            "• El nombre lo dice el banco, no el usuario: el titular aparece como dato verificado.\n• Tres niveles: contacto conocido sin alerta; cuenta nueva con franja informativa; nueva + señal de riesgo con pantalla de intervención.\n• Nombrar el guion, no el miedo: \"BBVA nunca te pedirá mover tu dinero a una cuenta segura\" (frase propuesta, por verificar con la política oficial).",
          validacion:
            "Plan, aún no realizado: test moderado con 5 clientes de BBVA, por videollamada con el prototipo. Resultados: pendientes.\n\nTareas: enviar a un contacto conocido (sin fricción de más), enviar a una CLABE nueva de otro titular (¿lo detecta?), reaccionar ante un escenario simulado de llamada fraudulenta y decir quién recibirá el dinero. Se mediría detección de error, freno ante el fraude, fricción en conocidos y confianza (1 a 5). La tarea del fraude es un escenario simulado y se avisa al participante al terminar.",
        },
        solucionFinal:
          "La confirmación deja de ser un resumen de lo capturado y se vuelve una tarjeta de quién recibe, con alerta proporcional al riesgo.\n\n1. CLABE: al completar los 18 dígitos aparecen el banco y el titular, antes del monto.\n2. Coincidencia de nombre: si lo que escribiste difiere del titular, se pregunta si es a quien quieres enviar.\n3. Tarjeta de destinatario: titular, banco, últimos 4 dígitos e historial (\"Último envío: 12 oct · $1,500\" o \"Nunca le has enviado\").\n4. Alerta de cuenta nueva: franja ámbar con la pregunta \"¿Alguien te está pidiendo esta transferencia por teléfono o mensaje?\".\n5. Intervención: si responde que sí o el monto supera su límite para cuentas nuevas, guion típico de fraude y \"Cancelar y llamar a BBVA\" como acción principal.",
        resultado:
          "Concepto sin lanzar. Todavía no hay resultados: el test de usabilidad está planeado, no realizado.",
        aprendizaje:
          "• En pagos irreversibles, el diseño vale más antes del botón \"Enviar\" que después.\n• La fricción funciona si es proporcional: un aviso que sale siempre deja de leerse.\n• El concepto depende de un dato (titular de la CLABE) que el banco debe poder obtener: es el primer riesgo a validar.\n• Siguiente: correr el test y alinear el flujo con las guías de Banxico de diciembre de 2026.",
      },
      {
        slug: "banorte-estado-de-cuenta",
        title: "Banorte Estado de Cuenta",
        subtitle: "Una pantalla para decidir cuánto pagar de tu tarjeta",
        concept: true,
        image: "/projects/banorte-estado-de-cuenta/01-cover-v2.webp",
        imageAlt:
          "Portada del caso Banorte Estado de Cuenta sobre fondo rojo: \"Tres montos sin explicar. Ves cuánto debes, pero no cuánto te conviene pagar\", con un iPhone inclinado con las opciones de pago y la etiqueta Concept project, no afiliado a Banorte",
        homeTeaser:
          "Rediseño especulativo de cómo un cliente de Banorte móvil entiende su estado de cuenta de tarjeta de crédito y decide cuánto pagar.",
        contexto:
          "Rediseño especulativo de cómo un cliente de Banorte móvil entiende su estado de cuenta de tarjeta de crédito y decide cuánto pagar. Concept sprint de 2 semanas.",
        problema:
          "El estado de cuenta muestra tres montos (pago mínimo, pago para no generar intereses, saldo total) sin decir qué pasa con cada uno. El cliente ve cuánto debe, pero no cuánto le conviene pagar ni cuánto le cuesta pagar menos.\n\nHoy (por verificar en la app): Inicio → tarjeta de crédito → \"Detalle de mi tarjeta\" → Estado de cuenta en PDF para ver mínimo y pago sin intereses → regresar a Pagar y escribir el monto. La comparación y su costo las hace el usuario de memoria. La propuesta junta en una pantalla lo que hoy está repartido entre el detalle, el PDF y el formulario de pago.\n\nEvidencia pública:\n• En Banorte, 48.0% de las tarjetas no se pagan completas y concentran 70.9% del saldo; su tasa efectiva promedio es 38.0% (Banxico, dic 2025).\n• En el sistema, 24.4% de quienes no pagan completo pagó exactamente el mínimo y 4.5% ni eso (Banxico).\n• El folleto de Banorte advierte que pagar solo el mínimo aumenta el tiempo y el costo de la deuda, pero esa advertencia vive en un PDF, no al momento de pagar.",
        images: {
          overview: [
            caseImage("banorte-estado-de-cuenta", "02-antes.webp", 3928, 2752, {
              alt: "Recreación aproximada del flujo actual en cuatro pantallas: inicio, detalle de la tarjeta, estado de cuenta en PDF y pagar",
              caption:
                "Recreación aproximada basada en capturas de 2020 y 2021. No es una captura de la app ni está confirmado que así se vea hoy.",
            }),
          ],
          process: [
            caseImage("banorte-estado-de-cuenta", "04-lofi-direcciones.webp", 3980, 2672, {
              alt: "Wireframes en grises de las direcciones A Glosario, B Slider y C Tarjetas de opción, con la C marcada como elegida",
            }),
            caseImage("banorte-estado-de-cuenta", "03-user-flow.webp", 3536, 1600, {
              alt: "Flujo de usuario de la dirección C: resumen, cuánto pago, opciones, confirmación y sugerencia de domiciliar",
            }),
          ],
          solution: [
            caseImage("banorte-estado-de-cuenta", "06-hifi-decision.webp", 2806, 2244, {
              alt: "Pantallas hi-fi: resumen de tarjeta con la fecha límite, tres opciones comparables y pago mínimo con su costo al lado",
              caption: "Los nombres y montos son datos de ejemplo.",
            }),
            caseImage("banorte-estado-de-cuenta", "07-hifi-desglose-y-otro-monto.webp", 1948, 2244, {
              alt: "Pantallas hi-fi: desglose de por qué el pago sin intereses no es el saldo total y otro monto con teclado numérico",
            }),
            caseImage("banorte-estado-de-cuenta", "08-hifi-confirmacion.webp", 2806, 2244, {
              alt: "Pantallas hi-fi: confirmación sin intereses, confirmación que repite el costo estimado y comprobante con sugerencia de domiciliar",
            }),
            caseImage("banorte-estado-de-cuenta", "05-design-system.webp", 3360, 9434, {
              alt: "Design system de Banorte Estado de Cuenta: colores, tipografía, espaciado, radios, tarjeta de opción, componentes, contraste y referencias",
            }),
            caseImage("banorte-estado-de-cuenta", "09-hifi-estados.webp", 7216, 2244, {
              alt: "Estados y casos borde: saldo en cero, ya cubierto, pago parcial, fecha límite hoy, fecha vencida, saldo a favor, corte en proceso y sin conexión",
            }),
          ],
        },
        proceso: {
          research:
            "Los referentes muestran el costo de pagar menos en el momento de pagar; en México ese dato suele quedarse en el PDF.\n• Apple Card: al elegir un pago único muestra los intereses estimados de ese monto, con aviso de que es estimado.\n• Nu México: el pago mínimo aparece justo debajo del saldo total; la tasa vive en el perfil.\n• BBVA México: permite domiciliar el pago para no generar intereses, un siguiente paso natural después de pagar.\n\nHipótesis a validar en el test:\n1. \"Pago para no generar intereses\" describe una regla, no un resultado; \"Pagar sin intereses\" podría leerse mejor.\n2. El mínimo se elige por ser el primero o el más chico; sin su costo al lado parece la opción segura.\n3. La fecha límite pesa más que la de corte: el usuario piensa en \"cuántos días me quedan\".\n\nBenchmark por verificar con capturas actuales.",
          restricciones:
            "Respetar la identidad visual de Banorte; usar solo datos que ya existen en el estado de cuenta; montos y fechas oficiales sin redondear; intereses siempre como estimación, nunca como monto final.",
          iteraciones:
            "Tres direcciones en wireframes lo-fi; se eligió la C.\n• A · Glosario: explica, pero no ayuda a decidir; el costo sigue sin calcularse.\n• B · Slider: potente, pero sin anclas claras y difícil con lector de pantalla y montos exactos.\n• C · Tarjetas de opción: tres opciones apiladas (sin intereses, mínimo, total) con costo y resultado, y \"Otro monto\" al final. Elegida: anclas claras y comparación directa; el slider queda como \"Otro monto\".",
          decisiones:
            "• Nombres por resultado: \"Pagar sin intereses\" como etiqueta, con el término oficial debajo.\n• El costo vive junto al monto, en la misma fila.\n• Recomendar sin esconder: el mínimo sigue visible y elegible, con su consecuencia al lado.",
          validacion:
            "Plan, aún no realizado: test moderado con 5 clientes con tarjeta Banorte, por videollamada con el prototipo. Resultados: pendientes.\n\nTareas: decidir cuánto pagar con $3,000 disponibles, decir cuántos días quedan para pagar sin cargos, estimar el costo de pagar solo el mínimo y explicar por qué el pago sin intereses es menor que el saldo total. Se mediría comprensión de montos, exactitud del costo, tiempo y confianza (1 a 5), contra la app actual.",
        },
        solucionFinal:
          "El detalle de la tarjeta abre con una sola pregunta, \"¿Cuánto pago este mes?\", y tres respuestas con su consecuencia.\n\n1. Resumen de tarjeta: fecha límite como cuenta regresiva (\"Faltan 6 días\") y el pago sin intereses como monto principal.\n2. ¿Cuánto pago?: Pagar sin intereses (recomendado), Pago mínimo y Saldo total, más \"Otro monto\"; cada una dice qué pasa (\"$0 de intereses\" o \"≈ $X de intereses el próximo mes\").\n3. Desglose: por qué el pago sin intereses no es el saldo total.\n4. Confirmación: si eligió menos que el pago sin intereses, el costo estimado se repite antes de confirmar.\n5. Después de pagar: comprobante y sugerencia de domiciliar.\n\nEjemplo ilustrativo del prototipo: con tasa de 69% anual (Banorte Básica), un mes de interés ordinario equivale a ≈ 5.75% + IVA del saldo no pagado; es un cálculo simplificado.",
        resultado:
          "Concepto sin lanzar. Todavía no hay resultados: el test de usabilidad está planeado, no realizado.",
        aprendizaje:
          "• En crédito, el diseño no cambia la tasa, pero sí cuándo el usuario ve su costo: mover la advertencia del PDF al botón de pagar.\n• Recomendar no es esconder: el mínimo sigue disponible, solo con su consecuencia al lado.\n• Siguiente: correr el test y validar el texto \"Pagar sin intereses\" con legal.",
      },
      {
        slug: "mercado-pago-metas-de-ahorro",
        title: "Mercado Pago Metas de Ahorro",
        subtitle: "Apartados que dicen cuánto falta y cuándo llegas a tu meta",
        concept: true,
        image: "/projects/mercado-pago-metas-de-ahorro/01-cover-v2.webp",
        imageAlt:
          "Portada del caso Metas de ahorro sobre fondo amarillo: \"Ves un porcentaje, pero no cuánto te falta ni cuándo llegas a tu meta\", con cuatro iPhones de las metas y la etiqueta Concept project, no afiliado a Mercado Pago",
        images: {
          overview: [
            caseImage("mercado-pago-metas-de-ahorro", "02-antes.webp", 3908, 2356, {
              alt: "Recreación del flujo actual, por verificar en la app: Inicio, dinero y rendimientos, Apartados, Apartado y condiciones en otra pantalla",
              caption: "Recreación del flujo actual. No es una captura de la app y el flujo está por verificar.",
            }),
          ],
          process: [
            caseImage("mercado-pago-metas-de-ahorro", "04-lofi-direcciones.webp", 3120, 2628, {
              alt: "Tres direcciones en grises: A calculadora, B barra de progreso y C meta con fecha más regla visible, la elegida",
            }),
            caseImage("mercado-pago-metas-de-ahorro", "03-user-flow.webp", 3896, 1860, {
              alt: "User flow de la dirección C: resumen, detalle de la tasa, Apartado como meta y crear meta, con estados",
            }),
          ],
          solution: [
            caseImage("mercado-pago-metas-de-ahorro", "06-hifi-resumen.webp", 8000, 1737, {
              alt: "Resumen de ahorro en sus seis estados: regla pendiente, cumplida, aviso de cierre, primer uso, sin conexión y cambio de tasa",
              caption: "Los nombres y montos son datos de ejemplo.",
            }),
            caseImage("mercado-pago-metas-de-ahorro", "07-hifi-detalle-tasa.webp", 2820, 1892, {
              alt: "Detalle de la tasa: dentro del tope y saldo arriba del tope",
            }),
            caseImage("mercado-pago-metas-de-ahorro", "09-hifi-crear-meta.webp", 7242, 1892, {
              alt: "Crear meta: vacío, con sugerencia por quincena, fecha que ya pasó, sin fecha y meta creada",
            }),
            caseImage("mercado-pago-metas-de-ahorro", "10-hifi-meta-alcanzada.webp", 1346, 1892, {
              alt: "Meta alcanzada con lo ganado y opciones de retirar, seguir ahorrando o nueva meta",
            }),
            caseImage("mercado-pago-metas-de-ahorro", "05-design-system.webp", 3360, 8184, {
              alt: "Design system: colores, tipografía Inter, espaciado, radios, sombras, contraste WCAG y componentes",
            }),
            caseImage("mercado-pago-metas-de-ahorro", "08-hifi-apartado-meta.webp", 8000, 1485, {
              alt: "Apartado como meta en sus estados: a tiempo, atrasado, sin fecha, vencida, retiro que retrasa la fecha, después del retiro y sin conexión",
            }),
          ],
        },
        homeTeaser:
          "Rediseño especulativo de cómo un usuario de Mercado Pago México ve sus Apartados y lo que rinde su dinero.",
        contexto:
          "Rediseño especulativo de cómo un usuario de Mercado Pago México ve sus Apartados y lo que rinde su dinero. Concept sprint de 2 semanas.",
        problema:
          "Mercado Pago anuncia su tasa en porcentaje, pero el usuario ahorra en pesos y en fechas. La tasa cambia por saldo, tipo de dinero, depósitos del mes y membresía, y las reglas cambian cada pocos meses. El usuario ve un porcentaje, pero no cuánto le falta ni cuándo llega a su meta.\n\nHoy (por verificar en la app): Inicio → dinero y rendimientos → Apartados → un Apartado → ver saldo. La tasa y sus condiciones viven en otra pantalla o en términos y condiciones. Pendiente: confirmar la tasa vigente al publicar.\n\nEvidencia pública:\n• Los usuarios ya usan los Apartados como metas: 545,000 para vacaciones en los primeros meses de 2026, cerca del doble que el año anterior (Descubre).\n• Oct 2025: 7% base y hasta 13% con depósitos de $3,000 al mes, solo sobre los primeros $25,000 (Xataka). Jun 2026: el máximo baja a 12% (Xataka). Sep 2026: 15% para miembros Meli+ (DPL News).\n• Las reglas cambiaron al menos 3 veces en 12 meses.",
        proceso: {
          research:
            "En México se ahorra mucho, pero poco en productos que rinden: 66.4% tuvo algún ahorro en 2024 (INEGI, ENIF), pero según CONDUSEF 41% ahorra en casa, 20% en tandas y solo 3% invierte.\n\nBenchmark:\n• Monzo (Pots): meta bajo lo ahorrado, barra de progreso y aviso al llegar. Se toma la meta como dato principal.\n• Nu México (Cajitas): hasta 10 con nombre, pero tasa y GAT en la letra pequeña. Se toma el nombre por meta y mostrar el GAT junto a la tasa.\n• Mercado Pago (actual): Apartados con nombre; tasa en %, reglas en noticias y T&C (por verificar). Es lo que hay que traducir a pesos y fechas.\n\nHipótesis a validar en el test:\n1. Se piensa en pesos y fechas, no en porcentajes: \"me faltan $4,000 para Cancún\".\n2. Una regla que no se ve no se cumple: sin el avance del depósito mínimo, la sobretasa se pierde sin aviso.\n3. La constancia necesita ritmo: \"$500 por quincena\" motiva más que una barra al 30%.\n\nBenchmark por verificar con capturas actuales.",
          restricciones:
            "Respetar la identidad visual de Mercado Pago; no cambiar tasas ni reglas, solo explicarlas; proyecciones siempre marcadas como estimadas.",
          iteraciones:
            "Tres direcciones en wireframes lo-fi; se eligió la C.\n• A · Calculadora: útil pero desconectada; el usuario tiene que ir a buscarla y no ve su dinero real.\n• B · Barra de progreso: motiva, pero no dice cuándo llegas ni qué pasa con la tasa del mes.\n• C · Meta con fecha + regla visible: cada Apartado muestra lo que falta, fecha estimada y ganancia en pesos; arriba, el estado de la tasa del mes. Elegida: responde cuánto rinde, cuánto falta y cuándo sin salir de la pantalla.",
          decisiones:
            "• Pesos primero, porcentaje después: \"Ganaste $84 este mes\" arriba y \"12% anual\" como dato secundario.\n• Proyección honesta: la fecha estimada dice \"si sigues depositando $500 por quincena\" y se marca como estimación con la tasa de hoy.\n• La regla de la tasa con avance: el depósito mínimo del mes se muestra como progreso, con aviso 5 días antes del cierre.",
          validacion:
            "Plan, aún no realizado: test moderado con 5 usuarios que usen o hayan usado Apartados, por videollamada con el prototipo. Resultados: pendientes.\n\nTareas: decir cuánto ganaron este mes, qué hacer para mantener la tasa más alta, crear una meta de $8,000 para abril y estimar cuándo llegan a la meta de un Apartado (y qué pasa si retiran $1,000). Se mediría éxito, comprensión de la tasa, tiempo y confianza en la proyección (1 a 5), contra la app actual.",
        },
        solucionFinal:
          "Los Apartados se vuelven metas: cada uno dice cuánto falta, cuándo llegas y cuánto llevas ganado en pesos.\n\n1. Resumen de ahorro: total, ganancia del mes en pesos y un chip \"Tasa del mes\" con su estado (\"Te faltan $1,200 de depósitos para mantener 12%\").\n2. Detalle de la tasa: la regla en una frase y el tope de saldo que rinde.\n3. Apartado como meta: lo ahorrado sobre la meta, lo que falta, fecha estimada y ganancia acumulada.\n4. Crear meta: nombre, monto y fecha; la app sugiere un depósito por quincena.\n5. Meta alcanzada: lo ganado y opciones para retirar, seguir ahorrando o crear otra.",
        resultado:
          "Concepto sin lanzar. Todavía no hay resultados: el test de usabilidad está planeado, no realizado.",
        aprendizaje:
          "• En ahorro, traducir vale más que agregar: la tasa ya existe, falta decirla en pesos y fechas.\n• Una proyección solo ayuda si dice de qué depende; sin esa condición se lee como promesa.\n• Siguiente: correr el test y ajustar el texto de la regla según lo que los usuarios no entiendan.",
      },
      {
        slug: "wise-usd-a-mxn",
        title: "Wise USD a MXN",
        subtitle: "Convertir dólares a pesos sabiendo si conviene hoy o esperar",
        concept: true,
        image: "/projects/wise-usd-a-mxn/01-cover-v2.webp",
        imageAlt:
          "Portada del caso Convertir a MXN sobre fondo verde: \"¿Es buena la tasa de hoy? ¿Cuántos pesos me llegan? Hoy no se ve en un solo lugar\", con un iPhone que muestra el neto en pesos y la etiqueta Concept project, no afiliado a Wise",
        images: {
          overview: [
            caseImage("wise-usd-a-mxn", "02-antes.webp", 3895, 1891, {
              alt: "Recreación del flujo actual, por verificar en la app: inicio, saldo USD, convertir, conversor con gráfica, alertas en Perfil y Auto Conversions",
              caption: "Recreación del flujo actual. No es una captura de la app y el flujo está por verificar.",
            }),
          ],
          process: [
            caseImage("wise-usd-a-mxn", "04-lofi-direcciones.webp", 3120, 2648, {
              alt: "Tres direcciones en grises: A dashboard de mercado, B alerta proactiva y C convertir con contexto, la elegida",
            }),
            caseImage("wise-usd-a-mxn", "03-user-flow.webp", 3882, 1538, {
              alt: "User flow de la dirección C: convertir hoy o esperar a una tasa, con órdenes, avisos y estados",
            }),
          ],
          solution: [
            caseImage("wise-usd-a-mxn", "06-hifi-convertir.webp", 5752, 1868, {
              alt: "Convertir con contexto: saldo USD, neto en pesos y rango de 30 días, sin historial y sin conexión",
              caption: "Los nombres y montos son datos de ejemplo.",
            }),
            caseImage("wise-usd-a-mxn", "07-hifi-desglose.webp", 3702, 1868, {
              alt: "Desglose neto: USD enviados, comisión, tasa aplicada y pesos que llegan, con tasa garantizada y conversión lista",
            }),
            caseImage("wise-usd-a-mxn", "08-hifi-esperar.webp", 6618, 1868, {
              alt: "Esperar a una tasa: tasas sugeridas con su neto, switch entre orden y aviso, reglas visibles, límite de 15 y domingo",
            }),
            caseImage("wise-usd-a-mxn", "09-hifi-ordenes.webp", 5434, 1868, {
              alt: "Mis órdenes: orden pendiente con distancia a la tasa, confirmar cancelación, orden cancelada, cancelada por saldo y aviso creado",
            }),
            caseImage("wise-usd-a-mxn", "05-design-system.webp", 3360, 8160, {
              alt: "Design system: colores, Barlow Semi Condensed e Inter, espaciado, radios, sombras, contraste WCAG y componentes",
            }),
          ],
        },
        homeTeaser:
          "Rediseño especulativo de cómo un freelancer en México decide cuándo convertir sus dólares a pesos.",
        contexto:
          "Rediseño especulativo de cómo un freelancer en México que cobra en USD a clientes de EE. UU. decide cuándo convertir sus dólares a pesos. Concept sprint de 2 semanas. Supuesto clave: el usuario ya tiene saldo USD en Wise; hoy la disponibilidad para residentes en México es limitada (por verificar).",
        problema:
          "Wise ya tiene alertas de tasa y conversiones automáticas, pero viven en pantallas separadas: tasa, historial, alerta y comisión están en lugares distintos y el usuario tiene que armarlos solo. Antes de convertir, no ve en un solo lugar si la tasa de hoy es buena ni cuántos pesos netos recibirá.\n\nHoy (por verificar en la app): Inicio → saldo USD → Convertir → MXN → ver tasa y comisión. Para comparar con días anteriores hay que salir al conversor con gráfica; las alertas se configuran en Perfil → Notificaciones; convertir sola a una tasa es otro flujo (Auto Conversions).\n\nEvidencia pública:\n• Auto Conversions convierte al llegar a una tasa objetivo; máximo 15 pendientes, no se editan y no corren en domingo (Wise Help).\n• El tipo de cambio FIX pasó de 18.8148 (29 oct 2026) a 18.6285 (4 nov 2026): en 2,000 USD son 372.60 MXN de diferencia en una semana (Banxico).\n• Usuarios reportan que residentes en México no pueden recibir en una cuenta Wise local (Reddit r/ExpatFinance). Verificar disponibilidad actual.",
        proceso: {
          research:
            "Los referentes dan contexto (rango reciente) o automatizan (tasa objetivo); ninguno de los revisados junta ambos con el neto en pesos.\n• Conversor web de Wise: resumen de máximo y mínimo de 30 y 90 días. Se toma como contexto rápido dentro del flujo de conversión.\n• Revolut Auto-Exchange: conversión a tasa objetivo; se toma explicar en lenguaje claro cuándo y por qué una orden no se ejecuta.\n• DolarApp: compara pesos netos finales. Se toma mostrar el resultado neto, no solo la tasa.\n\nHipótesis a validar en el test:\n1. El usuario piensa en pesos netos, no en tasa: \"me llegan 37,200\" pesa más que \"18.63\".\n2. \"¿Es buen día?\" necesita una referencia: sin el rango reciente, la tasa de hoy no dice nada.\n3. Esperar es una decisión: fijar una tasa objetivo debe estar a un toque de la conversión.\n\nBenchmark por verificar con capturas actuales.",
          restricciones:
            "Respetar la identidad visual de Wise; usar solo funciones que ya existen (alertas, Auto Conversions, conversión); mostrar siempre comisión y tasa antes de confirmar. Fuera de alcance: asesoría fiscal y predicción del tipo de cambio.",
          iteraciones:
            "Tres direcciones en wireframes lo-fi; se eligió la C.\n• A · Dashboard de mercado: poderoso, pero parece app de trading y aleja al usuario de convertir.\n• B · Alerta proactiva: útil como entrada, pero sin contexto al tocarla; empuja a convertir sin comparar.\n• C · Convertir con contexto: la pantalla de conversión suma una barra de rango de 30 días, el neto en MXN y \"Esperar a una tasa\". Elegida: reusa el flujo que ya existe; convertir y esperar quedan al mismo nivel.",
          decisiones:
            "• Pesos netos arriba, tasa abajo: el usuario decide por lo que le llega.\n• Rango, no predicción: la barra muestra hechos (máx/mín de 30 días); nada de \"buen momento\" ni recomendaciones de mercado.\n• Alerta y conversión automática en un mismo paso: un switch elige \"solo avísame\" o \"convierte por mí\".",
          validacion:
            "Plan, aún no realizado: test moderado con 5 freelancers en México que cobran en USD, por videollamada con el prototipo. Resultados: pendientes.\n\nTareas: decidir si convertir 2,000 USD hoy y por qué, decir cuántos pesos llegarían, dejar lista una conversión automática a una mejor tasa y cancelarla para crear solo un aviso. Se mediría éxito, precisión del neto, tiempo y confianza (1 a 5), contra la app actual.",
        },
        solucionFinal:
          "\"Convertir a MXN\" se vuelve una pantalla de decisión: tasa de hoy en contexto, pesos netos y dos salidas claras, convertir ahora o esperar.\n\n1. Convertir con contexto: monto en USD, tasa actual y una barra con mínimo y máximo de 30 días que marca dónde está hoy.\n2. Desglose neto: USD enviados, comisión, tasa aplicada y pesos que llegan.\n3. Esperar a una tasa: sugiere tasas objetivo y muestra el neto en cada una; crea una Auto Conversion o solo una alerta.\n4. Mis órdenes: conversiones pendientes con su distancia a la tasa actual y acción de cancelar.",
        resultado:
          "Concepto sin lanzar. Todavía no hay resultados: el test de usabilidad está planeado, no realizado.",
        aprendizaje:
          "• En fintech, a veces el producto ya tiene las funciones; el trabajo es juntarlas en el momento de decidir.\n• Mostrar contexto sin dar consejo financiero es una línea de diseño: rango sí, predicción no.\n• Siguiente: confirmar la disponibilidad de saldo USD para residentes en México y correr el test.",
      },
      {
        slug: "aeromexico-reacomodo",
        title: "Aeroméxico Reacomodo",
        subtitle: "Reacomodo en un toque cuando tu vuelo se retrasa o se cancela",
        concept: true,
        image: "/projects/aeromexico-reacomodo/01-cover-v2.webp",
        imageAlt:
          "Portada del caso Reacomodo en un toque sobre fondo azul: \"Cuando un vuelo se cae, haces fila o llamas, y no sabes qué te toca por ley\", con dos iPhones del reacomodo y la etiqueta Concept project, no afiliado a Aeroméxico",
        images: {
          overview: [
            caseImage("aeromexico-reacomodo", "02-antes.webp", 3943, 2237, {
              alt: "Recreación del flujo actual, por verificar en la app: notificación, Mis Viajes, estatus sin opciones, canales de ayuda y compensación por separado",
              caption: "Recreación del flujo actual. No es una captura de la app y el flujo está por verificar.",
            }),
          ],
          process: [
            caseImage("aeromexico-reacomodo", "04-lofi-direcciones.webp", 3120, 2628, {
              alt: "Tres direcciones en grises: A buscador, B automático y C sugerido más alternativas, la elegida",
            }),
            caseImage("aeromexico-reacomodo", "03-user-flow.webp", 3882, 1538, {
              alt: "User flow de la dirección C con ramas de demora y cancelación, derechos, otras opciones y estados",
            }),
          ],
          solution: [
            caseImage("aeromexico-reacomodo", "06-hifi-reacomodo.webp", 7210, 1880, {
              alt: "Notificación y reacomodo: cancelación, demora de 3 horas, demora corta y conexión perdida",
              caption: "Los nombres y montos son datos de ejemplo.",
            }),
            caseImage("aeromexico-reacomodo", "07-hifi-derechos.webp", 5160, 1880, {
              alt: "Tus derechos según causa y horas: cancelación, demora de 2 a 4 horas, más de 4 horas y clima",
            }),
            caseImage("aeromexico-reacomodo", "08-hifi-otras-opciones.webp", 3960, 1880, {
              alt: "Otras opciones: viajar otro día o pedir reembolso con el monto estimado antes de confirmar",
            }),
            caseImage("aeromexico-reacomodo", "09-hifi-confirmacion.webp", 3110, 1880, {
              alt: "Confirmación con pase nuevo y vale de alimentos, y cambio a otro vuelo",
            }),
            caseImage("aeromexico-reacomodo", "05-design-system.webp", 3360, 7540, {
              alt: "Design system: paleta oscura, Schibsted Grotesk, espaciado, radios, sombras, contraste WCAG y componentes",
            }),
            caseImage("aeromexico-reacomodo", "10-hifi-casos-borde.webp", 5160, 1880, {
              alt: "Casos borde: sin vuelos hoy, varios pasajeros, boleto de agencia y sin conexión",
            }),
          ],
        },
        homeTeaser:
          "Rediseño especulativo de cómo la app de Aeroméxico acompaña a un pasajero cuando su vuelo se retrasa o se cancela.",
        contexto:
          "Rediseño especulativo de cómo la app de Aeroméxico acompaña a un pasajero cuando su vuelo se retrasa o se cancela, con una notificación push como punto de entrada. Concept sprint de 2 semanas.",
        problema:
          "Aeroméxico es de las aerolíneas más puntuales del mundo, pero cuando un vuelo sí se cae, la app avisa y no resuelve: el reacomodo pasa a la fila o al teléfono, y el pasajero no sabe qué le corresponde por ley.\n\nHoy (según fuentes públicas, por verificar en la app): notificación → Mis viajes / Estatus → sin opciones de vuelo visibles → call center, bot de WhatsApp o fila en mostrador → negociar el nuevo vuelo → buscar aparte qué compensación aplica.\n\nEvidencia pública:\n• En 2025 Aeroméxico operó cerca de 190 mil vuelos con 91.88% de puntualidad en salidas (Cirium); aun así, cerca de 8% no fueron puntuales.\n• Las funciones publicadas de la app son estatus, notificaciones, check-in y Mis viajes; no se menciona reacomodo (El Imparcial).\n• En octubre de 2025 se reportaron al menos 53 vuelos cancelados y 315 demorados en dos días por una disputa con pilotos (Mexico News Daily).",
        proceso: {
          research:
            "Los referentes de EE. UU. y Canadá ya resuelven el reacomodo dentro de la app; ninguno explica derechos de forma tan clara como lo exige la ley mexicana.\n• United: con demora de 60+ min, la home muestra si ya te reacomodaron, otros vuelos, vales y agente por chat. Se toma que toda la solución viva en la home mientras dura.\n• Delta: \"Trip Support\" con una opción sugerida y \"ver otras opciones\", sin esconder la búsqueda.\n• Air Canada: reacomodo por defecto que el pasajero puede aceptar o cambiar.\n\nHipótesis a validar en el test:\n1. La primera pregunta es \"¿a qué hora llego?\", no \"¿por qué?\": ordenar por hora de llegada.\n2. Los derechos dependen de horas y causa: si la app calcula qué aplica, el pasajero no tiene que buscarlo.\n3. Aceptar debe ser reversible: un \"puedes cambiarlo después\" baja el miedo a quedarse con un mal vuelo.\n\nBenchmark por verificar con capturas actuales.",
          restricciones:
            "Respetar la identidad visual de Aeroméxico; solo ofrecer vuelos con asiento disponible; textos de derechos alineados al art. 47 Bis y revisados por legal.",
          iteraciones:
            "Tres direcciones en wireframes lo-fi; se eligió la C.\n• A · Buscador: familiar, pero traslada todo el trabajo al pasajero en un momento de estrés.\n• B · Automático: más rápido, pero si el vuelo no le sirve vuelve a la fila y no muestra derechos.\n• C · Sugerido + alternativas: tarjeta con el mejor vuelo ya apartado, 2 o 3 alternativas y los derechos a un lado. Elegida: un toque si la sugerencia sirve, control si no, y derechos visibles antes de decidir.",
          decisiones:
            "• Hora de llegada como dato principal; el número de vuelo va en segundo plano.\n• Derechos antes del botón, no después: se decide entre reacomodo y reembolso sabiendo qué se gana o se pierde.\n• Causa dicha en lenguaje claro (\"por clima\" o \"por operación de Aeroméxico\"), porque de eso depende la compensación.",
          validacion:
            "Plan, aún no realizado: test moderado con 5 pasajeros que hayan volado en el último año, por videollamada con el prototipo. Resultados: pendientes.\n\nTareas: encontrar un vuelo para hoy a partir del aviso, decir qué les corresponde por la cancelación, pedir un reembolso y cambiar un vuelo ya aceptado. Se mediría éxito, tiempo desde el aviso hasta confirmar, comprensión de derechos, errores y confianza (1 a 5).",
        },
        solucionFinal:
          "Mientras dura la interrupción, la home de la app se vuelve un centro de reacomodo: qué pasó, tu mejor opción y lo que te corresponde.\n\n1. Notificación: \"Tu vuelo AM 123 se canceló. Te apartamos el AM 127, llegas 19:40.\" Abre directo a la tarjeta de reacomodo.\n2. Reacomodo: vuelo sugerido con hora de llegada y asiento, 2 o 3 alternativas ordenadas por llegada y \"Aceptar este vuelo\".\n3. Tus derechos: panel según causa y horas (alimentos, descuento mínimo de 7.5% con 2 a 4 h de demora, o reembolso / vuelo con indemnización mínima de 25% si se cancela o pasa de 4 h), citando el art. 47 Bis.\n4. Otras opciones: viajar otro día o pedir reembolso, con el monto estimado antes de confirmar.\n5. Confirmación: pase nuevo, vales digitales si aplican y \"Puedes cambiarlo hasta 2 h antes\" (regla a definir con negocio).",
        resultado:
          "Concepto sin lanzar. Todavía no hay resultados: el test de usabilidad está planeado, no realizado.",
        aprendizaje:
          "• En aerolíneas, la puntualidad alta no elimina el problema: el cerca de 8% que falla define la experiencia de quien lo vive.\n• Explicar derechos no es solo legal; es lo que permite decidir entre reacomodo y reembolso sin miedo.\n• Siguiente: correr el test y validar los textos de derechos con un abogado.",
      },
      {
        slug: "volaris-precio-total",
        title: "Volaris Precio Total",
        subtitle: "El precio de tu vuelo con lo que realmente llevas, desde los resultados",
        concept: true,
        image: "/projects/volaris-precio-total/01-cover-v2.webp",
        imageAlt:
          "Portada del caso ¿Qué llevas? sobre fondo guinda: \"El precio que comparas al buscar no es el que pagas\", con varios iPhones inclinados con los resultados y la etiqueta Concept project, no afiliado a Volaris",
        images: {
          overview: [
            caseImage("volaris-precio-total", "02-antes.webp", 3895, 1876, {
              alt: "Recreación del flujo actual, por verificar: buscar, resultados con tarifa base, escoger tarifa, pasajeros, extras y pago con el total que sube",
              caption: "Recreación del flujo actual. No es una captura de la app y el flujo está por verificar.",
            }),
          ],
          process: [
            caseImage("volaris-precio-total", "04-lofi-direcciones.webp", 3120, 3780, {
              alt: "Tres direcciones en grises: A tabla de tarifas, B aviso en checkout y C configurador, la elegida, con la tabla de reglas de equipaje a tarifa sugerida",
            }),
            caseImage("volaris-precio-total", "03-user-flow.webp", 3882, 1288, {
              alt: "User flow de la dirección C: buscar, qué llevas, resultados con total, desglose y checkout, con estados",
            }),
          ],
          solution: [
            caseImage("volaris-precio-total", "06-hifi-que-llevas.webp", 7484, 1872, {
              alt: "Pantalla ¿Qué llevas? con medidas de cada opción, maleta de mano, 25 kg, cuenta como mano y decidir después",
              caption: "Los nombres y montos son datos de ejemplo.",
            }),
            caseImage("volaris-precio-total", "07-hifi-resultados.webp", 3110, 1872, {
              alt: "Resultados con el total por persona según el equipaje, con la tarifa base como texto secundario",
            }),
            caseImage("volaris-precio-total", "08-hifi-desglose.webp", 2836, 1872, {
              alt: "Desglose al tocar un vuelo: tarifa sugerida y alternativa Plus con la diferencia en pesos",
            }),
            caseImage("volaris-precio-total", "09-hifi-checkout.webp", 2244, 1872, {
              alt: "Checkout sin sorpresas y aviso cuando el precio cambia",
            }),
            caseImage("volaris-precio-total", "05-design-system.webp", 3360, 6848, {
              alt: "Design system: colores, Nunito Sans, espaciado, radios, sombras, contraste WCAG y componentes",
            }),
            caseImage("volaris-precio-total", "10-hifi-casos-borde.webp", 4568, 1872, {
              alt: "Casos borde: varios pasajeros, viaje redondo por tramo, internacional y asientos agotados",
            }),
          ],
        },
        homeTeaser:
          "Rediseño especulativo del inicio de la compra de vuelo en volaris.com y la app.",
        contexto:
          "Rediseño especulativo del inicio de la compra de vuelo en volaris.com y la app. Concept sprint de 2 semanas. Fuera de alcance: la postura legal sobre el cobro de equipaje y la lógica de pricing.",
        problema:
          "La tarifa Zero, la más visible, solo incluye un objeto personal. Maleta de mano, documentada y asiento se suman después, y el precio real aparece hasta el checkout o en el aeropuerto: con maleta de mano, la tarifa puede costar el doble.\n\nHoy (por verificar con capturas): Buscar → resultados con precio de tarifa base → elegir tarifa → pasajeros → extras (equipaje, asiento) → pago. El equipaje se decide en el paso 5, después de elegir vuelo. Pendiente: confirmar nombres de tarifas (la página oficial dice Flex, Expansión reporta Básica).\n\nEvidencia pública:\n• En una simulación CDMX–Monterrey, Zero costó $945 y Plus $1,943: $998 más para llevar maleta de mano (Expansión, mayo 2026).\n• La Ley de Aviación Civil (art. 47 Bis) permite dos piezas en cabina de 55 × 40 × 25 cm y 10 kg en total; en 2021 Profeco colocó sellos de suspensión a Volaris por cobrarla (Expansión).\n• La recomendación de Profeco: comparar el costo total, no la tarifa base (El Imparcial).\n\nEl debate legal no se resuelve con diseño; lo que sí se puede diseñar es que el precio total sea visible antes de elegir.",
        proceso: {
          research:
            "Los referentes preguntan qué llevas antes de mostrar precios; Volaris lo pregunta después de que ya elegiste vuelo.\n• Google Flights: filtro \"Bags\" que recalcula los resultados con esos cargos. Se toma declarar el equipaje una vez.\n• KAYAK: calculadora de cargos arriba de los resultados. Se toma poner el configurador arriba, no en un paso posterior.\n• Viva Aerobus: paquetes con la diferencia en pesos frente a la base. Se toma mostrar el delta en pesos.\n\nHipótesis a validar en el test:\n1. El usuario sabe qué lleva antes de buscar: es un dato de entrada, no un extra que descubre al final.\n2. Compara vuelos por el número grande; si es la tarifa Zero, compara precios que no va a pagar.\n3. La sorpresa se paga dos veces: en dinero y en confianza hacia la marca.\n\nBenchmark por verificar con capturas actuales.",
          restricciones:
            "Respetar las tarifas Zero, Flex y Plus tal como existen; no cambiar precios ni políticas; identidad visual de Volaris intacta.",
          iteraciones:
            "Tres direcciones en wireframes lo-fi; se eligió la C porque es la única que cambia el número que el usuario compara.\n• A · Tabla de tarifas: ya existe en esencia; sigue comparando vuelos por precio base.\n• B · Aviso en checkout: llega tarde; el vuelo ya se eligió con el precio equivocado.\n• C · Configurador \"¿Qué llevas?\": fila de íconos arriba de resultados (objeto personal, mano, documentada, asiento). Elegida: recalcula el total de todos los vuelos y elige la tarifa más barata que cubre lo que llevas.",
          decisiones:
            "• Total arriba, base abajo: el número grande es el precio con tu equipaje.\n• El sistema elige la tarifa, el usuario elige qué lleva.\n• Medidas visibles, no escondidas en políticas: cada ícono muestra cm y kg para saber si la maleta cuenta como mano.",
          validacion:
            "Plan, aún no realizado: test moderado con 5 personas que hayan volado en aerolínea de bajo costo en el último año, por videollamada con el prototipo. Resultados: pendientes.\n\nTareas: buscar el vuelo más barato viajando con maleta de mano, decir cuánto creen que pagarán en total, agregar una maleta documentada de 25 kg y decidir si una maleta de 60 cm cuenta como mano. Se mediría éxito, precisión del total, tarifa correcta y confianza en el precio (1 a 5), contra el flujo actual.",
        },
        solucionFinal:
          "La búsqueda empieza preguntando qué llevas; desde ahí, cada precio en pantalla es el que vas a pagar.\n\n1. ¿Qué llevas?: cuatro íconos con medidas (objeto personal, mano de 55 × 40 × 25 cm y 10 kg, documentada de 15 o 25 kg, y asiento).\n2. Resultados con total: cada vuelo muestra el precio final por persona con lo elegido (\"Incluye tu maleta de mano\").\n3. Desglose al tocar: tarifa sugerida + extras, con la alternativa (\"Plus te cuesta $X más e incluye cambios\").\n4. Checkout sin sorpresas: el total no cambia; si cambia, se explica en una línea antes de pagar.",
        resultado:
          "Concepto sin lanzar. Todavía no hay resultados: el test de usabilidad está planeado, no realizado.",
        aprendizaje:
          "• En aerolíneas de bajo costo, el problema no es el cobro sino el momento en que se muestra.\n• Cambiar el orden del flujo puede valer más que rediseñar pantallas: preguntar primero, cobrar después.\n• Siguiente: correr el test y validar la regla de tarifa sugerida con más rutas.",
      },
      {
        slug: "viva-viaje-en-grupo",
        title: "Viva Aerobus Viaje en Grupo",
        subtitle: "Asientos y check-in para toda la familia en un solo flujo",
        concept: true,
        image: "/projects/viva-viaje-en-grupo/01-cover-v2.webp",
        imageAlt:
          "Portada del caso Asientos y check-in para toda la familia sobre fondo verde: \"Hoy se decide persona por persona, sin ver quién queda con quién ni cuánto cuesta sentarse juntos\", con iPhones del mapa de grupo y la etiqueta Concept project, no afiliado a Viva Aerobus",
        images: {
          overview: [
            caseImage("viva-viaje-en-grupo", "02-antes.webp", 3895, 1879, {
              alt: "Recreación del flujo estimado, por verificar en la app: Mis viajes, reservación, asientos por pasajero, pago y check-in por pasajero",
              caption: "Recreación del flujo actual. No es una captura de la app y el flujo está por verificar.",
            }),
          ],
          process: [
            caseImage("viva-viaje-en-grupo", "04-lofi-direcciones.webp", 3120, 2588, {
              alt: "Tres direcciones en grises: A paso por pasajero, B botón Sentarnos juntos y C mapa de grupo, la elegida",
            }),
            caseImage("viva-viaje-en-grupo", "03-user-flow.webp", 3882, 1288, {
              alt: "User flow de la dirección C con 2 adultos, 1 niña y 1 bebé, y sus estados",
            }),
          ],
          solution: [
            caseImage("viva-viaje-en-grupo", "06-hifi-grupo-y-mapa.webp", 8000, 1858, {
              alt: "Tu grupo y mapa de grupo: todos juntos, menores con su adulto, mover una ficha, menor sin adulto y modo lista",
              caption: "Los nombres y montos son datos de ejemplo.",
            }),
            caseImage("viva-viaje-en-grupo", "07-hifi-comparar.webp", 1378, 1876, {
              alt: "Comparar opciones: todos juntos, menores con su adulto y asignación en check-in con aviso de riesgo",
            }),
            caseImage("viva-viaje-en-grupo", "08-hifi-check-in.webp", 3702, 1876, {
              alt: "Check-in del grupo, tarifas mixtas y menor con un tercero",
            }),
            caseImage("viva-viaje-en-grupo", "09-hifi-pases.webp", 2518, 1876, {
              alt: "Pases de abordar y resumen de quién va dónde para compartir",
            }),
            caseImage("viva-viaje-en-grupo", "05-design-system.webp", 3360, 10264, {
              alt: "Design system: colores, Albert Sans, espaciado, radios, sombras, íconos, componentes y contraste WCAG",
            }),
            caseImage("viva-viaje-en-grupo", "10-hifi-casos-borde.webp", 5434, 1876, {
              alt: "Casos borde: sin bloque contiguo, cambio de avión, más bebés que adultos, bebé en fila de salida y sin conexión",
            }),
          ],
        },
        homeTeaser:
          "Rediseño especulativo de cómo una familia o grupo elige asientos y hace check-in en la app de Viva.",
        contexto:
          "Rediseño especulativo de cómo una familia o grupo elige asientos y hace check-in en la app de Viva. Concept sprint de 2 semanas. Fuera de alcance: lógica de precios y reglas migratorias.",
        problema:
          "Una reservación con varios pasajeros (incluidos menores) obliga a decidir asientos y check-in persona por persona, sin ver claramente quién queda junto a quién ni cuánto cuesta sentarse juntos. Viva vende la app para viajar \"con tu familia y amigos\", pero asientos y check-in siguen pensados para un pasajero a la vez.\n\nHoy (estimado, por verificar en la app): Mis viajes → Asientos → elegir pasajero y asiento, repetido por cada pasajero → pagar → Check-in con los datos de cada pasajero → pases. Con 4 pasajeros, esos pasos se repiten 4 veces. Hipótesis a verificar con capturas: el costo de sentarse juntos solo aparece sumado al final y el mapa no muestra qué menor queda junto a qué adulto.\n\nEvidencia pública:\n• El check-in abre según la tarifa (Zero 4 horas antes, Light 8 horas, Smart 10 días): una familia con tarifas mixtas no puede hacer check-in de todos al mismo tiempo (Viva Blog).\n• Los bebés viajan en brazos, no en fila de emergencia, y solo uno por adulto (Viva Blog); un menor con un tercero requiere carta responsiva.\n• No se encontró una página pública de Viva que garantice asientos contiguos gratis para menores. Verificar en términos y condiciones.",
        proceso: {
          research:
            "Los referentes tratan \"sentar a la familia junta\" como una regla del sistema; en Viva hoy parece una compra individual.\n• United: menores de 12 se sientan junto a un adulto sin costo y el mapa marca los asientos gratis. Se toma marcar en el mapa qué asientos sientan junta a la familia y cuánto cuestan.\n• Ryanair: separa lo obligatorio (menor + adulto) de lo opcional (todo el grupo). Se toma decir el precio de cada uno.\n• Southwest: \"intenta\" sentarlos juntos, y en 2026 separó a un niño de 2 años. Antiejemplo: hay que mostrar el resultado antes del vuelo y avisar si hay riesgo.\n\nHipótesis a validar en el test:\n1. La familia piensa en \"quién va con quién\", no en números de asiento.\n2. El miedo es quedar separados, no el precio: si el costo se ve claro y temprano, se decide sin ansiedad.\n3. El check-in es un trámite del grupo: quien reserva quiere hacerlo una vez por todos.\n\nBenchmark por verificar con capturas actuales.",
          restricciones:
            "Respetar la identidad visual de Viva; no cambiar tarifas ni precios de asientos, solo mostrarlos mejor; cumplir reglas de seguridad (bebés en brazos fuera de fila de emergencia, un bebé por adulto).",
          iteraciones:
            "Tres direcciones en wireframes lo-fi; se eligió la C.\n• A · Paso por pasajero: igual que hoy con mejor UI; el usuario sigue armando el grupo de memoria.\n• B · Botón \"Sentarnos juntos\": rápido, pero quita el control y no se ve qué menor va con qué adulto.\n• C · Mapa de grupo: todos los pasajeros como fichas arrastrables sobre el mapa, con un bloque sugerido y su precio. Elegida: sugiere por defecto, deja ajustar y el total cambia en vivo.",
          decisiones:
            "• Personas antes que números: la ficha muestra nombre y edad (\"Ana, 7\"); el asiento va en segundo nivel.\n• Precio total, no por asiento: \"Sentarse juntos: $X para 4\".\n• El sistema protege al menor: no deja confirmar si queda sin adulto contiguo; explica por qué y propone el asiento libre más cercano.",
          validacion:
            "Plan, aún no realizado: test moderado con 5 personas que hayan volado con menores en el último año, por videollamada con el prototipo (reservación de prueba: 2 adultos, una niña de 7 años y un bebé). Resultados: pendientes.\n\nTareas: sentar a la niña junto a un adulto diciendo cuánto pagarán, sentar a los cuatro juntos, hacer check-in de toda la familia y mostrar a la pareja quién va en cada asiento. Se mediría éxito, precisión del precio, tiempo, errores (menor sin adulto contiguo) y confianza (1 a 5).",
        },
        solucionFinal:
          "\"Asientos\" y \"Check-in\" se vuelven un solo flujo de grupo: un mapa donde cada pasajero es una ficha, con el precio de sentarse juntos visible desde el inicio.\n\n1. Tu grupo: pasajeros con edad, tipo (adulto, niño, bebé en brazos) y tarifa; aquí se emparejan menores con su adulto.\n2. Mapa de grupo: bloque contiguo sugerido; arrastras una ficha para cambiar y el total se actualiza en vivo.\n3. Comparar opciones: \"Todos juntos\", \"Menores con su adulto\" y \"Asignación en check-in\" (con aviso de riesgo), cada una con su precio.\n4. Check-in del grupo: una sola confirmación por todos, con datos de menores precargados.\n5. Pases de abordar: carrusel con todos los pases y un resumen de \"quién va dónde\" para compartir.",
        resultado:
          "Concepto sin lanzar. Todavía no hay resultados: el test de usabilidad está planeado, no realizado.",
        aprendizaje:
          "• En aerolíneas de bajo costo, la transparencia del precio puede ser la mejora de UX, sin cambiar el modelo de negocio.\n• Diseñar para el grupo cambia la unidad del flujo: de \"pasajero\" a \"reservación\".\n• Siguiente: capturar el flujo actual y correr el test.",
      },
      {
        slug: "delta-modo-conexion",
        title: "Delta Modo Conexión",
        subtitle: "Un veredicto claro para saber si llegas a tu siguiente vuelo",
        concept: true,
        image: "/projects/delta-modo-conexion/01-cover-v2.webp",
        imageAlt:
          "Portada del caso ¿Llego o no llego? sobre fondo azul marino: \"Puerta, hora, mapa y alertas sueltas para responder una sola pregunta\", con las tarjetas A tiempo, Justo y En riesgo y un iPhone, y la etiqueta Concept project, no afiliado a Delta Air Lines",
        images: {
          overview: [
            caseImage("delta-modo-conexion", "02-antes.webp", 3895, 1859, {
              alt: "Recreación del flujo actual, por verificar en la app: notificación de puerta, tarjeta del vuelo, mapa, cálculo a mano, migración fuera del cálculo y reprogramación",
              caption: "Recreación del flujo actual. No es una captura de la app y el flujo está por verificar.",
            }),
          ],
          process: [
            caseImage("delta-modo-conexion", "04-lofi-direcciones.webp", 3120, 2640, {
              alt: "Tres direcciones en grises: A tarjeta en Today, B mapa primero y C modo conexión, la elegida",
            }),
            caseImage("delta-modo-conexion", "03-user-flow.webp", 3896, 1446, {
              alt: "User flow de la dirección C con los estados A tiempo, Justo y En riesgo, ruta, plan B y casos borde",
            }),
          ],
          solution: [
            caseImage("delta-modo-conexion", "06-hifi-veredicto.webp", 5160, 1888, {
              alt: "Live Activity y veredicto en sus tres estados: A tiempo, Justo y En riesgo",
              caption: "Los nombres y montos son datos de ejemplo.",
            }),
            caseImage("delta-modo-conexion", "07-hifi-ruta.webp", 3702, 1888, {
              alt: "Tu ruta: doméstica, con migración y mapa existente",
            }),
            caseImage("delta-modo-conexion", "08-hifi-plan-b.webp", 3110, 1888, {
              alt: "Plan B: opciones, ya reprogramado y vuelo confirmado",
            }),
            caseImage("delta-modo-conexion", "05-design-system.webp", 3360, 9048, {
              alt: "Design system: colores, Source Sans 3, espaciado, radios, sombras, componentes, íconos y contraste WCAG",
            }),
            caseImage("delta-modo-conexion", "09-hifi-estados.webp", 8000, 1880, {
              alt: "Estados: cambio de puerta, salida retrasada, boletos separados, sin señal, conexión larga y asistencia de movilidad",
            }),
          ],
        },
        homeTeaser:
          "Rediseño especulativo de cómo la app Fly Delta acompaña a un pasajero durante una escala corta.",
        contexto:
          "Rediseño especulativo de cómo la app Fly Delta acompaña a un pasajero durante una escala corta, con Live Activity en iOS. Concept sprint de 2 semanas. Fuera de alcance: decidir si se espera un vuelo y los tiempos reales de migración.",
        problema:
          "Al aterrizar con poco tiempo, el pasajero junta datos sueltos (puerta, hora de abordaje, mapa, notificaciones) para responder una sola pregunta: ¿llego o no llego? Fly Delta ya tiene las piezas (puerta, estatus, mapas, alertas, reprogramación), pero repartidas; nadie las junta en un veredicto.\n\nHoy (por verificar en la app): notificación de puerta → pestaña Today → tarjeta del siguiente vuelo → tocar la puerta para abrir el mapa → calcular a mano la hora de cierre menos el tiempo caminando. Si hay migración o seguridad, la app no lo suma (por verificar).\n\nEvidencia pública:\n• La información de la puerta de conexión se ofrece \"via maps\"; no se menciona tiempo restante ni riesgo (Delta Pro).\n• La versión 7.0 agrega Live Activities con aviso de cierre de puertas, solo en iOS (Delta News).\n• En 2025, 76.4% de los vuelos de aerolíneas reportantes en EE. UU. llegaron a tiempo (DOT); Delta Network, 79.3%.",
        proceso: {
          research:
            "Los referentes tratan la conexión como una tarea con cuenta regresiva y pasos; Fly Delta la trata como un vuelo más en la lista.\n• United: página de conexión con cuenta regresiva y pasos a la puerta; si no llegas, reprogramas gratis ahí mismo. Se toma una sola pantalla para la conexión con la salida de emergencia incluida.\n• Flighty: Connection Assistant con pasos y tiempos típicos de cada uno (seguridad, maletas, terminal). Se toma desglosar el tiempo en pasos, no solo en distancia.\n• Fly Delta (actual): los datos ya existen; falta unirlos en un veredicto.\n\nHipótesis a validar en el test:\n1. La pregunta es binaria: \"¿llego?\" va antes que la puerta exacta.\n2. El tiempo real no es la distancia: migración, seguridad y maletas pesan más que caminar; ocultarlos da falsa calma.\n3. El plan B baja el estrés aunque no se use.\n\nBenchmark por verificar con capturas actuales.",
          restricciones:
            "Respetar la identidad visual de Delta; usar solo datos que la app ya muestra (puerta, estatus, mapas, reprogramación); funcionar con señal débil en el avión y la pasarela.",
          iteraciones:
            "Tres direcciones en wireframes lo-fi; se eligió la C.\n• A · Tarjeta en Today: bajo costo, pero compite con el pase de abordar y las ofertas; el riesgo se pierde.\n• B · Mapa primero: útil para caminar, pero no muestra migración ni plan B, y tarda en cargar con señal débil.\n• C · Modo conexión: pantalla dedicada que se activa al aterrizar, con veredicto, pasos y plan B, y un espejo en Live Activity. Elegida: veredicto en la pantalla bloqueada y detalle a un toque, con datos que Delta ya tiene.",
          decisiones:
            "• Veredicto antes que datos: el estado va arriba; la puerta y el mapa, debajo.\n• Cerrar puertas, no despegar: la cuenta usa el cierre de puertas, que es el límite real.\n• Pasos obligatorios visibles: si hay migración o seguridad, se suman al cálculo y se muestran como pasos.",
          validacion:
            "Plan, aún no realizado: test moderado con 5 personas que hayan hecho una conexión en Delta en el último año, por videollamada con el prototipo. Resultados: pendientes.\n\nTareas: decir si llegan al siguiente vuelo y cómo lo saben, qué falta hacer antes de la puerta en un vuelo internacional, qué hacer si cambian la puerta y elegir una alternativa cuando están en riesgo. Se mediría éxito, tiempo hasta un \"llego / no llego\" correcto, comprensión de pasos, errores y tranquilidad (1 a 5).",
        },
        solucionFinal:
          "\"Tu conexión\" se activa al aterrizar: un veredicto, la cuenta regresiva al cierre de puertas, los pasos que faltan y un plan B listo.\n\n1. Veredicto: estado grande (A tiempo / Justo / En riesgo), minutos hasta el cierre de puertas y puerta de llegada → puerta de salida.\n2. Tu ruta: pasos en orden con su tiempo (bajar del avión, migración, maletas, seguridad, caminar o tren); \"Ver en mapa\" abre el mapa existente.\n3. Plan B: si el estado es En riesgo, siguiente vuelo disponible, si Delta ya te reprogramó y acciones para aceptar, elegir otro o hablar con un agente.\n4. Live Activity: veredicto, minutos y puerta en pantalla bloqueada y Dynamic Island; en Android, notificación persistente.",
        resultado:
          "Concepto sin lanzar. Todavía no hay resultados: el test de usabilidad está planeado, no realizado.",
        aprendizaje:
          "• En aerolíneas, el diseño de alto valor está en momentos de estrés, no en la reserva: juntar datos existentes vale más que agregar funciones.\n• Un veredicto honesto (incluido \"En riesgo\") genera más confianza que ocultar la mala noticia hasta el final.\n• Siguiente: correr el test y calibrar los umbrales con datos reales de ATL.",
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
