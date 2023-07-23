import * as argon from 'argon2'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { ForbiddenException, Injectable } from '@nestjs/common'

import { User } from '~/user/user.entity'
import { SignUpInput } from './dto/signup-input'
import { SignInInput } from './dto/signin-input'
import { PrismaService } from '~/prisma/prisma.service'
import { LogoutReturnType, SignReturnType, Token } from './types'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService
  ) {}

  async signup(signupInput: SignUpInput): SignReturnType {
    const hashedPassword = await argon.hash(signupInput.password)
    const user = await this.prisma.user.create({
      data: {
        name: signupInput.name,
        username: signupInput.username,
        email: signupInput.email,
        password: hashedPassword
      }
    })
    const { accessToken, refreshToken } = await this.createToken(user.id, user.email)
    await this.updateRefreshToken(user.id, refreshToken)

    return { accessToken, refreshToken, user }
  }

  async signin(signInInput: SignInInput): SignReturnType {
    const user = await this.prisma.user.findUnique({ where: { email: signInInput.email } })

    if (!user) {
      throw new ForbiddenException('Email does not exist.')
    }

    const doPasswordMatch = await argon.verify(user.password, signInInput.password)

    if (!doPasswordMatch) {
      throw new ForbiddenException('Invalid password')
    }

    const { accessToken, refreshToken } = await this.createToken(user.id, user.email)
    await this.updateRefreshToken(user.id, refreshToken)

    return {
      accessToken,
      refreshToken,
      user
    }
  }

  async createToken(userId: number, email: string): Promise<Token> {
    const accessToken = this.jwtService.sign(
      {
        userId,
        email
      },
      {
        expiresIn: '1h',
        secret: this.configService.get('ACCESS_TOKEN_SECRET')
      }
    )
    const refreshToken = this.jwtService.sign(
      {
        userId,
        email,
        accessToken
      },
      {
        expiresIn: '7d',
        secret: this.configService.get('REFRESH_TOKEN_SECRET')
      }
    )

    return {
      accessToken,
      refreshToken
    }
  }

  async updateRefreshToken(userId: number, refreshToken: string): Promise<void> {
    const hashedRefreshToken = await argon.hash(refreshToken)
    await this.prisma.user.update({
      where: {
        id: userId
      },
      data: {
        refreshToken: hashedRefreshToken
      }
    })
  }

  async logout(userId: number): LogoutReturnType {
    await this.prisma.user.updateMany({
      where: { id: userId, refreshToken: { not: null } },
      data: {
        refreshToken: null
      }
    })
    return {
      loggedOut: true
    }
  }

  async findOne(id: number): Promise<User> {
    return await this.prisma.user.findUnique({
      where: { id }
    })
  }

  async getNewTokens(userId: number, rt: string): SignReturnType {
    const user = await this.prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      throw new ForbiddenException('Access Denied')
    }

    const doRefreshTokensMatch = await argon.verify(user.refreshToken, rt)

    if (!doRefreshTokensMatch) {
      throw new ForbiddenException('Access Denied')
    }

    const { accessToken, refreshToken } = await this.createToken(user.id, user.email)
    await this.updateRefreshToken(user.id, refreshToken)

    return {
      accessToken,
      refreshToken,
      user
    }
  }
}