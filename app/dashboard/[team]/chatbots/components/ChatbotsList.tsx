import { ChatbotCard } from './ChatbotCard';
import { Chatbot } from '@/types/chatbot';

export default function ChatbotsList({ chatbots, teamId }: { chatbots: Chatbot[], teamId: string }) {
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        {chatbots.map((chatbot) => (
          <ChatbotCard key={chatbot.id} chatbot={chatbot} teamId={teamId} />
        ))}
      </div>
    )
  }