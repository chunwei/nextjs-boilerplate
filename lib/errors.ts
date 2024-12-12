export class HttpError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public data?: unknown
  ) {
    super(message)
    this.name = 'HttpError'
  }
}

// 新增: API 响应错误处理函数
export function createErrorResponse(
  status: number,
  message: string,
  data?: unknown
) {
  return Response.json(
    {
      error: message,
      data,
      success: false
    },
    { status }
  )
}

export function handleApiError(error: unknown) {
  console.error('API Error:', error)

  if (error instanceof HttpError) {
    return createErrorResponse(error.statusCode, error.message, error.data)
  }

  // 处理其他类型的错误
  const statusCode = error instanceof Error ? 500 : 400
  const message = error instanceof Error ? error.message : 'Unknown error'

  return createErrorResponse(statusCode, message)
}
