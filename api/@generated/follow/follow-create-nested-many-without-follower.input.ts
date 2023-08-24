import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowCreateWithoutFollowerInput } from './follow-create-without-follower.input';
import { Type } from 'class-transformer';
import { FollowCreateOrConnectWithoutFollowerInput } from './follow-create-or-connect-without-follower.input';
import { FollowCreateManyFollowerInputEnvelope } from './follow-create-many-follower-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FollowWhereUniqueInput } from './follow-where-unique.input';

@InputType()
export class FollowCreateNestedManyWithoutFollowerInput {

    @Field(() => [FollowCreateWithoutFollowerInput], {nullable:true})
    @Type(() => FollowCreateWithoutFollowerInput)
    create?: Array<FollowCreateWithoutFollowerInput>;

    @Field(() => [FollowCreateOrConnectWithoutFollowerInput], {nullable:true})
    @Type(() => FollowCreateOrConnectWithoutFollowerInput)
    connectOrCreate?: Array<FollowCreateOrConnectWithoutFollowerInput>;

    @Field(() => FollowCreateManyFollowerInputEnvelope, {nullable:true})
    @Type(() => FollowCreateManyFollowerInputEnvelope)
    createMany?: FollowCreateManyFollowerInputEnvelope;

    @Field(() => [FollowWhereUniqueInput], {nullable:true})
    @Type(() => FollowWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FollowWhereUniqueInput, 'id' | 'followerId_followingId'>>;
}
