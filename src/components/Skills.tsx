'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../types'
import './Skills.scss'

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'TypeScript', level: 90, category: 'Frontend Development' },
        { name: 'JavaScript', level: 90, category: 'Frontend Development' },
        { name: 'React', level: 85, category: 'Frontend Development' },
        { name: 'HTML5/CSS3', level: 95, category: 'Frontend Development' },
        { name: 'Sass/SCSS', level: 90, category: 'Frontend Development' },
        { name: 'Responsive Design', level: 90, category: 'Frontend Development' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 80, category: 'Backend Development' },
        { name: 'Java', level: 85, category: 'Backend Development' },
        { name: 'Python', level: 80, category: 'Backend Development' },
        { name: 'API Development', level: 85, category: 'Backend Development' },
        { name: 'SQL', level: 90, category: 'Backend Development' },
        { name: 'PostgreSQL', level: 85, category: 'Backend Development' },
        { name: 'MySQL', level: 80, category: 'Backend Development' },
        { name: 'Database Design', level: 75, category: 'Backend Development' },
        { name: 'System Maintenance', level: 90, category: 'Backend Development' }
      ]
    },
    {
      title: 'AI & Integration',
      skills: [
        { name: 'OpenAI API', level: 90, category: 'AI & Integration' },
        { name: 'AI Integration', level: 85, category: 'AI & Integration' },
        { name: 'Web Scraping', level: 80, category: 'AI & Integration' },
        { name: 'Chrome Extensions', level: 85, category: 'AI & Integration' },
        { name: 'Data Analysis', level: 80, category: 'AI & Integration' }
      ]
    },
    {
      title: 'Leadership & Practices',
      skills: [
        { name: 'Intern Mentoring', level: 90, category: 'Leadership & Practices' },
        { name: 'Code Review', level: 90, category: 'Leadership & Practices' },
        { name: 'Unit Testing', level: 85, category: 'Leadership & Practices' },
        { name: 'Technical Leadership', level: 85, category: 'Leadership & Practices' },
        { name: 'SEO Optimization', level: 80, category: 'Leadership & Practices' }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
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
