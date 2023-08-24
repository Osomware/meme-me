import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFollowingInput } from './user-create-or-connect-without-following.input';
import { UserUpsertWithoutFollowingInput } from './user-upsert-without-following.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutFollowingInput } from './user-update-to-one-with-where-without-following.input';

@InputType()
export class UserUpdateOneRequiredWithoutFollowingNestedInput {

    @Field(() => UserCreateWithoutFollowingInput, {nullable:true})
    @Type(() => UserCreateWithoutFollowingInput)
    create?: UserCreateWithoutFollowingInput;

    @Field(() => UserCreateOrConnectWithoutFollowingInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFollowingInput)
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput;

    @Field(() => UserUpsertWithoutFollowingInput, {nullable:true})
    @Type(() => UserUpsertWithoutFollowingInput)
    upsert?: UserUpsertWithoutFollowingInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserUpdateToOneWithWhereWithoutFollowingInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutFollowingInput)
    update?: UserUpdateToOneWithWhereWithoutFollowingInput;
}
