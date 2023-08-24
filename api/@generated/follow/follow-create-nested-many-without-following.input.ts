import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowCreateWithoutFollowingInput } from './follow-create-without-following.input';
import { Type } from 'class-transformer';
import { FollowCreateOrConnectWithoutFollowingInput } from './follow-create-or-connect-without-following.input';
import { FollowCreateManyFollowingInputEnvelope } from './follow-create-many-following-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FollowWhereUniqueInput } from './follow-where-unique.input';

@InputType()
export class FollowCreateNestedManyWithoutFollowingInput {

    @Field(() => [FollowCreateWithoutFollowingInput], {nullable:true})
    @Type(() => FollowCreateWithoutFollowingInput)
    create?: Array<FollowCreateWithoutFollowingInput>;

    @Field(() => [FollowCreateOrConnectWithoutFollowingInput], {nullable:true})
    @Type(() => FollowCreateOrConnectWithoutFollowingInput)
    connectOrCreate?: Array<FollowCreateOrConnectWithoutFollowingInput>;

    @Field(() => FollowCreateManyFollowingInputEnvelope, {nullable:true})
    @Type(() => FollowCreateManyFollowingInputEnvelope)
    createMany?: FollowCreateManyFollowingInputEnvelope;

    @Field(() => [FollowWhereUniqueInput], {nullable:true})
    @Type(() => FollowWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FollowWhereUniqueInput, 'id' | 'followerId_followingId'>>;
}
