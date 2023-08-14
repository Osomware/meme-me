import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { SortOrderInput } from '../prisma/sort-order.input'
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input'
import { HashtagOrderByRelationAggregateInput } from '../hashtag/hashtag-order-by-relation-aggregate.input'

@InputType()
export class PostOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder

  @Field(() => SortOrderInput, { nullable: true })
  title?: SortOrderInput

  @Field(() => SortOrder, { nullable: true })
  mediaUrls?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  isHideLikeAndCount?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  isTurnOffComment?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: UserOrderByWithRelationInput

  @Field(() => HashtagOrderByRelationAggregateInput, { nullable: true })
  hashtags?: HashtagOrderByRelationAggregateInput
}
