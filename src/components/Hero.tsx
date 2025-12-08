'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import './Hero.scss'

const Hero: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false)
  const heroClassName = "hero"

  useEffect(() => {
    setIsHydrated(true)
  }, [])

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
    <header id="home" className={heroClassName} role="banner">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Caroline Sarkki</span>
          </h1>

          <h2 className="hero-subtitle">
            Full Stack Software Engineer at KQED
          </h2>

          <p className="hero-description">
            I build intuitive interfaces, solid backend systems, and sprinkle in AI features whenever they make life easier. I care a lot about clarity—both in the products I create and the code that powers them.
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
        </div>

        <div className="hero-image">
          <div className="hero-image-container">
            <Image
              src="/caroline-headshot.jpg"
              alt="Caroline Sarkki - Full Stack Software Engineer"
              className="hero-photo"
              width={300}
              height={300}
              priority
              quality={90}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              onError={(e) => {
                const target = e.target as HTMLImageElement;
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