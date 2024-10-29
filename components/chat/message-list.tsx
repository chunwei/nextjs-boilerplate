'use client'

import { useEffect, useRef, useState } from 'react'
import { Message } from '@/types/chat'
import { ChatMessage } from './message'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function ChatMessageList({ messages }: { messages: Message[] }) {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [showScrollButton, setShowScrollButton] = useState(false)
  const initialScrollDone = useRef(false)
  
  const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior })
    }
  }

  const shouldAutoScroll = () => {
    const container = containerRef.current
    if (!container) return true

    const { scrollTop, scrollHeight, clientHeight } = container
    const scrolledUp = scrollHeight - (scrollTop + clientHeight) > 100
    return !scrolledUp
  }

  // 首次加载时立即滚动到底部
  useEffect(() => {
    if (!initialScrollDone.current && messages.length > 0) {
      // 使用 setTimeout 确保在 DOM 更新后执行滚动
      setTimeout(() => {
        scrollToBottom('instant')
        initialScrollDone.current = true
      }, 0)
    }
  }, [messages])

  // 监听滚动事件
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container
      const scrolledUp = scrollHeight - (scrollTop + clientHeight) > 100
      setShowScrollButton(scrolledUp)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  // 消息更新时的滚动
  useEffect(() => {
    if (initialScrollDone.current && shouldAutoScroll()) {
      scrollToBottom()
    }
  }, [messages])

  // 监听流式响应
  useEffect(() => {
    const lastMessage = messages[messages.length - 1]
    if (lastMessage?.role === 'assistant' && shouldAutoScroll()) {
      scrollToBottom()
    }
  }, [messages[messages.length - 1]?.content])

  return (
    <div className="flex-1 relative">
      <div 
        ref={containerRef}
        className="absolute inset-0 overflow-y-auto p-4 scroll-smooth"
      >
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {showScrollButton && (
        <Button
          variant="outline"
          size="icon"
          className="absolute bottom-4 right-4 rounded-full shadow-lg"
          onClick={() => scrollToBottom()}
        >
          <ChevronDown className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}