import { Prisma, User } from '@prisma/client'
import { GetResult } from '@prisma/client/runtime/library'

export type Token = {
  accessToken: string
  refreshToken: string
}

export type UserToken = {
  user: GetResult<User, never>
} & Token

export type SignUpReturnType = Promise<Prisma.Prisma__UserClient<UserToken, never>>
