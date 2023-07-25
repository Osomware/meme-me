import { PrismaClient } from '@prisma/client'

import { newUsers } from './users'

const prisma = new PrismaClient()

const seed = async (): Promise<void> => {
  await prisma.user.createMany({
    data: newUsers
  })
}

;(async () => {
  await seed()
  console.info('Success: Created New Seeder')
})().catch((error) => {
  console.error('Error in IIFE:', error)
})
