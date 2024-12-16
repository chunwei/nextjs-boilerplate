export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: number
}

export interface ApplicationError extends Error {
  info: string
  status: number
}
