import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFollowersInput } from './user-create-or-connect-without-followers.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFollowersInput {

    @Field(() => UserCreateWithoutFollowersInput, {nullable:true})
    @Type(() => UserCreateWithoutFollowersInput)
    create?: UserCreateWithoutFollowersInput;

    @Field(() => UserCreateOrConnectWithoutFollowersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFollowersInput)
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}
