import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostHashtagWhereInput } from './post-hashtag-where.input';
import { Type } from 'class-transformer';
import { PostHashtagOrderByWithAggregationInput } from './post-hashtag-order-by-with-aggregation.input';
import { PostHashtagScalarFieldEnum } from './post-hashtag-scalar-field.enum';
import { PostHashtagScalarWhereWithAggregatesInput } from './post-hashtag-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PostHashtagCountAggregateInput } from './post-hashtag-count-aggregate.input';
import { PostHashtagAvgAggregateInput } from './post-hashtag-avg-aggregate.input';
import { PostHashtagSumAggregateInput } from './post-hashtag-sum-aggregate.input';
import { PostHashtagMinAggregateInput } from './post-hashtag-min-aggregate.input';
import { PostHashtagMaxAggregateInput } from './post-hashtag-max-aggregate.input';

@ArgsType()
export class PostHashtagGroupByArgs {

    @Field(() => PostHashtagWhereInput, {nullable:true})
    @Type(() => PostHashtagWhereInput)
    where?: PostHashtagWhereInput;

    @Field(() => [PostHashtagOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PostHashtagOrderByWithAggregationInput>;

    @Field(() => [PostHashtagScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PostHashtagScalarFieldEnum>;

    @Field(() => PostHashtagScalarWhereWithAggregatesInput, {nullable:true})
    having?: PostHashtagScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PostHashtagCountAggregateInput, {nullable:true})
    _count?: PostHashtagCountAggregateInput;

    @Field(() => PostHashtagAvgAggregateInput, {nullable:true})
    _avg?: PostHashtagAvgAggregateInput;

    @Field(() => PostHashtagSumAggregateInput, {nullable:true})
    _sum?: PostHashtagSumAggregateInput;

    @Field(() => PostHashtagMinAggregateInput, {nullable:true})
    _min?: PostHashtagMinAggregateInput;

    @Field(() => PostHashtagMaxAggregateInput, {nullable:true})
    _max?: PostHashtagMaxAggregateInput;
}
