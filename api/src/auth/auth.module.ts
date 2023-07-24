import { Module } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { AuthService } from './auth.service'
import { AuthResolver } from './auth.resolver'
import { PrismaService } from '~/prisma/prisma.service'
import { AccessTokenStrategy } from './strategies/accessToken.strategy'
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy'

@Module({
  providers: [
    AuthResolver,
    AuthService,
    JwtService,
    PrismaService,
    AccessTokenStrategy,
    RefreshTokenStrategy
  ]
})
export class AuthModule {}
