'use client'

import type { Attachment, Message } from 'ai'
import { useChat } from 'ai/react'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import { useWindowSize } from 'usehooks-ts'

// import { ChatHeader } from './chat-header'

import { fetcher } from '@/lib/utils'

import { Block, type UIBlock } from './block'
import { BlockStreamHandler } from './block-stream-handler'
import { MultimodalInput } from './multimodal-input'
import { Messages } from './messages'
import { VisibilityType } from './visibility-selector'
import { Vote } from '@prisma/client'
import ChatError from './chat-error'
import { useModel } from '@/contexts/model-context'

export function Chat({
  id,
  initialMessages,
  selectedModelId,
  selectedVisibilityType,
  isReadonly
}: {
  id: string
  initialMessages: Array<Message>
  selectedModelId: string
  selectedVisibilityType: VisibilityType
  isReadonly: boolean
}) {
  const { model } = useModel()
  const { mutate } = useSWRConfig()

  const {
    messages,
    setMessages,
    handleSubmit,
    input,
    setInput,
    append,
    isLoading,
    stop,
    reload,
    error,
    data: streamingData
  } = useChat({
    id,
    body: { id, modelId: model.id || selectedModelId },
    initialMessages,
    onFinish: () => {
      mutate('/api/history')
    },
    onError: (error) => {
      console.error('Error in useChat:', error)
    }
  })
  console.log('Chat component rendered', { selectedVisibilityType, input })
  const { width: windowWidth = 1920, height: windowHeight = 1080 } =
    useWindowSize()

  const [block, setBlock] = useState<UIBlock>({
    documentId: 'init',
    content: '',
    title: '',
    status: 'idle',
    isVisible: false,
    boundingBox: {
      top: windowHeight / 4,
      left: windowWidth / 4,
      width: 250,
      height: 50
    }
  })

  const { data: votes } = useSWR<Array<Vote>>(`/api/vote?chatId=${id}`, fetcher)

  const [attachments, setAttachments] = useState<Array<Attachment>>([])

  return (
    <>
      <div className="flex flex-col min-w-0 h-full bg-background">
        {/* <ChatHeader
          chatId={id}
          selectedModelId={model.id || selectedModelId}
          selectedVisibilityType={selectedVisibilityType}
          isReadonly={isReadonly}
        /> */}

        <Messages
          chatId={id}
          block={block}
          setBlock={setBlock}
          isLoading={isLoading}
          votes={votes}
          messages={messages}
          setMessages={setMessages}
          reload={reload}
          isReadonly={isReadonly}
        />

        {error && (
          <ChatError
            error={error || new Error('Unknown error')}
            reload={reload}
          />
        )}

        <form className="flex mx-auto px-4 bg-background pb-4 md:pb-6 gap-2 w-full md:max-w-3xl">
          {!isReadonly && (
            <MultimodalInput
              chatId={id}
              input={input}
              setInput={setInput}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
              stop={stop}
              attachments={attachments}
              setAttachments={setAttachments}
              messages={messages}
              setMessages={setMessages}
              append={append}
            />
          )}
        </form>
      </div>

      <AnimatePresence>
        {block?.isVisible && (
          <Block
            chatId={id}
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            stop={stop}
            attachments={attachments}
            setAttachments={setAttachments}
            append={append}
            block={block}
            setBlock={setBlock}
            messages={messages}
            setMessages={setMessages}
            reload={reload}
            votes={votes}
            isReadonly={isReadonly}
          />
        )}
      </AnimatePresence>

      <BlockStreamHandler streamingData={streamingData} setBlock={setBlock} />
    </>
  )
}
