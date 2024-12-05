'use client'

import { useXAgent, useXChat, Sender, Bubble } from '@ant-design/x'
import OpenAI from 'openai'
import React from 'react'

const client = new OpenAI({
  apiKey: process.env['NEXT_PUBLIC_OPENAI_API_KEY'],
  dangerouslyAllowBrowser: true
})

const OpenaiChatPage: React.FC = () => {
  const [agent] = useXAgent({
    request: async (info, callbacks) => {
      const { messages, message = '' } = info

      const { onSuccess, onUpdate /* onError */ } = callbacks

      // current message
      console.log('message', message)

      // history messages
      console.log('messages', messages)

      let content: string = ''

      try {
        const stream = await client.chat.completions.create({
          model: 'gpt-4o',
          // if chat context is needed, modify the array
          messages: [{ role: 'user', content: message }],
          // stream mode
          stream: true
        })

        for await (const chunk of stream) {
          content += chunk.choices[0]?.delta?.content || ''

          onUpdate(content)
        }

        onSuccess(content)
      } catch (error) {
        console.error(error)
        // handle error
        // onError();
      }
    }
  })

  const {
    // use to send message
    onRequest,
    // use to render messages
    messages
  } = useXChat({ agent })

  const items = messages.map(({ message, id }) => ({
    // key is required, used to identify the message
    key: id,
    content: message
  }))

  return (
    <div>
      <Bubble.List items={items} />
      <Sender onSubmit={onRequest} />
    </div>
  )
}

export default OpenaiChatPage
