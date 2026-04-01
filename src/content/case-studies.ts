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
    'Full-stack pet health app with Next.js, FastAPI, PostgreSQL, Google OAuth, OpenAI, and deployments on Vercel and Railway.',
  heroSummary:
    'An AI-assisted pet care platform for journaling, quick logs, health trends, and a conversational assistant, built as a split frontend and API with production deployments.',
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
        'Crittr is a full-stack application for pet parents to track health, keep a digital journal, log activities in one tap, and get AI-generated insights. The product pairs a Next.js frontend with a Python FastAPI backend, PostgreSQL, Prisma, Google OAuth, and the OpenAI API, deployed to Vercel (frontend) and Railway (API) with a managed database.',
      ],
    },
    {
      id: 'problem',
      heading: 'Problem',
      paragraphs: [
        'Pet health information often lives in notes, spreadsheets, or separate apps, which makes trends hard to see and adds friction when talking to a vet or a sitter. There was a need for a single, structured place to record day-to-day care, surface patterns over time, and optionally lean on AI for summaries without sacrificing clarity or trust.',
      ],
      listTitle: 'Key challenges included:',
      listItems: [
        'Modeling pets, users, journals, and quick logs in a way that stays fast and consistent across devices',
        'Secure sign-in and session handling across a decoupled frontend and API',
        'Integrating OpenAI features responsibly, with clear boundaries and error handling',
        'Shipping a maintainable split codebase (frontend repo + backend repo) with sensible deployment paths',
      ],
    },
    {
      id: 'goals',
      heading: 'Goals',
      paragraphs: ['The project focused on a few concrete outcomes:'],
      listItems: [
        'Support multiple pets per account with clear profiles and navigation',
        'Make daily logging lightweight so the habit actually sticks',
        'Provide optional AI assistance (insights and chat) that feels helpful, not gimmicky',
        'Run in production with real auth, database, and hosting—not just a local demo',
      ],
    },
    {
      id: 'approach',
      heading: 'Approach',
      paragraphs: [
        'I treated the frontend and backend as separate deployable services with a clear API contract, so each side can evolve and scale independently. On the client, Redux Toolkit keeps complex UI state predictable; on the server, FastAPI and SQLAlchemy keep endpoints small and testable.',
      ],
      listTitle: 'Key decisions included:',
      listItems: [
        'Next.js App Router and TypeScript on the frontend for structure and performance',
        'FastAPI and PostgreSQL on the backend for speed of iteration and solid relational modeling',
        'Google OAuth for a familiar sign-in path and fewer passwords to manage',
        'Docker-oriented backend workflow so local and hosted environments stay aligned',
      ],
    },
    {
      id: 'implementation',
      heading: 'Implementation',
      paragraphs: [
        'The frontend handles routing, forms, charts, and chat UX; the backend exposes REST-style endpoints for pets, journal entries, quick logs, reminders, and AI-backed flows. Email and secrets stay server-side; the client talks to the API over HTTPS with tokens as appropriate.',
      ],
      listTitle: 'Highlights:',
      listItems: [
        'Responsive UI with attention to mobile use cases',
        'Prisma (frontend tooling) and SQLAlchemy migrations on the backend for schema evolution',
        'Integration with OpenAI for summaries and chat features behind the API',
        'Deployments: Vercel for the web app, Railway for the API, with environment-specific configuration',
      ],
    },
    {
      id: 'challenges',
      heading: 'Challenges and tradeoffs',
      paragraphs: [
        'A split stack adds coordination cost: CORS, cookies or tokens, and keeping environments in sync all need discipline. AI features add latency, cost, and the need for guardrails and fallbacks when the model or network fails.',
      ],
      listItems: [
        'Balancing feature breadth with time to ship a stable core experience',
        'Configuring auth and environment variables across Vercel, Railway, and local dev',
        'Keeping the API surface clear as entities like pets, journals, and logs grew',
      ],
    },
    {
      id: 'outcome',
      heading: 'Outcome',
      paragraphs: [
        'Crittr ships as a live application with authenticated users, persistent data, and deployed services end to end. It demonstrates full-stack ownership from product shape through production operations.',
      ],
      listItems: [
        'A cohesive product surface for journaling, logging, and AI-assisted help',
        'Two public repositories that mirror the real architecture (frontend and backend)',
        'A foundation that could extend toward analytics, CMS-style content, or native clients next',
      ],
    },
    {
      id: 'role',
      heading: 'My role',
      paragraphs: [
        'I designed and implemented the system across both repositories: API design, database modeling, frontend architecture, auth integration, AI wiring, deployment, and iterative hardening.',
      ],
    },
    {
      id: 'next',
      heading: 'What I would improve next',
      paragraphs: ['If I continued investing in Crittr, I would prioritize:'],
      listItems: [
        'Broader automated testing (API contracts, critical user flows, and AI edge cases)',
        'Observability: structured logging, metrics, and clearer error surfaces for users',
        'Deeper accessibility review and performance passes on data-heavy views',
        'Optional native or offline-first experiences for logging on the go',
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
