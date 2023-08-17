import { InputType, PickType } from '@nestjs/graphql'

import { UserCreateInput } from '@generated/user/user-create.input'

@InputType()
export class SignInInput extends PickType(UserCreateInput, ['email', 'password'] as const) {}
