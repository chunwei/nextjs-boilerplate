'use server'

import { Chatbot } from '@/types/chatbot'
import { prisma } from '@/lib/prisma'
import { generateBotName } from '@/lib/utils/generate-bot-name'

export async function getChatbots(teamSlug: string): Promise<Chatbot[]> {
  try {
    const result = await prisma.team.findUnique({
      where: {
        url: teamSlug
      },
      include: {
        chatbots: {
          include: {
            styles: true
          }
        }
      }
    })

    if (!result) {
      throw new Error('团队不存在')
    }

    return result.chatbots
  } catch (error) {
    throw new Error('获取聊天机器人失败' + error)
  }
}

export async function createChatbot(teamSlug: string, name?: string) {
  try {
    const team = await prisma.team.findUnique({
      where: {
        url: teamSlug
      }
    })
    if (!team) {
      throw new Error('团队不存在')
    }
    const teamId = team.id
    // console.log('Creating chatbot...', teamId, name)
    const chatbot = await prisma.chatbot.create({
      data: {
        team_id: teamId,
        name: name || generateBotName(),
        status: 'new'
      }
    })

    return chatbot.id
  } catch (error) {
    console.log('Error creating chatbot:', error)
    throw new Error('Failed to create chatbot')
  }
}

// export async function cloneChatbot(botId: string): Promise<Chatbot> {
//   try {
//     const originalBot = await prisma.chatbot.findUnique({
//       where: {
//         id: botId
//       }
//     });

//     if (!originalBot) {
//       throw new Error('未找到原始聊天机器人');
//     }

//     const clonedBot = await prisma.chatbot.create({
//       data: {
//         ...originalBot,
//         id: undefined,
//         name: `${originalBot.name} (副本)`,
//         created_at: new Date(),
//       }
//     });

//     return clonedBot;
//   } catch (error) {
//     throw new Error('克隆聊天机器人失败');
//   }
// }
