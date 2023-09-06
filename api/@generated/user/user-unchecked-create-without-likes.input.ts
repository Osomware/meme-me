import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Role } from '../prisma/role.enum';
import { PostUncheckedCreateNestedManyWithoutUserInput } from '../post/post-unchecked-create-nested-many-without-user.input';
import { FollowUncheckedCreateNestedManyWithoutFollowerInput } from '../follow/follow-unchecked-create-nested-many-without-follower.input';
import { FollowUncheckedCreateNestedManyWithoutFollowingInput } from '../follow/follow-unchecked-create-nested-many-without-following.input';

@InputType()
export class UserUncheckedCreateWithoutLikesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(5)
    username!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(6)
    password!: string;

    @Field(() => String, {nullable:true})
    refreshToken?: string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PostUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    posts?: PostUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => FollowUncheckedCreateNestedManyWithoutFollowerInput, {nullable:true})
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput;

    @Field(() => FollowUncheckedCreateNestedManyWithoutFollowingInput, {nullable:true})
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput;
}
