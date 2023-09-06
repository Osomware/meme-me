import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LikeUserIdPostIdCompoundUniqueInput } from './like-user-id-post-id-compound-unique.input';
import { LikeWhereInput } from './like-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { PostRelationFilter } from '../post/post-relation-filter.input';

@InputType()
export class LikeWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => LikeUserIdPostIdCompoundUniqueInput, {nullable:true})
    userId_postId?: LikeUserIdPostIdCompoundUniqueInput;

    @Field(() => [LikeWhereInput], {nullable:true})
    AND?: Array<LikeWhereInput>;

    @Field(() => [LikeWhereInput], {nullable:true})
    OR?: Array<LikeWhereInput>;

    @Field(() => [LikeWhereInput], {nullable:true})
    NOT?: Array<LikeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    postId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => PostRelationFilter, {nullable:true})
    post?: PostRelationFilter;
}
