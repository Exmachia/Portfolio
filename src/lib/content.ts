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
        "I design end-to-end digital products across SaaS, marketplaces, and real estate, driven by research, not assumptions.",
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
        "Diseño producto digital end-to-end para SaaS, marketplaces y real estate, guiado por research, no por suposiciones.",
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
