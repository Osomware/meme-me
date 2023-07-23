import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class NewTokensResonse {
  @Field()
  accessToken: string

  @Field()
  refreshToken: string
}
