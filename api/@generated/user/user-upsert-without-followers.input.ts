import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFollowersInput } from './user-update-without-followers.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutFollowersInput {

    @Field(() => UserUpdateWithoutFollowersInput, {nullable:false})
    @Type(() => UserUpdateWithoutFollowersInput)
    update!: UserUpdateWithoutFollowersInput;

    @Field(() => UserCreateWithoutFollowersInput, {nullable:false})
    @Type(() => UserCreateWithoutFollowersInput)
    create!: UserCreateWithoutFollowersInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
