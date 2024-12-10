'use client'

import { ChatbotNav } from '@/components/nav-chatbot'

export default function ChatbotLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ botid: string; team: string }>
}) {
  return (
    <div className="flex flex-col h-full">
      {/* Navigation */}
      <div className="h-10 flex items-center justify-center border-b">
        <ChatbotNav />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}
