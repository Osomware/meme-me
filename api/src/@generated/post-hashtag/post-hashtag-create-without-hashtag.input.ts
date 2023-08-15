import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PostCreateNestedOneWithoutPostHashtagsInput } from '../post/post-create-nested-one-without-post-hashtags.input'

@InputType()
export class PostHashtagCreateWithoutHashtagInput {
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => PostCreateNestedOneWithoutPostHashtagsInput, { nullable: false })
  post!: PostCreateNestedOneWithoutPostHashtagsInput
}
