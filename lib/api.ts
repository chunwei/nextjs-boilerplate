import {prisma} from './prisma'
import { getChatId } from './utils'

export async function getChatMessages(userId: string) {
  try {
    const [anthropicMessages, openaiMessages] = await Promise.all([
      prisma.message.findMany({
        where: {
          chatId: getChatId(userId, 'anthropic')
        },
        orderBy: {
          createdAt: 'asc'
        }
      }),
      prisma.message.findMany({
        where: {
          chatId: getChatId(userId, 'openai')
        },
        orderBy: {
          createdAt: 'asc'
        }
      })
    ])

    return {
      anthropic: anthropicMessages,
      openai: openaiMessages
    }
  } catch (error) {
    console.error('Failed to fetch messages:', error)
    return {
      anthropic: [],
      openai: []
    }
  }
} 