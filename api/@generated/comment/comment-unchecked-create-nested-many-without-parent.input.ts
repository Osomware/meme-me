import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutParentInput } from './comment-create-without-parent.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutParentInput } from './comment-create-or-connect-without-parent.input';
import { CommentCreateManyParentInputEnvelope } from './comment-create-many-parent-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUncheckedCreateNestedManyWithoutParentInput {

    @Field(() => [CommentCreateWithoutParentInput], {nullable:true})
    @Type(() => CommentCreateWithoutParentInput)
    create?: Array<CommentCreateWithoutParentInput>;

    @Field(() => [CommentCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutParentInput>;

    @Field(() => CommentCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyParentInputEnvelope)
    createMany?: CommentCreateManyParentInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
