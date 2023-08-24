import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FollowMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    followerId?: number;

    @Field(() => Int, {nullable:true})
    followingId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
