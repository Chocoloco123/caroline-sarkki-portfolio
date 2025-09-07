import { NextRequest, NextResponse } from 'next/server'

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
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    )
  }
}
