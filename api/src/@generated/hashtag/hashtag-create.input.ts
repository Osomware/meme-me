import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PostCreateNestedManyWithoutHashtagsInput } from '../post/post-create-nested-many-without-hashtags.input'

@InputType()
export class HashtagCreateInput {
  @Field(() => String, { nullable: false })
  tag!: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => PostCreateNestedManyWithoutHashtagsInput, { nullable: true })
  posts?: PostCreateNestedManyWithoutHashtagsInput
}
