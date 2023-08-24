import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFollowingInput } from './user-update-without-following.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutFollowingInput {

    @Field(() => UserUpdateWithoutFollowingInput, {nullable:false})
    @Type(() => UserUpdateWithoutFollowingInput)
    update!: UserUpdateWithoutFollowingInput;

    @Field(() => UserCreateWithoutFollowingInput, {nullable:false})
    @Type(() => UserCreateWithoutFollowingInput)
    create!: UserCreateWithoutFollowingInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
