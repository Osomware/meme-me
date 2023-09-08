import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentUpdateWithoutChildCommentsInput } from './comment-update-without-child-comments.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutChildCommentsInput } from './comment-create-without-child-comments.input';
import { CommentWhereInput } from './comment-where.input';

@InputType()
export class CommentUpsertWithoutChildCommentsInput {

    @Field(() => CommentUpdateWithoutChildCommentsInput, {nullable:false})
    @Type(() => CommentUpdateWithoutChildCommentsInput)
    update!: CommentUpdateWithoutChildCommentsInput;

    @Field(() => CommentCreateWithoutChildCommentsInput, {nullable:false})
    @Type(() => CommentCreateWithoutChildCommentsInput)
    create!: CommentCreateWithoutChildCommentsInput;

    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: CommentWhereInput;
}
