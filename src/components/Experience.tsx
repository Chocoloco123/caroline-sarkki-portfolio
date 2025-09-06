'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExperienceItem } from '../types'
import './Experience.scss'

const Experience: React.FC = () => {
  const experience: ExperienceItem = {
    title: 'Full Stack Software Engineer',
    company: 'KQED',
    period: '2021 - Present',
    responsibilities: [
      'Developed and maintained KQED\'s voter guide application',
      'Redesigned and implemented the site\'s navigation menu system',
      'Built and maintained various micro websites for KQED',
      'Improved SEO performance across multiple platforms',
      'Implemented comprehensive unit testing strategies',
      'Provided maintenance and upgrades for backend APIs and services',
      'Revamped user accounts and login flow systems',
      'Mentored engineering interns and reviewed their technical work',
      'Led technical discussions for engineers and non-engineers',
      'Oversaw system documentation and site cleanup initiatives'
    ]
  }

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
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>{experience.title}</h3>
              <h4>{experience.company}</h4>
              <span className="timeline-date">{experience.period}</span>
              <ul className="experience-list">
                {experience.responsibilities.map((responsibility, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {responsibility}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
