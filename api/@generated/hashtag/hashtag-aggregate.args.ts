import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HashtagWhereInput } from './hashtag-where.input';
import { Type } from 'class-transformer';
import { HashtagOrderByWithRelationInput } from './hashtag-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HashtagCountAggregateInput } from './hashtag-count-aggregate.input';
import { HashtagAvgAggregateInput } from './hashtag-avg-aggregate.input';
import { HashtagSumAggregateInput } from './hashtag-sum-aggregate.input';
import { HashtagMinAggregateInput } from './hashtag-min-aggregate.input';
import { HashtagMaxAggregateInput } from './hashtag-max-aggregate.input';

@ArgsType()
export class HashtagAggregateArgs {

    @Field(() => HashtagWhereInput, {nullable:true})
    @Type(() => HashtagWhereInput)
    where?: HashtagWhereInput;

    @Field(() => [HashtagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HashtagOrderByWithRelationInput>;

    @Field(() => HashtagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HashtagWhereUniqueInput, 'id' | 'tag'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HashtagCountAggregateInput, {nullable:true})
    _count?: HashtagCountAggregateInput;

    @Field(() => HashtagAvgAggregateInput, {nullable:true})
    _avg?: HashtagAvgAggregateInput;

    @Field(() => HashtagSumAggregateInput, {nullable:true})
    _sum?: HashtagSumAggregateInput;

    @Field(() => HashtagMinAggregateInput, {nullable:true})
    _min?: HashtagMinAggregateInput;

    @Field(() => HashtagMaxAggregateInput, {nullable:true})
    _max?: HashtagMaxAggregateInput;
}
