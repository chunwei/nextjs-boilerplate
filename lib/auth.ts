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
      password: passwordHash,
      emailVerified: new Date()
    },
    select: {
      id: true,
      email: true
    }
  })
} 

export async function linkAccount(data: {
  type: string
  provider: string
  providerAccountId: string
  userId: string
}) {
  return await db.account.create({ data })
}

export async function getUserByAccount(provider_providerAccountId: {
  provider: string
  providerAccountId: string
}) {
  const account = await db.account.findUnique({
    where: { provider_providerAccountId },
    select: { user: true }
  })
  return account?.user ?? null
}