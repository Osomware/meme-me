import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateNestedOneWithoutCommentsInput } from '../post/post-create-nested-one-without-comments.input';
import { CommentCreateNestedOneWithoutChildCommentsInput } from './comment-create-nested-one-without-child-comments.input';
import { CommentCreateNestedManyWithoutParentInput } from './comment-create-nested-many-without-parent.input';

@InputType()
export class CommentCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PostCreateNestedOneWithoutCommentsInput, {nullable:false})
    post!: PostCreateNestedOneWithoutCommentsInput;

    @Field(() => CommentCreateNestedOneWithoutChildCommentsInput, {nullable:true})
    parent?: CommentCreateNestedOneWithoutChildCommentsInput;

    @Field(() => CommentCreateNestedManyWithoutParentInput, {nullable:true})
    childComments?: CommentCreateNestedManyWithoutParentInput;
}
