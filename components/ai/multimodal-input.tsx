'use client'

import type { Attachment, ChatRequestOptions, CreateMessage, Message } from 'ai'
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

import { cn, sanitizeUIMessages } from '@/lib/utils'

import { ArrowUpIcon, PaperclipIcon, StopIcon, StarsIcon } from './icons'
import { PreviewAttachment } from './preview-attachment'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { SuggestedActions } from './suggested-actions'
import equal from 'fast-deep-equal'
import { useSync } from '@/contexts/sync-context'
import { SYNC_INPUT_EVENT, SYNC_SUBMIT_EVENT } from '@/lib/constants'
import { HaloBorder } from '../icons/halo-border'
import { Badge } from '../ui/badge'
import { SpeechRecognitionButton } from './speech-recognition'

// const texts = [
//   'How can I help you today?',
//   'What can I do for you?',
//   'Need assistance?'
// ]
const creativeHints = {
  words: [
    'a landing page for my...',
    'a blog about...',
    'a portfolio website for my...',
    'a web app that...',
    'a prototype...',
    'an internal tool that...',
    'a dashboard to...'
  ],
  prefix: 'Ask Omnichat to create '
}
const texts = creativeHints.words
// .map(
//   (word) => `${creativeHints.prefix}${word}`
// )

