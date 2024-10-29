import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Message } from '@/types/chat'
import { getChatId } from './utils'

type ChatStore = {
  messages: Record<string, Message[]>  // chatId 格式为 "userId:provider"
  addMessage: (userId: string, provider: string, message: Message) => void
  setMessages: (userId: string, provider: string, messages: Message[]) => void
  getMessages: (userId: string, provider: string) => Message[]
}

export const useChatStore = create<ChatStore>()(
  persist(
    (set, get) => ({
      messages: {},
      addMessage: (userId, provider, message) => {
        const chatId = getChatId(userId, provider)
        set((state) => ({
          messages: {
            ...state.messages,
            [chatId]: [...(state.messages[chatId] || []), message],
          },
        }))
      },
      setMessages: (userId, provider, messages) => {
        const chatId = getChatId(userId, provider)
        set((state) => ({
          messages: {
            ...state.messages,
            [chatId]: messages,
          },
        }))
      },
      getMessages: (userId, provider) => {
        const chatId = getChatId(userId, provider)
        return get().messages[chatId] || []
      },
    }),
    {
      name: 'chat-store',
    }
  )
)