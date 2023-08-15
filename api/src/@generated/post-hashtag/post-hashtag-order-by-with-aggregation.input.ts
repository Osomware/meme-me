import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { PostHashtagCountOrderByAggregateInput } from './post-hashtag-count-order-by-aggregate.input'
import { PostHashtagAvgOrderByAggregateInput } from './post-hashtag-avg-order-by-aggregate.input'
import { PostHashtagMaxOrderByAggregateInput } from './post-hashtag-max-order-by-aggregate.input'
import { PostHashtagMinOrderByAggregateInput } from './post-hashtag-min-order-by-aggregate.input'
import { PostHashtagSumOrderByAggregateInput } from './post-hashtag-sum-order-by-aggregate.input'

@InputType()
export class PostHashtagOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  postId?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  hashtagId?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => PostHashtagCountOrderByAggregateInput, { nullable: true })
  _count?: PostHashtagCountOrderByAggregateInput

  @Field(() => PostHashtagAvgOrderByAggregateInput, { nullable: true })
  _avg?: PostHashtagAvgOrderByAggregateInput

  @Field(() => PostHashtagMaxOrderByAggregateInput, { nullable: true })
  _max?: PostHashtagMaxOrderByAggregateInput

  @Field(() => PostHashtagMinOrderByAggregateInput, { nullable: true })
  _min?: PostHashtagMinOrderByAggregateInput

  @Field(() => PostHashtagSumOrderByAggregateInput, { nullable: true })
  _sum?: PostHashtagSumOrderByAggregateInput
}
