'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-xl font-semibold">出现错误</h2>
      <p className="text-muted-foreground">{error.message}</p>
      <Button onClick={reset} className="mt-4">
        重试
      </Button>
    </div>
  )
} 