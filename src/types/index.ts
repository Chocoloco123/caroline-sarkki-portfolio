export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link: string
  icon: string
  screenshot?: string
  /** Public repository URL; omit when the repo is private */
  githubLink?: string
  /** Internal route for a written case study (e.g. /case-studies/bauwau-haus) */
  caseStudyPath?: string
  /** Short label shown under the project image (e.g. Client Work) */
  tag?: string
}

export interface Skill {
  name: string
  level: number
  category: string
}

export interface ExperienceItem {
  title: string
  company: string
  period: string
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
