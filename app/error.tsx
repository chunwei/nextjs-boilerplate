'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // 可以在这里集成错误监控服务，如 Sentry
    console.error('全局错误:', error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>发生错误</CardTitle>
          <CardDescription>抱歉，处理您的请求时出现了问题</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {error.message || '未知错误'}
          </p>
          <Button onClick={reset} className="w-full">
            重试
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
