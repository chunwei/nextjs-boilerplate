'use server'

import { Chatbot } from '@/types/chatbot'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getChatbots(teamId: string): Promise<Chatbot[]> {
  try {
    const chatbots = await prisma.chatbot.findMany({
      where: {
        team_id: teamId
      },
      include: {
        styles: true
      }
    })

    return chatbots
  } catch (error) {
    throw new Error('获取聊天机器人失败' + error)
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
