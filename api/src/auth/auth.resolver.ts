import { UseGuards } from '@nestjs/common'
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'

import { User } from '~/user/user.entity'
import { AuthService } from './auth.service'
import { Auth } from './entities/auth.entity'
import { SignUpInput } from './dto/signup-input'
import { SignInInput } from './dto/signin-input'
import { SignResponse } from './dto/sign-response'
import { LogoutResponse } from './dto/logout-response'
import { Public } from './decorators/public.decorator'
import { LogoutReturnType, SignReturnType } from './types'
import { NewTokensResonse } from './dto/new-tokens-reponse'
import { RefreshTokenGuard } from './guards/refreshToken.guard'
import { CurrentUser } from './decorators/currentUser.decorator'
import { CurrentUserId } from './decorators/currentUserId.decotrator'

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Mutation(() => SignResponse)
  signup(@Args('signupInput') signupInput: SignUpInput): SignReturnType {
    return this.authService.signup(signupInput)
  }

  @Public()
  @Mutation(() => SignResponse)
  signin(@Args('signInInput') signInInput: SignInInput): SignReturnType {
    return this.authService.signin(signInInput)
  }

  @Mutation(() => LogoutResponse)
  logout(@Args('id', { type: () => Int }) id: number): LogoutReturnType {
    return this.authService.logout(id)
  }

  @Query(() => User)
  findOne(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.authService.findOne(id)
  }

  @Public()
  @UseGuards(RefreshTokenGuard)
  @Mutation(() => NewTokensResonse)
  getNewTokens(
    @CurrentUserId() userId: number,
    @CurrentUser('refreshToken') refreshToken: string
  ): SignReturnType {
    return this.authService.getNewTokens(userId, refreshToken)
  }
}
