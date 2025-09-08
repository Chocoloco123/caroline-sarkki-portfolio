'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import './Chat.scss'

interface Message {
  id: string
  text: string
  sender: 'user' | 'caroline'
  timestamp: Date
}

const Chat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Clio, Caroline's AI chatbot assistant. I can help you learn about her work, projects, and experience. What would you like to know? 🤖",
      sender: 'caroline',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [backendInfo, setBackendInfo] = useState<string>('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
    } else if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Detect which backend we're using (development only)
  useEffect(() => {
    // Only show backend info in development
    if (process.env.NODE_ENV !== 'development') {
      return
    }

    // Simple detection based on hostname (no API call needed)
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    setBackendInfo(isLocal ? '🖥️ Local Backend' : '☁️ Railway Backend')
  }, [isOpen])

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: userMessage.text }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      
      // Clean the response text
      const cleanResponse = (text: string) => {
        return text
          // Remove markdown code blocks
          .replace(/```html\n?/g, '')
          .replace(/```\n?/g, '')
          // Remove any stray backticks
          .replace(/`/g, '')
          // Clean up extra whitespace
          .replace(/\n\s*\n/g, '\n')
          .trim()
      }
      
      const carolineMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: cleanResponse(data.response || data.message || "I'm sorry, I couldn't process that request right now. Please try again!"),
        sender: 'caroline',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, carolineMessage])
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment!",
        sender: 'caroline',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className={`chat-toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close chat' : 'Open chat with Clio chatbot'}
      >
        <motion.div
          className="chat-icon"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <Icon name="times" size={20} />
          ) : (
            <Icon name="comments" size={20} />
          )}
        </motion.div>
        {!isOpen && (
          <motion.div
            className="chat-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span>🤖</span>
          </motion.div>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="chat-header">
              <div className="chat-title">
                <div className="chat-avatar">
                  <img src="/clio-chatbot-icon.svg" alt="Clio" />
                </div>
                <div className="chat-info">
                  <h3>
                    Clio
                  </h3>
                  <div className="status-container">
                    <span className="status">Online</span>
                    {process.env.NODE_ENV === 'development' && backendInfo && (
                      <span className="backend-indicator">{backendInfo}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="chat-messages"
              role="log"
              aria-live="polite"
              aria-label="Chat messages"
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`message ${message.sender}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  role="article"
                  aria-label={`Message from ${message.sender === 'user' ? 'you' : 'Clio'} at ${message.timestamp.toLocaleTimeString()}`}
                >
                  <div className="message-content">
                    <div 
                      dangerouslySetInnerHTML={{ __html: message.text }}
                      className="message-text"
                    />
                    <span 
                      className="message-time"
                      aria-label={`Sent at ${message.timestamp.toLocaleTimeString()}`}
                    >
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  className="message caroline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <div className="chat-input">
              <div className="input-container">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask Clio about Caroline's work..."
                  disabled={isLoading}
                  aria-label="Type your message to Clio"
                  aria-describedby="chat-instructions"
                  maxLength={500}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  size="sm"
                  className="send-button"
                  aria-label="Send message"
                  aria-describedby="send-button-desc"
                >
                  <Icon name="paper-plane" size={16} />
                </Button>
              </div>
              <div id="chat-instructions" className="sr-only">
                Press Enter to send your message, or Escape to close the chat.
              </div>
              <div id="send-button-desc" className="sr-only">
                Send your message to Clio
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chat
