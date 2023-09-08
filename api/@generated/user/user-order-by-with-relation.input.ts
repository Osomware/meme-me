import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PostOrderByRelationAggregateInput } from '../post/post-order-by-relation-aggregate.input';
import { LikeOrderByRelationAggregateInput } from '../like/like-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { FollowOrderByRelationAggregateInput } from '../follow/follow-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    refreshToken?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PostOrderByRelationAggregateInput, {nullable:true})
    posts?: PostOrderByRelationAggregateInput;

    @Field(() => LikeOrderByRelationAggregateInput, {nullable:true})
    likes?: LikeOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => FollowOrderByRelationAggregateInput, {nullable:true})
    followers?: FollowOrderByRelationAggregateInput;

    @Field(() => FollowOrderByRelationAggregateInput, {nullable:true})
    following?: FollowOrderByRelationAggregateInput;
}
