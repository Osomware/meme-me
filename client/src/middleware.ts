import { isEmpty } from 'lodash'
import { NextRequest, NextResponse } from 'next/server'

export const middleware = (request: NextRequest): NextResponse<unknown> | undefined => {
  const path = request.nextUrl.pathname
  const accessToken = request.cookies.get('accessToken')?.value ?? ''
  const frontendURL = process.env.FRONTEND_URL as string

  const isPublicPath = path === '/sign-in' || path === '/sign-up'
  const isProtectedPath =
    path === '/' ||
    path === '/messages' ||
    path.includes('/@') ||
    path === '/saved-post' ||
    path === '/settings'

  // Check if the path contains a username followed by a valid identifier (e.g., /username, /username/123, etc.)
  const isValidUsernamePath = /^\/@[\w-]+(\/\d+)?$/.test(path)

  if (isEmpty(accessToken) && isProtectedPath) {
    return NextResponse.redirect(frontendURL + '/sign-in')
  }

  if (!isEmpty(accessToken) && isPublicPath) {
    return NextResponse.redirect(frontendURL)
  }

  // If the path is not valid and does not match the valid username pattern, return a 404 response.
  if (!isPublicPath && !isProtectedPath && !isValidUsernamePath) {
    return new NextResponse('Page Not Found', { status: 404 })
  }
}

export const config = {
  runtime: 'experimental-edge',
  unstable_allowDynamic: [
    '**/node_modules/lodash/_root.js' // use a glob to allow anything in the function-bind 3rd party module
  ],
  matcher: [
    '/',
    '/messages/:id*',
    '/:username',
    '/:username/:id',
    '/saved-post',
    '/settings',
    '/sign-in',
    '/sign-up'
  ]
}
