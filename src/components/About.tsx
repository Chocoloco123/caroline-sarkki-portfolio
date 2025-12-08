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
              I'm a full-stack engineer at KQED who loves building things that are useful, accessible, and built to last. Over the past {yearsOfExperience} years, I've worked across the stack—from intuitive UIs to backend services, APIs, and cloud deployments.
            </p>

            <p>
              Some of my favorite projects include rebuilding full-stack components of our Membership & Account platform, designing frontend features for our Voter Guide & Election Results during the 2024 Presidential Election and the LA Times–endorsed 2022 Midterm Election, and helping our Youth Media platform achieve WCAG 2.1 AA accessibility.
            </p>

            <p>
              I've also mentored four interns, teaching them how to think like engineers—not just write code.
            </p>

            <p>
              Recently, I've been diving deeper into AI: building a smart note-taking app with summaries, a Chrome extension for quick web digestion, an AI job search agent, and the occasional browser mini-game. I also collaborate with people who want fast, modern websites without the hassle.
            </p>

            <p>
              When I'm not writing code, I'm probably enjoying cozy Nintendo Switch games, checking out a Golden State Valkyries game, hiking with friends, experimenting with new tea latte recipes, or hanging out with my golden retriever—who believes he's my pair programmer.
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
