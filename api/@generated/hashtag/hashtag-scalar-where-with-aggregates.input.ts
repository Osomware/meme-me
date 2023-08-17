import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class HashtagScalarWhereWithAggregatesInput {

    @Field(() => [HashtagScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HashtagScalarWhereWithAggregatesInput>;

    @Field(() => [HashtagScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HashtagScalarWhereWithAggregatesInput>;

    @Field(() => [HashtagScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HashtagScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    tag?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
