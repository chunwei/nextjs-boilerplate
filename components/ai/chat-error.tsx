import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { ErrorCode } from '@/lib/errors'
interface ChatErrorProps {
  error: Error & { code?: ErrorCode }
  reload: () => void
}

export default function ChatError({ error }: ChatErrorProps) {
  const errorMessages = {
    [ErrorCode.QUOTA_EXCEEDED]: 'API配额已用完，请稍后再试',
    [ErrorCode.RATE_LIMITED]: '请求过于频繁，请稍后再试',
    [ErrorCode.UNAUTHORIZED]: '未授权访问，请重新登录',
    [ErrorCode.INTERNAL_ERROR]: '服务器错误，请稍后重试'
  }

  const message = error.code ? errorMessages[error.code] : error.message

  console.log('error', error)

  return (
    <Accordion
      type="single"
      collapsible
      className="text-sm text-destructive my-3 px-3 rounded-lg border border-destructive/50"
    >
      <AccordionItem className="border-none" value="item-1">
        <AccordionTrigger className="py-2 hover:no-underline">
          An error occurred.
        </AccordionTrigger>
        <AccordionContent className="pb-2 text-destructive/80">
          {message}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
