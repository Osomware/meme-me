import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FollowWhereInput } from './follow-where.input';
import { Type } from 'class-transformer';
import { FollowOrderByWithRelationInput } from './follow-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FollowWhereUniqueInput } from './follow-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FollowCountAggregateInput } from './follow-count-aggregate.input';
import { FollowAvgAggregateInput } from './follow-avg-aggregate.input';
import { FollowSumAggregateInput } from './follow-sum-aggregate.input';
import { FollowMinAggregateInput } from './follow-min-aggregate.input';
import { FollowMaxAggregateInput } from './follow-max-aggregate.input';

@ArgsType()
export class FollowAggregateArgs {

    @Field(() => FollowWhereInput, {nullable:true})
    @Type(() => FollowWhereInput)
    where?: FollowWhereInput;

    @Field(() => [FollowOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FollowOrderByWithRelationInput>;

    @Field(() => FollowWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FollowWhereUniqueInput, 'id' | 'followerId_followingId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FollowCountAggregateInput, {nullable:true})
    _count?: FollowCountAggregateInput;

    @Field(() => FollowAvgAggregateInput, {nullable:true})
    _avg?: FollowAvgAggregateInput;

    @Field(() => FollowSumAggregateInput, {nullable:true})
    _sum?: FollowSumAggregateInput;

    @Field(() => FollowMinAggregateInput, {nullable:true})
    _min?: FollowMinAggregateInput;

    @Field(() => FollowMaxAggregateInput, {nullable:true})
    _max?: FollowMaxAggregateInput;
}
