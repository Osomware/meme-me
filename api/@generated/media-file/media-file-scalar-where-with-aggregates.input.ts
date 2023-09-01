import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class MediaFileScalarWhereWithAggregatesInput {

    @Field(() => [MediaFileScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MediaFileScalarWhereWithAggregatesInput>;

    @Field(() => [MediaFileScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MediaFileScalarWhereWithAggregatesInput>;

    @Field(() => [MediaFileScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MediaFileScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    key?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    postId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
