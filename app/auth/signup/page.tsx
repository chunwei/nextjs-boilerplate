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
import { useSearchParams } from 'next/navigation'
import { useState, useEffect, useCallback, useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Eye, EyeOff, Check, X } from 'lucide-react'
import { signup } from '@/app/actions/auth'
import { useDebounce } from '@/hooks/useDebounce'
import { SignupFormSchema } from '@/lib/zod'
import Link from 'next/link'

export default function SignUp() {
  const searchParams = useSearchParams()
  const redirectedFrom = searchParams.get('redirectedFrom')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const confirmPasswordRef = useRef<HTMLInputElement>(null)
  const [errors, setErrors] = useState<{
    email?: string[]
    password?: string[]
    confirmPassword?: string[]
  }>({})
  const [message, setMessage] = useState('')

  const [passwordRules] = useState([
    {
      id: 'length',
      text: 'Be at least 8 characters long',
      validator: (password: string) => password.length >= 8
    },
    {
      id: 'uppercase',
      text: 'Contain at least one uppercase letter',
      validator: (password: string) => /[A-Z]/.test(password)
    },
    {
      id: 'lowercase',
      text: 'Contain at least one lowercase letter',
      validator: (password: string) => /[a-z]/.test(password)
    },
    {
      id: 'number',
      text: 'Contain at least one number',
      validator: (password: string) => /[0-9]/.test(password)
    },
    {
      id: 'special',
      text: 'Contain at least one special character',
      validator: (password: string) => /[^a-zA-Z0-9]/.test(password)
    }
  ])

  const debouncedPassword = useDebounce(password, 300)
  const debouncedConfirmPassword = useDebounce(confirmPassword, 300)

  const validateForm = useCallback(() => {
    if (!debouncedPassword) return
    const result = SignupFormSchema.safeParse({
      email,
      password: debouncedPassword
    })
    if (!result.success) {
      const formattedErrors = result.error.format()
      setErrors({
        email: formattedErrors.email?._errors,
        password: formattedErrors.password?._errors
      })
    } else {
      setErrors({})
    }
    return result
  }, [debouncedPassword, email])

  useEffect(() => {
    const notMatch =
      debouncedConfirmPassword && debouncedPassword !== debouncedConfirmPassword
    setErrors({
      confirmPassword: notMatch ? ['Passwords do not match'] : []
    })
  }, [debouncedConfirmPassword, debouncedPassword])

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setMessage('')

    const validatedFields = validateForm()
    if (!validatedFields?.success) {
      // 获取第一个错误信息
      const firstError = validatedFields?.error.errors[0]
      const errorField = firstError?.path[0]

      // 根据错误字段设置焦点
      if (errorField === 'email' && emailRef.current) {
        emailRef.current.focus()
      } else if (errorField === 'password' && passwordRef.current) {
        passwordRef.current.focus()
      }
      return
    }
    if (password !== confirmPassword) {
      setErrors({
        confirmPassword: ['Passwords do not match']
      })
      if (confirmPasswordRef.current) {
        confirmPasswordRef.current.focus()
      }
      return
    }

    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    const result = await signup(undefined, formData)

    if (result?.errors) {
      setErrors(result.errors)
      return
    }

    if (result?.message) {
      setMessage(result.message)
      return
    }
    // 注册成功后自动登录
    await signIn('credentials', {
      email,
      password,
      callbackUrl: redirectedFrom || '/dashboard'
    })
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Create a new account</CardDescription>
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
              {debouncedPassword && (
                <div className="mt-2 space-y-2">
                  {passwordRules.map(({ id, text, validator }) => {
                    const isValid = validator(debouncedPassword)
                    return (
                      <div key={id} className="flex items-center gap-2 text-sm">
                        {isValid ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <X className="h-4 w-4 text-red-500" />
                        )}
                        <span
                          className={
                            isValid ? 'text-green-500' : 'text-red-500'
                          }
                        >
                          {text}
                        </span>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  ref={confirmPasswordRef}
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <Eye className="h-4 w-4" />
                  ) : (
                    <EyeOff className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {errors.confirmPassword && (
                <>
                  {errors.confirmPassword.map((error, idx) => (
                    <p key={idx} className="text-sm text-destructive">
                      {error}
                    </p>
                  ))}
                </>
              )}
            </div>

            <Button type="submit" className="w-full">
              Sign Up with Email
            </Button>
            {message && (
              <p className="text-sm text-destructive text-center">{message}</p>
            )}
          </form>
          <div className="font-normal text-sm text-center">
            <span>Already have an account?</span>
            <Link href={'/auth/signin'} className="ml-2 font-semibold">
              Sign In
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
            Continue with Google
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              signIn('github', {
                callbackUrl: redirectedFrom || '/dashboard'
              })
            }
          >
            Continue with Github
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
