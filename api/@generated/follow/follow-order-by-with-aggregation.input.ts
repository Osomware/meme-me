import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FollowCountOrderByAggregateInput } from './follow-count-order-by-aggregate.input';
import { FollowAvgOrderByAggregateInput } from './follow-avg-order-by-aggregate.input';
import { FollowMaxOrderByAggregateInput } from './follow-max-order-by-aggregate.input';
import { FollowMinOrderByAggregateInput } from './follow-min-order-by-aggregate.input';
import { FollowSumOrderByAggregateInput } from './follow-sum-order-by-aggregate.input';

@InputType()
export class FollowOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    followerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    followingId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => FollowCountOrderByAggregateInput, {nullable:true})
    _count?: FollowCountOrderByAggregateInput;

    @Field(() => FollowAvgOrderByAggregateInput, {nullable:true})
    _avg?: FollowAvgOrderByAggregateInput;

    @Field(() => FollowMaxOrderByAggregateInput, {nullable:true})
    _max?: FollowMaxOrderByAggregateInput;

    @Field(() => FollowMinOrderByAggregateInput, {nullable:true})
    _min?: FollowMinOrderByAggregateInput;

    @Field(() => FollowSumOrderByAggregateInput, {nullable:true})
    _sum?: FollowSumOrderByAggregateInput;
}
