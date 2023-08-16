import { CreatePostHashtagInput } from './create-post-hashtag.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdatePostHashtagInput extends PartialType(CreatePostHashtagInput) {
  @Field(() => Int)
  id: number
}
