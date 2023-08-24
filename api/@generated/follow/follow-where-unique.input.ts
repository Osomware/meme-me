import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FollowFollowerIdFollowingIdCompoundUniqueInput } from './follow-follower-id-following-id-compound-unique.input';
import { FollowWhereInput } from './follow-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class FollowWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => FollowFollowerIdFollowingIdCompoundUniqueInput, {nullable:true})
    followerId_followingId?: FollowFollowerIdFollowingIdCompoundUniqueInput;

    @Field(() => [FollowWhereInput], {nullable:true})
    AND?: Array<FollowWhereInput>;

    @Field(() => [FollowWhereInput], {nullable:true})
    OR?: Array<FollowWhereInput>;

    @Field(() => [FollowWhereInput], {nullable:true})
    NOT?: Array<FollowWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    followerId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    followingId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    follower?: UserRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    following?: UserRelationFilter;
}
