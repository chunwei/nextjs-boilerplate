'use client'

import { UserNav } from './components/user-nav'
import TeamSwitcher from './components/team-switcher'
import { useParams } from 'next/navigation'
import ChatbotSwitcher from './components/chatbot-switcher'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { team } = useParams()

  // const isJoinPage = pathname.includes('/teams/join')
  // const isChatbotPage = pathname.includes('/chatbot/')

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation Tabs */}
      <div className="border-b">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <TeamSwitcher />
            <ChatbotSwitcher />
          </div>
          {/* <MainNav className="mx-6" /> */}
          <div className="ml-auto flex items-center space-x-4">
            {/* <Search /> */}
            <UserNav team={team as string} />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 container mx-auto px-4 py-6 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
