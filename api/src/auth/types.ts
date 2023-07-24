import { Prisma, User } from '@prisma/client'
import { GetResult } from '@prisma/client/runtime/library'

export type Token = {
  accessToken: string
  refreshToken: string
}

export type UserToken = {
  user: GetResult<User, never>
} & Token

export type SignReturnType = Promise<Prisma.Prisma__UserClient<UserToken, never>>

export type LogoutReturnType = Promise<{ loggedOut: boolean }>

export type JwtPayload = {
  userId: number
  email: string
}

export type JwtPayloadWithRefreshToken = JwtPayload & {
  refreshToken: string
}
