import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PostUpdateOneRequiredWithoutCommentsNestedInput } from '../post/post-update-one-required-without-comments-nested.input';
import { CommentUpdateOneWithoutChildCommentsNestedInput } from './comment-update-one-without-child-comments-nested.input';
import { CommentUpdateManyWithoutParentNestedInput } from './comment-update-many-without-parent-nested.input';

@InputType()
export class CommentUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PostUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput;

    @Field(() => CommentUpdateOneWithoutChildCommentsNestedInput, {nullable:true})
    parent?: CommentUpdateOneWithoutChildCommentsNestedInput;

    @Field(() => CommentUpdateManyWithoutParentNestedInput, {nullable:true})
    childComments?: CommentUpdateManyWithoutParentNestedInput;
}
