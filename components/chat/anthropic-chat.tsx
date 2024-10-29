import { useEffect, useMemo, useRef, useState } from 'react'
import { nanoid } from 'nanoid'
import { useToast } from '@/hooks/use-toast'
import { ChatInput } from './input'
import { ChatMessageList } from './message-list'
import { Message, ChatProps } from '@/types/chat'
import { useChatStore } from '@/lib/store'
import { getChatId } from '@/lib/utils'

const PROVIDER = 'anthropic'

export function AnthropicChat({ userId, initialMessages, onSend }: ChatProps) {
  const [loading, setLoading] = useState(false)
  const { addMessage, setMessages, getMessages } = useChatStore()
  const { toast } = useToast()
  
  // 使用 ref 来追踪初始化状态
  const initialized = useRef(false)
  
  // 只在首次渲染时初始化
  useEffect(() => {
    if (!initialized.current && initialMessages) {
      setMessages(userId, PROVIDER, initialMessages)
      initialized.current = true
    }
  }, [initialMessages, setMessages, userId])

  // 直接获取消息，不使用 useMemo
  const chatMessages = initialized.current ? getMessages(userId, PROVIDER) : initialMessages || []
  

  const handleSend = async (content: string) => {
    if (!initialized.current) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Chat is still initializing"
      })
      return
    }

    if (!content.trim()) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Please enter a message.'
      })
      return
    }

    const userMessage: Message = {
      id: nanoid(),
      role: 'user',
      content,
      createdAt: new Date(),
      chatId: getChatId(userId, PROVIDER)
    }

    addMessage(userId, PROVIDER, userMessage)
    onSend?.(userMessage)

    setLoading(true)
    try {
      const response = await fetch('/api/chat/anthropic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...chatMessages, userMessage],
          userId
        })
      })

      if (!response.ok) {
        const error = await response.json()
        toast({
          variant: 'destructive',
          title: 'Error',
          description: error.error || 'Failed to send message'
        })
        return
      }

      if (!response.body) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'No response stream'
        })
        return
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let content = ''

      const assistantMessage: Message = {
        id: nanoid(),
        role: 'assistant',
        content: '',
        createdAt: new Date(),
        chatId: getChatId(userId, PROVIDER)
      }
      addMessage(userId, PROVIDER, assistantMessage)

      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value)
          content += chunk

          assistantMessage.content = content
          setMessages(userId, PROVIDER, [
            ...chatMessages,
            userMessage,
            assistantMessage
          ])
        }
      } catch (error) {
        console.error('Stream reading error:', error)
        toast({
          variant: 'destructive',
          title: 'Error',
          description: `Failed to read response stream. Please try again. \n${error}`
        })
        // 移除未完成的助手消息
        setMessages(userId, PROVIDER, [...chatMessages, userMessage])
      }
    } catch (error) {
      console.error('Failed to send message:', error)
      toast({
        variant: 'destructive',
        title: 'Error',
        description: `Failed to send message. Please try again. \n${error}`
      })
      // 移除失败的用户消息
      setMessages(userId, PROVIDER, [...chatMessages])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-full">
      <ChatMessageList messages={chatMessages} />
      <ChatInput
        onSend={handleSend}
        disabled={loading || !initialized.current}
        placeholder={
          !initialized.current ? '正在初始化...' :
          loading ? 'AI正在思考中...' : 
          '输入消息...'
        }
      />
    </div>
  )
}
