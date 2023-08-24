import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class FollowScalarWhereInput {

    @Field(() => [FollowScalarWhereInput], {nullable:true})
    AND?: Array<FollowScalarWhereInput>;

    @Field(() => [FollowScalarWhereInput], {nullable:true})
    OR?: Array<FollowScalarWhereInput>;

    @Field(() => [FollowScalarWhereInput], {nullable:true})
    NOT?: Array<FollowScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    followerId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    followingId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
