import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaFileWhereInput } from './media-file-where.input';
import { Type } from 'class-transformer';
import { MediaFileOrderByWithRelationInput } from './media-file-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MediaFileWhereUniqueInput } from './media-file-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MediaFileCountAggregateInput } from './media-file-count-aggregate.input';
import { MediaFileAvgAggregateInput } from './media-file-avg-aggregate.input';
import { MediaFileSumAggregateInput } from './media-file-sum-aggregate.input';
import { MediaFileMinAggregateInput } from './media-file-min-aggregate.input';
import { MediaFileMaxAggregateInput } from './media-file-max-aggregate.input';

@ArgsType()
export class MediaFileAggregateArgs {

    @Field(() => MediaFileWhereInput, {nullable:true})
    @Type(() => MediaFileWhereInput)
    where?: MediaFileWhereInput;

    @Field(() => [MediaFileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MediaFileOrderByWithRelationInput>;

    @Field(() => MediaFileWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MediaFileWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MediaFileCountAggregateInput, {nullable:true})
    _count?: MediaFileCountAggregateInput;

    @Field(() => MediaFileAvgAggregateInput, {nullable:true})
    _avg?: MediaFileAvgAggregateInput;

    @Field(() => MediaFileSumAggregateInput, {nullable:true})
    _sum?: MediaFileSumAggregateInput;

    @Field(() => MediaFileMinAggregateInput, {nullable:true})
    _min?: MediaFileMinAggregateInput;

    @Field(() => MediaFileMaxAggregateInput, {nullable:true})
    _max?: MediaFileMaxAggregateInput;
}
