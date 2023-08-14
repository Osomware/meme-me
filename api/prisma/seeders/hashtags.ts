import { faker } from '@faker-js/faker'

export type Hashtag = {
  tag: string
}

const numHashtags = 10
const generateRandomHashtags = (): Hashtag[] => {
  return Array.from({ length: numHashtags }, () => ({
    tag: faker.lorem.word() // Use Faker to generate random tag names
  }))
}

export const newHashtags: Hashtag[] = generateRandomHashtags()
