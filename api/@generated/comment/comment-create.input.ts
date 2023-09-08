import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
import { PostCreateNestedOneWithoutCommentsInput } from '../post/post-create-nested-one-without-comments.input';
import { CommentCreateNestedOneWithoutChildCommentsInput } from './comment-create-nested-one-without-child-comments.input';
import { CommentCreateNestedManyWithoutParentInput } from './comment-create-nested-many-without-parent.input';

@InputType()
export class CommentCreateInput {

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCommentsInput;

    @Field(() => PostCreateNestedOneWithoutCommentsInput, {nullable:false})
    post!: PostCreateNestedOneWithoutCommentsInput;

    @Field(() => CommentCreateNestedOneWithoutChildCommentsInput, {nullable:true})
    parent?: CommentCreateNestedOneWithoutChildCommentsInput;

    @Field(() => CommentCreateNestedManyWithoutParentInput, {nullable:true})
    childComments?: CommentCreateNestedManyWithoutParentInput;
}
