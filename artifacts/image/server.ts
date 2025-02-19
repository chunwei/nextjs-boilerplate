// import { myProvider } from '@/lib/ai/models';
import { registry } from '@/lib/ai/registry'
import { createDocumentHandler } from '@/lib/artifacts/server'
import { experimental_generateImage } from 'ai'

export const imageDocumentHandler = createDocumentHandler<'image'>({
  kind: 'image',
  onCreateDocument: async ({ title, dataStream }) => {
    let draftContent = ''

    const { image } = await experimental_generateImage({
      // model: myProvider.imageModel('small-model'),
      model: registry.imageModel('bailian:qwq-32b-preview'),
      prompt: title,
      n: 1
    })

    draftContent = image.base64

    dataStream.writeData({
      type: 'image-delta',
      content: image.base64
    })

    return draftContent
  },
  onUpdateDocument: async ({ description, dataStream }) => {
    let draftContent = ''

    const { image } = await experimental_generateImage({
      // model: myProvider.imageModel('small-model'),
      model: registry.imageModel('bailian:qwq-32b-preview'),
      prompt: description,
      n: 1
    })

    draftContent = image.base64

    dataStream.writeData({
      type: 'image-delta',
      content: image.base64
    })

    return draftContent
  }
})
