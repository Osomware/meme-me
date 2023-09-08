import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutChildCommentsInput } from './comment-create-without-child-comments.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutChildCommentsInput } from './comment-create-or-connect-without-child-comments.input';
import { CommentUpsertWithoutChildCommentsInput } from './comment-upsert-without-child-comments.input';
import { CommentWhereInput } from './comment-where.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateToOneWithWhereWithoutChildCommentsInput } from './comment-update-to-one-with-where-without-child-comments.input';

@InputType()
export class CommentUpdateOneWithoutChildCommentsNestedInput {

    @Field(() => CommentCreateWithoutChildCommentsInput, {nullable:true})
    @Type(() => CommentCreateWithoutChildCommentsInput)
    create?: CommentCreateWithoutChildCommentsInput;

    @Field(() => CommentCreateOrConnectWithoutChildCommentsInput, {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutChildCommentsInput)
    connectOrCreate?: CommentCreateOrConnectWithoutChildCommentsInput;

    @Field(() => CommentUpsertWithoutChildCommentsInput, {nullable:true})
    @Type(() => CommentUpsertWithoutChildCommentsInput)
    upsert?: CommentUpsertWithoutChildCommentsInput;

    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    disconnect?: CommentWhereInput;

    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    delete?: CommentWhereInput;

    @Field(() => CommentWhereUniqueInput, {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateToOneWithWhereWithoutChildCommentsInput, {nullable:true})
    @Type(() => CommentUpdateToOneWithWhereWithoutChildCommentsInput)
    update?: CommentUpdateToOneWithWhereWithoutChildCommentsInput;
}
