import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HashtagWhereInput } from './hashtag-where.input'

@InputType()
export class HashtagRelationFilter {
  @Field(() => HashtagWhereInput, { nullable: true })
  is?: HashtagWhereInput

  @Field(() => HashtagWhereInput, { nullable: true })
  isNot?: HashtagWhereInput
}
