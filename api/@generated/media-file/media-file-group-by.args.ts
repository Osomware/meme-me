import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaFileWhereInput } from './media-file-where.input';
import { Type } from 'class-transformer';
import { MediaFileOrderByWithAggregationInput } from './media-file-order-by-with-aggregation.input';
import { MediaFileScalarFieldEnum } from './media-file-scalar-field.enum';
import { MediaFileScalarWhereWithAggregatesInput } from './media-file-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MediaFileCountAggregateInput } from './media-file-count-aggregate.input';
import { MediaFileAvgAggregateInput } from './media-file-avg-aggregate.input';
import { MediaFileSumAggregateInput } from './media-file-sum-aggregate.input';
import { MediaFileMinAggregateInput } from './media-file-min-aggregate.input';
import { MediaFileMaxAggregateInput } from './media-file-max-aggregate.input';

@ArgsType()
export class MediaFileGroupByArgs {

    @Field(() => MediaFileWhereInput, {nullable:true})
    @Type(() => MediaFileWhereInput)
    where?: MediaFileWhereInput;

    @Field(() => [MediaFileOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MediaFileOrderByWithAggregationInput>;

    @Field(() => [MediaFileScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MediaFileScalarFieldEnum>;

    @Field(() => MediaFileScalarWhereWithAggregatesInput, {nullable:true})
    having?: MediaFileScalarWhereWithAggregatesInput;

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
