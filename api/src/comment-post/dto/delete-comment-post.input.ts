import { InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class DeleteCommentPostInput {
  @Field(() => Int)
  id: number
}
