import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostHashtagWhereInput } from './post-hashtag-where.input';
import { Type } from 'class-transformer';
import { PostHashtagOrderByWithRelationInput } from './post-hashtag-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PostHashtagWhereUniqueInput } from './post-hashtag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PostHashtagCountAggregateInput } from './post-hashtag-count-aggregate.input';
import { PostHashtagAvgAggregateInput } from './post-hashtag-avg-aggregate.input';
import { PostHashtagSumAggregateInput } from './post-hashtag-sum-aggregate.input';
import { PostHashtagMinAggregateInput } from './post-hashtag-min-aggregate.input';
import { PostHashtagMaxAggregateInput } from './post-hashtag-max-aggregate.input';

@ArgsType()
export class PostHashtagAggregateArgs {

    @Field(() => PostHashtagWhereInput, {nullable:true})
    @Type(() => PostHashtagWhereInput)
    where?: PostHashtagWhereInput;

    @Field(() => [PostHashtagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostHashtagOrderByWithRelationInput>;

    @Field(() => PostHashtagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PostHashtagWhereUniqueInput, 'id' | 'postId_hashtagId'>;

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
