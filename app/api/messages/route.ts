import {prisma} from '@/lib/prisma'
import { getChatId } from '@/lib/utils'
import { HttpError, handleApiError } from '@/lib/errors'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      throw new HttpError(400, 'userId is required')
    }

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

      return Response.json({
        anthropic: anthropicMessages,
        openai: openaiMessages
      })

    } catch (error) {
      throw new HttpError(
        503, 
        'Database service unavailable',
        { cause: error }
      )
    }

  } catch (error) {
    return handleApiError(error)
  }
}
