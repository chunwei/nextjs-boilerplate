import { auth } from '@/auth'
import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const body = await req.json()
    const { teamName, teamUrl } = body

    // Validate team URL is unique
    const existingTeam = await db.team.findUnique({
      where: { url: teamUrl }
    })

    if (existingTeam) {
      return new NextResponse('Team URL already exists', { status: 400 })
    }

    // Create team and associate with user
    const team = await db.team.create({
      data: {
        name: teamName,
        url: teamUrl,
        members: {
          create: {
            userId: session.user.id,
            role: 'OWNER'
          }
        }
      }
    })

    // Update user's teams
    await db.user.update({
      where: { id: session.user.id },
      data: {
        defaultTeam: team.url
      }
    })

    return NextResponse.json(team)
  } catch (error) {
    console.error('[TEAMS_POST]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
} 