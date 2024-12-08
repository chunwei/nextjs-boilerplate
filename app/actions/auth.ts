'use server'

import { SignupFormSchema, FormState } from '@/lib/zod'
import { createUser } from '@/lib/auth'
import bcrypt from 'bcrypt'
import { db } from '@/lib/db'

export async function signup(state: FormState, formData: FormData) {
  try {
    // 验证表单字段
    const validatedFields = SignupFormSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password')
    })

    // 如果验证失败，返回错误信息
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors
      }
    }

    const { email, password } = validatedFields.data

    // 检查邮箱是否已存在
    const existingUser = await db.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return {
        errors: {
          email: ['This email has already been registered']
        }
      }
    }

    // 加密密码
    const passwordHash = await bcrypt.hash(password, 12)

    // 创建用户
    await createUser(email, passwordHash)

    return { success: true }
  } catch (error) {
    console.error('[SIGNUP_ERROR]', error)
    return {
      message: 'Registration failed, please try again later'
    }
  }
}
