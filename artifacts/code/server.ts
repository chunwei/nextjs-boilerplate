import { z } from 'zod'
import { streamObject } from 'ai'
// import { myProvider } from '@/lib/ai/models';
import { codePrompt, updateDocumentPrompt } from '@/lib/ai/prompts'
import { createDocumentHandler } from '@/lib/artifacts/server'
import { registry } from '@/lib/ai/registry'

export const codeDocumentHandler = createDocumentHandler<'code'>({
  kind: 'code',
  onCreateDocument: async ({ title, dataStream }) => {
    let draftContent = ''

    const { fullStream } = streamObject({
      // model: myProvider.languageModel('artifact-model'),
      model: registry.languageModel('bailian:qwq-32b-preview'),
      system: codePrompt,
      prompt: title,
      schema: z.object({
        code: z.string()
      })
    })

    for await (const delta of fullStream) {
      const { type } = delta

      if (type === 'object') {
        const { object } = delta
        const { code } = object

        if (code) {
          dataStream.writeData({
            type: 'code-delta',
            content: code ?? ''
          })

          draftContent = code
        }
      }
    }

    return draftContent
  },
  onUpdateDocument: async ({ document, description, dataStream }) => {
    let draftContent = ''

    const { fullStream } = streamObject({
      // model: myProvider.languageModel('artifacts-model'),
      model: registry.languageModel('bailian:qwq-32b-preview'),
      system: updateDocumentPrompt(document.content, 'code'),
      prompt: description,
      schema: z.object({
        code: z.string()
      })
    })

    for await (const delta of fullStream) {
      const { type } = delta

      if (type === 'object') {
        const { object } = delta
        const { code } = object

        if (code) {
          dataStream.writeData({
            type: 'code-delta',
            content: code ?? ''
          })

          draftContent = code
        }
      }
    }

    return draftContent
  }
})
