'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Stat } from '../types'
import './About.scss'

const About: React.FC = () => {
  // Calculate years of experience since June 2022
  const calculateYearsOfExperience = (): string => {
    const startDate = new Date(2022, 5, 1) // June 2022 (month is 0-indexed)
    const currentDate = new Date()
    const yearsDiff = currentDate.getFullYear() - startDate.getFullYear()
    const monthsDiff = currentDate.getMonth() - startDate.getMonth()

    // If we're past June, add 1 to the year count
    const totalYears = monthsDiff >= 0 ? yearsDiff : yearsDiff - 1

    return `${totalYears}+`
  }

  const yearsOfExperience = calculateYearsOfExperience()

  const stats: Stat[] = [
    { value: yearsOfExperience, label: 'Years Experience' },
    { value: '10+', label: 'Projects Completed' },
    { value: '4', label: 'Interns Mentored' },
    { value: '100%', label: 'Passion for Code' }
  ]

  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="container">
        <motion.h2
          id="about-heading"
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Full-Stack Software Engineer at KQED, where I build end-to-end features for platforms serving hundreds of thousands of people — and increasingly, the tooling and training that make my team faster.
            </p>

            <p>
              Over the past 4 years I've worked across React, TypeScript, Java, Spring Boot, Node, MongoDB, PostgreSQL, Docker, and GCP. I recently designed and built KQED's first internal AI product — a self-serve election results pipeline using the Claude API — and I lead developer-experience work across the team: an internal AI Maker Workshop series, a shared library of reusable AI skills, and our team's Postman standard. I've mentored three junior engineers and four interns.
            </p>

            <p>
              Outside of work: Golden State Valkyries games, cozy Nintendo Switch games, hiking, tea latte experiments, and coding alongside my golden retriever who's convinced he's my pair programmer.
            </p>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            role="group"
            aria-label="Professional statistics"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                role="img"
                aria-label={`${stat.value} ${stat.label}`}
              >
                <h3 aria-hidden="true">{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
