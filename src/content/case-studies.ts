/**
 * Case study content lives here. To add a study:
 * 1. Add a new object to `caseStudies` with a unique `slug` (URL: /case-studies/[slug]).
 * 2. Point `Projects.tsx` `caseStudyPath` to `/case-studies/your-slug`.
 * 3. Add `screenshot` under public/ and set `screenshot` + `screenshotAlt`.
 */

export interface CaseStudyBlock {
  id: string
  heading: string
  /** Body paragraphs (optional if you only use a list). */
  paragraphs?: string[]
  /** Shown above a list, e.g. "Key challenges included:" */
  listTitle?: string
  listItems?: string[]
  /** Paragraphs rendered after the list (e.g. closing thought in Outcome). */
  paragraphsAfterList?: string[]
}

export interface CaseStudy {
  slug: string
  title: string
  tag: string
  metaDescription: string
  /** Short line under the title in the hero */
  heroSummary: string
  screenshot: string
  screenshotAlt: string
  liveUrl: string
  liveCtaLabel: string
  /** Optional public repos (e.g. frontend + API) shown next to the live app link */
  githubRepos?: Array<{ label: string; url: string }>
  blocks: CaseStudyBlock[]
}

const bauwauHaus: CaseStudy = {
  slug: 'bauwau-haus',
  title: 'The BauWau Haus',
  tag: 'Client work',
  metaDescription:
    'Production website for a small dog training business: clarity, trust, contact flow, Resend, Vercel, and GoDaddy DNS.',
  heroSummary:
    'A modern small-business site focused on clear services, trust, and a frictionless path to contact.',
  screenshot: '/projects/personal/thebauwauhaus.png',
  screenshotAlt: 'The BauWau Haus website homepage showing branding and layout',
  liveUrl: 'https://www.thebauwauhaus.com/',
  liveCtaLabel: 'Visit live site',
  blocks: [
    {
      id: 'overview',
      heading: 'Overview',
      paragraphs: [
        'Built and launched a production website for a small dog training business to establish a professional online presence and convert visitors into clients. The focus was on clarity, trust, and a seamless contact experience.',
      ],
    },
    {
      id: 'problem',
      heading: 'Problem',
      paragraphs: [
        'The business lacked a dedicated website, leaving no centralized or trustworthy online presence for potential clients to understand services or take action.',
        'This created gaps in discovery, credibility, and conversion, particularly for users expecting clear, immediate information.',
      ],
      listTitle: 'Key challenges included:',
      listItems: [
        'No single source of truth for services, pricing, or contact information',
        'Fragmented communication channels, making it difficult for users to take the next step',
        'Limited technical capacity to set up and maintain hosting, DNS, and email systems',
        'Need for a solution that was both professional and low-maintenance for a small business owner',
      ],
    },
    {
      id: 'goals',
      heading: 'Goals',
      paragraphs: ['The project focused on three primary goals:'],
      listItems: [
        'Establish trust quickly through a clean, modern design',
        'Clearly communicate services so users understand offerings without confusion',
        'Drive conversions through a simple, frictionless contact flow',
      ],
    },
    {
      id: 'approach',
      heading: 'Approach',
      paragraphs: [
        'The approach centered on simplifying the user journey and reducing friction between landing on the site and reaching out.',
      ],
      listTitle: 'Key decisions included:',
      listItems: [
        'Prioritizing content hierarchy so users immediately understand what the business offers',
        'Choosing clarity over complexity to keep the experience readable and scannable',
        'Designing with conversion in mind by placing clear calls-to-action throughout the site',
        'Creating a consistent and polished visual structure to build trust with users',
      ],
    },
    {
      id: 'implementation',
      heading: 'Implementation',
      paragraphs: [
        'Built a responsive, production-ready website using modern frontend technologies and deployed via Vercel.',
      ],
      listTitle: 'Highlights:',
      listItems: [
        'Responsive design optimized for both mobile and desktop',
        'Contact form integrated with email delivery using Resend',
        'Domain and DNS configuration through GoDaddy',
        'Deployment and hosting via Vercel',
      ],
    },
    {
      id: 'challenges',
      heading: 'Challenges & tradeoffs',
      paragraphs: [
        'Working with a small business required balancing speed, simplicity, and long-term maintainability.',
      ],
      listItems: [
        'Avoided over-engineering while still ensuring the site can scale if needed',
        'Configured SPF and DKIM records to ensure reliable email delivery from the contact form',
        'Structured the project for a clean handoff so the client can manage it with minimal technical overhead',
      ],
    },
    {
      id: 'outcome',
      heading: 'Outcome',
      paragraphs: [
        'Delivered a clean, modern website that provides a strong first impression and makes it easy for potential clients to take action.',
      ],
      listItems: [
        'Established a professional online presence',
        'Improved clarity of services offered',
        'Created a reliable and user-friendly contact experience',
      ],
    },
    {
      id: 'role',
      heading: 'My role',
      paragraphs: [
        'Sole developer responsible for the project end-to-end, including design decisions, frontend implementation, deployment, and production setup.',
      ],
    },
    {
      id: 'next',
      heading: 'What I would improve next',
      paragraphs: ['If continuing to iterate on the project, I would:'],
      listItems: [
        'Add analytics to better understand user behavior and conversion rates',
        'Introduce lightweight CMS capabilities for easier content updates',
        'Further optimize SEO for local discovery',
      ],
    },
  ],
}

