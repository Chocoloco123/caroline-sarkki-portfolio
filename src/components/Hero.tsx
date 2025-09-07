'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import './Hero.scss'

const Hero: React.FC = () => {
  const socialLinks = [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/caroline-sarkki-2a5517126/', icon: 'linkedin' },
    { platform: 'GitHub', url: 'https://github.com/Chocoloco123', icon: 'github' },
    { platform: 'Email', url: 'mailto:csarkki.swe@gmail.com', icon: 'envelope' }
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Caroline Sarkki</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Full Stack Software Engineer at KQED
          </h2>
          
          <p className="hero-description">
            Passionate developer with 3+ years of experience building scalable web applications, 
            AI-powered tools, and mentoring engineering teams. Specializing in React, JavaScript, 
            OpenAI API integration, and full-stack development in the San Francisco Bay Area.
          </p>
          
          <div 
            className="hero-buttons"
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
          </div>
          
          <div 
            className="hero-social"
            role="group"
            aria-label="Social media links"
          >
            {socialLinks.map((social, index) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={`Visit Caroline Sarkki's ${social.platform} profile`}
              >
                <Icon name={social.icon} size={20} />
                <span className="sr-only">{social.platform}</span>
              </a>
            ))}
          </div>
        </motion.div>
        
        <div className="hero-image">
          <div className="hero-image-container">
            <img 
              src="/caroline-headshot.jpg" 
              alt="Caroline Sarkki - Full Stack Software Engineer"
              className="hero-photo"
              loading="eager"
              decoding="async"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.error('Headshot failed to load:', target.src);
                // Show placeholder if image fails to load
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.innerHTML = '<div style="width: 100%; height: 100%; background: linear-gradient(135deg, #475569, #3b82f6); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Photo</div>';
                }
              }}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero