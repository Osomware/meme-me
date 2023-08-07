import { PrismaClient } from '@prisma/client'

import { newUsers, User } from './users'
import { newPosts, Post } from './posts'

const prisma = new PrismaClient()

const seed = async (): Promise<void> => {
  await Promise.all(
    newUsers.map(async (user: User) => {
      await prisma.user.create({
        data: {
          ...user,
          posts: {
            createMany: {
              data: newPosts.map((post: Post) => ({
                ...post
              }))
            }
          }
        },
        include: {
          posts: true
        }
      })
    })
  )
}

;(async () => {
  await seed()
  console.info('Success: Created New Seeder')
  await prisma.$disconnect()
})().catch(async (e) => {
  console.error('Error in IIFE:', e)
  await prisma.$disconnect()
  process.exit(1)
})
