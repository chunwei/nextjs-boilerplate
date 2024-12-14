'use client'

import { usePathname } from 'next/navigation'
import { TeamNav } from '@/components/nav-team'

const DashboardLayout = ({
  children,

}: {
  children: React.ReactNode

}) => {
  const pathname = usePathname()
  const isChatbotPage = pathname.includes('/chatbot/')

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Top Navigation Tabs */}
      {!isChatbotPage && (
        <div className="h-10 flex items-center justify-center border-b">
          <TeamNav />
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 container mx-auto px-4 py-4 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
