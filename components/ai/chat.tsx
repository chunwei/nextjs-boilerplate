'use client'

import type { Attachment, Message } from 'ai'
import { useChat } from '@ai-sdk/react'
// import { AnimatePresence } from 'framer-motion'
import { useState, useCallback } from 'react'
import useSWR, { useSWRConfig } from 'swr'
// import { useWindowSize } from 'usehooks-ts'

// import { ChatHeader } from './chat-header'

import { fetcher, generateUUID } from '@/lib/utils'

// import { Block, type UIBlock } from './block'
// import { BlockStreamHandler } from './block-stream-handler'
import { MultimodalInput } from './multimodal-input'
import { Messages } from './messages'
import { VisibilityType } from './visibility-selector'
import { Vote } from '@prisma/client'
import ChatError from './chat-error'
import { useModel } from '@/contexts/model-context'
import { usePromptEnhancer } from '@/hooks/use-prompt-enhancer'
import { useArtifactSelector } from '@/hooks/use-artifact';
import { Artifact } from './artifact'

export function Chat({
  id,
  initialMessages,
  selectedModelId,
  // selectedVisibilityType,
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
    // data: streamingData
  } = useChat({
    id,
    body: { id, modelId: model.id || selectedModelId },
    initialMessages,
    experimental_throttle: 100,
    sendExtraMessageFields: true,
    generateId: generateUUID,
    onFinish: () => {
      mutate('/api/history')
    },
    onError: (error) => {
      console.error('Error in useChat:', error)
    }
  })
  // console.log('Chat component rendered', { selectedVisibilityType, input })
  // const { width: windowWidth = 1920, height: windowHeight = 1080 } =
  //   useWindowSize()

  // const [block, setBlock] = useState<UIBlock>({
  //   documentId: 'init',
  //   content: '',
  //   title: '',
  //   status: 'idle',
  //   isVisible: false,
  //   boundingBox: {
  //     top: windowHeight / 4,
  //     left: windowWidth / 4,
  //     width: 250,
  //     height: 50
  //   }
  // })

  const { data: votes } = useSWR<Array<Vote>>(`/api/vote?chatId=${id}`, fetcher)

  const [attachments, setAttachments] = useState<Array<Attachment>>([])
  const isArtifactVisible = useArtifactSelector((state) => state.isVisible);
  const { enhancingPrompt, enhancePrompt /* resetEnhancer */ } =
    usePromptEnhancer()

  const enhancePromptCallback = useCallback(async () => {
    await enhancePrompt(
      input,
      (input) => {
        setInput(input)
      },
      model.id || selectedModelId
    )
  }, [enhancePrompt, input, model.id, selectedModelId, setInput])

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
          // block={block}
          // setBlock={setBlock}
          isLoading={isLoading}
          votes={votes}
          messages={messages}
          setMessages={setMessages}
          reload={reload}
          isReadonly={isReadonly}
          isArtifactVisible={isArtifactVisible}
        />

        {error && (
          <ChatError
            error={error || new Error('Unknown error')}
            reload={reload}
          />
        )}

        <form className="flex mx-auto bg-background p-0 gap-2 w-full md:max-w-3xl">
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
              enhancingPrompt={enhancingPrompt}
              // promptEnhanced={promptEnhanced}
              enhancePrompt={enhancePromptCallback}
            />
          )}
        </form>
      </div>
      <Artifact
        chatId={id}
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        stop={stop}
        attachments={attachments}
        setAttachments={setAttachments}
        append={append}
        messages={messages}
        setMessages={setMessages}
        reload={reload}
        votes={votes}
        isReadonly={isReadonly}
        enhancingPrompt={enhancingPrompt}
        enhancePrompt={enhancePromptCallback}
      />
      {/* <AnimatePresence>
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

      <BlockStreamHandler streamingData={streamingData} setBlock={setBlock} /> */}
    </>
  )
}
