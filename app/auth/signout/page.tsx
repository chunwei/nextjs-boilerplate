'use client'

import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function SignOut() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>登出</CardTitle>
          <CardDescription>
            确认要退出登录吗？
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="w-full"
          >
            确认登出
          </Button>
        </CardContent>
      </Card>
    </div>
  )
} 