// 'use client';

import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react'
import ChatbotsList from './components/ChatbotsList'
import { getChatbots } from '@/app/actions/chatbots'
import Link from 'next/link'

interface ChatbotsPageProps {
  params: {
    team: string
  }
}

export default async function ChatbotsPage({ params }: ChatbotsPageProps) {
  const chatbots = await getChatbots(params.team)

  if (!chatbots?.length) {
    return (
      <div className="h-[50vh] flex flex-col items-center justify-center space-y-4">
        <Link href={`/dashboard/${params.team}/create-new-chatbot`}>
          <Button size="lg">
            <Plus className="w-4 h-4 mr-2" />
            创建第一个聊天机器人
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Chatbots</h1>
        <Link href={`/dashboard/${params.team}/create-new-chatbot`}>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create New Chatbot
          </Button>
        </Link>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <ChatbotsList chatbots={chatbots} teamId={params.team} />
      </Suspense>
    </div>
  )
} 