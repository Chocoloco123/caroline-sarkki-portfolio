import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAllCaseStudies } from '@/content/case-studies'
import '@/components/case-studies/CaseStudy.scss'

export const metadata: Metadata = {
  title: 'Case studies',
  description: 'Selected client and personal project writeups: process, stack, and outcomes.',
}

export default function CaseStudiesIndexPage() {
  const studies = getAllCaseStudies()

  return (
    <>
      <Navbar />
      <main id="main-content" role="main" className="case-studies-hub">
        <div className="container">
          <header className="case-studies-hub__header">
            <h1 className="case-studies-hub__title">Case studies</h1>
            <p className="case-studies-hub__intro">
              Deeper looks at selected projects: goals, constraints, implementation, and what
              shipped.
            </p>
          </header>

          <div className="case-studies-hub__grid">
            {studies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="case-studies-hub__card"
              >
                <div className="case-studies-hub__card-image">
                  <Image
                    src={study.screenshot}
                    alt={study.screenshotAlt}
                    fill
                    className="case-studies-hub__card-img"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="case-studies-hub__card-body">
                  <span className="case-studies-hub__card-tag">{study.tag}</span>
                  <h2 className="case-studies-hub__card-title">{study.title}</h2>
                  <p className="case-studies-hub__card-summary">{study.heroSummary}</p>
                  <span className="case-studies-hub__card-cta">Read case study</span>
                </div>
              </Link>
            ))}
          </div>

          <Link href="/#projects" className="case-studies-hub__back">
            Back to projects
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
