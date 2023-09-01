import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaFileCreateWithoutPostInput } from './media-file-create-without-post.input';
import { Type } from 'class-transformer';
import { MediaFileCreateOrConnectWithoutPostInput } from './media-file-create-or-connect-without-post.input';
import { MediaFileCreateManyPostInputEnvelope } from './media-file-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MediaFileWhereUniqueInput } from './media-file-where-unique.input';

@InputType()
export class MediaFileCreateNestedManyWithoutPostInput {

    @Field(() => [MediaFileCreateWithoutPostInput], {nullable:true})
    @Type(() => MediaFileCreateWithoutPostInput)
    create?: Array<MediaFileCreateWithoutPostInput>;

    @Field(() => [MediaFileCreateOrConnectWithoutPostInput], {nullable:true})
    @Type(() => MediaFileCreateOrConnectWithoutPostInput)
    connectOrCreate?: Array<MediaFileCreateOrConnectWithoutPostInput>;

    @Field(() => MediaFileCreateManyPostInputEnvelope, {nullable:true})
    @Type(() => MediaFileCreateManyPostInputEnvelope)
    createMany?: MediaFileCreateManyPostInputEnvelope;

    @Field(() => [MediaFileWhereUniqueInput], {nullable:true})
    @Type(() => MediaFileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MediaFileWhereUniqueInput, 'id'>>;
}
