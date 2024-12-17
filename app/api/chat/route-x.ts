import { NextRequest } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { StreamingTextResponse, AnthropicStream } from 'ai'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!
})

export async function POST(req: NextRequest) {
  const { messages, stream } = await req.json()

  try {
    if (stream) {
      const response = await client.messages.stream({
        messages: messages,
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024
      })

      // Convert the response into a friendly stream
      const stream = AnthropicStream(response)

      // Return a StreamingTextResponse, which can be consumed by the client
      return new StreamingTextResponse(stream)
    } else {
      const response = await client.messages.create({
        messages: messages,
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024
      })

      return new Response(JSON.stringify(response), {
        headers: { 'Content-Type': 'application/json' }
      })
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch response' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
