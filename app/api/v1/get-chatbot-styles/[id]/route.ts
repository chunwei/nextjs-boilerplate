import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const chatbot = await prisma.chatbot.findUnique({
      where: {
        id: params.id
      },
      select: {
        styles: true,
        initial_messages: true
      }
    });

    if (!chatbot) {
      return new NextResponse('Chatbot not found', { status: 404 });
    }

    return NextResponse.json({
      styles: chatbot.styles,
      initialMessages: chatbot.initial_messages
    });
  } catch (error) {
    console.error('Error fetching chatbot styles:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 