import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CaseStudyView from '@/components/case-studies/CaseStudyView'
import { caseStudies, getCaseStudyBySlug } from '@/content/case-studies'

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) {
    return { title: 'Case study' }
  }
  return {
    title: `Case study: ${study.title}`,
    description: study.metaDescription,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <CaseStudyView study={study} />
      <Footer />
    </>
  )
}
