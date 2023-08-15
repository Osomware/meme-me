import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HashtagCreateNestedOneWithoutPostHashtagsInput } from '../hashtag/hashtag-create-nested-one-without-post-hashtags.input'

@InputType()
export class PostHashtagCreateWithoutPostInput {
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => HashtagCreateNestedOneWithoutPostHashtagsInput, { nullable: false })
  hashtag!: HashtagCreateNestedOneWithoutPostHashtagsInput
}
