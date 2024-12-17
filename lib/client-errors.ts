import { toast } from 'sonner'
import { ErrorCode } from './errors'

export async function handleClientAPIError(response: Response) {
  const error = await response.json()

  switch (error.code) {
    case ErrorCode.QUOTA_EXCEEDED:
      toast.error('API配额已用完,请稍后重试')
      break
    case ErrorCode.RATE_LIMITED:
      toast.error('请求过于频繁,请稍后重试')
      break
    case ErrorCode.UNAUTHORIZED:
      toast.error('未授权访问,请重新登录')
      break
    default:
      toast.error(error.error || '请求失败,请重试')
  }
}
