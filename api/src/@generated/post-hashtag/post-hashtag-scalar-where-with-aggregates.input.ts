import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class PostHashtagScalarWhereWithAggregatesInput {
  @Field(() => [PostHashtagScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<PostHashtagScalarWhereWithAggregatesInput>

  @Field(() => [PostHashtagScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<PostHashtagScalarWhereWithAggregatesInput>

  @Field(() => [PostHashtagScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<PostHashtagScalarWhereWithAggregatesInput>

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  postId?: IntWithAggregatesFilter

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  hashtagId?: IntWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter
}
