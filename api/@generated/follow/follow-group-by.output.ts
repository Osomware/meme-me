import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FollowCountAggregate } from './follow-count-aggregate.output';
import { FollowAvgAggregate } from './follow-avg-aggregate.output';
import { FollowSumAggregate } from './follow-sum-aggregate.output';
import { FollowMinAggregate } from './follow-min-aggregate.output';
import { FollowMaxAggregate } from './follow-max-aggregate.output';

@ObjectType()
export class FollowGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    followerId!: number;

    @Field(() => Int, {nullable:false})
    followingId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => FollowCountAggregate, {nullable:true})
    _count?: FollowCountAggregate;

    @Field(() => FollowAvgAggregate, {nullable:true})
    _avg?: FollowAvgAggregate;

    @Field(() => FollowSumAggregate, {nullable:true})
    _sum?: FollowSumAggregate;

    @Field(() => FollowMinAggregate, {nullable:true})
    _min?: FollowMinAggregate;

    @Field(() => FollowMaxAggregate, {nullable:true})
    _max?: FollowMaxAggregate;
}
