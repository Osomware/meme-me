import { faker } from '@faker-js/faker'

export type User = {
  name: string
  email: string
  password: string
  username: string
}

export const createRandomUser = (): User => ({
  name: faker.internet.displayName(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const newUsers: User[] = faker.helpers.multiple(createRandomUser, {
  count: 10
})
