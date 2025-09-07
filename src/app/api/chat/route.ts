import { NextRequest, NextResponse } from 'next/server'

// Function to convert plain text email addresses to clickable mailto links
function convertEmailsToLinks(text: string): string {
  // Simple regex to find email addresses that are not already in HTML links
  const emailRegex = /\b([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,})\b/g
  
  return text.replace(emailRegex, (match, email) => {
    // Check if this email is already wrapped in an <a> tag
    const beforeMatch = text.substring(0, text.indexOf(match))
    const afterMatch = text.substring(text.indexOf(match) + match.length)
    
    // If there's an opening <a> tag before and closing </a> after, don't convert
    if (beforeMatch.includes('<a ') && afterMatch.includes('</a>')) {
      return match
    }
    
    return `<a href="mailto:${email}" style="color: #059669; text-decoration: underline; font-weight: 500;">${email}</a>`
  })
}

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json()

    if (!query) {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      )
    }

    // Smart backend selection: localhost for development, Railway for production
    const apiUrl = process.env.CHAT_API_URL || 
      (process.env.NODE_ENV === 'development' 
        ? 'http://localhost:8000' 
        : 'https://caroline-sarkki-portfolio-be-production.up.railway.app')
    
    // Log which backend we're using (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.log(`🔗 Chat API using backend: ${apiUrl}`)
    }
    
    const response = await fetch(`${apiUrl}/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()
    
    // Convert plain text email addresses to clickable links
    if (data.response) {
      data.response = convertEmailsToLinks(data.response)
    }
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    )
  }
}
