'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExperienceItem } from '../types'
import './Experience.scss'

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Software Engineer — Full-Stack Focus',
      company: 'KQED',
      period: 'June 2025 - Present',
      responsibilities: [
        'Delivered end-to-end development for a Membership & Account platform rebuild using React, TypeScript, Node.js, Java, Spring Boot, and MongoDB',
        'Improved donor and member experience through clearer account interactions and streamlined authentication workflows',
        'Built backend APIs for authentication, profile management, and internal integrations',
        'Deployed features through CI/CD pipelines using Docker and GCP',
        'Collaborated with product managers and designers to create scalable, user-centered software',
        'Mentored junior engineers and participated in architecture discussions and reviews',
        'Developed full-stack AI applications including an OpenAI-powered chatbot and recommendation engine'
      ]
    },
    {
      title: 'Software Developer — Frontend Focus',
      company: 'KQED',
      period: 'June 2023 - June 2025',
      responsibilities: [
        'Engineered major features for Voter Guide & Election Results platforms supporting high-traffic election periods',
        'Rebuilt the global navigation system for improved accessibility, clarity, and performance',
        'Redesigned banner ad components and enhanced ad delivery integration',
        'Integrated dynamic election APIs using React, Redux Toolkit, TypeScript, Sass, and Jest',
        'Supported Youth Media\'s WCAG 2.1 AA accessibility achievement with accessible component patterns',
        'Integrated WordPress as a headless CMS supporting editorial workflows'
      ]
    },
    {
      title: 'Junior Software Developer',
      company: 'KQED',
      period: 'June 2022 - June 2023',
      responsibilities: [
        'Implemented frontend and backend features using React, JavaScript, Python, and REST APIs',
        'Contributed to foundational accessible UI patterns adopted across platforms',
        'Translated product and design requirements into engineering tasks',
        'Improved documentation and test coverage through QA collaboration and reviews'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((experience, expIndex) => {
            const isEven = expIndex % 2 === 0
            return (
              <motion.div
                key={expIndex}
                className={`timeline-item ${isEven ? 'timeline-item-right' : 'timeline-item-left'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: expIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-marker"></div>
                <div className={`timeline-content ${isEven ? 'timeline-content-right' : 'timeline-content-left'}`}>
                <h3>{experience.title}</h3>
                <h4>{experience.company}</h4>
                <span className="timeline-date">{experience.period}</span>
                <ul className="experience-list">
                  {experience.responsibilities.map((responsibility, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (expIndex * 0.1) + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      {responsibility}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
