'use client'

import type { Attachment, ChatRequestOptions, CreateMessage, Message } from 'ai'
import cx from 'classnames'
import type React from 'react'
import {
  useRef,
  useEffect,
  useState,
  useCallback,
  type Dispatch,
  type SetStateAction,
  type ChangeEvent,
  memo
} from 'react'
import { toast } from 'sonner'
import { useLocalStorage, useWindowSize } from 'usehooks-ts'

import { sanitizeUIMessages } from '@/lib/utils'

import { ArrowUpIcon, PaperclipIcon, StopIcon } from './icons'
import { PreviewAttachment } from './preview-attachment'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { SuggestedActions } from './suggested-actions'
import equal from 'fast-deep-equal'
import { useSync } from '@/contexts/sync-context'
import { SYNC_INPUT_EVENT, SYNC_SUBMIT_EVENT } from '@/lib/constants'
import { HaloBorder } from '../icons/halo-border'

function PureMultimodalInput({
  chatId,
  input,
  setInput,
  isLoading,
  stop,
  attachments,
  setAttachments,
  messages,
  setMessages,
  append,
  handleSubmit,
  className
}: {
  chatId: string
  input: string
  setInput: (value: string) => void
  isLoading: boolean
  stop: () => void
  attachments: Array<Attachment>
  setAttachments: Dispatch<SetStateAction<Array<Attachment>>>
  messages: Array<Message>
  setMessages: Dispatch<SetStateAction<Array<Message>>>
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions
  ) => Promise<string | null | undefined>
  handleSubmit: (
    event?: {
      preventDefault?: () => void
    },
    chatRequestOptions?: ChatRequestOptions
  ) => void
  className?: string
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const { width } = useWindowSize()
  const { syncStates } = useSync()
  const isSync = syncStates[chatId] !== false

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight()
    }
  }, [])

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${
        textareaRef.current.scrollHeight + 2
      }px`
    }
  }

  const [localStorageInput, setLocalStorageInput] = useLocalStorage('input', '')

  useEffect(() => {
    if (textareaRef.current) {
      const domValue = textareaRef.current.value
      // Prefer DOM value over localStorage to handle hydration
      const finalValue = domValue || localStorageInput || ''
      setInput(finalValue)
      adjustHeight()
    }
    // Only run once after hydration
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setLocalStorageInput(input)
  }, [input, setLocalStorageInput])

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value
    setInput(newValue)
    adjustHeight()

    // 如果是同步状态，广播输入变化
    if (isSync) {
      const syncEvent = new CustomEvent(SYNC_INPUT_EVENT, {
        detail: { value: newValue, sourceId: chatId }
      })
      window.dispatchEvent(syncEvent)
    }
  }

  // 监听其他面板的输入变化
  useEffect(() => {
    const handleSyncInput = (e: Event) => {
      const { value, sourceId } = (
        e as CustomEvent<{ value: string; sourceId: string }>
      ).detail
      if (sourceId !== chatId && isSync) {
        setInput(value)
        if (textareaRef.current) {
          textareaRef.current.value = value
          adjustHeight()
        }
      }
    }

    window.addEventListener(SYNC_INPUT_EVENT, handleSyncInput)
    return () => window.removeEventListener(SYNC_INPUT_EVENT, handleSyncInput)
  }, [chatId, isSync, setInput])

  const fileInputRef = useRef<HTMLInputElement>(null)
  const [uploadQueue, setUploadQueue] = useState<Array<string>>([])

  // 添��一个 ref 来跟踪是否正在处理提交
  const isSubmittingRef = useRef(false)

  const handleFormSubmit = useCallback(() => {
    // 如果正在处理提交，则跳过
    if (isSubmittingRef.current) {
      return
    }

    // 标记正在处理提交
    isSubmittingRef.current = true

    handleSubmit(undefined, {
      experimental_attachments: attachments
    })

    setAttachments([])
    setLocalStorageInput('')

    if (width && width > 768) {
      textareaRef.current?.focus()
    }

    // 如果是同步状态，广播提交事件
    if (isSync) {
      const syncEvent = new CustomEvent(SYNC_SUBMIT_EVENT, {
        detail: { sourceId: chatId }
      })
      window.dispatchEvent(syncEvent)
    }

    // 使用 setTimeout 确保在当前事件循环结束后重置标记
    setTimeout(() => {
      isSubmittingRef.current = false
    }, 0)
  }, [
    attachments,
    chatId,
    handleSubmit,
    isSync,
    setAttachments,
    setLocalStorageInput,
    width
  ])

  const submitForm = handleFormSubmit

  const uploadFile = async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/files/upload', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        const data = await response.json()
        const { url, pathname, contentType } = data

        return {
          url,
          name: pathname,
          contentType: contentType
        }
      }
      const { error } = await response.json()
      toast.error(error)
    } catch (error) {
      toast.error('Failed to upload file, please try again!')
      console.log('Error uploading file!', error)
    }
  }

  const handleFileChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(event.target.files || [])

      setUploadQueue(files.map((file) => file.name))

      try {
        const uploadPromises = files.map((file) => uploadFile(file))
        const uploadedAttachments = await Promise.all(uploadPromises)
        const successfullyUploadedAttachments = uploadedAttachments.filter(
          (attachment) => attachment !== undefined
        )

        setAttachments((currentAttachments) => [
          ...currentAttachments,
          ...successfullyUploadedAttachments
        ])
      } catch (error) {
        console.error('Error uploading files!', error)
      } finally {
        setUploadQueue([])
      }
    },
    [setAttachments]
  )

  // 添加一个状态来跟踪输入法组合状态
  const [isComposing, setIsComposing] = useState(false)

  // 监听���他面板的提交事件
  useEffect(() => {
    const handleSyncSubmit = (e: Event) => {
      const { sourceId } = (e as CustomEvent<{ sourceId: string }>).detail
      // 如果正在处理提交或者是自己触发的事件，则跳过
      if (sourceId === chatId || isSubmittingRef.current || !isSync) {
        return
      }
      handleFormSubmit()
    }

    window.addEventListener(SYNC_SUBMIT_EVENT, handleSyncSubmit)
    return () => window.removeEventListener(SYNC_SUBMIT_EVENT, handleSyncSubmit)
  }, [chatId, isSync, handleFormSubmit])

  return (
    <div className="relative w-full flex flex-col gap-3 border rounded-lg p-3">
      <HaloBorder key={messages.length} />
      {messages.length === 0 &&
        attachments.length === 0 &&
        uploadQueue.length === 0 && (
          <SuggestedActions append={append} chatId={chatId} />
        )}

      <input
        type="file"
        className="fixed -top-4 -left-4 size-0.5 opacity-0 pointer-events-none"
        ref={fileInputRef}
        multiple
        onChange={handleFileChange}
        tabIndex={-1}
      />

      {(attachments.length > 0 || uploadQueue.length > 0) && (
        <div className="flex flex-row gap-2 overflow-x-auto items-end">
          {attachments.map((attachment) => (
            <PreviewAttachment key={attachment.url} attachment={attachment} />
          ))}

          {uploadQueue.map((filename) => (
            <PreviewAttachment
              key={filename}
              attachment={{
                url: '',
                name: filename,
                contentType: ''
              }}
              isUploading={true}
            />
          ))}
        </div>
      )}

      <Textarea
        ref={textareaRef}
        placeholder="Send a message..."
        value={input}
        onChange={handleInput}
        className={cx(
          'min-h-[24px] max-h-[calc(75dvh)] overflow-hidden resize-none rounded-md !text-base bg-muted/50 !pb-10',
          className
        )}
        rows={3}
        autoFocus
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && !event.shiftKey) {
            // 如果正在输入法输入中，不处理回车事件
            if (isComposing) {
              return
            }

            event.preventDefault()

            if (isLoading) {
              toast.error('Please wait for the model to finish its response!')
            } else {
              submitForm()
            }
          }
        }}
        data-sync-input
        data-pane-id={chatId}
      />
      <div className="w-full p-6 absolute bottom-0 left-0 flex flex-row gap-2 items-center justify-between">
        <AttachmentsButton fileInputRef={fileInputRef} isLoading={isLoading} />
        {isLoading ? (
          <StopButton stop={stop} setMessages={setMessages} />
        ) : (
          <SendButton
            input={input}
            submitForm={submitForm}
            uploadQueue={uploadQueue}
          />
        )}
      </div>
    </div>
  )
}

export const MultimodalInput = memo(
  PureMultimodalInput,
  (prevProps, nextProps) => {
    if (prevProps.input !== nextProps.input) return false
    if (prevProps.isLoading !== nextProps.isLoading) return false
    if (!equal(prevProps.attachments, nextProps.attachments)) return false

    return true
  }
)

function PureAttachmentsButton({
  fileInputRef,
  isLoading
}: {
  fileInputRef: React.MutableRefObject<HTMLInputElement | null>
  isLoading: boolean
}) {
  return (
    <Button
      className="rounded-full p-1.5 h-fit  m-0.5 dark:border-zinc-700"
      onClick={(event) => {
        event.preventDefault()
        fileInputRef.current?.click()
      }}
      variant="outline"
      disabled={isLoading}
    >
      <PaperclipIcon size={14} />
    </Button>
  )
}

const AttachmentsButton = memo(PureAttachmentsButton)

function PureStopButton({
  stop,
  setMessages
}: {
  stop: () => void
  setMessages: Dispatch<SetStateAction<Array<Message>>>
}) {
  return (
    <Button
      className="rounded-full p-1.5 h-fit  m-0.5 border dark:border-zinc-600"
      onClick={(event) => {
        event.preventDefault()
        stop()
        setMessages((messages) => sanitizeUIMessages(messages))
      }}
    >
      <StopIcon size={14} />
    </Button>
  )
}

const StopButton = memo(PureStopButton)

function PureSendButton({
  submitForm,
  input,
  uploadQueue
}: {
  submitForm: () => void
  input: string
  uploadQueue: Array<string>
}) {
  return (
    <Button
      className="rounded-full p-1.5 h-fit  m-0.5 border dark:border-zinc-600"
      onClick={(event) => {
        event.preventDefault()
        submitForm()
      }}
      disabled={input.length === 0 || uploadQueue.length > 0}
    >
      <ArrowUpIcon size={14} />
    </Button>
  )
}

const SendButton = memo(PureSendButton, (prevProps, nextProps) => {
  if (prevProps.input !== nextProps.input) return false
  if (prevProps.uploadQueue.length !== nextProps.uploadQueue.length)
    return false
  return true
})
