import { UseGuards } from '@nestjs/common'
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'

import { User } from '~/user/user.entity'
import { AuthService } from './auth.service'
import { Auth } from './entities/auth.entity'
import { SignInInput } from './dto/signin-input'
import { SignResponse } from './dto/sign-response'
import { LogoutResponse } from './dto/logout-response'
import { Public } from './decorators/public.decorator'
import { LogoutReturnType, SignReturnType } from './types'
import { NewTokensResonse } from './dto/new-tokens-reponse'
import { RefreshTokenGuard } from './guards/refreshToken.guard'
import { CurrentUser } from './decorators/currentUser.decorator'
import { CurrentUserId } from './decorators/currentUserId.decotrator'
import { UserCreateInput } from '@generated/user/user-create.input'
import { FindFirstUserOrThrowArgs } from '@generated/user/find-first-user-or-throw.args'

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Mutation(() => SignResponse, { name: 'signup' })
  signup(@Args('signupInput') signupInput: UserCreateInput): SignReturnType {
    return this.authService.signup(signupInput)
  }

  @Public()
  @Mutation(() => SignResponse, { name: 'signin' })
  signin(@Args('signInInput') signInInput: SignInInput): SignReturnType {
    return this.authService.signin(signInInput)
  }

  @Mutation(() => LogoutResponse, { name: 'logout' })
  logout(@Args('id', { type: () => Int }) id: number): LogoutReturnType {
    return this.authService.logout(id)
  }

  @Query(() => User, { name: 'findOneUser' })
  findOne(@Args() args: FindFirstUserOrThrowArgs): Promise<User> {
    return this.authService.findOne(args)
  }

  @Public()
  @UseGuards(RefreshTokenGuard)
  @Mutation(() => NewTokensResonse, { name: 'getNewTokens' })
  getNewTokens(
    @CurrentUserId() userId: number,
    @CurrentUser('refreshToken') refreshToken: string
  ): SignReturnType {
    return this.authService.getNewTokens(userId, refreshToken)
  }
}
