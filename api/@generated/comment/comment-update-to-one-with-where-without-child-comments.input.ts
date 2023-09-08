import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutChildCommentsInput } from './comment-update-without-child-comments.input';

@InputType()
export class CommentUpdateToOneWithWhereWithoutChildCommentsInput {

    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: CommentWhereInput;

    @Field(() => CommentUpdateWithoutChildCommentsInput, {nullable:false})
    @Type(() => CommentUpdateWithoutChildCommentsInput)
    data!: CommentUpdateWithoutChildCommentsInput;
}
