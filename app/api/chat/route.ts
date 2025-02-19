import {
  type Message,
  createDataStreamResponse,
  smoothStream,
  // streamObject,
  streamText
} from 'ai'
// import { z } from 'zod'

import { auth } from '@/auth'
import { models } from '@/lib/models'
import { systemPrompt } from '@/lib/ai/prompts'
import {
  deleteChatById,
  getChatById,
  // getDocumentById,
  saveChat,
  // saveDocument,
  saveMessages
  // saveSuggestions
} from '@/lib/db-queries'
// import type { Suggestion } from 'prisma/prisma-client'
import {
  getMostRecentUserMessage,
  sanitizeResponseMessages,
  generateUUID
} from '@/lib/utils'

import { generateTitleFromUserMessage } from '../../actions/actions'
import { ErrorCode, handleApiError, HttpError } from '@/lib/errors'
import { registry } from '@/lib/ai/registry'
import { wrapDeepseek } from '@/lib/ai/ollama'
import { getWeather } from '@/lib/ai/tools/get-weather'
import { createDocument } from '@/lib/ai/tools/create-document'
import { updateDocument } from '@/lib/ai/tools/update-document'
import { requestSuggestions } from '@/lib/ai/tools/request-suggestions'

export const maxDuration = 60

type AllowedTools =
  | 'createDocument'
  | 'updateDocument'
  | 'requestSuggestions'
  | 'getWeather'

const blocksTools: AllowedTools[] = [
  'createDocument',
  'updateDocument',
  'requestSuggestions'
]

const weatherTools: AllowedTools[] = ['getWeather']

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const allTools: AllowedTools[] = [...blocksTools, ...weatherTools]

export async function POST(request: Request) {
  try {
    const {
      id,
      messages,
      modelId
    }: { id: string; messages: Array<Message>; modelId: string } =
      await request.json()

    const session = await auth()

    if (!session || !session.user || !session.user.id) {
      // return new Response('Unauthorized', { status: 401 })
      throw new HttpError(401, 'Unauthorized', ErrorCode.UNAUTHORIZED)
    }

    const model = models.find((model) => model.id === modelId)

    if (!model) {
      // return new Response('Model not found', { status: 404 })
      throw new HttpError(404, 'Model not found', ErrorCode.INTERNAL_ERROR)
    }

    // const coreMessages = convertToCoreMessages(messages)
    // const userMessage = getMostRecentUserMessage(coreMessages)
    const userMessage = getMostRecentUserMessage(messages)

    if (!userMessage) {
      // return new Response('No user message found', { status: 400 })
      throw new HttpError(
        400,
        'No user message found',
        ErrorCode.INTERNAL_ERROR
      )
    }

    const chat = await getChatById({ id })

    if (!chat) {
      const title = await generateTitleFromUserMessage({
        message: userMessage,
        modelId: 'qwq-32b-preview', // model.modelApiName,
        provider: 'bailian' // model.provider
      })
      await saveChat({ id, userId: session.user.id, title })
    }

    const userMessageId = crypto.randomUUID()

    await saveMessages({
      messages: [
        {
          ...userMessage,
          id: userMessageId,
          createdAt: new Date(),
          chatId: id,
          content: JSON.parse(JSON.stringify(userMessage.content))
        }
      ]
    })

    return createDataStreamResponse({
      async execute(dataStream) {
        // 写入用户消息ID
        // dataStream.writeData({
        //   type: 'user-message-id',
        //   content: userMessageId
        // });

        const result = streamText({
          model: wrapDeepseek(registry.languageModel(model.id)),
          system: systemPrompt({ selectedChatModel: model.id }),
          messages,
          maxSteps: 5,
          experimental_generateMessageId: generateUUID,
          experimental_activeTools: model.id.includes('deepseek-r')
            ? []
            : [
                'getWeather',
                'createDocument',
                'updateDocument',
                'requestSuggestions'
              ],
          experimental_transform: smoothStream({ chunking: 'word' }),
          tools: {
            getWeather,
            createDocument: createDocument({ session, dataStream }),
            updateDocument: updateDocument({ session, dataStream }),
            requestSuggestions: requestSuggestions({
              session,
              dataStream
            })
          },
          onFinish: async ({ response, reasoning }) => {
            console.log({ response: JSON.stringify(response), reasoning })
            if (session.user?.id) {
              try {
                const sanitizedResponseMessages = sanitizeResponseMessages({
                  messages: response.messages,
                  reasoning
                })

                await saveMessages({
                  messages: sanitizedResponseMessages.map((message) => {
                    return {
                      id: message.id,
                      chatId: id,
                      role: message.role,
                      content: JSON.parse(JSON.stringify(message.content)),
                      createdAt: new Date()
                    }
                  })
                })
              } catch (error) {
                console.error(`Failed to save chat. Error: ${error}`)
              }
            }
          },
          experimental_telemetry: {
            isEnabled: true,
            functionId: 'stream-text'
          }
        })
        result.mergeIntoDataStream(dataStream, {
          sendReasoning: true
        })
      },
      onError: (error: unknown) =>
        `An error occurred: ${
          error instanceof Error ? error.message : String(error)
        }`
    })
  } catch (error) {
    return handleApiError(error)
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    // return new Response('Not Found', { status: 404 })
    throw new HttpError(404, 'Not Found', ErrorCode.INTERNAL_ERROR)
  }

  const session = await auth()

  if (!session || !session.user) {
    // return new Response('Unauthorized', { status: 401 })
    throw new HttpError(401, 'Unauthorized', ErrorCode.UNAUTHORIZED)
  }

  try {
    const chat = await getChatById({ id })

    if (chat?.userId !== session.user.id) {
      // return new Response('Unauthorized', { status: 401 })
      throw new HttpError(401, 'Unauthorized', ErrorCode.UNAUTHORIZED)
    }

    await deleteChatById({ id })

    return new Response('Chat deleted', { status: 200 })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // return new Response('An error occurred while processing your request', {
    //   status: 500
    // })
    throw new HttpError(
      500,
      'An error occurred while processing your request',
      ErrorCode.INTERNAL_ERROR
    )
  }
}
