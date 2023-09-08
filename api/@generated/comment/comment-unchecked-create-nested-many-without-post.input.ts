import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutPostInput } from './comment-create-without-post.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutPostInput } from './comment-create-or-connect-without-post.input';
import { CommentCreateManyPostInputEnvelope } from './comment-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUncheckedCreateNestedManyWithoutPostInput {

    @Field(() => [CommentCreateWithoutPostInput], {nullable:true})
    @Type(() => CommentCreateWithoutPostInput)
    create?: Array<CommentCreateWithoutPostInput>;

    @Field(() => [CommentCreateOrConnectWithoutPostInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutPostInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutPostInput>;

    @Field(() => CommentCreateManyPostInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyPostInputEnvelope)
    createMany?: CommentCreateManyPostInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
