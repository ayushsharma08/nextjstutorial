import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    //public path/url for which we are worried that user can access even after the login 
    const path = request.nextUrl.pathname

    const isPublicPath = path === '/login' || path === '/signup'

    const token = request.cookies.get('user')?.value || ''
    //if have already the token and tried to access public path then redirect to the /
    if (isPublicPath && token) {

        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if (!isPublicPath && !token) {

        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/profile',
        '/login',
        '/signup'
    ]
}