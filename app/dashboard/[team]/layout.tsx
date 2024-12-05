'use client'

import { redirect, usePathname } from 'next/navigation'

import { use } from 'react'
import { TeamNav } from '@/components/nav-team'

const DashboardLayout = ({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ team: string }>
}) => {
  const pathname = usePathname()
  const team = use(params).team
  console.log({ team })
  const isJoinPage = pathname.includes('/teams/join')
  const isChatbotPage = pathname.includes('/chatbot/')

  // Redirect to join page only if it's not already the join page
  if (!team && !isJoinPage) {
    redirect('/dashboard/teams/join')
  }

  // If no team and on join page, render children (the join page)
  if (!team && isJoinPage) {
    return <>{children}</>
  }

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Top Navigation Tabs */}
      {!isChatbotPage && (
        <div className="h-10 flex items-center justify-center border-b">
          <TeamNav params={params} />
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 container mx-auto px-4 py-6 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
