import { createErrorResponse } from './errors'

export async function safeDbOperation<T>(
  operation: () => Promise<T>,
  errorMessage: string
): Promise<T | Response> {
  try {
    return await operation()
  } catch (error) {
    console.error(`Database error: ${errorMessage}`, error)
    return createErrorResponse(503, 'Database operation failed', {
      message: errorMessage
    })
  }
}