const crittr: CaseStudy = {
  slug: 'crittr',
  title: 'Crittr',
  tag: 'Personal project',
  metaDescription:
    'Full-stack pet health app: Next.js, FastAPI, PostgreSQL, OAuth, magic-link auth, OpenAI, Docker, Vercel, and Railway.',
  heroSummary:
    'Track day-to-day pet care, surface patterns over time, and use AI-powered insights, with a split Next.js and FastAPI stack deployed to Vercel and Railway.',
  screenshot: '/projects/personal/crittr.png',
  screenshotAlt: 'Crittr app interface showing pet care dashboard and features',
  liveUrl: 'https://crittr-app.vercel.app/',
  liveCtaLabel: 'Open live app',
  githubRepos: [
    { label: 'Frontend', url: 'https://github.com/Chocoloco123/Crittr-App' },
    { label: 'Backend', url: 'https://github.com/Chocoloco123/Crittr-App-BE' },
  ],
  blocks: [
    {
      id: 'overview',
      heading: 'Overview',
      paragraphs: [
        'Crittr is a full-stack pet health application designed to help users track day-to-day care, surface patterns over time, and better understand their pets\' health.',
        'The product combines a Next.js and TypeScript frontend with a FastAPI backend backed by PostgreSQL. It supports multiple authentication flows, including Google OAuth and passwordless email login, and integrates AI-powered insights through server-side OpenAI APIs.',
        'The system is intentionally split into separate frontend and backend repositories, with a containerized API (Docker) deployed to Railway and a frontend deployed to Vercel.',
      ],
    },
    {
      id: 'problem',
      heading: 'Problem',
      paragraphs: [
        'Pet health information is often scattered across notes, spreadsheets, or multiple apps, making it difficult to track trends or share meaningful insights with vets or caregivers.',
        'Crittr was built to provide a single, structured system for tracking daily care, surfacing patterns, and optionally leveraging AI for summaries without sacrificing clarity or trust.',
      ],
      listTitle: 'Key challenges included:',
      listItems: [
        'Modeling users, pets, journal entries, quick logs, reminders, and related entities in a relational database while keeping reads and writes predictable',
        'Supporting multiple authentication flows (OAuth on the frontend, JWT and magic-link email auth on the backend) without duplicating or fragmenting user state',
        'Integrating AI in a safe and controlled way (handling latency, errors, and keeping API keys server-side)',
        'Running the backend consistently across local development and production using Docker, environment variables, and deployment scripts',
      ],
    },
    {
      id: 'goals',
      heading: 'Goals',
      paragraphs: ['The project focused on a few concrete outcomes:'],
      listItems: [
        'Support multiple pets per account with clear profiles and navigation',
        'Make daily logging lightweight so the habit is easy to maintain',
        'Build a backend that reflects the domain (pets, journals, logs, reminders), not just a thin prototype',
        'Run in a production environment with real authentication, a relational database, and deployed frontend and backend services',
      ],
    },
    {
      id: 'approach',
      heading: 'Approach',
      paragraphs: [
        'The system was designed with a clear separation between frontend and backend, connected through an explicit API contract.',
        'On the frontend, Redux Toolkit was used to manage complex UI state across features like journaling, logging, and chat. On the backend, FastAPI handlers were kept lightweight, with SQLAlchemy models handling persistence and Pydantic schemas handling validation and data transfer.',
        'The backend follows a Docker-first workflow to keep local, staging, and production environments as consistent as possible.',
      ],
      listTitle: 'Key decisions included:',
      listItems: [
        'Using Next.js (App Router) and TypeScript for structure, scalability, and performance on the frontend',
        'Using FastAPI, PostgreSQL, and SQLAlchemy to model relational data clearly and support future growth',
        'Splitting authentication responsibilities: Google OAuth on the frontend and JWT + magic-link flows handled securely on the backend',
        'Keeping all AI interactions server-side to protect secrets and allow for better error handling and control',
        'Structuring the backend to be deployable via Docker with environment-driven configuration',
      ],
    },
    {
      id: 'implementation',
      heading: 'Implementation',
      paragraphs: [
        'The frontend handles routing, forms, charts, and chat interactions, while the backend exposes REST-style APIs for users, pets, journal entries, quick logs, reminders, and health checks.',
        'OpenAI-powered features are implemented on the server, ensuring that API keys and model interactions are never exposed to the client.',
      ],
      listTitle: 'Highlights:',
      listItems: [
        'Responsive UI designed for both desktop and mobile usage',
        'Clear separation between frontend (Prisma usage) and backend (SQLAlchemy + migrations) for data handling',
        'Auth system combining OAuth, JWT sessions, and passwordless email login',
        'Containerized backend with Docker for consistent development and deployment',
        'Deployments: Vercel for the frontend and Railway for the backend',
      ],
    },
    {
      id: 'challenges',
      heading: 'Challenges and tradeoffs',
      paragraphs: [
        'Splitting the system into a frontend and backend introduced coordination challenges, particularly around authentication, CORS, and environment configuration across Vercel, Railway, and local Docker setups.',
      ],
      listItems: [
        'Balancing feature breadth with the need to ship a stable, maintainable core system',
        'Managing multiple authentication flows without introducing inconsistent user state',
        'Handling AI-related tradeoffs, including latency, cost, and failure scenarios',
        'Ensuring reliable email delivery for magic-link authentication via SMTP',
        'Keeping the growing data model (pets, journals, logs, reminders) cohesive as the API surface expanded',
      ],
    },
    {
      id: 'outcome',
      heading: 'Outcome',
      paragraphs: [
        'Crittr is a live, production-ready application with authenticated users, persistent relational data, and deployed frontend and backend services.',
      ],
      listItems: [
        'A cohesive product experience for journaling, quick logging, reminders, and AI-assisted insights',
        'A clear separation of frontend and backend systems, each deployable and maintainable independently',
        'Two public repositories reflecting real-world full-stack architecture and deployment practices',
      ],
      paragraphsAfterList: [
        'The project provides a strong foundation for further iteration, including deeper testing, analytics, and additional client platforms.',
      ],
    },
    {
      id: 'role',
      heading: 'My role',
      paragraphs: [
        'I owned the project end-to-end across both repositories, including system design, API and database modeling, frontend architecture, authentication flows, AI integration, and deployment setup.',
        'This included designing the schema, implementing backend services, configuring Docker environments, integrating OAuth and email-based authentication, and building the frontend user experience.',
      ],
    },
    {
      id: 'next',
      heading: 'What I would improve next',
      paragraphs: ['If continuing to invest in Crittr, I would prioritize:'],
      listItems: [
        'Expanding automated testing (pytest for backend services and end-to-end tests for critical flows like authentication and journaling)',
        'Improving observability with user-facing metrics and alerting around API errors and AI failures',
        'Further accessibility and performance optimizations, especially for data-heavy views',
        'Exploring offline-first or mobile-native experiences to support logging on the go',
      ],
    },
  ],
}

export const caseStudies: CaseStudy[] = [crittr, bauwauHaus]

/** Order of cards on `/case-studies` (Crittr first, then The BauWau Haus, then any others). */
const CASE_STUDIES_HUB_ORDER: string[] = ['crittr', 'bauwau-haus']

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies
}

/** Case studies index: fixed visual order independent of `caseStudies` array order. */
export function getCaseStudiesForHub(): CaseStudy[] {
  const rank = new Map(CASE_STUDIES_HUB_ORDER.map((slug, i) => [slug, i]))
  return [...caseStudies].sort((a, b) => {
    const ra = rank.get(a.slug)
    const rb = rank.get(b.slug)
    if (ra !== undefined && rb !== undefined) return ra - rb
    if (ra !== undefined) return -1
    if (rb !== undefined) return 1
    return 0
  })
}
