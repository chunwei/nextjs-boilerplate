'use server'

import { type CoreUserMessage, generateText } from 'ai'
import { cookies } from 'next/headers'

// import { customModel } from '@/lib/ai'
import {
  deleteMessagesByChatIdAfterTimestamp,
  getMessageById,
  updateChatVisiblityById
} from '@/lib/db-queries'
import { registry } from '@/lib/ai/registry'

type VisibilityType = 'private' | 'public'

export async function saveModelId(model: string) {
  const cookieStore = await cookies()
  cookieStore.set('model-id', model)
}

export async function generateTitleFromUserMessage({
  message,
  modelId,
  provider
}: {
  message: CoreUserMessage
  modelId: string
  provider: string
}) {
  const { text: title } = await generateText({
    model: registry.languageModel(`${provider}:${modelId}`),
    system: `\n
    - you will generate a short title based on the first message a user begins a conversation with
    - ensure it is not more than 80 characters long
    - the title should be a summary of the user's message
    - do not use quotes or colons`,
    prompt: JSON.stringify(message)
  })

  return title
}

export async function deleteTrailingMessages({ id }: { id: string }) {
  const message = await getMessageById({ id })
  if (!message) return

  await deleteMessagesByChatIdAfterTimestamp({
    chatId: message.chatId,
    timestamp: message.createdAt
  })
}

export async function updateChatVisibility({
  chatId,
  visibility
}: {
  chatId: string
  visibility: VisibilityType
}) {
  await updateChatVisiblityById({ chatId, visibility })
}
