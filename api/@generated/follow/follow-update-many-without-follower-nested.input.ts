import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowCreateWithoutFollowerInput } from './follow-create-without-follower.input';
import { Type } from 'class-transformer';
import { FollowCreateOrConnectWithoutFollowerInput } from './follow-create-or-connect-without-follower.input';
import { FollowUpsertWithWhereUniqueWithoutFollowerInput } from './follow-upsert-with-where-unique-without-follower.input';
import { FollowCreateManyFollowerInputEnvelope } from './follow-create-many-follower-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FollowWhereUniqueInput } from './follow-where-unique.input';
import { FollowUpdateWithWhereUniqueWithoutFollowerInput } from './follow-update-with-where-unique-without-follower.input';
import { FollowUpdateManyWithWhereWithoutFollowerInput } from './follow-update-many-with-where-without-follower.input';
import { FollowScalarWhereInput } from './follow-scalar-where.input';

@InputType()
export class FollowUpdateManyWithoutFollowerNestedInput {

    @Field(() => [FollowCreateWithoutFollowerInput], {nullable:true})
    @Type(() => FollowCreateWithoutFollowerInput)
    create?: Array<FollowCreateWithoutFollowerInput>;

    @Field(() => [FollowCreateOrConnectWithoutFollowerInput], {nullable:true})
    @Type(() => FollowCreateOrConnectWithoutFollowerInput)
    connectOrCreate?: Array<FollowCreateOrConnectWithoutFollowerInput>;

    @Field(() => [FollowUpsertWithWhereUniqueWithoutFollowerInput], {nullable:true})
    @Type(() => FollowUpsertWithWhereUniqueWithoutFollowerInput)
    upsert?: Array<FollowUpsertWithWhereUniqueWithoutFollowerInput>;

    @Field(() => FollowCreateManyFollowerInputEnvelope, {nullable:true})
    @Type(() => FollowCreateManyFollowerInputEnvelope)
    createMany?: FollowCreateManyFollowerInputEnvelope;

    @Field(() => [FollowWhereUniqueInput], {nullable:true})
    @Type(() => FollowWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FollowWhereUniqueInput, 'id' | 'followerId_followingId'>>;

    @Field(() => [FollowWhereUniqueInput], {nullable:true})
    @Type(() => FollowWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FollowWhereUniqueInput, 'id' | 'followerId_followingId'>>;

    @Field(() => [FollowWhereUniqueInput], {nullable:true})
    @Type(() => FollowWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FollowWhereUniqueInput, 'id' | 'followerId_followingId'>>;

    @Field(() => [FollowWhereUniqueInput], {nullable:true})
    @Type(() => FollowWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FollowWhereUniqueInput, 'id' | 'followerId_followingId'>>;

    @Field(() => [FollowUpdateWithWhereUniqueWithoutFollowerInput], {nullable:true})
    @Type(() => FollowUpdateWithWhereUniqueWithoutFollowerInput)
    update?: Array<FollowUpdateWithWhereUniqueWithoutFollowerInput>;

    @Field(() => [FollowUpdateManyWithWhereWithoutFollowerInput], {nullable:true})
    @Type(() => FollowUpdateManyWithWhereWithoutFollowerInput)
    updateMany?: Array<FollowUpdateManyWithWhereWithoutFollowerInput>;

    @Field(() => [FollowScalarWhereInput], {nullable:true})
    @Type(() => FollowScalarWhereInput)
    deleteMany?: Array<FollowScalarWhereInput>;
}
