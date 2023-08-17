import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PostHashtagOrderByRelationAggregateInput } from '../post-hashtag/post-hashtag-order-by-relation-aggregate.input';

@InputType()
export class HashtagOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tag?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PostHashtagOrderByRelationAggregateInput, {nullable:true})
    postHashtags?: PostHashtagOrderByRelationAggregateInput;
}
