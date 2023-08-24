import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFollowersInput } from './user-create-or-connect-without-followers.input';
import { UserUpsertWithoutFollowersInput } from './user-upsert-without-followers.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutFollowersInput } from './user-update-to-one-with-where-without-followers.input';

@InputType()
export class UserUpdateOneRequiredWithoutFollowersNestedInput {

    @Field(() => UserCreateWithoutFollowersInput, {nullable:true})
    @Type(() => UserCreateWithoutFollowersInput)
    create?: UserCreateWithoutFollowersInput;

    @Field(() => UserCreateOrConnectWithoutFollowersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFollowersInput)
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput;

    @Field(() => UserUpsertWithoutFollowersInput, {nullable:true})
    @Type(() => UserUpsertWithoutFollowersInput)
    upsert?: UserUpsertWithoutFollowersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserUpdateToOneWithWhereWithoutFollowersInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutFollowersInput)
    update?: UserUpdateToOneWithWhereWithoutFollowersInput;
}
