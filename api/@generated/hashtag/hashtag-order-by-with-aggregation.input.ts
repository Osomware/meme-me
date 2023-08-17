import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HashtagCountOrderByAggregateInput } from './hashtag-count-order-by-aggregate.input';
import { HashtagAvgOrderByAggregateInput } from './hashtag-avg-order-by-aggregate.input';
import { HashtagMaxOrderByAggregateInput } from './hashtag-max-order-by-aggregate.input';
import { HashtagMinOrderByAggregateInput } from './hashtag-min-order-by-aggregate.input';
import { HashtagSumOrderByAggregateInput } from './hashtag-sum-order-by-aggregate.input';

@InputType()
export class HashtagOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tag?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => HashtagCountOrderByAggregateInput, {nullable:true})
    _count?: HashtagCountOrderByAggregateInput;

    @Field(() => HashtagAvgOrderByAggregateInput, {nullable:true})
    _avg?: HashtagAvgOrderByAggregateInput;

    @Field(() => HashtagMaxOrderByAggregateInput, {nullable:true})
    _max?: HashtagMaxOrderByAggregateInput;

    @Field(() => HashtagMinOrderByAggregateInput, {nullable:true})
    _min?: HashtagMinOrderByAggregateInput;

    @Field(() => HashtagSumOrderByAggregateInput, {nullable:true})
    _sum?: HashtagSumOrderByAggregateInput;
}
