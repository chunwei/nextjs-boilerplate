import OpenAI from 'openai'
import { prisma } from '@/lib/prisma' // 假设你有一个prisma客户端实例
import { getChatId } from '@/lib/utils'
import { HttpError, handleApiError } from '@/lib/errors'
import { MockOpenAI } from '@/lib/mock/openai'

const openai = process.env.MOCK_API ? new MockOpenAI() : new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!
})

const PROVIDER = 'openai'

export async function POST(req: Request) {
  try {
    const { messages, userId } = await req.json()

    if (!userId || !messages?.length) {
      throw new HttpError(400, 'Missing required fields')
    }

    const encoder = new TextEncoder()
    let assistantResponse = ''

    try {
      const stream = await openai.chat.completions.create({
        model: 'gpt-4-mini',
        messages: messages.map(({ role, content }: any) => ({
          role: role === 'user' ? 'user' : 'assistant',
          content
        })),
        stream: true
      })

      // 保存用户消息
      await prisma.message
        .create({
          data: {
            chatId: getChatId(userId, PROVIDER),
            role: 'user',
            content: messages[messages.length - 1].content
          }
        })
        .catch((error) => {
          console.error('Failed to save user message:', error)
        })

      const readable = new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of stream) {
              const text = chunk.choices[0]?.delta?.content || ''
              assistantResponse += text
              controller.enqueue(encoder.encode(text))
            }

            // 保存助手响应
            await prisma.message
              .create({
                data: {
                  chatId: getChatId(userId, PROVIDER),
                  role: 'assistant',
                  content: assistantResponse
                }
              })
              .catch((error) => {
                console.error('Failed to save assistant message:', error)
              })

            controller.close()
          } catch (error) {
            controller.error(error)
          }
        }
      })

      return new Response(readable, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          Connection: 'keep-alive'
        }
      })
    } catch (error) {
      throw new HttpError(503, 'OpenAI service error', { cause: error })
    }
  } catch (error) {
    return handleApiError(error)
  }
}
