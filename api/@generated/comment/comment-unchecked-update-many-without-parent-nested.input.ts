import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutParentInput } from './comment-create-without-parent.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutParentInput } from './comment-create-or-connect-without-parent.input';
import { CommentUpsertWithWhereUniqueWithoutParentInput } from './comment-upsert-with-where-unique-without-parent.input';
import { CommentCreateManyParentInputEnvelope } from './comment-create-many-parent-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutParentInput } from './comment-update-with-where-unique-without-parent.input';
import { CommentUpdateManyWithWhereWithoutParentInput } from './comment-update-many-with-where-without-parent.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUncheckedUpdateManyWithoutParentNestedInput {

    @Field(() => [CommentCreateWithoutParentInput], {nullable:true})
    @Type(() => CommentCreateWithoutParentInput)
    create?: Array<CommentCreateWithoutParentInput>;

    @Field(() => [CommentCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutParentInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutParentInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutParentInput>;

    @Field(() => CommentCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyParentInputEnvelope)
    createMany?: CommentCreateManyParentInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutParentInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutParentInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutParentInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutParentInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutParentInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}
