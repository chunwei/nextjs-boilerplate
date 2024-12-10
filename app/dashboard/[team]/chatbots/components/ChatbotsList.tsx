import { ChatbotCard } from './ChatbotCard';
import { Chatbot } from '@/types/chatbot';

export default function ChatbotsList({ chatbots, teamId }: { chatbots: Chatbot[], teamId: string }) {
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chatbots.map((chatbot) => (
          <ChatbotCard
            key={chatbot.id}
            chatbot={chatbot}
            teamId={teamId}
            onClone={async (id) => {
              // 实现克隆逻辑
            }}
          />
        ))}
      </div>
    );
  }