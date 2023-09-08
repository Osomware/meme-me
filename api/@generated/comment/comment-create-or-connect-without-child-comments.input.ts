import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutChildCommentsInput } from './comment-create-without-child-comments.input';

@InputType()
export class CommentCreateOrConnectWithoutChildCommentsInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentCreateWithoutChildCommentsInput, {nullable:false})
    @Type(() => CommentCreateWithoutChildCommentsInput)
    create!: CommentCreateWithoutChildCommentsInput;
}
