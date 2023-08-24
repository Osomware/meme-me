import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class FollowFollowerIdFollowingIdCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    followerId!: number;

    @Field(() => Int, {nullable:false})
    followingId!: number;
}
