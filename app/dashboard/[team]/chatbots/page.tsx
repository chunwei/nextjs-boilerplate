// 'use client';

import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import ChatbotsList from './components/ChatbotsList';
import { getChatbots } from '@/app/actions/chatbots';

interface ChatbotsPageProps {
  params: {
    team: string;
  }
}


export default async function ChatbotsPage({ params }: ChatbotsPageProps) {
  const chatbots = await getChatbots(params.team);
  
  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">聊天机器人</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          新建机器人
        </Button>
      </div>
      
      <Suspense fallback={<div>加载中...</div>}>
        <ChatbotsList chatbots={chatbots} teamId={params.team} />
      </Suspense>
    </div>
  );
} 