import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';

export async function GET(req: Request) {
  try {
    const session = await auth();
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const teamId = searchParams.get('team_id');
    
    if (!teamId) {
      return new NextResponse('Missing team_id', { status: 400 });
    }

    const chatbots = await prisma.chatbot.findMany({
      where: {
        team_id: teamId
      },
      select: {
        id: true,
        name: true,
        styles: true,
        index_name: true,
        team_id: true
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    return NextResponse.json(chatbots);
  } catch (error) {
    console.error('Error fetching chatbots:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 