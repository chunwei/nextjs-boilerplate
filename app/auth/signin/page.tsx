'use client'

import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Eye, EyeOff } from 'lucide-react'

import Link from 'next/link'


export default function SignIn() {
  const searchParams = useSearchParams()
  const redirectedFrom = searchParams.get('redirectedFrom')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const [errors, setErrors] = useState<{
    email?: string[]
    password?: string[]
    confirmPassword?: string[]
  }>({})
  const [message, setMessage] = useState('')

  const router = useRouter()


  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setMessage('')
    // 直接登录
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (result?.error) {
      setMessage('Invalid credentials')
      return
    }

    router.push(redirectedFrom || '/dashboard')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Welcome back</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                ref={emailRef}
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && (
                <>
                  {errors.email.map((error, idx) => (
                    <p key={idx} className="text-sm text-destructive">
                      {error}
                    </p>
                  ))}
                </>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  ref={passwordRef}
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eye className="h-4 w-4" />
                  ) : (
                    <EyeOff className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Sign In with Email
            </Button>
            {message && (
              <p className="text-sm text-destructive text-center">{message}</p>
            )}
          </form>
          <div className="font-normal text-sm text-center">
            <span>{`Don't have an account?`}</span>
            <Link href={'/auth/signup'} className="ml-2 font-semibold">
              Sign Up
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            onClick={() =>
              signIn('google', {
                callbackUrl: redirectedFrom || '/dashboard'
              })
            }
          >
            Sign In with Google
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              signIn('github', {
                callbackUrl: redirectedFrom || '/dashboard'
              })
            }
          >
            Sign In with Github
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
