import { createOpenAI } from '@ai-sdk/openai'

const perplexity = createOpenAI({
  name: 'perplexity',
  apiKey: process.env.PERPLEXITY_API_KEY ?? '',
  baseURL: 'https://api.perplexity.ai/'
})

const fireworks = createOpenAI({
  name: 'fireworks',
  apiKey: process.env.FIREWORKS_API_KEY ?? '',
  baseURL: 'https://api.fireworks.ai/inference/v1'
})

const lmstudio = createOpenAI({
  name: 'lmstudio',
  apiKey: 'not-needed',
  baseURL: 'http://localhost:1234/v1'
})

const bailian = createOpenAI({
  name: 'bailian',
  apiKey: process.env.DASHSCOPE_API_KEY ?? '',
  baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1'
})

export { perplexity, fireworks, lmstudio, bailian }
