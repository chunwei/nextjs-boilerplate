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

// 新增指令类型
export interface ChatRequest {
  id: string
  messages: Message[]
  modelId: string
  instruction?: string // 新增字段
}
