'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ContactFormData, SocialLink } from '../types'
import { Button } from '@/components/ui/button'
import './Contact.scss'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const socialLinks: SocialLink[] = [
    { platform: 'Email', url: 'mailto:csarkki.swe@gmail.com', icon: 'fas fa-envelope' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/caroline-sarkki-2a5517126/', icon: 'fab fa-linkedin' },
    { platform: 'GitHub', url: 'https://github.com/Chocoloco123', icon: 'fab fa-github' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Using EmailJS for Vercel deployment
      // You'll need to install: npm install @emailjs/browser
      // And set up EmailJS account at emailjs.com
      
      // For now, simulate successful submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setNotification({ message: 'Message sent successfully! I\'ll get back to you soon.', type: 'success' })
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // TODO: Replace with actual EmailJS implementation
      // const result = await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     subject: formData.subject,
      //     message: formData.message,
      //   },
      //   'YOUR_PUBLIC_KEY'
      // )
      
    } catch (error) {
      setNotification({ message: 'Sorry, there was an error sending your message. Please try again.', type: 'error' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="container">
        <motion.h2 
          id="contact-heading"
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in discussing new opportunities, 
              collaborating on projects, or just having a chat about technology.
            </p>
            <div className="contact-details">
              {socialLinks.map((social) => (
                <div key={social.platform} className="contact-item">
                  <i className={social.icon}></i>
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    {social.platform === 'Email' ? 'csarkki.swe@gmail.com' : `${social.platform} Profile`}
                  </a>
                </div>
              ))}
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>San Francisco Bay Area</span>
              </div>
            </div>
          </motion.div>
          
          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            aria-labelledby="contact-heading"
            noValidate
          >
            
            <div className="form-group">
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                aria-describedby="name-error"
                aria-invalid={formData.name === '' ? 'true' : 'false'}
              />
              <div id="name-error" className="sr-only" role="alert">
                Name is required
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                aria-describedby="email-error"
                aria-invalid={formData.email === '' ? 'true' : 'false'}
              />
              <div id="email-error" className="sr-only" role="alert">
                Valid email is required
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                aria-describedby="subject-error"
                aria-invalid={formData.subject === '' ? 'true' : 'false'}
              />
              <div id="subject-error" className="sr-only" role="alert">
                Subject is required
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
                aria-describedby="message-error"
                aria-invalid={formData.message === '' ? 'true' : 'false'}
              />
              <div id="message-error" className="sr-only" role="alert">
                Message is required
              </div>
            </div>
            <Button 
              type="submit" 
              variant="default"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
              aria-describedby="submit-status"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
            <div id="submit-status" className="sr-only" role="status" aria-live="polite">
              {isSubmitting ? 'Sending your message...' : 'Ready to send'}
            </div>
          </motion.form>
        </div>
        
        {notification && (
          <motion.div
            className={`notification notification-${notification.type}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {notification.message}
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Contact
