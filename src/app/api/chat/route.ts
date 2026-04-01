import { NextRequest, NextResponse } from 'next/server'

/** Link text for Caroline’s contact URLs — full URL stays in href + title. */
const CONTACT_URL_LABELS: ReadonlyArray<{ test: (href: string) => boolean; label: string }> = [
  {
    test: (h) =>
      /^https:\/\/(www\.)?linkedin\.com\/in\/caroline-sarkki-2a5517126\/?$/i.test(
        stripHash(h)
      ),
    label: 'View Profile',
  },
  {
    test: (h) =>
      /^https:\/\/caroline-sarkki-portfolio\.vercel\.app\/?$/i.test(stripHash(h)),
    label: 'View Site',
  },
  {
    test: (h) => /^https:\/\/github\.com\/Chocoloco123\/?$/i.test(stripHash(h)),
    label: 'View Code',
  },
  {
    test: (h) =>
      /^https:\/\/chocoloco123\.github\.io(\/index\.html)?\/?$/i.test(stripHash(h)),
    label: 'View Site',
  },
]

function stripHash(href: string): string {
  const i = href.indexOf('#')
  return i === -1 ? href : href.slice(0, i)
}

function contactUrlLabel(href: string): string | null {
  const h = href.trim()
  for (const { test, label } of CONTACT_URL_LABELS) {
    if (test(h)) return label
  }
  return null
}

function attrTitle(href: string): string {
  return ` title="${href.replace(/"/g, '&quot;')}"`
}

function displayTextForBareUrl(url: string): string {
  const known = contactUrlLabel(url)
  if (known) return known
  try {
    const u = new URL(url)
    return u.hostname.replace(/^www\./i, '') || url
  } catch {
    return url
  }
}

/** Replace `<code>https://…</code>` for known contact URLs with a short labeled link. */
function unwrapCodeWrappedContactUrls(text: string): string {
  return text.replace(/<code>(https?:\/\/[^<]+)<\/code>/gi, (full, rawUrl) => {
    const url = String(rawUrl).trim()
    const label = contactUrlLabel(url)
    if (!label) return full
    return `<a href="${url}" target="_blank" rel="noopener noreferrer"${attrTitle(url)}>${label}</a>`
  })
}

/** Replace anchor text when it duplicates a known contact URL with a short label. */
function shortenContactAnchorText(text: string): string {
  return text.replace(/<a\s+([^>]+)>([^<]*)<\/a>/gi, (full, openAttrs, inner) => {
    const hrefMatch = /href\s*=\s*"([^"]+)"/i.exec(openAttrs)
    if (!hrefMatch) return full
    const href = hrefMatch[1]
    if (href.startsWith('mailto:')) return full

    const label = contactUrlLabel(href)
    if (!label) return full

    const t = inner.trim()
    const hrefNorm = href.replace(/\/$/, '')
    const tNorm = t.replace(/\/$/, '')
    const looksLikeRawUrl =
      !t || t === href || tNorm === hrefNorm || /^https?:\/\//i.test(t)
    if (!looksLikeRawUrl) return full

    return `<a ${openAttrs.trim()}>${label}</a>`
  })
}

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

    const mailto = `mailto:${email}`
    return `<a href="${mailto}"${attrTitle(`Email ${email}`)}>${email}</a>`
  })
}

// Turn bare http(s):// URLs into clickable links (skips URLs already in href/src attributes)
function convertUrlsToLinks(text: string): string {
  const urlRegex = /\b(https?:\/\/[^\s<>"']+)/gi
  return text.replace(urlRegex, (match, _g1, offset, full) => {
    const at = offset as number
    if (full.slice(at - 6, at) === 'href="' || full.slice(at - 6, at) === "href='") {
      return match
    }
    if (full.slice(at - 5, at) === 'src="' || full.slice(at - 5, at) === "src='") {
      return match
    }

    let url = match
    let trailing = ''
    const tail = /([.,;:!?)]+)$/.exec(url)
    if (tail) {
      const candidate = url.slice(0, -tail[1].length)
      if (/^https?:\/\/.+/i.test(candidate)) {
        url = candidate
        trailing = tail[1]
      }
    }

    const visible = displayTextForBareUrl(url)
    return `<a href="${url}" target="_blank" rel="noopener noreferrer"${attrTitle(url)}>${visible}</a>${trailing}`
  })
}

// Function to convert comma-separated skills into pill format (COMPLETELY DISABLED)
function convertSkillsToPills_DISABLED(text: string): string {
  // All pill conversion disabled - return text as-is
  return text
}

// Function to remove bold formatting from personal interests while keeping it for skills
function processBoldFormatting(text: string): string {
  // Check if this is about personal interests (not skills)
  const isPersonalInterests =
    text.toLowerCase().includes('personal interests') ||
    text.toLowerCase().includes('hobbies') ||
    text.toLowerCase().includes('weekend hikes') ||
    text.toLowerCase().includes('salsa dancing') ||
    text.toLowerCase().includes('golden retriever') ||
    text.toLowerCase().includes('valkyries')

  if (isPersonalInterests) {
    // Remove <strong> tags from list items in personal interests
    return text.replace(/<strong>(.*?)<\/strong>/g, '$1')
  }

  // Keep bold formatting for skills and other sections
  return text
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

    const response = await fetch(`${apiUrl}/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`API responded with status: ${response.status} - ${errorText}`)
    }

    const data = await response.json()

    // Emails → unwrap <code> contact URLs → bare URLs → shorten duplicate anchor text → bold rules
    if (data.response) {
      data.response = convertEmailsToLinks(data.response)
      data.response = unwrapCodeWrappedContactUrls(data.response)
      data.response = convertUrlsToLinks(data.response)
      data.response = shortenContactAnchorText(data.response)
      data.response = processBoldFormatting(data.response)
      // data.response = convertSkillsToPills(data.response) // Disabled for cleaner text display
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    )
  }
}
