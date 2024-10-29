'use client'

import { AnthropicChat } from '@/components/chat/anthropic-chat'
import { OpenAIChat } from '@/components/chat/openai-chat'
import { Header } from '@/components/header'
import { Message } from '@/types/chat'

const DEMO_USER_ID = 'user1'

interface ClientHomeProps {
  initialMessages: {
    anthropic: Message[]
    openai: Message[]
  }
}

export function ClientHome({ initialMessages }: ClientHomeProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto p-4 flex-1">
        <div className="grid grid-cols-2 gap-4 h-[calc(100vh-8rem)]">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Anthropic Chat</h2>
            <div className="h-[calc(100vh-12rem)]">
              <AnthropicChat
                userId={DEMO_USER_ID}
                initialMessages={initialMessages.anthropic}
              />
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">OpenAI Chat</h2>
            <div className="h-[calc(100vh-12rem)]">
              <OpenAIChat
                userId={DEMO_USER_ID}
                initialMessages={initialMessages.openai}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 