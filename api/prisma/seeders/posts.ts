import { faker } from '@faker-js/faker'

export type Post = {
  title: string
  mediaUrls: string[]
  isHideLikeAndCount: boolean
  isTurnOffComment: boolean
}

// * Generate random image URLs with proper return type
const generateRandomImageUrls = (minImages: number, maxImages: number): string[] => {
  const numImages = faker.number.int({ min: minImages, max: maxImages })
  const imageUrls: string[] = Array.from({ length: numImages }, () => faker.image.url())
  return imageUrls
}

export const createRandomPost = (): Post => ({
  title: faker.lorem.sentence().slice(0, 135),
  mediaUrls: generateRandomImageUrls(1, 5),
  isHideLikeAndCount: Math.random() < 0.5,
  isTurnOffComment: Math.random() < 0.5
})

export const newPosts: Post[] = Array.from({ length: 3 }, createRandomPost)
