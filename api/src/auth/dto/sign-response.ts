import { Field, ObjectType } from '@nestjs/graphql'
import { IsNotEmpty, IsString } from 'class-validator'

import { User } from '~/user/user.entity'

@ObjectType()
export class SignResponse {
  @IsNotEmpty()
  @IsString()
  @Field()
  accessToken: string

  @Field()
  refreshToken: string

  @Field(() => User)
  user: User
}
