import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CommentUncheckedCreateNestedManyWithoutParentInput } from './comment-unchecked-create-nested-many-without-parent.input';

@InputType()
export class CommentUncheckedCreateWithoutPostInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:true})
    parentId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CommentUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    childComments?: CommentUncheckedCreateNestedManyWithoutParentInput;
}
