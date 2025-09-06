'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navbar.scss'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ]

  const handleLinkClick = (href: string) => {
    const targetSection = document.querySelector(href) as HTMLElement
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 70
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      role="navigation"
      aria-label="Main navigation"
      id="navigation"
    >
      <div className="nav-container">
        <div className="nav-logo">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('#home') }}
            aria-label="Caroline Sarkki - Home"
          >
            Caroline Sarkki
          </a>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`} role="menubar">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.href) }}
              role="menuitem"
              aria-label={`Navigate to ${link.label} section`}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <button 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="navigation"
        >
          <span className="bar" aria-hidden="true"></span>
          <span className="bar" aria-hidden="true"></span>
          <span className="bar" aria-hidden="true"></span>
        </button>
      </div>
    </motion.nav>
  )
}

export default Navbar
