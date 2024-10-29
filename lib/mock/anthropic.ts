import { Message } from "../types";

export class MockAnthropic {
  messages = {
    create: async function* ({ messages, stream = false, model = 'claude-3' }: {
        messages: Message[];
        stream?: boolean;
        model?: string;
      }) {
      // 验证输入
      if (!messages?.length) {
        throw new Error('messages is required')
      }

      // 模拟错误情况
      if (Math.random() < 0.1) {
        throw new Error('Simulated API error')
      }

      if (!stream) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        return {
          id: 'mock-msg-' + Date.now(),
          type: 'message',
          role: 'assistant',
          content: [{
            type: 'text',
            text: `这是对"${messages[messages.length - 1].content}"的模拟回复`
          }],
          model,
          stop_reason: 'end_turn'
        }
      }

      const response = `这是对"${messages[messages.length - 1].content}"的模拟流式回复。`
      for (const char of response) {
        yield {
          type: 'content_block_delta',
          delta: {
            type: 'text_delta',
            text: char
          },
          index: 0
        }
        await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 50))
      }
    }
  }
}
