import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquareQuote, Settings2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Chatbot } from '@/types/chatbot'

interface ChatbotCardProps {
  chatbot: Chatbot
  teamId: string
  onClone?: (id: string) => void
}

export function ChatbotCard({ chatbot, teamId }: ChatbotCardProps) {
  return (
    <Card className="flex flex-col">
      <CardContent className="pt-4 p-0">
        <div className="relative w-full h-40 mb-4">
          <Image
            src={
              chatbot.styles?.profile_picture_file || '/default-bot-image.png'
            }
            alt={chatbot.name}
            fill
            className="object-cover rounded-t-md"
          />
        </div>
        <h3 className="text-lg font-semibold px-4">{chatbot.name}</h3>
        <p className="text-sm text-gray-500 px-4 pb-4">
          {chatbot.styles?.display_name || ''}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between mt-auto border-t p-2">
        <Link href={`/dashboard/${teamId}/chatbot/${chatbot.id}`}>
          <Button variant="ghost" size="sm">
            <MessageSquareQuote className="w-4 h-4 mr-1" />
            <span className="hidden md:block text-muted-foreground">Play</span>
          </Button>
        </Link>

        {/* <Button variant="outline" size="sm" onClick={() => onClone(chatbot.id)}>
          <Copy className="w-4 h-4 mr-2" />
          Clone
        </Button> */}

        <Link
          href={`/dashboard/${teamId}/chatbot/${chatbot.id}/settings/general`}
        >
          <Button variant="ghost" size="sm">
            <span className="hidden md:block text-muted-foreground">
              Settings
            </span>
            <Settings2 className="w-4 h-4 mr-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
} 