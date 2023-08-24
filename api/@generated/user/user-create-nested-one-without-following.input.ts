import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFollowingInput } from './user-create-or-connect-without-following.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFollowingInput {

    @Field(() => UserCreateWithoutFollowingInput, {nullable:true})
    @Type(() => UserCreateWithoutFollowingInput)
    create?: UserCreateWithoutFollowingInput;

    @Field(() => UserCreateOrConnectWithoutFollowingInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFollowingInput)
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}
