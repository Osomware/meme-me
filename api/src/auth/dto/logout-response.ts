import { IsBoolean } from 'class-validator'
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class LogoutResponse {
  @IsBoolean()
  @Field()
  loggedOut: boolean
}
