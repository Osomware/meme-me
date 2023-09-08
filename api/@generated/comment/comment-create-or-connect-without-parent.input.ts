import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutParentInput } from './comment-create-without-parent.input';

@InputType()
export class CommentCreateOrConnectWithoutParentInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentCreateWithoutParentInput, {nullable:false})
    @Type(() => CommentCreateWithoutParentInput)
    create!: CommentCreateWithoutParentInput;
}
