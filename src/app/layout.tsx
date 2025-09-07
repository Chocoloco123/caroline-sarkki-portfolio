import type { Metadata, Viewport } from 'next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Caroline Sarkki - Portfolio',
  description: 'Full-stack developer portfolio showcasing projects and skills',
  keywords: 'portfolio, developer, full-stack, web development, React, TypeScript',
  authors: [{ name: 'Caroline Sarkki' }],
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
        {/* Removed Font Awesome CDN for better performance */}
      </head>
      <body suppressHydrationWarning={true}>
        <div className="app">
          {children}
        </div>
        <SpeedInsights />
      </body>
    </html>
  )
}