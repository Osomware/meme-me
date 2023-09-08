import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutParentInput } from './comment-update-without-parent.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutParentInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateWithoutParentInput, {nullable:false})
    @Type(() => CommentUpdateWithoutParentInput)
    data!: CommentUpdateWithoutParentInput;
}
