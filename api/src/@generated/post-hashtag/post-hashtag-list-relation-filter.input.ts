import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PostHashtagWhereInput } from './post-hashtag-where.input'

@InputType()
export class PostHashtagListRelationFilter {
  @Field(() => PostHashtagWhereInput, { nullable: true })
  every?: PostHashtagWhereInput

  @Field(() => PostHashtagWhereInput, { nullable: true })
  some?: PostHashtagWhereInput

  @Field(() => PostHashtagWhereInput, { nullable: true })
  none?: PostHashtagWhereInput
}
