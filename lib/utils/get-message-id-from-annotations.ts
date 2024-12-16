import type { Message } from 'ai'

export function getMessageIdFromAnnotations(message: Message) {
  if (!message.annotations) return message.id

  const [annotation] = message.annotations
  if (!annotation) return message.id

  // @ts-expect-error messageIdFromServer is not defined in MessageAnnotation
  return annotation.messageIdFromServer
}
