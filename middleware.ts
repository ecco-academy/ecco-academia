import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/courses/:courseId/payment'])
export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect()
})
export const config = {
  matcher: ["/courses/:path*", "/home/:path*"],
}