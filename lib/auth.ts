import { db } from '@/lib/db'

export async function getUserFromDb(email: string,) {
  return await db.user.findFirst({
    where: {
      email
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      password: true
    }
  })
}

export async function createUser(email: string, passwordHash: string) {
  return await db.user.create({
    data: {
      email,
      password: passwordHash
    },
    select: {
      id: true,
      email: true
    }
  })
} 