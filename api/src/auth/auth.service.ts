import * as argon from 'argon2'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { ConflictException, ForbiddenException, Injectable } from '@nestjs/common'

import { User } from '~/user/user.entity'
import { SignInInput } from './dto/signin-input'
import { PrismaService } from '~/prisma/prisma.service'
import { LogoutReturnType, SignReturnType, Token } from './types'
import { UserCreateInput } from '~/@generated/user/user-create.input'
import { FindFirstUserArgs } from '~/@generated/user/find-first-user.args'

type FieldValues = 'email' | 'username'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService
  ) {}

  // This will check if the field had a unique value in the database
  async isFieldUnique(fieldName: FieldValues, value: string): Promise<boolean> {
    const where: any = {}
    where[fieldName] = value
    const fieldExists = await this.prisma.user.findUnique({
      where,
      select: {
        id: true
      }
    })
    return !fieldExists
  }

  async signup(signupInput: UserCreateInput): SignReturnType {
    const isEmailUnique = await this.isFieldUnique('email', signupInput.email)
    const isUsernameUnique = await this.isFieldUnique('username', signupInput.username)

    if (!isEmailUnique) {
      throw new ConflictException('The provided email address is already registerd.')
    }

    if (!isUsernameUnique) {
      throw new ConflictException('The provided username is already taken.')
    }

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

  async findOneUser(args: FindFirstUserArgs): Promise<User> {
    const user = await this.prisma.user.findFirst(args)

    if (!user) {
      throw new ForbiddenException('User does not exist')
    }

    return user
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
