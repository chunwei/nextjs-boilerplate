import { Chat } from '@/components/chat'

export default function ChatPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Omni Chat</h1>
        <ul className="list-inside list-decimal text-sm text-center sm:text-left">
          <li className="mb-2">
            A omni chatbot client using LLMs api from OpenAi,Anthropic ...
          </li>
        </ul>
        <Chat
          useStream={true}
          initialMessages={[
            {
              id: '1',
              role: 'assistant',
              content: 'Hello! How can I help you today?',
              timestamp: Date.now()
            }
          ]}
        />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  )
}
