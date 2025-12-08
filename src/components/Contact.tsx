'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { ContactFormData, SocialLink } from '../types'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
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

  // Auto-dismiss notification after 5 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null)
      }, 5000) // 5 seconds

      return () => clearTimeout(timer)
    }
  }, [notification])

  const socialLinks: SocialLink[] = [
    { platform: 'Email', url: 'mailto:csarkki.swe@gmail.com', icon: 'envelope' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/caroline-sarkki-2a5517126/', icon: 'linkedin' },
    { platform: 'GitHub', url: 'https://github.com/Chocoloco123', icon: 'github' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

      // Check if EmailJS is properly configured
      if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS not configured. Please check your environment variables.')
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'csarkki.swe@gmail.com', // Your email address
          reply_to: formData.email, // This will set the Reply-To header
        },
        publicKey
      )
      
      setNotification({ message: 'Message sent successfully! I\'ll get back to you soon.', type: 'success' })
      setFormData({ name: '', email: '', subject: '', message: '' })

    } catch (error) {
      setNotification({
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly at csarkki.swe@gmail.com',
        type: 'error'
      })
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
                  <Icon name={social.icon} size={20} />
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    {social.platform === 'Email' ? 'csarkki.swe@gmail.com' : `${social.platform} Profile`}
                  </a>
                </div>
              ))}
              <div className="contact-item">
                <Icon name="map-marker-alt" size={20} />
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
            role="alert"
            aria-live="polite"
          >
            <span>{notification.message}</span>
            <button
              onClick={() => setNotification(null)}
              className="notification-close"
              aria-label="Close notification"
              type="button"
            >
              <Icon name="times" size={16} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Contact
