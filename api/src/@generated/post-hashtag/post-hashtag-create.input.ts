import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PostCreateNestedOneWithoutPostHashtagsInput } from '../post/post-create-nested-one-without-post-hashtags.input'
import { HashtagCreateNestedOneWithoutPostHashtagsInput } from '../hashtag/hashtag-create-nested-one-without-post-hashtags.input'

@InputType()
export class PostHashtagCreateInput {
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => PostCreateNestedOneWithoutPostHashtagsInput, { nullable: false })
  post!: PostCreateNestedOneWithoutPostHashtagsInput

  @Field(() => HashtagCreateNestedOneWithoutPostHashtagsInput, { nullable: false })
  hashtag!: HashtagCreateNestedOneWithoutPostHashtagsInput
}
