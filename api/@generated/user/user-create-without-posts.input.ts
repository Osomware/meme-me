import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Role } from '../prisma/role.enum';
import { LikeCreateNestedManyWithoutUserInput } from '../like/like-create-nested-many-without-user.input';
import { FollowCreateNestedManyWithoutFollowerInput } from '../follow/follow-create-nested-many-without-follower.input';
import { FollowCreateNestedManyWithoutFollowingInput } from '../follow/follow-create-nested-many-without-following.input';

@InputType()
export class UserCreateWithoutPostsInput {

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

    @Field(() => LikeCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: LikeCreateNestedManyWithoutUserInput;

    @Field(() => FollowCreateNestedManyWithoutFollowerInput, {nullable:true})
    followers?: FollowCreateNestedManyWithoutFollowerInput;

    @Field(() => FollowCreateNestedManyWithoutFollowingInput, {nullable:true})
    following?: FollowCreateNestedManyWithoutFollowingInput;
}
