import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FollowWhereUniqueInput } from './follow-where-unique.input';
import { Type } from 'class-transformer';
import { FollowCreateWithoutFollowingInput } from './follow-create-without-following.input';

@InputType()
export class FollowCreateOrConnectWithoutFollowingInput {

    @Field(() => FollowWhereUniqueInput, {nullable:false})
    @Type(() => FollowWhereUniqueInput)
    where!: Prisma.AtLeast<FollowWhereUniqueInput, 'id' | 'followerId_followingId'>;

    @Field(() => FollowCreateWithoutFollowingInput, {nullable:false})
    @Type(() => FollowCreateWithoutFollowingInput)
    create!: FollowCreateWithoutFollowingInput;
}
