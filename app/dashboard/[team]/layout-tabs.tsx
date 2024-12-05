'use client'

import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { use } from 'react'

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

  // Redirect to join page only if it's not already the join page
  if (!team && !isJoinPage) {
    redirect('/dashboard/teams/join')
  }

  // If no team and on join page, render children (the join page)
  if (!team && isJoinPage) {
    return <>{children}</>
  }

  // Define the tabs for the dashboard
  const dashboardTabs = [
    {
      label: 'Chatbots',
      href: `/dashboard/${team}/chatbots`,
      active:
        pathname.includes(`/dashboard/${team}/chatbots`) ||
        pathname.includes(`/dashboard/${team}/chatbot/`)
    },
    {
      label: 'Usage',
      href: `/dashboard/${team}/usage`,
      active: pathname.includes(`/dashboard/${team}/usage`)
    },
    {
      label: 'Settings',
      href: `/dashboard/${team}/settings/general`,
      active: pathname.includes(`/dashboard/${team}/settings`)
    }
  ]

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation Tabs */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-2">
          <Tabs
            defaultValue="chatbots"
            value={dashboardTabs.find((tab) => tab.active)?.label.toLowerCase()}
          >
            <TabsList className="grid w-full grid-cols-3">
              {dashboardTabs.map((tab) => (
                <Link key={tab.href} href={tab.href} className="w-full">
                  <TabsTrigger
                    value={tab.label.toLowerCase()}
                    className={cn(
                      'w-full',
                      tab.active && 'bg-accent text-accent-foreground'
                    )}
                  >
                    {tab.label}
                  </TabsTrigger>
                </Link>
              ))}
            </TabsList>
          </Tabs>
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
