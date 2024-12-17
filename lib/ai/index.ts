import { openai } from '@ai-sdk/openai';
import { cohere } from '@ai-sdk/cohere'
import { anthropic } from '@ai-sdk/anthropic'
import { google } from '@ai-sdk/google'
import { azure } from '@ai-sdk/azure'
import { xai } from '@ai-sdk/xai'
import { mistral } from '@ai-sdk/mistral'
import { groq } from '@ai-sdk/groq'
import { togetherai } from '@ai-sdk/togetherai'
import { perplexity, fireworks, lmstudio } from './openai-compatible-providers'
import { ollama } from 'ollama-ai-provider'

import {
  LanguageModelV1,
  experimental_wrapLanguageModel as wrapLanguageModel
} from 'ai'
import { customMiddleware } from './custom-middleware'

// Provider 映射：根据 provider 字符串选择对应的 SDK
const providerMapping: Record<
  string,
  (apiIdentifier: string) => LanguageModelV1
> = {
  openai: (apiIdentifier: string) => openai(apiIdentifier),
  anthropic: (apiIdentifier: string) => anthropic(apiIdentifier),
  cohere: (apiIdentifier: string) => cohere(apiIdentifier),
  google: (apiIdentifier: string) => google(apiIdentifier),
  azure: (apiIdentifier: string) => azure(apiIdentifier),
  xai: (apiIdentifier: string) => xai(apiIdentifier),
  mistral: (apiIdentifier: string) => mistral(apiIdentifier),
  groq: (apiIdentifier: string) => groq(apiIdentifier),
  togetherai: (apiIdentifier: string) => togetherai(apiIdentifier),
  perplexity: (apiIdentifier: string) => perplexity(apiIdentifier),
  fireworks: (apiIdentifier: string) => fireworks(apiIdentifier),
  lmstudio: (apiIdentifier: string) => lmstudio(apiIdentifier),
  ollama: (apiIdentifier: string) => ollama(apiIdentifier)
}

export const customModel = (provider: string, apiIdentifier: string) => {
  return wrapLanguageModel({
    model: providerMapping[provider](apiIdentifier),
    middleware: customMiddleware
  })
}
