import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Settings, Copy } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Chatbot } from '@/types/chatbot';

interface ChatbotCardProps {
  chatbot: Chatbot;
  teamId: string;
  onClone: (id: string) => void;
}

export function ChatbotCard({ chatbot, teamId, onClone }: ChatbotCardProps) {
  return (
    <Card className="flex flex-col">
      <CardContent className="pt-4">
        <div className="relative w-full h-40 mb-4">
          <Image
            src={chatbot.styles?.profile_picture_file || '/default-bot-image.png'}
            alt={chatbot.name}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <h3 className="text-lg font-semibold">{chatbot.name}</h3>
        <p className="text-sm text-gray-500">{chatbot.styles?.display_name || ''}</p>
      </CardContent>
      
      <CardFooter className="flex justify-between mt-auto">
        <Link href={`/dashboard/${teamId}/chatbot/${chatbot.id}`}>
          <Button variant="outline" size="sm">
            <Play className="w-4 h-4 mr-2" />
            Play
          </Button>
        </Link>
        
        <Button variant="outline" size="sm" onClick={() => onClone(chatbot.id)}>
          <Copy className="w-4 h-4 mr-2" />
          Clone
        </Button>
        
        <Link href={`/dashboard/${teamId}/chatbot/${chatbot.id}/settings/general`}>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
} 