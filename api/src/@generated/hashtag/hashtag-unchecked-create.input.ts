import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { PostUncheckedCreateNestedManyWithoutHashtagsInput } from '../post/post-unchecked-create-nested-many-without-hashtags.input'

@InputType()
export class HashtagUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => String, { nullable: false })
  tag!: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => PostUncheckedCreateNestedManyWithoutHashtagsInput, { nullable: true })
  posts?: PostUncheckedCreateNestedManyWithoutHashtagsInput
}
