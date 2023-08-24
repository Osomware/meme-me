import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class FollowUncheckedCreateWithoutFollowingInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    followerId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
