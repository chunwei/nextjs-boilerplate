import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';
import { Prisma } from '@prisma/client';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const chatbot = await prisma.chatbot.findUnique({
      where: {
        id: params.id
      }
    });

    if (!chatbot) {
      return new NextResponse('Chatbot not found', { status: 404 });
    }

    return NextResponse.json(chatbot);
  } catch (error) {
    console.error('Error fetching chatbot:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// // 克隆机器人API
// export async function POST(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const session = await auth();
//     if (!session) {
//       return new NextResponse('Unauthorized', { status: 401 });
//     }

//     const sourceChatbot = await prisma.chatbot.findUnique({
//       where: { id: params.id }
//     });

//     if (!sourceChatbot) {
//       return new NextResponse('Source chatbot not found', { status: 404 });
//     }

//     // 创建克隆
//     const clonedChatbot = await prisma.chatbot.create({
//       data: {
//         name: `${sourceChatbot.name} (Clone)`,
//         visibility: sourceChatbot.visibility,
//         team_id: sourceChatbot.team_id,
//         index_name: sourceChatbot.index_name,
//         status: 'trained',
//         instructions: sourceChatbot.instructions,
//         allowed_domains: sourceChatbot.allowed_domains,
//         ip_limit: sourceChatbot.ip_limit,
//         ip_limit_timeframe: sourceChatbot.ip_limit_timeframe,
//         ip_limit_message: sourceChatbot.ip_limit_message,
//         suggested_messages: sourceChatbot.suggested_messages,
//         initial_messages: sourceChatbot.initial_messages,
//         model: sourceChatbot.model,
//         temp: sourceChatbot.temp,
//         embedding_model: sourceChatbot.embedding_model,
//         styles: sourceChatbot.styles,
//         custom_domains: sourceChatbot.custom_domains,
//         analytics_sector: sourceChatbot.analytics_sector,
//         freeze_topics: sourceChatbot.freeze_topics,
//         credits_limit: sourceChatbot.credits_limit,
//         credits_used: 0
//       }
//     });

//     return NextResponse.json(clonedChatbot);
//   } catch (error) {
//     console.error('Error cloning chatbot:', error);
//     return new NextResponse('Internal Server Error', { status: 500 });
//   }
// } 