export enum ErrorCode {
  QUOTA_EXCEEDED = 'insufficient_quota',
  RATE_LIMITED = 'rate_limited',
  UNAUTHORIZED = 'unauthorized',
  INTERNAL_ERROR = 'internal_error'
}

export class HttpError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public code?: ErrorCode,
    public data?: unknown
  ) {
    super(message)
    this.name = 'HttpError'
  }
}

// 增强错误响应创建函数
export function createErrorResponse(
  status: number,
  message: string,
  code?: ErrorCode,
  data?: unknown
) {
  return Response.json(
    {
      error: message,
      code,
      data,
      success: false
    },
    { status }
  )
}

export function handleApiError(error: unknown) {
  console.error('API Error:', error)

  if (error instanceof HttpError) {
    return createErrorResponse(
      error.statusCode,
      error.message,
      error.code,
      error.data
    )
  }

  // 处理其他类型的错误
  const statusCode = error instanceof Error ? 500 : 400
  const message = error instanceof Error ? error.message : 'Unknown error'

  return createErrorResponse(statusCode, message)
}
