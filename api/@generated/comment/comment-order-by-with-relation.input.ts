import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { PostOrderByWithRelationInput } from '../post/post-order-by-with-relation.input';
import { CommentOrderByRelationAggregateInput } from './comment-order-by-relation-aggregate.input';

@InputType()
export class CommentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    parentId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => PostOrderByWithRelationInput, {nullable:true})
    post?: PostOrderByWithRelationInput;

    @Field(() => CommentOrderByWithRelationInput, {nullable:true})
    parent?: CommentOrderByWithRelationInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    childComments?: CommentOrderByRelationAggregateInput;
}
