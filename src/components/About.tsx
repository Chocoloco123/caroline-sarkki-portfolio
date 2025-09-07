'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Stat } from '../types'
import './About.scss'

const About: React.FC = () => {
  const stats: Stat[] = [
    { value: '3+', label: 'Years Experience' },
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
              I'm a dedicated Full Stack Software Engineer currently working at KQED, where I've spent 
              over 3 years contributing to meaningful projects that serve the community. My work spans 
              across frontend development, backend API maintenance, and technical leadership.
            </p>
            <p>
              At KQED, I've had the opportunity to work on diverse projects including the voter guide, 
              navigation system redesign, micro websites, and user account management. I've mentored 
              4 interns, helping them grow their technical skills in JavaScript, React, Java, Python, 
              and database technologies including PostgreSQL and MySQL.
            </p>
            <p>
              Lately I've been building innovative AI-powered tools including a note-taking app with smart summaries, 
              a Chrome extension for web content summarization, and an AI job search agent. I also enjoy creating 
              interactive mini games and partnering with folks who need fast, modern websites. Teammates know me 
              for calm problem-solving, clear communication, and code that's easy to read six months later.
            </p>
            <p>
            When I’m not coding, you can find me exploring the Bay on weekend hikes, salsa dancing, or hanging with my golden retriever. If you’ve got a product idea or a puzzle that needs untangling, I’d love to help bring it to life.
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
