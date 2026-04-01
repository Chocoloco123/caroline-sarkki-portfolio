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

export const caseStudies: CaseStudy[] = [bauwauHaus]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies
}
