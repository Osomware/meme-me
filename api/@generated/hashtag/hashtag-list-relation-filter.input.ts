import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HashtagWhereInput } from './hashtag-where.input'

@InputType()
export class HashtagListRelationFilter {
  @Field(() => HashtagWhereInput, { nullable: true })
  every?: HashtagWhereInput

  @Field(() => HashtagWhereInput, { nullable: true })
  some?: HashtagWhereInput

  @Field(() => HashtagWhereInput, { nullable: true })
  none?: HashtagWhereInput
}
