'use server'

import { type Message, generateText } from 'ai'
import { cookies } from 'next/headers'

// import { customModel } from '@/lib/ai'
import {
  deleteMessagesByChatIdAfterTimestamp,
  getMessageById,
  updateChatVisiblityById
} from '@/lib/db-queries'
import { registry } from '@/lib/ai/registry'
import { stripIndents } from '@/lib/utils/stripIndent'

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
  message: Message
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

export async function enhancePrompt({
  message,
  modelId,
  provider
}: {
  message: string
  modelId: string
  provider: string
}) {
  const { text: title } = await generateText({
    model: registry.languageModel(`${provider}:${modelId}`),
    messages: [
      {
        role: 'user',
        content:
          `[Model: ${modelId}]\n\n[Provider: ${provider}]\n\n` +
          stripIndents`
          You are a professional prompt engineer specializing in crafting precise, effective prompts.
          Your task is to enhance prompts by making them more specific, actionable, and effective.

          I want you to improve the user prompt that is wrapped in \`<original_prompt>\` tags.

          For valid prompts:
          - Make instructions explicit and unambiguous
          - Add relevant context and constraints
          - Remove redundant information
          - Maintain the core intent
          - Ensure the prompt is self-contained
          - Use professional language

          For invalid or unclear prompts:
          - Respond with clear, professional guidance
          - Keep responses concise and actionable
          - Maintain a helpful, constructive tone
          - Focus on what the user should provide
          - Use a standard template for consistency

          IMPORTANT: Your response must ONLY contain the enhanced prompt text.
          Do not include any explanations, metadata, or wrapper tags.

          <original_prompt>
            ${message}
          </original_prompt>
        `
      }
    ]
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
