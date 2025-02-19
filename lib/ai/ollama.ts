import {
  wrapLanguageModel,
  extractReasoningMiddleware,
  LanguageModel
} from 'ai'

// middleware to extract reasoning tokens
// const ollamaDeepseekR1 = wrapLanguageModel({
//   model: ollama('deepseek-r1:14b'),
//   middleware: extractReasoningMiddleware({ tagName: 'think' })
// })
export function wrapDeepseek(model: LanguageModel) {
  // console.log(model.modelId, model.provider)
  if (model.modelId.includes('deepseek-r')) {
    return wrapLanguageModel({
      model,
      middleware: extractReasoningMiddleware({ tagName: 'think' })
    })
  }
  return model
}
