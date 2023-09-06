import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PostCount {

    @Field(() => Int, {nullable:false})
    mediaFiles?: number;

    @Field(() => Int, {nullable:false})
    postHashtags?: number;

    @Field(() => Int, {nullable:false})
    likes?: number;
}
