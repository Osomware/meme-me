import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PostHashtagPostIdHashtagIdCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    postId!: number;

    @Field(() => Int, {nullable:false})
    hashtagId!: number;
}
