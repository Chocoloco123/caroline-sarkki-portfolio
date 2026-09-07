export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  /** Live/external URL; omit for internal-only projects with no public link */
  link?: string
  icon: string
  screenshot?: string
  /** Public repository URL; omit when the repo is private */
  githubLink?: string
  /** Multiple repos (e.g. frontend + backend); takes precedence over githubLink when set */
  githubRepos?: Array<{ label: string; url: string }>
  /** Internal route for a written case study (e.g. /case-studies/bauwau-haus) */
  caseStudyPath?: string
  /** Short label shown under the project image (e.g. Client Work) */
  tag?: string
}

export interface ExperienceItem {
  title: string
  company: string
  period: string
  /** Subtitle line summarizing the role's technical scope, shown under the title/dates */
  scope?: string
  responsibilities: string[]
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface Stat {
  value: string
  label: string
}
