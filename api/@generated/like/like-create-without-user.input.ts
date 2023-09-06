import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateNestedOneWithoutLikesInput } from '../post/post-create-nested-one-without-likes.input';

@InputType()
export class LikeCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PostCreateNestedOneWithoutLikesInput, {nullable:false})
    post!: PostCreateNestedOneWithoutLikesInput;
}
