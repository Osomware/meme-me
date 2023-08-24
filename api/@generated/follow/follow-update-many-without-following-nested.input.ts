import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowCreateWithoutFollowingInput } from './follow-create-without-following.input';
import { Type } from 'class-transformer';
import { FollowCreateOrConnectWithoutFollowingInput } from './follow-create-or-connect-without-following.input';
import { FollowUpsertWithWhereUniqueWithoutFollowingInput } from './follow-upsert-with-where-unique-without-following.input';
import { FollowCreateManyFollowingInputEnvelope } from './follow-create-many-following-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FollowWhereUniqueInput } from './follow-where-unique.input';
import { FollowUpdateWithWhereUniqueWithoutFollowingInput } from './follow-update-with-where-unique-without-following.input';
import { FollowUpdateManyWithWhereWithoutFollowingInput } from './follow-update-many-with-where-without-following.input';
import { FollowScalarWhereInput } from './follow-scalar-where.input';

@InputType()
export class FollowUpdateManyWithoutFollowingNestedInput {

    @Field(() => [FollowCreateWithoutFollowingInput], {nullable:true})
    @Type(() => FollowCreateWithoutFollowingInput)
    create?: Array<FollowCreateWithoutFollowingInput>;

    @Field(() => [FollowCreateOrConnectWithoutFollowingInput], {nullable:true})
    @Type(() => FollowCreateOrConnectWithoutFollowingInput)
    connectOrCreate?: Array<FollowCreateOrConnectWithoutFollowingInput>;

    @Field(() => [FollowUpsertWithWhereUniqueWithoutFollowingInput], {nullable:true})
    @Type(() => FollowUpsertWithWhereUniqueWithoutFollowingInput)
    upsert?: Array<FollowUpsertWithWhereUniqueWithoutFollowingInput>;

    @Field(() => FollowCreateManyFollowingInputEnvelope, {nullable:true})
    @Type(() => FollowCreateManyFollowingInputEnvelope)
    createMany?: FollowCreateManyFollowingInputEnvelope;

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

    @Field(() => [FollowUpdateWithWhereUniqueWithoutFollowingInput], {nullable:true})
    @Type(() => FollowUpdateWithWhereUniqueWithoutFollowingInput)
    update?: Array<FollowUpdateWithWhereUniqueWithoutFollowingInput>;

    @Field(() => [FollowUpdateManyWithWhereWithoutFollowingInput], {nullable:true})
    @Type(() => FollowUpdateManyWithWhereWithoutFollowingInput)
    updateMany?: Array<FollowUpdateManyWithWhereWithoutFollowingInput>;

    @Field(() => [FollowScalarWhereInput], {nullable:true})
    @Type(() => FollowScalarWhereInput)
    deleteMany?: Array<FollowScalarWhereInput>;
}
