import { z } from 'zod'

export const SignupFormSchema = z.object({
  //   name: z
  //     .string()
  //     .min(2, { message: 'Name must be at least 2 characters long.' })
  //     .trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[A-Z]/, { message: 'Contain at least one uppercase letter.' })
    .regex(/[a-z]/, { message: 'Contain at least one lowercase letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.'
    })
    .trim()
})

export const SignInSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email')
    .trim(),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters')
    .trim()
})

export type FormState =
  | {
      errors?: {
        // name?: string[]
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined
