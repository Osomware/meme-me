import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FollowWhereUniqueInput } from './follow-where-unique.input';
import { Type } from 'class-transformer';
import { FollowCreateWithoutFollowerInput } from './follow-create-without-follower.input';

@InputType()
export class FollowCreateOrConnectWithoutFollowerInput {

    @Field(() => FollowWhereUniqueInput, {nullable:false})
    @Type(() => FollowWhereUniqueInput)
    where!: Prisma.AtLeast<FollowWhereUniqueInput, 'id' | 'followerId_followingId'>;

    @Field(() => FollowCreateWithoutFollowerInput, {nullable:false})
    @Type(() => FollowCreateWithoutFollowerInput)
    create!: FollowCreateWithoutFollowerInput;
}
