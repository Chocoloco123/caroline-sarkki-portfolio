import type { Metadata, Viewport } from 'next'
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
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <div className="app">
          {children}
        </div>
      </body>
    </html>
  )
}