import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutFollowersInput } from '../user/user-create-nested-one-without-followers.input';
import { UserCreateNestedOneWithoutFollowingInput } from '../user/user-create-nested-one-without-following.input';

@InputType()
export class FollowCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutFollowersInput, {nullable:false})
    follower!: UserCreateNestedOneWithoutFollowersInput;

    @Field(() => UserCreateNestedOneWithoutFollowingInput, {nullable:false})
    following!: UserCreateNestedOneWithoutFollowingInput;
}
