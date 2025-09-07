export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link: string
  icon: string
  screenshot?: string
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
