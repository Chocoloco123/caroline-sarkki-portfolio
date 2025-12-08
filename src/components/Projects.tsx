'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Project } from '../types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'
import './Projects.scss'

const Projects: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  const handleImageError = (projectId: string) => {
    setImageErrors(prev => new Set(prev).add(projectId))
  }
  const professionalProjects: Project[] = [
    {
      id: 'voter-guide',
      title: 'KQED Voter Guide',
      description: 'Developed a comprehensive voter guide application that helps users make informed decisions during elections. Features include candidate information, ballot measures, and voting locations.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      link: 'https://www.kqed.org/voterguide',
      icon: 'vote-yea',
      screenshot: '/projects/professional/voter-guide.png'
    },
    {
      id: 'navigation',
      title: 'Navigation System Redesign',
      description: 'Completely reinvented KQED\'s navigation menu system to improve user experience and accessibility. Implemented responsive design and performance optimizations.',
      technologies: ['JavaScript', 'TypeScript', 'Sass', 'Accessibility'],
      link: 'https://www.kqed.org/',
      icon: 'bars',
      screenshot: '/projects/professional/navigation-redesign.png'
    },
    {
      id: 'micro-websites',
      title: 'Micro Websites',
      description: 'Built and maintained various micro websites for KQED, focusing on performance, SEO optimization, and user engagement. Each site tailored to specific content needs.',
      technologies: ['HTML5', 'Sass', 'TypeScript', 'SEO'],
      link: 'https://youthmedia.kqed.org/',
      icon: 'globe',
      screenshot: '/projects/professional/micro-websites.png'
    },
    {
      id: 'user-accounts',
      title: 'User Account System',
      description: 'Revamped KQED\'s user accounts and login flow, implementing secure authentication, improved UX, and streamlined account management features.',
      technologies: ['Authentication', 'Security', 'UX Design'],
      link: 'https://www.kqed.org/account',
      icon: 'user-cog',
      screenshot: '/projects/professional/user-accounts.png'
    }
  ]

  const personalProjects: Project[] = [
    {
      id: 'crittr',
      title: 'Crittr',
      description: 'An AI-powered pet care platform built with Next.js & FastAPI. Features intelligent chatbot, health tracking, digital journaling, and Google OAuth. Deployed on Railway + Vercel with PostgreSQL database. Helping pet parents create lasting memories while monitoring their furry friends\' wellbeing.',
      technologies: ['Next.js', 'FastAPI', 'PostgreSQL', 'TypeScript', 'Redux', 'Google OAuth', 'OpenAI API'],
      link: 'https://crittr-app.vercel.app/',
      icon: 'user-cog',
      screenshot: '/projects/personal/crittr.png'
    },
    {
      id: 'ai-note-app',
      title: 'AI-Powered Note Taking App',
      description: 'Built a sophisticated note-taking application that leverages OpenAI API for intelligent summarization. Features include smart categorization, automatic summaries, and search functionality.',
      technologies: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'PostgreSQL'],
      link: '#',
      icon: 'brain'
    },
    {
      id: 'chrome-extension',
      title: 'Web Content Summarizer Extension',
      description: 'Developed a Chrome extension that provides instant AI-powered summaries of web page content. Helps users quickly understand lengthy articles and documents.',
      technologies: ['TypeScript', 'Chrome APIs', 'OpenAI API', 'Web Extensions'],
      link: '#',
      icon: 'chrome'
    },
    {
      id: 'mini-games',
      title: 'Interactive Mini Games Collection',
      description: 'Created a collection of engaging mini games with modern web technologies. Features responsive design, smooth animations, and intuitive gameplay mechanics.',
      technologies: ['TypeScript', 'HTML5 Canvas', 'Sass', 'Game Development'],
      link: '#',
      icon: 'gamepad'
    },
    {
      id: 'ai-job-agent',
      title: 'AI Job Search Agent',
      description: 'Developed an intelligent job search agent that uses OpenAI API to aggregate and analyze job postings. Provides personalized recommendations and insights.',
      technologies: ['Python', 'OpenAI API', 'Web Scraping', 'Data Analysis'],
      link: '#',
      icon: 'search'
    }
  ]

  const renderProjectCard = (project: Project, index: number) => {
    const hasImageError = imageErrors.has(project.id)
    const shouldShowImage = project.screenshot && !hasImageError

    return (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ y: -5 }}
      >
        <Card
          className="project-card h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/95 backdrop-blur-sm p-2"
          role="article"
          aria-labelledby={`project-title-${project.id}`}
        >
          <CardHeader className="text-center px-8 pb-4">
          <div className={`project-image mx-auto mb-6 ${shouldShowImage ? 'project-image-screenshot' : 'project-image-icon'}`} aria-hidden="true">
            {shouldShowImage ? (
              <img
                src={project.screenshot}
                alt={`Screenshot of ${project.title} project showing the user interface and functionality`}
                className=""
                onError={() => handleImageError(project.id)}
                onLoad={() => {
                  // Remove from error set if image loads successfully
                  setImageErrors(prev => {
                    const newSet = new Set(prev)
                    newSet.delete(project.id)
                    return newSet
                  })
                }}
                loading="lazy"
              />
            ) : (
              <Icon name={project.icon} size={32} aria-label={`${project.title} project icon`} />
            )}
          </div>
            <CardTitle
              id={`project-title-${project.id}`}
              className="text-xl font-bold text-slate-800"
            >
              {project.title}
            </CardTitle>
          </CardHeader>
        <CardContent className="text-center px-8 pt-0">
          <CardDescription
            id={`project-desc-${project.id}`}
            className="text-slate-600 mb-6 leading-relaxed"
          >
            {project.description}
          </CardDescription>
          <div className="project-tech flex flex-wrap justify-center gap-2 mb-6" role="list" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200 font-medium px-6 py-2.5"
                role="listitem"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label={`View ${project.title} project (opens in new tab)`}
            aria-describedby={`project-desc-${project.id}`}
          >
            View Project <i className="fas fa-external-link-alt" aria-hidden="true"></i>
          </a>
        </CardContent>
      </Card>
    </motion.div>
    )
  }

  return (
    <section id="projects" className="projects" aria-labelledby="projects-heading">
      <div className="container">
        <motion.h2
          id="projects-heading"
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        {/* Professional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3
            id="professional-projects-heading"
            className="text-2xl mb-20 text-center"
          >
            Professional Work at KQED
          </h3>
          <div
            className="projects-grid mb-16"
            role="grid"
            aria-labelledby="professional-projects-heading"
            aria-label="Professional projects grid"
          >
            {professionalProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </motion.div>

        {/* Personal Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3
            id="personal-projects-heading"
            className="text-2xl mb-20 text-center"
          >
            Personal Projects
          </h3>
          <div
            className="projects-grid"
            role="grid"
            aria-labelledby="personal-projects-heading"
            aria-label="Personal projects grid"
          >
            {personalProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
