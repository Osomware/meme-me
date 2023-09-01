import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MediaFileCountAggregate } from './media-file-count-aggregate.output';
import { MediaFileAvgAggregate } from './media-file-avg-aggregate.output';
import { MediaFileSumAggregate } from './media-file-sum-aggregate.output';
import { MediaFileMinAggregate } from './media-file-min-aggregate.output';
import { MediaFileMaxAggregate } from './media-file-max-aggregate.output';

@ObjectType()
export class MediaFileGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Int, {nullable:false})
    postId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
