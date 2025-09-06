'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import './Hero.scss'

const Hero: React.FC = () => {
  const socialLinks = [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/caroline-sarkki-2a5517126/', icon: 'fab fa-linkedin' },
    { platform: 'GitHub', url: 'https://github.com/Chocoloco123', icon: 'fab fa-github' },
    { platform: 'Email', url: 'mailto:csarkki.swe@gmail.com', icon: 'fas fa-envelope' }
  ]

  const scrollToSection = (sectionId: string) => {
    const targetSection = document.querySelector(sectionId) as HTMLElement
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 70
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header id="home" className="hero" role="banner">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="highlight">Caroline Sarkki</span>
          </motion.h1>
          
          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Software Engineer at KQED
          </motion.h2>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate developer with 3+ years of experience building scalable web applications, 
            AI-powered tools, and mentoring engineering teams. Specializing in React, JavaScript, 
            OpenAI API integration, and full-stack development in the San Francisco Bay Area.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            role="group"
            aria-label="Main action buttons"
          >
            <Button 
              variant="default"
              size="lg"
              onClick={() => scrollToSection('#projects')}
              aria-label="View my portfolio projects"
            >
              View My Work
            </Button>
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('#contact')}
              aria-label="Get in touch with Caroline Sarkki"
            >
              Get In Touch
            </Button>
          </motion.div>
          
          <motion.div 
            className="hero-social"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            role="group"
            aria-label="Social media links"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                aria-label={`Visit Caroline Sarkki's ${social.platform} profile`}
              >
                <i className={social.icon} aria-hidden="true"></i>
                <span className="sr-only">{social.platform}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="hero-image-container">
            <img 
              src="/caroline-headshot.jpg" 
              alt="Caroline Sarkki - Full Stack Software Engineer"
              className="hero-photo"
            />
          </div>
        </motion.div>
      </div>
    </header>
  )
}

export default Hero