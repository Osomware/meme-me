import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FollowScalarWhereWithAggregatesInput {

    @Field(() => [FollowScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FollowScalarWhereWithAggregatesInput>;

    @Field(() => [FollowScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FollowScalarWhereWithAggregatesInput>;

    @Field(() => [FollowScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FollowScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    followerId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    followingId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
