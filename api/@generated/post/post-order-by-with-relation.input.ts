import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MediaFileOrderByRelationAggregateInput } from '../media-file/media-file-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { PostHashtagOrderByRelationAggregateInput } from '../post-hashtag/post-hashtag-order-by-relation-aggregate.input';
import { LikeOrderByRelationAggregateInput } from '../like/like-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';

@InputType()
export class PostOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    title?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isHideLikeAndCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isTurnOffComment?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => MediaFileOrderByRelationAggregateInput, {nullable:true})
    mediaFiles?: MediaFileOrderByRelationAggregateInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => PostHashtagOrderByRelationAggregateInput, {nullable:true})
    postHashtags?: PostHashtagOrderByRelationAggregateInput;

    @Field(() => LikeOrderByRelationAggregateInput, {nullable:true})
    likes?: LikeOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: CommentOrderByRelationAggregateInput;
}
