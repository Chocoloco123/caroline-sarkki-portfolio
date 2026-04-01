'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import './Navbar.scss'

const SECTION_OFFSET = 72

type SectionNav = { type: 'section'; hash: string; label: string }
type RouteNav = { type: 'route'; path: string; label: string; matchPrefix?: boolean }

const navItems: Array<SectionNav | RouteNav> = [
  { type: 'section', hash: '#about', label: 'About' },
  { type: 'section', hash: '#experience', label: 'Experience' },
  { type: 'section', hash: '#projects', label: 'Projects' },
  { type: 'route', path: '/case-studies', label: 'Case studies', matchPrefix: true },
  { type: 'section', hash: '#contact', label: 'Contact' },
]

const Navbar: React.FC = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isHome = pathname === '/'

  const scrollToHash = useCallback((hash: string) => {
    const el = document.querySelector(hash) as HTMLElement | null
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - SECTION_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isMenuOpen])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (isHome) {
      e.preventDefault()
      scrollToHash(hash)
    }
    setIsMenuOpen(false)
  }

  const routeIsActive = (item: RouteNav) => {
    if (item.matchPrefix) {
      return pathname === item.path || pathname.startsWith(`${item.path}/`)
    }
    return pathname === item.path
  }

  return (
    <>
      {isMenuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <nav
        className={cn('navbar', isScrolled && 'navbar--scrolled', isMenuOpen && 'navbar--menu-open')}
        role="navigation"
        aria-label="Main"
        id="navigation"
      >
        <div className="nav-container">
        <div className="nav-brand">
          <Link
            href="/"
            className="nav-brand__link"
            onClick={handleLogoClick}
            aria-label="Caroline Sarkki, back to top"
          >
            Caroline Sarkki
          </Link>
        </div>

        <div
          id="nav-menu-panel"
          className={cn('nav-menu', isMenuOpen && 'nav-menu--open')}
          role="menubar"
          aria-label="Site sections"
        >
          {navItems.map((item) => {
            if (item.type === 'route') {
              const active = routeIsActive(item)
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn('nav-link', active && 'nav-link--active')}
                  role="menuitem"
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            }

            const sectionHref = `/${item.hash}`
            return (
              <a
                key={item.hash}
                href={sectionHref}
                className="nav-link"
                role="menuitem"
                onClick={(e) => handleSectionClick(e, item.hash)}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <button
          type="button"
          className={cn('nav-toggle', isMenuOpen && 'nav-toggle--open')}
          onClick={() => setIsMenuOpen((o) => !o)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu-panel"
        >
          <span className="nav-toggle__bar" aria-hidden="true" />
          <span className="nav-toggle__bar" aria-hidden="true" />
          <span className="nav-toggle__bar" aria-hidden="true" />
        </button>
      </div>
    </nav>
    </>
  )
}

export default Navbar
