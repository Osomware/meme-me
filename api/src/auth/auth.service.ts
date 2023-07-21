import * as argon from 'argon2'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { ForbiddenException, Injectable } from '@nestjs/common'

import { SignUpInput } from './dto/signup-input'
import { SignInInput } from './dto/signin-input'
import { PrismaService } from '~/prisma/prisma.service'
import { LogoutReturnType, SignUpReturnType, Token } from './types'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService
  ) {}

  async signup(signupInput: SignUpInput): SignUpReturnType {
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

  async signin(signInInput: SignInInput): SignUpReturnType {
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

  findOne(id: number): string {
    return `This action returns a #${id} auth`
  }

  update(id: number): string {
    return `This action updates a #${id} auth`
  }

  async createToken(userId: number, email: string): Promise<Token> {
    const accessToken = this.jwtService.sign(
      {
        userId,
        email
      },
      {
        expiresIn: '10s',
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
}
