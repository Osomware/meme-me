import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'

import { LogoutReturnType, SignUpReturnType } from './types'
import { AuthService } from './auth.service'
import { Auth } from './entities/auth.entity'
import { SignUpInput } from './dto/signup-input'
import { SignInInput } from './dto/signin-input'
import { SignResponse } from './dto/sign-response'
import { LogoutResponse } from './dto/logout-response'
import { UpdateAuthInput } from './dto/update-auth.input'

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => SignResponse)
  signup(@Args('signupInput') signupInput: SignUpInput): SignUpReturnType {
    return this.authService.signup(signupInput)
  }

  @Mutation(() => SignResponse)
  signin(@Args('signInInput') signInInput: SignInInput): SignUpReturnType {
    return this.authService.signin(signInInput)
  }

  @Mutation(() => LogoutResponse)
  logout(@Args('id', { type: () => Int }) id: number): LogoutReturnType {
    return this.authService.logout(id)
  }

  @Query(() => Auth, { name: 'auth' })
  findOne(@Args('id', { type: () => Int }) id: number): string {
    return this.authService.findOne(id)
  }

  @Mutation(() => Auth)
  updateAuth(@Args('updateAuthInput') updateAuthInput: UpdateAuthInput): string {
    return this.authService.update(updateAuthInput.id)
  }
}
