import { Message, Prisma, Suggestion, User } from '@prisma/client'
import { db } from './db'

export async function voteMessage({
  chatId,
  messageId,
  type
}: {
  chatId: string
  messageId: string
  type: 'up' | 'down'
}) {
  try {
    const existingVote = await db.vote.findFirst({
      where: {
        messageId: messageId
      }
    })

    if (existingVote) {
      return await db.vote.update({
        where: {
          chatId_messageId: {
            messageId: messageId,
            chatId: chatId
          }
        },
        data: {
          isUpvoted: type === 'up'
        }
      })
    }

    return await db.vote.create({
      data: {
        messageId: messageId,
        chatId: chatId,
        isUpvoted: type === 'up'
      }
    })
  } catch (error) {
    console.error('Failed to upvote message in database', error)
    throw error
  }
}

export async function getVotesByChatId({ id }: { id: string }) {
  try {
    return await db.vote.findMany({
      where: {
        chatId: id
      }
    })
  } catch (error) {
    console.error('Failed to get votes by chat id from database', error)
    throw error
  }
}

export async function getUser(email: string): Promise<Array<User>> {
  try {
    return await db.user.findMany({
      where: { email }
    })
  } catch (error) {
    console.error('Failed to get user from database')
    throw error
  }
}

export async function saveChat({
  id,
  userId,
  title,
  visibility = 'private'
}: {
  id: string
  userId: string
  title: string
  visibility?: 'private' | 'public'
}) {
  try {
    return await db.$transaction(async (tx) => {
      const result = await tx.chat.create({
        data: {
          id,
          createdAt: new Date(),
          userId,
          title,
          visibility
        }
      })
      return result
    })
  } catch (error) {
    console.error('Failed to save chat in database', error)
    throw error
  }
}

export async function deleteChatById({ id }: { id: string }) {
  try {
    return await db.$transaction([
      db.vote.deleteMany({ where: { chatId: id } }),
      db.message.deleteMany({ where: { chatId: id } }),
      db.chat.delete({ where: { id } })
    ])
  } catch (error) {
    console.error('Failed to delete chat by id from database')
    throw error
  }
}

export async function getChatsByUserId({ id }: { id: string }) {
  try {
    return await db.chat.findMany({
      where: { userId: id },
      orderBy: { createdAt: 'desc' }
    })
  } catch (error) {
    console.error('Failed to get chats by user from database')
    throw error
  }
}

export async function getChatById({ id }: { id: string }) {
  try {
    return await db.chat.findUnique({
      where: { id }
    })
  } catch (error) {
    console.error('Failed to get chat by id from database')
    throw error
  }
}

export async function saveMessages({ messages }: { messages: Array<Message> }) {
  try {
    return await db.$transaction(async (tx) => {
      const result = await tx.message.createMany({
        data: messages.map((message) => ({
          ...message,
          content: message.content as Prisma.InputJsonValue
        }))
      })
      return result
    })
  } catch (error) {
    console.error('Failed to save messages in database', error)
    throw error
  }
}

export async function getMessagesByChatId({ id }: { id: string }) {
  try {
    return await db.message.findMany({
      where: { chatId: id },
      orderBy: { createdAt: 'asc' }
    })
  } catch (error) {
    console.error('Failed to get messages by chat id from database', error)
    throw error
  }
}

export async function saveDocument({
  id,
  title,
  content,
  userId
}: {
  id: string
  title: string
  content: string
  userId: string
}) {
  try {
    return await db.document.create({
      data: {
        id,
        title,
        content,
        userId,
        createdAt: new Date()
      }
    })
  } catch (error) {
    console.error('Failed to save document in database')
    throw error
  }
}

export async function getDocumentsById({ id }: { id: string }) {
  try {
    return await db.document.findMany({
      where: { id },
      orderBy: { createdAt: 'asc' }
    })
  } catch (error) {
    console.error('Failed to get document by id from database')
    throw error
  }
}

export async function getDocumentById({ id }: { id: string }) {
  try {
    return await db.document.findFirst({
      where: { id },
      orderBy: { createdAt: 'desc' }
    })
  } catch (error) {
    console.error('Failed to get document by id from database')
    throw error
  }
}

export async function deleteDocumentsByIdAfterTimestamp({
  id,
  timestamp
}: {
  id: string
  timestamp: Date
}) {
  try {
    await db.$transaction([
      db.suggestion.deleteMany({
        where: {
          AND: [{ documentId: id }, { documentCreatedAt: { gte: timestamp } }]
        }
      }),
      db.document.deleteMany({
        where: {
          AND: [{ id }, { createdAt: { gt: timestamp } }]
        }
      })
    ])
  } catch (error) {
    console.error(
      'Failed to delete documents by id after timestamp from database'
    )
    throw error
  }
}

export async function saveSuggestions({
  suggestions
}: {
  suggestions: Array<Suggestion>
}) {
  try {
    return await db.suggestion.createMany({
      data: suggestions
    })
  } catch (error) {
    console.error('Failed to save suggestions in database')
    throw error
  }
}

export async function getSuggestionsByDocumentId({
  documentId
}: {
  documentId: string
}) {
  try {
    return await db.suggestion.findMany({
      where: { documentId }
    })
  } catch (error) {
    console.error('Failed to get suggestions by document version from database')
    throw error
  }
}

export async function getMessageById({ id }: { id: string }) {
  try {
    return await db.message.findUnique({
      where: { id }
    })
  } catch (error) {
    console.error('Failed to get message by id from database')
    throw error
  }
}

export async function deleteMessagesByChatIdAfterTimestamp({
  chatId,
  timestamp
}: {
  chatId: string
  timestamp: Date
}) {
  try {
    return await db.message.deleteMany({
      where: {
        AND: [{ chatId }, { createdAt: { gte: timestamp } }]
      }
    })
  } catch (error) {
    console.error(
      'Failed to delete messages by id after timestamp from database'
    )
    throw error
  }
}

export async function updateChatVisiblityById({
  chatId,
  visibility
}: {
  chatId: string
  visibility: 'private' | 'public'
}) {
  try {
    return await db.chat.update({
      where: { id: chatId },
      data: { visibility }
    })
  } catch (error) {
    console.error('Failed to update chat visibility in database')
    throw error
  }
}
