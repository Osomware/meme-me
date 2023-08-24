import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowWhereInput } from './follow-where.input';

@InputType()
export class FollowListRelationFilter {

    @Field(() => FollowWhereInput, {nullable:true})
    every?: FollowWhereInput;

    @Field(() => FollowWhereInput, {nullable:true})
    some?: FollowWhereInput;

    @Field(() => FollowWhereInput, {nullable:true})
    none?: FollowWhereInput;
}
