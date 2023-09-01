import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MediaFileCountOrderByAggregateInput } from './media-file-count-order-by-aggregate.input';
import { MediaFileAvgOrderByAggregateInput } from './media-file-avg-order-by-aggregate.input';
import { MediaFileMaxOrderByAggregateInput } from './media-file-max-order-by-aggregate.input';
import { MediaFileMinOrderByAggregateInput } from './media-file-min-order-by-aggregate.input';
import { MediaFileSumOrderByAggregateInput } from './media-file-sum-order-by-aggregate.input';

@InputType()
export class MediaFileOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => MediaFileCountOrderByAggregateInput, {nullable:true})
    _count?: MediaFileCountOrderByAggregateInput;

    @Field(() => MediaFileAvgOrderByAggregateInput, {nullable:true})
    _avg?: MediaFileAvgOrderByAggregateInput;

    @Field(() => MediaFileMaxOrderByAggregateInput, {nullable:true})
    _max?: MediaFileMaxOrderByAggregateInput;

    @Field(() => MediaFileMinOrderByAggregateInput, {nullable:true})
    _min?: MediaFileMinOrderByAggregateInput;

    @Field(() => MediaFileSumOrderByAggregateInput, {nullable:true})
    _sum?: MediaFileSumOrderByAggregateInput;
}
