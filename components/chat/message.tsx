'use client'

import { Message } from '@/types/chat'
import { cn } from '@/lib/utils'
import ReactMarkdown from 'react-markdown'
import { useMemo } from 'react'

export function ChatMessage({ message }: { message: Message }) {
  const isAnthropic = useMemo(() => {
    return ((message?.chatId ?? '').split(':')[1] ?? 'anthropic') === 'anthropic'
  }, [message.chatId])

  const messageClassName = useMemo(() => {
    return cn(
      'flex w-full items-start gap-4 p-4 mb-4 rounded-md',
      message.role === 'assistant'
        ? isAnthropic
          ? 'bg-emerald-200 dark:bg-emerald-800/50'
          : 'bg-sky-200 dark:bg-sky-800/50'
        : 'bg-neutral-100/50 dark:bg-neutral-800/50'
    )
  }, [message.role, isAnthropic])

  return (
    <div className={messageClassName}>
      <div className="flex-1 space-y-2">
        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown>{message.content || ''}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
