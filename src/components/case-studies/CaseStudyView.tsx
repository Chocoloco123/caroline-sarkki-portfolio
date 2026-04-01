'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { CaseStudy } from '@/content/case-studies'
import './CaseStudy.scss'

interface CaseStudyViewProps {
  study: CaseStudy
}

const CaseStudyView: React.FC<CaseStudyViewProps> = ({ study }) => {
  return (
    <main id="main-content" role="main" className="case-study">
      <div className="container case-study__container">
        <motion.div
          className="case-study__toolbar"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Link href="/#projects" className="case-study__back">
            Back to projects
          </Link>
          <Link href="/case-studies" className="case-study__all-link">
            All case studies
          </Link>
        </motion.div>

        <motion.header
          className="case-study__hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
        >
          <div className="case-study__hero-text">
            <span className="case-study__tag">{study.tag}</span>
            <h1 id="case-study-title" className="case-study__title">
              {study.title}
            </h1>
            <p className="case-study__summary">{study.heroSummary}</p>
            <div className="case-study__hero-actions">
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="case-study__btn case-study__btn--primary"
              >
                {study.liveCtaLabel}
              </a>
            </div>
          </div>
          <div className="case-study__hero-visual">
            <div className="case-study__shot">
              <Image
                src={study.screenshot}
                alt={study.screenshotAlt}
                fill
                className="case-study__shot-img"
                sizes="(max-width: 1024px) 100vw, 520px"
                priority
              />
            </div>
          </div>
        </motion.header>

        <motion.article
          className="case-study__body"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.12 }}
          aria-labelledby="case-study-title"
        >
          {study.blocks.map((block, index) => (
            <section
              key={block.id}
              className="case-study__section"
              id={block.id}
              aria-labelledby={`case-study-h2-${block.id}`}
            >
              <div className="case-study__section-marker" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="case-study__section-inner">
                <h2 id={`case-study-h2-${block.id}`} className="case-study__section-title">
                  {block.heading}
                </h2>
                {block.paragraphs?.map((p, i) => (
                  <p key={i} className="case-study__prose">
                    {p}
                  </p>
                ))}
                {block.listTitle ? (
                  <p className="case-study__list-lead">{block.listTitle}</p>
                ) : null}
                {block.listItems && block.listItems.length > 0 ? (
                  <ul className="case-study__list">
                    {block.listItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}

          <footer className="case-study__footer-cta">
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="case-study__btn case-study__btn--primary"
            >
              {study.liveCtaLabel}
            </a>
            <p className="case-study__footer-note">Opens in a new tab</p>
          </footer>
        </motion.article>
      </div>
    </main>
  )
}

export default CaseStudyView
