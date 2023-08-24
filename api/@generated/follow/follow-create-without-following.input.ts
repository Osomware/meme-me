import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutFollowersInput } from '../user/user-create-nested-one-without-followers.input';

@InputType()
export class FollowCreateWithoutFollowingInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutFollowersInput, {nullable:false})
    follower!: UserCreateNestedOneWithoutFollowersInput;
}
