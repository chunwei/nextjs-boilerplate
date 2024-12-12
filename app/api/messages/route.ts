import {prisma} from '@/lib/prisma'
import { getChatId } from '@/lib/utils'
import { handleApiError, createErrorResponse } from '@/lib/errors'
import { safeDbOperation } from '@/lib/db-utils'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return createErrorResponse(400, 'userId is required')
    }

    const messages = await safeDbOperation(async () => {
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
    }, 'Failed to fetch messages')

    if (messages instanceof Response) {
      return messages
    }

    return Response.json(messages)
  } catch (error) {
    return handleApiError(error)
  }
}
