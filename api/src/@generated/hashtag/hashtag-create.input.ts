import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PostHashtagCreateNestedManyWithoutHashtagInput } from '../post-hashtag/post-hashtag-create-nested-many-without-hashtag.input'

@InputType()
export class HashtagCreateInput {
  @Field(() => String, { nullable: false })
  tag!: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => PostHashtagCreateNestedManyWithoutHashtagInput, { nullable: true })
  postHashtags?: PostHashtagCreateNestedManyWithoutHashtagInput
}
