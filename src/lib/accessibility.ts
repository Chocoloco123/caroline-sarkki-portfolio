// Focus management utilities for accessibility
export const focusManagement = {
  // Trap focus within an element
  trapFocus: (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>
    
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus()
            e.preventDefault()
          }
        }
      }
    }

    element.addEventListener('keydown', handleTabKey)
    
    // Return cleanup function
    return () => {
      element.removeEventListener('keydown', handleTabKey)
    }
  },

  // Move focus to first focusable element
  focusFirst: (element: HTMLElement) => {
    const focusableElement = element.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as HTMLElement
    
    if (focusableElement) {
      focusableElement.focus()
    }
  },

  // Restore focus to previously focused element
  restoreFocus: (element: HTMLElement) => {
    element.focus()
  },

  // Hide content from screen readers
  hideFromScreenReader: (element: HTMLElement) => {
    element.setAttribute('aria-hidden', 'true')
  },

  // Show content to screen readers
  showToScreenReader: (element: HTMLElement) => {
    element.removeAttribute('aria-hidden')
  }
}

// Keyboard navigation utilities
export const keyboardNavigation = {
  // Handle arrow key navigation for lists
  handleArrowKeys: (e: KeyboardEvent, items: HTMLElement[], currentIndex: number) => {
    let newIndex = currentIndex
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        newIndex = (currentIndex + 1) % items.length
        break
      case 'ArrowUp':
        e.preventDefault()
        newIndex = (currentIndex - 1 + items.length) % items.length
        break
      case 'Home':
        e.preventDefault()
        newIndex = 0
        break
      case 'End':
        e.preventDefault()
        newIndex = items.length - 1
        break
    }
    
    if (newIndex !== currentIndex) {
      items[newIndex].focus()
    }
    
    return newIndex
  },

  // Handle Enter and Space key activation
  handleActivation: (e: KeyboardEvent, callback: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      callback()
    }
  }
}

// Announce changes to screen readers
export const announceToScreenReader = (message: string) => {
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', 'polite')
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message
  
  document.body.appendChild(announcement)
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

// Color contrast utilities
export const colorContrast = {
  // Check if color meets WCAG contrast requirements
  checkContrast: (foreground: string, background: string, level: 'AA' | 'AAA' = 'AA') => {
    // This is a simplified version - in production, use a proper color contrast library
    const ratio = level === 'AA' ? 4.5 : 7
    // Implementation would calculate actual contrast ratio
    return true // Placeholder
  },

  // Get high contrast colors
  getHighContrastColors: () => ({
    primary: '#000000',
    secondary: '#ffffff',
    accent: '#0066cc',
    background: '#ffffff',
    text: '#000000'
  })
}

// Motion preferences utilities
export const motionPreferences = {
  // Check if user prefers reduced motion
  prefersReducedMotion: () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  },

  // Get appropriate animation duration based on preferences
  getAnimationDuration: (defaultDuration: number) => {
    return motionPreferences.prefersReducedMotion() ? 0.01 : defaultDuration
  },

  // Apply reduced motion styles
  applyReducedMotion: (element: HTMLElement) => {
    if (motionPreferences.prefersReducedMotion()) {
      element.style.animationDuration = '0.01ms'
      element.style.transitionDuration = '0.01ms'
    }
  }
}
