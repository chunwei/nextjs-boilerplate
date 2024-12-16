import type { Document } from '@prisma/client'

export function getDocumentTimestampByIndex(
  documents: Array<Document>,
  index: number
) {
  if (!documents) return new Date()
  if (index > documents.length) return new Date()

  return documents[index].createdAt
}
