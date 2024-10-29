import { Message } from "../types";

export class MockOpenAI {
  chat = {
    completions: {
      create: async function* ({ messages, stream = false, model = 'gpt-4' }: {
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
            id: 'mock-completion-' + Date.now(),
            object: 'chat.completion',
            created: Date.now(),
            model,
            choices: [{
              index: 0,
              message: {
                role: 'assistant',
                content: `这是对"${messages[messages.length - 1].content}"的模拟回复`
              },
              finish_reason: 'stop'
            }]
          }
        }

        const response = `这是对"${messages[messages.length - 1].content}"的模拟流式回复。`
        for (const char of response) {
          yield {
            id: 'mock-completion-' + Date.now(),
            object: 'chat.completion.chunk',
            created: Date.now(),
            model,
            choices: [{
              index: 0,
              delta: {
                content: char
              },
              finish_reason: null
            }]
          }
          await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 50))
        }
      }
    }
  }
}
