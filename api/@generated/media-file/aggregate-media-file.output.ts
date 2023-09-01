import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MediaFileCountAggregate } from './media-file-count-aggregate.output';
import { MediaFileAvgAggregate } from './media-file-avg-aggregate.output';
import { MediaFileSumAggregate } from './media-file-sum-aggregate.output';
import { MediaFileMinAggregate } from './media-file-min-aggregate.output';
import { MediaFileMaxAggregate } from './media-file-max-aggregate.output';

@ObjectType()
export class AggregateMediaFile {

    @Field(() => MediaFileCountAggregate, {nullable:true})
    _count?: MediaFileCountAggregate;

    @Field(() => MediaFileAvgAggregate, {nullable:true})
    _avg?: MediaFileAvgAggregate;

    @Field(() => MediaFileSumAggregate, {nullable:true})
    _sum?: MediaFileSumAggregate;

    @Field(() => MediaFileMinAggregate, {nullable:true})
    _min?: MediaFileMinAggregate;

    @Field(() => MediaFileMaxAggregate, {nullable:true})
    _max?: MediaFileMaxAggregate;
}
