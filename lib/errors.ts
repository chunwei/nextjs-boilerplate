export class HttpError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public data?: any
  ) {
    super(message)
    this.name = 'HttpError'
  }
}

export function handleApiError(error: unknown) {
  console.error('API Error:', error)
  
  if (error instanceof HttpError) {
    return Response.json(
      { error: error.message, data: error.data },
      { status: error.statusCode }
    )
  }

  if (error instanceof Error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    )
  }

  return Response.json(
    { error: 'An unexpected error occurred' },
    { status: 500 }
  )
}
