'use client'

import React from 'react'
import { motion } from 'framer-motion'
import './Skills.scss'

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        'TypeScript',
        'JavaScript',
        'React',
        'HTML5/CSS3',
        'Sass/SCSS',
        'Responsive Design',
        'Accessibility (WCAG 2.1 AA)'
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        'Node.js',
        'Java',
        'Spring Boot',
        'Python',
        'API Development',
        'SQL',
        'PostgreSQL',
        'MySQL',
        'Database Design',
        'System Maintenance'
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        'Docker',
        'Google Cloud Platform (GCP)',
        'CI/CD'
      ]
    },
    {
      title: 'AI & Integration',
      skills: [
        'OpenAI API',
        'Claude API',
        'AI-Assisted Development',
        'AI Integration',
        'Web Scraping',
        'Chrome Extensions',
        'Data Analysis'
      ]
    },
    {
      title: 'Leadership & Practices',
      skills: [
        'Intern Mentoring',
        'Code Review',
        'Unit Testing',
        'Technical Leadership',
        'Developer Experience',
        'Technical Documentation',
        'SEO Optimization'
      ]
    }
  ]

  return (
    <section id="skills" className="skills" aria-labelledby="skills-heading">
      <div className="container">
        <motion.h2
          id="skills-heading"
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="skills-grid" role="list" aria-label="Technical skills categories">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              role="listitem"
            >
              <h3 id={`category-${categoryIndex}`}>{category.title}</h3>
              <div
                className="skill-items"
                role="list"
                aria-labelledby={`category-${categoryIndex}`}
                aria-label={`${category.title} skills`}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    role="listitem"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
