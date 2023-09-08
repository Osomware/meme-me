import { CreateCommentPostInput } from './create-comment-post.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateCommentPostInput extends PartialType(CreateCommentPostInput) {
  @Field(() => Int)
  id: number
}
