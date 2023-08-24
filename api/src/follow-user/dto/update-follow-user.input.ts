import { CreateFollowUserInput } from './create-follow-user.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateFollowUserInput extends PartialType(CreateFollowUserInput) {
  @Field(() => Int)
  id: number
}
