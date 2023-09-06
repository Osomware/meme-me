import { CreateLikePostInput } from './create-like-post.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLikePostInput extends PartialType(CreateLikePostInput) {
  @Field(() => Int)
  id: number;
}
