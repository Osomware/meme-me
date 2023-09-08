import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutPostInput } from './comment-create-without-post.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutPostInput } from './comment-create-or-connect-without-post.input';
import { CommentUpsertWithWhereUniqueWithoutPostInput } from './comment-upsert-with-where-unique-without-post.input';
import { CommentCreateManyPostInputEnvelope } from './comment-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutPostInput } from './comment-update-with-where-unique-without-post.input';
import { CommentUpdateManyWithWhereWithoutPostInput } from './comment-update-many-with-where-without-post.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUncheckedUpdateManyWithoutPostNestedInput {

    @Field(() => [CommentCreateWithoutPostInput], {nullable:true})
    @Type(() => CommentCreateWithoutPostInput)
    create?: Array<CommentCreateWithoutPostInput>;

    @Field(() => [CommentCreateOrConnectWithoutPostInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutPostInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutPostInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutPostInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutPostInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutPostInput>;

    @Field(() => CommentCreateManyPostInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyPostInputEnvelope)
    createMany?: CommentCreateManyPostInputEnvelope;

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

    @Field(() => [CommentUpdateWithWhereUniqueWithoutPostInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutPostInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutPostInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutPostInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutPostInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutPostInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}
