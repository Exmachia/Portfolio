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
        image: "/projects/anagram/01-cover.webp",
        imageAlt:
          "Anagram case cover: the text Website for an architecture studio next to the site's home and its properties page",
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
        image: "/projects/nativa/01-cover.webp",
        imageAlt:
          "Nativa case cover: the text Apartment presale in Colima next to the site's home and its mobile view",
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
        image: "/projects/casas-exclusivas-colima/01-cover.webp",
        imageAlt:
          "Casas Exclusivas Colima case cover: title, problem line and mobile home and sales screens",
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
        image: "/projects/sinagua/01-cover.webp",
        imageAlt:
          "Sinagua case cover: the aquifer map of Mexico and the Valle de León aquifer detail on a dark background",
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
        image: "/projects/nu-wallet/01-cover.webp",
        imageAlt:
          "Nu Wallet case cover: three iPhone screens on a purple background with a Concept project label, not affiliated with Nu",
        homeTeaser:
          "A speculative redesign of how a Nu Mexico customer sees and controls all their cards.",
        contexto:
          "A speculative redesign of how a Nu Mexico customer sees and controls all their cards. A customer can hold several at once: a physical credit card, up to 3 virtual credit cards, and a physical and a virtual debit card.\n\nPlatform: iOS and Android mobile app.\nDuration: 2 weeks (concept sprint).\nTools: Figma, FigJam.\nOut of scope: backend logic and physical card issuance.",
        problema:
          "A customer can hold several cards at once, but there's no place to see them together or to tell which one they use for what. Nu encourages having several cards to organize spending, but the app doesn't offer a view where that organization shows.\n\nCurrent flow to see a virtual card: Home → My cards → choose Debit or Credit → Virtual card → PIN. That's 4 steps to see a single card, repeated for each one.\n\nThe proposal removes the product choice and the PIN for viewing only; security moves to revealing the number.\n\nPublic evidence:\n• Nu allows up to 3 active virtual credit cards at the same time and suggests naming them to organize spending (Nu Blog).\n• It recommends using the virtual card for subscriptions and blocking it without affecting other charges; that requires remembering which service is on which card (Nu Blog).\n• Debit and credit each have their own physical and virtual card, with different numbers (Nu Blog).\n• More than 7 million credit card customers in Mexico (Nu Blog).",
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
            "The references solve \"many cards\" with a single visual surface; Nu splits them by product.\n• Apple Wallet: stacked cards; you tap one and it moves to the front with its transactions. What we took: the \"wallet\" mental model everyone already knows.\n• Revolut: a carousel with physical, virtual and disposable cards; freeze on each card. What we took: quick actions per card, without entering menus.\n• Nu (current): separated by Debit / Credit inside \"My cards\". This is what needs unifying.\n\nInsights (hypotheses to validate in the test):\n1. People think in terms of use, not product. \"The Netflix one\" or \"the online shopping one\" matters more than \"debit\" or \"credit\".\n2. Viewing ≠ revealing. Seeing which cards you have shouldn't ask for a PIN; seeing the full number should.\n3. Blocking is a panic action. It should be one tap from the card, not in a submenu.\n\nBenchmark to verify with current captures of each app.\n\nHow Might We: how might we let a customer see, tell apart and control all their Nu cards in a single gesture?\n\nHypothesis: if we group all the cards in a wallet-style view, named by use and with one-tap actions, customers will find and block the right card in fewer steps and with fewer errors than today.",
          restricciones:
            "Assumed constraints: respect Nu's visual identity; don't add new products, only reorganize existing ones; sensitive data always behind a PIN or biometrics.",
          iteraciones:
            "Three directions as lo-fi wireframes; C was chosen because it's the only one that shows all the cards without hiding the actions.\n• A · List: a vertical list with a thumbnail, name and status for each card. Discarded: clear but cold; it loses the feeling of a \"card\" and looks like a settings menu.\n• B · Carousel: one large card at a time, swipe horizontally. Discarded: pretty, but it hides how many cards you have; with 5+ users get lost.\n• C · Stacked wallet: all stacked with their edge visible; tap one and it rises to the front with its actions. Chosen: you see the total at a glance and the detail in one tap; a familiar mental model.\n\nDeliverables of this phase: lo-fi wireframes of A, B and C, the user flow for C and decision annotations.",
          decisiones:
            "• Name on top, number below. People identify cards by use (\"Streaming\"), so the name leads the hierarchy.\n• View without a PIN, reveal with biometrics. The stack is visible on entry; the full number asks for Face ID / fingerprint.\n• Block with a confirmation that says what breaks. \"Netflix and Spotify will stop being charged\" instead of \"Are you sure?\".\n• Nu identity intact. It uses the brand's purple and typography; the redesign is about structure, not style.",
          validacion:
            "A plan, not yet carried out. Moderated usability test with 5 Nu customers, 15 to 20 minutes each, over video call with the Figma prototype. Results: pending.\n\nTasks:\n1. \"Find the card you use to pay for your subscriptions.\"\n2. \"Block that card. Before confirming, tell me what you think will happen.\"\n3. \"Create a new virtual card for online purchases.\"\n4. \"Copy the number of your virtual debit card.\"\n\nClosing questions:\n• How many Nu cards do you use today, and what is each one for?\n• What was the most confusing thing about this version?\n• From 1 to 5, how easy was it to find the right card?\n\nMetrics to measure:\n• Task success: completed / with help / didn't complete.\n• Time on task 1: seconds until tapping the right card.\n• Errors: taps on the wrong card or action.\n• Perceived ease: 1 to 5 scale at the end.\n\nComparing against the current app with the same tasks 1 and 4 would give the \"before vs. after\".",
        },
        solucionFinal:
          "\"My cards\" becomes a wallet: all the cards stacked, each with a name for its use, and its actions one tap away.\n\nScreens:\n1. Wallet: a stack of cards colored by type (credit, debit, virtual) with the name the user gave them.\n2. Front card: quick actions to view details, block, rename and copy the number.\n3. Recurring charges: a list of subscriptions tied to that card, so you can block knowing what is affected.\n4. Create virtual: a button at the end of the stack; name and use in the same step.\n\nAccessibility:\n• Card type is communicated with text and an icon, not only color.\n• Minimum AA contrast for text on purple cards.\n• 44 × 44 pt touch targets; the stack also navigates as a list with a screen reader.\n\nStates and edge cases: a single card (no stack) · blocked card (gray + lock + text) · physical card on its way · limit of 3 virtual cards reached · offline (cached data, actions disabled).",
        resultado:
          "An unlaunched concept. There are no results yet: the usability test is planned, not carried out.",
        aprendizaje:
          "• In banking, reorganizing is often worth more than adding features: the problem was structural, not about the product.\n• Security and speed don't compete if you separate \"viewing\" from \"revealing\".\n• Next: run the test, adjust the stack based on observed errors and explore recurring-charge alerts per card.",
      },
      {
        slug: "spotify-modo-clasico",
        title: "Spotify Classic Mode",
        subtitle: "A player with a touch ring for listening to full albums",
        concept: true,
        image: "/projects/spotify-modo-clasico/01-cover.webp",
        imageAlt:
          "Spotify Classic Mode case cover: three iPhone screens on a dark background with a Concept project label, not affiliated with Spotify",
        homeTeaser:
          "A speculative redesign of a playback mode for listening to full albums with a circular touch control.",
        contexto:
          "A speculative redesign of a playback mode for listening to full albums with a circular touch control. Classic Mode is an optional player inspired by the iPod click wheel.\n\nPlatform: iOS and Android mobile app.\nDuration: 2 weeks (concept sprint).\nTools: Figma, FigJam.\nOut of scope: licensing, recommendation logic, Free plan limits and external hardware.",
        problema:
          "Spotify's player is designed for skipping between songs while looking at the screen. Listening to a full album, or controlling the music without looking, takes a back seat and has little support.\n\nCurrent flow to listen to an album and go back to a moment in a song (to verify in the app): Library or Search → album → Play → open Now Playing → drag the progress bar. The bar is thin and gives no tactile reference, so you have to look at it to land in the right place.\n\nThe proposal combines navigating and seeking in a single circular control with haptic ticks.\n\nPublic evidence:\n• Until November 2021, an album's main button played it on shuffle. Spotify changed it after Adele's request: \"our stories should be listened to as we intended\" (Gizmodo).\n• On the official forum, iOS, Android and iPad users asked to turn off shuffle by default on albums; staff pointed them to Now Playing (Spotify Community).\n• On mobile, the Free plan has Smart Shuffle always on, which mixes recommendations between tracks (Spotify Support).\n• Since September 2025, Free users can pick songs, but with limited daily time. Spotify reported 696 million monthly users, 433 million of them on Free (TechCrunch).\n• An idea on the official forum asks to seek forward or back within a song without opening its screen (Spotify Community).\n• Rewound, an app that imitated the click wheel with haptics, went past 170,000 downloads in about a week. Apple pulled it in December 2019 (iMore, iCulture).",
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
            "The references solve fine control with a turn and a physical pulse; Spotify solves it with a bar you drag while looking.\n• Apple Watch (Digital Crown): turning the crown navigates lists and adjusts values; it gives haptic ticks when moving a distance or an item (Apple HIG). What we took: the speed of change tied to the speed of the turn; one tick per item.\n• Rewound (2019, pulled): an on-screen click wheel; every turn and tap gives a haptic tick; holding left or right goes back or forward (iCulture). What we took: the circular gesture works on a touch phone.\n• RetroPod: a virtual click wheel for navigation and volume, with adjustable sensitivity; it connects with Spotify and Apple Music (app listing). What we took: configurable sensitivity; haptics are not confirmed, to verify.\n• Spotify (current): a linear progress bar in Now Playing; navigation by taps and lists. This is what needs complementing, not replacing.\n\nInsights (hypotheses to validate in the test):\n1. Fine control needs a stop you can feel. Without a pulse, the bar forces you to look to release on the right second. A Poweramp user asked for exactly that (Poweramp forum).\n2. Listening to an album is a decision, not a default. Whoever chooses it wants track order, to know which track they're on, and no mixed-in recommendations.\n3. Nostalgia opens the door; usefulness retains. Rewound drew downloads for its look, but the mode must hold up on control, not on skin.\n\nBenchmark to verify with current captures of each app.\n\nHow Might We: how might we let someone listen to a full album and control it with a single gesture, without depending on looking at the screen?\n\nHypothesis: if we offer an optional mode with a touch ring, haptic ticks per track and every 5 seconds, and in-order playback, users will reach the right track and moment in fewer steps and with fewer errors than with the progress bar.",
          restricciones:
            "Assumed constraints: respect Spotify's visual identity; don't copy the iPod's brand or design, only the interaction principle; use the native haptics APIs; the mode is optional and doesn't replace the current player.",
          iteraciones:
            "Three directions as lo-fi wireframes; C was chosen because it's the only one that gives touch control without hiding the album.\n• A · iPod replica: a screen on top with text menus, the wheel below; everything is navigated with the wheel. Discarded: faithful but slow; finding an album through nested menus costs more than today, and it also brushes against Apple's brand image.\n• B · Haptic bar: keep the current player and add ticks to the progress bar. Discarded: cheap to build, but it doesn't solve navigating tracks or album listening; it still requires looking.\n• C · Ring + album view: cover and track list on top; a touch ring below with two modes, navigating tracks and seeking. Chosen: one gesture for everything, the album stays visible and complex navigation stays in the regular app.\n\nDeliverables of this phase: lo-fi wireframes of A, B and C, the user flow for C, a map of haptic ticks per action and decision annotations.",
          decisiones:
            "• Two modes, one gesture. The same turn navigates or seeks; the active mode is named on screen and changes the ring's color.\n• Turn speed rules. Slow turn = 1 s precision; fast turn = 30 s jumps, as the Digital Crown guidance asks.\n• Clear haptics, not a buzz. Short ticks for frequent events and a strong one only for minutes and track changes, following Android's guidelines.\n• A principle, not a copy. A ring with Spotify's typography and green; no \"MENU\" buttons or iPod shape, to avoid Rewound's problem.",
          validacion:
            "A plan, not yet carried out. Moderated usability test with 5 Spotify users who listen to full albums at least once a week. 20-minute in-person sessions, with the Figma prototype on a real phone to feel the haptics. Results: pending.\n\nTasks:\n1. \"Play this album from the first song and go to track 7.\"\n2. \"Go back to minute 2:30 of the song that's playing.\"\n3. \"Repeat task 2 without looking at the screen; tell me when you think you've arrived.\"\n4. \"Exit Classic Mode and return to the normal player.\"\n\nClosing questions:\n• When do you listen to a full album, and where is your phone at that moment?\n• What was the most confusing thing about the ring?\n• From 1 to 5, how confident did you feel about where you were without looking?\n\nMetrics to measure:\n• Task success: completed / with help / didn't complete.\n• Accuracy on tasks 2 and 3: seconds off from 2:30.\n• Time on task 1: seconds until track 7 plays.\n• Errors: turns in the wrong mode or to the wrong track.\n• Perceived confidence: 1 to 5 scale at the end.\n\nComparing against the current app with the same tasks 1 and 2 would give the \"before vs. after\".",
        },
        solucionFinal:
          "Classic Mode is an optional player inside Spotify: cover and tracks on top, a touch ring below, and the album always in order.\n\nScreens:\n1. Entry: a \"Classic Mode\" button on the album page, next to Play. It opens the album in order, with no shuffle or recommendations.\n2. Navigate tracks: turning the ring moves the selection in the list; one tick per track. Tapping the center plays.\n3. Seeking: holding the center switches the ring to time mode. A tick every 5 s and a stronger pulse every minute.\n4. End of album: a closing screen with total duration and options: repeat, see the artist's next album or exit.\n\nAccessibility:\n• Every tick has a visual equivalent (track number or large time) and a screen reader announcement.\n• With VoiceOver or TalkBack, the ring behaves as an adjustable control: swiping up or down changes the value.\n• It respects the system setting that turns haptics off; the mode keeps working with visuals only.\n• 44 × 44 pt touch targets at the center and at the four points of the ring.\n\nStates and edge cases: single-track release (ring in time mode only) · album with more than 30 tracks (ticks grouped by disc) · track unavailable in your region (skipped with a notice) · Free plan without on-demand time (a message explaining the limit; rules to verify) · offline (downloaded albums only) · device without a haptic engine.",
        resultado:
          "An unlaunched concept. There are no results yet: the usability test is planned, not carried out.",
        aprendizaje:
          "• Nostalgia is a good hook, but the case stands on a concrete need: fine control without looking.\n• Haptics are interaction design, not decoration: intensity and frequency must be specified the way a color is.\n• Taking the principle of an iconic object rather than its shape avoids brand problems and forces you to justify every decision.\n• Next: run the test on a real phone, adjust tick density based on errors and explore the ring on the lock screen and on watches.",
      },
      {
        slug: "bbva-transferencias-seguras",
        title: "BBVA Secure Transfers",
        subtitle: "A confirmation centered on who receives the money",
        concept: true,
        image: "/projects/bbva-transferencias-seguras/01-cover.webp",
        imageAlt:
          "BBVA Secure Transfers case cover: three iPhone screens on a blue background with a Concept project label, not affiliated with BBVA",
        homeTeaser:
          "A speculative redesign of sending SPEI transfers in the BBVA Mexico app.",
        contexto:
          "A speculative redesign of sending SPEI transfers in the BBVA Mexico app.\n\nPlatform: BBVA Mexico mobile app, iOS and Android.\nDuration: 2 weeks (concept sprint).\nTools: Figma, FigJam.\nTechnical assumption: that the bank can obtain the account holder's name from the destination CLABE before sending (feasibility to verify with BBVA).\nOut of scope: fraud detection models, backend logic, DiMo and CoDi.",
        problema:
          "A SPEI transfer that has already been deposited can't be cancelled, and fraud is the main cause of complaints against banks. When sending, the customer has no clear signal of who is receiving the money. In SPEI a mistake is expensive: the app should help catch the error or the fraud before sending, not after.\n\nCurrent flow to send to a new account (to verify): Home → Transfer → new recipient → enter CLABE → name and concept → amount → confirm with biometrics or mobile Token. The confirmation repeats the data the user typed; there's no signal of who the real account holder is, or whether you've sent to them before.\n\nPending: confirm whether it shows the account holder's name today after the CLABE is entered.\n\nPublic evidence:\n• According to Banxico, a SPEI payment can only be cancelled before it is deposited. If the account is valid, the bank can't take the money back; it depends on the recipient agreeing to return it (El Imparcial).\n• CONDUSEF classifies sending to the wrong account as a \"customer operational error\", with little room for the bank to reverse it (same source).\n• January to May 2026: 35,762 claims for possible fraud before CONDUSEF, +18.95% year over year. In multiple banking, 54% of 63,571 claims were for fraud; BBVA is among the four with the most complaints (El CEO).\n• CONDUSEF reports average losses of 20 to 50 thousand pesos per victim; it includes unrecognized electronic transfers among the types of fraud (Crónica).\n• Since October 2025 the MTU allows different limits for new or third-party accounts: the system already tells \"new\" from \"known\", but the user doesn't see it when sending (Xataka México).\n• Banxico published Circulars 9/2026 and 10/2026 (DOF, June 17, 2026) to standardize the mobile transfer experience; they take effect on December 14, 2026 (DPL News, adn40). Every bank is redesigning this flow right now.",
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
            "The UK references validate the recipient's name against the real account and adapt the warning to the risk; a generic confirmation isn't enough.\n• NatWest: Confirmation of Payee with \"It's a match\", \"close match\" with a suggested name, \"not a match\" or \"unable to check\". What we took: four match states with clear language and one action per state.\n• Wise: verifies the name when creating a new recipient and asks you to review before paying. What we took: validation happens at sign-up, not at the end of the flow.\n• Revolut: a warning on every new recipient; if the payment looks risky, it asks the reason and shows notices depending on the answer. What we took: a graduated alert, with a light notice for what's new and an intervention with questions for what's risky.\n• BBVA Mexico (current, to verify): confirmation with the data the user entered; configurable MTU limits for new accounts. This is what needs to be made visible at the moment of sending.\n\nIn Mexico the infrastructure to get a CLABE's account holder already exists: Fintoc returns the name and RFC after a $0.01 microdeposit (Fintoc Docs). A Revolut case before the British ombudsman shows the limit: the customer lied in the guided questions, coached by the scammer.\n\nInsights (hypotheses to validate in the test):\n1. Users trust what they typed themselves. If the confirmation repeats their input, it doesn't catch the error; it needs a piece of data that comes from the bank.\n2. \"New\" is the simplest risk signal to understand. \"You've never sent to this account\" makes sense without explaining what fraud is.\n3. The scammer guides the answers. The alert must name the typical script (\"someone on the phone asks you to move your money\") and not just ask.\n\nBenchmark to verify with current captures of each app.\n\nHow Might We: how might we let a BBVA customer know for certain who they're sending money to before confirming, without slowing down sends to their usual contacts?\n\nHypothesis: if the confirmation shows the real account holder, the bank and the history with that account, and alerts in a graduated way when the account is new, customers will catch more entry errors and stop more often when faced with a fraud script, without lengthening frequent sends.",
          restricciones:
            "Assumed constraints: respect BBVA's visual identity; don't add steps to sends to frequent contacts; compatible with Banxico's guidelines (Circ. 9/2026).",
          iteraciones:
            "Three directions as lo-fi wireframes; C was chosen because it protects the new account without penalizing the frequent contact.\n• A · Universal notice: a \"Check the details\" modal before every send. Discarded: it always appears, so users learn to close it without reading.\n• B · Mandatory wait: hold every send to a new account for a few minutes. Discarded: it protects, but it slows down urgent legitimate payments and doesn't explain why.\n• C · Recipient card + graduated alert: a confirmation centered on who receives; the alert level depends on whether the account is new, whether the name matches and the amount. Chosen: no friction for known contacts, clear and explained friction when there's risk.\n\nDeliverables of this phase: lo-fi wireframes of A, B and C, the user flow for C with its branches by alert level and decision annotations.",
          decisiones:
            "• The bank says the name, not the user. The account holder appears as verified data, separate from what the user typed.\n• Three levels, not one. Known contact: no alert. New account: an informative strip. New + risk signal: an intervention screen.\n• Name the script, not the fear. \"BBVA will never ask you to move your money to a safe account\" instead of \"Beware of fraud\". The phrase is a proposal; to verify against BBVA's official policy.\n• Cancel is the primary button when there's risk. In the intervention the hierarchy is inverted: stopping is the easy thing.\n• BBVA identity intact. It uses the brand's palette and typography; the change is in structure and content.",
          validacion:
            "A plan, not yet carried out. Moderated usability test with 5 BBVA Mexico customers, 20 minutes each, over video call with the Figma prototype. Results: pending.\n\nTasks:\n1. \"Send $500 to your sister, who is already in your contacts.\" (measures that there's no extra friction)\n2. \"Send $2,000 to this new CLABE to pay rent.\" The CLABE belongs to a different account holder; do they catch it?\n3. \"Someone from 'BBVA' called and asks you to move your money to this account. Do it as you would.\" Observe whether they stop at the intervention.\n4. \"Before confirming, tell me who is going to receive the money and how you know.\"\n\nClosing questions:\n• Have you ever sent money to the wrong account or had someone try to scam you? What happened?\n• Did the alert feel useful or annoying?\n• From 1 to 5, how sure did you feel about who you were sending to?\n\nMetrics to measure:\n• Error detection: participants who stop the send in task 2.\n• Stopping fraud: participants who cancel in task 3.\n• Friction with known contacts: seconds and taps to complete task 1.\n• Understanding: correct answer to task 4.\n• Perceived confidence: 1 to 5 scale at the end.\n\nComparing against the current app with tasks 1 and 2 would give the \"before vs. after\". Task 3 is a simulated scenario; the participant is told at the end.",
        },
        solucionFinal:
          "The confirmation stops being a summary of what was entered and becomes a card about who receives, with an alert proportional to the risk.\n\nScreens:\n1. CLABE entry: when the 18 digits are complete, the bank and the account holder reported by the account appear, before typing the amount.\n2. Name match: if the name you typed differs from the account holder: \"The account holder is María L. Pérez. Is this who you want to send to?\"\n3. Recipient card: account holder, bank, last 4 digits and history: \"Last send: Oct 12 · $1,500\" or \"You've never sent to them\".\n4. New account alert: an amber strip with a question: \"Is someone asking you to make this transfer by phone or message?\"\n5. Intervention: if they answer yes or the amount exceeds their limit for new accounts, the typical fraud script, a primary button \"Cancel and call BBVA\" and continue as a secondary action.\n\nAccessibility:\n• The alert level is communicated with an icon and text, not only amber or red color.\n• Minimum AA contrast on alert strips.\n• The screen reader announces the account holder and the match state first; 44 × 44 pt buttons.\n\nStates and edge cases: name matches · partial match (abbreviations, accents) · no match · couldn't verify (bank doesn't respond) · business account · first send to an already saved contact · amount above the MTU · offline.",
        resultado:
          "An unlaunched concept. There are no results yet: the usability test is planned, not carried out.",
        aprendizaje:
          "• In irreversible payments, design is worth more before the \"Send\" button than after: the clarification comes too late.\n• Friction works when it is proportional: a notice that always shows stops being read.\n• The concept depends on a piece of data (the CLABE's account holder) that the bank must be able to obtain; it is the first risk to validate with business and technology.\n• Next: run the test, align the flow with Banxico's December 2026 guidelines and explore the same recipient card for sends to a phone number (DiMo).",
      },
      {
        slug: "banorte-estado-de-cuenta",
        title: "Banorte Statement",
        subtitle: "One screen to decide how much of your card to pay",
        concept: true,
        image: "/projects/banorte-estado-de-cuenta/01-cover.webp",
        imageAlt:
          "Banorte Statement case cover: three iPhone screens and a Concept project label, not affiliated with Banorte",
        homeTeaser:
          "A speculative redesign of how a Banorte mobile customer understands their credit card statement and decides how much to pay.",
        contexto:
          "A speculative redesign of how a Banorte mobile customer understands their credit card statement and decides how much to pay.\n\nPlatform: iOS and Android mobile app.\nDuration: 2 weeks (concept sprint).\nTools: Figma, FigJam.\nOut of scope: actual interest calculation on the backend, debt restructuring and interest-free installments in detail.",
        problema:
          "The statement shows three amounts (minimum payment, payment to avoid interest, total balance) without saying what happens with each one. At Banorte, 48% of cards are not paid in full each month. The customer sees how much they owe, but not how much it's worth paying or how much paying less costs.\n\nCurrent flow to decide how much to pay (to verify in the app): Home → credit card → \"My card details\" (total balance, available credit, cut-off and payment dates) → PDF statement to see the minimum payment and the payment to avoid interest → back to Pay and type the amount. The user compares the amounts and their cost from memory.\n\nThe proposal brings together on one screen what is today spread across the details, the PDF and the payment form.\n\nPublic evidence:\n• At Banorte, 48.0% of cards are revolvers (non-full payers) and they hold 70.9% of the balance; their average effective rate is 38.0% (December 2025, Banxico).\n• System-wide, 24.4% of revolvers paid exactly the minimum and 4.5% not even that (Banxico).\n• The Banorte Básica card has a fixed ordinary rate of 69.00% per year and an average CAT of 95.6% before VAT (Banorte brochure).\n• The brochure itself warns: \"Making only the minimum payment increases the time to pay and the cost of the debt\". That warning lives in a PDF, not at the moment of paying.\n• CONDUSEF calls the minimum a \"false sense of control\" and recommends simulating before paying (El Imparcial).\n• The Banorte Móvil page lists balance, dates and 24/7 payment, but doesn't mention the minimum payment or the payment to avoid interest (Banorte).",
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
            "The references show the cost of paying less at the moment of paying; in Mexico that data tends to stay in the PDF.\n• Apple Card: when you choose a one-time payment, it calculates and shows the estimated interest for that amount; it uses a payment wheel. What we took: the cost visible before confirming, with a notice that it's an estimate.\n• Nu Mexico: in Statements, the minimum payment appears right below the total balance; the rate lives in the profile. What we took: a simple hierarchy of amounts; to improve: combine the amount and the rate in one view.\n• BBVA Mexico: settle in one click from debit and set up direct debit for the payment that avoids interest. What we took: direct debit as the natural next step after paying.\n\nInsights (hypotheses to validate in the test):\n1. \"Payment to avoid interest\" isn't understood as a goal. The name describes a rule, not an outcome; \"Pay without interest\" might read better.\n2. The minimum gets chosen for being the first or the smallest. Without the cost beside it, the lower amount looks like the safe option.\n3. The due date weighs more than the cut-off date. People act on \"how many days do I have left\", not on the cycle.\n\nBenchmark to verify with current captures of each app.\n\nHow Might We: how might we let a Banorte customer know how much to pay, what each option costs and by when, without opening the PDF?\n\nHypothesis: if we show the three amounts side by side, with estimated interest and the due date in days, more customers will choose the interest-free payment when they can cover it, and those who pay less will do so knowing the cost.",
          restricciones:
            "Assumed constraints: respect Banorte's visual identity; use only data that already exists in the statement; official amounts and dates without rounding; interest shown as an estimate, never as a final amount.",
          iteraciones:
            "Three directions as lo-fi wireframes; C was chosen because it compares the options without hiding any or pushing the user.\n• A · Glossary: the current statement with \"?\" icons that explain each term. Discarded: it explains, but doesn't help decide; the cost is still not calculated.\n• B · Slider: a slider from the minimum to the total that updates the estimated interest. Discarded: powerful, but without clear anchors; hard with a screen reader and with exact amounts.\n• C · Option cards: three stacked options (interest-free, minimum, total) with cost and outcome; \"Other amount\" at the end. Chosen: clear anchors, direct and accessible comparison; the slider remains as \"Other amount\".\n\nDeliverables of this phase: lo-fi wireframes of A, B and C, the user flow for C and decision annotations.",
          decisiones:
            "• Names by outcome. \"Pay without interest\" as the label, with the official term below in secondary text so as not to break regulation.\n• The cost lives next to the amount. The estimated interest appears in the same row, not on another screen.\n• Recommend without hiding. The minimum stays visible and selectable; it just gets its cost added.\n• An estimate always says estimate. \"≈\" and a note \"The final amount appears in your next statement\", as Apple Card does.\n• Banorte identity intact. It uses the brand's red and typography; the change is in structure, not style.",
          validacion:
            "A plan, not yet carried out. Moderated usability test with 5 Banorte credit card customers, 15 to 20 minutes each, over video call with the Figma prototype. Results: pending.\n\nTasks:\n1. \"You have $3,000 available this month. How much would you pay and why?\"\n2. \"How many days do you have left to pay without charges?\"\n3. \"If you pay only the minimum, how much do you think it will cost you next month?\"\n4. \"Why is the interest-free payment lower than your total balance?\"\n\nClosing questions:\n• How do you decide today how much to pay on your card?\n• What was the most confusing thing about this version?\n• From 1 to 5, how confident are you in your payment decision?\n\nMetrics to measure:\n• Understanding of amounts: explains in their own words the difference between minimum and interest-free (yes / partly / no).\n• Cost accuracy: their estimate in task 3 vs. the one shown on screen.\n• Time on task 2: seconds until stating the correct due date.\n• Confidence: 1 to 5 scale at the end.\n\nComparing against the current app with the same tasks 2 and 3 would give the \"before vs. after\".",
        },
        solucionFinal:
          "The card detail opens with a single question, \"How much do I pay this month?\", and three answers with their consequence.\n\nScreens:\n1. Card summary: the due date as \"6 days left · Tue, Nov 10\" on top; below, the interest-free payment as the main amount.\n2. How much do I pay?: three options, Pay without interest (recommended), Minimum payment and Total balance, plus \"Other amount\". Each says what happens: \"$0 in interest\" or \"≈ $X in interest next month\".\n3. Breakdown: why the interest-free payment isn't the total balance: purchases in the period, interest-free installments and what remains for later.\n4. Confirmation: amount, account to charge and date; if they chose less than the interest-free payment, the estimated cost is repeated before confirming.\n5. After paying: a receipt and the suggestion to set up direct debit for the interest-free payment.\n\nIllustrative example for the prototype: with a rate of 69% per year (Banorte Básica), 1 month of ordinary interest equals ≈ 5.75% + VAT of the unpaid balance. It's a simplified calculation; the real one uses the average daily balance.\n\nAccessibility:\n• The recommended option is marked with text (\"Recommended\"), not only color; the brand red is not used for \"error\".\n• Amounts read in full by the screen reader (\"ten thousand pesos\"), with no abbreviations.\n• Minimum AA contrast and 44 × 44 pt touch targets; \"Other amount\" uses a numeric keypad, not a slider.\n\nStates and edge cases: $0 balance (\"You have nothing to pay\") · interest-free payment already covered · partial payment made (shows what remains) · due today or overdue (a no-blame notice, option to pay now) · credit balance · cut-off in progress (previous period amounts until it closes) · offline (cached data, payment disabled).",
        resultado:
          "An unlaunched concept. There are no results yet: the usability test is planned, not carried out.",
        aprendizaje:
          "• In credit products, design doesn't change the rate, but it does change when users see their cost: moving the warning from the PDF to the pay button.\n• Recommending isn't hiding: the minimum stays available, just with its consequence beside it.\n• Next: run the test, validate the \"Pay without interest\" wording with legal and explore reminders tied to the due date.",
      },
      {
        slug: "mercado-pago-metas-de-ahorro",
        title: "Mercado Pago Savings Goals",
        subtitle: "Savings pockets that say how much is left and when you reach your goal",
        concept: true,
        image: "/projects/mercado-pago-metas-de-ahorro/01-cover.webp",
        imageAlt:
          "Cover of the Savings goals concept project, not affiliated with Mercado Pago, with three screens of the redesign",
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
          "A speculative redesign of how a Mercado Pago Mexico user sees their Apartados (savings pockets) and what their money earns.\n\nPlatform: iOS and Android mobile app.\nDuration: 2 weeks (concept sprint).\nTools: Figma, FigJam.\nOut of scope: actual yield calculation, fund logic, Meli+ as a product and investments outside Apartados.",
        problema:
          "Mercado Pago advertises its rate as a percentage, but users save in pesos and in dates. The rate changes by balance, by type of money (available or in an Apartado), by the month's deposits and by membership. The user sees a percentage, but not how much is left or when they reach their goal. Between the two there are rules that change every few months.\n\nCurrent flow (to verify in the app): Home → money and yields section → Apartados → pick an Apartado → see balance. The current rate and its conditions live on another screen or in the terms and conditions. There's no place that says \"you need $X more and you'll get there in month Y\".\n\nPending: confirm the current rate at publication.\n\nPublic evidence:\n• Apartados split the account's money into named \"pockets\"; that money doesn't count as available balance (El Cronista, Jan 2026).\n• Users already use them as goals: 545,000 Apartados for vacations in the first months of 2026, nearly double the previous year (Descubre, Jul 2026).\n• More than 15,000 Apartados for concerts and festivals; 1,500 from BTS fans (El Cronista).\n• Oct 2025: 7% base and up to 13% if you deposit $3,000 a month, only on the first $25,000 (Xataka).\n• Jun 2026: the maximum drops to 12% (6% base + 6% bonus), same $25,000 cap (Xataka).\n• Sep 2026: 15% on Apartados for Meli+ members versus 12% for everyone else (DPL News).\n• The rules changed at least 3 times in 12 months, with conditions that depend on deposits, balance cap, type of money and membership.",
        proceso: {
          research:
            "People in Mexico save a lot, but little in products that earn; the app competes against the \"piggy bank\".\n\nSaving in Mexico:\n• 66.4% of the population had some kind of savings in 2024 (ENIF 2024, cited by Xataka).\n• 63.0% of people aged 18 to 70 had at least one formal savings account (INEGI, ENIF 2024).\n• According to CONDUSEF, 41% save at home, 20% in tandas and only 3% invest to earn returns (Xataka).\n• 51.8% of those who keep a record of expenses set money aside for payments; only 19.5% use apps for that (INEGI).\n\nBenchmark:\n• Monzo (Pots): a goal amount under what's saved, a progress bar and a notice on arrival. What we took: the goal as the main piece of data in the Apartado.\n• Nu Mexico (Cajitas): up to 10 named Cajitas; rate and GAT in the fine print. What we took: a name per goal; show the GAT next to the rate, not hidden.\n• Mercado Pago (current): named Apartados; rate in %, rules in the news and T&C (to verify). This is what needs translating into pesos and dates.\n\nMonzo users asked for years for a target date, a suggested saving per week and a notice if they fall behind (Monzo Community).\n\nInsights (hypotheses to validate in the test):\n1. People think in pesos and dates, not percentages. \"I'm $4,000 short for Cancún\" weighs more than \"12% a year\".\n2. A rule you can't see doesn't get met. If the month's minimum deposit doesn't show its progress, the bonus rate is lost without warning.\n3. Consistency needs rhythm, not just a total. Knowing \"$500 every two weeks\" motivates more than a bar at 30%.\n\nBenchmark to verify with current captures of each app.\n\nHow Might We: how might we let a user know, in pesos and dates, how much their money earns and when they reach their goal?\n\nHypothesis: if each Apartado shows what's left, the estimated date and what's been earned in pesos, and the app says what's missing to keep the month's rate, users will deposit more consistently and explain their yield without looking outside the app.",
          restricciones:
            "Assumed constraints: respect Mercado Pago's visual identity; don't change rates or rules, only explain them; projections always marked as estimates.",
          iteraciones:
            "Three directions as lo-fi wireframes; C was chosen because it joins the goal and the rate rule on the same screen.\n• A · Calculator: a separate simulator; you enter an amount and a term and it tells you what you earn. Discarded: useful but disconnected; users have to go looking for it and don't see their real money.\n• B · Progress bar: each Apartado with a bar and a percentage of progress, Monzo style. Discarded: it motivates, but doesn't say when you arrive or what happens with the month's rate.\n• C · Goal with a date + visible rule: each Apartado shows what's left, an estimated date and earnings in pesos; on top, the status of the month's rate. Chosen: it answers the three questions (how much it earns, how much is left, when) without leaving the screen.\n\nDeliverables of this phase: lo-fi wireframes of A, B and C, the user flow for C and decision annotations.",
          decisiones:
            "• Pesos first, percentage second. \"You earned $84 this month\" on top; \"12% a year\" as secondary data.\n• Honest projection. The estimated date says \"if you keep depositing $500 every two weeks\" and is marked as an estimate at today's rate.\n• The rate rule with progress. The month's minimum deposit is shown as progress, with a notice 5 days before the cutoff.\n• Visible cap. If an Apartado exceeds the balance that earns, it says in pesos how much no longer generates earnings.\n• Mercado Pago identity intact. It uses the brand's blue and typography; the redesign is about information, not style.",
          validacion:
            "A plan, not yet carried out. Moderated usability test with 5 Mercado Pago users who use or have used Apartados, 15 to 20 minutes each, over video call with the Figma prototype. Results: pending.\n\nTasks:\n1. \"Tell me how much you earned this month on your saved money.\"\n2. \"What do you have to do to keep the higher rate this month?\"\n3. \"Create a $8,000 goal for a trip in April.\"\n4. \"When do you reach the goal of your 'Concert' Apartado? What happens if you withdraw $1,000?\"\n\nClosing questions:\n• Where do you keep money you save for something specific today?\n• What was the most confusing thing about this version?\n• From 1 to 5, how much do you trust the estimated date you saw?\n\nMetrics to measure:\n• Task success: completed / with help / didn't complete.\n• Understanding of the rate: explains the month's rule in their own words (yes / partly / no).\n• Time on task 1: seconds until stating the earnings in pesos.\n• Trust in the projection: 1 to 5 scale at the end.\n\nComparing against the current app with the same tasks 1 and 2 would give the \"before vs. after\". Deposit consistency could only be measured in a real pilot, outside the scope of this concept.",
        },
        solucionFinal:
          "Apartados become goals: each one says how much is left, when you arrive and how much you've earned in pesos.\n\nScreens:\n1. Savings summary: total saved, the month's earnings in pesos and a \"Rate of the month\" chip with its status (e.g. \"You need $1,200 more in deposits to keep 12%\").\n2. Rate detail: the rule in one sentence, the balance cap that earns and how much of your money falls above or below it.\n3. Apartado as a goal: what's saved against the goal, what's left, estimated arrival date and accumulated earnings.\n4. Create goal: name, amount and desired date; the app suggests a deposit every two weeks to get there.\n5. Goal reached: a brief celebration with what was earned in yield and options: withdraw, keep saving or a new goal.\n\nAccessibility:\n• The goal's status is communicated with text (\"on track\", \"behind\"), not only color.\n• Minimum AA contrast on amounts and text over blue backgrounds.\n• Figures readable by a screen reader as a full sentence (\"you need four thousand pesos more\").\n• 44 × 44 pt touch targets.\n\nStates and edge cases: no Apartados (first use) · goal without a date · overdue goal not completed · withdrawal that delays the date · rate change (notice with date and recalculated projection) · balance above the cap · offline (cached data, projection disabled).",
        resultado:
          "An unlaunched concept. There are no results yet: the usability test is planned, not carried out.",
        aprendizaje:
          "• In savings products, translating is worth more than adding: the rate already exists, it just needs to be told in pesos and dates.\n• A projection only helps if it says what it depends on; without that condition it reads as a promise.\n• Next: run the test, adjust the rule's wording based on what users don't understand and explore automatic deposits every two weeks.",
      },
      {
        slug: "wise-usd-a-mxn",
        title: "Wise USD to MXN",
        subtitle: "Convert dollars to pesos knowing whether to do it today or wait",
        concept: true,
        image: "/projects/wise-usd-a-mxn/01-cover.webp",
        imageAlt:
          "Cover of the Convert to MXN with context concept project, not affiliated with Wise, with three screens of the redesign",
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
          "A speculative redesign of how a freelancer in Mexico decides when to convert their dollars to pesos.\n\nPlatform: iOS and Android mobile app.\nDuration: 2 weeks (concept sprint).\nTools: Figma, FigJam.\nTarget user: a freelancer or contractor in Mexico who bills US clients in USD.\nKey assumption: the user already has a USD balance in Wise. Today availability for residents of Mexico is limited (to verify).\nOut of scope: tax advice (RESICO, ISR), exchange rate prediction and backend logic.",
        problema:
          "Wise already has rate alerts and automatic conversions, but they live on separate screens. It has the pieces to convert at a good moment, but the user has to put them together alone: rate, history, alert and fee live in different places. Before converting, they can't see in one place whether today's rate is good or how many net pesos they will receive.\n\nCurrent flow to decide whether to convert today (to verify in the app): Home → USD balance → Convert → choose MXN → see rate and fee. To compare against previous days you have to leave for the converter with a chart. For an alert: Profile → Notifications → Exchange rate alerts. To convert automatically at a rate: another flow, Auto Conversions.\n\nPublic evidence:\n• Alerts are set up from Profile → Notifications, outside the conversion flow (Wise Help).\n• Auto Conversions converts when a target rate is reached; at most 15 pending, they can't be edited (you have to cancel and create another) and they don't run on Sundays (Wise Help).\n• MXN is among the 24 currencies supported by Auto Conversions since its launch in 2022 (Wise Blog).\n• Receiving USD by ACH is free; by wire or SWIFT it costs 6.11 USD per payment (Wise Help).\n• The FIX exchange rate went from 18.8148 (Oct 29, 2026) to 18.6285 (Nov 4, 2026). On 2,000 USD that's a 372.60 MXN difference in a week (Banxico).\n• Mexico received 61,719 million USD in remittances in 2025, -4.56% year over year, according to Banxico (Zeta Tijuana). No official figure was found that separates freelance income in USD.\n• Wise launched transfers from Mexico in January 2025 (The Paypers). Users report that residents of Mexico can't receive into a local Wise account (Reddit r/ExpatFinance). Verify current availability.",
        proceso: {
          research:
            "The references give context (recent range) or automate (target rate); none of those reviewed combines both with the net in pesos.\n• Wise web converter: a chart from 48 h to 5 years and a summary of the 30 and 90-day high and low; free alerts. What we took: the \"30-day high / low\" summary as quick context, inside the conversion flow.\n• Revolut Auto-Exchange: automatic conversion at a target rate since 2019; it doesn't execute if the rate moves away by more than 0.75%. What we took: explain in plain language when and why an order doesn't execute.\n• DolarApp: communicates a single fixed fee (3 USD) and compares final net pesos; data from its own blog. What we took: show the result in net pesos, not just the rate.\n\nInsights (hypotheses to validate in the test):\n1. Users think in net pesos, not in the rate. \"I get 37,200\" weighs more than \"18.63\".\n2. \"Is it a good day?\" needs a reference. Without the recent range, today's rate says nothing.\n3. Waiting is a decision, not an omission. Setting a target rate should be one tap from the conversion, not in Profile.\n\nBenchmark to verify with current captures of each app.\n\nHow Might We: how might we help a freelancer decide, on a single screen, whether to convert today or wait for a better rate, knowing how many pesos they receive?\n\nHypothesis: if we show today's rate against the 30-day range, the net in pesos after the fee and a shortcut to a target rate, users will decide faster and with more confidence than today, without leaving the flow.",
          restricciones:
            "Assumed constraints: respect Wise's visual identity; use only features that already exist (alerts, Auto Conversions, conversion); always show fee and rate before confirming.",
          iteraciones:
            "Three directions as lo-fi wireframes; C was chosen because it's the only one that puts context, net and the alternative of waiting in the same step.\n• A · Market dashboard: a new tab with a large chart, alerts and orders. Discarded: powerful but looks like a trading app; it pulls the user away from converting and adds another section.\n• B · Proactive alert: a notification when a USD payment arrives with \"convert now?\". Discarded: useful as an entry point, but without context once tapped; it pushes to convert without comparing.\n• C · Convert with context: the conversion screen adds a 30-day range bar, the net in MXN and \"Wait for a rate\". Chosen: it reuses the flow that already exists; converting and waiting sit at the same level.\n\nDeliverables of this phase: lo-fi wireframes of A, B and C, the user flow for C and decision annotations.",
          decisiones:
            "• Net pesos on top, rate below. Users decide by what they receive, so the net leads the hierarchy.\n• Range, not prediction. The bar shows facts (30-day high/low). No \"good moment\" or market recommendations.\n• Alert and automatic conversion in the same step. A switch picks \"just notify me\" or \"convert for me\"; today they are in different flows.\n• Visible rules. Before creating the order it says: it doesn't run on Sundays, it can't be edited, at most 15 pending.\n• Wise identity intact. It uses its palette and typography; the redesign is about structure, not style.",
          validacion:
            "A plan, not yet carried out. Moderated usability test with 5 freelancers in Mexico who bill in USD, 15 to 20 minutes each, over video call with the Figma prototype. Results: pending.\n\nTasks:\n1. \"You were just paid 2,000 USD. Tell me whether you would convert today and why.\"\n2. \"How many pesos would you get if you convert now?\"\n3. \"You'd rather wait for a better rate. Set everything up so it converts by itself.\"\n4. \"Cancel that order and create just a notice.\"\n\nClosing questions:\n• How do you decide today when to convert your dollars?\n• What was the most confusing thing about this version?\n• From 1 to 5, how sure did you feel about your decision?\n\nMetrics to measure:\n• Task success: completed / with help / didn't complete.\n• Net accuracy (task 2): difference between what they say and the real net on screen.\n• Time on task 3: seconds until creating the order.\n• Perceived confidence: 1 to 5 scale at the end.\n\nComparing against the current app with tasks 1 and 3 would give the \"before vs. after\".",
        },
        solucionFinal:
          "\"Convert to MXN\" becomes a decision screen: today's rate in context, net pesos and two clear exits, convert now or wait.\n\nScreens:\n1. Convert with context: the USD amount, the current rate and a bar with the 30-day low and high that marks where today sits.\n2. Net breakdown: USD sent, Wise's fee, the rate applied and the pesos that arrive, in that order.\n3. Wait for a rate: suggests target rates (e.g. the 30-day high) and shows the net you would receive at each. It creates an Auto Conversion or just an alert.\n4. My orders: a list of pending conversions with target rate, distance to the current rate and a cancel action.\n\nAccessibility:\n• The position in the range is also said in text: \"Today: 18.63, near the 30-day high\".\n• Up or down with an icon and a sign, not only green or red.\n• 44 × 44 pt touch targets; the range bar has a label for screen readers.\n\nStates and edge cases: not enough history (hide the bar) · insufficient balance when the rate arrives (order cancelled + notice) · 15 orders reached · Sunday / market closed · rate moving while confirming (guaranteed rate for a limited time, to verify) · offline (last rate with timestamp, conversion disabled).",
        resultado:
          "An unlaunched concept. There are no results yet: the usability test is planned, not carried out.",
        aprendizaje:
          "• In fintech, sometimes the product already has the features; the work is bringing them together at the moment of deciding.\n• Showing context without giving financial advice is a design line: range yes, prediction no.\n• Next: confirm USD balance availability for residents of Mexico, run the test and explore the entry from the payment-received notification (direction B).",
      },
      {
        slug: "aeromexico-reacomodo",
        title: "Aeroméxico Rebooking",
        subtitle: "One-tap rebooking when your flight is delayed or cancelled",
        concept: true,
        image: "/projects/aeromexico-reacomodo/01-cover.webp",
        imageAlt:
          "Cover of the One-tap rebooking concept project, not affiliated with Aeroméxico, with three screens of the redesign",
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
          "A speculative redesign of how Aeroméxico's app supports a passenger when their flight is delayed or cancelled.\n\nPlatform: iOS and Android mobile app, with a push notification as the entry point.\nDuration: 2 weeks (concept sprint).\nTools: Figma, FigJam.\nOut of scope: the rebooking algorithm, refunds for third-party agencies, groups and unaccompanied minors.",
        problema:
          "Aeroméxico is among the most punctual airlines in the world, but when a flight does fall through, the app informs and doesn't resolve: rebooking moves to the queue or the phone. The passenger finds out late, queues at the counter or calls the call center, and doesn't know what they are entitled to by law.\n\nCurrent flow (according to public sources, to verify in the app): change notification → open app → My trips / Status → no flight options visible → call the call center, message the WhatsApp bot or queue at the counter → negotiate the new flight → look separately for what compensation applies.\n\nPublic evidence:\n• In 2025 Aeroméxico operated about 190 thousand flights with 91.88% on-time departures, according to Cirium (El Financiero). Even so, about 8% of departures were not on time.\n• The app has 3.5 million downloads; its published features are status, notifications, check-in and My trips. Rebooking isn't mentioned (El Imparcial, App Store).\n• During the AICM rain contingency (August 2025), Aeroméxico's statement pointed to the status website and its policies page; it didn't mention the app (statement, Vive USA).\n• In October 2025 at least 53 flights were reported cancelled and 315 delayed in two days because of a dispute with pilots (Mexico News Daily).\n• App Store reviews complain that \"they change your flights without notice\" and about \"terrible customer service\" (App Store).\n• The law requires notifying the change and offering options depending on the delay, but the passenger has to know them to ask for them (Civil Aviation Law, art. 47 Bis).",
        proceso: {
          research:
            "References from the US and Canada already solve rebooking inside the app; none explains rights as clearly as Mexican law requires.\n• United: with a delay of 60+ min, the home screen shows whether you've been rebooked, other flights, meal and hotel vouchers, and an agent by chat or video. What we took: everything on the home screen; the problem is the main screen while it lasts.\n• Delta: \"Trip Support\": you see alternatives at no cost, choose one or look for more, confirm and get a new pass. What we took: one suggested option + \"see other options\", without hiding the search.\n• Air Canada: automatic rebooking onto the next available flight; if it doesn't work for you, you change it in \"Manage my booking\". What we took: a default rebooking the passenger can accept or change.\n\nUnited reports that almost 50% of its customers already handle themselves through the app or web during disruptions (United).\n\nInsights (hypotheses to validate in the test):\n1. The first question is \"what time do I arrive?\", not \"why?\". Options should be sorted by arrival time.\n2. Rights depend on hours and cause. If the app calculates what applies (7.5% discount, 25% compensation), the passenger doesn't have to look for it.\n3. Accepting must be reversible. If the passenger fears being stuck with a bad flight, they prefer the queue; a \"you can change it later\" lowers that fear.\n\nBenchmark to verify with current captures of each app.\n\nHow Might We: how might we let a passenger with a delayed or cancelled flight know what they are owed and secure a new flight without queuing or calling?\n\nHypothesis: if the app notifies with the alternative flight already suggested, shows the rights calculated for their case and lets them accept in one tap, passengers will resolve their rebooking from the phone in under 2 minutes and with fewer calls to the call center.",
          restricciones:
            "Assumed constraints: respect Aeroméxico's visual identity; only offer flights with an available seat; rights wording aligned to art. 47 Bis and reviewed by legal.",
          iteraciones:
            "Three directions as lo-fi wireframes; C was chosen because it resolves quickly without taking control away from the passenger.\n• A · Search: the notification leads to a flight search with date and origin prefilled. Discarded: familiar, but it shifts all the work to the passenger at a stressful moment.\n• B · Automatic: the airline rebooks on its own and the passenger just receives the new pass. Discarded: faster, but if the flight doesn't work for them they are back in the queue; it doesn't show rights.\n• C · Suggested + alternatives: a card with the best flight already held, 2 or 3 alternatives below and rights on the side. Chosen: one tap if the suggestion works, control if not; rights visible before deciding.\n\nDeliverables of this phase: lo-fi wireframes of A, B and C, the user flow for C with delay and cancellation branches and decision annotations.",
          decisiones:
            "• Arrival time as the main data. It's what the passenger is reorganizing (connection, work, family); the flight number goes to the background.\n• Rights before the button, not after. The passenger chooses between rebooking and a refund knowing what they lose or gain.\n• Cause stated in plain language. \"Due to weather\" or \"due to Aeroméxico's operation\", because compensation depends on it.\n• Human exit always visible. An agent chat entry on every screen, as United does.\n• Aeroméxico identity intact. It uses its palette and typography; the redesign is about flow, not style.",
          validacion:
            "A plan, not yet carried out. Moderated usability test with 5 passengers who flew in the last year, 15 to 20 minutes each, over video call with the Figma prototype. Results: pending.\n\nTasks:\n1. \"You received this notice. Find a flight that gets you to your destination today.\"\n2. \"Before accepting, tell me what you are owed for this cancellation.\"\n3. \"You decide not to travel today. Request your refund.\"\n4. \"You already accepted a flight, but changed your mind. Choose another.\"\n\nClosing questions:\n• What did you do the last time a flight of yours was delayed or cancelled?\n• Would you trust accepting from the app without talking to anyone? Why?\n• From 1 to 5, how clear was what you are owed?\n\nMetrics to measure:\n• Task success: completed / with help / didn't complete.\n• Time on task 1: seconds from the notice to confirming a flight.\n• Understanding of rights: answer in task 2 correct / partial / incorrect.\n• Errors: taps on the wrong option or flight.\n• Perceived confidence: 1 to 5 scale at the end.\n\nFor the \"before vs. after\", task 1 would be run in the current app to compare steps and time.",
        },
        solucionFinal:
          "While the disruption lasts, the app's home screen becomes a rebooking center: what happened, your best option and what you're owed.\n\nScreens:\n1. Notification: \"Your flight AM 123 was cancelled. We held AM 127 for you, you arrive 19:40.\" It opens straight to the rebooking card.\n2. Rebooking: suggested flight on top with arrival time and seat; below, 2 or 3 alternatives sorted by arrival; an \"Accept this flight\" button.\n3. Your rights: a panel by cause and hours: meals, a minimum 7.5% discount (2 to 4 h) or a refund / flight with a minimum 25% compensation (cancellation or more than 4 h), citing art. 47 Bis.\n4. Other options: travel another day or request a refund, with the estimated amount visible before confirming.\n5. Confirmation: a new boarding pass, digital vouchers if they apply and \"You can change it up to 2 h before\" (rule to be defined with the business).\n\nAccessibility:\n• States (cancelled, delayed, confirmed) with text and an icon, not only color.\n• Minimum AA contrast; times in large type for quick reading in the waiting room.\n• 44 × 44 pt touch targets; logical reading order for VoiceOver and TalkBack.\n• Plain language in rights: no \"concessionaire\" or \"permit holder\".\n\nStates and edge cases: short delay with no rights (under 1 h) · cause not attributable to the airline (weather) · no flights available today · booking with several passengers · missed connection · ticket bought through an agency (redirect) · offline (last cached information and update time).",
        resultado:
          "An unlaunched concept. There are no results yet: the usability test is planned, not carried out.",
        aprendizaje:
          "• In airlines, high punctuality doesn't remove the problem: the roughly 8% that fails defines the experience of whoever lives it.\n• Explaining rights isn't only legal; it's what lets people choose between rebooking and a refund without fear.\n• Next: run the test, validate the rights wording with a lawyer and explore the version for routes to the US, where the DOT requires an automatic refund after 6+ hours of delay on international flights (CBS News).",
      },
      {
        slug: "volaris-precio-total",
        title: "Volaris Total Price",
        subtitle: "Your flight's price with what you actually carry, from the results",
        concept: true,
        image: "/projects/volaris-precio-total/01-cover.webp",
        imageAlt:
          "Cover of the What are you carrying? concept project, not affiliated with Volaris, with three screens of the redesign",
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
          "A speculative redesign of the start of the flight purchase on volaris.com and the app.\n\nPlatform: mobile web and iOS / Android app.\nDuration: 2 weeks (concept sprint).\nTools: Figma, FigJam.\nOut of scope: the legal position on baggage fees, pricing logic, check-in and boarding.",
        problema:
          "The Zero fare, the most visible one, includes only a personal item. Carry-on, checked bag and seat are added later, and the real price only appears at checkout or at the airport. The price users compare while searching isn't the one they pay: with a carry-on, the fare can cost double.\n\nCurrent purchase flow (to verify with captures): Search flight → results with base fare price → choose fare → passenger details → extras (baggage, seat) → payment. Baggage is decided in step 5, after choosing the flight.\n\nPending: confirm fare names (the official page says Flex, Expansión reports Básica).\n\nPublic evidence:\n• The Zero fare includes only a personal item; carry-on and checked bags are added at a cost (Volaris, Fares).\n• Flex forces you to pick just one: carry-on, 15 kg checked or a seat. Plus includes carry-on and 25 kg (Volaris, Fares).\n• Volaris recommends adding baggage before arriving; at the airport \"current rates\" apply (Volaris, Carry-on baggage).\n• In a Mexico City–Monterrey simulation, Zero cost $945 and Plus $1,943: $998 more to bring a carry-on (Expansión, May 2026).\n• The Civil Aviation Law (art. 47 Bis) allows two pieces in the cabin of 55 × 40 × 25 cm and 10 kg in total. In 2021 Profeco put suspension seals on Volaris for charging for it (Expansión, Nov 2021).\n• In the first 5 days of the summer 2025 operation, Volaris added 18 conciliations at Profeco; there were complaints about improper carry-on baggage charges (El Imparcial, Jul 2025).\n• Profeco's recommendation repeated by the press: compare the total cost, not the base fare (El Imparcial, May 2026).\n\nThe legal debate about the charge isn't solved by design. What can be designed is that the total price is visible before choosing.",
        proceso: {
          research:
            "The references ask what you're carrying before showing prices; Volaris asks after you've already chosen a flight.\n• Google Flights: a \"Bags\" filter: you choose carry-on and checked bags and the results' prices update with those charges. What we took: declare baggage once and recalculate all results.\n• KAYAK: a fee calculator above the results; each fare shows what it includes next to the price. What we took: put the configurator on top, not in a later step.\n• Viva Aerobus: Zero, Switch and Smart packages with a difference in pesos (+$608, +$1,893) against the base. What we took: show the delta in pesos, not just the list of benefits.\n\nInsights (hypotheses to validate in the test):\n1. Users know what they carry before searching. \"I'm bringing a carry-on\" is an input, not an extra discovered at the end.\n2. They compare flights by the big number. If that number is the Zero fare, they're comparing prices they won't pay.\n3. The surprise is paid twice. In money at the airport and in trust toward the brand.\n\nBenchmark to verify with current captures of each app.\n\nHow Might We: how might we let a passenger see the final price of their trip, with what they actually carry, from the first results screen?\n\nHypothesis: if users declare their baggage and seat before seeing results, and each flight shows the total with that included, they'll pick the right fare the first time. There will be fewer fare changes at checkout and less baggage paid at the airport.",
          restricciones:
            "Assumed constraints: respect the Zero, Flex and Plus fares as they exist; don't change prices or policies; Volaris's visual identity intact.",
          iteraciones:
            "Three directions as lo-fi wireframes; C was chosen because it's the only one that changes the number users compare.\n• A · Fare table: when you tap a flight, a Zero / Flex / Plus table with what each includes. Discarded: it already exists in essence; it still compares flights by base price.\n• B · Checkout notice: a \"you're missing a carry-on\" summary before paying. Discarded: it comes too late; the flight was already chosen at the wrong price.\n• C · \"What are you carrying?\" configurator: a row of icons above the results: personal item, carry-on, checked bag, seat. Chosen: it recalculates the total of all flights and picks the cheapest fare that covers what you carry.\n\nDeliverables of this phase: lo-fi wireframes of A, B and C, the user flow for C, a \"chosen baggage → suggested fare\" rules table and decision annotations.",
          decisiones:
            "• Total on top, base below. The big number is the price with your baggage; the base fare stays as secondary text.\n• The system picks the fare, the user picks what they carry. If you carry a carry-on and 15 kg, it suggests the cheapest combination among Zero + extras, Flex or Plus.\n• Measurements visible, not hidden in policies. Each icon shows cm and kg so users know whether their bag counts as carry-on.\n• Volaris identity intact. It uses the brand's palette and typography; the change is in the order of the flow, not the style.",
          validacion:
            "A plan, not yet carried out. Moderated usability test with 5 people who flew a low-cost airline in the last year, 15 to 20 minutes each, over video call with the Figma prototype. Results: pending.\n\nTasks:\n1. \"Search for a Mexico City–Cancún flight. You're traveling with a carry-on. Pick the cheapest one.\"\n2. \"Before paying, tell me how much you think you'll pay in total.\"\n3. \"Now add a 25 kg checked bag. Which fare suits you?\"\n4. \"Your bag is 60 cm tall. Does it count as carry-on?\"\n\nClosing questions:\n• Have you ever paid for baggage at the airport that you didn't expect?\n• What was the most confusing thing about this version?\n• From 1 to 5, how much do you trust that the price shown is the final one?\n\nMetrics to measure:\n• Task success: completed / with help / didn't complete.\n• Total accuracy: the difference between the total the user estimates (task 2) and the real one.\n• Correct fare: did they pick the cheapest option that covers their baggage?\n• Trust in the price: 1 to 5 scale at the end.\n\nRunning tasks 1 and 2 on Volaris's current flow would give the \"before vs. after\".",
        },
        solucionFinal:
          "The search starts by asking what you carry; from there, every price on screen is the one you're going to pay.\n\nScreens:\n1. What are you carrying?: four icons with measurements: personal item (35 × 45 × 20 cm), carry-on (55 × 40 × 25 cm, 10 kg), checked (15 or 25 kg) and seat. Personal item checked by default.\n2. Results with total: each flight shows the final price per person with what's chosen and a label: \"Includes your carry-on\".\n3. Breakdown on tap: suggested fare + extras, with the alternative: \"Plus costs $X more and includes changes\".\n4. Checkout without surprises: the total doesn't change from the results; if it does, it's explained in one line before paying.\n\nAccessibility:\n• Each option in the configurator is a toggle with a text label, not just an icon.\n• Minimum AA contrast on prices and labels over brand backgrounds.\n• 44 × 44 pt touch targets; the screen reader announces \"Total with carry-on: $X\".\n\nStates and edge cases: several passengers with different baggage · round trip with different baggage per leg · international flight with different rules · seats sold out · a user who doesn't know what they carry (\"Decide later\", with a notice of the airport cost) · price that changes between results and payment.",
        resultado:
          "An unlaunched concept. There are no results yet: the usability test is planned, not carried out.",
        aprendizaje:
          "• In low-cost airlines, the problem isn't the charge but the moment it's shown.\n• Changing the order of the flow can be worth more than redesigning screens: ask first, charge later.\n• Next: run the test, validate the suggested-fare rule on more routes and explore the configurator per passenger in group bookings.",
      },
      {
        slug: "viva-viaje-en-grupo",
        title: "Viva Aerobus Group Travel",
        subtitle: "Seats and check-in for the whole family in a single flow",
        concept: true,
        image: "/projects/viva-viaje-en-grupo/01-cover.webp",
        imageAlt:
          "Cover of the Seats and check-in for the whole family concept project, not affiliated with Viva Aerobus, with three screens of the redesign",
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
          "A speculative redesign of how a family or group chooses seats and checks in on Viva's app.\n\nPlatform: iOS and Android mobile app.\nDuration: 2 weeks (concept sprint).\nTools: Figma, FigJam.\nOut of scope: pricing logic, immigration rules by country and baggage sales.",
        problema:
          "A booking with several passengers (including minors) forces deciding seats and check-in person by person, without clearly seeing who sits next to whom or how much it costs to sit together. Viva sells the app as the fast way to travel \"with your family and friends\", but seats and check-in are still designed for one passenger at a time.\n\nEstimated current flow (to verify in the app): My trips → booking → Seats → choose passenger → choose seat → repeat for every passenger → pay → Check-in → confirm each passenger's details → boarding passes. With 4 passengers, the seat and details steps repeat 4 times.\n\nHypothesis to verify with captures: the cost of sitting together only appears added up at the end, and the map doesn't show which minor sits next to which adult.\n\nPublic evidence:\n• Check-in opens depending on the fare: Zero 4 hours before, Light 8 hours, Smart 10 days. A family with mixed fares can't check everyone in at the same time (Viva Blog).\n• Web and WhatsApp check-in starts with the code and last name of a single passenger (Viva Blog).\n• Babies from 7 days to under 2 years travel on a lap, not in an emergency row, and only one per adult (Viva Blog).\n• A minor traveling with a third party requires a release letter signed by a parent or guardian (Viva, PDF).\n• The app has 4.8 stars with 119 thousand ratings on the Mexican App Store and promises \"Add companions\" (App Store).\n• No public Viva page was found guaranteeing free adjacent seats for minors. Verify in the terms and conditions.\n• Regulatory context: the US proposed in August 2024 to require seating children under 13 next to an adult for free (DOT). Viva operates routes to the US.\n• In June 2026, the UK competition regulator investigated Ryanair for charging parents around €9 to sit with their children (Xataka).\n• In February 2026, Southwest assigned a 2-year-old to another row because the family hadn't paid for seats (Semana).\n• Profeco logged 314 formal complaints against Viva in 2025 through May; the main reasons were cancellations, baggage and refunds, not seats (El Imparcial).",
        proceso: {
          research:
            "The references treat \"seat the family together\" as a system rule; at Viva today it looks like an individual purchase.\n• United: since 2023, children under 12 sit next to an adult at no cost, even in Basic Economy. The map shows the free seats available when booking. If there are no adjacent ones, a flight change at no cost. What we took: mark on the map which seats put the family together and how much they cost.\n• Ryanair: children aged 2 to 11 go next to an adult from the same booking; with free random assignment, only minors are guaranteed. Other adults and teenagers may end up separated. What we took: separate \"the mandatory\" (minor + adult) from \"the optional\" (the whole group together) and state the price of each.\n• Southwest: tries to seat children under 12 with an adult at no cost, but automatic assignment separated a 2-year-old in 2026. What we took: a counterexample; \"trying\" isn't enough; show the outcome before the flight and warn if there's risk.\n\nInsights (hypotheses to validate in the test):\n1. Families think in \"who sits with whom\", not seat numbers. \"Mom with the baby, dad with the 7-year-old\" matters more than \"14B and 14C\".\n2. The fear is being separated, not the price. If the cost of sitting together is clear and early, the decision is made without anxiety.\n3. Check-in is a group chore. Whoever books wants to do it once for everyone, with the minors' details already saved.\n\nBenchmark to verify with current captures of each app.\n\nHow Might We: how might we let whoever books for their family see who sits next to whom, know what it costs, and check everyone in with a single flow?\n\nHypothesis: if the seat map shows each passenger with an avatar, suggests an adjacent block with its total price, and check-in processes the whole group at once, families will complete seats and check-in in fewer steps, with fewer errors and without minors separated from their adult.",
          restricciones:
            "Assumed constraints: respect Viva's visual identity; don't change fares or seat prices, only show them better; comply with safety rules (babies on a lap outside the emergency row, one baby per adult).",
          iteraciones:
            "Three directions as lo-fi wireframes; C was chosen because it's the only one that lets you see both the outcome (who sits where) and the price at once.\n• A · Step per passenger: the same as today, but with a better UI: one map per passenger. Discarded: clean, but it doesn't solve the problem; users still build the group from memory.\n• B · \"Sit us together\" button: a single button assigns the best block and charges the total. Discarded: fast, but it removes control; you can't see which minor sits with which adult.\n• C · Group map: all passengers as draggable tokens on the map, with a suggested block and its price. Chosen: it suggests by default, lets you adjust, and the total changes live.\n\nDeliverables of this phase: lo-fi wireframes of A, B and C, the user flow for C with a booking of 2 adults, 1 child and 1 baby, and decision annotations.",
          decisiones:
            "• People before numbers. The token shows an initial and a name (\"Ana, 7\"); the seat number goes at a second level.\n• Total price, not per seat. \"Sit together: $X for 4\" instead of four separate prices the user adds up.\n• The system protects the minor. It doesn't let you confirm if a minor ends up without an adjacent adult; it explains why and proposes the nearest free seat.\n• Explicit mixed fares. If a passenger on a Zero fare can't check in yet, it shows when it opens and schedules a reminder, instead of an error.\n• Viva identity intact. It uses the brand's green and typography; the redesign is about structure, not style.",
          validacion:
            "A plan, not yet carried out. Moderated usability test with 5 people who flew with minors in the last year, 15 to 20 minutes each, over video call with the Figma prototype. Results: pending.\n\nTasks (test booking: 2 adults, a 7-year-old girl, a 1-year-old baby):\n1. \"Choose seats so your daughter sits next to an adult. Tell me how much you'll pay before confirming.\"\n2. \"Now seat all four together. How much did the price change?\"\n3. \"Check in the whole family.\"\n4. \"Show your partner who sits in which seat.\"\n\nClosing questions:\n• How do you choose seats today when you travel as a family?\n• What was the most confusing thing about this version?\n• From 1 to 5, how sure did you feel that your daughter was next to an adult?\n\nMetrics to measure:\n• Task success: completed / with help / didn't complete.\n• Price accuracy: did they state the correct total before confirming in task 1?\n• Time on task 3: seconds from \"Check-in\" until seeing all the passes.\n• Errors: a minor without an adjacent adult, wrong seat, a passenger left out.\n• Perceived confidence: 1 to 5 scale at the end.\n\nComparing against the current app with the same tasks 1 and 3 would give the \"before vs. after\".",
        },
        solucionFinal:
          "\"Seats\" and \"Check-in\" become a single group flow: a map where each passenger is a token, with the price of sitting together visible from the start.\n\nScreens:\n1. Your group: a list of the booking's passengers with age, type (adult, child, baby on a lap) and fare. This is where minors are paired with their adult.\n2. Group map: a suggested adjacent block with the tokens already placed. Drag a token to change; the total updates live.\n3. Compare options: three cards: \"Everyone together\" (total price), \"Minors with their adult\" (price) and \"Assignment at check-in\" (with a risk notice).\n4. Group check-in: a single confirmation for everyone; minors' details and documents preloaded from \"companions\".\n5. Boarding passes: a carousel with all the passes and a \"who sits where\" summary view to share.\n\nAccessibility:\n• Passenger type is communicated with text and an icon, not only color.\n• Dragging has an alternative: tap a token and then tap a seat, and a list mode for screen readers (\"Ana, age 7: seat 14B, next to Laura\").\n• Minimum AA contrast on the map; 44 × 44 pt touch targets.\n\nStates and edge cases: baby on a lap (no seat, not allowed in the emergency row) · more babies than adults · no adjacent block available · an aircraft change that breaks the block · mixed fares with check-in at different times · a minor with a third party (requires a release letter) · offline (passes cached).",
        resultado:
          "An unlaunched concept. There are no results yet: the usability test is planned, not carried out.",
        aprendizaje:
          "• In low-cost airlines, price transparency can be the UX improvement, without changing the business model.\n• Designing for the group changes the unit of the flow: from \"passenger\" to \"booking\".\n• Regulation is moving (US, UK); a design that already separates \"mandatory\" from \"optional\" adapts easily if the rules change.\n• Next: capture the current flow, run the test and explore notices for when an aircraft change breaks the seat block.",
      },
      {
        slug: "delta-modo-conexion",
        title: "Delta Connection Mode",
        subtitle: "A clear verdict on whether you make your next flight",
        concept: true,
        image: "/projects/delta-modo-conexion/01-cover.webp",
        imageAlt:
          "Cover of the Will I make it or not? concept project, not affiliated with Delta Air Lines, with three screens of the redesign",
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
          "A speculative redesign of how the Fly Delta app supports a passenger during a short layover.\n\nPlatform: iOS and Android mobile app, plus Live Activity on iOS.\nDuration: 2 weeks (concept sprint).\nTools: Figma, FigJam.\nOut of scope: deciding whether to hold a flight (operations), real immigration line times and backend logic.",
        problema:
          "When landing with little time, the passenger pieces together loose data (gate, boarding time, map, notifications) to answer a single question: will I make it or not? Fly Delta already has the pieces of a connection (gate, status, maps, alerts, rebooking), but scattered. Nobody brings them together into a \"you make it / you don't\" verdict.\n\nCurrent flow when landing with a short connection (to verify in the app): gate notification → open app → Today tab → next flight card → tap the gate to open the map → calculate by hand gate closing time minus walking time. If there's immigration or security, the app doesn't add it to the calculation (to verify).\n\nPublic evidence:\n• Delta describes the Today tab as a \"one-stop\" view with boarding pass, gate, status and airport maps (Delta Pro).\n• Connecting gate information is offered \"via maps\"; remaining time or risk isn't mentioned (Delta Pro, 2023).\n• Version 7.0 (May 2025) adds Live Activities with a gate-closing notice, iOS 16+ only and not Android (Delta News).\n• If you miss the connection, Delta \"may have already rebooked you\"; the user has to check the new flight, check in and pick seats (Delta.com).\n• In 2025, 76.4% of flights by reporting US airlines arrived on time; Delta Network, 79.3%. One in five flights arrives late (DOT ATCR, Feb 2026).\n• When arriving from an international flight to the US, you go through customs, pick up bags, check them in again and repeat security (The Points Guy).\n• Public App Store reviews: \"my international layover went from 1 hour and 45 minutes to only 40 minutes\"; another describes arriving at A14 with a departure at A42 and \"less than 30 minutes to travel\" (App Store).",
        proceso: {
          research:
            "The references treat the connection as a task with a countdown and steps; Fly Delta treats it as one more flight in the list.\n• United: a connection page with live status, a countdown and step-by-step directions to the gate; if you don't make it, you rebook for free in the app. It reports 98% of connections made in its test (TechRadar). What we took: a single screen dedicated to the connection and the emergency exit in the same place.\n• Flighty: Connection Assistant: a step guide (security, bags, terminal change) with typical times for each; it estimates immigration by citizenship. What we took: break time down into steps, not just distance.\n• Fly Delta (current): gate, status, maps and alerts in the Today tab; Live Activity with gate closing on iOS. The data already exists; it needs to be joined into a verdict.\n\nInsights (hypotheses to validate in the test):\n1. The question is binary. Passengers want to know \"do I make it?\" before the exact gate; the verdict must come first.\n2. Real time isn't distance. Immigration, security and bags weigh more than walking; hiding them gives false calm.\n3. Plan B lowers stress even if it isn't used. Knowing what happens if you don't make it reduces anxiety during the rush.\n\nBenchmark to verify with current captures of each app.\n\nHow Might We: how might we let a passenger with a short layover know in 3 seconds whether they make their flight and what to do if they don't?\n\nHypothesis: if on landing we show a verdict with remaining time, mandatory steps and a visible plan B, passengers will take the right route faster and with fewer doubts than building the calculation from Today and the map.",
          restricciones:
            "Assumed constraints: respect Delta's visual identity; use only data the app already shows (gate, status, maps, rebooking); work with weak signal on the plane and the jet bridge.",
          iteraciones:
            "Three directions as lo-fi wireframes; C was chosen because it's the only one that answers \"will I make it?\" without opening the app.\n• A · Card in Today: a new block on top of Today with remaining time and gate. Discarded: low cost, but it competes with the boarding pass and offers; the risk gets lost.\n• B · Map first: on landing, the map opens with the route drawn and a counter. Discarded: useful for walking, but it doesn't show immigration or plan B; the map is slow to load with weak signal.\n• C · Connection mode: a dedicated screen that activates on landing, with a verdict, steps and plan B; mirrored in a Live Activity. Chosen: the verdict on the lock screen and detail one tap away; it reuses data Delta already has.\n\nDeliverables of this phase: lo-fi wireframes of A, B and C, the user flow for C with its 3 risk states and decision annotations.",
          decisiones:
            "• Verdict before data. The status takes the top of the screen; the gate and the map go below.\n• Doors closing, not takeoff. The count uses the gate closing, which already appears in Live Activities, because it's the real limit.\n• Mandatory steps visible. If the connection includes immigration or security, they are added to the calculation and shown as steps, not as a footnote.\n• Plan B always one tap away. It appears even when you're On time, in the background; it comes to the front when At risk.\n• Calm language. \"You have 18 min to spare\" instead of \"Hurry up!\"; color reinforces, it doesn't alarm.",
          validacion:
            "A plan, not yet carried out. Moderated usability test with 5 people who made a Delta connection in the last year, 15 to 20 minutes each, over video call with the Figma prototype. Results: pending.\n\nTasks:\n1. \"You just landed in Atlanta. Do you make your next flight? How do you know?\"\n2. \"Your flight comes from another country. Tell me what you have to do before reaching the gate.\"\n3. \"They changed your gate while you're walking. What do you do now?\"\n4. \"The app says you're at risk. Find your alternative and choose one.\"\n\nClosing questions:\n• What do you do today when you have a short connection?\n• Would you trust the verdict or check it on the airport screens?\n• From 1 to 5, how calm did you feel with this version?\n\nMetrics to measure:\n• Task success: completed / with help / didn't complete.\n• Time on task 1: seconds until correctly saying \"I make it\" or \"I don't\".\n• Understanding of steps: in task 2, how many mandatory steps they mention unaided.\n• Errors: taps on wrong actions or misreading the status.\n• Perceived calm: 1 to 5 scale at the end.\n\nComparing against the current app with the same tasks 1 and 4 would give the \"before vs. after\".",
        },
        solucionFinal:
          "\"Your connection\" activates on landing: a verdict, the countdown to gate closing, the steps you have left and a plan B ready.\n\nScreens:\n1. Verdict: a large status (On time / Tight / At risk), minutes until gate closing, arrival gate → departure gate.\n2. Your route: steps in order with the estimated time of each: leaving the plane, immigration, bags, security, walking or the train. A \"View on map\" button opens the existing map.\n3. Plan B: if the status is At risk: the next available flight, whether Delta already rebooked you, and actions (accept, choose another, talk to an agent).\n4. Live Activity: verdict, minutes and gate on the lock screen and Dynamic Island; on Android, a persistent notification.\n\nAccessibility:\n• The status is communicated with text and an icon, not only green, amber or red.\n• Minimum AA contrast; dynamic type without cutting off the countdown.\n• Accessible route: if the passenger requested mobility assistance, the route uses elevators and adds that time.\n• The screen reader announces status changes once, not every minute.\n\nStates and edge cases: long connection (the mode doesn't activate) · gate change along the way (recalculates and notifies) · delayed departing flight (gains margin) · already rebooked by Delta (plan B becomes the plan) · separate tickets or a partner airline (a notice that protection doesn't apply) · offline (last data with an update time).",
        resultado:
          "An unlaunched concept. There are no results yet: the usability test is planned, not carried out.",
        aprendizaje:
          "• In airlines, high-value design is in moments of stress, not in booking: joining existing data is worth more than adding features.\n• An honest verdict (including \"At risk\") builds more trust than hiding the bad news until the end.\n• Next: run the test, calibrate the On time / Tight / At risk thresholds with real ATL data and explore the mode for passengers with mobility assistance.",
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
        image: "/projects/anagram/01-cover.webp",
        imageAlt:
          "Portada del caso Anagram: texto Sitio de un estudio de arquitectura junto a la portada del sitio y la página de propiedades",
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
        image: "/projects/nativa/01-cover.webp",
        imageAlt:
          "Portada del caso Nativa: texto Preventa de departamentos en Colima junto a la portada del sitio y su vista móvil",
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
        image: "/projects/casas-exclusivas-colima/01-cover.webp",
        imageAlt:
          "Portada del caso Casas Exclusivas Colima: título, línea del problema y pantallas de inicio y venta móvil",
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
        image: "/projects/sinagua/01-cover.webp",
        imageAlt:
          "Portada del caso Sinagua: el mapa de acuíferos de México y el detalle del acuífero Valle de León sobre fondo oscuro",
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
        image: "/projects/nu-wallet/01-cover.webp",
        imageAlt:
          "Portada del caso Nu Wallet: tres pantallas en iPhone sobre fondo morado y etiqueta Concept project, no afiliado a Nu",
        homeTeaser:
          "Rediseño especulativo de cómo un cliente de Nu México ve y controla todas sus tarjetas.",
        contexto:
          "Rediseño especulativo de cómo un cliente de Nu México ve y controla todas sus tarjetas. Un cliente puede tener varias a la vez: crédito física, hasta 3 virtuales de crédito, débito física y virtual.\n\nPlataforma: app móvil iOS y Android.\nDuración: 2 semanas (concept sprint).\nHerramientas: Figma, FigJam.\nFuera de alcance: lógica de backend y emisión de tarjetas físicas.",
        problema:
          "Un cliente puede tener varias tarjetas a la vez, pero no hay un lugar donde verlas juntas ni saber cuál usa para qué. Nu promueve tener varias tarjetas para organizar gastos, pero la app no ofrece una vista donde esa organización se vea.\n\nFlujo actual para ver una tarjeta virtual: Inicio → Mis tarjetas → elegir Débito o Crédito → Tarjeta virtual → NIP. Son 4 pasos para ver una sola tarjeta, y se repite por cada una.\n\nLa propuesta quita la elección de producto y el NIP para solo ver; la seguridad se mueve a revelar el número.\n\nEvidencia pública:\n• Nu permite hasta 3 tarjetas virtuales de crédito activas al mismo tiempo y sugiere ponerles nombre para organizar gastos (Nu Blog).\n• Recomienda usar la virtual para suscripciones y bloquearla sin afectar otros cobros; eso exige recordar qué servicio está en qué tarjeta (Nu Blog).\n• Débito y crédito tienen cada una su física y su virtual, con números distintos (Nu Blog).\n• Más de 7 millones de clientes de tarjeta de crédito en México (Nu Blog).",
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
            "Los referentes resuelven \"muchas tarjetas\" con una sola superficie visual; Nu las reparte por producto.\n• Apple Wallet: tarjetas apiladas; tocas una y pasa al frente con sus movimientos. Qué tomamos: el modelo mental de \"cartera\" que ya todos conocen.\n• Revolut: carrusel con física, virtuales y desechables; congelar en cada tarjeta. Qué tomamos: acciones rápidas por tarjeta, sin entrar a menús.\n• Nu (actual): separadas por Débito / Crédito dentro de \"Mis tarjetas\". Es lo que hay que unificar.\n\nInsights (hipótesis a validar en el test):\n1. El usuario piensa en uso, no en producto. \"La de Netflix\" o \"la de compras en línea\" importa más que \"débito\" o \"crédito\".\n2. Ver ≠ revelar. Ver qué tarjetas tienes no debería pedir NIP; ver el número completo sí.\n3. Bloquear es una acción de pánico. Debe estar a un toque desde la tarjeta, no en un submenú.\n\nBenchmark por verificar con capturas actuales de cada app.\n\nHow Might We: ¿cómo podríamos hacer que un cliente vea, distinga y controle todas sus tarjetas Nu en un solo gesto?\n\nHipótesis: si agrupamos todas las tarjetas en una vista tipo wallet, nombradas por uso y con acciones a un toque, el cliente encontrará y bloqueará la tarjeta correcta en menos pasos y con menos errores que hoy.",
          restricciones:
            "Restricciones asumidas: respetar la identidad visual de Nu; no agregar productos nuevos, solo reorganizar los existentes; datos sensibles siempre detrás de NIP o biometría.",
          iteraciones:
            "Tres direcciones en wireframes lo-fi; se eligió la C porque es la única que muestra todas las tarjetas sin esconder las acciones.\n• A · Lista: lista vertical con miniatura, nombre y estado de cada tarjeta. Descartada: clara pero fría; pierde la sensación de \"tarjeta\" y se parece a un menú de ajustes.\n• B · Carrusel: una tarjeta grande a la vez, deslizas horizontal. Descartada: bonita, pero oculta cuántas tarjetas tienes; con 5+ el usuario se pierde.\n• C · Wallet apilado: todas apiladas con su borde visible; tocas una y sube al frente con sus acciones. Elegida: ves el total de un vistazo y el detalle en un toque; modelo mental ya conocido.\n\nEntregables de esta fase: wireframes lo-fi de A, B y C, flujo de usuario de la C y anotaciones de las decisiones.",
          decisiones:
            "• Nombre arriba, número abajo. El usuario identifica por uso (\"Streaming\"), así que el nombre manda la jerarquía.\n• Ver sin NIP, revelar con biometría. La pila es visible al entrar; el número completo pide Face ID / huella.\n• Bloquear con confirmación que dice qué se rompe. \"Netflix y Spotify dejarán de cobrarse\" en vez de \"¿Seguro?\".\n• Identidad Nu intacta. Se usa el morado y la tipografía de la marca; el rediseño es de estructura, no de estilo.",
          validacion:
            "Plan, aún no realizado. Test de usabilidad moderado con 5 clientes de Nu, 15 a 20 minutos cada uno, por videollamada con el prototipo de Figma. Resultados: pendientes.\n\nTareas:\n1. \"Encuentra la tarjeta con la que pagas tus suscripciones.\"\n2. \"Bloquea esa tarjeta. Antes de confirmar, dime qué crees que va a pasar.\"\n3. \"Crea una tarjeta virtual nueva para compras en línea.\"\n4. \"Copia el número de tu tarjeta de débito virtual.\"\n\nPreguntas de cierre:\n• ¿Cuántas tarjetas Nu usas hoy y para qué cada una?\n• ¿Qué fue lo más confuso de esta versión?\n• Del 1 al 5, ¿qué tan fácil fue encontrar la tarjeta correcta?\n\nMétricas a medir:\n• Éxito por tarea: completó / con ayuda / no completó.\n• Tiempo en tarea 1: segundos hasta tocar la tarjeta correcta.\n• Errores: toques en tarjeta o acción equivocada.\n• Facilidad percibida: escala 1 a 5 al cierre.\n\nComparar contra la app actual con las mismas tareas 1 y 4 daría el \"antes vs. después\".",
        },
        solucionFinal:
          "\"Mis tarjetas\" se vuelve una cartera: todas las tarjetas apiladas, cada una con nombre de uso, y sus acciones a un toque.\n\nPantallas:\n1. Wallet: pila de tarjetas con color por tipo (crédito, débito, virtual) y el nombre que el usuario les puso.\n2. Tarjeta al frente: acciones rápidas para ver datos, bloquear, renombrar y copiar número.\n3. Cargos recurrentes: lista de suscripciones ligadas a esa tarjeta, para bloquear sabiendo qué se afecta.\n4. Crear virtual: botón al final de la pila; nombre y uso en el mismo paso.\n\nAccesibilidad:\n• El tipo de tarjeta se comunica con texto e ícono, no solo con color.\n• Contraste AA mínimo en texto sobre tarjetas moradas.\n• Áreas táctiles de 44 × 44 pt; la pila también navega con lector de pantalla como lista.\n\nEstados y casos borde: una sola tarjeta (sin pila) · tarjeta bloqueada (gris + candado + texto) · física en camino · límite de 3 virtuales alcanzado · sin conexión (datos en caché, acciones deshabilitadas).",
        resultado:
          "Concepto sin lanzar. Todavía no hay resultados: el test de usabilidad está planeado, no realizado.",
        aprendizaje:
          "• En banca, reorganizar suele valer más que agregar funciones: el problema era de estructura, no de producto.\n• Seguridad y rapidez no compiten si se separa \"ver\" de \"revelar\".\n• Siguiente: correr el test, ajustar la pila según los errores observados y explorar alertas de cargos recurrentes por tarjeta.",
      },
      {
        slug: "spotify-modo-clasico",
        title: "Spotify Modo Clásico",
        subtitle: "Un reproductor con anillo táctil para escuchar álbumes completos",
        concept: true,
        image: "/projects/spotify-modo-clasico/01-cover.webp",
        imageAlt:
          "Portada del caso Spotify Modo Clásico: tres pantallas en iPhone sobre fondo oscuro y etiqueta Concept project, no afiliado a Spotify",
        homeTeaser:
          "Rediseño especulativo de un modo de reproducción para escuchar álbumes completos con un control circular táctil.",
        contexto:
          "Rediseño especulativo de un modo de reproducción para escuchar álbumes completos con un control circular táctil. Modo Clásico es un reproductor opcional inspirado en el click wheel del iPod.\n\nPlataforma: app móvil iOS y Android.\nDuración: 2 semanas (concept sprint).\nHerramientas: Figma, FigJam.\nFuera de alcance: licencias, lógica de recomendación, límites del plan Free y hardware externo.",
        problema:
          "El reproductor de Spotify está pensado para saltar entre canciones mirando la pantalla. Escuchar un álbum completo, o controlar la música sin ver, queda en segundo plano y tiene pocos apoyos.\n\nFlujo actual para escuchar un álbum y regresar a un momento de una canción (por verificar en la app): Biblioteca o Buscar → álbum → Play → abrir Now Playing → arrastrar la barra de progreso. La barra es delgada y no da referencia táctil, así que hay que mirarla para acertar.\n\nLa propuesta junta navegar y adelantar en un solo control circular con ticks hápticos.\n\nEvidencia pública:\n• Hasta noviembre de 2021, el botón principal de un álbum lo reproducía en aleatorio. Spotify lo cambió tras la petición de Adele: \"nuestras historias deberían escucharse como las pensamos\" (Gizmodo).\n• En el foro oficial, usuarios de iOS, Android y iPad pidieron desactivar el aleatorio por defecto en álbumes; el staff los remitía a Now Playing (Spotify Community).\n• En móvil, el plan Free tiene Smart Shuffle siempre activo, que mezcla recomendaciones entre las pistas (Spotify Support).\n• Desde septiembre de 2025, Free puede elegir canciones, pero con tiempo diario limitado. Spotify reportó 696 millones de usuarios mensuales, 433 millones en Free (TechCrunch).\n• Una idea en el foro oficial pide adelantar o regresar dentro de una canción sin abrir su pantalla (Spotify Community).\n• Rewound, app que imitaba el click wheel con háptica, pasó de 170,000 descargas en cerca de una semana. Apple la retiró en diciembre de 2019 (iMore, iCulture).",
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
            "Los referentes resuelven el control fino con un giro y un pulso físico; Spotify lo resuelve con una barra que se arrastra mirando.\n• Apple Watch (Digital Crown): girar la corona navega listas y ajusta valores; da ticks hápticos al avanzar una distancia o un elemento (Apple HIG). Qué tomamos: velocidad del cambio ligada a la velocidad del giro; un tick por elemento.\n• Rewound (2019, retirada): click wheel en pantalla; cada giro y toque da un tick háptico; mantener izquierda o derecha regresa o adelanta (iCulture). Qué tomamos: el gesto circular funciona en un teléfono táctil.\n• RetroPod: click wheel virtual para navegar y volumen, con sensibilidad ajustable; conecta con Spotify y Apple Music (ficha de la app). Qué tomamos: sensibilidad configurable; la háptica no está confirmada, por verificar.\n• Spotify (actual): barra de progreso lineal en Now Playing; navegación por toques y listas. Es lo que hay que complementar, no reemplazar.\n\nInsights (hipótesis a validar en el test):\n1. El control fino necesita un tope que se sienta. Sin pulso, la barra obliga a mirar para soltar en el segundo correcto. Un usuario de Poweramp pidió justo eso (foro de Poweramp).\n2. Escuchar un álbum es una decisión, no un default. Quien lo elige quiere orden de pistas, saber en qué pista va y no recibir recomendaciones mezcladas.\n3. La nostalgia abre la puerta; la utilidad retiene. Rewound atrajo descargas por el look, pero el modo debe sostenerse por el control, no por la piel.\n\nBenchmark por verificar con capturas actuales de cada app.\n\nHow Might We: ¿cómo podríamos hacer que alguien escuche un álbum completo y lo controle con un solo gesto, sin depender de mirar la pantalla?\n\nHipótesis: si ofrecemos un modo opcional con un anillo táctil, ticks hápticos por pista y cada 5 segundos, y reproducción en orden, el usuario llegará a la pista y al momento correctos en menos pasos y con menos errores que con la barra de progreso.",
          restricciones:
            "Restricciones asumidas: respetar la identidad visual de Spotify; no copiar la marca ni el diseño del iPod, solo el principio de interacción; usar las APIs de háptica nativas; el modo es opcional y no reemplaza el reproductor actual.",
          iteraciones:
            "Tres direcciones en wireframes lo-fi; se eligió la C porque es la única que da control táctil sin esconder el álbum.\n• A · Réplica del iPod: pantalla arriba con menús de texto, rueda abajo; todo se navega con la rueda. Descartada: fiel pero lenta; buscar un álbum con menús anidados cuesta más que hoy, y además roza la imagen de marca de Apple.\n• B · Barra háptica: mantener el reproductor actual y agregar ticks a la barra de progreso. Descartada: barata de construir, pero no resuelve navegar pistas ni la escucha de álbum; sigue exigiendo mirar.\n• C · Anillo + vista de álbum: portada y lista de pistas arriba; anillo táctil abajo con dos modos, navegar pistas y hacer scrubbing. Elegida: un solo gesto para todo, el álbum sigue visible y la navegación compleja queda en la app normal.\n\nEntregables de esta fase: wireframes lo-fi de A, B y C, flujo de usuario de la C, mapa de ticks hápticos por acción y anotaciones de las decisiones.",
          decisiones:
            "• Dos modos, un gesto. El mismo giro navega o adelanta; el modo activo se nombra en pantalla y cambia el color del anillo.\n• La velocidad del giro manda. Giro lento = precisión de 1 s; giro rápido = saltos de 30 s, como pide la guía de la Digital Crown.\n• Háptica clara, no zumbido. Ticks cortos para eventos frecuentes y uno fuerte solo para minutos y cambio de pista, según las guías de Android.\n• Principio, no copia. Anillo con tipografía y verde de Spotify; nada de botones \"MENU\" ni forma de iPod, para evitar el problema de Rewound.",
          validacion:
            "Plan, aún no realizado. Test de usabilidad moderado con 5 usuarios de Spotify que escuchen álbumes completos al menos una vez por semana. Sesiones de 20 minutos, presenciales, con el prototipo de Figma en un teléfono real para sentir la háptica. Resultados: pendientes.\n\nTareas:\n1. \"Pon este álbum desde la primera canción y ve a la pista 7.\"\n2. \"Regresa al minuto 2:30 de la canción que está sonando.\"\n3. \"Repite la tarea 2 sin mirar la pantalla; avísame cuando creas que llegaste.\"\n4. \"Sal del Modo Clásico y vuelve al reproductor normal.\"\n\nPreguntas de cierre:\n• ¿En qué momentos escuchas un álbum completo y dónde está tu teléfono en ese momento?\n• ¿Qué fue lo más confuso del anillo?\n• Del 1 al 5, ¿qué tan seguro te sentiste de dónde ibas sin mirar?\n\nMétricas a medir:\n• Éxito por tarea: completó / con ayuda / no completó.\n• Precisión en tarea 2 y 3: segundos de diferencia contra 2:30.\n• Tiempo en tarea 1: segundos hasta que suena la pista 7.\n• Errores: giros en el modo equivocado o pista equivocada.\n• Confianza percibida: escala 1 a 5 al cierre.\n\nComparar contra la app actual con las mismas tareas 1 y 2 daría el \"antes vs. después\".",
        },
        solucionFinal:
          "Modo Clásico es un reproductor opcional dentro de Spotify: portada y pistas arriba, un anillo táctil abajo, y el álbum siempre en orden.\n\nPantallas:\n1. Entrada: botón \"Modo Clásico\" en la página del álbum, junto a Play. Abre el álbum en orden, sin aleatorio ni recomendaciones.\n2. Navegar pistas: girar el anillo mueve la selección en la lista; un tick por pista. Tocar el centro reproduce.\n3. Scrubbing: mantener el centro cambia el anillo a modo tiempo. Un tick cada 5 s y un pulso más fuerte cada minuto.\n4. Fin del álbum: pantalla de cierre con duración total y opciones: repetir, ver el siguiente del artista o salir.\n\nAccesibilidad:\n• Cada tick tiene equivalente visual (número de pista o tiempo grande) y anuncio para lector de pantalla.\n• Con VoiceOver o TalkBack, el anillo se comporta como un control ajustable: deslizar arriba o abajo cambia el valor.\n• Respeta el ajuste del sistema que apaga la háptica; el modo sigue funcionando solo con visuales.\n• Áreas táctiles de 44 × 44 pt en el centro y en los cuatro puntos del anillo.\n\nEstados y casos borde: sencillo de una pista (anillo solo en modo tiempo) · álbum de más de 30 pistas (ticks agrupados por disco) · pista no disponible en tu región (se salta con aviso) · plan Free sin tiempo on-demand (mensaje que explica el límite; reglas por verificar) · sin conexión (solo álbumes descargados) · dispositivo sin motor háptico.",
        resultado:
          "Concepto sin lanzar. Todavía no hay resultados: el test de usabilidad está planeado, no realizado.",
        aprendizaje:
          "• La nostalgia es un buen gancho, pero el caso se sostiene por una necesidad concreta: control fino sin mirar.\n• La háptica es diseño de interacción, no decoración: hay que especificar intensidad y frecuencia como se especifica un color.\n• Tomar el principio de un objeto icónico y no su forma evita problemas de marca y obliga a justificar cada decisión.\n• Siguiente: correr el test en teléfono real, ajustar la densidad de ticks según los errores y explorar el anillo en la pantalla de bloqueo y en relojes.",
      },
      {
        slug: "bbva-transferencias-seguras",
        title: "BBVA Transferencias Seguras",
        subtitle: "Una confirmación centrada en quién recibe el dinero",
        concept: true,
        image: "/projects/bbva-transferencias-seguras/01-cover.webp",
        imageAlt:
          "Portada del caso BBVA Transferencias Seguras: tres pantallas en iPhone sobre fondo azul y etiqueta Concept project, no afiliado a BBVA",
        homeTeaser:
          "Rediseño especulativo del envío de transferencias SPEI en la app BBVA México.",
        contexto:
          "Rediseño especulativo del envío de transferencias SPEI en la app BBVA México.\n\nPlataforma: app móvil BBVA México, iOS y Android.\nDuración: 2 semanas (concept sprint).\nHerramientas: Figma, FigJam.\nSupuesto técnico: que el banco pueda obtener el nombre del titular de la CLABE destino antes de enviar (por verificar su viabilidad con BBVA).\nFuera de alcance: modelos de detección de fraude, lógica de backend, DiMo y CoDi.",
        problema:
          "Una transferencia SPEI ya depositada no se puede cancelar, y el fraude es la principal causa de quejas contra bancos. Al enviar, el cliente no tiene una señal clara de a quién le llega el dinero. En SPEI el error cuesta caro: la app debe ayudar a detectar el error o el fraude antes de enviar, no después.\n\nFlujo actual para enviar a una cuenta nueva (por verificar): Inicio → Transferir → nuevo destinatario → capturar CLABE → nombre y concepto → monto → confirmar con biometría o Token móvil. La confirmación repite los datos que el propio usuario escribió; no hay señal de quién es el titular real ni de si ya le has enviado antes.\n\nPendiente: confirmar si hoy muestra el nombre del titular tras capturar la CLABE.\n\nEvidencia pública:\n• Según Banxico, un pago SPEI solo se cancela antes de depositarse. Si la cuenta es válida, el banco no puede retirar el dinero; depende de que el receptor acepte devolverlo (El Imparcial).\n• CONDUSEF clasifica el envío a cuenta equivocada como \"error operativo del cliente\", con poco margen del banco para revertirlo (misma fuente).\n• Enero a mayo de 2026: 35,762 reclamaciones por posible fraude ante CONDUSEF, +18.95% anual. En banca múltiple, 54% de 63,571 reclamaciones fueron por fraude; BBVA está entre las cuatro con más quejas (El CEO).\n• CONDUSEF reporta pérdidas promedio de 20 mil a 50 mil pesos por víctima; incluye transferencias electrónicas no reconocidas entre los tipos de fraude (Crónica).\n• Desde octubre de 2025 el MTU permite límites distintos para cuentas nuevas o de terceros: el sistema ya distingue \"nuevo\" de \"conocido\", pero el usuario no lo ve al enviar (Xataka México).\n• Banxico publicó las Circulares 9/2026 y 10/2026 (DOF, 17 jun 2026) para homologar la experiencia de transferencias móviles; entran en vigor el 14 dic 2026 (DPL News, adn40). Todos los bancos están rediseñando este flujo ahora.",
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
            "Los referentes del Reino Unido validan el nombre del destinatario contra la cuenta real y adaptan la advertencia al riesgo; la confirmación genérica no basta.\n• NatWest: Confirmation of Payee con \"It's a match\", \"close match\" con nombre sugerido, \"not a match\" o \"unable to check\". Qué tomamos: cuatro estados de coincidencia con lenguaje claro y una acción por estado.\n• Wise: verifica el nombre al crear un destinatario nuevo y pide revisar antes de pagar. Qué tomamos: la validación ocurre al dar de alta, no al final del flujo.\n• Revolut: advertencia en todo destinatario nuevo; si el pago parece riesgoso, pregunta el motivo y muestra avisos según la respuesta. Qué tomamos: alerta graduada, con aviso ligero para lo nuevo e intervención con preguntas para lo riesgoso.\n• BBVA México (actual, por verificar): confirmación con los datos capturados por el usuario; límites MTU configurables para cuentas nuevas. Es lo que hay que hacer visible al momento de enviar.\n\nEn México ya existe infraestructura para obtener el titular de una CLABE: Fintoc devuelve nombre y RFC tras un microdepósito de $0.01 (Fintoc Docs). Un caso de Revolut ante el ombudsman británico muestra el límite: el cliente mintió en las preguntas guiado por el estafador.\n\nInsights (hipótesis a validar en el test):\n1. El usuario confía en lo que él mismo escribió. Si la confirmación repite su captura, no detecta el error; necesita un dato que venga del banco.\n2. \"Nuevo\" es la señal de riesgo más simple de entender. \"Nunca le has enviado a esta cuenta\" se entiende sin explicar qué es fraude.\n3. El estafador guía las respuestas. La alerta debe nombrar el guion típico (\"alguien al teléfono te pide mover tu dinero\") y no solo preguntar.\n\nBenchmark por verificar con capturas actuales de cada app.\n\nHow Might We: ¿cómo podríamos hacer que un cliente BBVA sepa con certeza a quién le envía dinero antes de confirmar, sin frenar los envíos a contactos de siempre?\n\nHipótesis: si la confirmación muestra el titular real, el banco y el historial con esa cuenta, y alerta de forma graduada cuando la cuenta es nueva, el cliente detectará más errores de captura y se detendrá más ante un guion de fraude, sin alargar los envíos frecuentes.",
          restricciones:
            "Restricciones asumidas: respetar la identidad visual de BBVA; no agregar pasos a envíos a contactos frecuentes; compatible con las guías de Banxico (Circ. 9/2026).",
          iteraciones:
            "Tres direcciones en wireframes lo-fi; se eligió la C porque protege la cuenta nueva sin castigar al contacto frecuente.\n• A · Aviso universal: un modal de \"Verifica los datos\" antes de cada envío. Descartada: aparece siempre, así que el usuario aprende a cerrarlo sin leer.\n• B · Espera obligatoria: retener unos minutos todo envío a cuenta nueva. Descartada: protege, pero frena pagos legítimos urgentes y no explica el porqué.\n• C · Tarjeta de destinatario + alerta graduada: confirmación centrada en quién recibe; el nivel de alerta depende de si la cuenta es nueva, si el nombre coincide y del monto. Elegida: sin fricción para contactos conocidos, fricción clara y explicada cuando hay riesgo.\n\nEntregables de esta fase: wireframes lo-fi de A, B y C, flujo de usuario de la C con sus ramas por nivel de alerta y anotaciones de las decisiones.",
          decisiones:
            "• El nombre lo dice el banco, no el usuario. El titular aparece como dato verificado, separado de lo que el usuario escribió.\n• Tres niveles, no uno. Contacto conocido: sin alerta. Cuenta nueva: franja informativa. Nueva + señal de riesgo: pantalla de intervención.\n• Nombrar el guion, no el miedo. \"BBVA nunca te pedirá mover tu dinero a una cuenta segura\" en vez de \"Ten cuidado con fraudes\". La frase es una propuesta; por verificar con la política oficial de BBVA.\n• Cancelar es el botón primario en riesgo. En la intervención se invierte la jerarquía: detenerse es lo fácil.\n• Identidad BBVA intacta. Se usan la paleta y tipografía de la marca; el cambio es de estructura y contenido.",
          validacion:
            "Plan, aún no realizado. Test de usabilidad moderado con 5 clientes de BBVA México, 20 minutos cada uno, por videollamada con el prototipo de Figma. Resultados: pendientes.\n\nTareas:\n1. \"Envíale $500 a tu hermana, que ya está en tus contactos.\" (mide que no haya fricción de más)\n2. \"Envía $2,000 a esta CLABE nueva para pagar una renta.\" La CLABE pertenece a otro titular; ¿lo detecta?\n3. \"Te llamó alguien de 'BBVA' y te pide mover tu dinero a esta cuenta. Hazlo como lo harías.\" Observar si se detiene en la intervención.\n4. \"Antes de confirmar, dime quién va a recibir el dinero y cómo lo sabes.\"\n\nPreguntas de cierre:\n• ¿Alguna vez enviaste dinero a una cuenta equivocada o te intentaron estafar? ¿Qué pasó?\n• ¿La alerta te pareció útil o estorbosa?\n• Del 1 al 5, ¿qué tan seguro te sentiste de a quién le enviabas?\n\nMétricas a medir:\n• Detección de error: participantes que detienen el envío en la tarea 2.\n• Freno ante fraude: participantes que cancelan en la tarea 3.\n• Fricción en conocidos: segundos y toques para completar la tarea 1.\n• Comprensión: respuesta correcta a la tarea 4.\n• Confianza percibida: escala 1 a 5 al cierre.\n\nComparar contra la app actual con las tareas 1 y 2 daría el \"antes vs. después\". La tarea 3 es un escenario simulado; se avisa al participante al terminar.",
        },
        solucionFinal:
          "La confirmación deja de ser un resumen de lo capturado y se vuelve una tarjeta de quién recibe, con alerta proporcional al riesgo.\n\nPantallas:\n1. Captura de CLABE: al completar los 18 dígitos aparecen el banco y el titular que reporta la cuenta, antes de escribir el monto.\n2. Coincidencia de nombre: si el nombre que escribiste difiere del titular: \"El titular es María L. Pérez. ¿Es a quien quieres enviar?\"\n3. Tarjeta de destinatario: titular, banco, últimos 4 dígitos e historial: \"Último envío: 12 oct · $1,500\" o \"Nunca le has enviado\".\n4. Alerta de cuenta nueva: franja ámbar con una pregunta: \"¿Alguien te está pidiendo esta transferencia por teléfono o mensaje?\"\n5. Intervención: si responde que sí o el monto supera su límite para cuentas nuevas, guion típico de fraude, botón principal \"Cancelar y llamar a BBVA\" y continuar como acción secundaria.\n\nAccesibilidad:\n• El nivel de alerta se comunica con ícono y texto, no solo con color ámbar o rojo.\n• Contraste AA mínimo en franjas de alerta.\n• El lector de pantalla anuncia primero el titular y el estado de coincidencia; botones de 44 × 44 pt.\n\nEstados y casos borde: nombre coincide · coincidencia parcial (abreviaturas, acentos) · no coincide · no se pudo verificar (banco no responde) · cuenta de empresa · primer envío a un contacto ya guardado · monto arriba del MTU · sin conexión.",
        resultado:
          "Concepto sin lanzar. Todavía no hay resultados: el test de usabilidad está planeado, no realizado.",
        aprendizaje:
          "• En pagos irreversibles, el diseño vale más antes del botón \"Enviar\" que después: la aclaración llega tarde.\n• La fricción funciona si es proporcional: un aviso que sale siempre deja de leerse.\n• El concepto depende de un dato (titular de la CLABE) que el banco debe poder obtener; es el primer riesgo a validar con negocio y tecnología.\n• Siguiente: correr el test, alinear el flujo con las guías de Banxico de diciembre 2026 y explorar la misma tarjeta de destinatario para envíos a celular (DiMo).",
      },
      {
        slug: "banorte-estado-de-cuenta",
        title: "Banorte Estado de Cuenta",
        subtitle: "Una pantalla para decidir cuánto pagar de tu tarjeta",
        concept: true,
        image: "/projects/banorte-estado-de-cuenta/01-cover.webp",
        imageAlt:
          "Portada del caso Banorte Estado de Cuenta: tres pantallas en iPhone y etiqueta Concept project, no afiliado a Banorte",
        homeTeaser:
          "Rediseño especulativo de cómo un cliente de Banorte móvil entiende su estado de cuenta de tarjeta de crédito y decide cuánto pagar.",
        contexto:
          "Rediseño especulativo de cómo un cliente de Banorte móvil entiende su estado de cuenta de tarjeta de crédito y decide cuánto pagar.\n\nPlataforma: app móvil iOS y Android.\nDuración: 2 semanas (concept sprint).\nHerramientas: Figma, FigJam.\nFuera de alcance: cálculo real de intereses en backend, reestructuras de deuda y meses sin intereses a detalle.",
        problema:
          "El estado de cuenta muestra tres montos (pago mínimo, pago para no generar intereses, saldo total) sin decir qué pasa con cada uno. En Banorte, 48% de las tarjetas no se pagan completas cada mes. El cliente ve cuánto debe, pero no cuánto le conviene pagar ni cuánto le cuesta pagar menos.\n\nFlujo actual para decidir cuánto pagar (por verificar en la app): Inicio → tarjeta de crédito → \"Detalle de mi tarjeta\" (saldo total, crédito disponible, fechas de corte y pago) → Estado de cuenta en PDF para ver pago mínimo y pago para no generar intereses → regresar a Pagar y escribir el monto. La comparación entre montos y su costo la hace el usuario de memoria.\n\nLa propuesta junta en una pantalla lo que hoy está repartido entre el detalle, el PDF y el formulario de pago.\n\nEvidencia pública:\n• En Banorte, 48.0% de las tarjetas son no-totaleras y concentran 70.9% del saldo; su tasa efectiva promedio es 38.0% (diciembre 2025, Banxico).\n• En el sistema, 24.4% de los no-totaleros pagó exactamente el mínimo y 4.5% ni eso (Banxico).\n• La tarjeta Banorte Básica tiene tasa ordinaria fija de 69.00% anual y CAT promedio de 95.6% sin IVA (folleto Banorte).\n• El propio folleto advierte: \"Realizar sólo el pago mínimo, aumenta el tiempo de pago y el costo de la deuda\". Esa advertencia vive en un PDF, no en el momento de pagar.\n• CONDUSEF llama al mínimo una \"falsa sensación de control\" y recomienda simular antes de pagar (El Imparcial).\n• La página de Banorte Móvil lista saldo, fechas y pago 24/7, pero no menciona pago mínimo ni pago para no generar intereses (Banorte).",
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
            "Los referentes muestran el costo de pagar menos en el momento de pagar; en México ese dato suele quedarse en el PDF.\n• Apple Card: al elegir un pago único, calcula y muestra los intereses estimados para ese monto; usa una rueda de pago. Qué tomamos: el costo visible antes de confirmar, con aviso de que es estimado.\n• Nu México: en Estados de cuenta, el pago mínimo aparece justo debajo del saldo total; la tasa vive en el perfil. Qué tomamos: jerarquía simple de montos; por mejorar: unir monto y tasa en una vista.\n• BBVA México: liquidar con un clic desde débito y domiciliar el pago para no generar intereses. Qué tomamos: domiciliar como siguiente paso natural después de pagar.\n\nInsights (hipótesis a validar en el test):\n1. \"Pago para no generar intereses\" no se entiende como meta. El nombre describe una regla, no un resultado; \"Pagar sin intereses\" podría leerse mejor.\n2. El mínimo se elige por ser el primero o el más chico. Sin el costo al lado, el monto menor parece la opción segura.\n3. La fecha límite pesa más que la fecha de corte. El usuario actúa por \"cuántos días me quedan\", no por el ciclo.\n\nBenchmark por verificar con capturas actuales de cada app.\n\nHow Might We: ¿cómo podríamos hacer que un cliente de Banorte sepa cuánto pagar, cuánto le cuesta cada opción y para cuándo, sin abrir el PDF?\n\nHipótesis: si mostramos los tres montos lado a lado, con intereses estimados y la fecha límite en días, más clientes elegirán el pago sin intereses cuando puedan cubrirlo, y quienes paguen menos lo harán sabiendo su costo.",
          restricciones:
            "Restricciones asumidas: respetar la identidad visual de Banorte; usar solo datos que ya existen en el estado de cuenta; montos y fechas oficiales sin redondear; intereses mostrados como estimación, nunca como monto final.",
          iteraciones:
            "Tres direcciones en wireframes lo-fi; se eligió la C porque compara las opciones sin esconder ninguna ni empujar al usuario.\n• A · Glosario: estado de cuenta actual con íconos \"?\" que explican cada término. Descartada: explica, pero no ayuda a decidir; el costo sigue sin calcularse.\n• B · Slider: un control deslizante del mínimo al total que actualiza el interés estimado. Descartada: potente, pero sin anclas claras; difícil con lector de pantalla y con montos exactos.\n• C · Tarjetas de opción: tres opciones apiladas (sin intereses, mínimo, total) con costo y resultado; \"Otro monto\" al final. Elegida: anclas claras, comparación directa y accesible; el slider queda como \"Otro monto\".\n\nEntregables de esta fase: wireframes lo-fi de A, B y C, flujo de usuario de la C y anotaciones de las decisiones.",
          decisiones:
            "• Nombres por resultado. \"Pagar sin intereses\" como etiqueta, con el término oficial debajo en texto secundario para no romper la regulación.\n• El costo vive junto al monto. El interés estimado aparece en la misma fila, no en otra pantalla.\n• Recomendar sin esconder. El mínimo sigue visible y elegible; solo se le agrega su costo.\n• Estimado siempre dice estimado. \"≈\" y nota \"El monto final aparece en tu siguiente estado de cuenta\", como hace Apple Card.\n• Identidad Banorte intacta. Se usa el rojo y la tipografía de la marca; el cambio es de estructura, no de estilo.",
          validacion:
            "Plan, aún no realizado. Test de usabilidad moderado con 5 clientes con tarjeta de crédito Banorte, 15 a 20 minutos cada uno, por videollamada con el prototipo de Figma. Resultados: pendientes.\n\nTareas:\n1. \"Tienes $3,000 disponibles este mes. ¿Cuánto pagarías y por qué?\"\n2. \"¿Cuántos días te quedan para pagar sin cargos?\"\n3. \"Si pagas solo el mínimo, ¿cuánto crees que te costará el próximo mes?\"\n4. \"¿Por qué el pago sin intereses es menor que tu saldo total?\"\n\nPreguntas de cierre:\n• ¿Cómo decides hoy cuánto pagar de tu tarjeta?\n• ¿Qué fue lo más confuso de esta versión?\n• Del 1 al 5, ¿qué tan seguro te sientes de tu decisión de pago?\n\nMétricas a medir:\n• Comprensión de montos: explica con sus palabras la diferencia entre mínimo y sin intereses (sí / parcial / no).\n• Exactitud del costo: su estimado en tarea 3 vs. el mostrado en pantalla.\n• Tiempo en tarea 2: segundos hasta decir la fecha límite correcta.\n• Confianza: escala 1 a 5 al cierre.\n\nComparar contra la app actual con las mismas tareas 2 y 3 daría el \"antes vs. después\".",
        },
        solucionFinal:
          "El detalle de la tarjeta abre con una sola pregunta, \"¿Cuánto pago este mes?\", y tres respuestas con su consecuencia.\n\nPantallas:\n1. Resumen de tarjeta: fecha límite como \"Faltan 6 días · mar 10 nov\" arriba; debajo, el pago sin intereses como monto principal.\n2. ¿Cuánto pago?: tres opciones, Pagar sin intereses (recomendado), Pago mínimo y Saldo total, más \"Otro monto\". Cada una dice qué pasa: \"$0 de intereses\" o \"≈ $X de intereses el próximo mes\".\n3. Desglose: por qué el pago sin intereses no es el saldo total: compras del periodo, mensualidades de MSI y lo que queda para después.\n4. Confirmación: monto, cuenta de cargo y fecha; si eligió menos del pago sin intereses, el costo estimado se repite antes de confirmar.\n5. Después de pagar: comprobante y la sugerencia de domiciliar el pago sin intereses.\n\nEjemplo ilustrativo para el prototipo: con tasa de 69% anual (Banorte Básica), 1 mes de interés ordinario equivale a ≈ 5.75% + IVA del saldo no pagado. Es un cálculo simplificado; el real usa saldo promedio diario.\n\nAccesibilidad:\n• La opción recomendada se marca con texto (\"Recomendado\"), no solo con color; el rojo de marca no se usa para \"error\".\n• Montos leídos completos por lector de pantalla (\"diez mil pesos\"), sin abreviaturas.\n• Contraste AA mínimo y áreas táctiles de 44 × 44 pt; \"Otro monto\" usa teclado numérico, no slider.\n\nEstados y casos borde: saldo en $0 (\"No tienes nada que pagar\") · pago sin intereses ya cubierto · pago parcial hecho (resta lo que falta) · fecha límite hoy o vencida (aviso sin culpa, opción de pagar ya) · saldo a favor · corte en proceso (montos del periodo anterior hasta que cierre) · sin conexión (datos en caché, pago deshabilitado).",
        resultado:
          "Concepto sin lanzar. Todavía no hay resultados: el test de usabilidad está planeado, no realizado.",
        aprendizaje:
          "• En productos de crédito, el diseño no cambia la tasa, pero sí cuándo el usuario ve su costo: mover la advertencia del PDF al botón de pagar.\n• Recomendar no es esconder: el mínimo sigue disponible, solo con su consecuencia al lado.\n• Siguiente: correr el test, validar el texto \"Pagar sin intereses\" con legal y explorar recordatorios ligados a la fecha límite.",
      },
      {
        slug: "mercado-pago-metas-de-ahorro",
        title: "Mercado Pago Metas de Ahorro",
        subtitle: "Apartados que dicen cuánto falta y cuándo llegas a tu meta",
        concept: true,
        image: "/projects/mercado-pago-metas-de-ahorro/01-cover.webp",
        imageAlt:
          "Portada del concept project Metas de ahorro, no afiliado a Mercado Pago, con tres pantallas del rediseño",
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
          "Rediseño especulativo de cómo un usuario de Mercado Pago México ve sus Apartados y lo que rinde su dinero.\n\nPlataforma: app móvil iOS y Android.\nDuración: 2 semanas (concept sprint).\nHerramientas: Figma, FigJam.\nFuera de alcance: cálculo real de rendimientos, lógica del fondo, Meli+ como producto e inversiones fuera de Apartados.",
        problema:
          "Mercado Pago anuncia su tasa en porcentaje, pero el usuario ahorra en pesos y en fechas. La tasa cambia por saldo, por tipo de dinero (disponible o Apartado), por depósitos del mes y por membresía. El usuario ve un porcentaje, pero no cuánto le falta ni cuándo llega a su meta. Entre ambas cosas hay reglas que cambian cada pocos meses.\n\nFlujo actual (por verificar en la app): Inicio → sección de dinero y rendimientos → Apartados → elegir un Apartado → ver saldo. La tasa vigente y sus condiciones viven en otra pantalla o en términos y condiciones. No hay un lugar que diga \"te faltan $X y llegas en tal mes\".\n\nPendiente: confirmar la tasa vigente al publicar.\n\nEvidencia pública:\n• Los Apartados dividen el dinero de la cuenta en \"bolsas\" con nombre; ese dinero no cuenta como saldo disponible (El Cronista, ene 2026).\n• Los usuarios ya los usan como metas: 545,000 Apartados para vacaciones en los primeros meses de 2026, cerca del doble que el año anterior (Descubre, jul 2026).\n• Más de 15,000 Apartados para conciertos y festivales; 1,500 de fans de BTS (El Cronista).\n• Oct 2025: 7% base y hasta 13% si ingresas $3,000 al mes, solo sobre los primeros $25,000 (Xataka).\n• Jun 2026: el máximo baja a 12% (6% base + 6% sobretasa), mismo tope de $25,000 (Xataka).\n• Sep 2026: 15% en Apartados para miembros Meli+ contra 12% para el resto (DPL News).\n• Las reglas cambiaron al menos 3 veces en 12 meses, con condiciones que dependen de depósitos, tope de saldo, tipo de dinero y membresía.",
        proceso: {
          research:
            "En México se ahorra mucho, pero poco en productos que rinden; la app compite contra el \"guardadito\".\n\nContexto de ahorro en México:\n• 66.4% de la población tuvo algún tipo de ahorro en 2024 (ENIF 2024, citada por Xataka).\n• 63.0% de personas de 18 a 70 años tenía al menos una cuenta de ahorro formal (INEGI, ENIF 2024).\n• Según CONDUSEF, 41% ahorra en casa, 20% en tandas y solo 3% invierte para obtener rendimientos (Xataka).\n• 51.8% de quienes llevan registro de gastos separa el dinero para pagos; solo 19.5% usa apps para eso (INEGI).\n\nBenchmark:\n• Monzo (Pots): monto meta bajo lo ahorrado, barra de progreso y aviso al llegar. Qué tomamos: la meta como dato principal del Apartado.\n• Nu México (Cajitas): hasta 10 Cajitas con nombre; tasa y GAT en la letra pequeña. Qué tomamos: nombre por meta; mostrar GAT junto a la tasa, no escondida.\n• Mercado Pago (actual): Apartados con nombre; tasa en %, reglas en noticias y T&C (por verificar). Es lo que hay que traducir a pesos y fechas.\n\nLos usuarios de Monzo pidieron por años una fecha objetivo, el ahorro sugerido por semana y un aviso si se atrasan (Monzo Community).\n\nInsights (hipótesis a validar en el test):\n1. Se piensa en pesos y fechas, no en porcentajes. \"Me faltan $4,000 para Cancún\" pesa más que \"12% anual\".\n2. Una regla que no se ve no se cumple. Si el depósito mínimo del mes no aparece con su avance, la sobretasa se pierde sin aviso.\n3. La constancia necesita ritmo, no solo un total. Saber \"$500 por quincena\" motiva más que una barra al 30%.\n\nBenchmark por verificar con capturas actuales de cada app.\n\nHow Might We: ¿cómo podríamos hacer que un usuario sepa, en pesos y fechas, cuánto rinde su dinero y cuándo llega a su meta?\n\nHipótesis: si cada Apartado muestra lo que falta, la fecha estimada y lo ganado en pesos, y la app avisa qué falta para mantener la tasa del mes, el usuario depositará con más constancia y explicará su rendimiento sin buscar fuera de la app.",
          restricciones:
            "Restricciones asumidas: respetar la identidad visual de Mercado Pago; no cambiar tasas ni reglas, solo explicarlas; proyecciones siempre marcadas como estimadas.",
          iteraciones:
            "Tres direcciones en wireframes lo-fi; se eligió la C porque une la meta y la regla de la tasa en la misma pantalla.\n• A · Calculadora: simulador aparte; ingresas monto y plazo y te dice cuánto ganas. Descartada: útil pero desconectado; el usuario tiene que ir a buscarlo y no ve su dinero real.\n• B · Barra de progreso: cada Apartado con barra y porcentaje de avance, al estilo Monzo. Descartada: motiva, pero no dice cuándo llegas ni qué pasa con la tasa del mes.\n• C · Meta con fecha + regla visible: cada Apartado muestra lo que falta, fecha estimada y ganancia en pesos; arriba, el estado de la tasa del mes. Elegida: responde las tres preguntas (cuánto rinde, cuánto falta, cuándo) sin salir de la pantalla.\n\nEntregables de esta fase: wireframes lo-fi de A, B y C, flujo de usuario de la C y anotaciones de las decisiones.",
          decisiones:
            "• Pesos primero, porcentaje después. \"Ganaste $84 este mes\" arriba; \"12% anual\" como dato secundario.\n• Proyección honesta. La fecha estimada dice \"si sigues depositando $500 por quincena\" y se marca como estimación con la tasa de hoy.\n• La regla de la tasa con avance. El depósito mínimo del mes se muestra como progreso, con aviso 5 días antes del cierre.\n• Tope visible. Si un Apartado rebasa el saldo que rinde, se avisa en pesos cuánto ya no genera ganancia.\n• Identidad Mercado Pago intacta. Se usan el azul y la tipografía de la marca; el rediseño es de información, no de estilo.",
          validacion:
            "Plan, aún no realizado. Test de usabilidad moderado con 5 usuarios de Mercado Pago que usen o hayan usado Apartados, 15 a 20 minutos cada uno, por videollamada con el prototipo de Figma. Resultados: pendientes.\n\nTareas:\n1. \"Dime cuánto ganaste este mes por tu dinero ahorrado.\"\n2. \"¿Qué tienes que hacer para mantener la tasa más alta este mes?\"\n3. \"Crea una meta de $8,000 para un viaje en abril.\"\n4. \"¿Cuándo llegas a la meta de tu Apartado 'Concierto'? ¿Qué pasa si retiras $1,000?\"\n\nPreguntas de cierre:\n• ¿Dónde guardas hoy el dinero que ahorras para algo específico?\n• ¿Qué fue lo más confuso de esta versión?\n• Del 1 al 5, ¿qué tanto confías en la fecha estimada que viste?\n\nMétricas a medir:\n• Éxito por tarea: completó / con ayuda / no completó.\n• Comprensión de la tasa: explica la regla del mes con sus palabras (sí / parcial / no).\n• Tiempo en tarea 1: segundos hasta decir la ganancia en pesos.\n• Confianza en la proyección: escala 1 a 5 al cierre.\n\nComparar contra la app actual con las mismas tareas 1 y 2 daría el \"antes vs. después\". La constancia de depósitos solo se mediría en un piloto real, fuera del alcance de este concepto.",
        },
        solucionFinal:
          "Los Apartados se vuelven metas: cada uno dice cuánto falta, cuándo llegas y cuánto llevas ganado en pesos.\n\nPantallas:\n1. Resumen de ahorro: total ahorrado, ganancia del mes en pesos y un chip \"Tasa del mes\" con su estado (p. ej. \"Te faltan $1,200 de depósitos para mantener 12%\").\n2. Detalle de la tasa: la regla en una frase, el tope de saldo que rinde y qué parte de tu dinero queda arriba o abajo de él.\n3. Apartado como meta: lo ahorrado sobre la meta, lo que falta, fecha estimada de llegada y ganancia acumulada.\n4. Crear meta: nombre, monto y fecha deseada; la app sugiere un depósito por quincena para llegar.\n5. Meta alcanzada: celebración breve con lo ganado en rendimientos y opciones: retirar, seguir ahorrando o nueva meta.\n\nAccesibilidad:\n• El estado de la meta se comunica con texto (\"vas a tiempo\", \"vas atrasado\"), no solo con color.\n• Contraste AA mínimo en montos y textos sobre fondos azules.\n• Cifras legibles por lector de pantalla como frase completa (\"te faltan cuatro mil pesos\").\n• Áreas táctiles de 44 × 44 pt.\n\nEstados y casos borde: sin Apartados (primer uso) · meta sin fecha · meta vencida sin completar · retiro que retrasa la fecha · cambio de tasa (aviso con fecha y proyección recalculada) · saldo arriba del tope · sin conexión (datos en caché, proyección deshabilitada).",
        resultado:
          "Concepto sin lanzar. Todavía no hay resultados: el test de usabilidad está planeado, no realizado.",
        aprendizaje:
          "• En productos de ahorro, traducir vale más que agregar: la tasa ya existe, falta decirla en pesos y fechas.\n• Una proyección solo ayuda si dice de qué depende; sin esa condición se lee como promesa.\n• Siguiente: correr el test, ajustar el texto de la regla según lo que los usuarios no entiendan y explorar depósitos automáticos por quincena.",
      },
      {
        slug: "wise-usd-a-mxn",
        title: "Wise USD a MXN",
        subtitle: "Convertir dólares a pesos sabiendo si conviene hoy o esperar",
        concept: true,
        image: "/projects/wise-usd-a-mxn/01-cover.webp",
        imageAlt:
          "Portada del concept project Convertir a MXN con contexto, no afiliado a Wise, con tres pantallas del rediseño",
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
          "Rediseño especulativo de cómo un freelancer en México decide cuándo convertir sus dólares a pesos.\n\nPlataforma: app móvil iOS y Android.\nDuración: 2 semanas (concept sprint).\nHerramientas: Figma, FigJam.\nUsuario objetivo: freelancer o contratista en México que cobra en USD a clientes de EE. UU.\nSupuesto clave: el usuario ya tiene saldo USD en Wise. Hoy la disponibilidad para residentes en México es limitada (por verificar).\nFuera de alcance: asesoría fiscal (RESICO, ISR), predicción del tipo de cambio y lógica de backend.",
        problema:
          "Wise ya tiene alertas de tasa y conversiones automáticas, pero viven en pantallas separadas. Tiene las piezas para convertir en buen momento, pero el usuario tiene que armarlas solo: tasa, historial, alerta y comisión viven en lugares distintos. Antes de convertir, no ve en un solo lugar si la tasa de hoy es buena ni cuántos pesos netos recibirá.\n\nFlujo actual para decidir si convertir hoy (por verificar en la app): Inicio → saldo USD → Convertir → elegir MXN → ver tasa y comisión. Para comparar contra días anteriores hay que salir al conversor con gráfica. Para una alerta: Perfil → Notificaciones → Alertas de tipo de cambio. Para convertir sola a una tasa: otro flujo, Auto Conversions.\n\nEvidencia pública:\n• Las alertas se configuran desde Perfil → Notificaciones, fuera del flujo de conversión (Wise Help).\n• Auto Conversions convierte al llegar a una tasa objetivo; máximo 15 pendientes, no se editan (hay que cancelar y crear otra) y no corren en domingo (Wise Help).\n• MXN está entre las 24 monedas soportadas por Auto Conversions desde su lanzamiento en 2022 (Wise Blog).\n• Recibir USD por ACH es gratis; por wire o SWIFT cuesta 6.11 USD por pago (Wise Help).\n• El tipo de cambio FIX pasó de 18.8148 (29 oct 2026) a 18.6285 (4 nov 2026). En 2,000 USD son 372.60 MXN de diferencia en una semana (Banxico).\n• México recibió 61,719 millones de USD en remesas en 2025, -4.56% anual, según Banxico (Zeta Tijuana). No se encontró una cifra oficial que separe el ingreso freelance en USD.\n• Wise lanzó envíos desde México en enero de 2025 (The Paypers). Usuarios reportan que residentes en México no pueden recibir en una cuenta Wise local (Reddit r/ExpatFinance). Verificar disponibilidad actual.",
        proceso: {
          research:
            "Los referentes dan contexto (rango reciente) o automatizan (tasa objetivo); ninguno de los revisados junta ambos con el neto en pesos.\n• Conversor web de Wise: gráfica de 48 h a 5 años y resumen de máximo y mínimo de 30 y 90 días; alertas gratis. Qué tomamos: el resumen \"máx / mín 30 días\" como contexto rápido, dentro del flujo de conversión.\n• Revolut Auto-Exchange: conversión automática a tasa objetivo desde 2019; no ejecuta si la tasa se aleja más de 0.75%. Qué tomamos: explicar en lenguaje claro cuándo y por qué una orden no se ejecuta.\n• DolarApp: comunica una sola comisión fija (3 USD) y compara pesos netos finales; dato de su propio blog. Qué tomamos: mostrar el resultado en pesos netos, no solo la tasa.\n\nInsights (hipótesis a validar en el test):\n1. El usuario piensa en pesos netos, no en tasa. \"Me llegan 37,200\" pesa más que \"18.63\".\n2. \"¿Es buen día?\" necesita una referencia. Sin el rango reciente, la tasa de hoy no dice nada.\n3. Esperar es una decisión, no una omisión. Fijar una tasa objetivo debe estar a un toque desde la conversión, no en Perfil.\n\nBenchmark por verificar con capturas actuales de cada app.\n\nHow Might We: ¿cómo podríamos ayudar a un freelancer a decidir, en una sola pantalla, si convierte hoy o espera una mejor tasa, sabiendo cuántos pesos recibe?\n\nHipótesis: si mostramos la tasa de hoy contra el rango de 30 días, el neto en pesos después de comisión y un atajo a tasa objetivo, el usuario decidirá más rápido y con más confianza que hoy, sin salir del flujo.",
          restricciones:
            "Restricciones asumidas: respetar la identidad visual de Wise; usar solo funciones que ya existen (alertas, Auto Conversions, conversión); mostrar siempre comisión y tasa antes de confirmar.",
          iteraciones:
            "Tres direcciones en wireframes lo-fi; se eligió la C porque es la única que pone contexto, neto y alternativa de esperar en el mismo paso.\n• A · Dashboard de mercado: pestaña nueva con gráfica grande, alertas y órdenes. Descartada: poderosa pero parece app de trading; aleja al usuario de convertir y agrega una sección más.\n• B · Alerta proactiva: notificación cuando llega un pago USD con \"¿convertir ahora?\". Descartada: útil como entrada, pero sin contexto al tocarla; empuja a convertir sin comparar.\n• C · Convertir con contexto: la pantalla de conversión suma una barra de rango 30 días, neto en MXN y \"Esperar a una tasa\". Elegida: reusa el flujo que ya existe; convertir y esperar quedan al mismo nivel.\n\nEntregables de esta fase: wireframes lo-fi de A, B y C, flujo de usuario de la C y anotaciones de las decisiones.",
          decisiones:
            "• Pesos netos arriba, tasa abajo. El usuario decide por lo que le llega, así que el neto manda la jerarquía.\n• Rango, no predicción. La barra muestra hechos (máx/mín de 30 días). Nada de \"buen momento\" ni recomendaciones de mercado.\n• Alerta y conversión automática en un mismo paso. Un switch elige \"solo avísame\" o \"convierte por mí\"; hoy están en flujos distintos.\n• Reglas visibles. Antes de crear la orden se dice: no corre en domingo, no se edita, máximo 15 pendientes.\n• Identidad Wise intacta. Se usan su paleta y tipografía; el rediseño es de estructura, no de estilo.",
          validacion:
            "Plan, aún no realizado. Test de usabilidad moderado con 5 freelancers en México que cobran en USD, 15 a 20 minutos cada uno, por videollamada con el prototipo de Figma. Resultados: pendientes.\n\nTareas:\n1. \"Te acaban de pagar 2,000 USD. Dime si convertirías hoy y por qué.\"\n2. \"¿Cuántos pesos te llegarían si conviertes ahora?\"\n3. \"Prefieres esperar a una mejor tasa. Deja todo listo para que se convierta solo.\"\n4. \"Cancela esa orden y crea solo un aviso.\"\n\nPreguntas de cierre:\n• ¿Cómo decides hoy cuándo convertir tus dólares?\n• ¿Qué fue lo más confuso de esta versión?\n• Del 1 al 5, ¿qué tan seguro te sentiste de tu decisión?\n\nMétricas a medir:\n• Éxito por tarea: completó / con ayuda / no completó.\n• Precisión del neto (tarea 2): diferencia entre lo que dice y el neto real en pantalla.\n• Tiempo en tarea 3: segundos hasta crear la orden.\n• Confianza percibida: escala 1 a 5 al cierre.\n\nComparar contra la app actual con las tareas 1 y 3 daría el \"antes vs. después\".",
        },
        solucionFinal:
          "\"Convertir a MXN\" se vuelve una pantalla de decisión: tasa de hoy en contexto, pesos netos y dos salidas claras, convertir ahora o esperar.\n\nPantallas:\n1. Convertir con contexto: monto en USD, tasa actual y una barra con mínimo y máximo de 30 días que marca dónde está hoy.\n2. Desglose neto: USD enviados, comisión de Wise, tasa aplicada y pesos que llegan, en ese orden.\n3. Esperar a una tasa: sugiere tasas objetivo (p. ej. máximo de 30 días) y muestra el neto que recibiría en cada una. Crea una Auto Conversion o solo una alerta.\n4. Mis órdenes: lista de conversiones pendientes con tasa objetivo, distancia a la tasa actual y acción de cancelar.\n\nAccesibilidad:\n• La posición en el rango se dice también en texto: \"Hoy: 18.63, cerca del máximo de 30 días\".\n• Subida o bajada con ícono y signo, no solo verde o rojo.\n• Áreas táctiles de 44 × 44 pt; la barra de rango tiene etiqueta para lector de pantalla.\n\nEstados y casos borde: sin historial suficiente (ocultar barra) · saldo insuficiente al llegar la tasa (orden cancelada + aviso) · 15 órdenes alcanzadas · domingo / mercado cerrado · tasa moviéndose mientras confirma (tasa garantizada por tiempo limitado, por verificar) · sin conexión (última tasa con hora, conversión deshabilitada).",
        resultado:
          "Concepto sin lanzar. Todavía no hay resultados: el test de usabilidad está planeado, no realizado.",
        aprendizaje:
          "• En fintech, a veces el producto ya tiene las funciones; el trabajo es juntarlas en el momento de decidir.\n• Mostrar contexto sin dar consejo financiero es una línea de diseño: rango sí, predicción no.\n• Siguiente: confirmar la disponibilidad de saldo USD para residentes en México, correr el test y explorar la entrada desde la notificación de pago recibido (dirección B).",
      },
      {
        slug: "aeromexico-reacomodo",
        title: "Aeroméxico Reacomodo",
        subtitle: "Reacomodo en un toque cuando tu vuelo se retrasa o se cancela",
        concept: true,
        image: "/projects/aeromexico-reacomodo/01-cover.webp",
        imageAlt:
          "Portada del concept project Reacomodo en un toque, no afiliado a Aeroméxico, con tres pantallas del rediseño",
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
          "Rediseño especulativo de cómo la app de Aeroméxico acompaña a un pasajero cuando su vuelo se retrasa o se cancela.\n\nPlataforma: app móvil iOS y Android, con notificación push como punto de entrada.\nDuración: 2 semanas (concept sprint).\nHerramientas: Figma, FigJam.\nFuera de alcance: algoritmo de reacomodo, reembolsos de agencias externas, grupos y menores no acompañados.",
        problema:
          "Aeroméxico es de las aerolíneas más puntuales del mundo, pero cuando un vuelo sí se cae, la app avisa y no resuelve: el reacomodo pasa a la fila o al teléfono. El pasajero se entera tarde, hace fila en mostrador o llama al call center, y no sabe qué le corresponde por ley.\n\nFlujo actual (según fuentes públicas, por verificar en la app): notificación de cambio → abrir app → Mis viajes / Estatus → no hay opciones de vuelo visibles → llamar al call center, escribir al bot de WhatsApp o hacer fila en mostrador → negociar el nuevo vuelo → buscar por separado qué compensación aplica.\n\nEvidencia pública:\n• En 2025 Aeroméxico operó cerca de 190 mil vuelos con 91.88% de puntualidad en salidas, según Cirium (El Financiero). Aun así, cerca de 8% de salidas no fueron puntuales.\n• La app tiene 3.5 millones de descargas; sus funciones publicadas son estatus, notificaciones, check-in y Mis viajes. No se menciona reacomodo (El Imparcial, App Store).\n• En la contingencia por lluvias del AICM (agosto 2025), el comunicado de Aeroméxico remitió a la web de estatus y a su página de políticas; no mencionó la app (comunicado, Vive USA).\n• En octubre 2025 se reportaron al menos 53 vuelos cancelados y 315 demorados en dos días por una disputa con pilotos (Mexico News Daily).\n• Reseñas en App Store se quejan de que \"te cambian vuelos sin previo aviso\" y de \"pésimo servicio al cliente\" (App Store).\n• La ley obliga a avisar del cambio y a ofrecer opciones según la demora, pero el pasajero debe conocerlas para pedirlas (Ley de Aviación Civil, art. 47 Bis).",
        proceso: {
          research:
            "Los referentes de EE. UU. y Canadá ya resuelven el reacomodo dentro de la app; ninguno explica derechos de forma tan clara como lo exige la ley mexicana.\n• United: con demora de 60+ min, la home muestra si ya te reacomodaron, otros vuelos, vales de comida y hotel, y agente por chat o video. Qué tomamos: todo en la home; el problema es la pantalla principal mientras dura.\n• Delta: \"Trip Support\": ves alternativas sin costo, eliges una o buscas más, confirmas y recibes pase nuevo. Qué tomamos: una opción sugerida + \"ver otras opciones\", sin esconder la búsqueda.\n• Air Canada: reacomodo automático al siguiente vuelo disponible; si no te sirve, lo cambias en \"Manage my booking\". Qué tomamos: reacomodo por defecto que el pasajero puede aceptar o cambiar.\n\nUnited reporta que casi 50% de sus clientes ya se atiende solo por app o web durante interrupciones (United).\n\nInsights (hipótesis a validar en el test):\n1. La primera pregunta es \"¿a qué hora llego?\", no \"¿por qué?\". Las opciones deben ordenarse por hora de llegada.\n2. Los derechos dependen de horas y causa. Si la app calcula qué aplica (7.5% de descuento, 25% de indemnización), el pasajero no tiene que buscarlo.\n3. Aceptar debe ser reversible. Si el pasajero teme quedarse con un mal vuelo, prefiere la fila; un \"puedes cambiarlo después\" baja ese miedo.\n\nBenchmark por verificar con capturas actuales de cada app.\n\nHow Might We: ¿cómo podríamos hacer que un pasajero con vuelo demorado o cancelado sepa qué le corresponde y asegure un nuevo vuelo sin hacer fila ni llamar?\n\nHipótesis: si la app avisa con el vuelo alternativo ya sugerido, muestra los derechos calculados para su caso y permite aceptar en un toque, el pasajero resolverá su reacomodo desde el teléfono en menos de 2 minutos y con menos llamadas al call center.",
          restricciones:
            "Restricciones asumidas: respetar la identidad visual de Aeroméxico; solo ofrecer vuelos con asiento disponible; textos de derechos alineados al art. 47 Bis y revisados por legal.",
          iteraciones:
            "Tres direcciones en wireframes lo-fi; se eligió la C porque resuelve rápido sin quitarle control al pasajero.\n• A · Buscador: el aviso lleva a un buscador de vuelos con fecha y origen precargados. Descartada: familiar, pero traslada todo el trabajo al pasajero en un momento de estrés.\n• B · Automático: la aerolínea reacomoda sola y el pasajero solo recibe el pase nuevo. Descartada: más rápido, pero si el vuelo no le sirve vuelve a la fila; no muestra derechos.\n• C · Sugerido + alternativas: tarjeta con el mejor vuelo ya apartado, 2 o 3 alternativas debajo y derechos a un lado. Elegida: un toque si la sugerencia sirve, control si no; derechos visibles antes de decidir.\n\nEntregables de esta fase: wireframes lo-fi de A, B y C, flujo de usuario de la C con ramas de demora y cancelación y anotaciones de las decisiones.",
          decisiones:
            "• Hora de llegada como dato principal. Es lo que el pasajero reorganiza (conexión, trabajo, familia); el número de vuelo va en segundo plano.\n• Derechos antes del botón, no después. El pasajero decide entre reacomodo y reembolso sabiendo qué pierde o gana.\n• Causa dicha en lenguaje claro. \"Por clima\" o \"por operación de Aeroméxico\", porque de eso depende la compensación.\n• Salida humana siempre visible. Un acceso a agente por chat en cada pantalla, como hace United.\n• Identidad Aeroméxico intacta. Se usa su paleta y tipografía; el rediseño es de flujo, no de estilo.",
          validacion:
            "Plan, aún no realizado. Test de usabilidad moderado con 5 pasajeros que hayan volado en el último año, 15 a 20 minutos cada uno, por videollamada con el prototipo de Figma. Resultados: pendientes.\n\nTareas:\n1. \"Te llegó este aviso. Encuentra un vuelo que te lleve hoy a tu destino.\"\n2. \"Antes de aceptar, dime qué te corresponde por esta cancelación.\"\n3. \"Decides no viajar hoy. Pide tu reembolso.\"\n4. \"Ya aceptaste un vuelo, pero cambiaste de opinión. Elige otro.\"\n\nPreguntas de cierre:\n• ¿Qué hiciste la última vez que te demoraron o cancelaron un vuelo?\n• ¿Confiarías en aceptar desde la app sin hablar con nadie? ¿Por qué?\n• Del 1 al 5, ¿qué tan claro quedó lo que te corresponde?\n\nMétricas a medir:\n• Éxito por tarea: completó / con ayuda / no completó.\n• Tiempo en tarea 1: segundos desde el aviso hasta confirmar vuelo.\n• Comprensión de derechos: respuesta en tarea 2 correcta / parcial / incorrecta.\n• Errores: toques en opción o vuelo equivocado.\n• Confianza percibida: escala 1 a 5 al cierre.\n\nPara el \"antes vs. después\", se pediría la tarea 1 en la app actual para comparar pasos y tiempo.",
        },
        solucionFinal:
          "Mientras dura la interrupción, la home de la app se vuelve un centro de reacomodo: qué pasó, tu mejor opción y lo que te corresponde.\n\nPantallas:\n1. Notificación: \"Tu vuelo AM 123 se canceló. Te apartamos el AM 127, llegas 19:40.\" Abre directo a la tarjeta de reacomodo.\n2. Reacomodo: vuelo sugerido arriba con hora de llegada y asiento; debajo 2 o 3 alternativas ordenadas por llegada; botón \"Aceptar este vuelo\".\n3. Tus derechos: panel según causa y horas: alimentos, descuento mínimo de 7.5% (2 a 4 h) o reembolso / vuelo con indemnización mínima de 25% (cancelación o más de 4 h), citando el art. 47 Bis.\n4. Otras opciones: viajar otro día o pedir reembolso, con el monto estimado visible antes de confirmar.\n5. Confirmación: pase de abordar nuevo, vales digitales si aplican y \"Puedes cambiarlo hasta 2 h antes\" (regla a definir con negocio).\n\nAccesibilidad:\n• Estados (cancelado, demorado, confirmado) con texto e ícono, no solo color.\n• Contraste AA mínimo; horas en tamaño grande para lectura rápida en sala de espera.\n• Áreas táctiles de 44 × 44 pt; orden de lectura lógico para VoiceOver y TalkBack.\n• Lenguaje llano en derechos: sin \"concesionario\" ni \"permisionario\".\n\nEstados y casos borde: demora corta sin derechos (menos de 1 h) · causa no imputable a la aerolínea (clima) · sin vuelos disponibles hoy · reserva con varios pasajeros · conexión perdida · boleto comprado en agencia (redirigir) · sin conexión (última información en caché y hora de actualización).",
        resultado:
          "Concepto sin lanzar. Todavía no hay resultados: el test de usabilidad está planeado, no realizado.",
        aprendizaje:
          "• En aerolíneas, la puntualidad alta no elimina el problema: el cerca de 8% que falla define la experiencia de quien lo vive.\n• Explicar derechos no es solo legal; es lo que permite decidir entre reacomodo y reembolso sin miedo.\n• Siguiente: correr el test, validar los textos de derechos con un abogado y explorar la versión para rutas a EE. UU., donde el DOT exige reembolso automático tras 6+ h de demora en vuelos internacionales (CBS News).",
      },
      {
        slug: "volaris-precio-total",
        title: "Volaris Precio Total",
        subtitle: "El precio de tu vuelo con lo que realmente llevas, desde los resultados",
        concept: true,
        image: "/projects/volaris-precio-total/01-cover.webp",
        imageAlt:
          "Portada del concept project ¿Qué llevas?, no afiliado a Volaris, con tres pantallas del rediseño",
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
          "Rediseño especulativo del inicio de la compra de vuelo en volaris.com y la app.\n\nPlataforma: web móvil y app iOS / Android.\nDuración: 2 semanas (concept sprint).\nHerramientas: Figma, FigJam.\nFuera de alcance: postura legal sobre el cobro de equipaje, lógica de pricing, check-in y abordaje.",
        problema:
          "La tarifa Zero, la más visible, solo incluye un objeto personal. Maleta de mano, documentada y asiento se suman después, y el precio real aparece hasta el checkout o en el aeropuerto. El precio que el usuario compara al buscar no es el que paga: con maleta de mano, la tarifa puede costar el doble.\n\nFlujo actual de compra (por verificar con capturas): Buscar vuelo → resultados con precio de tarifa base → elegir tarifa → datos de pasajeros → extras (equipaje, asiento) → pago. El equipaje se decide en el paso 5, después de elegir vuelo.\n\nPendiente: confirmar nombres de tarifas (la página oficial dice Flex, Expansión reporta Básica).\n\nEvidencia pública:\n• La tarifa Zero incluye solo un objeto personal; maleta de mano y documentada se agregan con costo (Volaris, Tarifas).\n• Flex obliga a elegir solo uno: maleta de mano, 15 kg documentados o asiento. Plus incluye mano y 25 kg (Volaris, Tarifas).\n• Volaris recomienda agregar equipaje antes de llegar; en el aeropuerto aplican \"tarifas vigentes\" (Volaris, Equipaje de mano).\n• En una simulación CDMX–Monterrey, Zero costó $945 y Plus $1,943: $998 más para llevar maleta de mano (Expansión, mayo 2026).\n• La Ley de Aviación Civil (art. 47 Bis) permite dos piezas en cabina de 55 × 40 × 25 cm y 10 kg en total. En 2021 Profeco colocó sellos de suspensión a Volaris por cobrarla (Expansión, nov. 2021).\n• En los primeros 5 días del operativo de verano 2025, Volaris sumó 18 conciliaciones en Profeco; hubo quejas por cobros indebidos de equipaje de mano (El Imparcial, jul. 2025).\n• La recomendación de Profeco que repite la prensa: comparar el costo total, no la tarifa base (El Imparcial, mayo 2026).\n\nEl debate legal sobre el cobro no se resuelve con diseño. Lo que sí se puede diseñar es que el precio total sea visible antes de elegir.",
        proceso: {
          research:
            "Los referentes preguntan qué llevas antes de mostrar precios; Volaris lo pregunta después de que ya elegiste vuelo.\n• Google Flights: filtro \"Bags\": eliges maletas de mano y documentadas y los precios de resultados se actualizan con esos cargos. Qué tomamos: declarar el equipaje una vez y recalcular todos los resultados.\n• KAYAK: calculadora de cargos arriba de los resultados; cada tarifa muestra qué incluye junto al precio. Qué tomamos: poner el configurador arriba, no en un paso posterior.\n• Viva Aerobus: paquetes Zero, Switch y Smart con diferencia en pesos (+$608, +$1,893) frente a la base. Qué tomamos: mostrar el delta en pesos, no solo la lista de beneficios.\n\nInsights (hipótesis a validar en el test):\n1. El usuario sabe qué lleva antes de buscar. \"Voy con maleta de mano\" es un dato de entrada, no un extra que descubre al final.\n2. Compara vuelos por el número grande. Si ese número es la tarifa Zero, compara precios que no va a pagar.\n3. La sorpresa se paga dos veces. En dinero en el aeropuerto y en confianza hacia la marca.\n\nBenchmark por verificar con capturas actuales de cada app.\n\nHow Might We: ¿cómo podríamos hacer que un pasajero vea el precio final de su viaje, con lo que realmente lleva, desde la primera pantalla de resultados?\n\nHipótesis: si el usuario declara su equipaje y asiento antes de ver resultados, y cada vuelo muestra el total con eso incluido, elegirá la tarifa correcta a la primera. Habrá menos cambios de tarifa en el checkout y menos equipaje pagado en el aeropuerto.",
          restricciones:
            "Restricciones asumidas: respetar las tarifas Zero, Flex y Plus tal como existen; no cambiar precios ni políticas; identidad visual de Volaris intacta.",
          iteraciones:
            "Tres direcciones en wireframes lo-fi; se eligió la C porque es la única que cambia el número que el usuario compara.\n• A · Tabla de tarifas: al tocar un vuelo, tabla Zero / Flex / Plus con lo que incluye cada una. Descartada: ya existe en esencia; sigue comparando vuelos por precio base.\n• B · Aviso en checkout: resumen \"te falta maleta de mano\" antes de pagar. Descartada: llega tarde; el vuelo ya se eligió con el precio equivocado.\n• C · Configurador \"¿Qué llevas?\": fila de íconos arriba de resultados: objeto personal, mano, documentada, asiento. Elegida: recalcula el total de todos los vuelos y elige la tarifa más barata que cubre lo que llevas.\n\nEntregables de esta fase: wireframes lo-fi de A, B y C, flujo de usuario de la C, tabla de reglas \"equipaje elegido → tarifa sugerida\" y anotaciones de las decisiones.",
          decisiones:
            "• Total arriba, base abajo. El número grande es el precio con tu equipaje; la tarifa base queda como texto secundario.\n• El sistema elige la tarifa, el usuario elige qué lleva. Si llevas mano y 15 kg, sugiere la combinación más barata entre Zero + extras, Flex o Plus.\n• Medidas visibles, no escondidas en políticas. Cada ícono muestra cm y kg para que el usuario sepa si su maleta cuenta como mano.\n• Identidad Volaris intacta. Se usa la paleta y tipografía de la marca; el cambio es de orden en el flujo, no de estilo.",
          validacion:
            "Plan, aún no realizado. Test de usabilidad moderado con 5 personas que hayan volado en aerolínea de bajo costo en el último año, 15 a 20 minutos cada una, por videollamada con el prototipo de Figma. Resultados: pendientes.\n\nTareas:\n1. \"Busca un vuelo CDMX–Cancún. Viajas con una maleta de mano. Elige el más barato.\"\n2. \"Antes de pagar, dime cuánto crees que vas a pagar en total.\"\n3. \"Ahora agrega una maleta documentada de 25 kg. ¿Qué tarifa te conviene?\"\n4. \"Tu maleta mide 60 cm de alto. ¿Cuenta como equipaje de mano?\"\n\nPreguntas de cierre:\n• ¿Alguna vez pagaste equipaje en el aeropuerto que no esperabas?\n• ¿Qué fue lo más confuso de esta versión?\n• Del 1 al 5, ¿qué tanto confías en que el precio mostrado es el final?\n\nMétricas a medir:\n• Éxito por tarea: completó / con ayuda / no completó.\n• Precisión del total: diferencia entre el total que el usuario estima (tarea 2) y el real.\n• Tarifa correcta: ¿eligió la opción más barata que cubre su equipaje?\n• Confianza en el precio: escala 1 a 5 al cierre.\n\nCorrer las tareas 1 y 2 en el flujo actual de Volaris daría el \"antes vs. después\".",
        },
        solucionFinal:
          "La búsqueda empieza preguntando qué llevas; desde ahí, cada precio en pantalla es el que vas a pagar.\n\nPantallas:\n1. ¿Qué llevas?: cuatro íconos con medidas: objeto personal (35 × 45 × 20 cm), mano (55 × 40 × 25 cm, 10 kg), documentada (15 o 25 kg) y asiento. Objeto personal marcado por defecto.\n2. Resultados con total: cada vuelo muestra el precio final por persona con lo elegido y una etiqueta: \"Incluye tu maleta de mano\".\n3. Desglose al tocar: tarifa sugerida + extras, con la alternativa: \"Plus te cuesta $X más e incluye cambios\".\n4. Checkout sin sorpresas: el total no cambia respecto a resultados; si cambia, se explica en una línea antes de pagar.\n\nAccesibilidad:\n• Cada opción del configurador es un toggle con etiqueta de texto, no solo ícono.\n• Contraste AA mínimo en precios y etiquetas sobre fondos de marca.\n• Áreas táctiles de 44 × 44 pt; el lector de pantalla anuncia \"Total con maleta de mano: $X\".\n\nEstados y casos borde: varios pasajeros con equipaje distinto · viaje redondo con equipaje diferente por tramo · vuelo internacional con reglas distintas · asientos agotados · usuario que no sabe qué lleva (\"Decidir después\", con aviso del costo en aeropuerto) · precio que cambia entre resultados y pago.",
        resultado:
          "Concepto sin lanzar. Todavía no hay resultados: el test de usabilidad está planeado, no realizado.",
        aprendizaje:
          "• En aerolíneas de bajo costo, el problema no es el cobro sino el momento en que se muestra.\n• Cambiar el orden del flujo puede valer más que rediseñar pantallas: preguntar primero, cobrar después.\n• Siguiente: correr el test, validar la regla de tarifa sugerida con más rutas y explorar el configurador por pasajero en reservas grupales.",
      },
      {
        slug: "viva-viaje-en-grupo",
        title: "Viva Aerobus Viaje en Grupo",
        subtitle: "Asientos y check-in para toda la familia en un solo flujo",
        concept: true,
        image: "/projects/viva-viaje-en-grupo/01-cover.webp",
        imageAlt:
          "Portada del concept project Asientos y check-in para toda la familia, no afiliado a Viva Aerobus, con tres pantallas del rediseño",
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
          "Rediseño especulativo de cómo una familia o grupo elige asientos y hace check-in en la app de Viva.\n\nPlataforma: app móvil iOS y Android.\nDuración: 2 semanas (concept sprint).\nHerramientas: Figma, FigJam.\nFuera de alcance: lógica de precios, reglas migratorias por país y venta de equipaje.",
        problema:
          "Una reservación con varios pasajeros (incluidos menores) obliga a decidir asientos y check-in persona por persona, sin ver claramente quién queda junto a quién ni cuánto cuesta sentarse juntos. Viva vende la app como la forma rápida de viajar \"con tu familia y amigos\", pero asientos y check-in siguen pensados para un pasajero a la vez.\n\nFlujo actual estimado (por verificar en la app): Mis viajes → reservación → Asientos → elegir pasajero → elegir asiento → repetir por cada pasajero → pagar → Check-in → confirmar datos de cada pasajero → pases de abordar. Con 4 pasajeros, los pasos de asiento y datos se repiten 4 veces.\n\nHipótesis a verificar con capturas: el costo de sentarse juntos solo aparece sumado al final, y el mapa no muestra qué menor queda junto a qué adulto.\n\nEvidencia pública:\n• El check-in abre según la tarifa: Zero 4 horas antes, Light 8 horas, Smart 10 días. Una familia con tarifas mixtas no puede hacer check-in de todos al mismo tiempo (Viva Blog).\n• El check-in web y por WhatsApp se inicia con el código y el apellido de un solo pasajero (Viva Blog).\n• Los bebés de 7 días a menos de 2 años viajan en brazos, no en fila de emergencia, y solo uno por adulto (Viva Blog).\n• Un menor que viaja con un tercero requiere carta responsiva firmada por padre o tutor (Viva, PDF).\n• La app tiene 4.8 estrellas con 119 mil calificaciones en la App Store México y promete \"Agrega acompañantes\" (App Store).\n• No se encontró una página pública de Viva que garantice asientos contiguos gratis para menores. Verificar en términos y condiciones.\n• Contexto regulatorio: EE.UU. propuso en agosto de 2024 obligar a sentar gratis a menores de 13 años junto a un adulto (DOT). Viva opera rutas a EE.UU.\n• En junio de 2026, el regulador de competencia de Reino Unido investigó a Ryanair por cobrar cerca de 9 € a padres para sentarse con sus hijos (Xataka).\n• En febrero de 2026, Southwest asignó a un niño de 2 años en otra fila porque la familia no pagó asientos (Semana).\n• Profeco registró 314 quejas formales contra Viva en 2025 hasta mayo; los motivos principales fueron cancelaciones, equipaje y devoluciones, no asientos (El Imparcial).",
        proceso: {
          research:
            "Los referentes tratan \"sentar a la familia junta\" como una regla del sistema; en Viva hoy parece una compra individual.\n• United: desde 2023, menores de 12 se sientan junto a un adulto sin costo, incluso en Basic Economy. El mapa muestra los asientos gratis disponibles al reservar. Si no hay contiguos, cambio de vuelo sin costo. Qué tomamos: marcar en el mapa qué asientos sientan juntos a la familia y cuánto cuestan.\n• Ryanair: niños de 2 a 11 van junto a un adulto de la misma reservación; con asignación aleatoria gratis, solo los menores quedan garantizados. Otros adultos y adolescentes pueden quedar separados. Qué tomamos: separar \"lo obligatorio\" (menor + adulto) de \"lo opcional\" (todo el grupo junto) y decir el precio de cada uno.\n• Southwest: intenta sentar a menores de 12 con un adulto sin costo, pero la asignación automática separó a un niño de 2 años en 2026. Qué tomamos: antiejemplo; \"intentar\" no basta; mostrar el resultado antes del vuelo y avisar si hay riesgo.\n\nInsights (hipótesis a validar en el test):\n1. La familia piensa en \"quién va con quién\", no en números de asiento. \"Mamá con la bebé, papá con el de 7\" importa más que \"14B y 14C\".\n2. El miedo es quedar separados, no el precio. Si el costo de sentarse juntos se ve claro y temprano, la decisión se toma sin ansiedad.\n3. El check-in es un trámite del grupo. Quien reserva quiere hacerlo una vez por todos, con los datos de menores ya guardados.\n\nBenchmark por verificar con capturas actuales de cada app.\n\nHow Might We: ¿cómo podríamos hacer que quien reserva para su familia vea quién va junto a quién, sepa cuánto cuesta, y haga check-in de todos en un solo flujo?\n\nHipótesis: si el mapa de asientos muestra a cada pasajero con su avatar, sugiere un bloque contiguo con su precio total, y el check-in procesa a todo el grupo de una vez, la familia completará asientos y check-in en menos pasos, con menos errores y sin menores separados de su adulto.",
          restricciones:
            "Restricciones asumidas: respetar la identidad visual de Viva; no cambiar tarifas ni precios de asientos, solo mostrarlos mejor; cumplir reglas de seguridad (bebés en brazos fuera de fila de emergencia, un bebé por adulto).",
          iteraciones:
            "Tres direcciones en wireframes lo-fi; se eligió la C porque es la única que deja ver a la vez el resultado (quién va dónde) y el precio.\n• A · Paso por pasajero: igual que hoy, pero con mejor UI: un mapa por cada pasajero. Descartada: limpia, pero no resuelve el problema; el usuario sigue armando el grupo de memoria.\n• B · Botón \"Sentarnos juntos\": un solo botón asigna el mejor bloque y cobra el total. Descartada: rápida, pero quita el control; no se ve qué menor va con qué adulto.\n• C · Mapa de grupo: todos los pasajeros como fichas arrastrables sobre el mapa, con un bloque sugerido y su precio. Elegida: sugiere por defecto, deja ajustar, y el total cambia en vivo.\n\nEntregables de esta fase: wireframes lo-fi de A, B y C, flujo de usuario de la C con reservación de 2 adultos, 1 niño y 1 bebé y anotaciones de las decisiones.",
          decisiones:
            "• Personas antes que números. La ficha muestra inicial y nombre (\"Ana, 7\"); el número de asiento va en segundo nivel.\n• Precio total, no por asiento. \"Sentarse juntos: $X para 4\" en vez de cuatro precios sueltos que el usuario suma.\n• El sistema protege al menor. No deja confirmar si un menor queda sin adulto contiguo; explica por qué y propone el asiento libre más cercano.\n• Tarifas mixtas explícitas. Si un pasajero con tarifa Zero aún no puede hacer check-in, se muestra cuándo abre y se agenda un recordatorio, en vez de un error.\n• Identidad Viva intacta. Se usan el verde y la tipografía de la marca; el rediseño es de estructura, no de estilo.",
          validacion:
            "Plan, aún no realizado. Test de usabilidad moderado con 5 personas que hayan volado con menores en el último año, 15 a 20 minutos cada una, por videollamada con el prototipo de Figma. Resultados: pendientes.\n\nTareas (reservación de prueba: 2 adultos, niña de 7 años, bebé de 1 año):\n1. \"Elige asientos para que tu hija vaya junto a un adulto. Dime cuánto vas a pagar antes de confirmar.\"\n2. \"Ahora sienta a los cuatro juntos. ¿Cuánto cambió el precio?\"\n3. \"Haz check-in de toda la familia.\"\n4. \"Enséñale a tu pareja quién va en qué asiento.\"\n\nPreguntas de cierre:\n• ¿Cómo eligen asientos hoy cuando viajan en familia?\n• ¿Qué fue lo más confuso de esta versión?\n• Del 1 al 5, ¿qué tan seguro te sentiste de que tu hija iba junto a un adulto?\n\nMétricas a medir:\n• Éxito por tarea: completó / con ayuda / no completó.\n• Precisión del precio: ¿dijo el total correcto antes de confirmar en tarea 1?\n• Tiempo en tarea 3: segundos desde \"Check-in\" hasta ver todos los pases.\n• Errores: menor sin adulto contiguo, asiento equivocado, pasajero omitido.\n• Confianza percibida: escala 1 a 5 al cierre.\n\nComparar contra la app actual con las mismas tareas 1 y 3 daría el \"antes vs. después\".",
        },
        solucionFinal:
          "\"Asientos\" y \"Check-in\" se vuelven un solo flujo de grupo: un mapa donde cada pasajero es una ficha, con el precio de sentarse juntos visible desde el inicio.\n\nPantallas:\n1. Tu grupo: lista de pasajeros de la reservación con edad, tipo (adulto, niño, bebé en brazos) y tarifa. Aquí se emparejan menores con su adulto.\n2. Mapa de grupo: bloque contiguo sugerido con las fichas ya colocadas. Arrastras una ficha para cambiar; el total se actualiza en vivo.\n3. Comparar opciones: tres tarjetas: \"Todos juntos\" (precio total), \"Menores con su adulto\" (precio) y \"Asignación en check-in\" (con aviso de riesgo).\n4. Check-in del grupo: una sola confirmación por todos; datos de menores y documentos precargados desde \"acompañantes\".\n5. Pases de abordar: un carrusel con todos los pases y una vista resumen \"quién va dónde\" para compartir.\n\nAccesibilidad:\n• El tipo de pasajero se comunica con texto e ícono, no solo con color.\n• Arrastrar tiene alternativa: tocar ficha y luego tocar asiento, y un modo lista para lector de pantalla (\"Ana, 7 años: asiento 14B, junto a Laura\").\n• Contraste AA mínimo en el mapa; áreas táctiles de 44 × 44 pt.\n\nEstados y casos borde: bebé en brazos (sin asiento, no permite fila de emergencia) · más bebés que adultos · no hay bloque contiguo disponible · cambio de avión que rompe el bloque · tarifas mixtas con check-in en horarios distintos · menor con un tercero (requiere carta responsiva) · sin conexión (pases en caché).",
        resultado:
          "Concepto sin lanzar. Todavía no hay resultados: el test de usabilidad está planeado, no realizado.",
        aprendizaje:
          "• En aerolíneas de bajo costo, la transparencia del precio puede ser la mejora de UX, sin cambiar el modelo de negocio.\n• Diseñar para el grupo cambia la unidad del flujo: de \"pasajero\" a \"reservación\".\n• La regulación se mueve (EE.UU., Reino Unido); un diseño que ya separa \"obligatorio\" de \"opcional\" se adapta fácil si cambian las reglas.\n• Siguiente: capturar el flujo actual, correr el test y explorar avisos cuando un cambio de avión rompe el bloque de asientos.",
      },
      {
        slug: "delta-modo-conexion",
        title: "Delta Modo Conexión",
        subtitle: "Un veredicto claro para saber si llegas a tu siguiente vuelo",
        concept: true,
        image: "/projects/delta-modo-conexion/01-cover.webp",
        imageAlt:
          "Portada del concept project ¿Llego o no llego?, no afiliado a Delta Air Lines, con tres pantallas del rediseño",
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
          "Rediseño especulativo de cómo la app Fly Delta acompaña a un pasajero durante una escala corta.\n\nPlataforma: app móvil iOS y Android, más Live Activity en iOS.\nDuración: 2 semanas (concept sprint).\nHerramientas: Figma, FigJam.\nFuera de alcance: decidir si se espera un vuelo (operación), tiempos reales de filas de migración y lógica de backend.",
        problema:
          "Al aterrizar con poco tiempo, el pasajero junta datos sueltos (puerta, hora de abordaje, mapa, notificaciones) para responder una sola pregunta: ¿llego o no llego? Fly Delta ya tiene las piezas de una conexión (puerta, estatus, mapas, alertas, reprogramación), pero repartidas. Nadie las junta en un veredicto de \"llegas / no llegas\".\n\nFlujo actual al aterrizar con conexión corta (por verificar en la app): notificación de puerta → abrir app → pestaña Today → tarjeta del siguiente vuelo → tocar la puerta para abrir el mapa → calcular a mano hora de cierre menos tiempo caminando. Si hay migración o seguridad, la app no lo suma al cálculo (por verificar).\n\nEvidencia pública:\n• Delta describe la pestaña Today como vista \"one-stop\" con pase de abordar, puerta, estatus y mapas del aeropuerto (Delta Pro).\n• La información de la puerta de conexión se ofrece \"via maps\"; no se menciona tiempo restante ni riesgo (Delta Pro, 2023).\n• La versión 7.0 (mayo 2025) agrega Live Activities con aviso de cierre de puertas, solo iOS 16+ y no Android (Delta News).\n• Si pierdes la conexión, Delta \"may have already rebooked you\"; el usuario debe revisar el vuelo nuevo, hacer check-in y asientos (Delta.com).\n• En 2025, 76.4% de los vuelos de aerolíneas reportantes en EE. UU. llegaron a tiempo; Delta Network, 79.3%. Uno de cada cinco vuelos llega tarde (DOT ATCR, feb 2026).\n• Al llegar de un vuelo internacional a EE. UU., pasas aduana, recoges maletas, las documentas de nuevo y repites seguridad (The Points Guy).\n• Reseñas públicas en App Store: \"my international layover went from 1 hour and 45 minutes to only 40 minutes\"; otra describe llegar a A14 con salida en A42 y \"less than 30 minutes to travel\" (App Store).",
        proceso: {
          research:
            "Los referentes tratan la conexión como una tarea con cuenta regresiva y pasos; Fly Delta la trata como un vuelo más en la lista.\n• United: página de conexión con estatus en vivo, cuenta regresiva e indicaciones paso a paso a la puerta; si no llegas, reprogramas gratis en la app. Reporta 98% de conexiones logradas en su prueba (TechRadar). Qué tomamos: una sola pantalla dedicada a la conexión y la salida de emergencia en el mismo lugar.\n• Flighty: Connection Assistant: guía de pasos (seguridad, maletas, cambio de terminal) con tiempos típicos de cada uno; estima migración según ciudadanía. Qué tomamos: desglosar el tiempo en pasos, no solo en distancia.\n• Fly Delta (actual): puerta, estatus, mapas y alertas en la pestaña Today; Live Activity con cierre de puertas en iOS. Los datos ya existen; falta unirlos en un veredicto.\n\nInsights (hipótesis a validar en el test):\n1. La pregunta es binaria. El pasajero quiere saber \"¿llego?\" antes que la puerta exacta; el veredicto debe ir primero.\n2. El tiempo real no es la distancia. Migración, seguridad y maletas pesan más que caminar; ocultarlos da falsa calma.\n3. El plan B baja el estrés aunque no se use. Saber qué pasa si no llegas reduce la ansiedad durante la carrera.\n\nBenchmark por verificar con capturas actuales de cada app.\n\nHow Might We: ¿cómo podríamos hacer que un pasajero con escala corta sepa en 3 segundos si llega a su vuelo y qué hacer si no?\n\nHipótesis: si al aterrizar mostramos un veredicto con tiempo restante, pasos obligatorios y un plan B visible, el pasajero tomará la ruta correcta más rápido y con menos dudas que armando el cálculo desde Today y el mapa.",
          restricciones:
            "Restricciones asumidas: respetar la identidad visual de Delta; usar solo datos que la app ya muestra (puerta, estatus, mapas, reprogramación); funcionar con señal débil en el avión y la pasarela.",
          iteraciones:
            "Tres direcciones en wireframes lo-fi; se eligió la C porque es la única que responde \"¿llego?\" sin abrir la app.\n• A · Tarjeta en Today: bloque nuevo arriba de Today con tiempo restante y puerta. Descartada: bajo costo, pero compite con pase de abordar y ofertas; el riesgo se pierde.\n• B · Mapa primero: al aterrizar se abre el mapa con la ruta trazada y un contador. Descartada: útil para caminar, pero no muestra migración ni plan B; el mapa tarda en cargar con señal débil.\n• C · Modo conexión: pantalla dedicada que se activa al aterrizar, con veredicto, pasos y plan B; espejo en Live Activity. Elegida: veredicto en la pantalla bloqueada y detalle a un toque; reutiliza datos que Delta ya tiene.\n\nEntregables de esta fase: wireframes lo-fi de A, B y C, flujo de usuario de la C con sus 3 estados de riesgo y anotaciones de las decisiones.",
          decisiones:
            "• Veredicto antes que datos. El estado ocupa la parte superior; la puerta y el mapa van debajo.\n• Cerrar puertas, no despegar. La cuenta usa el cierre de puertas, que ya aparece en Live Activities, porque es el límite real.\n• Pasos obligatorios visibles. Si la conexión incluye migración o seguridad, se suman al cálculo y se muestran como pasos, no como nota al pie.\n• Plan B siempre a un toque. Aparece aunque estés A tiempo, en segundo plano; sube al frente en En riesgo.\n• Lenguaje calmado. \"Te quedan 18 min de margen\" en vez de \"¡Date prisa!\"; el color refuerza, no alarma.",
          validacion:
            "Plan, aún no realizado. Test de usabilidad moderado con 5 personas que hayan hecho una conexión en Delta en el último año, 15 a 20 minutos cada una, por videollamada con el prototipo de Figma. Resultados: pendientes.\n\nTareas:\n1. \"Acabas de aterrizar en Atlanta. ¿Llegas a tu siguiente vuelo? ¿Cómo lo sabes?\"\n2. \"Tu vuelo viene de otro país. Dime qué tienes que hacer antes de llegar a la puerta.\"\n3. \"Te cambiaron la puerta mientras caminas. ¿Qué haces ahora?\"\n4. \"La app dice que estás en riesgo. Encuentra tu alternativa y elige una.\"\n\nPreguntas de cierre:\n• ¿Qué haces hoy cuando tienes una conexión corta?\n• ¿Confiarías en el veredicto o lo revisarías en las pantallas del aeropuerto?\n• Del 1 al 5, ¿qué tan tranquilo te sentiste con esta versión?\n\nMétricas a medir:\n• Éxito por tarea: completó / con ayuda / no completó.\n• Tiempo en tarea 1: segundos hasta decir \"llego\" o \"no llego\" correctamente.\n• Comprensión de pasos: en tarea 2, cuántos pasos obligatorios menciona sin ayuda.\n• Errores: toques en acciones equivocadas o lectura errónea del estado.\n• Tranquilidad percibida: escala 1 a 5 al cierre.\n\nComparar contra la app actual con las mismas tareas 1 y 4 daría el \"antes vs. después\".",
        },
        solucionFinal:
          "\"Tu conexión\" se activa al aterrizar: un veredicto, la cuenta regresiva al cierre de puertas, los pasos que te faltan y un plan B listo.\n\nPantallas:\n1. Veredicto: estado grande (A tiempo / Justo / En riesgo), minutos hasta cierre de puertas, puerta de llegada → puerta de salida.\n2. Tu ruta: pasos en orden con tiempo estimado de cada uno: bajar del avión, migración, maletas, seguridad, caminar o tren. Botón \"Ver en mapa\" abre el mapa existente.\n3. Plan B: si el estado es En riesgo: siguiente vuelo disponible, si Delta ya te reprogramó, y acciones (aceptar, elegir otro, hablar con un agente).\n4. Live Activity: veredicto, minutos y puerta en pantalla bloqueada y Dynamic Island; en Android, notificación persistente.\n\nAccesibilidad:\n• El estado se comunica con texto e ícono, no solo con verde, ámbar o rojo.\n• Contraste AA mínimo; tipografía dinámica sin cortar la cuenta regresiva.\n• Ruta accesible: si el pasajero pidió asistencia de movilidad, la ruta usa elevadores y suma ese tiempo.\n• El lector de pantalla anuncia cambios de estado una vez, no cada minuto.\n\nEstados y casos borde: conexión larga (el modo no se activa) · cambio de puerta en el trayecto (recalcula y avisa) · vuelo de salida retrasado (gana margen) · ya reprogramado por Delta (el plan B pasa a ser el plan) · boletos separados o aerolínea socia (aviso de que no aplica la protección) · sin conexión (último dato con hora de actualización).",
        resultado:
          "Concepto sin lanzar. Todavía no hay resultados: el test de usabilidad está planeado, no realizado.",
        aprendizaje:
          "• En aerolíneas, el diseño de alto valor está en momentos de estrés, no en la reserva: juntar datos existentes vale más que agregar funciones.\n• Un veredicto honesto (incluido \"En riesgo\") genera más confianza que ocultar la mala noticia hasta el final.\n• Siguiente: correr el test, calibrar los umbrales de A tiempo / Justo / En riesgo con datos reales de ATL y explorar el modo para pasajeros con asistencia de movilidad.",
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
