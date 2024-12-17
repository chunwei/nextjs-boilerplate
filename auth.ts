import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from '@/lib/db'
import { SignInSchema } from '@/lib/zod'
import bcrypt from 'bcrypt'
import { getUserFromDb } from '@/lib/auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import Resend from 'next-auth/providers/resend'
import Credentials from 'next-auth/providers/credentials'
import type { Prisma } from '@prisma/client'
// import { ZodError } from 'zod'

export type Team = {
  id: string
  name: string
  url: string
  role: string
}

// 使用 Prisma 生成的类型
type TeamMemberWithTeam = Prisma.TeamMemberGetPayload<{
  include: { team: true }
}>

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      teams: Team[]
      email?: string | null
      name?: string | null
      image?: string | null
    }
    sessionToken?: string
  }

  interface User {
    sessionToken?: string
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  debug: true,
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          // console.log('Authorizing credentials:', credentials)
          const { email, password } = await SignInSchema.parseAsync(credentials)
          // console.log('Looking up user with email:', email)
          const user = await getUserFromDb(email)
          if (user && user.password) {
            const isPasswordValid = await bcrypt.compare(
              password as string,
              user.password
            )
            if (isPasswordValid) {
              return user
            }
          }
          return null
        } catch (error) {
          console.error('[AUTH_ERROR] Detailed error:', error)
          return null
        }
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!
    }),
    Resend
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // console.log('jwt Callback:', { token, user, account })
      if (account?.type === 'credentials' && user) {
        token.userId = user.id
      } else if (token.sub) {
        token.userId = token.sub
      }
      return token
    },
    async session({ session, token }) {
      // console.log('session Callback:', { session, token })
      if (token) {
        session.user.id = (token.userId || token.sub) as string
      }

      const teams = await db.teamMember.findMany({
        where: { userId: session.user.id },
        include: { team: true }
      })

      return {
        ...session,
        user: {
          ...session.user,
          teams: teams.map((tm: TeamMemberWithTeam) => ({
            id: tm.team.id,
            name: tm.team.name,
            url: tm.team.url,
            role: tm.role
          }))
        }
      }
    }
  },
  // events: {
  //   async signIn({ user }) {
  //     // console.log('SignIn Event:', user)
  //     // const session = await db.session.findFirst({ where: { userId: user.id } })
  //     // console.log('Session Found:', session)
  //   },
  //   async session({ session, token }) {
  //     // console.log('Session Event:', { session, token })
  //   }
  // },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error'
  }
})
