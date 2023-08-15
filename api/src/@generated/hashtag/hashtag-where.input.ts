import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntFilter } from '../prisma/int-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { PostHashtagListRelationFilter } from '../post-hashtag/post-hashtag-list-relation-filter.input'

@InputType()
export class HashtagWhereInput {
  @Field(() => [HashtagWhereInput], { nullable: true })
  AND?: Array<HashtagWhereInput>

  @Field(() => [HashtagWhereInput], { nullable: true })
  OR?: Array<HashtagWhereInput>

  @Field(() => [HashtagWhereInput], { nullable: true })
  NOT?: Array<HashtagWhereInput>

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter

  @Field(() => StringFilter, { nullable: true })
  tag?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => PostHashtagListRelationFilter, { nullable: true })
  postHashtags?: PostHashtagListRelationFilter
}
