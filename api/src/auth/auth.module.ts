import { Module } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { AuthService } from './auth.service'
import { AuthResolver } from './auth.resolver'
import { PrismaService } from '~/prisma/prisma.service'

@Module({
  providers: [AuthResolver, AuthService, JwtService, PrismaService]
})
export class AuthModule {}
