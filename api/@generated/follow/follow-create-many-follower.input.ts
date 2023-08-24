import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class FollowCreateManyFollowerInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    followingId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
