import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Post } from '../post/post.model';
import { Hashtag } from '../hashtag/hashtag.model';

@ObjectType()
export class PostHashtag {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    postId!: number;

    @Field(() => Int, {nullable:false})
    hashtagId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Post, {nullable:false})
    post?: Post;

    @Field(() => Hashtag, {nullable:false})
    hashtag?: Hashtag;
}
