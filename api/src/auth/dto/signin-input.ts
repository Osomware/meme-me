import { InputType, PickType } from '@nestjs/graphql'

import { SignUpInput } from './signup-input'

@InputType()
export class SignInInput extends PickType(SignUpInput, ['email', 'password'] as const) {}
