import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FollowMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    followerId?: true;

    @Field(() => Boolean, {nullable:true})
    followingId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}
