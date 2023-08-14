import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { HashtagWhereInput } from './hashtag-where.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { PostListRelationFilter } from '../post/post-list-relation-filter.input'

@InputType()
export class HashtagWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => String, { nullable: true })
  tag?: string

  @Field(() => [HashtagWhereInput], { nullable: true })
  AND?: Array<HashtagWhereInput>

  @Field(() => [HashtagWhereInput], { nullable: true })
  OR?: Array<HashtagWhereInput>

  @Field(() => [HashtagWhereInput], { nullable: true })
  NOT?: Array<HashtagWhereInput>

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => PostListRelationFilter, { nullable: true })
  posts?: PostListRelationFilter
}
