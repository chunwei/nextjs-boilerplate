import { Team } from '@/auth'
import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      teams: Team[]
      email?: string | null
      name?: string | null
      image?: string | null
    }
  }

  interface User {
    id: string
    teams?: Team[]
    defaultTeam?: string
  }
} 