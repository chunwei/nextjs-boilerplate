import { enhancePrompt } from '@/app/actions/actions'
import { auth } from '@/auth'
// import { getChatById } from '@/lib/db-queries'
import { ErrorCode, handleApiError, HttpError } from '@/lib/errors'
import { models } from '@/lib/models'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { message, modelId }: { message: string; modelId: string } =
      await request.json()

    const session = await auth()

    if (!session || !session.user || !session.user.id) {
      // return new Response('Unauthorized', { status: 401 })
      throw new HttpError(401, 'Unauthorized', ErrorCode.UNAUTHORIZED)
    }

    const model = models.find((model) => model.id === modelId)

    if (!model) {
      // return new Response('Model not found', { status: 404 })
      throw new HttpError(404, 'Model not found', ErrorCode.INTERNAL_ERROR)
    }

    if (!message) {
      throw new HttpError(400, 'No prompt found', ErrorCode.INTERNAL_ERROR)
    }

    // const chat = await getChatById({ id })

    // if (!chat) {
    const enhancedPrompt = await enhancePrompt({
      message,
      modelId: model.modelApiName,
      provider: model.provider
    })
    // }

    return new NextResponse(enhancedPrompt, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8'
      }
    })
  } catch (error) {
    // 捕获所有错误并返回详细信息
    return handleApiError(error)
  }
}
