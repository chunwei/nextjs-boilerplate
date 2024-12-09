'use server'

import { SignupFormSchema, FormState } from '@/lib/zod'
import { createUser /*  getUserByAccount, linkAccount */ } from '@/lib/auth'
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
    const newUser = await createUser(email, passwordHash)

    /*     // 创建并关联账户
    const newAccount = {
      type: 'email',
      provider: 'credentials',
      providerAccountId: email, // 使用 email 作为 providerAccountId
      userId: newUser.id
    }
    // Check if the account exists
    const userByAccount = await getUserByAccount({
      providerAccountId: newAccount.providerAccountId,
      provider: newAccount.provider
    })
    if (userByAccount && userByAccount.id !== newUser.id) {
      // If the user is already signed in with this account, we don't need to do anything.
      // If the user is currently signed in, but the new account they are signing in
      // with is already associated with another user, then we cannot link them
      // and need to return an error.
      return {
        errors: {
          email: ['The account is already associated with another user']
        }
      }
      // throw new Error('The account is already associated with another user')
    } else {
      // If the user is already signed in and the account isn't already associated
      // with another user account then we can go ahead and link the accounts safely.

      await linkAccount(newAccount)
    }
 */
    return { success: true, user: newUser }
  } catch (error) {
    console.error('[SIGNUP_ERROR]', error)
    return {
      message: 'Registration failed, please try again later'
    }
  }
}