function PureMultimodalInput({
  chatId,
  input,
  setInput,
  isLoading,
  enhancingPrompt,
  enhancePrompt,
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
  enhancingPrompt: boolean
  enhancePrompt: () => Promise<void>
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
  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')

  const requestMicrophonePermission = async () => {
    try {
      // 先检查权限状态
      const permissionStatus = await navigator.permissions.query({
        name: 'microphone' as PermissionName
      })
      console.log('当前麦克风权限状态:', permissionStatus.state)

      // 尝试获取媒体流
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false // 明确指定不需要视频权限
      })

      console.log('成功获取到音频流:', stream.getAudioTracks())
      return true
    } catch (err) {
      // 详细的错误处理
      if (err instanceof DOMException) {
        switch (err.name) {
          case 'NotAllowedError':
            console.error('用户或系统拒绝了麦克风访问权限')
            break
          case 'NotFoundError':
            console.error('未找到麦克风设备')
            break
          case 'NotReadableError':
            console.error('麦克风可能被其他应用程序占用')
            break
          default:
            console.error('其他错误:', err.name, err.message)
        }
      }
      return false
    }
  }

  useEffect(() => {
    console.log(transcript)
  }, [transcript])

  const startListening = useCallback(async () => {
    console.log('startListening')
    const hasPermission = await requestMicrophonePermission()
    if (!hasPermission) {
      toast.error('需要麦克风权限才能使用语音识别')
      return
    }
    try {
      if (recognitionRef.current) {
        recognitionRef.current.start()
        setIsListening(true)
      }
    } catch (err) {
      console.error('启动语音识别失败:', err)
      setIsListening(false)
    }
  }, [])

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }, [])

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight()
    }
  }, [])

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(
        96,
        textareaRef.current.scrollHeight + 2
      )}px`
    }
  }

  const resetHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = '66px'
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

  const handleInput = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
    },
    [chatId, isSync, setInput]
  )

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

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) &&
      !recognitionRef.current
    ) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition

      const recognition = new SpeechRecognition()
      recognition.continuous = true
      recognition.interimResults = true

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0] as SpeechRecognitionAlternative)
          .map((result) => result.transcript)
          .join('')

        setTranscript(transcript)
        handleInput({
          target: { value: transcript }
        } as React.ChangeEvent<HTMLTextAreaElement>)
      }

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error)
        setIsListening(false)
      }

      recognitionRef.current = recognition
      console.log('init speech recognition')
    }
  }, [handleInput])

  const fileInputRef = useRef<HTMLInputElement>(null)
  const [uploadQueue, setUploadQueue] = useState<Array<string>>([])

  // ref 来跟踪是否正在处理提交
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
    resetHeight()

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

  // 监听他面板的提交事件
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

  const [placeholder, setPlaceholder] = useState('')
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [blink, setBlink] = useState(true)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    let typingTimer: NodeJS.Timeout

    if (input.length === 0) {
      if (subIndex === texts[index].length + 1 && !reverse) {
        setReverse(true)
        return
      }

      if (subIndex === 0 && reverse) {
        setReverse(false)
        setIndex((prev) => (prev + 1) % texts.length)
        return
      }

      typingTimer = setTimeout(() => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1))
      }, Math.max(reverse ? 30 : subIndex === texts[index].length ? 1500 : 50, Math.floor(Math.random() * 50)))
    }

    return () => clearTimeout(typingTimer)
  }, [subIndex, index, reverse, input.length])

  useEffect(() => {
    let blinkTimer: NodeJS.Timeout

    if (input.length === 0) {
      blinkTimer = setTimeout(() => {
        setBlink((prev) => !prev)
      }, 500)
    }

    return () => clearTimeout(blinkTimer)
  }, [blink, input.length])

  useEffect(() => {
    if (input.length === 0) {
      setPlaceholder(
        `${creativeHints.prefix}${texts[index].substring(0, subIndex)}${
          blink ? '|' : ' '
        }`
      )
    } else {
      setPlaceholder('')
    }
  }, [subIndex, index, blink, input.length])

  useEffect(() => {
    const handleBlur = () => {
      if (input.length === 0) {
        setReverse(false)
        setSubIndex(0)
        setIndex(0)
      }
    }

    const textarea = textareaRef.current
    textarea?.addEventListener('blur', handleBlur)

    return () => {
      textarea?.removeEventListener('blur', handleBlur)
    }
  }, [input.length])

  return (
    <div className="relative w-full flex flex-col gap-2 border rounded-lg p-3">
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
        placeholder={placeholder}
        value={input}
        onChange={handleInput}
        className={cn(
          'min-h-[32px] resize-none outline-none border-none shadow-none ring-0 focus-visible:ring-0 bg-transparent rounded-md !text-base ',
          className
        )}
        rows={2}
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
      <div className="w-full py-1 flex flex-row gap-2 items-center justify-between">
        <div className="flex items-center gap-1">
          <AttachmentsButton
            fileInputRef={fileInputRef}
            isLoading={isLoading}
          />
          <EnhanceButton
            enhancePrompt={enhancePrompt}
            enhancingPrompt={enhancingPrompt}
            input={input}
          />
          <SpeechRecognitionButton
            isListening={isListening}
            onStart={startListening}
            onStop={stopListening}
            disabled={isLoading}
          />
        </div>
        <div className="flex items-center gap-2">
          {input.length > 3 ? (
            <div className="text-xs text-muted-foreground">
              Use
              <Badge variant={'secondary'} className="px-1 mx-1 font-light">
                Shift
              </Badge>
              +
              <Badge variant={'secondary'} className="px-1 mx-1 font-light">
                Return
              </Badge>
              a new line
            </div>
          ) : null}
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
      className="p-1 h-fit  m-0.5"
      onClick={(event) => {
        event.preventDefault()
        fileInputRef.current?.click()
      }}
      variant="ghost"
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

function PureEnhanceButton({
  enhancePrompt,
  input,
  enhancingPrompt
}: {
  enhancePrompt: () => Promise<void>
  input: string
  enhancingPrompt: boolean
}) {
  return (
    <Button
      className=" p-1 h-fit  m-0.5 "
      onClick={async (event) => {
        event.preventDefault()
        await enhancePrompt()
        toast.success('Prompt enhanced!')
      }}
      variant="ghost"
      disabled={input.length === 0 || enhancingPrompt}
    >
      <StarsIcon size={14} />
    </Button>
  )
}

const EnhanceButton = memo(PureEnhanceButton, (prevProps, nextProps) => {
  if (prevProps.input !== nextProps.input) return false
  if (prevProps.enhancingPrompt !== nextProps.enhancingPrompt) return false
  return true
})
