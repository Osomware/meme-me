import { ArgsType, Field } from '@nestjs/graphql'

@ArgsType()
export class CountUsernameInput {
  @Field(() => String, { nullable: true })
  username: string
}
