export type Message = {
  id: string
  role: string // 'user' | 'assistant';
  content: string
  createdAt: Date
  chatId: string
}

export type ChatSession = {
  userId: string
  provider: string // 'anthropic' | 'openai';
}

export type ChatProps = {
  userId: string // 添加用户ID
  initialMessages?: Message[]
  onSend?: (message: Message) => void
}
