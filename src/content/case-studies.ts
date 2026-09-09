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
  /** Omit for a project with no shareable screenshot (e.g. an internal tool) */
  screenshot?: string
  screenshotAlt?: string
  /** Omit for a project with no public URL (e.g. an internal tool) */
  liveUrl?: string
  liveCtaLabel?: string
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

const kqedElectionResults: CaseStudy = {
  slug: 'kqed-election-results-pipeline',
  title: 'KQED Election Results AI Pipeline',
  tag: 'Internal tool',
  metaDescription:
    "KQED's first internal AI product: a self-serve election results pipeline built with React, Node.js, the Claude API, and Google Sheets API.",
  heroSummary:
    'A self-serve tool that turns raw county election results into sheet-ready data in minutes, replacing a manual process that took a dozen people to run.',
  blocks: [
    {
      id: 'overview',
      heading: 'Overview',
      paragraphs: [
        "Designed and built KQED's first internal AI product: a self-serve election results pipeline used by the newsroom's data team during live election periods.",
        'The tool lets a data lead select a county and either upload a results file or trigger an automated scrape; the Claude API then standardizes whatever comes back into sheet-ready data written to Google Sheets. Built solo, frontend to backend, using Claude Code and Cursor.',
      ],
    },
    {
      id: 'problem',
      heading: 'Problem',
      paragraphs: [
        "KQED's election results reporting relied on a manual process: during election periods, about a dozen people were needed to enter county-by-county results by hand, repeatedly, over a month-plus results window.",
        'That process was slow, labor-intensive, and hard to scale for high-turnout elections, with no standardized way to handle the wide variety of formats county results come in.',
      ],
      listTitle: 'Key challenges included:',
      listItems: [
        'County results arrive in inconsistent formats, from PDFs to ad-hoc spreadsheets to raw scraped HTML',
        'The manual process required a large, coordinated team working in parallel under time pressure',
        'Any automation still needed a human QA step — accuracy on live election data is non-negotiable',
        'The tool had to be usable by a non-engineer (a data lead), not just by developers',
      ],
    },
    {
      id: 'goals',
      heading: 'Goals',
      paragraphs: ['The project focused on a few concrete outcomes:'],
      listItems: [
        'Let a single data lead run the pipeline directly, without engineering involvement',
        'Support both an uploaded results file and an automated scrape as input paths',
        'Standardize inconsistent county data into a single sheet-ready format automatically',
        'Shrink the team needed to cover a results period from about a dozen people to a much smaller one, while keeping human QA in the loop',
      ],
    },
    {
      id: 'approach',
      heading: 'Approach',
      paragraphs: [
        'The pipeline is built around a simple, guided flow: pick a county, then either upload a results file or trigger a scrape for that county. Whatever comes back is passed to the Claude API, which standardizes the data into a consistent, sheet-ready shape before it lands in Google Sheets.',
        'Keeping the human QA step meant treating the AI as a standardization layer, not a black box — the data lead still reviews what comes out before it is used in reporting.',
      ],
      listTitle: 'Key decisions included:',
      listItems: [
        'A React frontend so the data lead could drive the whole flow without touching code',
        'A Node.js backend to handle uploads, scraping, and orchestration between Claude and Google Sheets',
        'Using the Claude API specifically for the standardization step, where source formats vary the most',
        'Writing output directly to Google Sheets via the Google Sheets API, matching the format the newsroom already worked in',
        'Retaining a human QA review step rather than fully automating trust-critical output',
      ],
    },
    {
      id: 'implementation',
      heading: 'Implementation',
      paragraphs: [
        'Built and shipped solo, end to end: the React county-selection and upload/scrape UI, the Node.js orchestration layer, the Claude API integration for data standardization, and the Google Sheets API output step.',
        'Development leaned heavily on Claude Code and Cursor for implementation speed, given the tight timeline ahead of a live election period.',
        'Before trusting it with real results, the standardization step was exercised at least a dozen times against each of the different county file formats — and far more than that during earlier testing — to surface edge cases ahead of election night.',
      ],
      listTitle: 'Highlights:',
      listItems: [
        'County selection with two input paths: file upload or automated scrape',
        'Claude API step that normalizes inconsistent county formats into one sheet-ready structure',
        'Direct write-out to Google Sheets, matching the newsroom\'s existing workflow',
        'Human QA review retained as a deliberate step before results are used in reporting',
      ],
    },
    {
      id: 'challenges',
      heading: 'Challenges & tradeoffs',
      paragraphs: [
        'Shipping the first version against a real election cycle raised the stakes: there was no room for silent data errors, and no time to iterate slowly.',
      ],
      listItems: [
        'Validating the tool against live election data during the June 2026 midterms, where correctness mattered immediately',
        'Balancing automation with accuracy — keeping a human QA step rather than fully trusting AI-standardized output',
        'Handling the genuine variability in how counties publish results, without a fixed schema to rely on',
        'Building and shipping solo under election-cycle time pressure, with no team to split the work across',
        'Mitigated the "no room for silent errors" risk with heavy pre-launch testing rather than shipping on faith',
      ],
    },
    {
      id: 'outcome',
      heading: 'Outcome',
      paragraphs: [
        'The pipeline replaced a manual process that required about a dozen people entering county results by hand with a self-serve tool run by a much smaller team, repeatedly, over the month-plus results period — while keeping human QA review in place.',
        'On election night itself, it ran at least four full passes across all 15 counties in the June 2026 midterms. Where a county previously took an estimated 20 minutes to process by hand, the self-serve flow brings that down to roughly 2.',
        "It was validated against live election data during the June 2026 midterms, and is on track to connect to KQED's public election results site for full production in November 2026.",
      ],
    },
    {
      id: 'role',
      heading: 'My role',
      paragraphs: [
        'Sole designer and builder of the entire pipeline: the frontend UI, the backend orchestration, the Claude API integration, and the Google Sheets output — plus working with the data team to fit the tool into their existing QA workflow.',
      ],
    },
    {
      id: 'next',
      heading: 'What I would improve next',
      paragraphs: ['Ahead of full production in November 2026, I would prioritize:'],
      listItems: [
        'Expanding scrape coverage to more counties and result formats',
        'Adding automated anomaly checks ahead of the human QA step, to flag likely errors earlier',
        'Formal onboarding so other data leads can run the pipeline independently',
        'Connecting the pipeline directly to KQED\'s public election results site for full production',
      ],
    },
  ],
}

export const caseStudies: CaseStudy[] = [crittr, bauwauHaus, kqedElectionResults]

/** Order of cards on `/case-studies` (strongest/most recent story first). */
const CASE_STUDIES_HUB_ORDER: string[] = [
  'kqed-election-results-pipeline',
  'crittr',
  'bauwau-haus',
]

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
