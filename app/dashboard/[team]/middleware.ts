// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//   const team = request.nextUrl.pathname.split('/')[2]

//   // 验证team参数
//   if (!team || team === 'undefined') {
//     return NextResponse.redirect(new URL('/dashboard/teams/join', request.url))
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: '/dashboard/:team*'
// }

export { auth as middleware } from '@/auth'
// Or like this if you need to do something here.
// export default auth((req) => {
//   console.log(req.auth) //  { session: { user: { ... } } }
// })

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: [
    '/dashboard/:team*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}
