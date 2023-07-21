import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'

import { SignUpReturnType } from './types'
import { AuthService } from './auth.service'
import { Auth } from './entities/auth.entity'
import { SignUpInput } from './dto/signup-input'
import { SignResponse } from './dto/sign-response'
import { UpdateAuthInput } from './dto/update-auth.input'

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => SignResponse)
  signup(@Args('signupInput') signupInput: SignUpInput): SignUpReturnType {
    return this.authService.signup(signupInput)
  }

  @Query(() => [Auth], { name: 'auth' })
  findAll(): string {
    return this.authService.findAll()
  }

  @Query(() => Auth, { name: 'auth' })
  findOne(@Args('id', { type: () => Int }) id: number): string {
    return this.authService.findOne(id)
  }

  @Mutation(() => Auth)
  updateAuth(@Args('updateAuthInput') updateAuthInput: UpdateAuthInput): string {
    return this.authService.update(updateAuthInput.id)
  }

  @Mutation(() => Auth)
  removeAuth(@Args('id', { type: () => Int }) id: number): string {
    return this.authService.remove(id)
  }
}
