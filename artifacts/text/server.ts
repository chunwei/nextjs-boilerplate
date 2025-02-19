import { smoothStream, streamText } from 'ai'
// import { myProvider } from '@/lib/ai/models';
import { createDocumentHandler } from '@/lib/artifacts/server'
import { updateDocumentPrompt } from '@/lib/ai/prompts'
import { registry } from '@/lib/ai/registry'

export const textDocumentHandler = createDocumentHandler<'text'>({
  kind: 'text',
  onCreateDocument: async ({ title, dataStream }) => {
    let draftContent = ''

    const { fullStream } = streamText({
      // model: myProvider.languageModel('artifact-model'),
      model: registry.languageModel('bailian:qwq-32b-preview'),
      system:
        'Write about the given topic. Markdown is supported. Use headings wherever appropriate.',
      experimental_transform: smoothStream({ chunking: 'word' }),
      prompt: title
    })

    for await (const delta of fullStream) {
      const { type } = delta

      if (type === 'text-delta') {
        const { textDelta } = delta

        draftContent += textDelta

        dataStream.writeData({
          type: 'text-delta',
          content: textDelta
        })
      }
    }

    return draftContent
  },
  onUpdateDocument: async ({ document, description, dataStream }) => {
    let draftContent = ''

    const { fullStream } = streamText({
      // model: myProvider.languageModel('artifact-model'),
      model: registry.languageModel('bailian:qwq-32b-preview'),
      system: updateDocumentPrompt(document.content, 'text'),
      experimental_transform: smoothStream({ chunking: 'word' }),
      prompt: description,
      experimental_providerMetadata: {
        openai: {
          prediction: {
            type: 'content',
            content: document.content
          }
        }
      }
    })

    for await (const delta of fullStream) {
      const { type } = delta

      if (type === 'text-delta') {
        const { textDelta } = delta

        draftContent += textDelta
        dataStream.writeData({
          type: 'text-delta',
          content: textDelta
        })
      }
    }

    return draftContent
  }
})
