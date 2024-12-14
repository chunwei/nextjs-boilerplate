'use client'

import { DashboardProvider } from '@/contexts/dashboard-context'
import { UserNav } from './components/user-nav'
import TeamSwitcher from './components/team-switcher'
import ChatbotSwitcher from './components/chatbot-switcher'
import { useParams, usePathname, redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const params = useParams()
  const [initialTeam, setInitialTeam] = useState<string>('')
  const [initialBotId, setInitialBotId] = useState<string | undefined>()

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      const returnUrl = encodeURIComponent(pathname)
      redirect(`/auth/signin?redirectedFrom=${returnUrl}`)
    }
  })

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      if (pathname === '/dashboard/teams/join') {
        setInitialTeam('')
        return
      }

      const teamFromParams = typeof params.team === 'string' ? params.team : ''

      if (pathname === '/dashboard' && session.user.teams?.length > 0) {
        redirect(`/dashboard/${session.user.teams[0].url}/chatbots`)
        return
      }

      if (
        teamFromParams &&
        session.user.teams?.some((team) => team.url === teamFromParams)
      ) {
        setInitialTeam(teamFromParams)
        setInitialBotId(
          typeof params.botId === 'string' ? params.botId : undefined
        )
        return
      }

      if (session.user.teams?.length > 0) {
        setInitialTeam(session.user.teams[0].url)
        return
      }

      redirect('/dashboard/teams/join')
    }
  }, [session, status, params, pathname])

  if (
    status === 'loading' ||
    (!initialTeam && pathname !== '/dashboard/teams/join')
  ) {
    return <div>Loading...</div>
  }

  if (pathname === '/dashboard/teams/join') {
    return (
      <DashboardProvider initialTeam="" initialBotId={undefined}>
        {children}
      </DashboardProvider>
    )
  }

  if (!initialTeam) {
    return <div>Loading...</div>
  }

  const shouldShowChatbotSwitcher = pathname?.startsWith(
    `/dashboard/${params.team}/chatbot/`
  )

  return (
    <DashboardProvider initialTeam={initialTeam} initialBotId={initialBotId}>
      <div className="flex flex-col h-screen">
        <div className="border-b">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center space-x-4">
              <TeamSwitcher />
              {shouldShowChatbotSwitcher && <ChatbotSwitcher />}
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </DashboardProvider>
  )
}
