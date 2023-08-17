import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HashtagCountAggregate } from './hashtag-count-aggregate.output';
import { HashtagAvgAggregate } from './hashtag-avg-aggregate.output';
import { HashtagSumAggregate } from './hashtag-sum-aggregate.output';
import { HashtagMinAggregate } from './hashtag-min-aggregate.output';
import { HashtagMaxAggregate } from './hashtag-max-aggregate.output';

@ObjectType()
export class AggregateHashtag {

    @Field(() => HashtagCountAggregate, {nullable:true})
    _count?: HashtagCountAggregate;

    @Field(() => HashtagAvgAggregate, {nullable:true})
    _avg?: HashtagAvgAggregate;

    @Field(() => HashtagSumAggregate, {nullable:true})
    _sum?: HashtagSumAggregate;

    @Field(() => HashtagMinAggregate, {nullable:true})
    _min?: HashtagMinAggregate;

    @Field(() => HashtagMaxAggregate, {nullable:true})
    _max?: HashtagMaxAggregate;
}
