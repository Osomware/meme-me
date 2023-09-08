import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutParentInput } from './comment-update-without-parent.input';
import { CommentCreateWithoutParentInput } from './comment-create-without-parent.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutParentInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateWithoutParentInput, {nullable:false})
    @Type(() => CommentUpdateWithoutParentInput)
    update!: CommentUpdateWithoutParentInput;

    @Field(() => CommentCreateWithoutParentInput, {nullable:false})
    @Type(() => CommentCreateWithoutParentInput)
    create!: CommentCreateWithoutParentInput;
}
