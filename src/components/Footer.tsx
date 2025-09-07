'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Chat from './Chat'
import Icon from '@/components/ui/icon'
import './Footer.scss'

const Footer: React.FC = () => {
  const socialLinks = [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/caroline-sarkki-2a5517126/', icon: 'linkedin' },
    { platform: 'GitHub', url: 'https://github.com/Chocoloco123', icon: 'github' },
    { platform: 'Email', url: 'mailto:csarkki.swe@gmail.com', icon: 'envelope' }
  ]

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 Caroline Sarkki. All rights reserved.</p>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon name={social.icon} size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <Chat />
    </>
  )
}

export default Footer
