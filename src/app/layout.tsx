import type { Metadata, Viewport } from 'next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'
import './globals.scss'

export const metadata: Metadata = {
  metadataBase: new URL('https://carolinesarkki.dev'),
  title: {
    default: 'Caroline Sarkki - Full Stack Software Engineer | Portfolio',
    template: '%s | Caroline Sarkki'
  },
  description: 'Full-stack software engineer with 3+ years experience building scalable web applications, AI-powered tools, and mentoring teams. Specializing in React, JavaScript, OpenAI API integration, and full-stack development in San Francisco Bay Area.',
  keywords: [
    'Caroline Sarkki',
    'full stack developer',
    'software engineer',
    'React developer',
    'JavaScript developer',
    'TypeScript developer',
    'AI integration',
    'OpenAI API',
    'San Francisco developer',
    'Bay Area developer',
    'KQED developer',
    'web development',
    'frontend developer',
    'backend developer',
    'portfolio',
    'software engineering',
    'mentoring',
    'team lead'
  ],
  authors: [{ name: 'Caroline Sarkki', url: 'https://carolinesarkki.dev' }],
  creator: 'Caroline Sarkki',
  publisher: 'Caroline Sarkki',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://carolinesarkki.dev',
    siteName: 'Caroline Sarkki Portfolio',
    title: 'Caroline Sarkki - Full Stack Software Engineer',
    description: 'Full-stack software engineer with 3+ years experience building scalable web applications, AI-powered tools, and mentoring teams. Specializing in React, JavaScript, OpenAI API integration.',
    images: [
      {
        url: '/caroline-headshot.jpg',
        width: 1200,
        height: 630,
        alt: 'Caroline Sarkki - Full Stack Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caroline Sarkki - Full Stack Software Engineer',
    description: 'Full-stack software engineer with 3+ years experience building scalable web applications, AI-powered tools, and mentoring teams.',
    images: ['/caroline-headshot.jpg'],
    creator: '@carolinesarkki',
  },
  alternates: {
    canonical: 'https://carolinesarkki.dev',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Critical resource preloading for instant SSR rendering */}
        <link rel="preload" as="image" href="/goldenGateBridge.jpg" />
        <link rel="preload" as="image" href="/caroline-headshot.jpg" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Resource hints for better performance */}
        <link rel="prefetch" href="/projects/professional/voter-guide.png" />
        <link rel="prefetch" href="/projects/professional/navigation-redesign.png" />
        <link rel="prefetch" href="/projects/professional/micro-websites.png" />
        <link rel="prefetch" href="/projects/professional/user-accounts.png" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Caroline Sarkki",
              "jobTitle": "Full Stack Software Engineer",
              "description": "Full-stack software engineer with 3+ years experience building scalable web applications, AI-powered tools, and mentoring teams.",
              "url": "https://carolinesarkki.dev",
              "image": "https://carolinesarkki.dev/caroline-headshot.jpg",
              "sameAs": [
                "https://www.linkedin.com/in/caroline-sarkki-2a5517126/",
                "https://github.com/Chocoloco123"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "KQED"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Francisco Bay Area",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "knowsAbout": [
                "React",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "AI Integration",
                "OpenAI API",
                "Web Development",
                "Software Engineering",
                "Team Leadership",
                "Mentoring"
              ],
              "alumniOf": "Codecademy",
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Software Engineer",
                "occupationLocation": {
                  "@type": "City",
                  "name": "San Francisco Bay Area"
                }
              }
            })
          }}
        />
        
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning={true}>
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        
        <div className="app">
          {children}
        </div>
        <SpeedInsights />
      </body>
    </html>
  )
}