import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutChildCommentsInput } from './comment-create-without-child-comments.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutChildCommentsInput } from './comment-create-or-connect-without-child-comments.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateNestedOneWithoutChildCommentsInput {

    @Field(() => CommentCreateWithoutChildCommentsInput, {nullable:true})
    @Type(() => CommentCreateWithoutChildCommentsInput)
    create?: CommentCreateWithoutChildCommentsInput;

    @Field(() => CommentCreateOrConnectWithoutChildCommentsInput, {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutChildCommentsInput)
    connectOrCreate?: CommentCreateOrConnectWithoutChildCommentsInput;

    @Field(() => CommentWhereUniqueInput, {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}
