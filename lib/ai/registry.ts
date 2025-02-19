import { openai } from '@ai-sdk/openai'
import { cohere } from '@ai-sdk/cohere'
import { anthropic } from '@ai-sdk/anthropic'
import { google } from '@ai-sdk/google'
import { azure } from '@ai-sdk/azure'
import { xai } from '@ai-sdk/xai'
import { mistral } from '@ai-sdk/mistral'
import { groq } from '@ai-sdk/groq'
import { deepseek } from '@ai-sdk/deepseek'
import {
  perplexity,
  fireworks,
  lmstudio,
  bailian
  // deepseek
} from './openai-compatible-providers'
import { ollama } from 'ollama-ai-provider'



import { experimental_createProviderRegistry as createProviderRegistry } from 'ai'

export const registry = createProviderRegistry({
  openai,
  cohere,
  anthropic,
  google,
  azure,
  xai,
  mistral,
  groq,
  perplexity,
  fireworks,
  lmstudio,
  ollama,
  bailian,
  deepseek
})
