import { NextRequest } from 'next/server'
import { Anthropic } from '@anthropic-ai/sdk'
import { prisma } from '@/lib/prisma' // 假设你有一个prisma客户端实例
import { getChatId } from '@/lib/utils'
import { handleApiError, createErrorResponse } from '@/lib/errors'
import { MockAnthropic } from '@/lib/mock/anthropic'

const anthropic = process.env.MOCK_API
  ? new MockAnthropic()
  : new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY!
    })

const PROVIDER = 'anthropic'

export async function POST(req: NextRequest) {
  try {
    const { messages, userId } = await req.json()

    if (!userId || !messages?.length) {
      return createErrorResponse(400, 'Missing required fields')
    }

    const encoder = new TextEncoder()
    let assistantResponse = ''

    try {
      const stream = await anthropic.messages.create({
        model: 'claude-3-opus-20240229',
        max_tokens: 1024,
        messages: messages.map(
          ({ role, content }: { role: string; content: string }) => ({
            role: role === 'user' ? 'user' : 'assistant',
            content
          })
        ),
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

      const customReadable = new ReadableStream({
        async start(controller) {
          try {
            for await (const part of stream) {
              const text =
                part.type === 'content_block_delta' &&
                part.delta?.type === 'text_delta'
                  ? part.delta?.text ?? ''
                  : ''
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

      return new Response(customReadable)
    } catch (error) {
      return createErrorResponse(503, 'Anthropic service error', {
        cause: error
      })
    }
  } catch (error) {
    return handleApiError(error)
  }
}
