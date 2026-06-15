import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Skip middleware for static assets and API routes
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.startsWith('/api') ||
    req.nextUrl.pathname.startsWith('/favicon') ||
    req.nextUrl.pathname.startsWith('/public')
  ) {
    return res
  }

  try {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return req.cookies.getAll()
          },
          setAll(cookiesToSet: Array<{ name: string; value: string; options: any }>) {
            cookiesToSet.forEach(({ name, value, options }) => {
              res.cookies.set(name, value, options)
            })
          },
        },
      }
    )

    const { data: { session } } = await supabase.auth.getSession()

    const publicPaths = ['/login', '/signup', '/auth/callback']
    const isPublicPath = publicPaths.some(path => 
      req.nextUrl.pathname === path || req.nextUrl.pathname.startsWith(path)
    )

    const isProtectedPath = !isPublicPath // Everything else is protected

    // Redirect logic
    if (isProtectedPath && !session) {
      const redirectUrl = new URL('/login', req.url)
      redirectUrl.searchParams.set('next', req.nextUrl.pathname)
      return NextResponse.redirect(redirectUrl)
    }

    if (session && (req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/signup')) {
      return NextResponse.redirect(new URL('/', req.url))
    }

    return res
  } catch (error) {
    console.error('Middleware error:', error)
    return res
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}