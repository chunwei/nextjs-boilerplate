'use client'

import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>认证错误</CardTitle>
          <CardDescription>
            登录过程中出现错误
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-destructive">{error}</p>
        </CardContent>
      </Card>
    </div>
  )
} 